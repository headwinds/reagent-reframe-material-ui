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
goog.require('example.demos.autocomplete.demo_autocomplete');
goog.require('example.demos.demo_pickers');
goog.require('example.demos.demo_menu');
goog.require('example.demos.table.demo_table');
example.routes.hook_browser_navigation_BANG_ = (function example$routes$hook_browser_navigation_BANG_(){
var G__23507 = (new goog.History());
goog.events.listen(G__23507,goog.history.EventType.NAVIGATE,((function (G__23507){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__23507))
);

G__23507.setEnabled(true);

return G__23507;
});
example.routes.app_routes = (function example$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__22216__auto___23543 = (function (params__22217__auto__){
if(cljs.core.map_QMARK_.call(null,params__22217__auto__)){
var map__23508 = params__22217__auto__;
var map__23508__$1 = ((((!((map__23508 == null)))?(((((map__23508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23508):map__23508);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22217__auto__)){
var vec__23510 = params__22217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22216__auto___23543);


var action__22216__auto___23544 = (function (params__22217__auto__){
if(cljs.core.map_QMARK_.call(null,params__22217__auto__)){
var map__23513 = params__22217__auto__;
var map__23513__$1 = ((((!((map__23513 == null)))?(((((map__23513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23513):map__23513);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"button"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22217__auto__)){
var vec__23515 = params__22217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"button"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/button",action__22216__auto___23544);


var action__22216__auto___23545 = (function (params__22217__auto__){
if(cljs.core.map_QMARK_.call(null,params__22217__auto__)){
var map__23518 = params__22217__auto__;
var map__23518__$1 = ((((!((map__23518 == null)))?(((((map__23518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23518):map__23518);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"text-field"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22217__auto__)){
var vec__23520 = params__22217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"text-field"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/text-field",action__22216__auto___23545);


var action__22216__auto___23546 = (function (params__22217__auto__){
if(cljs.core.map_QMARK_.call(null,params__22217__auto__)){
var map__23523 = params__22217__auto__;
var map__23523__$1 = ((((!((map__23523 == null)))?(((((map__23523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23523):map__23523);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"table"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22217__auto__)){
var vec__23525 = params__22217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"table"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/table",action__22216__auto___23546);


var action__22216__auto___23547 = (function (params__22217__auto__){
if(cljs.core.map_QMARK_.call(null,params__22217__auto__)){
var map__23528 = params__22217__auto__;
var map__23528__$1 = ((((!((map__23528 == null)))?(((((map__23528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23528):map__23528);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"autocomplete"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22217__auto__)){
var vec__23530 = params__22217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"autocomplete"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/autocomplete",action__22216__auto___23547);


var action__22216__auto___23548 = (function (params__22217__auto__){
if(cljs.core.map_QMARK_.call(null,params__22217__auto__)){
var map__23533 = params__22217__auto__;
var map__23533__$1 = ((((!((map__23533 == null)))?(((((map__23533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23533):map__23533);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"pickers"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22217__auto__)){
var vec__23535 = params__22217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"pickers"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/pickers",action__22216__auto___23548);


var action__22216__auto___23549 = (function (params__22217__auto__){
if(cljs.core.map_QMARK_.call(null,params__22217__auto__)){
var map__23538 = params__22217__auto__;
var map__23538__$1 = ((((!((map__23538 == null)))?(((((map__23538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23538):map__23538);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"menu"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22217__auto__)){
var vec__23540 = params__22217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"menu"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/menu",action__22216__auto___23549);


return example.routes.hook_browser_navigation_BANG_.call(null);
});
example.routes.get_main_demo = (function example$routes$get_main_demo(demo_name){
var G__23550 = demo_name;
switch (G__23550) {
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
return example.demos.autocomplete.demo_autocomplete.demo_autocomplete;

break;
case "pickers":
return example.demos.demo_pickers.demo_pickers;

break;
case "menu":
return example.demos.demo_menu.demo_menu;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23550)].join('')));

}
});

//# sourceMappingURL=routes.js.map?rel=1542327118479
