// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.demo_autocomplete');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('example.utils.theme');
goog.require('example.demos.demo_text_field');
goog.require('cljsjs.react_select');
example.demos.demo_autocomplete.global$module$material_ui = goog.global["MaterialUI"];
example.demos.demo_autocomplete.model_default = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),"",new cljs.core.Keyword(null,"submitted","submitted",-131658962),false], null);
example.demos.demo_autocomplete.model = reagent.core.atom.call(null,example.demos.demo_autocomplete.model_default);
/**
 * Select based on a atom/cursor. Pass as state
 */
example.demos.demo_autocomplete.select = (function example$demos$demo_autocomplete$select(p__24158){
var map__24159 = p__24158;
var map__24159__$1 = ((((!((map__24159 == null)))?(((((map__24159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24159):map__24159);
var props = map__24159__$1;
var state = cljs.core.get.call(null,map__24159__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),Select.Async,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,props,state),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__24159,map__24159__$1,props,state){
return (function (x){
cljs.core.print.call(null,"value x ",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.js__GT_clj.call(null,x,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),new cljs.core.Keyword(null,"true","true",-1114210334)))));

cljs.core.print.call(null,"model ",new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,example.demos.demo_autocomplete.model)));

return cljs.core.reset_BANG_.call(null,state,(cljs.core.truth_((function (){var G__24161 = x;
if((G__24161 == null)){
return null;
} else {
return G__24161.value;
}
})())?null:null));
});})(map__24159,map__24159__$1,props,state))
)], null);
});
if((typeof example !== 'undefined') && (typeof example.demos !== 'undefined') && (typeof example.demos.demo_autocomplete !== 'undefined') && (typeof example.demos.demo_autocomplete._BANG_state !== 'undefined')){
} else {
example.demos.demo_autocomplete._BANG_state = cljs.core.atom.call(null,null);
}
example.demos.demo_autocomplete.options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apple","answers","alphabet","bears","bananas"], null);
example.demos.demo_autocomplete.control = (function example$demos$demo_autocomplete$control(classes){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.demos.demo_text_field.text_field,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"search",new cljs.core.Keyword(null,"label","label",1718410804),"Search",new cljs.core.Keyword(null,"class","class",-2030961996),classes.textField,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(24)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),"normal"], null)], null);
});
example.demos.demo_autocomplete.menu = (function example$demos$demo_autocomplete$menu(classes){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_autocomplete.global$module$material_ui.Paper], null);
});
example.demos.demo_autocomplete.components = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Menu","Menu",911780577),example.demos.demo_autocomplete.menu,new cljs.core.Keyword(null,"Control","Control",-2010445816),example.demos.demo_autocomplete.control], null);
example.demos.demo_autocomplete.handle_keypress = (function example$demos$demo_autocomplete$handle_keypress(e){
return cljs.core.swap_BANG_.call(null,example.demos.demo_autocomplete.model,(function (p1__24162_SHARP_,p2__24163_SHARP_){
return cljs.core.assoc.call(null,p1__24162_SHARP_,new cljs.core.Keyword(null,"query","query",-1288509510),p2__24163_SHARP_);
}),e.target.value);
});
example.demos.demo_autocomplete.load_options = (function example$demos$demo_autocomplete$load_options(input,cb){
return cb.call(null,null,({"options": cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),item,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')], null);
}),example.demos.demo_autocomplete.options)), "complete": true}));
});
example.demos.demo_autocomplete.demo_autocomplete = (function example$demos$demo_autocomplete$demo_autocomplete(p__24164){
var map__24165 = p__24164;
var map__24165__$1 = ((((!((map__24165 == null)))?(((((map__24165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24165):map__24165);
var props = map__24165__$1;
var classes = cljs.core.get.call(null,map__24165__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
cljs.core.print.call(null,"classes ",classes);

var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(0)], null));
return ((function (component_state,map__24165,map__24165__$1,props,classes){
return (function (){
var current_select = cljs.core.get.call(null,cljs.core.deref.call(null,component_state),new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Autocomplete"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),((function (current_select,component_state,map__24165,map__24165__$1,props,classes){
return (function (e){
return example.demos.demo_autocomplete.handle_keypress.call(null,e);
});})(current_select,component_state,map__24165,map__24165__$1,props,classes))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.demos.demo_autocomplete.select,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),example.demos.demo_autocomplete._BANG_state,new cljs.core.Keyword(null,"class","class",-2030961996),classes.textField,new cljs.core.Keyword(null,"multi","multi",-190293005),true,new cljs.core.Keyword(null,"components","components",-1073188942),example.demos.demo_autocomplete.components,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.Keyword(null,"load-options","load-options",-38528641),example.demos.demo_autocomplete.load_options], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"About"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(400)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is an attempt to port ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://material-ui.com/demos/autocomplete/"], null),"Material UI's react-select based autocomplete "], null),"component."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I don't believe I was that succesful as I failed to pass in the custom components\n              and had to place the css for the input in the index.html found in the resources folder."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"As a base, I started with this ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://gist.github.com/pesterhazy/4a4198a9cc040bf6fe13a476f25bac2c"], null),"ClojureScript version.  "], null)], null)], null)], null);
});
;})(component_state,map__24165,map__24165__$1,props,classes))
});

//# sourceMappingURL=demo_autocomplete.js.map?rel=1542220155454
