(ns example.subs
  "Application wide re-frame subscriptions."
  (:require [re-frame.core :as re :refer [reg-sub]]))

(reg-sub ::active-demo
   (fn [db _] (:active-demo db)))

(reg-sub ::inactive-demo
  (fn [db _] (:inactive-demo db)))

(reg-sub ::starwars
  (fn [db _] (:starwars db)))
