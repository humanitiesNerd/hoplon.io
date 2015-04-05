(set-env!
  :dependencies  '[[clj-tagsoup               "0.3.0"]
                   [adzerk/boot-cljs-repl     "0.1.9"]
                   [adzerk/boot-reload        "0.2.6"]
                   [boot/core                 "2.0.0-rc13"]
                   [boot-sassc                "0.1.2"]                   
                   [pandeiro/boot-http        "0.6.2"]
                   [markdown-clj              "0.9.63"]
                   [adzerk/boot-cljs          "0.0-2814-0"]
                   [tailrecursion/boot-hoplon "0.1.0-SNAPSHOT"]
                   [tailrecursion/hoplon      "6.0.0-SNAPSHOT"]]
  :source-paths   #{"src"}
  :resource-paths #{"resources/assets"}
  :target-path    "resources/public")


(require
  '[boot.core :as core]
  '[boot.util :as util]
  '[clojure.java.io :as io]
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]]
  '[tailrecursion.boot-hoplon :refer [haml hoplon prerender html2cljs]]
  '[mathias.boot-sassc :refer [sass]]
)


(comment
(deftask sass
  [c compressed bool "compress the output"]
  (let [tmp (core/temp-dir!)]
    (core/with-pre-wrap fs
      (let [in-files (core/input-files fs)
            in-main (first (core/by-name ["app.scss"] in-files))
            output-dir (io/file tmp "css")
            out (io/file output-dir "app.css")]
        (.mkdir output-dir)
        (util/dosh "sass"
          "--sourcemap"
          "--style" (if compressed "compressed" "nested")
          (.getPath (core/tmpfile in-main))
          (.getPath out))
        (-> fs
          (core/add-resource tmp)
          (core/commit!))))))
)



(deftask dev
  "Build hoplon.io for local development."
  []
  (comp
    (watch)
    (speak)
    (haml)
    (sass :sass-file "quisquiliae.scss" :output-dir "css/")
    (hoplon)
    (reload)
    (cljs)))

(deftask prod
  "Build hoplon.io for production deployment."
  []
  (comp
    (hoplon :pretty-print true)
    (cljs :optimizations :advanced :source-map true)
    (prerender)))
