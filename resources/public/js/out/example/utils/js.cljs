(ns example.utils.js
  (:require
    [cljsjs.moment]
    [clojure.string :as str]))

(defn log [message data] (.log js/console message data))

(defn records-as-vec [response]
   (if (vector? (response :data)) (:data response ) [(:data response )]))

(defn moment-parse [ts]
  (.format (js/moment ts) "MMM Do, h:mm a"))

(defn moment-parse-format [ts format]
  (.format (js/moment ts) format))

(defn moment-parse-d-format
  "ts has this format DD MM YYYY and needs to be conveted to MM DD YYYY for moment to consider it a date"
  [dd format]
  (let [date-vec (str/split dd " ")
        day (first date-vec)
        month (second date-vec)
        year (date-vec 2)
        ts (str month "-" day "-" year)]
  (.format (js/moment ts) format)))

  (defn reverse-to-yyyy
    "reverse YYYY-MM-DD back to MM DD YYYY"
    [dd]
    (let [_ (print " hhhhhhh " dd)
          date-vec (str/split dd "-")
          year (first date-vec)
          month (second date-vec)
          day (date-vec 2)
          ts (str day " " month " " year)]
          ts))
