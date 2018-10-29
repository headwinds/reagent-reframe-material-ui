(ns example.demos.table.table-sort
  (:require [clojure.string :as str]))

(defn get-field [row selected-column map-row]
  (let [field (get map-row selected-column)]
  (if (string? (get row field))
        (.toLowerCase (get row field "no data"))
        (get row field) )))

(defn desc [rowA rowB selected-column map-row]
  (cond
    (< (get-field rowB selected-column map-row) (get-field rowA selected-column map-row)) -1
    (> (get-field rowB selected-column map-row) (get-field rowA selected-column map-row)) 1
    :else 0 ))

(defn get-sorting [order selected-column map-row & args]
  (if (= order "desc")
    (fn [rowA rowB] (desc rowA rowB selected-column map-row))
    (fn [rowA rowB] (- (desc rowA rowB selected-column map-row)))
  ))

(defn sort-table-data-by-selected-column [order selected-column rows map-row]
  (print "sort-table-data-by-selected-column selected-column:" selected-column)
  (sort (get-sorting order selected-column map-row) rows))
