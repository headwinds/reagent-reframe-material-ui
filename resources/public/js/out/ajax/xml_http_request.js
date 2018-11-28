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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__25006,handler){
var map__25007 = p__25006;
var map__25007__$1 = ((((!((map__25007 == null)))?(((((map__25007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25007):map__25007);
var uri = cljs.core.get.call(null,map__25007__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__25007__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__25007__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__25007__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__25007__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__25007__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__25007__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__25007,map__25007__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__25005_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__25005_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__25007,map__25007__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___25019 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___25019)){
var response_type_25020 = temp__5457__auto___25019;
this$__$1.responseType = cljs.core.name.call(null,response_type_25020);
} else {
}

var seq__25009_25021 = cljs.core.seq.call(null,headers);
var chunk__25010_25022 = null;
var count__25011_25023 = (0);
var i__25012_25024 = (0);
while(true){
if((i__25012_25024 < count__25011_25023)){
var vec__25013_25025 = cljs.core._nth.call(null,chunk__25010_25022,i__25012_25024);
var k_25026 = cljs.core.nth.call(null,vec__25013_25025,(0),null);
var v_25027 = cljs.core.nth.call(null,vec__25013_25025,(1),null);
this$__$1.setRequestHeader(k_25026,v_25027);


var G__25028 = seq__25009_25021;
var G__25029 = chunk__25010_25022;
var G__25030 = count__25011_25023;
var G__25031 = (i__25012_25024 + (1));
seq__25009_25021 = G__25028;
chunk__25010_25022 = G__25029;
count__25011_25023 = G__25030;
i__25012_25024 = G__25031;
continue;
} else {
var temp__5457__auto___25032 = cljs.core.seq.call(null,seq__25009_25021);
if(temp__5457__auto___25032){
var seq__25009_25033__$1 = temp__5457__auto___25032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25009_25033__$1)){
var c__4351__auto___25034 = cljs.core.chunk_first.call(null,seq__25009_25033__$1);
var G__25035 = cljs.core.chunk_rest.call(null,seq__25009_25033__$1);
var G__25036 = c__4351__auto___25034;
var G__25037 = cljs.core.count.call(null,c__4351__auto___25034);
var G__25038 = (0);
seq__25009_25021 = G__25035;
chunk__25010_25022 = G__25036;
count__25011_25023 = G__25037;
i__25012_25024 = G__25038;
continue;
} else {
var vec__25016_25039 = cljs.core.first.call(null,seq__25009_25033__$1);
var k_25040 = cljs.core.nth.call(null,vec__25016_25039,(0),null);
var v_25041 = cljs.core.nth.call(null,vec__25016_25039,(1),null);
this$__$1.setRequestHeader(k_25040,v_25041);


var G__25042 = cljs.core.next.call(null,seq__25009_25033__$1);
var G__25043 = null;
var G__25044 = (0);
var G__25045 = (0);
seq__25009_25021 = G__25042;
chunk__25010_25022 = G__25043;
count__25011_25023 = G__25044;
i__25012_25024 = G__25045;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1543433655421
