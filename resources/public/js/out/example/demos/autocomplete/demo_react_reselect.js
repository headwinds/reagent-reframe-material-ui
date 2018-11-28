// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.autocomplete.demo_react_reselect');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('clojure.string');
goog.require('example.demos.demo_text_field');
goog.require('cljsjs.react_select');
example.demos.autocomplete.demo_react_reselect.global$module$material_ui = goog.global["MaterialUI"];
example.demos.autocomplete.demo_react_reselect.model_default = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),"",new cljs.core.Keyword(null,"submitted","submitted",-131658962),false], null);
example.demos.autocomplete.demo_react_reselect.model = reagent.core.atom.call(null,example.demos.autocomplete.demo_react_reselect.model_default);
/**
 * Select based on a atom/cursor. Pass as state
 */
example.demos.autocomplete.demo_react_reselect.select = (function example$demos$autocomplete$demo_react_reselect$select(p__24718){
var map__24719 = p__24718;
var map__24719__$1 = ((((!((map__24719 == null)))?(((((map__24719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24719):map__24719);
var props = map__24719__$1;
var state = cljs.core.get.call(null,map__24719__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),Select.Async,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,props,state),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__24719,map__24719__$1,props,state){
return (function (x){
cljs.core.print.call(null,"value x ",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.js__GT_clj.call(null,x,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),new cljs.core.Keyword(null,"true","true",-1114210334)))));

cljs.core.print.call(null,"model ",new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,example.demos.autocomplete.demo_react_reselect.model)));

return cljs.core.reset_BANG_.call(null,state,(cljs.core.truth_((function (){var G__24721 = x;
if((G__24721 == null)){
return null;
} else {
return G__24721.value;
}
})())?null:null));
});})(map__24719,map__24719__$1,props,state))
)], null);
});
if((typeof example !== 'undefined') && (typeof example.demos !== 'undefined') && (typeof example.demos.autocomplete !== 'undefined') && (typeof example.demos.autocomplete.demo_react_reselect !== 'undefined') && (typeof example.demos.autocomplete.demo_react_reselect._BANG_state !== 'undefined')){
} else {
example.demos.autocomplete.demo_react_reselect._BANG_state = cljs.core.atom.call(null,null);
}
example.demos.autocomplete.demo_react_reselect.people = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Luke","Leia","Lando"], null);
example.demos.autocomplete.demo_react_reselect.control = (function example$demos$autocomplete$demo_react_reselect$control(classes){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.demos.demo_text_field.text_field,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"search",new cljs.core.Keyword(null,"label","label",1718410804),"Search",new cljs.core.Keyword(null,"class","class",-2030961996),classes.textField,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(24)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),"normal"], null)], null);
});
example.demos.autocomplete.demo_react_reselect.menu = (function example$demos$autocomplete$demo_react_reselect$menu(classes){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.autocomplete.demo_react_reselect.global$module$material_ui.Paper], null);
});
example.demos.autocomplete.demo_react_reselect.components = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Menu","Menu",911780577),example.demos.autocomplete.demo_react_reselect.menu,new cljs.core.Keyword(null,"Control","Control",-2010445816),example.demos.autocomplete.demo_react_reselect.control], null);
example.demos.autocomplete.demo_react_reselect.load_options = (function example$demos$autocomplete$demo_react_reselect$load_options(input,cb){
return cb.call(null,null,({"options": cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),item,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')], null);
}),example.demos.autocomplete.demo_react_reselect.people)), "complete": true}));
});
example.demos.autocomplete.demo_react_reselect.reselect_view = (function example$demos$autocomplete$demo_react_reselect$reselect_view(p__24722){
var map__24723 = p__24722;
var map__24723__$1 = ((((!((map__24723 == null)))?(((((map__24723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24723):map__24723);
var props = map__24723__$1;
var classes = cljs.core.get.call(null,map__24723__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.demos.autocomplete.demo_react_reselect.select,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),example.demos.autocomplete.demo_react_reselect._BANG_state,new cljs.core.Keyword(null,"class","class",-2030961996),classes.textField,new cljs.core.Keyword(null,"multi","multi",-190293005),true,new cljs.core.Keyword(null,"components","components",-1073188942),example.demos.autocomplete.demo_react_reselect.components,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.Keyword(null,"load-options","load-options",-38528641),example.demos.autocomplete.demo_react_reselect.load_options], null)], null);
});

//# sourceMappingURL=demo_react_reselect.js.map?rel=1543435804162
