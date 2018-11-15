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
var G__27246 = (new goog.History());
goog.events.listen(G__27246,goog.history.EventType.NAVIGATE,((function (G__27246){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__27246))
);

G__27246.setEnabled(true);

return G__27246;
});
example.routes.app_routes = (function example$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__22553__auto___27282 = (function (params__22554__auto__){
if(cljs.core.map_QMARK_.call(null,params__22554__auto__)){
var map__27247 = params__22554__auto__;
var map__27247__$1 = ((((!((map__27247 == null)))?(((((map__27247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27247):map__27247);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22554__auto__)){
var vec__27249 = params__22554__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22553__auto___27282);


var action__22553__auto___27283 = (function (params__22554__auto__){
if(cljs.core.map_QMARK_.call(null,params__22554__auto__)){
var map__27252 = params__22554__auto__;
var map__27252__$1 = ((((!((map__27252 == null)))?(((((map__27252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27252):map__27252);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"button"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22554__auto__)){
var vec__27254 = params__22554__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"button"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/button",action__22553__auto___27283);


var action__22553__auto___27284 = (function (params__22554__auto__){
if(cljs.core.map_QMARK_.call(null,params__22554__auto__)){
var map__27257 = params__22554__auto__;
var map__27257__$1 = ((((!((map__27257 == null)))?(((((map__27257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27257):map__27257);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"text-field"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22554__auto__)){
var vec__27259 = params__22554__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"text-field"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/text-field",action__22553__auto___27284);


var action__22553__auto___27285 = (function (params__22554__auto__){
if(cljs.core.map_QMARK_.call(null,params__22554__auto__)){
var map__27262 = params__22554__auto__;
var map__27262__$1 = ((((!((map__27262 == null)))?(((((map__27262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27262):map__27262);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"table"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22554__auto__)){
var vec__27264 = params__22554__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"table"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/table",action__22553__auto___27285);


var action__22553__auto___27286 = (function (params__22554__auto__){
if(cljs.core.map_QMARK_.call(null,params__22554__auto__)){
var map__27267 = params__22554__auto__;
var map__27267__$1 = ((((!((map__27267 == null)))?(((((map__27267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27267):map__27267);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"autocomplete"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22554__auto__)){
var vec__27269 = params__22554__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"autocomplete"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/autocomplete",action__22553__auto___27286);


var action__22553__auto___27287 = (function (params__22554__auto__){
if(cljs.core.map_QMARK_.call(null,params__22554__auto__)){
var map__27272 = params__22554__auto__;
var map__27272__$1 = ((((!((map__27272 == null)))?(((((map__27272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27272):map__27272);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"pickers"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22554__auto__)){
var vec__27274 = params__22554__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"pickers"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/pickers",action__22553__auto___27287);


var action__22553__auto___27288 = (function (params__22554__auto__){
if(cljs.core.map_QMARK_.call(null,params__22554__auto__)){
var map__27277 = params__22554__auto__;
var map__27277__$1 = ((((!((map__27277 == null)))?(((((map__27277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27277):map__27277);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"menu"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22554__auto__)){
var vec__27279 = params__22554__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"menu"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/demos/menu",action__22553__auto___27288);


return example.routes.hook_browser_navigation_BANG_.call(null);
});
example.routes.get_main_demo = (function example$routes$get_main_demo(demo_name){
var G__27289 = demo_name;
switch (G__27289) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27289)].join('')));

}
});

//# sourceMappingURL=routes.js.map?rel=1542228782695
