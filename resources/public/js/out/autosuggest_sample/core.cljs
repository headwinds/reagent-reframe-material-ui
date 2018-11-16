(ns autosuggest-sample.core
    (:require [reagent.core :as r :refer [atom]]
              cljsjs.react-autosuggest
              [clojure.string :as str]))

(def languages [{:name "C"   :year 1972}
                {:name "C#" :year 2000}
                {:name "C++" :year 1983}
                {:name "Clojure" :year 2007}
                {:name "Elm" :year 2012}
                {:name "Go" :year 2009}
                {:name "Haskell" :year 1990}
                {:name "Java" :year 1995}
                {:name "Javascript" :year 1995}
                {:name "Perl" :year 1987}
                {:name "PHP" :year 1995}
                {:name "Python" :year 1991}
                {:name "Ruby" :year 1995}
                {:name "Scala" :year 2003}])

(defn str->regex [a-str]
  (let [escaped (str/replace a-str #"[\+\.\?\[\]\(\)\^\$]" (partial str "\\"))]
    (re-pattern (str "(?i)^" escaped ".*"))))

(defn getSuggestions [val]
  (let [trimmed-val (if (string? val) (str/trim val) "")]
    (if (empty? trimmed-val)
      []
      (into [] (filter (comp #(re-matches  (str->regex trimmed-val) %) :name) languages)))))

(defn getSuggestionValue [suggestion]
  (.-name suggestion))

(defn  renderSuggestion [suggestion]
  (r/as-element
   [:span (.-name suggestion)]))

(def Autosuggest (r/adapt-react-class js/Autosuggest))

(defn auto-suggest [id]
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
                    :inputProps {:placeholder "Type 'c'"
                                 :value @as-val
                                 :onChange update-state-val}}])))
