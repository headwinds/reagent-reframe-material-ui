(ns example.routes
  "Sets up url routes and associated views."
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require [secretary.core :as secretary]
            [goog.events :as gevents]
            [goog.history.EventType :as EventType]
            [re-frame.core :as re :refer [reg-sub]]
            [reagent.core :as r]
            [example.events :as events]
            [example.subs :as subs]
            [example.utils.http-fx :refer  [GET POST PUT <sub >evt]]
            ;; demos
            [example.demos.demo-splash :as demo-splash]
            [example.demos.demo-text-field :as demo-text-field]
            [example.demos.demo-button :as demo-button]
            [example.demos.demo-autocomplete :as demo-autocomplete]
            [example.demos.demo-pickers :as demo-pickers]
            [example.demos.demo-menu :as demo-menu]
            [example.demos.table.demo-table :as demo-table]
            ))

(defn hook-browser-navigation! []
  (doto (History.)
    (gevents/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  ;; prefix might be removeable --> https://gist.github.com/city41/aab464ae6c112acecfe1
  (secretary/set-config! :prefix "#")

  ;; Routes:start --------------------

  (defroute "/" []
    (re/dispatch [::events/set-active-demo "splash"]))

  (defroute "/demos/button" []
    (re/dispatch [::events/set-active-demo "button"]))

  (defroute "/demos/text-field" []
    (re/dispatch [::events/set-active-demo "text-field"]))

  (defroute "/demos/table" []
    (re/dispatch [::events/set-active-demo "table"]))

  (defroute "/demos/autocomplete" []
    (re/dispatch [::events/set-active-demo "autocomplete"]))

  (defroute "/demos/pickers" []
    (re/dispatch [::events/set-active-demo "pickers"]))

  (defroute "/demos/menu" []
    (re/dispatch [::events/set-active-demo "menu"]))


  ;; Routes:end --------------------

  (hook-browser-navigation!))

(defn get-main-demo [demo-name]
  (case demo-name
    "splash"                demo-splash/demo-splash
    "button"                demo-button/demo-button
    "table"                 demo-table/people-view
    "text-field"            demo-text-field/demo-text-field
    "autocomplete"          demo-autocomplete/demo-autocomplete
    "pickers"               demo-pickers/demo-pickers
    "menu"                  demo-menu/demo-menu)
)
