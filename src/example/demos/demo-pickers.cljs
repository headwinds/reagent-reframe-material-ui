(ns example.demos.demo-pickers
  (:require [reagent.core :as r]
            [example.utils.js :as utils :refer [moment-parse moment-parse-format moment-parse-d-format reverse-to-yyyy]]
            [example.demos.demo-text-field :refer [text-field]]))


;; State
(def model-default {
   :to-date "2018-10-29"
   :to-date-display "16 10 2018"
   :to-time "13:30"
   :to "2018-10-29T11:00"
   :from "2018-10-29T11:00"
})

(def model (r/atom model-default))

(defn handle-date-change [e]
  (print "date change! " (.. e -target -value)) )

  (defn display-date []
    (:to-date-display @model)

  )

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
           {:id "from-datetime-local"
            :label "From"
            :value (:from @model)
            :type "datetime-local"
            :variant "outlined"
            :InputLabelProps {:shrink true :style {:font-size 14}}
            :InputProps {:style {:font-size 12}}
            :placeholder "Placeholder"
            :class (.-textField classes)
            :on-change (fn [e]
                        (swap! model #(-> %1 (assoc :from %2)) (.. e -target -value)))}]


          [text-field
           {:id "to-datetime-local"
            :label "To"
            :value (:to @model)
            :type "datetime-local"
            :variant "outlined"
            :InputLabelProps {:shrink true :style {:font-size 14}}
            :InputProps {:style {:font-size 12}}
            :placeholder "Placeholder"
            :class (.-textField classes)
            :on-change (fn [e]
                        (swap! model #(-> %1 (assoc :to %2)) (.. e -target -value)))}]]


                  [:div {:style {:display "flex" :flex-direciton "row"}}

            [:div {:style {:margin "20px 0px" :position "relative" :border-bottom "1px solid #000" :width 160 :margin-right 10 }}

              [:div {:style {:position "absolute" :z-index 2 :top -12 }}
                [:input {:type "text"
                         :value (display-date)
                         :on-change (fn [e]
                                     (swap! model #(-> %1 (assoc :to-date-display %2)) (.. e -target -value))
                                     (swap! model #(-> %1 (assoc :to-date %2)) (moment-parse-d-format (.. e -target -value) "YYYY-MM-DD"))
                                     (print "date " (.. e -target -value))
                                     (print "weird " (moment-parse-d-format (.. e -target -value) "YYYY-MM-DD"))
                                     )
                         :style {:color "#000" :border "none" :font-size 14 :margin-top 12 :width 100}} ]]

              [:div {:style {:position "absolute" :z-index 1  }}
                [:input {:type "date"
                          :value (:to-date @model)
                          :on-change (fn [e]
                                      (swap! model #(-> %1 (assoc :to-date %2)) (.. e -target -value))
                                      (swap! model #(-> %1 (assoc :to-date-display %2)) (reverse-to-yyyy (.. e -target -value)))
                                      )
                          :style {:border "none"
                                  :font-size 14}
                        } ]]
            ]

            [:div {:style {:margin "20px 0px" :border-bottom "1px solid #000" :width 100 }}
              [:input {:type "time"
                       :value (:to-time @model)
                       :on-change (fn [e]
                                    (swap! model #(-> %1 (assoc :to-time %2)) (.. e -target -value)))
                       :style {:border "none"
                       :font-size 14}
                      } ]
            ]]



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
