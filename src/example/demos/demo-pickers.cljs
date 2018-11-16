(ns example.demos.demo-pickers
  (:require [reagent.core :as r]
            [example.utils.js :as utils :refer [moment-parse]]
            [example.demos.demo-text-field :refer [text-field]]))


;; State
(def model-default {
   :to "2018-10-24T10:30"
   :from "2018-10-29T11:00"
})

(def model (r/atom model-default))

(defn demo-pickers [{:keys [classes] :as props}]
 (let [component-state (r/atom {:selected 0})]
    (fn []
      (let [current-select (get @component-state :selected)]
      [:div {:style {:display "flex"
                     :flexDirection "column"
                     :position "relative"
                     :margin 50
                     :alignItems "left"
                     }}
        [:h2 {:style {:margin "20px 0px"}} "Pickers"]

          [:div {:style {:display "flex" :flex-direciton "row"}}

          

          [text-field
           {:id "datetime-local"
            :label "To"
            :value (:to @model)
            :type "datetime-local"
            :variant "outlined"
            :InputLabelProps {:shrink true :style {:font-size 14}}
            :InputProps {:style {:font-size 12}}
            :placeholder "Placeholder"
            :class (.-textField classes)
            :on-change (fn [e]
                        (swap! model #(-> %1 (assoc :to %2)) (.. e -target -value)))}]

            [text-field
             {:id "datetime-local"
              :label "From"
              :value (:from @model)
              :type "datetime-local"
              :variant "outlined"
              :InputLabelProps {:shrink true :style {:font-size 14}}
              :InputProps {:style {:font-size 12}}
              :placeholder "Placeholder"
              :class (.-textField classes)
              :on-change (fn [e]
                          (swap! model #(-> %1 (assoc :from %2)) (.. e -target -value)))}]]

            [:h4 {:style {:margin "20px 0px"}} "Results"]
              [:div
              [:div
                [:p "To: " (moment-parse (:to @model))]
              ]
              [:div
                [:p "From: " (moment-parse (:to @model))]
              ]]

            ;https://swapi.co/api/people/?search=r2

            [:h4 {:style {:margin "20px 0px"}} "About"]

            [:div {:style {:width 400}}
              [:p "This is an attempt to port "
                [:a {:target "_blank" :href "https://material-ui.com/demos/pickers/"}
                  "Material UI's picker "
                ] "component."
              ]]

      ]



    ))))
