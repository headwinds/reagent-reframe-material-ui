(ns example.demos.demo-splash
  (:require [reagent.core :as r]
            ["material-ui" :as mui]
            ["material-ui-icons" :as mui-icons]
            [example.utils.http-fx :refer [set-location]]
            [example.utils.theme :refer [r2d2-blue]]
            [reagent.impl.template :as rtpl]))

(def h2-style
  {:style {:fontSize 20
           :font-weight "normal"
           :margin 0
           :padding 0
           :fontFamily "Helvetica"
           :color "#666"}})

(defn demo-splash [{:keys [classes] :as props}]
    (fn []
      [:div {:style {:display "flex"
                     :flexDirection "column"
                     :position "relative"
                     :margin 50
                     :alignItems "center"
                     }}
        [:div {:style {:margin 10}}
          [:img {:src "/images/material-ui-logo.svg" :width 250}]
          [:span {:style {:fontSize 320 :color r2d2-blue}} "&"]
          [:img {:src "/images/R2D2.svg" :width 150}]]
        [:h1 {:style {:fontFamily "Helvetica" :color "#666"}} "MATERIAL-UI"]
        [:h2 h2-style "React components that implement Google's Material Design"]
        [:h2 h2-style "with ClojureScript using Reagent, Re-Frame & the Starwars API"]
        [:h2 h2-style "May the " [:a {:href "https://clojuredocs.org/clojure.core/force" :target "_blank" :style {:text-decoration "none" :color r2d2-blue}} "force"] " be with you"]
        [:div {:style {:margin 20}}
          [:> mui/Button
           {:variant "outlined"
            :color "primary"
            :style {:color "black" :font-weight "bold"}
            :class (.-button classes)
            :on-click (fn [ev] (set-location "/#/demos/button"))}
           "Get Started"
           ]
         ]
      ]
    ))
