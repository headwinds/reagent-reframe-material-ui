// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.demo_template');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('material_ui_icons');
goog.require('reagent.impl.template');
example.demos.demo_template.global$module$material_ui = goog.global["MaterialUI"];
example.demos.demo_template.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
example.demos.demo_template.demo_template = (function example$demos$demo_template$demo_template(p__27170){
var map__27171 = p__27170;
var map__27171__$1 = ((((!((map__27171 == null)))?(((((map__27171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27171):map__27171);
var props = map__27171__$1;
var classes = cljs.core.get.call(null,map__27171__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(0)], null));
return ((function (component_state,map__27171,map__27171__$1,props,classes){
return (function (){
var current_select = cljs.core.get.call(null,cljs.core.deref.call(null,component_state),new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Template"], null)], null);
});
;})(component_state,map__27171,map__27171__$1,props,classes))
});

//# sourceMappingURL=demo_template.js.map?rel=1535318442854
