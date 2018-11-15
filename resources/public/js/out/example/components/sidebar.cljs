(ns example.components.sidebar
    (:require [reagent.core :as r]
              [example.subs :as subs]
              [example.utils.http-fx :refer [<sub set-location]]))

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
   :border-color "#eee"
   :background "transparent"})


(def selected-style
 {:border-color "#6cb7e0"})

(defn get-style [active-demo demo]
  (if (= active-demo demo)
    (conj item-style selected-style)
    item-style))

(defn sidebar-view []
    (fn []
      (let [active-demo (<sub [::subs/active-demo])
            _ (print active-demo)]
      [:div {:style {:display "block"
                     :position "relative"
                     :width 200
                     :margin-top 0
                     :margin-left 10
                     :height "100vh"
                     :background "transparent"
                     }}
        [:div {:style {:margin 10 :border "10px solid #f1f1f1" :overflow "hidden"}}
          [:img {:src "https://cdn.customfields.bonify.io/littlebitsproduction.myshopify.com/fields/products/accessory_image/10281133513/droid%20parts.jpg" :width 300 :style {:padding-right 150}}]
        ]
        [:div {:on-click (fn [ev] (set-location "/#/demos/autocomplete")) :style (get-style active-demo "autocomplete")} "Autocomplete"]
        [:div {:on-click (fn [ev] (set-location "/#/demos/button")) :style (get-style active-demo "button")} "Button"]
        [:div {:on-click (fn [ev] (set-location "/#/demos/pickers")) :style (get-style active-demo "pickers")} "Pickers"]
        [:div {:on-click (fn [ev] (set-location "/#/demos/menu")) :style (get-style active-demo "menu")} "Menu"]
        [:div {:on-click (fn [ev] (set-location "/#/demos/table")) :style (get-style active-demo "table")} "Table"]
        [:div {:on-click (fn [ev] (set-location "/#/demos/text-field")) :style (get-style active-demo "text-field")} "Text Field"]
      ]
    )))
