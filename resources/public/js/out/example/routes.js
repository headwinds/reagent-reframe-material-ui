// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('example.events');
goog.require('example.subs');
goog.require('example.utils.http_fx');
goog.require('example.demos.demo_splash');
goog.require('example.demos.demo_text_field');
goog.require('example.demos.demo_button');
goog.require('example.demos.demo_autocomplete');
goog.require('example.demos.demo_pickers');
goog.require('example.demos.demo_menu');
goog.require('example.demos.table.demo_table');
example.routes.hook_browser_navigation_BANG_ = (function example$routes$hook_browser_navigation_BANG_(){
var G__23046 = (new goog.History());
goog.events.listen(G__23046,goog.history.EventType.NAVIGATE,((function (G__23046){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__23046))
);

G__23046.setEnabled(true);

return G__23046;
});
example.routes.app_routes = (function example$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__22516__auto___23082 = (function (params__22517__auto__){
if(cljs.core.map_QMARK_.call(null,params__22517__auto__)){
var map__23047 = params__22517__auto__;
var map__23047__$1 = ((((!((map__23047 == null)))?(((((map__23047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23047):map__23047);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22517__auto__)){
var vec__23049 = params__22517__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22516__auto___23082);


var action__22516__auto___23083 = (function (params__22517__auto__){
if(cljs.core.map_QMARK_.call(null,params__22517__auto__)){
var map__23052 = params__22517__auto__;
var map__23052__$1 = ((((!((map__23052 == null)))?(((((map__23052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23052):map__23052);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"button"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22517__auto__)){
var vec__23054 = params__22517__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"button"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/button",action__22516__auto___23083);


var action__22516__auto___23084 = (function (params__22517__auto__){
if(cljs.core.map_QMARK_.call(null,params__22517__auto__)){
var map__23057 = params__22517__auto__;
var map__23057__$1 = ((((!((map__23057 == null)))?(((((map__23057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23057):map__23057);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"text-field"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22517__auto__)){
var vec__23059 = params__22517__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"text-field"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/text-field",action__22516__auto___23084);


var action__22516__auto___23085 = (function (params__22517__auto__){
if(cljs.core.map_QMARK_.call(null,params__22517__auto__)){
var map__23062 = params__22517__auto__;
var map__23062__$1 = ((((!((map__23062 == null)))?(((((map__23062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23062):map__23062);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"table"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22517__auto__)){
var vec__23064 = params__22517__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"table"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/table",action__22516__auto___23085);


var action__22516__auto___23086 = (function (params__22517__auto__){
if(cljs.core.map_QMARK_.call(null,params__22517__auto__)){
var map__23067 = params__22517__auto__;
var map__23067__$1 = ((((!((map__23067 == null)))?(((((map__23067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23067):map__23067);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"autocomplete"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22517__auto__)){
var vec__23069 = params__22517__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"autocomplete"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/autocomplete",action__22516__auto___23086);


var action__22516__auto___23087 = (function (params__22517__auto__){
if(cljs.core.map_QMARK_.call(null,params__22517__auto__)){
var map__23072 = params__22517__auto__;
var map__23072__$1 = ((((!((map__23072 == null)))?(((((map__23072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23072):map__23072);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"pickers"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22517__auto__)){
var vec__23074 = params__22517__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"pickers"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/pickers",action__22516__auto___23087);


var action__22516__auto___23088 = (function (params__22517__auto__){
if(cljs.core.map_QMARK_.call(null,params__22517__auto__)){
var map__23077 = params__22517__auto__;
var map__23077__$1 = ((((!((map__23077 == null)))?(((((map__23077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23077):map__23077);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"menu"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22517__auto__)){
var vec__23079 = params__22517__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"menu"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/menu",action__22516__auto___23088);


return example.routes.hook_browser_navigation_BANG_.call(null);
});
example.routes.get_main_demo = (function example$routes$get_main_demo(demo_name){
var G__23089 = demo_name;
switch (G__23089) {
case "splash":
return example.demos.demo_splash.demo_splash;

break;
case "button":
return example.demos.demo_button.demo_button;

break;
case "table":
return example.demos.table.demo_table.people_view;

break;
case "text-field":
return example.demos.demo_text_field.demo_text_field;

break;
case "autocomplete":
return example.demos.demo_autocomplete.demo_autocomplete;

break;
case "pickers":
return example.demos.demo_pickers.demo_pickers;

break;
case "menu":
return example.demos.demo_menu.demo_menu;

break;
default:
return example.demos.demo_splash.demo_splash;

}
});

//# sourceMappingURL=routes.js.map?rel=1542143929084
