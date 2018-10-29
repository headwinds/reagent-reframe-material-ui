(ns example.demos.table.subs
  (:require [re-frame.core :as re :refer [reg-sub]]))

(reg-sub ::people
  (fn [db _] (get-in db [:people :records])))

(reg-sub ::people-total
  (fn [db _] (get-in db [:people :total])))
