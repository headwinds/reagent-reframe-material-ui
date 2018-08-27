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
var make_chain = (function (p1__25687_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__25687_SHARP_));
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

var temp__5457__auto___25688 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___25688)){
var not_i_25689 = temp__5457__auto___25688;
if(cljs.core.fn_QMARK_.call(null,not_i_25689)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:"].join(''),not_i_25689);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", expected interceptors, but got:"].join(''),not_i_25689);
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
var _STAR_handling_STAR_25690 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_25691 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__25560__auto___25704 = re_frame.interop.now.call(null);
var duration__25561__auto___25705 = (end__25560__auto___25704 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__25692_25706 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__25693_25707 = null;
var count__25694_25708 = (0);
var i__25695_25709 = (0);
while(true){
if((i__25695_25709 < count__25694_25708)){
var vec__25696_25710 = cljs.core._nth.call(null,chunk__25693_25707,i__25695_25709);
var k__25562__auto___25711 = cljs.core.nth.call(null,vec__25696_25710,(0),null);
var cb__25563__auto___25712 = cljs.core.nth.call(null,vec__25696_25710,(1),null);
try{cb__25563__auto___25712.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25561__auto___25705,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e25699){if((e25699 instanceof java.lang.Exception)){
var e__25564__auto___25713 = e25699;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__25562__auto___25711,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__25564__auto___25713);
} else {
throw e25699;

}
}

var G__25714 = seq__25692_25706;
var G__25715 = chunk__25693_25707;
var G__25716 = count__25694_25708;
var G__25717 = (i__25695_25709 + (1));
seq__25692_25706 = G__25714;
chunk__25693_25707 = G__25715;
count__25694_25708 = G__25716;
i__25695_25709 = G__25717;
continue;
} else {
var temp__5457__auto___25718 = cljs.core.seq.call(null,seq__25692_25706);
if(temp__5457__auto___25718){
var seq__25692_25719__$1 = temp__5457__auto___25718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25692_25719__$1)){
var c__4351__auto___25720 = cljs.core.chunk_first.call(null,seq__25692_25719__$1);
var G__25721 = cljs.core.chunk_rest.call(null,seq__25692_25719__$1);
var G__25722 = c__4351__auto___25720;
var G__25723 = cljs.core.count.call(null,c__4351__auto___25720);
var G__25724 = (0);
seq__25692_25706 = G__25721;
chunk__25693_25707 = G__25722;
count__25694_25708 = G__25723;
i__25695_25709 = G__25724;
continue;
} else {
var vec__25700_25725 = cljs.core.first.call(null,seq__25692_25719__$1);
var k__25562__auto___25726 = cljs.core.nth.call(null,vec__25700_25725,(0),null);
var cb__25563__auto___25727 = cljs.core.nth.call(null,vec__25700_25725,(1),null);
try{cb__25563__auto___25727.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25561__auto___25705,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e25703){if((e25703 instanceof java.lang.Exception)){
var e__25564__auto___25728 = e25703;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__25562__auto___25726,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__25564__auto___25728);
} else {
throw e25703;

}
}

var G__25729 = cljs.core.next.call(null,seq__25692_25719__$1);
var G__25730 = null;
var G__25731 = (0);
var G__25732 = (0);
seq__25692_25706 = G__25729;
chunk__25693_25707 = G__25730;
count__25694_25708 = G__25731;
i__25695_25709 = G__25732;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25691;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_25690;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1535318441415
