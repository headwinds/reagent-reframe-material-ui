// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.autocomplete.demo_react_autosuggest');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.react_autosuggest');
goog.require('clojure.string');
example.demos.autocomplete.demo_react_autosuggest.people = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Luke"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Leia"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Lando"], null)], null);
example.demos.autocomplete.demo_react_autosuggest.str__GT_regex = (function example$demos$autocomplete$demo_react_autosuggest$str__GT_regex(a_str){
var escaped = clojure.string.replace.call(null,a_str,/[\+\.\?\[\]\(\)\^\$]/,cljs.core.partial.call(null,cljs.core.str,"\\"));
return cljs.core.re_pattern.call(null,["(?i)^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(escaped),".*"].join(''));
});
example.demos.autocomplete.demo_react_autosuggest.getSuggestions = (function example$demos$autocomplete$demo_react_autosuggest$getSuggestions(val){
var trimmed_val = ((typeof val === 'string')?clojure.string.trim.call(null,val):"");
if(cljs.core.empty_QMARK_.call(null,trimmed_val)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,((function (trimmed_val){
return (function (p1__24704_SHARP_){
return cljs.core.re_matches.call(null,example.demos.autocomplete.demo_react_autosuggest.str__GT_regex.call(null,trimmed_val),p1__24704_SHARP_);
});})(trimmed_val))
,new cljs.core.Keyword(null,"name","name",1843675177)),example.demos.autocomplete.demo_react_autosuggest.people));
}
});
example.demos.autocomplete.demo_react_autosuggest.getSuggestionValue = (function example$demos$autocomplete$demo_react_autosuggest$getSuggestionValue(suggestion){
return suggestion.name;
});
example.demos.autocomplete.demo_react_autosuggest.renderSuggestion = (function example$demos$autocomplete$demo_react_autosuggest$renderSuggestion(suggestion){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),suggestion.name], null));
});
example.demos.autocomplete.demo_react_autosuggest.Autosuggest = reagent.core.adapt_react_class.call(null,Autosuggest);
example.demos.autocomplete.demo_react_autosuggest.autosuggest_view = (function example$demos$autocomplete$demo_react_autosuggest$autosuggest_view(id){
var suggestions = reagent.core.atom.call(null,example.demos.autocomplete.demo_react_autosuggest.getSuggestions.call(null,""));
var as_val = reagent.core.atom.call(null,"");
var update_suggestions = ((function (suggestions,as_val){
return (function (arg){
var new_sugg = example.demos.autocomplete.demo_react_autosuggest.getSuggestions.call(null,arg.value);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.demos.autocomplete.demo_react_autosuggest.Autosuggest,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.deref.call(null,suggestions),new cljs.core.Keyword(null,"onSuggestionsFetchRequested","onSuggestionsFetchRequested",-1764289681),update_suggestions,new cljs.core.Keyword(null,"alwaysRenderSuggestions","alwaysRenderSuggestions",-578713431),true,new cljs.core.Keyword(null,"getSuggestionValue","getSuggestionValue",1922239622),example.demos.autocomplete.demo_react_autosuggest.getSuggestionValue,new cljs.core.Keyword(null,"renderSuggestion","renderSuggestion",1356279137),example.demos.autocomplete.demo_react_autosuggest.renderSuggestion,new cljs.core.Keyword(null,"inputProps","inputProps",1208237697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type 'l'",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,as_val),new cljs.core.Keyword(null,"onChange","onChange",-312891301),update_state_val], null)], null)], null);
});
;})(suggestions,as_val,update_suggestions,update_state_val))
});

//# sourceMappingURL=demo_react_autosuggest.js.map?rel=1543435804095
