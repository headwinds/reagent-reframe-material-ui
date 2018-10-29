(ns example.utils.theme
  (:require [goog.object :as gobj]
            ["material-ui/styles" :refer [createMuiTheme withStyles]]
            ["material-ui/colors" :as mui-colors]))

(def r2d2-blue "#6cb7e0")

(def primary-color  r2d2-blue) ;;(gobj/get (.-blue mui-colors) 100))
(def primary-color-theme r2d2-blue)
(def primary-color-text "#1976d2")

(def custom-theme
  (createMuiTheme
    #js {:palette #js {:primary #js {:main primary-color-theme}}}))

(defn custom-styles [theme]
  #js {:button #js {:margin (.. theme -spacing -unit)}
       :textField #js {:width 200
                       :marginLeft (.. theme -spacing -unit)
                       :marginRight (.. theme -spacing -unit)}})

(def with-custom-styles (withStyles custom-styles))
