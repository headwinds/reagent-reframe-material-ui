// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.utils.theme');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('material_ui.styles');
goog.require('material_ui.colors');
example.utils.theme.global$module$material_ui$styles = goog.global["MaterialUIStyles"];
example.utils.theme.global$module$material_ui$colors = goog.global["MaterialUIColors"];
example.utils.theme.primary_color = goog.object.get(example.utils.theme.global$module$material_ui$colors.blue,(100));
example.utils.theme.primary_color_theme = "#00a2c7";
example.utils.theme.primary_color_text = "#1976d2";
example.utils.theme.custom_theme = example.utils.theme.global$module$material_ui$styles.createMuiTheme.call(null,({"palette": ({"primary": ({"main": example.utils.theme.primary_color_theme})})}));
example.utils.theme.custom_styles = (function example$utils$theme$custom_styles(theme){
return ({"button": ({"margin": theme.spacing.unit}), "textField": ({"width": (200), "marginLeft": theme.spacing.unit, "marginRight": theme.spacing.unit})});
});
example.utils.theme.with_custom_styles = example.utils.theme.global$module$material_ui$styles.withStyles.call(null,example.utils.theme.custom_styles);

//# sourceMappingURL=theme.js.map?rel=1535318442844
