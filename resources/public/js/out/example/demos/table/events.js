// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.table.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('example.utils.js');
goog.require('example.utils.http_fx');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-people","get-people",726403750),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((goog.DEBUG)?re_frame.core.debug:null)], null),(function (p__23634,p__23635){
var map__23636 = p__23634;
var map__23636__$1 = ((((!((map__23636 == null)))?(((((map__23636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23636):map__23636);
var db = cljs.core.get.call(null,map__23636__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23637 = p__23635;
var _ = cljs.core.nth.call(null,vec__23637,(0),null);
var vals = cljs.core.nth.call(null,vec__23637,(1),null);
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(vals);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,["https://swapi.co/api/people/?page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)].join(''),new cljs.core.Keyword(null,"get-people-success","get-people-success",1458367143),new cljs.core.Keyword(null,"get-people-failure","get-people-failure",-1197832865))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-people-success","get-people-success",1458367143),(function (db,p__23641){
var vec__23642 = p__23641;
var _ = cljs.core.nth.call(null,vec__23642,(0),null);
var response = cljs.core.nth.call(null,vec__23642,(1),null);
var records = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(response);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"people","people",1443537404)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"people","people",1443537404),new cljs.core.Keyword(null,"total","total",1916810418)], null),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(response)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"people","people",1443537404),new cljs.core.Keyword(null,"records","records",1326822832)], null),records);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-people-failure","get-people-failure",-1197832865),(function (db,p__23645){
var vec__23646 = p__23645;
var _ = cljs.core.nth.call(null,vec__23646,(0),null);
var response = cljs.core.nth.call(null,vec__23646,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"people","people",1443537404)], null),false),new cljs.core.Keyword(null,"current-user","current-user",-868792091),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-current-file","set-current-file",2128397373),(function (db,p__23649){
var vec__23650 = p__23649;
var _ = cljs.core.nth.call(null,vec__23650,(0),null);
var current_file = cljs.core.nth.call(null,vec__23650,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-file","current-file",56284307),current_file);
}));

//# sourceMappingURL=events.js.map?rel=1540767632248
