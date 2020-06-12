Search.setIndex({docnames:["backends","components","components/host","components/network","components/protocols","design","examples","examples/QKD","examples/anonymous_transfer","examples/chsh","examples/entanglement_routing","examples/packet_sniffing","examples/quantum_coin_flipping","examples/quantum_money","examples/send_data","examples/send_epr","index","install","install/linux_mac","install/windows","intro","objects","objects/classical_storage","objects/message","objects/packet","objects/quantum_storage","objects/qubit","objects/routing_packet","quick_start"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["backends.rst","components.rst","components/host.rst","components/network.rst","components/protocols.rst","design.rst","examples.rst","examples/QKD.rst","examples/anonymous_transfer.rst","examples/chsh.rst","examples/entanglement_routing.rst","examples/packet_sniffing.rst","examples/quantum_coin_flipping.rst","examples/quantum_money.rst","examples/send_data.rst","examples/send_epr.rst","index.rst","install.rst","install/linux_mac.rst","install/windows.rst","intro.rst","objects.rst","objects/classical_storage.rst","objects/message.rst","objects/packet.rst","objects/quantum_storage.rst","objects/qubit.rst","objects/routing_packet.rst","quick_start.rst"],objects:{"qunetsim.components":{host:[2,0,0,"-"],network:[3,0,0,"-"],protocols:[4,0,0,"-"]},"qunetsim.components.host":{Host:[2,1,1,""],_get_qubit:[2,3,1,""]},"qunetsim.components.host.Host":{_get_message_w_seq_num:[2,2,1,""],_log_ack:[2,2,1,""],_process_ack:[2,2,1,""],_process_packet:[2,2,1,""],_process_queue:[2,2,1,""],add_c_connection:[2,2,1,""],add_c_connections:[2,2,1,""],add_checksum:[2,2,1,""],add_connection:[2,2,1,""],add_connections:[2,2,1,""],add_data_qubit:[2,2,1,""],add_epr:[2,2,1,""],add_ghz_qubit:[2,2,1,""],add_q_connection:[2,2,1,""],add_q_connections:[2,2,1,""],await_ack:[2,2,1,""],await_remaining_acks:[2,2,1,""],change_epr_qubit_id:[2,2,1,""],classical:[2,2,1,""],classical_connections:[2,2,1,""],delay:[2,2,1,""],empty_classical:[2,2,1,""],get_classical:[2,2,1,""],get_connections:[2,2,1,""],get_data_qubit:[2,2,1,""],get_data_qubits:[2,2,1,""],get_epr:[2,2,1,""],get_epr_pairs:[2,2,1,""],get_ghz:[2,2,1,""],get_next_classical:[2,2,1,""],get_next_classical_message:[2,2,1,""],get_next_sequence_number:[2,2,1,""],get_sequence_number:[2,2,1,""],get_sequence_number_receiver:[2,2,1,""],host_id:[2,2,1,""],is_idle:[2,2,1,""],max_ack_wait:[2,2,1,""],quantum_connections:[2,2,1,""],quantum_relay_sniffing_function:[2,2,1,""],rec_packet:[2,2,1,""],remove_c_connection:[2,2,1,""],remove_connection:[2,2,1,""],remove_q_connection:[2,2,1,""],run_protocol:[2,2,1,""],send_ack:[2,2,1,""],send_broadcast:[2,2,1,""],send_classical:[2,2,1,""],send_epr:[2,2,1,""],send_ghz:[2,2,1,""],send_key:[2,2,1,""],send_qubit:[2,2,1,""],send_superdense:[2,2,1,""],send_teleport:[2,2,1,""],set_data_qubit_memory_limit:[2,2,1,""],set_epr_memory_limit:[2,2,1,""],shares_epr:[2,2,1,""],sniff_full_packet:[2,2,1,""],start:[2,2,1,""],stop:[2,2,1,""],storage_epr_limit:[2,2,1,""],storage_limit:[2,2,1,""]},"qunetsim.components.network":{Network:[3,1,1,""]},"qunetsim.components.network.Network":{_encode:[3,2,1,""],_entanglement_swap:[3,2,1,""],_establish_epr:[3,2,1,""],_process_queue:[3,2,1,""],_remove_network_node:[3,2,1,""],_route_quantum_info:[3,2,1,""],_update_network_graph:[3,2,1,""],add_host:[3,2,1,""],add_hosts:[3,2,1,""],classical_routing_algo:[3,2,1,""],delay:[3,2,1,""],draw_classical_network:[3,2,1,""],draw_quantum_network:[3,2,1,""],get_ARP:[3,2,1,""],get_classical_route:[3,2,1,""],get_host:[3,2,1,""],get_host_name:[3,2,1,""],get_quantum_route:[3,2,1,""],packet_drop_rate:[3,2,1,""],quantum_routing_algo:[3,2,1,""],remove_host:[3,2,1,""],send:[3,2,1,""],shares_epr:[3,2,1,""],start:[3,2,1,""],stop:[3,2,1,""],update_host:[3,2,1,""],use_hop_by_hop:[3,2,1,""],x_error_rate:[3,2,1,""],z_error_rate:[3,2,1,""]},"qunetsim.components.protocols":{_decode_superdense:[4,3,1,""],_encode_superdense:[4,3,1,""],_rec_classical:[4,3,1,""],_rec_epr:[4,3,1,""],_rec_ghz:[4,3,1,""],_rec_key:[4,3,1,""],_rec_qubit:[4,3,1,""],_rec_superdense:[4,3,1,""],_rec_teleport:[4,3,1,""],_relay_message:[4,3,1,""],_send_ack:[4,3,1,""],_send_classical:[4,3,1,""],_send_epr:[4,3,1,""],_send_ghz:[4,3,1,""],_send_qubit:[4,3,1,""],_send_superdense:[4,3,1,""],_send_teleport:[4,3,1,""],encode:[4,3,1,""],process:[4,3,1,""]},"qunetsim.objects":{classical_storage:[22,0,0,"-"],message:[23,0,0,"-"],packet:[24,0,0,"-"],quantum_storage:[25,0,0,"-"],qubit:[26,0,0,"-"],routing_packet:[27,0,0,"-"]},"qunetsim.objects.classical_storage":{ClassicalStorage:[22,1,1,""]},"qunetsim.objects.classical_storage.ClassicalStorage":{_add_new_host_id:[22,2,1,""],add_msg_to_storage:[22,2,1,""],empty:[22,2,1,""],get_all:[22,2,1,""],get_all_from_sender:[22,2,1,""],get_next_from_sender:[22,2,1,""],remove_all_ack:[22,2,1,""]},"qunetsim.objects.message":{Message:[23,1,1,""]},"qunetsim.objects.message.Message":{content:[23,2,1,""],sender:[23,2,1,""],seq_num:[23,2,1,""]},"qunetsim.objects.packet":{Packet:[24,1,1,""]},"qunetsim.objects.packet.Packet":{await_ack:[24,2,1,""],payload:[24,2,1,""],payload_type:[24,2,1,""],protocol:[24,2,1,""],receiver:[24,2,1,""],sender:[24,2,1,""],seq_num:[24,2,1,""]},"qunetsim.objects.qubit":{InputError:[26,4,1,""],Qubit:[26,1,1,""]},"qunetsim.objects.qubit.InputError":{with_traceback:[26,2,1,""]},"qunetsim.objects.qubit.Qubit":{H:[26,2,1,""],I:[26,2,1,""],K:[26,2,1,""],T:[26,2,1,""],X:[26,2,1,""],Y:[26,2,1,""],Z:[26,2,1,""],blocked:[26,2,1,""],cnot:[26,2,1,""],cphase:[26,2,1,""],custom_controlled_gate:[26,2,1,""],custom_gate:[26,2,1,""],custom_two_qubit_gate:[26,2,1,""],host:[26,2,1,""],id:[26,2,1,""],measure:[26,2,1,""],qubit:[26,2,1,""],release:[26,2,1,""],rx:[26,2,1,""],ry:[26,2,1,""],rz:[26,2,1,""],send_to:[26,2,1,""]},"qunetsim.objects.routing_packet":{RoutingPacket:[27,1,1,""]},"qunetsim.objects.routing_packet.RoutingPacket":{decrease_ttl:[27,2,1,""],payload:[27,2,1,""],payload_type:[27,2,1,""],protocol:[27,2,1,""],receiver:[27,2,1,""],route:[27,2,1,""],sender:[27,2,1,""],ttl:[27,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception"},terms:{"2x2":26,"\u03b8":12,"\u03c8_0":12,"\u03c8_1":12,"\u03c8_a_j":12,"\u03c8_b_j_bar":12,"\u03c8_d":12,"\u03c8_d_bar":12,"\u03c8_e_ij":12,"\u03c8_e_ij_bar":12,"boolean":[2,3,14],"case":[2,9,17,18,19,25],"char":7,"class":[0,2,3,22,23,24,26,27],"default":[0,2,3,28],"export":[17,18],"final":[7,8,12,28],"float":[2,3,26],"function":[0,2,3,4,7,8,10,13,20,28],"import":[0,3,7,8,9,10,11,12,13,14,15,28],"int":[2,3,4,7,8,9,12,23,24,26,27],"long":[2,9],"new":[2,12,17,19,20,22,28],"return":[0,2,3,4,7,8,10,12,13,14,20,22,23,24,26,27],"true":[2,3,7,8,9,10,11,12,13,14,15,22,28],"try":10,"while":[7,8,10,13],AES:7,Eve:[0,7,11,13,14],For:[2,8,9,11,12,17,18,20,28],IDs:[0,2,7,8,27],Not:21,One:[2,4,8,9,20,28],The:[0,1,2,3,4,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,26,27,28],Then:9,There:0,These:13,With:[0,3,8,9,14],__main__:[7,8,9,11,12,13,14,15,28],__name__:[7,8,9,11,12,13,14,15,28],__traceback__:26,_add_new_host_id:22,_decode_superdens:4,_encod:3,_encode_superdens:4,_entanglement_swap:3,_establish_epr:3,_get_message_w_seq_num:2,_get_qubit:2,_host:0,_log_ack:2,_process_ack:2,_process_packet:2,_process_queu:[2,3],_rec_class:4,_rec_epr:4,_rec_ghz:4,_rec_kei:4,_rec_qubit:4,_rec_superdens:4,_rec_teleport:4,_relay_messag:4,_remove_network_nod:3,_route_quantum_info:3,_send_ack:4,_send_class:4,_send_epr:4,_send_ghz:4,_send_qubit:4,_send_superdens:4,_send_teleport:4,_update_network_graph:3,a_j:12,a_tild:12,abil:[3,21],abl:7,about:[12,20],abov:[17,18,19],abs:12,accept:12,access:[0,1,9,14,20,21],accomplish:[2,8],accord:[4,8],accur:20,achiev:[13,20],ack:[2,4,7,8,14,15,22,24],ack_arriv:[14,15],acknowledg:[2,4,14,20,23,28],acknowleg:2,act:[2,8,13],action:7,activ:[17,18,19],add:[0,2,3,7,8,10,11,14,17,19,21,22,25,26],add_c_connect:[2,8,9,15],add_checksum:2,add_connect:[0,2,7,8,9,10,11,12,13,14,15,28],add_data_qubit:2,add_edg:10,add_epr:[2,8],add_ghz_qubit:2,add_host:[0,3,7,8,9,10,11,12,13,14,15,28],add_msg_to_storag:22,add_q_connect:[2,15],added:[2,3,14,15,20,28],adding:15,addit:26,address:23,advanc:[8,17,19],after:[10,12,13,14,17,18,19,27,28],again:[7,17,18,19],agre:[8,12],ahead:1,aim:13,algorithm:[3,7,10,20],alic:[0,7,9,11,14,28],alice_class:9,alice_func:7,alice_host:9,alice_id:9,alice_messag:11,alice_qkd:7,alice_quantum:9,alice_respons:9,alice_send_messag:7,all:[0,2,3,4,7,8,9,11,12,14,15,20,21,22,28],alloc:12,allow:[10,20],along:[8,13,24,28],alreadi:[2,17,19,20],also:[0,1,2,7,11,12,13,20,21,23],altern:[17,18,19],although:20,alwai:[0,8,11,12,15],amongst:[8,9],amount:[2,3,10,20],amount_to_transmit:11,amount_transmit:11,analog:[2,24,27],angl:26,ani:[0,2,8,9,10,12,14,28],anonym:[6,16],anoth:[0,2,3,4,9,20,26,28],answer:7,anyth:8,appear:[8,23],append:[7,13],appli:[2,3,4,7,8,11,13,14,26,28],applic:[1,2,15,20],approach:9,arbitrari:[20,28],architectur:20,area:[17,19],arg:[9,10,13,15],argument:[0,2,12],around:20,arp:3,arrai:2,arriv:[2,8,14,15,20],arxiv:12,assign:13,associ:13,assum:[14,28],assumpt:20,asynchron:20,attack:[6,16],attempt:[8,13],avail:[2,8],avoid:20,awai:14,await:[2,4,8,9,13,14],await_ack:[2,4,7,8,9,10,11,12,13,14,15,24,28],await_remaining_ack:2,axi:9,b_j:12,back:[9,12,15],backend:[2,3,5,9,12,13,16,21,26],bad:7,bank:13,bank_basi:13,bank_bit:13,banker:13,banker_protocol:13,banknot:13,bar:12,base:[2,3,6,7,10,12,13,16,20,22,23,24,26,27],basi:[7,8,9,12],basic:0,becaus:[7,9,12,14],becom:0,bee:7,been:[0,2,3,8,12],befor:[2,9,14],begin:[3,12,28],behav:[2,8],behaviour:8,being:[3,7,11,13,14,20,28],belong:[0,2,26],below:[0,7,8,9,10,11,12,13,14,15,17,20,21,24,28],best:10,better:[21,25,26],between:[3,8,11,20],bin:[17,18],binari:2,bit:[2,4,7,8,9,12],bit_no:13,block:[2,3,8,9,13,14,20,26,28],blown:20,bob:[0,7,9,11,14],bob_class:9,bob_host:9,bob_id:9,bob_quantum:9,bob_respons:9,bob_sniffing_class:11,bob_sniffing_quantum:11,bool:[2,3,4,22,24,26],both:[9,12,20,25,28],bottom:[17,19],box:0,briefli:12,broadcast:[2,8],buffer:[0,2],build:[3,10,15],built:[8,20,28],c_ij:12,call:[0,2,8,9,14,17,28],came:15,can:[0,1,2,3,7,8,9,11,12,13,14,17,18,19,20,21,25,26,28],cannot:9,categor:21,caus:13,certain:1,chain:3,chang:[0,2,3,7,8,9,11,12,17,18,19],change_epr_qubit_id:2,channel:[2,6,16],cheat:[12,13],cheat_alert:13,cheater:12,check:[2,7,12,13],checksum:2,choic:[8,9,10],choos:[7,8,20],chose:[0,12],chosen:12,chr:7,chsh:[6,16],clasic:2,classic:[2,3,4,5,7,8,9,11,13,14,15,20,21,23,24,27,28],classical_connect:2,classical_routing_algo:3,classical_storag:22,classicalstorag:22,clear:2,click:[17,19],clone:[17,18,19],cnot:26,code:[0,2,11,14,15,20,28],coin:[6,16],collect:8,colour:20,com:[17,18,19],come:[1,17,20],comma:28,command:[17,18,28],common:[17,18,19,20],commonli:[2,3],commun:[7,9,14,20],compar:7,compil:[17,18,19],complet:[8,28],complic:20,compon:[2,3,4,5,7,8,9,10,11,12,13,14,15,16,21,22,24,25,28],comput:[0,8,10],concaten:[7,12],concatent:7,configur:[2,3,10,14,28],connect:[2,3,7,9,10,14,15,20,28],consid:[10,20],consist:[4,12],consol:28,constant:24,constantli:10,contain:[4,11,23],content:[8,9,11,12,13,16,23,28],continu:[7,14],control:[3,8,13,26],cooper:9,copi:12,core:20,correct:[8,13,17,18,19,20,28],correspond:2,could:20,cphase:26,cppsimul:[17,18,19],cqc_backend:12,cqcbackend:12,creat:[0,2,3,7,13,14,20,21,23,24],create_epr:0,create_qubit:0,creation:8,creativ:28,crypto:7,current:[0,20,21],custom:[10,13,20,26],custom_controlled_g:26,custom_g:26,custom_two_qubit_g:26,customer_protocol:13,d_ij:12,daemonthread:2,data:[2,4,6,13,16,25,27],databas:13,dean:14,decid:7,decod:[1,4,7,12],decoher:21,decreas:27,decrease_ttl:27,decrypt:7,decrypted_msg_from_alic:7,def:[0,7,8,9,10,11,12,13,14,15,28],defin:[0,3,7,11,15,26,28],del:13,delai:[2,3,7,9,11,12,13,14],delet:22,delt:22,demonstr:[8,20],depend:[2,3,4,9,12,26],depict:3,describ:0,descript:12,design:[16,20,21,28],dest:3,destin:[3,20],destruct:[0,13],detail:[12,20,21],determin:[12,26],develop:[0,2,8,9,20,21,25,28],devis:9,di_graph:10,dict:[2,3,4],dictionari:[0,2,4],did:[13,14,15],didn:14,differ:[0,3,7,13,20,26,27],digraph:10,direct:[10,13,14,15],direction:[14,15],directli:[1,3,8,14,21,24],directori:[17,18,19],disabl:[7,9,11,13,15,28],distant:1,distantli:20,distribut:[2,3,4,6,8,9,13,16,20],distributor:8,disturb:[7,13],document:[17,18,19],doe:[2,4,8,9,12,13,21],doesn:[2,8,13],doing:3,done:[8,9,10,15],dont:[17,18,19],dose:0,download:[17,18,19],draw:3,draw_classical_network:3,draw_quantum_network:3,driven:20,drop:3,dtype:12,dure:[9,12],e_ij:12,each:[1,3,7,9,10,14,17,25],earlier:12,easier:8,easili:8,eavesdrop:[2,6,16],eavesdropp:[2,11,13],edg:10,edit:[17,18,19],educ:20,effici:3,either:[2,7,9,14,20],element:[2,28],elimin:[26,27],els:[2,7,9,10,12,13,14,15],empti:[2,22],empty_class:[2,8],encod:[1,2,3,4,24],encrypt:7,encrypted_msg_from_alic:7,encrypted_msg_to_ev:7,encrypted_text:7,end:[7,8,12,14,15],ensur:[9,14,28],entangl:[0,1,2,3,4,6,9,16,20],entanglement_network:10,enter:28,entir:[2,8],environ:[17,18,19],epr:[2,3,4,6,8,9,16,20,25],epr_id:[8,15],eqsn:[0,9],eqsn_backend:[0,12],eqsnbackend:[0,12],equat:9,error:[3,10,26],esqn:9,establish:[2,3,8,15,28],etc:24,eve:[7,11],eve_func:7,eve_kei:7,eve_qkd:7,eve_receive_messag:7,even:20,event:20,everi:[12,13],exact:9,exactli:10,exampl:[0,2,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,26,28],exceed:14,except:[9,10,26],excit:[11,14],exist:[2,17,19,20,22],exit:11,expect:0,expir:15,explan:26,explanatori:0,explicitli:0,express:26,extern:4,extra:23,f_ij:12,fail:8,fals:[2,3,4,7,8,10,13,22,24,26],familiar:7,featur:[1,2,20],fetch:8,field:[0,8],figur:15,file:[0,17,18,19,28],first:[2,7,8,11,12,13,14,15,28],flag:[3,8,14],flexibl:20,flip:[6,16],flow:[14,15],follow:[0,1,8,9,10,11,17,28],forev:2,form:[4,15],format:9,found:[12,20],frac:12,framework:20,free:2,from:[0,2,3,4,7,8,9,10,11,12,13,14,15,20,22,26,27,28],from_host_id:0,from_send:22,full:[7,8,9,10,11,12,13,14,15,20,28],fulli:28,further:[21,25],futur:20,gain:12,game:[6,16],gate:[0,3,8,14,26,28],gener:[1,2,3,7,8,9,10,12,15,17,18,19,20,21,24,28],generate_entangl:10,generate_epr_if_non:[2,8],get:[2,3,4,7,12,13,14,17,18,19,20,22,28],get_al:22,get_all_from_send:22,get_apr:3,get_arp:3,get_class:[2,9,11,13],get_classical_rout:3,get_connect:[2,10],get_data_qubit:[2,7,8,11,12,13,14,28],get_epr:[2,9,15],get_epr_pair:[2,10],get_from_dict:0,get_ghz:[2,8],get_host:[3,10],get_host_nam:3,get_inst:[0,7,8,9,10,11,12,13,14,15,28],get_next_class:[2,12],get_next_classical_messag:[2,7],get_next_from_send:22,get_next_sequence_numb:2,get_quantum_rout:3,get_sequence_numb:2,get_sequence_number_receiv:2,ghz:[2,4,6,16],git:[17,18,19],github:[17,18,19],give:[0,12,17,20,26,28],given:[3,8,12,22],global:[8,17,18,19],goal:8,goe:27,got:[12,15],graph:[3,10,20],greater:[3,17,18,19],grid:15,group:8,guid:16,hadamard:[8,26,28],half:[2,8,9],halv:2,handl:20,happen:20,has:[0,1,2,3,7,8,9,10,12,13,14,25],have:[0,2,3,7,8,9,10,12,14,15,17,18,19,21,26,27,28],haven:12,header:4,held:2,help:20,helper:7,her:[7,11,12,14],here:[1,7,8,9,11,12,14,15,17,18,19,28],hide:8,high:[8,20],him:[11,12],his:[7,9,12,13],holder:8,hop:[3,14,20,27],hope:21,hopefulli:0,host:[0,1,3,4,5,7,8,9,10,11,12,13,14,15,20,21,22,23,25,26,27,28],host_:8,host_a:[8,9,12,15,28],host_alic:[0,7,11,14],host_b:[8,9,12,15,28],host_bank:13,host_bob:[0,7,11,14],host_c:[8,9,15,28],host_connect:10,host_custom:13,host_d:[8,28],host_dean:14,host_ev:[0,7,11,13,14],host_id:[0,2,3,7,8,9,10,12,13,15,22,28],host_id_list:2,how:[0,2,7,8,9,10,11,13,15,17,18,19,20,21,28],howev:[0,7,12],http:12,ident:26,idl:[2,10],ids:2,imag:20,implement:[0,7,8,12,13,27],imposs:12,includ:[8,17,18,19,28],incom:4,index:12,inform:[0,1,2,3,4,12,13,14,15,20,26],initi:[0,7,9,11,13,20,28],input:26,inputerror:26,inspir:20,instal:[9,16,18,19,28],instanc:[0,8],instead:[0,3,9],instruct:[15,17,18,19,28],instructor:20,integr:21,intend:[2,4,20],interact:[1,24],interfac:0,internet:[0,24,27],interv:3,introduct:16,invalid:13,invers:10,involv:8,is_idl:[2,10],isinst:11,isn:22,issu:[17,18,19],item:28,iter:[7,20,21,25],its:[3,8,12,20],itself:8,join:[7,11,12,13],joint:8,just:[0,2,3,8,17,18,19,28],keep:[2,8],kei:[1,2,4,6,16,20,21],key_arrai:7,key_array_to_key_str:7,key_siz:[2,7],key_string_binari:7,know:[2,7,8,11,12,13,20,26],knowledg:0,label:8,larg:10,last:[2,12],later:13,layer:[1,3,20,24,27],learn:20,leav:28,left:12,len:[8,10,13],length:[2,3],let:[7,10,11],level:[8,17,18,19,20],librari:[9,20],like:[2,8,20],limit:2,line:[14,20],linear:14,link:[8,10,15],linux:16,list:[2,3,8,10,13,20,21,22,24,27,28],listen:[7,28],live:[3,27],local:2,locat:[17,18,19],lock:0,log:[2,9,20],logger:[7,9,10,11,13,15,28],logic:14,look:0,loser:9,lost:[9,14],lower:3,mac:[16,18],made:21,mai:[17,18,19,20],main:[7,8,9,10,11,12,13,14,15,27,28],mainli:[20,26],maintain:3,make:[0,7,12,17,18,19,20,28],man:[6,16],manag:26,mani:[2,8,28],manipul:[2,8,11,12,21],map:0,mask:8,match:[7,12,13],math:9,mathemat:8,matplotlib:3,matrix:26,matter:9,max_ack_wait:[2,14],maximum:[2,14],mean:[14,20],measur:[4,7,8,9,11,12,13,14,15,26,28],measured_valu:26,measurement_bas:7,meaur:12,memori:[2,20,25],messag:[2,4,5,7,8,9,10,11,13,20,21,22,26],method:[0,2,3,8,9,15,20,28],middl:[6,16],might:0,mind:14,mismatch:13,mistak:8,model:21,modifi:[4,11],modular:0,moment:[9,20],monei:[6,16],money_qubit:13,more:[0,9,20,28],most:[0,2,3,17,18,19],mostli:1,move:20,msg:[2,7,11,12],msg_buff:7,msg_to_ev:7,multi:20,multipl:0,must:[3,10],name:[3,9,17,18,19,28],ndarrai:[12,26],neccessari:3,necessari:[0,1,2,7],need:[0,1,7,8,9,12,14,15,17,19,24,26,28],network:[0,2,4,5,7,8,9,10,11,12,13,14,15,20,27,28],networkx:[10,20],never:[1,21],new_host:0,new_id:2,newli:10,next:[2,4,7,8,9,11,14,22,28],no_ack:2,no_of_seri:13,node:[0,2,3,4,7,8,9,10,11,12,13,14,15,20,28],node_1:10,node_2:10,nois:2,non:13,non_destruct:26,none:[2,3,4,7,8,13,14,15,22,26],normal:28,note:[10,13,14,15,28],noth:10,notic:8,now:[0,7,11,12,14,15],num_epr_pair:10,number:[0,2,3,4,9,12,13,20,23,24,27,28],numpi:[0,7,12,26],o_seq_num:3,object:[0,1,2,3,5,7,8,9,11,12,13,14,16,22,23,24,25,26,27,28],occur:26,offer:20,often:9,old:2,old_id:2,onc:[0,2,3,7,8,20],one:[0,2,3,7,8,9,12,14,15,17,18,20,22,25,28],onli:[1,8,9,12,13,14,15,17,18,19,22,28],onward:20,open:[17,19,28],oper:[4,8,9,11,12,17,26],oplu:12,oplus_j:12,optic:9,option:[2,17,18,19,22],ord:7,order:[2,3,8,10,20],org:12,origin:3,other:[0,2,7,8,9,12,14,15,24,25],other_qubit:26,otherwis:[2,3,7,8,17,19],our:[1,7,11,12,26,27],out:[0,13,20],outcom:[8,12,26],outperform:9,output:11,over:[0,7,20],overview:[16,20,21,28],own:[3,4,5,7,8,12,14,16,20,26],own_randomn:12,owner:0,packag:[0,17,18,19],packet:[1,2,3,4,5,11,14,20,21,28],packet_drop_r:3,pair:[0,2,3,4,6,8,9,16,25],parallel:14,param:[2,3,4],paramet:[2,3,4,8,10,15,22,25,26,28],pariti:8,pars:4,part:[0,1,2,8,13,14,17,19],parti:[7,8,9,13,14,28],particip:8,particular:2,partner:[2,12],partner_id:12,partner_q1:12,partner_q2:12,partner_qubit:12,pass:0,path:[3,10,17,18,19],path_to_qunetsim:[17,19],pauli:26,payload:[2,3,4,20,24,27],payload_typ:[3,4,24,27],per:2,perform:[1,3,8,9,11,17,18,19,26],phi:26,php:12,physic:[20,21,26],piec:[8,21],pip:[16,18,19],place:14,plai:[3,9,13],plan:[21,25],player:9,plot:3,point:[9,12],polar:13,popular:0,possess:13,possibl:[0,3,20],potenti:20,pre:7,prepar:[0,11,12,13],preparation_and_distribut:13,present:20,principl:28,print:[7,8,9,10,11,12,13,14,15,28],prior:12,privat:1,probabl:[3,9],problem:7,procedur:[1,12,20],proceed:2,process:[2,3,4,10,20],processor:2,program:[1,11],programm:14,progress:20,project:[17,18,19],projectq:[0,9,17,18,19],projectq_backend:[9,12,13],projectqbackend:[9,12,13],prompt:28,properli:[15,17,18,19],properti:[2,3,17,19,23,24,26,27],protocol:[1,2,3,5,7,8,9,10,11,12,13,14,15,20,21,24,27,28],protocol_1:[15,28],protocol_2:[15,28],protocol_param:2,provid:[0,8,20],psi:12,psi_0:12,psi_1:12,psi_:12,psi_a:12,psi_b_bar:12,purpos:2,put:[1,2,3,14,20],pwd:[17,18],python3:[17,18,19],python:[9,17,18,19,20,28],pythonpath:[17,18,19,28],q_bit:7,q_id:[2,3,8,14,15,26],q_rec:14,q_relay_snif:13,q_relay_sniffing_fn:13,qkd:[2,4,7],quant:12,quantum:[0,2,3,4,5,6,8,9,10,14,15,20,21,24,27,28],quantum_coin_flip:12,quantum_connect:2,quantum_relay_snif:11,quantum_relay_sniffing_funct:2,quantum_routing_algo:[3,10],quantumli:9,qubit:[0,2,3,4,5,6,7,8,9,11,12,13,16,20,21,25,27,28],qubit_id:2,qubit_no:13,qubits_per_monei:13,queue:[2,3],quick:16,quit:21,qunetsim:[0,1,2,3,4,7,8,9,10,11,12,13,14,15,17,18,19,21,22,23,24,25,26,27,28],rad:26,rais:[12,26],ran:28,randint:[7,12,13],random:[2,7,8,9,10,12,13],random_bas:13,random_bit:[12,13],random_bits_a:12,random_bits_b:12,random_bits_d:12,randomli:[7,8],randomnes_from_partn:12,rang:[8,9,10,11,12,13,14,15,28],rangl:12,rate:3,rather:8,ratio:9,read:[0,7],real:[0,7,20],realist:20,realiz:13,realli:7,rec_packet:2,recalcul:3,receiv:[2,3,4,7,8,9,10,11,12,13,15,24,27,28],receive_epr:0,receive_from_id:2,receive_monei:13,received_count:7,receiver_id:[2,26],receiver_list:2,recommend:[0,17],record:[9,13],recov:20,reduc:4,ref:9,refere:9,referee_id:9,referee_messag:9,regard:[2,20],rel:20,relai:[1,2,3,4,13,20,27],relay_snif:11,releas:[13,26],release_qubit:2,remain:[2,8,28],remaind:8,remov:[2,3,9,13,17,18,19,22,27],remove_all_ack:22,remove_c_connect:2,remove_connect:[2,9],remove_host:3,remove_q_connect:2,repeat:7,replac:[17,19,21],repositori:[17,18,19],repres:[1,2,3,13,14,15,20,21],represent:[3,10],reproduc:13,request:24,requir:[4,17,18,19,20,28],res:[9,12],resolv:[17,18,19],resourc:9,respect:9,respons:[0,1,9],result:[4,7,12,13,14,28],retriev:[2,4],right:[0,7,12],rise:0,robust:20,role:[1,3],rot_angl:12,rotat:[9,26],roughli:9,rout:[1,2,3,5,6,11,15,16,20,21],router:2,routing_algorithm:10,routing_packet:27,routingpacket:[3,4,27],run:[1,2,3,7,8,9,10,13,14,15,17,18,19,28],run_protocol:[2,7,8,9,10,11,12,13,15,28],rwlock:0,safe:[0,14,15],safedict:0,sai:14,same:[7,8,9,14,17,18,19,20,28],saw:11,script:[17,18,19,28],second:[0,2,8,10,12,15,26,28],secret:[2,7,8,20],secret_kei:7,secret_key_str:7,section:[0,2,20,21,28],secur:7,see:[0,2,7,8,9,10,11,12,13,14,15,17,18,19,20,21,28],seem:0,select:8,self:[0,26],send:[2,3,4,6,7,8,9,10,11,12,13,16,20,23,26,28],send_ack:2,send_broadcast:[2,8],send_class:[2,7,9,11,12,13],send_epr:[2,9,10,15],send_ghz:[2,8],send_kei:2,send_qubit:[2,7,11,12,13,14,28],send_qubit_to:0,send_superdens:[2,10],send_teleport:[2,8],send_to:26,sender:[2,3,4,7,8,10,11,13,15,22,23,24,27,28],sender_id:[2,22],sending_qubit:8,sens:20,sent:[0,2,3,7,11,13,14],seq:2,seq_num:[2,9,11,13,23,24],seq_numb:[2,4],sequenc:[2,3,4,20,23,24],sequence_nr:[2,7],sequence_num:4,sequence_numb:[2,24],serial:13,serial_to_be_check:13,serial_to_be_us:13,set:[0,1,2,3,7,8,9,11,13,14,15,17,18,19,22,26,28],set_data_qubit_memory_limit:2,set_delai:10,set_epr_memory_limit:2,set_new_host:0,set_quantum_relay_sniffing_funct:11,set_relay_sniffing_funct:11,shape:12,share:[2,3,7,8,9,10,12],shares_epr:[2,3],she:[7,9,13,14],shortest:[3,10],shortest_path:10,should:[0,2,3,4,7,8,9,11,12,15,16,17,18,22,26,27,28],shouldn:8,show:[9,15],shown:[0,13],side:[2,14],signal:3,similar:[9,14],simpl:[15,20,28],simpli:[0,8,9,11,17,20],simplic:8,simplifi:8,simul:[0,3,8,9,14,17,18,19,20,21,25],simulaqron:[0,9],simular:27,sinc:[8,17,18,19],sing:12,singl:[0,12,28],singleton:3,sit:[11,14],size:[2,7],size_per_qubit:2,sleep:[8,10],small:[7,17,18,19],snif:2,sniff:2,sniff_full_packet:2,sniffer:11,sniffing_quantum:13,snippet:0,softwar:0,solv:7,some:[0,10,13,20,23,27,28],someth:14,sometim:[3,20],sort:[2,12],sourc:[3,10,17,18],specif:[0,2,9,20,28],specifi:[2,15],split:7,squar:15,stack:12,stai:26,standard:[17,18,19],start:[0,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19],state:[2,4,8,11,12,13,14,20,26,28],statist:9,statu:2,steal:13,step:[10,12,17,18,19,20,28],still:[7,20],stop:[0,2,3,8,10,11,12,13,14],stop_host:[3,10,14],storag:[2,4,5,21,23],storage_epr_limit:2,storage_limit:2,store:[0,2,4,8,12,20,21,22,25],str:[2,3,4,7,8,9,10,12,13,14,15,22,23,24,27],strategi:9,string:[2,4,7,22,23,26],structur:[0,17,18,19,20,21,23],student:20,stuff:0,style:[3,14],success:2,suggest:12,summar:12,superdens:[2,4,10,20],support:[4,9],sure:[17,18,19],swap:[3,20],synchron:8,syntax:8,system:[9,17,19,26],tabl:3,take:[3,8,27,28],talk:[7,13],tamper:12,target:[10,26],task:[0,8,20],team:0,teh:13,teleport:[2,4,20],tell:[8,12,14],templat:[17,18,19,28],ten:8,termin:[17,18,28],test:[7,10,20,28],text:7,than:[0,3,8,9,28],thei:[2,7,8,9,12,24,25,26,27],them:[2,7,9,11],themself:8,themselv:9,therefor:[0,8,12,13,20,23],theta:12,thi:[0,2,3,7,8,9,10,11,12,13,14,15,17,18,19,20,22,27,28],thing:20,those:[9,20],thread:[0,2,3,7,20],three:[0,7,8,9,10,13],throttl:3,through:[2,11,13,15,20],tick:2,till:[0,2],time:[1,2,3,8,9,10,14,15,20,27],titl:12,to_host_id:0,toi:20,too:[2,7],tool:[0,20],topolog:7,tqsd:[0,17,18,19],trace:20,traffic:[14,15],transfer:13,translat:8,transmiss:[3,7,13],transmit:[0,4,14,20],transport:[1,20,24,27],travel:27,treat:20,trigger:[20,24],trivial:7,ttl:[3,4,27],tupl:[2,28],two:[0,1,2,3,7,8,9,12,14,20,25,28],txt:[17,18,19],type:[0,2,3,4,8,10,15,17,22,23,24,26,27,28],typic:20,unblock:2,underli:[21,26],undo:11,unforg:13,uni:[14,15],uniqu:26,unitari:26,unknown:20,unread:22,unrealist:20,until:[2,7,14,20],unus:13,unused_seri:13,updat:3,update_host:[3,9],upgrad:[17,18,19],upon:8,use:[2,7,9,12,13,14,15,16,17,18,19,21,28],use_hop_by_hop:[3,10],used:[0,1,2,3,7,8,21,22,25],user:[1,2,17,18,20,24],uses:[3,9,20],using:[0,7,8,9,10,13,14,15,17],valid:[12,13],valu:[2,3,14,17,19],valueerror:12,variabl:[0,3,12,17,19,28],variou:21,venv:[17,18,19],verifi:[12,13],verify_monei:13,veriqloud:12,version:[1,17,18,19],vertic:10,via:[2,3,11,16,20],virtual:[17,18,19],wai:[7,13,14,20],wait:[2,7,8,9,11,12,13,14,15,28],wait_tim:[7,13],want:[7,11,12,13,20,28],warn:7,weight:10,weird:0,well:8,were:28,what:[4,7,8,9,13,14,16],when:[1,3,8,9,10,15,20,23,27],where:[8,9,12,14,15,17,18,19,21],whether:[2,3],which:[0,2,3,4,7,8,11,12,17,18,19,20,26,27],who:[2,11,13,14,16,22,26],whole:[2,8],whom:2,whose:3,wiesner:13,wiki:12,win:9,window:16,winner:9,with_traceback:26,without:[7,14,17,18,19],won:9,word:21,work:[0,7,10,20,28],would:[0,3,8,28],wrapper:26,write:[1,5,14,15,16,20,28],x_error_r:3,xor:[8,9,12],yet:7,you:[0,7,17,18,19,28],your:[5,16,17,18,19,28],z_error_r:3,zero:12,zip:7},titles:["Backends","Network Components","Host","Network","Protocols","Design Overview","Examples","Quantum Key Distribution","GHZ Based Anonymous Entanglement","CHSH Game","Routing with Entanglement","Eavesdropping on channels","Quantum Coin Flipping","Quantum Money with a Man-in-the-Middle Attack","Send Data Qubits","Send EPR Pairs","QuNetSim: A quantum network simulation framework","Install","&lt;no title&gt;","&lt;no title&gt;","Introduction","Network Objects","Classical Storage","Message","Packet","Quantum Storage","Qubit","Routing Packet","Quick Start Guide"],titleterms:{anonym:8,attack:13,backend:0,base:8,channel:11,chsh:9,classic:22,coin:12,compon:1,data:14,design:5,distribut:7,eavesdrop:11,entangl:[8,10],epr:15,exampl:6,flip:12,framework:16,game:9,ghz:8,guid:28,host:2,instal:17,introduct:20,kei:7,linux:17,mac:17,man:13,messag:23,middl:13,monei:13,network:[1,3,16,21],object:21,overview:5,own:0,packet:[24,27],pair:15,pip:17,protocol:4,quantum:[7,12,13,16,25],qubit:[14,26],quick:28,qunetsim:[16,20],rout:[10,27],send:[14,15],should:20,simul:16,start:28,storag:[22,25],use:20,via:17,what:20,who:20,window:17,write:0,your:0}})