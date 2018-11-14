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
var G__27394 = (new goog.History());
goog.events.listen(G__27394,goog.history.EventType.NAVIGATE,((function (G__27394){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__27394))
);

G__27394.setEnabled(true);

return G__27394;
});
example.routes.app_routes = (function example$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__22046__auto___27430 = (function (params__22047__auto__){
if(cljs.core.map_QMARK_.call(null,params__22047__auto__)){
var map__27395 = params__22047__auto__;
var map__27395__$1 = ((((!((map__27395 == null)))?(((((map__27395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27395):map__27395);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22047__auto__)){
var vec__27397 = params__22047__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22046__auto___27430);


var action__22046__auto___27431 = (function (params__22047__auto__){
if(cljs.core.map_QMARK_.call(null,params__22047__auto__)){
var map__27400 = params__22047__auto__;
var map__27400__$1 = ((((!((map__27400 == null)))?(((((map__27400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27400):map__27400);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"button"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22047__auto__)){
var vec__27402 = params__22047__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"button"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/button",action__22046__auto___27431);


var action__22046__auto___27432 = (function (params__22047__auto__){
if(cljs.core.map_QMARK_.call(null,params__22047__auto__)){
var map__27405 = params__22047__auto__;
var map__27405__$1 = ((((!((map__27405 == null)))?(((((map__27405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27405):map__27405);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"text-field"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22047__auto__)){
var vec__27407 = params__22047__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"text-field"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/text-field",action__22046__auto___27432);


var action__22046__auto___27433 = (function (params__22047__auto__){
if(cljs.core.map_QMARK_.call(null,params__22047__auto__)){
var map__27410 = params__22047__auto__;
var map__27410__$1 = ((((!((map__27410 == null)))?(((((map__27410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27410):map__27410);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"table"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22047__auto__)){
var vec__27412 = params__22047__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"table"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/table",action__22046__auto___27433);


var action__22046__auto___27434 = (function (params__22047__auto__){
if(cljs.core.map_QMARK_.call(null,params__22047__auto__)){
var map__27415 = params__22047__auto__;
var map__27415__$1 = ((((!((map__27415 == null)))?(((((map__27415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27415):map__27415);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"autocomplete"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22047__auto__)){
var vec__27417 = params__22047__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"autocomplete"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/autocomplete",action__22046__auto___27434);


var action__22046__auto___27435 = (function (params__22047__auto__){
if(cljs.core.map_QMARK_.call(null,params__22047__auto__)){
var map__27420 = params__22047__auto__;
var map__27420__$1 = ((((!((map__27420 == null)))?(((((map__27420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27420):map__27420);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"pickers"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22047__auto__)){
var vec__27422 = params__22047__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"pickers"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/pickers",action__22046__auto___27435);


var action__22046__auto___27436 = (function (params__22047__auto__){
if(cljs.core.map_QMARK_.call(null,params__22047__auto__)){
var map__27425 = params__22047__auto__;
var map__27425__$1 = ((((!((map__27425 == null)))?(((((map__27425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27425):map__27425);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"menu"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22047__auto__)){
var vec__27427 = params__22047__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"menu"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/menu",action__22046__auto___27436);


return example.routes.hook_browser_navigation_BANG_.call(null);
});
example.routes.get_main_demo = (function example$routes$get_main_demo(demo_name){
var G__27437 = demo_name;
switch (G__27437) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27437)].join('')));

}
});

//# sourceMappingURL=routes.js.map?rel=1542217575252
