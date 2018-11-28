// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__23464 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23465 = null;
var count__23466 = (0);
var i__23467 = (0);
while(true){
if((i__23467 < count__23466)){
var vec__23468 = cljs.core._nth.call(null,chunk__23465,i__23467);
var effect_k = cljs.core.nth.call(null,vec__23468,(0),null);
var value = cljs.core.nth.call(null,vec__23468,(1),null);
var temp__5455__auto___23474 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__5455__auto___23474)){
var effect_fn_23475 = temp__5455__auto___23474;
effect_fn_23475.call(null,value);
} else {
}


var G__23476 = seq__23464;
var G__23477 = chunk__23465;
var G__23478 = count__23466;
var G__23479 = (i__23467 + (1));
seq__23464 = G__23476;
chunk__23465 = G__23477;
count__23466 = G__23478;
i__23467 = G__23479;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23464);
if(temp__5457__auto__){
var seq__23464__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23464__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__23464__$1);
var G__23480 = cljs.core.chunk_rest.call(null,seq__23464__$1);
var G__23481 = c__4351__auto__;
var G__23482 = cljs.core.count.call(null,c__4351__auto__);
var G__23483 = (0);
seq__23464 = G__23480;
chunk__23465 = G__23481;
count__23466 = G__23482;
i__23467 = G__23483;
continue;
} else {
var vec__23471 = cljs.core.first.call(null,seq__23464__$1);
var effect_k = cljs.core.nth.call(null,vec__23471,(0),null);
var value = cljs.core.nth.call(null,vec__23471,(1),null);
var temp__5455__auto___23484 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__5455__auto___23484)){
var effect_fn_23485 = temp__5455__auto___23484;
effect_fn_23485.call(null,value);
} else {
}


var G__23486 = cljs.core.next.call(null,seq__23464__$1);
var G__23487 = null;
var G__23488 = (0);
var G__23489 = (0);
seq__23464 = G__23486;
chunk__23465 = G__23487;
count__23466 = G__23488;
i__23467 = G__23489;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__23490 = cljs.core.seq.call(null,value);
var chunk__23491 = null;
var count__23492 = (0);
var i__23493 = (0);
while(true){
if((i__23493 < count__23492)){
var map__23494 = cljs.core._nth.call(null,chunk__23491,i__23493);
var map__23494__$1 = ((((!((map__23494 == null)))?(((((map__23494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23494):map__23494);
var effect = map__23494__$1;
var ms = cljs.core.get.call(null,map__23494__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23494__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23490,chunk__23491,count__23492,i__23493,map__23494,map__23494__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23490,chunk__23491,count__23492,i__23493,map__23494,map__23494__$1,effect,ms,dispatch))
,ms);
}


var G__23498 = seq__23490;
var G__23499 = chunk__23491;
var G__23500 = count__23492;
var G__23501 = (i__23493 + (1));
seq__23490 = G__23498;
chunk__23491 = G__23499;
count__23492 = G__23500;
i__23493 = G__23501;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23490);
if(temp__5457__auto__){
var seq__23490__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23490__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__23490__$1);
var G__23502 = cljs.core.chunk_rest.call(null,seq__23490__$1);
var G__23503 = c__4351__auto__;
var G__23504 = cljs.core.count.call(null,c__4351__auto__);
var G__23505 = (0);
seq__23490 = G__23502;
chunk__23491 = G__23503;
count__23492 = G__23504;
i__23493 = G__23505;
continue;
} else {
var map__23496 = cljs.core.first.call(null,seq__23490__$1);
var map__23496__$1 = ((((!((map__23496 == null)))?(((((map__23496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23496):map__23496);
var effect = map__23496__$1;
var ms = cljs.core.get.call(null,map__23496__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23496__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23490,chunk__23491,count__23492,i__23493,map__23496,map__23496__$1,effect,ms,dispatch,seq__23490__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23490,chunk__23491,count__23492,i__23493,map__23496,map__23496__$1,effect,ms,dispatch,seq__23490__$1,temp__5457__auto__))
,ms);
}


var G__23506 = cljs.core.next.call(null,seq__23490__$1);
var G__23507 = null;
var G__23508 = (0);
var G__23509 = (0);
seq__23490 = G__23506;
chunk__23491 = G__23507;
count__23492 = G__23508;
i__23493 = G__23509;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__23510 = cljs.core.seq.call(null,value);
var chunk__23511 = null;
var count__23512 = (0);
var i__23513 = (0);
while(true){
if((i__23513 < count__23512)){
var event = cljs.core._nth.call(null,chunk__23511,i__23513);
re_frame.router.dispatch.call(null,event);


var G__23514 = seq__23510;
var G__23515 = chunk__23511;
var G__23516 = count__23512;
var G__23517 = (i__23513 + (1));
seq__23510 = G__23514;
chunk__23511 = G__23515;
count__23512 = G__23516;
i__23513 = G__23517;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23510);
if(temp__5457__auto__){
var seq__23510__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23510__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__23510__$1);
var G__23518 = cljs.core.chunk_rest.call(null,seq__23510__$1);
var G__23519 = c__4351__auto__;
var G__23520 = cljs.core.count.call(null,c__4351__auto__);
var G__23521 = (0);
seq__23510 = G__23518;
chunk__23511 = G__23519;
count__23512 = G__23520;
i__23513 = G__23521;
continue;
} else {
var event = cljs.core.first.call(null,seq__23510__$1);
re_frame.router.dispatch.call(null,event);


var G__23522 = cljs.core.next.call(null,seq__23510__$1);
var G__23523 = null;
var G__23524 = (0);
var G__23525 = (0);
seq__23510 = G__23522;
chunk__23511 = G__23523;
count__23512 = G__23524;
i__23513 = G__23525;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__23526 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__23527 = null;
var count__23528 = (0);
var i__23529 = (0);
while(true){
if((i__23529 < count__23528)){
var event = cljs.core._nth.call(null,chunk__23527,i__23529);
clear_event.call(null,event);


var G__23530 = seq__23526;
var G__23531 = chunk__23527;
var G__23532 = count__23528;
var G__23533 = (i__23529 + (1));
seq__23526 = G__23530;
chunk__23527 = G__23531;
count__23528 = G__23532;
i__23529 = G__23533;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23526);
if(temp__5457__auto__){
var seq__23526__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23526__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__23526__$1);
var G__23534 = cljs.core.chunk_rest.call(null,seq__23526__$1);
var G__23535 = c__4351__auto__;
var G__23536 = cljs.core.count.call(null,c__4351__auto__);
var G__23537 = (0);
seq__23526 = G__23534;
chunk__23527 = G__23535;
count__23528 = G__23536;
i__23529 = G__23537;
continue;
} else {
var event = cljs.core.first.call(null,seq__23526__$1);
clear_event.call(null,event);


var G__23538 = cljs.core.next.call(null,seq__23526__$1);
var G__23539 = null;
var G__23540 = (0);
var G__23541 = (0);
seq__23526 = G__23538;
chunk__23527 = G__23539;
count__23528 = G__23540;
i__23529 = G__23541;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1543435802687
