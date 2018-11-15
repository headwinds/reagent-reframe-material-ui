(ns example.demos.table.demo-table
  (:require ["material-ui" :as mui]
            ["material-ui-icons" :as mui-icons]
            [example.demos.table.events :as events]
            [example.demos.table.subs :as subs]
            [example.utils.theme :refer [with-custom-styles]]
            [reagent.core :as r]
            [re-frame.core :as re]
            [example.utils.http-fx :as http :refer  [<sub >evt]]
            [example.demos.table.table-sort :as sort :refer [desc sort-table-data-by-selected-column]]
            [goog.object :as gobj]
            [reagent.impl.template :as rtpl]))

;;-- State

(def people-data (r/atom []))
(def order-people-by (r/atom "name"))

(def people-total (r/atom 0))

(def current-page (r/atom 1)) ;; API pages start at 0
(def current-page-pagination (r/atom 0)) ;; pagination start at 0
(def rows-per-page (r/atom 10))

(def people-map-row { "hidden" :update-id
                      "name"   :name
                      "gender" :gender
                      "mass"   :mass
                      "height" :height
                      "skin"   :skin_color
                      "birth"  :birth_year})

(def people-columns
  (r/atom [{:label "name" :sort "asc"}
           {:label "gender" :sort "asc"}
           {:label "mass" :sort "asc"}
           {:label "height" :sort "asc"}
           {:label "skin" :sort "asc"}
           {:label "birth" :sort "asc"}]))

;;-- Update State

(defn update-people-columns [label new-sort]
  (letfn [(map-sort [people]
            (if (= label (:label people ) )
             {:label (:label people) :sort new-sort }
             people))]
  (let [new-people-columns (map map-sort @people-columns)]
    new-people-columns)))

;;-- Handlers

(defn find-current-sort [label]
  (first
   (filter (fn [column] (= (get column :label) label)) @people-columns)))

(defn handle-request-sort [event label]
  (let [current-sort (get (find-current-sort label) :sort)
        new-sort (if (= current-sort "asc") "desc" "asc")
        new-people-columns (update-people-columns label new-sort)]
        (reset! order-people-by label)
        (reset! people-columns new-people-columns)))

(defn sort-icon [classes sort-direction label ordered-by]
  [:> mui/Tooltip {:class (.-tableRow classes)
                   :title "Sort"
                   :enterDelay 300}
   [:> mui/TableSortLabel {:class (.-tableRow classes)
                           :active (if (= ordered-by label) true false)
                           :direction sort-direction
                           :on-click (fn [ev] (handle-request-sort ev label))}
    label]])

(defn get-table-cell-header [classes label id sort-direction ordered-by]
  [:> mui/TableCell {:key (str "tableCellHeader" id)
                     :class (.-tableCell classes)
                     :sortDirection (if (= ordered-by label) sort-direction false)}
   [sort-icon classes sort-direction label ordered-by]])

(defn get-table-cell-body [classes label id]
  [:> mui/TableCell {:key (str "cellBody" id)
                     :class (.-tableCell classes)}
   [:div label]])

(defn get-columns [classes columns]
  (map-indexed (fn [idx column] (get-table-cell-header classes (:label column) idx (:sort column) @order-people-by))
       columns))

(defn update-people-data!
  "ensure the people are sorted by the currently select sort column name"
  [new-data people-map-row]
  (let [current-order (find-current-sort @order-people-by)
        sorted-data   (sort-table-data-by-selected-column (:sort current-order) @order-people-by new-data people-map-row)]
  (reset! people-data sorted-data)))

(defn handle-change-page [ev page]
  (let [new-page (inc page)]
  (reset! current-page new-page)
  (reset! current-page-pagination page)
  (re/dispatch [:get-people { :page new-page
                                :limit @rows-per-page}])))

(defn handle-change-rows-per-page [new-rows-per-page]
  (reset! rows-per-page new-rows-per-page))

(defn handle-row-click [ev id selected-row-data]
  (let [id (:people-id (js->clj selected-row-data :keywordize-keys true))
        url (str "#/people/" id)]
    (re/dispatch [:set-current-people selected-row-data])
    (http/set-location url)))

(defn get-rows [classes rows]
  (map-indexed (fn [idx row]
         [:> mui/TableRow {:key (str "row" idx)
                           :hover true
                           :class (.-tableRow classes)
                           :on-click (fn [ev] (handle-row-click ev idx row))}

          (get-table-cell-body classes (:name row) 0)
          (get-table-cell-body classes (:gender row) 1)
          (get-table-cell-body classes (:mass row) 2)
          (get-table-cell-body classes (:height row) 3)
          (get-table-cell-body classes (:skin_color row) 4)
          (get-table-cell-body classes (:birth_year row) 5)])

       rows))

;;-- Views

(defn get-pagination [classes]
  [:> mui/TablePagination {:class (.-tablePagination classes)
                           :colSpan 3
                           :count @people-total
                           :rowsPerPage @rows-per-page
                           :page @current-page-pagination
                           :onChangePage handle-change-page
                           :labelRowsPerPage "" ;; disables the rows per page text
                           :rowsPerPageOptions [10] ;; if less than 2, no options will show which what I want for now
                           ;;:onChangeRowsPerPage handle-change-rows-per-page
                           }])

(defn people-table [{:keys [classes] :as props}]
  [:div {:style {:width "900px" :marginTop 20 }}
   [:> mui/Table {:class (.-table classes)}
    [:> mui/TableHead {:key "head" :class (.-tableHead classes)}
     [:> mui/TableRow {:class (.-tableRow classes)}
      (get-columns classes @people-columns)]]

    [:> mui/TableBody {:key "body" :class (.-tableBody classes)}
                                               (get-rows classes @people-data)] ;; important concept to de-reference the atom to be able to read and use the underling data

    [:> mui/TableFooter {:key "footer" :class (.-tableFooter classes)}
     [:> mui/TableRow {:key "footer-row" :class (.-tableRow classes)}
        (if (> @people-total @rows-per-page) (get-pagination classes))  ]]]])

(defn people-view [{:keys [classes] :as props}]
  (>evt [:get-people {:page @current-page
                      :limit @rows-per-page}])
  (fn []
    (let [people (<sub [::subs/people])
          new-people-total (<sub [::subs/people-total])]
      (when (> (count people) 0)
        (do
          (reset! people-total new-people-total)
          (update-people-data! people people-map-row)))
      [:div
       (if (> (count people) 0)
         [:> (with-custom-styles (r/reactify-component people-table))]
         [:div {:style {:padding 20 :borderTop "1px solid #ddd"}} "Loading..."]
         )
      ])))
