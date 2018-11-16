(ns example.demos.demo-menu
  (:require [reagent.core :as r]
            [re-frame.core :as re]
            ["material-ui" :as mui]
            ["material-ui-icons" :as mui-icons]))

;;-- State
(def setting-selected (r/atom 0))

(defn option-people-click [ev]
  (re/dispatch [:option-a-click]))

(defn option-keys-click [ev]
  (re/dispatch [:option-a-click]))


(defn settings-menu [classes]
  [:div {:class (.-root classes) :style {:width "200px" :border-right "1px solid #eee" :margin-top 20}}
  [:> mui/List {:component "nav"}
    ;;-- People
    [:> mui/ListItem {:button true
                      :selected (= @setting-selected 0)
                      :on-click (fn [e]
                                  (option-people-click e)
                                  (reset! setting-selected (.. e -target -value)))
                      }
      [:> mui-icons/Casino {:style {:marginLeft 5}}]
      [:> mui/ListItemText {:primary "Bars"} ]]


    ;;-- Keys
    [:> mui/ListItem {:button true
                      :selected (= @setting-selected 1)
                      :on-click (fn [e]
                                  (option-keys-click e)
                                  (reset! setting-selected (.. e -target -value)))
                      }
      [:> mui-icons/LocalCafe {:style {:marginLeft 5}}]
      [:> mui/ListItemText {:primary "Speeders"} ]]
    ]
 ])

(defn demo-menu [{:keys [classes] :as props}]
 (let [component-state (r/atom {:selected 0})]
    (fn []
      (let [current-select (get @component-state :selected)]
      [:div {:style {:display "flex"
                     :flexDirection "column"
                     :position "relative"
                     :margin 50
                     :alignItems "left"
                     }}
        [:h2 "Menu"]
        (settings-menu classes)
      ]
    ))))
