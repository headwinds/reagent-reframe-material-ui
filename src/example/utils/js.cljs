(ns example.utils.js)

(defn log [message data] (.log js/console message data))

(defn records-as-vec [response]
   (if (vector? (response :data)) (:data response ) [(:data response )]))
