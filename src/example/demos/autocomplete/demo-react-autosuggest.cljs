(ns example.demos.autocomplete.demo-react-autosuggest
    (:require [reagent.core :as r :refer [atom]]
              cljsjs.react-autosuggest
              [clojure.string :as str]))

(def people [{:name "Luke"}
             {:name "Leia"}
             {:name "Lando"}])

(defn str->regex [a-str]
  (let [escaped (str/replace a-str #"[\+\.\?\[\]\(\)\^\$]" (partial str "\\"))]
    (re-pattern (str "(?i)^" escaped ".*"))))

(defn getSuggestions [val]
  (let [trimmed-val (if (string? val) (str/trim val) "")]
    (if (empty? trimmed-val)
      []
      (into [] (filter (comp #(re-matches  (str->regex trimmed-val) %) :name) people)))))

(defn getSuggestionValue [suggestion]
  (.-name suggestion))

(defn  renderSuggestion [suggestion]
  (r/as-element
   [:span (.-name suggestion)]))

(def Autosuggest (r/adapt-react-class js/Autosuggest))

(defn autosuggest-view [id]
  (let [suggestions (r/atom (getSuggestions ""))
        as-val (r/atom "")
        update-suggestions (fn [arg]
                             (let [new-sugg (getSuggestions (.-value arg))]
                               (reset! suggestions new-sugg)
                               nil))
        update-state-val (fn [evt new-val method]
                           (reset! as-val (.-newValue new-val))
                           nil)]
    (fn [id]
      [Autosuggest {:id id
                    :suggestions @suggestions
                    :onSuggestionsFetchRequested update-suggestions
                    :alwaysRenderSuggestions true
                    :getSuggestionValue getSuggestionValue
                    :renderSuggestion renderSuggestion
                    :inputProps {:placeholder "Type 'l'"
                                 :value @as-val
                                 :onChange update-state-val}}])))
