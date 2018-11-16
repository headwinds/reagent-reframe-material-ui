// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.demo_template');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('material_ui_icons');
example.demos.demo_template.global$module$material_ui = goog.global["MaterialUI"];
example.demos.demo_template.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
example.demos.demo_template.demo_template = (function example$demos$demo_template$demo_template(p__23003){
var map__23004 = p__23003;
var map__23004__$1 = ((((!((map__23004 == null)))?(((((map__23004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23004):map__23004);
var props = map__23004__$1;
var classes = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(0)], null));
return ((function (component_state,map__23004,map__23004__$1,props,classes){
return (function (){
var current_select = cljs.core.get.call(null,cljs.core.deref.call(null,component_state),new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"margin","margin",-995903681),(50),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Template"], null)], null);
});
;})(component_state,map__23004,map__23004__$1,props,classes))
});

//# sourceMappingURL=demo_template.js.map?rel=1542326938878
