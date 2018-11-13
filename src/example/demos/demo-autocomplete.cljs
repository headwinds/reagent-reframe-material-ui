(ns example.demos.demo-autocomplete
  (:require [reagent.core :as r]
            ["material-ui" :as mui]
            ["material-ui-icons" :as mui-icons]
            [example.utils.theme :refer [with-custom-styles]]
            [example.demos.demo-text-field :refer [text-field]]
            [cljsjs.react-select]))

(defn select
  "Select based on a atom/cursor. Pass as state"
  [{:keys [state]
    :as props}]
  [:> js/Select.Async
   (-> props
       (dissoc state)
       (assoc :value @state
              :on-change (fn [x]
                           (reset! state (when (some-> x .-value))))))])

(defonce !state (atom nil))

(defn load-options [input cb]
  ;; return sample
  (cb nil #js{:options (->> (range 3)
                            (map (fn [item]
                                   {:value item
                                    :label (str item)}))
                            clj->js)
              :complete true}))

(defn root-ui []
  [select {:state !state
           :multi true
           :load-options load-options}])

(defn demo-autocomplete [{:keys [classes] :as props}]
 (let [component-state (r/atom {:selected 0})]
    (fn []
      (let [current-select (get @component-state :selected)]
      [:div {:style {:display "block"
                     :position "relative"
                     }}
        [:h2 "Autocomplete"]
        [:div
          (root-ui)
        ]
      ]
    ))))
