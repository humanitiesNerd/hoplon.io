(ns tailrecursion.hoplon.app-pages._quisquiliae_DOT_html
  (:require [tailrecursion.hoplon.util :as hutil]
            [tailrecursion.hoplon :refer [form
                                          audio
                                          input
                                          hgroup
                                          do!
                                          timeout
                                          $text
                                          rely
                                          base
                                          h1
                                          embed
                                          h3
                                          body
                                          keygen
                                          val-id
                                          on-append!
                                          progress
                                          main
                                          cite
                                          on-page-load
                                          object
                                          i
                                          p
                                          nav
                                          ruby
                                          relx
                                          check-val!
                                          a
                                          menu
                                          blockquote
                                          img
                                          $comment
                                          span
                                          track
                                          seq?*
                                          data
                                          u
                                          dl
                                          select
                                          html
                                          thead
                                          del
                                          eventsource
                                          append-child
                                          fieldset
                                          rel
                                          aside
                                          figure
                                          figcaption
                                          q
                                          on!
                                          bdi
                                          video
                                          address
                                          caption
                                          parse-args
                                          by-id
                                          dd
                                          rp
                                          hr
                                          tbody
                                          table
                                          acronym
                                          frame
                                          applet
                                          html-var
                                          add-initfn!
                                          pre
                                          ul
                                          dir
                                          html-time
                                          add-attributes!
                                          html-map
                                          sup
                                          dfn
                                          sub
                                          mark
                                          script
                                          big
                                          button
                                          wbr
                                          strong
                                          li
                                          dt
                                          frameset
                                          td
                                          tr
                                          section
                                          th
                                          optgroup
                                          rel-event
                                          iframe
                                          legend
                                          em
                                          kbd
                                          spliced
                                          article
                                          isindex
                                          abbr
                                          command
                                          source
                                          output
                                          basefont
                                          route-cell
                                          header
                                          datalist
                                          tfoot
                                          s
                                          ins
                                          footer
                                          title
                                          is-ie8
                                          h5
                                          canvas
                                          param
                                          font
                                          div
                                          option
                                          summary
                                          samp
                                          center
                                          small
                                          style
                                          textarea
                                          loop-tpl*
                                          strike
                                          h4
                                          tt
                                          head
                                          add-children!
                                          ol
                                          details
                                          col
                                          vector?*
                                          label
                                          rt
                                          when-dom
                                          h6
                                          link
                                          page-load
                                          colgroup
                                          meter
                                          html-meta
                                          text-val!
                                          bdo
                                          b
                                          code
                                          node?
                                          noframes
                                          replace-children!
                                          noscript
                                          safe-nth
                                          h2
                                          area
                                          br
                                          unsplice]]
            [tailrecursion.javelin :refer [input?
                                           cell
                                           cell?
                                           destroy-cell!
                                           ^{:private true} last-rank
                                           ^{:deprecated true} lift
                                           lens?
                                           set-formula!
                                           cell-doseq*
                                           ^{:private true, :dynamic true} *tx*
                                           deref*
                                           set-cell!
                                           lens
                                           formula?
                                           alts!
                                           dosync*
                                           cell-map
                                           formula]])
  (:require-macros [tailrecursion.hoplon :refer [text
                                                 with-timeout
                                                 sexp
                                                 defelem
                                                 def-values
                                                 with-page-load
                                                 loop-tpl
                                                 with-interval
                                                 with-init!]]
                   [tailrecursion.javelin :refer [with-let
                                                  mx2
                                                  dosync
                                                  cell=
                                                  set-cell!=
                                                  prop-cell
                                                  cell-doseq
                                                  defc
                                                  cell-let-1
                                                  defc=
                                                  macroexpand-all
                                                  mx cell-let]]))
(def route (route-cell "#/home/"))
(with-page-load (.. js/window -location reload))
(defelem
  viewport
  [attr kids]
  (html-meta :name "viewport" :content (first kids)))
(defn setup []
  (vector
    (viewport "width=device-width, initial-scale=1.0")
    (link :href "css/quisquiliae.css" :rel "stylesheet")
    (link
      :href
      "https://fonts.googleapis.com/css?family=Oswald:400,300,700"
      :type
      "text/css"
      :rel
      "stylesheet")
    (link
      :href
      "https://fonts.googleapis.com/css?family=EB+Garamond"
      :type
      "text/css"
      :rel
      "stylesheet")
    (script
      :src
      "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML")
    (script
      :type
      "text/javascript"
      "<!--/*--><![CDATA[/*><!--*/\nMathJax.Hub.Config({\n// Only one of the two following lines, depending on user settings\n// First allows browser-native MathML display, second forces HTML/CSS\n//  config: [\"MMLorHTML.js\"], jax: [\"input/TeX\"],\njax: [\"input/TeX\", \"output/HTML-CSS\"],\nextensions: [\"tex2jax.js\",\"TeX/AMSmath.js\",\"TeX/AMSsymbols.js\",\n         \"TeX/noUndefined.js\"],\ntex2jax: {\ninlineMath: [ [\"\\\\(\",\"\\\\)\"] ],\ndisplayMath: [ ['$$','$$'], [\"\\\\[\",\"\\\\]\"], [\"\\\\begin{displaymath}\",\"\\\\end{displaymath}\"] ],\nskipTags: [\"script\",\"noscript\",\"style\",\"textarea\",\"pre\",\"code\"],\nignoreClass: \"tex2jax_ignore\",\nprocessEscapes: false,\nprocessEnvironments: true,\npreview: \"TeX\"\n},\nshowProcessingMessages: true,\ndisplayAlign: \"center\",\ndisplayIndent: \"2em\",\n\n\\\"HTML-CSS\\\": {\n scale: 133,\n availableFonts: [\"STIX\",\"TeX\"],\n preferredFont: \"TeX\",\n webFont: \"TeX\",\n imageFont: \"TeX\",\n showMathMenu: true,\n},\nMMLorHTML: {\n prefer: {\n     MSIE:    \"MML\",\n     Firefox: \"MML\",\n     Opera:   \"HTML\",\n     other:   \"HTML\"\n }\n}\n});\n                  /*]]>*///-->")
    (html-meta :content "https://twitter.com/catonano" :name "author")))
(html
  :lang
  "en"
  (head
    (html-meta :charset "utf-8")
    (html-meta
      :name
      "keywords"
      :content
      "clojure, clojurescript, cqrs, castra, cljson, spa")
    (html-meta
      :name
      "description"
      :content
      "Hoplon provides a number of libraries promoting a simpler model for Clojure/ClojureScript web applications.")
    (setup)
    (title "My litle static indie personal blog"))
  (body
    :class
    "c1"
    (div
      (a :class "topfix" :do-scroll-to (cell= route))
      (noscript
        (div
          :class
          "nojs-error"
          "This page uses JavaScript but it looks like you have it turned off."))
      (header (div (h1 :class "blog-header" "Quisquiliae")))
      (main
        (article
          (header (h2 :class "article-title" "About Playground"))
          (section
            (header (h3 :class "paragraph-title" "About Playground"))
            (p
              "This started as an attempt to implement the linear regression algorithm in\n\t  cascalog, following instructions from the famous "
              (a
                :href
                "http://www.cs.stanford.edu/people/ang//papers/nips06-mapreducemulticore.pdf"
                "article ")
              "by Andrew Ng and others")
            (p
              (a :href "https://mahout.apache.org/" "Mahout ")
              "already existed but that is in java and probably lower level\n\t  than this.")
            (p
              "This is half a page of code and could be read by an high schooler.")
            (p
              "This is an exercise. In the future I'd like to try to implement the\n\t  other algorithms that are discussed there"))
          (section
            (header (h3 "The main problem I had"))
            (p
              "My biggest problem was to understand correctly the mathematical\n\t    notation. I was not sure what was supposed to be a matrix and what was\n\t    supposed to be a number or a vector. It was a type problem, if you\n\t    like, and the language didn't help.")
            (p
              "The starting point is the canonical form"
              "\\begin{equation}\n\\theta^{*} = A^{-1}b \n\\end{equation}")
            (p
              "Keeping in mind that "
              "\\(X\\)"
              " is the matrix whose rows are training instances, if we set "
              "\\(A\\)"
              " and "
              "\\(b\\)"
              " like this ")))))))