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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),(function (db,p__22521){
var vec__22522 = p__22521;
var _ = cljs.core.nth.call(null,vec__22522,(0),null);
var active_demo = cljs.core.nth.call(null,vec__22522,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),(function (db,p__22525){
var vec__22526 = p__22525;
var _ = cljs.core.nth.call(null,vec__22526,(0),null);
var active_demo = cljs.core.nth.call(null,vec__22526,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
example.events.github_origin = "https://api.github.com";
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-github-events","get-github-events",2123865953),(function (p__22529,p__22530){
var map__22531 = p__22529;
var map__22531__$1 = ((((!((map__22531 == null)))?(((((map__22531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22531):map__22531);
var db = cljs.core.get.call(null,map__22531__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22532 = p__22530;
var _ = cljs.core.nth.call(null,vec__22532,(0),null);
var vals = cljs.core.nth.call(null,vec__22532,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.events.github_origin),"/orgs/reagent-project/events"].join(''),new cljs.core.Keyword(null,"get-github-events-success","get-github-events-success",-594973983),new cljs.core.Keyword(null,"get-github-events-fail","get-github-events-fail",229912964))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-github-events-success","get-github-events-success",-594973983),(function (db,p__22536){
var vec__22537 = p__22536;
var _ = cljs.core.nth.call(null,vec__22537,(0),null);
var response = cljs.core.nth.call(null,vec__22537,(1),null);
example.utils.http_fx.set_location.call(null,"#/accounts");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-github-events-fail","get-github-events-fail",229912964),(function (db,p__22540){
var vec__22541 = p__22540;
var _ = cljs.core.nth.call(null,vec__22541,(0),null);
var response = cljs.core.nth.call(null,vec__22541,(1),null);
example.utils.http_fx.set_location.call(null,"#/accounts");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"adam",new cljs.core.Keyword(null,"email","email",1415816706),"whatever",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null));
}));

//# sourceMappingURL=events.js.map?rel=1540761288091
