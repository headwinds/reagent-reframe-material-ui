(ns tqfweb.utils.theme
  (:require [goog.object :as gobj]
            ["material-ui/styles" :refer [createMuiTheme withStyles]]
            ["material-ui/colors" :as mui-colors]))

(def primary-color  (gobj/get (.-blue mui-colors) 100))
(def primary-color-tron "#00a2c7")
(def color-delete "#f50057")

(def tron-green "#00b183")
(def tron-yellow "#f1e314")
(def tron-red "#f11462")

(def custom-theme
  (createMuiTheme
    #js {:palette #js {:primary #js {:main primary-color-tron}}}))

(defn custom-styles [theme]
  #js {:button #js {:margin (.. theme -spacing -unit)}
       :textField #js {:width 200
                       :marginLeft (.. theme -spacing -unit)
                       :marginRight (.. theme -spacing -unit)}})

(def with-custom-styles (withStyles custom-styles))
