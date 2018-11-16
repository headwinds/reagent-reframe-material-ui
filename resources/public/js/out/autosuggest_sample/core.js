// Compiled by ClojureScript 1.10.339 {}
goog.provide('autosuggest_sample.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.react_autosuggest');
goog.require('clojure.string');
autosuggest_sample.core.languages = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"C",new cljs.core.Keyword(null,"year","year",335913393),(1972)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"C#",new cljs.core.Keyword(null,"year","year",335913393),(2000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"C++",new cljs.core.Keyword(null,"year","year",335913393),(1983)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Clojure",new cljs.core.Keyword(null,"year","year",335913393),(2007)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Elm",new cljs.core.Keyword(null,"year","year",335913393),(2012)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Go",new cljs.core.Keyword(null,"year","year",335913393),(2009)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Haskell",new cljs.core.Keyword(null,"year","year",335913393),(1990)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Java",new cljs.core.Keyword(null,"year","year",335913393),(1995)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Javascript",new cljs.core.Keyword(null,"year","year",335913393),(1995)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Perl",new cljs.core.Keyword(null,"year","year",335913393),(1987)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"PHP",new cljs.core.Keyword(null,"year","year",335913393),(1995)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Python",new cljs.core.Keyword(null,"year","year",335913393),(1991)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ruby",new cljs.core.Keyword(null,"year","year",335913393),(1995)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Scala",new cljs.core.Keyword(null,"year","year",335913393),(2003)], null)], null);
autosuggest_sample.core.str__GT_regex = (function autosuggest_sample$core$str__GT_regex(a_str){
var escaped = clojure.string.replace.call(null,a_str,/[\+\.\?\[\]\(\)\^\$]/,cljs.core.partial.call(null,cljs.core.str,"\\"));
return cljs.core.re_pattern.call(null,["(?i)^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(escaped),".*"].join(''));
});
autosuggest_sample.core.getSuggestions = (function autosuggest_sample$core$getSuggestions(val){
var trimmed_val = ((typeof val === 'string')?clojure.string.trim.call(null,val):"");
if(cljs.core.empty_QMARK_.call(null,trimmed_val)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,((function (trimmed_val){
return (function (p1__22201_SHARP_){
return cljs.core.re_matches.call(null,autosuggest_sample.core.str__GT_regex.call(null,trimmed_val),p1__22201_SHARP_);
});})(trimmed_val))
,new cljs.core.Keyword(null,"name","name",1843675177)),autosuggest_sample.core.languages));
}
});
autosuggest_sample.core.getSuggestionValue = (function autosuggest_sample$core$getSuggestionValue(suggestion){
return suggestion.name;
});
autosuggest_sample.core.renderSuggestion = (function autosuggest_sample$core$renderSuggestion(suggestion){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),suggestion.name], null));
});
autosuggest_sample.core.Autosuggest = reagent.core.adapt_react_class.call(null,Autosuggest);
autosuggest_sample.core.auto_suggest = (function autosuggest_sample$core$auto_suggest(id){
var suggestions = reagent.core.atom.call(null,autosuggest_sample.core.getSuggestions.call(null,""));
var as_val = reagent.core.atom.call(null,"");
var update_suggestions = ((function (suggestions,as_val){
return (function (arg){
var new_sugg = autosuggest_sample.core.getSuggestions.call(null,arg.value);
cljs.core.reset_BANG_.call(null,suggestions,new_sugg);

return null;
});})(suggestions,as_val))
;
var update_state_val = ((function (suggestions,as_val,update_suggestions){
return (function (evt,new_val,method){
cljs.core.reset_BANG_.call(null,as_val,new_val.newValue);

return null;
});})(suggestions,as_val,update_suggestions))
;
return ((function (suggestions,as_val,update_suggestions,update_state_val){
return (function (id__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [autosuggest_sample.core.Autosuggest,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.deref.call(null,suggestions),new cljs.core.Keyword(null,"onSuggestionsFetchRequested","onSuggestionsFetchRequested",-1764289681),update_suggestions,new cljs.core.Keyword(null,"alwaysRenderSuggestions","alwaysRenderSuggestions",-578713431),true,new cljs.core.Keyword(null,"getSuggestionValue","getSuggestionValue",1922239622),autosuggest_sample.core.getSuggestionValue,new cljs.core.Keyword(null,"renderSuggestion","renderSuggestion",1356279137),autosuggest_sample.core.renderSuggestion,new cljs.core.Keyword(null,"inputProps","inputProps",1208237697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type 'c'",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,as_val),new cljs.core.Keyword(null,"onChange","onChange",-312891301),update_state_val], null)], null)], null);
});
;})(suggestions,as_val,update_suggestions,update_state_val))
});

//# sourceMappingURL=core.js.map?rel=1542305001508
