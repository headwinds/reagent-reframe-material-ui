// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.utils.http_fx');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('goog.net.ErrorCode');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
example.utils.http_fx._LT_sub = cljs.core.comp.call(null,cljs.core.deref,re_frame.core.subscribe);
example.utils.http_fx._GT_evt = re_frame.core.dispatch;
/**
 * sets the browser location
 */
example.utils.http_fx.set_location = (function example$utils$http_fx$set_location(path){
return window.location = path;
});
/**
 * ajax-request only provides a single handler for success and errors
 */
example.utils.http_fx.ajax_xhrio_handler = (function example$utils$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__26803){
var vec__26804 = p__26803;
var success_QMARK_ = cljs.core.nth.call(null,vec__26804,(0),null);
var response = cljs.core.nth.call(null,vec__26804,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
example.utils.http_fx.request__GT_xhrio_options = (function example$utils$http_fx$request__GT_xhrio_options(p__26809){
var map__26810 = p__26809;
var map__26810__$1 = ((((!((map__26810 == null)))?(((((map__26810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26810):map__26810);
var request = map__26810__$1;
var on_success = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,example.utils.http_fx.ajax_xhrio_handler,((function (api,map__26810,map__26810__$1,request,on_success,on_failure){
return (function (p1__26807_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__26807_SHARP_));
});})(api,map__26810,map__26810__$1,request,on_success,on_failure))
,((function (api,map__26810,map__26810__$1,request,on_success,on_failure){
return (function (p1__26808_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__26808_SHARP_));
});})(api,map__26810,map__26810__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
example.utils.http_fx.http_effect = (function example$utils$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__26812 = cljs.core.seq.call(null,seq_request_maps);
var chunk__26813 = null;
var count__26814 = (0);
var i__26815 = (0);
while(true){
if((i__26815 < count__26814)){
var request__$1 = cljs.core._nth.call(null,chunk__26813,i__26815);
ajax.core.ajax_request.call(null,example.utils.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__26816 = seq__26812;
var G__26817 = chunk__26813;
var G__26818 = count__26814;
var G__26819 = (i__26815 + (1));
seq__26812 = G__26816;
chunk__26813 = G__26817;
count__26814 = G__26818;
i__26815 = G__26819;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26812);
if(temp__5457__auto__){
var seq__26812__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26812__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26812__$1);
var G__26820 = cljs.core.chunk_rest.call(null,seq__26812__$1);
var G__26821 = c__4351__auto__;
var G__26822 = cljs.core.count.call(null,c__4351__auto__);
var G__26823 = (0);
seq__26812 = G__26820;
chunk__26813 = G__26821;
count__26814 = G__26822;
i__26815 = G__26823;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__26812__$1);
ajax.core.ajax_request.call(null,example.utils.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__26824 = cljs.core.next.call(null,seq__26812__$1);
var G__26825 = null;
var G__26826 = (0);
var G__26827 = (0);
seq__26812 = G__26824;
chunk__26813 = G__26825;
count__26814 = G__26826;
i__26815 = G__26827;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.http_effect);
/**
 * returns a map formatted for re-frame's handling of XHR requests
 *   Has option to keywordize map keys or not (default true.)
 */
example.utils.http_fx.GET = (function example$utils$http_fx$GET(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26835 = arguments.length;
var i__4532__auto___26836 = (0);
while(true){
if((i__4532__auto___26836 < len__4531__auto___26835)){
args__4534__auto__.push((arguments[i__4532__auto___26836]));

var G__26837 = (i__4532__auto___26836 + (1));
i__4532__auto___26836 = G__26837;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return example.utils.http_fx.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

example.utils.http_fx.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,on_success,on_failure,p__26832){
var map__26833 = p__26832;
var map__26833__$1 = ((((!((map__26833 == null)))?(((((map__26833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26833):map__26833);
var keywords_QMARK_ = cljs.core.get.call(null,map__26833__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),keywords_QMARK_], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_success], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_failure], null)], null);
});

example.utils.http_fx.GET.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
example.utils.http_fx.GET.cljs$lang$applyTo = (function (seq26828){
var G__26829 = cljs.core.first.call(null,seq26828);
var seq26828__$1 = cljs.core.next.call(null,seq26828);
var G__26830 = cljs.core.first.call(null,seq26828__$1);
var seq26828__$2 = cljs.core.next.call(null,seq26828__$1);
var G__26831 = cljs.core.first.call(null,seq26828__$2);
var seq26828__$3 = cljs.core.next.call(null,seq26828__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26829,G__26830,G__26831,seq26828__$3);
});

/**
 * Makes a post request
 */
example.utils.http_fx.POST = (function example$utils$http_fx$POST(uri,data,on_success,on_failure){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_success], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_failure], null)], null);
});
/**
 * Makes a PATCH request
 */
example.utils.http_fx.PATCH = (function example$utils$http_fx$PATCH(uri,data,on_success,on_failure){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"PATCH","PATCH",1421262485),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_success], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_failure], null)], null);
});
/**
 * Makes a PUT request
 */
example.utils.http_fx.PUT = (function example$utils$http_fx$PUT(uri,data,on_success,on_failure){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"PUT","PUT",-1841999943),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_success], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_failure], null)], null);
});
/**
 * Make GET requests using the fetch web api.
 *   Originally written because og GET^ will not work on android for RN.
 *   This does NOT hook into a re-frame interceptor. (ie, http-xhrio)
 *   Links:
 *   https://github.com/JulianBirch/cljs-ajax/issues/141
 *   https://github.com/JulianBirch/cljs-ajax/issues/155
 */
example.utils.http_fx.GET_FETCH = (function example$utils$http_fx$GET_FETCH(uri,on_success,on_failure){
return fetch(uri,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))).then((function (p1__26838_SHARP_){
return p1__26838_SHARP_.json();
})).then((function (p1__26839_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__26839_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
})).then(on_success).catch(on_failure);
});
/**
 * Handles errors+error types, otherwise success
 */
example.utils.http_fx.handle_response = (function example$utils$http_fx$handle_response(response,p__26840){
var map__26841 = p__26840;
var map__26841__$1 = ((((!((map__26841 == null)))?(((((map__26841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26841):map__26841);
var expected_response = cljs.core.get.call(null,map__26841__$1,new cljs.core.Keyword(null,"expected-response","expected-response",1622829431));
var on_success = cljs.core.get.call(null,map__26841__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_spec_failure = cljs.core.get.call(null,map__26841__$1,new cljs.core.Keyword(null,"on-spec-failure","on-spec-failure",1858933229));
if((expected_response == null)){
return on_success.call(null);
} else {
if(cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,expected_response,response))){
return on_spec_failure.call(null);
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,expected_response,response))){
return on_success.call(null);
} else {
return null;
}
}
}
});

//# sourceMappingURL=http_fx.js.map?rel=1535318442412
