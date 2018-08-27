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
var seq__25959 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25960 = null;
var count__25961 = (0);
var i__25962 = (0);
while(true){
if((i__25962 < count__25961)){
var vec__25963 = cljs.core._nth.call(null,chunk__25960,i__25962);
var effect_k = cljs.core.nth.call(null,vec__25963,(0),null);
var value = cljs.core.nth.call(null,vec__25963,(1),null);
var temp__5455__auto___25969 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__5455__auto___25969)){
var effect_fn_25970 = temp__5455__auto___25969;
effect_fn_25970.call(null,value);
} else {
}


var G__25971 = seq__25959;
var G__25972 = chunk__25960;
var G__25973 = count__25961;
var G__25974 = (i__25962 + (1));
seq__25959 = G__25971;
chunk__25960 = G__25972;
count__25961 = G__25973;
i__25962 = G__25974;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25959);
if(temp__5457__auto__){
var seq__25959__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25959__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25959__$1);
var G__25975 = cljs.core.chunk_rest.call(null,seq__25959__$1);
var G__25976 = c__4351__auto__;
var G__25977 = cljs.core.count.call(null,c__4351__auto__);
var G__25978 = (0);
seq__25959 = G__25975;
chunk__25960 = G__25976;
count__25961 = G__25977;
i__25962 = G__25978;
continue;
} else {
var vec__25966 = cljs.core.first.call(null,seq__25959__$1);
var effect_k = cljs.core.nth.call(null,vec__25966,(0),null);
var value = cljs.core.nth.call(null,vec__25966,(1),null);
var temp__5455__auto___25979 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__5455__auto___25979)){
var effect_fn_25980 = temp__5455__auto___25979;
effect_fn_25980.call(null,value);
} else {
}


var G__25981 = cljs.core.next.call(null,seq__25959__$1);
var G__25982 = null;
var G__25983 = (0);
var G__25984 = (0);
seq__25959 = G__25981;
chunk__25960 = G__25982;
count__25961 = G__25983;
i__25962 = G__25984;
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
var seq__25985 = cljs.core.seq.call(null,value);
var chunk__25986 = null;
var count__25987 = (0);
var i__25988 = (0);
while(true){
if((i__25988 < count__25987)){
var map__25989 = cljs.core._nth.call(null,chunk__25986,i__25988);
var map__25989__$1 = ((((!((map__25989 == null)))?(((((map__25989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25989):map__25989);
var effect = map__25989__$1;
var ms = cljs.core.get.call(null,map__25989__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25989__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25985,chunk__25986,count__25987,i__25988,map__25989,map__25989__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25985,chunk__25986,count__25987,i__25988,map__25989,map__25989__$1,effect,ms,dispatch))
,ms);
}


var G__25993 = seq__25985;
var G__25994 = chunk__25986;
var G__25995 = count__25987;
var G__25996 = (i__25988 + (1));
seq__25985 = G__25993;
chunk__25986 = G__25994;
count__25987 = G__25995;
i__25988 = G__25996;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25985);
if(temp__5457__auto__){
var seq__25985__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25985__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25985__$1);
var G__25997 = cljs.core.chunk_rest.call(null,seq__25985__$1);
var G__25998 = c__4351__auto__;
var G__25999 = cljs.core.count.call(null,c__4351__auto__);
var G__26000 = (0);
seq__25985 = G__25997;
chunk__25986 = G__25998;
count__25987 = G__25999;
i__25988 = G__26000;
continue;
} else {
var map__25991 = cljs.core.first.call(null,seq__25985__$1);
var map__25991__$1 = ((((!((map__25991 == null)))?(((((map__25991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25991):map__25991);
var effect = map__25991__$1;
var ms = cljs.core.get.call(null,map__25991__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25991__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25985,chunk__25986,count__25987,i__25988,map__25991,map__25991__$1,effect,ms,dispatch,seq__25985__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25985,chunk__25986,count__25987,i__25988,map__25991,map__25991__$1,effect,ms,dispatch,seq__25985__$1,temp__5457__auto__))
,ms);
}


var G__26001 = cljs.core.next.call(null,seq__25985__$1);
var G__26002 = null;
var G__26003 = (0);
var G__26004 = (0);
seq__25985 = G__26001;
chunk__25986 = G__26002;
count__25987 = G__26003;
i__25988 = G__26004;
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

var seq__26005 = cljs.core.seq.call(null,value);
var chunk__26006 = null;
var count__26007 = (0);
var i__26008 = (0);
while(true){
if((i__26008 < count__26007)){
var event = cljs.core._nth.call(null,chunk__26006,i__26008);
re_frame.router.dispatch.call(null,event);


var G__26009 = seq__26005;
var G__26010 = chunk__26006;
var G__26011 = count__26007;
var G__26012 = (i__26008 + (1));
seq__26005 = G__26009;
chunk__26006 = G__26010;
count__26007 = G__26011;
i__26008 = G__26012;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26005);
if(temp__5457__auto__){
var seq__26005__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26005__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26005__$1);
var G__26013 = cljs.core.chunk_rest.call(null,seq__26005__$1);
var G__26014 = c__4351__auto__;
var G__26015 = cljs.core.count.call(null,c__4351__auto__);
var G__26016 = (0);
seq__26005 = G__26013;
chunk__26006 = G__26014;
count__26007 = G__26015;
i__26008 = G__26016;
continue;
} else {
var event = cljs.core.first.call(null,seq__26005__$1);
re_frame.router.dispatch.call(null,event);


var G__26017 = cljs.core.next.call(null,seq__26005__$1);
var G__26018 = null;
var G__26019 = (0);
var G__26020 = (0);
seq__26005 = G__26017;
chunk__26006 = G__26018;
count__26007 = G__26019;
i__26008 = G__26020;
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
var seq__26021 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__26022 = null;
var count__26023 = (0);
var i__26024 = (0);
while(true){
if((i__26024 < count__26023)){
var event = cljs.core._nth.call(null,chunk__26022,i__26024);
clear_event.call(null,event);


var G__26025 = seq__26021;
var G__26026 = chunk__26022;
var G__26027 = count__26023;
var G__26028 = (i__26024 + (1));
seq__26021 = G__26025;
chunk__26022 = G__26026;
count__26023 = G__26027;
i__26024 = G__26028;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26021);
if(temp__5457__auto__){
var seq__26021__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26021__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26021__$1);
var G__26029 = cljs.core.chunk_rest.call(null,seq__26021__$1);
var G__26030 = c__4351__auto__;
var G__26031 = cljs.core.count.call(null,c__4351__auto__);
var G__26032 = (0);
seq__26021 = G__26029;
chunk__26022 = G__26030;
count__26023 = G__26031;
i__26024 = G__26032;
continue;
} else {
var event = cljs.core.first.call(null,seq__26021__$1);
clear_event.call(null,event);


var G__26033 = cljs.core.next.call(null,seq__26021__$1);
var G__26034 = null;
var G__26035 = (0);
var G__26036 = (0);
seq__26021 = G__26033;
chunk__26022 = G__26034;
count__26023 = G__26035;
i__26024 = G__26036;
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

//# sourceMappingURL=fx.js.map?rel=1535318441711
