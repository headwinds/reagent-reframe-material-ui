// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e36450){if((e36450 instanceof Error)){
var e = e36450;
return "Error: Unable to stringify";
} else {
throw e36450;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36453 = arguments.length;
switch (G__36453) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36451_SHARP_){
if(typeof p1__36451_SHARP_ === 'string'){
return p1__36451_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36451_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36456 = arguments.length;
var i__4532__auto___36457 = (0);
while(true){
if((i__4532__auto___36457 < len__4531__auto___36456)){
args__4534__auto__.push((arguments[i__4532__auto___36457]));

var G__36458 = (i__4532__auto___36457 + (1));
i__4532__auto___36457 = G__36458;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36455){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36455));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36460 = arguments.length;
var i__4532__auto___36461 = (0);
while(true){
if((i__4532__auto___36461 < len__4531__auto___36460)){
args__4534__auto__.push((arguments[i__4532__auto___36461]));

var G__36462 = (i__4532__auto___36461 + (1));
i__4532__auto___36461 = G__36462;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36459){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36459));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36463){
var map__36464 = p__36463;
var map__36464__$1 = ((((!((map__36464 == null)))?(((((map__36464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36464):map__36464);
var message = cljs.core.get.call(null,map__36464__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36464__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26259__auto___36543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___36543,ch){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___36543,ch){
return (function (state_36515){
var state_val_36516 = (state_36515[(1)]);
if((state_val_36516 === (7))){
var inst_36511 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36517_36544 = state_36515__$1;
(statearr_36517_36544[(2)] = inst_36511);

(statearr_36517_36544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (1))){
var state_36515__$1 = state_36515;
var statearr_36518_36545 = state_36515__$1;
(statearr_36518_36545[(2)] = null);

(statearr_36518_36545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (4))){
var inst_36468 = (state_36515[(7)]);
var inst_36468__$1 = (state_36515[(2)]);
var state_36515__$1 = (function (){var statearr_36519 = state_36515;
(statearr_36519[(7)] = inst_36468__$1);

return statearr_36519;
})();
if(cljs.core.truth_(inst_36468__$1)){
var statearr_36520_36546 = state_36515__$1;
(statearr_36520_36546[(1)] = (5));

} else {
var statearr_36521_36547 = state_36515__$1;
(statearr_36521_36547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (15))){
var inst_36475 = (state_36515[(8)]);
var inst_36490 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36475);
var inst_36491 = cljs.core.first.call(null,inst_36490);
var inst_36492 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36491);
var inst_36493 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36492)].join('');
var inst_36494 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36493);
var state_36515__$1 = state_36515;
var statearr_36522_36548 = state_36515__$1;
(statearr_36522_36548[(2)] = inst_36494);

(statearr_36522_36548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (13))){
var inst_36499 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36523_36549 = state_36515__$1;
(statearr_36523_36549[(2)] = inst_36499);

(statearr_36523_36549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (6))){
var state_36515__$1 = state_36515;
var statearr_36524_36550 = state_36515__$1;
(statearr_36524_36550[(2)] = null);

(statearr_36524_36550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (17))){
var inst_36497 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36525_36551 = state_36515__$1;
(statearr_36525_36551[(2)] = inst_36497);

(statearr_36525_36551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (3))){
var inst_36513 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36515__$1,inst_36513);
} else {
if((state_val_36516 === (12))){
var inst_36474 = (state_36515[(9)]);
var inst_36488 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36474,opts);
var state_36515__$1 = state_36515;
if(cljs.core.truth_(inst_36488)){
var statearr_36526_36552 = state_36515__$1;
(statearr_36526_36552[(1)] = (15));

} else {
var statearr_36527_36553 = state_36515__$1;
(statearr_36527_36553[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (2))){
var state_36515__$1 = state_36515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36515__$1,(4),ch);
} else {
if((state_val_36516 === (11))){
var inst_36475 = (state_36515[(8)]);
var inst_36480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36481 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36475);
var inst_36482 = cljs.core.async.timeout.call(null,(1000));
var inst_36483 = [inst_36481,inst_36482];
var inst_36484 = (new cljs.core.PersistentVector(null,2,(5),inst_36480,inst_36483,null));
var state_36515__$1 = state_36515;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36515__$1,(14),inst_36484);
} else {
if((state_val_36516 === (9))){
var inst_36475 = (state_36515[(8)]);
var inst_36501 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36502 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36475);
var inst_36503 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36502);
var inst_36504 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36503)].join('');
var inst_36505 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36504);
var state_36515__$1 = (function (){var statearr_36528 = state_36515;
(statearr_36528[(10)] = inst_36501);

return statearr_36528;
})();
var statearr_36529_36554 = state_36515__$1;
(statearr_36529_36554[(2)] = inst_36505);

(statearr_36529_36554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (5))){
var inst_36468 = (state_36515[(7)]);
var inst_36470 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36471 = (new cljs.core.PersistentArrayMap(null,2,inst_36470,null));
var inst_36472 = (new cljs.core.PersistentHashSet(null,inst_36471,null));
var inst_36473 = figwheel.client.focus_msgs.call(null,inst_36472,inst_36468);
var inst_36474 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36473);
var inst_36475 = cljs.core.first.call(null,inst_36473);
var inst_36476 = figwheel.client.autoload_QMARK_.call(null);
var state_36515__$1 = (function (){var statearr_36530 = state_36515;
(statearr_36530[(8)] = inst_36475);

(statearr_36530[(9)] = inst_36474);

return statearr_36530;
})();
if(cljs.core.truth_(inst_36476)){
var statearr_36531_36555 = state_36515__$1;
(statearr_36531_36555[(1)] = (8));

} else {
var statearr_36532_36556 = state_36515__$1;
(statearr_36532_36556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (14))){
var inst_36486 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36533_36557 = state_36515__$1;
(statearr_36533_36557[(2)] = inst_36486);

(statearr_36533_36557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (16))){
var state_36515__$1 = state_36515;
var statearr_36534_36558 = state_36515__$1;
(statearr_36534_36558[(2)] = null);

(statearr_36534_36558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (10))){
var inst_36507 = (state_36515[(2)]);
var state_36515__$1 = (function (){var statearr_36535 = state_36515;
(statearr_36535[(11)] = inst_36507);

return statearr_36535;
})();
var statearr_36536_36559 = state_36515__$1;
(statearr_36536_36559[(2)] = null);

(statearr_36536_36559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (8))){
var inst_36474 = (state_36515[(9)]);
var inst_36478 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36474,opts);
var state_36515__$1 = state_36515;
if(cljs.core.truth_(inst_36478)){
var statearr_36537_36560 = state_36515__$1;
(statearr_36537_36560[(1)] = (11));

} else {
var statearr_36538_36561 = state_36515__$1;
(statearr_36538_36561[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26259__auto___36543,ch))
;
return ((function (switch__26100__auto__,c__26259__auto___36543,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26101__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26101__auto____0 = (function (){
var statearr_36539 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36539[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26101__auto__);

(statearr_36539[(1)] = (1));

return statearr_36539;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26101__auto____1 = (function (state_36515){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_36515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e36540){if((e36540 instanceof Object)){
var ex__26104__auto__ = e36540;
var statearr_36541_36562 = state_36515;
(statearr_36541_36562[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36563 = state_36515;
state_36515 = G__36563;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26101__auto__ = function(state_36515){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26101__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26101__auto____1.call(this,state_36515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26101__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26101__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___36543,ch))
})();
var state__26261__auto__ = (function (){var statearr_36542 = f__26260__auto__.call(null);
(statearr_36542[(6)] = c__26259__auto___36543);

return statearr_36542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___36543,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36564_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36564_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36568 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36568){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_36566 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36567 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36566,_STAR_print_fn_STAR_36567,sb,base_path_36568){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_36566,_STAR_print_fn_STAR_36567,sb,base_path_36568))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36567;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36566;
}}catch (e36565){if((e36565 instanceof Error)){
var e = e36565;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36568], null));
} else {
var e = e36565;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36568))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36569){
var map__36570 = p__36569;
var map__36570__$1 = ((((!((map__36570 == null)))?(((((map__36570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36570):map__36570);
var opts = map__36570__$1;
var build_id = cljs.core.get.call(null,map__36570__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36570,map__36570__$1,opts,build_id){
return (function (p__36572){
var vec__36573 = p__36572;
var seq__36574 = cljs.core.seq.call(null,vec__36573);
var first__36575 = cljs.core.first.call(null,seq__36574);
var seq__36574__$1 = cljs.core.next.call(null,seq__36574);
var map__36576 = first__36575;
var map__36576__$1 = ((((!((map__36576 == null)))?(((((map__36576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36576):map__36576);
var msg = map__36576__$1;
var msg_name = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36574__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36573,seq__36574,first__36575,seq__36574__$1,map__36576,map__36576__$1,msg,msg_name,_,map__36570,map__36570__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36573,seq__36574,first__36575,seq__36574__$1,map__36576,map__36576__$1,msg,msg_name,_,map__36570,map__36570__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36570,map__36570__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36578){
var vec__36579 = p__36578;
var seq__36580 = cljs.core.seq.call(null,vec__36579);
var first__36581 = cljs.core.first.call(null,seq__36580);
var seq__36580__$1 = cljs.core.next.call(null,seq__36580);
var map__36582 = first__36581;
var map__36582__$1 = ((((!((map__36582 == null)))?(((((map__36582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36582):map__36582);
var msg = map__36582__$1;
var msg_name = cljs.core.get.call(null,map__36582__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36580__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36584){
var map__36585 = p__36584;
var map__36585__$1 = ((((!((map__36585 == null)))?(((((map__36585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36585):map__36585);
var on_compile_warning = cljs.core.get.call(null,map__36585__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36585__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36585,map__36585__$1,on_compile_warning,on_compile_fail){
return (function (p__36587){
var vec__36588 = p__36587;
var seq__36589 = cljs.core.seq.call(null,vec__36588);
var first__36590 = cljs.core.first.call(null,seq__36589);
var seq__36589__$1 = cljs.core.next.call(null,seq__36589);
var map__36591 = first__36590;
var map__36591__$1 = ((((!((map__36591 == null)))?(((((map__36591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36591):map__36591);
var msg = map__36591__$1;
var msg_name = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36589__$1;
var pred__36593 = cljs.core._EQ_;
var expr__36594 = msg_name;
if(cljs.core.truth_(pred__36593.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36594))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36593.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36594))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36585,map__36585__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto__,msg_hist,msg_names,msg){
return (function (state_36683){
var state_val_36684 = (state_36683[(1)]);
if((state_val_36684 === (7))){
var inst_36603 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
if(cljs.core.truth_(inst_36603)){
var statearr_36685_36732 = state_36683__$1;
(statearr_36685_36732[(1)] = (8));

} else {
var statearr_36686_36733 = state_36683__$1;
(statearr_36686_36733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (20))){
var inst_36677 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36687_36734 = state_36683__$1;
(statearr_36687_36734[(2)] = inst_36677);

(statearr_36687_36734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (27))){
var inst_36673 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36688_36735 = state_36683__$1;
(statearr_36688_36735[(2)] = inst_36673);

(statearr_36688_36735[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (1))){
var inst_36596 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36683__$1 = state_36683;
if(cljs.core.truth_(inst_36596)){
var statearr_36689_36736 = state_36683__$1;
(statearr_36689_36736[(1)] = (2));

} else {
var statearr_36690_36737 = state_36683__$1;
(statearr_36690_36737[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (24))){
var inst_36675 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36691_36738 = state_36683__$1;
(statearr_36691_36738[(2)] = inst_36675);

(statearr_36691_36738[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (4))){
var inst_36681 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36683__$1,inst_36681);
} else {
if((state_val_36684 === (15))){
var inst_36679 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36692_36739 = state_36683__$1;
(statearr_36692_36739[(2)] = inst_36679);

(statearr_36692_36739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (21))){
var inst_36632 = (state_36683[(2)]);
var inst_36633 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36634 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36633);
var state_36683__$1 = (function (){var statearr_36693 = state_36683;
(statearr_36693[(7)] = inst_36632);

return statearr_36693;
})();
var statearr_36694_36740 = state_36683__$1;
(statearr_36694_36740[(2)] = inst_36634);

(statearr_36694_36740[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (31))){
var inst_36662 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36683__$1 = state_36683;
if(cljs.core.truth_(inst_36662)){
var statearr_36695_36741 = state_36683__$1;
(statearr_36695_36741[(1)] = (34));

} else {
var statearr_36696_36742 = state_36683__$1;
(statearr_36696_36742[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (32))){
var inst_36671 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36697_36743 = state_36683__$1;
(statearr_36697_36743[(2)] = inst_36671);

(statearr_36697_36743[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (33))){
var inst_36658 = (state_36683[(2)]);
var inst_36659 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36660 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36659);
var state_36683__$1 = (function (){var statearr_36698 = state_36683;
(statearr_36698[(8)] = inst_36658);

return statearr_36698;
})();
var statearr_36699_36744 = state_36683__$1;
(statearr_36699_36744[(2)] = inst_36660);

(statearr_36699_36744[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (13))){
var inst_36617 = figwheel.client.heads_up.clear.call(null);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36683__$1,(16),inst_36617);
} else {
if((state_val_36684 === (22))){
var inst_36638 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36639 = figwheel.client.heads_up.append_warning_message.call(null,inst_36638);
var state_36683__$1 = state_36683;
var statearr_36700_36745 = state_36683__$1;
(statearr_36700_36745[(2)] = inst_36639);

(statearr_36700_36745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (36))){
var inst_36669 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36701_36746 = state_36683__$1;
(statearr_36701_36746[(2)] = inst_36669);

(statearr_36701_36746[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (29))){
var inst_36649 = (state_36683[(2)]);
var inst_36650 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36651 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36650);
var state_36683__$1 = (function (){var statearr_36702 = state_36683;
(statearr_36702[(9)] = inst_36649);

return statearr_36702;
})();
var statearr_36703_36747 = state_36683__$1;
(statearr_36703_36747[(2)] = inst_36651);

(statearr_36703_36747[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (6))){
var inst_36598 = (state_36683[(10)]);
var state_36683__$1 = state_36683;
var statearr_36704_36748 = state_36683__$1;
(statearr_36704_36748[(2)] = inst_36598);

(statearr_36704_36748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (28))){
var inst_36645 = (state_36683[(2)]);
var inst_36646 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36647 = figwheel.client.heads_up.display_warning.call(null,inst_36646);
var state_36683__$1 = (function (){var statearr_36705 = state_36683;
(statearr_36705[(11)] = inst_36645);

return statearr_36705;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36683__$1,(29),inst_36647);
} else {
if((state_val_36684 === (25))){
var inst_36643 = figwheel.client.heads_up.clear.call(null);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36683__$1,(28),inst_36643);
} else {
if((state_val_36684 === (34))){
var inst_36664 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36683__$1,(37),inst_36664);
} else {
if((state_val_36684 === (17))){
var inst_36623 = (state_36683[(2)]);
var inst_36624 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36625 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36624);
var state_36683__$1 = (function (){var statearr_36706 = state_36683;
(statearr_36706[(12)] = inst_36623);

return statearr_36706;
})();
var statearr_36707_36749 = state_36683__$1;
(statearr_36707_36749[(2)] = inst_36625);

(statearr_36707_36749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (3))){
var inst_36615 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36683__$1 = state_36683;
if(cljs.core.truth_(inst_36615)){
var statearr_36708_36750 = state_36683__$1;
(statearr_36708_36750[(1)] = (13));

} else {
var statearr_36709_36751 = state_36683__$1;
(statearr_36709_36751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (12))){
var inst_36611 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36710_36752 = state_36683__$1;
(statearr_36710_36752[(2)] = inst_36611);

(statearr_36710_36752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (2))){
var inst_36598 = (state_36683[(10)]);
var inst_36598__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36683__$1 = (function (){var statearr_36711 = state_36683;
(statearr_36711[(10)] = inst_36598__$1);

return statearr_36711;
})();
if(cljs.core.truth_(inst_36598__$1)){
var statearr_36712_36753 = state_36683__$1;
(statearr_36712_36753[(1)] = (5));

} else {
var statearr_36713_36754 = state_36683__$1;
(statearr_36713_36754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (23))){
var inst_36641 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36683__$1 = state_36683;
if(cljs.core.truth_(inst_36641)){
var statearr_36714_36755 = state_36683__$1;
(statearr_36714_36755[(1)] = (25));

} else {
var statearr_36715_36756 = state_36683__$1;
(statearr_36715_36756[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (35))){
var state_36683__$1 = state_36683;
var statearr_36716_36757 = state_36683__$1;
(statearr_36716_36757[(2)] = null);

(statearr_36716_36757[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (19))){
var inst_36636 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36683__$1 = state_36683;
if(cljs.core.truth_(inst_36636)){
var statearr_36717_36758 = state_36683__$1;
(statearr_36717_36758[(1)] = (22));

} else {
var statearr_36718_36759 = state_36683__$1;
(statearr_36718_36759[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (11))){
var inst_36607 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36719_36760 = state_36683__$1;
(statearr_36719_36760[(2)] = inst_36607);

(statearr_36719_36760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (9))){
var inst_36609 = figwheel.client.heads_up.clear.call(null);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36683__$1,(12),inst_36609);
} else {
if((state_val_36684 === (5))){
var inst_36600 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36683__$1 = state_36683;
var statearr_36720_36761 = state_36683__$1;
(statearr_36720_36761[(2)] = inst_36600);

(statearr_36720_36761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (14))){
var inst_36627 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36683__$1 = state_36683;
if(cljs.core.truth_(inst_36627)){
var statearr_36721_36762 = state_36683__$1;
(statearr_36721_36762[(1)] = (18));

} else {
var statearr_36722_36763 = state_36683__$1;
(statearr_36722_36763[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (26))){
var inst_36653 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36683__$1 = state_36683;
if(cljs.core.truth_(inst_36653)){
var statearr_36723_36764 = state_36683__$1;
(statearr_36723_36764[(1)] = (30));

} else {
var statearr_36724_36765 = state_36683__$1;
(statearr_36724_36765[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (16))){
var inst_36619 = (state_36683[(2)]);
var inst_36620 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36621 = figwheel.client.heads_up.display_exception.call(null,inst_36620);
var state_36683__$1 = (function (){var statearr_36725 = state_36683;
(statearr_36725[(13)] = inst_36619);

return statearr_36725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36683__$1,(17),inst_36621);
} else {
if((state_val_36684 === (30))){
var inst_36655 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36656 = figwheel.client.heads_up.display_warning.call(null,inst_36655);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36683__$1,(33),inst_36656);
} else {
if((state_val_36684 === (10))){
var inst_36613 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36726_36766 = state_36683__$1;
(statearr_36726_36766[(2)] = inst_36613);

(statearr_36726_36766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (18))){
var inst_36629 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36630 = figwheel.client.heads_up.display_exception.call(null,inst_36629);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36683__$1,(21),inst_36630);
} else {
if((state_val_36684 === (37))){
var inst_36666 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36727_36767 = state_36683__$1;
(statearr_36727_36767[(2)] = inst_36666);

(statearr_36727_36767[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (8))){
var inst_36605 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36683__$1,(11),inst_36605);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26259__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26100__auto__,c__26259__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26101__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26101__auto____0 = (function (){
var statearr_36728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36728[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26101__auto__);

(statearr_36728[(1)] = (1));

return statearr_36728;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26101__auto____1 = (function (state_36683){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_36683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e36729){if((e36729 instanceof Object)){
var ex__26104__auto__ = e36729;
var statearr_36730_36768 = state_36683;
(statearr_36730_36768[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36769 = state_36683;
state_36683 = G__36769;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26101__auto__ = function(state_36683){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26101__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26101__auto____1.call(this,state_36683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26101__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26101__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto__,msg_hist,msg_names,msg))
})();
var state__26261__auto__ = (function (){var statearr_36731 = f__26260__auto__.call(null);
(statearr_36731[(6)] = c__26259__auto__);

return statearr_36731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto__,msg_hist,msg_names,msg))
);

return c__26259__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26259__auto___36798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___36798,ch){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___36798,ch){
return (function (state_36784){
var state_val_36785 = (state_36784[(1)]);
if((state_val_36785 === (1))){
var state_36784__$1 = state_36784;
var statearr_36786_36799 = state_36784__$1;
(statearr_36786_36799[(2)] = null);

(statearr_36786_36799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (2))){
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36784__$1,(4),ch);
} else {
if((state_val_36785 === (3))){
var inst_36782 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36784__$1,inst_36782);
} else {
if((state_val_36785 === (4))){
var inst_36772 = (state_36784[(7)]);
var inst_36772__$1 = (state_36784[(2)]);
var state_36784__$1 = (function (){var statearr_36787 = state_36784;
(statearr_36787[(7)] = inst_36772__$1);

return statearr_36787;
})();
if(cljs.core.truth_(inst_36772__$1)){
var statearr_36788_36800 = state_36784__$1;
(statearr_36788_36800[(1)] = (5));

} else {
var statearr_36789_36801 = state_36784__$1;
(statearr_36789_36801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (5))){
var inst_36772 = (state_36784[(7)]);
var inst_36774 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36772);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36784__$1,(8),inst_36774);
} else {
if((state_val_36785 === (6))){
var state_36784__$1 = state_36784;
var statearr_36790_36802 = state_36784__$1;
(statearr_36790_36802[(2)] = null);

(statearr_36790_36802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (7))){
var inst_36780 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36791_36803 = state_36784__$1;
(statearr_36791_36803[(2)] = inst_36780);

(statearr_36791_36803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (8))){
var inst_36776 = (state_36784[(2)]);
var state_36784__$1 = (function (){var statearr_36792 = state_36784;
(statearr_36792[(8)] = inst_36776);

return statearr_36792;
})();
var statearr_36793_36804 = state_36784__$1;
(statearr_36793_36804[(2)] = null);

(statearr_36793_36804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__26259__auto___36798,ch))
;
return ((function (switch__26100__auto__,c__26259__auto___36798,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26101__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26101__auto____0 = (function (){
var statearr_36794 = [null,null,null,null,null,null,null,null,null];
(statearr_36794[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26101__auto__);

(statearr_36794[(1)] = (1));

return statearr_36794;
});
var figwheel$client$heads_up_plugin_$_state_machine__26101__auto____1 = (function (state_36784){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_36784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e36795){if((e36795 instanceof Object)){
var ex__26104__auto__ = e36795;
var statearr_36796_36805 = state_36784;
(statearr_36796_36805[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36806 = state_36784;
state_36784 = G__36806;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26101__auto__ = function(state_36784){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26101__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26101__auto____1.call(this,state_36784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26101__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26101__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___36798,ch))
})();
var state__26261__auto__ = (function (){var statearr_36797 = f__26260__auto__.call(null);
(statearr_36797[(6)] = c__26259__auto___36798);

return statearr_36797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___36798,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto__){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto__){
return (function (state_36812){
var state_val_36813 = (state_36812[(1)]);
if((state_val_36813 === (1))){
var inst_36807 = cljs.core.async.timeout.call(null,(3000));
var state_36812__$1 = state_36812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36812__$1,(2),inst_36807);
} else {
if((state_val_36813 === (2))){
var inst_36809 = (state_36812[(2)]);
var inst_36810 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36812__$1 = (function (){var statearr_36814 = state_36812;
(statearr_36814[(7)] = inst_36809);

return statearr_36814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36812__$1,inst_36810);
} else {
return null;
}
}
});})(c__26259__auto__))
;
return ((function (switch__26100__auto__,c__26259__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26101__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26101__auto____0 = (function (){
var statearr_36815 = [null,null,null,null,null,null,null,null];
(statearr_36815[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26101__auto__);

(statearr_36815[(1)] = (1));

return statearr_36815;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26101__auto____1 = (function (state_36812){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_36812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e36816){if((e36816 instanceof Object)){
var ex__26104__auto__ = e36816;
var statearr_36817_36819 = state_36812;
(statearr_36817_36819[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36820 = state_36812;
state_36812 = G__36820;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26101__auto__ = function(state_36812){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26101__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26101__auto____1.call(this,state_36812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26101__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26101__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto__))
})();
var state__26261__auto__ = (function (){var statearr_36818 = f__26260__auto__.call(null);
(statearr_36818[(6)] = c__26259__auto__);

return statearr_36818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto__))
);

return c__26259__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto__,figwheel_version,temp__5457__auto__){
return (function (state_36827){
var state_val_36828 = (state_36827[(1)]);
if((state_val_36828 === (1))){
var inst_36821 = cljs.core.async.timeout.call(null,(2000));
var state_36827__$1 = state_36827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36827__$1,(2),inst_36821);
} else {
if((state_val_36828 === (2))){
var inst_36823 = (state_36827[(2)]);
var inst_36824 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36825 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36824);
var state_36827__$1 = (function (){var statearr_36829 = state_36827;
(statearr_36829[(7)] = inst_36823);

return statearr_36829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36827__$1,inst_36825);
} else {
return null;
}
}
});})(c__26259__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26100__auto__,c__26259__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26101__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26101__auto____0 = (function (){
var statearr_36830 = [null,null,null,null,null,null,null,null];
(statearr_36830[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26101__auto__);

(statearr_36830[(1)] = (1));

return statearr_36830;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26101__auto____1 = (function (state_36827){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_36827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e36831){if((e36831 instanceof Object)){
var ex__26104__auto__ = e36831;
var statearr_36832_36834 = state_36827;
(statearr_36832_36834[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36835 = state_36827;
state_36827 = G__36835;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26101__auto__ = function(state_36827){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26101__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26101__auto____1.call(this,state_36827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26101__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26101__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26261__auto__ = (function (){var statearr_36833 = f__26260__auto__.call(null);
(statearr_36833[(6)] = c__26259__auto__);

return statearr_36833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto__,figwheel_version,temp__5457__auto__))
);

return c__26259__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36836){
var map__36837 = p__36836;
var map__36837__$1 = ((((!((map__36837 == null)))?(((((map__36837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36837):map__36837);
var file = cljs.core.get.call(null,map__36837__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36837__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36837__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36839 = "";
var G__36839__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36839),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36839);
var G__36839__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36839__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36839__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36839__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36839__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36840){
var map__36841 = p__36840;
var map__36841__$1 = ((((!((map__36841 == null)))?(((((map__36841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36841):map__36841);
var ed = map__36841__$1;
var formatted_exception = cljs.core.get.call(null,map__36841__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36841__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36841__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36843_36847 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36844_36848 = null;
var count__36845_36849 = (0);
var i__36846_36850 = (0);
while(true){
if((i__36846_36850 < count__36845_36849)){
var msg_36851 = cljs.core._nth.call(null,chunk__36844_36848,i__36846_36850);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36851);


var G__36852 = seq__36843_36847;
var G__36853 = chunk__36844_36848;
var G__36854 = count__36845_36849;
var G__36855 = (i__36846_36850 + (1));
seq__36843_36847 = G__36852;
chunk__36844_36848 = G__36853;
count__36845_36849 = G__36854;
i__36846_36850 = G__36855;
continue;
} else {
var temp__5457__auto___36856 = cljs.core.seq.call(null,seq__36843_36847);
if(temp__5457__auto___36856){
var seq__36843_36857__$1 = temp__5457__auto___36856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36843_36857__$1)){
var c__4351__auto___36858 = cljs.core.chunk_first.call(null,seq__36843_36857__$1);
var G__36859 = cljs.core.chunk_rest.call(null,seq__36843_36857__$1);
var G__36860 = c__4351__auto___36858;
var G__36861 = cljs.core.count.call(null,c__4351__auto___36858);
var G__36862 = (0);
seq__36843_36847 = G__36859;
chunk__36844_36848 = G__36860;
count__36845_36849 = G__36861;
i__36846_36850 = G__36862;
continue;
} else {
var msg_36863 = cljs.core.first.call(null,seq__36843_36857__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36863);


var G__36864 = cljs.core.next.call(null,seq__36843_36857__$1);
var G__36865 = null;
var G__36866 = (0);
var G__36867 = (0);
seq__36843_36847 = G__36864;
chunk__36844_36848 = G__36865;
count__36845_36849 = G__36866;
i__36846_36850 = G__36867;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36868){
var map__36869 = p__36868;
var map__36869__$1 = ((((!((map__36869 == null)))?(((((map__36869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36869):map__36869);
var w = map__36869__$1;
var message = cljs.core.get.call(null,map__36869__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36871 = cljs.core.seq.call(null,plugins);
var chunk__36872 = null;
var count__36873 = (0);
var i__36874 = (0);
while(true){
if((i__36874 < count__36873)){
var vec__36875 = cljs.core._nth.call(null,chunk__36872,i__36874);
var k = cljs.core.nth.call(null,vec__36875,(0),null);
var plugin = cljs.core.nth.call(null,vec__36875,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36881 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36871,chunk__36872,count__36873,i__36874,pl_36881,vec__36875,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36881.call(null,msg_hist);
});})(seq__36871,chunk__36872,count__36873,i__36874,pl_36881,vec__36875,k,plugin))
);
} else {
}


var G__36882 = seq__36871;
var G__36883 = chunk__36872;
var G__36884 = count__36873;
var G__36885 = (i__36874 + (1));
seq__36871 = G__36882;
chunk__36872 = G__36883;
count__36873 = G__36884;
i__36874 = G__36885;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36871);
if(temp__5457__auto__){
var seq__36871__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36871__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36871__$1);
var G__36886 = cljs.core.chunk_rest.call(null,seq__36871__$1);
var G__36887 = c__4351__auto__;
var G__36888 = cljs.core.count.call(null,c__4351__auto__);
var G__36889 = (0);
seq__36871 = G__36886;
chunk__36872 = G__36887;
count__36873 = G__36888;
i__36874 = G__36889;
continue;
} else {
var vec__36878 = cljs.core.first.call(null,seq__36871__$1);
var k = cljs.core.nth.call(null,vec__36878,(0),null);
var plugin = cljs.core.nth.call(null,vec__36878,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36890 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36871,chunk__36872,count__36873,i__36874,pl_36890,vec__36878,k,plugin,seq__36871__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36890.call(null,msg_hist);
});})(seq__36871,chunk__36872,count__36873,i__36874,pl_36890,vec__36878,k,plugin,seq__36871__$1,temp__5457__auto__))
);
} else {
}


var G__36891 = cljs.core.next.call(null,seq__36871__$1);
var G__36892 = null;
var G__36893 = (0);
var G__36894 = (0);
seq__36871 = G__36891;
chunk__36872 = G__36892;
count__36873 = G__36893;
i__36874 = G__36894;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__36896 = arguments.length;
switch (G__36896) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36897_36902 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36898_36903 = null;
var count__36899_36904 = (0);
var i__36900_36905 = (0);
while(true){
if((i__36900_36905 < count__36899_36904)){
var msg_36906 = cljs.core._nth.call(null,chunk__36898_36903,i__36900_36905);
figwheel.client.socket.handle_incoming_message.call(null,msg_36906);


var G__36907 = seq__36897_36902;
var G__36908 = chunk__36898_36903;
var G__36909 = count__36899_36904;
var G__36910 = (i__36900_36905 + (1));
seq__36897_36902 = G__36907;
chunk__36898_36903 = G__36908;
count__36899_36904 = G__36909;
i__36900_36905 = G__36910;
continue;
} else {
var temp__5457__auto___36911 = cljs.core.seq.call(null,seq__36897_36902);
if(temp__5457__auto___36911){
var seq__36897_36912__$1 = temp__5457__auto___36911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36897_36912__$1)){
var c__4351__auto___36913 = cljs.core.chunk_first.call(null,seq__36897_36912__$1);
var G__36914 = cljs.core.chunk_rest.call(null,seq__36897_36912__$1);
var G__36915 = c__4351__auto___36913;
var G__36916 = cljs.core.count.call(null,c__4351__auto___36913);
var G__36917 = (0);
seq__36897_36902 = G__36914;
chunk__36898_36903 = G__36915;
count__36899_36904 = G__36916;
i__36900_36905 = G__36917;
continue;
} else {
var msg_36918 = cljs.core.first.call(null,seq__36897_36912__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36918);


var G__36919 = cljs.core.next.call(null,seq__36897_36912__$1);
var G__36920 = null;
var G__36921 = (0);
var G__36922 = (0);
seq__36897_36902 = G__36919;
chunk__36898_36903 = G__36920;
count__36899_36904 = G__36921;
i__36900_36905 = G__36922;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36927 = arguments.length;
var i__4532__auto___36928 = (0);
while(true){
if((i__4532__auto___36928 < len__4531__auto___36927)){
args__4534__auto__.push((arguments[i__4532__auto___36928]));

var G__36929 = (i__4532__auto___36928 + (1));
i__4532__auto___36928 = G__36929;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36924){
var map__36925 = p__36924;
var map__36925__$1 = ((((!((map__36925 == null)))?(((((map__36925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36925):map__36925);
var opts = map__36925__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36923){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36923));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36930){if((e36930 instanceof Error)){
var e = e36930;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36930;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36931){
var map__36932 = p__36931;
var map__36932__$1 = ((((!((map__36932 == null)))?(((((map__36932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36932):map__36932);
var msg_name = cljs.core.get.call(null,map__36932__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1543435812892
