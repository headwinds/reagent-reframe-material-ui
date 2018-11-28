// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.components.sidebar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('example.subs');
goog.require('example.events');
goog.require('cljs.core.async');
goog.require('example.utils.http_fx');
example.components.sidebar.item_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["#666",(200),"transparent","pointer","Helvetica Neue",(10),"#eee","block","relative","1px solid #eee",(4),(40),(2)]);
example.components.sidebar.selected_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #6cb7e0"], null);
example.components.sidebar.handle_click = (function example$components$sidebar$handle_click(){
return example.utils.http_fx.set_location.call(null,"#/");
});
example.components.sidebar.get_style = (function example$components$sidebar$get_style(active_demo,demo){
if(cljs.core._EQ_.call(null,active_demo,demo)){
return cljs.core.conj.call(null,example.components.sidebar.item_style,example.components.sidebar.selected_style);
} else {
return example.components.sidebar.item_style;
}
});
example.components.sidebar.handle_page_change = (function example$components$sidebar$handle_page_change(page,path,change_page){
example.utils.http_fx._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),page], null));

change_page.call(null);

var c__23767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23767__auto__){
return (function (){
var f__23768__auto__ = (function (){var switch__23744__auto__ = ((function (c__23767__auto__){
return (function (state_24314){
var state_val_24315 = (state_24314[(1)]);
if((state_val_24315 === (1))){
var inst_24309 = cljs.core.async.timeout.call(null,(1000));
var state_24314__$1 = state_24314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24314__$1,(2),inst_24309);
} else {
if((state_val_24315 === (2))){
var inst_24311 = (state_24314[(2)]);
var inst_24312 = example.utils.http_fx.set_location.call(null,path);
var state_24314__$1 = (function (){var statearr_24316 = state_24314;
(statearr_24316[(7)] = inst_24311);

return statearr_24316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24314__$1,inst_24312);
} else {
return null;
}
}
});})(c__23767__auto__))
;
return ((function (switch__23744__auto__,c__23767__auto__){
return (function() {
var example$components$sidebar$handle_page_change_$_state_machine__23745__auto__ = null;
var example$components$sidebar$handle_page_change_$_state_machine__23745__auto____0 = (function (){
var statearr_24317 = [null,null,null,null,null,null,null,null];
(statearr_24317[(0)] = example$components$sidebar$handle_page_change_$_state_machine__23745__auto__);

(statearr_24317[(1)] = (1));

return statearr_24317;
});
var example$components$sidebar$handle_page_change_$_state_machine__23745__auto____1 = (function (state_24314){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_24314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e24318){if((e24318 instanceof Object)){
var ex__23748__auto__ = e24318;
var statearr_24319_24321 = state_24314;
(statearr_24319_24321[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24322 = state_24314;
state_24314 = G__24322;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
example$components$sidebar$handle_page_change_$_state_machine__23745__auto__ = function(state_24314){
switch(arguments.length){
case 0:
return example$components$sidebar$handle_page_change_$_state_machine__23745__auto____0.call(this);
case 1:
return example$components$sidebar$handle_page_change_$_state_machine__23745__auto____1.call(this,state_24314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
example$components$sidebar$handle_page_change_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = example$components$sidebar$handle_page_change_$_state_machine__23745__auto____0;
example$components$sidebar$handle_page_change_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = example$components$sidebar$handle_page_change_$_state_machine__23745__auto____1;
return example$components$sidebar$handle_page_change_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23767__auto__))
})();
var state__23769__auto__ = (function (){var statearr_24320 = f__23768__auto__.call(null);
(statearr_24320[(6)] = c__23767__auto__);

return statearr_24320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23769__auto__);
});})(c__23767__auto__))
);

return c__23767__auto__;
});
example.components.sidebar.sidebar_view = (function example$components$sidebar$sidebar_view(change_page){
return (function (){
var active_demo = example.utils.http_fx._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.subs","active-demo","example.subs/active-demo",1255873065)], null));
var _ = cljs.core.print.call(null,active_demo);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10),new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"transparent"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),example.components.sidebar.handle_click,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10),new cljs.core.Keyword(null,"border","border",1444987323),"10px solid #f1f1f1",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"all",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://cdn.customfields.bonify.io/littlebitsproduction.myshopify.com/fields/products/accessory_image/10281133513/droid%20parts.jpg",new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(150)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_demo,_){
return (function (ev){
return example.components.sidebar.handle_page_change.call(null,"autocomplete","/#/demos/autocomplete",change_page);
});})(active_demo,_))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.get_style.call(null,active_demo,"autocomplete")], null),"Autocomplete"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_demo,_){
return (function (ev){
return example.components.sidebar.handle_page_change.call(null,"button","/#/demos/button",change_page);
});})(active_demo,_))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.get_style.call(null,active_demo,"button")], null),"Button"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_demo,_){
return (function (ev){
return example.components.sidebar.handle_page_change.call(null,"pickers","/#/demos/pickers",change_page);
});})(active_demo,_))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.get_style.call(null,active_demo,"pickers")], null),"Pickers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_demo,_){
return (function (ev){
return example.components.sidebar.handle_page_change.call(null,"menu","/#/demos/menu",change_page);
});})(active_demo,_))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.get_style.call(null,active_demo,"menu")], null),"Menu"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_demo,_){
return (function (ev){
return example.components.sidebar.handle_page_change.call(null,"table","/#/demos/table",change_page);
});})(active_demo,_))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.get_style.call(null,active_demo,"table")], null),"Table"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_demo,_){
return (function (ev){
return example.components.sidebar.handle_page_change.call(null,"text-field","/#/demos/text-field",change_page);
});})(active_demo,_))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.get_style.call(null,active_demo,"text-field")], null),"Text Field"], null)], null);
});
});

//# sourceMappingURL=sidebar.js.map?rel=1543448146415
