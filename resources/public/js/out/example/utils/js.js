// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.utils.js');
goog.require('cljs.core');
goog.require('cljsjs.moment');
goog.require('clojure.string');
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
example.utils.js.moment_parse_format = (function example$utils$js$moment_parse_format(ts,format){
return moment(ts).format(format);
});
/**
 * ts has this format DD MM YYYY and needs to be conveted to MM DD YYYY for moment to consider it a date
 */
example.utils.js.moment_parse_d_format = (function example$utils$js$moment_parse_d_format(dd,format){
var date_vec = clojure.string.split.call(null,dd," ");
var day = cljs.core.first.call(null,date_vec);
var month = cljs.core.second.call(null,date_vec);
var year = date_vec.call(null,(2));
var ts = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
return moment(ts).format(format);
});
/**
 * reverse YYYY-MM-DD back to MM DD YYYY
 */
example.utils.js.reverse_to_yyyy = (function example$utils$js$reverse_to_yyyy(dd){
var _ = cljs.core.print.call(null," hhhhhhh ",dd);
var date_vec = clojure.string.split.call(null,dd,"-");
var year = cljs.core.first.call(null,date_vec);
var month = cljs.core.second.call(null,date_vec);
var day = date_vec.call(null,(2));
var ts = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
return ts;
});

//# sourceMappingURL=js.js.map?rel=1542405694831
