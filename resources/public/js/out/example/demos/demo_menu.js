// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.demo_menu');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('material_ui');
goog.require('material_ui_icons');
example.demos.demo_menu.global$module$material_ui = goog.global["MaterialUI"];
example.demos.demo_menu.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
example.demos.demo_menu.setting_selected = reagent.core.atom.call(null,(0));
example.demos.demo_menu.option_people_click = (function example$demos$demo_menu$option_people_click(ev){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option-a-click","option-a-click",1579854546)], null));
});
example.demos.demo_menu.option_keys_click = (function example$demos$demo_menu$option_keys_click(ev){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option-a-click","option-a-click",1579854546)], null));
});
example.demos.demo_menu.settings_menu = (function example$demos$demo_menu$settings_menu(classes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),classes.root,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"1px solid #eee",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_menu.global$module$material_ui.List,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"nav"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_menu.global$module$material_ui.ListItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"button","button",1456579943),true,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,cljs.core.deref.call(null,example.demos.demo_menu.setting_selected),(0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
example.demos.demo_menu.option_people_click.call(null,e);

return cljs.core.reset_BANG_.call(null,example.demos.demo_menu.setting_selected,e.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_menu.global$module$material_ui_icons.Casino,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),(5)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_menu.global$module$material_ui.ListItemText,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"primary","primary",817773892),"Bars"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_menu.global$module$material_ui.ListItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"button","button",1456579943),true,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,cljs.core.deref.call(null,example.demos.demo_menu.setting_selected),(1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
example.demos.demo_menu.option_keys_click.call(null,e);

return cljs.core.reset_BANG_.call(null,example.demos.demo_menu.setting_selected,e.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_menu.global$module$material_ui_icons.LocalCafe,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),(5)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_menu.global$module$material_ui.ListItemText,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"primary","primary",817773892),"Speeders"], null)], null)], null)], null)], null);
});
example.demos.demo_menu.demo_menu = (function example$demos$demo_menu$demo_menu(p__23041){
var map__23042 = p__23041;
var map__23042__$1 = ((((!((map__23042 == null)))?(((((map__23042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23042):map__23042);
var props = map__23042__$1;
var classes = cljs.core.get.call(null,map__23042__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(0)], null));
return ((function (component_state,map__23042,map__23042__$1,props,classes){
return (function (){
var current_select = cljs.core.get.call(null,cljs.core.deref.call(null,component_state),new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Menu"], null),example.demos.demo_menu.settings_menu.call(null,classes)], null);
});
;})(component_state,map__23042,map__23042__$1,props,classes))
});

//# sourceMappingURL=demo_menu.js.map?rel=1542143929038
