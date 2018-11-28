// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('material_ui.styles');
goog.require('material_ui.colors');
goog.require('material_ui_icons');
goog.require('example.utils.theme');
goog.require('re_frame.core');
goog.require('example.utils.http_fx');
goog.require('example.components.sidebar');
goog.require('example.routes');
goog.require('example.demos.demo_splash');
goog.require('example.demos.demo_text_field');
goog.require('example.subs');
goog.require('goog.object');
goog.require('cljsjs.react_transition_group');
goog.require('cljsjs.d3');
goog.require('cljs.core.async');
goog.require('reagent.impl.template');
example.view.global$module$material_ui = goog.global["MaterialUI"];
example.view.global$module$material_ui$styles = goog.global["MaterialUIStyles"];
example.view.global$module$material_ui$colors = goog.global["MaterialUIColors"];
example.view.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
example.view.tg = reagent.core.adapt_react_class.call(null,ReactTransitionGroup.TransitionGroup);
if((typeof example !== 'undefined') && (typeof example.view !== 'undefined') && (typeof example.view.state !== 'undefined')){
} else {
example.view.state = reagent.core.atom.call(null,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["previous","next"], null)));
}
example.view.ani_chan = cljs.core.async.chan.call(null);
var c__23767__auto___24861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23767__auto___24861){
return (function (){
var f__23768__auto__ = (function (){var switch__23744__auto__ = ((function (c__23767__auto___24861){
return (function (state_24833){
var state_val_24834 = (state_24833[(1)]);
if((state_val_24834 === (7))){
var inst_24829 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
var statearr_24835_24862 = state_24833__$1;
(statearr_24835_24862[(2)] = inst_24829);

(statearr_24835_24862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (1))){
var inst_24751 = cljs.core.PersistentHashMap.EMPTY;
var inst_24752 = inst_24751;
var state_24833__$1 = (function (){var statearr_24836 = state_24833;
(statearr_24836[(7)] = inst_24752);

return statearr_24836;
})();
var statearr_24837_24863 = state_24833__$1;
(statearr_24837_24863[(2)] = null);

(statearr_24837_24863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (4))){
var inst_24756 = (state_24833[(8)]);
var inst_24752 = (state_24833[(7)]);
var inst_24755 = (state_24833[(2)]);
var inst_24756__$1 = cljs.core.merge.call(null,inst_24752,inst_24755);
var inst_24757 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24758 = [new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"leave","leave",1022579443)];
var inst_24759 = (new cljs.core.PersistentVector(null,2,(5),inst_24757,inst_24758,null));
var inst_24760 = cljs.core.every_QMARK_.call(null,inst_24756__$1,inst_24759);
var state_24833__$1 = (function (){var statearr_24838 = state_24833;
(statearr_24838[(8)] = inst_24756__$1);

return statearr_24838;
})();
if(inst_24760){
var statearr_24839_24864 = state_24833__$1;
(statearr_24839_24864[(1)] = (5));

} else {
var statearr_24840_24865 = state_24833__$1;
(statearr_24840_24865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (15))){
var inst_24756 = (state_24833[(8)]);
var state_24833__$1 = state_24833;
var statearr_24841_24866 = state_24833__$1;
(statearr_24841_24866[(2)] = inst_24756);

(statearr_24841_24866[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (13))){
var inst_24775 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
var statearr_24842_24867 = state_24833__$1;
(statearr_24842_24867[(2)] = inst_24775);

(statearr_24842_24867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (6))){
var inst_24756 = (state_24833[(8)]);
var inst_24752 = inst_24756;
var state_24833__$1 = (function (){var statearr_24843 = state_24833;
(statearr_24843[(7)] = inst_24752);

return statearr_24843;
})();
var statearr_24844_24868 = state_24833__$1;
(statearr_24844_24868[(2)] = null);

(statearr_24844_24868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (3))){
var inst_24831 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24833__$1,inst_24831);
} else {
if((state_val_24834 === (12))){
var state_24833__$1 = state_24833;
var statearr_24845_24869 = state_24833__$1;
(statearr_24845_24869[(2)] = false);

(statearr_24845_24869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (2))){
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24833__$1,(4),example.view.ani_chan);
} else {
if((state_val_24834 === (11))){
var state_24833__$1 = state_24833;
var statearr_24846_24870 = state_24833__$1;
(statearr_24846_24870[(2)] = true);

(statearr_24846_24870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (9))){
var state_24833__$1 = state_24833;
var statearr_24847_24871 = state_24833__$1;
(statearr_24847_24871[(2)] = false);

(statearr_24847_24871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (5))){
var inst_24756 = (state_24833[(8)]);
var inst_24764 = (inst_24756 == null);
var inst_24765 = cljs.core.not.call(null,inst_24764);
var state_24833__$1 = state_24833;
if(inst_24765){
var statearr_24848_24872 = state_24833__$1;
(statearr_24848_24872[(1)] = (8));

} else {
var statearr_24849_24873 = state_24833__$1;
(statearr_24849_24873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (14))){
var inst_24756 = (state_24833[(8)]);
var inst_24780 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24756);
var state_24833__$1 = state_24833;
var statearr_24850_24874 = state_24833__$1;
(statearr_24850_24874[(2)] = inst_24780);

(statearr_24850_24874[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (16))){
var inst_24756 = (state_24833[(8)]);
var inst_24752 = (state_24833[(7)]);
var inst_24783 = (state_24833[(2)]);
var inst_24784 = cljs.core.get.call(null,inst_24783,new cljs.core.Keyword(null,"enter","enter",1792452624));
var inst_24785 = cljs.core.get.call(null,inst_24783,new cljs.core.Keyword(null,"leave","leave",1022579443));
var inst_24786 = cljs.core.get.call(null,inst_24783,new cljs.core.Keyword(null,"enter-cb","enter-cb",16399827));
var inst_24787 = cljs.core.get.call(null,inst_24783,new cljs.core.Keyword(null,"leave-cb","leave-cb",-238538361));
var inst_24788 = cljs.core.get.call(null,inst_24783,new cljs.core.Keyword(null,"enter-height","enter-height",-1947344619));
var inst_24789 = cljs.core.get.call(null,inst_24783,new cljs.core.Keyword(null,"leave-height","leave-height",-1783085366));
var inst_24790 = inst_24785.getBoundingClientRect();
var inst_24791 = d3.select(inst_24785);
var inst_24792 = inst_24791.style("opacity",(1));
var inst_24793 = inst_24792.style("position","fixed");
var inst_24794 = inst_24793.style("margin","0px");
var inst_24795 = inst_24790.width;
var inst_24796 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24795),"px"].join('');
var inst_24797 = inst_24794.style("width",inst_24796);
var inst_24798 = inst_24790.height;
var inst_24799 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24798),"px"].join('');
var inst_24800 = inst_24797.style("height",inst_24799);
var inst_24801 = inst_24790.top;
var inst_24802 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24801),"px"].join('');
var inst_24803 = inst_24800.style("top",inst_24802);
var inst_24804 = inst_24790.left;
var inst_24805 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24804),"px"].join('');
var inst_24806 = inst_24803.style("left",inst_24805);
var inst_24807 = inst_24806.transition();
var inst_24808 = inst_24807.duration((1000));
var inst_24809 = inst_24808.style("opacity",(0));
var inst_24810 = (function (){var rect = inst_24790;
var map__24762 = inst_24783;
var data = inst_24756;
var leave_cb = inst_24787;
var leave_height = inst_24789;
var old_data = inst_24752;
var enter = inst_24784;
var enter_cb = inst_24786;
var leave = inst_24785;
var enter_height = inst_24788;
return ((function (rect,map__24762,data,leave_cb,leave_height,old_data,enter,enter_cb,leave,enter_height,inst_24756,inst_24752,inst_24783,inst_24784,inst_24785,inst_24786,inst_24787,inst_24788,inst_24789,inst_24790,inst_24791,inst_24792,inst_24793,inst_24794,inst_24795,inst_24796,inst_24797,inst_24798,inst_24799,inst_24800,inst_24801,inst_24802,inst_24803,inst_24804,inst_24805,inst_24806,inst_24807,inst_24808,inst_24809,state_val_24834,c__23767__auto___24861){
return (function (){
return leave_cb.call(null);
});
;})(rect,map__24762,data,leave_cb,leave_height,old_data,enter,enter_cb,leave,enter_height,inst_24756,inst_24752,inst_24783,inst_24784,inst_24785,inst_24786,inst_24787,inst_24788,inst_24789,inst_24790,inst_24791,inst_24792,inst_24793,inst_24794,inst_24795,inst_24796,inst_24797,inst_24798,inst_24799,inst_24800,inst_24801,inst_24802,inst_24803,inst_24804,inst_24805,inst_24806,inst_24807,inst_24808,inst_24809,state_val_24834,c__23767__auto___24861))
})();
var inst_24811 = inst_24809.on("end",inst_24810);
var inst_24812 = d3.select(inst_24784);
var inst_24813 = inst_24812.style("display","block");
var inst_24814 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24789),"px"].join('');
var inst_24815 = inst_24813.style("height",inst_24814);
var inst_24816 = inst_24815.transition();
var inst_24817 = inst_24816.duration((1000));
var inst_24818 = inst_24817.delay((500));
var inst_24819 = inst_24818.style("opacity",(1));
var inst_24820 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24788),"px"].join('');
var inst_24821 = inst_24819.style("height",inst_24820);
var inst_24822 = (function (){var rect = inst_24790;
var map__24762 = inst_24783;
var data = inst_24756;
var leave_cb = inst_24787;
var leave_height = inst_24789;
var old_data = inst_24752;
var enter = inst_24784;
var enter_cb = inst_24786;
var leave = inst_24785;
var enter_height = inst_24788;
return ((function (rect,map__24762,data,leave_cb,leave_height,old_data,enter,enter_cb,leave,enter_height,inst_24756,inst_24752,inst_24783,inst_24784,inst_24785,inst_24786,inst_24787,inst_24788,inst_24789,inst_24790,inst_24791,inst_24792,inst_24793,inst_24794,inst_24795,inst_24796,inst_24797,inst_24798,inst_24799,inst_24800,inst_24801,inst_24802,inst_24803,inst_24804,inst_24805,inst_24806,inst_24807,inst_24808,inst_24809,inst_24810,inst_24811,inst_24812,inst_24813,inst_24814,inst_24815,inst_24816,inst_24817,inst_24818,inst_24819,inst_24820,inst_24821,state_val_24834,c__23767__auto___24861){
return (function (){
d3.select(enter).style("height",null);

return enter_cb.call(null);
});
;})(rect,map__24762,data,leave_cb,leave_height,old_data,enter,enter_cb,leave,enter_height,inst_24756,inst_24752,inst_24783,inst_24784,inst_24785,inst_24786,inst_24787,inst_24788,inst_24789,inst_24790,inst_24791,inst_24792,inst_24793,inst_24794,inst_24795,inst_24796,inst_24797,inst_24798,inst_24799,inst_24800,inst_24801,inst_24802,inst_24803,inst_24804,inst_24805,inst_24806,inst_24807,inst_24808,inst_24809,inst_24810,inst_24811,inst_24812,inst_24813,inst_24814,inst_24815,inst_24816,inst_24817,inst_24818,inst_24819,inst_24820,inst_24821,state_val_24834,c__23767__auto___24861))
})();
var inst_24823 = inst_24821.on("end",inst_24822);
var inst_24824 = cljs.core.PersistentHashMap.EMPTY;
var inst_24752__$1 = inst_24824;
var state_24833__$1 = (function (){var statearr_24851 = state_24833;
(statearr_24851[(7)] = inst_24752__$1);

(statearr_24851[(9)] = inst_24811);

(statearr_24851[(10)] = inst_24823);

return statearr_24851;
})();
var statearr_24852_24875 = state_24833__$1;
(statearr_24852_24875[(2)] = null);

(statearr_24852_24875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (10))){
var inst_24778 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
if(cljs.core.truth_(inst_24778)){
var statearr_24853_24876 = state_24833__$1;
(statearr_24853_24876[(1)] = (14));

} else {
var statearr_24854_24877 = state_24833__$1;
(statearr_24854_24877[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (8))){
var inst_24756 = (state_24833[(8)]);
var inst_24767 = inst_24756.cljs$lang$protocol_mask$partition0$;
var inst_24768 = (inst_24767 & (64));
var inst_24769 = inst_24756.cljs$core$ISeq$;
var inst_24770 = (cljs.core.PROTOCOL_SENTINEL === inst_24769);
var inst_24771 = ((inst_24768) || (inst_24770));
var state_24833__$1 = state_24833;
if(cljs.core.truth_(inst_24771)){
var statearr_24855_24878 = state_24833__$1;
(statearr_24855_24878[(1)] = (11));

} else {
var statearr_24856_24879 = state_24833__$1;
(statearr_24856_24879[(1)] = (12));

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
});})(c__23767__auto___24861))
;
return ((function (switch__23744__auto__,c__23767__auto___24861){
return (function() {
var example$view$state_machine__23745__auto__ = null;
var example$view$state_machine__23745__auto____0 = (function (){
var statearr_24857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24857[(0)] = example$view$state_machine__23745__auto__);

(statearr_24857[(1)] = (1));

return statearr_24857;
});
var example$view$state_machine__23745__auto____1 = (function (state_24833){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_24833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e24858){if((e24858 instanceof Object)){
var ex__23748__auto__ = e24858;
var statearr_24859_24880 = state_24833;
(statearr_24859_24880[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24881 = state_24833;
state_24833 = G__24881;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
example$view$state_machine__23745__auto__ = function(state_24833){
switch(arguments.length){
case 0:
return example$view$state_machine__23745__auto____0.call(this);
case 1:
return example$view$state_machine__23745__auto____1.call(this,state_24833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
example$view$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = example$view$state_machine__23745__auto____0;
example$view$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = example$view$state_machine__23745__auto____1;
return example$view$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23767__auto___24861))
})();
var state__23769__auto__ = (function (){var statearr_24860 = f__23768__auto__.call(null);
(statearr_24860[(6)] = c__23767__auto___24861);

return statearr_24860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23769__auto__);
});})(c__23767__auto___24861))
);

example.view.will_leave = (function example$view$will_leave(c,cb){
var d = reagent.core.dom_node.call(null,c);
var rect = d.getBoundingClientRect();
var height = (rect.bottom - rect.top);
return cljs.core.async.put_BANG_.call(null,example.view.ani_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"leave","leave",1022579443),d,new cljs.core.Keyword(null,"leave-cb","leave-cb",-238538361),cb,new cljs.core.Keyword(null,"leave-height","leave-height",-1783085366),height], null));
});
example.view.will_enter = (function example$view$will_enter(c,cb){
var d = reagent.core.dom_node.call(null,c);
var rect = d.getBoundingClientRect();
var height = (rect.bottom - rect.top);
d3.select(d).style("display","none").style("opacity",(0));

return cljs.core.async.put_BANG_.call(null,example.view.ani_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enter","enter",1792452624),d,new cljs.core.Keyword(null,"enter-cb","enter-cb",16399827),cb,new cljs.core.Keyword(null,"enter-height","enter-height",-1947344619),height], null));
});
example.view.previous_comp = (function example$view$previous_comp(classes,comp){
var c_24883 = reagent.core.current_component.call(null);
var G__24882_24884 = c_24883;
(G__24882_24884["componentWillEnter"] = cljs.core.partial.call(null,example.view.will_enter,c_24883));

(G__24882_24884["componentWillLeave"] = cljs.core.partial.call(null,example.view.will_leave,c_24883));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,classes], null);
});
example.view.next_comp = (function example$view$next_comp(classes,comp){
var c_24886 = reagent.core.current_component.call(null);
var G__24885_24887 = c_24886;
(G__24885_24887["componentWillEnter"] = cljs.core.partial.call(null,example.view.will_enter,c_24886));

(G__24885_24887["componentWillLeave"] = cljs.core.partial.call(null,example.view.will_leave,c_24886));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,classes], null);
});
example.view.change_page = (function example$view$change_page(){
return cljs.core.swap_BANG_.call(null,example.view.state,cljs.core.next);
});
example.view.app = (function example$view$app(classes){
return (function (){
var inactive_demo = example.utils.http_fx._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.subs","active-demo","example.subs/active-demo",1255873065)], null));
var previous_demo = example.routes.get_main_demo.call(null,inactive_demo);
var active_demo = example.utils.http_fx._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.subs","active-demo","example.subs/active-demo",1255873065)], null));
var next_demo = example.routes.get_main_demo.call(null,active_demo);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.view.tg,(function (){var G__24888 = cljs.core.first.call(null,cljs.core.deref.call(null,example.view.state));
switch (G__24888) {
case "previous":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.view.previous_comp,classes,previous_demo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"previous"], null));

break;
case "next":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.view.next_comp,classes,next_demo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"next"], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24888)].join('')));

}
})()], null)], null);
});
});
example.view.main_view = (function example$view$main_view(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.view.global$module$material_ui.CssBaseline], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.view.global$module$material_ui.MuiThemeProvider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),example.utils.theme.custom_theme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.components.sidebar.sidebar_view,example.view.change_page], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.view.global$module$material_ui.Grid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"direction","direction",-633359395),"row",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),(50)], null),new cljs.core.Keyword(null,"justify","justify",-722524056),"flex-start"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.utils.theme.with_custom_styles.call(null,reagent.core.reactify_component.call(null,example.view.app))], null)], null)], null)], null);
});
});

//# sourceMappingURL=view.js.map?rel=1543448291110
