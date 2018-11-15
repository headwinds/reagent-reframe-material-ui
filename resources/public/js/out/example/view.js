// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('material_ui.styles');
goog.require('material_ui.colors');
goog.require('material_ui_icons');
goog.require('example.utils.theme');
goog.require('re_frame.core');
goog.require('example.utils.http_fx');
goog.require('example.demos.demo_splash');
goog.require('example.components.sidebar');
goog.require('example.routes');
goog.require('goog.object');
goog.require('reagent.impl.template');
example.view.global$module$material_ui = goog.global["MaterialUI"];
example.view.global$module$material_ui$styles = goog.global["MaterialUIStyles"];
example.view.global$module$material_ui$colors = goog.global["MaterialUIColors"];
example.view.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
example.view.active_demo = example.demos.demo_splash.demo_splash;
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),(function (db,_){
return new cljs.core.Keyword(null,"active-demo","active-demo",1389927874).cljs$core$IFn$_invoke$arity$1(db);
}));
example.view.main_view = (function example$view$main_view(){
return (function (){
var active_demo = example.utils.http_fx._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-demo","active-demo",1389927874)], null));
var demo = example.routes.get_main_demo.call(null,active_demo);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.view.global$module$material_ui.CssBaseline], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.view.global$module$material_ui.MuiThemeProvider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),example.utils.theme.custom_theme], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.components.sidebar.sidebar_view], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.view.global$module$material_ui.Grid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"direction","direction",-633359395),"row",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),(50)], null),new cljs.core.Keyword(null,"justify","justify",-722524056),"flex-start"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.utils.theme.with_custom_styles.call(null,reagent.core.reactify_component.call(null,demo))], null)], null)], null)], null);
});
});

//# sourceMappingURL=view.js.map?rel=1542228782710
