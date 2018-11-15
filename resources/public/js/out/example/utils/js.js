// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.utils.js');
goog.require('cljs.core');
goog.require('cljsjs.moment');
example.utils.js.log = (function example$utils$js$log(message,data){
return console.log(message,data);
});
example.utils.js.records_as_vec = (function example$utils$js$records_as_vec(response){
if(cljs.core.vector_QMARK_.call(null,response.call(null,new cljs.core.Keyword(null,"data","data",-232669377)))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response)], null);
}
});
example.utils.js.moment_parse = (function example$utils$js$moment_parse(ts){
return moment(ts).format("MMM Do, h:mm a");
});

//# sourceMappingURL=js.js.map?rel=1542222148421
