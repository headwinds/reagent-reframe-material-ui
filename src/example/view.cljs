(ns example.view
  (:require [reagent.core :as r]
            ;; FIXME: Needs some ClojureScript compiler fixes
            ; ["@material-ui/core" :as mui]
            ; ["@material-ui/core/styles" :refer [createMuiTheme]]
            ; ["@material-ui/icons" :as mui-icons]
            ["material-ui" :as mui]
            ["material-ui/styles" :refer [createMuiTheme withStyles]]
            ["material-ui/colors" :as mui-colors]
            ["material-ui-icons" :as mui-icons]
            [example.utils.theme :refer [with-custom-styles custom-theme]]
            [re-frame.core :as re :refer [reg-sub]]
            [example.utils.http-fx :refer [<sub >evt]]
            [example.demos.demo-splash :as demo-splash]
            [example.components.sidebar :refer [sidebar-view]]
            [example.routes :as routes :refer [get-main-demo]]
            [example.utils.theme :refer [r2d2-blue]]
            [goog.object :as gobj]
            [reagent.impl.template :as rtpl]))

;; Example

(def active-demo demo-splash/demo-splash)

(reg-sub :active-demo
         (fn [db _] (:active-demo db)))

(defn main-view []
  ;; fragment
  (fn []
    (let [active-demo (<sub [:active-demo])
          demo (get-main-demo active-demo)]
            [:div {:style {:display "flex" :flexDirection "row"}}
             [:> mui/CssBaseline]
             [:> mui/MuiThemeProvider
              {:theme custom-theme}
              [sidebar-view]
              [:> mui/Grid
               {:container true
                :direction "row"
                :style {:marginLeft 50}
                :justify "flex-start"}
                [:> (with-custom-styles (r/reactify-component demo))]
               ]]
           ])))
