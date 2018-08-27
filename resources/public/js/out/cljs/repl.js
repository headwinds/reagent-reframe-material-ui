// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38675){
var map__38676 = p__38675;
var map__38676__$1 = ((((!((map__38676 == null)))?(((((map__38676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38676):map__38676);
var m = map__38676__$1;
var n = cljs.core.get.call(null,map__38676__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38676__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38678_38700 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38679_38701 = null;
var count__38680_38702 = (0);
var i__38681_38703 = (0);
while(true){
if((i__38681_38703 < count__38680_38702)){
var f_38704 = cljs.core._nth.call(null,chunk__38679_38701,i__38681_38703);
cljs.core.println.call(null,"  ",f_38704);


var G__38705 = seq__38678_38700;
var G__38706 = chunk__38679_38701;
var G__38707 = count__38680_38702;
var G__38708 = (i__38681_38703 + (1));
seq__38678_38700 = G__38705;
chunk__38679_38701 = G__38706;
count__38680_38702 = G__38707;
i__38681_38703 = G__38708;
continue;
} else {
var temp__5457__auto___38709 = cljs.core.seq.call(null,seq__38678_38700);
if(temp__5457__auto___38709){
var seq__38678_38710__$1 = temp__5457__auto___38709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38678_38710__$1)){
var c__4351__auto___38711 = cljs.core.chunk_first.call(null,seq__38678_38710__$1);
var G__38712 = cljs.core.chunk_rest.call(null,seq__38678_38710__$1);
var G__38713 = c__4351__auto___38711;
var G__38714 = cljs.core.count.call(null,c__4351__auto___38711);
var G__38715 = (0);
seq__38678_38700 = G__38712;
chunk__38679_38701 = G__38713;
count__38680_38702 = G__38714;
i__38681_38703 = G__38715;
continue;
} else {
var f_38716 = cljs.core.first.call(null,seq__38678_38710__$1);
cljs.core.println.call(null,"  ",f_38716);


var G__38717 = cljs.core.next.call(null,seq__38678_38710__$1);
var G__38718 = null;
var G__38719 = (0);
var G__38720 = (0);
seq__38678_38700 = G__38717;
chunk__38679_38701 = G__38718;
count__38680_38702 = G__38719;
i__38681_38703 = G__38720;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38721 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38721);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38721)))?cljs.core.second.call(null,arglists_38721):arglists_38721));
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
var seq__38682_38722 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38683_38723 = null;
var count__38684_38724 = (0);
var i__38685_38725 = (0);
while(true){
if((i__38685_38725 < count__38684_38724)){
var vec__38686_38726 = cljs.core._nth.call(null,chunk__38683_38723,i__38685_38725);
var name_38727 = cljs.core.nth.call(null,vec__38686_38726,(0),null);
var map__38689_38728 = cljs.core.nth.call(null,vec__38686_38726,(1),null);
var map__38689_38729__$1 = ((((!((map__38689_38728 == null)))?(((((map__38689_38728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38689_38728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38689_38728):map__38689_38728);
var doc_38730 = cljs.core.get.call(null,map__38689_38729__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38731 = cljs.core.get.call(null,map__38689_38729__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38727);

cljs.core.println.call(null," ",arglists_38731);

if(cljs.core.truth_(doc_38730)){
cljs.core.println.call(null," ",doc_38730);
} else {
}


var G__38732 = seq__38682_38722;
var G__38733 = chunk__38683_38723;
var G__38734 = count__38684_38724;
var G__38735 = (i__38685_38725 + (1));
seq__38682_38722 = G__38732;
chunk__38683_38723 = G__38733;
count__38684_38724 = G__38734;
i__38685_38725 = G__38735;
continue;
} else {
var temp__5457__auto___38736 = cljs.core.seq.call(null,seq__38682_38722);
if(temp__5457__auto___38736){
var seq__38682_38737__$1 = temp__5457__auto___38736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38682_38737__$1)){
var c__4351__auto___38738 = cljs.core.chunk_first.call(null,seq__38682_38737__$1);
var G__38739 = cljs.core.chunk_rest.call(null,seq__38682_38737__$1);
var G__38740 = c__4351__auto___38738;
var G__38741 = cljs.core.count.call(null,c__4351__auto___38738);
var G__38742 = (0);
seq__38682_38722 = G__38739;
chunk__38683_38723 = G__38740;
count__38684_38724 = G__38741;
i__38685_38725 = G__38742;
continue;
} else {
var vec__38691_38743 = cljs.core.first.call(null,seq__38682_38737__$1);
var name_38744 = cljs.core.nth.call(null,vec__38691_38743,(0),null);
var map__38694_38745 = cljs.core.nth.call(null,vec__38691_38743,(1),null);
var map__38694_38746__$1 = ((((!((map__38694_38745 == null)))?(((((map__38694_38745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38694_38745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38694_38745):map__38694_38745);
var doc_38747 = cljs.core.get.call(null,map__38694_38746__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38748 = cljs.core.get.call(null,map__38694_38746__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38744);

cljs.core.println.call(null," ",arglists_38748);

if(cljs.core.truth_(doc_38747)){
cljs.core.println.call(null," ",doc_38747);
} else {
}


var G__38749 = cljs.core.next.call(null,seq__38682_38737__$1);
var G__38750 = null;
var G__38751 = (0);
var G__38752 = (0);
seq__38682_38722 = G__38749;
chunk__38683_38723 = G__38750;
count__38684_38724 = G__38751;
i__38685_38725 = G__38752;
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

var seq__38696 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38697 = null;
var count__38698 = (0);
var i__38699 = (0);
while(true){
if((i__38699 < count__38698)){
var role = cljs.core._nth.call(null,chunk__38697,i__38699);
var temp__5457__auto___38753__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38753__$1)){
var spec_38754 = temp__5457__auto___38753__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38754));
} else {
}


var G__38755 = seq__38696;
var G__38756 = chunk__38697;
var G__38757 = count__38698;
var G__38758 = (i__38699 + (1));
seq__38696 = G__38755;
chunk__38697 = G__38756;
count__38698 = G__38757;
i__38699 = G__38758;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38696);
if(temp__5457__auto____$1){
var seq__38696__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38696__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__38696__$1);
var G__38759 = cljs.core.chunk_rest.call(null,seq__38696__$1);
var G__38760 = c__4351__auto__;
var G__38761 = cljs.core.count.call(null,c__4351__auto__);
var G__38762 = (0);
seq__38696 = G__38759;
chunk__38697 = G__38760;
count__38698 = G__38761;
i__38699 = G__38762;
continue;
} else {
var role = cljs.core.first.call(null,seq__38696__$1);
var temp__5457__auto___38763__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38763__$2)){
var spec_38764 = temp__5457__auto___38763__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38764));
} else {
}


var G__38765 = cljs.core.next.call(null,seq__38696__$1);
var G__38766 = null;
var G__38767 = (0);
var G__38768 = (0);
seq__38696 = G__38765;
chunk__38697 = G__38766;
count__38698 = G__38767;
i__38699 = G__38768;
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

//# sourceMappingURL=repl.js.map?rel=1535318455529
