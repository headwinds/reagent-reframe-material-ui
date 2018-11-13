// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.demo_autocomplete');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('material_ui_icons');
goog.require('example.utils.theme');
goog.require('example.demos.demo_text_field');
goog.require('cljsjs.react_select');
example.demos.demo_autocomplete.global$module$material_ui = goog.global["MaterialUI"];
example.demos.demo_autocomplete.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
/**
 * Select based on a atom/cursor. Pass as state
 */
example.demos.demo_autocomplete.select = (function example$demos$demo_autocomplete$select(p__22701){
var map__22702 = p__22701;
var map__22702__$1 = ((((!((map__22702 == null)))?(((((map__22702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22702):map__22702);
var props = map__22702__$1;
var state = cljs.core.get.call(null,map__22702__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),Select.Async,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,props,state),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__22702,map__22702__$1,props,state){
return (function (x){
return cljs.core.reset_BANG_.call(null,state,(cljs.core.truth_((function (){var G__22704 = x;
if((G__22704 == null)){
return null;
} else {
return G__22704.value;
}
})())?null:null));
});})(map__22702,map__22702__$1,props,state))
)], null);
});
if((typeof example !== 'undefined') && (typeof example.demos !== 'undefined') && (typeof example.demos.demo_autocomplete !== 'undefined') && (typeof example.demos.demo_autocomplete._BANG_state !== 'undefined')){
} else {
example.demos.demo_autocomplete._BANG_state = cljs.core.atom.call(null,null);
}
example.demos.demo_autocomplete.load_options = (function example$demos$demo_autocomplete$load_options(input,cb){
return cb.call(null,null,({"options": cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),item,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')], null);
}),cljs.core.range.call(null,(3)))), "complete": true}));
});
example.demos.demo_autocomplete.root_ui = (function example$demos$demo_autocomplete$root_ui(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.demos.demo_autocomplete.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),example.demos.demo_autocomplete._BANG_state,new cljs.core.Keyword(null,"multi","multi",-190293005),true,new cljs.core.Keyword(null,"load-options","load-options",-38528641),example.demos.demo_autocomplete.load_options], null)], null);
});
example.demos.demo_autocomplete.demo_autocomplete = (function example$demos$demo_autocomplete$demo_autocomplete(p__22705){
var map__22706 = p__22705;
var map__22706__$1 = ((((!((map__22706 == null)))?(((((map__22706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22706):map__22706);
var props = map__22706__$1;
var classes = cljs.core.get.call(null,map__22706__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(0)], null));
return ((function (component_state,map__22706,map__22706__$1,props,classes){
return (function (){
var current_select = cljs.core.get.call(null,cljs.core.deref.call(null,component_state),new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Autocomplete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),example.demos.demo_autocomplete.root_ui.call(null)], null)], null);
});
;})(component_state,map__22706,map__22706__$1,props,classes))
});

//# sourceMappingURL=demo_autocomplete.js.map?rel=1542142333267
