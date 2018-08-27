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
}catch (e39641){if((e39641 instanceof Error)){
var e = e39641;
return "Error: Unable to stringify";
} else {
throw e39641;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39644 = arguments.length;
switch (G__39644) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39642_SHARP_){
if(typeof p1__39642_SHARP_ === 'string'){
return p1__39642_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39642_SHARP_);
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
var len__4531__auto___39647 = arguments.length;
var i__4532__auto___39648 = (0);
while(true){
if((i__4532__auto___39648 < len__4531__auto___39647)){
args__4534__auto__.push((arguments[i__4532__auto___39648]));

var G__39649 = (i__4532__auto___39648 + (1));
i__4532__auto___39648 = G__39649;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39646){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39646));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39651 = arguments.length;
var i__4532__auto___39652 = (0);
while(true){
if((i__4532__auto___39652 < len__4531__auto___39651)){
args__4534__auto__.push((arguments[i__4532__auto___39652]));

var G__39653 = (i__4532__auto___39652 + (1));
i__4532__auto___39652 = G__39653;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39650){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39650));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39654){
var map__39655 = p__39654;
var map__39655__$1 = ((((!((map__39655 == null)))?(((((map__39655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39655):map__39655);
var message = cljs.core.get.call(null,map__39655__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39655__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33878__auto___39734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___39734,ch){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___39734,ch){
return (function (state_39706){
var state_val_39707 = (state_39706[(1)]);
if((state_val_39707 === (7))){
var inst_39702 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
var statearr_39708_39735 = state_39706__$1;
(statearr_39708_39735[(2)] = inst_39702);

(statearr_39708_39735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (1))){
var state_39706__$1 = state_39706;
var statearr_39709_39736 = state_39706__$1;
(statearr_39709_39736[(2)] = null);

(statearr_39709_39736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (4))){
var inst_39659 = (state_39706[(7)]);
var inst_39659__$1 = (state_39706[(2)]);
var state_39706__$1 = (function (){var statearr_39710 = state_39706;
(statearr_39710[(7)] = inst_39659__$1);

return statearr_39710;
})();
if(cljs.core.truth_(inst_39659__$1)){
var statearr_39711_39737 = state_39706__$1;
(statearr_39711_39737[(1)] = (5));

} else {
var statearr_39712_39738 = state_39706__$1;
(statearr_39712_39738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (15))){
var inst_39666 = (state_39706[(8)]);
var inst_39681 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39666);
var inst_39682 = cljs.core.first.call(null,inst_39681);
var inst_39683 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39682);
var inst_39684 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39683)].join('');
var inst_39685 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39684);
var state_39706__$1 = state_39706;
var statearr_39713_39739 = state_39706__$1;
(statearr_39713_39739[(2)] = inst_39685);

(statearr_39713_39739[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (13))){
var inst_39690 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
var statearr_39714_39740 = state_39706__$1;
(statearr_39714_39740[(2)] = inst_39690);

(statearr_39714_39740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (6))){
var state_39706__$1 = state_39706;
var statearr_39715_39741 = state_39706__$1;
(statearr_39715_39741[(2)] = null);

(statearr_39715_39741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (17))){
var inst_39688 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
var statearr_39716_39742 = state_39706__$1;
(statearr_39716_39742[(2)] = inst_39688);

(statearr_39716_39742[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (3))){
var inst_39704 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39706__$1,inst_39704);
} else {
if((state_val_39707 === (12))){
var inst_39665 = (state_39706[(9)]);
var inst_39679 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39665,opts);
var state_39706__$1 = state_39706;
if(cljs.core.truth_(inst_39679)){
var statearr_39717_39743 = state_39706__$1;
(statearr_39717_39743[(1)] = (15));

} else {
var statearr_39718_39744 = state_39706__$1;
(statearr_39718_39744[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (2))){
var state_39706__$1 = state_39706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39706__$1,(4),ch);
} else {
if((state_val_39707 === (11))){
var inst_39666 = (state_39706[(8)]);
var inst_39671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39672 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39666);
var inst_39673 = cljs.core.async.timeout.call(null,(1000));
var inst_39674 = [inst_39672,inst_39673];
var inst_39675 = (new cljs.core.PersistentVector(null,2,(5),inst_39671,inst_39674,null));
var state_39706__$1 = state_39706;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39706__$1,(14),inst_39675);
} else {
if((state_val_39707 === (9))){
var inst_39666 = (state_39706[(8)]);
var inst_39692 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39693 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39666);
var inst_39694 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39693);
var inst_39695 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39694)].join('');
var inst_39696 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39695);
var state_39706__$1 = (function (){var statearr_39719 = state_39706;
(statearr_39719[(10)] = inst_39692);

return statearr_39719;
})();
var statearr_39720_39745 = state_39706__$1;
(statearr_39720_39745[(2)] = inst_39696);

(statearr_39720_39745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (5))){
var inst_39659 = (state_39706[(7)]);
var inst_39661 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39662 = (new cljs.core.PersistentArrayMap(null,2,inst_39661,null));
var inst_39663 = (new cljs.core.PersistentHashSet(null,inst_39662,null));
var inst_39664 = figwheel.client.focus_msgs.call(null,inst_39663,inst_39659);
var inst_39665 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39664);
var inst_39666 = cljs.core.first.call(null,inst_39664);
var inst_39667 = figwheel.client.autoload_QMARK_.call(null);
var state_39706__$1 = (function (){var statearr_39721 = state_39706;
(statearr_39721[(9)] = inst_39665);

(statearr_39721[(8)] = inst_39666);

return statearr_39721;
})();
if(cljs.core.truth_(inst_39667)){
var statearr_39722_39746 = state_39706__$1;
(statearr_39722_39746[(1)] = (8));

} else {
var statearr_39723_39747 = state_39706__$1;
(statearr_39723_39747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (14))){
var inst_39677 = (state_39706[(2)]);
var state_39706__$1 = state_39706;
var statearr_39724_39748 = state_39706__$1;
(statearr_39724_39748[(2)] = inst_39677);

(statearr_39724_39748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (16))){
var state_39706__$1 = state_39706;
var statearr_39725_39749 = state_39706__$1;
(statearr_39725_39749[(2)] = null);

(statearr_39725_39749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (10))){
var inst_39698 = (state_39706[(2)]);
var state_39706__$1 = (function (){var statearr_39726 = state_39706;
(statearr_39726[(11)] = inst_39698);

return statearr_39726;
})();
var statearr_39727_39750 = state_39706__$1;
(statearr_39727_39750[(2)] = null);

(statearr_39727_39750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39707 === (8))){
var inst_39665 = (state_39706[(9)]);
var inst_39669 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39665,opts);
var state_39706__$1 = state_39706;
if(cljs.core.truth_(inst_39669)){
var statearr_39728_39751 = state_39706__$1;
(statearr_39728_39751[(1)] = (11));

} else {
var statearr_39729_39752 = state_39706__$1;
(statearr_39729_39752[(1)] = (12));

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
});})(c__33878__auto___39734,ch))
;
return ((function (switch__33787__auto__,c__33878__auto___39734,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33788__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33788__auto____0 = (function (){
var statearr_39730 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39730[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33788__auto__);

(statearr_39730[(1)] = (1));

return statearr_39730;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33788__auto____1 = (function (state_39706){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_39706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e39731){if((e39731 instanceof Object)){
var ex__33791__auto__ = e39731;
var statearr_39732_39753 = state_39706;
(statearr_39732_39753[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39754 = state_39706;
state_39706 = G__39754;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33788__auto__ = function(state_39706){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33788__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33788__auto____1.call(this,state_39706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33788__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33788__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___39734,ch))
})();
var state__33880__auto__ = (function (){var statearr_39733 = f__33879__auto__.call(null);
(statearr_39733[(6)] = c__33878__auto___39734);

return statearr_39733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___39734,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39755_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39755_SHARP_));
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
var base_path_39759 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39759){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39757 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39758 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39757,_STAR_print_fn_STAR_39758,sb,base_path_39759){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_39757,_STAR_print_fn_STAR_39758,sb,base_path_39759))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39758;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39757;
}}catch (e39756){if((e39756 instanceof Error)){
var e = e39756;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39759], null));
} else {
var e = e39756;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_39759))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39760){
var map__39761 = p__39760;
var map__39761__$1 = ((((!((map__39761 == null)))?(((((map__39761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39761):map__39761);
var opts = map__39761__$1;
var build_id = cljs.core.get.call(null,map__39761__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39761,map__39761__$1,opts,build_id){
return (function (p__39763){
var vec__39764 = p__39763;
var seq__39765 = cljs.core.seq.call(null,vec__39764);
var first__39766 = cljs.core.first.call(null,seq__39765);
var seq__39765__$1 = cljs.core.next.call(null,seq__39765);
var map__39767 = first__39766;
var map__39767__$1 = ((((!((map__39767 == null)))?(((((map__39767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39767):map__39767);
var msg = map__39767__$1;
var msg_name = cljs.core.get.call(null,map__39767__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39765__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39764,seq__39765,first__39766,seq__39765__$1,map__39767,map__39767__$1,msg,msg_name,_,map__39761,map__39761__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39764,seq__39765,first__39766,seq__39765__$1,map__39767,map__39767__$1,msg,msg_name,_,map__39761,map__39761__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39761,map__39761__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39769){
var vec__39770 = p__39769;
var seq__39771 = cljs.core.seq.call(null,vec__39770);
var first__39772 = cljs.core.first.call(null,seq__39771);
var seq__39771__$1 = cljs.core.next.call(null,seq__39771);
var map__39773 = first__39772;
var map__39773__$1 = ((((!((map__39773 == null)))?(((((map__39773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39773):map__39773);
var msg = map__39773__$1;
var msg_name = cljs.core.get.call(null,map__39773__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39771__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39775){
var map__39776 = p__39775;
var map__39776__$1 = ((((!((map__39776 == null)))?(((((map__39776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39776):map__39776);
var on_compile_warning = cljs.core.get.call(null,map__39776__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39776__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39776,map__39776__$1,on_compile_warning,on_compile_fail){
return (function (p__39778){
var vec__39779 = p__39778;
var seq__39780 = cljs.core.seq.call(null,vec__39779);
var first__39781 = cljs.core.first.call(null,seq__39780);
var seq__39780__$1 = cljs.core.next.call(null,seq__39780);
var map__39782 = first__39781;
var map__39782__$1 = ((((!((map__39782 == null)))?(((((map__39782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39782):map__39782);
var msg = map__39782__$1;
var msg_name = cljs.core.get.call(null,map__39782__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39780__$1;
var pred__39784 = cljs.core._EQ_;
var expr__39785 = msg_name;
if(cljs.core.truth_(pred__39784.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39785))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39784.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39785))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39776,map__39776__$1,on_compile_warning,on_compile_fail))
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
var c__33878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto__,msg_hist,msg_names,msg){
return (function (state_39874){
var state_val_39875 = (state_39874[(1)]);
if((state_val_39875 === (7))){
var inst_39794 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
if(cljs.core.truth_(inst_39794)){
var statearr_39876_39923 = state_39874__$1;
(statearr_39876_39923[(1)] = (8));

} else {
var statearr_39877_39924 = state_39874__$1;
(statearr_39877_39924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (20))){
var inst_39868 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39878_39925 = state_39874__$1;
(statearr_39878_39925[(2)] = inst_39868);

(statearr_39878_39925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (27))){
var inst_39864 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39879_39926 = state_39874__$1;
(statearr_39879_39926[(2)] = inst_39864);

(statearr_39879_39926[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (1))){
var inst_39787 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39874__$1 = state_39874;
if(cljs.core.truth_(inst_39787)){
var statearr_39880_39927 = state_39874__$1;
(statearr_39880_39927[(1)] = (2));

} else {
var statearr_39881_39928 = state_39874__$1;
(statearr_39881_39928[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (24))){
var inst_39866 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39882_39929 = state_39874__$1;
(statearr_39882_39929[(2)] = inst_39866);

(statearr_39882_39929[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (4))){
var inst_39872 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39874__$1,inst_39872);
} else {
if((state_val_39875 === (15))){
var inst_39870 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39883_39930 = state_39874__$1;
(statearr_39883_39930[(2)] = inst_39870);

(statearr_39883_39930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (21))){
var inst_39823 = (state_39874[(2)]);
var inst_39824 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39825 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39824);
var state_39874__$1 = (function (){var statearr_39884 = state_39874;
(statearr_39884[(7)] = inst_39823);

return statearr_39884;
})();
var statearr_39885_39931 = state_39874__$1;
(statearr_39885_39931[(2)] = inst_39825);

(statearr_39885_39931[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (31))){
var inst_39853 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39874__$1 = state_39874;
if(cljs.core.truth_(inst_39853)){
var statearr_39886_39932 = state_39874__$1;
(statearr_39886_39932[(1)] = (34));

} else {
var statearr_39887_39933 = state_39874__$1;
(statearr_39887_39933[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (32))){
var inst_39862 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39888_39934 = state_39874__$1;
(statearr_39888_39934[(2)] = inst_39862);

(statearr_39888_39934[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (33))){
var inst_39849 = (state_39874[(2)]);
var inst_39850 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39851 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39850);
var state_39874__$1 = (function (){var statearr_39889 = state_39874;
(statearr_39889[(8)] = inst_39849);

return statearr_39889;
})();
var statearr_39890_39935 = state_39874__$1;
(statearr_39890_39935[(2)] = inst_39851);

(statearr_39890_39935[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (13))){
var inst_39808 = figwheel.client.heads_up.clear.call(null);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39874__$1,(16),inst_39808);
} else {
if((state_val_39875 === (22))){
var inst_39829 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39830 = figwheel.client.heads_up.append_warning_message.call(null,inst_39829);
var state_39874__$1 = state_39874;
var statearr_39891_39936 = state_39874__$1;
(statearr_39891_39936[(2)] = inst_39830);

(statearr_39891_39936[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (36))){
var inst_39860 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39892_39937 = state_39874__$1;
(statearr_39892_39937[(2)] = inst_39860);

(statearr_39892_39937[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (29))){
var inst_39840 = (state_39874[(2)]);
var inst_39841 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39842 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39841);
var state_39874__$1 = (function (){var statearr_39893 = state_39874;
(statearr_39893[(9)] = inst_39840);

return statearr_39893;
})();
var statearr_39894_39938 = state_39874__$1;
(statearr_39894_39938[(2)] = inst_39842);

(statearr_39894_39938[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (6))){
var inst_39789 = (state_39874[(10)]);
var state_39874__$1 = state_39874;
var statearr_39895_39939 = state_39874__$1;
(statearr_39895_39939[(2)] = inst_39789);

(statearr_39895_39939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (28))){
var inst_39836 = (state_39874[(2)]);
var inst_39837 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39838 = figwheel.client.heads_up.display_warning.call(null,inst_39837);
var state_39874__$1 = (function (){var statearr_39896 = state_39874;
(statearr_39896[(11)] = inst_39836);

return statearr_39896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39874__$1,(29),inst_39838);
} else {
if((state_val_39875 === (25))){
var inst_39834 = figwheel.client.heads_up.clear.call(null);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39874__$1,(28),inst_39834);
} else {
if((state_val_39875 === (34))){
var inst_39855 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39874__$1,(37),inst_39855);
} else {
if((state_val_39875 === (17))){
var inst_39814 = (state_39874[(2)]);
var inst_39815 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39816 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39815);
var state_39874__$1 = (function (){var statearr_39897 = state_39874;
(statearr_39897[(12)] = inst_39814);

return statearr_39897;
})();
var statearr_39898_39940 = state_39874__$1;
(statearr_39898_39940[(2)] = inst_39816);

(statearr_39898_39940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (3))){
var inst_39806 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39874__$1 = state_39874;
if(cljs.core.truth_(inst_39806)){
var statearr_39899_39941 = state_39874__$1;
(statearr_39899_39941[(1)] = (13));

} else {
var statearr_39900_39942 = state_39874__$1;
(statearr_39900_39942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (12))){
var inst_39802 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39901_39943 = state_39874__$1;
(statearr_39901_39943[(2)] = inst_39802);

(statearr_39901_39943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (2))){
var inst_39789 = (state_39874[(10)]);
var inst_39789__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39874__$1 = (function (){var statearr_39902 = state_39874;
(statearr_39902[(10)] = inst_39789__$1);

return statearr_39902;
})();
if(cljs.core.truth_(inst_39789__$1)){
var statearr_39903_39944 = state_39874__$1;
(statearr_39903_39944[(1)] = (5));

} else {
var statearr_39904_39945 = state_39874__$1;
(statearr_39904_39945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (23))){
var inst_39832 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39874__$1 = state_39874;
if(cljs.core.truth_(inst_39832)){
var statearr_39905_39946 = state_39874__$1;
(statearr_39905_39946[(1)] = (25));

} else {
var statearr_39906_39947 = state_39874__$1;
(statearr_39906_39947[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (35))){
var state_39874__$1 = state_39874;
var statearr_39907_39948 = state_39874__$1;
(statearr_39907_39948[(2)] = null);

(statearr_39907_39948[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (19))){
var inst_39827 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39874__$1 = state_39874;
if(cljs.core.truth_(inst_39827)){
var statearr_39908_39949 = state_39874__$1;
(statearr_39908_39949[(1)] = (22));

} else {
var statearr_39909_39950 = state_39874__$1;
(statearr_39909_39950[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (11))){
var inst_39798 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39910_39951 = state_39874__$1;
(statearr_39910_39951[(2)] = inst_39798);

(statearr_39910_39951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (9))){
var inst_39800 = figwheel.client.heads_up.clear.call(null);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39874__$1,(12),inst_39800);
} else {
if((state_val_39875 === (5))){
var inst_39791 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39874__$1 = state_39874;
var statearr_39911_39952 = state_39874__$1;
(statearr_39911_39952[(2)] = inst_39791);

(statearr_39911_39952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (14))){
var inst_39818 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39874__$1 = state_39874;
if(cljs.core.truth_(inst_39818)){
var statearr_39912_39953 = state_39874__$1;
(statearr_39912_39953[(1)] = (18));

} else {
var statearr_39913_39954 = state_39874__$1;
(statearr_39913_39954[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (26))){
var inst_39844 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39874__$1 = state_39874;
if(cljs.core.truth_(inst_39844)){
var statearr_39914_39955 = state_39874__$1;
(statearr_39914_39955[(1)] = (30));

} else {
var statearr_39915_39956 = state_39874__$1;
(statearr_39915_39956[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (16))){
var inst_39810 = (state_39874[(2)]);
var inst_39811 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39812 = figwheel.client.heads_up.display_exception.call(null,inst_39811);
var state_39874__$1 = (function (){var statearr_39916 = state_39874;
(statearr_39916[(13)] = inst_39810);

return statearr_39916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39874__$1,(17),inst_39812);
} else {
if((state_val_39875 === (30))){
var inst_39846 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39847 = figwheel.client.heads_up.display_warning.call(null,inst_39846);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39874__$1,(33),inst_39847);
} else {
if((state_val_39875 === (10))){
var inst_39804 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39917_39957 = state_39874__$1;
(statearr_39917_39957[(2)] = inst_39804);

(statearr_39917_39957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (18))){
var inst_39820 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39821 = figwheel.client.heads_up.display_exception.call(null,inst_39820);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39874__$1,(21),inst_39821);
} else {
if((state_val_39875 === (37))){
var inst_39857 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39918_39958 = state_39874__$1;
(statearr_39918_39958[(2)] = inst_39857);

(statearr_39918_39958[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (8))){
var inst_39796 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39874__$1,(11),inst_39796);
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
});})(c__33878__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33787__auto__,c__33878__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33788__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33788__auto____0 = (function (){
var statearr_39919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39919[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33788__auto__);

(statearr_39919[(1)] = (1));

return statearr_39919;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33788__auto____1 = (function (state_39874){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_39874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e39920){if((e39920 instanceof Object)){
var ex__33791__auto__ = e39920;
var statearr_39921_39959 = state_39874;
(statearr_39921_39959[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39960 = state_39874;
state_39874 = G__39960;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33788__auto__ = function(state_39874){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33788__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33788__auto____1.call(this,state_39874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33788__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33788__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto__,msg_hist,msg_names,msg))
})();
var state__33880__auto__ = (function (){var statearr_39922 = f__33879__auto__.call(null);
(statearr_39922[(6)] = c__33878__auto__);

return statearr_39922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto__,msg_hist,msg_names,msg))
);

return c__33878__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33878__auto___39989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___39989,ch){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___39989,ch){
return (function (state_39975){
var state_val_39976 = (state_39975[(1)]);
if((state_val_39976 === (1))){
var state_39975__$1 = state_39975;
var statearr_39977_39990 = state_39975__$1;
(statearr_39977_39990[(2)] = null);

(statearr_39977_39990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39976 === (2))){
var state_39975__$1 = state_39975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39975__$1,(4),ch);
} else {
if((state_val_39976 === (3))){
var inst_39973 = (state_39975[(2)]);
var state_39975__$1 = state_39975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39975__$1,inst_39973);
} else {
if((state_val_39976 === (4))){
var inst_39963 = (state_39975[(7)]);
var inst_39963__$1 = (state_39975[(2)]);
var state_39975__$1 = (function (){var statearr_39978 = state_39975;
(statearr_39978[(7)] = inst_39963__$1);

return statearr_39978;
})();
if(cljs.core.truth_(inst_39963__$1)){
var statearr_39979_39991 = state_39975__$1;
(statearr_39979_39991[(1)] = (5));

} else {
var statearr_39980_39992 = state_39975__$1;
(statearr_39980_39992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39976 === (5))){
var inst_39963 = (state_39975[(7)]);
var inst_39965 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39963);
var state_39975__$1 = state_39975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39975__$1,(8),inst_39965);
} else {
if((state_val_39976 === (6))){
var state_39975__$1 = state_39975;
var statearr_39981_39993 = state_39975__$1;
(statearr_39981_39993[(2)] = null);

(statearr_39981_39993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39976 === (7))){
var inst_39971 = (state_39975[(2)]);
var state_39975__$1 = state_39975;
var statearr_39982_39994 = state_39975__$1;
(statearr_39982_39994[(2)] = inst_39971);

(statearr_39982_39994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39976 === (8))){
var inst_39967 = (state_39975[(2)]);
var state_39975__$1 = (function (){var statearr_39983 = state_39975;
(statearr_39983[(8)] = inst_39967);

return statearr_39983;
})();
var statearr_39984_39995 = state_39975__$1;
(statearr_39984_39995[(2)] = null);

(statearr_39984_39995[(1)] = (2));


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
});})(c__33878__auto___39989,ch))
;
return ((function (switch__33787__auto__,c__33878__auto___39989,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33788__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33788__auto____0 = (function (){
var statearr_39985 = [null,null,null,null,null,null,null,null,null];
(statearr_39985[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33788__auto__);

(statearr_39985[(1)] = (1));

return statearr_39985;
});
var figwheel$client$heads_up_plugin_$_state_machine__33788__auto____1 = (function (state_39975){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_39975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e39986){if((e39986 instanceof Object)){
var ex__33791__auto__ = e39986;
var statearr_39987_39996 = state_39975;
(statearr_39987_39996[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39997 = state_39975;
state_39975 = G__39997;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33788__auto__ = function(state_39975){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33788__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33788__auto____1.call(this,state_39975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33788__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33788__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___39989,ch))
})();
var state__33880__auto__ = (function (){var statearr_39988 = f__33879__auto__.call(null);
(statearr_39988[(6)] = c__33878__auto___39989);

return statearr_39988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___39989,ch))
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
var c__33878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto__){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto__){
return (function (state_40003){
var state_val_40004 = (state_40003[(1)]);
if((state_val_40004 === (1))){
var inst_39998 = cljs.core.async.timeout.call(null,(3000));
var state_40003__$1 = state_40003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40003__$1,(2),inst_39998);
} else {
if((state_val_40004 === (2))){
var inst_40000 = (state_40003[(2)]);
var inst_40001 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40003__$1 = (function (){var statearr_40005 = state_40003;
(statearr_40005[(7)] = inst_40000);

return statearr_40005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40003__$1,inst_40001);
} else {
return null;
}
}
});})(c__33878__auto__))
;
return ((function (switch__33787__auto__,c__33878__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33788__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33788__auto____0 = (function (){
var statearr_40006 = [null,null,null,null,null,null,null,null];
(statearr_40006[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33788__auto__);

(statearr_40006[(1)] = (1));

return statearr_40006;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33788__auto____1 = (function (state_40003){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_40003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e40007){if((e40007 instanceof Object)){
var ex__33791__auto__ = e40007;
var statearr_40008_40010 = state_40003;
(statearr_40008_40010[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40011 = state_40003;
state_40003 = G__40011;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33788__auto__ = function(state_40003){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33788__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33788__auto____1.call(this,state_40003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33788__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33788__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto__))
})();
var state__33880__auto__ = (function (){var statearr_40009 = f__33879__auto__.call(null);
(statearr_40009[(6)] = c__33878__auto__);

return statearr_40009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto__))
);

return c__33878__auto__;
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
var c__33878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto__,figwheel_version,temp__5457__auto__){
return (function (state_40018){
var state_val_40019 = (state_40018[(1)]);
if((state_val_40019 === (1))){
var inst_40012 = cljs.core.async.timeout.call(null,(2000));
var state_40018__$1 = state_40018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40018__$1,(2),inst_40012);
} else {
if((state_val_40019 === (2))){
var inst_40014 = (state_40018[(2)]);
var inst_40015 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_40016 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40015);
var state_40018__$1 = (function (){var statearr_40020 = state_40018;
(statearr_40020[(7)] = inst_40014);

return statearr_40020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40018__$1,inst_40016);
} else {
return null;
}
}
});})(c__33878__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__33787__auto__,c__33878__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33788__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33788__auto____0 = (function (){
var statearr_40021 = [null,null,null,null,null,null,null,null];
(statearr_40021[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33788__auto__);

(statearr_40021[(1)] = (1));

return statearr_40021;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33788__auto____1 = (function (state_40018){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_40018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e40022){if((e40022 instanceof Object)){
var ex__33791__auto__ = e40022;
var statearr_40023_40025 = state_40018;
(statearr_40023_40025[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40026 = state_40018;
state_40018 = G__40026;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33788__auto__ = function(state_40018){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33788__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33788__auto____1.call(this,state_40018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33788__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33788__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto__,figwheel_version,temp__5457__auto__))
})();
var state__33880__auto__ = (function (){var statearr_40024 = f__33879__auto__.call(null);
(statearr_40024[(6)] = c__33878__auto__);

return statearr_40024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto__,figwheel_version,temp__5457__auto__))
);

return c__33878__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40027){
var map__40028 = p__40027;
var map__40028__$1 = ((((!((map__40028 == null)))?(((((map__40028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40028):map__40028);
var file = cljs.core.get.call(null,map__40028__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40028__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40028__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40030 = "";
var G__40030__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40030),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__40030);
var G__40030__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40030__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40030__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40030__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__40030__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40031){
var map__40032 = p__40031;
var map__40032__$1 = ((((!((map__40032 == null)))?(((((map__40032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40032):map__40032);
var ed = map__40032__$1;
var formatted_exception = cljs.core.get.call(null,map__40032__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40032__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40032__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40034_40038 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40035_40039 = null;
var count__40036_40040 = (0);
var i__40037_40041 = (0);
while(true){
if((i__40037_40041 < count__40036_40040)){
var msg_40042 = cljs.core._nth.call(null,chunk__40035_40039,i__40037_40041);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40042);


var G__40043 = seq__40034_40038;
var G__40044 = chunk__40035_40039;
var G__40045 = count__40036_40040;
var G__40046 = (i__40037_40041 + (1));
seq__40034_40038 = G__40043;
chunk__40035_40039 = G__40044;
count__40036_40040 = G__40045;
i__40037_40041 = G__40046;
continue;
} else {
var temp__5457__auto___40047 = cljs.core.seq.call(null,seq__40034_40038);
if(temp__5457__auto___40047){
var seq__40034_40048__$1 = temp__5457__auto___40047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40034_40048__$1)){
var c__4351__auto___40049 = cljs.core.chunk_first.call(null,seq__40034_40048__$1);
var G__40050 = cljs.core.chunk_rest.call(null,seq__40034_40048__$1);
var G__40051 = c__4351__auto___40049;
var G__40052 = cljs.core.count.call(null,c__4351__auto___40049);
var G__40053 = (0);
seq__40034_40038 = G__40050;
chunk__40035_40039 = G__40051;
count__40036_40040 = G__40052;
i__40037_40041 = G__40053;
continue;
} else {
var msg_40054 = cljs.core.first.call(null,seq__40034_40048__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40054);


var G__40055 = cljs.core.next.call(null,seq__40034_40048__$1);
var G__40056 = null;
var G__40057 = (0);
var G__40058 = (0);
seq__40034_40038 = G__40055;
chunk__40035_40039 = G__40056;
count__40036_40040 = G__40057;
i__40037_40041 = G__40058;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40059){
var map__40060 = p__40059;
var map__40060__$1 = ((((!((map__40060 == null)))?(((((map__40060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40060):map__40060);
var w = map__40060__$1;
var message = cljs.core.get.call(null,map__40060__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__40062 = cljs.core.seq.call(null,plugins);
var chunk__40063 = null;
var count__40064 = (0);
var i__40065 = (0);
while(true){
if((i__40065 < count__40064)){
var vec__40066 = cljs.core._nth.call(null,chunk__40063,i__40065);
var k = cljs.core.nth.call(null,vec__40066,(0),null);
var plugin = cljs.core.nth.call(null,vec__40066,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40072 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40062,chunk__40063,count__40064,i__40065,pl_40072,vec__40066,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40072.call(null,msg_hist);
});})(seq__40062,chunk__40063,count__40064,i__40065,pl_40072,vec__40066,k,plugin))
);
} else {
}


var G__40073 = seq__40062;
var G__40074 = chunk__40063;
var G__40075 = count__40064;
var G__40076 = (i__40065 + (1));
seq__40062 = G__40073;
chunk__40063 = G__40074;
count__40064 = G__40075;
i__40065 = G__40076;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40062);
if(temp__5457__auto__){
var seq__40062__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40062__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__40062__$1);
var G__40077 = cljs.core.chunk_rest.call(null,seq__40062__$1);
var G__40078 = c__4351__auto__;
var G__40079 = cljs.core.count.call(null,c__4351__auto__);
var G__40080 = (0);
seq__40062 = G__40077;
chunk__40063 = G__40078;
count__40064 = G__40079;
i__40065 = G__40080;
continue;
} else {
var vec__40069 = cljs.core.first.call(null,seq__40062__$1);
var k = cljs.core.nth.call(null,vec__40069,(0),null);
var plugin = cljs.core.nth.call(null,vec__40069,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40081 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40062,chunk__40063,count__40064,i__40065,pl_40081,vec__40069,k,plugin,seq__40062__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40081.call(null,msg_hist);
});})(seq__40062,chunk__40063,count__40064,i__40065,pl_40081,vec__40069,k,plugin,seq__40062__$1,temp__5457__auto__))
);
} else {
}


var G__40082 = cljs.core.next.call(null,seq__40062__$1);
var G__40083 = null;
var G__40084 = (0);
var G__40085 = (0);
seq__40062 = G__40082;
chunk__40063 = G__40083;
count__40064 = G__40084;
i__40065 = G__40085;
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
var G__40087 = arguments.length;
switch (G__40087) {
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

var seq__40088_40093 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40089_40094 = null;
var count__40090_40095 = (0);
var i__40091_40096 = (0);
while(true){
if((i__40091_40096 < count__40090_40095)){
var msg_40097 = cljs.core._nth.call(null,chunk__40089_40094,i__40091_40096);
figwheel.client.socket.handle_incoming_message.call(null,msg_40097);


var G__40098 = seq__40088_40093;
var G__40099 = chunk__40089_40094;
var G__40100 = count__40090_40095;
var G__40101 = (i__40091_40096 + (1));
seq__40088_40093 = G__40098;
chunk__40089_40094 = G__40099;
count__40090_40095 = G__40100;
i__40091_40096 = G__40101;
continue;
} else {
var temp__5457__auto___40102 = cljs.core.seq.call(null,seq__40088_40093);
if(temp__5457__auto___40102){
var seq__40088_40103__$1 = temp__5457__auto___40102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40088_40103__$1)){
var c__4351__auto___40104 = cljs.core.chunk_first.call(null,seq__40088_40103__$1);
var G__40105 = cljs.core.chunk_rest.call(null,seq__40088_40103__$1);
var G__40106 = c__4351__auto___40104;
var G__40107 = cljs.core.count.call(null,c__4351__auto___40104);
var G__40108 = (0);
seq__40088_40093 = G__40105;
chunk__40089_40094 = G__40106;
count__40090_40095 = G__40107;
i__40091_40096 = G__40108;
continue;
} else {
var msg_40109 = cljs.core.first.call(null,seq__40088_40103__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40109);


var G__40110 = cljs.core.next.call(null,seq__40088_40103__$1);
var G__40111 = null;
var G__40112 = (0);
var G__40113 = (0);
seq__40088_40093 = G__40110;
chunk__40089_40094 = G__40111;
count__40090_40095 = G__40112;
i__40091_40096 = G__40113;
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
var len__4531__auto___40118 = arguments.length;
var i__4532__auto___40119 = (0);
while(true){
if((i__4532__auto___40119 < len__4531__auto___40118)){
args__4534__auto__.push((arguments[i__4532__auto___40119]));

var G__40120 = (i__4532__auto___40119 + (1));
i__4532__auto___40119 = G__40120;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40115){
var map__40116 = p__40115;
var map__40116__$1 = ((((!((map__40116 == null)))?(((((map__40116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40116):map__40116);
var opts = map__40116__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40114){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40114));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40121){if((e40121 instanceof Error)){
var e = e40121;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40121;

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
return (function (p__40122){
var map__40123 = p__40122;
var map__40123__$1 = ((((!((map__40123 == null)))?(((((map__40123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40123):map__40123);
var msg_name = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1535318456557
