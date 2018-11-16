(ns example.demos.demo-text-field
  (:require [reagent.core :as r]
            ["material-ui" :as mui]
            ["material-ui-icons" :as mui-icons]
            [reagent.impl.template :as rtpl])
  )

  ;; TextField cursor fix:

  (defonce text-jedi-state (r/atom "Wage peace."))
  (defonce text-sith-state (r/atom "Anger is useful—unless it is used against you."))

  (defonce text-state (r/atom @text-jedi-state))

  (defonce race (r/atom "Jedi"))

  (defonce text-area-state (r/atom "Shaggy giants from an arboreal world, the tall and commanding Wookiee species is an impressive sight to even the most jaded spacer.\n\nDespite their fearsome and savage countenance, Wookiees are intelligent, sophisticated, loyal and trusting. Loyalty and bravery are near-sacred tenets in Wookiee society.\n\nWhen peaceful, Wookiees are tender and gentle. Their tempers, however, are short; when angered, Wookiees can fly into a berserker rage and will not stop until the object of their distemper is sufficiently destroyed."))

  (def ^:private input-component
    (r/reactify-component
      (fn [props]
        [:input (-> props
                    (assoc :ref (:inputRef props))
                    (dissoc :inputRef))])))

  (def ^:private textarea-component
    (r/reactify-component
      (fn [props]
        [:textarea (-> props
                       (assoc :ref (:inputRef props))
                       (dissoc :inputRef))])))

  ;; To fix cursor jumping when controlled input value is changed,
  ;; use wrapper input element created by Reagent instead of
  ;; letting Material-UI to create input element directly using React.
  ;; Create-element + convert-props-value is the same as what adapt-react-class does.
  (defn text-field [props & children]
    (let [props (-> props
                    (assoc-in [:InputProps :inputComponent] (cond
                                                              (and (:multiline props) (:rows props) (not (:maxRows props)))
                                                              textarea-component

                                                              ;; FIXME: Autosize multiline field is broken.
                                                              (:multiline props)
                                                              nil

                                                              ;; Select doesn't require cursor fix so default can be used.
                                                              (:select props)
                                                              nil

                                                              :else
                                                              input-component))
                    rtpl/convert-prop-value)]
      (apply r/create-element mui/TextField props (map r/as-element children))))


(defn demo-text-field [{:keys [classes] :as props}]
 (let [component-state (r/atom {:selected 0})]
    (fn []
      (let [current-select (get @component-state :selected)]
      [:div {:style {:display "flex"
                     :flexDirection "column"
                     :position "relative"
                     :margin 50
                     :alignItems "left"
                     }}
        [:> mui/Grid
         {:container true
          :direction "column"}
         [:h2 "Text Field"]
         [:div {:style {:margin-bottom 20}}
           [text-field
            {:value @text-state
             :variant "outlined"
             :label "Text input"
             :placeholder "Placeholder"
             :style {:width 400 :padding 10}
             :helper-text (str "An old " @race " proverb")
             :class (.-textField classes)
             :on-change (fn [e]
                          (reset! text-state (.. e -target -value)))
             :inputRef #(js/console.log "input-ref" %)}]]
         [:div {:style {:margin-bottom 20}}

         [text-field
          {:value @text-area-state
           :label "Textarea"
           :placeholder "Placeholder"
           :helper-text "Helper text"
           :class (.-textField classes)
           :on-change (fn [e]
                        (reset! text-state (.. e -target -value)))
           :multiline true
           ;; TODO: Autosize textarea is broken.
           :style {:width 400 :padding 10}
           :rows 10}]]
         [:div {:style {:margin-bottom 20}}
         [text-field
          {:value @text-state
           :label "Select"
           :placeholder "Placeholder"
           :class (.-textField classes)
           :on-change (fn [e]
                        (reset! race (if (= (.. e -target -value) 2) "Sith" "Jedi"))
                        (reset! text-state (if (= (.. e -target -value) 2) @text-sith-state @text-jedi-state)))
           :select true}
          [:> mui/MenuItem
           {:value 1}
           "Lightside"]
          ;; Same as previous, alternative to adapt-react-class
          [:> mui/MenuItem
           {:value 2}
           "Darkside"]]]]
      ]
    ))))
