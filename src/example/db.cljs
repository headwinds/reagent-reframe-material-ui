(ns example.db)

(def default-db
  {
   :active-demo "splash"
   :user nil ; current logged in user
   :logs nil
   :starwars {:records []
              :page 0
              :count 0}
   :loading? {:table  true
              :starwars true}
   :example {"title" "Reagent & Material UI"
             "subtile" "featuring Re-Frame"
   :people {:records nil
            :page 1
            :limit 10}
   }})
