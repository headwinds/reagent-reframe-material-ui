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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),(function (db,p__22579){
var vec__22580 = p__22579;
var _ = cljs.core.nth.call(null,vec__22580,(0),null);
var active_demo = cljs.core.nth.call(null,vec__22580,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),(function (db,p__22583){
var vec__22584 = p__22583;
var _ = cljs.core.nth.call(null,vec__22584,(0),null);
var active_demo = cljs.core.nth.call(null,vec__22584,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
example.events.github_origin = "https://api.github.com";
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-github-events","get-github-events",2123865953),(function (p__22587,p__22588){
var map__22589 = p__22587;
var map__22589__$1 = ((((!((map__22589 == null)))?(((((map__22589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22589):map__22589);
var db = cljs.core.get.call(null,map__22589__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22590 = p__22588;
var _ = cljs.core.nth.call(null,vec__22590,(0),null);
var vals = cljs.core.nth.call(null,vec__22590,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.events.github_origin),"/orgs/reagent-project/events"].join(''),new cljs.core.Keyword(null,"get-github-events-success","get-github-events-success",-594973983),new cljs.core.Keyword(null,"get-github-events-fail","get-github-events-fail",229912964))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-github-events-success","get-github-events-success",-594973983),(function (db,p__22594){
var vec__22595 = p__22594;
var _ = cljs.core.nth.call(null,vec__22595,(0),null);
var response = cljs.core.nth.call(null,vec__22595,(1),null);
example.utils.http_fx.set_location.call(null,"#/accounts");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-github-events-fail","get-github-events-fail",229912964),(function (db,p__22598){
var vec__22599 = p__22598;
var _ = cljs.core.nth.call(null,vec__22599,(0),null);
var response = cljs.core.nth.call(null,vec__22599,(1),null);
example.utils.http_fx.set_location.call(null,"#/accounts");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"adam",new cljs.core.Keyword(null,"email","email",1415816706),"whatever",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null));
}));

//# sourceMappingURL=events.js.map?rel=1542211058291
