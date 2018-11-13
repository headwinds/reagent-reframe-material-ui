(ns example.components.sidebar
    (:require [reagent.core :as r]
              [example.utils.http-fx :refer [set-location]]))

(def item-style
  {:display "block"
   :position "relative"
   :border "1px solid #eee"
   :fontFamily "Helvetica Neue"
   :cursor "pointer"
   :color "#666"
   :padding 10
   :margin 2
   :border-radius 4
   :width 200
   :height 40
   :background "transparent"})

(defn sidebar-view []
 (let [component-state (r/atom {:selected 0})]
    (fn []
      (let [current-select (get @component-state :selected)]
      [:div {:style {:display "block"
                     :position "relative"
                     :width 200
                     :margin-top 50
                     :margin-left 10
                     :height "100vh"
                     :background "transparent"
                     }}

        [:div {:on-click (fn [ev] (set-location "/#/demos/autocomplete")) :style item-style} "Autocomplete"]
        [:div {:on-click (fn [ev] (set-location "/#/demos/button")) :style item-style} "Button"]
        [:div {:on-click (fn [ev] (set-location "/#/demos/pickers")) :style item-style} "Pickers"]
        [:div {:on-click (fn [ev] (set-location "/#/demos/menu")) :style item-style} "Menu"]
        [:div {:on-click (fn [ev] (set-location "/#/demos/table")) :style item-style} "Table"]
        [:div {:on-click (fn [ev] (set-location "/#/demos/text-field")) :style item-style} "Text Field"]
      ]
    ))))
