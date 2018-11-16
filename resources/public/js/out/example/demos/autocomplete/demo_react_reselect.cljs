(ns example.demos.autocomplete.demo-react-reselect
  (:require [reagent.core :as r]
            ["material-ui" :as mui]
            [clojure.string :as string]
            [example.demos.demo-text-field :refer [text-field]]
            [cljsjs.react-select]))

;; State
(def model-default {
   :query ""
   :submitted false
})

(def model (r/atom model-default))

(defn select
  "Select based on a atom/cursor. Pass as state"
  [{:keys [state]
    :as props}]
  [:> js/Select.Async
   (-> props
       (dissoc state)
       (assoc :value @state
              :on-change (fn [x]
                            ;; on enter it replaces the state with value from the select
                            (print "value x " (:value (first (js->clj x :keywordize-keys :true))))
                            (print "model " (:query @model))
                           (reset! state (when (some-> x .-value))))))])

(defonce !state (atom nil))

(def people [ "Luke" "Leia" "Lando"])

(defn control [classes]
  [text-field
        { :id "search"
          :label "Search"
          :class (.-textField classes)
          :style {:width 200 :height 24}
          :margin "normal"}])

(defn menu [classes]
  [:> mui/Paper ])

(def components
  {:Menu menu
  :Control control})

(defn load-options [input cb]
  ;; return sample
  (cb nil #js{:options (->> people
                            (map (fn [item]
                                   {:value item
                                    :label (str item)}))
                            clj->js)
              :complete true}))

(defn reselect-view [{:keys [classes] :as props}]
      [select {:state !state
               :class (.-textField classes)
               :multi true
               :components components
               :style {:width 200}
               :load-options load-options}])
