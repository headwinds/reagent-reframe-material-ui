// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.events');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('example.utils.http_fx');
goog.require('goog.object');
goog.require('example.db');
goog.require('reagent.impl.template');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return example.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),(function (db,p__27199){
var vec__27200 = p__27199;
var _ = cljs.core.nth.call(null,vec__27200,(0),null);
var active_demo = cljs.core.nth.call(null,vec__27200,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),(function (db,p__27203){
var vec__27204 = p__27203;
var _ = cljs.core.nth.call(null,vec__27204,(0),null);
var active_demo = cljs.core.nth.call(null,vec__27204,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-starwars","get-starwars",926434839),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((goog.DEBUG)?re_frame.core.debug:null)], null),(function (p__27207,p__27208){
var map__27209 = p__27207;
var map__27209__$1 = ((((!((map__27209 == null)))?(((((map__27209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27209):map__27209);
var db = cljs.core.get.call(null,map__27209__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27210 = p__27208;
var _ = cljs.core.nth.call(null,vec__27210,(0),null);
var payload = cljs.core.nth.call(null,vec__27210,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){
cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"starwars","starwars",-661703190)], null),true);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"starwars","starwars",-661703190),new cljs.core.Keyword(null,"page","page",849072397)], null),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(payload));
})()
,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,["https://swapi.co/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(payload)),"/?page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(payload)),"&search=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(payload))].join(''),new cljs.core.Keyword(null,"get-starwars-success","get-starwars-success",1194191709),new cljs.core.Keyword(null,"get-starwars-fail","get-starwars-fail",-1743828903))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-starwars-success","get-starwars-success",1194191709),(function (db,p__27214){
var vec__27215 = p__27214;
var _ = cljs.core.nth.call(null,vec__27215,(0),null);
var response = cljs.core.nth.call(null,vec__27215,(1),null);
var records = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(response);
var count = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(response);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"starwars","starwars",-661703190),new cljs.core.Keyword(null,"records","records",1326822832)], null),records),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"starwars","starwars",-661703190),new cljs.core.Keyword(null,"count","count",2139924085)], null),count),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"starwars","starwars",-661703190)], null),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"retrieve-session-fail","retrieve-session-fail",1570828969),(function (db,p__27218){
var vec__27219 = p__27218;
var _ = cljs.core.nth.call(null,vec__27219,(0),null);
var response = cljs.core.nth.call(null,vec__27219,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"starwars","starwars",-661703190)], null),false);
}));
example.events.github_origin = "https://api.github.com";
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-github-events","get-github-events",2123865953),(function (p__27222,p__27223){
var map__27224 = p__27222;
var map__27224__$1 = ((((!((map__27224 == null)))?(((((map__27224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27224):map__27224);
var db = cljs.core.get.call(null,map__27224__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27225 = p__27223;
var _ = cljs.core.nth.call(null,vec__27225,(0),null);
var vals = cljs.core.nth.call(null,vec__27225,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.events.github_origin),"/orgs/reagent-project/events"].join(''),new cljs.core.Keyword(null,"get-github-events-success","get-github-events-success",-594973983),new cljs.core.Keyword(null,"get-github-events-fail","get-github-events-fail",229912964))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-github-events-success","get-github-events-success",-594973983),(function (db,p__27229){
var vec__27230 = p__27229;
var _ = cljs.core.nth.call(null,vec__27230,(0),null);
var response = cljs.core.nth.call(null,vec__27230,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-github-events-fail","get-github-events-fail",229912964),(function (db,p__27233){
var vec__27234 = p__27233;
var _ = cljs.core.nth.call(null,vec__27234,(0),null);
var response = cljs.core.nth.call(null,vec__27234,(1),null);
return db;
}));

//# sourceMappingURL=events.js.map?rel=1542228782619
