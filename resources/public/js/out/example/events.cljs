(ns example.events
  (:require [reagent.core :as reagent]
            [re-frame.core :as re]
            [example.utils.http-fx :refer  [GET POST PUT <sub >evt set-location]]
            [goog.object :as gobj]
            [example.db :as db]
            [reagent.impl.template :as rtpl]))

;; DB

(re/reg-event-db
  :initialize
  (fn [_ _]
    db/default-db))

(re/reg-event-db
 ::set-active-demo
 (fn [db [_ active-demo]]
   (assoc db :inactive-demo (:active-demo db))
   (assoc db :active-demo active-demo)))

(re/reg-event-db :active-demo
 (fn [db [_ active-demo]]
   (assoc db :active-demo active-demo)))

;; FX

(re/reg-event-fx
   :get-starwars
   [(when ^boolean goog.DEBUG re/debug)]
  (fn [{db :db} [_ payload]]
    { :db (do
            (assoc-in db [:loading? :starwars] true)
            (assoc-in db [:starwars :page] (:page payload)))
      :http-xhrio (GET (str "https://swapi.co/api/" (:resource payload) "/?page=" (:page payload) "&search=" (:query payload))
                       :get-starwars-success
                       :get-starwars-fail)}))

 (re/reg-event-db :get-starwars-success
  (fn [db [_ response]]
    (let [records (:results response)
          count (:count response)]
        (-> db
          (assoc-in [:starwars :records] records)
          (assoc-in [:starwars :count] count)
          (assoc-in [:loading? :starwars] false)))))

 (re/reg-event-db :retrieve-session-fail
  (fn [db [_ response]]
    (-> db
        (assoc-in [:loading? :starwars] false))
              ))

;;-- GITHUB

(def github-origin "https://api.github.com")

 (re/reg-event-fx :get-github-events
  (fn [{db :db} [_ vals]]
    {:http-xhrio (GET (str github-origin "/orgs/reagent-project/events")
                       :get-github-events-success
                       :get-github-events-fail)}
   ))

 (re/reg-event-db :get-github-events-success
  (fn [db [_ response]]
    (assoc db :user response)))

 (re/reg-event-db :get-github-events-fail
  (fn [db [_ response]] db))
