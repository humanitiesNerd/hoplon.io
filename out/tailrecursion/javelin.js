// Compiled by ClojureScript 0.0-2814 {:elide-asserts true, :static-fns true}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = (function (){var G__17616 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17616) : cljs.core.atom.call(null,G__17616));
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
return cljs.core.cons(node,walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((function (){var G__17635 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17635) : branch_QMARK_.call(null,G__17635));
})())?(function (){var G__17636 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__17636) : children.call(null,G__17636));
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

var G__17639 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__){
return (function (p1__17637_SHARP_,p2__17638_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17637_SHARP_,p2__17638_SHARP_,p2__17638_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__))
,popq,next.sinks));
pri_map = G__17639;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){
if(cljs.core.truth_((function (){var G__17642 = x;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17642) : tailrecursion.javelin.cell_QMARK_.call(null,G__17642));
})())){
var G__17643 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17643) : cljs.core.deref.call(null,G__17643));
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
}catch (e17645){if((e17645 instanceof Error)){
var _ = e17645;
return null;
} else {
throw e17645;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__17648 = c;
tailrecursion.javelin.add_sync_BANG_(G__17648);

return G__17648;
} else {
var G__17649 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__17649));

return G__17649;
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.destroy_cell_BANG_ = (function() { 
var destroy_cell_BANG___delegate = function (this$,p__17650){
var vec__17658 = p__17650;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17658,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__17659 = cljs.core.seq(srcs);
var chunk__17660 = null;
var count__17661 = (0);
var i__17662 = (0);
while(true){
if((i__17662 < count__17661)){
var src = chunk__17660.cljs$core$IIndexed$_nth$arity$2(null,i__17662);
if(cljs.core.truth_((function (){var G__17663 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17663) : tailrecursion.javelin.cell_QMARK_.call(null,G__17663));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__17665 = seq__17659;
var G__17666 = chunk__17660;
var G__17667 = count__17661;
var G__17668 = (i__17662 + (1));
seq__17659 = G__17665;
chunk__17660 = G__17666;
count__17661 = G__17667;
i__17662 = G__17668;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17659);
if(temp__4126__auto__){
var seq__17659__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17659__$1)){
var c__4369__auto__ = cljs.core.chunk_first(seq__17659__$1);
var G__17669 = cljs.core.chunk_rest(seq__17659__$1);
var G__17670 = c__4369__auto__;
var G__17671 = cljs.core.count(c__4369__auto__);
var G__17672 = (0);
seq__17659 = G__17669;
chunk__17660 = G__17670;
count__17661 = G__17671;
i__17662 = G__17672;
continue;
} else {
var src = cljs.core.first(seq__17659__$1);
if(cljs.core.truth_((function (){var G__17664 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17664) : tailrecursion.javelin.cell_QMARK_.call(null,G__17664));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__17673 = cljs.core.next(seq__17659__$1);
var G__17674 = null;
var G__17675 = (0);
var G__17676 = (0);
seq__17659 = G__17673;
chunk__17660 = G__17674;
count__17661 = G__17675;
i__17662 = G__17676;
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
var p__17650 = null;
if (arguments.length > 1) {
var G__17677__i = 0, G__17677__a = new Array(arguments.length -  1);
while (G__17677__i < G__17677__a.length) {G__17677__a[G__17677__i] = arguments[G__17677__i + 1]; ++G__17677__i;}
  p__17650 = new cljs.core.IndexedSeq(G__17677__a,0);
} 
return destroy_cell_BANG___delegate.call(this,this$,p__17650);};
destroy_cell_BANG_.cljs$lang$maxFixedArity = 1;
destroy_cell_BANG_.cljs$lang$applyTo = (function (arglist__17678){
var this$ = cljs.core.first(arglist__17678);
var p__17650 = cljs.core.rest(arglist__17678);
return destroy_cell_BANG___delegate(this$,p__17650);
});
destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = destroy_cell_BANG___delegate;
return destroy_cell_BANG_;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__17681){
var vec__17697 = p__17681;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17697,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17697,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__17698_17712 = cljs.core.seq(this$.sources);
var chunk__17699_17713 = null;
var count__17700_17714 = (0);
var i__17701_17715 = (0);
while(true){
if((i__17701_17715 < count__17700_17714)){
var source_17716 = chunk__17699_17713.cljs$core$IIndexed$_nth$arity$2(null,i__17701_17715);
if(cljs.core.truth_((function (){var G__17702 = source_17716;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17702) : tailrecursion.javelin.cell_QMARK_.call(null,G__17702));
})())){
source_17716.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_17716.sinks,this$);

if((source_17716.rank > this$.rank)){
var seq__17703_17717 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__17698_17712,chunk__17699_17713,count__17700_17714,i__17701_17715,source_17716,vec__17697,f,sources){
return (function (p1__17679_SHARP_){
return p1__17679_SHARP_.sinks;
});})(seq__17698_17712,chunk__17699_17713,count__17700_17714,i__17701_17715,source_17716,vec__17697,f,sources))
,source_17716));
var chunk__17704_17718 = null;
var count__17705_17719 = (0);
var i__17706_17720 = (0);
while(true){
if((i__17706_17720 < count__17705_17719)){
var dep_17721 = chunk__17704_17718.cljs$core$IIndexed$_nth$arity$2(null,i__17706_17720);
dep_17721.rank = tailrecursion.javelin.next_rank();

var G__17722 = seq__17703_17717;
var G__17723 = chunk__17704_17718;
var G__17724 = count__17705_17719;
var G__17725 = (i__17706_17720 + (1));
seq__17703_17717 = G__17722;
chunk__17704_17718 = G__17723;
count__17705_17719 = G__17724;
i__17706_17720 = G__17725;
continue;
} else {
var temp__4126__auto___17726 = cljs.core.seq(seq__17703_17717);
if(temp__4126__auto___17726){
var seq__17703_17727__$1 = temp__4126__auto___17726;
if(cljs.core.chunked_seq_QMARK_(seq__17703_17727__$1)){
var c__4369__auto___17728 = cljs.core.chunk_first(seq__17703_17727__$1);
var G__17729 = cljs.core.chunk_rest(seq__17703_17727__$1);
var G__17730 = c__4369__auto___17728;
var G__17731 = cljs.core.count(c__4369__auto___17728);
var G__17732 = (0);
seq__17703_17717 = G__17729;
chunk__17704_17718 = G__17730;
count__17705_17719 = G__17731;
i__17706_17720 = G__17732;
continue;
} else {
var dep_17733 = cljs.core.first(seq__17703_17727__$1);
dep_17733.rank = tailrecursion.javelin.next_rank();

var G__17734 = cljs.core.next(seq__17703_17727__$1);
var G__17735 = null;
var G__17736 = (0);
var G__17737 = (0);
seq__17703_17717 = G__17734;
chunk__17704_17718 = G__17735;
count__17705_17719 = G__17736;
i__17706_17720 = G__17737;
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

var G__17738 = seq__17698_17712;
var G__17739 = chunk__17699_17713;
var G__17740 = count__17700_17714;
var G__17741 = (i__17701_17715 + (1));
seq__17698_17712 = G__17738;
chunk__17699_17713 = G__17739;
count__17700_17714 = G__17740;
i__17701_17715 = G__17741;
continue;
} else {
var temp__4126__auto___17742 = cljs.core.seq(seq__17698_17712);
if(temp__4126__auto___17742){
var seq__17698_17743__$1 = temp__4126__auto___17742;
if(cljs.core.chunked_seq_QMARK_(seq__17698_17743__$1)){
var c__4369__auto___17744 = cljs.core.chunk_first(seq__17698_17743__$1);
var G__17745 = cljs.core.chunk_rest(seq__17698_17743__$1);
var G__17746 = c__4369__auto___17744;
var G__17747 = cljs.core.count(c__4369__auto___17744);
var G__17748 = (0);
seq__17698_17712 = G__17745;
chunk__17699_17713 = G__17746;
count__17700_17714 = G__17747;
i__17701_17715 = G__17748;
continue;
} else {
var source_17749 = cljs.core.first(seq__17698_17743__$1);
if(cljs.core.truth_((function (){var G__17707 = source_17749;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17707) : tailrecursion.javelin.cell_QMARK_.call(null,G__17707));
})())){
source_17749.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_17749.sinks,this$);

if((source_17749.rank > this$.rank)){
var seq__17708_17750 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__17698_17712,chunk__17699_17713,count__17700_17714,i__17701_17715,source_17749,seq__17698_17743__$1,temp__4126__auto___17742,vec__17697,f,sources){
return (function (p1__17679_SHARP_){
return p1__17679_SHARP_.sinks;
});})(seq__17698_17712,chunk__17699_17713,count__17700_17714,i__17701_17715,source_17749,seq__17698_17743__$1,temp__4126__auto___17742,vec__17697,f,sources))
,source_17749));
var chunk__17709_17751 = null;
var count__17710_17752 = (0);
var i__17711_17753 = (0);
while(true){
if((i__17711_17753 < count__17710_17752)){
var dep_17754 = chunk__17709_17751.cljs$core$IIndexed$_nth$arity$2(null,i__17711_17753);
dep_17754.rank = tailrecursion.javelin.next_rank();

var G__17755 = seq__17708_17750;
var G__17756 = chunk__17709_17751;
var G__17757 = count__17710_17752;
var G__17758 = (i__17711_17753 + (1));
seq__17708_17750 = G__17755;
chunk__17709_17751 = G__17756;
count__17710_17752 = G__17757;
i__17711_17753 = G__17758;
continue;
} else {
var temp__4126__auto___17759__$1 = cljs.core.seq(seq__17708_17750);
if(temp__4126__auto___17759__$1){
var seq__17708_17760__$1 = temp__4126__auto___17759__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17708_17760__$1)){
var c__4369__auto___17761 = cljs.core.chunk_first(seq__17708_17760__$1);
var G__17762 = cljs.core.chunk_rest(seq__17708_17760__$1);
var G__17763 = c__4369__auto___17761;
var G__17764 = cljs.core.count(c__4369__auto___17761);
var G__17765 = (0);
seq__17708_17750 = G__17762;
chunk__17709_17751 = G__17763;
count__17710_17752 = G__17764;
i__17711_17753 = G__17765;
continue;
} else {
var dep_17766 = cljs.core.first(seq__17708_17760__$1);
dep_17766.rank = tailrecursion.javelin.next_rank();

var G__17767 = cljs.core.next(seq__17708_17760__$1);
var G__17768 = null;
var G__17769 = (0);
var G__17770 = (0);
seq__17708_17750 = G__17767;
chunk__17709_17751 = G__17768;
count__17710_17752 = G__17769;
i__17711_17753 = G__17770;
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

var G__17771 = cljs.core.next(seq__17698_17743__$1);
var G__17772 = null;
var G__17773 = (0);
var G__17774 = (0);
seq__17698_17712 = G__17771;
chunk__17699_17713 = G__17772;
count__17700_17714 = G__17773;
i__17701_17715 = G__17774;
continue;
}
} else {
}
}
break;
}

var compute_17775 = ((function (vec__17697,f,sources){
return (function (p1__17680_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__17680_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__17680_SHARP_)));
});})(vec__17697,f,sources))
;
this$.thunk = ((function (compute_17775,vec__17697,f,sources){
return (function (){
return this$.state = compute_17775(this$.sources);
});})(compute_17775,vec__17697,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
};
var set_formula_BANG_ = function (this$,var_args){
var p__17681 = null;
if (arguments.length > 1) {
var G__17776__i = 0, G__17776__a = new Array(arguments.length -  1);
while (G__17776__i < G__17776__a.length) {G__17776__a[G__17776__i] = arguments[G__17776__i + 1]; ++G__17776__i;}
  p__17681 = new cljs.core.IndexedSeq(G__17776__a,0);
} 
return set_formula_BANG___delegate.call(this,this$,p__17681);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__17777){
var this$ = cljs.core.first(arglist__17777);
var p__17681 = cljs.core.rest(arglist__17777);
return set_formula_BANG___delegate(this$,p__17681);
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
var seq__17778 = cljs.core.seq(self__.watches);
var chunk__17779 = null;
var count__17780 = (0);
var i__17781 = (0);
while(true){
if((i__17781 < count__17780)){
var vec__17782 = chunk__17779.cljs$core$IIndexed$_nth$arity$2(null,i__17781);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17782,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17782,(1),null);
var G__17783_17808 = key;
var G__17784_17809 = this$__$1;
var G__17785_17810 = o;
var G__17786_17811 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17783_17808,G__17784_17809,G__17785_17810,G__17786_17811) : f.call(null,G__17783_17808,G__17784_17809,G__17785_17810,G__17786_17811));

var G__17812 = seq__17778;
var G__17813 = chunk__17779;
var G__17814 = count__17780;
var G__17815 = (i__17781 + (1));
seq__17778 = G__17812;
chunk__17779 = G__17813;
count__17780 = G__17814;
i__17781 = G__17815;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17778);
if(temp__4126__auto__){
var seq__17778__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17778__$1)){
var c__4369__auto__ = cljs.core.chunk_first(seq__17778__$1);
var G__17816 = cljs.core.chunk_rest(seq__17778__$1);
var G__17817 = c__4369__auto__;
var G__17818 = cljs.core.count(c__4369__auto__);
var G__17819 = (0);
seq__17778 = G__17816;
chunk__17779 = G__17817;
count__17780 = G__17818;
i__17781 = G__17819;
continue;
} else {
var vec__17787 = cljs.core.first(seq__17778__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17787,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17787,(1),null);
var G__17788_17820 = key;
var G__17789_17821 = this$__$1;
var G__17790_17822 = o;
var G__17791_17823 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17788_17820,G__17789_17821,G__17790_17822,G__17791_17823) : f.call(null,G__17788_17820,G__17789_17821,G__17790_17822,G__17791_17823));

var G__17824 = cljs.core.next(seq__17778__$1);
var G__17825 = null;
var G__17826 = (0);
var G__17827 = (0);
seq__17778 = G__17824;
chunk__17779 = G__17825;
count__17780 = G__17826;
i__17781 = G__17827;
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
var G__17792 = this$__$1;
var G__17793 = (function (){var G__17794 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17794) : f.call(null,G__17794));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17792,G__17793) : cljs.core.reset_BANG_.call(null,G__17792,G__17793));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__17795 = this$__$1;
var G__17796 = (function (){var G__17797 = this$__$1.state;
var G__17798 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17797,G__17798) : f.call(null,G__17797,G__17798));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17795,G__17796) : cljs.core.reset_BANG_.call(null,G__17795,G__17796));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__17799 = this$__$1;
var G__17800 = (function (){var G__17801 = this$__$1.state;
var G__17802 = a;
var G__17803 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17801,G__17802,G__17803) : f.call(null,G__17801,G__17802,G__17803));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17799,G__17800) : cljs.core.reset_BANG_.call(null,G__17799,G__17800));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__17804 = this$__$1;
var G__17805 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17804,G__17805) : cljs.core.reset_BANG_.call(null,G__17804,G__17805));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var G__17806 = this$__$1;
return (tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17806) : tailrecursion.javelin.lens_QMARK_.call(null,G__17806));
})())){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((function (){var G__17807 = this$__$1;
return (tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17807) : tailrecursion.javelin.input_QMARK_.call(null,G__17807));
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

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__4169__auto__,writer__4170__auto__,opt__4171__auto__){
return cljs.core._write(writer__4170__auto__,"tailrecursion.javelin/Cell");
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
if(cljs.core.truth_((function (){var and__3570__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__3570__auto__)){
return c.thunk;
} else {
return and__3570__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__3570__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__3570__auto__)){
return c.update;
} else {
return and__3570__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){
if(cljs.core.truth_((function (){var and__3570__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__3570__auto__)){
return cljs.core.not(tailrecursion.javelin.formula_QMARK_(c));
} else {
return and__3570__auto__;
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
var G__17830__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__17829 = cljs.core.constant$keyword$24;
return (tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(G__17829) : tailrecursion.javelin.cell.call(null,G__17829));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__17830 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__17831__i = 0, G__17831__a = new Array(arguments.length -  0);
while (G__17831__i < G__17831__a.length) {G__17831__a[G__17831__i] = arguments[G__17831__i + 0]; ++G__17831__i;}
  sources = new cljs.core.IndexedSeq(G__17831__a,0);
} 
return G__17830__delegate.call(this,sources);};
G__17830.cljs$lang$maxFixedArity = 0;
G__17830.cljs$lang$applyTo = (function (arglist__17832){
var sources = cljs.core.seq(arglist__17832);
return G__17830__delegate(sources);
});
G__17830.cljs$core$IFn$_invoke$arity$variadic = G__17830__delegate;
return G__17830;
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
var bind = (function (p1__17833_SHARP_){
var _STAR_tx_STAR_17838 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__17839 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17839) : cljs.core.atom.call(null,G__17839));
})();

try{return (p1__17833_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__17833_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__17833_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_17838;
}});
var prop = ((function (bind){
return (function (){
var tx = (function (){var G__17840 = tailrecursion.javelin._STAR_tx_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17840) : cljs.core.deref.call(null,G__17840));
})();
var _STAR_tx_STAR_17841 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_17841;
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
var olds = (function (){var G__17851 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.constant$keyword$24);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17851) : cljs.core.atom.call(null,G__17851));
})();
var tag_neq = ((function (olds){
return (function (p1__17842_SHARP_,p2__17843_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__17842_SHARP_,p2__17843_SHARP_),p2__17843_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__17845_SHARP_,p2__17844_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__17845_SHARP_,p2__17844_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__17855__delegate = function (rest__17846_SHARP_){
var news = diff((function (){var G__17852 = olds;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17852) : cljs.core.deref.call(null,G__17852));
})(),rest__17846_SHARP_);
var G__17853_17856 = olds;
var G__17854_17857 = rest__17846_SHARP_;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17853_17856,G__17854_17857) : cljs.core.reset_BANG_.call(null,G__17853_17856,G__17854_17857));

return news;
};
var G__17855 = function (var_args){
var rest__17846_SHARP_ = null;
if (arguments.length > 0) {
var G__17858__i = 0, G__17858__a = new Array(arguments.length -  0);
while (G__17858__i < G__17858__a.length) {G__17858__a[G__17858__i] = arguments[G__17858__i + 0]; ++G__17858__i;}
  rest__17846_SHARP_ = new cljs.core.IndexedSeq(G__17858__a,0);
} 
return G__17855__delegate.call(this,rest__17846_SHARP_);};
G__17855.cljs$lang$maxFixedArity = 0;
G__17855.cljs$lang$applyTo = (function (arglist__17859){
var rest__17846_SHARP_ = cljs.core.seq(arglist__17859);
return G__17855__delegate(rest__17846_SHARP_);
});
G__17855.cljs$core$IFn$_invoke$arity$variadic = G__17855__delegate;
return G__17855;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;
if (arguments.length > 0) {
var G__17860__i = 0, G__17860__a = new Array(arguments.length -  0);
while (G__17860__i < G__17860__a.length) {G__17860__a[G__17860__i] = arguments[G__17860__i + 0]; ++G__17860__i;}
  cells = new cljs.core.IndexedSeq(G__17860__a,0);
} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17861){
var cells = cljs.core.seq(arglist__17861);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__17862_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__17862_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((function (){var G__17864 = cseq;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17864) : cljs.core.deref.call(null,G__17864));
})())));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__17865_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__17865_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__17875_17884 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__17876_17885 = null;
var count__17877_17886 = (0);
var i__17878_17887 = (0);
while(true){
if((i__17878_17887 < count__17877_17886)){
var i_17888 = chunk__17876_17885.cljs$core$IIndexed$_nth$arity$2(null,i__17878_17887);
var G__17879_17889 = (function (){var G__17880 = i_17888;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__17880) : ith_item__$1.call(null,G__17880));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17879_17889) : f__$1.call(null,G__17879_17889));

var G__17890 = seq__17875_17884;
var G__17891 = chunk__17876_17885;
var G__17892 = count__17877_17886;
var G__17893 = (i__17878_17887 + (1));
seq__17875_17884 = G__17890;
chunk__17876_17885 = G__17891;
count__17877_17886 = G__17892;
i__17878_17887 = G__17893;
continue;
} else {
var temp__4126__auto___17894 = cljs.core.seq(seq__17875_17884);
if(temp__4126__auto___17894){
var seq__17875_17895__$1 = temp__4126__auto___17894;
if(cljs.core.chunked_seq_QMARK_(seq__17875_17895__$1)){
var c__4369__auto___17896 = cljs.core.chunk_first(seq__17875_17895__$1);
var G__17897 = cljs.core.chunk_rest(seq__17875_17895__$1);
var G__17898 = c__4369__auto___17896;
var G__17899 = cljs.core.count(c__4369__auto___17896);
var G__17900 = (0);
seq__17875_17884 = G__17897;
chunk__17876_17885 = G__17898;
count__17877_17886 = G__17899;
i__17878_17887 = G__17900;
continue;
} else {
var i_17901 = cljs.core.first(seq__17875_17895__$1);
var G__17881_17902 = (function (){var G__17882 = i_17901;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__17882) : ith_item__$1.call(null,G__17882));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17881_17902) : f__$1.call(null,G__17881_17902));

var G__17903 = cljs.core.next(seq__17875_17895__$1);
var G__17904 = null;
var G__17905 = (0);
var G__17906 = (0);
seq__17875_17884 = G__17903;
chunk__17876_17885 = G__17904;
count__17877_17886 = G__17905;
i__17878_17887 = G__17906;
continue;
}
} else {
}
}
break;
}

var G__17883 = cur_count__$1;
return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(G__17883) : reset_pool_size_BANG_.call(null,G__17883));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
