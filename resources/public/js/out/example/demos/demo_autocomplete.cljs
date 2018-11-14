(ns example.demos.demo-autocomplete
  (:require [reagent.core :as r]
            ["material-ui" :as mui]
            ["material-ui-icons" :as mui-icons]
            [example.utils.theme :refer [with-custom-styles]]
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

;; need to get these from API call....
(def options ["apple", "answers", "alphabet", "bears", "bananas"])

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


(defn handle-keypress [e]
  (swap! model #(assoc %1 :query %2) (.. e -target -value)))

(defn load-options [input cb]
  ;; return sample
  (cb nil #js{:options (->> options
                            (map (fn [item]
                                   {:value item
                                    :label (str item)}))
                            clj->js)
              :complete true}))

(defn demo-autocomplete [{:keys [classes] :as props}]
  (print "classes " classes)
 (let [component-state (r/atom {:selected 0})]
    (fn []
      (let [current-select (get @component-state :selected)]
      [:div {:style {:display "block"
                     :position "relative"
                     }}
        [:h2 "Autocomplete"]
        [:div { :on-key-press (fn [e]
                      (handle-keypress e))}
          [select {:state !state
                   :class (.-textField classes)
                   :multi true
                   :components components
                   :style {:width 200}
                   :load-options load-options}]
        ]

        [:div {:style {:width 400}}
          [:p "This is an attempt to port "
            [:a {:target "_blank" :href "https://material-ui.com/demos/autocomplete/"}
              "Material UI's react-select based autocomplete "
            ] "component."
          ]

          [:p  "I don't believe I was that succesful as I failed to pass in the custom components
              and had to place the css for the input in the index.html found in the resources folder."]
          [:p "As a base, I started with this "
              [:a {:target "_blank" :href "https://gist.github.com/pesterhazy/4a4198a9cc040bf6fe13a476f25bac2c"}
                "ClojureScript version.  "
              ]]
        ]
      ]

    ))))
