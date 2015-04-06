// Compiled by ClojureScript 0.0-2814 {:elide-asserts true, :static-fns true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__17969_SHARP_){
return (p1__17969_SHARP_ instanceof Node);
}):(function (p1__17970_SHARP_){
try{return p1__17970_SHARP_.nodeType;
}catch (e17971){if((e17971 instanceof Error)){
var _ = e17971;
return null;
} else {
throw e17971;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__17972_SHARP_){
try{return cljs.core.vector_QMARK_(p1__17972_SHARP_);
}catch (e17973){if((e17973 instanceof Error)){
var _ = e17973;
return null;
} else {
throw e17973;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__17974_SHARP_){
try{return cljs.core.seq_QMARK_(p1__17974_SHARP_);
}catch (e17975){if((e17975 instanceof Error)){
var _ = e17975;
return null;
} else {
throw e17975;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__17976_SHARP_){
if(cljs.core.truth_((function (){var and__3570__auto__ = console;
if(cljs.core.truth_(and__3570__auto__)){
return console.log;
} else {
return and__3570__auto__;
}
})())){
return console.log(p1__17976_SHARP_);
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
}catch (e17981){if((e17981 instanceof Error)){
var _ = e17981;
return not_found;
} else {
throw e17981;

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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__17984_SHARP_){
if(cljs.core.truth_((function (){var or__3582__auto__ = (function (){var G__17990 = p1__17984_SHARP_;
return (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__17990) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,G__17990));
})();
if(cljs.core.truth_(or__3582__auto__)){
return or__3582__auto__;
} else {
var G__17991 = p1__17984_SHARP_;
return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__17991) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,G__17991));
}
})())){
return unsplice(p1__17984_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17984_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__17994){
var vec__17996 = p__17994;
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17996,(0),null);
var tail = cljs.core.nthnext(vec__17996,(1));
var args = vec__17996;
var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__17996,head,tail,args){
return (function (p1__17992_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),p1__17992_SHARP_)));
});})(kw1_QMARK_,vec__17996,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__17996,head,tail,args){
return (function (p1__17993_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(2),cljs.core.PersistentVector.EMPTY,p1__17993_SHARP_))], 0));
});})(kw1_QMARK_,mkkw,vec__17996,head,tail,args))
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
var key_STAR_ = (function (p1__17998_SHARP_,p2__17997_SHARP_){
var n = (function (){var s = cljs.core.name(p2__17997_SHARP_);
var c = cljs.core.last(s);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__17997_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17998_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");
var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");
var dos = (function (){var G__18065 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18065) : cljs.core.atom.call(null,G__18065));
})();
var ons = (function (){var G__18066 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18066) : cljs.core.atom.call(null,G__18066));
})();
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__17999_SHARP_,p2__18000_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__17999_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__18000_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__18067_18125 = cljs.core.seq(attr);
var chunk__18068_18126 = null;
var count__18069_18127 = (0);
var i__18070_18128 = (0);
while(true){
if((i__18070_18128 < count__18069_18127)){
var vec__18071_18129 = chunk__18068_18126.cljs$core$IIndexed$_nth$arity$2(null,i__18070_18128);
var k_18130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18071_18129,(0),null);
var v_18131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18071_18129,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_18131))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(function (){var G__18072 = k_18130;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__18072) : dokey.call(null,G__18072));
})(),v_18131);
} else {
if(cljs.core.fn_QMARK_(v_18131)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(function (){var G__18073 = k_18130;
return (onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(G__18073) : onkey.call(null,G__18073));
})(),v_18131);
} else {
var G__18074_18132 = this$;
var G__18075_18133 = (function (){var G__18077 = k_18130;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__18077) : dokey.call(null,G__18077));
})();
var G__18076_18134 = v_18131;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18074_18132,G__18075_18133,G__18076_18134) : tailrecursion.hoplon.do_BANG_.call(null,G__18074_18132,G__18075_18133,G__18076_18134));

}
}

var G__18135 = seq__18067_18125;
var G__18136 = chunk__18068_18126;
var G__18137 = count__18069_18127;
var G__18138 = (i__18070_18128 + (1));
seq__18067_18125 = G__18135;
chunk__18068_18126 = G__18136;
count__18069_18127 = G__18137;
i__18070_18128 = G__18138;
continue;
} else {
var temp__4126__auto___18139 = cljs.core.seq(seq__18067_18125);
if(temp__4126__auto___18139){
var seq__18067_18140__$1 = temp__4126__auto___18139;
if(cljs.core.chunked_seq_QMARK_(seq__18067_18140__$1)){
var c__4369__auto___18141 = cljs.core.chunk_first(seq__18067_18140__$1);
var G__18142 = cljs.core.chunk_rest(seq__18067_18140__$1);
var G__18143 = c__4369__auto___18141;
var G__18144 = cljs.core.count(c__4369__auto___18141);
var G__18145 = (0);
seq__18067_18125 = G__18142;
chunk__18068_18126 = G__18143;
count__18069_18127 = G__18144;
i__18070_18128 = G__18145;
continue;
} else {
var vec__18078_18146 = cljs.core.first(seq__18067_18140__$1);
var k_18147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18078_18146,(0),null);
var v_18148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18078_18146,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_18148))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(function (){var G__18079 = k_18147;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__18079) : dokey.call(null,G__18079));
})(),v_18148);
} else {
if(cljs.core.fn_QMARK_(v_18148)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(function (){var G__18080 = k_18147;
return (onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(G__18080) : onkey.call(null,G__18080));
})(),v_18148);
} else {
var G__18081_18149 = this$;
var G__18082_18150 = (function (){var G__18084 = k_18147;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__18084) : dokey.call(null,G__18084));
})();
var G__18083_18151 = v_18148;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18081_18149,G__18082_18150,G__18083_18151) : tailrecursion.hoplon.do_BANG_.call(null,G__18081_18149,G__18082_18150,G__18083_18151));

}
}

var G__18152 = cljs.core.next(seq__18067_18140__$1);
var G__18153 = null;
var G__18154 = (0);
var G__18155 = (0);
seq__18067_18125 = G__18152;
chunk__18068_18126 = G__18153;
count__18069_18127 = G__18154;
i__18070_18128 = G__18155;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq((function (){var G__18085 = dos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18085) : cljs.core.deref.call(null,G__18085));
})())){
var G__18086_18156 = ((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__18088 = cljs.core.seq((function (){var G__18092 = dos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18092) : cljs.core.deref.call(null,G__18092));
})());
var chunk__18089 = null;
var count__18090 = (0);
var i__18091 = (0);
while(true){
if((i__18091 < count__18090)){
var vec__18093 = chunk__18089.cljs$core$IIndexed$_nth$arity$2(null,i__18091);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18093,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18093,(1),null);
var G__18094_18158 = this$;
var G__18095_18159 = k;
var G__18096_18160 = (function (){var G__18097 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18097) : cljs.core.deref.call(null,G__18097));
})();
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18094_18158,G__18095_18159,G__18096_18160) : tailrecursion.hoplon.do_BANG_.call(null,G__18094_18158,G__18095_18159,G__18096_18160));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__18088,chunk__18089,count__18090,i__18091,vec__18093,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__18002_SHARP_,p2__18003_SHARP_,p3__18004_SHARP_,p4__18001_SHARP_){
var G__18098 = this$;
var G__18099 = k;
var G__18100 = p4__18001_SHARP_;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18098,G__18099,G__18100) : tailrecursion.hoplon.do_BANG_.call(null,G__18098,G__18099,G__18100));
});})(seq__18088,chunk__18089,count__18090,i__18091,vec__18093,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__18161 = seq__18088;
var G__18162 = chunk__18089;
var G__18163 = count__18090;
var G__18164 = (i__18091 + (1));
seq__18088 = G__18161;
chunk__18089 = G__18162;
count__18090 = G__18163;
i__18091 = G__18164;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18088);
if(temp__4126__auto__){
var seq__18088__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18088__$1)){
var c__4369__auto__ = cljs.core.chunk_first(seq__18088__$1);
var G__18165 = cljs.core.chunk_rest(seq__18088__$1);
var G__18166 = c__4369__auto__;
var G__18167 = cljs.core.count(c__4369__auto__);
var G__18168 = (0);
seq__18088 = G__18165;
chunk__18089 = G__18166;
count__18090 = G__18167;
i__18091 = G__18168;
continue;
} else {
var vec__18101 = cljs.core.first(seq__18088__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18101,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18101,(1),null);
var G__18102_18169 = this$;
var G__18103_18170 = k;
var G__18104_18171 = (function (){var G__18105 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18105) : cljs.core.deref.call(null,G__18105));
})();
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18102_18169,G__18103_18170,G__18104_18171) : tailrecursion.hoplon.do_BANG_.call(null,G__18102_18169,G__18103_18170,G__18104_18171));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__18088,chunk__18089,count__18090,i__18091,vec__18101,k,v,seq__18088__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__18002_SHARP_,p2__18003_SHARP_,p3__18004_SHARP_,p4__18001_SHARP_){
var G__18106 = this$;
var G__18107 = k;
var G__18108 = p4__18001_SHARP_;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18106,G__18107,G__18108) : tailrecursion.hoplon.do_BANG_.call(null,G__18106,G__18107,G__18108));
});})(seq__18088,chunk__18089,count__18090,i__18091,vec__18101,k,v,seq__18088__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__18172 = cljs.core.next(seq__18088__$1);
var G__18173 = null;
var G__18174 = (0);
var G__18175 = (0);
seq__18088 = G__18172;
chunk__18089 = G__18173;
count__18090 = G__18174;
i__18091 = G__18175;
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
var G__18087_18157 = (0);
setTimeout(G__18086_18156,G__18087_18157);
} else {
}

if(cljs.core.seq((function (){var G__18109 = ons;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18109) : cljs.core.deref.call(null,G__18109));
})())){
var G__18110_18176 = ((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__18112 = cljs.core.seq((function (){var G__18116 = ons;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18116) : cljs.core.deref.call(null,G__18116));
})());
var chunk__18113 = null;
var count__18114 = (0);
var i__18115 = (0);
while(true){
if((i__18115 < count__18114)){
var vec__18117 = chunk__18113.cljs$core$IIndexed$_nth$arity$2(null,i__18115);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117,(1),null);
var G__18118_18178 = this$;
var G__18119_18179 = k;
var G__18120_18180 = v;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__18118_18178,G__18119_18179,G__18120_18180) : tailrecursion.hoplon.on_BANG_.call(null,G__18118_18178,G__18119_18179,G__18120_18180));

var G__18181 = seq__18112;
var G__18182 = chunk__18113;
var G__18183 = count__18114;
var G__18184 = (i__18115 + (1));
seq__18112 = G__18181;
chunk__18113 = G__18182;
count__18114 = G__18183;
i__18115 = G__18184;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18112);
if(temp__4126__auto__){
var seq__18112__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18112__$1)){
var c__4369__auto__ = cljs.core.chunk_first(seq__18112__$1);
var G__18185 = cljs.core.chunk_rest(seq__18112__$1);
var G__18186 = c__4369__auto__;
var G__18187 = cljs.core.count(c__4369__auto__);
var G__18188 = (0);
seq__18112 = G__18185;
chunk__18113 = G__18186;
count__18114 = G__18187;
i__18115 = G__18188;
continue;
} else {
var vec__18121 = cljs.core.first(seq__18112__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18121,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18121,(1),null);
var G__18122_18189 = this$;
var G__18123_18190 = k;
var G__18124_18191 = v;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__18122_18189,G__18123_18190,G__18124_18191) : tailrecursion.hoplon.on_BANG_.call(null,G__18122_18189,G__18123_18190,G__18124_18191));

var G__18192 = cljs.core.next(seq__18112__$1);
var G__18193 = null;
var G__18194 = (0);
var G__18195 = (0);
seq__18112 = G__18192;
chunk__18113 = G__18193;
count__18114 = G__18194;
i__18115 = G__18195;
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
var G__18111_18177 = (0);
setTimeout(G__18110_18176,G__18111_18177);
} else {
}

return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__18196_SHARP_,p2__18197_SHARP_){
return p1__18196_SHARP_.appendChild(p2__18197_SHARP_);
}):(function (p1__18198_SHARP_,p2__18199_SHARP_){
try{return p1__18198_SHARP_.appendChild(p2__18199_SHARP_);
}catch (e18200){if((e18200 instanceof Error)){
var _ = e18200;
return null;
} else {
throw e18200;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){
(function (){var G__18204 = this$;
return jQuery(G__18204);
})().empty();

var G__18205 = this$;
var G__18206 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__18205,G__18206) : tailrecursion.hoplon.add_children_BANG_.call(null,G__18205,G__18206));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__18212){
var vec__18225 = p__18212;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18225,(0),null);
var _ = cljs.core.nthnext(vec__18225,(1));
var kids = vec__18225;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(function (){var G__18226 = child_cell;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18226) : cljs.core.deref.call(null,G__18226));
})());

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__18225,child_cell,_,kids){
return (function (p1__18208_SHARP_,p2__18209_SHARP_,p3__18210_SHARP_,p4__18207_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__18207_SHARP_);
});})(vec__18225,child_cell,_,kids))
);
} else {
var node_18237 = ((function (vec__18225,child_cell,_,kids){
return (function (p1__18211_SHARP_){
if(typeof p1__18211_SHARP_ === 'string'){
var G__18227 = p1__18211_SHARP_;
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(G__18227) : tailrecursion.hoplon.$text.call(null,G__18227));
} else {
if(cljs.core.truth_((function (){var G__18228 = p1__18211_SHARP_;
return (tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18228) : tailrecursion.hoplon.node_QMARK_.call(null,G__18228));
})())){
return p1__18211_SHARP_;
} else {
return null;
}
}
});})(vec__18225,child_cell,_,kids))
;
var seq__18229_18238 = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(node_18237,tailrecursion.hoplon.unsplice(kids)));
var chunk__18230_18239 = null;
var count__18231_18240 = (0);
var i__18232_18241 = (0);
while(true){
if((i__18232_18241 < count__18231_18240)){
var x_18242 = chunk__18230_18239.cljs$core$IIndexed$_nth$arity$2(null,i__18232_18241);
var G__18233_18243 = this$;
var G__18234_18244 = x_18242;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__18233_18243,G__18234_18244) : tailrecursion.hoplon.append_child.call(null,G__18233_18243,G__18234_18244));

var G__18245 = seq__18229_18238;
var G__18246 = chunk__18230_18239;
var G__18247 = count__18231_18240;
var G__18248 = (i__18232_18241 + (1));
seq__18229_18238 = G__18245;
chunk__18230_18239 = G__18246;
count__18231_18240 = G__18247;
i__18232_18241 = G__18248;
continue;
} else {
var temp__4126__auto___18249 = cljs.core.seq(seq__18229_18238);
if(temp__4126__auto___18249){
var seq__18229_18250__$1 = temp__4126__auto___18249;
if(cljs.core.chunked_seq_QMARK_(seq__18229_18250__$1)){
var c__4369__auto___18251 = cljs.core.chunk_first(seq__18229_18250__$1);
var G__18252 = cljs.core.chunk_rest(seq__18229_18250__$1);
var G__18253 = c__4369__auto___18251;
var G__18254 = cljs.core.count(c__4369__auto___18251);
var G__18255 = (0);
seq__18229_18238 = G__18252;
chunk__18230_18239 = G__18253;
count__18231_18240 = G__18254;
i__18232_18241 = G__18255;
continue;
} else {
var x_18256 = cljs.core.first(seq__18229_18250__$1);
var G__18235_18257 = this$;
var G__18236_18258 = x_18256;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__18235_18257,G__18236_18258) : tailrecursion.hoplon.append_child.call(null,G__18235_18257,G__18236_18258));

var G__18259 = cljs.core.next(seq__18229_18250__$1);
var G__18260 = null;
var G__18261 = (0);
var G__18262 = (0);
seq__18229_18238 = G__18259;
chunk__18230_18239 = G__18260;
count__18231_18240 = G__18261;
i__18232_18241 = G__18262;
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
var G__18270__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__18264 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18264,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18264,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__18265 = this$;
G__18265.hoplonIFn(attr,kids);

return G__18265;
} else {
var G__18266 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__18266,attr);

tailrecursion.hoplon.add_children_BANG_(G__18266,kids);

return G__18266;
}
};
var G__18270 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__18271__i = 0, G__18271__a = new Array(arguments.length -  1);
while (G__18271__i < G__18271__a.length) {G__18271__a[G__18271__i] = arguments[G__18271__i + 1]; ++G__18271__i;}
  args = new cljs.core.IndexedSeq(G__18271__a,0);
} 
return G__18270__delegate.call(this,self__,args);};
G__18270.cljs$lang$maxFixedArity = 1;
G__18270.cljs$lang$applyTo = (function (arglist__18272){
var self__ = cljs.core.first(arglist__18272);
var args = cljs.core.rest(arglist__18272);
return G__18270__delegate(self__,args);
});
G__18270.cljs$core$IFn$_invoke$arity$variadic = G__18270__delegate;
return G__18270;
})()
;

Element.prototype.apply = (function (self__,args18263){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18263)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__18273__delegate = function (args){
var this$ = this;
var vec__18267 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18267,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18267,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__18268 = this$;
G__18268.hoplonIFn(attr,kids);

return G__18268;
} else {
var G__18269 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__18269,attr);

tailrecursion.hoplon.add_children_BANG_(G__18269,kids);

return G__18269;
}
};
var G__18273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18274__i = 0, G__18274__a = new Array(arguments.length -  0);
while (G__18274__i < G__18274__a.length) {G__18274__a[G__18274__i] = arguments[G__18274__i + 0]; ++G__18274__i;}
  args = new cljs.core.IndexedSeq(G__18274__a,0);
} 
return G__18273__delegate.call(this,args);};
G__18273.cljs$lang$maxFixedArity = 0;
G__18273.cljs$lang$applyTo = (function (arglist__18275){
var args = cljs.core.seq(arglist__18275);
return G__18273__delegate(args);
});
G__18273.cljs$core$IFn$_invoke$arity$variadic = G__18273__delegate;
return G__18273;
})()
;

Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){
return (function() { 
var G__18288__delegate = function (args){
var vec__18282 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18282,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18282,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

(function (){var G__18283 = elem;
return jQuery(G__18283);
})().empty();

var seq__18284 = cljs.core.seq(kids);
var chunk__18285 = null;
var count__18286 = (0);
var i__18287 = (0);
while(true){
if((i__18287 < count__18286)){
var k = chunk__18285.cljs$core$IIndexed$_nth$arity$2(null,i__18287);
elem.appendChild(k);

var G__18289 = seq__18284;
var G__18290 = chunk__18285;
var G__18291 = count__18286;
var G__18292 = (i__18287 + (1));
seq__18284 = G__18289;
chunk__18285 = G__18290;
count__18286 = G__18291;
i__18287 = G__18292;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18284);
if(temp__4126__auto__){
var seq__18284__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18284__$1)){
var c__4369__auto__ = cljs.core.chunk_first(seq__18284__$1);
var G__18293 = cljs.core.chunk_rest(seq__18284__$1);
var G__18294 = c__4369__auto__;
var G__18295 = cljs.core.count(c__4369__auto__);
var G__18296 = (0);
seq__18284 = G__18293;
chunk__18285 = G__18294;
count__18286 = G__18295;
i__18287 = G__18296;
continue;
} else {
var k = cljs.core.first(seq__18284__$1);
elem.appendChild(k);

var G__18297 = cljs.core.next(seq__18284__$1);
var G__18298 = null;
var G__18299 = (0);
var G__18300 = (0);
seq__18284 = G__18297;
chunk__18285 = G__18298;
count__18286 = G__18299;
i__18287 = G__18300;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__18288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18301__i = 0, G__18301__a = new Array(arguments.length -  0);
while (G__18301__i < G__18301__a.length) {G__18301__a[G__18301__i] = arguments[G__18301__i + 0]; ++G__18301__i;}
  args = new cljs.core.IndexedSeq(G__18301__a,0);
} 
return G__18288__delegate.call(this,args);};
G__18288.cljs$lang$maxFixedArity = 0;
G__18288.cljs$lang$applyTo = (function (arglist__18302){
var args = cljs.core.seq(arglist__18302);
return G__18288__delegate(args);
});
G__18288.cljs$core$IFn$_invoke$arity$variadic = G__18288__delegate;
return G__18288;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){
return (function() { 
var G__18303__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__18303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18304__i = 0, G__18304__a = new Array(arguments.length -  0);
while (G__18304__i < G__18304__a.length) {G__18304__a[G__18304__i] = arguments[G__18304__i + 0]; ++G__18304__i;}
  args = new cljs.core.IndexedSeq(G__18304__a,0);
} 
return G__18303__delegate.call(this,args);};
G__18303.cljs$lang$maxFixedArity = 0;
G__18303.cljs$lang$applyTo = (function (arglist__18305){
var args = cljs.core.seq(arglist__18305);
return G__18303__delegate(args);
});
G__18303.cljs$core$IFn$_invoke$arity$variadic = G__18303__delegate;
return G__18303;
})()
;
});
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.html = (function() { 
var html__delegate = function (args){
var vec__18307 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18307,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18307,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
};
var html = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18308__i = 0, G__18308__a = new Array(arguments.length -  0);
while (G__18308__i < G__18308__a.length) {G__18308__a[G__18308__i] = arguments[G__18308__i + 0]; ++G__18308__i;}
  args = new cljs.core.IndexedSeq(G__18308__a,0);
} 
return html__delegate.call(this,args);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__18309){
var args = cljs.core.seq(arglist__18309);
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
tailrecursion.hoplon.$text = (function $text(p1__18310_SHARP_){
return document.createTextNode(p1__18310_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__18311_SHARP_){
return document.createComment(p1__18311_SHARP_);
});
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){
var G__18313 = f;
return jQuery(G__18313);
});
tailrecursion.hoplon.page_load = (function page_load(){
return (function (){var G__18315 = document;
return jQuery(G__18315);
})().trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function on_page_load(f){
return (function (){var G__18317 = document;
return jQuery(G__18317);
})().on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_((function (){
return (function (){var G__18319 = "body";
return jQuery(G__18319);
})().on("submit",(function (p1__18318_SHARP_){
var e = (function (){var G__18320 = p1__18318_SHARP_.target;
return jQuery(G__18320);
})();
if(cljs.core.truth_((function (){var or__3582__auto__ = e.attr("action");
if(cljs.core.truth_(or__3582__auto__)){
return or__3582__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__18318_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.by_id = (function by_id(id){
return document.getElementById(cljs.core.name(id));
});
tailrecursion.hoplon.val_id = (function val_id(id){
var G__18323 = tailrecursion.hoplon.by_id(id);
var G__18324 = cljs.core.constant$keyword$25;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2(G__18323,G__18324) : tailrecursion.hoplon.do_BANG_.call(null,G__18323,G__18324));
});
tailrecursion.hoplon.rel = (function rel(other,event){
var os = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__18328 = other;
return jQuery(G__18328);
})().offset());
var ox = (function (){var G__18329 = "left";
return (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1(G__18329) : os.call(null,G__18329));
})();
var oy = (function (){var G__18330 = "top";
return (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1(G__18330) : os.call(null,G__18330));
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

var G__18332 = event;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__18332) : handler.call(null,G__18332));
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__4479__auto__ = (function (){var G__18333 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18333) : cljs.core.atom.call(null,G__18333));
})();
var prefer_table__4480__auto__ = (function (){var G__18334 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18334) : cljs.core.atom.call(null,G__18334));
})();
var method_cache__4481__auto__ = (function (){var G__18335 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18335) : cljs.core.atom.call(null,G__18335));
})();
var cached_hierarchy__4482__auto__ = (function (){var G__18336 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18336) : cljs.core.atom.call(null,G__18336));
})();
var hierarchy__4483__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$28], null),cljs.core.constant$keyword$29,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","do!"),((function (method_table__4479__auto__,prefer_table__4480__auto__,method_cache__4481__auto__,cached_hierarchy__4482__auto__,hierarchy__4483__auto__){
return (function (elem,key,val){
return key;
});})(method_table__4479__auto__,prefer_table__4480__auto__,method_cache__4481__auto__,cached_hierarchy__4482__auto__,hierarchy__4483__auto__))
,cljs.core.constant$keyword$28,hierarchy__4483__auto__,method_table__4479__auto__,prefer_table__4480__auto__,method_cache__4481__auto__,cached_hierarchy__4482__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$28,(function (elem,key,val){
var G__18337 = elem;
var G__18338 = cljs.core.constant$keyword$30;
var G__18339 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18337,G__18338,G__18339) : tailrecursion.hoplon.do_BANG_.call(null,G__18337,G__18338,G__18339));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$25,(function() { 
var G__18341__delegate = function (elem,_,args){
var e = (function (){var G__18340 = elem;
return jQuery(G__18340);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__18341 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__18342__i = 0, G__18342__a = new Array(arguments.length -  2);
while (G__18342__i < G__18342__a.length) {G__18342__a[G__18342__i] = arguments[G__18342__i + 2]; ++G__18342__i;}
  args = new cljs.core.IndexedSeq(G__18342__a,0);
} 
return G__18341__delegate.call(this,elem,_,args);};
G__18341.cljs$lang$maxFixedArity = 2;
G__18341.cljs$lang$applyTo = (function (arglist__18343){
var elem = cljs.core.first(arglist__18343);
arglist__18343 = cljs.core.next(arglist__18343);
var _ = cljs.core.first(arglist__18343);
var args = cljs.core.rest(arglist__18343);
return G__18341__delegate(elem,_,args);
});
G__18341.cljs$core$IFn$_invoke$arity$variadic = G__18341__delegate;
return G__18341;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$30,(function (elem,_,kvs){
var e = (function (){var G__18344 = elem;
return jQuery(G__18344);
})();
var seq__18345 = cljs.core.seq(kvs);
var chunk__18346 = null;
var count__18347 = (0);
var i__18348 = (0);
while(true){
if((i__18348 < count__18347)){
var vec__18349 = chunk__18346.cljs$core$IIndexed$_nth$arity$2(null,i__18348);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18349,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18349,(1),null);
var k_18351__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_18351__$1);
} else {
e.attr(k_18351__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_18351__$1:v));
}

var G__18352 = seq__18345;
var G__18353 = chunk__18346;
var G__18354 = count__18347;
var G__18355 = (i__18348 + (1));
seq__18345 = G__18352;
chunk__18346 = G__18353;
count__18347 = G__18354;
i__18348 = G__18355;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18345);
if(temp__4126__auto__){
var seq__18345__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18345__$1)){
var c__4369__auto__ = cljs.core.chunk_first(seq__18345__$1);
var G__18356 = cljs.core.chunk_rest(seq__18345__$1);
var G__18357 = c__4369__auto__;
var G__18358 = cljs.core.count(c__4369__auto__);
var G__18359 = (0);
seq__18345 = G__18356;
chunk__18346 = G__18357;
count__18347 = G__18358;
i__18348 = G__18359;
continue;
} else {
var vec__18350 = cljs.core.first(seq__18345__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18350,(1),null);
var k_18360__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_18360__$1);
} else {
e.attr(k_18360__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_18360__$1:v));
}

var G__18361 = cljs.core.next(seq__18345__$1);
var G__18362 = null;
var G__18363 = (0);
var G__18364 = (0);
seq__18345 = G__18361;
chunk__18346 = G__18362;
count__18347 = G__18363;
i__18348 = G__18364;
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
var elem__$1 = (function (){var G__18366 = elem;
return jQuery(G__18366);
})();
var __GT_map = ((function (elem__$1){
return (function (p1__18365_SHARP_){
return cljs.core.zipmap(p1__18365_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__18367 = cljs.core.seq(clmap);
var chunk__18368 = null;
var count__18369 = (0);
var i__18370 = (0);
while(true){
if((i__18370 < count__18369)){
var vec__18371 = chunk__18368.cljs$core$IIndexed$_nth$arity$2(null,i__18370);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18371,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18371,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__18373 = seq__18367;
var G__18374 = chunk__18368;
var G__18375 = count__18369;
var G__18376 = (i__18370 + (1));
seq__18367 = G__18373;
chunk__18368 = G__18374;
count__18369 = G__18375;
i__18370 = G__18376;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18367);
if(temp__4126__auto__){
var seq__18367__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18367__$1)){
var c__4369__auto__ = cljs.core.chunk_first(seq__18367__$1);
var G__18377 = cljs.core.chunk_rest(seq__18367__$1);
var G__18378 = c__4369__auto__;
var G__18379 = cljs.core.count(c__4369__auto__);
var G__18380 = (0);
seq__18367 = G__18377;
chunk__18368 = G__18378;
count__18369 = G__18379;
i__18370 = G__18380;
continue;
} else {
var vec__18372 = cljs.core.first(seq__18367__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18372,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18372,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__18381 = cljs.core.next(seq__18367__$1);
var G__18382 = null;
var G__18383 = (0);
var G__18384 = (0);
seq__18367 = G__18381;
chunk__18368 = G__18382;
count__18369 = G__18383;
i__18370 = G__18384;
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
var e = (function (){var G__18385 = elem;
return jQuery(G__18385);
})();
var seq__18386 = cljs.core.seq(kvs);
var chunk__18387 = null;
var count__18388 = (0);
var i__18389 = (0);
while(true){
if((i__18389 < count__18388)){
var vec__18390 = chunk__18387.cljs$core$IIndexed$_nth$arity$2(null,i__18389);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18390,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18390,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__18392 = seq__18386;
var G__18393 = chunk__18387;
var G__18394 = count__18388;
var G__18395 = (i__18389 + (1));
seq__18386 = G__18392;
chunk__18387 = G__18393;
count__18388 = G__18394;
i__18389 = G__18395;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18386);
if(temp__4126__auto__){
var seq__18386__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18386__$1)){
var c__4369__auto__ = cljs.core.chunk_first(seq__18386__$1);
var G__18396 = cljs.core.chunk_rest(seq__18386__$1);
var G__18397 = c__4369__auto__;
var G__18398 = cljs.core.count(c__4369__auto__);
var G__18399 = (0);
seq__18386 = G__18396;
chunk__18387 = G__18397;
count__18388 = G__18398;
i__18389 = G__18399;
continue;
} else {
var vec__18391 = cljs.core.first(seq__18386__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18391,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18391,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__18400 = cljs.core.next(seq__18386__$1);
var G__18401 = null;
var G__18402 = (0);
var G__18403 = (0);
seq__18386 = G__18400;
chunk__18387 = G__18401;
count__18388 = G__18402;
i__18389 = G__18403;
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
return (function (){var G__18404 = elem;
return jQuery(G__18404);
})().toggle(cljs.core.boolean$(v));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$34,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__18405 = elem;
return jQuery(G__18405);
})().hide().slideDown("fast");
} else {
return (function (){var G__18406 = elem;
return jQuery(G__18406);
})().slideUp("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$35,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__18407 = elem;
return jQuery(G__18407);
})().hide().fadeIn("fast");
} else {
return (function (){var G__18408 = elem;
return jQuery(G__18408);
})().fadeOut("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$36,(function (elem,_,v){
var G__18409 = (function (){
if(cljs.core.truth_(v)){
return (function (){var G__18411 = elem;
return jQuery(G__18411);
})().focus();
} else {
return (function (){var G__18412 = elem;
return jQuery(G__18412);
})().focusout();
}
});
var G__18410 = (0);
return setTimeout(G__18409,G__18410);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$37,(function (elem,_,___$1){
return (function (){var G__18413 = elem;
return jQuery(G__18413);
})().select();
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$38,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__18414_18420 = elem;
var G__18415_18421 = cljs.core.constant$keyword$36;
var G__18416_18422 = v;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18414_18420,G__18415_18421,G__18416_18422) : tailrecursion.hoplon.do_BANG_.call(null,G__18414_18420,G__18415_18421,G__18416_18422));

var G__18417 = elem;
var G__18418 = cljs.core.constant$keyword$37;
var G__18419 = v;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18417,G__18418,G__18419) : tailrecursion.hoplon.do_BANG_.call(null,G__18417,G__18418,G__18419));
} else {
return null;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$39,(function (elem,_,v){
return (function (){var G__18423 = elem;
return jQuery(G__18423);
})().text([cljs.core.str(v)].join(''));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$40,(function (elem,_,v){
return (function (){var G__18424 = elem;
return jQuery(G__18424);
})().html(v);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$41,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = (function (){var G__18425 = "body,html";
return jQuery(G__18425);
})();
var elem__$1 = (function (){var G__18426 = elem;
return jQuery(G__18426);
})();
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$42,elem__$1.offset().top], null)));
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__4479__auto__ = (function (){var G__18427 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18427) : cljs.core.atom.call(null,G__18427));
})();
var prefer_table__4480__auto__ = (function (){var G__18428 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18428) : cljs.core.atom.call(null,G__18428));
})();
var method_cache__4481__auto__ = (function (){var G__18429 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18429) : cljs.core.atom.call(null,G__18429));
})();
var cached_hierarchy__4482__auto__ = (function (){var G__18430 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18430) : cljs.core.atom.call(null,G__18430));
})();
var hierarchy__4483__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$28], null),cljs.core.constant$keyword$29,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","on!"),((function (method_table__4479__auto__,prefer_table__4480__auto__,method_cache__4481__auto__,cached_hierarchy__4482__auto__,hierarchy__4483__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__4479__auto__,prefer_table__4480__auto__,method_cache__4481__auto__,cached_hierarchy__4482__auto__,hierarchy__4483__auto__))
,cljs.core.constant$keyword$28,hierarchy__4483__auto__,method_table__4479__auto__,prefer_table__4480__auto__,method_cache__4481__auto__,cached_hierarchy__4482__auto__));
})();
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__18431 = this$__$1.target;
return jQuery(G__18431);
})().val();
});
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$28,(function (elem,event,callback){
return tailrecursion.hoplon.when_dom(elem,(function (){
return (function (){var G__18432 = elem;
return jQuery(G__18432);
})().on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){
var pool_size = tailrecursion.javelin.cell((0));
var items_seq = tailrecursion.javelin.formula(((function (pool_size){
return (function (G__18472,G__18473){
var G__18474 = G__18473;
return (G__18472.cljs$core$IFn$_invoke$arity$1 ? G__18472.cljs$core$IFn$_invoke$arity$1(G__18474) : G__18472.call(null,G__18474));
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,items_seq){
return (function (G__18476,G__18475){
var G__18477 = G__18476;
return (G__18475.cljs$core$IFn$_invoke$arity$1 ? G__18475.cljs$core$IFn$_invoke$arity$1(G__18477) : G__18475.call(null,G__18477));
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__18433_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count){
return (function (G__18478,G__18479){
return (G__18478 < G__18479);
});})(pool_size,items_seq,cur_count))
).call(null,p1__18433_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__18434_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__18481,G__18482,G__18480){
var G__18483 = G__18481;
var G__18484 = G__18482;
return (G__18480.cljs$core$IFn$_invoke$arity$2 ? G__18480.cljs$core$IFn$_invoke$arity$2(G__18483,G__18484) : G__18480.call(null,G__18483,G__18484));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,items_seq,p1__18434_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = (function (){return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));
})();
tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__18498,G__18496,G__18491,G__18489,G__18490,G__18495,G__18497,G__18492,G__18494,G__18493){
if(cljs.core.truth_((G__18489 < G__18490))){
var seq__18485_18509 = cljs.core.seq((function (){var G__18499 = G__18489;
var G__18500 = G__18490;
return (G__18491.cljs$core$IFn$_invoke$arity$2 ? G__18491.cljs$core$IFn$_invoke$arity$2(G__18499,G__18500) : G__18491.call(null,G__18499,G__18500));
})());
var chunk__18486_18510 = null;
var count__18487_18511 = (0);
var i__18488_18512 = (0);
while(true){
if(cljs.core.truth_((i__18488_18512 < count__18487_18511))){
var i_18513 = chunk__18486_18510.cljs$core$IIndexed$_nth$arity$2(null,i__18488_18512);
var e_18514 = (function (){var G__18501 = (function (){var G__18502 = i_18513;
return (G__18493.cljs$core$IFn$_invoke$arity$1 ? G__18493.cljs$core$IFn$_invoke$arity$1(G__18502) : G__18493.call(null,G__18502));
})();
return (G__18492.cljs$core$IFn$_invoke$arity$1 ? G__18492.cljs$core$IFn$_invoke$arity$1(G__18501) : G__18492.call(null,G__18501));
})().call(null,cljs.core.constant$keyword$43,(function (){var G__18503 = i_18513;
return (G__18494.cljs$core$IFn$_invoke$arity$1 ? G__18494.cljs$core$IFn$_invoke$arity$1(G__18503) : G__18494.call(null,G__18503));
})());
if(cljs.core.not(G__18495)){
G__18496.appendChild(e_18514);
} else {
G__18496.insertBefore(e_18514,G__18496.firstChild);
}

var G__18515 = seq__18485_18509;
var G__18516 = chunk__18486_18510;
var G__18517 = count__18487_18511;
var G__18518 = (i__18488_18512 + (1));
seq__18485_18509 = G__18515;
chunk__18486_18510 = G__18516;
count__18487_18511 = G__18517;
i__18488_18512 = G__18518;
continue;
} else {
var temp__4126__auto___18519 = cljs.core.seq(seq__18485_18509);
if(temp__4126__auto___18519){
var seq__18485_18520__$1 = temp__4126__auto___18519;
if(cljs.core.chunked_seq_QMARK_(seq__18485_18520__$1)){
var c__4369__auto___18521 = cljs.core.chunk_first(seq__18485_18520__$1);
var G__18522 = cljs.core.chunk_rest(seq__18485_18520__$1);
var G__18523 = c__4369__auto___18521;
var G__18524 = cljs.core.count(c__4369__auto___18521);
var G__18525 = (0);
seq__18485_18509 = G__18522;
chunk__18486_18510 = G__18523;
count__18487_18511 = G__18524;
i__18488_18512 = G__18525;
continue;
} else {
var i_18526 = cljs.core.first(seq__18485_18520__$1);
var e_18527 = (function (){var G__18504 = (function (){var G__18505 = i_18526;
return (G__18493.cljs$core$IFn$_invoke$arity$1 ? G__18493.cljs$core$IFn$_invoke$arity$1(G__18505) : G__18493.call(null,G__18505));
})();
return (G__18492.cljs$core$IFn$_invoke$arity$1 ? G__18492.cljs$core$IFn$_invoke$arity$1(G__18504) : G__18492.call(null,G__18504));
})().call(null,cljs.core.constant$keyword$43,(function (){var G__18506 = i_18526;
return (G__18494.cljs$core$IFn$_invoke$arity$1 ? G__18494.cljs$core$IFn$_invoke$arity$1(G__18506) : G__18494.call(null,G__18506));
})());
if(cljs.core.not(G__18495)){
G__18496.appendChild(e_18527);
} else {
G__18496.insertBefore(e_18527,G__18496.firstChild);
}

var G__18528 = cljs.core.next(seq__18485_18520__$1);
var G__18529 = null;
var G__18530 = (0);
var G__18531 = (0);
seq__18485_18509 = G__18528;
chunk__18486_18510 = G__18529;
count__18487_18511 = G__18530;
i__18488_18512 = G__18531;
continue;
}
} else {
}
}
break;
}

var G__18507 = G__18498;
var G__18508 = G__18490;
return (G__18497.cljs$core$IFn$_invoke$arity$2 ? G__18497.cljs$core$IFn$_invoke$arity$2(G__18507,G__18508) : G__18497.call(null,G__18507,G__18508));
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
var r = (function (){var ret__10133__auto__ = tailrecursion.javelin.cell(window.location.hash);
var G__18557_18582 = ((function (ret__10133__auto__){
return (function (){
var G__18559 = ret__10133__auto__;
var G__18560 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18559,G__18560) : cljs.core.reset_BANG_.call(null,G__18559,G__18560));
});})(ret__10133__auto__))
;
var G__18558_18583 = (100);
setInterval(G__18557_18582,G__18558_18583);

return tailrecursion.javelin.formula(((function (ret__10133__auto__){
return (function (G__18561){
return G__18561;
});})(ret__10133__auto__))
).call(null,ret__10133__auto__);
})();
return tailrecursion.javelin.formula(((function (r){
return (function (G__18563,G__18562){
if(cljs.core.truth_((function (){var G__18564 = "";
var G__18565 = G__18563;
return (G__18562.cljs$core$IFn$_invoke$arity$2 ? G__18562.cljs$core$IFn$_invoke$arity$2(G__18564,G__18565) : G__18562.call(null,G__18564,G__18565));
})())){
return G__18563;
} else {
return null;
}
});})(r))
).call(null,r,cljs.core.not_EQ_);
});
var route_cell__1 = (function (setter_or_dfl){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl))){
var setter__10134__auto__ = setter_or_dfl;
var callback__10135__auto__ = (function (){var or__3582__auto__ = null;
if(cljs.core.truth_(or__3582__auto__)){
return or__3582__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula(((function (setter__10134__auto__,callback__10135__auto__){
return (function (G__18567,G__18566){
return G__18566.location.hash = G__18567;
});})(setter__10134__auto__,callback__10135__auto__))
).call(null,setter__10134__auto__,window);

var G__18568_18584 = ((function (setter__10134__auto__,callback__10135__auto__){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18570 = setter__10134__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18570) : cljs.core.deref.call(null,G__18570));
})(),window.location.hash)){
var G__18571_18586 = window.location.hash;
(callback__10135__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__10135__auto__.cljs$core$IFn$_invoke$arity$1(G__18571_18586) : callback__10135__auto__.call(null,G__18571_18586));

return window.location.hash = (function (){var G__18572 = setter__10134__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18572) : cljs.core.deref.call(null,G__18572));
})();
} else {
return null;
}
});})(setter__10134__auto__,callback__10135__auto__))
;
var G__18569_18585 = (100);
setInterval(G__18568_18584,G__18569_18585);

return setter__10134__auto__;
} else {
var r = route_cell.cljs$core$IFn$_invoke$arity$0();
return tailrecursion.javelin.formula(((function (r){
return (function (G__18573,G__18574){
var or__3582__auto__ = G__18573;
if(cljs.core.truth_(or__3582__auto__)){
return or__3582__auto__;
} else {
return G__18574;
}
});})(r))
).call(null,r,setter_or_dfl);
}
});
var route_cell__2 = (function (setter,callback){
var setter__10134__auto__ = setter;
var callback__10135__auto__ = (function (){var or__3582__auto__ = callback;
if(cljs.core.truth_(or__3582__auto__)){
return or__3582__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula(((function (setter__10134__auto__,callback__10135__auto__){
return (function (G__18576,G__18575){
return G__18575.location.hash = G__18576;
});})(setter__10134__auto__,callback__10135__auto__))
).call(null,setter__10134__auto__,window);

var G__18577_18587 = ((function (setter__10134__auto__,callback__10135__auto__){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18579 = setter__10134__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18579) : cljs.core.deref.call(null,G__18579));
})(),window.location.hash)){
var G__18580_18589 = window.location.hash;
(callback__10135__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__10135__auto__.cljs$core$IFn$_invoke$arity$1(G__18580_18589) : callback__10135__auto__.call(null,G__18580_18589));

return window.location.hash = (function (){var G__18581 = setter__10134__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18581) : cljs.core.deref.call(null,G__18581));
})();
} else {
return null;
}
});})(setter__10134__auto__,callback__10135__auto__))
;
var G__18578_18588 = (100);
setInterval(G__18577_18587,G__18578_18588);

return setter__10134__auto__;
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
