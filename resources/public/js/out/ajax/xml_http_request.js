// Compiled by ClojureScript 1.10.339 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23565,handler){
var map__23566 = p__23565;
var map__23566__$1 = ((((!((map__23566 == null)))?(((((map__23566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23566):map__23566);
var uri = cljs.core.get.call(null,map__23566__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23566__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__23566__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23566__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__23566__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23566__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23566__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23566,map__23566__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__23564_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__23564_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__23566,map__23566__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___23578 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___23578)){
var response_type_23579 = temp__5457__auto___23578;
this$__$1.responseType = cljs.core.name.call(null,response_type_23579);
} else {
}

var seq__23568_23580 = cljs.core.seq.call(null,headers);
var chunk__23569_23581 = null;
var count__23570_23582 = (0);
var i__23571_23583 = (0);
while(true){
if((i__23571_23583 < count__23570_23582)){
var vec__23572_23584 = cljs.core._nth.call(null,chunk__23569_23581,i__23571_23583);
var k_23585 = cljs.core.nth.call(null,vec__23572_23584,(0),null);
var v_23586 = cljs.core.nth.call(null,vec__23572_23584,(1),null);
this$__$1.setRequestHeader(k_23585,v_23586);


var G__23587 = seq__23568_23580;
var G__23588 = chunk__23569_23581;
var G__23589 = count__23570_23582;
var G__23590 = (i__23571_23583 + (1));
seq__23568_23580 = G__23587;
chunk__23569_23581 = G__23588;
count__23570_23582 = G__23589;
i__23571_23583 = G__23590;
continue;
} else {
var temp__5457__auto___23591 = cljs.core.seq.call(null,seq__23568_23580);
if(temp__5457__auto___23591){
var seq__23568_23592__$1 = temp__5457__auto___23591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23568_23592__$1)){
var c__4351__auto___23593 = cljs.core.chunk_first.call(null,seq__23568_23592__$1);
var G__23594 = cljs.core.chunk_rest.call(null,seq__23568_23592__$1);
var G__23595 = c__4351__auto___23593;
var G__23596 = cljs.core.count.call(null,c__4351__auto___23593);
var G__23597 = (0);
seq__23568_23580 = G__23594;
chunk__23569_23581 = G__23595;
count__23570_23582 = G__23596;
i__23571_23583 = G__23597;
continue;
} else {
var vec__23575_23598 = cljs.core.first.call(null,seq__23568_23592__$1);
var k_23599 = cljs.core.nth.call(null,vec__23575_23598,(0),null);
var v_23600 = cljs.core.nth.call(null,vec__23575_23598,(1),null);
this$__$1.setRequestHeader(k_23599,v_23600);


var G__23601 = cljs.core.next.call(null,seq__23568_23592__$1);
var G__23602 = null;
var G__23603 = (0);
var G__23604 = (0);
seq__23568_23580 = G__23601;
chunk__23569_23581 = G__23602;
count__23570_23582 = G__23603;
i__23571_23583 = G__23604;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1535318438434
