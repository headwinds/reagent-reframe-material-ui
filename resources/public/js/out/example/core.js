// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('material_ui.styles');
goog.require('material_ui.colors');
goog.require('material_ui_icons');
goog.require('re_frame.core');
goog.require('example.view');
goog.require('example.events');
goog.require('example.subs');
goog.require('example.routes');
goog.require('goog.object');
goog.require('reagent.impl.template');
example.core.global$module$material_ui = goog.global["MaterialUI"];
example.core.global$module$material_ui$styles = goog.global["MaterialUIStyles"];
example.core.global$module$material_ui$colors = goog.global["MaterialUIColors"];
example.core.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
example.core.start = (function example$core$start(){
example.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.view.main_view], null),document.getElementById("app"));
});
example.core.start.call(null);

//# sourceMappingURL=core.js.map?rel=1542217575274
