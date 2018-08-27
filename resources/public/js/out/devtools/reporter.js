// Compiled by ClojureScript 1.10.339 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31303 = arguments.length;
var i__4532__auto___31304 = (0);
while(true){
if((i__4532__auto___31304 < len__4531__auto___31303)){
args__4534__auto__.push((arguments[i__4532__auto___31304]));

var G__31305 = (i__4532__auto___31304 + (1));
i__4532__auto___31304 = G__31305;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__31298){
var vec__31299 = p__31298;
var context = cljs.core.nth.call(null,vec__31299,(0),null);
var footer = cljs.core.nth.call(null,vec__31299,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__3949__auto__ = e.message;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e31302){var e__$1 = e31302;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq31296){
var G__31297 = cljs.core.first.call(null,seq31296);
var seq31296__$1 = cljs.core.next.call(null,seq31296);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31297,seq31296__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1535318448174
