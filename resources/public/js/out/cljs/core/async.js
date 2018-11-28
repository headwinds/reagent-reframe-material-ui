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
var G__32221 = arguments.length;
switch (G__32221) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32222 = (function (f,blockable,meta32223){
this.f = f;
this.blockable = blockable;
this.meta32223 = meta32223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32224,meta32223__$1){
var self__ = this;
var _32224__$1 = this;
return (new cljs.core.async.t_cljs$core$async32222(self__.f,self__.blockable,meta32223__$1));
});

cljs.core.async.t_cljs$core$async32222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32224){
var self__ = this;
var _32224__$1 = this;
return self__.meta32223;
});

cljs.core.async.t_cljs$core$async32222.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32222.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32223","meta32223",1317267519,null)], null);
});

cljs.core.async.t_cljs$core$async32222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32222";

cljs.core.async.t_cljs$core$async32222.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32222");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32222.
 */
cljs.core.async.__GT_t_cljs$core$async32222 = (function cljs$core$async$__GT_t_cljs$core$async32222(f__$1,blockable__$1,meta32223){
return (new cljs.core.async.t_cljs$core$async32222(f__$1,blockable__$1,meta32223));
});

}

return (new cljs.core.async.t_cljs$core$async32222(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32228 = arguments.length;
switch (G__32228) {
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
var G__32231 = arguments.length;
switch (G__32231) {
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
var G__32234 = arguments.length;
switch (G__32234) {
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
var val_32236 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32236);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32236,ret){
return (function (){
return fn1.call(null,val_32236);
});})(val_32236,ret))
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
var G__32238 = arguments.length;
switch (G__32238) {
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
var n__4408__auto___32240 = n;
var x_32241 = (0);
while(true){
if((x_32241 < n__4408__auto___32240)){
(a[x_32241] = (0));

var G__32242 = (x_32241 + (1));
x_32241 = G__32242;
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

var G__32243 = (i + (1));
i = G__32243;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32244 = (function (flag,meta32245){
this.flag = flag;
this.meta32245 = meta32245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32246,meta32245__$1){
var self__ = this;
var _32246__$1 = this;
return (new cljs.core.async.t_cljs$core$async32244(self__.flag,meta32245__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32246){
var self__ = this;
var _32246__$1 = this;
return self__.meta32245;
});})(flag))
;

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32244.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32245","meta32245",-1286814908,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32244";

cljs.core.async.t_cljs$core$async32244.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32244");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32244.
 */
cljs.core.async.__GT_t_cljs$core$async32244 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32244(flag__$1,meta32245){
return (new cljs.core.async.t_cljs$core$async32244(flag__$1,meta32245));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32244(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32247 = (function (flag,cb,meta32248){
this.flag = flag;
this.cb = cb;
this.meta32248 = meta32248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32249,meta32248__$1){
var self__ = this;
var _32249__$1 = this;
return (new cljs.core.async.t_cljs$core$async32247(self__.flag,self__.cb,meta32248__$1));
});

cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32249){
var self__ = this;
var _32249__$1 = this;
return self__.meta32248;
});

cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32248","meta32248",-1983991994,null)], null);
});

cljs.core.async.t_cljs$core$async32247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32247";

cljs.core.async.t_cljs$core$async32247.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32247");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32247.
 */
cljs.core.async.__GT_t_cljs$core$async32247 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32247(flag__$1,cb__$1,meta32248){
return (new cljs.core.async.t_cljs$core$async32247(flag__$1,cb__$1,meta32248));
});

}

return (new cljs.core.async.t_cljs$core$async32247(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32250_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32250_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32251_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32251_SHARP_,port], null));
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
var G__32252 = (i + (1));
i = G__32252;
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
var len__4531__auto___32258 = arguments.length;
var i__4532__auto___32259 = (0);
while(true){
if((i__4532__auto___32259 < len__4531__auto___32258)){
args__4534__auto__.push((arguments[i__4532__auto___32259]));

var G__32260 = (i__4532__auto___32259 + (1));
i__4532__auto___32259 = G__32260;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32255){
var map__32256 = p__32255;
var map__32256__$1 = ((((!((map__32256 == null)))?(((((map__32256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32256):map__32256);
var opts = map__32256__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32253){
var G__32254 = cljs.core.first.call(null,seq32253);
var seq32253__$1 = cljs.core.next.call(null,seq32253);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32254,seq32253__$1);
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
var G__32262 = arguments.length;
switch (G__32262) {
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
var c__26259__auto___32308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___32308){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___32308){
return (function (state_32286){
var state_val_32287 = (state_32286[(1)]);
if((state_val_32287 === (7))){
var inst_32282 = (state_32286[(2)]);
var state_32286__$1 = state_32286;
var statearr_32288_32309 = state_32286__$1;
(statearr_32288_32309[(2)] = inst_32282);

(statearr_32288_32309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (1))){
var state_32286__$1 = state_32286;
var statearr_32289_32310 = state_32286__$1;
(statearr_32289_32310[(2)] = null);

(statearr_32289_32310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (4))){
var inst_32265 = (state_32286[(7)]);
var inst_32265__$1 = (state_32286[(2)]);
var inst_32266 = (inst_32265__$1 == null);
var state_32286__$1 = (function (){var statearr_32290 = state_32286;
(statearr_32290[(7)] = inst_32265__$1);

return statearr_32290;
})();
if(cljs.core.truth_(inst_32266)){
var statearr_32291_32311 = state_32286__$1;
(statearr_32291_32311[(1)] = (5));

} else {
var statearr_32292_32312 = state_32286__$1;
(statearr_32292_32312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (13))){
var state_32286__$1 = state_32286;
var statearr_32293_32313 = state_32286__$1;
(statearr_32293_32313[(2)] = null);

(statearr_32293_32313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (6))){
var inst_32265 = (state_32286[(7)]);
var state_32286__$1 = state_32286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32286__$1,(11),to,inst_32265);
} else {
if((state_val_32287 === (3))){
var inst_32284 = (state_32286[(2)]);
var state_32286__$1 = state_32286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32286__$1,inst_32284);
} else {
if((state_val_32287 === (12))){
var state_32286__$1 = state_32286;
var statearr_32294_32314 = state_32286__$1;
(statearr_32294_32314[(2)] = null);

(statearr_32294_32314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (2))){
var state_32286__$1 = state_32286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32286__$1,(4),from);
} else {
if((state_val_32287 === (11))){
var inst_32275 = (state_32286[(2)]);
var state_32286__$1 = state_32286;
if(cljs.core.truth_(inst_32275)){
var statearr_32295_32315 = state_32286__$1;
(statearr_32295_32315[(1)] = (12));

} else {
var statearr_32296_32316 = state_32286__$1;
(statearr_32296_32316[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (9))){
var state_32286__$1 = state_32286;
var statearr_32297_32317 = state_32286__$1;
(statearr_32297_32317[(2)] = null);

(statearr_32297_32317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (5))){
var state_32286__$1 = state_32286;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32298_32318 = state_32286__$1;
(statearr_32298_32318[(1)] = (8));

} else {
var statearr_32299_32319 = state_32286__$1;
(statearr_32299_32319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (14))){
var inst_32280 = (state_32286[(2)]);
var state_32286__$1 = state_32286;
var statearr_32300_32320 = state_32286__$1;
(statearr_32300_32320[(2)] = inst_32280);

(statearr_32300_32320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (10))){
var inst_32272 = (state_32286[(2)]);
var state_32286__$1 = state_32286;
var statearr_32301_32321 = state_32286__$1;
(statearr_32301_32321[(2)] = inst_32272);

(statearr_32301_32321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (8))){
var inst_32269 = cljs.core.async.close_BANG_.call(null,to);
var state_32286__$1 = state_32286;
var statearr_32302_32322 = state_32286__$1;
(statearr_32302_32322[(2)] = inst_32269);

(statearr_32302_32322[(1)] = (10));


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
});})(c__26259__auto___32308))
;
return ((function (switch__26100__auto__,c__26259__auto___32308){
return (function() {
var cljs$core$async$state_machine__26101__auto__ = null;
var cljs$core$async$state_machine__26101__auto____0 = (function (){
var statearr_32303 = [null,null,null,null,null,null,null,null];
(statearr_32303[(0)] = cljs$core$async$state_machine__26101__auto__);

(statearr_32303[(1)] = (1));

return statearr_32303;
});
var cljs$core$async$state_machine__26101__auto____1 = (function (state_32286){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_32286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e32304){if((e32304 instanceof Object)){
var ex__26104__auto__ = e32304;
var statearr_32305_32323 = state_32286;
(statearr_32305_32323[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32324 = state_32286;
state_32286 = G__32324;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$state_machine__26101__auto__ = function(state_32286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26101__auto____1.call(this,state_32286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26101__auto____0;
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26101__auto____1;
return cljs$core$async$state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___32308))
})();
var state__26261__auto__ = (function (){var statearr_32306 = f__26260__auto__.call(null);
(statearr_32306[(6)] = c__26259__auto___32308);

return statearr_32306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___32308))
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
return (function (p__32325){
var vec__32326 = p__32325;
var v = cljs.core.nth.call(null,vec__32326,(0),null);
var p = cljs.core.nth.call(null,vec__32326,(1),null);
var job = vec__32326;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26259__auto___32497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___32497,res,vec__32326,v,p,job,jobs,results){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___32497,res,vec__32326,v,p,job,jobs,results){
return (function (state_32333){
var state_val_32334 = (state_32333[(1)]);
if((state_val_32334 === (1))){
var state_32333__$1 = state_32333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32333__$1,(2),res,v);
} else {
if((state_val_32334 === (2))){
var inst_32330 = (state_32333[(2)]);
var inst_32331 = cljs.core.async.close_BANG_.call(null,res);
var state_32333__$1 = (function (){var statearr_32335 = state_32333;
(statearr_32335[(7)] = inst_32330);

return statearr_32335;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32333__$1,inst_32331);
} else {
return null;
}
}
});})(c__26259__auto___32497,res,vec__32326,v,p,job,jobs,results))
;
return ((function (switch__26100__auto__,c__26259__auto___32497,res,vec__32326,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0 = (function (){
var statearr_32336 = [null,null,null,null,null,null,null,null];
(statearr_32336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__);

(statearr_32336[(1)] = (1));

return statearr_32336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1 = (function (state_32333){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_32333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e32337){if((e32337 instanceof Object)){
var ex__26104__auto__ = e32337;
var statearr_32338_32498 = state_32333;
(statearr_32338_32498[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32499 = state_32333;
state_32333 = G__32499;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__ = function(state_32333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1.call(this,state_32333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___32497,res,vec__32326,v,p,job,jobs,results))
})();
var state__26261__auto__ = (function (){var statearr_32339 = f__26260__auto__.call(null);
(statearr_32339[(6)] = c__26259__auto___32497);

return statearr_32339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___32497,res,vec__32326,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32340){
var vec__32341 = p__32340;
var v = cljs.core.nth.call(null,vec__32341,(0),null);
var p = cljs.core.nth.call(null,vec__32341,(1),null);
var job = vec__32341;
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
var n__4408__auto___32500 = n;
var __32501 = (0);
while(true){
if((__32501 < n__4408__auto___32500)){
var G__32344_32502 = type;
var G__32344_32503__$1 = (((G__32344_32502 instanceof cljs.core.Keyword))?G__32344_32502.fqn:null);
switch (G__32344_32503__$1) {
case "compute":
var c__26259__auto___32505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32501,c__26259__auto___32505,G__32344_32502,G__32344_32503__$1,n__4408__auto___32500,jobs,results,process,async){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (__32501,c__26259__auto___32505,G__32344_32502,G__32344_32503__$1,n__4408__auto___32500,jobs,results,process,async){
return (function (state_32357){
var state_val_32358 = (state_32357[(1)]);
if((state_val_32358 === (1))){
var state_32357__$1 = state_32357;
var statearr_32359_32506 = state_32357__$1;
(statearr_32359_32506[(2)] = null);

(statearr_32359_32506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (2))){
var state_32357__$1 = state_32357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32357__$1,(4),jobs);
} else {
if((state_val_32358 === (3))){
var inst_32355 = (state_32357[(2)]);
var state_32357__$1 = state_32357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32357__$1,inst_32355);
} else {
if((state_val_32358 === (4))){
var inst_32347 = (state_32357[(2)]);
var inst_32348 = process.call(null,inst_32347);
var state_32357__$1 = state_32357;
if(cljs.core.truth_(inst_32348)){
var statearr_32360_32507 = state_32357__$1;
(statearr_32360_32507[(1)] = (5));

} else {
var statearr_32361_32508 = state_32357__$1;
(statearr_32361_32508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (5))){
var state_32357__$1 = state_32357;
var statearr_32362_32509 = state_32357__$1;
(statearr_32362_32509[(2)] = null);

(statearr_32362_32509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (6))){
var state_32357__$1 = state_32357;
var statearr_32363_32510 = state_32357__$1;
(statearr_32363_32510[(2)] = null);

(statearr_32363_32510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (7))){
var inst_32353 = (state_32357[(2)]);
var state_32357__$1 = state_32357;
var statearr_32364_32511 = state_32357__$1;
(statearr_32364_32511[(2)] = inst_32353);

(statearr_32364_32511[(1)] = (3));


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
});})(__32501,c__26259__auto___32505,G__32344_32502,G__32344_32503__$1,n__4408__auto___32500,jobs,results,process,async))
;
return ((function (__32501,switch__26100__auto__,c__26259__auto___32505,G__32344_32502,G__32344_32503__$1,n__4408__auto___32500,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0 = (function (){
var statearr_32365 = [null,null,null,null,null,null,null];
(statearr_32365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__);

(statearr_32365[(1)] = (1));

return statearr_32365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1 = (function (state_32357){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_32357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e32366){if((e32366 instanceof Object)){
var ex__26104__auto__ = e32366;
var statearr_32367_32512 = state_32357;
(statearr_32367_32512[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32513 = state_32357;
state_32357 = G__32513;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__ = function(state_32357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1.call(this,state_32357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__;
})()
;})(__32501,switch__26100__auto__,c__26259__auto___32505,G__32344_32502,G__32344_32503__$1,n__4408__auto___32500,jobs,results,process,async))
})();
var state__26261__auto__ = (function (){var statearr_32368 = f__26260__auto__.call(null);
(statearr_32368[(6)] = c__26259__auto___32505);

return statearr_32368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(__32501,c__26259__auto___32505,G__32344_32502,G__32344_32503__$1,n__4408__auto___32500,jobs,results,process,async))
);


break;
case "async":
var c__26259__auto___32514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32501,c__26259__auto___32514,G__32344_32502,G__32344_32503__$1,n__4408__auto___32500,jobs,results,process,async){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (__32501,c__26259__auto___32514,G__32344_32502,G__32344_32503__$1,n__4408__auto___32500,jobs,results,process,async){
return (function (state_32381){
var state_val_32382 = (state_32381[(1)]);
if((state_val_32382 === (1))){
var state_32381__$1 = state_32381;
var statearr_32383_32515 = state_32381__$1;
(statearr_32383_32515[(2)] = null);

(statearr_32383_32515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (2))){
var state_32381__$1 = state_32381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32381__$1,(4),jobs);
} else {
if((state_val_32382 === (3))){
var inst_32379 = (state_32381[(2)]);
var state_32381__$1 = state_32381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32381__$1,inst_32379);
} else {
if((state_val_32382 === (4))){
var inst_32371 = (state_32381[(2)]);
var inst_32372 = async.call(null,inst_32371);
var state_32381__$1 = state_32381;
if(cljs.core.truth_(inst_32372)){
var statearr_32384_32516 = state_32381__$1;
(statearr_32384_32516[(1)] = (5));

} else {
var statearr_32385_32517 = state_32381__$1;
(statearr_32385_32517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (5))){
var state_32381__$1 = state_32381;
var statearr_32386_32518 = state_32381__$1;
(statearr_32386_32518[(2)] = null);

(statearr_32386_32518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (6))){
var state_32381__$1 = state_32381;
var statearr_32387_32519 = state_32381__$1;
(statearr_32387_32519[(2)] = null);

(statearr_32387_32519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (7))){
var inst_32377 = (state_32381[(2)]);
var state_32381__$1 = state_32381;
var statearr_32388_32520 = state_32381__$1;
(statearr_32388_32520[(2)] = inst_32377);

(statearr_32388_32520[(1)] = (3));


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
});})(__32501,c__26259__auto___32514,G__32344_32502,G__32344_32503__$1,n__4408__auto___32500,jobs,results,process,async))
;
return ((function (__32501,switch__26100__auto__,c__26259__auto___32514,G__32344_32502,G__32344_32503__$1,n__4408__auto___32500,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0 = (function (){
var statearr_32389 = [null,null,null,null,null,null,null];
(statearr_32389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__);

(statearr_32389[(1)] = (1));

return statearr_32389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1 = (function (state_32381){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_32381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e32390){if((e32390 instanceof Object)){
var ex__26104__auto__ = e32390;
var statearr_32391_32521 = state_32381;
(statearr_32391_32521[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32522 = state_32381;
state_32381 = G__32522;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__ = function(state_32381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1.call(this,state_32381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__;
})()
;})(__32501,switch__26100__auto__,c__26259__auto___32514,G__32344_32502,G__32344_32503__$1,n__4408__auto___32500,jobs,results,process,async))
})();
var state__26261__auto__ = (function (){var statearr_32392 = f__26260__auto__.call(null);
(statearr_32392[(6)] = c__26259__auto___32514);

return statearr_32392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(__32501,c__26259__auto___32514,G__32344_32502,G__32344_32503__$1,n__4408__auto___32500,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32344_32503__$1)].join('')));

}

var G__32523 = (__32501 + (1));
__32501 = G__32523;
continue;
} else {
}
break;
}

var c__26259__auto___32524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___32524,jobs,results,process,async){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___32524,jobs,results,process,async){
return (function (state_32414){
var state_val_32415 = (state_32414[(1)]);
if((state_val_32415 === (1))){
var state_32414__$1 = state_32414;
var statearr_32416_32525 = state_32414__$1;
(statearr_32416_32525[(2)] = null);

(statearr_32416_32525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (2))){
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32414__$1,(4),from);
} else {
if((state_val_32415 === (3))){
var inst_32412 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32414__$1,inst_32412);
} else {
if((state_val_32415 === (4))){
var inst_32395 = (state_32414[(7)]);
var inst_32395__$1 = (state_32414[(2)]);
var inst_32396 = (inst_32395__$1 == null);
var state_32414__$1 = (function (){var statearr_32417 = state_32414;
(statearr_32417[(7)] = inst_32395__$1);

return statearr_32417;
})();
if(cljs.core.truth_(inst_32396)){
var statearr_32418_32526 = state_32414__$1;
(statearr_32418_32526[(1)] = (5));

} else {
var statearr_32419_32527 = state_32414__$1;
(statearr_32419_32527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (5))){
var inst_32398 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32414__$1 = state_32414;
var statearr_32420_32528 = state_32414__$1;
(statearr_32420_32528[(2)] = inst_32398);

(statearr_32420_32528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (6))){
var inst_32400 = (state_32414[(8)]);
var inst_32395 = (state_32414[(7)]);
var inst_32400__$1 = cljs.core.async.chan.call(null,(1));
var inst_32401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32402 = [inst_32395,inst_32400__$1];
var inst_32403 = (new cljs.core.PersistentVector(null,2,(5),inst_32401,inst_32402,null));
var state_32414__$1 = (function (){var statearr_32421 = state_32414;
(statearr_32421[(8)] = inst_32400__$1);

return statearr_32421;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32414__$1,(8),jobs,inst_32403);
} else {
if((state_val_32415 === (7))){
var inst_32410 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32422_32529 = state_32414__$1;
(statearr_32422_32529[(2)] = inst_32410);

(statearr_32422_32529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (8))){
var inst_32400 = (state_32414[(8)]);
var inst_32405 = (state_32414[(2)]);
var state_32414__$1 = (function (){var statearr_32423 = state_32414;
(statearr_32423[(9)] = inst_32405);

return statearr_32423;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32414__$1,(9),results,inst_32400);
} else {
if((state_val_32415 === (9))){
var inst_32407 = (state_32414[(2)]);
var state_32414__$1 = (function (){var statearr_32424 = state_32414;
(statearr_32424[(10)] = inst_32407);

return statearr_32424;
})();
var statearr_32425_32530 = state_32414__$1;
(statearr_32425_32530[(2)] = null);

(statearr_32425_32530[(1)] = (2));


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
});})(c__26259__auto___32524,jobs,results,process,async))
;
return ((function (switch__26100__auto__,c__26259__auto___32524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0 = (function (){
var statearr_32426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__);

(statearr_32426[(1)] = (1));

return statearr_32426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1 = (function (state_32414){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_32414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e32427){if((e32427 instanceof Object)){
var ex__26104__auto__ = e32427;
var statearr_32428_32531 = state_32414;
(statearr_32428_32531[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32532 = state_32414;
state_32414 = G__32532;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__ = function(state_32414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1.call(this,state_32414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___32524,jobs,results,process,async))
})();
var state__26261__auto__ = (function (){var statearr_32429 = f__26260__auto__.call(null);
(statearr_32429[(6)] = c__26259__auto___32524);

return statearr_32429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___32524,jobs,results,process,async))
);


var c__26259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto__,jobs,results,process,async){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto__,jobs,results,process,async){
return (function (state_32467){
var state_val_32468 = (state_32467[(1)]);
if((state_val_32468 === (7))){
var inst_32463 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
var statearr_32469_32533 = state_32467__$1;
(statearr_32469_32533[(2)] = inst_32463);

(statearr_32469_32533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (20))){
var state_32467__$1 = state_32467;
var statearr_32470_32534 = state_32467__$1;
(statearr_32470_32534[(2)] = null);

(statearr_32470_32534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (1))){
var state_32467__$1 = state_32467;
var statearr_32471_32535 = state_32467__$1;
(statearr_32471_32535[(2)] = null);

(statearr_32471_32535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (4))){
var inst_32432 = (state_32467[(7)]);
var inst_32432__$1 = (state_32467[(2)]);
var inst_32433 = (inst_32432__$1 == null);
var state_32467__$1 = (function (){var statearr_32472 = state_32467;
(statearr_32472[(7)] = inst_32432__$1);

return statearr_32472;
})();
if(cljs.core.truth_(inst_32433)){
var statearr_32473_32536 = state_32467__$1;
(statearr_32473_32536[(1)] = (5));

} else {
var statearr_32474_32537 = state_32467__$1;
(statearr_32474_32537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (15))){
var inst_32445 = (state_32467[(8)]);
var state_32467__$1 = state_32467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32467__$1,(18),to,inst_32445);
} else {
if((state_val_32468 === (21))){
var inst_32458 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
var statearr_32475_32538 = state_32467__$1;
(statearr_32475_32538[(2)] = inst_32458);

(statearr_32475_32538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (13))){
var inst_32460 = (state_32467[(2)]);
var state_32467__$1 = (function (){var statearr_32476 = state_32467;
(statearr_32476[(9)] = inst_32460);

return statearr_32476;
})();
var statearr_32477_32539 = state_32467__$1;
(statearr_32477_32539[(2)] = null);

(statearr_32477_32539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (6))){
var inst_32432 = (state_32467[(7)]);
var state_32467__$1 = state_32467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32467__$1,(11),inst_32432);
} else {
if((state_val_32468 === (17))){
var inst_32453 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
if(cljs.core.truth_(inst_32453)){
var statearr_32478_32540 = state_32467__$1;
(statearr_32478_32540[(1)] = (19));

} else {
var statearr_32479_32541 = state_32467__$1;
(statearr_32479_32541[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (3))){
var inst_32465 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32467__$1,inst_32465);
} else {
if((state_val_32468 === (12))){
var inst_32442 = (state_32467[(10)]);
var state_32467__$1 = state_32467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32467__$1,(14),inst_32442);
} else {
if((state_val_32468 === (2))){
var state_32467__$1 = state_32467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32467__$1,(4),results);
} else {
if((state_val_32468 === (19))){
var state_32467__$1 = state_32467;
var statearr_32480_32542 = state_32467__$1;
(statearr_32480_32542[(2)] = null);

(statearr_32480_32542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (11))){
var inst_32442 = (state_32467[(2)]);
var state_32467__$1 = (function (){var statearr_32481 = state_32467;
(statearr_32481[(10)] = inst_32442);

return statearr_32481;
})();
var statearr_32482_32543 = state_32467__$1;
(statearr_32482_32543[(2)] = null);

(statearr_32482_32543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (9))){
var state_32467__$1 = state_32467;
var statearr_32483_32544 = state_32467__$1;
(statearr_32483_32544[(2)] = null);

(statearr_32483_32544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (5))){
var state_32467__$1 = state_32467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32484_32545 = state_32467__$1;
(statearr_32484_32545[(1)] = (8));

} else {
var statearr_32485_32546 = state_32467__$1;
(statearr_32485_32546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (14))){
var inst_32447 = (state_32467[(11)]);
var inst_32445 = (state_32467[(8)]);
var inst_32445__$1 = (state_32467[(2)]);
var inst_32446 = (inst_32445__$1 == null);
var inst_32447__$1 = cljs.core.not.call(null,inst_32446);
var state_32467__$1 = (function (){var statearr_32486 = state_32467;
(statearr_32486[(11)] = inst_32447__$1);

(statearr_32486[(8)] = inst_32445__$1);

return statearr_32486;
})();
if(inst_32447__$1){
var statearr_32487_32547 = state_32467__$1;
(statearr_32487_32547[(1)] = (15));

} else {
var statearr_32488_32548 = state_32467__$1;
(statearr_32488_32548[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (16))){
var inst_32447 = (state_32467[(11)]);
var state_32467__$1 = state_32467;
var statearr_32489_32549 = state_32467__$1;
(statearr_32489_32549[(2)] = inst_32447);

(statearr_32489_32549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (10))){
var inst_32439 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
var statearr_32490_32550 = state_32467__$1;
(statearr_32490_32550[(2)] = inst_32439);

(statearr_32490_32550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (18))){
var inst_32450 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
var statearr_32491_32551 = state_32467__$1;
(statearr_32491_32551[(2)] = inst_32450);

(statearr_32491_32551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (8))){
var inst_32436 = cljs.core.async.close_BANG_.call(null,to);
var state_32467__$1 = state_32467;
var statearr_32492_32552 = state_32467__$1;
(statearr_32492_32552[(2)] = inst_32436);

(statearr_32492_32552[(1)] = (10));


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
});})(c__26259__auto__,jobs,results,process,async))
;
return ((function (switch__26100__auto__,c__26259__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0 = (function (){
var statearr_32493 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__);

(statearr_32493[(1)] = (1));

return statearr_32493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1 = (function (state_32467){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_32467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e32494){if((e32494 instanceof Object)){
var ex__26104__auto__ = e32494;
var statearr_32495_32553 = state_32467;
(statearr_32495_32553[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32554 = state_32467;
state_32467 = G__32554;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__ = function(state_32467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1.call(this,state_32467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto__,jobs,results,process,async))
})();
var state__26261__auto__ = (function (){var statearr_32496 = f__26260__auto__.call(null);
(statearr_32496[(6)] = c__26259__auto__);

return statearr_32496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto__,jobs,results,process,async))
);

return c__26259__auto__;
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
var G__32556 = arguments.length;
switch (G__32556) {
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
var G__32559 = arguments.length;
switch (G__32559) {
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
var G__32562 = arguments.length;
switch (G__32562) {
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
var c__26259__auto___32611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___32611,tc,fc){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___32611,tc,fc){
return (function (state_32588){
var state_val_32589 = (state_32588[(1)]);
if((state_val_32589 === (7))){
var inst_32584 = (state_32588[(2)]);
var state_32588__$1 = state_32588;
var statearr_32590_32612 = state_32588__$1;
(statearr_32590_32612[(2)] = inst_32584);

(statearr_32590_32612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32589 === (1))){
var state_32588__$1 = state_32588;
var statearr_32591_32613 = state_32588__$1;
(statearr_32591_32613[(2)] = null);

(statearr_32591_32613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32589 === (4))){
var inst_32565 = (state_32588[(7)]);
var inst_32565__$1 = (state_32588[(2)]);
var inst_32566 = (inst_32565__$1 == null);
var state_32588__$1 = (function (){var statearr_32592 = state_32588;
(statearr_32592[(7)] = inst_32565__$1);

return statearr_32592;
})();
if(cljs.core.truth_(inst_32566)){
var statearr_32593_32614 = state_32588__$1;
(statearr_32593_32614[(1)] = (5));

} else {
var statearr_32594_32615 = state_32588__$1;
(statearr_32594_32615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32589 === (13))){
var state_32588__$1 = state_32588;
var statearr_32595_32616 = state_32588__$1;
(statearr_32595_32616[(2)] = null);

(statearr_32595_32616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32589 === (6))){
var inst_32565 = (state_32588[(7)]);
var inst_32571 = p.call(null,inst_32565);
var state_32588__$1 = state_32588;
if(cljs.core.truth_(inst_32571)){
var statearr_32596_32617 = state_32588__$1;
(statearr_32596_32617[(1)] = (9));

} else {
var statearr_32597_32618 = state_32588__$1;
(statearr_32597_32618[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32589 === (3))){
var inst_32586 = (state_32588[(2)]);
var state_32588__$1 = state_32588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32588__$1,inst_32586);
} else {
if((state_val_32589 === (12))){
var state_32588__$1 = state_32588;
var statearr_32598_32619 = state_32588__$1;
(statearr_32598_32619[(2)] = null);

(statearr_32598_32619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32589 === (2))){
var state_32588__$1 = state_32588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32588__$1,(4),ch);
} else {
if((state_val_32589 === (11))){
var inst_32565 = (state_32588[(7)]);
var inst_32575 = (state_32588[(2)]);
var state_32588__$1 = state_32588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32588__$1,(8),inst_32575,inst_32565);
} else {
if((state_val_32589 === (9))){
var state_32588__$1 = state_32588;
var statearr_32599_32620 = state_32588__$1;
(statearr_32599_32620[(2)] = tc);

(statearr_32599_32620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32589 === (5))){
var inst_32568 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32569 = cljs.core.async.close_BANG_.call(null,fc);
var state_32588__$1 = (function (){var statearr_32600 = state_32588;
(statearr_32600[(8)] = inst_32568);

return statearr_32600;
})();
var statearr_32601_32621 = state_32588__$1;
(statearr_32601_32621[(2)] = inst_32569);

(statearr_32601_32621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32589 === (14))){
var inst_32582 = (state_32588[(2)]);
var state_32588__$1 = state_32588;
var statearr_32602_32622 = state_32588__$1;
(statearr_32602_32622[(2)] = inst_32582);

(statearr_32602_32622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32589 === (10))){
var state_32588__$1 = state_32588;
var statearr_32603_32623 = state_32588__$1;
(statearr_32603_32623[(2)] = fc);

(statearr_32603_32623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32589 === (8))){
var inst_32577 = (state_32588[(2)]);
var state_32588__$1 = state_32588;
if(cljs.core.truth_(inst_32577)){
var statearr_32604_32624 = state_32588__$1;
(statearr_32604_32624[(1)] = (12));

} else {
var statearr_32605_32625 = state_32588__$1;
(statearr_32605_32625[(1)] = (13));

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
});})(c__26259__auto___32611,tc,fc))
;
return ((function (switch__26100__auto__,c__26259__auto___32611,tc,fc){
return (function() {
var cljs$core$async$state_machine__26101__auto__ = null;
var cljs$core$async$state_machine__26101__auto____0 = (function (){
var statearr_32606 = [null,null,null,null,null,null,null,null,null];
(statearr_32606[(0)] = cljs$core$async$state_machine__26101__auto__);

(statearr_32606[(1)] = (1));

return statearr_32606;
});
var cljs$core$async$state_machine__26101__auto____1 = (function (state_32588){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_32588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e32607){if((e32607 instanceof Object)){
var ex__26104__auto__ = e32607;
var statearr_32608_32626 = state_32588;
(statearr_32608_32626[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32627 = state_32588;
state_32588 = G__32627;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$state_machine__26101__auto__ = function(state_32588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26101__auto____1.call(this,state_32588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26101__auto____0;
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26101__auto____1;
return cljs$core$async$state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___32611,tc,fc))
})();
var state__26261__auto__ = (function (){var statearr_32609 = f__26260__auto__.call(null);
(statearr_32609[(6)] = c__26259__auto___32611);

return statearr_32609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___32611,tc,fc))
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
var c__26259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto__){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto__){
return (function (state_32648){
var state_val_32649 = (state_32648[(1)]);
if((state_val_32649 === (7))){
var inst_32644 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
var statearr_32650_32668 = state_32648__$1;
(statearr_32650_32668[(2)] = inst_32644);

(statearr_32650_32668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (1))){
var inst_32628 = init;
var state_32648__$1 = (function (){var statearr_32651 = state_32648;
(statearr_32651[(7)] = inst_32628);

return statearr_32651;
})();
var statearr_32652_32669 = state_32648__$1;
(statearr_32652_32669[(2)] = null);

(statearr_32652_32669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (4))){
var inst_32631 = (state_32648[(8)]);
var inst_32631__$1 = (state_32648[(2)]);
var inst_32632 = (inst_32631__$1 == null);
var state_32648__$1 = (function (){var statearr_32653 = state_32648;
(statearr_32653[(8)] = inst_32631__$1);

return statearr_32653;
})();
if(cljs.core.truth_(inst_32632)){
var statearr_32654_32670 = state_32648__$1;
(statearr_32654_32670[(1)] = (5));

} else {
var statearr_32655_32671 = state_32648__$1;
(statearr_32655_32671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (6))){
var inst_32631 = (state_32648[(8)]);
var inst_32635 = (state_32648[(9)]);
var inst_32628 = (state_32648[(7)]);
var inst_32635__$1 = f.call(null,inst_32628,inst_32631);
var inst_32636 = cljs.core.reduced_QMARK_.call(null,inst_32635__$1);
var state_32648__$1 = (function (){var statearr_32656 = state_32648;
(statearr_32656[(9)] = inst_32635__$1);

return statearr_32656;
})();
if(inst_32636){
var statearr_32657_32672 = state_32648__$1;
(statearr_32657_32672[(1)] = (8));

} else {
var statearr_32658_32673 = state_32648__$1;
(statearr_32658_32673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (3))){
var inst_32646 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32648__$1,inst_32646);
} else {
if((state_val_32649 === (2))){
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32648__$1,(4),ch);
} else {
if((state_val_32649 === (9))){
var inst_32635 = (state_32648[(9)]);
var inst_32628 = inst_32635;
var state_32648__$1 = (function (){var statearr_32659 = state_32648;
(statearr_32659[(7)] = inst_32628);

return statearr_32659;
})();
var statearr_32660_32674 = state_32648__$1;
(statearr_32660_32674[(2)] = null);

(statearr_32660_32674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (5))){
var inst_32628 = (state_32648[(7)]);
var state_32648__$1 = state_32648;
var statearr_32661_32675 = state_32648__$1;
(statearr_32661_32675[(2)] = inst_32628);

(statearr_32661_32675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (10))){
var inst_32642 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
var statearr_32662_32676 = state_32648__$1;
(statearr_32662_32676[(2)] = inst_32642);

(statearr_32662_32676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (8))){
var inst_32635 = (state_32648[(9)]);
var inst_32638 = cljs.core.deref.call(null,inst_32635);
var state_32648__$1 = state_32648;
var statearr_32663_32677 = state_32648__$1;
(statearr_32663_32677[(2)] = inst_32638);

(statearr_32663_32677[(1)] = (10));


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
});})(c__26259__auto__))
;
return ((function (switch__26100__auto__,c__26259__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26101__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26101__auto____0 = (function (){
var statearr_32664 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32664[(0)] = cljs$core$async$reduce_$_state_machine__26101__auto__);

(statearr_32664[(1)] = (1));

return statearr_32664;
});
var cljs$core$async$reduce_$_state_machine__26101__auto____1 = (function (state_32648){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_32648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e32665){if((e32665 instanceof Object)){
var ex__26104__auto__ = e32665;
var statearr_32666_32678 = state_32648;
(statearr_32666_32678[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32679 = state_32648;
state_32648 = G__32679;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26101__auto__ = function(state_32648){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26101__auto____1.call(this,state_32648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26101__auto____0;
cljs$core$async$reduce_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26101__auto____1;
return cljs$core$async$reduce_$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto__))
})();
var state__26261__auto__ = (function (){var statearr_32667 = f__26260__auto__.call(null);
(statearr_32667[(6)] = c__26259__auto__);

return statearr_32667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto__))
);

return c__26259__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto__,f__$1){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto__,f__$1){
return (function (state_32685){
var state_val_32686 = (state_32685[(1)]);
if((state_val_32686 === (1))){
var inst_32680 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32685__$1 = state_32685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32685__$1,(2),inst_32680);
} else {
if((state_val_32686 === (2))){
var inst_32682 = (state_32685[(2)]);
var inst_32683 = f__$1.call(null,inst_32682);
var state_32685__$1 = state_32685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32685__$1,inst_32683);
} else {
return null;
}
}
});})(c__26259__auto__,f__$1))
;
return ((function (switch__26100__auto__,c__26259__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26101__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26101__auto____0 = (function (){
var statearr_32687 = [null,null,null,null,null,null,null];
(statearr_32687[(0)] = cljs$core$async$transduce_$_state_machine__26101__auto__);

(statearr_32687[(1)] = (1));

return statearr_32687;
});
var cljs$core$async$transduce_$_state_machine__26101__auto____1 = (function (state_32685){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_32685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e32688){if((e32688 instanceof Object)){
var ex__26104__auto__ = e32688;
var statearr_32689_32691 = state_32685;
(statearr_32689_32691[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32692 = state_32685;
state_32685 = G__32692;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26101__auto__ = function(state_32685){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26101__auto____1.call(this,state_32685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26101__auto____0;
cljs$core$async$transduce_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26101__auto____1;
return cljs$core$async$transduce_$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto__,f__$1))
})();
var state__26261__auto__ = (function (){var statearr_32690 = f__26260__auto__.call(null);
(statearr_32690[(6)] = c__26259__auto__);

return statearr_32690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto__,f__$1))
);

return c__26259__auto__;
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
var G__32694 = arguments.length;
switch (G__32694) {
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
var c__26259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto__){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto__){
return (function (state_32719){
var state_val_32720 = (state_32719[(1)]);
if((state_val_32720 === (7))){
var inst_32701 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32721_32742 = state_32719__$1;
(statearr_32721_32742[(2)] = inst_32701);

(statearr_32721_32742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (1))){
var inst_32695 = cljs.core.seq.call(null,coll);
var inst_32696 = inst_32695;
var state_32719__$1 = (function (){var statearr_32722 = state_32719;
(statearr_32722[(7)] = inst_32696);

return statearr_32722;
})();
var statearr_32723_32743 = state_32719__$1;
(statearr_32723_32743[(2)] = null);

(statearr_32723_32743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (4))){
var inst_32696 = (state_32719[(7)]);
var inst_32699 = cljs.core.first.call(null,inst_32696);
var state_32719__$1 = state_32719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32719__$1,(7),ch,inst_32699);
} else {
if((state_val_32720 === (13))){
var inst_32713 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32724_32744 = state_32719__$1;
(statearr_32724_32744[(2)] = inst_32713);

(statearr_32724_32744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (6))){
var inst_32704 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
if(cljs.core.truth_(inst_32704)){
var statearr_32725_32745 = state_32719__$1;
(statearr_32725_32745[(1)] = (8));

} else {
var statearr_32726_32746 = state_32719__$1;
(statearr_32726_32746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (3))){
var inst_32717 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32719__$1,inst_32717);
} else {
if((state_val_32720 === (12))){
var state_32719__$1 = state_32719;
var statearr_32727_32747 = state_32719__$1;
(statearr_32727_32747[(2)] = null);

(statearr_32727_32747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (2))){
var inst_32696 = (state_32719[(7)]);
var state_32719__$1 = state_32719;
if(cljs.core.truth_(inst_32696)){
var statearr_32728_32748 = state_32719__$1;
(statearr_32728_32748[(1)] = (4));

} else {
var statearr_32729_32749 = state_32719__$1;
(statearr_32729_32749[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (11))){
var inst_32710 = cljs.core.async.close_BANG_.call(null,ch);
var state_32719__$1 = state_32719;
var statearr_32730_32750 = state_32719__$1;
(statearr_32730_32750[(2)] = inst_32710);

(statearr_32730_32750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (9))){
var state_32719__$1 = state_32719;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32731_32751 = state_32719__$1;
(statearr_32731_32751[(1)] = (11));

} else {
var statearr_32732_32752 = state_32719__$1;
(statearr_32732_32752[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (5))){
var inst_32696 = (state_32719[(7)]);
var state_32719__$1 = state_32719;
var statearr_32733_32753 = state_32719__$1;
(statearr_32733_32753[(2)] = inst_32696);

(statearr_32733_32753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (10))){
var inst_32715 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32734_32754 = state_32719__$1;
(statearr_32734_32754[(2)] = inst_32715);

(statearr_32734_32754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (8))){
var inst_32696 = (state_32719[(7)]);
var inst_32706 = cljs.core.next.call(null,inst_32696);
var inst_32696__$1 = inst_32706;
var state_32719__$1 = (function (){var statearr_32735 = state_32719;
(statearr_32735[(7)] = inst_32696__$1);

return statearr_32735;
})();
var statearr_32736_32755 = state_32719__$1;
(statearr_32736_32755[(2)] = null);

(statearr_32736_32755[(1)] = (2));


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
});})(c__26259__auto__))
;
return ((function (switch__26100__auto__,c__26259__auto__){
return (function() {
var cljs$core$async$state_machine__26101__auto__ = null;
var cljs$core$async$state_machine__26101__auto____0 = (function (){
var statearr_32737 = [null,null,null,null,null,null,null,null];
(statearr_32737[(0)] = cljs$core$async$state_machine__26101__auto__);

(statearr_32737[(1)] = (1));

return statearr_32737;
});
var cljs$core$async$state_machine__26101__auto____1 = (function (state_32719){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_32719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e32738){if((e32738 instanceof Object)){
var ex__26104__auto__ = e32738;
var statearr_32739_32756 = state_32719;
(statearr_32739_32756[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32757 = state_32719;
state_32719 = G__32757;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$state_machine__26101__auto__ = function(state_32719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26101__auto____1.call(this,state_32719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26101__auto____0;
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26101__auto____1;
return cljs$core$async$state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto__))
})();
var state__26261__auto__ = (function (){var statearr_32740 = f__26260__auto__.call(null);
(statearr_32740[(6)] = c__26259__auto__);

return statearr_32740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto__))
);

return c__26259__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32758 = (function (ch,cs,meta32759){
this.ch = ch;
this.cs = cs;
this.meta32759 = meta32759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32760,meta32759__$1){
var self__ = this;
var _32760__$1 = this;
return (new cljs.core.async.t_cljs$core$async32758(self__.ch,self__.cs,meta32759__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32760){
var self__ = this;
var _32760__$1 = this;
return self__.meta32759;
});})(cs))
;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32758.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32759","meta32759",594614158,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32758";

cljs.core.async.t_cljs$core$async32758.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32758");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32758.
 */
cljs.core.async.__GT_t_cljs$core$async32758 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32758(ch__$1,cs__$1,meta32759){
return (new cljs.core.async.t_cljs$core$async32758(ch__$1,cs__$1,meta32759));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32758(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26259__auto___32980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___32980,cs,m,dchan,dctr,done){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___32980,cs,m,dchan,dctr,done){
return (function (state_32895){
var state_val_32896 = (state_32895[(1)]);
if((state_val_32896 === (7))){
var inst_32891 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32897_32981 = state_32895__$1;
(statearr_32897_32981[(2)] = inst_32891);

(statearr_32897_32981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (20))){
var inst_32794 = (state_32895[(7)]);
var inst_32806 = cljs.core.first.call(null,inst_32794);
var inst_32807 = cljs.core.nth.call(null,inst_32806,(0),null);
var inst_32808 = cljs.core.nth.call(null,inst_32806,(1),null);
var state_32895__$1 = (function (){var statearr_32898 = state_32895;
(statearr_32898[(8)] = inst_32807);

return statearr_32898;
})();
if(cljs.core.truth_(inst_32808)){
var statearr_32899_32982 = state_32895__$1;
(statearr_32899_32982[(1)] = (22));

} else {
var statearr_32900_32983 = state_32895__$1;
(statearr_32900_32983[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (27))){
var inst_32763 = (state_32895[(9)]);
var inst_32836 = (state_32895[(10)]);
var inst_32843 = (state_32895[(11)]);
var inst_32838 = (state_32895[(12)]);
var inst_32843__$1 = cljs.core._nth.call(null,inst_32836,inst_32838);
var inst_32844 = cljs.core.async.put_BANG_.call(null,inst_32843__$1,inst_32763,done);
var state_32895__$1 = (function (){var statearr_32901 = state_32895;
(statearr_32901[(11)] = inst_32843__$1);

return statearr_32901;
})();
if(cljs.core.truth_(inst_32844)){
var statearr_32902_32984 = state_32895__$1;
(statearr_32902_32984[(1)] = (30));

} else {
var statearr_32903_32985 = state_32895__$1;
(statearr_32903_32985[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (1))){
var state_32895__$1 = state_32895;
var statearr_32904_32986 = state_32895__$1;
(statearr_32904_32986[(2)] = null);

(statearr_32904_32986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (24))){
var inst_32794 = (state_32895[(7)]);
var inst_32813 = (state_32895[(2)]);
var inst_32814 = cljs.core.next.call(null,inst_32794);
var inst_32772 = inst_32814;
var inst_32773 = null;
var inst_32774 = (0);
var inst_32775 = (0);
var state_32895__$1 = (function (){var statearr_32905 = state_32895;
(statearr_32905[(13)] = inst_32773);

(statearr_32905[(14)] = inst_32813);

(statearr_32905[(15)] = inst_32772);

(statearr_32905[(16)] = inst_32775);

(statearr_32905[(17)] = inst_32774);

return statearr_32905;
})();
var statearr_32906_32987 = state_32895__$1;
(statearr_32906_32987[(2)] = null);

(statearr_32906_32987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (39))){
var state_32895__$1 = state_32895;
var statearr_32910_32988 = state_32895__$1;
(statearr_32910_32988[(2)] = null);

(statearr_32910_32988[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (4))){
var inst_32763 = (state_32895[(9)]);
var inst_32763__$1 = (state_32895[(2)]);
var inst_32764 = (inst_32763__$1 == null);
var state_32895__$1 = (function (){var statearr_32911 = state_32895;
(statearr_32911[(9)] = inst_32763__$1);

return statearr_32911;
})();
if(cljs.core.truth_(inst_32764)){
var statearr_32912_32989 = state_32895__$1;
(statearr_32912_32989[(1)] = (5));

} else {
var statearr_32913_32990 = state_32895__$1;
(statearr_32913_32990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (15))){
var inst_32773 = (state_32895[(13)]);
var inst_32772 = (state_32895[(15)]);
var inst_32775 = (state_32895[(16)]);
var inst_32774 = (state_32895[(17)]);
var inst_32790 = (state_32895[(2)]);
var inst_32791 = (inst_32775 + (1));
var tmp32907 = inst_32773;
var tmp32908 = inst_32772;
var tmp32909 = inst_32774;
var inst_32772__$1 = tmp32908;
var inst_32773__$1 = tmp32907;
var inst_32774__$1 = tmp32909;
var inst_32775__$1 = inst_32791;
var state_32895__$1 = (function (){var statearr_32914 = state_32895;
(statearr_32914[(18)] = inst_32790);

(statearr_32914[(13)] = inst_32773__$1);

(statearr_32914[(15)] = inst_32772__$1);

(statearr_32914[(16)] = inst_32775__$1);

(statearr_32914[(17)] = inst_32774__$1);

return statearr_32914;
})();
var statearr_32915_32991 = state_32895__$1;
(statearr_32915_32991[(2)] = null);

(statearr_32915_32991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (21))){
var inst_32817 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32919_32992 = state_32895__$1;
(statearr_32919_32992[(2)] = inst_32817);

(statearr_32919_32992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (31))){
var inst_32843 = (state_32895[(11)]);
var inst_32847 = done.call(null,null);
var inst_32848 = cljs.core.async.untap_STAR_.call(null,m,inst_32843);
var state_32895__$1 = (function (){var statearr_32920 = state_32895;
(statearr_32920[(19)] = inst_32847);

return statearr_32920;
})();
var statearr_32921_32993 = state_32895__$1;
(statearr_32921_32993[(2)] = inst_32848);

(statearr_32921_32993[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (32))){
var inst_32836 = (state_32895[(10)]);
var inst_32835 = (state_32895[(20)]);
var inst_32838 = (state_32895[(12)]);
var inst_32837 = (state_32895[(21)]);
var inst_32850 = (state_32895[(2)]);
var inst_32851 = (inst_32838 + (1));
var tmp32916 = inst_32836;
var tmp32917 = inst_32835;
var tmp32918 = inst_32837;
var inst_32835__$1 = tmp32917;
var inst_32836__$1 = tmp32916;
var inst_32837__$1 = tmp32918;
var inst_32838__$1 = inst_32851;
var state_32895__$1 = (function (){var statearr_32922 = state_32895;
(statearr_32922[(22)] = inst_32850);

(statearr_32922[(10)] = inst_32836__$1);

(statearr_32922[(20)] = inst_32835__$1);

(statearr_32922[(12)] = inst_32838__$1);

(statearr_32922[(21)] = inst_32837__$1);

return statearr_32922;
})();
var statearr_32923_32994 = state_32895__$1;
(statearr_32923_32994[(2)] = null);

(statearr_32923_32994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (40))){
var inst_32863 = (state_32895[(23)]);
var inst_32867 = done.call(null,null);
var inst_32868 = cljs.core.async.untap_STAR_.call(null,m,inst_32863);
var state_32895__$1 = (function (){var statearr_32924 = state_32895;
(statearr_32924[(24)] = inst_32867);

return statearr_32924;
})();
var statearr_32925_32995 = state_32895__$1;
(statearr_32925_32995[(2)] = inst_32868);

(statearr_32925_32995[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (33))){
var inst_32854 = (state_32895[(25)]);
var inst_32856 = cljs.core.chunked_seq_QMARK_.call(null,inst_32854);
var state_32895__$1 = state_32895;
if(inst_32856){
var statearr_32926_32996 = state_32895__$1;
(statearr_32926_32996[(1)] = (36));

} else {
var statearr_32927_32997 = state_32895__$1;
(statearr_32927_32997[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (13))){
var inst_32784 = (state_32895[(26)]);
var inst_32787 = cljs.core.async.close_BANG_.call(null,inst_32784);
var state_32895__$1 = state_32895;
var statearr_32928_32998 = state_32895__$1;
(statearr_32928_32998[(2)] = inst_32787);

(statearr_32928_32998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (22))){
var inst_32807 = (state_32895[(8)]);
var inst_32810 = cljs.core.async.close_BANG_.call(null,inst_32807);
var state_32895__$1 = state_32895;
var statearr_32929_32999 = state_32895__$1;
(statearr_32929_32999[(2)] = inst_32810);

(statearr_32929_32999[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (36))){
var inst_32854 = (state_32895[(25)]);
var inst_32858 = cljs.core.chunk_first.call(null,inst_32854);
var inst_32859 = cljs.core.chunk_rest.call(null,inst_32854);
var inst_32860 = cljs.core.count.call(null,inst_32858);
var inst_32835 = inst_32859;
var inst_32836 = inst_32858;
var inst_32837 = inst_32860;
var inst_32838 = (0);
var state_32895__$1 = (function (){var statearr_32930 = state_32895;
(statearr_32930[(10)] = inst_32836);

(statearr_32930[(20)] = inst_32835);

(statearr_32930[(12)] = inst_32838);

(statearr_32930[(21)] = inst_32837);

return statearr_32930;
})();
var statearr_32931_33000 = state_32895__$1;
(statearr_32931_33000[(2)] = null);

(statearr_32931_33000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (41))){
var inst_32854 = (state_32895[(25)]);
var inst_32870 = (state_32895[(2)]);
var inst_32871 = cljs.core.next.call(null,inst_32854);
var inst_32835 = inst_32871;
var inst_32836 = null;
var inst_32837 = (0);
var inst_32838 = (0);
var state_32895__$1 = (function (){var statearr_32932 = state_32895;
(statearr_32932[(10)] = inst_32836);

(statearr_32932[(20)] = inst_32835);

(statearr_32932[(12)] = inst_32838);

(statearr_32932[(27)] = inst_32870);

(statearr_32932[(21)] = inst_32837);

return statearr_32932;
})();
var statearr_32933_33001 = state_32895__$1;
(statearr_32933_33001[(2)] = null);

(statearr_32933_33001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (43))){
var state_32895__$1 = state_32895;
var statearr_32934_33002 = state_32895__$1;
(statearr_32934_33002[(2)] = null);

(statearr_32934_33002[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (29))){
var inst_32879 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32935_33003 = state_32895__$1;
(statearr_32935_33003[(2)] = inst_32879);

(statearr_32935_33003[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (44))){
var inst_32888 = (state_32895[(2)]);
var state_32895__$1 = (function (){var statearr_32936 = state_32895;
(statearr_32936[(28)] = inst_32888);

return statearr_32936;
})();
var statearr_32937_33004 = state_32895__$1;
(statearr_32937_33004[(2)] = null);

(statearr_32937_33004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (6))){
var inst_32827 = (state_32895[(29)]);
var inst_32826 = cljs.core.deref.call(null,cs);
var inst_32827__$1 = cljs.core.keys.call(null,inst_32826);
var inst_32828 = cljs.core.count.call(null,inst_32827__$1);
var inst_32829 = cljs.core.reset_BANG_.call(null,dctr,inst_32828);
var inst_32834 = cljs.core.seq.call(null,inst_32827__$1);
var inst_32835 = inst_32834;
var inst_32836 = null;
var inst_32837 = (0);
var inst_32838 = (0);
var state_32895__$1 = (function (){var statearr_32938 = state_32895;
(statearr_32938[(10)] = inst_32836);

(statearr_32938[(20)] = inst_32835);

(statearr_32938[(12)] = inst_32838);

(statearr_32938[(29)] = inst_32827__$1);

(statearr_32938[(21)] = inst_32837);

(statearr_32938[(30)] = inst_32829);

return statearr_32938;
})();
var statearr_32939_33005 = state_32895__$1;
(statearr_32939_33005[(2)] = null);

(statearr_32939_33005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (28))){
var inst_32854 = (state_32895[(25)]);
var inst_32835 = (state_32895[(20)]);
var inst_32854__$1 = cljs.core.seq.call(null,inst_32835);
var state_32895__$1 = (function (){var statearr_32940 = state_32895;
(statearr_32940[(25)] = inst_32854__$1);

return statearr_32940;
})();
if(inst_32854__$1){
var statearr_32941_33006 = state_32895__$1;
(statearr_32941_33006[(1)] = (33));

} else {
var statearr_32942_33007 = state_32895__$1;
(statearr_32942_33007[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (25))){
var inst_32838 = (state_32895[(12)]);
var inst_32837 = (state_32895[(21)]);
var inst_32840 = (inst_32838 < inst_32837);
var inst_32841 = inst_32840;
var state_32895__$1 = state_32895;
if(cljs.core.truth_(inst_32841)){
var statearr_32943_33008 = state_32895__$1;
(statearr_32943_33008[(1)] = (27));

} else {
var statearr_32944_33009 = state_32895__$1;
(statearr_32944_33009[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (34))){
var state_32895__$1 = state_32895;
var statearr_32945_33010 = state_32895__$1;
(statearr_32945_33010[(2)] = null);

(statearr_32945_33010[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (17))){
var state_32895__$1 = state_32895;
var statearr_32946_33011 = state_32895__$1;
(statearr_32946_33011[(2)] = null);

(statearr_32946_33011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (3))){
var inst_32893 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32895__$1,inst_32893);
} else {
if((state_val_32896 === (12))){
var inst_32822 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32947_33012 = state_32895__$1;
(statearr_32947_33012[(2)] = inst_32822);

(statearr_32947_33012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (2))){
var state_32895__$1 = state_32895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32895__$1,(4),ch);
} else {
if((state_val_32896 === (23))){
var state_32895__$1 = state_32895;
var statearr_32948_33013 = state_32895__$1;
(statearr_32948_33013[(2)] = null);

(statearr_32948_33013[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (35))){
var inst_32877 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32949_33014 = state_32895__$1;
(statearr_32949_33014[(2)] = inst_32877);

(statearr_32949_33014[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (19))){
var inst_32794 = (state_32895[(7)]);
var inst_32798 = cljs.core.chunk_first.call(null,inst_32794);
var inst_32799 = cljs.core.chunk_rest.call(null,inst_32794);
var inst_32800 = cljs.core.count.call(null,inst_32798);
var inst_32772 = inst_32799;
var inst_32773 = inst_32798;
var inst_32774 = inst_32800;
var inst_32775 = (0);
var state_32895__$1 = (function (){var statearr_32950 = state_32895;
(statearr_32950[(13)] = inst_32773);

(statearr_32950[(15)] = inst_32772);

(statearr_32950[(16)] = inst_32775);

(statearr_32950[(17)] = inst_32774);

return statearr_32950;
})();
var statearr_32951_33015 = state_32895__$1;
(statearr_32951_33015[(2)] = null);

(statearr_32951_33015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (11))){
var inst_32794 = (state_32895[(7)]);
var inst_32772 = (state_32895[(15)]);
var inst_32794__$1 = cljs.core.seq.call(null,inst_32772);
var state_32895__$1 = (function (){var statearr_32952 = state_32895;
(statearr_32952[(7)] = inst_32794__$1);

return statearr_32952;
})();
if(inst_32794__$1){
var statearr_32953_33016 = state_32895__$1;
(statearr_32953_33016[(1)] = (16));

} else {
var statearr_32954_33017 = state_32895__$1;
(statearr_32954_33017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (9))){
var inst_32824 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32955_33018 = state_32895__$1;
(statearr_32955_33018[(2)] = inst_32824);

(statearr_32955_33018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (5))){
var inst_32770 = cljs.core.deref.call(null,cs);
var inst_32771 = cljs.core.seq.call(null,inst_32770);
var inst_32772 = inst_32771;
var inst_32773 = null;
var inst_32774 = (0);
var inst_32775 = (0);
var state_32895__$1 = (function (){var statearr_32956 = state_32895;
(statearr_32956[(13)] = inst_32773);

(statearr_32956[(15)] = inst_32772);

(statearr_32956[(16)] = inst_32775);

(statearr_32956[(17)] = inst_32774);

return statearr_32956;
})();
var statearr_32957_33019 = state_32895__$1;
(statearr_32957_33019[(2)] = null);

(statearr_32957_33019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (14))){
var state_32895__$1 = state_32895;
var statearr_32958_33020 = state_32895__$1;
(statearr_32958_33020[(2)] = null);

(statearr_32958_33020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (45))){
var inst_32885 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32959_33021 = state_32895__$1;
(statearr_32959_33021[(2)] = inst_32885);

(statearr_32959_33021[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (26))){
var inst_32827 = (state_32895[(29)]);
var inst_32881 = (state_32895[(2)]);
var inst_32882 = cljs.core.seq.call(null,inst_32827);
var state_32895__$1 = (function (){var statearr_32960 = state_32895;
(statearr_32960[(31)] = inst_32881);

return statearr_32960;
})();
if(inst_32882){
var statearr_32961_33022 = state_32895__$1;
(statearr_32961_33022[(1)] = (42));

} else {
var statearr_32962_33023 = state_32895__$1;
(statearr_32962_33023[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (16))){
var inst_32794 = (state_32895[(7)]);
var inst_32796 = cljs.core.chunked_seq_QMARK_.call(null,inst_32794);
var state_32895__$1 = state_32895;
if(inst_32796){
var statearr_32963_33024 = state_32895__$1;
(statearr_32963_33024[(1)] = (19));

} else {
var statearr_32964_33025 = state_32895__$1;
(statearr_32964_33025[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (38))){
var inst_32874 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32965_33026 = state_32895__$1;
(statearr_32965_33026[(2)] = inst_32874);

(statearr_32965_33026[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (30))){
var state_32895__$1 = state_32895;
var statearr_32966_33027 = state_32895__$1;
(statearr_32966_33027[(2)] = null);

(statearr_32966_33027[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (10))){
var inst_32773 = (state_32895[(13)]);
var inst_32775 = (state_32895[(16)]);
var inst_32783 = cljs.core._nth.call(null,inst_32773,inst_32775);
var inst_32784 = cljs.core.nth.call(null,inst_32783,(0),null);
var inst_32785 = cljs.core.nth.call(null,inst_32783,(1),null);
var state_32895__$1 = (function (){var statearr_32967 = state_32895;
(statearr_32967[(26)] = inst_32784);

return statearr_32967;
})();
if(cljs.core.truth_(inst_32785)){
var statearr_32968_33028 = state_32895__$1;
(statearr_32968_33028[(1)] = (13));

} else {
var statearr_32969_33029 = state_32895__$1;
(statearr_32969_33029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (18))){
var inst_32820 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32970_33030 = state_32895__$1;
(statearr_32970_33030[(2)] = inst_32820);

(statearr_32970_33030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (42))){
var state_32895__$1 = state_32895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32895__$1,(45),dchan);
} else {
if((state_val_32896 === (37))){
var inst_32763 = (state_32895[(9)]);
var inst_32854 = (state_32895[(25)]);
var inst_32863 = (state_32895[(23)]);
var inst_32863__$1 = cljs.core.first.call(null,inst_32854);
var inst_32864 = cljs.core.async.put_BANG_.call(null,inst_32863__$1,inst_32763,done);
var state_32895__$1 = (function (){var statearr_32971 = state_32895;
(statearr_32971[(23)] = inst_32863__$1);

return statearr_32971;
})();
if(cljs.core.truth_(inst_32864)){
var statearr_32972_33031 = state_32895__$1;
(statearr_32972_33031[(1)] = (39));

} else {
var statearr_32973_33032 = state_32895__$1;
(statearr_32973_33032[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (8))){
var inst_32775 = (state_32895[(16)]);
var inst_32774 = (state_32895[(17)]);
var inst_32777 = (inst_32775 < inst_32774);
var inst_32778 = inst_32777;
var state_32895__$1 = state_32895;
if(cljs.core.truth_(inst_32778)){
var statearr_32974_33033 = state_32895__$1;
(statearr_32974_33033[(1)] = (10));

} else {
var statearr_32975_33034 = state_32895__$1;
(statearr_32975_33034[(1)] = (11));

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
});})(c__26259__auto___32980,cs,m,dchan,dctr,done))
;
return ((function (switch__26100__auto__,c__26259__auto___32980,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26101__auto__ = null;
var cljs$core$async$mult_$_state_machine__26101__auto____0 = (function (){
var statearr_32976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32976[(0)] = cljs$core$async$mult_$_state_machine__26101__auto__);

(statearr_32976[(1)] = (1));

return statearr_32976;
});
var cljs$core$async$mult_$_state_machine__26101__auto____1 = (function (state_32895){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_32895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e32977){if((e32977 instanceof Object)){
var ex__26104__auto__ = e32977;
var statearr_32978_33035 = state_32895;
(statearr_32978_33035[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33036 = state_32895;
state_32895 = G__33036;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26101__auto__ = function(state_32895){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26101__auto____1.call(this,state_32895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26101__auto____0;
cljs$core$async$mult_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26101__auto____1;
return cljs$core$async$mult_$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___32980,cs,m,dchan,dctr,done))
})();
var state__26261__auto__ = (function (){var statearr_32979 = f__26260__auto__.call(null);
(statearr_32979[(6)] = c__26259__auto___32980);

return statearr_32979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___32980,cs,m,dchan,dctr,done))
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
var G__33038 = arguments.length;
switch (G__33038) {
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
var len__4531__auto___33050 = arguments.length;
var i__4532__auto___33051 = (0);
while(true){
if((i__4532__auto___33051 < len__4531__auto___33050)){
args__4534__auto__.push((arguments[i__4532__auto___33051]));

var G__33052 = (i__4532__auto___33051 + (1));
i__4532__auto___33051 = G__33052;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33044){
var map__33045 = p__33044;
var map__33045__$1 = ((((!((map__33045 == null)))?(((((map__33045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33045):map__33045);
var opts = map__33045__$1;
var statearr_33047_33053 = state;
(statearr_33047_33053[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__33045,map__33045__$1,opts){
return (function (val){
var statearr_33048_33054 = state;
(statearr_33048_33054[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33045,map__33045__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_33049_33055 = state;
(statearr_33049_33055[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33040){
var G__33041 = cljs.core.first.call(null,seq33040);
var seq33040__$1 = cljs.core.next.call(null,seq33040);
var G__33042 = cljs.core.first.call(null,seq33040__$1);
var seq33040__$2 = cljs.core.next.call(null,seq33040__$1);
var G__33043 = cljs.core.first.call(null,seq33040__$2);
var seq33040__$3 = cljs.core.next.call(null,seq33040__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33041,G__33042,G__33043,seq33040__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33056 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33057){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33057 = meta33057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33058,meta33057__$1){
var self__ = this;
var _33058__$1 = this;
return (new cljs.core.async.t_cljs$core$async33056(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33057__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33058){
var self__ = this;
var _33058__$1 = this;
return self__.meta33057;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33056.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33056.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33056.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33056.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33056.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33056.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33056.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33056.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33057","meta33057",1188606823,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33056";

cljs.core.async.t_cljs$core$async33056.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async33056");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33056.
 */
cljs.core.async.__GT_t_cljs$core$async33056 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33056(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33057){
return (new cljs.core.async.t_cljs$core$async33056(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33057));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33056(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26259__auto___33220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___33220,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___33220,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33160){
var state_val_33161 = (state_33160[(1)]);
if((state_val_33161 === (7))){
var inst_33075 = (state_33160[(2)]);
var state_33160__$1 = state_33160;
var statearr_33162_33221 = state_33160__$1;
(statearr_33162_33221[(2)] = inst_33075);

(statearr_33162_33221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (20))){
var inst_33087 = (state_33160[(7)]);
var state_33160__$1 = state_33160;
var statearr_33163_33222 = state_33160__$1;
(statearr_33163_33222[(2)] = inst_33087);

(statearr_33163_33222[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (27))){
var state_33160__$1 = state_33160;
var statearr_33164_33223 = state_33160__$1;
(statearr_33164_33223[(2)] = null);

(statearr_33164_33223[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (1))){
var inst_33062 = (state_33160[(8)]);
var inst_33062__$1 = calc_state.call(null);
var inst_33064 = (inst_33062__$1 == null);
var inst_33065 = cljs.core.not.call(null,inst_33064);
var state_33160__$1 = (function (){var statearr_33165 = state_33160;
(statearr_33165[(8)] = inst_33062__$1);

return statearr_33165;
})();
if(inst_33065){
var statearr_33166_33224 = state_33160__$1;
(statearr_33166_33224[(1)] = (2));

} else {
var statearr_33167_33225 = state_33160__$1;
(statearr_33167_33225[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (24))){
var inst_33134 = (state_33160[(9)]);
var inst_33111 = (state_33160[(10)]);
var inst_33120 = (state_33160[(11)]);
var inst_33134__$1 = inst_33111.call(null,inst_33120);
var state_33160__$1 = (function (){var statearr_33168 = state_33160;
(statearr_33168[(9)] = inst_33134__$1);

return statearr_33168;
})();
if(cljs.core.truth_(inst_33134__$1)){
var statearr_33169_33226 = state_33160__$1;
(statearr_33169_33226[(1)] = (29));

} else {
var statearr_33170_33227 = state_33160__$1;
(statearr_33170_33227[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (4))){
var inst_33078 = (state_33160[(2)]);
var state_33160__$1 = state_33160;
if(cljs.core.truth_(inst_33078)){
var statearr_33171_33228 = state_33160__$1;
(statearr_33171_33228[(1)] = (8));

} else {
var statearr_33172_33229 = state_33160__$1;
(statearr_33172_33229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (15))){
var inst_33105 = (state_33160[(2)]);
var state_33160__$1 = state_33160;
if(cljs.core.truth_(inst_33105)){
var statearr_33173_33230 = state_33160__$1;
(statearr_33173_33230[(1)] = (19));

} else {
var statearr_33174_33231 = state_33160__$1;
(statearr_33174_33231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (21))){
var inst_33110 = (state_33160[(12)]);
var inst_33110__$1 = (state_33160[(2)]);
var inst_33111 = cljs.core.get.call(null,inst_33110__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33112 = cljs.core.get.call(null,inst_33110__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33113 = cljs.core.get.call(null,inst_33110__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33160__$1 = (function (){var statearr_33175 = state_33160;
(statearr_33175[(13)] = inst_33112);

(statearr_33175[(10)] = inst_33111);

(statearr_33175[(12)] = inst_33110__$1);

return statearr_33175;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33160__$1,(22),inst_33113);
} else {
if((state_val_33161 === (31))){
var inst_33142 = (state_33160[(2)]);
var state_33160__$1 = state_33160;
if(cljs.core.truth_(inst_33142)){
var statearr_33176_33232 = state_33160__$1;
(statearr_33176_33232[(1)] = (32));

} else {
var statearr_33177_33233 = state_33160__$1;
(statearr_33177_33233[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (32))){
var inst_33119 = (state_33160[(14)]);
var state_33160__$1 = state_33160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33160__$1,(35),out,inst_33119);
} else {
if((state_val_33161 === (33))){
var inst_33110 = (state_33160[(12)]);
var inst_33087 = inst_33110;
var state_33160__$1 = (function (){var statearr_33178 = state_33160;
(statearr_33178[(7)] = inst_33087);

return statearr_33178;
})();
var statearr_33179_33234 = state_33160__$1;
(statearr_33179_33234[(2)] = null);

(statearr_33179_33234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (13))){
var inst_33087 = (state_33160[(7)]);
var inst_33094 = inst_33087.cljs$lang$protocol_mask$partition0$;
var inst_33095 = (inst_33094 & (64));
var inst_33096 = inst_33087.cljs$core$ISeq$;
var inst_33097 = (cljs.core.PROTOCOL_SENTINEL === inst_33096);
var inst_33098 = ((inst_33095) || (inst_33097));
var state_33160__$1 = state_33160;
if(cljs.core.truth_(inst_33098)){
var statearr_33180_33235 = state_33160__$1;
(statearr_33180_33235[(1)] = (16));

} else {
var statearr_33181_33236 = state_33160__$1;
(statearr_33181_33236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (22))){
var inst_33119 = (state_33160[(14)]);
var inst_33120 = (state_33160[(11)]);
var inst_33118 = (state_33160[(2)]);
var inst_33119__$1 = cljs.core.nth.call(null,inst_33118,(0),null);
var inst_33120__$1 = cljs.core.nth.call(null,inst_33118,(1),null);
var inst_33121 = (inst_33119__$1 == null);
var inst_33122 = cljs.core._EQ_.call(null,inst_33120__$1,change);
var inst_33123 = ((inst_33121) || (inst_33122));
var state_33160__$1 = (function (){var statearr_33182 = state_33160;
(statearr_33182[(14)] = inst_33119__$1);

(statearr_33182[(11)] = inst_33120__$1);

return statearr_33182;
})();
if(cljs.core.truth_(inst_33123)){
var statearr_33183_33237 = state_33160__$1;
(statearr_33183_33237[(1)] = (23));

} else {
var statearr_33184_33238 = state_33160__$1;
(statearr_33184_33238[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (36))){
var inst_33110 = (state_33160[(12)]);
var inst_33087 = inst_33110;
var state_33160__$1 = (function (){var statearr_33185 = state_33160;
(statearr_33185[(7)] = inst_33087);

return statearr_33185;
})();
var statearr_33186_33239 = state_33160__$1;
(statearr_33186_33239[(2)] = null);

(statearr_33186_33239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (29))){
var inst_33134 = (state_33160[(9)]);
var state_33160__$1 = state_33160;
var statearr_33187_33240 = state_33160__$1;
(statearr_33187_33240[(2)] = inst_33134);

(statearr_33187_33240[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (6))){
var state_33160__$1 = state_33160;
var statearr_33188_33241 = state_33160__$1;
(statearr_33188_33241[(2)] = false);

(statearr_33188_33241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (28))){
var inst_33130 = (state_33160[(2)]);
var inst_33131 = calc_state.call(null);
var inst_33087 = inst_33131;
var state_33160__$1 = (function (){var statearr_33189 = state_33160;
(statearr_33189[(7)] = inst_33087);

(statearr_33189[(15)] = inst_33130);

return statearr_33189;
})();
var statearr_33190_33242 = state_33160__$1;
(statearr_33190_33242[(2)] = null);

(statearr_33190_33242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (25))){
var inst_33156 = (state_33160[(2)]);
var state_33160__$1 = state_33160;
var statearr_33191_33243 = state_33160__$1;
(statearr_33191_33243[(2)] = inst_33156);

(statearr_33191_33243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (34))){
var inst_33154 = (state_33160[(2)]);
var state_33160__$1 = state_33160;
var statearr_33192_33244 = state_33160__$1;
(statearr_33192_33244[(2)] = inst_33154);

(statearr_33192_33244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (17))){
var state_33160__$1 = state_33160;
var statearr_33193_33245 = state_33160__$1;
(statearr_33193_33245[(2)] = false);

(statearr_33193_33245[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (3))){
var state_33160__$1 = state_33160;
var statearr_33194_33246 = state_33160__$1;
(statearr_33194_33246[(2)] = false);

(statearr_33194_33246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (12))){
var inst_33158 = (state_33160[(2)]);
var state_33160__$1 = state_33160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33160__$1,inst_33158);
} else {
if((state_val_33161 === (2))){
var inst_33062 = (state_33160[(8)]);
var inst_33067 = inst_33062.cljs$lang$protocol_mask$partition0$;
var inst_33068 = (inst_33067 & (64));
var inst_33069 = inst_33062.cljs$core$ISeq$;
var inst_33070 = (cljs.core.PROTOCOL_SENTINEL === inst_33069);
var inst_33071 = ((inst_33068) || (inst_33070));
var state_33160__$1 = state_33160;
if(cljs.core.truth_(inst_33071)){
var statearr_33195_33247 = state_33160__$1;
(statearr_33195_33247[(1)] = (5));

} else {
var statearr_33196_33248 = state_33160__$1;
(statearr_33196_33248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (23))){
var inst_33119 = (state_33160[(14)]);
var inst_33125 = (inst_33119 == null);
var state_33160__$1 = state_33160;
if(cljs.core.truth_(inst_33125)){
var statearr_33197_33249 = state_33160__$1;
(statearr_33197_33249[(1)] = (26));

} else {
var statearr_33198_33250 = state_33160__$1;
(statearr_33198_33250[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (35))){
var inst_33145 = (state_33160[(2)]);
var state_33160__$1 = state_33160;
if(cljs.core.truth_(inst_33145)){
var statearr_33199_33251 = state_33160__$1;
(statearr_33199_33251[(1)] = (36));

} else {
var statearr_33200_33252 = state_33160__$1;
(statearr_33200_33252[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (19))){
var inst_33087 = (state_33160[(7)]);
var inst_33107 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33087);
var state_33160__$1 = state_33160;
var statearr_33201_33253 = state_33160__$1;
(statearr_33201_33253[(2)] = inst_33107);

(statearr_33201_33253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (11))){
var inst_33087 = (state_33160[(7)]);
var inst_33091 = (inst_33087 == null);
var inst_33092 = cljs.core.not.call(null,inst_33091);
var state_33160__$1 = state_33160;
if(inst_33092){
var statearr_33202_33254 = state_33160__$1;
(statearr_33202_33254[(1)] = (13));

} else {
var statearr_33203_33255 = state_33160__$1;
(statearr_33203_33255[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (9))){
var inst_33062 = (state_33160[(8)]);
var state_33160__$1 = state_33160;
var statearr_33204_33256 = state_33160__$1;
(statearr_33204_33256[(2)] = inst_33062);

(statearr_33204_33256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (5))){
var state_33160__$1 = state_33160;
var statearr_33205_33257 = state_33160__$1;
(statearr_33205_33257[(2)] = true);

(statearr_33205_33257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (14))){
var state_33160__$1 = state_33160;
var statearr_33206_33258 = state_33160__$1;
(statearr_33206_33258[(2)] = false);

(statearr_33206_33258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (26))){
var inst_33120 = (state_33160[(11)]);
var inst_33127 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33120);
var state_33160__$1 = state_33160;
var statearr_33207_33259 = state_33160__$1;
(statearr_33207_33259[(2)] = inst_33127);

(statearr_33207_33259[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (16))){
var state_33160__$1 = state_33160;
var statearr_33208_33260 = state_33160__$1;
(statearr_33208_33260[(2)] = true);

(statearr_33208_33260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (38))){
var inst_33150 = (state_33160[(2)]);
var state_33160__$1 = state_33160;
var statearr_33209_33261 = state_33160__$1;
(statearr_33209_33261[(2)] = inst_33150);

(statearr_33209_33261[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (30))){
var inst_33112 = (state_33160[(13)]);
var inst_33111 = (state_33160[(10)]);
var inst_33120 = (state_33160[(11)]);
var inst_33137 = cljs.core.empty_QMARK_.call(null,inst_33111);
var inst_33138 = inst_33112.call(null,inst_33120);
var inst_33139 = cljs.core.not.call(null,inst_33138);
var inst_33140 = ((inst_33137) && (inst_33139));
var state_33160__$1 = state_33160;
var statearr_33210_33262 = state_33160__$1;
(statearr_33210_33262[(2)] = inst_33140);

(statearr_33210_33262[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (10))){
var inst_33062 = (state_33160[(8)]);
var inst_33083 = (state_33160[(2)]);
var inst_33084 = cljs.core.get.call(null,inst_33083,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33085 = cljs.core.get.call(null,inst_33083,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33086 = cljs.core.get.call(null,inst_33083,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33087 = inst_33062;
var state_33160__$1 = (function (){var statearr_33211 = state_33160;
(statearr_33211[(16)] = inst_33086);

(statearr_33211[(7)] = inst_33087);

(statearr_33211[(17)] = inst_33084);

(statearr_33211[(18)] = inst_33085);

return statearr_33211;
})();
var statearr_33212_33263 = state_33160__$1;
(statearr_33212_33263[(2)] = null);

(statearr_33212_33263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (18))){
var inst_33102 = (state_33160[(2)]);
var state_33160__$1 = state_33160;
var statearr_33213_33264 = state_33160__$1;
(statearr_33213_33264[(2)] = inst_33102);

(statearr_33213_33264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (37))){
var state_33160__$1 = state_33160;
var statearr_33214_33265 = state_33160__$1;
(statearr_33214_33265[(2)] = null);

(statearr_33214_33265[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33161 === (8))){
var inst_33062 = (state_33160[(8)]);
var inst_33080 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33062);
var state_33160__$1 = state_33160;
var statearr_33215_33266 = state_33160__$1;
(statearr_33215_33266[(2)] = inst_33080);

(statearr_33215_33266[(1)] = (10));


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
});})(c__26259__auto___33220,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26100__auto__,c__26259__auto___33220,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26101__auto__ = null;
var cljs$core$async$mix_$_state_machine__26101__auto____0 = (function (){
var statearr_33216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33216[(0)] = cljs$core$async$mix_$_state_machine__26101__auto__);

(statearr_33216[(1)] = (1));

return statearr_33216;
});
var cljs$core$async$mix_$_state_machine__26101__auto____1 = (function (state_33160){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_33160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e33217){if((e33217 instanceof Object)){
var ex__26104__auto__ = e33217;
var statearr_33218_33267 = state_33160;
(statearr_33218_33267[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33268 = state_33160;
state_33160 = G__33268;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26101__auto__ = function(state_33160){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26101__auto____1.call(this,state_33160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26101__auto____0;
cljs$core$async$mix_$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26101__auto____1;
return cljs$core$async$mix_$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___33220,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26261__auto__ = (function (){var statearr_33219 = f__26260__auto__.call(null);
(statearr_33219[(6)] = c__26259__auto___33220);

return statearr_33219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___33220,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33270 = arguments.length;
switch (G__33270) {
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
var G__33274 = arguments.length;
switch (G__33274) {
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
return (function (p1__33272_SHARP_){
if(cljs.core.truth_(p1__33272_SHARP_.call(null,topic))){
return p1__33272_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33272_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33275 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33276){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33276 = meta33276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33277,meta33276__$1){
var self__ = this;
var _33277__$1 = this;
return (new cljs.core.async.t_cljs$core$async33275(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33276__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33277){
var self__ = this;
var _33277__$1 = this;
return self__.meta33276;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33275.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33275.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33275.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33275.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33275.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33275.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33275.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33276","meta33276",1572162483,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33275";

cljs.core.async.t_cljs$core$async33275.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async33275");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33275.
 */
cljs.core.async.__GT_t_cljs$core$async33275 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33275(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33276){
return (new cljs.core.async.t_cljs$core$async33275(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33276));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33275(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26259__auto___33395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___33395,mults,ensure_mult,p){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___33395,mults,ensure_mult,p){
return (function (state_33349){
var state_val_33350 = (state_33349[(1)]);
if((state_val_33350 === (7))){
var inst_33345 = (state_33349[(2)]);
var state_33349__$1 = state_33349;
var statearr_33351_33396 = state_33349__$1;
(statearr_33351_33396[(2)] = inst_33345);

(statearr_33351_33396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (20))){
var state_33349__$1 = state_33349;
var statearr_33352_33397 = state_33349__$1;
(statearr_33352_33397[(2)] = null);

(statearr_33352_33397[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (1))){
var state_33349__$1 = state_33349;
var statearr_33353_33398 = state_33349__$1;
(statearr_33353_33398[(2)] = null);

(statearr_33353_33398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (24))){
var inst_33328 = (state_33349[(7)]);
var inst_33337 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33328);
var state_33349__$1 = state_33349;
var statearr_33354_33399 = state_33349__$1;
(statearr_33354_33399[(2)] = inst_33337);

(statearr_33354_33399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (4))){
var inst_33280 = (state_33349[(8)]);
var inst_33280__$1 = (state_33349[(2)]);
var inst_33281 = (inst_33280__$1 == null);
var state_33349__$1 = (function (){var statearr_33355 = state_33349;
(statearr_33355[(8)] = inst_33280__$1);

return statearr_33355;
})();
if(cljs.core.truth_(inst_33281)){
var statearr_33356_33400 = state_33349__$1;
(statearr_33356_33400[(1)] = (5));

} else {
var statearr_33357_33401 = state_33349__$1;
(statearr_33357_33401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (15))){
var inst_33322 = (state_33349[(2)]);
var state_33349__$1 = state_33349;
var statearr_33358_33402 = state_33349__$1;
(statearr_33358_33402[(2)] = inst_33322);

(statearr_33358_33402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (21))){
var inst_33342 = (state_33349[(2)]);
var state_33349__$1 = (function (){var statearr_33359 = state_33349;
(statearr_33359[(9)] = inst_33342);

return statearr_33359;
})();
var statearr_33360_33403 = state_33349__$1;
(statearr_33360_33403[(2)] = null);

(statearr_33360_33403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (13))){
var inst_33304 = (state_33349[(10)]);
var inst_33306 = cljs.core.chunked_seq_QMARK_.call(null,inst_33304);
var state_33349__$1 = state_33349;
if(inst_33306){
var statearr_33361_33404 = state_33349__$1;
(statearr_33361_33404[(1)] = (16));

} else {
var statearr_33362_33405 = state_33349__$1;
(statearr_33362_33405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (22))){
var inst_33334 = (state_33349[(2)]);
var state_33349__$1 = state_33349;
if(cljs.core.truth_(inst_33334)){
var statearr_33363_33406 = state_33349__$1;
(statearr_33363_33406[(1)] = (23));

} else {
var statearr_33364_33407 = state_33349__$1;
(statearr_33364_33407[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (6))){
var inst_33328 = (state_33349[(7)]);
var inst_33280 = (state_33349[(8)]);
var inst_33330 = (state_33349[(11)]);
var inst_33328__$1 = topic_fn.call(null,inst_33280);
var inst_33329 = cljs.core.deref.call(null,mults);
var inst_33330__$1 = cljs.core.get.call(null,inst_33329,inst_33328__$1);
var state_33349__$1 = (function (){var statearr_33365 = state_33349;
(statearr_33365[(7)] = inst_33328__$1);

(statearr_33365[(11)] = inst_33330__$1);

return statearr_33365;
})();
if(cljs.core.truth_(inst_33330__$1)){
var statearr_33366_33408 = state_33349__$1;
(statearr_33366_33408[(1)] = (19));

} else {
var statearr_33367_33409 = state_33349__$1;
(statearr_33367_33409[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (25))){
var inst_33339 = (state_33349[(2)]);
var state_33349__$1 = state_33349;
var statearr_33368_33410 = state_33349__$1;
(statearr_33368_33410[(2)] = inst_33339);

(statearr_33368_33410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (17))){
var inst_33304 = (state_33349[(10)]);
var inst_33313 = cljs.core.first.call(null,inst_33304);
var inst_33314 = cljs.core.async.muxch_STAR_.call(null,inst_33313);
var inst_33315 = cljs.core.async.close_BANG_.call(null,inst_33314);
var inst_33316 = cljs.core.next.call(null,inst_33304);
var inst_33290 = inst_33316;
var inst_33291 = null;
var inst_33292 = (0);
var inst_33293 = (0);
var state_33349__$1 = (function (){var statearr_33369 = state_33349;
(statearr_33369[(12)] = inst_33292);

(statearr_33369[(13)] = inst_33291);

(statearr_33369[(14)] = inst_33290);

(statearr_33369[(15)] = inst_33315);

(statearr_33369[(16)] = inst_33293);

return statearr_33369;
})();
var statearr_33370_33411 = state_33349__$1;
(statearr_33370_33411[(2)] = null);

(statearr_33370_33411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (3))){
var inst_33347 = (state_33349[(2)]);
var state_33349__$1 = state_33349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33349__$1,inst_33347);
} else {
if((state_val_33350 === (12))){
var inst_33324 = (state_33349[(2)]);
var state_33349__$1 = state_33349;
var statearr_33371_33412 = state_33349__$1;
(statearr_33371_33412[(2)] = inst_33324);

(statearr_33371_33412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (2))){
var state_33349__$1 = state_33349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33349__$1,(4),ch);
} else {
if((state_val_33350 === (23))){
var state_33349__$1 = state_33349;
var statearr_33372_33413 = state_33349__$1;
(statearr_33372_33413[(2)] = null);

(statearr_33372_33413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (19))){
var inst_33280 = (state_33349[(8)]);
var inst_33330 = (state_33349[(11)]);
var inst_33332 = cljs.core.async.muxch_STAR_.call(null,inst_33330);
var state_33349__$1 = state_33349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33349__$1,(22),inst_33332,inst_33280);
} else {
if((state_val_33350 === (11))){
var inst_33290 = (state_33349[(14)]);
var inst_33304 = (state_33349[(10)]);
var inst_33304__$1 = cljs.core.seq.call(null,inst_33290);
var state_33349__$1 = (function (){var statearr_33373 = state_33349;
(statearr_33373[(10)] = inst_33304__$1);

return statearr_33373;
})();
if(inst_33304__$1){
var statearr_33374_33414 = state_33349__$1;
(statearr_33374_33414[(1)] = (13));

} else {
var statearr_33375_33415 = state_33349__$1;
(statearr_33375_33415[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (9))){
var inst_33326 = (state_33349[(2)]);
var state_33349__$1 = state_33349;
var statearr_33376_33416 = state_33349__$1;
(statearr_33376_33416[(2)] = inst_33326);

(statearr_33376_33416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (5))){
var inst_33287 = cljs.core.deref.call(null,mults);
var inst_33288 = cljs.core.vals.call(null,inst_33287);
var inst_33289 = cljs.core.seq.call(null,inst_33288);
var inst_33290 = inst_33289;
var inst_33291 = null;
var inst_33292 = (0);
var inst_33293 = (0);
var state_33349__$1 = (function (){var statearr_33377 = state_33349;
(statearr_33377[(12)] = inst_33292);

(statearr_33377[(13)] = inst_33291);

(statearr_33377[(14)] = inst_33290);

(statearr_33377[(16)] = inst_33293);

return statearr_33377;
})();
var statearr_33378_33417 = state_33349__$1;
(statearr_33378_33417[(2)] = null);

(statearr_33378_33417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (14))){
var state_33349__$1 = state_33349;
var statearr_33382_33418 = state_33349__$1;
(statearr_33382_33418[(2)] = null);

(statearr_33382_33418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (16))){
var inst_33304 = (state_33349[(10)]);
var inst_33308 = cljs.core.chunk_first.call(null,inst_33304);
var inst_33309 = cljs.core.chunk_rest.call(null,inst_33304);
var inst_33310 = cljs.core.count.call(null,inst_33308);
var inst_33290 = inst_33309;
var inst_33291 = inst_33308;
var inst_33292 = inst_33310;
var inst_33293 = (0);
var state_33349__$1 = (function (){var statearr_33383 = state_33349;
(statearr_33383[(12)] = inst_33292);

(statearr_33383[(13)] = inst_33291);

(statearr_33383[(14)] = inst_33290);

(statearr_33383[(16)] = inst_33293);

return statearr_33383;
})();
var statearr_33384_33419 = state_33349__$1;
(statearr_33384_33419[(2)] = null);

(statearr_33384_33419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (10))){
var inst_33292 = (state_33349[(12)]);
var inst_33291 = (state_33349[(13)]);
var inst_33290 = (state_33349[(14)]);
var inst_33293 = (state_33349[(16)]);
var inst_33298 = cljs.core._nth.call(null,inst_33291,inst_33293);
var inst_33299 = cljs.core.async.muxch_STAR_.call(null,inst_33298);
var inst_33300 = cljs.core.async.close_BANG_.call(null,inst_33299);
var inst_33301 = (inst_33293 + (1));
var tmp33379 = inst_33292;
var tmp33380 = inst_33291;
var tmp33381 = inst_33290;
var inst_33290__$1 = tmp33381;
var inst_33291__$1 = tmp33380;
var inst_33292__$1 = tmp33379;
var inst_33293__$1 = inst_33301;
var state_33349__$1 = (function (){var statearr_33385 = state_33349;
(statearr_33385[(12)] = inst_33292__$1);

(statearr_33385[(13)] = inst_33291__$1);

(statearr_33385[(14)] = inst_33290__$1);

(statearr_33385[(17)] = inst_33300);

(statearr_33385[(16)] = inst_33293__$1);

return statearr_33385;
})();
var statearr_33386_33420 = state_33349__$1;
(statearr_33386_33420[(2)] = null);

(statearr_33386_33420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (18))){
var inst_33319 = (state_33349[(2)]);
var state_33349__$1 = state_33349;
var statearr_33387_33421 = state_33349__$1;
(statearr_33387_33421[(2)] = inst_33319);

(statearr_33387_33421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (8))){
var inst_33292 = (state_33349[(12)]);
var inst_33293 = (state_33349[(16)]);
var inst_33295 = (inst_33293 < inst_33292);
var inst_33296 = inst_33295;
var state_33349__$1 = state_33349;
if(cljs.core.truth_(inst_33296)){
var statearr_33388_33422 = state_33349__$1;
(statearr_33388_33422[(1)] = (10));

} else {
var statearr_33389_33423 = state_33349__$1;
(statearr_33389_33423[(1)] = (11));

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
});})(c__26259__auto___33395,mults,ensure_mult,p))
;
return ((function (switch__26100__auto__,c__26259__auto___33395,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26101__auto__ = null;
var cljs$core$async$state_machine__26101__auto____0 = (function (){
var statearr_33390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33390[(0)] = cljs$core$async$state_machine__26101__auto__);

(statearr_33390[(1)] = (1));

return statearr_33390;
});
var cljs$core$async$state_machine__26101__auto____1 = (function (state_33349){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_33349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e33391){if((e33391 instanceof Object)){
var ex__26104__auto__ = e33391;
var statearr_33392_33424 = state_33349;
(statearr_33392_33424[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33425 = state_33349;
state_33349 = G__33425;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$state_machine__26101__auto__ = function(state_33349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26101__auto____1.call(this,state_33349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26101__auto____0;
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26101__auto____1;
return cljs$core$async$state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___33395,mults,ensure_mult,p))
})();
var state__26261__auto__ = (function (){var statearr_33393 = f__26260__auto__.call(null);
(statearr_33393[(6)] = c__26259__auto___33395);

return statearr_33393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___33395,mults,ensure_mult,p))
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
var G__33427 = arguments.length;
switch (G__33427) {
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
var G__33430 = arguments.length;
switch (G__33430) {
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
var G__33433 = arguments.length;
switch (G__33433) {
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
var c__26259__auto___33500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___33500,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___33500,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33472){
var state_val_33473 = (state_33472[(1)]);
if((state_val_33473 === (7))){
var state_33472__$1 = state_33472;
var statearr_33474_33501 = state_33472__$1;
(statearr_33474_33501[(2)] = null);

(statearr_33474_33501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (1))){
var state_33472__$1 = state_33472;
var statearr_33475_33502 = state_33472__$1;
(statearr_33475_33502[(2)] = null);

(statearr_33475_33502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (4))){
var inst_33436 = (state_33472[(7)]);
var inst_33438 = (inst_33436 < cnt);
var state_33472__$1 = state_33472;
if(cljs.core.truth_(inst_33438)){
var statearr_33476_33503 = state_33472__$1;
(statearr_33476_33503[(1)] = (6));

} else {
var statearr_33477_33504 = state_33472__$1;
(statearr_33477_33504[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (15))){
var inst_33468 = (state_33472[(2)]);
var state_33472__$1 = state_33472;
var statearr_33478_33505 = state_33472__$1;
(statearr_33478_33505[(2)] = inst_33468);

(statearr_33478_33505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (13))){
var inst_33461 = cljs.core.async.close_BANG_.call(null,out);
var state_33472__$1 = state_33472;
var statearr_33479_33506 = state_33472__$1;
(statearr_33479_33506[(2)] = inst_33461);

(statearr_33479_33506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (6))){
var state_33472__$1 = state_33472;
var statearr_33480_33507 = state_33472__$1;
(statearr_33480_33507[(2)] = null);

(statearr_33480_33507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (3))){
var inst_33470 = (state_33472[(2)]);
var state_33472__$1 = state_33472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33472__$1,inst_33470);
} else {
if((state_val_33473 === (12))){
var inst_33458 = (state_33472[(8)]);
var inst_33458__$1 = (state_33472[(2)]);
var inst_33459 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33458__$1);
var state_33472__$1 = (function (){var statearr_33481 = state_33472;
(statearr_33481[(8)] = inst_33458__$1);

return statearr_33481;
})();
if(cljs.core.truth_(inst_33459)){
var statearr_33482_33508 = state_33472__$1;
(statearr_33482_33508[(1)] = (13));

} else {
var statearr_33483_33509 = state_33472__$1;
(statearr_33483_33509[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (2))){
var inst_33435 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33436 = (0);
var state_33472__$1 = (function (){var statearr_33484 = state_33472;
(statearr_33484[(7)] = inst_33436);

(statearr_33484[(9)] = inst_33435);

return statearr_33484;
})();
var statearr_33485_33510 = state_33472__$1;
(statearr_33485_33510[(2)] = null);

(statearr_33485_33510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (11))){
var inst_33436 = (state_33472[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33472,(10),Object,null,(9));
var inst_33445 = chs__$1.call(null,inst_33436);
var inst_33446 = done.call(null,inst_33436);
var inst_33447 = cljs.core.async.take_BANG_.call(null,inst_33445,inst_33446);
var state_33472__$1 = state_33472;
var statearr_33486_33511 = state_33472__$1;
(statearr_33486_33511[(2)] = inst_33447);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33472__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (9))){
var inst_33436 = (state_33472[(7)]);
var inst_33449 = (state_33472[(2)]);
var inst_33450 = (inst_33436 + (1));
var inst_33436__$1 = inst_33450;
var state_33472__$1 = (function (){var statearr_33487 = state_33472;
(statearr_33487[(7)] = inst_33436__$1);

(statearr_33487[(10)] = inst_33449);

return statearr_33487;
})();
var statearr_33488_33512 = state_33472__$1;
(statearr_33488_33512[(2)] = null);

(statearr_33488_33512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (5))){
var inst_33456 = (state_33472[(2)]);
var state_33472__$1 = (function (){var statearr_33489 = state_33472;
(statearr_33489[(11)] = inst_33456);

return statearr_33489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33472__$1,(12),dchan);
} else {
if((state_val_33473 === (14))){
var inst_33458 = (state_33472[(8)]);
var inst_33463 = cljs.core.apply.call(null,f,inst_33458);
var state_33472__$1 = state_33472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33472__$1,(16),out,inst_33463);
} else {
if((state_val_33473 === (16))){
var inst_33465 = (state_33472[(2)]);
var state_33472__$1 = (function (){var statearr_33490 = state_33472;
(statearr_33490[(12)] = inst_33465);

return statearr_33490;
})();
var statearr_33491_33513 = state_33472__$1;
(statearr_33491_33513[(2)] = null);

(statearr_33491_33513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (10))){
var inst_33440 = (state_33472[(2)]);
var inst_33441 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33472__$1 = (function (){var statearr_33492 = state_33472;
(statearr_33492[(13)] = inst_33440);

return statearr_33492;
})();
var statearr_33493_33514 = state_33472__$1;
(statearr_33493_33514[(2)] = inst_33441);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33472__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (8))){
var inst_33454 = (state_33472[(2)]);
var state_33472__$1 = state_33472;
var statearr_33494_33515 = state_33472__$1;
(statearr_33494_33515[(2)] = inst_33454);

(statearr_33494_33515[(1)] = (5));


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
});})(c__26259__auto___33500,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26100__auto__,c__26259__auto___33500,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26101__auto__ = null;
var cljs$core$async$state_machine__26101__auto____0 = (function (){
var statearr_33495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33495[(0)] = cljs$core$async$state_machine__26101__auto__);

(statearr_33495[(1)] = (1));

return statearr_33495;
});
var cljs$core$async$state_machine__26101__auto____1 = (function (state_33472){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_33472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e33496){if((e33496 instanceof Object)){
var ex__26104__auto__ = e33496;
var statearr_33497_33516 = state_33472;
(statearr_33497_33516[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33517 = state_33472;
state_33472 = G__33517;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$state_machine__26101__auto__ = function(state_33472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26101__auto____1.call(this,state_33472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26101__auto____0;
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26101__auto____1;
return cljs$core$async$state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___33500,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26261__auto__ = (function (){var statearr_33498 = f__26260__auto__.call(null);
(statearr_33498[(6)] = c__26259__auto___33500);

return statearr_33498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___33500,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33520 = arguments.length;
switch (G__33520) {
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
var c__26259__auto___33574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___33574,out){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___33574,out){
return (function (state_33552){
var state_val_33553 = (state_33552[(1)]);
if((state_val_33553 === (7))){
var inst_33531 = (state_33552[(7)]);
var inst_33532 = (state_33552[(8)]);
var inst_33531__$1 = (state_33552[(2)]);
var inst_33532__$1 = cljs.core.nth.call(null,inst_33531__$1,(0),null);
var inst_33533 = cljs.core.nth.call(null,inst_33531__$1,(1),null);
var inst_33534 = (inst_33532__$1 == null);
var state_33552__$1 = (function (){var statearr_33554 = state_33552;
(statearr_33554[(7)] = inst_33531__$1);

(statearr_33554[(9)] = inst_33533);

(statearr_33554[(8)] = inst_33532__$1);

return statearr_33554;
})();
if(cljs.core.truth_(inst_33534)){
var statearr_33555_33575 = state_33552__$1;
(statearr_33555_33575[(1)] = (8));

} else {
var statearr_33556_33576 = state_33552__$1;
(statearr_33556_33576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (1))){
var inst_33521 = cljs.core.vec.call(null,chs);
var inst_33522 = inst_33521;
var state_33552__$1 = (function (){var statearr_33557 = state_33552;
(statearr_33557[(10)] = inst_33522);

return statearr_33557;
})();
var statearr_33558_33577 = state_33552__$1;
(statearr_33558_33577[(2)] = null);

(statearr_33558_33577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (4))){
var inst_33522 = (state_33552[(10)]);
var state_33552__$1 = state_33552;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33552__$1,(7),inst_33522);
} else {
if((state_val_33553 === (6))){
var inst_33548 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33559_33578 = state_33552__$1;
(statearr_33559_33578[(2)] = inst_33548);

(statearr_33559_33578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (3))){
var inst_33550 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33552__$1,inst_33550);
} else {
if((state_val_33553 === (2))){
var inst_33522 = (state_33552[(10)]);
var inst_33524 = cljs.core.count.call(null,inst_33522);
var inst_33525 = (inst_33524 > (0));
var state_33552__$1 = state_33552;
if(cljs.core.truth_(inst_33525)){
var statearr_33561_33579 = state_33552__$1;
(statearr_33561_33579[(1)] = (4));

} else {
var statearr_33562_33580 = state_33552__$1;
(statearr_33562_33580[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (11))){
var inst_33522 = (state_33552[(10)]);
var inst_33541 = (state_33552[(2)]);
var tmp33560 = inst_33522;
var inst_33522__$1 = tmp33560;
var state_33552__$1 = (function (){var statearr_33563 = state_33552;
(statearr_33563[(11)] = inst_33541);

(statearr_33563[(10)] = inst_33522__$1);

return statearr_33563;
})();
var statearr_33564_33581 = state_33552__$1;
(statearr_33564_33581[(2)] = null);

(statearr_33564_33581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (9))){
var inst_33532 = (state_33552[(8)]);
var state_33552__$1 = state_33552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33552__$1,(11),out,inst_33532);
} else {
if((state_val_33553 === (5))){
var inst_33546 = cljs.core.async.close_BANG_.call(null,out);
var state_33552__$1 = state_33552;
var statearr_33565_33582 = state_33552__$1;
(statearr_33565_33582[(2)] = inst_33546);

(statearr_33565_33582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (10))){
var inst_33544 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33566_33583 = state_33552__$1;
(statearr_33566_33583[(2)] = inst_33544);

(statearr_33566_33583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (8))){
var inst_33531 = (state_33552[(7)]);
var inst_33533 = (state_33552[(9)]);
var inst_33532 = (state_33552[(8)]);
var inst_33522 = (state_33552[(10)]);
var inst_33536 = (function (){var cs = inst_33522;
var vec__33527 = inst_33531;
var v = inst_33532;
var c = inst_33533;
return ((function (cs,vec__33527,v,c,inst_33531,inst_33533,inst_33532,inst_33522,state_val_33553,c__26259__auto___33574,out){
return (function (p1__33518_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33518_SHARP_);
});
;})(cs,vec__33527,v,c,inst_33531,inst_33533,inst_33532,inst_33522,state_val_33553,c__26259__auto___33574,out))
})();
var inst_33537 = cljs.core.filterv.call(null,inst_33536,inst_33522);
var inst_33522__$1 = inst_33537;
var state_33552__$1 = (function (){var statearr_33567 = state_33552;
(statearr_33567[(10)] = inst_33522__$1);

return statearr_33567;
})();
var statearr_33568_33584 = state_33552__$1;
(statearr_33568_33584[(2)] = null);

(statearr_33568_33584[(1)] = (2));


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
});})(c__26259__auto___33574,out))
;
return ((function (switch__26100__auto__,c__26259__auto___33574,out){
return (function() {
var cljs$core$async$state_machine__26101__auto__ = null;
var cljs$core$async$state_machine__26101__auto____0 = (function (){
var statearr_33569 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33569[(0)] = cljs$core$async$state_machine__26101__auto__);

(statearr_33569[(1)] = (1));

return statearr_33569;
});
var cljs$core$async$state_machine__26101__auto____1 = (function (state_33552){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_33552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e33570){if((e33570 instanceof Object)){
var ex__26104__auto__ = e33570;
var statearr_33571_33585 = state_33552;
(statearr_33571_33585[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33586 = state_33552;
state_33552 = G__33586;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$state_machine__26101__auto__ = function(state_33552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26101__auto____1.call(this,state_33552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26101__auto____0;
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26101__auto____1;
return cljs$core$async$state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___33574,out))
})();
var state__26261__auto__ = (function (){var statearr_33572 = f__26260__auto__.call(null);
(statearr_33572[(6)] = c__26259__auto___33574);

return statearr_33572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___33574,out))
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
var G__33588 = arguments.length;
switch (G__33588) {
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
var c__26259__auto___33633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___33633,out){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___33633,out){
return (function (state_33612){
var state_val_33613 = (state_33612[(1)]);
if((state_val_33613 === (7))){
var inst_33594 = (state_33612[(7)]);
var inst_33594__$1 = (state_33612[(2)]);
var inst_33595 = (inst_33594__$1 == null);
var inst_33596 = cljs.core.not.call(null,inst_33595);
var state_33612__$1 = (function (){var statearr_33614 = state_33612;
(statearr_33614[(7)] = inst_33594__$1);

return statearr_33614;
})();
if(inst_33596){
var statearr_33615_33634 = state_33612__$1;
(statearr_33615_33634[(1)] = (8));

} else {
var statearr_33616_33635 = state_33612__$1;
(statearr_33616_33635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (1))){
var inst_33589 = (0);
var state_33612__$1 = (function (){var statearr_33617 = state_33612;
(statearr_33617[(8)] = inst_33589);

return statearr_33617;
})();
var statearr_33618_33636 = state_33612__$1;
(statearr_33618_33636[(2)] = null);

(statearr_33618_33636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (4))){
var state_33612__$1 = state_33612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33612__$1,(7),ch);
} else {
if((state_val_33613 === (6))){
var inst_33607 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
var statearr_33619_33637 = state_33612__$1;
(statearr_33619_33637[(2)] = inst_33607);

(statearr_33619_33637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (3))){
var inst_33609 = (state_33612[(2)]);
var inst_33610 = cljs.core.async.close_BANG_.call(null,out);
var state_33612__$1 = (function (){var statearr_33620 = state_33612;
(statearr_33620[(9)] = inst_33609);

return statearr_33620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33612__$1,inst_33610);
} else {
if((state_val_33613 === (2))){
var inst_33589 = (state_33612[(8)]);
var inst_33591 = (inst_33589 < n);
var state_33612__$1 = state_33612;
if(cljs.core.truth_(inst_33591)){
var statearr_33621_33638 = state_33612__$1;
(statearr_33621_33638[(1)] = (4));

} else {
var statearr_33622_33639 = state_33612__$1;
(statearr_33622_33639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (11))){
var inst_33589 = (state_33612[(8)]);
var inst_33599 = (state_33612[(2)]);
var inst_33600 = (inst_33589 + (1));
var inst_33589__$1 = inst_33600;
var state_33612__$1 = (function (){var statearr_33623 = state_33612;
(statearr_33623[(8)] = inst_33589__$1);

(statearr_33623[(10)] = inst_33599);

return statearr_33623;
})();
var statearr_33624_33640 = state_33612__$1;
(statearr_33624_33640[(2)] = null);

(statearr_33624_33640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (9))){
var state_33612__$1 = state_33612;
var statearr_33625_33641 = state_33612__$1;
(statearr_33625_33641[(2)] = null);

(statearr_33625_33641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (5))){
var state_33612__$1 = state_33612;
var statearr_33626_33642 = state_33612__$1;
(statearr_33626_33642[(2)] = null);

(statearr_33626_33642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (10))){
var inst_33604 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
var statearr_33627_33643 = state_33612__$1;
(statearr_33627_33643[(2)] = inst_33604);

(statearr_33627_33643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (8))){
var inst_33594 = (state_33612[(7)]);
var state_33612__$1 = state_33612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33612__$1,(11),out,inst_33594);
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
});})(c__26259__auto___33633,out))
;
return ((function (switch__26100__auto__,c__26259__auto___33633,out){
return (function() {
var cljs$core$async$state_machine__26101__auto__ = null;
var cljs$core$async$state_machine__26101__auto____0 = (function (){
var statearr_33628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33628[(0)] = cljs$core$async$state_machine__26101__auto__);

(statearr_33628[(1)] = (1));

return statearr_33628;
});
var cljs$core$async$state_machine__26101__auto____1 = (function (state_33612){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_33612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e33629){if((e33629 instanceof Object)){
var ex__26104__auto__ = e33629;
var statearr_33630_33644 = state_33612;
(statearr_33630_33644[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33645 = state_33612;
state_33612 = G__33645;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$state_machine__26101__auto__ = function(state_33612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26101__auto____1.call(this,state_33612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26101__auto____0;
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26101__auto____1;
return cljs$core$async$state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___33633,out))
})();
var state__26261__auto__ = (function (){var statearr_33631 = f__26260__auto__.call(null);
(statearr_33631[(6)] = c__26259__auto___33633);

return statearr_33631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___33633,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33647 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33647 = (function (f,ch,meta33648){
this.f = f;
this.ch = ch;
this.meta33648 = meta33648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33649,meta33648__$1){
var self__ = this;
var _33649__$1 = this;
return (new cljs.core.async.t_cljs$core$async33647(self__.f,self__.ch,meta33648__$1));
});

cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33649){
var self__ = this;
var _33649__$1 = this;
return self__.meta33648;
});

cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33650 = (function (f,ch,meta33648,_,fn1,meta33651){
this.f = f;
this.ch = ch;
this.meta33648 = meta33648;
this._ = _;
this.fn1 = fn1;
this.meta33651 = meta33651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33652,meta33651__$1){
var self__ = this;
var _33652__$1 = this;
return (new cljs.core.async.t_cljs$core$async33650(self__.f,self__.ch,self__.meta33648,self__._,self__.fn1,meta33651__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33652){
var self__ = this;
var _33652__$1 = this;
return self__.meta33651;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33650.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33650.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33646_SHARP_){
return f1.call(null,(((p1__33646_SHARP_ == null))?null:self__.f.call(null,p1__33646_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33650.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33648","meta33648",-1952878592,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33647","cljs.core.async/t_cljs$core$async33647",508540532,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33651","meta33651",971268175,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33650";

cljs.core.async.t_cljs$core$async33650.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async33650");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33650.
 */
cljs.core.async.__GT_t_cljs$core$async33650 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33650(f__$1,ch__$1,meta33648__$1,___$2,fn1__$1,meta33651){
return (new cljs.core.async.t_cljs$core$async33650(f__$1,ch__$1,meta33648__$1,___$2,fn1__$1,meta33651));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33650(self__.f,self__.ch,self__.meta33648,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33648","meta33648",-1952878592,null)], null);
});

cljs.core.async.t_cljs$core$async33647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33647";

cljs.core.async.t_cljs$core$async33647.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async33647");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33647.
 */
cljs.core.async.__GT_t_cljs$core$async33647 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33647(f__$1,ch__$1,meta33648){
return (new cljs.core.async.t_cljs$core$async33647(f__$1,ch__$1,meta33648));
});

}

return (new cljs.core.async.t_cljs$core$async33647(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33653 = (function (f,ch,meta33654){
this.f = f;
this.ch = ch;
this.meta33654 = meta33654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33655,meta33654__$1){
var self__ = this;
var _33655__$1 = this;
return (new cljs.core.async.t_cljs$core$async33653(self__.f,self__.ch,meta33654__$1));
});

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33655){
var self__ = this;
var _33655__$1 = this;
return self__.meta33654;
});

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33654","meta33654",749697966,null)], null);
});

cljs.core.async.t_cljs$core$async33653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33653";

cljs.core.async.t_cljs$core$async33653.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async33653");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33653.
 */
cljs.core.async.__GT_t_cljs$core$async33653 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33653(f__$1,ch__$1,meta33654){
return (new cljs.core.async.t_cljs$core$async33653(f__$1,ch__$1,meta33654));
});

}

return (new cljs.core.async.t_cljs$core$async33653(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33656 = (function (p,ch,meta33657){
this.p = p;
this.ch = ch;
this.meta33657 = meta33657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33658,meta33657__$1){
var self__ = this;
var _33658__$1 = this;
return (new cljs.core.async.t_cljs$core$async33656(self__.p,self__.ch,meta33657__$1));
});

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33658){
var self__ = this;
var _33658__$1 = this;
return self__.meta33657;
});

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33657","meta33657",-1572299145,null)], null);
});

cljs.core.async.t_cljs$core$async33656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33656";

cljs.core.async.t_cljs$core$async33656.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async33656");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33656.
 */
cljs.core.async.__GT_t_cljs$core$async33656 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33656(p__$1,ch__$1,meta33657){
return (new cljs.core.async.t_cljs$core$async33656(p__$1,ch__$1,meta33657));
});

}

return (new cljs.core.async.t_cljs$core$async33656(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33660 = arguments.length;
switch (G__33660) {
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
var c__26259__auto___33700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___33700,out){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___33700,out){
return (function (state_33681){
var state_val_33682 = (state_33681[(1)]);
if((state_val_33682 === (7))){
var inst_33677 = (state_33681[(2)]);
var state_33681__$1 = state_33681;
var statearr_33683_33701 = state_33681__$1;
(statearr_33683_33701[(2)] = inst_33677);

(statearr_33683_33701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (1))){
var state_33681__$1 = state_33681;
var statearr_33684_33702 = state_33681__$1;
(statearr_33684_33702[(2)] = null);

(statearr_33684_33702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (4))){
var inst_33663 = (state_33681[(7)]);
var inst_33663__$1 = (state_33681[(2)]);
var inst_33664 = (inst_33663__$1 == null);
var state_33681__$1 = (function (){var statearr_33685 = state_33681;
(statearr_33685[(7)] = inst_33663__$1);

return statearr_33685;
})();
if(cljs.core.truth_(inst_33664)){
var statearr_33686_33703 = state_33681__$1;
(statearr_33686_33703[(1)] = (5));

} else {
var statearr_33687_33704 = state_33681__$1;
(statearr_33687_33704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (6))){
var inst_33663 = (state_33681[(7)]);
var inst_33668 = p.call(null,inst_33663);
var state_33681__$1 = state_33681;
if(cljs.core.truth_(inst_33668)){
var statearr_33688_33705 = state_33681__$1;
(statearr_33688_33705[(1)] = (8));

} else {
var statearr_33689_33706 = state_33681__$1;
(statearr_33689_33706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (3))){
var inst_33679 = (state_33681[(2)]);
var state_33681__$1 = state_33681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33681__$1,inst_33679);
} else {
if((state_val_33682 === (2))){
var state_33681__$1 = state_33681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33681__$1,(4),ch);
} else {
if((state_val_33682 === (11))){
var inst_33671 = (state_33681[(2)]);
var state_33681__$1 = state_33681;
var statearr_33690_33707 = state_33681__$1;
(statearr_33690_33707[(2)] = inst_33671);

(statearr_33690_33707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (9))){
var state_33681__$1 = state_33681;
var statearr_33691_33708 = state_33681__$1;
(statearr_33691_33708[(2)] = null);

(statearr_33691_33708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (5))){
var inst_33666 = cljs.core.async.close_BANG_.call(null,out);
var state_33681__$1 = state_33681;
var statearr_33692_33709 = state_33681__$1;
(statearr_33692_33709[(2)] = inst_33666);

(statearr_33692_33709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (10))){
var inst_33674 = (state_33681[(2)]);
var state_33681__$1 = (function (){var statearr_33693 = state_33681;
(statearr_33693[(8)] = inst_33674);

return statearr_33693;
})();
var statearr_33694_33710 = state_33681__$1;
(statearr_33694_33710[(2)] = null);

(statearr_33694_33710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (8))){
var inst_33663 = (state_33681[(7)]);
var state_33681__$1 = state_33681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33681__$1,(11),out,inst_33663);
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
});})(c__26259__auto___33700,out))
;
return ((function (switch__26100__auto__,c__26259__auto___33700,out){
return (function() {
var cljs$core$async$state_machine__26101__auto__ = null;
var cljs$core$async$state_machine__26101__auto____0 = (function (){
var statearr_33695 = [null,null,null,null,null,null,null,null,null];
(statearr_33695[(0)] = cljs$core$async$state_machine__26101__auto__);

(statearr_33695[(1)] = (1));

return statearr_33695;
});
var cljs$core$async$state_machine__26101__auto____1 = (function (state_33681){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_33681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e33696){if((e33696 instanceof Object)){
var ex__26104__auto__ = e33696;
var statearr_33697_33711 = state_33681;
(statearr_33697_33711[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33712 = state_33681;
state_33681 = G__33712;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$state_machine__26101__auto__ = function(state_33681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26101__auto____1.call(this,state_33681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26101__auto____0;
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26101__auto____1;
return cljs$core$async$state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___33700,out))
})();
var state__26261__auto__ = (function (){var statearr_33698 = f__26260__auto__.call(null);
(statearr_33698[(6)] = c__26259__auto___33700);

return statearr_33698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___33700,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33714 = arguments.length;
switch (G__33714) {
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
var c__26259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto__){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto__){
return (function (state_33777){
var state_val_33778 = (state_33777[(1)]);
if((state_val_33778 === (7))){
var inst_33773 = (state_33777[(2)]);
var state_33777__$1 = state_33777;
var statearr_33779_33817 = state_33777__$1;
(statearr_33779_33817[(2)] = inst_33773);

(statearr_33779_33817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (20))){
var inst_33743 = (state_33777[(7)]);
var inst_33754 = (state_33777[(2)]);
var inst_33755 = cljs.core.next.call(null,inst_33743);
var inst_33729 = inst_33755;
var inst_33730 = null;
var inst_33731 = (0);
var inst_33732 = (0);
var state_33777__$1 = (function (){var statearr_33780 = state_33777;
(statearr_33780[(8)] = inst_33754);

(statearr_33780[(9)] = inst_33730);

(statearr_33780[(10)] = inst_33729);

(statearr_33780[(11)] = inst_33731);

(statearr_33780[(12)] = inst_33732);

return statearr_33780;
})();
var statearr_33781_33818 = state_33777__$1;
(statearr_33781_33818[(2)] = null);

(statearr_33781_33818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (1))){
var state_33777__$1 = state_33777;
var statearr_33782_33819 = state_33777__$1;
(statearr_33782_33819[(2)] = null);

(statearr_33782_33819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (4))){
var inst_33718 = (state_33777[(13)]);
var inst_33718__$1 = (state_33777[(2)]);
var inst_33719 = (inst_33718__$1 == null);
var state_33777__$1 = (function (){var statearr_33783 = state_33777;
(statearr_33783[(13)] = inst_33718__$1);

return statearr_33783;
})();
if(cljs.core.truth_(inst_33719)){
var statearr_33784_33820 = state_33777__$1;
(statearr_33784_33820[(1)] = (5));

} else {
var statearr_33785_33821 = state_33777__$1;
(statearr_33785_33821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (15))){
var state_33777__$1 = state_33777;
var statearr_33789_33822 = state_33777__$1;
(statearr_33789_33822[(2)] = null);

(statearr_33789_33822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (21))){
var state_33777__$1 = state_33777;
var statearr_33790_33823 = state_33777__$1;
(statearr_33790_33823[(2)] = null);

(statearr_33790_33823[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (13))){
var inst_33730 = (state_33777[(9)]);
var inst_33729 = (state_33777[(10)]);
var inst_33731 = (state_33777[(11)]);
var inst_33732 = (state_33777[(12)]);
var inst_33739 = (state_33777[(2)]);
var inst_33740 = (inst_33732 + (1));
var tmp33786 = inst_33730;
var tmp33787 = inst_33729;
var tmp33788 = inst_33731;
var inst_33729__$1 = tmp33787;
var inst_33730__$1 = tmp33786;
var inst_33731__$1 = tmp33788;
var inst_33732__$1 = inst_33740;
var state_33777__$1 = (function (){var statearr_33791 = state_33777;
(statearr_33791[(9)] = inst_33730__$1);

(statearr_33791[(10)] = inst_33729__$1);

(statearr_33791[(14)] = inst_33739);

(statearr_33791[(11)] = inst_33731__$1);

(statearr_33791[(12)] = inst_33732__$1);

return statearr_33791;
})();
var statearr_33792_33824 = state_33777__$1;
(statearr_33792_33824[(2)] = null);

(statearr_33792_33824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (22))){
var state_33777__$1 = state_33777;
var statearr_33793_33825 = state_33777__$1;
(statearr_33793_33825[(2)] = null);

(statearr_33793_33825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (6))){
var inst_33718 = (state_33777[(13)]);
var inst_33727 = f.call(null,inst_33718);
var inst_33728 = cljs.core.seq.call(null,inst_33727);
var inst_33729 = inst_33728;
var inst_33730 = null;
var inst_33731 = (0);
var inst_33732 = (0);
var state_33777__$1 = (function (){var statearr_33794 = state_33777;
(statearr_33794[(9)] = inst_33730);

(statearr_33794[(10)] = inst_33729);

(statearr_33794[(11)] = inst_33731);

(statearr_33794[(12)] = inst_33732);

return statearr_33794;
})();
var statearr_33795_33826 = state_33777__$1;
(statearr_33795_33826[(2)] = null);

(statearr_33795_33826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (17))){
var inst_33743 = (state_33777[(7)]);
var inst_33747 = cljs.core.chunk_first.call(null,inst_33743);
var inst_33748 = cljs.core.chunk_rest.call(null,inst_33743);
var inst_33749 = cljs.core.count.call(null,inst_33747);
var inst_33729 = inst_33748;
var inst_33730 = inst_33747;
var inst_33731 = inst_33749;
var inst_33732 = (0);
var state_33777__$1 = (function (){var statearr_33796 = state_33777;
(statearr_33796[(9)] = inst_33730);

(statearr_33796[(10)] = inst_33729);

(statearr_33796[(11)] = inst_33731);

(statearr_33796[(12)] = inst_33732);

return statearr_33796;
})();
var statearr_33797_33827 = state_33777__$1;
(statearr_33797_33827[(2)] = null);

(statearr_33797_33827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (3))){
var inst_33775 = (state_33777[(2)]);
var state_33777__$1 = state_33777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33777__$1,inst_33775);
} else {
if((state_val_33778 === (12))){
var inst_33763 = (state_33777[(2)]);
var state_33777__$1 = state_33777;
var statearr_33798_33828 = state_33777__$1;
(statearr_33798_33828[(2)] = inst_33763);

(statearr_33798_33828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (2))){
var state_33777__$1 = state_33777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33777__$1,(4),in$);
} else {
if((state_val_33778 === (23))){
var inst_33771 = (state_33777[(2)]);
var state_33777__$1 = state_33777;
var statearr_33799_33829 = state_33777__$1;
(statearr_33799_33829[(2)] = inst_33771);

(statearr_33799_33829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (19))){
var inst_33758 = (state_33777[(2)]);
var state_33777__$1 = state_33777;
var statearr_33800_33830 = state_33777__$1;
(statearr_33800_33830[(2)] = inst_33758);

(statearr_33800_33830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (11))){
var inst_33743 = (state_33777[(7)]);
var inst_33729 = (state_33777[(10)]);
var inst_33743__$1 = cljs.core.seq.call(null,inst_33729);
var state_33777__$1 = (function (){var statearr_33801 = state_33777;
(statearr_33801[(7)] = inst_33743__$1);

return statearr_33801;
})();
if(inst_33743__$1){
var statearr_33802_33831 = state_33777__$1;
(statearr_33802_33831[(1)] = (14));

} else {
var statearr_33803_33832 = state_33777__$1;
(statearr_33803_33832[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (9))){
var inst_33765 = (state_33777[(2)]);
var inst_33766 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33777__$1 = (function (){var statearr_33804 = state_33777;
(statearr_33804[(15)] = inst_33765);

return statearr_33804;
})();
if(cljs.core.truth_(inst_33766)){
var statearr_33805_33833 = state_33777__$1;
(statearr_33805_33833[(1)] = (21));

} else {
var statearr_33806_33834 = state_33777__$1;
(statearr_33806_33834[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (5))){
var inst_33721 = cljs.core.async.close_BANG_.call(null,out);
var state_33777__$1 = state_33777;
var statearr_33807_33835 = state_33777__$1;
(statearr_33807_33835[(2)] = inst_33721);

(statearr_33807_33835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (14))){
var inst_33743 = (state_33777[(7)]);
var inst_33745 = cljs.core.chunked_seq_QMARK_.call(null,inst_33743);
var state_33777__$1 = state_33777;
if(inst_33745){
var statearr_33808_33836 = state_33777__$1;
(statearr_33808_33836[(1)] = (17));

} else {
var statearr_33809_33837 = state_33777__$1;
(statearr_33809_33837[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (16))){
var inst_33761 = (state_33777[(2)]);
var state_33777__$1 = state_33777;
var statearr_33810_33838 = state_33777__$1;
(statearr_33810_33838[(2)] = inst_33761);

(statearr_33810_33838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (10))){
var inst_33730 = (state_33777[(9)]);
var inst_33732 = (state_33777[(12)]);
var inst_33737 = cljs.core._nth.call(null,inst_33730,inst_33732);
var state_33777__$1 = state_33777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33777__$1,(13),out,inst_33737);
} else {
if((state_val_33778 === (18))){
var inst_33743 = (state_33777[(7)]);
var inst_33752 = cljs.core.first.call(null,inst_33743);
var state_33777__$1 = state_33777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33777__$1,(20),out,inst_33752);
} else {
if((state_val_33778 === (8))){
var inst_33731 = (state_33777[(11)]);
var inst_33732 = (state_33777[(12)]);
var inst_33734 = (inst_33732 < inst_33731);
var inst_33735 = inst_33734;
var state_33777__$1 = state_33777;
if(cljs.core.truth_(inst_33735)){
var statearr_33811_33839 = state_33777__$1;
(statearr_33811_33839[(1)] = (10));

} else {
var statearr_33812_33840 = state_33777__$1;
(statearr_33812_33840[(1)] = (11));

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
});})(c__26259__auto__))
;
return ((function (switch__26100__auto__,c__26259__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26101__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26101__auto____0 = (function (){
var statearr_33813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33813[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26101__auto__);

(statearr_33813[(1)] = (1));

return statearr_33813;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26101__auto____1 = (function (state_33777){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_33777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e33814){if((e33814 instanceof Object)){
var ex__26104__auto__ = e33814;
var statearr_33815_33841 = state_33777;
(statearr_33815_33841[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33842 = state_33777;
state_33777 = G__33842;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26101__auto__ = function(state_33777){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26101__auto____1.call(this,state_33777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26101__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26101__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto__))
})();
var state__26261__auto__ = (function (){var statearr_33816 = f__26260__auto__.call(null);
(statearr_33816[(6)] = c__26259__auto__);

return statearr_33816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto__))
);

return c__26259__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33844 = arguments.length;
switch (G__33844) {
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
var G__33847 = arguments.length;
switch (G__33847) {
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
var G__33850 = arguments.length;
switch (G__33850) {
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
var c__26259__auto___33897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___33897,out){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___33897,out){
return (function (state_33874){
var state_val_33875 = (state_33874[(1)]);
if((state_val_33875 === (7))){
var inst_33869 = (state_33874[(2)]);
var state_33874__$1 = state_33874;
var statearr_33876_33898 = state_33874__$1;
(statearr_33876_33898[(2)] = inst_33869);

(statearr_33876_33898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (1))){
var inst_33851 = null;
var state_33874__$1 = (function (){var statearr_33877 = state_33874;
(statearr_33877[(7)] = inst_33851);

return statearr_33877;
})();
var statearr_33878_33899 = state_33874__$1;
(statearr_33878_33899[(2)] = null);

(statearr_33878_33899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (4))){
var inst_33854 = (state_33874[(8)]);
var inst_33854__$1 = (state_33874[(2)]);
var inst_33855 = (inst_33854__$1 == null);
var inst_33856 = cljs.core.not.call(null,inst_33855);
var state_33874__$1 = (function (){var statearr_33879 = state_33874;
(statearr_33879[(8)] = inst_33854__$1);

return statearr_33879;
})();
if(inst_33856){
var statearr_33880_33900 = state_33874__$1;
(statearr_33880_33900[(1)] = (5));

} else {
var statearr_33881_33901 = state_33874__$1;
(statearr_33881_33901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (6))){
var state_33874__$1 = state_33874;
var statearr_33882_33902 = state_33874__$1;
(statearr_33882_33902[(2)] = null);

(statearr_33882_33902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (3))){
var inst_33871 = (state_33874[(2)]);
var inst_33872 = cljs.core.async.close_BANG_.call(null,out);
var state_33874__$1 = (function (){var statearr_33883 = state_33874;
(statearr_33883[(9)] = inst_33871);

return statearr_33883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33874__$1,inst_33872);
} else {
if((state_val_33875 === (2))){
var state_33874__$1 = state_33874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33874__$1,(4),ch);
} else {
if((state_val_33875 === (11))){
var inst_33854 = (state_33874[(8)]);
var inst_33863 = (state_33874[(2)]);
var inst_33851 = inst_33854;
var state_33874__$1 = (function (){var statearr_33884 = state_33874;
(statearr_33884[(7)] = inst_33851);

(statearr_33884[(10)] = inst_33863);

return statearr_33884;
})();
var statearr_33885_33903 = state_33874__$1;
(statearr_33885_33903[(2)] = null);

(statearr_33885_33903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (9))){
var inst_33854 = (state_33874[(8)]);
var state_33874__$1 = state_33874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33874__$1,(11),out,inst_33854);
} else {
if((state_val_33875 === (5))){
var inst_33851 = (state_33874[(7)]);
var inst_33854 = (state_33874[(8)]);
var inst_33858 = cljs.core._EQ_.call(null,inst_33854,inst_33851);
var state_33874__$1 = state_33874;
if(inst_33858){
var statearr_33887_33904 = state_33874__$1;
(statearr_33887_33904[(1)] = (8));

} else {
var statearr_33888_33905 = state_33874__$1;
(statearr_33888_33905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (10))){
var inst_33866 = (state_33874[(2)]);
var state_33874__$1 = state_33874;
var statearr_33889_33906 = state_33874__$1;
(statearr_33889_33906[(2)] = inst_33866);

(statearr_33889_33906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (8))){
var inst_33851 = (state_33874[(7)]);
var tmp33886 = inst_33851;
var inst_33851__$1 = tmp33886;
var state_33874__$1 = (function (){var statearr_33890 = state_33874;
(statearr_33890[(7)] = inst_33851__$1);

return statearr_33890;
})();
var statearr_33891_33907 = state_33874__$1;
(statearr_33891_33907[(2)] = null);

(statearr_33891_33907[(1)] = (2));


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
});})(c__26259__auto___33897,out))
;
return ((function (switch__26100__auto__,c__26259__auto___33897,out){
return (function() {
var cljs$core$async$state_machine__26101__auto__ = null;
var cljs$core$async$state_machine__26101__auto____0 = (function (){
var statearr_33892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33892[(0)] = cljs$core$async$state_machine__26101__auto__);

(statearr_33892[(1)] = (1));

return statearr_33892;
});
var cljs$core$async$state_machine__26101__auto____1 = (function (state_33874){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_33874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e33893){if((e33893 instanceof Object)){
var ex__26104__auto__ = e33893;
var statearr_33894_33908 = state_33874;
(statearr_33894_33908[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33909 = state_33874;
state_33874 = G__33909;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$state_machine__26101__auto__ = function(state_33874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26101__auto____1.call(this,state_33874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26101__auto____0;
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26101__auto____1;
return cljs$core$async$state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___33897,out))
})();
var state__26261__auto__ = (function (){var statearr_33895 = f__26260__auto__.call(null);
(statearr_33895[(6)] = c__26259__auto___33897);

return statearr_33895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___33897,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33911 = arguments.length;
switch (G__33911) {
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
var c__26259__auto___33977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___33977,out){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___33977,out){
return (function (state_33949){
var state_val_33950 = (state_33949[(1)]);
if((state_val_33950 === (7))){
var inst_33945 = (state_33949[(2)]);
var state_33949__$1 = state_33949;
var statearr_33951_33978 = state_33949__$1;
(statearr_33951_33978[(2)] = inst_33945);

(statearr_33951_33978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (1))){
var inst_33912 = (new Array(n));
var inst_33913 = inst_33912;
var inst_33914 = (0);
var state_33949__$1 = (function (){var statearr_33952 = state_33949;
(statearr_33952[(7)] = inst_33913);

(statearr_33952[(8)] = inst_33914);

return statearr_33952;
})();
var statearr_33953_33979 = state_33949__$1;
(statearr_33953_33979[(2)] = null);

(statearr_33953_33979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (4))){
var inst_33917 = (state_33949[(9)]);
var inst_33917__$1 = (state_33949[(2)]);
var inst_33918 = (inst_33917__$1 == null);
var inst_33919 = cljs.core.not.call(null,inst_33918);
var state_33949__$1 = (function (){var statearr_33954 = state_33949;
(statearr_33954[(9)] = inst_33917__$1);

return statearr_33954;
})();
if(inst_33919){
var statearr_33955_33980 = state_33949__$1;
(statearr_33955_33980[(1)] = (5));

} else {
var statearr_33956_33981 = state_33949__$1;
(statearr_33956_33981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (15))){
var inst_33939 = (state_33949[(2)]);
var state_33949__$1 = state_33949;
var statearr_33957_33982 = state_33949__$1;
(statearr_33957_33982[(2)] = inst_33939);

(statearr_33957_33982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (13))){
var state_33949__$1 = state_33949;
var statearr_33958_33983 = state_33949__$1;
(statearr_33958_33983[(2)] = null);

(statearr_33958_33983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (6))){
var inst_33914 = (state_33949[(8)]);
var inst_33935 = (inst_33914 > (0));
var state_33949__$1 = state_33949;
if(cljs.core.truth_(inst_33935)){
var statearr_33959_33984 = state_33949__$1;
(statearr_33959_33984[(1)] = (12));

} else {
var statearr_33960_33985 = state_33949__$1;
(statearr_33960_33985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (3))){
var inst_33947 = (state_33949[(2)]);
var state_33949__$1 = state_33949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33949__$1,inst_33947);
} else {
if((state_val_33950 === (12))){
var inst_33913 = (state_33949[(7)]);
var inst_33937 = cljs.core.vec.call(null,inst_33913);
var state_33949__$1 = state_33949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33949__$1,(15),out,inst_33937);
} else {
if((state_val_33950 === (2))){
var state_33949__$1 = state_33949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33949__$1,(4),ch);
} else {
if((state_val_33950 === (11))){
var inst_33929 = (state_33949[(2)]);
var inst_33930 = (new Array(n));
var inst_33913 = inst_33930;
var inst_33914 = (0);
var state_33949__$1 = (function (){var statearr_33961 = state_33949;
(statearr_33961[(7)] = inst_33913);

(statearr_33961[(10)] = inst_33929);

(statearr_33961[(8)] = inst_33914);

return statearr_33961;
})();
var statearr_33962_33986 = state_33949__$1;
(statearr_33962_33986[(2)] = null);

(statearr_33962_33986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (9))){
var inst_33913 = (state_33949[(7)]);
var inst_33927 = cljs.core.vec.call(null,inst_33913);
var state_33949__$1 = state_33949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33949__$1,(11),out,inst_33927);
} else {
if((state_val_33950 === (5))){
var inst_33913 = (state_33949[(7)]);
var inst_33914 = (state_33949[(8)]);
var inst_33917 = (state_33949[(9)]);
var inst_33922 = (state_33949[(11)]);
var inst_33921 = (inst_33913[inst_33914] = inst_33917);
var inst_33922__$1 = (inst_33914 + (1));
var inst_33923 = (inst_33922__$1 < n);
var state_33949__$1 = (function (){var statearr_33963 = state_33949;
(statearr_33963[(12)] = inst_33921);

(statearr_33963[(11)] = inst_33922__$1);

return statearr_33963;
})();
if(cljs.core.truth_(inst_33923)){
var statearr_33964_33987 = state_33949__$1;
(statearr_33964_33987[(1)] = (8));

} else {
var statearr_33965_33988 = state_33949__$1;
(statearr_33965_33988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (14))){
var inst_33942 = (state_33949[(2)]);
var inst_33943 = cljs.core.async.close_BANG_.call(null,out);
var state_33949__$1 = (function (){var statearr_33967 = state_33949;
(statearr_33967[(13)] = inst_33942);

return statearr_33967;
})();
var statearr_33968_33989 = state_33949__$1;
(statearr_33968_33989[(2)] = inst_33943);

(statearr_33968_33989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (10))){
var inst_33933 = (state_33949[(2)]);
var state_33949__$1 = state_33949;
var statearr_33969_33990 = state_33949__$1;
(statearr_33969_33990[(2)] = inst_33933);

(statearr_33969_33990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33950 === (8))){
var inst_33913 = (state_33949[(7)]);
var inst_33922 = (state_33949[(11)]);
var tmp33966 = inst_33913;
var inst_33913__$1 = tmp33966;
var inst_33914 = inst_33922;
var state_33949__$1 = (function (){var statearr_33970 = state_33949;
(statearr_33970[(7)] = inst_33913__$1);

(statearr_33970[(8)] = inst_33914);

return statearr_33970;
})();
var statearr_33971_33991 = state_33949__$1;
(statearr_33971_33991[(2)] = null);

(statearr_33971_33991[(1)] = (2));


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
});})(c__26259__auto___33977,out))
;
return ((function (switch__26100__auto__,c__26259__auto___33977,out){
return (function() {
var cljs$core$async$state_machine__26101__auto__ = null;
var cljs$core$async$state_machine__26101__auto____0 = (function (){
var statearr_33972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33972[(0)] = cljs$core$async$state_machine__26101__auto__);

(statearr_33972[(1)] = (1));

return statearr_33972;
});
var cljs$core$async$state_machine__26101__auto____1 = (function (state_33949){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_33949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e33973){if((e33973 instanceof Object)){
var ex__26104__auto__ = e33973;
var statearr_33974_33992 = state_33949;
(statearr_33974_33992[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33993 = state_33949;
state_33949 = G__33993;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$state_machine__26101__auto__ = function(state_33949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26101__auto____1.call(this,state_33949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26101__auto____0;
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26101__auto____1;
return cljs$core$async$state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___33977,out))
})();
var state__26261__auto__ = (function (){var statearr_33975 = f__26260__auto__.call(null);
(statearr_33975[(6)] = c__26259__auto___33977);

return statearr_33975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___33977,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33995 = arguments.length;
switch (G__33995) {
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
var c__26259__auto___34065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26259__auto___34065,out){
return (function (){
var f__26260__auto__ = (function (){var switch__26100__auto__ = ((function (c__26259__auto___34065,out){
return (function (state_34037){
var state_val_34038 = (state_34037[(1)]);
if((state_val_34038 === (7))){
var inst_34033 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
var statearr_34039_34066 = state_34037__$1;
(statearr_34039_34066[(2)] = inst_34033);

(statearr_34039_34066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (1))){
var inst_33996 = [];
var inst_33997 = inst_33996;
var inst_33998 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34037__$1 = (function (){var statearr_34040 = state_34037;
(statearr_34040[(7)] = inst_33998);

(statearr_34040[(8)] = inst_33997);

return statearr_34040;
})();
var statearr_34041_34067 = state_34037__$1;
(statearr_34041_34067[(2)] = null);

(statearr_34041_34067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (4))){
var inst_34001 = (state_34037[(9)]);
var inst_34001__$1 = (state_34037[(2)]);
var inst_34002 = (inst_34001__$1 == null);
var inst_34003 = cljs.core.not.call(null,inst_34002);
var state_34037__$1 = (function (){var statearr_34042 = state_34037;
(statearr_34042[(9)] = inst_34001__$1);

return statearr_34042;
})();
if(inst_34003){
var statearr_34043_34068 = state_34037__$1;
(statearr_34043_34068[(1)] = (5));

} else {
var statearr_34044_34069 = state_34037__$1;
(statearr_34044_34069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (15))){
var inst_34027 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
var statearr_34045_34070 = state_34037__$1;
(statearr_34045_34070[(2)] = inst_34027);

(statearr_34045_34070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (13))){
var state_34037__$1 = state_34037;
var statearr_34046_34071 = state_34037__$1;
(statearr_34046_34071[(2)] = null);

(statearr_34046_34071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (6))){
var inst_33997 = (state_34037[(8)]);
var inst_34022 = inst_33997.length;
var inst_34023 = (inst_34022 > (0));
var state_34037__$1 = state_34037;
if(cljs.core.truth_(inst_34023)){
var statearr_34047_34072 = state_34037__$1;
(statearr_34047_34072[(1)] = (12));

} else {
var statearr_34048_34073 = state_34037__$1;
(statearr_34048_34073[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (3))){
var inst_34035 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34037__$1,inst_34035);
} else {
if((state_val_34038 === (12))){
var inst_33997 = (state_34037[(8)]);
var inst_34025 = cljs.core.vec.call(null,inst_33997);
var state_34037__$1 = state_34037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34037__$1,(15),out,inst_34025);
} else {
if((state_val_34038 === (2))){
var state_34037__$1 = state_34037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34037__$1,(4),ch);
} else {
if((state_val_34038 === (11))){
var inst_34001 = (state_34037[(9)]);
var inst_34005 = (state_34037[(10)]);
var inst_34015 = (state_34037[(2)]);
var inst_34016 = [];
var inst_34017 = inst_34016.push(inst_34001);
var inst_33997 = inst_34016;
var inst_33998 = inst_34005;
var state_34037__$1 = (function (){var statearr_34049 = state_34037;
(statearr_34049[(11)] = inst_34015);

(statearr_34049[(7)] = inst_33998);

(statearr_34049[(12)] = inst_34017);

(statearr_34049[(8)] = inst_33997);

return statearr_34049;
})();
var statearr_34050_34074 = state_34037__$1;
(statearr_34050_34074[(2)] = null);

(statearr_34050_34074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (9))){
var inst_33997 = (state_34037[(8)]);
var inst_34013 = cljs.core.vec.call(null,inst_33997);
var state_34037__$1 = state_34037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34037__$1,(11),out,inst_34013);
} else {
if((state_val_34038 === (5))){
var inst_34001 = (state_34037[(9)]);
var inst_33998 = (state_34037[(7)]);
var inst_34005 = (state_34037[(10)]);
var inst_34005__$1 = f.call(null,inst_34001);
var inst_34006 = cljs.core._EQ_.call(null,inst_34005__$1,inst_33998);
var inst_34007 = cljs.core.keyword_identical_QMARK_.call(null,inst_33998,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34008 = ((inst_34006) || (inst_34007));
var state_34037__$1 = (function (){var statearr_34051 = state_34037;
(statearr_34051[(10)] = inst_34005__$1);

return statearr_34051;
})();
if(cljs.core.truth_(inst_34008)){
var statearr_34052_34075 = state_34037__$1;
(statearr_34052_34075[(1)] = (8));

} else {
var statearr_34053_34076 = state_34037__$1;
(statearr_34053_34076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (14))){
var inst_34030 = (state_34037[(2)]);
var inst_34031 = cljs.core.async.close_BANG_.call(null,out);
var state_34037__$1 = (function (){var statearr_34055 = state_34037;
(statearr_34055[(13)] = inst_34030);

return statearr_34055;
})();
var statearr_34056_34077 = state_34037__$1;
(statearr_34056_34077[(2)] = inst_34031);

(statearr_34056_34077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (10))){
var inst_34020 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
var statearr_34057_34078 = state_34037__$1;
(statearr_34057_34078[(2)] = inst_34020);

(statearr_34057_34078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (8))){
var inst_34001 = (state_34037[(9)]);
var inst_34005 = (state_34037[(10)]);
var inst_33997 = (state_34037[(8)]);
var inst_34010 = inst_33997.push(inst_34001);
var tmp34054 = inst_33997;
var inst_33997__$1 = tmp34054;
var inst_33998 = inst_34005;
var state_34037__$1 = (function (){var statearr_34058 = state_34037;
(statearr_34058[(14)] = inst_34010);

(statearr_34058[(7)] = inst_33998);

(statearr_34058[(8)] = inst_33997__$1);

return statearr_34058;
})();
var statearr_34059_34079 = state_34037__$1;
(statearr_34059_34079[(2)] = null);

(statearr_34059_34079[(1)] = (2));


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
});})(c__26259__auto___34065,out))
;
return ((function (switch__26100__auto__,c__26259__auto___34065,out){
return (function() {
var cljs$core$async$state_machine__26101__auto__ = null;
var cljs$core$async$state_machine__26101__auto____0 = (function (){
var statearr_34060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34060[(0)] = cljs$core$async$state_machine__26101__auto__);

(statearr_34060[(1)] = (1));

return statearr_34060;
});
var cljs$core$async$state_machine__26101__auto____1 = (function (state_34037){
while(true){
var ret_value__26102__auto__ = (function (){try{while(true){
var result__26103__auto__ = switch__26100__auto__.call(null,state_34037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26103__auto__;
}
break;
}
}catch (e34061){if((e34061 instanceof Object)){
var ex__26104__auto__ = e34061;
var statearr_34062_34080 = state_34037;
(statearr_34062_34080[(5)] = ex__26104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34081 = state_34037;
state_34037 = G__34081;
continue;
} else {
return ret_value__26102__auto__;
}
break;
}
});
cljs$core$async$state_machine__26101__auto__ = function(state_34037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26101__auto____1.call(this,state_34037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26101__auto____0;
cljs$core$async$state_machine__26101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26101__auto____1;
return cljs$core$async$state_machine__26101__auto__;
})()
;})(switch__26100__auto__,c__26259__auto___34065,out))
})();
var state__26261__auto__ = (function (){var statearr_34063 = f__26260__auto__.call(null);
(statearr_34063[(6)] = c__26259__auto___34065);

return statearr_34063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26261__auto__);
});})(c__26259__auto___34065,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1543435810897
