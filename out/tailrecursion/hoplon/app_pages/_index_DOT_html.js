// Compiled by ClojureScript 0.0-2814 {:elide-asserts true, :static-fns true}
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon.util');
tailrecursion.hoplon.app_pages._index_DOT_html.route = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$1("#/home/");
if(typeof tailrecursion.hoplon.app_pages._index_DOT_html.page_load__10564__auto__ !== 'undefined'){
} else {
tailrecursion.hoplon.app_pages._index_DOT_html.page_load__10564__auto__ = tailrecursion.hoplon.on_page_load((function (){
return window.location.reload();
}));
}
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.app_pages._index_DOT_html.viewport = (function() { 
var viewport__delegate = function (args__10518__auto__){
var vec__17302 = tailrecursion.hoplon.parse_args(args__10518__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17302,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17302,(1),null);
var G__17303 = cljs.core.constant$keyword$45;
var G__17304 = "viewport";
var G__17305 = cljs.core.constant$keyword$46;
var G__17306 = cljs.core.first(kids);
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(G__17303,G__17304,G__17305,G__17306) : tailrecursion.hoplon.html_meta.call(null,G__17303,G__17304,G__17305,G__17306));
};
var viewport = function (var_args){
var args__10518__auto__ = null;
if (arguments.length > 0) {
var G__17307__i = 0, G__17307__a = new Array(arguments.length -  0);
while (G__17307__i < G__17307__a.length) {G__17307__a[G__17307__i] = arguments[G__17307__i + 0]; ++G__17307__i;}
  args__10518__auto__ = new cljs.core.IndexedSeq(G__17307__a,0);
} 
return viewport__delegate.call(this,args__10518__auto__);};
viewport.cljs$lang$maxFixedArity = 0;
viewport.cljs$lang$applyTo = (function (arglist__17308){
var args__10518__auto__ = cljs.core.seq(arglist__17308);
return viewport__delegate(args__10518__auto__);
});
viewport.cljs$core$IFn$_invoke$arity$variadic = viewport__delegate;
return viewport;
})()
;
tailrecursion.hoplon.app_pages._index_DOT_html.setup = (function setup(){
return (new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[tailrecursion.hoplon.app_pages._index_DOT_html.viewport.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["width=device-width, initial-scale=1.0"], 0)),(function (){var G__17334 = cljs.core.constant$keyword$47;
var G__17335 = "css/quisquiliae.css";
var G__17336 = cljs.core.constant$keyword$48;
var G__17337 = "stylesheet";
return (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4(G__17334,G__17335,G__17336,G__17337) : tailrecursion.hoplon.link.call(null,G__17334,G__17335,G__17336,G__17337));
})(),(function (){var G__17338 = cljs.core.constant$keyword$47;
var G__17339 = "https://fonts.googleapis.com/css?family=Oswald:400,300,700";
var G__17340 = cljs.core.constant$keyword$49;
var G__17341 = "text/css";
var G__17342 = cljs.core.constant$keyword$48;
var G__17343 = "stylesheet";
return (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(G__17338,G__17339,G__17340,G__17341,G__17342,G__17343) : tailrecursion.hoplon.link.call(null,G__17338,G__17339,G__17340,G__17341,G__17342,G__17343));
})(),(function (){var G__17344 = cljs.core.constant$keyword$47;
var G__17345 = "https://fonts.googleapis.com/css?family=EB+Garamond";
var G__17346 = cljs.core.constant$keyword$49;
var G__17347 = "text/css";
var G__17348 = cljs.core.constant$keyword$48;
var G__17349 = "stylesheet";
return (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(G__17344,G__17345,G__17346,G__17347,G__17348,G__17349) : tailrecursion.hoplon.link.call(null,G__17344,G__17345,G__17346,G__17347,G__17348,G__17349));
})(),(function (){var G__17350 = cljs.core.constant$keyword$50;
var G__17351 = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$2(G__17350,G__17351) : tailrecursion.hoplon.script.call(null,G__17350,G__17351));
})(),(function (){var G__17352 = cljs.core.constant$keyword$49;
var G__17353 = "text/javascript";
var G__17354 = "<!--/*--><![CDATA[/*><!--*/\nMathJax.Hub.Config({\n// Only one of the two following lines, depending on user settings\n// First allows browser-native MathML display, second forces HTML/CSS\n//  config: [\"MMLorHTML.js\"], jax: [\"input/TeX\"],\njax: [\"input/TeX\", \"output/HTML-CSS\"],\nextensions: [\"tex2jax.js\",\"TeX/AMSmath.js\",\"TeX/AMSsymbols.js\",\n         \"TeX/noUndefined.js\"],\ntex2jax: {\ninlineMath: [ [\"\\\\(\",\"\\\\)\"] ],\ndisplayMath: [ ['$$','$$'], [\"\\\\[\",\"\\\\]\"], [\"\\\\begin{displaymath}\",\"\\\\end{displaymath}\"] ],\nskipTags: [\"script\",\"noscript\",\"style\",\"textarea\",\"pre\",\"code\"],\nignoreClass: \"tex2jax_ignore\",\nprocessEscapes: false,\nprocessEnvironments: true,\npreview: \"TeX\"\n},\nshowProcessingMessages: true,\ndisplayAlign: \"center\",\ndisplayIndent: \"2em\",\n\n\\\"HTML-CSS\\\": {\n scale: 133,\n availableFonts: [\"STIX\",\"TeX\"],\n preferredFont: \"TeX\",\n webFont: \"TeX\",\n imageFont: \"TeX\",\n showMathMenu: true,\n},\nMMLorHTML: {\n prefer: {\n     MSIE:    \"MML\",\n     Firefox: \"MML\",\n     Opera:   \"HTML\",\n     other:   \"HTML\"\n }\n}\n});\n                  /*]]>*///-->";
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$3(G__17352,G__17353,G__17354) : tailrecursion.hoplon.script.call(null,G__17352,G__17353,G__17354));
})(),(function (){var G__17355 = cljs.core.constant$keyword$46;
var G__17356 = "https://twitter.com/catonano";
var G__17357 = cljs.core.constant$keyword$45;
var G__17358 = "author";
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(G__17355,G__17356,G__17357,G__17358) : tailrecursion.hoplon.html_meta.call(null,G__17355,G__17356,G__17357,G__17358));
})()],null));
});
tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$51,"en",(function (){var G__17359 = (function (){var G__17364 = cljs.core.constant$keyword$52;
var G__17365 = "utf-8";
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$2(G__17364,G__17365) : tailrecursion.hoplon.html_meta.call(null,G__17364,G__17365));
})();
var G__17360 = (function (){var G__17366 = cljs.core.constant$keyword$45;
var G__17367 = "keywords";
var G__17368 = cljs.core.constant$keyword$46;
var G__17369 = "clojure, clojurescript, cqrs, castra, cljson, spa";
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(G__17366,G__17367,G__17368,G__17369) : tailrecursion.hoplon.html_meta.call(null,G__17366,G__17367,G__17368,G__17369));
})();
var G__17361 = (function (){var G__17370 = cljs.core.constant$keyword$45;
var G__17371 = "description";
var G__17372 = cljs.core.constant$keyword$46;
var G__17373 = "Hoplon provides a number of libraries promoting a simpler model for Clojure/ClojureScript web applications.";
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(G__17370,G__17371,G__17372,G__17373) : tailrecursion.hoplon.html_meta.call(null,G__17370,G__17371,G__17372,G__17373));
})();
var G__17362 = tailrecursion.hoplon.app_pages._index_DOT_html.setup();
var G__17363 = (function (){var G__17374 = "My litle static indie personal blog";
return (tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1(G__17374) : tailrecursion.hoplon.title.call(null,G__17374));
})();
return (tailrecursion.hoplon.head.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.head.cljs$core$IFn$_invoke$arity$5(G__17359,G__17360,G__17361,G__17362,G__17363) : tailrecursion.hoplon.head.call(null,G__17359,G__17360,G__17361,G__17362,G__17363));
})(),(function (){var G__17375 = cljs.core.constant$keyword$31;
var G__17376 = "c1";
var G__17377 = (function (){var G__17378 = (function (){var G__17382 = cljs.core.constant$keyword$31;
var G__17383 = "topfix";
var G__17384 = cljs.core.constant$keyword$53;
var G__17385 = tailrecursion.javelin.formula(((function (G__17382,G__17383,G__17384,G__17375,G__17376){
return (function (G__17386){
return G__17386;
});})(G__17382,G__17383,G__17384,G__17375,G__17376))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route);
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$4(G__17382,G__17383,G__17384,G__17385) : tailrecursion.hoplon.a.call(null,G__17382,G__17383,G__17384,G__17385));
})();
var G__17379 = (function (){var G__17387 = (function (){var G__17388 = cljs.core.constant$keyword$31;
var G__17389 = "nojs-error";
var G__17390 = "This page uses JavaScript but it looks like you have it turned off.";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__17388,G__17389,G__17390) : tailrecursion.hoplon.div.call(null,G__17388,G__17389,G__17390));
})();
return (tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1(G__17387) : tailrecursion.hoplon.noscript.call(null,G__17387));
})();
var G__17380 = (function (){var G__17391 = (function (){var G__17392 = (function (){var G__17393 = cljs.core.constant$keyword$31;
var G__17394 = "blog-header";
var G__17395 = "Quisquiliae";
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(G__17393,G__17394,G__17395) : tailrecursion.hoplon.h1.call(null,G__17393,G__17394,G__17395));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(G__17392) : tailrecursion.hoplon.div.call(null,G__17392));
})();
return (tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1(G__17391) : tailrecursion.hoplon.header.call(null,G__17391));
})();
var G__17381 = (function (){var G__17396 = (function (){var G__17397 = (function (){var G__17400 = (function (){var G__17401 = cljs.core.constant$keyword$31;
var G__17402 = "article-title";
var G__17403 = "About Playground";
return (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(G__17401,G__17402,G__17403) : tailrecursion.hoplon.h2.call(null,G__17401,G__17402,G__17403));
})();
return (tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1(G__17400) : tailrecursion.hoplon.header.call(null,G__17400));
})();
var G__17398 = (function (){var G__17404 = (function (){var G__17409 = (function (){var G__17410 = cljs.core.constant$keyword$31;
var G__17411 = "paragraph-title";
var G__17412 = "About Playground";
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$3(G__17410,G__17411,G__17412) : tailrecursion.hoplon.h3.call(null,G__17410,G__17411,G__17412));
})();
return (tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1(G__17409) : tailrecursion.hoplon.header.call(null,G__17409));
})();
var G__17405 = (function (){var G__17413 = "This started as an attempt to implement the linear regression algorithm in\n\t  cascalog, following instructions from the famous ";
var G__17414 = (function (){var G__17416 = cljs.core.constant$keyword$47;
var G__17417 = "http://www.cs.stanford.edu/people/ang//papers/nips06-mapreducemulticore.pdf";
var G__17418 = "article ";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__17416,G__17417,G__17418) : tailrecursion.hoplon.a.call(null,G__17416,G__17417,G__17418));
})();
var G__17415 = "by Andrew Ng and others";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$3(G__17413,G__17414,G__17415) : tailrecursion.hoplon.p.call(null,G__17413,G__17414,G__17415));
})();
var G__17406 = (function (){var G__17419 = (function (){var G__17421 = cljs.core.constant$keyword$47;
var G__17422 = "https://mahout.apache.org/";
var G__17423 = "Mahout ";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__17421,G__17422,G__17423) : tailrecursion.hoplon.a.call(null,G__17421,G__17422,G__17423));
})();
var G__17420 = "already existed but that is in java and probably lower level\n\t  than this.";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__17419,G__17420) : tailrecursion.hoplon.p.call(null,G__17419,G__17420));
})();
var G__17407 = (function (){var G__17424 = "This is half a page of code and could be read by an high schooler.";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__17424) : tailrecursion.hoplon.p.call(null,G__17424));
})();
var G__17408 = (function (){var G__17425 = "This is an exercise. In the future I'd like to try to implement the\n\t  other algorithms that are discussed there";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__17425) : tailrecursion.hoplon.p.call(null,G__17425));
})();
return (tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$5(G__17404,G__17405,G__17406,G__17407,G__17408) : tailrecursion.hoplon.section.call(null,G__17404,G__17405,G__17406,G__17407,G__17408));
})();
var G__17399 = (function (){var G__17426 = (function (){var G__17430 = (function (){var G__17431 = "The main problem I had";
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__17431) : tailrecursion.hoplon.h3.call(null,G__17431));
})();
return (tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$1(G__17430) : tailrecursion.hoplon.header.call(null,G__17430));
})();
var G__17427 = (function (){var G__17432 = "My biggest problem was to understand correctly the mathematical\n\t    notation. I was not sure what was supposed to be a matrix and what was\n\t    supposed to be a number or a vector. It was a type problem, if you\n\t    like, and the language didn't help.";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__17432) : tailrecursion.hoplon.p.call(null,G__17432));
})();
var G__17428 = (function (){var G__17433 = "The starting point is the canonical form";
var G__17434 = "\\begin{equation}\n\\theta^{*} = A^{-1}b \n\\end{equation}";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__17433,G__17434) : tailrecursion.hoplon.p.call(null,G__17433,G__17434));
})();
var G__17429 = (function (){var G__17435 = "Keeping in mind that ";
var G__17436 = "\\(X\\)";
var G__17437 = " is the matrix whose rows are training instances, if we set ";
var G__17438 = "\\(A\\)";
var G__17439 = " and ";
var G__17440 = "\\(b\\)";
var G__17441 = " like this ";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$7(G__17435,G__17436,G__17437,G__17438,G__17439,G__17440,G__17441) : tailrecursion.hoplon.p.call(null,G__17435,G__17436,G__17437,G__17438,G__17439,G__17440,G__17441));
})();
return (tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4(G__17426,G__17427,G__17428,G__17429) : tailrecursion.hoplon.section.call(null,G__17426,G__17427,G__17428,G__17429));
})();
return (tailrecursion.hoplon.article.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.article.cljs$core$IFn$_invoke$arity$3(G__17397,G__17398,G__17399) : tailrecursion.hoplon.article.call(null,G__17397,G__17398,G__17399));
})();
return (tailrecursion.hoplon.main.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.main.cljs$core$IFn$_invoke$arity$1(G__17396) : tailrecursion.hoplon.main.call(null,G__17396));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__17378,G__17379,G__17380,G__17381) : tailrecursion.hoplon.div.call(null,G__17378,G__17379,G__17380,G__17381));
})();
return (tailrecursion.hoplon.body.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.body.cljs$core$IFn$_invoke$arity$3(G__17375,G__17376,G__17377) : tailrecursion.hoplon.body.call(null,G__17375,G__17376,G__17377));
})()], 0));
