// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.demo_text_field');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('material_ui_icons');
goog.require('reagent.impl.template');
example.demos.demo_text_field.global$module$material_ui = goog.global["MaterialUI"];
example.demos.demo_text_field.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
if((typeof example !== 'undefined') && (typeof example.demos !== 'undefined') && (typeof example.demos.demo_text_field !== 'undefined') && (typeof example.demos.demo_text_field.text_state !== 'undefined')){
} else {
example.demos.demo_text_field.text_state = reagent.core.atom.call(null,"foobar");
}
example.demos.demo_text_field.input_component = reagent.core.reactify_component.call(null,(function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.dissoc.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"inputRef","inputRef",-414128011).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.Keyword(null,"inputRef","inputRef",-414128011))], null);
}));
example.demos.demo_text_field.textarea_component = reagent.core.reactify_component.call(null,(function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.dissoc.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"inputRef","inputRef",-414128011).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.Keyword(null,"inputRef","inputRef",-414128011))], null);
}));
example.demos.demo_text_field.text_field = (function example$demos$demo_text_field$text_field(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26879 = arguments.length;
var i__4532__auto___26880 = (0);
while(true){
if((i__4532__auto___26880 < len__4531__auto___26879)){
args__4534__auto__.push((arguments[i__4532__auto___26880]));

var G__26881 = (i__4532__auto___26880 + (1));
i__4532__auto___26880 = G__26881;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return example.demos.demo_text_field.text_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

example.demos.demo_text_field.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var props__$1 = reagent.impl.template.convert_prop_value.call(null,cljs.core.assoc_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"InputProps","InputProps",-1485068760),new cljs.core.Keyword(null,"inputComponent","inputComponent",1255542456)], null),(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"multiline","multiline",-1084693234).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(and__3938__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"maxRows","maxRows",-392329376).cljs$core$IFn$_invoke$arity$1(props));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())?example.demos.demo_text_field.textarea_component:(cljs.core.truth_(new cljs.core.Keyword(null,"multiline","multiline",-1084693234).cljs$core$IFn$_invoke$arity$1(props))?null:(cljs.core.truth_(new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(props))?null:example.demos.demo_text_field.input_component
)))));
return cljs.core.apply.call(null,reagent.core.create_element,example.demos.demo_text_field.global$module$material_ui.TextField,props__$1,cljs.core.map.call(null,reagent.core.as_element,children));
});

example.demos.demo_text_field.text_field.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
example.demos.demo_text_field.text_field.cljs$lang$applyTo = (function (seq26877){
var G__26878 = cljs.core.first.call(null,seq26877);
var seq26877__$1 = cljs.core.next.call(null,seq26877);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26878,seq26877__$1);
});

example.demos.demo_text_field.demo_text_field = (function example$demos$demo_text_field$demo_text_field(p__26883){
var map__26884 = p__26883;
var map__26884__$1 = ((((!((map__26884 == null)))?(((((map__26884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26884):map__26884);
var props = map__26884__$1;
var classes = cljs.core.get.call(null,map__26884__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(0)], null));
return ((function (component_state,map__26884,map__26884__$1,props,classes){
return (function (){
var current_select = cljs.core.get.call(null,cljs.core.deref.call(null,component_state),new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_text_field.global$module$material_ui.Grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"direction","direction",-633359395),"column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Text Field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.demos.demo_text_field.text_field,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,example.demos.demo_text_field.text_state),new cljs.core.Keyword(null,"label","label",1718410804),"Text input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Placeholder",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"Helper text",new cljs.core.Keyword(null,"class","class",-2030961996),classes.textField,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_select,component_state,map__26884,map__26884__$1,props,classes){
return (function (e){
return cljs.core.reset_BANG_.call(null,example.demos.demo_text_field.text_state,e.target.value);
});})(current_select,component_state,map__26884,map__26884__$1,props,classes))
,new cljs.core.Keyword(null,"inputRef","inputRef",-414128011),((function (current_select,component_state,map__26884,map__26884__$1,props,classes){
return (function (p1__26882_SHARP_){
return console.log("input-ref",p1__26882_SHARP_);
});})(current_select,component_state,map__26884,map__26884__$1,props,classes))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.demos.demo_text_field.text_field,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,example.demos.demo_text_field.text_state),new cljs.core.Keyword(null,"label","label",1718410804),"Textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Placeholder",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"Helper text",new cljs.core.Keyword(null,"class","class",-2030961996),classes.textField,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_select,component_state,map__26884,map__26884__$1,props,classes){
return (function (e){
return cljs.core.reset_BANG_.call(null,example.demos.demo_text_field.text_state,e.target.value);
});})(current_select,component_state,map__26884,map__26884__$1,props,classes))
,new cljs.core.Keyword(null,"multiline","multiline",-1084693234),true,new cljs.core.Keyword(null,"rows","rows",850049680),(10)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.demos.demo_text_field.text_field,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,example.demos.demo_text_field.text_state),new cljs.core.Keyword(null,"label","label",1718410804),"Select",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Placeholder",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"Helper text",new cljs.core.Keyword(null,"class","class",-2030961996),classes.textField,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_select,component_state,map__26884,map__26884__$1,props,classes){
return (function (e){
return cljs.core.reset_BANG_.call(null,example.demos.demo_text_field.text_state,e.target.value);
});})(current_select,component_state,map__26884,map__26884__$1,props,classes))
,new cljs.core.Keyword(null,"select","select",1147833503),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_text_field.global$module$material_ui.MenuItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(1)], null),"Item 1"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_text_field.global$module$material_ui.MenuItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(2)], null),"Item 2"], null)], null)], null)], null);
});
;})(component_state,map__26884,map__26884__$1,props,classes))
});

//# sourceMappingURL=demo_text_field.js.map?rel=1535318442479
