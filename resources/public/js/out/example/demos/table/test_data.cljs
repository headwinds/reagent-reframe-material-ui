(ns example.demos.table.test-data
  (:require [clojure.string :as str]))


(def people
  {:count 87,
 :next "https://swapi.co/api/people/?page=2",
 :previous nil,
 :results
 [{:mass "77",
   :birth_year "19BBY",
   :skin_color "fair",
   :name "Luke Skywalker",
   :species
   ["https://swapi.co/api/species/1/"],
   :created "2014-12-09T13:50:51.644000Z",
   :edited "2014-12-20T21:17:56.891000Z",
   :films
   ["https://swapi.co/api/films/2/"
    "https://swapi.co/api/films/6/"
    "https://swapi.co/api/films/3/"
    "https://swapi.co/api/films/1/"
    "https://swapi.co/api/films/7/"],
   :url "https://swapi.co/api/people/1/",
   :hair_color "blond",
   :starships
   ["https://swapi.co/api/starships/12/"
    "https://swapi.co/api/starships/22/"],
   :gender "male",
   :vehicles
   ["https://swapi.co/api/vehicles/14/"
    "https://swapi.co/api/vehicles/30/"],
   :eye_color "blue",
   :homeworld
   "https://swapi.co/api/planets/1/",
   :height "172"}
  {:mass "75",
   :birth_year "112BBY",
   :skin_color "gold",
   :name "C-3PO",
   :species
   ["https://swapi.co/api/species/2/"],
   :created "2014-12-10T15:10:51.357000Z",
   :edited "2014-12-20T21:17:50.309000Z",
   :films
   ["https://swapi.co/api/films/2/"
    "https://swapi.co/api/films/5/"
    "https://swapi.co/api/films/4/"
    "https://swapi.co/api/films/6/"
    "https://swapi.co/api/films/3/"
    "https://swapi.co/api/films/1/"],
   :url "https://swapi.co/api/people/2/",
   :hair_color "n/a",
   :starships [],
   :gender "n/a",
   :vehicles [],
   :eye_color "yellow",
   :homeworld
   "https://swapi.co/api/planets/1/",
   :height "167"}
  {:mass "32",
   :birth_year "33BBY",
   :skin_color "white, blue",
   :name "R2-D2",
   :species
   ["https://swapi.co/api/species/2/"],
   :created "2014-12-10T15:11:50.376000Z",
   :edited "2014-12-20T21:17:50.311000Z",
   :films
   ["https://swapi.co/api/films/2/"
    "https://swapi.co/api/films/5/"
    "https://swapi.co/api/films/4/"
    "https://swapi.co/api/films/6/"
    "https://swapi.co/api/films/3/"
    "https://swapi.co/api/films/1/"
    "https://swapi.co/api/films/7/"],
   :url "https://swapi.co/api/people/3/",
   :hair_color "n/a",
   :starships [],
   :gender "n/a",
   :vehicles [],
   :eye_color "red",
   :homeworld
   "https://swapi.co/api/planets/8/",
   :height "96"}
  {:mass "136",
   :birth_year "41.9BBY",
   :skin_color "white",
   :name "Darth Vader",
   :species
   ["https://swapi.co/api/species/1/"],
   :created "2014-12-10T15:18:20.704000Z",
   :edited "2014-12-20T21:17:50.313000Z",
   :films
   ["https://swapi.co/api/films/2/"
    "https://swapi.co/api/films/6/"
    "https://swapi.co/api/films/3/"
    "https://swapi.co/api/films/1/"],
   :url "https://swapi.co/api/people/4/",
   :hair_color "none",
   :starships
   ["https://swapi.co/api/starships/13/"],
   :gender "male",
   :vehicles [],
   :eye_color "yellow",
   :homeworld
   "https://swapi.co/api/planets/1/",
   :height "202"}
  {:mass "49",
   :birth_year "19BBY",
   :skin_color "light",
   :name "Leia Organa",
   :species
   ["https://swapi.co/api/species/1/"],
   :created "2014-12-10T15:20:09.791000Z",
   :edited "2014-12-20T21:17:50.315000Z",
   :films
   ["https://swapi.co/api/films/2/"
    "https://swapi.co/api/films/6/"
    "https://swapi.co/api/films/3/"
    "https://swapi.co/api/films/1/"
    "https://swapi.co/api/films/7/"],
   :url "https://swapi.co/api/people/5/",
   :hair_color "brown",
   :starships [],
   :gender "female",
   :vehicles
   ["https://swapi.co/api/vehicles/30/"],
   :eye_color "brown",
   :homeworld
   "https://swapi.co/api/planets/2/",
   :height "150"}
  {:mass "120",
   :birth_year "52BBY",
   :skin_color "light",
   :name "Owen Lars",
   :species
   ["https://swapi.co/api/species/1/"],
   :created "2014-12-10T15:52:14.024000Z",
   :edited "2014-12-20T21:17:50.317000Z",
   :films
   ["https://swapi.co/api/films/5/"
    "https://swapi.co/api/films/6/"
    "https://swapi.co/api/films/1/"],
   :url "https://swapi.co/api/people/6/",
   :hair_color "brown, grey",
   :starships [],
   :gender "male",
   :vehicles [],
   :eye_color "blue",
   :homeworld
   "https://swapi.co/api/planets/1/",
   :height "178"}
  {:mass "75",
   :birth_year "47BBY",
   :skin_color "light",
   :name "Beru Whitesun lars",
   :species
   ["https://swapi.co/api/species/1/"],
   :created "2014-12-10T15:53:41.121000Z",
   :edited "2014-12-20T21:17:50.319000Z",
   :films
   ["https://swapi.co/api/films/5/"
    "https://swapi.co/api/films/6/"
    "https://swapi.co/api/films/1/"],
   :url "https://swapi.co/api/people/7/",
   :hair_color "brown",
   :starships [],
   :gender "female",
   :vehicles [],
   :eye_color "blue",
   :homeworld
   "https://swapi.co/api/planets/1/",
   :height "165"}
  {:mass "32",
   :birth_year "unknown",
   :skin_color "white, red",
   :name "R5-D4",
   :species
   ["https://swapi.co/api/species/2/"],
   :created "2014-12-10T15:57:50.959000Z",
   :edited "2014-12-20T21:17:50.321000Z",
   :films ["https://swapi.co/api/films/1/"],
   :url "https://swapi.co/api/people/8/",
   :hair_color "n/a",
   :starships [],
   :gender "n/a",
   :vehicles [],
   :eye_color "red",
   :homeworld
   "https://swapi.co/api/planets/1/",
   :height "97"}
  {:mass "84",
   :birth_year "24BBY",
   :skin_color "light",
   :name "Biggs Darklighter",
   :species
   ["https://swapi.co/api/species/1/"],
   :created "2014-12-10T15:59:50.509000Z",
   :edited "2014-12-20T21:17:50.323000Z",
   :films ["https://swapi.co/api/films/1/"],
   :url "https://swapi.co/api/people/9/",
   :hair_color "black",
   :starships
   ["https://swapi.co/api/starships/12/"],
   :gender "male",
   :vehicles [],
   :eye_color "brown",
   :homeworld
   "https://swapi.co/api/planets/1/",
   :height "183"}
  {:mass "77",
   :birth_year "57BBY",
   :skin_color "fair",
   :name "Obi-Wan Kenobi",
   :species
   ["https://swapi.co/api/species/1/"],
   :created "2014-12-10T16:16:29.192000Z",
   :edited "2014-12-20T21:17:50.325000Z",
   :films
   ["https://swapi.co/api/films/2/"
    "https://swapi.co/api/films/5/"
    "https://swapi.co/api/films/4/"
    "https://swapi.co/api/films/6/"
    "https://swapi.co/api/films/3/"
    "https://swapi.co/api/films/1/"],
   :url "https://swapi.co/api/people/10/",
   :hair_color "auburn, white",
   :starships
   ["https://swapi.co/api/starships/48/"
    "https://swapi.co/api/starships/59/"
    "https://swapi.co/api/starships/64/"
    "https://swapi.co/api/starships/65/"
    "https://swapi.co/api/starships/74/"],
   :gender "male",
   :vehicles
   ["https://swapi.co/api/vehicles/38/"],
   :eye_color "blue-gray",
   :homeworld
   "https://swapi.co/api/planets/20/",
   :height "182"}]})
