(set-env!
  :dependencies  '[[adzerk/boot-cljs      "0.0-2760-0" :scope "test"]
                   [adzerk/boot-cljs-repl "0.1.8"      :scope "test"]
                   [adzerk/boot-reload    "0.2.4"      :scope "test"]
                   [pandeiro/boot-http    "0.6.1"      :scope "test"]
                   [tailrecursion/hoplon  "6.0.0-SNAPSHOT"]
                   [markdown-clj          "0.9.62"]]
  :source-paths   #{"src"}
  :asset-paths    #{"resources/assets"}
  :target-path    "resources/public")

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]]
  '[tailrecursion.hoplon.boot :refer [hoplon prerender]])

(deftask dev
  "Build hoplon.io for local development."
  []
  (comp
    (watch)
    (hoplon :pretty-print true)
    (cljs :optimizations :none
          :unified-mode  true
          :source-map    true)
    (serve :dir (get-env :target-path))
    (speak)))

(deftask prod
  "Build hoplon.io for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))
