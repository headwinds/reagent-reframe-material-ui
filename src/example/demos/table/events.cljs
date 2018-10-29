(ns example.demos.table.events
  (:require [re-frame.core :as re]
            [clojure.string :as str]
            [example.utils.js :refer [log records-as-vec]]
            [example.utils.http-fx :as http :refer  [GET POST PATCH PUT set-location]]))


;; ---- HTTP REQUESTS ----------------------------------------------------------

 (re/reg-event-fx :get-people
   [(when ^boolean goog.DEBUG re/debug)]
  (fn [{db :db} [_ vals]]
    (let [page (:page vals)]

    {:http-xhrio (GET (str "https://swapi.co/api/people/?page=" page)
                       :get-people-success
                       :get-people-failure)}
   ))
  )

 (re/reg-event-db :get-people-success
  (fn [db [_ response]]
    (let [ records (:results response) ]
    (-> db
        (assoc-in [:loading? :people] false)
        (assoc-in [:people :total] (:count response))
        (assoc-in [:people :records] records))
        )))

 (re/reg-event-db :get-people-failure
  (fn [db [_ response]]
    (-> db
        (assoc-in [:loading? :people] false)
        (assoc :current-user {}
               :error response))))

 ;; ---- SET DB ----------------------------------------------------------

 (re/reg-event-db :set-current-file
  (fn [db [_ current-file]]
     (assoc db :current-file current-file)))
