// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36763_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36763_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36764 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36765 = null;
var count__36766 = (0);
var i__36767 = (0);
while(true){
if((i__36767 < count__36766)){
var n = cljs.core._nth.call(null,chunk__36765,i__36767);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36768 = seq__36764;
var G__36769 = chunk__36765;
var G__36770 = count__36766;
var G__36771 = (i__36767 + (1));
seq__36764 = G__36768;
chunk__36765 = G__36769;
count__36766 = G__36770;
i__36767 = G__36771;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36764);
if(temp__5457__auto__){
var seq__36764__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36764__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36764__$1);
var G__36772 = cljs.core.chunk_rest.call(null,seq__36764__$1);
var G__36773 = c__4351__auto__;
var G__36774 = cljs.core.count.call(null,c__4351__auto__);
var G__36775 = (0);
seq__36764 = G__36772;
chunk__36765 = G__36773;
count__36766 = G__36774;
i__36767 = G__36775;
continue;
} else {
var n = cljs.core.first.call(null,seq__36764__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36776 = cljs.core.next.call(null,seq__36764__$1);
var G__36777 = null;
var G__36778 = (0);
var G__36779 = (0);
seq__36764 = G__36776;
chunk__36765 = G__36777;
count__36766 = G__36778;
i__36767 = G__36779;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__36780){
var vec__36781 = p__36780;
var _ = cljs.core.nth.call(null,vec__36781,(0),null);
var v = cljs.core.nth.call(null,vec__36781,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__36784){
var vec__36785 = p__36784;
var k = cljs.core.nth.call(null,vec__36785,(0),null);
var v = cljs.core.nth.call(null,vec__36785,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36797_36805 = cljs.core.seq.call(null,deps);
var chunk__36798_36806 = null;
var count__36799_36807 = (0);
var i__36800_36808 = (0);
while(true){
if((i__36800_36808 < count__36799_36807)){
var dep_36809 = cljs.core._nth.call(null,chunk__36798_36806,i__36800_36808);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_36809;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36809));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36809,(depth + (1)),state);
} else {
}


var G__36810 = seq__36797_36805;
var G__36811 = chunk__36798_36806;
var G__36812 = count__36799_36807;
var G__36813 = (i__36800_36808 + (1));
seq__36797_36805 = G__36810;
chunk__36798_36806 = G__36811;
count__36799_36807 = G__36812;
i__36800_36808 = G__36813;
continue;
} else {
var temp__5457__auto___36814 = cljs.core.seq.call(null,seq__36797_36805);
if(temp__5457__auto___36814){
var seq__36797_36815__$1 = temp__5457__auto___36814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36797_36815__$1)){
var c__4351__auto___36816 = cljs.core.chunk_first.call(null,seq__36797_36815__$1);
var G__36817 = cljs.core.chunk_rest.call(null,seq__36797_36815__$1);
var G__36818 = c__4351__auto___36816;
var G__36819 = cljs.core.count.call(null,c__4351__auto___36816);
var G__36820 = (0);
seq__36797_36805 = G__36817;
chunk__36798_36806 = G__36818;
count__36799_36807 = G__36819;
i__36800_36808 = G__36820;
continue;
} else {
var dep_36821 = cljs.core.first.call(null,seq__36797_36815__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_36821;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36821));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36821,(depth + (1)),state);
} else {
}


var G__36822 = cljs.core.next.call(null,seq__36797_36815__$1);
var G__36823 = null;
var G__36824 = (0);
var G__36825 = (0);
seq__36797_36805 = G__36822;
chunk__36798_36806 = G__36823;
count__36799_36807 = G__36824;
i__36800_36808 = G__36825;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36801){
var vec__36802 = p__36801;
var seq__36803 = cljs.core.seq.call(null,vec__36802);
var first__36804 = cljs.core.first.call(null,seq__36803);
var seq__36803__$1 = cljs.core.next.call(null,seq__36803);
var x = first__36804;
var xs = seq__36803__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36802,seq__36803,first__36804,seq__36803__$1,x,xs,get_deps__$1){
return (function (p1__36788_SHARP_){
return clojure.set.difference.call(null,p1__36788_SHARP_,x);
});})(vec__36802,seq__36803,first__36804,seq__36803__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36826 = cljs.core.seq.call(null,provides);
var chunk__36827 = null;
var count__36828 = (0);
var i__36829 = (0);
while(true){
if((i__36829 < count__36828)){
var prov = cljs.core._nth.call(null,chunk__36827,i__36829);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36830_36838 = cljs.core.seq.call(null,requires);
var chunk__36831_36839 = null;
var count__36832_36840 = (0);
var i__36833_36841 = (0);
while(true){
if((i__36833_36841 < count__36832_36840)){
var req_36842 = cljs.core._nth.call(null,chunk__36831_36839,i__36833_36841);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36842,prov);


var G__36843 = seq__36830_36838;
var G__36844 = chunk__36831_36839;
var G__36845 = count__36832_36840;
var G__36846 = (i__36833_36841 + (1));
seq__36830_36838 = G__36843;
chunk__36831_36839 = G__36844;
count__36832_36840 = G__36845;
i__36833_36841 = G__36846;
continue;
} else {
var temp__5457__auto___36847 = cljs.core.seq.call(null,seq__36830_36838);
if(temp__5457__auto___36847){
var seq__36830_36848__$1 = temp__5457__auto___36847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36830_36848__$1)){
var c__4351__auto___36849 = cljs.core.chunk_first.call(null,seq__36830_36848__$1);
var G__36850 = cljs.core.chunk_rest.call(null,seq__36830_36848__$1);
var G__36851 = c__4351__auto___36849;
var G__36852 = cljs.core.count.call(null,c__4351__auto___36849);
var G__36853 = (0);
seq__36830_36838 = G__36850;
chunk__36831_36839 = G__36851;
count__36832_36840 = G__36852;
i__36833_36841 = G__36853;
continue;
} else {
var req_36854 = cljs.core.first.call(null,seq__36830_36848__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36854,prov);


var G__36855 = cljs.core.next.call(null,seq__36830_36848__$1);
var G__36856 = null;
var G__36857 = (0);
var G__36858 = (0);
seq__36830_36838 = G__36855;
chunk__36831_36839 = G__36856;
count__36832_36840 = G__36857;
i__36833_36841 = G__36858;
continue;
}
} else {
}
}
break;
}


var G__36859 = seq__36826;
var G__36860 = chunk__36827;
var G__36861 = count__36828;
var G__36862 = (i__36829 + (1));
seq__36826 = G__36859;
chunk__36827 = G__36860;
count__36828 = G__36861;
i__36829 = G__36862;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36826);
if(temp__5457__auto__){
var seq__36826__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36826__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36826__$1);
var G__36863 = cljs.core.chunk_rest.call(null,seq__36826__$1);
var G__36864 = c__4351__auto__;
var G__36865 = cljs.core.count.call(null,c__4351__auto__);
var G__36866 = (0);
seq__36826 = G__36863;
chunk__36827 = G__36864;
count__36828 = G__36865;
i__36829 = G__36866;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36826__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36834_36867 = cljs.core.seq.call(null,requires);
var chunk__36835_36868 = null;
var count__36836_36869 = (0);
var i__36837_36870 = (0);
while(true){
if((i__36837_36870 < count__36836_36869)){
var req_36871 = cljs.core._nth.call(null,chunk__36835_36868,i__36837_36870);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36871,prov);


var G__36872 = seq__36834_36867;
var G__36873 = chunk__36835_36868;
var G__36874 = count__36836_36869;
var G__36875 = (i__36837_36870 + (1));
seq__36834_36867 = G__36872;
chunk__36835_36868 = G__36873;
count__36836_36869 = G__36874;
i__36837_36870 = G__36875;
continue;
} else {
var temp__5457__auto___36876__$1 = cljs.core.seq.call(null,seq__36834_36867);
if(temp__5457__auto___36876__$1){
var seq__36834_36877__$1 = temp__5457__auto___36876__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36834_36877__$1)){
var c__4351__auto___36878 = cljs.core.chunk_first.call(null,seq__36834_36877__$1);
var G__36879 = cljs.core.chunk_rest.call(null,seq__36834_36877__$1);
var G__36880 = c__4351__auto___36878;
var G__36881 = cljs.core.count.call(null,c__4351__auto___36878);
var G__36882 = (0);
seq__36834_36867 = G__36879;
chunk__36835_36868 = G__36880;
count__36836_36869 = G__36881;
i__36837_36870 = G__36882;
continue;
} else {
var req_36883 = cljs.core.first.call(null,seq__36834_36877__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36883,prov);


var G__36884 = cljs.core.next.call(null,seq__36834_36877__$1);
var G__36885 = null;
var G__36886 = (0);
var G__36887 = (0);
seq__36834_36867 = G__36884;
chunk__36835_36868 = G__36885;
count__36836_36869 = G__36886;
i__36837_36870 = G__36887;
continue;
}
} else {
}
}
break;
}


var G__36888 = cljs.core.next.call(null,seq__36826__$1);
var G__36889 = null;
var G__36890 = (0);
var G__36891 = (0);
seq__36826 = G__36888;
chunk__36827 = G__36889;
count__36828 = G__36890;
i__36829 = G__36891;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36892_36896 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36893_36897 = null;
var count__36894_36898 = (0);
var i__36895_36899 = (0);
while(true){
if((i__36895_36899 < count__36894_36898)){
var ns_36900 = cljs.core._nth.call(null,chunk__36893_36897,i__36895_36899);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36900);


var G__36901 = seq__36892_36896;
var G__36902 = chunk__36893_36897;
var G__36903 = count__36894_36898;
var G__36904 = (i__36895_36899 + (1));
seq__36892_36896 = G__36901;
chunk__36893_36897 = G__36902;
count__36894_36898 = G__36903;
i__36895_36899 = G__36904;
continue;
} else {
var temp__5457__auto___36905 = cljs.core.seq.call(null,seq__36892_36896);
if(temp__5457__auto___36905){
var seq__36892_36906__$1 = temp__5457__auto___36905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36892_36906__$1)){
var c__4351__auto___36907 = cljs.core.chunk_first.call(null,seq__36892_36906__$1);
var G__36908 = cljs.core.chunk_rest.call(null,seq__36892_36906__$1);
var G__36909 = c__4351__auto___36907;
var G__36910 = cljs.core.count.call(null,c__4351__auto___36907);
var G__36911 = (0);
seq__36892_36896 = G__36908;
chunk__36893_36897 = G__36909;
count__36894_36898 = G__36910;
i__36895_36899 = G__36911;
continue;
} else {
var ns_36912 = cljs.core.first.call(null,seq__36892_36906__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36912);


var G__36913 = cljs.core.next.call(null,seq__36892_36906__$1);
var G__36914 = null;
var G__36915 = (0);
var G__36916 = (0);
seq__36892_36896 = G__36913;
chunk__36893_36897 = G__36914;
count__36894_36898 = G__36915;
i__36895_36899 = G__36916;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36917__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36918__i = 0, G__36918__a = new Array(arguments.length -  0);
while (G__36918__i < G__36918__a.length) {G__36918__a[G__36918__i] = arguments[G__36918__i + 0]; ++G__36918__i;}
  args = new cljs.core.IndexedSeq(G__36918__a,0,null);
} 
return G__36917__delegate.call(this,args);};
G__36917.cljs$lang$maxFixedArity = 0;
G__36917.cljs$lang$applyTo = (function (arglist__36919){
var args = cljs.core.seq(arglist__36919);
return G__36917__delegate(args);
});
G__36917.cljs$core$IFn$_invoke$arity$variadic = G__36917__delegate;
return G__36917;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__36920_SHARP_,p2__36921_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36920_SHARP_)].join('')),p2__36921_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__36922_SHARP_,p2__36923_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36922_SHARP_)].join(''),p2__36923_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36924 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36924.addCallback(((function (G__36924){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36924))
);

G__36924.addErrback(((function (G__36924){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36924))
);

return G__36924;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36925){if((e36925 instanceof Error)){
var e = e36925;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36925;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36926){if((e36926 instanceof Error)){
var e = e36926;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36926;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36927 = cljs.core._EQ_;
var expr__36928 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36927.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36928))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__36927.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36928))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__36927.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36928))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__36927,expr__36928){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36927,expr__36928))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36930,callback){
var map__36931 = p__36930;
var map__36931__$1 = ((((!((map__36931 == null)))?(((((map__36931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36931):map__36931);
var file_msg = map__36931__$1;
var request_url = cljs.core.get.call(null,map__36931__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__36931,map__36931__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36931,map__36931__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto__){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto__){
return (function (state_36969){
var state_val_36970 = (state_36969[(1)]);
if((state_val_36970 === (7))){
var inst_36965 = (state_36969[(2)]);
var state_36969__$1 = state_36969;
var statearr_36971_36997 = state_36969__$1;
(statearr_36971_36997[(2)] = inst_36965);

(statearr_36971_36997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (1))){
var state_36969__$1 = state_36969;
var statearr_36972_36998 = state_36969__$1;
(statearr_36972_36998[(2)] = null);

(statearr_36972_36998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (4))){
var inst_36935 = (state_36969[(7)]);
var inst_36935__$1 = (state_36969[(2)]);
var state_36969__$1 = (function (){var statearr_36973 = state_36969;
(statearr_36973[(7)] = inst_36935__$1);

return statearr_36973;
})();
if(cljs.core.truth_(inst_36935__$1)){
var statearr_36974_36999 = state_36969__$1;
(statearr_36974_36999[(1)] = (5));

} else {
var statearr_36975_37000 = state_36969__$1;
(statearr_36975_37000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (15))){
var inst_36948 = (state_36969[(8)]);
var inst_36950 = (state_36969[(9)]);
var inst_36952 = inst_36950.call(null,inst_36948);
var state_36969__$1 = state_36969;
var statearr_36976_37001 = state_36969__$1;
(statearr_36976_37001[(2)] = inst_36952);

(statearr_36976_37001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (13))){
var inst_36959 = (state_36969[(2)]);
var state_36969__$1 = state_36969;
var statearr_36977_37002 = state_36969__$1;
(statearr_36977_37002[(2)] = inst_36959);

(statearr_36977_37002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (6))){
var state_36969__$1 = state_36969;
var statearr_36978_37003 = state_36969__$1;
(statearr_36978_37003[(2)] = null);

(statearr_36978_37003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (17))){
var inst_36956 = (state_36969[(2)]);
var state_36969__$1 = state_36969;
var statearr_36979_37004 = state_36969__$1;
(statearr_36979_37004[(2)] = inst_36956);

(statearr_36979_37004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (3))){
var inst_36967 = (state_36969[(2)]);
var state_36969__$1 = state_36969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36969__$1,inst_36967);
} else {
if((state_val_36970 === (12))){
var state_36969__$1 = state_36969;
var statearr_36980_37005 = state_36969__$1;
(statearr_36980_37005[(2)] = null);

(statearr_36980_37005[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (2))){
var state_36969__$1 = state_36969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36969__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36970 === (11))){
var inst_36940 = (state_36969[(10)]);
var inst_36946 = figwheel.client.file_reloading.blocking_load.call(null,inst_36940);
var state_36969__$1 = state_36969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36969__$1,(14),inst_36946);
} else {
if((state_val_36970 === (9))){
var inst_36940 = (state_36969[(10)]);
var state_36969__$1 = state_36969;
if(cljs.core.truth_(inst_36940)){
var statearr_36981_37006 = state_36969__$1;
(statearr_36981_37006[(1)] = (11));

} else {
var statearr_36982_37007 = state_36969__$1;
(statearr_36982_37007[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (5))){
var inst_36941 = (state_36969[(11)]);
var inst_36935 = (state_36969[(7)]);
var inst_36940 = cljs.core.nth.call(null,inst_36935,(0),null);
var inst_36941__$1 = cljs.core.nth.call(null,inst_36935,(1),null);
var state_36969__$1 = (function (){var statearr_36983 = state_36969;
(statearr_36983[(10)] = inst_36940);

(statearr_36983[(11)] = inst_36941__$1);

return statearr_36983;
})();
if(cljs.core.truth_(inst_36941__$1)){
var statearr_36984_37008 = state_36969__$1;
(statearr_36984_37008[(1)] = (8));

} else {
var statearr_36985_37009 = state_36969__$1;
(statearr_36985_37009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (14))){
var inst_36940 = (state_36969[(10)]);
var inst_36950 = (state_36969[(9)]);
var inst_36948 = (state_36969[(2)]);
var inst_36949 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36950__$1 = cljs.core.get.call(null,inst_36949,inst_36940);
var state_36969__$1 = (function (){var statearr_36986 = state_36969;
(statearr_36986[(8)] = inst_36948);

(statearr_36986[(9)] = inst_36950__$1);

return statearr_36986;
})();
if(cljs.core.truth_(inst_36950__$1)){
var statearr_36987_37010 = state_36969__$1;
(statearr_36987_37010[(1)] = (15));

} else {
var statearr_36988_37011 = state_36969__$1;
(statearr_36988_37011[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (16))){
var inst_36948 = (state_36969[(8)]);
var inst_36954 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36948);
var state_36969__$1 = state_36969;
var statearr_36989_37012 = state_36969__$1;
(statearr_36989_37012[(2)] = inst_36954);

(statearr_36989_37012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (10))){
var inst_36961 = (state_36969[(2)]);
var state_36969__$1 = (function (){var statearr_36990 = state_36969;
(statearr_36990[(12)] = inst_36961);

return statearr_36990;
})();
var statearr_36991_37013 = state_36969__$1;
(statearr_36991_37013[(2)] = null);

(statearr_36991_37013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (8))){
var inst_36941 = (state_36969[(11)]);
var inst_36943 = eval(inst_36941);
var state_36969__$1 = state_36969;
var statearr_36992_37014 = state_36969__$1;
(statearr_36992_37014[(2)] = inst_36943);

(statearr_36992_37014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto__))
;
return ((function (switch__33787__auto__,c__33878__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33788__auto__ = null;
var figwheel$client$file_reloading$state_machine__33788__auto____0 = (function (){
var statearr_36993 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36993[(0)] = figwheel$client$file_reloading$state_machine__33788__auto__);

(statearr_36993[(1)] = (1));

return statearr_36993;
});
var figwheel$client$file_reloading$state_machine__33788__auto____1 = (function (state_36969){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_36969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e36994){if((e36994 instanceof Object)){
var ex__33791__auto__ = e36994;
var statearr_36995_37015 = state_36969;
(statearr_36995_37015[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37016 = state_36969;
state_36969 = G__37016;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33788__auto__ = function(state_36969){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33788__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33788__auto____1.call(this,state_36969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33788__auto____0;
figwheel$client$file_reloading$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33788__auto____1;
return figwheel$client$file_reloading$state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto__))
})();
var state__33880__auto__ = (function (){var statearr_36996 = f__33879__auto__.call(null);
(statearr_36996[(6)] = c__33878__auto__);

return statearr_36996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto__))
);

return c__33878__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37018 = arguments.length;
switch (G__37018) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37020,callback){
var map__37021 = p__37020;
var map__37021__$1 = ((((!((map__37021 == null)))?(((((map__37021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37021):map__37021);
var file_msg = map__37021__$1;
var namespace = cljs.core.get.call(null,map__37021__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37021,map__37021__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37021,map__37021__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37023){
var map__37024 = p__37023;
var map__37024__$1 = ((((!((map__37024 == null)))?(((((map__37024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37024):map__37024);
var file_msg = map__37024__$1;
var namespace = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37026){
var map__37027 = p__37026;
var map__37027__$1 = ((((!((map__37027 == null)))?(((((map__37027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37027):map__37027);
var file_msg = map__37027__$1;
var namespace = cljs.core.get.call(null,map__37027__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37029,callback){
var map__37030 = p__37029;
var map__37030__$1 = ((((!((map__37030 == null)))?(((((map__37030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37030):map__37030);
var file_msg = map__37030__$1;
var request_url = cljs.core.get.call(null,map__37030__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37030__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33878__auto___37080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___37080,out){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___37080,out){
return (function (state_37065){
var state_val_37066 = (state_37065[(1)]);
if((state_val_37066 === (1))){
var inst_37039 = cljs.core.seq.call(null,files);
var inst_37040 = cljs.core.first.call(null,inst_37039);
var inst_37041 = cljs.core.next.call(null,inst_37039);
var inst_37042 = files;
var state_37065__$1 = (function (){var statearr_37067 = state_37065;
(statearr_37067[(7)] = inst_37042);

(statearr_37067[(8)] = inst_37041);

(statearr_37067[(9)] = inst_37040);

return statearr_37067;
})();
var statearr_37068_37081 = state_37065__$1;
(statearr_37068_37081[(2)] = null);

(statearr_37068_37081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37066 === (2))){
var inst_37042 = (state_37065[(7)]);
var inst_37048 = (state_37065[(10)]);
var inst_37047 = cljs.core.seq.call(null,inst_37042);
var inst_37048__$1 = cljs.core.first.call(null,inst_37047);
var inst_37049 = cljs.core.next.call(null,inst_37047);
var inst_37050 = (inst_37048__$1 == null);
var inst_37051 = cljs.core.not.call(null,inst_37050);
var state_37065__$1 = (function (){var statearr_37069 = state_37065;
(statearr_37069[(11)] = inst_37049);

(statearr_37069[(10)] = inst_37048__$1);

return statearr_37069;
})();
if(inst_37051){
var statearr_37070_37082 = state_37065__$1;
(statearr_37070_37082[(1)] = (4));

} else {
var statearr_37071_37083 = state_37065__$1;
(statearr_37071_37083[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37066 === (3))){
var inst_37063 = (state_37065[(2)]);
var state_37065__$1 = state_37065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37065__$1,inst_37063);
} else {
if((state_val_37066 === (4))){
var inst_37048 = (state_37065[(10)]);
var inst_37053 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37048);
var state_37065__$1 = state_37065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37065__$1,(7),inst_37053);
} else {
if((state_val_37066 === (5))){
var inst_37059 = cljs.core.async.close_BANG_.call(null,out);
var state_37065__$1 = state_37065;
var statearr_37072_37084 = state_37065__$1;
(statearr_37072_37084[(2)] = inst_37059);

(statearr_37072_37084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37066 === (6))){
var inst_37061 = (state_37065[(2)]);
var state_37065__$1 = state_37065;
var statearr_37073_37085 = state_37065__$1;
(statearr_37073_37085[(2)] = inst_37061);

(statearr_37073_37085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37066 === (7))){
var inst_37049 = (state_37065[(11)]);
var inst_37055 = (state_37065[(2)]);
var inst_37056 = cljs.core.async.put_BANG_.call(null,out,inst_37055);
var inst_37042 = inst_37049;
var state_37065__$1 = (function (){var statearr_37074 = state_37065;
(statearr_37074[(7)] = inst_37042);

(statearr_37074[(12)] = inst_37056);

return statearr_37074;
})();
var statearr_37075_37086 = state_37065__$1;
(statearr_37075_37086[(2)] = null);

(statearr_37075_37086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33878__auto___37080,out))
;
return ((function (switch__33787__auto__,c__33878__auto___37080,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33788__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33788__auto____0 = (function (){
var statearr_37076 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37076[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33788__auto__);

(statearr_37076[(1)] = (1));

return statearr_37076;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33788__auto____1 = (function (state_37065){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_37065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e37077){if((e37077 instanceof Object)){
var ex__33791__auto__ = e37077;
var statearr_37078_37087 = state_37065;
(statearr_37078_37087[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37088 = state_37065;
state_37065 = G__37088;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33788__auto__ = function(state_37065){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33788__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33788__auto____1.call(this,state_37065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33788__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33788__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___37080,out))
})();
var state__33880__auto__ = (function (){var statearr_37079 = f__33879__auto__.call(null);
(statearr_37079[(6)] = c__33878__auto___37080);

return statearr_37079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___37080,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37089,opts){
var map__37090 = p__37089;
var map__37090__$1 = ((((!((map__37090 == null)))?(((((map__37090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37090):map__37090);
var eval_body = cljs.core.get.call(null,map__37090__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37090__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37092){var e = e37092;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37093_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37093_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37094){
var vec__37095 = p__37094;
var k = cljs.core.nth.call(null,vec__37095,(0),null);
var v = cljs.core.nth.call(null,vec__37095,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37098){
var vec__37099 = p__37098;
var k = cljs.core.nth.call(null,vec__37099,(0),null);
var v = cljs.core.nth.call(null,vec__37099,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37105,p__37106){
var map__37107 = p__37105;
var map__37107__$1 = ((((!((map__37107 == null)))?(((((map__37107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37107):map__37107);
var opts = map__37107__$1;
var before_jsload = cljs.core.get.call(null,map__37107__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37107__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37107__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37108 = p__37106;
var map__37108__$1 = ((((!((map__37108 == null)))?(((((map__37108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37108):map__37108);
var msg = map__37108__$1;
var files = cljs.core.get.call(null,map__37108__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37108__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37108__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37262){
var state_val_37263 = (state_37262[(1)]);
if((state_val_37263 === (7))){
var inst_37123 = (state_37262[(7)]);
var inst_37124 = (state_37262[(8)]);
var inst_37125 = (state_37262[(9)]);
var inst_37122 = (state_37262[(10)]);
var inst_37130 = cljs.core._nth.call(null,inst_37123,inst_37125);
var inst_37131 = figwheel.client.file_reloading.eval_body.call(null,inst_37130,opts);
var inst_37132 = (inst_37125 + (1));
var tmp37264 = inst_37123;
var tmp37265 = inst_37124;
var tmp37266 = inst_37122;
var inst_37122__$1 = tmp37266;
var inst_37123__$1 = tmp37264;
var inst_37124__$1 = tmp37265;
var inst_37125__$1 = inst_37132;
var state_37262__$1 = (function (){var statearr_37267 = state_37262;
(statearr_37267[(7)] = inst_37123__$1);

(statearr_37267[(8)] = inst_37124__$1);

(statearr_37267[(9)] = inst_37125__$1);

(statearr_37267[(10)] = inst_37122__$1);

(statearr_37267[(11)] = inst_37131);

return statearr_37267;
})();
var statearr_37268_37351 = state_37262__$1;
(statearr_37268_37351[(2)] = null);

(statearr_37268_37351[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (20))){
var inst_37165 = (state_37262[(12)]);
var inst_37173 = figwheel.client.file_reloading.sort_files.call(null,inst_37165);
var state_37262__$1 = state_37262;
var statearr_37269_37352 = state_37262__$1;
(statearr_37269_37352[(2)] = inst_37173);

(statearr_37269_37352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (27))){
var state_37262__$1 = state_37262;
var statearr_37270_37353 = state_37262__$1;
(statearr_37270_37353[(2)] = null);

(statearr_37270_37353[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (1))){
var inst_37114 = (state_37262[(13)]);
var inst_37111 = before_jsload.call(null,files);
var inst_37112 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37113 = (function (){return ((function (inst_37114,inst_37111,inst_37112,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37102_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37102_SHARP_);
});
;})(inst_37114,inst_37111,inst_37112,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37114__$1 = cljs.core.filter.call(null,inst_37113,files);
var inst_37115 = cljs.core.not_empty.call(null,inst_37114__$1);
var state_37262__$1 = (function (){var statearr_37271 = state_37262;
(statearr_37271[(14)] = inst_37112);

(statearr_37271[(13)] = inst_37114__$1);

(statearr_37271[(15)] = inst_37111);

return statearr_37271;
})();
if(cljs.core.truth_(inst_37115)){
var statearr_37272_37354 = state_37262__$1;
(statearr_37272_37354[(1)] = (2));

} else {
var statearr_37273_37355 = state_37262__$1;
(statearr_37273_37355[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (24))){
var state_37262__$1 = state_37262;
var statearr_37274_37356 = state_37262__$1;
(statearr_37274_37356[(2)] = null);

(statearr_37274_37356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (39))){
var inst_37215 = (state_37262[(16)]);
var state_37262__$1 = state_37262;
var statearr_37275_37357 = state_37262__$1;
(statearr_37275_37357[(2)] = inst_37215);

(statearr_37275_37357[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (46))){
var inst_37257 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
var statearr_37276_37358 = state_37262__$1;
(statearr_37276_37358[(2)] = inst_37257);

(statearr_37276_37358[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (4))){
var inst_37159 = (state_37262[(2)]);
var inst_37160 = cljs.core.List.EMPTY;
var inst_37161 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37160);
var inst_37162 = (function (){return ((function (inst_37159,inst_37160,inst_37161,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37103_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37103_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37103_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37103_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_37159,inst_37160,inst_37161,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37163 = cljs.core.filter.call(null,inst_37162,files);
var inst_37164 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37165 = cljs.core.concat.call(null,inst_37163,inst_37164);
var state_37262__$1 = (function (){var statearr_37277 = state_37262;
(statearr_37277[(17)] = inst_37159);

(statearr_37277[(12)] = inst_37165);

(statearr_37277[(18)] = inst_37161);

return statearr_37277;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37278_37359 = state_37262__$1;
(statearr_37278_37359[(1)] = (16));

} else {
var statearr_37279_37360 = state_37262__$1;
(statearr_37279_37360[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (15))){
var inst_37149 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
var statearr_37280_37361 = state_37262__$1;
(statearr_37280_37361[(2)] = inst_37149);

(statearr_37280_37361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (21))){
var inst_37175 = (state_37262[(19)]);
var inst_37175__$1 = (state_37262[(2)]);
var inst_37176 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37175__$1);
var state_37262__$1 = (function (){var statearr_37281 = state_37262;
(statearr_37281[(19)] = inst_37175__$1);

return statearr_37281;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37262__$1,(22),inst_37176);
} else {
if((state_val_37263 === (31))){
var inst_37260 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37262__$1,inst_37260);
} else {
if((state_val_37263 === (32))){
var inst_37215 = (state_37262[(16)]);
var inst_37220 = inst_37215.cljs$lang$protocol_mask$partition0$;
var inst_37221 = (inst_37220 & (64));
var inst_37222 = inst_37215.cljs$core$ISeq$;
var inst_37223 = (cljs.core.PROTOCOL_SENTINEL === inst_37222);
var inst_37224 = ((inst_37221) || (inst_37223));
var state_37262__$1 = state_37262;
if(cljs.core.truth_(inst_37224)){
var statearr_37282_37362 = state_37262__$1;
(statearr_37282_37362[(1)] = (35));

} else {
var statearr_37283_37363 = state_37262__$1;
(statearr_37283_37363[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (40))){
var inst_37237 = (state_37262[(20)]);
var inst_37236 = (state_37262[(2)]);
var inst_37237__$1 = cljs.core.get.call(null,inst_37236,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37238 = cljs.core.get.call(null,inst_37236,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37239 = cljs.core.not_empty.call(null,inst_37237__$1);
var state_37262__$1 = (function (){var statearr_37284 = state_37262;
(statearr_37284[(20)] = inst_37237__$1);

(statearr_37284[(21)] = inst_37238);

return statearr_37284;
})();
if(cljs.core.truth_(inst_37239)){
var statearr_37285_37364 = state_37262__$1;
(statearr_37285_37364[(1)] = (41));

} else {
var statearr_37286_37365 = state_37262__$1;
(statearr_37286_37365[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (33))){
var state_37262__$1 = state_37262;
var statearr_37287_37366 = state_37262__$1;
(statearr_37287_37366[(2)] = false);

(statearr_37287_37366[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (13))){
var inst_37135 = (state_37262[(22)]);
var inst_37139 = cljs.core.chunk_first.call(null,inst_37135);
var inst_37140 = cljs.core.chunk_rest.call(null,inst_37135);
var inst_37141 = cljs.core.count.call(null,inst_37139);
var inst_37122 = inst_37140;
var inst_37123 = inst_37139;
var inst_37124 = inst_37141;
var inst_37125 = (0);
var state_37262__$1 = (function (){var statearr_37288 = state_37262;
(statearr_37288[(7)] = inst_37123);

(statearr_37288[(8)] = inst_37124);

(statearr_37288[(9)] = inst_37125);

(statearr_37288[(10)] = inst_37122);

return statearr_37288;
})();
var statearr_37289_37367 = state_37262__$1;
(statearr_37289_37367[(2)] = null);

(statearr_37289_37367[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (22))){
var inst_37175 = (state_37262[(19)]);
var inst_37179 = (state_37262[(23)]);
var inst_37178 = (state_37262[(24)]);
var inst_37183 = (state_37262[(25)]);
var inst_37178__$1 = (state_37262[(2)]);
var inst_37179__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37178__$1);
var inst_37180 = (function (){var all_files = inst_37175;
var res_SINGLEQUOTE_ = inst_37178__$1;
var res = inst_37179__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37175,inst_37179,inst_37178,inst_37183,inst_37178__$1,inst_37179__$1,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37104_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37104_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37175,inst_37179,inst_37178,inst_37183,inst_37178__$1,inst_37179__$1,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37181 = cljs.core.filter.call(null,inst_37180,inst_37178__$1);
var inst_37182 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37183__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37182);
var inst_37184 = cljs.core.not_empty.call(null,inst_37183__$1);
var state_37262__$1 = (function (){var statearr_37290 = state_37262;
(statearr_37290[(23)] = inst_37179__$1);

(statearr_37290[(24)] = inst_37178__$1);

(statearr_37290[(26)] = inst_37181);

(statearr_37290[(25)] = inst_37183__$1);

return statearr_37290;
})();
if(cljs.core.truth_(inst_37184)){
var statearr_37291_37368 = state_37262__$1;
(statearr_37291_37368[(1)] = (23));

} else {
var statearr_37292_37369 = state_37262__$1;
(statearr_37292_37369[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (36))){
var state_37262__$1 = state_37262;
var statearr_37293_37370 = state_37262__$1;
(statearr_37293_37370[(2)] = false);

(statearr_37293_37370[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (41))){
var inst_37237 = (state_37262[(20)]);
var inst_37241 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37242 = cljs.core.map.call(null,inst_37241,inst_37237);
var inst_37243 = cljs.core.pr_str.call(null,inst_37242);
var inst_37244 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37243)].join('');
var inst_37245 = figwheel.client.utils.log.call(null,inst_37244);
var state_37262__$1 = state_37262;
var statearr_37294_37371 = state_37262__$1;
(statearr_37294_37371[(2)] = inst_37245);

(statearr_37294_37371[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (43))){
var inst_37238 = (state_37262[(21)]);
var inst_37248 = (state_37262[(2)]);
var inst_37249 = cljs.core.not_empty.call(null,inst_37238);
var state_37262__$1 = (function (){var statearr_37295 = state_37262;
(statearr_37295[(27)] = inst_37248);

return statearr_37295;
})();
if(cljs.core.truth_(inst_37249)){
var statearr_37296_37372 = state_37262__$1;
(statearr_37296_37372[(1)] = (44));

} else {
var statearr_37297_37373 = state_37262__$1;
(statearr_37297_37373[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (29))){
var inst_37175 = (state_37262[(19)]);
var inst_37179 = (state_37262[(23)]);
var inst_37178 = (state_37262[(24)]);
var inst_37181 = (state_37262[(26)]);
var inst_37183 = (state_37262[(25)]);
var inst_37215 = (state_37262[(16)]);
var inst_37211 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37214 = (function (){var all_files = inst_37175;
var res_SINGLEQUOTE_ = inst_37178;
var res = inst_37179;
var files_not_loaded = inst_37181;
var dependencies_that_loaded = inst_37183;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37175,inst_37179,inst_37178,inst_37181,inst_37183,inst_37215,inst_37211,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37213){
var map__37298 = p__37213;
var map__37298__$1 = ((((!((map__37298 == null)))?(((((map__37298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37298):map__37298);
var namespace = cljs.core.get.call(null,map__37298__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37175,inst_37179,inst_37178,inst_37181,inst_37183,inst_37215,inst_37211,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37215__$1 = cljs.core.group_by.call(null,inst_37214,inst_37181);
var inst_37217 = (inst_37215__$1 == null);
var inst_37218 = cljs.core.not.call(null,inst_37217);
var state_37262__$1 = (function (){var statearr_37300 = state_37262;
(statearr_37300[(28)] = inst_37211);

(statearr_37300[(16)] = inst_37215__$1);

return statearr_37300;
})();
if(inst_37218){
var statearr_37301_37374 = state_37262__$1;
(statearr_37301_37374[(1)] = (32));

} else {
var statearr_37302_37375 = state_37262__$1;
(statearr_37302_37375[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (44))){
var inst_37238 = (state_37262[(21)]);
var inst_37251 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37238);
var inst_37252 = cljs.core.pr_str.call(null,inst_37251);
var inst_37253 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37252)].join('');
var inst_37254 = figwheel.client.utils.log.call(null,inst_37253);
var state_37262__$1 = state_37262;
var statearr_37303_37376 = state_37262__$1;
(statearr_37303_37376[(2)] = inst_37254);

(statearr_37303_37376[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (6))){
var inst_37156 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
var statearr_37304_37377 = state_37262__$1;
(statearr_37304_37377[(2)] = inst_37156);

(statearr_37304_37377[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (28))){
var inst_37181 = (state_37262[(26)]);
var inst_37208 = (state_37262[(2)]);
var inst_37209 = cljs.core.not_empty.call(null,inst_37181);
var state_37262__$1 = (function (){var statearr_37305 = state_37262;
(statearr_37305[(29)] = inst_37208);

return statearr_37305;
})();
if(cljs.core.truth_(inst_37209)){
var statearr_37306_37378 = state_37262__$1;
(statearr_37306_37378[(1)] = (29));

} else {
var statearr_37307_37379 = state_37262__$1;
(statearr_37307_37379[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (25))){
var inst_37179 = (state_37262[(23)]);
var inst_37195 = (state_37262[(2)]);
var inst_37196 = cljs.core.not_empty.call(null,inst_37179);
var state_37262__$1 = (function (){var statearr_37308 = state_37262;
(statearr_37308[(30)] = inst_37195);

return statearr_37308;
})();
if(cljs.core.truth_(inst_37196)){
var statearr_37309_37380 = state_37262__$1;
(statearr_37309_37380[(1)] = (26));

} else {
var statearr_37310_37381 = state_37262__$1;
(statearr_37310_37381[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (34))){
var inst_37231 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
if(cljs.core.truth_(inst_37231)){
var statearr_37311_37382 = state_37262__$1;
(statearr_37311_37382[(1)] = (38));

} else {
var statearr_37312_37383 = state_37262__$1;
(statearr_37312_37383[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (17))){
var state_37262__$1 = state_37262;
var statearr_37313_37384 = state_37262__$1;
(statearr_37313_37384[(2)] = recompile_dependents);

(statearr_37313_37384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (3))){
var state_37262__$1 = state_37262;
var statearr_37314_37385 = state_37262__$1;
(statearr_37314_37385[(2)] = null);

(statearr_37314_37385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (12))){
var inst_37152 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
var statearr_37315_37386 = state_37262__$1;
(statearr_37315_37386[(2)] = inst_37152);

(statearr_37315_37386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (2))){
var inst_37114 = (state_37262[(13)]);
var inst_37121 = cljs.core.seq.call(null,inst_37114);
var inst_37122 = inst_37121;
var inst_37123 = null;
var inst_37124 = (0);
var inst_37125 = (0);
var state_37262__$1 = (function (){var statearr_37316 = state_37262;
(statearr_37316[(7)] = inst_37123);

(statearr_37316[(8)] = inst_37124);

(statearr_37316[(9)] = inst_37125);

(statearr_37316[(10)] = inst_37122);

return statearr_37316;
})();
var statearr_37317_37387 = state_37262__$1;
(statearr_37317_37387[(2)] = null);

(statearr_37317_37387[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (23))){
var inst_37175 = (state_37262[(19)]);
var inst_37179 = (state_37262[(23)]);
var inst_37178 = (state_37262[(24)]);
var inst_37181 = (state_37262[(26)]);
var inst_37183 = (state_37262[(25)]);
var inst_37186 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37188 = (function (){var all_files = inst_37175;
var res_SINGLEQUOTE_ = inst_37178;
var res = inst_37179;
var files_not_loaded = inst_37181;
var dependencies_that_loaded = inst_37183;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37175,inst_37179,inst_37178,inst_37181,inst_37183,inst_37186,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37187){
var map__37318 = p__37187;
var map__37318__$1 = ((((!((map__37318 == null)))?(((((map__37318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37318):map__37318);
var request_url = cljs.core.get.call(null,map__37318__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37175,inst_37179,inst_37178,inst_37181,inst_37183,inst_37186,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37189 = cljs.core.reverse.call(null,inst_37183);
var inst_37190 = cljs.core.map.call(null,inst_37188,inst_37189);
var inst_37191 = cljs.core.pr_str.call(null,inst_37190);
var inst_37192 = figwheel.client.utils.log.call(null,inst_37191);
var state_37262__$1 = (function (){var statearr_37320 = state_37262;
(statearr_37320[(31)] = inst_37186);

return statearr_37320;
})();
var statearr_37321_37388 = state_37262__$1;
(statearr_37321_37388[(2)] = inst_37192);

(statearr_37321_37388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (35))){
var state_37262__$1 = state_37262;
var statearr_37322_37389 = state_37262__$1;
(statearr_37322_37389[(2)] = true);

(statearr_37322_37389[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (19))){
var inst_37165 = (state_37262[(12)]);
var inst_37171 = figwheel.client.file_reloading.expand_files.call(null,inst_37165);
var state_37262__$1 = state_37262;
var statearr_37323_37390 = state_37262__$1;
(statearr_37323_37390[(2)] = inst_37171);

(statearr_37323_37390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (11))){
var state_37262__$1 = state_37262;
var statearr_37324_37391 = state_37262__$1;
(statearr_37324_37391[(2)] = null);

(statearr_37324_37391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (9))){
var inst_37154 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
var statearr_37325_37392 = state_37262__$1;
(statearr_37325_37392[(2)] = inst_37154);

(statearr_37325_37392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (5))){
var inst_37124 = (state_37262[(8)]);
var inst_37125 = (state_37262[(9)]);
var inst_37127 = (inst_37125 < inst_37124);
var inst_37128 = inst_37127;
var state_37262__$1 = state_37262;
if(cljs.core.truth_(inst_37128)){
var statearr_37326_37393 = state_37262__$1;
(statearr_37326_37393[(1)] = (7));

} else {
var statearr_37327_37394 = state_37262__$1;
(statearr_37327_37394[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (14))){
var inst_37135 = (state_37262[(22)]);
var inst_37144 = cljs.core.first.call(null,inst_37135);
var inst_37145 = figwheel.client.file_reloading.eval_body.call(null,inst_37144,opts);
var inst_37146 = cljs.core.next.call(null,inst_37135);
var inst_37122 = inst_37146;
var inst_37123 = null;
var inst_37124 = (0);
var inst_37125 = (0);
var state_37262__$1 = (function (){var statearr_37328 = state_37262;
(statearr_37328[(7)] = inst_37123);

(statearr_37328[(8)] = inst_37124);

(statearr_37328[(9)] = inst_37125);

(statearr_37328[(10)] = inst_37122);

(statearr_37328[(32)] = inst_37145);

return statearr_37328;
})();
var statearr_37329_37395 = state_37262__$1;
(statearr_37329_37395[(2)] = null);

(statearr_37329_37395[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (45))){
var state_37262__$1 = state_37262;
var statearr_37330_37396 = state_37262__$1;
(statearr_37330_37396[(2)] = null);

(statearr_37330_37396[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (26))){
var inst_37175 = (state_37262[(19)]);
var inst_37179 = (state_37262[(23)]);
var inst_37178 = (state_37262[(24)]);
var inst_37181 = (state_37262[(26)]);
var inst_37183 = (state_37262[(25)]);
var inst_37198 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37200 = (function (){var all_files = inst_37175;
var res_SINGLEQUOTE_ = inst_37178;
var res = inst_37179;
var files_not_loaded = inst_37181;
var dependencies_that_loaded = inst_37183;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37175,inst_37179,inst_37178,inst_37181,inst_37183,inst_37198,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37199){
var map__37331 = p__37199;
var map__37331__$1 = ((((!((map__37331 == null)))?(((((map__37331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37331):map__37331);
var namespace = cljs.core.get.call(null,map__37331__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37331__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37175,inst_37179,inst_37178,inst_37181,inst_37183,inst_37198,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37201 = cljs.core.map.call(null,inst_37200,inst_37179);
var inst_37202 = cljs.core.pr_str.call(null,inst_37201);
var inst_37203 = figwheel.client.utils.log.call(null,inst_37202);
var inst_37204 = (function (){var all_files = inst_37175;
var res_SINGLEQUOTE_ = inst_37178;
var res = inst_37179;
var files_not_loaded = inst_37181;
var dependencies_that_loaded = inst_37183;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37175,inst_37179,inst_37178,inst_37181,inst_37183,inst_37198,inst_37200,inst_37201,inst_37202,inst_37203,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37175,inst_37179,inst_37178,inst_37181,inst_37183,inst_37198,inst_37200,inst_37201,inst_37202,inst_37203,state_val_37263,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37205 = setTimeout(inst_37204,(10));
var state_37262__$1 = (function (){var statearr_37333 = state_37262;
(statearr_37333[(33)] = inst_37198);

(statearr_37333[(34)] = inst_37203);

return statearr_37333;
})();
var statearr_37334_37397 = state_37262__$1;
(statearr_37334_37397[(2)] = inst_37205);

(statearr_37334_37397[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (16))){
var state_37262__$1 = state_37262;
var statearr_37335_37398 = state_37262__$1;
(statearr_37335_37398[(2)] = reload_dependents);

(statearr_37335_37398[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (38))){
var inst_37215 = (state_37262[(16)]);
var inst_37233 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37215);
var state_37262__$1 = state_37262;
var statearr_37336_37399 = state_37262__$1;
(statearr_37336_37399[(2)] = inst_37233);

(statearr_37336_37399[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (30))){
var state_37262__$1 = state_37262;
var statearr_37337_37400 = state_37262__$1;
(statearr_37337_37400[(2)] = null);

(statearr_37337_37400[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (10))){
var inst_37135 = (state_37262[(22)]);
var inst_37137 = cljs.core.chunked_seq_QMARK_.call(null,inst_37135);
var state_37262__$1 = state_37262;
if(inst_37137){
var statearr_37338_37401 = state_37262__$1;
(statearr_37338_37401[(1)] = (13));

} else {
var statearr_37339_37402 = state_37262__$1;
(statearr_37339_37402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (18))){
var inst_37169 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
if(cljs.core.truth_(inst_37169)){
var statearr_37340_37403 = state_37262__$1;
(statearr_37340_37403[(1)] = (19));

} else {
var statearr_37341_37404 = state_37262__$1;
(statearr_37341_37404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (42))){
var state_37262__$1 = state_37262;
var statearr_37342_37405 = state_37262__$1;
(statearr_37342_37405[(2)] = null);

(statearr_37342_37405[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (37))){
var inst_37228 = (state_37262[(2)]);
var state_37262__$1 = state_37262;
var statearr_37343_37406 = state_37262__$1;
(statearr_37343_37406[(2)] = inst_37228);

(statearr_37343_37406[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37263 === (8))){
var inst_37135 = (state_37262[(22)]);
var inst_37122 = (state_37262[(10)]);
var inst_37135__$1 = cljs.core.seq.call(null,inst_37122);
var state_37262__$1 = (function (){var statearr_37344 = state_37262;
(statearr_37344[(22)] = inst_37135__$1);

return statearr_37344;
})();
if(inst_37135__$1){
var statearr_37345_37407 = state_37262__$1;
(statearr_37345_37407[(1)] = (10));

} else {
var statearr_37346_37408 = state_37262__$1;
(statearr_37346_37408[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33787__auto__,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33788__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33788__auto____0 = (function (){
var statearr_37347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37347[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33788__auto__);

(statearr_37347[(1)] = (1));

return statearr_37347;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33788__auto____1 = (function (state_37262){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_37262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e37348){if((e37348 instanceof Object)){
var ex__33791__auto__ = e37348;
var statearr_37349_37409 = state_37262;
(statearr_37349_37409[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37410 = state_37262;
state_37262 = G__37410;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33788__auto__ = function(state_37262){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33788__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33788__auto____1.call(this,state_37262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33788__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33788__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33880__auto__ = (function (){var statearr_37350 = f__33879__auto__.call(null);
(statearr_37350[(6)] = c__33878__auto__);

return statearr_37350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto__,map__37107,map__37107__$1,opts,before_jsload,on_jsload,reload_dependents,map__37108,map__37108__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33878__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37413,link){
var map__37414 = p__37413;
var map__37414__$1 = ((((!((map__37414 == null)))?(((((map__37414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37414):map__37414);
var file = cljs.core.get.call(null,map__37414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__37414,map__37414__$1,file){
return (function (p1__37411_SHARP_,p2__37412_SHARP_){
if(cljs.core._EQ_.call(null,p1__37411_SHARP_,p2__37412_SHARP_)){
return p1__37411_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__37414,map__37414__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37417){
var map__37418 = p__37417;
var map__37418__$1 = ((((!((map__37418 == null)))?(((((map__37418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37418):map__37418);
var match_length = cljs.core.get.call(null,map__37418__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37418__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37416_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37416_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37420_SHARP_,p2__37421_SHARP_){
return cljs.core.assoc.call(null,p1__37420_SHARP_,cljs.core.get.call(null,p2__37421_SHARP_,key),p2__37421_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37422 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37422);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37422);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37423,p__37424){
var map__37425 = p__37423;
var map__37425__$1 = ((((!((map__37425 == null)))?(((((map__37425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37425):map__37425);
var on_cssload = cljs.core.get.call(null,map__37425__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37426 = p__37424;
var map__37426__$1 = ((((!((map__37426 == null)))?(((((map__37426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37426):map__37426);
var files_msg = map__37426__$1;
var files = cljs.core.get.call(null,map__37426__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1535318453444
