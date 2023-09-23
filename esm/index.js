var Wt=Object.defineProperty;var Ut=(e,t)=>{for(var n in t)Wt(e,n,{get:t[n],enumerable:!0})};import"isomorphic-fetch";import{Actor as an,HttpAgent as cn,CanisterStatus as sn}from"@dfinity/agent";import{Actor as Ht,HttpAgent as Kt}from"@dfinity/agent";var Ne=({IDL:e})=>e.Service({__get_candid_interface_tmp_hack:e.Func([],[e.Text],["query"])});var Se=(e,t,n=!1)=>{let o=new Kt({...t?.agentOptions});return n&&o.fetchRootKey().catch(a=>{console.warn("Unable to fetch root key. Check to ensure that your local replica is running"),console.error(a)}),Ht.createActor(Ne,{agent:o,canisterId:e.toText?e.toText():e,...t?.actorOptions})};var Ee={};Ut(Ee,{explainer:()=>fe,toState:()=>re,wrapActor:()=>Oe,xBase:()=>m,xBigInt:()=>F,xBool:()=>te,xFloat:()=>ee,xInt:()=>D,xInt16:()=>Q,xInt32:()=>X,xInt64:()=>Z,xInt8:()=>J,xNat:()=>I,xNat16:()=>z,xNat32:()=>$,xNat64:()=>Y,xNat8:()=>C,xNull:()=>j,xOpt:()=>v,xPrincipal:()=>G,xRec:()=>ne,xRecord:()=>S,xText:()=>K,xTime:()=>L,xTuple:()=>A,xVariant:()=>b,xVec:()=>P});import{IDL as ye}from"@dfinity/candid";import{Principal as Ae}from"@dfinity/principal";var m=class{constructor(t){this.val=t}static fromState(t){return t}},F=class{constructor(t){this.val=t}static fromState(t){return typeof t=="string"?BigInt(t):t}},K=class extends m{constructor(t){super(t)}},P=class extends m{constructor(t){super(t)}fromState(t){return this.val===C&&typeof t=="string"&&$t(t)?Jt(t):t}},v=class extends m{constructor(t){super(t)}},b=class extends m{constructor(t){super(t)}},j=class extends m{constructor(t){super(t)}},G=class extends m{constructor(t){super(t)}static fromState(t){return typeof t=="string"?Ae.from(t):t}},C=class extends m{constructor(t){super(t)}},z=class extends m{constructor(t){super(t)}},$=class extends m{constructor(t){super(t)}},J=class extends m{constructor(t){super(t)}},Q=class extends m{constructor(t){super(t)}},X=class extends m{constructor(t){super(t)}},Y=class extends F{constructor(t){super(t)}},Z=class extends F{constructor(t){super(t)}},I=class extends F{constructor(t){super(t)}},D=class extends F{constructor(t){super(t)}},L=class extends F{constructor(t){super(t)}},ee=class extends m{constructor(t){super(t)}},te=class extends m{constructor(t){super(t)}},S=class extends m{constructor(t){super(t)}},A=class extends m{constructor(t){super(t)}},ne=class extends m{constructor(t){super(t)}fill(t){Object.setPrototypeOf(this,t.constructor.prototype),Object.assign(this,t)}},Re=class{Text=K;Null=j;Principal=G;Nat8=C;Nat16=z;Nat32=$;Nat64=Y;Nat=I;Int8=J;Int16=Q;Int32=X;Int64=Z;Int=D;Float64=ee;Bool=te;Time=L;Service(t){return t}Func(t,n,o){return{input:t,output:n}}Record(t){return new S(t)}Tuple(...t){return new A(t)}Rec(){return new ne}Vec(t){return new P(t)}Variant(t){return new b(t)}Opt(t){return new v(t)}},jt=new Re,fe=e=>e({IDL:jt});function qe(e,t){function n(a,r,c){try{if(c instanceof v)return r===void 0?[]:r===null?[]:[n("(opt)",r,c.val)];if(c instanceof P){if(r=c.fromState(r),ArrayBuffer.isView(r)||r instanceof ArrayBuffer)return r;if(!Array.isArray(r))throw"(array expected)";return r.map((i,s)=>n(s,i,c.val))}else if(c instanceof A){if(!Array.isArray(r))throw"(array expected)";return r.map((i,s)=>n(s,i,c.val[s]))}else if(c instanceof b){let i=Object.keys(r)[0];return{[i]:n(i,r[i],c.val[i])}}else if(c instanceof S){let i={};for(let s in c.val){let l=c.val[s]instanceof v;if(r.hasOwnProperty(s))i[s]=n(s,r[s],c.val[s]);else if(l)i[s]=[];else throw`${s} (missing)`}return i}else return c.fromState(r)}catch(i){throw a+"."+i}}return e.map((a,r)=>n("arg"+r,a,t[r]))}function Ce(e,t){function n(a,r,c){try{if(c instanceof v)return r===null?null:r.length===0?void 0:n("(opt)",r[0],c.val);if(c instanceof P){if(ArrayBuffer.isView(r)||r instanceof ArrayBuffer)return r;if(!Array.isArray(r))throw"(array expected)";return r.map((i,s)=>n(s,i,c.val))}else if(c instanceof A){if(!Array.isArray(r))throw"(array expected)";return r.map((i,s)=>n(s,i,c.val[s]))}else if(c instanceof b){let i=Object.keys(r)[0];return{[i]:n(i,r[i],c.val[i])}}else if(c instanceof S){let i={};for(let s in c.val){let l=c.val[s]instanceof v;if(r.hasOwnProperty(s)){let u=n(s,r[s],c.val[s]);u!==null&&(i[s]=u)}else if(!l)throw`${s} (missing)`}return i}else return r}catch(i){throw a+"."+i}}let o=n("ret",e,t!==null?t[0]:!0);if(t[0]&&t[0]instanceof b&&"Ok"in t[0].val&&"Err"in t[0].val&&Object.keys(t[0].val).length==2){if("Ok"in o)return o.Ok;throw o.Err}return o}var Gt=(e,t,n)=>async(...o)=>{let a=qe(o,n[t].input),r=await e(...a);return Ce(r,n[t].output)},Oe=(e,t)=>{let n=fe(t),o={};for(let a in e)typeof e[a]=="function"?o[a]=Gt(e[a],a,n):o[a]=e[a];return zt(o,t,n),o},zt=(e,t,n)=>{let o=t({IDL:ye});for(let[a,r]of o._fields)e[a+"$"]=(...c)=>[...ye.encode(r.argTypes,qe(c,n[a].input))],e["$"+a]=c=>Ce(ye.decode(r.retTypes,Buffer.from(c))[0],n[a].output)},re=e=>e==null?e:typeof e=="bigint"?e.toString():e instanceof Uint8Array?Qt(e):e instanceof Uint16Array||e instanceof Int16Array||e instanceof Uint32Array||e instanceof Int32Array?Array.from(e):e instanceof BigInt64Array?Array.from(e,t=>t.toString()):e instanceof BigUint64Array?Array.from(e,t=>t.toString()):ArrayBuffer.isView(e)||e instanceof ArrayBuffer?[...e]:Array.isArray(e)?e.map(t=>re(t)):typeof e=="object"?e instanceof Ae||e.constructor?.name==="Principal"?e.toText():Object.fromEntries(Object.keys(e).map(t=>[t,re(e[t])])):e;function $t(e){return/^[0-9a-fA-F]+$/.test(e)}function Jt(e){if(e.length%2!==0)throw new Error("Invalid hex string length.");let t=e.length/2,n=new Uint8Array(t);for(let o=0;o<t;o++){let a=parseInt(e.slice(o*2,o*2+2),16);n[o]=a}return n}function Qt(e){let t="";for(let n=0;n<e.length;n++){let a=e[n].toString(16).padStart(2,"0");t+=a}return t}var Me=({IDL:e})=>{let t=e.Variant({mainnet:e.Null,testnet:e.Null}),n=e.Text,o=e.Record({network:t,address:n,min_confirmations:e.Opt(e.Nat32)}),a=e.Nat64,r=e.Record({network:t}),c=e.Nat64,i=e.Record({network:t,filter:e.Opt(e.Variant({page:e.Vec(e.Nat8),min_confirmations:e.Nat32})),address:n}),s=e.Vec(e.Nat8),l=e.Record({txid:e.Vec(e.Nat8),vout:e.Nat32}),u=e.Record({height:e.Nat32,value:a,outpoint:l}),N=e.Record({next_page:e.Opt(e.Vec(e.Nat8)),tip_height:e.Nat32,tip_block_hash:s,utxos:e.Vec(u)}),p=e.Record({transaction:e.Vec(e.Nat8),network:t}),d=e.Principal,f=e.Record({freezing_threshold:e.Nat,controllers:e.Vec(e.Principal),memory_allocation:e.Nat,compute_allocation:e.Nat}),_=e.Record({freezing_threshold:e.Opt(e.Nat),controllers:e.Opt(e.Vec(e.Principal)),memory_allocation:e.Opt(e.Nat),compute_allocation:e.Opt(e.Nat)}),y=e.Variant({secp256k1:e.Null}),O=e.Record({value:e.Text,name:e.Text}),R=e.Record({status:e.Nat,body:e.Vec(e.Nat8),headers:e.Vec(O)}),w=e.Vec(e.Nat8),g=e.Variant({bls12_381:e.Null});return e.Service({bitcoin_get_balance:e.Func([o],[a],[]),bitcoin_get_current_fee_percentiles:e.Func([r],[e.Vec(c)],[]),bitcoin_get_utxos:e.Func([i],[N],[]),bitcoin_send_transaction:e.Func([p],[],[]),canister_status:e.Func([e.Record({canister_id:d})],[e.Record({status:e.Variant({stopped:e.Null,stopping:e.Null,running:e.Null}),memory_size:e.Nat,cycles:e.Nat,settings:f,idle_cycles_burned_per_day:e.Nat,module_hash:e.Opt(e.Vec(e.Nat8))})],[]),create_canister:e.Func([e.Record({settings:e.Opt(_)})],[e.Record({canister_id:d})],[]),delete_canister:e.Func([e.Record({canister_id:d})],[],[]),deposit_cycles:e.Func([e.Record({canister_id:d})],[],[]),ecdsa_public_key:e.Func([e.Record({key_id:e.Record({name:e.Text,curve:y}),canister_id:e.Opt(d),derivation_path:e.Vec(e.Vec(e.Nat8))})],[e.Record({public_key:e.Vec(e.Nat8),chain_code:e.Vec(e.Nat8)})],[]),http_request:e.Func([e.Record({url:e.Text,method:e.Variant({get:e.Null,head:e.Null,post:e.Null}),max_response_bytes:e.Opt(e.Nat64),body:e.Opt(e.Vec(e.Nat8)),transform:e.Opt(e.Record({function:e.Func([e.Record({context:e.Vec(e.Nat8),response:R})],[R],["query"]),context:e.Vec(e.Nat8)})),headers:e.Vec(O)})],[R],[]),install_code:e.Func([e.Record({arg:e.Vec(e.Nat8),wasm_module:w,mode:e.Variant({reinstall:e.Null,upgrade:e.Null,install:e.Null}),canister_id:d})],[],[]),provisional_create_canister_with_cycles:e.Func([e.Record({settings:e.Opt(_),specified_id:e.Opt(d),amount:e.Opt(e.Nat)})],[e.Record({canister_id:d})],[]),provisional_top_up_canister:e.Func([e.Record({canister_id:d,amount:e.Nat})],[],[]),raw_rand:e.Func([],[e.Vec(e.Nat8)],[]),sign_with_ecdsa:e.Func([e.Record({key_id:e.Record({name:e.Text,curve:y}),derivation_path:e.Vec(e.Vec(e.Nat8)),message_hash:e.Vec(e.Nat8)})],[e.Record({signature:e.Vec(e.Nat8)})],[]),start_canister:e.Func([e.Record({canister_id:d})],[],[]),stop_canister:e.Func([e.Record({canister_id:d})],[],[]),uninstall_code:e.Func([e.Record({canister_id:d})],[],[]),update_settings:e.Func([e.Record({canister_id:e.Principal,settings:_})],[],[]),vetkd_encrypted_key:e.Func([e.Record({key_id:e.Record({name:e.Text,curve:g}),derivation_id:e.Vec(e.Nat8),encryption_public_key:e.Vec(e.Nat8),public_key_derivation_path:e.Vec(e.Vec(e.Nat8))})],[e.Record({encrypted_key:e.Vec(e.Nat8)})],[]),vetkd_public_key:e.Func([e.Record({key_id:e.Record({name:e.Text,curve:g}),canister_id:e.Opt(d),derivation_path:e.Vec(e.Vec(e.Nat8))})],[e.Record({public_key:e.Vec(e.Nat8)})],[])})};var Be=({IDL:e})=>{let t=e.Variant({User:e.Null,Canister:e.Null,Unknown:e.Null}),n=e.Variant({Custodian:e.Null,Contact:e.Null,Controller:e.Null}),o=e.Record({id:e.Principal,kind:t,name:e.Opt(e.Text),role:n}),a=e.Variant({Ok:e.Null,Err:e.Text}),r=e.Variant({CyclesReceived:e.Record({from:e.Principal,amount:e.Nat64}),CanisterCreated:e.Record({cycles:e.Nat64,canister:e.Principal}),CanisterCalled:e.Record({cycles:e.Nat64,method_name:e.Text,canister:e.Principal}),CyclesSent:e.Record({to:e.Principal,amount:e.Nat64,refund:e.Nat64}),AddressRemoved:e.Record({id:e.Principal}),WalletDeployed:e.Record({canister:e.Principal}),AddressAdded:e.Record({id:e.Principal,name:e.Opt(e.Text),role:n})}),c=e.Record({id:e.Nat32,kind:r,timestamp:e.Nat64}),i=e.Tuple(e.Text,e.Text),s=e.Record({url:e.Text,method:e.Text,body:e.Vec(e.Nat8),headers:e.Vec(i)}),l=e.Record({}),u=e.Record({token:e.Opt(l),body:e.Vec(e.Nat8)}),N=e.Variant({Callback:e.Record({token:l,callback:e.Func([l],[u],["query"])})}),p=e.Record({body:e.Vec(e.Nat8),headers:e.Vec(i),streaming_strategy:e.Opt(N),status_code:e.Nat16}),d=e.Variant({Ok:e.Record({return:e.Vec(e.Nat8)}),Err:e.Text}),f=e.Record({controller:e.Opt(e.Principal),freezing_threshold:e.Opt(e.Nat),memory_allocation:e.Opt(e.Nat),compute_allocation:e.Opt(e.Nat)}),_=e.Record({cycles:e.Nat64,settings:f}),y=e.Variant({Ok:e.Record({canister_id:e.Principal}),Err:e.Text});return e.Service({add_address:e.Func([o],[],[]),add_controller:e.Func([e.Principal],[],[]),authorize:e.Func([e.Principal],[],[]),deauthorize:e.Func([e.Principal],[a],[]),get_chart:e.Func([e.Opt(e.Record({count:e.Opt(e.Nat32),precision:e.Opt(e.Nat64)}))],[e.Vec(e.Tuple(e.Nat64,e.Nat64))],["query"]),get_controllers:e.Func([],[e.Vec(e.Principal)],["query"]),get_custodians:e.Func([],[e.Vec(e.Principal)],["query"]),get_events:e.Func([e.Opt(e.Record({to:e.Opt(e.Nat32),from:e.Opt(e.Nat32)}))],[e.Vec(c)],["query"]),http_request:e.Func([s],[p],["query"]),list_addresses:e.Func([],[e.Vec(o)],["query"]),name:e.Func([],[e.Opt(e.Text)],["query"]),remove_address:e.Func([e.Principal],[a],[]),remove_controller:e.Func([e.Principal],[a],[]),set_name:e.Func([e.Text],[],[]),wallet_balance:e.Func([],[e.Record({amount:e.Nat64})],["query"]),wallet_call:e.Func([e.Record({args:e.Vec(e.Nat8),cycles:e.Nat64,method_name:e.Text,canister:e.Principal})],[d],[]),wallet_create_canister:e.Func([_],[y],[]),wallet_create_wallet:e.Func([_],[y],[]),wallet_receive:e.Func([],[],[]),wallet_send:e.Func([e.Record({canister:e.Principal,amount:e.Nat64})],[a],[]),wallet_store_wallet_wasm:e.Func([e.Record({wasm_module:e.Vec(e.Nat8)})],[],[])})};var We=({IDL:e})=>e.Service({binding:e.Func([e.Text,e.Text],[e.Opt(e.Text)],["query"]),did_to_js:e.Func([e.Text],[e.Opt(e.Text)],["query"]),subtype:e.Func([e.Text,e.Text],[e.Variant({Ok:e.Null,Err:e.Text})],["query"])});var Ue=({IDL:e})=>e.Service({evalScript:e.Func([e.Text],[e.Text],[])});var He=({IDL:e})=>{let t=e.Vec(e.Nat8),n=e.Record({account:t}),o=e.Record({e8s:e.Nat64}),a=e.Record({canister_id:e.Principal}),r=e.Record({archives:e.Vec(a)}),c=e.Nat64,i=e.Record({start:c,length:e.Nat64}),s=e.Nat64,l=e.Variant({Burn:e.Record({from:t,amount:o}),Mint:e.Record({to:t,amount:o}),Transfer:e.Record({to:t,fee:o,from:t,amount:o})}),u=e.Record({timestamp_nanos:e.Nat64}),N=e.Record({memo:s,operation:e.Opt(l),created_at_time:u}),p=e.Record({transaction:N,timestamp:u,parent_hash:e.Opt(e.Vec(e.Nat8))}),d=e.Record({blocks:e.Vec(p)}),f=e.Variant({BadFirstBlockIndex:e.Record({requested_index:c,first_valid_index:c}),Other:e.Record({error_message:e.Text,error_code:e.Nat64})}),_=e.Variant({Ok:d,Err:f}),y=e.Func([i],[_],["query"]),O=e.Record({certificate:e.Opt(e.Vec(e.Nat8)),blocks:e.Vec(p),chain_length:e.Nat64,first_block_index:c,archived_blocks:e.Vec(e.Record({callback:y,start:c,length:e.Nat64}))}),R=e.Vec(e.Nat8),w=e.Record({to:t,fee:o,memo:s,from_subaccount:e.Opt(R),created_at_time:e.Opt(u),amount:o}),g=e.Variant({TxTooOld:e.Record({allowed_window_nanos:e.Nat64}),BadFee:e.Record({expected_fee:o}),TxDuplicate:e.Record({duplicate_of:c}),TxCreatedInFuture:e.Null,InsufficientFunds:e.Record({balance:o})}),T=e.Variant({Ok:c,Err:g}),k=e.Record({}),V=e.Record({transfer_fee:o});return e.Service({account_balance:e.Func([n],[o],["query"]),archives:e.Func([],[r],["query"]),decimals:e.Func([],[e.Record({decimals:e.Nat32})],["query"]),name:e.Func([],[e.Record({name:e.Text})],["query"]),query_blocks:e.Func([i],[O],["query"]),symbol:e.Func([],[e.Record({symbol:e.Text})],["query"]),transfer:e.Func([w],[T],[]),transfer_fee:e.Func([k],[V],["query"])})};var Ke=({IDL:e})=>{let t=e.Rec(),n=e.Record({id:e.Nat64}),o=e.Record({followees:e.Vec(n)}),a=e.Record({hash:e.Vec(e.Nat8)}),r=e.Record({id:e.Opt(e.Principal),reward_account:e.Opt(a)}),c=e.Record({dissolve_delay_seconds:e.Nat64}),i=e.Record({to_account:e.Opt(a)}),s=e.Variant({RewardToNeuron:c,RewardToAccount:i}),l=e.Record({node_provider:e.Opt(r),reward_mode:e.Opt(s),amount_e8s:e.Nat64}),u=e.Record({timestamp:e.Nat64,rewards:e.Vec(l)}),N=e.Record({not_dissolving_neurons_e8s_buckets:e.Vec(e.Tuple(e.Nat64,e.Float64)),garbage_collectable_neurons_count:e.Nat64,neurons_with_invalid_stake_count:e.Nat64,not_dissolving_neurons_count_buckets:e.Vec(e.Tuple(e.Nat64,e.Nat64)),total_supply_icp:e.Nat64,neurons_with_less_than_6_months_dissolve_delay_count:e.Nat64,dissolved_neurons_count:e.Nat64,total_staked_e8s:e.Nat64,not_dissolving_neurons_count:e.Nat64,dissolved_neurons_e8s:e.Nat64,neurons_with_less_than_6_months_dissolve_delay_e8s:e.Nat64,dissolving_neurons_count_buckets:e.Vec(e.Tuple(e.Nat64,e.Nat64)),dissolving_neurons_count:e.Nat64,dissolving_neurons_e8s_buckets:e.Vec(e.Tuple(e.Nat64,e.Float64)),community_fund_total_staked_e8s:e.Nat64,timestamp_seconds:e.Nat64}),p=e.Record({neuron_minimum_stake_e8s:e.Nat64,max_proposals_to_keep_per_topic:e.Nat32,neuron_management_fee_per_proposal_e8s:e.Nat64,reject_cost_e8s:e.Nat64,transaction_fee_e8s:e.Nat64,neuron_spawn_dissolve_delay_seconds:e.Nat64,minimum_icp_xdr_rate:e.Nat64,maximum_node_provider_rewards_e8s:e.Nat64}),d=e.Record({day_after_genesis:e.Nat64,actual_timestamp_seconds:e.Nat64,distributed_e8s_equivalent:e.Nat64,settled_proposals:e.Vec(n)}),f=e.Record({to_subaccount:e.Vec(e.Nat8),neuron_stake_e8s:e.Nat64,from:e.Opt(e.Principal),memo:e.Nat64,from_subaccount:e.Vec(e.Nat8),transfer_timestamp:e.Nat64,block_height:e.Nat64}),_=e.Record({error_message:e.Text,error_type:e.Int32}),y=e.Record({nns_neuron_id:e.Nat64,amount_icp_e8s:e.Nat64}),O=e.Record({hotkey_principal:e.Text,cf_neurons:e.Vec(y)}),R=e.Record({vote:e.Int32,voting_power:e.Nat64}),w=e.Record({no:e.Nat64,yes:e.Nat64,total:e.Nat64,timestamp_seconds:e.Nat64}),g=e.Record({name:e.Text,description:e.Opt(e.Text)}),T=e.Record({id:e.Opt(n),known_neuron_data:e.Opt(g)}),k=e.Record({percentage_to_spawn:e.Opt(e.Nat32),new_controller:e.Opt(e.Principal),nonce:e.Opt(e.Nat64)}),V=e.Record({amount_e8s:e.Nat64}),q=e.Record({topic:e.Int32,followees:e.Vec(n)}),h=e.Record({controller:e.Opt(e.Principal),memo:e.Nat64}),oe=e.Variant({NeuronIdOrSubaccount:e.Record({}),MemoAndController:h,Memo:e.Nat64}),E=e.Record({by:e.Opt(oe)}),ae=e.Record({hot_key_to_remove:e.Opt(e.Principal)}),ce=e.Record({new_hot_key:e.Opt(e.Principal)}),se=e.Record({requested_setting_for_auto_stake_maturity:e.Bool}),M=e.Record({additional_dissolve_delay_seconds:e.Nat32}),ie=e.Record({dissolve_timestamp_seconds:e.Nat64}),le=e.Variant({RemoveHotKey:ae,AddHotKey:ce,ChangeAutoStakeMaturity:se,StopDissolving:e.Record({}),StartDissolving:e.Record({}),IncreaseDissolveDelay:M,JoinCommunityFund:e.Record({}),LeaveCommunityFund:e.Record({}),SetDissolveTimestamp:ie}),B=e.Record({operation:e.Opt(le)}),ue=e.Record({vote:e.Int32,proposal:e.Opt(n)}),W=e.Record({source_neuron_id:e.Opt(n)}),U=e.Record({dissolve_delay_seconds:e.Nat64,kyc_verified:e.Bool,amount_e8s:e.Nat64,new_controller:e.Opt(e.Principal),nonce:e.Nat64}),Ie=e.Record({percentage_to_stake:e.Opt(e.Nat32)}),Te=e.Record({percentage_to_merge:e.Nat32}),De=e.Record({e8s:e.Nat64}),Ve=e.Record({to_account:e.Opt(a),amount:e.Opt(De)}),Le=e.Variant({Spawn:k,Split:V,Follow:q,ClaimOrRefresh:E,Configure:B,RegisterVote:ue,Merge:W,DisburseToNeuron:U,MakeProposal:t,StakeMaturity:Ie,MergeMaturity:Te,Disburse:Ve}),de=e.Variant({Subaccount:e.Vec(e.Nat8),NeuronId:n}),Fe=e.Record({id:e.Opt(n),command:e.Opt(Le),neuron_id_or_subaccount:e.Opt(de)}),et=e.Record({nns_function:e.Int32,payload:e.Vec(e.Nat8)}),tt=e.Record({min_participant_icp_e8s:e.Nat64,max_icp_e8s:e.Nat64,swap_due_timestamp_seconds:e.Nat64,min_participants:e.Nat32,sns_token_e8s:e.Nat64,max_participant_icp_e8s:e.Nat64,min_icp_e8s:e.Nat64}),nt=e.Record({community_fund_investment_e8s:e.Opt(e.Nat64),target_swap_canister_id:e.Opt(e.Principal),params:e.Opt(tt)}),rt=e.Record({start_timestamp_seconds:e.Nat64,end_timestamp_seconds:e.Nat64}),ot=e.Record({open_time_window:e.Opt(rt)}),at=e.Record({request:e.Opt(ot),swap_canister_id:e.Opt(e.Principal)}),ct=e.Record({default_followees:e.Vec(e.Tuple(e.Int32,o))}),ve=e.Record({use_registry_derived_rewards:e.Opt(e.Bool),rewards:e.Vec(l)}),st=e.Record({principals:e.Vec(e.Principal)}),it=e.Variant({ToRemove:r,ToAdd:r}),lt=e.Record({change:e.Opt(it)}),ut=e.Record({motion_text:e.Text}),dt=e.Variant({RegisterKnownNeuron:T,ManageNeuron:Fe,ExecuteNnsFunction:et,RewardNodeProvider:l,OpenSnsTokenSwap:nt,SetSnsTokenSwapOpenTimeWindow:at,SetDefaultFollowees:ct,RewardNodeProviders:ve,ManageNetworkEconomics:p,ApproveGenesisKyc:st,AddOrRemoveNodeProvider:lt,Motion:ut});t.fill(e.Record({url:e.Text,title:e.Opt(e.Text),action:e.Opt(dt),summary:e.Text}));let _t=e.Record({current_deadline_timestamp_seconds:e.Nat64}),pt=e.Record({id:e.Opt(n),failure_reason:e.Opt(_),cf_participants:e.Vec(O),ballots:e.Vec(e.Tuple(e.Nat64,R)),proposal_timestamp_seconds:e.Nat64,reward_event_round:e.Nat64,failed_timestamp_seconds:e.Nat64,reject_cost_e8s:e.Nat64,latest_tally:e.Opt(w),sns_token_swap_lifecycle:e.Opt(e.Int32),decided_timestamp_seconds:e.Nat64,proposal:e.Opt(t),proposer:e.Opt(n),wait_for_quiet_state:e.Opt(_t),executed_timestamp_seconds:e.Nat64,original_total_community_fund_maturity_e8s_equivalent:e.Opt(e.Nat64)}),mt=e.Variant({Spawn:n,Split:V,Configure:B,Merge:W,DisburseToNeuron:U,SyncCommand:e.Record({}),ClaimOrRefreshNeuron:E,MergeMaturity:Te,Disburse:Ve}),Nt=e.Record({command:e.Opt(mt),timestamp:e.Nat64}),xe=e.Record({vote:e.Int32,proposal_id:e.Opt(n)}),yt=e.Variant({DissolveDelaySeconds:e.Nat64,WhenDissolvedTimestampSeconds:e.Nat64}),_e=e.Record({id:e.Opt(n),staked_maturity_e8s_equivalent:e.Opt(e.Nat64),controller:e.Opt(e.Principal),recent_ballots:e.Vec(xe),kyc_verified:e.Bool,not_for_profit:e.Bool,maturity_e8s_equivalent:e.Nat64,cached_neuron_stake_e8s:e.Nat64,created_timestamp_seconds:e.Nat64,auto_stake_maturity:e.Opt(e.Bool),aging_since_timestamp_seconds:e.Nat64,hot_keys:e.Vec(e.Principal),account:e.Vec(e.Nat8),joined_community_fund_timestamp_seconds:e.Opt(e.Nat64),dissolve_state:e.Opt(yt),followees:e.Vec(e.Tuple(e.Int32,o)),neuron_fees_e8s:e.Nat64,transfer:e.Opt(f),known_neuron_data:e.Opt(g),spawn_at_timestamp_seconds:e.Opt(e.Nat64)}),wn=e.Record({default_followees:e.Vec(e.Tuple(e.Int32,o)),most_recent_monthly_node_provider_rewards:e.Opt(u),maturity_modulation_last_updated_at_timestamp_seconds:e.Opt(e.Nat64),wait_for_quiet_threshold_seconds:e.Nat64,metrics:e.Opt(N),node_providers:e.Vec(r),cached_daily_maturity_modulation_basis_points:e.Opt(e.Int32),economics:e.Opt(p),spawning_neurons:e.Opt(e.Bool),latest_reward_event:e.Opt(d),to_claim_transfers:e.Vec(f),short_voting_period_seconds:e.Nat64,proposals:e.Vec(e.Tuple(e.Nat64,pt)),in_flight_commands:e.Vec(e.Tuple(e.Nat64,Nt)),neurons:e.Vec(e.Tuple(e.Nat64,_e)),genesis_timestamp_seconds:e.Nat64}),H=e.Variant({Ok:e.Null,Err:_}),Rt=e.Variant({Error:_,NeuronId:n}),ft=e.Record({result:e.Opt(Rt)}),ke=e.Variant({Ok:_e,Err:_}),Ot=e.Variant({Ok:ve,Err:_}),be=e.Record({dissolve_delay_seconds:e.Nat64,recent_ballots:e.Vec(xe),created_timestamp_seconds:e.Nat64,state:e.Int32,stake_e8s:e.Nat64,joined_community_fund_timestamp_seconds:e.Opt(e.Nat64),retrieved_at_timestamp_seconds:e.Nat64,known_neuron_data:e.Opt(g),voting_power:e.Nat64,age_seconds:e.Nat64}),Pe=e.Variant({Ok:be,Err:_}),gt=e.Variant({Ok:r,Err:_}),pe=e.Record({id:e.Opt(n),status:e.Int32,topic:e.Int32,failure_reason:e.Opt(_),ballots:e.Vec(e.Tuple(e.Nat64,R)),proposal_timestamp_seconds:e.Nat64,reward_event_round:e.Nat64,deadline_timestamp_seconds:e.Opt(e.Nat64),failed_timestamp_seconds:e.Nat64,reject_cost_e8s:e.Nat64,latest_tally:e.Opt(w),reward_status:e.Int32,decided_timestamp_seconds:e.Nat64,proposal:e.Opt(t),proposer:e.Opt(n),executed_timestamp_seconds:e.Nat64}),wt=e.Record({known_neurons:e.Vec(T)}),ht=e.Record({neuron_ids:e.Vec(e.Nat64),include_neurons_readable_by_caller:e.Bool}),Tt=e.Record({neuron_infos:e.Vec(e.Tuple(e.Nat64,be)),full_neurons:e.Vec(_e)}),Vt=e.Record({node_providers:e.Vec(r)}),Ft=e.Record({include_reward_status:e.Vec(e.Int32),before_proposal:e.Opt(n),limit:e.Nat32,exclude_topic:e.Vec(e.Int32),include_status:e.Vec(e.Int32)}),vt=e.Record({proposal_info:e.Vec(pe)}),me=e.Record({created_neuron_id:e.Opt(n)}),xt=e.Record({refreshed_neuron_id:e.Opt(n)}),kt=e.Record({proposal_id:e.Opt(n)}),bt=e.Record({maturity_e8s:e.Nat64,staked_maturity_e8s:e.Nat64}),Pt=e.Record({merged_maturity_e8s:e.Nat64,new_stake_e8s:e.Nat64}),St=e.Record({transfer_block_height:e.Nat64}),At=e.Variant({Error:_,Spawn:me,Split:me,Follow:e.Record({}),ClaimOrRefresh:xt,Configure:e.Record({}),RegisterVote:e.Record({}),Merge:e.Record({}),DisburseToNeuron:me,MakeProposal:kt,StakeMaturity:bt,MergeMaturity:Pt,Disburse:St}),qt=e.Record({command:e.Opt(At)}),Ct=e.Record({sns_governance_canister_id:e.Opt(e.Principal)}),Et=e.Variant({Committed:Ct,Aborted:e.Record({})}),Mt=e.Record({result:e.Opt(Et),open_sns_token_swap_proposal_id:e.Opt(e.Nat64)}),Bt=e.Record({reward_account:e.Opt(a)});return e.Service({claim_gtc_neurons:e.Func([e.Principal,e.Vec(n)],[H],[]),claim_or_refresh_neuron_from_account:e.Func([h],[ft],[]),get_build_metadata:e.Func([],[e.Text],["query"]),get_full_neuron:e.Func([e.Nat64],[ke],["query"]),get_full_neuron_by_id_or_subaccount:e.Func([de],[ke],["query"]),get_monthly_node_provider_rewards:e.Func([],[Ot],[]),get_most_recent_monthly_node_provider_rewards:e.Func([],[e.Opt(u)],["query"]),get_network_economics_parameters:e.Func([],[p],["query"]),get_neuron_ids:e.Func([],[e.Vec(e.Nat64)],["query"]),get_neuron_info:e.Func([e.Nat64],[Pe],["query"]),get_neuron_info_by_id_or_subaccount:e.Func([de],[Pe],["query"]),get_node_provider_by_caller:e.Func([e.Null],[gt],["query"]),get_pending_proposals:e.Func([],[e.Vec(pe)],["query"]),get_proposal_info:e.Func([e.Nat64],[e.Opt(pe)],["query"]),list_known_neurons:e.Func([],[wt],["query"]),list_neurons:e.Func([ht],[Tt],["query"]),list_node_providers:e.Func([],[Vt],["query"]),list_proposals:e.Func([Ft],[vt],["query"]),manage_neuron:e.Func([Fe],[qt],[]),settle_community_fund_participation:e.Func([Mt],[H],[]),transfer_gtc_neuron:e.Func([n,n],[H],[]),update_node_provider:e.Func([Bt],[H],[])})};var je=({IDL:e})=>{let t=e.Text,n=e.Vec(e.Nat8),o=e.Record({swap_canister_id:e.Principal,buyer_sub_account:e.Opt(n),buyer:e.Principal}),a=e.Variant({Ok:e.Null,NotAuthorized:e.Null}),r=e.Record({name:e.Text,canister_id:e.Principal}),c=e.Variant({Ok:e.Null,CanisterAlreadyAttached:e.Null,NameAlreadyTaken:e.Null,NameTooLong:e.Null,CanisterLimitExceeded:e.Null}),i=e.Record({name:e.Text,sub_account:n,account_identifier:t}),s=e.Variant({Ok:i,AccountNotFound:e.Null,NameTooLong:e.Null,SubAccountLimitExceeded:e.Null}),l=e.Record({canister_id:e.Principal}),u=e.Variant({Ok:e.Null,CanisterNotFound:e.Null}),N=e.Record({principal:e.Principal,name:e.Text,account_identifier:t}),p=e.Record({principal:e.Principal,account_identifier:t,hardware_wallet_accounts:e.Vec(N),sub_accounts:e.Vec(i)}),d=e.Variant({Ok:p,AccountNotFound:e.Null}),f=e.Record({name:e.Text,canister_id:e.Principal}),_=e.Nat64,y=e.Record({error_message:e.Text,block_height:_}),O=e.Principal,R=e.Nat64,w=e.Variant({Queued:e.Null,Error:e.Text,Refunded:e.Tuple(_,e.Text),CanisterCreated:O,Complete:e.Null,NotFound:e.Null,NeuronCreated:R,PendingSync:e.Null,ErrorWithRefundPending:e.Text}),g=e.Variant({Ok:e.Text,Err:e.Text}),T=e.Record({latest_transaction_block_height:_,seconds_since_last_ledger_sync:e.Nat64,sub_accounts_count:e.Nat64,neurons_topped_up_count:e.Nat64,transactions_to_process_queue_length:e.Nat32,neurons_created_count:e.Nat64,hardware_wallet_accounts_count:e.Nat64,accounts_count:e.Nat64,earliest_transaction_block_height:_,transactions_count:e.Nat64,block_height_synced_up_to:e.Opt(e.Nat64),latest_transaction_timestamp_nanos:e.Nat64,earliest_transaction_timestamp_nanos:e.Nat64}),k=e.Record({page_size:e.Nat8,offset:e.Nat32,account_identifier:t}),V=e.Variant({Burn:e.Null,Mint:e.Null,StakeNeuronNotification:e.Null,TopUpCanister:O,ParticipateSwap:O,CreateCanister:e.Null,Transfer:e.Null,TopUpNeuron:e.Null,StakeNeuron:e.Null}),q=e.Record({timestamp_nanos:e.Nat64}),h=e.Record({e8s:e.Nat64}),oe=e.Record({to:t,fee:h,amount:h}),E=e.Record({fee:h,from:t,amount:h}),ae=e.Variant({Burn:e.Record({amount:h}),Mint:e.Record({amount:h}),Send:oe,Receive:E}),ce=e.Record({transaction_type:e.Opt(V),memo:e.Nat64,timestamp:q,block_height:_,transfer:ae}),se=e.Record({total:e.Nat32,transactions:e.Vec(ce)}),M=e.Tuple(e.Text,e.Text),ie=e.Record({url:e.Text,method:e.Text,body:e.Vec(e.Nat8),headers:e.Vec(M)}),le=e.Record({body:e.Vec(e.Nat8),headers:e.Vec(M),status_code:e.Nat16}),B=e.Record({principal:e.Principal,name:e.Text}),ue=e.Variant({Ok:e.Null,AccountNotFound:e.Null,HardwareWalletAlreadyRegistered:e.Null,HardwareWalletLimitExceeded:e.Null,NameTooLong:e.Null}),W=e.Record({new_name:e.Text,account_identifier:t}),U=e.Variant({Ok:e.Null,AccountNotFound:e.Null,SubAccountNotFound:e.Null,NameTooLong:e.Null});return e.Service({add_account:e.Func([],[t],[]),add_pending_notify_swap:e.Func([o],[a],[]),add_stable_asset:e.Func([e.Vec(e.Nat8)],[],[]),attach_canister:e.Func([r],[c],[]),create_sub_account:e.Func([e.Text],[s],[]),detach_canister:e.Func([l],[u],[]),get_account:e.Func([],[d],["query"]),get_canisters:e.Func([],[e.Vec(f)],["query"]),get_multi_part_transaction_errors:e.Func([],[e.Vec(y)],["query"]),get_multi_part_transaction_status:e.Func([e.Principal,_],[w],["query"]),get_proposal_payload:e.Func([e.Nat64],[g],[]),get_stats:e.Func([],[T],["query"]),get_transactions:e.Func([k],[se],["query"]),http_request:e.Func([ie],[le],["query"]),register_hardware_wallet:e.Func([B],[ue],[]),rename_sub_account:e.Func([W],[U],[])})};var Ge=({IDL:e})=>{let t=e.Record({access_controls_enabled:e.Bool,sns_subnet_ids:e.Vec(e.Principal)}),n=e.Record({wasm:e.Vec(e.Nat8),canister_type:e.Int32}),o=e.Record({hash:e.Vec(e.Nat8),wasm:e.Opt(n)}),a=e.Record({message:e.Text}),r=e.Variant({Error:a,Hash:e.Vec(e.Nat8)}),c=e.Record({result:e.Opt(r)}),i=e.Record({total_e8s:e.Nat64}),s=e.Record({controller:e.Opt(e.Principal),stake_e8s:e.Nat64}),l=e.Record({developer_neurons:e.Vec(s)}),u=e.Record({airdrop_neurons:e.Vec(s)}),N=e.Record({total_e8s:e.Nat64,initial_swap_amount_e8s:e.Nat64}),p=e.Record({treasury_distribution:e.Opt(i),developer_distribution:e.Opt(l),airdrop_distribution:e.Opt(u),swap_distribution:e.Opt(N)}),d=e.Variant({FractionalDeveloperVotingPower:p}),f=e.Record({url:e.Opt(e.Text),min_participant_icp_e8s:e.Opt(e.Nat64),fallback_controller_principal_ids:e.Vec(e.Text),token_symbol:e.Opt(e.Text),max_icp_e8s:e.Opt(e.Nat64),neuron_minimum_stake_e8s:e.Opt(e.Nat64),logo:e.Opt(e.Text),name:e.Opt(e.Text),description:e.Opt(e.Text),min_participants:e.Opt(e.Nat32),transaction_fee_e8s:e.Opt(e.Nat64),initial_token_distribution:e.Opt(d),token_name:e.Opt(e.Text),max_participant_icp_e8s:e.Opt(e.Nat64),proposal_reject_cost_e8s:e.Opt(e.Nat64),min_icp_e8s:e.Opt(e.Nat64)}),_=e.Record({sns_init_payload:e.Opt(f)}),y=e.Record({root:e.Opt(e.Principal),swap:e.Opt(e.Principal),ledger:e.Opt(e.Principal),governance:e.Opt(e.Principal)}),O=e.Record({subnet_id:e.Opt(e.Principal),error:e.Opt(a),canisters:e.Opt(y)}),R=e.Record({archive_wasm_hash:e.Vec(e.Nat8),root_wasm_hash:e.Vec(e.Nat8),swap_wasm_hash:e.Vec(e.Nat8),ledger_wasm_hash:e.Vec(e.Nat8),governance_wasm_hash:e.Vec(e.Nat8)}),w=e.Record({current_version:e.Opt(R)}),g=e.Record({next_version:e.Opt(R)}),T=e.Record({hash:e.Vec(e.Nat8)}),k=e.Record({wasm:e.Opt(n)}),V=e.Record({root_canister_id:e.Opt(e.Principal)}),q=e.Record({instances:e.Vec(V)});return e.Service({add_wasm:e.Func([o],[c],[]),deploy_new_sns:e.Func([_],[O],[]),get_next_sns_version:e.Func([w],[g],["query"]),get_wasm:e.Func([T],[k],["query"]),list_deployed_snses:e.Func([e.Record({})],[q],["query"])})};var ze=({IDL:e})=>{let t=e.Record({xdr_permyriad_per_icp:e.Nat64,timestamp_seconds:e.Nat64}),n=e.Record({certificate:e.Vec(e.Nat8),data:t,hash_tree:e.Vec(e.Nat8)}),o=e.Record({data:e.Vec(e.Tuple(e.Text,e.Vec(e.Principal)))}),a=e.Nat64,r=e.Record({controller:e.Principal,block_index:a,subnet_type:e.Opt(e.Text)}),c=e.Variant({Refunded:e.Record({block_index:e.Opt(a),reason:e.Text}),InvalidTransaction:e.Text,Other:e.Record({error_message:e.Text,error_code:e.Nat64}),Processing:e.Null,TransactionTooOld:a}),i=e.Variant({Ok:e.Principal,Err:c}),s=e.Record({block_index:a,canister_id:e.Principal}),l=e.Nat,u=e.Variant({Ok:l,Err:c});return e.Service({get_icp_xdr_conversion_rate:e.Func([],[n],["query"]),get_subnet_types_to_subnets:e.Func([],[o],["query"]),notify_create_canister:e.Func([r],[i],[]),notify_top_up:e.Func([s],[u],[])})};var $e=({IDL:e})=>{let t=e.Variant({InsufficientAllowance:e.Null,InsufficientBalance:e.Null,ErrorOperationStyle:e.Null,Unauthorized:e.Null,LedgerTrap:e.Null,ErrorTo:e.Null,Other:e.Null,BlockUsed:e.Null,AmountTooSmall:e.Null}),n=e.Variant({Ok:e.Nat,Err:t}),o=e.Record({fee:e.Nat,decimals:e.Nat8,owner:e.Principal,logo:e.Text,name:e.Text,totalSupply:e.Nat,symbol:e.Text}),a=e.Record({holderNumber:e.Nat64,deployTime:e.Nat64,metadata:o,historySize:e.Nat64,cycles:e.Nat64,feeTo:e.Principal});return e.Service({allowance:e.Func([e.Principal,e.Principal],[e.Nat],["query"]),approve:e.Func([e.Principal,e.Nat],[n],[]),balanceOf:e.Func([e.Principal],[e.Nat],["query"]),decimals:e.Func([],[e.Nat8],["query"]),getAllowanceSize:e.Func([],[e.Nat64],["query"]),getBlockUsed:e.Func([],[e.Vec(e.Nat64)],["query"]),getHolders:e.Func([e.Nat64,e.Nat64],[e.Vec(e.Tuple(e.Principal,e.Nat))],["query"]),getMetadata:e.Func([],[o],["query"]),getTokenInfo:e.Func([],[a],["query"]),getUserApprovals:e.Func([e.Principal],[e.Vec(e.Tuple(e.Principal,e.Nat))],["query"]),historySize:e.Func([],[e.Nat64],["query"]),isBlockUsed:e.Func([e.Nat64],[e.Bool],["query"]),logo:e.Func([],[e.Text],["query"]),mint:e.Func([e.Opt(e.Vec(e.Nat8)),e.Nat64],[n],[]),mintFor:e.Func([e.Opt(e.Vec(e.Nat8)),e.Nat64,e.Principal],[n],[]),name:e.Func([],[e.Text],["query"]),owner:e.Func([],[e.Principal],["query"]),setFee:e.Func([e.Nat],[],[]),setFeeTo:e.Func([e.Principal],[],[]),setGenesis:e.Func([],[n],[]),setLogo:e.Func([e.Text],[],[]),setName:e.Func([e.Text],[],[]),setOwner:e.Func([e.Principal],[],[]),symbol:e.Func([],[e.Text],["query"]),totalSupply:e.Func([],[e.Nat],["query"]),transfer:e.Func([e.Principal,e.Nat],[n],[]),transferFrom:e.Func([e.Principal,e.Principal,e.Nat],[n],[]),withdraw:e.Func([e.Nat64,e.Text],[n],[])})};var Je=({IDL:e})=>{let t=e.Variant({NotifyDfxFailed:e.Null,InsufficientAllowance:e.Null,UnexpectedCyclesResponse:e.Null,InsufficientBalance:e.Null,InsufficientXTCFee:e.Null,ErrorOperationStyle:e.Null,Unauthorized:e.Null,LedgerTrap:e.Null,ErrorTo:e.Null,Other:e.Null,FetchRateFailed:e.Null,BlockUsed:e.Null,AmountTooSmall:e.Null}),n=e.Variant({Ok:e.Nat,Err:t}),o=e.Nat64,a=e.Variant({InsufficientBalance:e.Null,InvalidTokenContract:e.Null,NotSufficientLiquidity:e.Null}),r=e.Variant({Ok:o,Err:a}),c=e.Variant({FAILED:e.Null,SUCCEEDED:e.Null}),i=e.Variant({Approve:e.Record({to:e.Principal,from:e.Principal}),Burn:e.Record({to:e.Principal,from:e.Principal}),Mint:e.Record({to:e.Principal}),CanisterCreated:e.Record({from:e.Principal,canister:e.Principal}),CanisterCalled:e.Record({from:e.Principal,method_name:e.Text,canister:e.Principal}),Transfer:e.Record({to:e.Principal,from:e.Principal}),TransferFrom:e.Record({to:e.Principal,from:e.Principal,caller:e.Principal})}),s=e.Record({fee:e.Nat64,status:c,kind:i,cycles:e.Nat64,timestamp:e.Nat64}),l=e.Record({data:e.Vec(s),next_offset:o,next_canister_id:e.Opt(e.Principal)}),u=e.Record({fee:e.Nat,decimals:e.Nat8,owner:e.Principal,logo:e.Text,name:e.Text,totalSupply:e.Nat,symbol:e.Text}),N=e.Variant({transferFrom:e.Null,burn:e.Null,mint:e.Null,approve:e.Null,canisterCalled:e.Null,transfer:e.Null,canisterCreated:e.Null}),p=e.Int,d=e.Record({op:N,to:e.Principal,fee:e.Nat,status:c,from:e.Principal,timestamp:p,caller:e.Opt(e.Principal),index:e.Nat,amount:e.Nat}),f=e.Variant({NotSufficientLiquidity:e.Null}),_=e.Variant({Ok:o,Err:f}),y=e.Record({fee:e.Nat,transfers_count:e.Nat64,balance:e.Nat64,mints_count:e.Nat64,transfers_from_count:e.Nat64,canisters_created_count:e.Nat64,supply:e.Nat,burns_count:e.Nat64,approvals_count:e.Nat64,proxy_calls_count:e.Nat64,history_events:e.Nat64}),O=e.Variant({Ok:e.Nat,Err:e.Variant({InsufficientAllowance:e.Null,InsufficientBalance:e.Null})}),R=e.Variant({Ok:e.Record({return:e.Vec(e.Nat8)}),Err:e.Text}),w=e.Variant({Ok:e.Record({canister_id:e.Principal}),Err:e.Text}),g=e.Variant({Ok:e.Null,Err:e.Text});return e.Service({allowance:e.Func([e.Principal,e.Principal],[e.Nat],["query"]),approve:e.Func([e.Principal,e.Nat],[n],[]),balance:e.Func([e.Opt(e.Principal)],[e.Nat64],[]),balanceOf:e.Func([e.Principal],[e.Nat],["query"]),burn:e.Func([e.Record({canister_id:e.Principal,amount:e.Nat64})],[r],[]),decimals:e.Func([],[e.Nat8],["query"]),events:e.Func([e.Record({offset:e.Opt(e.Nat64),limit:e.Nat16})],[l],["query"]),getBlockUsed:e.Func([],[e.Vec(e.Nat64)],["query"]),getMetadata:e.Func([],[u],["query"]),getTransaction:e.Func([e.Nat],[d],[]),getTransactions:e.Func([e.Nat,e.Nat],[e.Vec(d)],[]),get_map_block_used:e.Func([e.Nat64],[e.Opt(e.Nat64)],["query"]),get_transaction:e.Func([o],[e.Opt(s)],[]),halt:e.Func([],[],[]),historySize:e.Func([],[e.Nat],["query"]),isBlockUsed:e.Func([e.Nat64],[e.Bool],["query"]),logo:e.Func([],[e.Text],["query"]),mint:e.Func([e.Principal,e.Nat],[_],[]),mint_by_icp:e.Func([e.Opt(e.Vec(e.Nat8)),e.Nat64],[n],[]),mint_by_icp_recover:e.Func([e.Opt(e.Vec(e.Nat8)),e.Nat64,e.Principal],[n],[]),name:e.Func([],[e.Text],["query"]),nameErc20:e.Func([],[e.Text],["query"]),stats:e.Func([],[y],["query"]),symbol:e.Func([],[e.Text],["query"]),totalSupply:e.Func([],[e.Nat],["query"]),transfer:e.Func([e.Principal,e.Nat],[n],[]),transferErc20:e.Func([e.Principal,e.Nat],[O],[]),transferFrom:e.Func([e.Principal,e.Principal,e.Nat],[n],[]),wallet_balance:e.Func([],[e.Record({amount:e.Nat64})],["query"]),wallet_call:e.Func([e.Record({args:e.Vec(e.Nat8),cycles:e.Nat64,method_name:e.Text,canister:e.Principal})],[R],[]),wallet_create_canister:e.Func([e.Record({controller:e.Opt(e.Principal),cycles:e.Nat64})],[w],[]),wallet_create_wallet:e.Func([e.Record({controller:e.Opt(e.Principal),cycles:e.Nat64})],[w],[]),wallet_send:e.Func([e.Record({canister:e.Principal,amount:e.Nat64})],[g],[])})};import{Principal as ge}from"@dfinity/principal";var we=({local:e=!1,local_host:t=!1,identity:n=!1,agentOptions:o={},actorOptions:a={}}={})=>{let r={},c=e?t||"http://localhost:4943/":"https://ic0.app",i=new cn({host:c,identity:n,...o});return e&&i.fetchRootKey().catch(s=>{console.warn("Unable to fetch root key. Check to ensure that your local replica is running"),console.error(s)}),async(s,l=!1)=>{if(s instanceof ge&&(s=s.toText()),s==="aaaaa-aa"&&(l="ic"),s==="rkp4c-7iaaa-aaaaa-aaaca-cai"&&(l="cmc"),r[s])return r[s];let u;l?(typeof l=="string"&&l.indexOf("https://")===0&&(l=await fetch(l).then(p=>p.text())),typeof l=="function"?u=l:l.length>30?l.indexOf("idlFactory")!==-1?u=await Qe(l):u=await Xe(l):u=ln(l)):u=(await dn(i,s,c,e)).idlFactory;let N=()=>{let p=an.createActor(u,{agent:i,canisterId:s.toText?s.toText():s,...a}),d=Oe(p,u);return d.$principal=ge.fromText(s),d.$idlFactory=u,d};return r[s]=N(),r[s]}},ln=e=>{switch(e){case"ic":return Me;case"wallet":return Be;case"pg":return We;case"evalcan":return Ue;case"nns":return Ke;case"nnsdapp":return je;case"ledger":return He;case"sns":return Ge;case"cmc":return ze;case"psy_wicp":return $e;case"psy_xtc":return Je;default:throw new Error("Unable to find IDL")}},un=/\({ IDL }\)\s*=>\s*{.*?(?=export const|$)/s,Qe=content=>{let match=content.match(un);if(match){let replaced_js=match[0],idlFactory=eval(replaced_js);return idlFactory}return!1},Xe=async e=>{let n=await(await we()("a4gq6-oaaaa-aaaab-qaa4q-cai","pg")).did_to_js(e);if(n)return Qe(n)},dn=async(e,t,n,o)=>{let a=await sn.request({agent:e,canisterId:ge.fromText(t),paths:["candid"]}),r=!1;try{r=a.get("candid")}catch{}return r||(r=await Se(t,{agentOptions:{host:n}},o).__get_candid_interface_tmp_hack()),{idlFactory:await Xe(r),did:r}};import _n from"path";import Ze from"@dfinity/identity";import he from"fs";import pn from"os";import mn from"get-random-values";var Ye=10,Nn=()=>{let e=mn(new Uint8Array(32));return Ze.Ed25519KeyIdentity.generate(e)},x=null,yn=e=>{if(e>=Ye)throw new Error("increase MAX identities");let t=pn.homedir()+"/.icblast/",n=_n.resolve(t,"identity.json");if(x===null)try{x=JSON.parse(he.readFileSync(n))}catch{console.log("Creating new identity and saving it in identity.json"),x=[];for(let a=0;a<Ye;a++)x[a]=Nn();x=JSON.parse(JSON.stringify(x)),he.mkdir(t,a=>{he.writeFileSync(n,JSON.stringify(x))})}return Ze.Ed25519KeyIdentity.fromParsedJson(x[e])};var Rn=(e,t,n,o=0)=>async(...a)=>{let r=t[n+"$"](...a),c=await e.wallet_call({args:r,cycles:o,method_name:n,canister:t.$principal});return t["$"+n](c.return)},fn=(e,t,n=0)=>{let o={};for(let a in t)if(typeof t[a]=="function"){let r=a;o[a]=async(...c)=>{let i=t[r+"$"](...c),s=await e.wallet_call({args:i,cycles:n,method_name:r,canister:t.$principal});return t["$"+r](s.return)}}else o[a]=t[a];return o};import{sha256 as On}from"js-sha256";import{Ed25519KeyIdentity as gn}from"@dfinity/identity";var Yn=we;var Zn=e=>{let t=On.create();t.update(e);let n=new Uint8Array(t.digest());return gn.generate(n)},In=async e=>Array.from(new Uint8Array(await e.arrayBuffer()));export{Ee as actress,Yn as default,fe as explainer,In as file,yn as fileIdentity,Zn as hashIdentity,re as toState,Rn as walletCall,fn as walletProxy};
