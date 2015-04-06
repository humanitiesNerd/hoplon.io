// Compiled by ClojureScript 0.0-2814 {:elide-asserts true, :static-fns true}
goog.provide('tailrecursion.hoplon.app_pages._quisquiliae_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon.util');
tailrecursion.hoplon.app_pages._quisquiliae_DOT_html.route = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$1("#/home/");
if(typeof tailrecursion.hoplon.app_pages._quisquiliae_DOT_html.page_load__10382__auto__ !== 'undefined'){
} else {
tailrecursion.hoplon.app_pages._quisquiliae_DOT_html.page_load__10382__auto__ = tailrecursion.hoplon.on_page_load((function (){
return window.location.reload();
}));
}
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.app_pages._quisquiliae_DOT_html.viewport = (function() { 
var viewport__delegate = function (args__10336__auto__){
var vec__17120 = tailrecursion.hoplon.parse_args(args__10336__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17120,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17120,(1),null);
var G__17121 = cljs.core.constant$keyword$45;
var G__17122 = "viewport";
var G__17123 = cljs.core.constant$keyword$46;
var G__17124 = cljs.core.first(kids);
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(G__17121,G__17122,G__17123,G__17124) : tailrecursion.hoplon.html_meta.call(null,G__17121,G__17122,G__17123,G__17124));
};
var viewport = function (var_args){
var args__10336__auto__ = null;
if (arguments.length > 0) {
var G__17125__i = 0, G__17125__a = new Array(arguments.length -  0);
while (G__17125__i < G__17125__a.length) {G__17125__a[G__17125__i] = arguments[G__17125__i + 0]; ++G__17125__i;}
  args__10336__auto__ = new cljs.core.IndexedSeq(G__17125__a,0);
} 
return viewport__delegate.call(this,args__10336__auto__);};
viewport.cljs$lang$maxFixedArity = 0;
viewport.cljs$lang$applyTo = (function (arglist__17126){
var args__10336__auto__ = cljs.core.seq(arglist__17126);
return viewport__delegate(args__10336__auto__);
});
viewport.cljs$core$IFn$_invoke$arity$variadic = viewport__delegate;
return viewport;
})()
;
tailrecursion.hoplon.app_pages._quisquiliae_DOT_html.setup = (function setup(){
return (new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[tailrecursion.hoplon.app_pages._quisquiliae_DOT_html.viewport.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["width=device-width, initial-scale=1.0"], 0)),(function (){var G__17152 = cljs.core.constant$keyword$47;
var G__17153 = "css/quisquiliae.css";
var G__17154 = cljs.core.constant$keyword$48;
var G__17155 = "stylesheet";
return (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4(G__17152,G__17153,G__17154,G__17155) : tailrecursion.hoplon.link.call(null,G__17152,G__17153,G__17154,G__17155));
})(),(function (){var G__17156 = cljs.core.constant$keyword$47;
var G__17157 = "https://fonts.googleapis.com/css?family=Oswald:400,300,700";
var G__17158 = cljs.core.constant$keyword$49;
var G__17159 = "text/css";
var G__17160 = cljs.core.constant$keyword$48;
var G__17161 = "stylesheet";
return (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(G__17156,G__17157,G__17158,G__17159,G__17160,G__17161) : tailrecursion.hoplon.link.call(null,G__17156,G__17157,G__17158,G__17159,G__17160,G__17161));
})(),(function (){var G__17162 = cljs.core.constant$keyword$47;
var G__17163 = "https://fonts.googleapis.com/css?family=EB+Garamond";
var G__17164 = cljs.core.constant$keyword$49;
var G__17165 = "text/css";
var G__17166 = cljs.core.constant$keyword$48;
var G__17167 = "stylesheet";
return (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(G__17162,G__17163,G__17164,G__17165,G__17166,G__17167) : tailrecursion.hoplon.link.call(null,G__17162,G__17163,G__17164,G__17165,G__17166,G__17167));
})(),(function (){var G__17168 = cljs.core.constant$keyword$50;
var G__17169 = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$2(G__17168,G__17169) : tailrecursion.hoplon.script.call(null,G__17168,G__17169));
})(),(function (){var G__17170 = cljs.core.constant$keyword$49;
var G__17171 = "text/javascript";
var G__17172 = "<!--/*--><![CDATA[/*><!--*/\nMathJax.Hub.Config({\n// Only one of the two following lines, depending on user settings\n// First allows browser-native MathML display, second forces HTML/CSS\n//  config: [\"MMLorHTML.js\"], jax: [\"input/TeX\"],\njax: [\"input/TeX\", \"output/HTML-CSS\"],\nextensions: [\"tex2jax.js\",\"TeX/AMSmath.js\",\"TeX/AMSsymbols.js\",\n         \"TeX/noUndefined.js\"],\ntex2jax: {\ninlineMath: [ [\"\\\\(\",\"\\\\)\"] ],\ndisplayMath: [ ['$$','$$'], [\"\\\\[\",\"\\\\]\"], [\"\\\\begin{displaymath}\",\"\\\\end{displaymath}\"] ],\nskipTags: [\"script\",\"noscript\",\"style\",\"textarea\",\"pre\",\"code\"],\nignoreClass: \"tex2jax_ignore\",\nprocessEscapes: false,\nprocessEnvironments: true,\npreview: \"TeX\"\n},\nshowProcessingMessages: true,\ndisplayAlign: \"center\",\ndisplayIndent: \"2em\",\n\n\\\"HTML-CSS\\\": {\n scale: 133,\n availableFonts: [\"STIX\",\"TeX\"],\n preferredFont: \"TeX\",\n webFont: \"TeX\",\n imageFont: \"TeX\",\n showMathMenu: true,\n},\nMMLorHTML: {\n prefer: {\n     MSIE:    \"MML\",\n     Firefox: \"MML\",\n     Opera:   \"HTML\",\n     other:   \"HTML\"\n }\n}\n});\n                  /*]]>*///-->";
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$3(G__17170,G__17171,G__17172) : tailrecursion.hoplon.script.call(null,G__17170,G__17171,G__17172));
})(),(function (){var G__17173 = cljs.core.constant$keyword$46;
var G__17174 = "https://twitter.com/catonano";
var G__17175 = cljs.core.constant$keyword$45;
var G__17176 = "author";
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(G__17173,G__17174,G__17175,G__17176) : tailrecursion.hoplon.html_meta.call(null,G__17173,G__17174,G__17175,G__17176));
})()],null));
});
tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$51,"en",(function (){var G__17177 = (function (){var G__17182 = cljs.core.constant$keyword$52;
var G__17183 = "utf-8";
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$2(G__17182,G__17183) : tailrecursion.hoplon.html_meta.call(null,G__17182,G__17183));
})();
var G__17178 = (function (){var G__17184 = cljs.core.constant$keyword$45;
var G__17185 = "keywords";
var G__17186 = cljs.core.constant$keyword$46;
var G__17187 = "clojure, clojurescript, cqrs, castra, cljson, spa";
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(G__17184,G__17185,G__17186,G__17187) : tailrecursion.hoplon.html_meta.call(null,G__17184,G__17185,G__17186,G__17187));
})();
var G__17179 = (function (){var G__17188 = cljs.core.constant$keyword$45;
var G__17189 = "description";
var G__17190 = cljs.core.constant$keyword$46;
var G__17191 = "Hoplon provides a number of libraries promoting a simpler model for Clojure/ClojureScript web applications.";
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(G__17188,G__17189,G__17190,G__17191) : tailrecursion.hoplon.html_meta.call(null,G__17188,G__17189,G__17190,G__17191));
})();
var G__17180 = tailrecursion.hoplon.app_pages._quisquiliae_DOT_html.setup();
var G__17181 = (function (){var G__17192 = "My litle static indie personal blog";
return (tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1(G__17192) : tailrecursion.hoplon.title.call(null,G__17192));
})();
return (tailrecursion.hoplon.head.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.head.cljs$core$IFn$_invoke$arity$5(G__17177,G__17178,G__17179,G__17180,G__17181) : tailrecursion.hoplon.head.call(null,G__17177,G__17178,G__17179,G__17180,G__17181));
})(),(function (){var G__17193 = cljs.core.constant$keyword$31;
var G__17194 = "c1";
var G__17195 = (function (){var G__17196 = (function (){var G__17200 = cljs.core.constant$keyword$31;
var G__17201 = "topfix";
var G__17202 = cljs.core.constant$keyword$53;
var G__17203 = tailrecursion.javelin.formula(((function (G__17200,G__17201,G__17202,G__17193,G__17194){
return (function (G__17204){
return G__17204;
});})(G__17200,G__17201,G__17202,G__17193,G__17194))
).call(null,tailrecursion.hoplon.app_pages._quisquiliae_DOT_html.route);
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$4(G__17200,G__17201,G__17202,G__17203) : tailrecursion.hoplon.a.call(null,G__17200,G__17201,G__17202,G__17203));
})();
var G__17197 = (function (){var G__17205 = (function (){var G__17206 = cljs.core.constant$keyword$31;
var G__17207 = "nojs-error";
var G__17208 = "This page uses JavaScript but it looks like you have it turned off.";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__17206,G__17207,G__17208) : tailrecursion.hoplon.div.call(null,G__17206,G__17207,G__17208));
})();
return (tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1(G__17205) : tailrecursion.hoplon.noscript.call(null,G__17205));
})();
var G__17198 = (function (){var G__17209 = (function (){var G__17210 = (function (){var G__17211 = cljs.core.constant$keyword$31;
var G__17212 = "blog-header";
var G__17213 = "Quisquiliae";
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(G__17211,G__17212,G__17213) : tailrecursion.hoplon.h1.call(null,G__17211,G__17212,G__17213));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(G__17210) : tailrecursion.hoplon.div.call(null,G__17210));
})();
return (tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1(G__17209) : tailrecursion.hoplon.header.call(null,G__17209));
})();
var G__17199 = (function (){var G__17214 = (function (){var G__17215 = (function (){var G__17218 = (function (){var G__17219 = cljs.core.constant$keyword$31;
var G__17220 = "article-title";
var G__17221 = "About Playground";
return (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(G__17219,G__17220,G__17221) : tailrecursion.hoplon.h2.call(null,G__17219,G__17220,G__17221));
})();
return (tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1(G__17218) : tailrecursion.hoplon.header.call(null,G__17218));
})();
var G__17216 = (function (){var G__17222 = (function (){var G__17227 = (function (){var G__17228 = cljs.core.constant$keyword$31;
var G__17229 = "paragraph-title";
var G__17230 = "About Playground";
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$3(G__17228,G__17229,G__17230) : tailrecursion.hoplon.h3.call(null,G__17228,G__17229,G__17230));
})();
return (tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1(G__17227) : tailrecursion.hoplon.header.call(null,G__17227));
})();
var G__17223 = (function (){var G__17231 = "This started as an attempt to implement the linear regression algorithm in\n\t  cascalog, following instructions from the famous ";
var G__17232 = (function (){var G__17234 = cljs.core.constant$keyword$47;
var G__17235 = "http://www.cs.stanford.edu/people/ang//papers/nips06-mapreducemulticore.pdf";
var G__17236 = "article ";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__17234,G__17235,G__17236) : tailrecursion.hoplon.a.call(null,G__17234,G__17235,G__17236));
})();
var G__17233 = "by Andrew Ng and others";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$3(G__17231,G__17232,G__17233) : tailrecursion.hoplon.p.call(null,G__17231,G__17232,G__17233));
})();
var G__17224 = (function (){var G__17237 = (function (){var G__17239 = cljs.core.constant$keyword$47;
var G__17240 = "https://mahout.apache.org/";
var G__17241 = "Mahout ";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__17239,G__17240,G__17241) : tailrecursion.hoplon.a.call(null,G__17239,G__17240,G__17241));
})();
var G__17238 = "already existed but that is in java and probably lower level\n\t  than this.";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__17237,G__17238) : tailrecursion.hoplon.p.call(null,G__17237,G__17238));
})();
var G__17225 = (function (){var G__17242 = "This is half a page of code and could be read by an high schooler.";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__17242) : tailrecursion.hoplon.p.call(null,G__17242));
})();
var G__17226 = (function (){var G__17243 = "This is an exercise. In the future I'd like to try to implement the\n\t  other algorithms that are discussed there";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__17243) : tailrecursion.hoplon.p.call(null,G__17243));
})();
return (tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$5(G__17222,G__17223,G__17224,G__17225,G__17226) : tailrecursion.hoplon.section.call(null,G__17222,G__17223,G__17224,G__17225,G__17226));
})();
var G__17217 = (function (){var G__17244 = (function (){var G__17248 = (function (){var G__17249 = "The main problem I had";
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__17249) : tailrecursion.hoplon.h3.call(null,G__17249));
})();
return (tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1(G__17248) : tailrecursion.hoplon.header.call(null,G__17248));
})();
var G__17245 = (function (){var G__17250 = "My biggest problem was to understand correctly the mathematical\n\t    notation. I was not sure what was supposed to be a matrix and what was\n\t    supposed to be a number or a vector. It was a type problem, if you\n\t    like, and the language didn't help.";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__17250) : tailrecursion.hoplon.p.call(null,G__17250));
})();
var G__17246 = (function (){var G__17251 = "The starting point is the canonical form";
var G__17252 = "\\begin{equation}\n\\theta^{*} = A^{-1}b \n\\end{equation}";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__17251,G__17252) : tailrecursion.hoplon.p.call(null,G__17251,G__17252));
})();
var G__17247 = (function (){var G__17253 = "Keeping in mind that ";
var G__17254 = "\\(X\\)";
var G__17255 = " is the matrix whose rows are training instances, if we set ";
var G__17256 = "\\(A\\)";
var G__17257 = " and ";
var G__17258 = "\\(b\\)";
var G__17259 = " like this ";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$7(G__17253,G__17254,G__17255,G__17256,G__17257,G__17258,G__17259) : tailrecursion.hoplon.p.call(null,G__17253,G__17254,G__17255,G__17256,G__17257,G__17258,G__17259));
})();
return (tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4(G__17244,G__17245,G__17246,G__17247) : tailrecursion.hoplon.section.call(null,G__17244,G__17245,G__17246,G__17247));
})();
return (tailrecursion.hoplon.article.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.article.cljs$core$IFn$_invoke$arity$3(G__17215,G__17216,G__17217) : tailrecursion.hoplon.article.call(null,G__17215,G__17216,G__17217));
})();
return (tailrecursion.hoplon.main.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.main.cljs$core$IFn$_invoke$arity$1(G__17214) : tailrecursion.hoplon.main.call(null,G__17214));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__17196,G__17197,G__17198,G__17199) : tailrecursion.hoplon.div.call(null,G__17196,G__17197,G__17198,G__17199));
})();
return (tailrecursion.hoplon.body.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.body.cljs$core$IFn$_invoke$arity$3(G__17193,G__17194,G__17195) : tailrecursion.hoplon.body.call(null,G__17193,G__17194,G__17195));
})()], 0));
