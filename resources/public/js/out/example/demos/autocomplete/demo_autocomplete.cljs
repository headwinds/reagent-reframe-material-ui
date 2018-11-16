(ns example.demos.autocomplete.demo-autocomplete
  (:require [reagent.core :as r]
            ["material-ui" :as mui]
            [example.utils.theme :refer [with-custom-styles]]
            [example.demos.demo-text-field :refer [text-field]]
            [example.utils.theme :refer [with-custom-styles custom-theme]]
            [example.demos.autocomplete.demo-react-autosuggest :refer [autosuggest-view]]
            [example.demos.autocomplete.demo-react-reselect :refer [reselect-view]]))

(defn handle-keypress [e]
  ;(swap! model #(assoc %1 :query %2) (.. e -target -value))
  )

(defn demo-autocomplete [{:keys [classes] :as props}]
  (fn []

    [:div {:style {:display "flex"
                   :flexDirection "column"
                   :position "relative"
                   :margin 50
                   :alignItems "left"
                   }}

      [:h2 "Autocomplete"]

      [:div {:style {:width 400}}
        [:p "This is an attempt to port "
          [:a {:target "_blank" :href "https://material-ui.com/demos/autocomplete/"}
            "Material UI's autocomplete "
          ] "component."
        ]]

      [:h3 "React-autosuggest"]
        [:div {:style {:margin-bottom 50}} [autosuggest-view "my-auto"]]

        [:h4 {:style {:margin "20px 0px"}} "Result"]

        [:div {:style {:width 400}}

          [:p  "This is a better than the below react-select example. You can find the autosuggest.css in the css folder within the resources folder."]
          [:p "As a base, I started with this "
              [:a {:target "_blank" :href "https://github.com/kapware/autosuggest-sample"} "autosuggest-sample"]
                " ClojureScript version and then bumped the library to the latest - cljsjs/react-autosuggest 9.3.4-0."
              ]
        ]



      [:h3 {:style {:margin "20px 0px"}} "React-reselect"]

      [:div { :on-key-press (fn [e]
                              (handle-keypress e))}
        [:div
          [:> (with-custom-styles (r/reactify-component reselect-view))]

          ]]

      [:h4 {:style {:margin "20px 0px"}} "Result"]

      [:div {:style {:width 400}}

        [:p  "I don't believe I was that succesful as I failed to pass in the custom components. You can find the reselect.css in the css folder within the resources folder."]
        [:p "As a base, I started with this "
            [:a {:target "_blank" :href "https://gist.github.com/pesterhazy/4a4198a9cc040bf6fe13a476f25bac2c"}
              "react-reselect"
            ] " ClojureScript version."]
      ]
    ]

    ))
