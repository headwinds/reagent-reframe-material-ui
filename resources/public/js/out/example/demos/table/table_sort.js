// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.table.table_sort');
goog.require('cljs.core');
goog.require('clojure.string');
example.demos.table.table_sort.get_field = (function example$demos$table$table_sort$get_field(row,selected_column,map_row){
var field = cljs.core.get.call(null,map_row,selected_column);
if(typeof cljs.core.get.call(null,row,field) === 'string'){
return cljs.core.get.call(null,row,field,"no data").toLowerCase();
} else {
return cljs.core.get.call(null,row,field);
}
});
example.demos.table.table_sort.desc = (function example$demos$table$table_sort$desc(rowA,rowB,selected_column,map_row){
if((example.demos.table.table_sort.get_field.call(null,rowB,selected_column,map_row) < example.demos.table.table_sort.get_field.call(null,rowA,selected_column,map_row))){
return (-1);
} else {
if((example.demos.table.table_sort.get_field.call(null,rowB,selected_column,map_row) > example.demos.table.table_sort.get_field.call(null,rowA,selected_column,map_row))){
return (1);
} else {
return (0);

}
}
});
example.demos.table.table_sort.get_sorting = (function example$demos$table$table_sort$get_sorting(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22600 = arguments.length;
var i__4532__auto___22601 = (0);
while(true){
if((i__4532__auto___22601 < len__4531__auto___22600)){
args__4534__auto__.push((arguments[i__4532__auto___22601]));

var G__22602 = (i__4532__auto___22601 + (1));
i__4532__auto___22601 = G__22602;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return example.demos.table.table_sort.get_sorting.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

example.demos.table.table_sort.get_sorting.cljs$core$IFn$_invoke$arity$variadic = (function (order,selected_column,map_row,args){
if(cljs.core._EQ_.call(null,order,"desc")){
return (function (rowA,rowB){
return example.demos.table.table_sort.desc.call(null,rowA,rowB,selected_column,map_row);
});
} else {
return (function (rowA,rowB){
return (- example.demos.table.table_sort.desc.call(null,rowA,rowB,selected_column,map_row));
});
}
});

example.demos.table.table_sort.get_sorting.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
example.demos.table.table_sort.get_sorting.cljs$lang$applyTo = (function (seq22596){
var G__22597 = cljs.core.first.call(null,seq22596);
var seq22596__$1 = cljs.core.next.call(null,seq22596);
var G__22598 = cljs.core.first.call(null,seq22596__$1);
var seq22596__$2 = cljs.core.next.call(null,seq22596__$1);
var G__22599 = cljs.core.first.call(null,seq22596__$2);
var seq22596__$3 = cljs.core.next.call(null,seq22596__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22597,G__22598,G__22599,seq22596__$3);
});

example.demos.table.table_sort.sort_table_data_by_selected_column = (function example$demos$table$table_sort$sort_table_data_by_selected_column(order,selected_column,rows,map_row){
cljs.core.print.call(null,"sort-table-data-by-selected-column selected-column:",selected_column);

return cljs.core.sort.call(null,example.demos.table.table_sort.get_sorting.call(null,order,selected_column,map_row),rows);
});

//# sourceMappingURL=table_sort.js.map?rel=1540761288291
