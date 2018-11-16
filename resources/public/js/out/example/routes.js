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
var G__28255 = (new goog.History());
goog.events.listen(G__28255,goog.history.EventType.NAVIGATE,((function (G__28255){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__28255))
);

G__28255.setEnabled(true);

return G__28255;
});
example.routes.app_routes = (function example$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__22560__auto___28291 = (function (params__22561__auto__){
if(cljs.core.map_QMARK_.call(null,params__22561__auto__)){
var map__28256 = params__22561__auto__;
var map__28256__$1 = ((((!((map__28256 == null)))?(((((map__28256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28256):map__28256);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22561__auto__)){
var vec__28258 = params__22561__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22560__auto___28291);


var action__22560__auto___28292 = (function (params__22561__auto__){
if(cljs.core.map_QMARK_.call(null,params__22561__auto__)){
var map__28261 = params__22561__auto__;
var map__28261__$1 = ((((!((map__28261 == null)))?(((((map__28261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28261):map__28261);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"button"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22561__auto__)){
var vec__28263 = params__22561__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"button"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/button",action__22560__auto___28292);


var action__22560__auto___28293 = (function (params__22561__auto__){
if(cljs.core.map_QMARK_.call(null,params__22561__auto__)){
var map__28266 = params__22561__auto__;
var map__28266__$1 = ((((!((map__28266 == null)))?(((((map__28266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28266):map__28266);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"text-field"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22561__auto__)){
var vec__28268 = params__22561__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"text-field"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/text-field",action__22560__auto___28293);


var action__22560__auto___28294 = (function (params__22561__auto__){
if(cljs.core.map_QMARK_.call(null,params__22561__auto__)){
var map__28271 = params__22561__auto__;
var map__28271__$1 = ((((!((map__28271 == null)))?(((((map__28271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28271):map__28271);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"table"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22561__auto__)){
var vec__28273 = params__22561__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"table"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/table",action__22560__auto___28294);


var action__22560__auto___28295 = (function (params__22561__auto__){
if(cljs.core.map_QMARK_.call(null,params__22561__auto__)){
var map__28276 = params__22561__auto__;
var map__28276__$1 = ((((!((map__28276 == null)))?(((((map__28276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28276):map__28276);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"autocomplete"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22561__auto__)){
var vec__28278 = params__22561__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"autocomplete"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/autocomplete",action__22560__auto___28295);


var action__22560__auto___28296 = (function (params__22561__auto__){
if(cljs.core.map_QMARK_.call(null,params__22561__auto__)){
var map__28281 = params__22561__auto__;
var map__28281__$1 = ((((!((map__28281 == null)))?(((((map__28281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28281):map__28281);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"pickers"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22561__auto__)){
var vec__28283 = params__22561__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"pickers"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/pickers",action__22560__auto___28296);


var action__22560__auto___28297 = (function (params__22561__auto__){
if(cljs.core.map_QMARK_.call(null,params__22561__auto__)){
var map__28286 = params__22561__auto__;
var map__28286__$1 = ((((!((map__28286 == null)))?(((((map__28286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28286):map__28286);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"menu"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22561__auto__)){
var vec__28288 = params__22561__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"menu"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/menu",action__22560__auto___28297);


return example.routes.hook_browser_navigation_BANG_.call(null);
});
example.routes.get_main_demo = (function example$routes$get_main_demo(demo_name){
var G__28298 = demo_name;
switch (G__28298) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28298)].join('')));

}
});

//# sourceMappingURL=routes.js.map?rel=1542405694990
