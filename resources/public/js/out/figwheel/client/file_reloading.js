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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34924_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34924_SHARP_));
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
var seq__34925 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34926 = null;
var count__34927 = (0);
var i__34928 = (0);
while(true){
if((i__34928 < count__34927)){
var n = cljs.core._nth.call(null,chunk__34926,i__34928);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34929 = seq__34925;
var G__34930 = chunk__34926;
var G__34931 = count__34927;
var G__34932 = (i__34928 + (1));
seq__34925 = G__34929;
chunk__34926 = G__34930;
count__34927 = G__34931;
i__34928 = G__34932;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34925);
if(temp__5457__auto__){
var seq__34925__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34925__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__34925__$1);
var G__34933 = cljs.core.chunk_rest.call(null,seq__34925__$1);
var G__34934 = c__4351__auto__;
var G__34935 = cljs.core.count.call(null,c__4351__auto__);
var G__34936 = (0);
seq__34925 = G__34933;
chunk__34926 = G__34934;
count__34927 = G__34935;
i__34928 = G__34936;
continue;
} else {
var n = cljs.core.first.call(null,seq__34925__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34937 = cljs.core.next.call(null,seq__34925__$1);
var G__34938 = null;
var G__34939 = (0);
var G__34940 = (0);
seq__34925 = G__34937;
chunk__34926 = G__34938;
count__34927 = G__34939;
i__34928 = G__34940;
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
return cljs.core.some.call(null,(function (p__34941){
var vec__34942 = p__34941;
var _ = cljs.core.nth.call(null,vec__34942,(0),null);
var v = cljs.core.nth.call(null,vec__34942,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__34945){
var vec__34946 = p__34945;
var k = cljs.core.nth.call(null,vec__34946,(0),null);
var v = cljs.core.nth.call(null,vec__34946,(1),null);
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

var seq__34958_34966 = cljs.core.seq.call(null,deps);
var chunk__34959_34967 = null;
var count__34960_34968 = (0);
var i__34961_34969 = (0);
while(true){
if((i__34961_34969 < count__34960_34968)){
var dep_34970 = cljs.core._nth.call(null,chunk__34959_34967,i__34961_34969);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_34970;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34970));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34970,(depth + (1)),state);
} else {
}


var G__34971 = seq__34958_34966;
var G__34972 = chunk__34959_34967;
var G__34973 = count__34960_34968;
var G__34974 = (i__34961_34969 + (1));
seq__34958_34966 = G__34971;
chunk__34959_34967 = G__34972;
count__34960_34968 = G__34973;
i__34961_34969 = G__34974;
continue;
} else {
var temp__5457__auto___34975 = cljs.core.seq.call(null,seq__34958_34966);
if(temp__5457__auto___34975){
var seq__34958_34976__$1 = temp__5457__auto___34975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34958_34976__$1)){
var c__4351__auto___34977 = cljs.core.chunk_first.call(null,seq__34958_34976__$1);
var G__34978 = cljs.core.chunk_rest.call(null,seq__34958_34976__$1);
var G__34979 = c__4351__auto___34977;
var G__34980 = cljs.core.count.call(null,c__4351__auto___34977);
var G__34981 = (0);
seq__34958_34966 = G__34978;
chunk__34959_34967 = G__34979;
count__34960_34968 = G__34980;
i__34961_34969 = G__34981;
continue;
} else {
var dep_34982 = cljs.core.first.call(null,seq__34958_34976__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_34982;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34982));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34982,(depth + (1)),state);
} else {
}


var G__34983 = cljs.core.next.call(null,seq__34958_34976__$1);
var G__34984 = null;
var G__34985 = (0);
var G__34986 = (0);
seq__34958_34966 = G__34983;
chunk__34959_34967 = G__34984;
count__34960_34968 = G__34985;
i__34961_34969 = G__34986;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34962){
var vec__34963 = p__34962;
var seq__34964 = cljs.core.seq.call(null,vec__34963);
var first__34965 = cljs.core.first.call(null,seq__34964);
var seq__34964__$1 = cljs.core.next.call(null,seq__34964);
var x = first__34965;
var xs = seq__34964__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34963,seq__34964,first__34965,seq__34964__$1,x,xs,get_deps__$1){
return (function (p1__34949_SHARP_){
return clojure.set.difference.call(null,p1__34949_SHARP_,x);
});})(vec__34963,seq__34964,first__34965,seq__34964__$1,x,xs,get_deps__$1))
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
var seq__34987 = cljs.core.seq.call(null,provides);
var chunk__34988 = null;
var count__34989 = (0);
var i__34990 = (0);
while(true){
if((i__34990 < count__34989)){
var prov = cljs.core._nth.call(null,chunk__34988,i__34990);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34991_34999 = cljs.core.seq.call(null,requires);
var chunk__34992_35000 = null;
var count__34993_35001 = (0);
var i__34994_35002 = (0);
while(true){
if((i__34994_35002 < count__34993_35001)){
var req_35003 = cljs.core._nth.call(null,chunk__34992_35000,i__34994_35002);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35003,prov);


var G__35004 = seq__34991_34999;
var G__35005 = chunk__34992_35000;
var G__35006 = count__34993_35001;
var G__35007 = (i__34994_35002 + (1));
seq__34991_34999 = G__35004;
chunk__34992_35000 = G__35005;
count__34993_35001 = G__35006;
i__34994_35002 = G__35007;
continue;
} else {
var temp__5457__auto___35008 = cljs.core.seq.call(null,seq__34991_34999);
if(temp__5457__auto___35008){
var seq__34991_35009__$1 = temp__5457__auto___35008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34991_35009__$1)){
var c__4351__auto___35010 = cljs.core.chunk_first.call(null,seq__34991_35009__$1);
var G__35011 = cljs.core.chunk_rest.call(null,seq__34991_35009__$1);
var G__35012 = c__4351__auto___35010;
var G__35013 = cljs.core.count.call(null,c__4351__auto___35010);
var G__35014 = (0);
seq__34991_34999 = G__35011;
chunk__34992_35000 = G__35012;
count__34993_35001 = G__35013;
i__34994_35002 = G__35014;
continue;
} else {
var req_35015 = cljs.core.first.call(null,seq__34991_35009__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35015,prov);


var G__35016 = cljs.core.next.call(null,seq__34991_35009__$1);
var G__35017 = null;
var G__35018 = (0);
var G__35019 = (0);
seq__34991_34999 = G__35016;
chunk__34992_35000 = G__35017;
count__34993_35001 = G__35018;
i__34994_35002 = G__35019;
continue;
}
} else {
}
}
break;
}


var G__35020 = seq__34987;
var G__35021 = chunk__34988;
var G__35022 = count__34989;
var G__35023 = (i__34990 + (1));
seq__34987 = G__35020;
chunk__34988 = G__35021;
count__34989 = G__35022;
i__34990 = G__35023;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34987);
if(temp__5457__auto__){
var seq__34987__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34987__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__34987__$1);
var G__35024 = cljs.core.chunk_rest.call(null,seq__34987__$1);
var G__35025 = c__4351__auto__;
var G__35026 = cljs.core.count.call(null,c__4351__auto__);
var G__35027 = (0);
seq__34987 = G__35024;
chunk__34988 = G__35025;
count__34989 = G__35026;
i__34990 = G__35027;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34987__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34995_35028 = cljs.core.seq.call(null,requires);
var chunk__34996_35029 = null;
var count__34997_35030 = (0);
var i__34998_35031 = (0);
while(true){
if((i__34998_35031 < count__34997_35030)){
var req_35032 = cljs.core._nth.call(null,chunk__34996_35029,i__34998_35031);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35032,prov);


var G__35033 = seq__34995_35028;
var G__35034 = chunk__34996_35029;
var G__35035 = count__34997_35030;
var G__35036 = (i__34998_35031 + (1));
seq__34995_35028 = G__35033;
chunk__34996_35029 = G__35034;
count__34997_35030 = G__35035;
i__34998_35031 = G__35036;
continue;
} else {
var temp__5457__auto___35037__$1 = cljs.core.seq.call(null,seq__34995_35028);
if(temp__5457__auto___35037__$1){
var seq__34995_35038__$1 = temp__5457__auto___35037__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34995_35038__$1)){
var c__4351__auto___35039 = cljs.core.chunk_first.call(null,seq__34995_35038__$1);
var G__35040 = cljs.core.chunk_rest.call(null,seq__34995_35038__$1);
var G__35041 = c__4351__auto___35039;
var G__35042 = cljs.core.count.call(null,c__4351__auto___35039);
var G__35043 = (0);
seq__34995_35028 = G__35040;
chunk__34996_35029 = G__35041;
count__34997_35030 = G__35042;
i__34998_35031 = G__35043;
continue;
} else {
var req_35044 = cljs.core.first.call(null,seq__34995_35038__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35044,prov);


var G__35045 = cljs.core.next.call(null,seq__34995_35038__$1);
var G__35046 = null;
var G__35047 = (0);
var G__35048 = (0);
seq__34995_35028 = G__35045;
chunk__34996_35029 = G__35046;
count__34997_35030 = G__35047;
i__34998_35031 = G__35048;
continue;
}
} else {
}
}
break;
}


var G__35049 = cljs.core.next.call(null,seq__34987__$1);
var G__35050 = null;
var G__35051 = (0);
var G__35052 = (0);
seq__34987 = G__35049;
chunk__34988 = G__35050;
count__34989 = G__35051;
i__34990 = G__35052;
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
var seq__35053_35057 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35054_35058 = null;
var count__35055_35059 = (0);
var i__35056_35060 = (0);
while(true){
if((i__35056_35060 < count__35055_35059)){
var ns_35061 = cljs.core._nth.call(null,chunk__35054_35058,i__35056_35060);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35061);


var G__35062 = seq__35053_35057;
var G__35063 = chunk__35054_35058;
var G__35064 = count__35055_35059;
var G__35065 = (i__35056_35060 + (1));
seq__35053_35057 = G__35062;
chunk__35054_35058 = G__35063;
count__35055_35059 = G__35064;
i__35056_35060 = G__35065;
continue;
} else {
var temp__5457__auto___35066 = cljs.core.seq.call(null,seq__35053_35057);
if(temp__5457__auto___35066){
var seq__35053_35067__$1 = temp__5457__auto___35066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35053_35067__$1)){
var c__4351__auto___35068 = cljs.core.chunk_first.call(null,seq__35053_35067__$1);
var G__35069 = cljs.core.chunk_rest.call(null,seq__35053_35067__$1);
var G__35070 = c__4351__auto___35068;
var G__35071 = cljs.core.count.call(null,c__4351__auto___35068);
var G__35072 = (0);
seq__35053_35057 = G__35069;
chunk__35054_35058 = G__35070;
count__35055_35059 = G__35071;
i__35056_35060 = G__35072;
continue;
} else {
var ns_35073 = cljs.core.first.call(null,seq__35053_35067__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35073);


var G__35074 = cljs.core.next.call(null,seq__35053_35067__$1);
var G__35075 = null;
var G__35076 = (0);
var G__35077 = (0);
seq__35053_35057 = G__35074;
chunk__35054_35058 = G__35075;
count__35055_35059 = G__35076;
i__35056_35060 = G__35077;
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
var G__35078__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35079__i = 0, G__35079__a = new Array(arguments.length -  0);
while (G__35079__i < G__35079__a.length) {G__35079__a[G__35079__i] = arguments[G__35079__i + 0]; ++G__35079__i;}
  args = new cljs.core.IndexedSeq(G__35079__a,0,null);
} 
return G__35078__delegate.call(this,args);};
G__35078.cljs$lang$maxFixedArity = 0;
G__35078.cljs$lang$applyTo = (function (arglist__35080){
var args = cljs.core.seq(arglist__35080);
return G__35078__delegate(args);
});
G__35078.cljs$core$IFn$_invoke$arity$variadic = G__35078__delegate;
return G__35078;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__35081_SHARP_,p2__35082_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35081_SHARP_)].join('')),p2__35082_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__35083_SHARP_,p2__35084_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35083_SHARP_)].join(''),p2__35084_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35085 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35085.addCallback(((function (G__35085){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35085))
);

G__35085.addErrback(((function (G__35085){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35085))
);

return G__35085;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35086){if((e35086 instanceof Error)){
var e = e35086;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35086;

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
}catch (e35087){if((e35087 instanceof Error)){
var e = e35087;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35087;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35088 = cljs.core._EQ_;
var expr__35089 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35088.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35089))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35088.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35089))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35088.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35089))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35088,expr__35089){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35088,expr__35089))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35091,callback){
var map__35092 = p__35091;
var map__35092__$1 = ((((!((map__35092 == null)))?(((((map__35092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35092):map__35092);
var file_msg = map__35092__$1;
var request_url = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35092,map__35092__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35092,map__35092__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto__){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto__){
return (function (state_35130){
var state_val_35131 = (state_35130[(1)]);
if((state_val_35131 === (7))){
var inst_35126 = (state_35130[(2)]);
var state_35130__$1 = state_35130;
var statearr_35132_35158 = state_35130__$1;
(statearr_35132_35158[(2)] = inst_35126);

(statearr_35132_35158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (1))){
var state_35130__$1 = state_35130;
var statearr_35133_35159 = state_35130__$1;
(statearr_35133_35159[(2)] = null);

(statearr_35133_35159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (4))){
var inst_35096 = (state_35130[(7)]);
var inst_35096__$1 = (state_35130[(2)]);
var state_35130__$1 = (function (){var statearr_35134 = state_35130;
(statearr_35134[(7)] = inst_35096__$1);

return statearr_35134;
})();
if(cljs.core.truth_(inst_35096__$1)){
var statearr_35135_35160 = state_35130__$1;
(statearr_35135_35160[(1)] = (5));

} else {
var statearr_35136_35161 = state_35130__$1;
(statearr_35136_35161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (15))){
var inst_35109 = (state_35130[(8)]);
var inst_35111 = (state_35130[(9)]);
var inst_35113 = inst_35111.call(null,inst_35109);
var state_35130__$1 = state_35130;
var statearr_35137_35162 = state_35130__$1;
(statearr_35137_35162[(2)] = inst_35113);

(statearr_35137_35162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (13))){
var inst_35120 = (state_35130[(2)]);
var state_35130__$1 = state_35130;
var statearr_35138_35163 = state_35130__$1;
(statearr_35138_35163[(2)] = inst_35120);

(statearr_35138_35163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (6))){
var state_35130__$1 = state_35130;
var statearr_35139_35164 = state_35130__$1;
(statearr_35139_35164[(2)] = null);

(statearr_35139_35164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (17))){
var inst_35117 = (state_35130[(2)]);
var state_35130__$1 = state_35130;
var statearr_35140_35165 = state_35130__$1;
(statearr_35140_35165[(2)] = inst_35117);

(statearr_35140_35165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (3))){
var inst_35128 = (state_35130[(2)]);
var state_35130__$1 = state_35130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35130__$1,inst_35128);
} else {
if((state_val_35131 === (12))){
var state_35130__$1 = state_35130;
var statearr_35141_35166 = state_35130__$1;
(statearr_35141_35166[(2)] = null);

(statearr_35141_35166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (2))){
var state_35130__$1 = state_35130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35130__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35131 === (11))){
var inst_35101 = (state_35130[(10)]);
var inst_35107 = figwheel.client.file_reloading.blocking_load.call(null,inst_35101);
var state_35130__$1 = state_35130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35130__$1,(14),inst_35107);
} else {
if((state_val_35131 === (9))){
var inst_35101 = (state_35130[(10)]);
var state_35130__$1 = state_35130;
if(cljs.core.truth_(inst_35101)){
var statearr_35142_35167 = state_35130__$1;
(statearr_35142_35167[(1)] = (11));

} else {
var statearr_35143_35168 = state_35130__$1;
(statearr_35143_35168[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (5))){
var inst_35102 = (state_35130[(11)]);
var inst_35096 = (state_35130[(7)]);
var inst_35101 = cljs.core.nth.call(null,inst_35096,(0),null);
var inst_35102__$1 = cljs.core.nth.call(null,inst_35096,(1),null);
var state_35130__$1 = (function (){var statearr_35144 = state_35130;
(statearr_35144[(11)] = inst_35102__$1);

(statearr_35144[(10)] = inst_35101);

return statearr_35144;
})();
if(cljs.core.truth_(inst_35102__$1)){
var statearr_35145_35169 = state_35130__$1;
(statearr_35145_35169[(1)] = (8));

} else {
var statearr_35146_35170 = state_35130__$1;
(statearr_35146_35170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (14))){
var inst_35111 = (state_35130[(9)]);
var inst_35101 = (state_35130[(10)]);
var inst_35109 = (state_35130[(2)]);
var inst_35110 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35111__$1 = cljs.core.get.call(null,inst_35110,inst_35101);
var state_35130__$1 = (function (){var statearr_35147 = state_35130;
(statearr_35147[(8)] = inst_35109);

(statearr_35147[(9)] = inst_35111__$1);

return statearr_35147;
})();
if(cljs.core.truth_(inst_35111__$1)){
var statearr_35148_35171 = state_35130__$1;
(statearr_35148_35171[(1)] = (15));

} else {
var statearr_35149_35172 = state_35130__$1;
(statearr_35149_35172[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (16))){
var inst_35109 = (state_35130[(8)]);
var inst_35115 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35109);
var state_35130__$1 = state_35130;
var statearr_35150_35173 = state_35130__$1;
(statearr_35150_35173[(2)] = inst_35115);

(statearr_35150_35173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (10))){
var inst_35122 = (state_35130[(2)]);
var state_35130__$1 = (function (){var statearr_35151 = state_35130;
(statearr_35151[(12)] = inst_35122);

return statearr_35151;
})();
var statearr_35152_35174 = state_35130__$1;
(statearr_35152_35174[(2)] = null);

(statearr_35152_35174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35131 === (8))){
var inst_35102 = (state_35130[(11)]);
var inst_35104 = eval(inst_35102);
var state_35130__$1 = state_35130;
var statearr_35153_35175 = state_35130__$1;
(statearr_35153_35175[(2)] = inst_35104);

(statearr_35153_35175[(1)] = (10));


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
});})(c__26259__auto__))
;
return ((function (switch__26100__auto__,c__26259__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26101__auto__ = null;
var figwheel$client$file_reloading$state_machine__26101__auto____0 = (function (){
var statearr_35154 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35154[(0)] = figwheel$client$file_reloading$state_machine__26101__auto__);

(statearr_35154[(1)] = (1));

return statearr_35154;
});
var figwheel$client$file_reloading$state_machine__26101__auto____1 = (function (state_35130){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_35130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e35155){if((e35155 instanceof Object)){
var ex__26104__auto__ = e35155;
var statearr_35156_35176 = state_35130;
(statearr_35156_35176[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35177 = state_35130;
state_35130 = G__35177;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26101__auto__ = function(state_35130){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26101__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26101__auto____1.call(this,state_35130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26101__auto____0;
figwheel$client$file_reloading$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26101__auto____1;
return figwheel$client$file_reloading$state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto__))
})();
var state__26261__auto__ = (function (){var statearr_35157 = f__26260__auto__.call(null);
(statearr_35157[(6)] = c__26259__auto__);

return statearr_35157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto__))
);

return c__26259__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35179 = arguments.length;
switch (G__35179) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35181,callback){
var map__35182 = p__35181;
var map__35182__$1 = ((((!((map__35182 == null)))?(((((map__35182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35182):map__35182);
var file_msg = map__35182__$1;
var namespace = cljs.core.get.call(null,map__35182__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35182,map__35182__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35182,map__35182__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35184){
var map__35185 = p__35184;
var map__35185__$1 = ((((!((map__35185 == null)))?(((((map__35185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35185):map__35185);
var file_msg = map__35185__$1;
var namespace = cljs.core.get.call(null,map__35185__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35187){
var map__35188 = p__35187;
var map__35188__$1 = ((((!((map__35188 == null)))?(((((map__35188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35188):map__35188);
var file_msg = map__35188__$1;
var namespace = cljs.core.get.call(null,map__35188__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35190,callback){
var map__35191 = p__35190;
var map__35191__$1 = ((((!((map__35191 == null)))?(((((map__35191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35191):map__35191);
var file_msg = map__35191__$1;
var request_url = cljs.core.get.call(null,map__35191__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35191__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26259__auto___35241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___35241,out){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___35241,out){
return (function (state_35226){
var state_val_35227 = (state_35226[(1)]);
if((state_val_35227 === (1))){
var inst_35200 = cljs.core.seq.call(null,files);
var inst_35201 = cljs.core.first.call(null,inst_35200);
var inst_35202 = cljs.core.next.call(null,inst_35200);
var inst_35203 = files;
var state_35226__$1 = (function (){var statearr_35228 = state_35226;
(statearr_35228[(7)] = inst_35202);

(statearr_35228[(8)] = inst_35201);

(statearr_35228[(9)] = inst_35203);

return statearr_35228;
})();
var statearr_35229_35242 = state_35226__$1;
(statearr_35229_35242[(2)] = null);

(statearr_35229_35242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (2))){
var inst_35209 = (state_35226[(10)]);
var inst_35203 = (state_35226[(9)]);
var inst_35208 = cljs.core.seq.call(null,inst_35203);
var inst_35209__$1 = cljs.core.first.call(null,inst_35208);
var inst_35210 = cljs.core.next.call(null,inst_35208);
var inst_35211 = (inst_35209__$1 == null);
var inst_35212 = cljs.core.not.call(null,inst_35211);
var state_35226__$1 = (function (){var statearr_35230 = state_35226;
(statearr_35230[(11)] = inst_35210);

(statearr_35230[(10)] = inst_35209__$1);

return statearr_35230;
})();
if(inst_35212){
var statearr_35231_35243 = state_35226__$1;
(statearr_35231_35243[(1)] = (4));

} else {
var statearr_35232_35244 = state_35226__$1;
(statearr_35232_35244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (3))){
var inst_35224 = (state_35226[(2)]);
var state_35226__$1 = state_35226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35226__$1,inst_35224);
} else {
if((state_val_35227 === (4))){
var inst_35209 = (state_35226[(10)]);
var inst_35214 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35209);
var state_35226__$1 = state_35226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35226__$1,(7),inst_35214);
} else {
if((state_val_35227 === (5))){
var inst_35220 = cljs.core.async.close_BANG_.call(null,out);
var state_35226__$1 = state_35226;
var statearr_35233_35245 = state_35226__$1;
(statearr_35233_35245[(2)] = inst_35220);

(statearr_35233_35245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (6))){
var inst_35222 = (state_35226[(2)]);
var state_35226__$1 = state_35226;
var statearr_35234_35246 = state_35226__$1;
(statearr_35234_35246[(2)] = inst_35222);

(statearr_35234_35246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (7))){
var inst_35210 = (state_35226[(11)]);
var inst_35216 = (state_35226[(2)]);
var inst_35217 = cljs.core.async.put_BANG_.call(null,out,inst_35216);
var inst_35203 = inst_35210;
var state_35226__$1 = (function (){var statearr_35235 = state_35226;
(statearr_35235[(12)] = inst_35217);

(statearr_35235[(9)] = inst_35203);

return statearr_35235;
})();
var statearr_35236_35247 = state_35226__$1;
(statearr_35236_35247[(2)] = null);

(statearr_35236_35247[(1)] = (2));


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
});})(c__26259__auto___35241,out))
;
return ((function (switch__26100__auto__,c__26259__auto___35241,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26101__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26101__auto____0 = (function (){
var statearr_35237 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35237[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26101__auto__);

(statearr_35237[(1)] = (1));

return statearr_35237;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26101__auto____1 = (function (state_35226){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_35226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e35238){if((e35238 instanceof Object)){
var ex__26104__auto__ = e35238;
var statearr_35239_35248 = state_35226;
(statearr_35239_35248[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35249 = state_35226;
state_35226 = G__35249;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26101__auto__ = function(state_35226){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26101__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26101__auto____1.call(this,state_35226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26101__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26101__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___35241,out))
})();
var state__26261__auto__ = (function (){var statearr_35240 = f__26260__auto__.call(null);
(statearr_35240[(6)] = c__26259__auto___35241);

return statearr_35240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___35241,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35250,opts){
var map__35251 = p__35250;
var map__35251__$1 = ((((!((map__35251 == null)))?(((((map__35251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35251):map__35251);
var eval_body = cljs.core.get.call(null,map__35251__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35251__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35253){var e = e35253;
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
return (function (p1__35254_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35254_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35255){
var vec__35256 = p__35255;
var k = cljs.core.nth.call(null,vec__35256,(0),null);
var v = cljs.core.nth.call(null,vec__35256,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35259){
var vec__35260 = p__35259;
var k = cljs.core.nth.call(null,vec__35260,(0),null);
var v = cljs.core.nth.call(null,vec__35260,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35266,p__35267){
var map__35268 = p__35266;
var map__35268__$1 = ((((!((map__35268 == null)))?(((((map__35268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35268):map__35268);
var opts = map__35268__$1;
var before_jsload = cljs.core.get.call(null,map__35268__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35268__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35268__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35269 = p__35267;
var map__35269__$1 = ((((!((map__35269 == null)))?(((((map__35269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35269):map__35269);
var msg = map__35269__$1;
var files = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35423){
var state_val_35424 = (state_35423[(1)]);
if((state_val_35424 === (7))){
var inst_35286 = (state_35423[(7)]);
var inst_35284 = (state_35423[(8)]);
var inst_35285 = (state_35423[(9)]);
var inst_35283 = (state_35423[(10)]);
var inst_35291 = cljs.core._nth.call(null,inst_35284,inst_35286);
var inst_35292 = figwheel.client.file_reloading.eval_body.call(null,inst_35291,opts);
var inst_35293 = (inst_35286 + (1));
var tmp35425 = inst_35284;
var tmp35426 = inst_35285;
var tmp35427 = inst_35283;
var inst_35283__$1 = tmp35427;
var inst_35284__$1 = tmp35425;
var inst_35285__$1 = tmp35426;
var inst_35286__$1 = inst_35293;
var state_35423__$1 = (function (){var statearr_35428 = state_35423;
(statearr_35428[(7)] = inst_35286__$1);

(statearr_35428[(8)] = inst_35284__$1);

(statearr_35428[(11)] = inst_35292);

(statearr_35428[(9)] = inst_35285__$1);

(statearr_35428[(10)] = inst_35283__$1);

return statearr_35428;
})();
var statearr_35429_35512 = state_35423__$1;
(statearr_35429_35512[(2)] = null);

(statearr_35429_35512[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (20))){
var inst_35326 = (state_35423[(12)]);
var inst_35334 = figwheel.client.file_reloading.sort_files.call(null,inst_35326);
var state_35423__$1 = state_35423;
var statearr_35430_35513 = state_35423__$1;
(statearr_35430_35513[(2)] = inst_35334);

(statearr_35430_35513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (27))){
var state_35423__$1 = state_35423;
var statearr_35431_35514 = state_35423__$1;
(statearr_35431_35514[(2)] = null);

(statearr_35431_35514[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (1))){
var inst_35275 = (state_35423[(13)]);
var inst_35272 = before_jsload.call(null,files);
var inst_35273 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35274 = (function (){return ((function (inst_35275,inst_35272,inst_35273,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35263_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35263_SHARP_);
});
;})(inst_35275,inst_35272,inst_35273,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35275__$1 = cljs.core.filter.call(null,inst_35274,files);
var inst_35276 = cljs.core.not_empty.call(null,inst_35275__$1);
var state_35423__$1 = (function (){var statearr_35432 = state_35423;
(statearr_35432[(14)] = inst_35273);

(statearr_35432[(13)] = inst_35275__$1);

(statearr_35432[(15)] = inst_35272);

return statearr_35432;
})();
if(cljs.core.truth_(inst_35276)){
var statearr_35433_35515 = state_35423__$1;
(statearr_35433_35515[(1)] = (2));

} else {
var statearr_35434_35516 = state_35423__$1;
(statearr_35434_35516[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (24))){
var state_35423__$1 = state_35423;
var statearr_35435_35517 = state_35423__$1;
(statearr_35435_35517[(2)] = null);

(statearr_35435_35517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (39))){
var inst_35376 = (state_35423[(16)]);
var state_35423__$1 = state_35423;
var statearr_35436_35518 = state_35423__$1;
(statearr_35436_35518[(2)] = inst_35376);

(statearr_35436_35518[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (46))){
var inst_35418 = (state_35423[(2)]);
var state_35423__$1 = state_35423;
var statearr_35437_35519 = state_35423__$1;
(statearr_35437_35519[(2)] = inst_35418);

(statearr_35437_35519[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (4))){
var inst_35320 = (state_35423[(2)]);
var inst_35321 = cljs.core.List.EMPTY;
var inst_35322 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35321);
var inst_35323 = (function (){return ((function (inst_35320,inst_35321,inst_35322,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35264_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35264_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35264_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35264_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_35320,inst_35321,inst_35322,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35324 = cljs.core.filter.call(null,inst_35323,files);
var inst_35325 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35326 = cljs.core.concat.call(null,inst_35324,inst_35325);
var state_35423__$1 = (function (){var statearr_35438 = state_35423;
(statearr_35438[(17)] = inst_35320);

(statearr_35438[(12)] = inst_35326);

(statearr_35438[(18)] = inst_35322);

return statearr_35438;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35439_35520 = state_35423__$1;
(statearr_35439_35520[(1)] = (16));

} else {
var statearr_35440_35521 = state_35423__$1;
(statearr_35440_35521[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (15))){
var inst_35310 = (state_35423[(2)]);
var state_35423__$1 = state_35423;
var statearr_35441_35522 = state_35423__$1;
(statearr_35441_35522[(2)] = inst_35310);

(statearr_35441_35522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (21))){
var inst_35336 = (state_35423[(19)]);
var inst_35336__$1 = (state_35423[(2)]);
var inst_35337 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35336__$1);
var state_35423__$1 = (function (){var statearr_35442 = state_35423;
(statearr_35442[(19)] = inst_35336__$1);

return statearr_35442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35423__$1,(22),inst_35337);
} else {
if((state_val_35424 === (31))){
var inst_35421 = (state_35423[(2)]);
var state_35423__$1 = state_35423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35423__$1,inst_35421);
} else {
if((state_val_35424 === (32))){
var inst_35376 = (state_35423[(16)]);
var inst_35381 = inst_35376.cljs$lang$protocol_mask$partition0$;
var inst_35382 = (inst_35381 & (64));
var inst_35383 = inst_35376.cljs$core$ISeq$;
var inst_35384 = (cljs.core.PROTOCOL_SENTINEL === inst_35383);
var inst_35385 = ((inst_35382) || (inst_35384));
var state_35423__$1 = state_35423;
if(cljs.core.truth_(inst_35385)){
var statearr_35443_35523 = state_35423__$1;
(statearr_35443_35523[(1)] = (35));

} else {
var statearr_35444_35524 = state_35423__$1;
(statearr_35444_35524[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (40))){
var inst_35398 = (state_35423[(20)]);
var inst_35397 = (state_35423[(2)]);
var inst_35398__$1 = cljs.core.get.call(null,inst_35397,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35399 = cljs.core.get.call(null,inst_35397,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35400 = cljs.core.not_empty.call(null,inst_35398__$1);
var state_35423__$1 = (function (){var statearr_35445 = state_35423;
(statearr_35445[(21)] = inst_35399);

(statearr_35445[(20)] = inst_35398__$1);

return statearr_35445;
})();
if(cljs.core.truth_(inst_35400)){
var statearr_35446_35525 = state_35423__$1;
(statearr_35446_35525[(1)] = (41));

} else {
var statearr_35447_35526 = state_35423__$1;
(statearr_35447_35526[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (33))){
var state_35423__$1 = state_35423;
var statearr_35448_35527 = state_35423__$1;
(statearr_35448_35527[(2)] = false);

(statearr_35448_35527[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (13))){
var inst_35296 = (state_35423[(22)]);
var inst_35300 = cljs.core.chunk_first.call(null,inst_35296);
var inst_35301 = cljs.core.chunk_rest.call(null,inst_35296);
var inst_35302 = cljs.core.count.call(null,inst_35300);
var inst_35283 = inst_35301;
var inst_35284 = inst_35300;
var inst_35285 = inst_35302;
var inst_35286 = (0);
var state_35423__$1 = (function (){var statearr_35449 = state_35423;
(statearr_35449[(7)] = inst_35286);

(statearr_35449[(8)] = inst_35284);

(statearr_35449[(9)] = inst_35285);

(statearr_35449[(10)] = inst_35283);

return statearr_35449;
})();
var statearr_35450_35528 = state_35423__$1;
(statearr_35450_35528[(2)] = null);

(statearr_35450_35528[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (22))){
var inst_35344 = (state_35423[(23)]);
var inst_35340 = (state_35423[(24)]);
var inst_35339 = (state_35423[(25)]);
var inst_35336 = (state_35423[(19)]);
var inst_35339__$1 = (state_35423[(2)]);
var inst_35340__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35339__$1);
var inst_35341 = (function (){var all_files = inst_35336;
var res_SINGLEQUOTE_ = inst_35339__$1;
var res = inst_35340__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35344,inst_35340,inst_35339,inst_35336,inst_35339__$1,inst_35340__$1,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35265_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35265_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35344,inst_35340,inst_35339,inst_35336,inst_35339__$1,inst_35340__$1,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35342 = cljs.core.filter.call(null,inst_35341,inst_35339__$1);
var inst_35343 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35344__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35343);
var inst_35345 = cljs.core.not_empty.call(null,inst_35344__$1);
var state_35423__$1 = (function (){var statearr_35451 = state_35423;
(statearr_35451[(23)] = inst_35344__$1);

(statearr_35451[(26)] = inst_35342);

(statearr_35451[(24)] = inst_35340__$1);

(statearr_35451[(25)] = inst_35339__$1);

return statearr_35451;
})();
if(cljs.core.truth_(inst_35345)){
var statearr_35452_35529 = state_35423__$1;
(statearr_35452_35529[(1)] = (23));

} else {
var statearr_35453_35530 = state_35423__$1;
(statearr_35453_35530[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (36))){
var state_35423__$1 = state_35423;
var statearr_35454_35531 = state_35423__$1;
(statearr_35454_35531[(2)] = false);

(statearr_35454_35531[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (41))){
var inst_35398 = (state_35423[(20)]);
var inst_35402 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35403 = cljs.core.map.call(null,inst_35402,inst_35398);
var inst_35404 = cljs.core.pr_str.call(null,inst_35403);
var inst_35405 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35404)].join('');
var inst_35406 = figwheel.client.utils.log.call(null,inst_35405);
var state_35423__$1 = state_35423;
var statearr_35455_35532 = state_35423__$1;
(statearr_35455_35532[(2)] = inst_35406);

(statearr_35455_35532[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (43))){
var inst_35399 = (state_35423[(21)]);
var inst_35409 = (state_35423[(2)]);
var inst_35410 = cljs.core.not_empty.call(null,inst_35399);
var state_35423__$1 = (function (){var statearr_35456 = state_35423;
(statearr_35456[(27)] = inst_35409);

return statearr_35456;
})();
if(cljs.core.truth_(inst_35410)){
var statearr_35457_35533 = state_35423__$1;
(statearr_35457_35533[(1)] = (44));

} else {
var statearr_35458_35534 = state_35423__$1;
(statearr_35458_35534[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (29))){
var inst_35344 = (state_35423[(23)]);
var inst_35342 = (state_35423[(26)]);
var inst_35376 = (state_35423[(16)]);
var inst_35340 = (state_35423[(24)]);
var inst_35339 = (state_35423[(25)]);
var inst_35336 = (state_35423[(19)]);
var inst_35372 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35375 = (function (){var all_files = inst_35336;
var res_SINGLEQUOTE_ = inst_35339;
var res = inst_35340;
var files_not_loaded = inst_35342;
var dependencies_that_loaded = inst_35344;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35344,inst_35342,inst_35376,inst_35340,inst_35339,inst_35336,inst_35372,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35374){
var map__35459 = p__35374;
var map__35459__$1 = ((((!((map__35459 == null)))?(((((map__35459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35459):map__35459);
var namespace = cljs.core.get.call(null,map__35459__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35344,inst_35342,inst_35376,inst_35340,inst_35339,inst_35336,inst_35372,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35376__$1 = cljs.core.group_by.call(null,inst_35375,inst_35342);
var inst_35378 = (inst_35376__$1 == null);
var inst_35379 = cljs.core.not.call(null,inst_35378);
var state_35423__$1 = (function (){var statearr_35461 = state_35423;
(statearr_35461[(16)] = inst_35376__$1);

(statearr_35461[(28)] = inst_35372);

return statearr_35461;
})();
if(inst_35379){
var statearr_35462_35535 = state_35423__$1;
(statearr_35462_35535[(1)] = (32));

} else {
var statearr_35463_35536 = state_35423__$1;
(statearr_35463_35536[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (44))){
var inst_35399 = (state_35423[(21)]);
var inst_35412 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35399);
var inst_35413 = cljs.core.pr_str.call(null,inst_35412);
var inst_35414 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35413)].join('');
var inst_35415 = figwheel.client.utils.log.call(null,inst_35414);
var state_35423__$1 = state_35423;
var statearr_35464_35537 = state_35423__$1;
(statearr_35464_35537[(2)] = inst_35415);

(statearr_35464_35537[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (6))){
var inst_35317 = (state_35423[(2)]);
var state_35423__$1 = state_35423;
var statearr_35465_35538 = state_35423__$1;
(statearr_35465_35538[(2)] = inst_35317);

(statearr_35465_35538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (28))){
var inst_35342 = (state_35423[(26)]);
var inst_35369 = (state_35423[(2)]);
var inst_35370 = cljs.core.not_empty.call(null,inst_35342);
var state_35423__$1 = (function (){var statearr_35466 = state_35423;
(statearr_35466[(29)] = inst_35369);

return statearr_35466;
})();
if(cljs.core.truth_(inst_35370)){
var statearr_35467_35539 = state_35423__$1;
(statearr_35467_35539[(1)] = (29));

} else {
var statearr_35468_35540 = state_35423__$1;
(statearr_35468_35540[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (25))){
var inst_35340 = (state_35423[(24)]);
var inst_35356 = (state_35423[(2)]);
var inst_35357 = cljs.core.not_empty.call(null,inst_35340);
var state_35423__$1 = (function (){var statearr_35469 = state_35423;
(statearr_35469[(30)] = inst_35356);

return statearr_35469;
})();
if(cljs.core.truth_(inst_35357)){
var statearr_35470_35541 = state_35423__$1;
(statearr_35470_35541[(1)] = (26));

} else {
var statearr_35471_35542 = state_35423__$1;
(statearr_35471_35542[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (34))){
var inst_35392 = (state_35423[(2)]);
var state_35423__$1 = state_35423;
if(cljs.core.truth_(inst_35392)){
var statearr_35472_35543 = state_35423__$1;
(statearr_35472_35543[(1)] = (38));

} else {
var statearr_35473_35544 = state_35423__$1;
(statearr_35473_35544[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (17))){
var state_35423__$1 = state_35423;
var statearr_35474_35545 = state_35423__$1;
(statearr_35474_35545[(2)] = recompile_dependents);

(statearr_35474_35545[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (3))){
var state_35423__$1 = state_35423;
var statearr_35475_35546 = state_35423__$1;
(statearr_35475_35546[(2)] = null);

(statearr_35475_35546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (12))){
var inst_35313 = (state_35423[(2)]);
var state_35423__$1 = state_35423;
var statearr_35476_35547 = state_35423__$1;
(statearr_35476_35547[(2)] = inst_35313);

(statearr_35476_35547[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (2))){
var inst_35275 = (state_35423[(13)]);
var inst_35282 = cljs.core.seq.call(null,inst_35275);
var inst_35283 = inst_35282;
var inst_35284 = null;
var inst_35285 = (0);
var inst_35286 = (0);
var state_35423__$1 = (function (){var statearr_35477 = state_35423;
(statearr_35477[(7)] = inst_35286);

(statearr_35477[(8)] = inst_35284);

(statearr_35477[(9)] = inst_35285);

(statearr_35477[(10)] = inst_35283);

return statearr_35477;
})();
var statearr_35478_35548 = state_35423__$1;
(statearr_35478_35548[(2)] = null);

(statearr_35478_35548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (23))){
var inst_35344 = (state_35423[(23)]);
var inst_35342 = (state_35423[(26)]);
var inst_35340 = (state_35423[(24)]);
var inst_35339 = (state_35423[(25)]);
var inst_35336 = (state_35423[(19)]);
var inst_35347 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35349 = (function (){var all_files = inst_35336;
var res_SINGLEQUOTE_ = inst_35339;
var res = inst_35340;
var files_not_loaded = inst_35342;
var dependencies_that_loaded = inst_35344;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35344,inst_35342,inst_35340,inst_35339,inst_35336,inst_35347,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35348){
var map__35479 = p__35348;
var map__35479__$1 = ((((!((map__35479 == null)))?(((((map__35479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35479):map__35479);
var request_url = cljs.core.get.call(null,map__35479__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35344,inst_35342,inst_35340,inst_35339,inst_35336,inst_35347,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35350 = cljs.core.reverse.call(null,inst_35344);
var inst_35351 = cljs.core.map.call(null,inst_35349,inst_35350);
var inst_35352 = cljs.core.pr_str.call(null,inst_35351);
var inst_35353 = figwheel.client.utils.log.call(null,inst_35352);
var state_35423__$1 = (function (){var statearr_35481 = state_35423;
(statearr_35481[(31)] = inst_35347);

return statearr_35481;
})();
var statearr_35482_35549 = state_35423__$1;
(statearr_35482_35549[(2)] = inst_35353);

(statearr_35482_35549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (35))){
var state_35423__$1 = state_35423;
var statearr_35483_35550 = state_35423__$1;
(statearr_35483_35550[(2)] = true);

(statearr_35483_35550[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (19))){
var inst_35326 = (state_35423[(12)]);
var inst_35332 = figwheel.client.file_reloading.expand_files.call(null,inst_35326);
var state_35423__$1 = state_35423;
var statearr_35484_35551 = state_35423__$1;
(statearr_35484_35551[(2)] = inst_35332);

(statearr_35484_35551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (11))){
var state_35423__$1 = state_35423;
var statearr_35485_35552 = state_35423__$1;
(statearr_35485_35552[(2)] = null);

(statearr_35485_35552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (9))){
var inst_35315 = (state_35423[(2)]);
var state_35423__$1 = state_35423;
var statearr_35486_35553 = state_35423__$1;
(statearr_35486_35553[(2)] = inst_35315);

(statearr_35486_35553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (5))){
var inst_35286 = (state_35423[(7)]);
var inst_35285 = (state_35423[(9)]);
var inst_35288 = (inst_35286 < inst_35285);
var inst_35289 = inst_35288;
var state_35423__$1 = state_35423;
if(cljs.core.truth_(inst_35289)){
var statearr_35487_35554 = state_35423__$1;
(statearr_35487_35554[(1)] = (7));

} else {
var statearr_35488_35555 = state_35423__$1;
(statearr_35488_35555[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (14))){
var inst_35296 = (state_35423[(22)]);
var inst_35305 = cljs.core.first.call(null,inst_35296);
var inst_35306 = figwheel.client.file_reloading.eval_body.call(null,inst_35305,opts);
var inst_35307 = cljs.core.next.call(null,inst_35296);
var inst_35283 = inst_35307;
var inst_35284 = null;
var inst_35285 = (0);
var inst_35286 = (0);
var state_35423__$1 = (function (){var statearr_35489 = state_35423;
(statearr_35489[(7)] = inst_35286);

(statearr_35489[(32)] = inst_35306);

(statearr_35489[(8)] = inst_35284);

(statearr_35489[(9)] = inst_35285);

(statearr_35489[(10)] = inst_35283);

return statearr_35489;
})();
var statearr_35490_35556 = state_35423__$1;
(statearr_35490_35556[(2)] = null);

(statearr_35490_35556[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (45))){
var state_35423__$1 = state_35423;
var statearr_35491_35557 = state_35423__$1;
(statearr_35491_35557[(2)] = null);

(statearr_35491_35557[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (26))){
var inst_35344 = (state_35423[(23)]);
var inst_35342 = (state_35423[(26)]);
var inst_35340 = (state_35423[(24)]);
var inst_35339 = (state_35423[(25)]);
var inst_35336 = (state_35423[(19)]);
var inst_35359 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35361 = (function (){var all_files = inst_35336;
var res_SINGLEQUOTE_ = inst_35339;
var res = inst_35340;
var files_not_loaded = inst_35342;
var dependencies_that_loaded = inst_35344;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35344,inst_35342,inst_35340,inst_35339,inst_35336,inst_35359,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35360){
var map__35492 = p__35360;
var map__35492__$1 = ((((!((map__35492 == null)))?(((((map__35492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35492):map__35492);
var namespace = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35344,inst_35342,inst_35340,inst_35339,inst_35336,inst_35359,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35362 = cljs.core.map.call(null,inst_35361,inst_35340);
var inst_35363 = cljs.core.pr_str.call(null,inst_35362);
var inst_35364 = figwheel.client.utils.log.call(null,inst_35363);
var inst_35365 = (function (){var all_files = inst_35336;
var res_SINGLEQUOTE_ = inst_35339;
var res = inst_35340;
var files_not_loaded = inst_35342;
var dependencies_that_loaded = inst_35344;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35344,inst_35342,inst_35340,inst_35339,inst_35336,inst_35359,inst_35361,inst_35362,inst_35363,inst_35364,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35344,inst_35342,inst_35340,inst_35339,inst_35336,inst_35359,inst_35361,inst_35362,inst_35363,inst_35364,state_val_35424,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35366 = setTimeout(inst_35365,(10));
var state_35423__$1 = (function (){var statearr_35494 = state_35423;
(statearr_35494[(33)] = inst_35359);

(statearr_35494[(34)] = inst_35364);

return statearr_35494;
})();
var statearr_35495_35558 = state_35423__$1;
(statearr_35495_35558[(2)] = inst_35366);

(statearr_35495_35558[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (16))){
var state_35423__$1 = state_35423;
var statearr_35496_35559 = state_35423__$1;
(statearr_35496_35559[(2)] = reload_dependents);

(statearr_35496_35559[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (38))){
var inst_35376 = (state_35423[(16)]);
var inst_35394 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35376);
var state_35423__$1 = state_35423;
var statearr_35497_35560 = state_35423__$1;
(statearr_35497_35560[(2)] = inst_35394);

(statearr_35497_35560[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (30))){
var state_35423__$1 = state_35423;
var statearr_35498_35561 = state_35423__$1;
(statearr_35498_35561[(2)] = null);

(statearr_35498_35561[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (10))){
var inst_35296 = (state_35423[(22)]);
var inst_35298 = cljs.core.chunked_seq_QMARK_.call(null,inst_35296);
var state_35423__$1 = state_35423;
if(inst_35298){
var statearr_35499_35562 = state_35423__$1;
(statearr_35499_35562[(1)] = (13));

} else {
var statearr_35500_35563 = state_35423__$1;
(statearr_35500_35563[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (18))){
var inst_35330 = (state_35423[(2)]);
var state_35423__$1 = state_35423;
if(cljs.core.truth_(inst_35330)){
var statearr_35501_35564 = state_35423__$1;
(statearr_35501_35564[(1)] = (19));

} else {
var statearr_35502_35565 = state_35423__$1;
(statearr_35502_35565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (42))){
var state_35423__$1 = state_35423;
var statearr_35503_35566 = state_35423__$1;
(statearr_35503_35566[(2)] = null);

(statearr_35503_35566[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (37))){
var inst_35389 = (state_35423[(2)]);
var state_35423__$1 = state_35423;
var statearr_35504_35567 = state_35423__$1;
(statearr_35504_35567[(2)] = inst_35389);

(statearr_35504_35567[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35424 === (8))){
var inst_35296 = (state_35423[(22)]);
var inst_35283 = (state_35423[(10)]);
var inst_35296__$1 = cljs.core.seq.call(null,inst_35283);
var state_35423__$1 = (function (){var statearr_35505 = state_35423;
(statearr_35505[(22)] = inst_35296__$1);

return statearr_35505;
})();
if(inst_35296__$1){
var statearr_35506_35568 = state_35423__$1;
(statearr_35506_35568[(1)] = (10));

} else {
var statearr_35507_35569 = state_35423__$1;
(statearr_35507_35569[(1)] = (11));

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
});})(c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26100__auto__,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26101__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26101__auto____0 = (function (){
var statearr_35508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35508[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26101__auto__);

(statearr_35508[(1)] = (1));

return statearr_35508;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26101__auto____1 = (function (state_35423){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_35423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e35509){if((e35509 instanceof Object)){
var ex__26104__auto__ = e35509;
var statearr_35510_35570 = state_35423;
(statearr_35510_35570[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35571 = state_35423;
state_35423 = G__35571;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26101__auto__ = function(state_35423){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26101__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26101__auto____1.call(this,state_35423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26101__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26101__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26261__auto__ = (function (){var statearr_35511 = f__26260__auto__.call(null);
(statearr_35511[(6)] = c__26259__auto__);

return statearr_35511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto__,map__35268,map__35268__$1,opts,before_jsload,on_jsload,reload_dependents,map__35269,map__35269__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26259__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35574,link){
var map__35575 = p__35574;
var map__35575__$1 = ((((!((map__35575 == null)))?(((((map__35575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35575):map__35575);
var file = cljs.core.get.call(null,map__35575__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__35575,map__35575__$1,file){
return (function (p1__35572_SHARP_,p2__35573_SHARP_){
if(cljs.core._EQ_.call(null,p1__35572_SHARP_,p2__35573_SHARP_)){
return p1__35572_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__35575,map__35575__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35578){
var map__35579 = p__35578;
var map__35579__$1 = ((((!((map__35579 == null)))?(((((map__35579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35579):map__35579);
var match_length = cljs.core.get.call(null,map__35579__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35579__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35577_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35577_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35581_SHARP_,p2__35582_SHARP_){
return cljs.core.assoc.call(null,p1__35581_SHARP_,cljs.core.get.call(null,p2__35582_SHARP_,key),p2__35582_SHARP_);
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
var loaded_f_datas_35583 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35583);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35583);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35584,p__35585){
var map__35586 = p__35584;
var map__35586__$1 = ((((!((map__35586 == null)))?(((((map__35586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35586):map__35586);
var on_cssload = cljs.core.get.call(null,map__35586__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35587 = p__35585;
var map__35587__$1 = ((((!((map__35587 == null)))?(((((map__35587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35587):map__35587);
var files_msg = map__35587__$1;
var files = cljs.core.get.call(null,map__35587__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1543435811893
