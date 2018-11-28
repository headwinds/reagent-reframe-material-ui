// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__23192_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__23192_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", expected a collection of interceptors, got:"].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", given an empty interceptor chain"].join(''));
} else {
}

var temp__5457__auto___23193 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___23193)){
var not_i_23194 = temp__5457__auto___23193;
if(cljs.core.fn_QMARK_.call(null,not_i_23194)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:"].join(''),not_i_23194);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", expected interceptors, but got:"].join(''),not_i_23194);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__5455__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5455__auto__)){
var interceptors = temp__5455__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: while handling \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),"\", dispatch-sync was called for \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),"\". You can't call dispatch-sync within an event handler."].join(''));
} else {
var _STAR_handling_STAR_23195 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_23196 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__23077__auto___23209 = re_frame.interop.now.call(null);
var duration__23078__auto___23210 = (end__23077__auto___23209 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__23197_23211 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__23198_23212 = null;
var count__23199_23213 = (0);
var i__23200_23214 = (0);
while(true){
if((i__23200_23214 < count__23199_23213)){
var vec__23201_23215 = cljs.core._nth.call(null,chunk__23198_23212,i__23200_23214);
var k__23079__auto___23216 = cljs.core.nth.call(null,vec__23201_23215,(0),null);
var cb__23080__auto___23217 = cljs.core.nth.call(null,vec__23201_23215,(1),null);
try{cb__23080__auto___23217.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23078__auto___23210,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e23204){if((e23204 instanceof java.lang.Exception)){
var e__23081__auto___23218 = e23204;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__23079__auto___23216,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__23081__auto___23218);
} else {
throw e23204;

}
}

var G__23219 = seq__23197_23211;
var G__23220 = chunk__23198_23212;
var G__23221 = count__23199_23213;
var G__23222 = (i__23200_23214 + (1));
seq__23197_23211 = G__23219;
chunk__23198_23212 = G__23220;
count__23199_23213 = G__23221;
i__23200_23214 = G__23222;
continue;
} else {
var temp__5457__auto___23223 = cljs.core.seq.call(null,seq__23197_23211);
if(temp__5457__auto___23223){
var seq__23197_23224__$1 = temp__5457__auto___23223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23197_23224__$1)){
var c__4351__auto___23225 = cljs.core.chunk_first.call(null,seq__23197_23224__$1);
var G__23226 = cljs.core.chunk_rest.call(null,seq__23197_23224__$1);
var G__23227 = c__4351__auto___23225;
var G__23228 = cljs.core.count.call(null,c__4351__auto___23225);
var G__23229 = (0);
seq__23197_23211 = G__23226;
chunk__23198_23212 = G__23227;
count__23199_23213 = G__23228;
i__23200_23214 = G__23229;
continue;
} else {
var vec__23205_23230 = cljs.core.first.call(null,seq__23197_23224__$1);
var k__23079__auto___23231 = cljs.core.nth.call(null,vec__23205_23230,(0),null);
var cb__23080__auto___23232 = cljs.core.nth.call(null,vec__23205_23230,(1),null);
try{cb__23080__auto___23232.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23078__auto___23210,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e23208){if((e23208 instanceof java.lang.Exception)){
var e__23081__auto___23233 = e23208;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__23079__auto___23231,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__23081__auto___23233);
} else {
throw e23208;

}
}

var G__23234 = cljs.core.next.call(null,seq__23197_23224__$1);
var G__23235 = null;
var G__23236 = (0);
var G__23237 = (0);
seq__23197_23211 = G__23234;
chunk__23198_23212 = G__23235;
count__23199_23213 = G__23236;
i__23200_23214 = G__23237;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23196;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_23195;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1543435802366
