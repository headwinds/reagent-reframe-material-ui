(ns example.utils.js
  (:require
    [cljsjs.moment]))

(defn log [message data] (.log js/console message data))

(defn records-as-vec [response]
   (if (vector? (response :data)) (:data response ) [(:data response )]))

(defn moment-parse [ts]
  (.format (js/moment ts) "MMM Do, h:mm a"))
