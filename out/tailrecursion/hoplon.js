// Compiled by ClojureScript 0.0-2814 {:elide-asserts true, :static-fns true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__18151_SHARP_){
return (p1__18151_SHARP_ instanceof Node);
}):(function (p1__18152_SHARP_){
try{return p1__18152_SHARP_.nodeType;
}catch (e18153){if((e18153 instanceof Error)){
var _ = e18153;
return null;
} else {
throw e18153;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__18154_SHARP_){
try{return cljs.core.vector_QMARK_(p1__18154_SHARP_);
}catch (e18155){if((e18155 instanceof Error)){
var _ = e18155;
return null;
} else {
throw e18155;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__18156_SHARP_){
try{return cljs.core.seq_QMARK_(p1__18156_SHARP_);
}catch (e18157){if((e18157 instanceof Error)){
var _ = e18157;
return null;
} else {
throw e18157;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__18158_SHARP_){
if(cljs.core.truth_((function (){var and__3752__auto__ = console;
if(cljs.core.truth_(and__3752__auto__)){
return console.log;
} else {
return and__3752__auto__;
}
})())){
return console.log(p1__18158_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){
return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e18163){if((e18163 instanceof Error)){
var _ = e18163;
return not_found;
} else {
throw e18163;

}
}});
safe_nth = function(coll,index,not_found){
switch(arguments.length){
case 2:
return safe_nth__2.call(this,coll,index);
case 3:
return safe_nth__3.call(this,coll,index,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
safe_nth.cljs$core$IFn$_invoke$arity$2 = safe_nth__2;
safe_nth.cljs$core$IFn$_invoke$arity$3 = safe_nth__3;
return safe_nth;
})()
;
tailrecursion.hoplon.timeout = (function() {
var timeout = null;
var timeout__1 = (function (f){
return timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});
var timeout__2 = (function (f,t){
return window.setTimeout(f,t);
});
timeout = function(f,t){
switch(arguments.length){
case 1:
return timeout__1.call(this,f);
case 2:
return timeout__2.call(this,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeout.cljs$core$IFn$_invoke$arity$1 = timeout__1;
timeout.cljs$core$IFn$_invoke$arity$2 = timeout__2;
return timeout;
})()
;
tailrecursion.hoplon.unsplice = (function unsplice(forms){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__18166_SHARP_){
if(cljs.core.truth_((function (){var or__3764__auto__ = (function (){var G__18172 = p1__18166_SHARP_;
return (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__18172) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,G__18172));
})();
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
var G__18173 = p1__18166_SHARP_;
return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__18173) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,G__18173));
}
})())){
return unsplice(p1__18166_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18166_SHARP_], null);
}
}),cljs.core.array_seq([forms], 0));
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((function doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2(doit,(20));
}
}));
}
});
tailrecursion.hoplon.parse_args = (function parse_args(p__18176){
var vec__18178 = p__18176;
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18178,(0),null);
var tail = cljs.core.nthnext(vec__18178,(1));
var args = vec__18178;
var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__18178,head,tail,args){
return (function (p1__18174_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),p1__18174_SHARP_)));
});})(kw1_QMARK_,vec__18178,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__18178,head,tail,args){
return (function (p1__18175_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(2),cljs.core.PersistentVector.EMPTY,p1__18175_SHARP_))], 0));
});})(kw1_QMARK_,mkkw,vec__18178,head,tail,args))
;
if(cljs.core.map_QMARK_(head)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tailrecursion.hoplon.unsplice(tail)], null);
} else {
if((head instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,mkkw(args)),tailrecursion.hoplon.unsplice(drkw(args))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,tailrecursion.hoplon.unsplice(args)], null);

}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){
var key_STAR_ = (function (p1__18180_SHARP_,p2__18179_SHARP_){
var n = (function (){var s = cljs.core.name(p2__18179_SHARP_);
var c = cljs.core.last(s);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__18179_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__18180_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");
var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");
var dos = (function (){var G__18247 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18247) : cljs.core.atom.call(null,G__18247));
})();
var ons = (function (){var G__18248 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18248) : cljs.core.atom.call(null,G__18248));
})();
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__18181_SHARP_,p2__18182_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__18181_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__18182_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__18249_18307 = cljs.core.seq(attr);
var chunk__18250_18308 = null;
var count__18251_18309 = (0);
var i__18252_18310 = (0);
while(true){
if((i__18252_18310 < count__18251_18309)){
var vec__18253_18311 = chunk__18250_18308.cljs$core$IIndexed$_nth$arity$2(null,i__18252_18310);
var k_18312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18253_18311,(0),null);
var v_18313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18253_18311,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_18313))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(function (){var G__18254 = k_18312;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__18254) : dokey.call(null,G__18254));
})(),v_18313);
} else {
if(cljs.core.fn_QMARK_(v_18313)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(function (){var G__18255 = k_18312;
return (onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(G__18255) : onkey.call(null,G__18255));
})(),v_18313);
} else {
var G__18256_18314 = this$;
var G__18257_18315 = (function (){var G__18259 = k_18312;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__18259) : dokey.call(null,G__18259));
})();
var G__18258_18316 = v_18313;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18256_18314,G__18257_18315,G__18258_18316) : tailrecursion.hoplon.do_BANG_.call(null,G__18256_18314,G__18257_18315,G__18258_18316));

}
}

var G__18317 = seq__18249_18307;
var G__18318 = chunk__18250_18308;
var G__18319 = count__18251_18309;
var G__18320 = (i__18252_18310 + (1));
seq__18249_18307 = G__18317;
chunk__18250_18308 = G__18318;
count__18251_18309 = G__18319;
i__18252_18310 = G__18320;
continue;
} else {
var temp__4126__auto___18321 = cljs.core.seq(seq__18249_18307);
if(temp__4126__auto___18321){
var seq__18249_18322__$1 = temp__4126__auto___18321;
if(cljs.core.chunked_seq_QMARK_(seq__18249_18322__$1)){
var c__4551__auto___18323 = cljs.core.chunk_first(seq__18249_18322__$1);
var G__18324 = cljs.core.chunk_rest(seq__18249_18322__$1);
var G__18325 = c__4551__auto___18323;
var G__18326 = cljs.core.count(c__4551__auto___18323);
var G__18327 = (0);
seq__18249_18307 = G__18324;
chunk__18250_18308 = G__18325;
count__18251_18309 = G__18326;
i__18252_18310 = G__18327;
continue;
} else {
var vec__18260_18328 = cljs.core.first(seq__18249_18322__$1);
var k_18329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18260_18328,(0),null);
var v_18330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18260_18328,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_18330))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(function (){var G__18261 = k_18329;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__18261) : dokey.call(null,G__18261));
})(),v_18330);
} else {
if(cljs.core.fn_QMARK_(v_18330)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(function (){var G__18262 = k_18329;
return (onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(G__18262) : onkey.call(null,G__18262));
})(),v_18330);
} else {
var G__18263_18331 = this$;
var G__18264_18332 = (function (){var G__18266 = k_18329;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__18266) : dokey.call(null,G__18266));
})();
var G__18265_18333 = v_18330;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18263_18331,G__18264_18332,G__18265_18333) : tailrecursion.hoplon.do_BANG_.call(null,G__18263_18331,G__18264_18332,G__18265_18333));

}
}

var G__18334 = cljs.core.next(seq__18249_18322__$1);
var G__18335 = null;
var G__18336 = (0);
var G__18337 = (0);
seq__18249_18307 = G__18334;
chunk__18250_18308 = G__18335;
count__18251_18309 = G__18336;
i__18252_18310 = G__18337;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq((function (){var G__18267 = dos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18267) : cljs.core.deref.call(null,G__18267));
})())){
var G__18268_18338 = ((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__18270 = cljs.core.seq((function (){var G__18274 = dos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18274) : cljs.core.deref.call(null,G__18274));
})());
var chunk__18271 = null;
var count__18272 = (0);
var i__18273 = (0);
while(true){
if((i__18273 < count__18272)){
var vec__18275 = chunk__18271.cljs$core$IIndexed$_nth$arity$2(null,i__18273);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18275,(1),null);
var G__18276_18340 = this$;
var G__18277_18341 = k;
var G__18278_18342 = (function (){var G__18279 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18279) : cljs.core.deref.call(null,G__18279));
})();
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18276_18340,G__18277_18341,G__18278_18342) : tailrecursion.hoplon.do_BANG_.call(null,G__18276_18340,G__18277_18341,G__18278_18342));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__18270,chunk__18271,count__18272,i__18273,vec__18275,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__18184_SHARP_,p2__18185_SHARP_,p3__18186_SHARP_,p4__18183_SHARP_){
var G__18280 = this$;
var G__18281 = k;
var G__18282 = p4__18183_SHARP_;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18280,G__18281,G__18282) : tailrecursion.hoplon.do_BANG_.call(null,G__18280,G__18281,G__18282));
});})(seq__18270,chunk__18271,count__18272,i__18273,vec__18275,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__18343 = seq__18270;
var G__18344 = chunk__18271;
var G__18345 = count__18272;
var G__18346 = (i__18273 + (1));
seq__18270 = G__18343;
chunk__18271 = G__18344;
count__18272 = G__18345;
i__18273 = G__18346;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18270);
if(temp__4126__auto__){
var seq__18270__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18270__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__18270__$1);
var G__18347 = cljs.core.chunk_rest(seq__18270__$1);
var G__18348 = c__4551__auto__;
var G__18349 = cljs.core.count(c__4551__auto__);
var G__18350 = (0);
seq__18270 = G__18347;
chunk__18271 = G__18348;
count__18272 = G__18349;
i__18273 = G__18350;
continue;
} else {
var vec__18283 = cljs.core.first(seq__18270__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18283,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18283,(1),null);
var G__18284_18351 = this$;
var G__18285_18352 = k;
var G__18286_18353 = (function (){var G__18287 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18287) : cljs.core.deref.call(null,G__18287));
})();
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18284_18351,G__18285_18352,G__18286_18353) : tailrecursion.hoplon.do_BANG_.call(null,G__18284_18351,G__18285_18352,G__18286_18353));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__18270,chunk__18271,count__18272,i__18273,vec__18283,k,v,seq__18270__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__18184_SHARP_,p2__18185_SHARP_,p3__18186_SHARP_,p4__18183_SHARP_){
var G__18288 = this$;
var G__18289 = k;
var G__18290 = p4__18183_SHARP_;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18288,G__18289,G__18290) : tailrecursion.hoplon.do_BANG_.call(null,G__18288,G__18289,G__18290));
});})(seq__18270,chunk__18271,count__18272,i__18273,vec__18283,k,v,seq__18270__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__18354 = cljs.core.next(seq__18270__$1);
var G__18355 = null;
var G__18356 = (0);
var G__18357 = (0);
seq__18270 = G__18354;
chunk__18271 = G__18355;
count__18272 = G__18356;
i__18273 = G__18357;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
;
var G__18269_18339 = (0);
setTimeout(G__18268_18338,G__18269_18339);
} else {
}

if(cljs.core.seq((function (){var G__18291 = ons;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18291) : cljs.core.deref.call(null,G__18291));
})())){
var G__18292_18358 = ((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__18294 = cljs.core.seq((function (){var G__18298 = ons;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18298) : cljs.core.deref.call(null,G__18298));
})());
var chunk__18295 = null;
var count__18296 = (0);
var i__18297 = (0);
while(true){
if((i__18297 < count__18296)){
var vec__18299 = chunk__18295.cljs$core$IIndexed$_nth$arity$2(null,i__18297);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18299,(1),null);
var G__18300_18360 = this$;
var G__18301_18361 = k;
var G__18302_18362 = v;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__18300_18360,G__18301_18361,G__18302_18362) : tailrecursion.hoplon.on_BANG_.call(null,G__18300_18360,G__18301_18361,G__18302_18362));

var G__18363 = seq__18294;
var G__18364 = chunk__18295;
var G__18365 = count__18296;
var G__18366 = (i__18297 + (1));
seq__18294 = G__18363;
chunk__18295 = G__18364;
count__18296 = G__18365;
i__18297 = G__18366;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18294);
if(temp__4126__auto__){
var seq__18294__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18294__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__18294__$1);
var G__18367 = cljs.core.chunk_rest(seq__18294__$1);
var G__18368 = c__4551__auto__;
var G__18369 = cljs.core.count(c__4551__auto__);
var G__18370 = (0);
seq__18294 = G__18367;
chunk__18295 = G__18368;
count__18296 = G__18369;
i__18297 = G__18370;
continue;
} else {
var vec__18303 = cljs.core.first(seq__18294__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18303,(1),null);
var G__18304_18371 = this$;
var G__18305_18372 = k;
var G__18306_18373 = v;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__18304_18371,G__18305_18372,G__18306_18373) : tailrecursion.hoplon.on_BANG_.call(null,G__18304_18371,G__18305_18372,G__18306_18373));

var G__18374 = cljs.core.next(seq__18294__$1);
var G__18375 = null;
var G__18376 = (0);
var G__18377 = (0);
seq__18294 = G__18374;
chunk__18295 = G__18375;
count__18296 = G__18376;
i__18297 = G__18377;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
;
var G__18293_18359 = (0);
setTimeout(G__18292_18358,G__18293_18359);
} else {
}

return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__18378_SHARP_,p2__18379_SHARP_){
return p1__18378_SHARP_.appendChild(p2__18379_SHARP_);
}):(function (p1__18380_SHARP_,p2__18381_SHARP_){
try{return p1__18380_SHARP_.appendChild(p2__18381_SHARP_);
}catch (e18382){if((e18382 instanceof Error)){
var _ = e18382;
return null;
} else {
throw e18382;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){
(function (){var G__18386 = this$;
return jQuery(G__18386);
})().empty();

var G__18387 = this$;
var G__18388 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__18387,G__18388) : tailrecursion.hoplon.add_children_BANG_.call(null,G__18387,G__18388));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__18394){
var vec__18407 = p__18394;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18407,(0),null);
var _ = cljs.core.nthnext(vec__18407,(1));
var kids = vec__18407;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(function (){var G__18408 = child_cell;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18408) : cljs.core.deref.call(null,G__18408));
})());

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__18407,child_cell,_,kids){
return (function (p1__18390_SHARP_,p2__18391_SHARP_,p3__18392_SHARP_,p4__18389_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__18389_SHARP_);
});})(vec__18407,child_cell,_,kids))
);
} else {
var node_18419 = ((function (vec__18407,child_cell,_,kids){
return (function (p1__18393_SHARP_){
if(typeof p1__18393_SHARP_ === 'string'){
var G__18409 = p1__18393_SHARP_;
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(G__18409) : tailrecursion.hoplon.$text.call(null,G__18409));
} else {
if(cljs.core.truth_((function (){var G__18410 = p1__18393_SHARP_;
return (tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18410) : tailrecursion.hoplon.node_QMARK_.call(null,G__18410));
})())){
return p1__18393_SHARP_;
} else {
return null;
}
}
});})(vec__18407,child_cell,_,kids))
;
var seq__18411_18420 = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(node_18419,tailrecursion.hoplon.unsplice(kids)));
var chunk__18412_18421 = null;
var count__18413_18422 = (0);
var i__18414_18423 = (0);
while(true){
if((i__18414_18423 < count__18413_18422)){
var x_18424 = chunk__18412_18421.cljs$core$IIndexed$_nth$arity$2(null,i__18414_18423);
var G__18415_18425 = this$;
var G__18416_18426 = x_18424;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__18415_18425,G__18416_18426) : tailrecursion.hoplon.append_child.call(null,G__18415_18425,G__18416_18426));

var G__18427 = seq__18411_18420;
var G__18428 = chunk__18412_18421;
var G__18429 = count__18413_18422;
var G__18430 = (i__18414_18423 + (1));
seq__18411_18420 = G__18427;
chunk__18412_18421 = G__18428;
count__18413_18422 = G__18429;
i__18414_18423 = G__18430;
continue;
} else {
var temp__4126__auto___18431 = cljs.core.seq(seq__18411_18420);
if(temp__4126__auto___18431){
var seq__18411_18432__$1 = temp__4126__auto___18431;
if(cljs.core.chunked_seq_QMARK_(seq__18411_18432__$1)){
var c__4551__auto___18433 = cljs.core.chunk_first(seq__18411_18432__$1);
var G__18434 = cljs.core.chunk_rest(seq__18411_18432__$1);
var G__18435 = c__4551__auto___18433;
var G__18436 = cljs.core.count(c__4551__auto___18433);
var G__18437 = (0);
seq__18411_18420 = G__18434;
chunk__18412_18421 = G__18435;
count__18413_18422 = G__18436;
i__18414_18423 = G__18437;
continue;
} else {
var x_18438 = cljs.core.first(seq__18411_18432__$1);
var G__18417_18439 = this$;
var G__18418_18440 = x_18438;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__18417_18439,G__18418_18440) : tailrecursion.hoplon.append_child.call(null,G__18417_18439,G__18418_18440));

var G__18441 = cljs.core.next(seq__18411_18432__$1);
var G__18442 = null;
var G__18443 = (0);
var G__18444 = (0);
seq__18411_18420 = G__18441;
chunk__18412_18421 = G__18442;
count__18413_18422 = G__18443;
i__18414_18423 = G__18444;
continue;
}
} else {
}
}
break;
}
}

return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function on_append_BANG_(this$,f){
return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__18452__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__18446 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18446,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18446,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__18447 = this$;
G__18447.hoplonIFn(attr,kids);

return G__18447;
} else {
var G__18448 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__18448,attr);

tailrecursion.hoplon.add_children_BANG_(G__18448,kids);

return G__18448;
}
};
var G__18452 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__18453__i = 0, G__18453__a = new Array(arguments.length -  1);
while (G__18453__i < G__18453__a.length) {G__18453__a[G__18453__i] = arguments[G__18453__i + 1]; ++G__18453__i;}
  args = new cljs.core.IndexedSeq(G__18453__a,0);
} 
return G__18452__delegate.call(this,self__,args);};
G__18452.cljs$lang$maxFixedArity = 1;
G__18452.cljs$lang$applyTo = (function (arglist__18454){
var self__ = cljs.core.first(arglist__18454);
var args = cljs.core.rest(arglist__18454);
return G__18452__delegate(self__,args);
});
G__18452.cljs$core$IFn$_invoke$arity$variadic = G__18452__delegate;
return G__18452;
})()
;

Element.prototype.apply = (function (self__,args18445){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18445)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__18455__delegate = function (args){
var this$ = this;
var vec__18449 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18449,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18449,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__18450 = this$;
G__18450.hoplonIFn(attr,kids);

return G__18450;
} else {
var G__18451 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__18451,attr);

tailrecursion.hoplon.add_children_BANG_(G__18451,kids);

return G__18451;
}
};
var G__18455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18456__i = 0, G__18456__a = new Array(arguments.length -  0);
while (G__18456__i < G__18456__a.length) {G__18456__a[G__18456__i] = arguments[G__18456__i + 0]; ++G__18456__i;}
  args = new cljs.core.IndexedSeq(G__18456__a,0);
} 
return G__18455__delegate.call(this,args);};
G__18455.cljs$lang$maxFixedArity = 0;
G__18455.cljs$lang$applyTo = (function (arglist__18457){
var args = cljs.core.seq(arglist__18457);
return G__18455__delegate(args);
});
G__18455.cljs$core$IFn$_invoke$arity$variadic = G__18455__delegate;
return G__18455;
})()
;

Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){
return (function() { 
var G__18470__delegate = function (args){
var vec__18464 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18464,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18464,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

(function (){var G__18465 = elem;
return jQuery(G__18465);
})().empty();

var seq__18466 = cljs.core.seq(kids);
var chunk__18467 = null;
var count__18468 = (0);
var i__18469 = (0);
while(true){
if((i__18469 < count__18468)){
var k = chunk__18467.cljs$core$IIndexed$_nth$arity$2(null,i__18469);
elem.appendChild(k);

var G__18471 = seq__18466;
var G__18472 = chunk__18467;
var G__18473 = count__18468;
var G__18474 = (i__18469 + (1));
seq__18466 = G__18471;
chunk__18467 = G__18472;
count__18468 = G__18473;
i__18469 = G__18474;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18466);
if(temp__4126__auto__){
var seq__18466__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18466__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__18466__$1);
var G__18475 = cljs.core.chunk_rest(seq__18466__$1);
var G__18476 = c__4551__auto__;
var G__18477 = cljs.core.count(c__4551__auto__);
var G__18478 = (0);
seq__18466 = G__18475;
chunk__18467 = G__18476;
count__18468 = G__18477;
i__18469 = G__18478;
continue;
} else {
var k = cljs.core.first(seq__18466__$1);
elem.appendChild(k);

var G__18479 = cljs.core.next(seq__18466__$1);
var G__18480 = null;
var G__18481 = (0);
var G__18482 = (0);
seq__18466 = G__18479;
chunk__18467 = G__18480;
count__18468 = G__18481;
i__18469 = G__18482;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__18470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18483__i = 0, G__18483__a = new Array(arguments.length -  0);
while (G__18483__i < G__18483__a.length) {G__18483__a[G__18483__i] = arguments[G__18483__i + 0]; ++G__18483__i;}
  args = new cljs.core.IndexedSeq(G__18483__a,0);
} 
return G__18470__delegate.call(this,args);};
G__18470.cljs$lang$maxFixedArity = 0;
G__18470.cljs$lang$applyTo = (function (arglist__18484){
var args = cljs.core.seq(arglist__18484);
return G__18470__delegate(args);
});
G__18470.cljs$core$IFn$_invoke$arity$variadic = G__18470__delegate;
return G__18470;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){
return (function() { 
var G__18485__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__18485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18486__i = 0, G__18486__a = new Array(arguments.length -  0);
while (G__18486__i < G__18486__a.length) {G__18486__a[G__18486__i] = arguments[G__18486__i + 0]; ++G__18486__i;}
  args = new cljs.core.IndexedSeq(G__18486__a,0);
} 
return G__18485__delegate.call(this,args);};
G__18485.cljs$lang$maxFixedArity = 0;
G__18485.cljs$lang$applyTo = (function (arglist__18487){
var args = cljs.core.seq(arglist__18487);
return G__18485__delegate(args);
});
G__18485.cljs$core$IFn$_invoke$arity$variadic = G__18485__delegate;
return G__18485;
})()
;
});
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.html = (function() { 
var html__delegate = function (args){
var vec__18489 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18489,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18489,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
};
var html = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18490__i = 0, G__18490__a = new Array(arguments.length -  0);
while (G__18490__i < G__18490__a.length) {G__18490__a[G__18490__i] = arguments[G__18490__i + 0]; ++G__18490__i;}
  args = new cljs.core.IndexedSeq(G__18490__a,0);
} 
return html__delegate.call(this,args);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__18491){
var args = cljs.core.seq(arglist__18491);
return html__delegate(args);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
tailrecursion.hoplon.body = tailrecursion.hoplon.make_singleton_ctor("body");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_singleton_ctor("head");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor("a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor("abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor("acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor("address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor("applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor("area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor("article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor("aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor("audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor("b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor("base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor("basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor("bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor("bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor("big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor("blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor("br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor("button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor("canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor("caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor("center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor("cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor("code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor("col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor("colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor("command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor("data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor("datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor("dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor("del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor("details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor("dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor("dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor("div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor("dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor("dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor("em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor("embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor("eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor("fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor("figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor("figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor("font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor("footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor("form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor("frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor("frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor("h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor("h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor("h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor("h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor("h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor("h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor("header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor("hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor("hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor("i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor("iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor("img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor("input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor("ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor("isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor("kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor("keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor("label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor("legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor("li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor("link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor("map");
tailrecursion.hoplon.main = tailrecursion.hoplon.make_elem_ctor("main");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor("mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor("menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor("meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor("meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor("nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor("noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor("noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor("object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor("ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor("optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor("option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor("output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor("p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor("param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor("pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor("progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor("q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor("rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor("rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor("ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor("s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor("samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor("script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor("section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor("select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor("small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor("source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor("span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor("strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor("strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor("style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor("sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor("summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor("sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor("table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor("tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor("td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor("textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor("tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor("th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor("thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor("time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor("title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor("tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor("track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor("tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor("u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor("ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor("var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor("video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor("wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function $text(p1__18492_SHARP_){
return document.createTextNode(p1__18492_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__18493_SHARP_){
return document.createComment(p1__18493_SHARP_);
});
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){
var G__18495 = f;
return jQuery(G__18495);
});
tailrecursion.hoplon.page_load = (function page_load(){
return (function (){var G__18497 = document;
return jQuery(G__18497);
})().trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function on_page_load(f){
return (function (){var G__18499 = document;
return jQuery(G__18499);
})().on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_((function (){
return (function (){var G__18501 = "body";
return jQuery(G__18501);
})().on("submit",(function (p1__18500_SHARP_){
var e = (function (){var G__18502 = p1__18500_SHARP_.target;
return jQuery(G__18502);
})();
if(cljs.core.truth_((function (){var or__3764__auto__ = e.attr("action");
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__18500_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.by_id = (function by_id(id){
return document.getElementById(cljs.core.name(id));
});
tailrecursion.hoplon.val_id = (function val_id(id){
var G__18505 = tailrecursion.hoplon.by_id(id);
var G__18506 = cljs.core.constant$keyword$25;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2(G__18505,G__18506) : tailrecursion.hoplon.do_BANG_.call(null,G__18505,G__18506));
});
tailrecursion.hoplon.rel = (function rel(other,event){
var os = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__18510 = other;
return jQuery(G__18510);
})().offset());
var ox = (function (){var G__18511 = "left";
return (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1(G__18511) : os.call(null,G__18511));
})();
var oy = (function (){var G__18512 = "top";
return (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1(G__18512) : os.call(null,G__18512));
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$26,(event.pageX - ox),cljs.core.constant$keyword$27,(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function relx(other,event){
return cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel(other,event));
});
tailrecursion.hoplon.rely = (function rely(other,event){
return cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel(other,event));
});
tailrecursion.hoplon.rel_event = (function rel_event(rel_to,tag,handler){
return (function (event){
(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx(rel_to,event));

(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely(rel_to,event));

var G__18514 = event;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__18514) : handler.call(null,G__18514));
});
});
tailrecursion.hoplon.text_val_BANG_ = (function() {
var text_val_BANG_ = null;
var text_val_BANG___1 = (function (e){
return e.val();
});
var text_val_BANG___2 = (function (e,v){
return e.val([cljs.core.str(v)].join(''));
});
text_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return text_val_BANG___1.call(this,e);
case 2:
return text_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = text_val_BANG___1;
text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = text_val_BANG___2;
return text_val_BANG_;
})()
;
tailrecursion.hoplon.check_val_BANG_ = (function() {
var check_val_BANG_ = null;
var check_val_BANG___1 = (function (e){
return e.is(":checked");
});
var check_val_BANG___2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});
check_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return check_val_BANG___1.call(this,e);
case 2:
return check_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = check_val_BANG___1;
check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = check_val_BANG___2;
return check_val_BANG_;
})()
;
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__4661__auto__ = (function (){var G__18515 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18515) : cljs.core.atom.call(null,G__18515));
})();
var prefer_table__4662__auto__ = (function (){var G__18516 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18516) : cljs.core.atom.call(null,G__18516));
})();
var method_cache__4663__auto__ = (function (){var G__18517 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18517) : cljs.core.atom.call(null,G__18517));
})();
var cached_hierarchy__4664__auto__ = (function (){var G__18518 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18518) : cljs.core.atom.call(null,G__18518));
})();
var hierarchy__4665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$28], null),cljs.core.constant$keyword$29,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","do!"),((function (method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__){
return (function (elem,key,val){
return key;
});})(method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__))
,cljs.core.constant$keyword$28,hierarchy__4665__auto__,method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$28,(function (elem,key,val){
var G__18519 = elem;
var G__18520 = cljs.core.constant$keyword$30;
var G__18521 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18519,G__18520,G__18521) : tailrecursion.hoplon.do_BANG_.call(null,G__18519,G__18520,G__18521));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$25,(function() { 
var G__18523__delegate = function (elem,_,args){
var e = (function (){var G__18522 = elem;
return jQuery(G__18522);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__18523 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__18524__i = 0, G__18524__a = new Array(arguments.length -  2);
while (G__18524__i < G__18524__a.length) {G__18524__a[G__18524__i] = arguments[G__18524__i + 2]; ++G__18524__i;}
  args = new cljs.core.IndexedSeq(G__18524__a,0);
} 
return G__18523__delegate.call(this,elem,_,args);};
G__18523.cljs$lang$maxFixedArity = 2;
G__18523.cljs$lang$applyTo = (function (arglist__18525){
var elem = cljs.core.first(arglist__18525);
arglist__18525 = cljs.core.next(arglist__18525);
var _ = cljs.core.first(arglist__18525);
var args = cljs.core.rest(arglist__18525);
return G__18523__delegate(elem,_,args);
});
G__18523.cljs$core$IFn$_invoke$arity$variadic = G__18523__delegate;
return G__18523;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$30,(function (elem,_,kvs){
var e = (function (){var G__18526 = elem;
return jQuery(G__18526);
})();
var seq__18527 = cljs.core.seq(kvs);
var chunk__18528 = null;
var count__18529 = (0);
var i__18530 = (0);
while(true){
if((i__18530 < count__18529)){
var vec__18531 = chunk__18528.cljs$core$IIndexed$_nth$arity$2(null,i__18530);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18531,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18531,(1),null);
var k_18533__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_18533__$1);
} else {
e.attr(k_18533__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_18533__$1:v));
}

var G__18534 = seq__18527;
var G__18535 = chunk__18528;
var G__18536 = count__18529;
var G__18537 = (i__18530 + (1));
seq__18527 = G__18534;
chunk__18528 = G__18535;
count__18529 = G__18536;
i__18530 = G__18537;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18527);
if(temp__4126__auto__){
var seq__18527__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18527__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__18527__$1);
var G__18538 = cljs.core.chunk_rest(seq__18527__$1);
var G__18539 = c__4551__auto__;
var G__18540 = cljs.core.count(c__4551__auto__);
var G__18541 = (0);
seq__18527 = G__18538;
chunk__18528 = G__18539;
count__18529 = G__18540;
i__18530 = G__18541;
continue;
} else {
var vec__18532 = cljs.core.first(seq__18527__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18532,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18532,(1),null);
var k_18542__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_18542__$1);
} else {
e.attr(k_18542__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_18542__$1:v));
}

var G__18543 = cljs.core.next(seq__18527__$1);
var G__18544 = null;
var G__18545 = (0);
var G__18546 = (0);
seq__18527 = G__18543;
chunk__18528 = G__18544;
count__18529 = G__18545;
i__18530 = G__18546;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$31,(function (elem,_,kvs){
var elem__$1 = (function (){var G__18548 = elem;
return jQuery(G__18548);
})();
var __GT_map = ((function (elem__$1){
return (function (p1__18547_SHARP_){
return cljs.core.zipmap(p1__18547_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__18549 = cljs.core.seq(clmap);
var chunk__18550 = null;
var count__18551 = (0);
var i__18552 = (0);
while(true){
if((i__18552 < count__18551)){
var vec__18553 = chunk__18550.cljs$core$IIndexed$_nth$arity$2(null,i__18552);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18553,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18553,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__18555 = seq__18549;
var G__18556 = chunk__18550;
var G__18557 = count__18551;
var G__18558 = (i__18552 + (1));
seq__18549 = G__18555;
chunk__18550 = G__18556;
count__18551 = G__18557;
i__18552 = G__18558;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18549);
if(temp__4126__auto__){
var seq__18549__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18549__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__18549__$1);
var G__18559 = cljs.core.chunk_rest(seq__18549__$1);
var G__18560 = c__4551__auto__;
var G__18561 = cljs.core.count(c__4551__auto__);
var G__18562 = (0);
seq__18549 = G__18559;
chunk__18550 = G__18560;
count__18551 = G__18561;
i__18552 = G__18562;
continue;
} else {
var vec__18554 = cljs.core.first(seq__18549__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18554,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18554,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__18563 = cljs.core.next(seq__18549__$1);
var G__18564 = null;
var G__18565 = (0);
var G__18566 = (0);
seq__18549 = G__18563;
chunk__18550 = G__18564;
count__18551 = G__18565;
i__18552 = G__18566;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$32,(function (elem,_,kvs){
var e = (function (){var G__18567 = elem;
return jQuery(G__18567);
})();
var seq__18568 = cljs.core.seq(kvs);
var chunk__18569 = null;
var count__18570 = (0);
var i__18571 = (0);
while(true){
if((i__18571 < count__18570)){
var vec__18572 = chunk__18569.cljs$core$IIndexed$_nth$arity$2(null,i__18571);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18572,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18572,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__18574 = seq__18568;
var G__18575 = chunk__18569;
var G__18576 = count__18570;
var G__18577 = (i__18571 + (1));
seq__18568 = G__18574;
chunk__18569 = G__18575;
count__18570 = G__18576;
i__18571 = G__18577;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18568);
if(temp__4126__auto__){
var seq__18568__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18568__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__18568__$1);
var G__18578 = cljs.core.chunk_rest(seq__18568__$1);
var G__18579 = c__4551__auto__;
var G__18580 = cljs.core.count(c__4551__auto__);
var G__18581 = (0);
seq__18568 = G__18578;
chunk__18569 = G__18579;
count__18570 = G__18580;
i__18571 = G__18581;
continue;
} else {
var vec__18573 = cljs.core.first(seq__18568__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18573,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__18582 = cljs.core.next(seq__18568__$1);
var G__18583 = null;
var G__18584 = (0);
var G__18585 = (0);
seq__18568 = G__18582;
chunk__18569 = G__18583;
count__18570 = G__18584;
i__18571 = G__18585;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$33,(function (elem,_,v){
return (function (){var G__18586 = elem;
return jQuery(G__18586);
})().toggle(cljs.core.boolean$(v));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$34,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__18587 = elem;
return jQuery(G__18587);
})().hide().slideDown("fast");
} else {
return (function (){var G__18588 = elem;
return jQuery(G__18588);
})().slideUp("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$35,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__18589 = elem;
return jQuery(G__18589);
})().hide().fadeIn("fast");
} else {
return (function (){var G__18590 = elem;
return jQuery(G__18590);
})().fadeOut("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$36,(function (elem,_,v){
var G__18591 = (function (){
if(cljs.core.truth_(v)){
return (function (){var G__18593 = elem;
return jQuery(G__18593);
})().focus();
} else {
return (function (){var G__18594 = elem;
return jQuery(G__18594);
})().focusout();
}
});
var G__18592 = (0);
return setTimeout(G__18591,G__18592);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$37,(function (elem,_,___$1){
return (function (){var G__18595 = elem;
return jQuery(G__18595);
})().select();
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$38,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__18596_18602 = elem;
var G__18597_18603 = cljs.core.constant$keyword$36;
var G__18598_18604 = v;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18596_18602,G__18597_18603,G__18598_18604) : tailrecursion.hoplon.do_BANG_.call(null,G__18596_18602,G__18597_18603,G__18598_18604));

var G__18599 = elem;
var G__18600 = cljs.core.constant$keyword$37;
var G__18601 = v;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18599,G__18600,G__18601) : tailrecursion.hoplon.do_BANG_.call(null,G__18599,G__18600,G__18601));
} else {
return null;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$39,(function (elem,_,v){
return (function (){var G__18605 = elem;
return jQuery(G__18605);
})().text([cljs.core.str(v)].join(''));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$40,(function (elem,_,v){
return (function (){var G__18606 = elem;
return jQuery(G__18606);
})().html(v);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$41,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = (function (){var G__18607 = "body,html";
return jQuery(G__18607);
})();
var elem__$1 = (function (){var G__18608 = elem;
return jQuery(G__18608);
})();
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$42,elem__$1.offset().top], null)));
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__4661__auto__ = (function (){var G__18609 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18609) : cljs.core.atom.call(null,G__18609));
})();
var prefer_table__4662__auto__ = (function (){var G__18610 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18610) : cljs.core.atom.call(null,G__18610));
})();
var method_cache__4663__auto__ = (function (){var G__18611 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18611) : cljs.core.atom.call(null,G__18611));
})();
var cached_hierarchy__4664__auto__ = (function (){var G__18612 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18612) : cljs.core.atom.call(null,G__18612));
})();
var hierarchy__4665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$28], null),cljs.core.constant$keyword$29,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","on!"),((function (method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__))
,cljs.core.constant$keyword$28,hierarchy__4665__auto__,method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__));
})();
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__18613 = this$__$1.target;
return jQuery(G__18613);
})().val();
});
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$28,(function (elem,event,callback){
return tailrecursion.hoplon.when_dom(elem,(function (){
return (function (){var G__18614 = elem;
return jQuery(G__18614);
})().on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){
var pool_size = tailrecursion.javelin.cell((0));
var items_seq = tailrecursion.javelin.formula(((function (pool_size){
return (function (G__18654,G__18655){
var G__18656 = G__18655;
return (G__18654.cljs$core$IFn$_invoke$arity$1 ? G__18654.cljs$core$IFn$_invoke$arity$1(G__18656) : G__18654.call(null,G__18656));
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,items_seq){
return (function (G__18658,G__18657){
var G__18659 = G__18658;
return (G__18657.cljs$core$IFn$_invoke$arity$1 ? G__18657.cljs$core$IFn$_invoke$arity$1(G__18659) : G__18657.call(null,G__18659));
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__18615_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count){
return (function (G__18660,G__18661){
return (G__18660 < G__18661);
});})(pool_size,items_seq,cur_count))
).call(null,p1__18615_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__18616_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__18664,G__18663,G__18662){
var G__18665 = G__18663;
var G__18666 = G__18664;
return (G__18662.cljs$core$IFn$_invoke$arity$2 ? G__18662.cljs$core$IFn$_invoke$arity$2(G__18665,G__18666) : G__18662.call(null,G__18665,G__18666));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,p1__18616_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = (function (){return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));
})();
tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__18680,G__18678,G__18673,G__18671,G__18672,G__18677,G__18679,G__18674,G__18676,G__18675){
if(cljs.core.truth_((G__18671 < G__18672))){
var seq__18667_18691 = cljs.core.seq((function (){var G__18681 = G__18671;
var G__18682 = G__18672;
return (G__18673.cljs$core$IFn$_invoke$arity$2 ? G__18673.cljs$core$IFn$_invoke$arity$2(G__18681,G__18682) : G__18673.call(null,G__18681,G__18682));
})());
var chunk__18668_18692 = null;
var count__18669_18693 = (0);
var i__18670_18694 = (0);
while(true){
if(cljs.core.truth_((i__18670_18694 < count__18669_18693))){
var i_18695 = chunk__18668_18692.cljs$core$IIndexed$_nth$arity$2(null,i__18670_18694);
var e_18696 = (function (){var G__18683 = (function (){var G__18684 = i_18695;
return (G__18675.cljs$core$IFn$_invoke$arity$1 ? G__18675.cljs$core$IFn$_invoke$arity$1(G__18684) : G__18675.call(null,G__18684));
})();
return (G__18674.cljs$core$IFn$_invoke$arity$1 ? G__18674.cljs$core$IFn$_invoke$arity$1(G__18683) : G__18674.call(null,G__18683));
})().call(null,cljs.core.constant$keyword$43,(function (){var G__18685 = i_18695;
return (G__18676.cljs$core$IFn$_invoke$arity$1 ? G__18676.cljs$core$IFn$_invoke$arity$1(G__18685) : G__18676.call(null,G__18685));
})());
if(cljs.core.not(G__18677)){
G__18678.appendChild(e_18696);
} else {
G__18678.insertBefore(e_18696,G__18678.firstChild);
}

var G__18697 = seq__18667_18691;
var G__18698 = chunk__18668_18692;
var G__18699 = count__18669_18693;
var G__18700 = (i__18670_18694 + (1));
seq__18667_18691 = G__18697;
chunk__18668_18692 = G__18698;
count__18669_18693 = G__18699;
i__18670_18694 = G__18700;
continue;
} else {
var temp__4126__auto___18701 = cljs.core.seq(seq__18667_18691);
if(temp__4126__auto___18701){
var seq__18667_18702__$1 = temp__4126__auto___18701;
if(cljs.core.chunked_seq_QMARK_(seq__18667_18702__$1)){
var c__4551__auto___18703 = cljs.core.chunk_first(seq__18667_18702__$1);
var G__18704 = cljs.core.chunk_rest(seq__18667_18702__$1);
var G__18705 = c__4551__auto___18703;
var G__18706 = cljs.core.count(c__4551__auto___18703);
var G__18707 = (0);
seq__18667_18691 = G__18704;
chunk__18668_18692 = G__18705;
count__18669_18693 = G__18706;
i__18670_18694 = G__18707;
continue;
} else {
var i_18708 = cljs.core.first(seq__18667_18702__$1);
var e_18709 = (function (){var G__18686 = (function (){var G__18687 = i_18708;
return (G__18675.cljs$core$IFn$_invoke$arity$1 ? G__18675.cljs$core$IFn$_invoke$arity$1(G__18687) : G__18675.call(null,G__18687));
})();
return (G__18674.cljs$core$IFn$_invoke$arity$1 ? G__18674.cljs$core$IFn$_invoke$arity$1(G__18686) : G__18674.call(null,G__18686));
})().call(null,cljs.core.constant$keyword$43,(function (){var G__18688 = i_18708;
return (G__18676.cljs$core$IFn$_invoke$arity$1 ? G__18676.cljs$core$IFn$_invoke$arity$1(G__18688) : G__18676.call(null,G__18688));
})());
if(cljs.core.not(G__18677)){
G__18678.appendChild(e_18709);
} else {
G__18678.insertBefore(e_18709,G__18678.firstChild);
}

var G__18710 = cljs.core.next(seq__18667_18702__$1);
var G__18711 = null;
var G__18712 = (0);
var G__18713 = (0);
seq__18667_18691 = G__18710;
chunk__18668_18692 = G__18711;
count__18669_18693 = G__18712;
i__18670_18694 = G__18713;
continue;
}
} else {
}
}
break;
}

var G__18689 = G__18680;
var G__18690 = G__18672;
return (G__18679.cljs$core$IFn$_invoke$arity$2 ? G__18679.cljs$core$IFn$_invoke$arity$2(G__18689,G__18690) : G__18679.call(null,G__18689,G__18690));
} else {
return null;
}
});})(p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
).call(null,tailrecursion.javelin.cell(pool_size),p,cljs.core.range,pool_size,cur_count,reverse_QMARK_,cljs.core.reset_BANG_,tpl,show_ith_QMARK_,ith_item);
});})(d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
);

return d;
});
/**
* Manage the URL hash via Javelin cells. There are three arities:
* 
* - When called with no arguments this function returns a formula cell whose
* value is the URL hash or nil.
* 
* - When called with a single string argument, the argument is taken as the
* default value, which is returned in place of nil when there is no hash.
* 
* - When a single cell argument is provided, the URL hash is kept synced to the
* value of the cell.
* 
* - When a cell and a callback function are both provided, the URL hash is kept
* synced to the value of the cell as above, and any attempt to change the hash
* other than via the setter cell causes the callback to be called. The callback
* should be a function of one argument, the requested URL hash.
*/
tailrecursion.hoplon.route_cell = (function() {
var route_cell = null;
var route_cell__0 = (function (){
var r = (function (){var ret__10315__auto__ = tailrecursion.javelin.cell(window.location.hash);
var G__18739_18764 = ((function (ret__10315__auto__){
return (function (){
var G__18741 = ret__10315__auto__;
var G__18742 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18741,G__18742) : cljs.core.reset_BANG_.call(null,G__18741,G__18742));
});})(ret__10315__auto__))
;
var G__18740_18765 = (100);
setInterval(G__18739_18764,G__18740_18765);

return tailrecursion.javelin.formula(((function (ret__10315__auto__){
return (function (G__18743){
return G__18743;
});})(ret__10315__auto__))
).call(null,ret__10315__auto__);
})();
return tailrecursion.javelin.formula(((function (r){
return (function (G__18745,G__18744){
if(cljs.core.truth_((function (){var G__18746 = "";
var G__18747 = G__18745;
return (G__18744.cljs$core$IFn$_invoke$arity$2 ? G__18744.cljs$core$IFn$_invoke$arity$2(G__18746,G__18747) : G__18744.call(null,G__18746,G__18747));
})())){
return G__18745;
} else {
return null;
}
});})(r))
).call(null,r,cljs.core.not_EQ_);
});
var route_cell__1 = (function (setter_or_dfl){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl))){
var setter__10316__auto__ = setter_or_dfl;
var callback__10317__auto__ = (function (){var or__3764__auto__ = null;
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula(((function (setter__10316__auto__,callback__10317__auto__){
return (function (G__18749,G__18748){
return G__18748.location.hash = G__18749;
});})(setter__10316__auto__,callback__10317__auto__))
).call(null,setter__10316__auto__,window);

var G__18750_18766 = ((function (setter__10316__auto__,callback__10317__auto__){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18752 = setter__10316__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18752) : cljs.core.deref.call(null,G__18752));
})(),window.location.hash)){
var G__18753_18768 = window.location.hash;
(callback__10317__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__10317__auto__.cljs$core$IFn$_invoke$arity$1(G__18753_18768) : callback__10317__auto__.call(null,G__18753_18768));

return window.location.hash = (function (){var G__18754 = setter__10316__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18754) : cljs.core.deref.call(null,G__18754));
})();
} else {
return null;
}
});})(setter__10316__auto__,callback__10317__auto__))
;
var G__18751_18767 = (100);
setInterval(G__18750_18766,G__18751_18767);

return setter__10316__auto__;
} else {
var r = route_cell.cljs$core$IFn$_invoke$arity$0();
return tailrecursion.javelin.formula(((function (r){
return (function (G__18755,G__18756){
var or__3764__auto__ = G__18755;
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return G__18756;
}
});})(r))
).call(null,r,setter_or_dfl);
}
});
var route_cell__2 = (function (setter,callback){
var setter__10316__auto__ = setter;
var callback__10317__auto__ = (function (){var or__3764__auto__ = callback;
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula(((function (setter__10316__auto__,callback__10317__auto__){
return (function (G__18758,G__18757){
return G__18757.location.hash = G__18758;
});})(setter__10316__auto__,callback__10317__auto__))
).call(null,setter__10316__auto__,window);

var G__18759_18769 = ((function (setter__10316__auto__,callback__10317__auto__){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18761 = setter__10316__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18761) : cljs.core.deref.call(null,G__18761));
})(),window.location.hash)){
var G__18762_18771 = window.location.hash;
(callback__10317__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__10317__auto__.cljs$core$IFn$_invoke$arity$1(G__18762_18771) : callback__10317__auto__.call(null,G__18762_18771));

return window.location.hash = (function (){var G__18763 = setter__10316__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18763) : cljs.core.deref.call(null,G__18763));
})();
} else {
return null;
}
});})(setter__10316__auto__,callback__10317__auto__))
;
var G__18760_18770 = (100);
setInterval(G__18759_18769,G__18760_18770);

return setter__10316__auto__;
});
route_cell = function(setter,callback){
switch(arguments.length){
case 0:
return route_cell__0.call(this);
case 1:
return route_cell__1.call(this,setter);
case 2:
return route_cell__2.call(this,setter,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
route_cell.cljs$core$IFn$_invoke$arity$0 = route_cell__0;
route_cell.cljs$core$IFn$_invoke$arity$1 = route_cell__1;
route_cell.cljs$core$IFn$_invoke$arity$2 = route_cell__2;
return route_cell;
})()
;
