// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.table.demo_table');
goog.require('cljs.core');
goog.require('material_ui');
goog.require('material_ui_icons');
goog.require('example.demos.table.events');
goog.require('example.demos.table.subs');
goog.require('example.utils.theme');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('example.utils.http_fx');
goog.require('example.demos.table.table_sort');
goog.require('goog.object');
goog.require('reagent.impl.template');
example.demos.table.demo_table.global$module$material_ui = goog.global["MaterialUI"];
example.demos.table.demo_table.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
example.demos.table.demo_table.people_data = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
example.demos.table.demo_table.order_people_by = reagent.core.atom.call(null,"name");
example.demos.table.demo_table.people_total = reagent.core.atom.call(null,(0));
example.demos.table.demo_table.current_page = reagent.core.atom.call(null,(1));
example.demos.table.demo_table.current_page_pagination = reagent.core.atom.call(null,(0));
example.demos.table.demo_table.rows_per_page = reagent.core.atom.call(null,(10));
example.demos.table.demo_table.people_map_row = new cljs.core.PersistentArrayMap(null, 7, ["hidden",new cljs.core.Keyword(null,"update-id","update-id",572784797),"name",new cljs.core.Keyword(null,"name","name",1843675177),"gender",new cljs.core.Keyword(null,"gender","gender",-733930727),"mass",new cljs.core.Keyword(null,"mass","mass",-2138950046),"height",new cljs.core.Keyword(null,"height","height",1025178622),"skin",new cljs.core.Keyword(null,"skin_color","skin_color",-1191216536),"birth",new cljs.core.Keyword(null,"birth_year","birth_year",1654378599)], null);
example.demos.table.demo_table.people_columns = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"name",new cljs.core.Keyword(null,"sort","sort",953465918),"asc"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"gender",new cljs.core.Keyword(null,"sort","sort",953465918),"asc"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"mass",new cljs.core.Keyword(null,"sort","sort",953465918),"asc"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"height",new cljs.core.Keyword(null,"sort","sort",953465918),"asc"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"skin",new cljs.core.Keyword(null,"sort","sort",953465918),"asc"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"birth",new cljs.core.Keyword(null,"sort","sort",953465918),"asc"], null)], null));
example.demos.table.demo_table.update_people_columns = (function example$demos$table$demo_table$update_people_columns(label,new_sort){
var map_sort = (function example$demos$table$demo_table$update_people_columns_$_map_sort(people){
if(cljs.core._EQ_.call(null,label,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(people))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(people),new cljs.core.Keyword(null,"sort","sort",953465918),new_sort], null);
} else {
return people;
}
});
var new_people_columns = cljs.core.map.call(null,map_sort,cljs.core.deref.call(null,example.demos.table.demo_table.people_columns));
return new_people_columns;
});
example.demos.table.demo_table.find_current_sort = (function example$demos$table$demo_table$find_current_sort(label){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (column){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,column,new cljs.core.Keyword(null,"label","label",1718410804)),label);
}),cljs.core.deref.call(null,example.demos.table.demo_table.people_columns)));
});
example.demos.table.demo_table.handle_request_sort = (function example$demos$table$demo_table$handle_request_sort(event,label){
var current_sort = cljs.core.get.call(null,example.demos.table.demo_table.find_current_sort.call(null,label),new cljs.core.Keyword(null,"sort","sort",953465918));
var new_sort = ((cljs.core._EQ_.call(null,current_sort,"asc"))?"desc":"asc");
var new_people_columns = example.demos.table.demo_table.update_people_columns.call(null,label,new_sort);
cljs.core.reset_BANG_.call(null,example.demos.table.demo_table.order_people_by,label);

return cljs.core.reset_BANG_.call(null,example.demos.table.demo_table.people_columns,new_people_columns);
});
example.demos.table.demo_table.sort_icon = (function example$demos$table$demo_table$sort_icon(classes,sort_direction,label,ordered_by){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.table.demo_table.global$module$material_ui.Tooltip,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),classes.tableRow,new cljs.core.Keyword(null,"title","title",636505583),"Sort",new cljs.core.Keyword(null,"enterDelay","enterDelay",-1577485556),(300)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.table.demo_table.global$module$material_ui.TableSortLabel,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),classes.tableRow,new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core._EQ_.call(null,ordered_by,label))?true:false),new cljs.core.Keyword(null,"direction","direction",-633359395),sort_direction,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (ev){
return example.demos.table.demo_table.handle_request_sort.call(null,ev,label);
})], null),label], null)], null);
});
example.demos.table.demo_table.get_table_cell_header = (function example$demos$table$demo_table$get_table_cell_header(classes,label,id,sort_direction,ordered_by){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.table.demo_table.global$module$material_ui.TableCell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["tableCellHeader",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),classes.tableCell,new cljs.core.Keyword(null,"sortDirection","sortDirection",-45816999),((cljs.core._EQ_.call(null,ordered_by,label))?sort_direction:false)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.demos.table.demo_table.sort_icon,classes,sort_direction,label,ordered_by], null)], null);
});
example.demos.table.demo_table.get_table_cell_body = (function example$demos$table$demo_table$get_table_cell_body(classes,label,id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.table.demo_table.global$module$material_ui.TableCell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["cellBody",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),classes.tableCell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),label], null)], null);
});
example.demos.table.demo_table.get_columns = (function example$demos$table$demo_table$get_columns(classes,columns){
return cljs.core.map_indexed.call(null,(function (idx,column){
return example.demos.table.demo_table.get_table_cell_header.call(null,classes,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(column),idx,new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(column),cljs.core.deref.call(null,example.demos.table.demo_table.order_people_by));
}),columns);
});
/**
 * ensure the people are sorted by the currently select sort column name
 */
example.demos.table.demo_table.update_people_data_BANG_ = (function example$demos$table$demo_table$update_people_data_BANG_(new_data,people_map_row){
var current_order = example.demos.table.demo_table.find_current_sort.call(null,cljs.core.deref.call(null,example.demos.table.demo_table.order_people_by));
var sorted_data = example.demos.table.table_sort.sort_table_data_by_selected_column.call(null,new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(current_order),cljs.core.deref.call(null,example.demos.table.demo_table.order_people_by),new_data,people_map_row);
return cljs.core.reset_BANG_.call(null,example.demos.table.demo_table.people_data,sorted_data);
});
example.demos.table.demo_table.handle_change_page = (function example$demos$table$demo_table$handle_change_page(ev,page){
var new_page = (page + (1));
cljs.core.reset_BANG_.call(null,example.demos.table.demo_table.current_page,new_page);

cljs.core.reset_BANG_.call(null,example.demos.table.demo_table.current_page_pagination,page);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-people","get-people",726403750),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new_page,new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.deref.call(null,example.demos.table.demo_table.rows_per_page)], null)], null));
});
example.demos.table.demo_table.handle_change_rows_per_page = (function example$demos$table$demo_table$handle_change_rows_per_page(new_rows_per_page){
return cljs.core.reset_BANG_.call(null,example.demos.table.demo_table.rows_per_page,new_rows_per_page);
});
example.demos.table.demo_table.handle_row_click = (function example$demos$table$demo_table$handle_row_click(ev,id,selected_row_data){
var id__$1 = new cljs.core.Keyword(null,"people-id","people-id",-1622075394).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,selected_row_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var url = ["#/people/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id__$1)].join('');
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-people","set-current-people",-1903615268),selected_row_data], null));

return example.utils.http_fx.set_location.call(null,url);
});
example.demos.table.demo_table.get_rows = (function example$demos$table$demo_table$get_rows(classes,rows){
return cljs.core.map_indexed.call(null,(function (idx,row){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.table.demo_table.global$module$material_ui.TableRow,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),["row",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"hover","hover",-341141711),true,new cljs.core.Keyword(null,"class","class",-2030961996),classes.tableRow,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (ev){
return example.demos.table.demo_table.handle_row_click.call(null,ev,idx,row);
})], null),example.demos.table.demo_table.get_table_cell_body.call(null,classes,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row),(0)),example.demos.table.demo_table.get_table_cell_body.call(null,classes,new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(row),(1)),example.demos.table.demo_table.get_table_cell_body.call(null,classes,new cljs.core.Keyword(null,"mass","mass",-2138950046).cljs$core$IFn$_invoke$arity$1(row),(2)),example.demos.table.demo_table.get_table_cell_body.call(null,classes,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(row),(3)),example.demos.table.demo_table.get_table_cell_body.call(null,classes,new cljs.core.Keyword(null,"skin_color","skin_color",-1191216536).cljs$core$IFn$_invoke$arity$1(row),(4)),example.demos.table.demo_table.get_table_cell_body.call(null,classes,new cljs.core.Keyword(null,"birth_year","birth_year",1654378599).cljs$core$IFn$_invoke$arity$1(row),(5))], null);
}),rows);
});
example.demos.table.demo_table.get_pagination = (function example$demos$table$demo_table$get_pagination(classes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.table.demo_table.global$module$material_ui.TablePagination,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),classes.tablePagination,new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(3),new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.deref.call(null,example.demos.table.demo_table.people_total),new cljs.core.Keyword(null,"rowsPerPage","rowsPerPage",-77498783),cljs.core.deref.call(null,example.demos.table.demo_table.rows_per_page),new cljs.core.Keyword(null,"page","page",849072397),cljs.core.deref.call(null,example.demos.table.demo_table.current_page_pagination),new cljs.core.Keyword(null,"onChangePage","onChangePage",-1326018192),example.demos.table.demo_table.handle_change_page,new cljs.core.Keyword(null,"labelRowsPerPage","labelRowsPerPage",1921064797),"",new cljs.core.Keyword(null,"rowsPerPageOptions","rowsPerPageOptions",797601165),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null)], null)], null);
});
example.demos.table.demo_table.people_table = (function example$demos$table$demo_table$people_table(p__28228){
var map__28229 = p__28228;
var map__28229__$1 = ((((!((map__28229 == null)))?(((((map__28229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28229):map__28229);
var props = map__28229__$1;
var classes = cljs.core.get.call(null,map__28229__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"900px",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(20)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.table.demo_table.global$module$material_ui.Table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classes.table], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.table.demo_table.global$module$material_ui.TableHead,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"head",new cljs.core.Keyword(null,"class","class",-2030961996),classes.tableHead], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.table.demo_table.global$module$material_ui.TableRow,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classes.tableRow], null),example.demos.table.demo_table.get_columns.call(null,classes,cljs.core.deref.call(null,example.demos.table.demo_table.people_columns))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.table.demo_table.global$module$material_ui.TableBody,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"body",new cljs.core.Keyword(null,"class","class",-2030961996),classes.tableBody], null),example.demos.table.demo_table.get_rows.call(null,classes,cljs.core.deref.call(null,example.demos.table.demo_table.people_data))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.table.demo_table.global$module$material_ui.TableFooter,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"footer",new cljs.core.Keyword(null,"class","class",-2030961996),classes.tableFooter], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.table.demo_table.global$module$material_ui.TableRow,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"footer-row",new cljs.core.Keyword(null,"class","class",-2030961996),classes.tableRow], null),(((cljs.core.deref.call(null,example.demos.table.demo_table.people_total) > cljs.core.deref.call(null,example.demos.table.demo_table.rows_per_page)))?example.demos.table.demo_table.get_pagination.call(null,classes):null)], null)], null)], null)], null);
});
example.demos.table.demo_table.people_view = (function example$demos$table$demo_table$people_view(p__28231){
var map__28232 = p__28231;
var map__28232__$1 = ((((!((map__28232 == null)))?(((((map__28232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28232):map__28232);
var props = map__28232__$1;
var classes = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
example.utils.http_fx._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-people","get-people",726403750),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),cljs.core.deref.call(null,example.demos.table.demo_table.current_page),new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.deref.call(null,example.demos.table.demo_table.rows_per_page)], null)], null));

return ((function (map__28232,map__28232__$1,props,classes){
return (function (){
var people = example.utils.http_fx._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.demos.table.subs","people","example.demos.table.subs/people",-28763123)], null));
var new_people_total = example.utils.http_fx._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.demos.table.subs","people-total","example.demos.table.subs/people-total",832087417)], null));
if((cljs.core.count.call(null,people) > (0))){
cljs.core.reset_BANG_.call(null,example.demos.table.demo_table.people_total,new_people_total);

example.demos.table.demo_table.update_people_data_BANG_.call(null,people,example.demos.table.demo_table.people_map_row);
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"margin","margin",-995903681),(50),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Table"], null),(((cljs.core.count.call(null,people) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.utils.theme.with_custom_styles.call(null,reagent.core.reactify_component.call(null,example.demos.table.demo_table.people_table))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20),new cljs.core.Keyword(null,"borderTop","borderTop",2080227753),"1px solid #ddd"], null)], null),"Loading..."], null))], null);
});
;})(map__28232,map__28232__$1,props,classes))
});

//# sourceMappingURL=demo_table.js.map?rel=1542405694903
