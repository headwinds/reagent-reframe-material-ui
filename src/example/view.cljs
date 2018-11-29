(ns example.view
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            ;; FIXME: Needs some ClojureScript compiler fixes
            ; ["@material-ui/core" :as mui]
            ; ["@material-ui/core/styles" :refer [createMuiTheme]]
            ; ["@material-ui/icons" :as mui-icons]
            ["material-ui" :as mui]
            ["material-ui/styles" :refer [createMuiTheme withStyles]]
            ["material-ui/colors" :as mui-colors]
            ["material-ui-icons" :as mui-icons]
            [example.utils.theme :refer [with-custom-styles custom-theme]]
            [reagent.core :as r]
            [re-frame.core :as re :refer [reg-sub]]
            [example.utils.http-fx :refer [<sub >evt]]
            [example.components.sidebar :refer [sidebar-view]]
            [example.routes :as routes :refer [get-main-demo]]
            [example.demos.demo-splash :as demo-splash]
            [example.demos.demo-text-field :as demo-text-field]
            [example.utils.theme :refer [r2d2-blue]]
            [example.subs :as subs]
            [goog.object :as gobj]
            [cljsjs.react-transition-group]
            [cljsjs.d3 :as d3]
            [cljs.core.async :refer [put! chan <! >! timeout close!]]
            [reagent.impl.template :as rtpl]))

(def tg (r/adapt-react-class js/ReactTransitionGroup.TransitionGroup))

(defonce state (r/atom (cycle ["previous" "next"])))

(def ani-chan (chan))
(go-loop [old-data {}]
  (let [data (merge old-data (<! ani-chan))]
    ; Wait until both entering and leaving elements had provided their data
    (if (every? data [:enter :leave])
      (let [{:keys [enter leave
                    enter-cb leave-cb
                    enter-height leave-height]} data
            rect (.getBoundingClientRect leave)]
        (.. js/d3
            (select leave)
            (style "opacity" 1)
            (style "position" "fixed")
            (style "margin" "0px")
            (style "width" (str (.-width rect) "px"))
            (style "height" (str (.-height rect) "px"))
            (style "top" (str (.-top rect) "px"))
            (style "left" (str (.-left rect) "px"))
            (transition)
            (duration 750)
            (style "opacity" 0)
            (on "end"
                (fn []
                  (leave-cb))))
        (.. js/d3
            (select enter)
            (style "display" "block")
            (style "height" (str leave-height "px"))
            (transition)
            (duration 1000)
            (delay 500)
            (style "opacity" 1)
            (style "height" (str enter-height "px"))
            (on "end" (fn [] (.. js/d3 (select enter) (style "height" nil)) (enter-cb))))
        (recur {}))
      (recur data))))

(defn will-leave [c cb]
  (let [d (r/dom-node c)
        rect (.getBoundingClientRect d)
        height (- (.-bottom rect) (.-top rect))]
    (put! ani-chan {:leave d :leave-cb cb :leave-height height})))

(defn will-enter [c cb]
  ; Need to hide before sending to channel otherwise element is visible for a
  ; fraction of a second.
  (let [d (r/dom-node c)
        rect (.getBoundingClientRect d)
        height (- (.-bottom rect) (.-top rect))]
    (.. js/d3
        (select d)
        (style "display" "none")
        (style "opacity" 0))
    (put! ani-chan {:enter d :enter-cb cb :enter-height height})))

(defn previous-comp [classes comp]
  (let [c (r/current-component)]
    (doto c
      (aset "componentWillEnter" (partial will-enter c))
      (aset "componentWillLeave" (partial will-leave c))))
  [comp classes]
  )

(defn next-comp [classes comp]
  (let [c (r/current-component)]
    (doto c
      (aset "componentWillEnter" (partial will-enter c))
      (aset "componentWillLeave" (partial will-leave c))))
  [comp classes]
  )

(defn change-page []
  (swap! state next))

(defn app [classes]
  (fn []

    (let [inactive-demo (<sub [::subs/active-demo])
          previous-demo (get-main-demo inactive-demo)
          active-demo (<sub [::subs/active-demo])
          next-demo (get-main-demo active-demo)]
  [:div
   [tg (case (first @state)
         "previous"
         ^{:key "previous"} [previous-comp classes previous-demo]
         "next"
         ^{:key "next"} [next-comp classes next-demo])]])))

(defn main-view []
  ;; fragment
    (fn []
              [:div {:style {:display "flex" :flexDirection "row"}}
               [:> mui/CssBaseline]
               [:> mui/MuiThemeProvider
                {:theme custom-theme}
                [sidebar-view change-page]
                [:> mui/Grid
                 {:container true
                  :direction "row"
                  :style {:marginLeft 50}
                  :justify "flex-start"}
                    [:> (with-custom-styles (r/reactify-component app))]
                 ]]
             ]))
