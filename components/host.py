from queue import Queue
from components import protocols
from components.logger import Logger
from components.daemon_thread import DaemonThread
import uuid
import time


class Host:
    """ Host object acting as either a router node or an application host node. """

    def __init__(self, host_id, cqc):
        """
        Return the most important thing about a person.

        Args:
            host_id: The ID of the host
            cqc: The CQC for this host

        """
        self.host_id = host_id
        self._packet_queue = Queue()
        self._stop_thread = False
        self._queue_processor_thread = None
        self._data_qubit_store = {}
        self._EPR_store = {}
        self._classical = []
        self.connections = []
        self.cqc = cqc
        # Frequency of queue processing
        self.delay = 0.1
        self.logger = Logger.get_instance()
        # Size of quantum memories (default -1, unlimited)
        self.memory_limit = -1
        # Packet sequence numbers per connection
        self.seq_number = {}

    def _get_sequence_number(self, receiver):
        """
        Returns the sequence number of connection with a receiver.

        Args:
            receiver(string): The ID of the receiver

        Returns:
            int: If a connection is present returns the sequence number , otherwise returns 0.

        """
        if receiver not in self.seq_number:
            self.seq_number[receiver] = 0
        else:
            self.seq_number[receiver] += 1
        return self.seq_number[receiver]

    def _process_packet(self, packet):
        """
        Processes the received packet.

        Args:
            packet (dict): The received packet
        """

        sender = packet['sender']
        result = protocols.process(packet)
        if result is not None:
            self._classical.append({
                'sender': sender,
                'message': result['message'],
                'sequence_number': result['sequence_number']
            })
            if result['message'] != protocols.ACK:
                self.logger.log(self.cqc.name + ' received ' + result['message'] + ' with sequence number ' + str(
                    result['sequence_number']))

    def _process_queue(self):

        """
        Runs a thread for processing the packets in the packet queue.
        """

        self.logger.log('Host ' + self.host_id + ' started processing')
        while True:
            if self._stop_thread:
                break

            time.sleep(self.delay)
            if not self._packet_queue.empty():
                packet = self._packet_queue.get()
                if not packet:
                    raise Exception('empty message')
                DaemonThread(self._process_packet, args=(packet,))

    def rec_packet(self, packet):
        """
        Puts the packet into the packet queue of the host.

        Args:
            packet: Received packet.
        """
        self._packet_queue.put(packet)

    def add_connection(self, receiver_id):
        """
        Adds the connection to host with ID *receiver_id*.

        Args:
            receiver_id (string): The ID of the host to connect with.

        """
        self.connections.append(receiver_id)

    def send_ack(self, receiver, seq_number):
        """
        Sends the classical message to the receiver host with
        ID:receiver

        Args:
            receiver (string): The ID of the host to send the message.
            seq_number (int): Sequence number of the acknowleged packet.

        """
        packet = protocols.encode(sender=self.host_id,
                                  receiver=receiver,
                                  protocol=protocols.SEND_CLASSICAL,
                                  payload=protocols.ACK,
                                  payload_type=protocols.SIGNAL,
                                  sequence_num=seq_number,
                                  await_ack=False)
        self._packet_queue.put(packet)

    def await_ack(self, sequence_number):
        """
        Block until an ACK for packet with sequence number arrives.
        Args:
            sequence_number: The sequence number to wait for.

        """

        def wait():
            while True:
                time.sleep(0.1)
                messages = self.get_classical_messages()
                for m in messages:
                    if m['message'] == protocols.ACK and m['sequence_number'] == sequence_number:
                        return

        thread = DaemonThread(wait)
        thread.join()

    def send_classical(self, receiver_id, message, await_ack=False):
        """
        Sends the classical message to the receiver host with
        ID:receiver

        Args:
            receiver_id (string): The ID of the host to send the message.
            message (string): The classical message to send.
            await_ack (bool): If sender should wait for an ACK.

        """
        seq_num = self._get_sequence_number(receiver_id)
        packet = protocols.encode(sender=self.host_id,
                                  receiver=receiver_id,
                                  protocol=protocols.SEND_CLASSICAL,
                                  payload=message,
                                  payload_type=protocols.CLASSICAL,
                                  sequence_num=seq_num,
                                  await_ack=await_ack)
        self._packet_queue.put(packet)

        if packet[protocols.AWAIT_ACK]:
            Logger.get_instance().log('awaiting classical ACK from ' + receiver_id)
            self.await_ack(packet[protocols.SEQUENCE_NUMBER])

    def send_epr(self, receiver_id, q_id=None, await_ack=False):
        """
        Establish an EPR pair with the receiver and return the qubit
        ID of pair.

        Args:
            receiver_id (string): The receiver ID
            q_id (string): The ID of the qubit
            await_ack (bool): If sender should wait for an ACK.
        Returns:
            string: The qubit ID of the EPR pair.
        """
        if q_id is None:
            q_id = str(uuid.uuid4())

        packet = protocols.encode(sender=self.host_id,
                                  receiver=receiver_id,
                                  protocol=protocols.SEND_EPR,
                                  payload={'q_id': q_id},
                                  payload_type=protocols.SIGNAL,
                                  sequence_num=self._get_sequence_number(receiver_id),
                                  await_ack=await_ack)
        self.logger.log(self.host_id + " sends EPR to " + receiver_id)
        self._packet_queue.put(packet)

        if packet[protocols.AWAIT_ACK]:
            Logger.get_instance().log('awaiting epr ACK from ' + receiver_id)
            self.await_ack(packet[protocols.SEQUENCE_NUMBER])

        return q_id

    def send_teleport(self, receiver_id, q, await_ack=False):
        """
        Teleports the qubit *q* with the receiver with host ID *receiver*

        Args:
            receiver_id (string): The ID of the host to establish the EPR pair with
            q (Qubit): The qubit to teleport
            await_ack (bool): If sender should wait for an ACK.
        """
        packet = protocols.encode(sender=self.host_id,
                                  receiver=receiver_id,
                                  protocol=protocols.SEND_TELEPORT,
                                  payload={'q': q},
                                  payload_type=protocols.CLASSICAL,
                                  sequence_num=self._get_sequence_number(receiver_id),
                                  await_ack=await_ack)

        self.logger.log(self.host_id + " sends TELEPORT to " + receiver_id)
        self._packet_queue.put(packet)

        if packet[protocols.AWAIT_ACK]:
            Logger.get_instance().log('awaiting teleport ACK from ' + receiver_id)
            self.await_ack(packet[protocols.SEQUENCE_NUMBER])

    def send_superdense(self, receiver_id, message, await_ack=False):
        """
        Send the two bit binary (i.e. '00', '01', '10', '11) message via superdense
        coding to the receiver with receiver ID *receiver_id*.

        Args:
            receiver_id (string): The receiver ID to send the message to
            message (string): The two bit binary message
            await_ack (bool): If sender should wait for an ACK.

        """
        packet = protocols.encode(sender=self.host_id,
                                  receiver=receiver_id,
                                  protocol=protocols.SEND_SUPERDENSE,
                                  payload=message,
                                  payload_type=protocols.CLASSICAL,
                                  sequence_num=self._get_sequence_number(receiver_id),
                                  await_ack=await_ack)
        self.logger.log(self.host_id + " sends SUPERDENSE to " + receiver_id)
        self._packet_queue.put(packet)

        if packet[protocols.AWAIT_ACK]:
            Logger.get_instance().log('awaiting superdense ACK from ' + receiver_id)
            self.await_ack(packet[protocols.SEQUENCE_NUMBER])

    def send_qubit(self, receiver_id, q, await_ack=False):
        """
        Send the qubit *q* to the receiver with ID *receiver_id*.
        Args:
            receiver_id (string): The receiver ID to send the message to
            q (Qubit): The qubit to send
            await_ack (bool): If sender should wait for an ACK.
        """
        q_id = str(uuid.uuid4())
        packet = protocols.encode(sender=self.host_id,
                                  receiver=receiver_id,
                                  protocol=protocols.SEND_QUBIT,
                                  payload=[{'q': q, 'q_id': q_id, 'blocked': True}],
                                  payload_type=protocols.QUANTUM,
                                  sequence_num=self._get_sequence_number(receiver_id),
                                  await_ack=await_ack)

        self.logger.log(self.host_id + " sends QUBIT to " + receiver_id)
        self._packet_queue.put(packet)

        if packet[protocols.AWAIT_ACK]:
            Logger.get_instance().log('awaiting send qubit ACK from ' + receiver_id)
            self.await_ack(packet[protocols.SEQUENCE_NUMBER])

        return q_id

    def shares_epr(self, receiver_id):
        """
        Returns boolean value dependent on if the host shares an EPR pair
        with receiver with ID *receiver_id*

        Args:
            receiver_id (string): The receiver ID to check.

        Returns:
             boolean: Whether the host shares an EPR pair with receiver with ID *receiver_id*
        """
        return receiver_id in self._EPR_store and len(self._EPR_store[receiver_id]['qubits']) != 0

    def set_memory_limit(self, limit):
        """
        Set the default maximum size limit a memory can have.

        Args:
            limit (int): The size of the memory.
        """
        self.memory_limit = limit

    def get_epr_pairs(self, host_id=None):
        """
        Return the dictionary of EPR pairs stored, just for the information regarding which qubits are stored.
        Does not remove the qubits from storage like *get_epr_pair* does.

        Args:
            host_id (optional): If set,

        Returns:
            dict: If *host_id* is not set, then return the entire dictionary of EPR pairs.
                  Else If *host_id* is set, then return the EPRs for that particular host if there are any.
                  Return an empty list otherwise.
        """
        if host_id is None:
            return self._EPR_store

        if host_id in self._EPR_store:
            return self._EPR_store[host_id]['qubits']

        return []

    def get_data_qubits(self, host_id=None):
        """
        Return the dictionary of data qubits stored, just for the information regarding which qubits are stored.
        Does not remove the qubits from storage like *get_data_qubit* does.

        Args:
            host_id (optional): If set,

        Returns:
            dict: If *host_id* is not set, then return the entire dictionary of data qubits.
                  Else If *host_id* is set, then return the data qubits for that particular host if there are any.
                  Return an empty list otherwise.
        """
        if host_id is None:
            return self._data_qubit_store

        if host_id in self._data_qubit_store:
            return self._data_qubit_store[host_id]['qubits']

        return []

    def set_epr_memory_limit(self, limit, partner_id=None):
        """
        Set the limit to how many EPR pair halves can be stored from partner_id, or if partner_id is not set,
        use the limit for all connections.

        Args:
            limit (int): The maximum number of qubits for the memory
            partner_id (str): (optional) The partner ID to set the limit with
        """
        if partner_id is not None:
            if partner_id in self._EPR_store and partner_id != self.host_id:
                self._EPR_store[partner_id]['max_limit'] = limit
            elif partner_id != self.host_id:
                self._EPR_store[partner_id] = {'qubits': [], 'max_limit': limit}
        else:
            for partner in self._EPR_store.keys():
                self._EPR_store[partner]['max_limit'] = limit

    def set_data_qubit_memory_limit(self, limit, partner_id=None):
        """
        Set the limit to how many data qubits can be stored from partner_id, or if partner_id is not set,
        use the limit for all connections.

        Args:
            limit (int): The maximum number of qubits for the memory
            partner_id (str): (optional) The partner ID to set the limit with
        """
        if partner_id is not None:
            if partner_id in self._data_qubit_store and partner_id != self.host_id:
                self._data_qubit_store[partner_id]['max_limit'] = limit
            elif partner_id != self.host_id:
                self._data_qubit_store[partner_id] = {'qubits': [], 'max_limit': limit}
        else:
            for partner in self._data_qubit_store.keys():
                self._data_qubit_store[partner]['max_limit'] = limit

    def add_epr(self, partner_id, qubit, q_id=None):
        """
        Adds the EPR to the EPR store of a host. If the EPR has an ID, adds the EPR with it,
        otherwise generates an ID for the EPR and adds the qubit with that ID.

        Args:
            partner_id: The ID of the host to pair the qubit
            qubit(Qubit): The data Qubit to be added.
            q_id(string): The ID of the qubit to be added.
        Returns:
             string: *q_id*
        """
        if partner_id not in self._EPR_store and partner_id != self.host_id:
            self._EPR_store[partner_id] = {'qubits': [], 'max_limit': self.memory_limit}

        if q_id is None:
            q_id = str(uuid.uuid4())

        to_add = {'q': qubit, 'q_id': q_id, 'blocked': False}

        if self._EPR_store[partner_id]['max_limit'] == -1 or (len(self._EPR_store[partner_id]['qubits'])
                                                              < self._EPR_store[partner_id]['max_limit']):
            self._EPR_store[partner_id]['qubits'].append(to_add)
            self.logger.log(self.host_id + ' added EPR pair ' + q_id + ' with partner ' + partner_id)
        else:
            # Qubit is dropped from the system
            to_add['q'].measure()
            self.logger.log(self.host_id + ' could NOT add EPR pair ' + q_id + ' with partner ' + partner_id)
            return None

        return q_id

    def add_data_qubit(self, partner_id, qubit, q_id=None):
        """
        Adds the data qubit to the data qubit store of a host. If the qubit has an ID, adds the qubit with it,
        otherwise generates an ID for the qubit and adds the qubit with that ID.

        Args:
            partner_id: The ID of the host to pair the qubit
            qubit (Qubit): The data Qubit to be added.
            q_id (string): The ID of the qubit to be added.

        Returns:
             string: *q_id*
        """

        if partner_id not in self._data_qubit_store and partner_id != self.host_id:
            self._data_qubit_store[partner_id] = {'qubits': [], 'max_limit': self.memory_limit}

        if q_id is None:
            q_id = str(uuid.uuid4())

        to_add = {'q': qubit, 'q_id': q_id, 'blocked': False}

        if self._data_qubit_store[partner_id]['max_limit'] == -1 or (len(self._data_qubit_store[partner_id]['qubits'])
                                                                     < self._data_qubit_store[partner_id]['max_limit']):
            self._data_qubit_store[partner_id]['qubits'].append(to_add)
            self.logger.log(self.host_id + ' added data qubit ' + q_id + ' from ' + partner_id)
        else:
            qubit.measure()
            self.logger.log(self.host_id + ' could NOT add data qubit ' + q_id + ' from ' + partner_id)
            return None

        return q_id

    def get_epr(self, partner_id, q_id=None):
        """
        Gets the EPR that is entangled with another host in the network. If qubit ID is specified,
        EPR with that ID is returned, else, the last EPR added is returned.

        Args:
            partner_id (string): The ID of the host that returned EPR is entangled to.
            q_id (string): The qubit ID of the EPR to get.

        Returns:
             Qubit: Qubit shared with the host with *partner_id* and *q_id*.
        """

        if partner_id not in self._EPR_store:
            return None

        if len(self._EPR_store[partner_id]) == 0:
            return None

        # If q_id is not specified, then return the last in the stack
        # else return the qubit with q_id q_id
        if q_id is None:
            if partner_id not in self._EPR_store or len(self._EPR_store[partner_id]['qubits']) == 0:
                return None
            if not self._EPR_store[partner_id]['qubits'][-1]['blocked']:
                self._EPR_store[partner_id]['qubits'][-1]['blocked'] = True
                return self._EPR_store[partner_id]['qubits'].pop()
            else:
                self.logger.log('accessed blocked epr qubit')
        else:
            for index, qubit in enumerate(self._EPR_store[partner_id]['qubits']):
                if qubit['q_id'] == q_id:
                    q = qubit['q']
                    del self._EPR_store[partner_id]['qubits'][index]
                    return q
        return None

    def get_data_qubit(self, partner_id, q_id=None):
        """
        Gets the data qubit received from another host in the network. If qubit ID is specified,
        qubit with that ID is returned, else, the last qubit received is returned.

        Args:
            partner_id (string): The ID of the host that data qubit to be returned is received from.
            q_id (string): The qubit ID of the data qubit to get.

        Returns:
             Qubit: Qubit recevied from the host with *partner_id* and *q_id*.
        """

        if partner_id not in self._data_qubit_store:
            return None

        # If q_id is not specified, then return the last in the stack
        # else return the qubit with q_id q_id
        if q_id is None:
            if partner_id not in self._data_qubit_store or len(self._data_qubit_store[partner_id]) == 0:
                return None
            if not self._data_qubit_store[partner_id]['qubits'][-1]['blocked']:
                self._data_qubit_store[partner_id]['qubits'][-1]['blocked'] = True
                return self._data_qubit_store[partner_id]['qubits'].pop()
            else:
                print('accessed blocked data qubit')
        else:
            for index, qubit in enumerate(self._data_qubit_store[partner_id]['qubits']):
                if qubit['q_id'] == q_id:
                    q = qubit['q']
                    del self._data_qubit_store[partner_id]['qubits'][index]
                    return q
        return None

    def get_classical_messages(self):
        """
        Gets the received classical messages sorted with the sequence number.

        Returns:
             Array: Sorted array of classical messages.
        """
        return sorted(self._classical, key=lambda x: x['sequence_number'])

    def stop(self):
        """
        Stops the host.
        """
        self.logger.log('Host ' + self.host_id + " stopped")
        self._stop_thread = True

    def start(self):
        """
        Starts the host.
        """
        self._queue_processor_thread = DaemonThread(target=self._process_queue)