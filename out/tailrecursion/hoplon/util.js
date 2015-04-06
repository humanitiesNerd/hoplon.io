// Compiled by ClojureScript 0.0-2814 {:elide-asserts true, :static-fns true}
goog.provide('tailrecursion.hoplon.util');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');
tailrecursion.hoplon.util.nth = (function nth(coll,n){
try{return nth(coll,n);
}catch (e17265){if((e17265 instanceof Error)){
var e = e17265;
return null;
} else {
throw e17265;

}
}});
tailrecursion.hoplon.util.name = (function name(x){
try{return name(x);
}catch (e17268){if((e17268 instanceof Error)){
var e = e17268;
return null;
} else {
throw e17268;

}
}});
tailrecursion.hoplon.util.interval = (function interval(f,msec){
return window.setInterval(f,msec);
});
tailrecursion.hoplon.util.route_cell = (function route_cell(msec,default$){
var hash = (function (){
return window.location.hash;
});
var ret = tailrecursion.javelin.cell(hash());
tailrecursion.hoplon.util.interval(((function (ret,hash){
return (function (){
var h = hash();
var G__17271 = ret;
var G__17272 = ((cljs.core.empty_QMARK_(h))?default$:h);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17271,G__17272) : cljs.core.reset_BANG_.call(null,G__17271,G__17272));
});})(ret,hash))
,msec);

return ret;
});
var qcache_17291 = (function (){var G__17277 = cljs.core.constant$keyword$44;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17277) : cljs.core.atom.call(null,G__17277));
})();
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.util.query = ((function (qcache_17291){
return (function() { 
var query__delegate = function (p__17278){
var vec__17285 = p__17278;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17285,(0),null);
var _ = cljs.core.nthnext(vec__17285,(1));
var args = vec__17285;
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$44,(function (){var G__17286 = qcache_17291;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17286) : cljs.core.deref.call(null,G__17286));
})()))){
if(cljs.core.truth_(k)){
return (function (){var G__17287 = qcache_17291;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17287) : cljs.core.deref.call(null,G__17287));
})().call(null,tailrecursion.hoplon.util.name(k));
} else {
var G__17288 = qcache_17291;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17288) : cljs.core.deref.call(null,G__17288));
}
} else {
var s = window.location.search;
if(cljs.core.not(clojure.string.blank_QMARK_(s))){
var v = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(s,/^\?/,""),/[&]/);
var m = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,s,vec__17285,k,_,args,qcache_17291){
return (function (p1__17276_SHARP_){
if((cljs.core.count(p1__17276_SHARP_) < (2))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17276_SHARP_,"");
} else {
return p1__17276_SHARP_;
}
});})(v,s,vec__17285,k,_,args,qcache_17291))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (v,s,vec__17285,k,_,args,qcache_17291){
return (function (p1__17275_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),p1__17275_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(p1__17275_SHARP_))) || (((2) < cljs.core.count(p1__17275_SHARP_)));
});})(v,s,vec__17285,k,_,args,qcache_17291))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,s,vec__17285,k,_,args,qcache_17291){
return (function (p1__17274_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(decodeURIComponent,p1__17274_SHARP_);
});})(v,s,vec__17285,k,_,args,qcache_17291))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,s,vec__17285,k,_,args,qcache_17291){
return (function (p1__17273_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__17273_SHARP_,/[=]/);
});})(v,s,vec__17285,k,_,args,qcache_17291))
,v)))));
var G__17289_17292 = qcache_17291;
var G__17290_17293 = m;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17289_17292,G__17290_17293) : cljs.core.reset_BANG_.call(null,G__17289_17292,G__17290_17293));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(query,args);
} else {
return null;
}
}
};
var query = function (var_args){
var p__17278 = null;
if (arguments.length > 0) {
var G__17294__i = 0, G__17294__a = new Array(arguments.length -  0);
while (G__17294__i < G__17294__a.length) {G__17294__a[G__17294__i] = arguments[G__17294__i + 0]; ++G__17294__i;}
  p__17278 = new cljs.core.IndexedSeq(G__17294__a,0);
} 
return query__delegate.call(this,p__17278);};
query.cljs$lang$maxFixedArity = 0;
query.cljs$lang$applyTo = (function (arglist__17295){
var p__17278 = cljs.core.seq(arglist__17295);
return query__delegate(p__17278);
});
query.cljs$core$IFn$_invoke$arity$variadic = query__delegate;
return query;
})()
;})(qcache_17291))
;
tailrecursion.hoplon.util.pluralize = (function pluralize(word,count){
return [cljs.core.str(word),cljs.core.str(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),count))?"s":null))].join('');
});
tailrecursion.hoplon.util.capitalize = (function capitalize(s){
if(typeof s === 'string'){
return clojure.string.capitalize(s);
} else {
return null;
}
});
tailrecursion.hoplon.util.str_partition = (function str_partition(re,s){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__17296_SHARP_){
if(cljs.core.truth_(cljs.core.re_matches(re,p1__17296_SHARP_))){
return true;
} else {
return null;
}
}),s));
});
tailrecursion.hoplon.util.capitalize_name = (function capitalize_name(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.util.capitalize,tailrecursion.hoplon.util.str_partition(/[a-zA-Z]/,s)));
});
tailrecursion.hoplon.util.format_date = (function format_date(date_str){
var vec__17298 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(Number,clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_str,/-/));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17298,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17298,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17298,(2),null);
var months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
var i = (m - (1));
if((i < (0))){
return "<< Sorry, there was an error computing the date. >>";
} else {
return [cljs.core.str(tailrecursion.hoplon.util.nth(months,(m - (1)))),cljs.core.str(" "),cljs.core.str(d),cljs.core.str(", "),cljs.core.str(y)].join('');
}
});
