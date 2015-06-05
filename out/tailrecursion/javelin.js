// Compiled by ClojureScript 0.0-2814 {:elide-asserts true, :static-fns true}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = (function (){var G__17798 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17798) : cljs.core.atom.call(null,G__17798));
})();
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){
var walk = (function walk(queue){
var temp__4126__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4126__auto__)){
var node = temp__4126__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4126__auto__){
return (function (){
return cljs.core.cons(node,walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((function (){var G__17817 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17817) : branch_QMARK_.call(null,G__17817));
})())?(function (){var G__17818 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__17818) : children.call(null,G__17818));
})():null))));
});})(node,temp__4126__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.propagate_STAR_ = (function propagate_STAR_(pri_map){
while(true){
var temp__4126__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4126__auto__)){
var next = temp__4126__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4124__auto__ = next.thunk;
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__17821 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__){
return (function (p1__17819_SHARP_,p2__17820_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17819_SHARP_,p2__17820_SHARP_,p2__17820_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__))
,popq,next.sinks));
pri_map = G__17821;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){
if(cljs.core.truth_((function (){var G__17824 = x;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17824) : tailrecursion.javelin.cell_QMARK_.call(null,G__17824));
})())){
var G__17825 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17825) : cljs.core.deref.call(null,G__17825));
} else {
return x;
}
});
tailrecursion.javelin.next_rank = (function next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.cell__GT_pm = (function cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
tailrecursion.javelin.add_sync_BANG_ = (function add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tailrecursion.javelin._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
tailrecursion.javelin.safe_nth = (function safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e17827){if((e17827 instanceof Error)){
var _ = e17827;
return null;
} else {
throw e17827;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__17830 = c;
tailrecursion.javelin.add_sync_BANG_(G__17830);

return G__17830;
} else {
var G__17831 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__17831));

return G__17831;
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.destroy_cell_BANG_ = (function() { 
var destroy_cell_BANG___delegate = function (this$,p__17832){
var vec__17840 = p__17832;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17840,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__17841 = cljs.core.seq(srcs);
var chunk__17842 = null;
var count__17843 = (0);
var i__17844 = (0);
while(true){
if((i__17844 < count__17843)){
var src = chunk__17842.cljs$core$IIndexed$_nth$arity$2(null,i__17844);
if(cljs.core.truth_((function (){var G__17845 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17845) : tailrecursion.javelin.cell_QMARK_.call(null,G__17845));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__17847 = seq__17841;
var G__17848 = chunk__17842;
var G__17849 = count__17843;
var G__17850 = (i__17844 + (1));
seq__17841 = G__17847;
chunk__17842 = G__17848;
count__17843 = G__17849;
i__17844 = G__17850;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17841);
if(temp__4126__auto__){
var seq__17841__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17841__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__17841__$1);
var G__17851 = cljs.core.chunk_rest(seq__17841__$1);
var G__17852 = c__4551__auto__;
var G__17853 = cljs.core.count(c__4551__auto__);
var G__17854 = (0);
seq__17841 = G__17851;
chunk__17842 = G__17852;
count__17843 = G__17853;
i__17844 = G__17854;
continue;
} else {
var src = cljs.core.first(seq__17841__$1);
if(cljs.core.truth_((function (){var G__17846 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17846) : tailrecursion.javelin.cell_QMARK_.call(null,G__17846));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__17855 = cljs.core.next(seq__17841__$1);
var G__17856 = null;
var G__17857 = (0);
var G__17858 = (0);
seq__17841 = G__17855;
chunk__17842 = G__17856;
count__17843 = G__17857;
i__17844 = G__17858;
continue;
}
} else {
return null;
}
}
break;
}
};
var destroy_cell_BANG_ = function (this$,var_args){
var p__17832 = null;
if (arguments.length > 1) {
var G__17859__i = 0, G__17859__a = new Array(arguments.length -  1);
while (G__17859__i < G__17859__a.length) {G__17859__a[G__17859__i] = arguments[G__17859__i + 1]; ++G__17859__i;}
  p__17832 = new cljs.core.IndexedSeq(G__17859__a,0);
} 
return destroy_cell_BANG___delegate.call(this,this$,p__17832);};
destroy_cell_BANG_.cljs$lang$maxFixedArity = 1;
destroy_cell_BANG_.cljs$lang$applyTo = (function (arglist__17860){
var this$ = cljs.core.first(arglist__17860);
var p__17832 = cljs.core.rest(arglist__17860);
return destroy_cell_BANG___delegate(this$,p__17832);
});
destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = destroy_cell_BANG___delegate;
return destroy_cell_BANG_;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__17863){
var vec__17879 = p__17863;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17879,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17879,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__17880_17894 = cljs.core.seq(this$.sources);
var chunk__17881_17895 = null;
var count__17882_17896 = (0);
var i__17883_17897 = (0);
while(true){
if((i__17883_17897 < count__17882_17896)){
var source_17898 = chunk__17881_17895.cljs$core$IIndexed$_nth$arity$2(null,i__17883_17897);
if(cljs.core.truth_((function (){var G__17884 = source_17898;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17884) : tailrecursion.javelin.cell_QMARK_.call(null,G__17884));
})())){
source_17898.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_17898.sinks,this$);

if((source_17898.rank > this$.rank)){
var seq__17885_17899 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__17880_17894,chunk__17881_17895,count__17882_17896,i__17883_17897,source_17898,vec__17879,f,sources){
return (function (p1__17861_SHARP_){
return p1__17861_SHARP_.sinks;
});})(seq__17880_17894,chunk__17881_17895,count__17882_17896,i__17883_17897,source_17898,vec__17879,f,sources))
,source_17898));
var chunk__17886_17900 = null;
var count__17887_17901 = (0);
var i__17888_17902 = (0);
while(true){
if((i__17888_17902 < count__17887_17901)){
var dep_17903 = chunk__17886_17900.cljs$core$IIndexed$_nth$arity$2(null,i__17888_17902);
dep_17903.rank = tailrecursion.javelin.next_rank();

var G__17904 = seq__17885_17899;
var G__17905 = chunk__17886_17900;
var G__17906 = count__17887_17901;
var G__17907 = (i__17888_17902 + (1));
seq__17885_17899 = G__17904;
chunk__17886_17900 = G__17905;
count__17887_17901 = G__17906;
i__17888_17902 = G__17907;
continue;
} else {
var temp__4126__auto___17908 = cljs.core.seq(seq__17885_17899);
if(temp__4126__auto___17908){
var seq__17885_17909__$1 = temp__4126__auto___17908;
if(cljs.core.chunked_seq_QMARK_(seq__17885_17909__$1)){
var c__4551__auto___17910 = cljs.core.chunk_first(seq__17885_17909__$1);
var G__17911 = cljs.core.chunk_rest(seq__17885_17909__$1);
var G__17912 = c__4551__auto___17910;
var G__17913 = cljs.core.count(c__4551__auto___17910);
var G__17914 = (0);
seq__17885_17899 = G__17911;
chunk__17886_17900 = G__17912;
count__17887_17901 = G__17913;
i__17888_17902 = G__17914;
continue;
} else {
var dep_17915 = cljs.core.first(seq__17885_17909__$1);
dep_17915.rank = tailrecursion.javelin.next_rank();

var G__17916 = cljs.core.next(seq__17885_17909__$1);
var G__17917 = null;
var G__17918 = (0);
var G__17919 = (0);
seq__17885_17899 = G__17916;
chunk__17886_17900 = G__17917;
count__17887_17901 = G__17918;
i__17888_17902 = G__17919;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__17920 = seq__17880_17894;
var G__17921 = chunk__17881_17895;
var G__17922 = count__17882_17896;
var G__17923 = (i__17883_17897 + (1));
seq__17880_17894 = G__17920;
chunk__17881_17895 = G__17921;
count__17882_17896 = G__17922;
i__17883_17897 = G__17923;
continue;
} else {
var temp__4126__auto___17924 = cljs.core.seq(seq__17880_17894);
if(temp__4126__auto___17924){
var seq__17880_17925__$1 = temp__4126__auto___17924;
if(cljs.core.chunked_seq_QMARK_(seq__17880_17925__$1)){
var c__4551__auto___17926 = cljs.core.chunk_first(seq__17880_17925__$1);
var G__17927 = cljs.core.chunk_rest(seq__17880_17925__$1);
var G__17928 = c__4551__auto___17926;
var G__17929 = cljs.core.count(c__4551__auto___17926);
var G__17930 = (0);
seq__17880_17894 = G__17927;
chunk__17881_17895 = G__17928;
count__17882_17896 = G__17929;
i__17883_17897 = G__17930;
continue;
} else {
var source_17931 = cljs.core.first(seq__17880_17925__$1);
if(cljs.core.truth_((function (){var G__17889 = source_17931;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17889) : tailrecursion.javelin.cell_QMARK_.call(null,G__17889));
})())){
source_17931.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_17931.sinks,this$);

if((source_17931.rank > this$.rank)){
var seq__17890_17932 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__17880_17894,chunk__17881_17895,count__17882_17896,i__17883_17897,source_17931,seq__17880_17925__$1,temp__4126__auto___17924,vec__17879,f,sources){
return (function (p1__17861_SHARP_){
return p1__17861_SHARP_.sinks;
});})(seq__17880_17894,chunk__17881_17895,count__17882_17896,i__17883_17897,source_17931,seq__17880_17925__$1,temp__4126__auto___17924,vec__17879,f,sources))
,source_17931));
var chunk__17891_17933 = null;
var count__17892_17934 = (0);
var i__17893_17935 = (0);
while(true){
if((i__17893_17935 < count__17892_17934)){
var dep_17936 = chunk__17891_17933.cljs$core$IIndexed$_nth$arity$2(null,i__17893_17935);
dep_17936.rank = tailrecursion.javelin.next_rank();

var G__17937 = seq__17890_17932;
var G__17938 = chunk__17891_17933;
var G__17939 = count__17892_17934;
var G__17940 = (i__17893_17935 + (1));
seq__17890_17932 = G__17937;
chunk__17891_17933 = G__17938;
count__17892_17934 = G__17939;
i__17893_17935 = G__17940;
continue;
} else {
var temp__4126__auto___17941__$1 = cljs.core.seq(seq__17890_17932);
if(temp__4126__auto___17941__$1){
var seq__17890_17942__$1 = temp__4126__auto___17941__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17890_17942__$1)){
var c__4551__auto___17943 = cljs.core.chunk_first(seq__17890_17942__$1);
var G__17944 = cljs.core.chunk_rest(seq__17890_17942__$1);
var G__17945 = c__4551__auto___17943;
var G__17946 = cljs.core.count(c__4551__auto___17943);
var G__17947 = (0);
seq__17890_17932 = G__17944;
chunk__17891_17933 = G__17945;
count__17892_17934 = G__17946;
i__17893_17935 = G__17947;
continue;
} else {
var dep_17948 = cljs.core.first(seq__17890_17942__$1);
dep_17948.rank = tailrecursion.javelin.next_rank();

var G__17949 = cljs.core.next(seq__17890_17942__$1);
var G__17950 = null;
var G__17951 = (0);
var G__17952 = (0);
seq__17890_17932 = G__17949;
chunk__17891_17933 = G__17950;
count__17892_17934 = G__17951;
i__17893_17935 = G__17952;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__17953 = cljs.core.next(seq__17880_17925__$1);
var G__17954 = null;
var G__17955 = (0);
var G__17956 = (0);
seq__17880_17894 = G__17953;
chunk__17881_17895 = G__17954;
count__17882_17896 = G__17955;
i__17883_17897 = G__17956;
continue;
}
} else {
}
}
break;
}

var compute_17957 = ((function (vec__17879,f,sources){
return (function (p1__17862_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__17862_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__17862_SHARP_)));
});})(vec__17879,f,sources))
;
this$.thunk = ((function (compute_17957,vec__17879,f,sources){
return (function (){
return this$.state = compute_17957(this$.sources);
});})(compute_17957,vec__17879,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
};
var set_formula_BANG_ = function (this$,var_args){
var p__17863 = null;
if (arguments.length > 1) {
var G__17958__i = 0, G__17958__a = new Array(arguments.length -  1);
while (G__17958__i < G__17958__a.length) {G__17958__a[G__17958__i] = arguments[G__17958__i + 1]; ++G__17958__i;}
  p__17863 = new cljs.core.IndexedSeq(G__17958__a,0);
} 
return set_formula_BANG___delegate.call(this,this$,p__17863);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__17959){
var this$ = cljs.core.first(arglist__17959);
var p__17863 = cljs.core.rest(arglist__17959);
return set_formula_BANG___delegate(this$,p__17863);
});
set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_formula_BANG___delegate;
return set_formula_BANG_;
})()
;

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__17960 = cljs.core.seq(self__.watches);
var chunk__17961 = null;
var count__17962 = (0);
var i__17963 = (0);
while(true){
if((i__17963 < count__17962)){
var vec__17964 = chunk__17961.cljs$core$IIndexed$_nth$arity$2(null,i__17963);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17964,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17964,(1),null);
var G__17965_17990 = key;
var G__17966_17991 = this$__$1;
var G__17967_17992 = o;
var G__17968_17993 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17965_17990,G__17966_17991,G__17967_17992,G__17968_17993) : f.call(null,G__17965_17990,G__17966_17991,G__17967_17992,G__17968_17993));

var G__17994 = seq__17960;
var G__17995 = chunk__17961;
var G__17996 = count__17962;
var G__17997 = (i__17963 + (1));
seq__17960 = G__17994;
chunk__17961 = G__17995;
count__17962 = G__17996;
i__17963 = G__17997;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17960);
if(temp__4126__auto__){
var seq__17960__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17960__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__17960__$1);
var G__17998 = cljs.core.chunk_rest(seq__17960__$1);
var G__17999 = c__4551__auto__;
var G__18000 = cljs.core.count(c__4551__auto__);
var G__18001 = (0);
seq__17960 = G__17998;
chunk__17961 = G__17999;
count__17962 = G__18000;
i__17963 = G__18001;
continue;
} else {
var vec__17969 = cljs.core.first(seq__17960__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17969,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17969,(1),null);
var G__17970_18002 = key;
var G__17971_18003 = this$__$1;
var G__17972_18004 = o;
var G__17973_18005 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17970_18002,G__17971_18003,G__17972_18004,G__17973_18005) : f.call(null,G__17970_18002,G__17971_18003,G__17972_18004,G__17973_18005));

var G__18006 = cljs.core.next(seq__17960__$1);
var G__18007 = null;
var G__18008 = (0);
var G__18009 = (0);
seq__17960 = G__18006;
chunk__17961 = G__18007;
count__17962 = G__18008;
i__17963 = G__18009;
continue;
}
} else {
return null;
}
}
break;
}
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__17974 = this$__$1;
var G__17975 = (function (){var G__17976 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17976) : f.call(null,G__17976));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17974,G__17975) : cljs.core.reset_BANG_.call(null,G__17974,G__17975));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__17977 = this$__$1;
var G__17978 = (function (){var G__17979 = this$__$1.state;
var G__17980 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17979,G__17980) : f.call(null,G__17979,G__17980));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17977,G__17978) : cljs.core.reset_BANG_.call(null,G__17977,G__17978));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__17981 = this$__$1;
var G__17982 = (function (){var G__17983 = this$__$1.state;
var G__17984 = a;
var G__17985 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17983,G__17984,G__17985) : f.call(null,G__17983,G__17984,G__17985));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17981,G__17982) : cljs.core.reset_BANG_.call(null,G__17981,G__17982));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__17986 = this$__$1;
var G__17987 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17986,G__17987) : cljs.core.reset_BANG_.call(null,G__17986,G__17987));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var G__17988 = this$__$1;
return (tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17988) : tailrecursion.javelin.lens_QMARK_.call(null,G__17988));
})())){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((function (){var G__17989 = this$__$1;
return (tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17989) : tailrecursion.javelin.input_QMARK_.call(null,G__17989));
})())){
this$__$1.state = x;

tailrecursion.javelin.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__4351__auto__,writer__4352__auto__,opt__4353__auto__){
return cljs.core._write(writer__4352__auto__,"tailrecursion.javelin/Cell");
});

tailrecursion.javelin.__GT_Cell = (function __GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

tailrecursion.javelin.cell_QMARK_ = (function cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),tailrecursion.javelin.Cell)){
return c;
} else {
return null;
}
});
tailrecursion.javelin.formula_QMARK_ = (function formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__3752__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__3752__auto__)){
return c.thunk;
} else {
return and__3752__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__3752__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__3752__auto__)){
return c.update;
} else {
return and__3752__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){
if(cljs.core.truth_((function (){var and__3752__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__3752__auto__)){
return cljs.core.not(tailrecursion.javelin.formula_QMARK_(c));
} else {
return and__3752__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function set_cell_BANG_(c,x){
c.state = x;

return tailrecursion.javelin.set_formula_BANG_(c);
});
tailrecursion.javelin.formula = (function formula(f){
return (function() { 
var G__18012__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__18011 = cljs.core.constant$keyword$24;
return (tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(G__18011) : tailrecursion.javelin.cell.call(null,G__18011));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__18012 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__18013__i = 0, G__18013__a = new Array(arguments.length -  0);
while (G__18013__i < G__18013__a.length) {G__18013__a[G__18013__i] = arguments[G__18013__i + 0]; ++G__18013__i;}
  sources = new cljs.core.IndexedSeq(G__18013__a,0);
} 
return G__18012__delegate.call(this,sources);};
G__18012.cljs$lang$maxFixedArity = 0;
G__18012.cljs$lang$applyTo = (function (arglist__18014){
var sources = cljs.core.seq(arglist__18014);
return G__18012__delegate(sources);
});
G__18012.cljs$core$IFn$_invoke$arity$variadic = G__18012__delegate;
return G__18012;
})()
;
});
tailrecursion.javelin.lens = (function lens(c,f){
var c__$1 = tailrecursion.javelin.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
tailrecursion.javelin.cell = (function cell(x){
return tailrecursion.javelin.set_formula_BANG_((new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.lift = tailrecursion.javelin.formula;
tailrecursion.javelin.dosync_STAR_ = (function dosync_STAR_(thunk){
var bind = (function (p1__18015_SHARP_){
var _STAR_tx_STAR_18020 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__18021 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18021) : cljs.core.atom.call(null,G__18021));
})();

try{return (p1__18015_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__18015_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__18015_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_18020;
}});
var prop = ((function (bind){
return (function (){
var tx = (function (){var G__18022 = tailrecursion.javelin._STAR_tx_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18022) : cljs.core.deref.call(null,G__18022));
})();
var _STAR_tx_STAR_18023 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_18023;
}});})(bind))
;
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (cells){
var olds = (function (){var G__18033 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.constant$keyword$24);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18033) : cljs.core.atom.call(null,G__18033));
})();
var tag_neq = ((function (olds){
return (function (p1__18024_SHARP_,p2__18025_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__18024_SHARP_,p2__18025_SHARP_),p2__18025_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__18027_SHARP_,p2__18026_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__18027_SHARP_,p2__18026_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__18037__delegate = function (rest__18028_SHARP_){
var news = diff((function (){var G__18034 = olds;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18034) : cljs.core.deref.call(null,G__18034));
})(),rest__18028_SHARP_);
var G__18035_18038 = olds;
var G__18036_18039 = rest__18028_SHARP_;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18035_18038,G__18036_18039) : cljs.core.reset_BANG_.call(null,G__18035_18038,G__18036_18039));

return news;
};
var G__18037 = function (var_args){
var rest__18028_SHARP_ = null;
if (arguments.length > 0) {
var G__18040__i = 0, G__18040__a = new Array(arguments.length -  0);
while (G__18040__i < G__18040__a.length) {G__18040__a[G__18040__i] = arguments[G__18040__i + 0]; ++G__18040__i;}
  rest__18028_SHARP_ = new cljs.core.IndexedSeq(G__18040__a,0);
} 
return G__18037__delegate.call(this,rest__18028_SHARP_);};
G__18037.cljs$lang$maxFixedArity = 0;
G__18037.cljs$lang$applyTo = (function (arglist__18041){
var rest__18028_SHARP_ = cljs.core.seq(arglist__18041);
return G__18037__delegate(rest__18028_SHARP_);
});
G__18037.cljs$core$IFn$_invoke$arity$variadic = G__18037__delegate;
return G__18037;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;
if (arguments.length > 0) {
var G__18042__i = 0, G__18042__a = new Array(arguments.length -  0);
while (G__18042__i < G__18042__a.length) {G__18042__a[G__18042__i] = arguments[G__18042__i + 0]; ++G__18042__i;}
  cells = new cljs.core.IndexedSeq(G__18042__a,0);
} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18043){
var cells = cljs.core.seq(arglist__18043);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__18044_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__18044_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((function (){var G__18046 = cseq;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18046) : cljs.core.deref.call(null,G__18046));
})())));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__18047_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__18047_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__18057_18066 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__18058_18067 = null;
var count__18059_18068 = (0);
var i__18060_18069 = (0);
while(true){
if((i__18060_18069 < count__18059_18068)){
var i_18070 = chunk__18058_18067.cljs$core$IIndexed$_nth$arity$2(null,i__18060_18069);
var G__18061_18071 = (function (){var G__18062 = i_18070;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__18062) : ith_item__$1.call(null,G__18062));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__18061_18071) : f__$1.call(null,G__18061_18071));

var G__18072 = seq__18057_18066;
var G__18073 = chunk__18058_18067;
var G__18074 = count__18059_18068;
var G__18075 = (i__18060_18069 + (1));
seq__18057_18066 = G__18072;
chunk__18058_18067 = G__18073;
count__18059_18068 = G__18074;
i__18060_18069 = G__18075;
continue;
} else {
var temp__4126__auto___18076 = cljs.core.seq(seq__18057_18066);
if(temp__4126__auto___18076){
var seq__18057_18077__$1 = temp__4126__auto___18076;
if(cljs.core.chunked_seq_QMARK_(seq__18057_18077__$1)){
var c__4551__auto___18078 = cljs.core.chunk_first(seq__18057_18077__$1);
var G__18079 = cljs.core.chunk_rest(seq__18057_18077__$1);
var G__18080 = c__4551__auto___18078;
var G__18081 = cljs.core.count(c__4551__auto___18078);
var G__18082 = (0);
seq__18057_18066 = G__18079;
chunk__18058_18067 = G__18080;
count__18059_18068 = G__18081;
i__18060_18069 = G__18082;
continue;
} else {
var i_18083 = cljs.core.first(seq__18057_18077__$1);
var G__18063_18084 = (function (){var G__18064 = i_18083;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__18064) : ith_item__$1.call(null,G__18064));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__18063_18084) : f__$1.call(null,G__18063_18084));

var G__18085 = cljs.core.next(seq__18057_18077__$1);
var G__18086 = null;
var G__18087 = (0);
var G__18088 = (0);
seq__18057_18066 = G__18085;
chunk__18058_18067 = G__18086;
count__18059_18068 = G__18087;
i__18060_18069 = G__18088;
continue;
}
} else {
}
}
break;
}

var G__18065 = cur_count__$1;
return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(G__18065) : reset_pool_size_BANG_.call(null,G__18065));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
