// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.components.sidebar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('example.subs');
goog.require('example.utils.http_fx');
example.components.sidebar.item_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["#666",(200),"transparent","pointer","Helvetica Neue",(10),"#eee","block","relative","1px solid #eee",(4),(40),(2)]);
example.components.sidebar.selected_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#6cb7e0"], null);
example.components.sidebar.get_style = (function example$components$sidebar$get_style(active_demo,demo){
if(cljs.core._EQ_.call(null,active_demo,demo)){
return cljs.core.conj.call(null,example.components.sidebar.item_style,example.components.sidebar.selected_style);
} else {
return example.components.sidebar.item_style;
}
});
example.components.sidebar.sidebar_view = (function example$components$sidebar$sidebar_view(){
return (function (){
var active_demo = example.utils.http_fx._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.subs","active-demo","example.subs/active-demo",1255873065)], null));
var _ = cljs.core.print.call(null,active_demo);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10),new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"transparent"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10),new cljs.core.Keyword(null,"border","border",1444987323),"10px solid #f1f1f1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://cdn.customfields.bonify.io/littlebitsproduction.myshopify.com/fields/products/accessory_image/10281133513/droid%20parts.jpg",new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(150)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_demo,_){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/demos/autocomplete");
});})(active_demo,_))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.get_style.call(null,active_demo,"autocomplete")], null),"Autocomplete"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_demo,_){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/demos/button");
});})(active_demo,_))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.get_style.call(null,active_demo,"button")], null),"Button"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_demo,_){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/demos/pickers");
});})(active_demo,_))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.get_style.call(null,active_demo,"pickers")], null),"Pickers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_demo,_){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/demos/menu");
});})(active_demo,_))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.get_style.call(null,active_demo,"menu")], null),"Menu"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_demo,_){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/demos/table");
});})(active_demo,_))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.get_style.call(null,active_demo,"table")], null),"Table"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_demo,_){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/demos/text-field");
});})(active_demo,_))
,new cljs.core.Keyword(null,"style","style",-496642736),example.components.sidebar.get_style.call(null,active_demo,"text-field")], null),"Text Field"], null)], null);
});
});

//# sourceMappingURL=sidebar.js.map?rel=1542226566586
