(ns example.components.sidebar
    (:use-macros [cljs.core.async.macros :only [go]])
    (:require [reagent.core :as r]
              [example.subs :as subs]
              [example.events :as events]
              [cljs.core.async :refer [<! timeout]]
              [example.utils.http-fx :refer [<sub >evt set-location]]))

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
 {:border "2px solid #6cb7e0"})

(defn handle-click []
  (set-location "#/"))

(defn get-style [active-demo demo]
  (if (= active-demo demo)
    (conj item-style selected-style)
    item-style))

(defn handle-page-change [page path change-page]
  (>evt [::events/set-active-demo page])
  (change-page)
  (go
    (<! (timeout 1000))
    (set-location path)))

(defn sidebar-view [change-page]
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
        [:div {:on-click handle-click :style {:margin 10 :border "10px solid #f1f1f1" :pointer-events "all" :cursor "pointer" :overflow "hidden"}}
          [:img {:src "https://cdn.customfields.bonify.io/littlebitsproduction.myshopify.com/fields/products/accessory_image/10281133513/droid%20parts.jpg" :width 300 :style {:padding-right 150}}]
        ]
        [:div {:on-click (fn [ev] (handle-page-change "autocomplete" "/#/demos/autocomplete" change-page)) :style (get-style active-demo "autocomplete")} "Autocomplete"]
        [:div {:on-click (fn [ev] (handle-page-change "button" "/#/demos/button" change-page)) :style (get-style active-demo "button")} "Button"]
        [:div {:on-click (fn [ev] (handle-page-change "pickers" "/#/demos/pickers" change-page)) :style (get-style active-demo "pickers")} "Pickers"]
        [:div {:on-click (fn [ev] (handle-page-change "menu" "/#/demos/menu" change-page)) :style (get-style active-demo "menu")} "Menu"]
        [:div {:on-click (fn [ev] (handle-page-change "table" "/#/demos/table" change-page)) :style (get-style active-demo "table")} "Table"]
        [:div {:on-click (fn [ev] (handle-page-change "text-field" "/#/demos/text-field" change-page)) :style (get-style active-demo "text-field")} "Text Field"]
      ]
    )))
