(ns example.demos.demo-button
  (:require [reagent.core :as r]
            ["material-ui" :as mui]
            [example.subs :as subs]
            [example.events :as events]
            [example.utils.http-fx :as http :refer  [<sub >evt]]
            ["material-ui-icons" :as mui-icons]))

(def initial-resource (r/atom "unknown"))
(def initial-vehicle-page (r/atom 0))
(def initial-people-page (r/atom 0))

(defn handle-search-click [ev resource query]
  (let [initial-page (if (= resource "vehicles") initial-vehicle-page initial-people-page)]
    (reset! initial-resource resource)
    (swap! initial-page inc)
    (>evt [:get-starwars {:resource resource
                          :query query
                          :page @initial-page}])))

(defn demo-button [{:keys [classes] :as props}]
    (fn []
      (let [starwars (<sub [::subs/starwars])
            page (:page starwars)
            records (:records starwars)
            count (str "Total " (:count starwars) )
            list (map-indexed (fn [idx itm] [:div {:key idx} (str idx ". ") (:name itm) ] ) records)
            ]
      [:div {:style {:display "flex"
                     :flexDirection "column"
                     :position "relative"
                     :margin 50
                     :alignItems "left"
                     }}
      [:h2 "Button"]

      [:> mui/Toolbar
       {:disable-gutters true}
       [:> mui/Button
        {:variant "contained"
         :color "secondary"
         :style {:text-transform "none"}
         :class (.-button classes)
         :on-click #(handle-search-click %1 "vehicles" "") }
         [:div {:style {:margin-right 10}}
           [:>  mui-icons/LocalCafe]]
        (str "Search Vehicles / p" @initial-vehicle-page)
        ]

       [:> mui/Button
        {:variant "outlined"
         :color "secondary"
         :style {:text-transform "none" :border-color "#ef0079"}
         :class (.-button classes)
         :on-click  #(handle-search-click %1 "people" "")}
         [:div {:style {:margin-right 10}}
          [:> mui-icons/People]]
          (str "Search People / p" @initial-people-page)
        ]]

        [:h4 {:style {:margin "20px 0px"}} (when (> page 0) [:span {:style {:text-transform "capitalize"}} (str @initial-resource " page " page " results")])]

        [:div {:style {:margin "20px 0px"}}
          [:p  "resource " @initial-resource]
          [:p  count]
          [:div
            list
          ]

        ]

        [:h4 {:style {:margin "20px 0px"}} "About" ]

        [:div {:style {:width 400}}
          [:p "This is an attempt to port "
            [:a {:target "_blank" :href "https://material-ui.com/demos/buttons/"}
              "Material UI's button "
            ] "component."
          ]]


        [:div
          [:code
            "code demo?! "
            [:a {:href "http://blog.klipse.tech/clojure/2016/03/17/klipse.html"} "perhaps using klipse"]
          ]]


        ]
    )))
