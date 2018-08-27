// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33938 = arguments.length;
switch (G__33938) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33939 = (function (f,blockable,meta33940){
this.f = f;
this.blockable = blockable;
this.meta33940 = meta33940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33941,meta33940__$1){
var self__ = this;
var _33941__$1 = this;
return (new cljs.core.async.t_cljs$core$async33939(self__.f,self__.blockable,meta33940__$1));
});

cljs.core.async.t_cljs$core$async33939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33941){
var self__ = this;
var _33941__$1 = this;
return self__.meta33940;
});

cljs.core.async.t_cljs$core$async33939.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33939.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33939.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33939.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33940","meta33940",-186875409,null)], null);
});

cljs.core.async.t_cljs$core$async33939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33939";

cljs.core.async.t_cljs$core$async33939.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async33939");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33939.
 */
cljs.core.async.__GT_t_cljs$core$async33939 = (function cljs$core$async$__GT_t_cljs$core$async33939(f__$1,blockable__$1,meta33940){
return (new cljs.core.async.t_cljs$core$async33939(f__$1,blockable__$1,meta33940));
});

}

return (new cljs.core.async.t_cljs$core$async33939(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33945 = arguments.length;
switch (G__33945) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33948 = arguments.length;
switch (G__33948) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33951 = arguments.length;
switch (G__33951) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33953 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33953);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33953,ret){
return (function (){
return fn1.call(null,val_33953);
});})(val_33953,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33955 = arguments.length;
switch (G__33955) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___33957 = n;
var x_33958 = (0);
while(true){
if((x_33958 < n__4408__auto___33957)){
(a[x_33958] = (0));

var G__33959 = (x_33958 + (1));
x_33958 = G__33959;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33960 = (i + (1));
i = G__33960;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33961 = (function (flag,meta33962){
this.flag = flag;
this.meta33962 = meta33962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33963,meta33962__$1){
var self__ = this;
var _33963__$1 = this;
return (new cljs.core.async.t_cljs$core$async33961(self__.flag,meta33962__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33963){
var self__ = this;
var _33963__$1 = this;
return self__.meta33962;
});})(flag))
;

cljs.core.async.t_cljs$core$async33961.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33961.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33962","meta33962",-806128813,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33961";

cljs.core.async.t_cljs$core$async33961.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async33961");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33961.
 */
cljs.core.async.__GT_t_cljs$core$async33961 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33961(flag__$1,meta33962){
return (new cljs.core.async.t_cljs$core$async33961(flag__$1,meta33962));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33961(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33964 = (function (flag,cb,meta33965){
this.flag = flag;
this.cb = cb;
this.meta33965 = meta33965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33966,meta33965__$1){
var self__ = this;
var _33966__$1 = this;
return (new cljs.core.async.t_cljs$core$async33964(self__.flag,self__.cb,meta33965__$1));
});

cljs.core.async.t_cljs$core$async33964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33966){
var self__ = this;
var _33966__$1 = this;
return self__.meta33965;
});

cljs.core.async.t_cljs$core$async33964.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33964.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33964.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33964.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33965","meta33965",1269557230,null)], null);
});

cljs.core.async.t_cljs$core$async33964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33964";

cljs.core.async.t_cljs$core$async33964.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async33964");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33964.
 */
cljs.core.async.__GT_t_cljs$core$async33964 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33964(flag__$1,cb__$1,meta33965){
return (new cljs.core.async.t_cljs$core$async33964(flag__$1,cb__$1,meta33965));
});

}

return (new cljs.core.async.t_cljs$core$async33964(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33967_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33967_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33968_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33968_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33969 = (i + (1));
i = G__33969;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33975 = arguments.length;
var i__4532__auto___33976 = (0);
while(true){
if((i__4532__auto___33976 < len__4531__auto___33975)){
args__4534__auto__.push((arguments[i__4532__auto___33976]));

var G__33977 = (i__4532__auto___33976 + (1));
i__4532__auto___33976 = G__33977;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33972){
var map__33973 = p__33972;
var map__33973__$1 = ((((!((map__33973 == null)))?(((((map__33973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33973):map__33973);
var opts = map__33973__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33970){
var G__33971 = cljs.core.first.call(null,seq33970);
var seq33970__$1 = cljs.core.next.call(null,seq33970);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33971,seq33970__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33979 = arguments.length;
switch (G__33979) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33878__auto___34025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___34025){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___34025){
return (function (state_34003){
var state_val_34004 = (state_34003[(1)]);
if((state_val_34004 === (7))){
var inst_33999 = (state_34003[(2)]);
var state_34003__$1 = state_34003;
var statearr_34005_34026 = state_34003__$1;
(statearr_34005_34026[(2)] = inst_33999);

(statearr_34005_34026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34004 === (1))){
var state_34003__$1 = state_34003;
var statearr_34006_34027 = state_34003__$1;
(statearr_34006_34027[(2)] = null);

(statearr_34006_34027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34004 === (4))){
var inst_33982 = (state_34003[(7)]);
var inst_33982__$1 = (state_34003[(2)]);
var inst_33983 = (inst_33982__$1 == null);
var state_34003__$1 = (function (){var statearr_34007 = state_34003;
(statearr_34007[(7)] = inst_33982__$1);

return statearr_34007;
})();
if(cljs.core.truth_(inst_33983)){
var statearr_34008_34028 = state_34003__$1;
(statearr_34008_34028[(1)] = (5));

} else {
var statearr_34009_34029 = state_34003__$1;
(statearr_34009_34029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34004 === (13))){
var state_34003__$1 = state_34003;
var statearr_34010_34030 = state_34003__$1;
(statearr_34010_34030[(2)] = null);

(statearr_34010_34030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34004 === (6))){
var inst_33982 = (state_34003[(7)]);
var state_34003__$1 = state_34003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34003__$1,(11),to,inst_33982);
} else {
if((state_val_34004 === (3))){
var inst_34001 = (state_34003[(2)]);
var state_34003__$1 = state_34003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34003__$1,inst_34001);
} else {
if((state_val_34004 === (12))){
var state_34003__$1 = state_34003;
var statearr_34011_34031 = state_34003__$1;
(statearr_34011_34031[(2)] = null);

(statearr_34011_34031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34004 === (2))){
var state_34003__$1 = state_34003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34003__$1,(4),from);
} else {
if((state_val_34004 === (11))){
var inst_33992 = (state_34003[(2)]);
var state_34003__$1 = state_34003;
if(cljs.core.truth_(inst_33992)){
var statearr_34012_34032 = state_34003__$1;
(statearr_34012_34032[(1)] = (12));

} else {
var statearr_34013_34033 = state_34003__$1;
(statearr_34013_34033[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34004 === (9))){
var state_34003__$1 = state_34003;
var statearr_34014_34034 = state_34003__$1;
(statearr_34014_34034[(2)] = null);

(statearr_34014_34034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34004 === (5))){
var state_34003__$1 = state_34003;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34015_34035 = state_34003__$1;
(statearr_34015_34035[(1)] = (8));

} else {
var statearr_34016_34036 = state_34003__$1;
(statearr_34016_34036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34004 === (14))){
var inst_33997 = (state_34003[(2)]);
var state_34003__$1 = state_34003;
var statearr_34017_34037 = state_34003__$1;
(statearr_34017_34037[(2)] = inst_33997);

(statearr_34017_34037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34004 === (10))){
var inst_33989 = (state_34003[(2)]);
var state_34003__$1 = state_34003;
var statearr_34018_34038 = state_34003__$1;
(statearr_34018_34038[(2)] = inst_33989);

(statearr_34018_34038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34004 === (8))){
var inst_33986 = cljs.core.async.close_BANG_.call(null,to);
var state_34003__$1 = state_34003;
var statearr_34019_34039 = state_34003__$1;
(statearr_34019_34039[(2)] = inst_33986);

(statearr_34019_34039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___34025))
;
return ((function (switch__33787__auto__,c__33878__auto___34025){
return (function() {
var cljs$core$async$state_machine__33788__auto__ = null;
var cljs$core$async$state_machine__33788__auto____0 = (function (){
var statearr_34020 = [null,null,null,null,null,null,null,null];
(statearr_34020[(0)] = cljs$core$async$state_machine__33788__auto__);

(statearr_34020[(1)] = (1));

return statearr_34020;
});
var cljs$core$async$state_machine__33788__auto____1 = (function (state_34003){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_34003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e34021){if((e34021 instanceof Object)){
var ex__33791__auto__ = e34021;
var statearr_34022_34040 = state_34003;
(statearr_34022_34040[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34041 = state_34003;
state_34003 = G__34041;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$state_machine__33788__auto__ = function(state_34003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33788__auto____1.call(this,state_34003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33788__auto____0;
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33788__auto____1;
return cljs$core$async$state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___34025))
})();
var state__33880__auto__ = (function (){var statearr_34023 = f__33879__auto__.call(null);
(statearr_34023[(6)] = c__33878__auto___34025);

return statearr_34023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___34025))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34042){
var vec__34043 = p__34042;
var v = cljs.core.nth.call(null,vec__34043,(0),null);
var p = cljs.core.nth.call(null,vec__34043,(1),null);
var job = vec__34043;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33878__auto___34214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___34214,res,vec__34043,v,p,job,jobs,results){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___34214,res,vec__34043,v,p,job,jobs,results){
return (function (state_34050){
var state_val_34051 = (state_34050[(1)]);
if((state_val_34051 === (1))){
var state_34050__$1 = state_34050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34050__$1,(2),res,v);
} else {
if((state_val_34051 === (2))){
var inst_34047 = (state_34050[(2)]);
var inst_34048 = cljs.core.async.close_BANG_.call(null,res);
var state_34050__$1 = (function (){var statearr_34052 = state_34050;
(statearr_34052[(7)] = inst_34047);

return statearr_34052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34050__$1,inst_34048);
} else {
return null;
}
}
});})(c__33878__auto___34214,res,vec__34043,v,p,job,jobs,results))
;
return ((function (switch__33787__auto__,c__33878__auto___34214,res,vec__34043,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0 = (function (){
var statearr_34053 = [null,null,null,null,null,null,null,null];
(statearr_34053[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__);

(statearr_34053[(1)] = (1));

return statearr_34053;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1 = (function (state_34050){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_34050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e34054){if((e34054 instanceof Object)){
var ex__33791__auto__ = e34054;
var statearr_34055_34215 = state_34050;
(statearr_34055_34215[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34216 = state_34050;
state_34050 = G__34216;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__ = function(state_34050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1.call(this,state_34050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___34214,res,vec__34043,v,p,job,jobs,results))
})();
var state__33880__auto__ = (function (){var statearr_34056 = f__33879__auto__.call(null);
(statearr_34056[(6)] = c__33878__auto___34214);

return statearr_34056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___34214,res,vec__34043,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34057){
var vec__34058 = p__34057;
var v = cljs.core.nth.call(null,vec__34058,(0),null);
var p = cljs.core.nth.call(null,vec__34058,(1),null);
var job = vec__34058;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___34217 = n;
var __34218 = (0);
while(true){
if((__34218 < n__4408__auto___34217)){
var G__34061_34219 = type;
var G__34061_34220__$1 = (((G__34061_34219 instanceof cljs.core.Keyword))?G__34061_34219.fqn:null);
switch (G__34061_34220__$1) {
case "compute":
var c__33878__auto___34222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34218,c__33878__auto___34222,G__34061_34219,G__34061_34220__$1,n__4408__auto___34217,jobs,results,process,async){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (__34218,c__33878__auto___34222,G__34061_34219,G__34061_34220__$1,n__4408__auto___34217,jobs,results,process,async){
return (function (state_34074){
var state_val_34075 = (state_34074[(1)]);
if((state_val_34075 === (1))){
var state_34074__$1 = state_34074;
var statearr_34076_34223 = state_34074__$1;
(statearr_34076_34223[(2)] = null);

(statearr_34076_34223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (2))){
var state_34074__$1 = state_34074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34074__$1,(4),jobs);
} else {
if((state_val_34075 === (3))){
var inst_34072 = (state_34074[(2)]);
var state_34074__$1 = state_34074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34074__$1,inst_34072);
} else {
if((state_val_34075 === (4))){
var inst_34064 = (state_34074[(2)]);
var inst_34065 = process.call(null,inst_34064);
var state_34074__$1 = state_34074;
if(cljs.core.truth_(inst_34065)){
var statearr_34077_34224 = state_34074__$1;
(statearr_34077_34224[(1)] = (5));

} else {
var statearr_34078_34225 = state_34074__$1;
(statearr_34078_34225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (5))){
var state_34074__$1 = state_34074;
var statearr_34079_34226 = state_34074__$1;
(statearr_34079_34226[(2)] = null);

(statearr_34079_34226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (6))){
var state_34074__$1 = state_34074;
var statearr_34080_34227 = state_34074__$1;
(statearr_34080_34227[(2)] = null);

(statearr_34080_34227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (7))){
var inst_34070 = (state_34074[(2)]);
var state_34074__$1 = state_34074;
var statearr_34081_34228 = state_34074__$1;
(statearr_34081_34228[(2)] = inst_34070);

(statearr_34081_34228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34218,c__33878__auto___34222,G__34061_34219,G__34061_34220__$1,n__4408__auto___34217,jobs,results,process,async))
;
return ((function (__34218,switch__33787__auto__,c__33878__auto___34222,G__34061_34219,G__34061_34220__$1,n__4408__auto___34217,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0 = (function (){
var statearr_34082 = [null,null,null,null,null,null,null];
(statearr_34082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__);

(statearr_34082[(1)] = (1));

return statearr_34082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1 = (function (state_34074){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_34074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e34083){if((e34083 instanceof Object)){
var ex__33791__auto__ = e34083;
var statearr_34084_34229 = state_34074;
(statearr_34084_34229[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34230 = state_34074;
state_34074 = G__34230;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__ = function(state_34074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1.call(this,state_34074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__;
})()
;})(__34218,switch__33787__auto__,c__33878__auto___34222,G__34061_34219,G__34061_34220__$1,n__4408__auto___34217,jobs,results,process,async))
})();
var state__33880__auto__ = (function (){var statearr_34085 = f__33879__auto__.call(null);
(statearr_34085[(6)] = c__33878__auto___34222);

return statearr_34085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(__34218,c__33878__auto___34222,G__34061_34219,G__34061_34220__$1,n__4408__auto___34217,jobs,results,process,async))
);


break;
case "async":
var c__33878__auto___34231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34218,c__33878__auto___34231,G__34061_34219,G__34061_34220__$1,n__4408__auto___34217,jobs,results,process,async){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (__34218,c__33878__auto___34231,G__34061_34219,G__34061_34220__$1,n__4408__auto___34217,jobs,results,process,async){
return (function (state_34098){
var state_val_34099 = (state_34098[(1)]);
if((state_val_34099 === (1))){
var state_34098__$1 = state_34098;
var statearr_34100_34232 = state_34098__$1;
(statearr_34100_34232[(2)] = null);

(statearr_34100_34232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (2))){
var state_34098__$1 = state_34098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34098__$1,(4),jobs);
} else {
if((state_val_34099 === (3))){
var inst_34096 = (state_34098[(2)]);
var state_34098__$1 = state_34098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34098__$1,inst_34096);
} else {
if((state_val_34099 === (4))){
var inst_34088 = (state_34098[(2)]);
var inst_34089 = async.call(null,inst_34088);
var state_34098__$1 = state_34098;
if(cljs.core.truth_(inst_34089)){
var statearr_34101_34233 = state_34098__$1;
(statearr_34101_34233[(1)] = (5));

} else {
var statearr_34102_34234 = state_34098__$1;
(statearr_34102_34234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (5))){
var state_34098__$1 = state_34098;
var statearr_34103_34235 = state_34098__$1;
(statearr_34103_34235[(2)] = null);

(statearr_34103_34235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (6))){
var state_34098__$1 = state_34098;
var statearr_34104_34236 = state_34098__$1;
(statearr_34104_34236[(2)] = null);

(statearr_34104_34236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34099 === (7))){
var inst_34094 = (state_34098[(2)]);
var state_34098__$1 = state_34098;
var statearr_34105_34237 = state_34098__$1;
(statearr_34105_34237[(2)] = inst_34094);

(statearr_34105_34237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34218,c__33878__auto___34231,G__34061_34219,G__34061_34220__$1,n__4408__auto___34217,jobs,results,process,async))
;
return ((function (__34218,switch__33787__auto__,c__33878__auto___34231,G__34061_34219,G__34061_34220__$1,n__4408__auto___34217,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0 = (function (){
var statearr_34106 = [null,null,null,null,null,null,null];
(statearr_34106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__);

(statearr_34106[(1)] = (1));

return statearr_34106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1 = (function (state_34098){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_34098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e34107){if((e34107 instanceof Object)){
var ex__33791__auto__ = e34107;
var statearr_34108_34238 = state_34098;
(statearr_34108_34238[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34239 = state_34098;
state_34098 = G__34239;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__ = function(state_34098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1.call(this,state_34098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__;
})()
;})(__34218,switch__33787__auto__,c__33878__auto___34231,G__34061_34219,G__34061_34220__$1,n__4408__auto___34217,jobs,results,process,async))
})();
var state__33880__auto__ = (function (){var statearr_34109 = f__33879__auto__.call(null);
(statearr_34109[(6)] = c__33878__auto___34231);

return statearr_34109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(__34218,c__33878__auto___34231,G__34061_34219,G__34061_34220__$1,n__4408__auto___34217,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34061_34220__$1)].join('')));

}

var G__34240 = (__34218 + (1));
__34218 = G__34240;
continue;
} else {
}
break;
}

var c__33878__auto___34241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___34241,jobs,results,process,async){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___34241,jobs,results,process,async){
return (function (state_34131){
var state_val_34132 = (state_34131[(1)]);
if((state_val_34132 === (1))){
var state_34131__$1 = state_34131;
var statearr_34133_34242 = state_34131__$1;
(statearr_34133_34242[(2)] = null);

(statearr_34133_34242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (2))){
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34131__$1,(4),from);
} else {
if((state_val_34132 === (3))){
var inst_34129 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34131__$1,inst_34129);
} else {
if((state_val_34132 === (4))){
var inst_34112 = (state_34131[(7)]);
var inst_34112__$1 = (state_34131[(2)]);
var inst_34113 = (inst_34112__$1 == null);
var state_34131__$1 = (function (){var statearr_34134 = state_34131;
(statearr_34134[(7)] = inst_34112__$1);

return statearr_34134;
})();
if(cljs.core.truth_(inst_34113)){
var statearr_34135_34243 = state_34131__$1;
(statearr_34135_34243[(1)] = (5));

} else {
var statearr_34136_34244 = state_34131__$1;
(statearr_34136_34244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (5))){
var inst_34115 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34131__$1 = state_34131;
var statearr_34137_34245 = state_34131__$1;
(statearr_34137_34245[(2)] = inst_34115);

(statearr_34137_34245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (6))){
var inst_34112 = (state_34131[(7)]);
var inst_34117 = (state_34131[(8)]);
var inst_34117__$1 = cljs.core.async.chan.call(null,(1));
var inst_34118 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34119 = [inst_34112,inst_34117__$1];
var inst_34120 = (new cljs.core.PersistentVector(null,2,(5),inst_34118,inst_34119,null));
var state_34131__$1 = (function (){var statearr_34138 = state_34131;
(statearr_34138[(8)] = inst_34117__$1);

return statearr_34138;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34131__$1,(8),jobs,inst_34120);
} else {
if((state_val_34132 === (7))){
var inst_34127 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34139_34246 = state_34131__$1;
(statearr_34139_34246[(2)] = inst_34127);

(statearr_34139_34246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (8))){
var inst_34117 = (state_34131[(8)]);
var inst_34122 = (state_34131[(2)]);
var state_34131__$1 = (function (){var statearr_34140 = state_34131;
(statearr_34140[(9)] = inst_34122);

return statearr_34140;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34131__$1,(9),results,inst_34117);
} else {
if((state_val_34132 === (9))){
var inst_34124 = (state_34131[(2)]);
var state_34131__$1 = (function (){var statearr_34141 = state_34131;
(statearr_34141[(10)] = inst_34124);

return statearr_34141;
})();
var statearr_34142_34247 = state_34131__$1;
(statearr_34142_34247[(2)] = null);

(statearr_34142_34247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___34241,jobs,results,process,async))
;
return ((function (switch__33787__auto__,c__33878__auto___34241,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0 = (function (){
var statearr_34143 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__);

(statearr_34143[(1)] = (1));

return statearr_34143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1 = (function (state_34131){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_34131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e34144){if((e34144 instanceof Object)){
var ex__33791__auto__ = e34144;
var statearr_34145_34248 = state_34131;
(statearr_34145_34248[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34249 = state_34131;
state_34131 = G__34249;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__ = function(state_34131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1.call(this,state_34131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___34241,jobs,results,process,async))
})();
var state__33880__auto__ = (function (){var statearr_34146 = f__33879__auto__.call(null);
(statearr_34146[(6)] = c__33878__auto___34241);

return statearr_34146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___34241,jobs,results,process,async))
);


var c__33878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto__,jobs,results,process,async){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto__,jobs,results,process,async){
return (function (state_34184){
var state_val_34185 = (state_34184[(1)]);
if((state_val_34185 === (7))){
var inst_34180 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
var statearr_34186_34250 = state_34184__$1;
(statearr_34186_34250[(2)] = inst_34180);

(statearr_34186_34250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (20))){
var state_34184__$1 = state_34184;
var statearr_34187_34251 = state_34184__$1;
(statearr_34187_34251[(2)] = null);

(statearr_34187_34251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (1))){
var state_34184__$1 = state_34184;
var statearr_34188_34252 = state_34184__$1;
(statearr_34188_34252[(2)] = null);

(statearr_34188_34252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (4))){
var inst_34149 = (state_34184[(7)]);
var inst_34149__$1 = (state_34184[(2)]);
var inst_34150 = (inst_34149__$1 == null);
var state_34184__$1 = (function (){var statearr_34189 = state_34184;
(statearr_34189[(7)] = inst_34149__$1);

return statearr_34189;
})();
if(cljs.core.truth_(inst_34150)){
var statearr_34190_34253 = state_34184__$1;
(statearr_34190_34253[(1)] = (5));

} else {
var statearr_34191_34254 = state_34184__$1;
(statearr_34191_34254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (15))){
var inst_34162 = (state_34184[(8)]);
var state_34184__$1 = state_34184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34184__$1,(18),to,inst_34162);
} else {
if((state_val_34185 === (21))){
var inst_34175 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
var statearr_34192_34255 = state_34184__$1;
(statearr_34192_34255[(2)] = inst_34175);

(statearr_34192_34255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (13))){
var inst_34177 = (state_34184[(2)]);
var state_34184__$1 = (function (){var statearr_34193 = state_34184;
(statearr_34193[(9)] = inst_34177);

return statearr_34193;
})();
var statearr_34194_34256 = state_34184__$1;
(statearr_34194_34256[(2)] = null);

(statearr_34194_34256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (6))){
var inst_34149 = (state_34184[(7)]);
var state_34184__$1 = state_34184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34184__$1,(11),inst_34149);
} else {
if((state_val_34185 === (17))){
var inst_34170 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
if(cljs.core.truth_(inst_34170)){
var statearr_34195_34257 = state_34184__$1;
(statearr_34195_34257[(1)] = (19));

} else {
var statearr_34196_34258 = state_34184__$1;
(statearr_34196_34258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (3))){
var inst_34182 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34184__$1,inst_34182);
} else {
if((state_val_34185 === (12))){
var inst_34159 = (state_34184[(10)]);
var state_34184__$1 = state_34184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34184__$1,(14),inst_34159);
} else {
if((state_val_34185 === (2))){
var state_34184__$1 = state_34184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34184__$1,(4),results);
} else {
if((state_val_34185 === (19))){
var state_34184__$1 = state_34184;
var statearr_34197_34259 = state_34184__$1;
(statearr_34197_34259[(2)] = null);

(statearr_34197_34259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (11))){
var inst_34159 = (state_34184[(2)]);
var state_34184__$1 = (function (){var statearr_34198 = state_34184;
(statearr_34198[(10)] = inst_34159);

return statearr_34198;
})();
var statearr_34199_34260 = state_34184__$1;
(statearr_34199_34260[(2)] = null);

(statearr_34199_34260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (9))){
var state_34184__$1 = state_34184;
var statearr_34200_34261 = state_34184__$1;
(statearr_34200_34261[(2)] = null);

(statearr_34200_34261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (5))){
var state_34184__$1 = state_34184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34201_34262 = state_34184__$1;
(statearr_34201_34262[(1)] = (8));

} else {
var statearr_34202_34263 = state_34184__$1;
(statearr_34202_34263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (14))){
var inst_34164 = (state_34184[(11)]);
var inst_34162 = (state_34184[(8)]);
var inst_34162__$1 = (state_34184[(2)]);
var inst_34163 = (inst_34162__$1 == null);
var inst_34164__$1 = cljs.core.not.call(null,inst_34163);
var state_34184__$1 = (function (){var statearr_34203 = state_34184;
(statearr_34203[(11)] = inst_34164__$1);

(statearr_34203[(8)] = inst_34162__$1);

return statearr_34203;
})();
if(inst_34164__$1){
var statearr_34204_34264 = state_34184__$1;
(statearr_34204_34264[(1)] = (15));

} else {
var statearr_34205_34265 = state_34184__$1;
(statearr_34205_34265[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (16))){
var inst_34164 = (state_34184[(11)]);
var state_34184__$1 = state_34184;
var statearr_34206_34266 = state_34184__$1;
(statearr_34206_34266[(2)] = inst_34164);

(statearr_34206_34266[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (10))){
var inst_34156 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
var statearr_34207_34267 = state_34184__$1;
(statearr_34207_34267[(2)] = inst_34156);

(statearr_34207_34267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (18))){
var inst_34167 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
var statearr_34208_34268 = state_34184__$1;
(statearr_34208_34268[(2)] = inst_34167);

(statearr_34208_34268[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (8))){
var inst_34153 = cljs.core.async.close_BANG_.call(null,to);
var state_34184__$1 = state_34184;
var statearr_34209_34269 = state_34184__$1;
(statearr_34209_34269[(2)] = inst_34153);

(statearr_34209_34269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto__,jobs,results,process,async))
;
return ((function (switch__33787__auto__,c__33878__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0 = (function (){
var statearr_34210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__);

(statearr_34210[(1)] = (1));

return statearr_34210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1 = (function (state_34184){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_34184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e34211){if((e34211 instanceof Object)){
var ex__33791__auto__ = e34211;
var statearr_34212_34270 = state_34184;
(statearr_34212_34270[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34271 = state_34184;
state_34184 = G__34271;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__ = function(state_34184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1.call(this,state_34184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33788__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto__,jobs,results,process,async))
})();
var state__33880__auto__ = (function (){var statearr_34213 = f__33879__auto__.call(null);
(statearr_34213[(6)] = c__33878__auto__);

return statearr_34213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto__,jobs,results,process,async))
);

return c__33878__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34273 = arguments.length;
switch (G__34273) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34276 = arguments.length;
switch (G__34276) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34279 = arguments.length;
switch (G__34279) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33878__auto___34328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___34328,tc,fc){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___34328,tc,fc){
return (function (state_34305){
var state_val_34306 = (state_34305[(1)]);
if((state_val_34306 === (7))){
var inst_34301 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34307_34329 = state_34305__$1;
(statearr_34307_34329[(2)] = inst_34301);

(statearr_34307_34329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (1))){
var state_34305__$1 = state_34305;
var statearr_34308_34330 = state_34305__$1;
(statearr_34308_34330[(2)] = null);

(statearr_34308_34330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (4))){
var inst_34282 = (state_34305[(7)]);
var inst_34282__$1 = (state_34305[(2)]);
var inst_34283 = (inst_34282__$1 == null);
var state_34305__$1 = (function (){var statearr_34309 = state_34305;
(statearr_34309[(7)] = inst_34282__$1);

return statearr_34309;
})();
if(cljs.core.truth_(inst_34283)){
var statearr_34310_34331 = state_34305__$1;
(statearr_34310_34331[(1)] = (5));

} else {
var statearr_34311_34332 = state_34305__$1;
(statearr_34311_34332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (13))){
var state_34305__$1 = state_34305;
var statearr_34312_34333 = state_34305__$1;
(statearr_34312_34333[(2)] = null);

(statearr_34312_34333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (6))){
var inst_34282 = (state_34305[(7)]);
var inst_34288 = p.call(null,inst_34282);
var state_34305__$1 = state_34305;
if(cljs.core.truth_(inst_34288)){
var statearr_34313_34334 = state_34305__$1;
(statearr_34313_34334[(1)] = (9));

} else {
var statearr_34314_34335 = state_34305__$1;
(statearr_34314_34335[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (3))){
var inst_34303 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34305__$1,inst_34303);
} else {
if((state_val_34306 === (12))){
var state_34305__$1 = state_34305;
var statearr_34315_34336 = state_34305__$1;
(statearr_34315_34336[(2)] = null);

(statearr_34315_34336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (2))){
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34305__$1,(4),ch);
} else {
if((state_val_34306 === (11))){
var inst_34282 = (state_34305[(7)]);
var inst_34292 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34305__$1,(8),inst_34292,inst_34282);
} else {
if((state_val_34306 === (9))){
var state_34305__$1 = state_34305;
var statearr_34316_34337 = state_34305__$1;
(statearr_34316_34337[(2)] = tc);

(statearr_34316_34337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (5))){
var inst_34285 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34286 = cljs.core.async.close_BANG_.call(null,fc);
var state_34305__$1 = (function (){var statearr_34317 = state_34305;
(statearr_34317[(8)] = inst_34285);

return statearr_34317;
})();
var statearr_34318_34338 = state_34305__$1;
(statearr_34318_34338[(2)] = inst_34286);

(statearr_34318_34338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (14))){
var inst_34299 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34319_34339 = state_34305__$1;
(statearr_34319_34339[(2)] = inst_34299);

(statearr_34319_34339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (10))){
var state_34305__$1 = state_34305;
var statearr_34320_34340 = state_34305__$1;
(statearr_34320_34340[(2)] = fc);

(statearr_34320_34340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (8))){
var inst_34294 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
if(cljs.core.truth_(inst_34294)){
var statearr_34321_34341 = state_34305__$1;
(statearr_34321_34341[(1)] = (12));

} else {
var statearr_34322_34342 = state_34305__$1;
(statearr_34322_34342[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___34328,tc,fc))
;
return ((function (switch__33787__auto__,c__33878__auto___34328,tc,fc){
return (function() {
var cljs$core$async$state_machine__33788__auto__ = null;
var cljs$core$async$state_machine__33788__auto____0 = (function (){
var statearr_34323 = [null,null,null,null,null,null,null,null,null];
(statearr_34323[(0)] = cljs$core$async$state_machine__33788__auto__);

(statearr_34323[(1)] = (1));

return statearr_34323;
});
var cljs$core$async$state_machine__33788__auto____1 = (function (state_34305){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_34305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e34324){if((e34324 instanceof Object)){
var ex__33791__auto__ = e34324;
var statearr_34325_34343 = state_34305;
(statearr_34325_34343[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34344 = state_34305;
state_34305 = G__34344;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$state_machine__33788__auto__ = function(state_34305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33788__auto____1.call(this,state_34305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33788__auto____0;
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33788__auto____1;
return cljs$core$async$state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___34328,tc,fc))
})();
var state__33880__auto__ = (function (){var statearr_34326 = f__33879__auto__.call(null);
(statearr_34326[(6)] = c__33878__auto___34328);

return statearr_34326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___34328,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto__){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto__){
return (function (state_34365){
var state_val_34366 = (state_34365[(1)]);
if((state_val_34366 === (7))){
var inst_34361 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34367_34385 = state_34365__$1;
(statearr_34367_34385[(2)] = inst_34361);

(statearr_34367_34385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (1))){
var inst_34345 = init;
var state_34365__$1 = (function (){var statearr_34368 = state_34365;
(statearr_34368[(7)] = inst_34345);

return statearr_34368;
})();
var statearr_34369_34386 = state_34365__$1;
(statearr_34369_34386[(2)] = null);

(statearr_34369_34386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (4))){
var inst_34348 = (state_34365[(8)]);
var inst_34348__$1 = (state_34365[(2)]);
var inst_34349 = (inst_34348__$1 == null);
var state_34365__$1 = (function (){var statearr_34370 = state_34365;
(statearr_34370[(8)] = inst_34348__$1);

return statearr_34370;
})();
if(cljs.core.truth_(inst_34349)){
var statearr_34371_34387 = state_34365__$1;
(statearr_34371_34387[(1)] = (5));

} else {
var statearr_34372_34388 = state_34365__$1;
(statearr_34372_34388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (6))){
var inst_34345 = (state_34365[(7)]);
var inst_34352 = (state_34365[(9)]);
var inst_34348 = (state_34365[(8)]);
var inst_34352__$1 = f.call(null,inst_34345,inst_34348);
var inst_34353 = cljs.core.reduced_QMARK_.call(null,inst_34352__$1);
var state_34365__$1 = (function (){var statearr_34373 = state_34365;
(statearr_34373[(9)] = inst_34352__$1);

return statearr_34373;
})();
if(inst_34353){
var statearr_34374_34389 = state_34365__$1;
(statearr_34374_34389[(1)] = (8));

} else {
var statearr_34375_34390 = state_34365__$1;
(statearr_34375_34390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (3))){
var inst_34363 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34365__$1,inst_34363);
} else {
if((state_val_34366 === (2))){
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34365__$1,(4),ch);
} else {
if((state_val_34366 === (9))){
var inst_34352 = (state_34365[(9)]);
var inst_34345 = inst_34352;
var state_34365__$1 = (function (){var statearr_34376 = state_34365;
(statearr_34376[(7)] = inst_34345);

return statearr_34376;
})();
var statearr_34377_34391 = state_34365__$1;
(statearr_34377_34391[(2)] = null);

(statearr_34377_34391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (5))){
var inst_34345 = (state_34365[(7)]);
var state_34365__$1 = state_34365;
var statearr_34378_34392 = state_34365__$1;
(statearr_34378_34392[(2)] = inst_34345);

(statearr_34378_34392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (10))){
var inst_34359 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34379_34393 = state_34365__$1;
(statearr_34379_34393[(2)] = inst_34359);

(statearr_34379_34393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (8))){
var inst_34352 = (state_34365[(9)]);
var inst_34355 = cljs.core.deref.call(null,inst_34352);
var state_34365__$1 = state_34365;
var statearr_34380_34394 = state_34365__$1;
(statearr_34380_34394[(2)] = inst_34355);

(statearr_34380_34394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto__))
;
return ((function (switch__33787__auto__,c__33878__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33788__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33788__auto____0 = (function (){
var statearr_34381 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34381[(0)] = cljs$core$async$reduce_$_state_machine__33788__auto__);

(statearr_34381[(1)] = (1));

return statearr_34381;
});
var cljs$core$async$reduce_$_state_machine__33788__auto____1 = (function (state_34365){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_34365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e34382){if((e34382 instanceof Object)){
var ex__33791__auto__ = e34382;
var statearr_34383_34395 = state_34365;
(statearr_34383_34395[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34396 = state_34365;
state_34365 = G__34396;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33788__auto__ = function(state_34365){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33788__auto____1.call(this,state_34365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33788__auto____0;
cljs$core$async$reduce_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33788__auto____1;
return cljs$core$async$reduce_$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto__))
})();
var state__33880__auto__ = (function (){var statearr_34384 = f__33879__auto__.call(null);
(statearr_34384[(6)] = c__33878__auto__);

return statearr_34384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto__))
);

return c__33878__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto__,f__$1){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto__,f__$1){
return (function (state_34402){
var state_val_34403 = (state_34402[(1)]);
if((state_val_34403 === (1))){
var inst_34397 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34402__$1 = state_34402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34402__$1,(2),inst_34397);
} else {
if((state_val_34403 === (2))){
var inst_34399 = (state_34402[(2)]);
var inst_34400 = f__$1.call(null,inst_34399);
var state_34402__$1 = state_34402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34402__$1,inst_34400);
} else {
return null;
}
}
});})(c__33878__auto__,f__$1))
;
return ((function (switch__33787__auto__,c__33878__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33788__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33788__auto____0 = (function (){
var statearr_34404 = [null,null,null,null,null,null,null];
(statearr_34404[(0)] = cljs$core$async$transduce_$_state_machine__33788__auto__);

(statearr_34404[(1)] = (1));

return statearr_34404;
});
var cljs$core$async$transduce_$_state_machine__33788__auto____1 = (function (state_34402){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_34402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e34405){if((e34405 instanceof Object)){
var ex__33791__auto__ = e34405;
var statearr_34406_34408 = state_34402;
(statearr_34406_34408[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34409 = state_34402;
state_34402 = G__34409;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33788__auto__ = function(state_34402){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33788__auto____1.call(this,state_34402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33788__auto____0;
cljs$core$async$transduce_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33788__auto____1;
return cljs$core$async$transduce_$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto__,f__$1))
})();
var state__33880__auto__ = (function (){var statearr_34407 = f__33879__auto__.call(null);
(statearr_34407[(6)] = c__33878__auto__);

return statearr_34407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto__,f__$1))
);

return c__33878__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34411 = arguments.length;
switch (G__34411) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto__){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto__){
return (function (state_34436){
var state_val_34437 = (state_34436[(1)]);
if((state_val_34437 === (7))){
var inst_34418 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34438_34459 = state_34436__$1;
(statearr_34438_34459[(2)] = inst_34418);

(statearr_34438_34459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (1))){
var inst_34412 = cljs.core.seq.call(null,coll);
var inst_34413 = inst_34412;
var state_34436__$1 = (function (){var statearr_34439 = state_34436;
(statearr_34439[(7)] = inst_34413);

return statearr_34439;
})();
var statearr_34440_34460 = state_34436__$1;
(statearr_34440_34460[(2)] = null);

(statearr_34440_34460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (4))){
var inst_34413 = (state_34436[(7)]);
var inst_34416 = cljs.core.first.call(null,inst_34413);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34436__$1,(7),ch,inst_34416);
} else {
if((state_val_34437 === (13))){
var inst_34430 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34441_34461 = state_34436__$1;
(statearr_34441_34461[(2)] = inst_34430);

(statearr_34441_34461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (6))){
var inst_34421 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
if(cljs.core.truth_(inst_34421)){
var statearr_34442_34462 = state_34436__$1;
(statearr_34442_34462[(1)] = (8));

} else {
var statearr_34443_34463 = state_34436__$1;
(statearr_34443_34463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (3))){
var inst_34434 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34436__$1,inst_34434);
} else {
if((state_val_34437 === (12))){
var state_34436__$1 = state_34436;
var statearr_34444_34464 = state_34436__$1;
(statearr_34444_34464[(2)] = null);

(statearr_34444_34464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (2))){
var inst_34413 = (state_34436[(7)]);
var state_34436__$1 = state_34436;
if(cljs.core.truth_(inst_34413)){
var statearr_34445_34465 = state_34436__$1;
(statearr_34445_34465[(1)] = (4));

} else {
var statearr_34446_34466 = state_34436__$1;
(statearr_34446_34466[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (11))){
var inst_34427 = cljs.core.async.close_BANG_.call(null,ch);
var state_34436__$1 = state_34436;
var statearr_34447_34467 = state_34436__$1;
(statearr_34447_34467[(2)] = inst_34427);

(statearr_34447_34467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (9))){
var state_34436__$1 = state_34436;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34448_34468 = state_34436__$1;
(statearr_34448_34468[(1)] = (11));

} else {
var statearr_34449_34469 = state_34436__$1;
(statearr_34449_34469[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (5))){
var inst_34413 = (state_34436[(7)]);
var state_34436__$1 = state_34436;
var statearr_34450_34470 = state_34436__$1;
(statearr_34450_34470[(2)] = inst_34413);

(statearr_34450_34470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (10))){
var inst_34432 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34451_34471 = state_34436__$1;
(statearr_34451_34471[(2)] = inst_34432);

(statearr_34451_34471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (8))){
var inst_34413 = (state_34436[(7)]);
var inst_34423 = cljs.core.next.call(null,inst_34413);
var inst_34413__$1 = inst_34423;
var state_34436__$1 = (function (){var statearr_34452 = state_34436;
(statearr_34452[(7)] = inst_34413__$1);

return statearr_34452;
})();
var statearr_34453_34472 = state_34436__$1;
(statearr_34453_34472[(2)] = null);

(statearr_34453_34472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto__))
;
return ((function (switch__33787__auto__,c__33878__auto__){
return (function() {
var cljs$core$async$state_machine__33788__auto__ = null;
var cljs$core$async$state_machine__33788__auto____0 = (function (){
var statearr_34454 = [null,null,null,null,null,null,null,null];
(statearr_34454[(0)] = cljs$core$async$state_machine__33788__auto__);

(statearr_34454[(1)] = (1));

return statearr_34454;
});
var cljs$core$async$state_machine__33788__auto____1 = (function (state_34436){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_34436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e34455){if((e34455 instanceof Object)){
var ex__33791__auto__ = e34455;
var statearr_34456_34473 = state_34436;
(statearr_34456_34473[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34474 = state_34436;
state_34436 = G__34474;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$state_machine__33788__auto__ = function(state_34436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33788__auto____1.call(this,state_34436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33788__auto____0;
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33788__auto____1;
return cljs$core$async$state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto__))
})();
var state__33880__auto__ = (function (){var statearr_34457 = f__33879__auto__.call(null);
(statearr_34457[(6)] = c__33878__auto__);

return statearr_34457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto__))
);

return c__33878__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34475 = (function (ch,cs,meta34476){
this.ch = ch;
this.cs = cs;
this.meta34476 = meta34476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34477,meta34476__$1){
var self__ = this;
var _34477__$1 = this;
return (new cljs.core.async.t_cljs$core$async34475(self__.ch,self__.cs,meta34476__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34477){
var self__ = this;
var _34477__$1 = this;
return self__.meta34476;
});})(cs))
;

cljs.core.async.t_cljs$core$async34475.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34475.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34475.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34475.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34475.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34475.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34476","meta34476",-202959716,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34475";

cljs.core.async.t_cljs$core$async34475.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async34475");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34475.
 */
cljs.core.async.__GT_t_cljs$core$async34475 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34475(ch__$1,cs__$1,meta34476){
return (new cljs.core.async.t_cljs$core$async34475(ch__$1,cs__$1,meta34476));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34475(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33878__auto___34697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___34697,cs,m,dchan,dctr,done){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___34697,cs,m,dchan,dctr,done){
return (function (state_34612){
var state_val_34613 = (state_34612[(1)]);
if((state_val_34613 === (7))){
var inst_34608 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34614_34698 = state_34612__$1;
(statearr_34614_34698[(2)] = inst_34608);

(statearr_34614_34698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var inst_34511 = (state_34612[(7)]);
var inst_34523 = cljs.core.first.call(null,inst_34511);
var inst_34524 = cljs.core.nth.call(null,inst_34523,(0),null);
var inst_34525 = cljs.core.nth.call(null,inst_34523,(1),null);
var state_34612__$1 = (function (){var statearr_34615 = state_34612;
(statearr_34615[(8)] = inst_34524);

return statearr_34615;
})();
if(cljs.core.truth_(inst_34525)){
var statearr_34616_34699 = state_34612__$1;
(statearr_34616_34699[(1)] = (22));

} else {
var statearr_34617_34700 = state_34612__$1;
(statearr_34617_34700[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (27))){
var inst_34560 = (state_34612[(9)]);
var inst_34553 = (state_34612[(10)]);
var inst_34555 = (state_34612[(11)]);
var inst_34480 = (state_34612[(12)]);
var inst_34560__$1 = cljs.core._nth.call(null,inst_34553,inst_34555);
var inst_34561 = cljs.core.async.put_BANG_.call(null,inst_34560__$1,inst_34480,done);
var state_34612__$1 = (function (){var statearr_34618 = state_34612;
(statearr_34618[(9)] = inst_34560__$1);

return statearr_34618;
})();
if(cljs.core.truth_(inst_34561)){
var statearr_34619_34701 = state_34612__$1;
(statearr_34619_34701[(1)] = (30));

} else {
var statearr_34620_34702 = state_34612__$1;
(statearr_34620_34702[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34621_34703 = state_34612__$1;
(statearr_34621_34703[(2)] = null);

(statearr_34621_34703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (24))){
var inst_34511 = (state_34612[(7)]);
var inst_34530 = (state_34612[(2)]);
var inst_34531 = cljs.core.next.call(null,inst_34511);
var inst_34489 = inst_34531;
var inst_34490 = null;
var inst_34491 = (0);
var inst_34492 = (0);
var state_34612__$1 = (function (){var statearr_34622 = state_34612;
(statearr_34622[(13)] = inst_34490);

(statearr_34622[(14)] = inst_34491);

(statearr_34622[(15)] = inst_34489);

(statearr_34622[(16)] = inst_34492);

(statearr_34622[(17)] = inst_34530);

return statearr_34622;
})();
var statearr_34623_34704 = state_34612__$1;
(statearr_34623_34704[(2)] = null);

(statearr_34623_34704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (39))){
var state_34612__$1 = state_34612;
var statearr_34627_34705 = state_34612__$1;
(statearr_34627_34705[(2)] = null);

(statearr_34627_34705[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (4))){
var inst_34480 = (state_34612[(12)]);
var inst_34480__$1 = (state_34612[(2)]);
var inst_34481 = (inst_34480__$1 == null);
var state_34612__$1 = (function (){var statearr_34628 = state_34612;
(statearr_34628[(12)] = inst_34480__$1);

return statearr_34628;
})();
if(cljs.core.truth_(inst_34481)){
var statearr_34629_34706 = state_34612__$1;
(statearr_34629_34706[(1)] = (5));

} else {
var statearr_34630_34707 = state_34612__$1;
(statearr_34630_34707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (15))){
var inst_34490 = (state_34612[(13)]);
var inst_34491 = (state_34612[(14)]);
var inst_34489 = (state_34612[(15)]);
var inst_34492 = (state_34612[(16)]);
var inst_34507 = (state_34612[(2)]);
var inst_34508 = (inst_34492 + (1));
var tmp34624 = inst_34490;
var tmp34625 = inst_34491;
var tmp34626 = inst_34489;
var inst_34489__$1 = tmp34626;
var inst_34490__$1 = tmp34624;
var inst_34491__$1 = tmp34625;
var inst_34492__$1 = inst_34508;
var state_34612__$1 = (function (){var statearr_34631 = state_34612;
(statearr_34631[(18)] = inst_34507);

(statearr_34631[(13)] = inst_34490__$1);

(statearr_34631[(14)] = inst_34491__$1);

(statearr_34631[(15)] = inst_34489__$1);

(statearr_34631[(16)] = inst_34492__$1);

return statearr_34631;
})();
var statearr_34632_34708 = state_34612__$1;
(statearr_34632_34708[(2)] = null);

(statearr_34632_34708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (21))){
var inst_34534 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_34709 = state_34612__$1;
(statearr_34636_34709[(2)] = inst_34534);

(statearr_34636_34709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (31))){
var inst_34560 = (state_34612[(9)]);
var inst_34564 = done.call(null,null);
var inst_34565 = cljs.core.async.untap_STAR_.call(null,m,inst_34560);
var state_34612__$1 = (function (){var statearr_34637 = state_34612;
(statearr_34637[(19)] = inst_34564);

return statearr_34637;
})();
var statearr_34638_34710 = state_34612__$1;
(statearr_34638_34710[(2)] = inst_34565);

(statearr_34638_34710[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (32))){
var inst_34552 = (state_34612[(20)]);
var inst_34554 = (state_34612[(21)]);
var inst_34553 = (state_34612[(10)]);
var inst_34555 = (state_34612[(11)]);
var inst_34567 = (state_34612[(2)]);
var inst_34568 = (inst_34555 + (1));
var tmp34633 = inst_34552;
var tmp34634 = inst_34554;
var tmp34635 = inst_34553;
var inst_34552__$1 = tmp34633;
var inst_34553__$1 = tmp34635;
var inst_34554__$1 = tmp34634;
var inst_34555__$1 = inst_34568;
var state_34612__$1 = (function (){var statearr_34639 = state_34612;
(statearr_34639[(22)] = inst_34567);

(statearr_34639[(20)] = inst_34552__$1);

(statearr_34639[(21)] = inst_34554__$1);

(statearr_34639[(10)] = inst_34553__$1);

(statearr_34639[(11)] = inst_34555__$1);

return statearr_34639;
})();
var statearr_34640_34711 = state_34612__$1;
(statearr_34640_34711[(2)] = null);

(statearr_34640_34711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (40))){
var inst_34580 = (state_34612[(23)]);
var inst_34584 = done.call(null,null);
var inst_34585 = cljs.core.async.untap_STAR_.call(null,m,inst_34580);
var state_34612__$1 = (function (){var statearr_34641 = state_34612;
(statearr_34641[(24)] = inst_34584);

return statearr_34641;
})();
var statearr_34642_34712 = state_34612__$1;
(statearr_34642_34712[(2)] = inst_34585);

(statearr_34642_34712[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (33))){
var inst_34571 = (state_34612[(25)]);
var inst_34573 = cljs.core.chunked_seq_QMARK_.call(null,inst_34571);
var state_34612__$1 = state_34612;
if(inst_34573){
var statearr_34643_34713 = state_34612__$1;
(statearr_34643_34713[(1)] = (36));

} else {
var statearr_34644_34714 = state_34612__$1;
(statearr_34644_34714[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34501 = (state_34612[(26)]);
var inst_34504 = cljs.core.async.close_BANG_.call(null,inst_34501);
var state_34612__$1 = state_34612;
var statearr_34645_34715 = state_34612__$1;
(statearr_34645_34715[(2)] = inst_34504);

(statearr_34645_34715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (22))){
var inst_34524 = (state_34612[(8)]);
var inst_34527 = cljs.core.async.close_BANG_.call(null,inst_34524);
var state_34612__$1 = state_34612;
var statearr_34646_34716 = state_34612__$1;
(statearr_34646_34716[(2)] = inst_34527);

(statearr_34646_34716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (36))){
var inst_34571 = (state_34612[(25)]);
var inst_34575 = cljs.core.chunk_first.call(null,inst_34571);
var inst_34576 = cljs.core.chunk_rest.call(null,inst_34571);
var inst_34577 = cljs.core.count.call(null,inst_34575);
var inst_34552 = inst_34576;
var inst_34553 = inst_34575;
var inst_34554 = inst_34577;
var inst_34555 = (0);
var state_34612__$1 = (function (){var statearr_34647 = state_34612;
(statearr_34647[(20)] = inst_34552);

(statearr_34647[(21)] = inst_34554);

(statearr_34647[(10)] = inst_34553);

(statearr_34647[(11)] = inst_34555);

return statearr_34647;
})();
var statearr_34648_34717 = state_34612__$1;
(statearr_34648_34717[(2)] = null);

(statearr_34648_34717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (41))){
var inst_34571 = (state_34612[(25)]);
var inst_34587 = (state_34612[(2)]);
var inst_34588 = cljs.core.next.call(null,inst_34571);
var inst_34552 = inst_34588;
var inst_34553 = null;
var inst_34554 = (0);
var inst_34555 = (0);
var state_34612__$1 = (function (){var statearr_34649 = state_34612;
(statearr_34649[(20)] = inst_34552);

(statearr_34649[(21)] = inst_34554);

(statearr_34649[(10)] = inst_34553);

(statearr_34649[(11)] = inst_34555);

(statearr_34649[(27)] = inst_34587);

return statearr_34649;
})();
var statearr_34650_34718 = state_34612__$1;
(statearr_34650_34718[(2)] = null);

(statearr_34650_34718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (43))){
var state_34612__$1 = state_34612;
var statearr_34651_34719 = state_34612__$1;
(statearr_34651_34719[(2)] = null);

(statearr_34651_34719[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (29))){
var inst_34596 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34652_34720 = state_34612__$1;
(statearr_34652_34720[(2)] = inst_34596);

(statearr_34652_34720[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (44))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34653 = state_34612;
(statearr_34653[(28)] = inst_34605);

return statearr_34653;
})();
var statearr_34654_34721 = state_34612__$1;
(statearr_34654_34721[(2)] = null);

(statearr_34654_34721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (6))){
var inst_34544 = (state_34612[(29)]);
var inst_34543 = cljs.core.deref.call(null,cs);
var inst_34544__$1 = cljs.core.keys.call(null,inst_34543);
var inst_34545 = cljs.core.count.call(null,inst_34544__$1);
var inst_34546 = cljs.core.reset_BANG_.call(null,dctr,inst_34545);
var inst_34551 = cljs.core.seq.call(null,inst_34544__$1);
var inst_34552 = inst_34551;
var inst_34553 = null;
var inst_34554 = (0);
var inst_34555 = (0);
var state_34612__$1 = (function (){var statearr_34655 = state_34612;
(statearr_34655[(20)] = inst_34552);

(statearr_34655[(21)] = inst_34554);

(statearr_34655[(29)] = inst_34544__$1);

(statearr_34655[(10)] = inst_34553);

(statearr_34655[(11)] = inst_34555);

(statearr_34655[(30)] = inst_34546);

return statearr_34655;
})();
var statearr_34656_34722 = state_34612__$1;
(statearr_34656_34722[(2)] = null);

(statearr_34656_34722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (28))){
var inst_34571 = (state_34612[(25)]);
var inst_34552 = (state_34612[(20)]);
var inst_34571__$1 = cljs.core.seq.call(null,inst_34552);
var state_34612__$1 = (function (){var statearr_34657 = state_34612;
(statearr_34657[(25)] = inst_34571__$1);

return statearr_34657;
})();
if(inst_34571__$1){
var statearr_34658_34723 = state_34612__$1;
(statearr_34658_34723[(1)] = (33));

} else {
var statearr_34659_34724 = state_34612__$1;
(statearr_34659_34724[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (25))){
var inst_34554 = (state_34612[(21)]);
var inst_34555 = (state_34612[(11)]);
var inst_34557 = (inst_34555 < inst_34554);
var inst_34558 = inst_34557;
var state_34612__$1 = state_34612;
if(cljs.core.truth_(inst_34558)){
var statearr_34660_34725 = state_34612__$1;
(statearr_34660_34725[(1)] = (27));

} else {
var statearr_34661_34726 = state_34612__$1;
(statearr_34661_34726[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (34))){
var state_34612__$1 = state_34612;
var statearr_34662_34727 = state_34612__$1;
(statearr_34662_34727[(2)] = null);

(statearr_34662_34727[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (17))){
var state_34612__$1 = state_34612;
var statearr_34663_34728 = state_34612__$1;
(statearr_34663_34728[(2)] = null);

(statearr_34663_34728[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (3))){
var inst_34610 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34612__$1,inst_34610);
} else {
if((state_val_34613 === (12))){
var inst_34539 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34664_34729 = state_34612__$1;
(statearr_34664_34729[(2)] = inst_34539);

(statearr_34664_34729[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (2))){
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,(4),ch);
} else {
if((state_val_34613 === (23))){
var state_34612__$1 = state_34612;
var statearr_34665_34730 = state_34612__$1;
(statearr_34665_34730[(2)] = null);

(statearr_34665_34730[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (35))){
var inst_34594 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34666_34731 = state_34612__$1;
(statearr_34666_34731[(2)] = inst_34594);

(statearr_34666_34731[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (19))){
var inst_34511 = (state_34612[(7)]);
var inst_34515 = cljs.core.chunk_first.call(null,inst_34511);
var inst_34516 = cljs.core.chunk_rest.call(null,inst_34511);
var inst_34517 = cljs.core.count.call(null,inst_34515);
var inst_34489 = inst_34516;
var inst_34490 = inst_34515;
var inst_34491 = inst_34517;
var inst_34492 = (0);
var state_34612__$1 = (function (){var statearr_34667 = state_34612;
(statearr_34667[(13)] = inst_34490);

(statearr_34667[(14)] = inst_34491);

(statearr_34667[(15)] = inst_34489);

(statearr_34667[(16)] = inst_34492);

return statearr_34667;
})();
var statearr_34668_34732 = state_34612__$1;
(statearr_34668_34732[(2)] = null);

(statearr_34668_34732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34489 = (state_34612[(15)]);
var inst_34511 = (state_34612[(7)]);
var inst_34511__$1 = cljs.core.seq.call(null,inst_34489);
var state_34612__$1 = (function (){var statearr_34669 = state_34612;
(statearr_34669[(7)] = inst_34511__$1);

return statearr_34669;
})();
if(inst_34511__$1){
var statearr_34670_34733 = state_34612__$1;
(statearr_34670_34733[(1)] = (16));

} else {
var statearr_34671_34734 = state_34612__$1;
(statearr_34671_34734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var inst_34541 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34672_34735 = state_34612__$1;
(statearr_34672_34735[(2)] = inst_34541);

(statearr_34672_34735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var inst_34487 = cljs.core.deref.call(null,cs);
var inst_34488 = cljs.core.seq.call(null,inst_34487);
var inst_34489 = inst_34488;
var inst_34490 = null;
var inst_34491 = (0);
var inst_34492 = (0);
var state_34612__$1 = (function (){var statearr_34673 = state_34612;
(statearr_34673[(13)] = inst_34490);

(statearr_34673[(14)] = inst_34491);

(statearr_34673[(15)] = inst_34489);

(statearr_34673[(16)] = inst_34492);

return statearr_34673;
})();
var statearr_34674_34736 = state_34612__$1;
(statearr_34674_34736[(2)] = null);

(statearr_34674_34736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (14))){
var state_34612__$1 = state_34612;
var statearr_34675_34737 = state_34612__$1;
(statearr_34675_34737[(2)] = null);

(statearr_34675_34737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (45))){
var inst_34602 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34676_34738 = state_34612__$1;
(statearr_34676_34738[(2)] = inst_34602);

(statearr_34676_34738[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (26))){
var inst_34544 = (state_34612[(29)]);
var inst_34598 = (state_34612[(2)]);
var inst_34599 = cljs.core.seq.call(null,inst_34544);
var state_34612__$1 = (function (){var statearr_34677 = state_34612;
(statearr_34677[(31)] = inst_34598);

return statearr_34677;
})();
if(inst_34599){
var statearr_34678_34739 = state_34612__$1;
(statearr_34678_34739[(1)] = (42));

} else {
var statearr_34679_34740 = state_34612__$1;
(statearr_34679_34740[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var inst_34511 = (state_34612[(7)]);
var inst_34513 = cljs.core.chunked_seq_QMARK_.call(null,inst_34511);
var state_34612__$1 = state_34612;
if(inst_34513){
var statearr_34680_34741 = state_34612__$1;
(statearr_34680_34741[(1)] = (19));

} else {
var statearr_34681_34742 = state_34612__$1;
(statearr_34681_34742[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (38))){
var inst_34591 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34682_34743 = state_34612__$1;
(statearr_34682_34743[(2)] = inst_34591);

(statearr_34682_34743[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (30))){
var state_34612__$1 = state_34612;
var statearr_34683_34744 = state_34612__$1;
(statearr_34683_34744[(2)] = null);

(statearr_34683_34744[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34490 = (state_34612[(13)]);
var inst_34492 = (state_34612[(16)]);
var inst_34500 = cljs.core._nth.call(null,inst_34490,inst_34492);
var inst_34501 = cljs.core.nth.call(null,inst_34500,(0),null);
var inst_34502 = cljs.core.nth.call(null,inst_34500,(1),null);
var state_34612__$1 = (function (){var statearr_34684 = state_34612;
(statearr_34684[(26)] = inst_34501);

return statearr_34684;
})();
if(cljs.core.truth_(inst_34502)){
var statearr_34685_34745 = state_34612__$1;
(statearr_34685_34745[(1)] = (13));

} else {
var statearr_34686_34746 = state_34612__$1;
(statearr_34686_34746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34537 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34687_34747 = state_34612__$1;
(statearr_34687_34747[(2)] = inst_34537);

(statearr_34687_34747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (42))){
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,(45),dchan);
} else {
if((state_val_34613 === (37))){
var inst_34571 = (state_34612[(25)]);
var inst_34580 = (state_34612[(23)]);
var inst_34480 = (state_34612[(12)]);
var inst_34580__$1 = cljs.core.first.call(null,inst_34571);
var inst_34581 = cljs.core.async.put_BANG_.call(null,inst_34580__$1,inst_34480,done);
var state_34612__$1 = (function (){var statearr_34688 = state_34612;
(statearr_34688[(23)] = inst_34580__$1);

return statearr_34688;
})();
if(cljs.core.truth_(inst_34581)){
var statearr_34689_34748 = state_34612__$1;
(statearr_34689_34748[(1)] = (39));

} else {
var statearr_34690_34749 = state_34612__$1;
(statearr_34690_34749[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34491 = (state_34612[(14)]);
var inst_34492 = (state_34612[(16)]);
var inst_34494 = (inst_34492 < inst_34491);
var inst_34495 = inst_34494;
var state_34612__$1 = state_34612;
if(cljs.core.truth_(inst_34495)){
var statearr_34691_34750 = state_34612__$1;
(statearr_34691_34750[(1)] = (10));

} else {
var statearr_34692_34751 = state_34612__$1;
(statearr_34692_34751[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___34697,cs,m,dchan,dctr,done))
;
return ((function (switch__33787__auto__,c__33878__auto___34697,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33788__auto__ = null;
var cljs$core$async$mult_$_state_machine__33788__auto____0 = (function (){
var statearr_34693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34693[(0)] = cljs$core$async$mult_$_state_machine__33788__auto__);

(statearr_34693[(1)] = (1));

return statearr_34693;
});
var cljs$core$async$mult_$_state_machine__33788__auto____1 = (function (state_34612){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_34612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e34694){if((e34694 instanceof Object)){
var ex__33791__auto__ = e34694;
var statearr_34695_34752 = state_34612;
(statearr_34695_34752[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34753 = state_34612;
state_34612 = G__34753;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33788__auto__ = function(state_34612){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33788__auto____1.call(this,state_34612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33788__auto____0;
cljs$core$async$mult_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33788__auto____1;
return cljs$core$async$mult_$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___34697,cs,m,dchan,dctr,done))
})();
var state__33880__auto__ = (function (){var statearr_34696 = f__33879__auto__.call(null);
(statearr_34696[(6)] = c__33878__auto___34697);

return statearr_34696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___34697,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34755 = arguments.length;
switch (G__34755) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34767 = arguments.length;
var i__4532__auto___34768 = (0);
while(true){
if((i__4532__auto___34768 < len__4531__auto___34767)){
args__4534__auto__.push((arguments[i__4532__auto___34768]));

var G__34769 = (i__4532__auto___34768 + (1));
i__4532__auto___34768 = G__34769;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34761){
var map__34762 = p__34761;
var map__34762__$1 = ((((!((map__34762 == null)))?(((((map__34762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34762):map__34762);
var opts = map__34762__$1;
var statearr_34764_34770 = state;
(statearr_34764_34770[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__34762,map__34762__$1,opts){
return (function (val){
var statearr_34765_34771 = state;
(statearr_34765_34771[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34762,map__34762__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_34766_34772 = state;
(statearr_34766_34772[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34757){
var G__34758 = cljs.core.first.call(null,seq34757);
var seq34757__$1 = cljs.core.next.call(null,seq34757);
var G__34759 = cljs.core.first.call(null,seq34757__$1);
var seq34757__$2 = cljs.core.next.call(null,seq34757__$1);
var G__34760 = cljs.core.first.call(null,seq34757__$2);
var seq34757__$3 = cljs.core.next.call(null,seq34757__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34758,G__34759,G__34760,seq34757__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34773 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34774){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34774 = meta34774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34775,meta34774__$1){
var self__ = this;
var _34775__$1 = this;
return (new cljs.core.async.t_cljs$core$async34773(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34774__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34775){
var self__ = this;
var _34775__$1 = this;
return self__.meta34774;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34773.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34774","meta34774",-1171669992,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34773";

cljs.core.async.t_cljs$core$async34773.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async34773");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34773.
 */
cljs.core.async.__GT_t_cljs$core$async34773 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34773(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34774){
return (new cljs.core.async.t_cljs$core$async34773(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34774));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34773(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33878__auto___34937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___34937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___34937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34877){
var state_val_34878 = (state_34877[(1)]);
if((state_val_34878 === (7))){
var inst_34792 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34879_34938 = state_34877__$1;
(statearr_34879_34938[(2)] = inst_34792);

(statearr_34879_34938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (20))){
var inst_34804 = (state_34877[(7)]);
var state_34877__$1 = state_34877;
var statearr_34880_34939 = state_34877__$1;
(statearr_34880_34939[(2)] = inst_34804);

(statearr_34880_34939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (27))){
var state_34877__$1 = state_34877;
var statearr_34881_34940 = state_34877__$1;
(statearr_34881_34940[(2)] = null);

(statearr_34881_34940[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (1))){
var inst_34779 = (state_34877[(8)]);
var inst_34779__$1 = calc_state.call(null);
var inst_34781 = (inst_34779__$1 == null);
var inst_34782 = cljs.core.not.call(null,inst_34781);
var state_34877__$1 = (function (){var statearr_34882 = state_34877;
(statearr_34882[(8)] = inst_34779__$1);

return statearr_34882;
})();
if(inst_34782){
var statearr_34883_34941 = state_34877__$1;
(statearr_34883_34941[(1)] = (2));

} else {
var statearr_34884_34942 = state_34877__$1;
(statearr_34884_34942[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (24))){
var inst_34837 = (state_34877[(9)]);
var inst_34828 = (state_34877[(10)]);
var inst_34851 = (state_34877[(11)]);
var inst_34851__$1 = inst_34828.call(null,inst_34837);
var state_34877__$1 = (function (){var statearr_34885 = state_34877;
(statearr_34885[(11)] = inst_34851__$1);

return statearr_34885;
})();
if(cljs.core.truth_(inst_34851__$1)){
var statearr_34886_34943 = state_34877__$1;
(statearr_34886_34943[(1)] = (29));

} else {
var statearr_34887_34944 = state_34877__$1;
(statearr_34887_34944[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (4))){
var inst_34795 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34795)){
var statearr_34888_34945 = state_34877__$1;
(statearr_34888_34945[(1)] = (8));

} else {
var statearr_34889_34946 = state_34877__$1;
(statearr_34889_34946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (15))){
var inst_34822 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34822)){
var statearr_34890_34947 = state_34877__$1;
(statearr_34890_34947[(1)] = (19));

} else {
var statearr_34891_34948 = state_34877__$1;
(statearr_34891_34948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (21))){
var inst_34827 = (state_34877[(12)]);
var inst_34827__$1 = (state_34877[(2)]);
var inst_34828 = cljs.core.get.call(null,inst_34827__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34829 = cljs.core.get.call(null,inst_34827__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34830 = cljs.core.get.call(null,inst_34827__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34877__$1 = (function (){var statearr_34892 = state_34877;
(statearr_34892[(13)] = inst_34829);

(statearr_34892[(10)] = inst_34828);

(statearr_34892[(12)] = inst_34827__$1);

return statearr_34892;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34877__$1,(22),inst_34830);
} else {
if((state_val_34878 === (31))){
var inst_34859 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34859)){
var statearr_34893_34949 = state_34877__$1;
(statearr_34893_34949[(1)] = (32));

} else {
var statearr_34894_34950 = state_34877__$1;
(statearr_34894_34950[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (32))){
var inst_34836 = (state_34877[(14)]);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34877__$1,(35),out,inst_34836);
} else {
if((state_val_34878 === (33))){
var inst_34827 = (state_34877[(12)]);
var inst_34804 = inst_34827;
var state_34877__$1 = (function (){var statearr_34895 = state_34877;
(statearr_34895[(7)] = inst_34804);

return statearr_34895;
})();
var statearr_34896_34951 = state_34877__$1;
(statearr_34896_34951[(2)] = null);

(statearr_34896_34951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (13))){
var inst_34804 = (state_34877[(7)]);
var inst_34811 = inst_34804.cljs$lang$protocol_mask$partition0$;
var inst_34812 = (inst_34811 & (64));
var inst_34813 = inst_34804.cljs$core$ISeq$;
var inst_34814 = (cljs.core.PROTOCOL_SENTINEL === inst_34813);
var inst_34815 = ((inst_34812) || (inst_34814));
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34815)){
var statearr_34897_34952 = state_34877__$1;
(statearr_34897_34952[(1)] = (16));

} else {
var statearr_34898_34953 = state_34877__$1;
(statearr_34898_34953[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (22))){
var inst_34837 = (state_34877[(9)]);
var inst_34836 = (state_34877[(14)]);
var inst_34835 = (state_34877[(2)]);
var inst_34836__$1 = cljs.core.nth.call(null,inst_34835,(0),null);
var inst_34837__$1 = cljs.core.nth.call(null,inst_34835,(1),null);
var inst_34838 = (inst_34836__$1 == null);
var inst_34839 = cljs.core._EQ_.call(null,inst_34837__$1,change);
var inst_34840 = ((inst_34838) || (inst_34839));
var state_34877__$1 = (function (){var statearr_34899 = state_34877;
(statearr_34899[(9)] = inst_34837__$1);

(statearr_34899[(14)] = inst_34836__$1);

return statearr_34899;
})();
if(cljs.core.truth_(inst_34840)){
var statearr_34900_34954 = state_34877__$1;
(statearr_34900_34954[(1)] = (23));

} else {
var statearr_34901_34955 = state_34877__$1;
(statearr_34901_34955[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (36))){
var inst_34827 = (state_34877[(12)]);
var inst_34804 = inst_34827;
var state_34877__$1 = (function (){var statearr_34902 = state_34877;
(statearr_34902[(7)] = inst_34804);

return statearr_34902;
})();
var statearr_34903_34956 = state_34877__$1;
(statearr_34903_34956[(2)] = null);

(statearr_34903_34956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (29))){
var inst_34851 = (state_34877[(11)]);
var state_34877__$1 = state_34877;
var statearr_34904_34957 = state_34877__$1;
(statearr_34904_34957[(2)] = inst_34851);

(statearr_34904_34957[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (6))){
var state_34877__$1 = state_34877;
var statearr_34905_34958 = state_34877__$1;
(statearr_34905_34958[(2)] = false);

(statearr_34905_34958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (28))){
var inst_34847 = (state_34877[(2)]);
var inst_34848 = calc_state.call(null);
var inst_34804 = inst_34848;
var state_34877__$1 = (function (){var statearr_34906 = state_34877;
(statearr_34906[(7)] = inst_34804);

(statearr_34906[(15)] = inst_34847);

return statearr_34906;
})();
var statearr_34907_34959 = state_34877__$1;
(statearr_34907_34959[(2)] = null);

(statearr_34907_34959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (25))){
var inst_34873 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34908_34960 = state_34877__$1;
(statearr_34908_34960[(2)] = inst_34873);

(statearr_34908_34960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (34))){
var inst_34871 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34909_34961 = state_34877__$1;
(statearr_34909_34961[(2)] = inst_34871);

(statearr_34909_34961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (17))){
var state_34877__$1 = state_34877;
var statearr_34910_34962 = state_34877__$1;
(statearr_34910_34962[(2)] = false);

(statearr_34910_34962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (3))){
var state_34877__$1 = state_34877;
var statearr_34911_34963 = state_34877__$1;
(statearr_34911_34963[(2)] = false);

(statearr_34911_34963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (12))){
var inst_34875 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34877__$1,inst_34875);
} else {
if((state_val_34878 === (2))){
var inst_34779 = (state_34877[(8)]);
var inst_34784 = inst_34779.cljs$lang$protocol_mask$partition0$;
var inst_34785 = (inst_34784 & (64));
var inst_34786 = inst_34779.cljs$core$ISeq$;
var inst_34787 = (cljs.core.PROTOCOL_SENTINEL === inst_34786);
var inst_34788 = ((inst_34785) || (inst_34787));
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34788)){
var statearr_34912_34964 = state_34877__$1;
(statearr_34912_34964[(1)] = (5));

} else {
var statearr_34913_34965 = state_34877__$1;
(statearr_34913_34965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (23))){
var inst_34836 = (state_34877[(14)]);
var inst_34842 = (inst_34836 == null);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34842)){
var statearr_34914_34966 = state_34877__$1;
(statearr_34914_34966[(1)] = (26));

} else {
var statearr_34915_34967 = state_34877__$1;
(statearr_34915_34967[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (35))){
var inst_34862 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34862)){
var statearr_34916_34968 = state_34877__$1;
(statearr_34916_34968[(1)] = (36));

} else {
var statearr_34917_34969 = state_34877__$1;
(statearr_34917_34969[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (19))){
var inst_34804 = (state_34877[(7)]);
var inst_34824 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34804);
var state_34877__$1 = state_34877;
var statearr_34918_34970 = state_34877__$1;
(statearr_34918_34970[(2)] = inst_34824);

(statearr_34918_34970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (11))){
var inst_34804 = (state_34877[(7)]);
var inst_34808 = (inst_34804 == null);
var inst_34809 = cljs.core.not.call(null,inst_34808);
var state_34877__$1 = state_34877;
if(inst_34809){
var statearr_34919_34971 = state_34877__$1;
(statearr_34919_34971[(1)] = (13));

} else {
var statearr_34920_34972 = state_34877__$1;
(statearr_34920_34972[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (9))){
var inst_34779 = (state_34877[(8)]);
var state_34877__$1 = state_34877;
var statearr_34921_34973 = state_34877__$1;
(statearr_34921_34973[(2)] = inst_34779);

(statearr_34921_34973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (5))){
var state_34877__$1 = state_34877;
var statearr_34922_34974 = state_34877__$1;
(statearr_34922_34974[(2)] = true);

(statearr_34922_34974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (14))){
var state_34877__$1 = state_34877;
var statearr_34923_34975 = state_34877__$1;
(statearr_34923_34975[(2)] = false);

(statearr_34923_34975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (26))){
var inst_34837 = (state_34877[(9)]);
var inst_34844 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34837);
var state_34877__$1 = state_34877;
var statearr_34924_34976 = state_34877__$1;
(statearr_34924_34976[(2)] = inst_34844);

(statearr_34924_34976[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (16))){
var state_34877__$1 = state_34877;
var statearr_34925_34977 = state_34877__$1;
(statearr_34925_34977[(2)] = true);

(statearr_34925_34977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (38))){
var inst_34867 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34926_34978 = state_34877__$1;
(statearr_34926_34978[(2)] = inst_34867);

(statearr_34926_34978[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (30))){
var inst_34829 = (state_34877[(13)]);
var inst_34837 = (state_34877[(9)]);
var inst_34828 = (state_34877[(10)]);
var inst_34854 = cljs.core.empty_QMARK_.call(null,inst_34828);
var inst_34855 = inst_34829.call(null,inst_34837);
var inst_34856 = cljs.core.not.call(null,inst_34855);
var inst_34857 = ((inst_34854) && (inst_34856));
var state_34877__$1 = state_34877;
var statearr_34927_34979 = state_34877__$1;
(statearr_34927_34979[(2)] = inst_34857);

(statearr_34927_34979[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (10))){
var inst_34779 = (state_34877[(8)]);
var inst_34800 = (state_34877[(2)]);
var inst_34801 = cljs.core.get.call(null,inst_34800,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34802 = cljs.core.get.call(null,inst_34800,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34803 = cljs.core.get.call(null,inst_34800,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34804 = inst_34779;
var state_34877__$1 = (function (){var statearr_34928 = state_34877;
(statearr_34928[(16)] = inst_34801);

(statearr_34928[(17)] = inst_34803);

(statearr_34928[(7)] = inst_34804);

(statearr_34928[(18)] = inst_34802);

return statearr_34928;
})();
var statearr_34929_34980 = state_34877__$1;
(statearr_34929_34980[(2)] = null);

(statearr_34929_34980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (18))){
var inst_34819 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34930_34981 = state_34877__$1;
(statearr_34930_34981[(2)] = inst_34819);

(statearr_34930_34981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (37))){
var state_34877__$1 = state_34877;
var statearr_34931_34982 = state_34877__$1;
(statearr_34931_34982[(2)] = null);

(statearr_34931_34982[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (8))){
var inst_34779 = (state_34877[(8)]);
var inst_34797 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34779);
var state_34877__$1 = state_34877;
var statearr_34932_34983 = state_34877__$1;
(statearr_34932_34983[(2)] = inst_34797);

(statearr_34932_34983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___34937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33787__auto__,c__33878__auto___34937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33788__auto__ = null;
var cljs$core$async$mix_$_state_machine__33788__auto____0 = (function (){
var statearr_34933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34933[(0)] = cljs$core$async$mix_$_state_machine__33788__auto__);

(statearr_34933[(1)] = (1));

return statearr_34933;
});
var cljs$core$async$mix_$_state_machine__33788__auto____1 = (function (state_34877){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_34877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e34934){if((e34934 instanceof Object)){
var ex__33791__auto__ = e34934;
var statearr_34935_34984 = state_34877;
(statearr_34935_34984[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34985 = state_34877;
state_34877 = G__34985;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33788__auto__ = function(state_34877){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33788__auto____1.call(this,state_34877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33788__auto____0;
cljs$core$async$mix_$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33788__auto____1;
return cljs$core$async$mix_$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___34937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33880__auto__ = (function (){var statearr_34936 = f__33879__auto__.call(null);
(statearr_34936[(6)] = c__33878__auto___34937);

return statearr_34936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___34937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34987 = arguments.length;
switch (G__34987) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34991 = arguments.length;
switch (G__34991) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__34989_SHARP_){
if(cljs.core.truth_(p1__34989_SHARP_.call(null,topic))){
return p1__34989_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34989_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34992 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34993){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34993 = meta34993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34994,meta34993__$1){
var self__ = this;
var _34994__$1 = this;
return (new cljs.core.async.t_cljs$core$async34992(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34993__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34994){
var self__ = this;
var _34994__$1 = this;
return self__.meta34993;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34992.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34993","meta34993",1535045745,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34992";

cljs.core.async.t_cljs$core$async34992.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async34992");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34992.
 */
cljs.core.async.__GT_t_cljs$core$async34992 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34992(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34993){
return (new cljs.core.async.t_cljs$core$async34992(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34993));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34992(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33878__auto___35112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___35112,mults,ensure_mult,p){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___35112,mults,ensure_mult,p){
return (function (state_35066){
var state_val_35067 = (state_35066[(1)]);
if((state_val_35067 === (7))){
var inst_35062 = (state_35066[(2)]);
var state_35066__$1 = state_35066;
var statearr_35068_35113 = state_35066__$1;
(statearr_35068_35113[(2)] = inst_35062);

(statearr_35068_35113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (20))){
var state_35066__$1 = state_35066;
var statearr_35069_35114 = state_35066__$1;
(statearr_35069_35114[(2)] = null);

(statearr_35069_35114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (1))){
var state_35066__$1 = state_35066;
var statearr_35070_35115 = state_35066__$1;
(statearr_35070_35115[(2)] = null);

(statearr_35070_35115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (24))){
var inst_35045 = (state_35066[(7)]);
var inst_35054 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35045);
var state_35066__$1 = state_35066;
var statearr_35071_35116 = state_35066__$1;
(statearr_35071_35116[(2)] = inst_35054);

(statearr_35071_35116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (4))){
var inst_34997 = (state_35066[(8)]);
var inst_34997__$1 = (state_35066[(2)]);
var inst_34998 = (inst_34997__$1 == null);
var state_35066__$1 = (function (){var statearr_35072 = state_35066;
(statearr_35072[(8)] = inst_34997__$1);

return statearr_35072;
})();
if(cljs.core.truth_(inst_34998)){
var statearr_35073_35117 = state_35066__$1;
(statearr_35073_35117[(1)] = (5));

} else {
var statearr_35074_35118 = state_35066__$1;
(statearr_35074_35118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (15))){
var inst_35039 = (state_35066[(2)]);
var state_35066__$1 = state_35066;
var statearr_35075_35119 = state_35066__$1;
(statearr_35075_35119[(2)] = inst_35039);

(statearr_35075_35119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (21))){
var inst_35059 = (state_35066[(2)]);
var state_35066__$1 = (function (){var statearr_35076 = state_35066;
(statearr_35076[(9)] = inst_35059);

return statearr_35076;
})();
var statearr_35077_35120 = state_35066__$1;
(statearr_35077_35120[(2)] = null);

(statearr_35077_35120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (13))){
var inst_35021 = (state_35066[(10)]);
var inst_35023 = cljs.core.chunked_seq_QMARK_.call(null,inst_35021);
var state_35066__$1 = state_35066;
if(inst_35023){
var statearr_35078_35121 = state_35066__$1;
(statearr_35078_35121[(1)] = (16));

} else {
var statearr_35079_35122 = state_35066__$1;
(statearr_35079_35122[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (22))){
var inst_35051 = (state_35066[(2)]);
var state_35066__$1 = state_35066;
if(cljs.core.truth_(inst_35051)){
var statearr_35080_35123 = state_35066__$1;
(statearr_35080_35123[(1)] = (23));

} else {
var statearr_35081_35124 = state_35066__$1;
(statearr_35081_35124[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (6))){
var inst_34997 = (state_35066[(8)]);
var inst_35047 = (state_35066[(11)]);
var inst_35045 = (state_35066[(7)]);
var inst_35045__$1 = topic_fn.call(null,inst_34997);
var inst_35046 = cljs.core.deref.call(null,mults);
var inst_35047__$1 = cljs.core.get.call(null,inst_35046,inst_35045__$1);
var state_35066__$1 = (function (){var statearr_35082 = state_35066;
(statearr_35082[(11)] = inst_35047__$1);

(statearr_35082[(7)] = inst_35045__$1);

return statearr_35082;
})();
if(cljs.core.truth_(inst_35047__$1)){
var statearr_35083_35125 = state_35066__$1;
(statearr_35083_35125[(1)] = (19));

} else {
var statearr_35084_35126 = state_35066__$1;
(statearr_35084_35126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (25))){
var inst_35056 = (state_35066[(2)]);
var state_35066__$1 = state_35066;
var statearr_35085_35127 = state_35066__$1;
(statearr_35085_35127[(2)] = inst_35056);

(statearr_35085_35127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (17))){
var inst_35021 = (state_35066[(10)]);
var inst_35030 = cljs.core.first.call(null,inst_35021);
var inst_35031 = cljs.core.async.muxch_STAR_.call(null,inst_35030);
var inst_35032 = cljs.core.async.close_BANG_.call(null,inst_35031);
var inst_35033 = cljs.core.next.call(null,inst_35021);
var inst_35007 = inst_35033;
var inst_35008 = null;
var inst_35009 = (0);
var inst_35010 = (0);
var state_35066__$1 = (function (){var statearr_35086 = state_35066;
(statearr_35086[(12)] = inst_35008);

(statearr_35086[(13)] = inst_35032);

(statearr_35086[(14)] = inst_35010);

(statearr_35086[(15)] = inst_35009);

(statearr_35086[(16)] = inst_35007);

return statearr_35086;
})();
var statearr_35087_35128 = state_35066__$1;
(statearr_35087_35128[(2)] = null);

(statearr_35087_35128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (3))){
var inst_35064 = (state_35066[(2)]);
var state_35066__$1 = state_35066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35066__$1,inst_35064);
} else {
if((state_val_35067 === (12))){
var inst_35041 = (state_35066[(2)]);
var state_35066__$1 = state_35066;
var statearr_35088_35129 = state_35066__$1;
(statearr_35088_35129[(2)] = inst_35041);

(statearr_35088_35129[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (2))){
var state_35066__$1 = state_35066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35066__$1,(4),ch);
} else {
if((state_val_35067 === (23))){
var state_35066__$1 = state_35066;
var statearr_35089_35130 = state_35066__$1;
(statearr_35089_35130[(2)] = null);

(statearr_35089_35130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (19))){
var inst_34997 = (state_35066[(8)]);
var inst_35047 = (state_35066[(11)]);
var inst_35049 = cljs.core.async.muxch_STAR_.call(null,inst_35047);
var state_35066__$1 = state_35066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35066__$1,(22),inst_35049,inst_34997);
} else {
if((state_val_35067 === (11))){
var inst_35021 = (state_35066[(10)]);
var inst_35007 = (state_35066[(16)]);
var inst_35021__$1 = cljs.core.seq.call(null,inst_35007);
var state_35066__$1 = (function (){var statearr_35090 = state_35066;
(statearr_35090[(10)] = inst_35021__$1);

return statearr_35090;
})();
if(inst_35021__$1){
var statearr_35091_35131 = state_35066__$1;
(statearr_35091_35131[(1)] = (13));

} else {
var statearr_35092_35132 = state_35066__$1;
(statearr_35092_35132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (9))){
var inst_35043 = (state_35066[(2)]);
var state_35066__$1 = state_35066;
var statearr_35093_35133 = state_35066__$1;
(statearr_35093_35133[(2)] = inst_35043);

(statearr_35093_35133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (5))){
var inst_35004 = cljs.core.deref.call(null,mults);
var inst_35005 = cljs.core.vals.call(null,inst_35004);
var inst_35006 = cljs.core.seq.call(null,inst_35005);
var inst_35007 = inst_35006;
var inst_35008 = null;
var inst_35009 = (0);
var inst_35010 = (0);
var state_35066__$1 = (function (){var statearr_35094 = state_35066;
(statearr_35094[(12)] = inst_35008);

(statearr_35094[(14)] = inst_35010);

(statearr_35094[(15)] = inst_35009);

(statearr_35094[(16)] = inst_35007);

return statearr_35094;
})();
var statearr_35095_35134 = state_35066__$1;
(statearr_35095_35134[(2)] = null);

(statearr_35095_35134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (14))){
var state_35066__$1 = state_35066;
var statearr_35099_35135 = state_35066__$1;
(statearr_35099_35135[(2)] = null);

(statearr_35099_35135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (16))){
var inst_35021 = (state_35066[(10)]);
var inst_35025 = cljs.core.chunk_first.call(null,inst_35021);
var inst_35026 = cljs.core.chunk_rest.call(null,inst_35021);
var inst_35027 = cljs.core.count.call(null,inst_35025);
var inst_35007 = inst_35026;
var inst_35008 = inst_35025;
var inst_35009 = inst_35027;
var inst_35010 = (0);
var state_35066__$1 = (function (){var statearr_35100 = state_35066;
(statearr_35100[(12)] = inst_35008);

(statearr_35100[(14)] = inst_35010);

(statearr_35100[(15)] = inst_35009);

(statearr_35100[(16)] = inst_35007);

return statearr_35100;
})();
var statearr_35101_35136 = state_35066__$1;
(statearr_35101_35136[(2)] = null);

(statearr_35101_35136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (10))){
var inst_35008 = (state_35066[(12)]);
var inst_35010 = (state_35066[(14)]);
var inst_35009 = (state_35066[(15)]);
var inst_35007 = (state_35066[(16)]);
var inst_35015 = cljs.core._nth.call(null,inst_35008,inst_35010);
var inst_35016 = cljs.core.async.muxch_STAR_.call(null,inst_35015);
var inst_35017 = cljs.core.async.close_BANG_.call(null,inst_35016);
var inst_35018 = (inst_35010 + (1));
var tmp35096 = inst_35008;
var tmp35097 = inst_35009;
var tmp35098 = inst_35007;
var inst_35007__$1 = tmp35098;
var inst_35008__$1 = tmp35096;
var inst_35009__$1 = tmp35097;
var inst_35010__$1 = inst_35018;
var state_35066__$1 = (function (){var statearr_35102 = state_35066;
(statearr_35102[(12)] = inst_35008__$1);

(statearr_35102[(17)] = inst_35017);

(statearr_35102[(14)] = inst_35010__$1);

(statearr_35102[(15)] = inst_35009__$1);

(statearr_35102[(16)] = inst_35007__$1);

return statearr_35102;
})();
var statearr_35103_35137 = state_35066__$1;
(statearr_35103_35137[(2)] = null);

(statearr_35103_35137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (18))){
var inst_35036 = (state_35066[(2)]);
var state_35066__$1 = state_35066;
var statearr_35104_35138 = state_35066__$1;
(statearr_35104_35138[(2)] = inst_35036);

(statearr_35104_35138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (8))){
var inst_35010 = (state_35066[(14)]);
var inst_35009 = (state_35066[(15)]);
var inst_35012 = (inst_35010 < inst_35009);
var inst_35013 = inst_35012;
var state_35066__$1 = state_35066;
if(cljs.core.truth_(inst_35013)){
var statearr_35105_35139 = state_35066__$1;
(statearr_35105_35139[(1)] = (10));

} else {
var statearr_35106_35140 = state_35066__$1;
(statearr_35106_35140[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___35112,mults,ensure_mult,p))
;
return ((function (switch__33787__auto__,c__33878__auto___35112,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33788__auto__ = null;
var cljs$core$async$state_machine__33788__auto____0 = (function (){
var statearr_35107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35107[(0)] = cljs$core$async$state_machine__33788__auto__);

(statearr_35107[(1)] = (1));

return statearr_35107;
});
var cljs$core$async$state_machine__33788__auto____1 = (function (state_35066){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_35066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e35108){if((e35108 instanceof Object)){
var ex__33791__auto__ = e35108;
var statearr_35109_35141 = state_35066;
(statearr_35109_35141[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35142 = state_35066;
state_35066 = G__35142;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$state_machine__33788__auto__ = function(state_35066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33788__auto____1.call(this,state_35066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33788__auto____0;
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33788__auto____1;
return cljs$core$async$state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___35112,mults,ensure_mult,p))
})();
var state__33880__auto__ = (function (){var statearr_35110 = f__33879__auto__.call(null);
(statearr_35110[(6)] = c__33878__auto___35112);

return statearr_35110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___35112,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35144 = arguments.length;
switch (G__35144) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35147 = arguments.length;
switch (G__35147) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35150 = arguments.length;
switch (G__35150) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33878__auto___35217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___35217,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___35217,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35189){
var state_val_35190 = (state_35189[(1)]);
if((state_val_35190 === (7))){
var state_35189__$1 = state_35189;
var statearr_35191_35218 = state_35189__$1;
(statearr_35191_35218[(2)] = null);

(statearr_35191_35218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (1))){
var state_35189__$1 = state_35189;
var statearr_35192_35219 = state_35189__$1;
(statearr_35192_35219[(2)] = null);

(statearr_35192_35219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (4))){
var inst_35153 = (state_35189[(7)]);
var inst_35155 = (inst_35153 < cnt);
var state_35189__$1 = state_35189;
if(cljs.core.truth_(inst_35155)){
var statearr_35193_35220 = state_35189__$1;
(statearr_35193_35220[(1)] = (6));

} else {
var statearr_35194_35221 = state_35189__$1;
(statearr_35194_35221[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (15))){
var inst_35185 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35195_35222 = state_35189__$1;
(statearr_35195_35222[(2)] = inst_35185);

(statearr_35195_35222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (13))){
var inst_35178 = cljs.core.async.close_BANG_.call(null,out);
var state_35189__$1 = state_35189;
var statearr_35196_35223 = state_35189__$1;
(statearr_35196_35223[(2)] = inst_35178);

(statearr_35196_35223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (6))){
var state_35189__$1 = state_35189;
var statearr_35197_35224 = state_35189__$1;
(statearr_35197_35224[(2)] = null);

(statearr_35197_35224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (3))){
var inst_35187 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35189__$1,inst_35187);
} else {
if((state_val_35190 === (12))){
var inst_35175 = (state_35189[(8)]);
var inst_35175__$1 = (state_35189[(2)]);
var inst_35176 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35175__$1);
var state_35189__$1 = (function (){var statearr_35198 = state_35189;
(statearr_35198[(8)] = inst_35175__$1);

return statearr_35198;
})();
if(cljs.core.truth_(inst_35176)){
var statearr_35199_35225 = state_35189__$1;
(statearr_35199_35225[(1)] = (13));

} else {
var statearr_35200_35226 = state_35189__$1;
(statearr_35200_35226[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (2))){
var inst_35152 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35153 = (0);
var state_35189__$1 = (function (){var statearr_35201 = state_35189;
(statearr_35201[(7)] = inst_35153);

(statearr_35201[(9)] = inst_35152);

return statearr_35201;
})();
var statearr_35202_35227 = state_35189__$1;
(statearr_35202_35227[(2)] = null);

(statearr_35202_35227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (11))){
var inst_35153 = (state_35189[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35189,(10),Object,null,(9));
var inst_35162 = chs__$1.call(null,inst_35153);
var inst_35163 = done.call(null,inst_35153);
var inst_35164 = cljs.core.async.take_BANG_.call(null,inst_35162,inst_35163);
var state_35189__$1 = state_35189;
var statearr_35203_35228 = state_35189__$1;
(statearr_35203_35228[(2)] = inst_35164);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35189__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (9))){
var inst_35153 = (state_35189[(7)]);
var inst_35166 = (state_35189[(2)]);
var inst_35167 = (inst_35153 + (1));
var inst_35153__$1 = inst_35167;
var state_35189__$1 = (function (){var statearr_35204 = state_35189;
(statearr_35204[(7)] = inst_35153__$1);

(statearr_35204[(10)] = inst_35166);

return statearr_35204;
})();
var statearr_35205_35229 = state_35189__$1;
(statearr_35205_35229[(2)] = null);

(statearr_35205_35229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (5))){
var inst_35173 = (state_35189[(2)]);
var state_35189__$1 = (function (){var statearr_35206 = state_35189;
(statearr_35206[(11)] = inst_35173);

return statearr_35206;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35189__$1,(12),dchan);
} else {
if((state_val_35190 === (14))){
var inst_35175 = (state_35189[(8)]);
var inst_35180 = cljs.core.apply.call(null,f,inst_35175);
var state_35189__$1 = state_35189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35189__$1,(16),out,inst_35180);
} else {
if((state_val_35190 === (16))){
var inst_35182 = (state_35189[(2)]);
var state_35189__$1 = (function (){var statearr_35207 = state_35189;
(statearr_35207[(12)] = inst_35182);

return statearr_35207;
})();
var statearr_35208_35230 = state_35189__$1;
(statearr_35208_35230[(2)] = null);

(statearr_35208_35230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (10))){
var inst_35157 = (state_35189[(2)]);
var inst_35158 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35189__$1 = (function (){var statearr_35209 = state_35189;
(statearr_35209[(13)] = inst_35157);

return statearr_35209;
})();
var statearr_35210_35231 = state_35189__$1;
(statearr_35210_35231[(2)] = inst_35158);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35189__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (8))){
var inst_35171 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35211_35232 = state_35189__$1;
(statearr_35211_35232[(2)] = inst_35171);

(statearr_35211_35232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___35217,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33787__auto__,c__33878__auto___35217,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33788__auto__ = null;
var cljs$core$async$state_machine__33788__auto____0 = (function (){
var statearr_35212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35212[(0)] = cljs$core$async$state_machine__33788__auto__);

(statearr_35212[(1)] = (1));

return statearr_35212;
});
var cljs$core$async$state_machine__33788__auto____1 = (function (state_35189){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_35189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e35213){if((e35213 instanceof Object)){
var ex__33791__auto__ = e35213;
var statearr_35214_35233 = state_35189;
(statearr_35214_35233[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35234 = state_35189;
state_35189 = G__35234;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$state_machine__33788__auto__ = function(state_35189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33788__auto____1.call(this,state_35189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33788__auto____0;
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33788__auto____1;
return cljs$core$async$state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___35217,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33880__auto__ = (function (){var statearr_35215 = f__33879__auto__.call(null);
(statearr_35215[(6)] = c__33878__auto___35217);

return statearr_35215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___35217,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35237 = arguments.length;
switch (G__35237) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33878__auto___35291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___35291,out){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___35291,out){
return (function (state_35269){
var state_val_35270 = (state_35269[(1)]);
if((state_val_35270 === (7))){
var inst_35249 = (state_35269[(7)]);
var inst_35248 = (state_35269[(8)]);
var inst_35248__$1 = (state_35269[(2)]);
var inst_35249__$1 = cljs.core.nth.call(null,inst_35248__$1,(0),null);
var inst_35250 = cljs.core.nth.call(null,inst_35248__$1,(1),null);
var inst_35251 = (inst_35249__$1 == null);
var state_35269__$1 = (function (){var statearr_35271 = state_35269;
(statearr_35271[(7)] = inst_35249__$1);

(statearr_35271[(9)] = inst_35250);

(statearr_35271[(8)] = inst_35248__$1);

return statearr_35271;
})();
if(cljs.core.truth_(inst_35251)){
var statearr_35272_35292 = state_35269__$1;
(statearr_35272_35292[(1)] = (8));

} else {
var statearr_35273_35293 = state_35269__$1;
(statearr_35273_35293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (1))){
var inst_35238 = cljs.core.vec.call(null,chs);
var inst_35239 = inst_35238;
var state_35269__$1 = (function (){var statearr_35274 = state_35269;
(statearr_35274[(10)] = inst_35239);

return statearr_35274;
})();
var statearr_35275_35294 = state_35269__$1;
(statearr_35275_35294[(2)] = null);

(statearr_35275_35294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (4))){
var inst_35239 = (state_35269[(10)]);
var state_35269__$1 = state_35269;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35269__$1,(7),inst_35239);
} else {
if((state_val_35270 === (6))){
var inst_35265 = (state_35269[(2)]);
var state_35269__$1 = state_35269;
var statearr_35276_35295 = state_35269__$1;
(statearr_35276_35295[(2)] = inst_35265);

(statearr_35276_35295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (3))){
var inst_35267 = (state_35269[(2)]);
var state_35269__$1 = state_35269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35269__$1,inst_35267);
} else {
if((state_val_35270 === (2))){
var inst_35239 = (state_35269[(10)]);
var inst_35241 = cljs.core.count.call(null,inst_35239);
var inst_35242 = (inst_35241 > (0));
var state_35269__$1 = state_35269;
if(cljs.core.truth_(inst_35242)){
var statearr_35278_35296 = state_35269__$1;
(statearr_35278_35296[(1)] = (4));

} else {
var statearr_35279_35297 = state_35269__$1;
(statearr_35279_35297[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (11))){
var inst_35239 = (state_35269[(10)]);
var inst_35258 = (state_35269[(2)]);
var tmp35277 = inst_35239;
var inst_35239__$1 = tmp35277;
var state_35269__$1 = (function (){var statearr_35280 = state_35269;
(statearr_35280[(10)] = inst_35239__$1);

(statearr_35280[(11)] = inst_35258);

return statearr_35280;
})();
var statearr_35281_35298 = state_35269__$1;
(statearr_35281_35298[(2)] = null);

(statearr_35281_35298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (9))){
var inst_35249 = (state_35269[(7)]);
var state_35269__$1 = state_35269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35269__$1,(11),out,inst_35249);
} else {
if((state_val_35270 === (5))){
var inst_35263 = cljs.core.async.close_BANG_.call(null,out);
var state_35269__$1 = state_35269;
var statearr_35282_35299 = state_35269__$1;
(statearr_35282_35299[(2)] = inst_35263);

(statearr_35282_35299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (10))){
var inst_35261 = (state_35269[(2)]);
var state_35269__$1 = state_35269;
var statearr_35283_35300 = state_35269__$1;
(statearr_35283_35300[(2)] = inst_35261);

(statearr_35283_35300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35270 === (8))){
var inst_35239 = (state_35269[(10)]);
var inst_35249 = (state_35269[(7)]);
var inst_35250 = (state_35269[(9)]);
var inst_35248 = (state_35269[(8)]);
var inst_35253 = (function (){var cs = inst_35239;
var vec__35244 = inst_35248;
var v = inst_35249;
var c = inst_35250;
return ((function (cs,vec__35244,v,c,inst_35239,inst_35249,inst_35250,inst_35248,state_val_35270,c__33878__auto___35291,out){
return (function (p1__35235_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35235_SHARP_);
});
;})(cs,vec__35244,v,c,inst_35239,inst_35249,inst_35250,inst_35248,state_val_35270,c__33878__auto___35291,out))
})();
var inst_35254 = cljs.core.filterv.call(null,inst_35253,inst_35239);
var inst_35239__$1 = inst_35254;
var state_35269__$1 = (function (){var statearr_35284 = state_35269;
(statearr_35284[(10)] = inst_35239__$1);

return statearr_35284;
})();
var statearr_35285_35301 = state_35269__$1;
(statearr_35285_35301[(2)] = null);

(statearr_35285_35301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___35291,out))
;
return ((function (switch__33787__auto__,c__33878__auto___35291,out){
return (function() {
var cljs$core$async$state_machine__33788__auto__ = null;
var cljs$core$async$state_machine__33788__auto____0 = (function (){
var statearr_35286 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35286[(0)] = cljs$core$async$state_machine__33788__auto__);

(statearr_35286[(1)] = (1));

return statearr_35286;
});
var cljs$core$async$state_machine__33788__auto____1 = (function (state_35269){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_35269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e35287){if((e35287 instanceof Object)){
var ex__33791__auto__ = e35287;
var statearr_35288_35302 = state_35269;
(statearr_35288_35302[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35303 = state_35269;
state_35269 = G__35303;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$state_machine__33788__auto__ = function(state_35269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33788__auto____1.call(this,state_35269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33788__auto____0;
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33788__auto____1;
return cljs$core$async$state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___35291,out))
})();
var state__33880__auto__ = (function (){var statearr_35289 = f__33879__auto__.call(null);
(statearr_35289[(6)] = c__33878__auto___35291);

return statearr_35289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___35291,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35305 = arguments.length;
switch (G__35305) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33878__auto___35350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___35350,out){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___35350,out){
return (function (state_35329){
var state_val_35330 = (state_35329[(1)]);
if((state_val_35330 === (7))){
var inst_35311 = (state_35329[(7)]);
var inst_35311__$1 = (state_35329[(2)]);
var inst_35312 = (inst_35311__$1 == null);
var inst_35313 = cljs.core.not.call(null,inst_35312);
var state_35329__$1 = (function (){var statearr_35331 = state_35329;
(statearr_35331[(7)] = inst_35311__$1);

return statearr_35331;
})();
if(inst_35313){
var statearr_35332_35351 = state_35329__$1;
(statearr_35332_35351[(1)] = (8));

} else {
var statearr_35333_35352 = state_35329__$1;
(statearr_35333_35352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (1))){
var inst_35306 = (0);
var state_35329__$1 = (function (){var statearr_35334 = state_35329;
(statearr_35334[(8)] = inst_35306);

return statearr_35334;
})();
var statearr_35335_35353 = state_35329__$1;
(statearr_35335_35353[(2)] = null);

(statearr_35335_35353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (4))){
var state_35329__$1 = state_35329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35329__$1,(7),ch);
} else {
if((state_val_35330 === (6))){
var inst_35324 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
var statearr_35336_35354 = state_35329__$1;
(statearr_35336_35354[(2)] = inst_35324);

(statearr_35336_35354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (3))){
var inst_35326 = (state_35329[(2)]);
var inst_35327 = cljs.core.async.close_BANG_.call(null,out);
var state_35329__$1 = (function (){var statearr_35337 = state_35329;
(statearr_35337[(9)] = inst_35326);

return statearr_35337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35329__$1,inst_35327);
} else {
if((state_val_35330 === (2))){
var inst_35306 = (state_35329[(8)]);
var inst_35308 = (inst_35306 < n);
var state_35329__$1 = state_35329;
if(cljs.core.truth_(inst_35308)){
var statearr_35338_35355 = state_35329__$1;
(statearr_35338_35355[(1)] = (4));

} else {
var statearr_35339_35356 = state_35329__$1;
(statearr_35339_35356[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (11))){
var inst_35306 = (state_35329[(8)]);
var inst_35316 = (state_35329[(2)]);
var inst_35317 = (inst_35306 + (1));
var inst_35306__$1 = inst_35317;
var state_35329__$1 = (function (){var statearr_35340 = state_35329;
(statearr_35340[(8)] = inst_35306__$1);

(statearr_35340[(10)] = inst_35316);

return statearr_35340;
})();
var statearr_35341_35357 = state_35329__$1;
(statearr_35341_35357[(2)] = null);

(statearr_35341_35357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (9))){
var state_35329__$1 = state_35329;
var statearr_35342_35358 = state_35329__$1;
(statearr_35342_35358[(2)] = null);

(statearr_35342_35358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (5))){
var state_35329__$1 = state_35329;
var statearr_35343_35359 = state_35329__$1;
(statearr_35343_35359[(2)] = null);

(statearr_35343_35359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (10))){
var inst_35321 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
var statearr_35344_35360 = state_35329__$1;
(statearr_35344_35360[(2)] = inst_35321);

(statearr_35344_35360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (8))){
var inst_35311 = (state_35329[(7)]);
var state_35329__$1 = state_35329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35329__$1,(11),out,inst_35311);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___35350,out))
;
return ((function (switch__33787__auto__,c__33878__auto___35350,out){
return (function() {
var cljs$core$async$state_machine__33788__auto__ = null;
var cljs$core$async$state_machine__33788__auto____0 = (function (){
var statearr_35345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35345[(0)] = cljs$core$async$state_machine__33788__auto__);

(statearr_35345[(1)] = (1));

return statearr_35345;
});
var cljs$core$async$state_machine__33788__auto____1 = (function (state_35329){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_35329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e35346){if((e35346 instanceof Object)){
var ex__33791__auto__ = e35346;
var statearr_35347_35361 = state_35329;
(statearr_35347_35361[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35362 = state_35329;
state_35329 = G__35362;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$state_machine__33788__auto__ = function(state_35329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33788__auto____1.call(this,state_35329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33788__auto____0;
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33788__auto____1;
return cljs$core$async$state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___35350,out))
})();
var state__33880__auto__ = (function (){var statearr_35348 = f__33879__auto__.call(null);
(statearr_35348[(6)] = c__33878__auto___35350);

return statearr_35348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___35350,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35364 = (function (f,ch,meta35365){
this.f = f;
this.ch = ch;
this.meta35365 = meta35365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35366,meta35365__$1){
var self__ = this;
var _35366__$1 = this;
return (new cljs.core.async.t_cljs$core$async35364(self__.f,self__.ch,meta35365__$1));
});

cljs.core.async.t_cljs$core$async35364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35366){
var self__ = this;
var _35366__$1 = this;
return self__.meta35365;
});

cljs.core.async.t_cljs$core$async35364.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35364.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35364.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35364.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35364.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35367 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35367 = (function (f,ch,meta35365,_,fn1,meta35368){
this.f = f;
this.ch = ch;
this.meta35365 = meta35365;
this._ = _;
this.fn1 = fn1;
this.meta35368 = meta35368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35369,meta35368__$1){
var self__ = this;
var _35369__$1 = this;
return (new cljs.core.async.t_cljs$core$async35367(self__.f,self__.ch,self__.meta35365,self__._,self__.fn1,meta35368__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35369){
var self__ = this;
var _35369__$1 = this;
return self__.meta35368;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35363_SHARP_){
return f1.call(null,(((p1__35363_SHARP_ == null))?null:self__.f.call(null,p1__35363_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35367.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35365","meta35365",2090337177,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35364","cljs.core.async/t_cljs$core$async35364",-1836367082,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35368","meta35368",-90400566,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35367";

cljs.core.async.t_cljs$core$async35367.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35367");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35367.
 */
cljs.core.async.__GT_t_cljs$core$async35367 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35367(f__$1,ch__$1,meta35365__$1,___$2,fn1__$1,meta35368){
return (new cljs.core.async.t_cljs$core$async35367(f__$1,ch__$1,meta35365__$1,___$2,fn1__$1,meta35368));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35367(self__.f,self__.ch,self__.meta35365,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35364.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35364.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35365","meta35365",2090337177,null)], null);
});

cljs.core.async.t_cljs$core$async35364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35364";

cljs.core.async.t_cljs$core$async35364.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35364");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35364.
 */
cljs.core.async.__GT_t_cljs$core$async35364 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35364(f__$1,ch__$1,meta35365){
return (new cljs.core.async.t_cljs$core$async35364(f__$1,ch__$1,meta35365));
});

}

return (new cljs.core.async.t_cljs$core$async35364(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35370 = (function (f,ch,meta35371){
this.f = f;
this.ch = ch;
this.meta35371 = meta35371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35372,meta35371__$1){
var self__ = this;
var _35372__$1 = this;
return (new cljs.core.async.t_cljs$core$async35370(self__.f,self__.ch,meta35371__$1));
});

cljs.core.async.t_cljs$core$async35370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35372){
var self__ = this;
var _35372__$1 = this;
return self__.meta35371;
});

cljs.core.async.t_cljs$core$async35370.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35370.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35370.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35371","meta35371",302787732,null)], null);
});

cljs.core.async.t_cljs$core$async35370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35370";

cljs.core.async.t_cljs$core$async35370.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35370");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35370.
 */
cljs.core.async.__GT_t_cljs$core$async35370 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35370(f__$1,ch__$1,meta35371){
return (new cljs.core.async.t_cljs$core$async35370(f__$1,ch__$1,meta35371));
});

}

return (new cljs.core.async.t_cljs$core$async35370(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35373 = (function (p,ch,meta35374){
this.p = p;
this.ch = ch;
this.meta35374 = meta35374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35375,meta35374__$1){
var self__ = this;
var _35375__$1 = this;
return (new cljs.core.async.t_cljs$core$async35373(self__.p,self__.ch,meta35374__$1));
});

cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35375){
var self__ = this;
var _35375__$1 = this;
return self__.meta35374;
});

cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35374","meta35374",-1424368820,null)], null);
});

cljs.core.async.t_cljs$core$async35373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35373";

cljs.core.async.t_cljs$core$async35373.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35373");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35373.
 */
cljs.core.async.__GT_t_cljs$core$async35373 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35373(p__$1,ch__$1,meta35374){
return (new cljs.core.async.t_cljs$core$async35373(p__$1,ch__$1,meta35374));
});

}

return (new cljs.core.async.t_cljs$core$async35373(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35377 = arguments.length;
switch (G__35377) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33878__auto___35417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___35417,out){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___35417,out){
return (function (state_35398){
var state_val_35399 = (state_35398[(1)]);
if((state_val_35399 === (7))){
var inst_35394 = (state_35398[(2)]);
var state_35398__$1 = state_35398;
var statearr_35400_35418 = state_35398__$1;
(statearr_35400_35418[(2)] = inst_35394);

(statearr_35400_35418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (1))){
var state_35398__$1 = state_35398;
var statearr_35401_35419 = state_35398__$1;
(statearr_35401_35419[(2)] = null);

(statearr_35401_35419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (4))){
var inst_35380 = (state_35398[(7)]);
var inst_35380__$1 = (state_35398[(2)]);
var inst_35381 = (inst_35380__$1 == null);
var state_35398__$1 = (function (){var statearr_35402 = state_35398;
(statearr_35402[(7)] = inst_35380__$1);

return statearr_35402;
})();
if(cljs.core.truth_(inst_35381)){
var statearr_35403_35420 = state_35398__$1;
(statearr_35403_35420[(1)] = (5));

} else {
var statearr_35404_35421 = state_35398__$1;
(statearr_35404_35421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (6))){
var inst_35380 = (state_35398[(7)]);
var inst_35385 = p.call(null,inst_35380);
var state_35398__$1 = state_35398;
if(cljs.core.truth_(inst_35385)){
var statearr_35405_35422 = state_35398__$1;
(statearr_35405_35422[(1)] = (8));

} else {
var statearr_35406_35423 = state_35398__$1;
(statearr_35406_35423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (3))){
var inst_35396 = (state_35398[(2)]);
var state_35398__$1 = state_35398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35398__$1,inst_35396);
} else {
if((state_val_35399 === (2))){
var state_35398__$1 = state_35398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35398__$1,(4),ch);
} else {
if((state_val_35399 === (11))){
var inst_35388 = (state_35398[(2)]);
var state_35398__$1 = state_35398;
var statearr_35407_35424 = state_35398__$1;
(statearr_35407_35424[(2)] = inst_35388);

(statearr_35407_35424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (9))){
var state_35398__$1 = state_35398;
var statearr_35408_35425 = state_35398__$1;
(statearr_35408_35425[(2)] = null);

(statearr_35408_35425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (5))){
var inst_35383 = cljs.core.async.close_BANG_.call(null,out);
var state_35398__$1 = state_35398;
var statearr_35409_35426 = state_35398__$1;
(statearr_35409_35426[(2)] = inst_35383);

(statearr_35409_35426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (10))){
var inst_35391 = (state_35398[(2)]);
var state_35398__$1 = (function (){var statearr_35410 = state_35398;
(statearr_35410[(8)] = inst_35391);

return statearr_35410;
})();
var statearr_35411_35427 = state_35398__$1;
(statearr_35411_35427[(2)] = null);

(statearr_35411_35427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (8))){
var inst_35380 = (state_35398[(7)]);
var state_35398__$1 = state_35398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35398__$1,(11),out,inst_35380);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___35417,out))
;
return ((function (switch__33787__auto__,c__33878__auto___35417,out){
return (function() {
var cljs$core$async$state_machine__33788__auto__ = null;
var cljs$core$async$state_machine__33788__auto____0 = (function (){
var statearr_35412 = [null,null,null,null,null,null,null,null,null];
(statearr_35412[(0)] = cljs$core$async$state_machine__33788__auto__);

(statearr_35412[(1)] = (1));

return statearr_35412;
});
var cljs$core$async$state_machine__33788__auto____1 = (function (state_35398){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_35398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e35413){if((e35413 instanceof Object)){
var ex__33791__auto__ = e35413;
var statearr_35414_35428 = state_35398;
(statearr_35414_35428[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35429 = state_35398;
state_35398 = G__35429;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$state_machine__33788__auto__ = function(state_35398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33788__auto____1.call(this,state_35398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33788__auto____0;
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33788__auto____1;
return cljs$core$async$state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___35417,out))
})();
var state__33880__auto__ = (function (){var statearr_35415 = f__33879__auto__.call(null);
(statearr_35415[(6)] = c__33878__auto___35417);

return statearr_35415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___35417,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35431 = arguments.length;
switch (G__35431) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto__){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto__){
return (function (state_35494){
var state_val_35495 = (state_35494[(1)]);
if((state_val_35495 === (7))){
var inst_35490 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35496_35534 = state_35494__$1;
(statearr_35496_35534[(2)] = inst_35490);

(statearr_35496_35534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (20))){
var inst_35460 = (state_35494[(7)]);
var inst_35471 = (state_35494[(2)]);
var inst_35472 = cljs.core.next.call(null,inst_35460);
var inst_35446 = inst_35472;
var inst_35447 = null;
var inst_35448 = (0);
var inst_35449 = (0);
var state_35494__$1 = (function (){var statearr_35497 = state_35494;
(statearr_35497[(8)] = inst_35446);

(statearr_35497[(9)] = inst_35447);

(statearr_35497[(10)] = inst_35449);

(statearr_35497[(11)] = inst_35448);

(statearr_35497[(12)] = inst_35471);

return statearr_35497;
})();
var statearr_35498_35535 = state_35494__$1;
(statearr_35498_35535[(2)] = null);

(statearr_35498_35535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (1))){
var state_35494__$1 = state_35494;
var statearr_35499_35536 = state_35494__$1;
(statearr_35499_35536[(2)] = null);

(statearr_35499_35536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (4))){
var inst_35435 = (state_35494[(13)]);
var inst_35435__$1 = (state_35494[(2)]);
var inst_35436 = (inst_35435__$1 == null);
var state_35494__$1 = (function (){var statearr_35500 = state_35494;
(statearr_35500[(13)] = inst_35435__$1);

return statearr_35500;
})();
if(cljs.core.truth_(inst_35436)){
var statearr_35501_35537 = state_35494__$1;
(statearr_35501_35537[(1)] = (5));

} else {
var statearr_35502_35538 = state_35494__$1;
(statearr_35502_35538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (15))){
var state_35494__$1 = state_35494;
var statearr_35506_35539 = state_35494__$1;
(statearr_35506_35539[(2)] = null);

(statearr_35506_35539[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (21))){
var state_35494__$1 = state_35494;
var statearr_35507_35540 = state_35494__$1;
(statearr_35507_35540[(2)] = null);

(statearr_35507_35540[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (13))){
var inst_35446 = (state_35494[(8)]);
var inst_35447 = (state_35494[(9)]);
var inst_35449 = (state_35494[(10)]);
var inst_35448 = (state_35494[(11)]);
var inst_35456 = (state_35494[(2)]);
var inst_35457 = (inst_35449 + (1));
var tmp35503 = inst_35446;
var tmp35504 = inst_35447;
var tmp35505 = inst_35448;
var inst_35446__$1 = tmp35503;
var inst_35447__$1 = tmp35504;
var inst_35448__$1 = tmp35505;
var inst_35449__$1 = inst_35457;
var state_35494__$1 = (function (){var statearr_35508 = state_35494;
(statearr_35508[(14)] = inst_35456);

(statearr_35508[(8)] = inst_35446__$1);

(statearr_35508[(9)] = inst_35447__$1);

(statearr_35508[(10)] = inst_35449__$1);

(statearr_35508[(11)] = inst_35448__$1);

return statearr_35508;
})();
var statearr_35509_35541 = state_35494__$1;
(statearr_35509_35541[(2)] = null);

(statearr_35509_35541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (22))){
var state_35494__$1 = state_35494;
var statearr_35510_35542 = state_35494__$1;
(statearr_35510_35542[(2)] = null);

(statearr_35510_35542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (6))){
var inst_35435 = (state_35494[(13)]);
var inst_35444 = f.call(null,inst_35435);
var inst_35445 = cljs.core.seq.call(null,inst_35444);
var inst_35446 = inst_35445;
var inst_35447 = null;
var inst_35448 = (0);
var inst_35449 = (0);
var state_35494__$1 = (function (){var statearr_35511 = state_35494;
(statearr_35511[(8)] = inst_35446);

(statearr_35511[(9)] = inst_35447);

(statearr_35511[(10)] = inst_35449);

(statearr_35511[(11)] = inst_35448);

return statearr_35511;
})();
var statearr_35512_35543 = state_35494__$1;
(statearr_35512_35543[(2)] = null);

(statearr_35512_35543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (17))){
var inst_35460 = (state_35494[(7)]);
var inst_35464 = cljs.core.chunk_first.call(null,inst_35460);
var inst_35465 = cljs.core.chunk_rest.call(null,inst_35460);
var inst_35466 = cljs.core.count.call(null,inst_35464);
var inst_35446 = inst_35465;
var inst_35447 = inst_35464;
var inst_35448 = inst_35466;
var inst_35449 = (0);
var state_35494__$1 = (function (){var statearr_35513 = state_35494;
(statearr_35513[(8)] = inst_35446);

(statearr_35513[(9)] = inst_35447);

(statearr_35513[(10)] = inst_35449);

(statearr_35513[(11)] = inst_35448);

return statearr_35513;
})();
var statearr_35514_35544 = state_35494__$1;
(statearr_35514_35544[(2)] = null);

(statearr_35514_35544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (3))){
var inst_35492 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35494__$1,inst_35492);
} else {
if((state_val_35495 === (12))){
var inst_35480 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35515_35545 = state_35494__$1;
(statearr_35515_35545[(2)] = inst_35480);

(statearr_35515_35545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (2))){
var state_35494__$1 = state_35494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35494__$1,(4),in$);
} else {
if((state_val_35495 === (23))){
var inst_35488 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35516_35546 = state_35494__$1;
(statearr_35516_35546[(2)] = inst_35488);

(statearr_35516_35546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (19))){
var inst_35475 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35517_35547 = state_35494__$1;
(statearr_35517_35547[(2)] = inst_35475);

(statearr_35517_35547[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (11))){
var inst_35446 = (state_35494[(8)]);
var inst_35460 = (state_35494[(7)]);
var inst_35460__$1 = cljs.core.seq.call(null,inst_35446);
var state_35494__$1 = (function (){var statearr_35518 = state_35494;
(statearr_35518[(7)] = inst_35460__$1);

return statearr_35518;
})();
if(inst_35460__$1){
var statearr_35519_35548 = state_35494__$1;
(statearr_35519_35548[(1)] = (14));

} else {
var statearr_35520_35549 = state_35494__$1;
(statearr_35520_35549[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (9))){
var inst_35482 = (state_35494[(2)]);
var inst_35483 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35494__$1 = (function (){var statearr_35521 = state_35494;
(statearr_35521[(15)] = inst_35482);

return statearr_35521;
})();
if(cljs.core.truth_(inst_35483)){
var statearr_35522_35550 = state_35494__$1;
(statearr_35522_35550[(1)] = (21));

} else {
var statearr_35523_35551 = state_35494__$1;
(statearr_35523_35551[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (5))){
var inst_35438 = cljs.core.async.close_BANG_.call(null,out);
var state_35494__$1 = state_35494;
var statearr_35524_35552 = state_35494__$1;
(statearr_35524_35552[(2)] = inst_35438);

(statearr_35524_35552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (14))){
var inst_35460 = (state_35494[(7)]);
var inst_35462 = cljs.core.chunked_seq_QMARK_.call(null,inst_35460);
var state_35494__$1 = state_35494;
if(inst_35462){
var statearr_35525_35553 = state_35494__$1;
(statearr_35525_35553[(1)] = (17));

} else {
var statearr_35526_35554 = state_35494__$1;
(statearr_35526_35554[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (16))){
var inst_35478 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35527_35555 = state_35494__$1;
(statearr_35527_35555[(2)] = inst_35478);

(statearr_35527_35555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (10))){
var inst_35447 = (state_35494[(9)]);
var inst_35449 = (state_35494[(10)]);
var inst_35454 = cljs.core._nth.call(null,inst_35447,inst_35449);
var state_35494__$1 = state_35494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35494__$1,(13),out,inst_35454);
} else {
if((state_val_35495 === (18))){
var inst_35460 = (state_35494[(7)]);
var inst_35469 = cljs.core.first.call(null,inst_35460);
var state_35494__$1 = state_35494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35494__$1,(20),out,inst_35469);
} else {
if((state_val_35495 === (8))){
var inst_35449 = (state_35494[(10)]);
var inst_35448 = (state_35494[(11)]);
var inst_35451 = (inst_35449 < inst_35448);
var inst_35452 = inst_35451;
var state_35494__$1 = state_35494;
if(cljs.core.truth_(inst_35452)){
var statearr_35528_35556 = state_35494__$1;
(statearr_35528_35556[(1)] = (10));

} else {
var statearr_35529_35557 = state_35494__$1;
(statearr_35529_35557[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto__))
;
return ((function (switch__33787__auto__,c__33878__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33788__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33788__auto____0 = (function (){
var statearr_35530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35530[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33788__auto__);

(statearr_35530[(1)] = (1));

return statearr_35530;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33788__auto____1 = (function (state_35494){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_35494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e35531){if((e35531 instanceof Object)){
var ex__33791__auto__ = e35531;
var statearr_35532_35558 = state_35494;
(statearr_35532_35558[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35559 = state_35494;
state_35494 = G__35559;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33788__auto__ = function(state_35494){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33788__auto____1.call(this,state_35494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33788__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33788__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto__))
})();
var state__33880__auto__ = (function (){var statearr_35533 = f__33879__auto__.call(null);
(statearr_35533[(6)] = c__33878__auto__);

return statearr_35533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto__))
);

return c__33878__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35561 = arguments.length;
switch (G__35561) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35564 = arguments.length;
switch (G__35564) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35567 = arguments.length;
switch (G__35567) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33878__auto___35614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___35614,out){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___35614,out){
return (function (state_35591){
var state_val_35592 = (state_35591[(1)]);
if((state_val_35592 === (7))){
var inst_35586 = (state_35591[(2)]);
var state_35591__$1 = state_35591;
var statearr_35593_35615 = state_35591__$1;
(statearr_35593_35615[(2)] = inst_35586);

(statearr_35593_35615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (1))){
var inst_35568 = null;
var state_35591__$1 = (function (){var statearr_35594 = state_35591;
(statearr_35594[(7)] = inst_35568);

return statearr_35594;
})();
var statearr_35595_35616 = state_35591__$1;
(statearr_35595_35616[(2)] = null);

(statearr_35595_35616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (4))){
var inst_35571 = (state_35591[(8)]);
var inst_35571__$1 = (state_35591[(2)]);
var inst_35572 = (inst_35571__$1 == null);
var inst_35573 = cljs.core.not.call(null,inst_35572);
var state_35591__$1 = (function (){var statearr_35596 = state_35591;
(statearr_35596[(8)] = inst_35571__$1);

return statearr_35596;
})();
if(inst_35573){
var statearr_35597_35617 = state_35591__$1;
(statearr_35597_35617[(1)] = (5));

} else {
var statearr_35598_35618 = state_35591__$1;
(statearr_35598_35618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (6))){
var state_35591__$1 = state_35591;
var statearr_35599_35619 = state_35591__$1;
(statearr_35599_35619[(2)] = null);

(statearr_35599_35619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (3))){
var inst_35588 = (state_35591[(2)]);
var inst_35589 = cljs.core.async.close_BANG_.call(null,out);
var state_35591__$1 = (function (){var statearr_35600 = state_35591;
(statearr_35600[(9)] = inst_35588);

return statearr_35600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35591__$1,inst_35589);
} else {
if((state_val_35592 === (2))){
var state_35591__$1 = state_35591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35591__$1,(4),ch);
} else {
if((state_val_35592 === (11))){
var inst_35571 = (state_35591[(8)]);
var inst_35580 = (state_35591[(2)]);
var inst_35568 = inst_35571;
var state_35591__$1 = (function (){var statearr_35601 = state_35591;
(statearr_35601[(10)] = inst_35580);

(statearr_35601[(7)] = inst_35568);

return statearr_35601;
})();
var statearr_35602_35620 = state_35591__$1;
(statearr_35602_35620[(2)] = null);

(statearr_35602_35620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (9))){
var inst_35571 = (state_35591[(8)]);
var state_35591__$1 = state_35591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35591__$1,(11),out,inst_35571);
} else {
if((state_val_35592 === (5))){
var inst_35568 = (state_35591[(7)]);
var inst_35571 = (state_35591[(8)]);
var inst_35575 = cljs.core._EQ_.call(null,inst_35571,inst_35568);
var state_35591__$1 = state_35591;
if(inst_35575){
var statearr_35604_35621 = state_35591__$1;
(statearr_35604_35621[(1)] = (8));

} else {
var statearr_35605_35622 = state_35591__$1;
(statearr_35605_35622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (10))){
var inst_35583 = (state_35591[(2)]);
var state_35591__$1 = state_35591;
var statearr_35606_35623 = state_35591__$1;
(statearr_35606_35623[(2)] = inst_35583);

(statearr_35606_35623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (8))){
var inst_35568 = (state_35591[(7)]);
var tmp35603 = inst_35568;
var inst_35568__$1 = tmp35603;
var state_35591__$1 = (function (){var statearr_35607 = state_35591;
(statearr_35607[(7)] = inst_35568__$1);

return statearr_35607;
})();
var statearr_35608_35624 = state_35591__$1;
(statearr_35608_35624[(2)] = null);

(statearr_35608_35624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___35614,out))
;
return ((function (switch__33787__auto__,c__33878__auto___35614,out){
return (function() {
var cljs$core$async$state_machine__33788__auto__ = null;
var cljs$core$async$state_machine__33788__auto____0 = (function (){
var statearr_35609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35609[(0)] = cljs$core$async$state_machine__33788__auto__);

(statearr_35609[(1)] = (1));

return statearr_35609;
});
var cljs$core$async$state_machine__33788__auto____1 = (function (state_35591){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_35591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e35610){if((e35610 instanceof Object)){
var ex__33791__auto__ = e35610;
var statearr_35611_35625 = state_35591;
(statearr_35611_35625[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35626 = state_35591;
state_35591 = G__35626;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$state_machine__33788__auto__ = function(state_35591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33788__auto____1.call(this,state_35591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33788__auto____0;
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33788__auto____1;
return cljs$core$async$state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___35614,out))
})();
var state__33880__auto__ = (function (){var statearr_35612 = f__33879__auto__.call(null);
(statearr_35612[(6)] = c__33878__auto___35614);

return statearr_35612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___35614,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35628 = arguments.length;
switch (G__35628) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33878__auto___35694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___35694,out){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___35694,out){
return (function (state_35666){
var state_val_35667 = (state_35666[(1)]);
if((state_val_35667 === (7))){
var inst_35662 = (state_35666[(2)]);
var state_35666__$1 = state_35666;
var statearr_35668_35695 = state_35666__$1;
(statearr_35668_35695[(2)] = inst_35662);

(statearr_35668_35695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35667 === (1))){
var inst_35629 = (new Array(n));
var inst_35630 = inst_35629;
var inst_35631 = (0);
var state_35666__$1 = (function (){var statearr_35669 = state_35666;
(statearr_35669[(7)] = inst_35630);

(statearr_35669[(8)] = inst_35631);

return statearr_35669;
})();
var statearr_35670_35696 = state_35666__$1;
(statearr_35670_35696[(2)] = null);

(statearr_35670_35696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35667 === (4))){
var inst_35634 = (state_35666[(9)]);
var inst_35634__$1 = (state_35666[(2)]);
var inst_35635 = (inst_35634__$1 == null);
var inst_35636 = cljs.core.not.call(null,inst_35635);
var state_35666__$1 = (function (){var statearr_35671 = state_35666;
(statearr_35671[(9)] = inst_35634__$1);

return statearr_35671;
})();
if(inst_35636){
var statearr_35672_35697 = state_35666__$1;
(statearr_35672_35697[(1)] = (5));

} else {
var statearr_35673_35698 = state_35666__$1;
(statearr_35673_35698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35667 === (15))){
var inst_35656 = (state_35666[(2)]);
var state_35666__$1 = state_35666;
var statearr_35674_35699 = state_35666__$1;
(statearr_35674_35699[(2)] = inst_35656);

(statearr_35674_35699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35667 === (13))){
var state_35666__$1 = state_35666;
var statearr_35675_35700 = state_35666__$1;
(statearr_35675_35700[(2)] = null);

(statearr_35675_35700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35667 === (6))){
var inst_35631 = (state_35666[(8)]);
var inst_35652 = (inst_35631 > (0));
var state_35666__$1 = state_35666;
if(cljs.core.truth_(inst_35652)){
var statearr_35676_35701 = state_35666__$1;
(statearr_35676_35701[(1)] = (12));

} else {
var statearr_35677_35702 = state_35666__$1;
(statearr_35677_35702[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35667 === (3))){
var inst_35664 = (state_35666[(2)]);
var state_35666__$1 = state_35666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35666__$1,inst_35664);
} else {
if((state_val_35667 === (12))){
var inst_35630 = (state_35666[(7)]);
var inst_35654 = cljs.core.vec.call(null,inst_35630);
var state_35666__$1 = state_35666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35666__$1,(15),out,inst_35654);
} else {
if((state_val_35667 === (2))){
var state_35666__$1 = state_35666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35666__$1,(4),ch);
} else {
if((state_val_35667 === (11))){
var inst_35646 = (state_35666[(2)]);
var inst_35647 = (new Array(n));
var inst_35630 = inst_35647;
var inst_35631 = (0);
var state_35666__$1 = (function (){var statearr_35678 = state_35666;
(statearr_35678[(10)] = inst_35646);

(statearr_35678[(7)] = inst_35630);

(statearr_35678[(8)] = inst_35631);

return statearr_35678;
})();
var statearr_35679_35703 = state_35666__$1;
(statearr_35679_35703[(2)] = null);

(statearr_35679_35703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35667 === (9))){
var inst_35630 = (state_35666[(7)]);
var inst_35644 = cljs.core.vec.call(null,inst_35630);
var state_35666__$1 = state_35666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35666__$1,(11),out,inst_35644);
} else {
if((state_val_35667 === (5))){
var inst_35634 = (state_35666[(9)]);
var inst_35630 = (state_35666[(7)]);
var inst_35639 = (state_35666[(11)]);
var inst_35631 = (state_35666[(8)]);
var inst_35638 = (inst_35630[inst_35631] = inst_35634);
var inst_35639__$1 = (inst_35631 + (1));
var inst_35640 = (inst_35639__$1 < n);
var state_35666__$1 = (function (){var statearr_35680 = state_35666;
(statearr_35680[(12)] = inst_35638);

(statearr_35680[(11)] = inst_35639__$1);

return statearr_35680;
})();
if(cljs.core.truth_(inst_35640)){
var statearr_35681_35704 = state_35666__$1;
(statearr_35681_35704[(1)] = (8));

} else {
var statearr_35682_35705 = state_35666__$1;
(statearr_35682_35705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35667 === (14))){
var inst_35659 = (state_35666[(2)]);
var inst_35660 = cljs.core.async.close_BANG_.call(null,out);
var state_35666__$1 = (function (){var statearr_35684 = state_35666;
(statearr_35684[(13)] = inst_35659);

return statearr_35684;
})();
var statearr_35685_35706 = state_35666__$1;
(statearr_35685_35706[(2)] = inst_35660);

(statearr_35685_35706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35667 === (10))){
var inst_35650 = (state_35666[(2)]);
var state_35666__$1 = state_35666;
var statearr_35686_35707 = state_35666__$1;
(statearr_35686_35707[(2)] = inst_35650);

(statearr_35686_35707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35667 === (8))){
var inst_35630 = (state_35666[(7)]);
var inst_35639 = (state_35666[(11)]);
var tmp35683 = inst_35630;
var inst_35630__$1 = tmp35683;
var inst_35631 = inst_35639;
var state_35666__$1 = (function (){var statearr_35687 = state_35666;
(statearr_35687[(7)] = inst_35630__$1);

(statearr_35687[(8)] = inst_35631);

return statearr_35687;
})();
var statearr_35688_35708 = state_35666__$1;
(statearr_35688_35708[(2)] = null);

(statearr_35688_35708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___35694,out))
;
return ((function (switch__33787__auto__,c__33878__auto___35694,out){
return (function() {
var cljs$core$async$state_machine__33788__auto__ = null;
var cljs$core$async$state_machine__33788__auto____0 = (function (){
var statearr_35689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35689[(0)] = cljs$core$async$state_machine__33788__auto__);

(statearr_35689[(1)] = (1));

return statearr_35689;
});
var cljs$core$async$state_machine__33788__auto____1 = (function (state_35666){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_35666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e35690){if((e35690 instanceof Object)){
var ex__33791__auto__ = e35690;
var statearr_35691_35709 = state_35666;
(statearr_35691_35709[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35710 = state_35666;
state_35666 = G__35710;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$state_machine__33788__auto__ = function(state_35666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33788__auto____1.call(this,state_35666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33788__auto____0;
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33788__auto____1;
return cljs$core$async$state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___35694,out))
})();
var state__33880__auto__ = (function (){var statearr_35692 = f__33879__auto__.call(null);
(statearr_35692[(6)] = c__33878__auto___35694);

return statearr_35692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___35694,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35712 = arguments.length;
switch (G__35712) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33878__auto___35782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33878__auto___35782,out){
return (function (){
var f__33879__auto__ = (function (){var switch__33787__auto__ = ((function (c__33878__auto___35782,out){
return (function (state_35754){
var state_val_35755 = (state_35754[(1)]);
if((state_val_35755 === (7))){
var inst_35750 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
var statearr_35756_35783 = state_35754__$1;
(statearr_35756_35783[(2)] = inst_35750);

(statearr_35756_35783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (1))){
var inst_35713 = [];
var inst_35714 = inst_35713;
var inst_35715 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35754__$1 = (function (){var statearr_35757 = state_35754;
(statearr_35757[(7)] = inst_35715);

(statearr_35757[(8)] = inst_35714);

return statearr_35757;
})();
var statearr_35758_35784 = state_35754__$1;
(statearr_35758_35784[(2)] = null);

(statearr_35758_35784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (4))){
var inst_35718 = (state_35754[(9)]);
var inst_35718__$1 = (state_35754[(2)]);
var inst_35719 = (inst_35718__$1 == null);
var inst_35720 = cljs.core.not.call(null,inst_35719);
var state_35754__$1 = (function (){var statearr_35759 = state_35754;
(statearr_35759[(9)] = inst_35718__$1);

return statearr_35759;
})();
if(inst_35720){
var statearr_35760_35785 = state_35754__$1;
(statearr_35760_35785[(1)] = (5));

} else {
var statearr_35761_35786 = state_35754__$1;
(statearr_35761_35786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (15))){
var inst_35744 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
var statearr_35762_35787 = state_35754__$1;
(statearr_35762_35787[(2)] = inst_35744);

(statearr_35762_35787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (13))){
var state_35754__$1 = state_35754;
var statearr_35763_35788 = state_35754__$1;
(statearr_35763_35788[(2)] = null);

(statearr_35763_35788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (6))){
var inst_35714 = (state_35754[(8)]);
var inst_35739 = inst_35714.length;
var inst_35740 = (inst_35739 > (0));
var state_35754__$1 = state_35754;
if(cljs.core.truth_(inst_35740)){
var statearr_35764_35789 = state_35754__$1;
(statearr_35764_35789[(1)] = (12));

} else {
var statearr_35765_35790 = state_35754__$1;
(statearr_35765_35790[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (3))){
var inst_35752 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35754__$1,inst_35752);
} else {
if((state_val_35755 === (12))){
var inst_35714 = (state_35754[(8)]);
var inst_35742 = cljs.core.vec.call(null,inst_35714);
var state_35754__$1 = state_35754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35754__$1,(15),out,inst_35742);
} else {
if((state_val_35755 === (2))){
var state_35754__$1 = state_35754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35754__$1,(4),ch);
} else {
if((state_val_35755 === (11))){
var inst_35722 = (state_35754[(10)]);
var inst_35718 = (state_35754[(9)]);
var inst_35732 = (state_35754[(2)]);
var inst_35733 = [];
var inst_35734 = inst_35733.push(inst_35718);
var inst_35714 = inst_35733;
var inst_35715 = inst_35722;
var state_35754__$1 = (function (){var statearr_35766 = state_35754;
(statearr_35766[(11)] = inst_35732);

(statearr_35766[(12)] = inst_35734);

(statearr_35766[(7)] = inst_35715);

(statearr_35766[(8)] = inst_35714);

return statearr_35766;
})();
var statearr_35767_35791 = state_35754__$1;
(statearr_35767_35791[(2)] = null);

(statearr_35767_35791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (9))){
var inst_35714 = (state_35754[(8)]);
var inst_35730 = cljs.core.vec.call(null,inst_35714);
var state_35754__$1 = state_35754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35754__$1,(11),out,inst_35730);
} else {
if((state_val_35755 === (5))){
var inst_35722 = (state_35754[(10)]);
var inst_35718 = (state_35754[(9)]);
var inst_35715 = (state_35754[(7)]);
var inst_35722__$1 = f.call(null,inst_35718);
var inst_35723 = cljs.core._EQ_.call(null,inst_35722__$1,inst_35715);
var inst_35724 = cljs.core.keyword_identical_QMARK_.call(null,inst_35715,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35725 = ((inst_35723) || (inst_35724));
var state_35754__$1 = (function (){var statearr_35768 = state_35754;
(statearr_35768[(10)] = inst_35722__$1);

return statearr_35768;
})();
if(cljs.core.truth_(inst_35725)){
var statearr_35769_35792 = state_35754__$1;
(statearr_35769_35792[(1)] = (8));

} else {
var statearr_35770_35793 = state_35754__$1;
(statearr_35770_35793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (14))){
var inst_35747 = (state_35754[(2)]);
var inst_35748 = cljs.core.async.close_BANG_.call(null,out);
var state_35754__$1 = (function (){var statearr_35772 = state_35754;
(statearr_35772[(13)] = inst_35747);

return statearr_35772;
})();
var statearr_35773_35794 = state_35754__$1;
(statearr_35773_35794[(2)] = inst_35748);

(statearr_35773_35794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (10))){
var inst_35737 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
var statearr_35774_35795 = state_35754__$1;
(statearr_35774_35795[(2)] = inst_35737);

(statearr_35774_35795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (8))){
var inst_35722 = (state_35754[(10)]);
var inst_35718 = (state_35754[(9)]);
var inst_35714 = (state_35754[(8)]);
var inst_35727 = inst_35714.push(inst_35718);
var tmp35771 = inst_35714;
var inst_35714__$1 = tmp35771;
var inst_35715 = inst_35722;
var state_35754__$1 = (function (){var statearr_35775 = state_35754;
(statearr_35775[(14)] = inst_35727);

(statearr_35775[(7)] = inst_35715);

(statearr_35775[(8)] = inst_35714__$1);

return statearr_35775;
})();
var statearr_35776_35796 = state_35754__$1;
(statearr_35776_35796[(2)] = null);

(statearr_35776_35796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33878__auto___35782,out))
;
return ((function (switch__33787__auto__,c__33878__auto___35782,out){
return (function() {
var cljs$core$async$state_machine__33788__auto__ = null;
var cljs$core$async$state_machine__33788__auto____0 = (function (){
var statearr_35777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35777[(0)] = cljs$core$async$state_machine__33788__auto__);

(statearr_35777[(1)] = (1));

return statearr_35777;
});
var cljs$core$async$state_machine__33788__auto____1 = (function (state_35754){
while(true){
var ret_value__33789__auto__ = (function (){try{while(true){
var result__33790__auto__ = switch__33787__auto__.call(null,state_35754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33790__auto__;
}
break;
}
}catch (e35778){if((e35778 instanceof Object)){
var ex__33791__auto__ = e35778;
var statearr_35779_35797 = state_35754;
(statearr_35779_35797[(5)] = ex__33791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35798 = state_35754;
state_35754 = G__35798;
continue;
} else {
return ret_value__33789__auto__;
}
break;
}
});
cljs$core$async$state_machine__33788__auto__ = function(state_35754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33788__auto____1.call(this,state_35754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33788__auto____0;
cljs$core$async$state_machine__33788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33788__auto____1;
return cljs$core$async$state_machine__33788__auto__;
})()
;})(switch__33787__auto__,c__33878__auto___35782,out))
})();
var state__33880__auto__ = (function (){var statearr_35780 = f__33879__auto__.call(null);
(statearr_35780[(6)] = c__33878__auto___35782);

return statearr_35780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33880__auto__);
});})(c__33878__auto___35782,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1535318452221
