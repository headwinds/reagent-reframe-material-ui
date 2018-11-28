// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40889){
var map__40890 = p__40889;
var map__40890__$1 = ((((!((map__40890 == null)))?(((((map__40890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40890):map__40890);
var m = map__40890__$1;
var n = cljs.core.get.call(null,map__40890__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40890__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40892_40914 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40893_40915 = null;
var count__40894_40916 = (0);
var i__40895_40917 = (0);
while(true){
if((i__40895_40917 < count__40894_40916)){
var f_40918 = cljs.core._nth.call(null,chunk__40893_40915,i__40895_40917);
cljs.core.println.call(null,"  ",f_40918);


var G__40919 = seq__40892_40914;
var G__40920 = chunk__40893_40915;
var G__40921 = count__40894_40916;
var G__40922 = (i__40895_40917 + (1));
seq__40892_40914 = G__40919;
chunk__40893_40915 = G__40920;
count__40894_40916 = G__40921;
i__40895_40917 = G__40922;
continue;
} else {
var temp__5457__auto___40923 = cljs.core.seq.call(null,seq__40892_40914);
if(temp__5457__auto___40923){
var seq__40892_40924__$1 = temp__5457__auto___40923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40892_40924__$1)){
var c__4351__auto___40925 = cljs.core.chunk_first.call(null,seq__40892_40924__$1);
var G__40926 = cljs.core.chunk_rest.call(null,seq__40892_40924__$1);
var G__40927 = c__4351__auto___40925;
var G__40928 = cljs.core.count.call(null,c__4351__auto___40925);
var G__40929 = (0);
seq__40892_40914 = G__40926;
chunk__40893_40915 = G__40927;
count__40894_40916 = G__40928;
i__40895_40917 = G__40929;
continue;
} else {
var f_40930 = cljs.core.first.call(null,seq__40892_40924__$1);
cljs.core.println.call(null,"  ",f_40930);


var G__40931 = cljs.core.next.call(null,seq__40892_40924__$1);
var G__40932 = null;
var G__40933 = (0);
var G__40934 = (0);
seq__40892_40914 = G__40931;
chunk__40893_40915 = G__40932;
count__40894_40916 = G__40933;
i__40895_40917 = G__40934;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40935 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40935);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40935)))?cljs.core.second.call(null,arglists_40935):arglists_40935));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40896_40936 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40897_40937 = null;
var count__40898_40938 = (0);
var i__40899_40939 = (0);
while(true){
if((i__40899_40939 < count__40898_40938)){
var vec__40900_40940 = cljs.core._nth.call(null,chunk__40897_40937,i__40899_40939);
var name_40941 = cljs.core.nth.call(null,vec__40900_40940,(0),null);
var map__40903_40942 = cljs.core.nth.call(null,vec__40900_40940,(1),null);
var map__40903_40943__$1 = ((((!((map__40903_40942 == null)))?(((((map__40903_40942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40903_40942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40903_40942):map__40903_40942);
var doc_40944 = cljs.core.get.call(null,map__40903_40943__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40945 = cljs.core.get.call(null,map__40903_40943__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40941);

cljs.core.println.call(null," ",arglists_40945);

if(cljs.core.truth_(doc_40944)){
cljs.core.println.call(null," ",doc_40944);
} else {
}


var G__40946 = seq__40896_40936;
var G__40947 = chunk__40897_40937;
var G__40948 = count__40898_40938;
var G__40949 = (i__40899_40939 + (1));
seq__40896_40936 = G__40946;
chunk__40897_40937 = G__40947;
count__40898_40938 = G__40948;
i__40899_40939 = G__40949;
continue;
} else {
var temp__5457__auto___40950 = cljs.core.seq.call(null,seq__40896_40936);
if(temp__5457__auto___40950){
var seq__40896_40951__$1 = temp__5457__auto___40950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40896_40951__$1)){
var c__4351__auto___40952 = cljs.core.chunk_first.call(null,seq__40896_40951__$1);
var G__40953 = cljs.core.chunk_rest.call(null,seq__40896_40951__$1);
var G__40954 = c__4351__auto___40952;
var G__40955 = cljs.core.count.call(null,c__4351__auto___40952);
var G__40956 = (0);
seq__40896_40936 = G__40953;
chunk__40897_40937 = G__40954;
count__40898_40938 = G__40955;
i__40899_40939 = G__40956;
continue;
} else {
var vec__40905_40957 = cljs.core.first.call(null,seq__40896_40951__$1);
var name_40958 = cljs.core.nth.call(null,vec__40905_40957,(0),null);
var map__40908_40959 = cljs.core.nth.call(null,vec__40905_40957,(1),null);
var map__40908_40960__$1 = ((((!((map__40908_40959 == null)))?(((((map__40908_40959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40908_40959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40908_40959):map__40908_40959);
var doc_40961 = cljs.core.get.call(null,map__40908_40960__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40962 = cljs.core.get.call(null,map__40908_40960__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40958);

cljs.core.println.call(null," ",arglists_40962);

if(cljs.core.truth_(doc_40961)){
cljs.core.println.call(null," ",doc_40961);
} else {
}


var G__40963 = cljs.core.next.call(null,seq__40896_40951__$1);
var G__40964 = null;
var G__40965 = (0);
var G__40966 = (0);
seq__40896_40936 = G__40963;
chunk__40897_40937 = G__40964;
count__40898_40938 = G__40965;
i__40899_40939 = G__40966;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__40910 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40911 = null;
var count__40912 = (0);
var i__40913 = (0);
while(true){
if((i__40913 < count__40912)){
var role = cljs.core._nth.call(null,chunk__40911,i__40913);
var temp__5457__auto___40967__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___40967__$1)){
var spec_40968 = temp__5457__auto___40967__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40968));
} else {
}


var G__40969 = seq__40910;
var G__40970 = chunk__40911;
var G__40971 = count__40912;
var G__40972 = (i__40913 + (1));
seq__40910 = G__40969;
chunk__40911 = G__40970;
count__40912 = G__40971;
i__40913 = G__40972;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__40910);
if(temp__5457__auto____$1){
var seq__40910__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40910__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__40910__$1);
var G__40973 = cljs.core.chunk_rest.call(null,seq__40910__$1);
var G__40974 = c__4351__auto__;
var G__40975 = cljs.core.count.call(null,c__4351__auto__);
var G__40976 = (0);
seq__40910 = G__40973;
chunk__40911 = G__40974;
count__40912 = G__40975;
i__40913 = G__40976;
continue;
} else {
var role = cljs.core.first.call(null,seq__40910__$1);
var temp__5457__auto___40977__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___40977__$2)){
var spec_40978 = temp__5457__auto___40977__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40978));
} else {
}


var G__40979 = cljs.core.next.call(null,seq__40910__$1);
var G__40980 = null;
var G__40981 = (0);
var G__40982 = (0);
seq__40910 = G__40979;
chunk__40911 = G__40980;
count__40912 = G__40981;
i__40913 = G__40982;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1543433676165
