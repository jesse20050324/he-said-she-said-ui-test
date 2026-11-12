(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))f(s);new MutationObserver(s=>{for(const y of s)if(y.type==="childList")for(const v of y.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&f(v)}).observe(document,{childList:!0,subtree:!0});function h(s){const y={};return s.integrity&&(y.integrity=s.integrity),s.referrerPolicy&&(y.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?y.credentials="include":s.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function f(s){if(s.ep)return;s.ep=!0;const y=h(s);fetch(s.href,y)}})();var uo={exports:{}},Gi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function Av(){if(my)return Gi;my=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function h(f,s,y){var v=null;if(y!==void 0&&(v=""+y),s.key!==void 0&&(v=""+s.key),"key"in s){y={};for(var p in s)p!=="key"&&(y[p]=s[p])}else y=s;return s=y.ref,{$$typeof:a,type:f,key:v,ref:s!==void 0?s:null,props:y}}return Gi.Fragment=o,Gi.jsx=h,Gi.jsxs=h,Gi}var yy;function Nv(){return yy||(yy=1,uo.exports=Av()),uo.exports}var w=Nv(),ao={exports:{}},_n={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function Ov(){if(gy)return _n;gy=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),v=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),j=Symbol.iterator;function tn(O){return O===null||typeof O!="object"?null:(O=j&&O[j]||O["@@iterator"],typeof O=="function"?O:null)}var rn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,qn={};function $(O,V,un){this.props=O,this.context=V,this.refs=qn,this.updater=un||rn}$.prototype.isReactComponent={},$.prototype.setState=function(O,V){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,V,"setState")},$.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function vn(){}vn.prototype=$.prototype;function dn(O,V,un){this.props=O,this.context=V,this.refs=qn,this.updater=un||rn}var Tn=dn.prototype=new vn;Tn.constructor=dn,P(Tn,$.prototype),Tn.isPureReactComponent=!0;var Zn=Array.isArray;function pn(){}var Mn={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function Un(O,V,un){var cn=un.ref;return{$$typeof:a,type:O,key:V,ref:cn!==void 0?cn:null,props:un}}function nn(O,V){return Un(O.type,V,O.props)}function W(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function Rn(O){var V={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(un){return V[un]})}var An=/\/+/g;function Qn(O,V){return typeof O=="object"&&O!==null&&O.key!=null?Rn(""+O.key):V.toString(36)}function U(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(pn,pn):(O.status="pending",O.then(function(V){O.status==="pending"&&(O.status="fulfilled",O.value=V)},function(V){O.status==="pending"&&(O.status="rejected",O.reason=V)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function on(O,V,un,cn,Nn){var Dn=typeof O;(Dn==="undefined"||Dn==="boolean")&&(O=null);var mn=!1;if(O===null)mn=!0;else switch(Dn){case"bigint":case"string":case"number":mn=!0;break;case"object":switch(O.$$typeof){case a:case o:mn=!0;break;case E:return mn=O._init,on(mn(O._payload),V,un,cn,Nn)}}if(mn)return Nn=Nn(O),mn=cn===""?"."+Qn(O,0):cn,Zn(Nn)?(un="",mn!=null&&(un=mn.replace(An,"$&/")+"/"),on(Nn,V,un,"",function(He){return He})):Nn!=null&&(W(Nn)&&(Nn=nn(Nn,un+(Nn.key==null||O&&O.key===Nn.key?"":(""+Nn.key).replace(An,"$&/")+"/")+mn)),V.push(Nn)),1;mn=0;var F=cn===""?".":cn+":";if(Zn(O))for(var hn=0;hn<O.length;hn++)cn=O[hn],Dn=F+Qn(cn,hn),mn+=on(cn,V,un,Dn,Nn);else if(hn=tn(O),typeof hn=="function")for(O=hn.call(O),hn=0;!(cn=O.next()).done;)cn=cn.value,Dn=F+Qn(cn,hn++),mn+=on(cn,V,un,Dn,Nn);else if(Dn==="object"){if(typeof O.then=="function")return on(U(O),V,un,cn,Nn);throw V=String(O),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return mn}function sn(O,V,un){if(O==null)return O;var cn=[],Nn=0;return on(O,cn,"","",function(Dn){return V.call(un,Dn,Nn++)}),cn}function xn(O){if(O._status===-1){var V=O._result,un=V();un.then(function(cn){(O._status===0||O._status===-1)&&(O._status=1,O._result=cn,un.status===void 0&&(un.status="fulfilled",un.value=cn))},function(cn){(O._status===0||O._status===-1)&&(O._status=2,O._result=cn,un.status===void 0&&(un.status="rejected",un.reason=cn))}),O._status===-1&&(O._status=0,O._result=un)}if(O._status===1)return O._result.default;throw O._result}var Cn=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Sn(O){var V=Mn.T,un={};un.types=V!==null?V.types:null,Mn.T=un;try{var cn=O(),Nn=Mn.S;Nn!==null&&Nn(un,cn),typeof cn=="object"&&cn!==null&&typeof cn.then=="function"&&cn.then(pn,Cn)}catch(Dn){Cn(Dn)}finally{V!==null&&un.types!==null&&(V.types=un.types),Mn.T=V}}function oe(O){var V=Mn.T;if(V!==null){var un=V.types;un===null?V.types=[O]:un.indexOf(O)===-1&&un.push(O)}else Sn(oe.bind(null,O))}var Vn={map:sn,forEach:function(O,V,un){sn(O,function(){V.apply(this,arguments)},un)},count:function(O){var V=0;return sn(O,function(){V++}),V},toArray:function(O){return sn(O,function(V){return V})||[]},only:function(O){if(!W(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return _n.Activity=g,_n.Children=Vn,_n.Component=$,_n.Fragment=h,_n.Profiler=s,_n.PureComponent=dn,_n.StrictMode=f,_n.Suspense=b,_n.ViewTransition=x,_n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mn,_n.__COMPILER_RUNTIME={__proto__:null,c:function(O){return Mn.H.useMemoCache(O)}},_n.addTransitionType=oe,_n.cache=function(O){return function(){return O.apply(null,arguments)}},_n.cacheSignal=function(){return null},_n.cloneElement=function(O,V,un){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var cn=P({},O.props),Nn=O.key;if(V!=null)for(Dn in V.key!==void 0&&(Nn=""+V.key),V)!ee.call(V,Dn)||Dn==="key"||Dn==="__self"||Dn==="__source"||Dn==="ref"&&V.ref===void 0||(cn[Dn]=V[Dn]);var Dn=arguments.length-2;if(Dn===1)cn.children=un;else if(1<Dn){for(var mn=Array(Dn),F=0;F<Dn;F++)mn[F]=arguments[F+2];cn.children=mn}return Un(O.type,Nn,cn)},_n.createContext=function(O){return O={$$typeof:v,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:y,_context:O},O},_n.createElement=function(O,V,un){var cn,Nn={},Dn=null;if(V!=null)for(cn in V.key!==void 0&&(Dn=""+V.key),V)ee.call(V,cn)&&cn!=="key"&&cn!=="__self"&&cn!=="__source"&&(Nn[cn]=V[cn]);var mn=arguments.length-2;if(mn===1)Nn.children=un;else if(1<mn){for(var F=Array(mn),hn=0;hn<mn;hn++)F[hn]=arguments[hn+2];Nn.children=F}if(O&&O.defaultProps)for(cn in mn=O.defaultProps,mn)Nn[cn]===void 0&&(Nn[cn]=mn[cn]);return Un(O,Dn,Nn)},_n.createRef=function(){return{current:null}},_n.forwardRef=function(O){return{$$typeof:p,render:O}},_n.isValidElement=W,_n.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:xn}},_n.memo=function(O,V){return{$$typeof:T,type:O,compare:V===void 0?null:V}},_n.startTransition=Sn,_n.unstable_useCacheRefresh=function(){return Mn.H.useCacheRefresh()},_n.use=function(O){return Mn.H.use(O)},_n.useActionState=function(O,V,un){return Mn.H.useActionState(O,V,un)},_n.useCallback=function(O,V){return Mn.H.useCallback(O,V)},_n.useContext=function(O){return Mn.H.useContext(O)},_n.useDebugValue=function(){},_n.useDeferredValue=function(O,V){return Mn.H.useDeferredValue(O,V)},_n.useEffect=function(O,V){return Mn.H.useEffect(O,V)},_n.useEffectEvent=function(O){return Mn.H.useEffectEvent(O)},_n.useId=function(){return Mn.H.useId()},_n.useImperativeHandle=function(O,V,un){return Mn.H.useImperativeHandle(O,V,un)},_n.useInsertionEffect=function(O,V){return Mn.H.useInsertionEffect(O,V)},_n.useLayoutEffect=function(O,V){return Mn.H.useLayoutEffect(O,V)},_n.useMemo=function(O,V){return Mn.H.useMemo(O,V)},_n.useOptimistic=function(O,V){return Mn.H.useOptimistic(O,V)},_n.useReducer=function(O,V,un){return Mn.H.useReducer(O,V,un)},_n.useRef=function(O){return Mn.H.useRef(O)},_n.useState=function(O){return Mn.H.useState(O)},_n.useSyncExternalStore=function(O,V,un){return Mn.H.useSyncExternalStore(O,V,un)},_n.useTransition=function(){return Mn.H.useTransition()},_n.version="19.3.0",_n}var vy;function Yo(){return vy||(vy=1,ao.exports=Ov()),ao.exports}var en=Yo(),co={exports:{}},Qi={},fo={exports:{}},oo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function Mv(){return py||(py=1,(function(a){function o(U,on){var sn=U.length;U.push(on);n:for(;0<sn;){var xn=sn-1>>>1,Cn=U[xn];if(0<s(Cn,on))U[xn]=on,U[sn]=Cn,sn=xn;else break n}}function h(U){return U.length===0?null:U[0]}function f(U){if(U.length===0)return null;var on=U[0],sn=U.pop();if(sn!==on){U[0]=sn;n:for(var xn=0,Cn=U.length,Sn=Cn>>>1;xn<Sn;){var oe=2*(xn+1)-1,Vn=U[oe],O=oe+1,V=U[O];if(0>s(Vn,sn))O<Cn&&0>s(V,Vn)?(U[xn]=V,U[O]=sn,xn=O):(U[xn]=Vn,U[oe]=sn,xn=oe);else if(O<Cn&&0>s(V,sn))U[xn]=V,U[O]=sn,xn=O;else break n}}return on}function s(U,on){var sn=U.sortIndex-on.sortIndex;return sn!==0?sn:U.id-on.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;a.unstable_now=function(){return y.now()}}else{var v=Date,p=v.now();a.unstable_now=function(){return v.now()-p}}var b=[],T=[],E=1,g=null,x=3,j=!1,tn=!1,rn=!1,P=!1,qn=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,vn=typeof setImmediate<"u"?setImmediate:null;function dn(U){for(var on=h(T);on!==null;){if(on.callback===null)f(T);else if(on.startTime<=U)f(T),on.sortIndex=on.expirationTime,o(b,on);else break;on=h(T)}}function Tn(U){if(rn=!1,dn(U),!tn)if(h(b)!==null)tn=!0,Zn||(Zn=!0,W());else{var on=h(T);on!==null&&Qn(Tn,on.startTime-U)}}var Zn=!1,pn=-1,Mn=5,ee=-1;function Un(){return P?!0:!(a.unstable_now()-ee<Mn)}function nn(){if(P=!1,Zn){var U=a.unstable_now();ee=U;var on=!0;try{n:{tn=!1,rn&&(rn=!1,$(pn),pn=-1),j=!0;var sn=x;try{e:{for(dn(U),g=h(b);g!==null&&!(g.expirationTime>U&&Un());){var xn=g.callback;if(typeof xn=="function"){g.callback=null,x=g.priorityLevel;var Cn=xn(g.expirationTime<=U);if(U=a.unstable_now(),typeof Cn=="function"){g.callback=Cn,dn(U),on=!0;break e}g===h(b)&&f(b),dn(U)}else f(b);g=h(b)}if(g!==null)on=!0;else{var Sn=h(T);Sn!==null&&Qn(Tn,Sn.startTime-U),on=!1}}break n}finally{g=null,x=sn,j=!1}on=void 0}}finally{on?W():Zn=!1}}}var W;if(typeof vn=="function")W=function(){vn(nn)};else if(typeof MessageChannel<"u"){var Rn=new MessageChannel,An=Rn.port2;Rn.port1.onmessage=nn,W=function(){An.postMessage(null)}}else W=function(){qn(nn,0)};function Qn(U,on){pn=qn(function(){U(a.unstable_now())},on)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(U){U.callback=null},a.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Mn=0<U?Math.floor(1e3/U):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(U){switch(x){case 1:case 2:case 3:var on=3;break;default:on=x}var sn=x;x=on;try{return U()}finally{x=sn}},a.unstable_requestPaint=function(){P=!0},a.unstable_runWithPriority=function(U,on){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var sn=x;x=U;try{return on()}finally{x=sn}},a.unstable_scheduleCallback=function(U,on,sn){var xn=a.unstable_now();switch(typeof sn=="object"&&sn!==null?(sn=sn.delay,sn=typeof sn=="number"&&0<sn?xn+sn:xn):sn=xn,U){case 1:var Cn=-1;break;case 2:Cn=250;break;case 5:Cn=1073741823;break;case 4:Cn=1e4;break;default:Cn=5e3}return Cn=sn+Cn,U={id:E++,callback:on,priorityLevel:U,startTime:sn,expirationTime:Cn,sortIndex:-1},sn>xn?(U.sortIndex=sn,o(T,U),h(b)===null&&U===h(T)&&(rn?($(pn),pn=-1):rn=!0,Qn(Tn,sn-xn))):(U.sortIndex=Cn,o(b,U),tn||j||(tn=!0,Zn||(Zn=!0,W()))),U},a.unstable_shouldYield=Un,a.unstable_wrapCallback=function(U){var on=x;return function(){var sn=x;x=on;try{return U.apply(this,arguments)}finally{x=sn}}}})(oo)),oo}var Ey;function _v(){return Ey||(Ey=1,fo.exports=Mv()),fo.exports}var so={exports:{}},ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy;function Cv(){if(Sy)return ze;Sy=1;var a=Yo();function o(E){var g="https://react.dev/errors/"+E;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+E+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var f={d:{f:h,r:function(){throw Error(o(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},s=Symbol.for("react.portal"),y=Symbol.for("react.recoverable"),v=Symbol.for("react.optimistic_key");function p(E,g,x){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:j==null?null:j===v?v:""+j,children:E,containerInfo:g,implementation:x}}var b=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(E,g){if(E==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,ze.browser=function(E){return{$$typeof:y,_reason:E}},ze.createPortal=function(E,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return p(E,g,null,x)},ze.flushSync=function(E){var g=b.T,x=f.p;try{if(b.T=null,f.p=2,E)return E()}finally{b.T=g,f.p=x,f.d.f()}},ze.preconnect=function(E,g){typeof E=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,f.d.C(E,g))},ze.prefetchDNS=function(E){typeof E=="string"&&f.d.D(E)},ze.preinit=function(E,g){if(typeof E=="string"&&g&&typeof g.as=="string"){var x=g.as,j=T(x,g.crossOrigin),tn=typeof g.integrity=="string"?g.integrity:void 0,rn=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?f.d.S(E,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:j,integrity:tn,fetchPriority:rn}):x==="script"&&f.d.X(E,{crossOrigin:j,integrity:tn,fetchPriority:rn,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ze.preinitModule=function(E,g){if(typeof E=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=T(g.as,g.crossOrigin);f.d.M(E,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&f.d.M(E)},ze.preload=function(E,g){if(typeof E=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,j=T(x,g.crossOrigin);f.d.L(E,x,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ze.preloadModule=function(E,g){if(typeof E=="string")if(g){var x=T(g.as,g.crossOrigin);f.d.m(E,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else f.d.m(E)},ze.requestFormReset=function(E){f.d.r(E)},ze.unstable_batchedUpdates=function(E,g){return E(g)},ze.useFormState=function(E,g,x){return b.H.useFormState(E,g,x)},ze.useFormStatus=function(){return b.H.useHostTransitionStatus()},ze.version="19.3.0",ze}var Ty;function Rv(){if(Ty)return so.exports;Ty=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),so.exports=Cv(),so.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function Dv(){if(xy)return Qi;xy=1;var a=_v(),o=Yo(),h=Rv();function f(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function y(n){for(var e=n,t=e;t&&!t.alternate;)e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;for(;e.return;)e=e.return;return e.tag===3?n:null}function v(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function p(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function b(n){if(y(n)!==n)throw Error(f(188))}function T(n){var e=n.alternate;if(!e){if(e=y(n),e===null)throw Error(f(188));return e!==n?null:n}for(var t=n,l=e;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(l=r.return,l!==null){t=l;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return b(r),n;if(i===l)return b(r),e;i=i.sibling}throw Error(f(188))}if(t.return!==l.return)t=r,l=i;else{for(var c=!1,m=r.child;m;){if(m===t){c=!0,t=r,l=i;break}if(m===l){c=!0,l=r,t=i;break}m=m.sibling}if(!c){for(m=i.child;m;){if(m===t){c=!0,t=i,l=r;break}if(m===l){c=!0,l=i,t=r;break}m=m.sibling}if(!c)throw Error(f(189))}}if(t.alternate!==l)throw Error(f(190))}if(t.tag!==3)throw Error(f(188));return t.stateNode.current===t?n:e}function E(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=E(n),e!==null)return e;n=n.sibling}return null}function g(n,e,t,l,r,i){for(;n!==null;){if((n.tag===5||n.tag===27||n.tag===6)&&t(n,l,r,i)||(n.tag!==22||n.memoizedState===null)&&(e||n.tag!==5&&n.tag!==27)&&g(n.child,e,t,l,r,i))return!0;n=n.sibling}return!1}function x(n){for(n=n.return;n!==null;){if(n.tag===3||n.tag===5||n.tag===27)return n;n=n.return}return null}function j(n){var e=!1;for(n=n.return;n!==null&&(n.tag===4&&(e=!0),!(n.tag===3||n.tag===5||n.tag===27));)n=n.return;return e}function tn(n){var e=[null,null],t=x(n);return t===null||rn(e,n,t.child,{foundSelf:!1}),e}function rn(n,e,t,l){for(;t!==null;){if(t===e)l.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(l.foundSelf)return n[1]=t,!0;n[0]=t}else if((t.tag!==22||t.memoizedState===null)&&rn(n,e,t.child,l))return!0;t=t.sibling}return!1}function P(n){switch(n.tag){case 5:case 27:case 6:return n.stateNode;case 3:return n.stateNode.containerInfo;default:throw Error(f(559))}}var qn=null,$=null;function vn(n,e,t){return n===t?!0:n===e?(qn=n,!0):!1}function dn(n,e,t){return n===t?($=n,!1):n===e?($!==null&&(qn=n),!0):!1}function Tn(n){if(n===null)return null;do n=n===null?null:n.return;while(n&&n.tag!==5&&n.tag!==27&&n.tag!==3);return n||null}function Zn(n,e,t){for(var l=0,r=n;r;r=t(r))l++;r=0;for(var i=e;i;i=t(i))r++;for(;0<l-r;)n=t(n),l--;for(;0<r-l;)e=t(e),r--;for(;l--;){if(n===e||e!==null&&n===e.alternate)return n;n=t(n),e=t(e)}return null}var pn=Object.assign,Mn=Symbol.for("react.element"),ee=Symbol.for("react.transitional.element"),Un=Symbol.for("react.portal"),nn=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Rn=Symbol.for("react.profiler"),An=Symbol.for("react.consumer"),Qn=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),on=Symbol.for("react.suspense"),sn=Symbol.for("react.suspense_list"),xn=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),Sn=Symbol.for("react.activity"),oe=Symbol.for("react.legacy_hidden"),Vn=Symbol.for("react.memo_cache_sentinel"),O=Symbol.for("react.view_transition"),V=Symbol.for("react.recoverable"),un=Symbol.iterator;function cn(n){return n===null||typeof n!="object"?null:(n=un&&n[un]||n["@@iterator"],typeof n=="function"?n:null)}var Nn=Symbol.for("react.client.reference");function Dn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Nn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case nn:return"Fragment";case Rn:return"Profiler";case W:return"StrictMode";case on:return"Suspense";case sn:return"SuspenseList";case Sn:return"Activity";case O:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case Un:return"Portal";case Qn:return n.displayName||"Context";case An:return(n._context.displayName||"Context")+".Consumer";case U:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xn:return e=n.displayName||null,e!==null?e:Dn(n.type)||"Memo";case Cn:e=n._payload,n=n._init;try{return Dn(n(e))}catch{}}return null}var mn=Array.isArray,F=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,hn=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,He={pending:!1,data:null,method:null,action:null},it=[],Ue=-1;function Fn(n){return{current:n}}function $n(n){0>Ue||(n.current=it[Ue],it[Ue]=null,Ue--)}function Kn(n,e){Ue++,it[Ue]=n.current,n.current=e}var ue=Fn(null),$e=Fn(null),Te=Fn(null),yt=Fn(null);function gt(n,e){switch(Kn(Te,e),Kn($e,n),Kn(ue,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?bm(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=bm(e),n=Am(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}$n(ue),Kn(ue,n)}function pe(){$n(ue),$n($e),$n(Te)}function Bt(n){var e=n.memoizedState;e!==null&&(Lr._currentValue=e.memoizedState,Kn(yt,n)),e=ue.current;var t=Am(e,n.type);e!==t&&(Kn($e,n),Kn(ue,t))}function Qe(n){$e.current===n&&($n(ue),$n($e)),yt.current===n&&($n(yt),Lr._currentValue=He)}var Nt,Yt;function u(n){if(Nt===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Nt=e&&e[1]||"",Yt=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+n+Yt}var N=!1;function Y(n,e){if(!n||N)return"";N=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(k){var M=k}Reflect.construct(n,[],X)}else{try{X.call()}catch(k){M=k}X=!1;try{var z=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),X=!0,new n}finally{X&&(z!==void 0?Object.defineProperty(n.prototype,"props",z):delete n.prototype.props)}}}else{try{throw Error()}catch(k){M=k}(X=n())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(k){if(k&&M&&typeof k.stack=="string")return[k.stack,M.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],m=i[1];if(c&&m){var S=c.split(`
`),C=m.split(`
`);for(r=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;r<C.length&&!C[r].includes("DetermineComponentFrameRoot");)r++;if(l===S.length||r===C.length)for(l=S.length-1,r=C.length-1;1<=l&&0<=r&&S[l]!==C[r];)r--;for(;1<=l&&0<=r;l--,r--)if(S[l]!==C[r]){if(l!==1||r!==1)do if(l--,r--,0>r||S[l]!==C[r]){var H=`
`+S[l].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=l&&0<=r);break}}}finally{N=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?u(t):""}function L(n,e){switch(n.tag){case 26:case 27:case 5:return u(n.type);case 16:return u("Lazy");case 13:return n.child!==e&&e!==null?u("Suspense Fallback"):u("Suspense");case 19:return u("SuspenseList");case 0:case 15:return Y(n.type,!1);case 11:return Y(n.type.render,!1);case 1:return Y(n.type,!0);case 31:return u("Activity");case 30:return u("ViewTransition");default:return""}}function B(n){try{var e="",t=null;do e+=L(n,t),t=n,n=n.return;while(n);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var d=Object.prototype.hasOwnProperty,D=a.unstable_scheduleCallback,q=a.unstable_cancelCallback,Z=a.unstable_shouldYield,I=a.unstable_requestPaint,K=a.unstable_now,Q=a.unstable_getCurrentPriorityLevel,J=a.unstable_ImmediatePriority,an=a.unstable_UserBlockingPriority,gn=a.unstable_NormalPriority,En=a.unstable_LowPriority,On=a.unstable_IdlePriority,wn=a.log,Ot=a.unstable_setDisableYieldValue,vt=null,Ee=null;function tl(n){if(typeof wn=="function"&&Ot(n),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(vt,n)}catch{}}var ke=Math.clz32?Math.clz32:q0,w0=Math.log,j0=Math.LN2;function q0(n){return n>>>=0,n===0?32:31-(w0(n)/j0|0)|0}var $i=256,ki=262144,Fi=4194304;function Dl(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Wi(n,e,t){var l=n.pendingLanes;if(l===0)return 0;var r=0,i=n.suspendedLanes,c=n.pingedLanes;n=n.warmLanes;var m=l&134217727;return m!==0?(l=m&~i,l!==0?r=Dl(l):(c&=m,c!==0?r=Dl(c):t||(t=m&~n,t!==0&&(r=Dl(t))))):(m=l&~i,m!==0?r=Dl(m):c!==0?r=Dl(c):t||(t=l&~n,t!==0&&(r=Dl(t)))),r===0?0:e!==0&&e!==r&&(e&i)===0&&(i=r&-r,t=e&-e,i>=t||i===32&&(t&4194048)!==0)?e:r}function $r(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function $o(n,e){(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var l=31-ke(t),r=1<<l;e|=n[l],t&=~r}return e}function B0(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ko(){var n=Fi;return Fi<<=1,(Fi&62914560)===0&&(Fi=4194304),n}function za(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function kr(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Y0(n,e,t,l,r,i){var c=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var m=n.entanglements,S=n.expirationTimes,C=n.hiddenUpdates;for(t=c&~t;0<t;){var H=31-ke(t),X=1<<H;m[H]=0,S[H]=-1;var M=C[H];if(M!==null)for(C[H]=null,H=0;H<M.length;H++){var z=M[H];z!==null&&(z.lane&=-536870913)}t&=~X}l!==0&&Fo(n,l,0),i!==0&&r===0&&n.tag!==0&&(n.suspendedLanes|=i&~(c&~e))}function Fo(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var l=31-ke(e);n.entangledLanes|=e,n.entanglements[l]=n.entanglements[l]|1073741824|t&261930}function Wo(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var l=31-ke(t),r=1<<l;r&e|n[l]&e&&(n[l]|=e),t&=~r}}function Po(n,e){var t=e&-e;return t=(t&42)!==0?1:Ha(t),(t&(n.suspendedLanes|e))!==0?0:t}function Ha(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ua(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ns(){var n=hn.p;return n!==0?n:(n=window.event,n===void 0?32:ay(n.type))}function es(n,e){var t=hn.p;try{return hn.p=n,e()}finally{hn.p=t}}var Lt=Math.random().toString(36).slice(2),Oe="__reactFiber$"+Lt,Xe="__reactProps$"+Lt,nr="__reactContainer$"+Lt,ts="__reactEvents$"+Lt,L0="__reactListeners$"+Lt,G0="__reactHandles$"+Lt,ls="__reactResources$"+Lt,Fr="__reactMarker$"+Lt,Pi="__reactLoad$"+Lt;function nu(n){delete n[Oe],delete n[Xe],delete n[L0],delete n[G0]}function zl(n){var e;if(e=n[Oe])return e;for(var t=n.parentNode;t;){if(e=t[nr]||t[Oe]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Gm(n);n!==null;){if(t=n[Oe])return t;n=Gm(n)}return e}n=t,t=n.parentNode}return null}function er(n){if(n=n[Oe]||n[nr]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Wr(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(f(33))}function tr(n){var e=n[ls];return e||(e=n[ls]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function xe(n){n[Fr]=!0}function rs(n){n[Pi]=void 0}var is=new Set,us={};function Hl(n,e){lr(n,e),lr(n+"Capture",e)}function lr(n,e){for(us[n]=e,n=0;n<e.length;n++)is.add(e[n])}var Q0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),as={},cs={};function X0(n){return d.call(cs,n)?!0:d.call(as,n)?!1:Q0.test(n)?cs[n]=!0:(as[n]=!0,!1)}var In=!1;function fs(){var n=In;return In=!1,n}function eu(n,e,t){if(X0(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,t)}}function tu(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,t)}}function Gt(n,e,t,l){if(l===null)n.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,l)}}function Fe(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function os(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function V0(n,e,t){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,i=l.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(c){t=""+c,i.call(this,c)}}),Object.defineProperty(n,e,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(c){t=""+c},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function wa(n){if(!n._valueTracker){var e=os(n)?"checked":"value";n._valueTracker=V0(n,e,""+n[e])}}function ss(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),l="";return n&&(l=os(n)?n.checked?"true":"false":n.value),n=l,n!==t?(e.setValue(n),!0):!1}var K0=/[\n"\\]/g;function ut(n){return n.replace(K0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ja(n,e,t,l,r,i,c,m){n.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.type=c:n.removeAttribute("type"),e!=null?c==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Fe(e)):n.value!==""+Fe(e)&&(n.value=""+Fe(e)):c!=="submit"&&c!=="reset"||n.removeAttribute("value"),e!=null?c==="number"&&n.value==e?qa(n,Fe(n.value)):qa(n,Fe(e)):t!=null?qa(n,Fe(t)):l!=null&&n.removeAttribute("value"),r==null&&i!=null&&(n.defaultChecked=!!i),r!=null&&(n.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?n.name=""+Fe(m):n.removeAttribute("name")}function hs(n,e,t,l,r,i,c,m){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),e!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){wa(n);return}t=t!=null?""+Fe(t):"",e=e!=null?""+Fe(e):t,m||e===n.value||(n.value=e),n.defaultValue=e}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=m?n.checked:!!l,n.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(n.name=c),wa(n)}function qa(n,e){n.defaultValue!==""+e&&(n.defaultValue=""+e)}function rr(n,e,t,l){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&l&&(n[t].defaultSelected=!0)}else{for(t=""+Fe(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,l&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ds(n,e,t){if(e!=null&&(e=""+Fe(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Fe(t):""}function ms(n,e,t,l){if(e==null){if(l!=null){if(t!=null)throw Error(f(92));if(mn(l)){if(1<l.length)throw Error(f(93));l=l[0]}t=l}t==null&&(t=""),e=t}t=Fe(e),n.defaultValue=t,l=n.textContent,l===t&&l!==""&&l!==null&&(n.value=l),wa(n)}function ir(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Z0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ys(n,e,t){var l=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":l?n.setProperty(e,t):typeof t!="number"||t===0||Z0.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function gs(n,e,t){if(e!=null&&typeof e!="object")throw Error(f(62));if(n=n.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="",In=!0);for(var r in e)l=e[r],e.hasOwnProperty(r)&&t[r]!==l&&(ys(n,r,l),In=!0)}else for(var i in e)e.hasOwnProperty(i)&&ys(n,i,e[i])}function Ba(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),J0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lu(n){return J0.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Mt(){}var Ya=null;function La(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ur=null,ar=null;function vs(n){var e=er(n);if(e&&(n=e.stateNode)){var t=n[Xe]||null;n:switch(n=e.stateNode,e.type){case"input":if(ja(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ut(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var l=t[e];if(l!==n&&l.form===n.form){var r=l[Xe]||null;if(!r)throw Error(f(90));ja(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<t.length;e++)l=t[e],l.form===n.form&&ss(l)}break n;case"textarea":ds(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&rr(n,!!t.multiple,e,!1)}}}var Ga=!1;function ps(n,e,t){if(Ga)return n(e,t);Ga=!0;try{var l=n(e);return l}finally{if(Ga=!1,(ur!==null||ar!==null)&&(la(),ur&&(e=ur,n=ar,ar=ur=null,vs(e),n)))for(e=0;e<n.length;e++)vs(n[e])}}function Pr(n,e){var t=n.stateNode;if(t===null)return null;var l=t[Xe]||null;if(l===null)return null;t=l[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(f(231,e,typeof t));return t}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qa=!1;if(Qt)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){Qa=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{Qa=!1}var ll=null,Xa=null,ru=null;function Es(){if(ru)return ru;var n,e=Xa,t=e.length,l,r="value"in ll?ll.value:ll.textContent,i=r.length;for(n=0;n<t&&e[n]===r[n];n++);var c=t-n;for(l=1;l<=c&&e[t-l]===r[i-l];l++);return ru=r.slice(n,1<l?1-l:void 0)}function iu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function uu(){return!0}function Ss(){return!1}function qe(n){function e(t,l,r,i,c){this._reactName=t,this._targetInst=r,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var m in n)n.hasOwnProperty(m)&&(t=n[m],this[m]=t?t(i):i[m]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?uu:Ss,this.isPropagationStopped=Ss,this}return pn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=uu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=uu)},persist:function(){},isPersistent:uu}),e}var rl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=qe(rl),ei=pn({},rl,{view:0,detail:0}),$0=qe(ei),Va,Ka,ti,cu=pn({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ti&&(ti&&n.type==="mousemove"?(Va=n.screenX-ti.screenX,Ka=n.screenY-ti.screenY):Ka=Va=0,ti=n),Va)},movementY:function(n){return"movementY"in n?n.movementY:Ka}}),Ts=qe(cu),k0=pn({},cu,{dataTransfer:0}),F0=qe(k0),W0=pn({},ei,{relatedTarget:0}),Za=qe(W0),P0=pn({},rl,{animationName:0,elapsedTime:0,pseudoElement:0}),ng=qe(P0),eg=pn({},rl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tg=qe(eg),lg=pn({},rl,{data:0}),xs=qe(lg),rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ag(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=ug[n])?!!e[n]:!1}function Ia(){return ag}var cg=pn({},ei,{key:function(n){if(n.key){var e=rg[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=iu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ig[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(n){return n.type==="keypress"?iu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?iu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fg=qe(cg),og=pn({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bs=qe(og),sg=pn({},rl,{submitter:0}),hg=qe(sg),dg=pn({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),mg=qe(dg),yg=pn({},rl,{propertyName:0,elapsedTime:0,pseudoElement:0}),gg=qe(yg),vg=pn({},cu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),pg=qe(vg),Eg=pn({},rl,{newState:0,oldState:0,source:0}),Sg=qe(Eg),Tg=[9,13,27,32],Ja=Qt&&"CompositionEvent"in window,li=null;Qt&&"documentMode"in document&&(li=document.documentMode);var xg=Qt&&"TextEvent"in window&&!li,As=Qt&&(!Ja||li&&8<li&&11>=li),Ns=" ",Os=!1;function Ms(n,e){switch(n){case"keyup":return Tg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _s(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var cr=!1;function bg(n,e){switch(n){case"compositionend":return _s(e);case"keypress":return e.which!==32?null:(Os=!0,Ns);case"textInput":return n=e.data,n===Ns&&Os?null:n;default:return null}}function Ag(n,e){if(cr)return n==="compositionend"||!Ja&&Ms(n,e)?(n=Es(),ru=Xa=ll=null,cr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return As&&e.locale!=="ko"?null:e.data;default:return null}}var Ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cs(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Ng[n.type]:e==="textarea"}function Rs(n,e,t,l){ur?ar?ar.push(l):ar=[l]:ur=l,e=fa(e,"onChange"),0<e.length&&(t=new au("onChange","change",null,t,l),n.push({event:t,listeners:e}))}var ri=null,ii=null;function Og(n){vm(n,0)}function fu(n){var e=Wr(n);if(ss(e))return n}function Ds(n,e){if(n==="change")return e}var zs=!1;if(Qt){var $a;if(Qt){var ka="oninput"in document;if(!ka){var Hs=document.createElement("div");Hs.setAttribute("oninput","return;"),ka=typeof Hs.oninput=="function"}$a=ka}else $a=!1;zs=$a&&(!document.documentMode||9<document.documentMode)}function Us(){ri&&(ri.detachEvent("onpropertychange",ws),ii=ri=null)}function ws(n){if(n.propertyName==="value"&&fu(ii)){var e=[];Rs(e,ii,n,La(n)),ps(Og,e)}}function Mg(n,e,t){n==="focusin"?(Us(),ri=e,ii=t,ri.attachEvent("onpropertychange",ws)):n==="focusout"&&Us()}function _g(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fu(ii)}function Cg(n,e){if(n==="click")return fu(e)}function Rg(n,e){if(n==="input"||n==="change")return fu(e)}function Dg(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var We=typeof Object.is=="function"?Object.is:Dg;function ui(n,e){if(We(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),l=Object.keys(e);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var r=t[l];if(!d.call(e,r)||!We(n[r],e[r]))return!1}return!0}function Fa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function js(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qs(n,e){var t=js(n);n=0;for(var l;t;){if(t.nodeType===3){if(l=n+t.textContent.length,n<=e&&l>=e)return{node:t,offset:e-n};n=l}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=js(t)}}function Bs(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Bs(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ys(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Fa(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Fa(n.document)}return e}function Wa(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var zg=Qt&&"documentMode"in document&&11>=document.documentMode,fr=null,Pa=null,ai=null,nc=!1;function Ls(n,e,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;nc||fr==null||fr!==Fa(l)||(l=fr,"selectionStart"in l&&Wa(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ai&&ui(ai,l)||(ai=l,l=fa(Pa,"onSelect"),0<l.length&&(e=new au("onSelect","select",null,e,t),n.push({event:e,listeners:l}),e.target=fr)))}function Ul(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var or={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionrun:Ul("Transition","TransitionRun"),transitionstart:Ul("Transition","TransitionStart"),transitioncancel:Ul("Transition","TransitionCancel"),transitionend:Ul("Transition","TransitionEnd")},ec={},Gs={};Qt&&(Gs=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function wl(n){if(ec[n])return ec[n];if(!or[n])return n;var e=or[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Gs)return ec[n]=e[t];return n}var Qs=wl("animationend"),Xs=wl("animationiteration"),Vs=wl("animationstart"),Hg=wl("transitionrun"),Ug=wl("transitionstart"),wg=wl("transitioncancel"),Ks=wl("transitionend"),Zs=new Map,tc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tc.push("scrollEnd");function pt(n,e){Zs.set(n,e),Hl(e,[n])}var jg=0;function Xt(n,e){if(n.name!=null&&n.name!=="auto")return n.name;if(e.autoName!==null)return e.autoName;n=xt.identifierPrefix;var t=jg++;return n="_"+n+"t_"+t.toString(32)+"_",e.autoName=n}function Is(n){if(n==null||typeof n=="string")return n;var e=null,t=Rr;if(t!==null)for(var l=0;l<t.length;l++){var r=n[t[l]];if(r!=null){if(r==="none")return"none";e=e==null?r:e+(" "+r)}}return e??n.default}function Vt(n,e){return n=Is(n),e=Is(e),e==null?n==="auto"?null:n:e==="auto"?null:e}var ou=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},at=[],sr=0,lc=0;function su(){for(var n=sr,e=lc=sr=0;e<n;){var t=at[e];at[e++]=null;var l=at[e];at[e++]=null;var r=at[e];at[e++]=null;var i=at[e];if(at[e++]=null,l!==null&&r!==null){var c=l.pending;c===null?r.next=r:(r.next=c.next,c.next=r),l.pending=r}i!==0&&Js(t,r,i)}}function hu(n,e,t,l){at[sr++]=n,at[sr++]=e,at[sr++]=t,at[sr++]=l,lc|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function rc(n,e,t,l){return hu(n,e,t,l),du(n)}function jl(n,e){return hu(n,null,null,e),du(n)}function Js(n,e,t){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t);for(var r=!1,i=n.return;i!==null;)i.childLanes|=t,l=i.alternate,l!==null&&(l.childLanes|=t),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(r=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,r&&e!==null&&(r=31-ke(t),n=i.hiddenUpdates,l=n[r],l===null?n[r]=[e]:l.push(e),e.lane=t|536870912),i):null}function du(n){if(50<Ci)throw Ci=0,ta=null,Error(f(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var hr={};function qg(n,e,t,l){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(n,e,t,l){return new qg(n,e,t,l)}function ic(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Kt(n,e){var t=n.alternate;return t===null?(t=Ve(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&1206910976,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function $s(n,e){n.flags&=1206910978;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function mu(n,e,t,l,r,i){var c=0;if(l=n,typeof l=="function")ic(l)&&(c=1);else if(typeof l=="string")c=sv(n,t,ue.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(l){case Sn:return n=Ve(31,t,e,r),n.elementType=Sn,n.lanes=i,n;case nn:return ql(t.children,r,i,e);case W:c=8,r|=24;break;case Rn:return n=Ve(12,t,e,r|2),n.elementType=Rn,n.lanes=i,n;case on:return n=Ve(13,t,e,r),n.elementType=on,n.lanes=i,n;case sn:return n=Ve(19,t,e,r),n.elementType=sn,n.lanes=i,n;case oe:case O:return n=r|32,n=Ve(30,t,e,n),n.elementType=O,n.lanes=i,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Qn:c=10;break n;case An:c=9;break n;case U:c=11;break n;case xn:c=14;break n;case Cn:c=16,l=null;break n}c=29,t=Error(f(130,n===null?"null":typeof n,"")),l=null}return e=Ve(c,t,e,r),e.elementType=n,e.type=l,e.lanes=i,e}function ql(n,e,t,l){return n=Ve(7,n,l,e),n.lanes=t,n}function uc(n,e,t){return n=Ve(6,n,null,e),n.lanes=t,n}function ks(n){var e=Ve(18,null,null,0);return e.stateNode=n,e}function ac(n,e,t){return e=Ve(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Fs=new WeakMap;function ct(n,e){if(typeof n=="object"&&n!==null){var t=Fs.get(n);return t!==void 0?t:(e={value:n,source:e,stack:B(e)},Fs.set(n,e),e)}return{value:n,source:e,stack:B(e)}}var dr=[],mr=0,yu=null,ci=0,ft=[],ot=0,il=null,_t=1,Ct="";function Zt(n,e){dr[mr++]=ci,dr[mr++]=yu,yu=n,ci=e}function Ws(n,e,t){ft[ot++]=_t,ft[ot++]=Ct,ft[ot++]=il,il=n;var l=_t;n=Ct;var r=32-ke(l)-1;l&=~(1<<r),t+=1;var i=32-ke(e)+r;if(30<i){var c=r-r%5;i=(l&(1<<c)-1).toString(32),l>>=c,r-=c,_t=1<<32-ke(e)+r|t<<r|l,Ct=i+n}else _t=1<<i|t<<r|l,Ct=n}function gu(n){n.return!==null&&(Zt(n,1),Ws(n,1,0))}function cc(n){for(;n===yu;)yu=dr[--mr],dr[mr]=null,ci=dr[--mr],dr[mr]=null;for(;n===il;)il=ft[--ot],ft[ot]=null,Ct=ft[--ot],ft[ot]=null,_t=ft[--ot],ft[ot]=null}function Ps(n,e){ft[ot++]=_t,ft[ot++]=Ct,ft[ot++]=il,_t=e.id,Ct=e.overflow,il=n}var be=null,re=null,jn=!1,ul=null,st=!1,fc=Error(f(519));function al(n){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fi(ct(e,n)),fc}function nh(n){var e=n.stateNode,t=n.type,l=n.memoizedProps;switch(e[Oe]=n,e[Xe]=l,t){case"dialog":Yn("cancel",e),Yn("close",e);break;case"iframe":case"object":case"embed":Yn("load",e);break;case"video":case"audio":for(t=0;t<Di.length;t++)Yn(Di[t],e);break;case"source":Yn("error",e);break;case"img":case"image":case"link":Yn("error",e),Yn("load",e);break;case"details":Yn("toggle",e);break;case"input":Yn("invalid",e),hs(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Yn("invalid",e);break;case"textarea":Yn("invalid",e),ms(e,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||l.suppressHydrationWarning===!0||Tm(e.textContent,t)?(l.popover!=null&&(Yn("beforetoggle",e),Yn("toggle",e)),l.onScroll!=null&&Yn("scroll",e),l.onScrollEnd!=null&&Yn("scrollend",e),l.onClick!=null&&(e.onclick=Mt),e=!0):e=!1,e||al(n,!0)}function vu(n){for(be=n.return;be;)switch(be.tag){case 5:case 31:case 13:st=!1;return;case 27:case 3:st=!0;return;default:be=be.return}}function yr(n){if(n!==be)return!1;if(!jn)return vu(n),jn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||Lf(n.type,n.memoizedProps)),t=!t),t&&re&&al(n),vu(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));re=Lm(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));re=Lm(n)}else e===27?(e=re,bl(n.type)?(n=$f,$f=null,re=n):re=e):re=be?dt(n.stateNode.nextSibling):null;return!0}function Bl(){re=be=null,jn=!1}function oc(){var n=ul;return n!==null&&(Ie===null?Ie=n:Ie.push.apply(Ie,n),ul=null),n}function fi(n){ul===null?ul=[n]:ul.push(n)}var sc=Fn(null),Yl=null,It=null;function cl(n,e,t){Kn(sc,e._currentValue),e._currentValue=t}function Jt(n){n._currentValue=sc.current,$n(sc)}function pu(n,e,t){for(;n!==null;){var l=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),n===t)break;n=n.return}}function hc(n,e,t,l){var r=n.child;for(r!==null&&(r.return=n);r!==null;){var i=r.dependencies;if(i!==null){var c=r.child;i=i.firstContext;n:for(;i!==null;){var m=i;i=r;for(var S=0;S<e.length;S++)if(m.context===e[S]){i.lanes|=t,m=i.alternate,m!==null&&(m.lanes|=t),pu(i.return,t,n),l||(c=null);break n}i=m.next}}else if(r.tag===18){if(c=r.return,c===null)throw Error(f(341));c.lanes|=t,i=c.alternate,i!==null&&(i.lanes|=t),pu(c,t,n),c=null}else r.tag===13&&r.memoizedState!==null&&r.memoizedState.dehydrated===null?(r.lanes|=t,c=r.alternate,c!==null&&(c.lanes|=t),pu(r.return,t,n),c=r.child,c=c!==null?c.sibling:null):c=r.child;if(c!==null)c.return=r;else for(c=r;c!==null;){if(c===n){c=null;break}if(r=c.sibling,r!==null){r.return=c.return,c=r;break}c=c.return}r=c}}function Ll(n,e,t,l){n=null;for(var r=e,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var c=r.alternate;if(c===null)throw Error(f(387));if(c=c.memoizedProps,c!==null){var m=r.type;We(r.pendingProps.value,c.value)||(n!==null?n.push(m):n=[m])}}else if(r===yt.current){if(c=r.alternate,c===null)throw Error(f(387));c.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(n!==null?n.push(Lr):n=[Lr])}r=r.return}return n!==null&&hc(e,n,t,l),e.flags|=262144,n!==null}function Eu(n){for(n=n.firstContext;n!==null;){if(!We(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Gl(n){Yl=n,It=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Me(n){return eh(Yl,n)}function Su(n,e){return Yl===null&&Gl(n),eh(n,e)}function eh(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},It===null){if(n===null)throw Error(f(308));It=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else It=It.next=e;return t}var Bg=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,l){n.push(l)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},Yg=a.unstable_scheduleCallback,Lg=a.unstable_NormalPriority,me={$$typeof:Qn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dc(){return{controller:new Bg,data:new Map,refCount:0}}function oi(n){n.refCount--,n.refCount===0&&Yg(Lg,function(){n.controller.abort()})}function th(n,e){if((n.pendingLanes&4194048)!==0){var t=n.transitionTypes;for(t===null&&(t=n.transitionTypes=[]),n=0;n<e.length;n++){var l=e[n];t.indexOf(l)===-1&&t.push(l)}}}var si=null;function Gg(n){var e=n.transitionTypes;return n.transitionTypes=null,e}var hi=null,mc=0,Ql=0,gr=null;function Qg(n,e){if(hi===null){var t=hi=[];mc=0,Ql=Df(),gr={status:"pending",value:void 0,then:function(l){t.push(l)}}}return mc++,e.then(lh,lh),e}function lh(){if(--mc===0&&(si=null,hi!==null)){gr!==null&&(gr.status="fulfilled");var n=hi;hi=null,Ql=0,gr=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Xg(n,e){var t=[],l={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return n.then(function(){l.status="fulfilled",l.value=e;for(var r=0;r<t.length;r++)(0,t[r])(e)},function(r){for(l.status="rejected",l.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),l}var rh=F.S;F.S=function(n,e){if(kd=K(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Qg(n,e),si!==null)for(var t=Ur;t!==null;)th(t,si),t=t.next;if(t=n.types,t!==null){for(var l=Ur;l!==null;)th(l,t),l=l.next;if(Ql!==0){l=si,l===null&&(l=si=[]);for(var r=0;r<t.length;r++){var i=t[r];l.indexOf(i)===-1&&l.push(i)}}}rh!==null&&rh(n,e)};var Xl=Fn(null);function yc(){var n=Xl.current;return n!==null?n:le.pooledCache}function Tu(n,e){e===null?Kn(Xl,Xl.current):Kn(Xl,e.pool)}function ih(){var n=yc();return n===null?null:{parent:me._currentValue,pool:n}}var vr=Error(f(460)),gc=Error(f(474)),xu=Error(f(542)),bu={then:function(){}};function uh(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ah(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Mt,Mt),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,fh(n),n===void 0&&!("reason"in e)?Error(f(600)):n;default:if(typeof e.status=="string")e.then(Mt,Mt);else{if(n=le,n!==null&&100<n.shellSuspendCounter)throw Error(f(482));n=e,n.status="pending",n.then(function(l){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=l}},function(l){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,fh(n),n}throw Kl=e,vr}}function Vl(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Kl=t,vr):t}}var Kl=null;function ch(){if(Kl===null)throw Error(f(459));var n=Kl;return Kl=null,n}function fh(n){if(n===vr||n===xu)throw Error(f(483))}var pr=null,di=0;function Au(n){var e=di;return di+=1,pr===null&&(pr=[]),ah(pr,n,e)}function fl(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Nu(n,e){throw e.$$typeof===Mn?Error(f(525)):(n=Object.prototype.toString.call(e),Error(f(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function oh(n){function e(_,A){if(n){var R=_.deletions;R===null?(_.deletions=[A],_.flags|=16):R.push(A)}}function t(_,A){if(!n)return null;for(;A!==null;)e(_,A),A=A.sibling;return null}function l(_){for(var A=new Map;_!==null;)_.key===null?A.set(_.index,_):A.set(_.key,_),_=_.sibling;return A}function r(_,A){return _=Kt(_,A),_.index=0,_.sibling=null,_}function i(_,A,R){return _.index=R,n?(R=_.alternate,R!==null?(R=R.index,R<A?(_.flags|=2,A):R):(_.flags|=134217730,A)):(_.flags|=1048576,A)}function c(_){return n&&_.alternate===null&&(_.flags|=134217730),_}function m(_,A,R,G){return A===null||A.tag!==6?(A=uc(R,_.mode,G),A.return=_,A):(A=r(A,R),A.return=_,A)}function S(_,A,R,G){var ln=R.type;return ln===nn?(_=H(_,A,R.props.children,G,R.key),fl(_,R),_):A!==null&&(A.elementType===ln||typeof ln=="object"&&ln!==null&&ln.$$typeof===Cn&&Vl(ln)===A.type)?(A=r(A,R.props),fl(A,R),A.return=_,A):(A=mu(R.type,R.key,R.props,null,_.mode,G),fl(A,R),A.return=_,A)}function C(_,A,R,G){return A===null||A.tag!==4||A.stateNode.containerInfo!==R.containerInfo||A.stateNode.implementation!==R.implementation?(A=ac(R,_.mode,G),A.return=_,A):(A=r(A,R.children||[]),A.return=_,A)}function H(_,A,R,G,ln){return A===null||A.tag!==7?(A=ql(R,_.mode,G,ln),A.return=_,A):(A=r(A,R),A.return=_,A)}function X(_,A,R){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=uc(""+A,_.mode,R),A.return=_,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ee:return R=mu(A.type,A.key,A.props,null,_.mode,R),fl(R,A),R.return=_,R;case Un:return A=ac(A,_.mode,R),A.return=_,A;case Cn:return A=Vl(A),X(_,A,R)}if(mn(A)||cn(A))return A=ql(A,_.mode,R,null),A.return=_,A;if(typeof A.then=="function")return X(_,Au(A),R);if(A.$$typeof===Qn)return X(_,Su(_,A),R);Nu(_,A)}return null}function M(_,A,R,G){var ln=A!==null?A.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return ln!==null?null:m(_,A,""+R,G);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ee:return R.key===ln?S(_,A,R,G):null;case Un:return R.key===ln?C(_,A,R,G):null;case Cn:return R=Vl(R),M(_,A,R,G)}if(mn(R)||cn(R))return ln!==null?null:H(_,A,R,G,null);if(typeof R.then=="function")return M(_,A,Au(R),G);if(R.$$typeof===Qn)return M(_,A,Su(_,R),G);Nu(_,R)}return null}function z(_,A,R,G,ln){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return _=_.get(R)||null,m(A,_,""+G,ln);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case ee:return _=_.get(G.key===null?R:G.key)||null,S(A,_,G,ln);case Un:return _=_.get(G.key===null?R:G.key)||null,C(A,_,G,ln);case Cn:return G=Vl(G),z(_,A,R,G,ln)}if(mn(G)||cn(G))return _=_.get(R)||null,H(A,_,G,ln,null);if(typeof G.then=="function")return z(_,A,R,Au(G),ln);if(G.$$typeof===Qn)return z(_,A,R,Su(A,G),ln);Nu(A,G)}return null}function k(_,A,R,G){for(var ln=null,Gn=null,yn=A,bn=A=0,ve=null;yn!==null&&bn<R.length;bn++){yn.index>bn?(ve=yn,yn=null):ve=yn.sibling;var Xn=M(_,yn,R[bn],G);if(Xn===null){yn===null&&(yn=ve);break}n&&yn&&Xn.alternate===null&&e(_,yn),A=i(Xn,A,bn),Gn===null?ln=Xn:Gn.sibling=Xn,Gn=Xn,yn=ve}if(bn===R.length)return t(_,yn),jn&&Zt(_,bn),ln;if(yn===null){for(;bn<R.length;bn++)yn=X(_,R[bn],G),yn!==null&&(A=i(yn,A,bn),Gn===null?ln=yn:Gn.sibling=yn,Gn=yn);return jn&&Zt(_,bn),ln}for(yn=l(yn);bn<R.length;bn++)ve=z(yn,_,bn,R[bn],G),ve!==null&&(n&&(Xn=ve.alternate,Xn!==null&&yn.delete(Xn.key===null?bn:Xn.key)),A=i(ve,A,bn),Gn===null?ln=ve:Gn.sibling=ve,Gn=ve);return n&&yn.forEach(function(_l){return e(_,_l)}),jn&&Zt(_,bn),ln}function fn(_,A,R,G){if(R==null)throw Error(f(151));for(var ln=null,Gn=null,yn=A,bn=A=0,ve=null,Xn=R.next();yn!==null&&!Xn.done;bn++,Xn=R.next()){yn.index>bn?(ve=yn,yn=null):ve=yn.sibling;var _l=M(_,yn,Xn.value,G);if(_l===null){yn===null&&(yn=ve);break}n&&yn&&_l.alternate===null&&e(_,yn),A=i(_l,A,bn),Gn===null?ln=_l:Gn.sibling=_l,Gn=_l,yn=ve}if(Xn.done)return t(_,yn),jn&&Zt(_,bn),ln;if(yn===null){for(;!Xn.done;bn++,Xn=R.next())Xn=X(_,Xn.value,G),Xn!==null&&(A=i(Xn,A,bn),Gn===null?ln=Xn:Gn.sibling=Xn,Gn=Xn);return jn&&Zt(_,bn),ln}for(yn=l(yn);!Xn.done;bn++,Xn=R.next())Xn=z(yn,_,bn,Xn.value,G),Xn!==null&&(n&&(ve=Xn.alternate,ve!==null&&yn.delete(ve.key===null?bn:ve.key)),A=i(Xn,A,bn),Gn===null?ln=Xn:Gn.sibling=Xn,Gn=Xn);return n&&yn.forEach(function(bv){return e(_,bv)}),jn&&Zt(_,bn),ln}function Hn(_,A,R,G){if(typeof R=="object"&&R!==null&&R.type===nn&&R.key===null&&R.props.ref===void 0&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case ee:n:{for(var ln=R.key;A!==null;){if(A.key===ln){if(ln=R.type,ln===nn){if(A.tag===7){t(_,A.sibling),G=r(A,R.props.children),fl(G,R),G.return=_,_=G;break n}}else if(A.elementType===ln||typeof ln=="object"&&ln!==null&&ln.$$typeof===Cn&&Vl(ln)===A.type){t(_,A.sibling),G=r(A,R.props),fl(G,R),G.return=_,_=G;break n}t(_,A);break}else e(_,A);A=A.sibling}R.type===nn?(G=ql(R.props.children,_.mode,G,R.key),fl(G,R),G.return=_,_=G):(G=mu(R.type,R.key,R.props,null,_.mode,G),fl(G,R),G.return=_,_=G)}return c(_);case Un:n:{for(ln=R.key;A!==null;){if(A.key===ln)if(A.tag===4&&A.stateNode.containerInfo===R.containerInfo&&A.stateNode.implementation===R.implementation){t(_,A.sibling),G=r(A,R.children||[]),G.return=_,_=G;break n}else{t(_,A);break}else e(_,A);A=A.sibling}G=ac(R,_.mode,G),G.return=_,_=G}return c(_);case Cn:return R=Vl(R),Hn(_,A,R,G)}if(mn(R))return k(_,A,R,G);if(cn(R)){if(ln=cn(R),typeof ln!="function")throw Error(f(150));return R=ln.call(R),fn(_,A,R,G)}if(typeof R.then=="function")return Hn(_,A,Au(R),G);if(R.$$typeof===Qn)return Hn(_,A,Su(_,R),G);Nu(_,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,A!==null&&A.tag===6?(t(_,A.sibling),G=r(A,R),G.return=_,_=G):(t(_,A),G=uc(R,_.mode,G),G.return=_,_=G),c(_)):t(_,A)}return function(_,A,R,G){try{di=0;var ln=Hn(_,A,R,G);return pr=null,ln}catch(yn){if(yn===vr||yn===xu)throw yn;var Gn=Ve(29,yn,null,_.mode);return Gn.lanes=G,Gn.return=_,Gn}finally{}}}var Zl=oh(!0),sh=oh(!1),ol=!1;function vc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function sl(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function hl(n,e,t){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Jn&2)!==0){var r=l.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),l.pending=e,e=du(n),Js(n,null,t),e}return hu(n,l,e,t),du(n)}function mi(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,Wo(n,t)}}function Ec(n,e){var t=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?r=i=c:i=i.next=c,t=t.next}while(t!==null);i===null?r=i=e:i=i.next=e}else r=i=e;t={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var Sc=!1;function yi(){if(Sc){var n=gr;if(n!==null)throw n}}function gi(n,e,t,l){Sc=!1;var r=n.updateQueue;ol=!1;var i=r.firstBaseUpdate,c=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var S=m,C=S.next;S.next=null,c===null?i=C:c.next=C,c=S;var H=n.alternate;H!==null&&(H=H.updateQueue,m=H.lastBaseUpdate,m!==c&&(m===null?H.firstBaseUpdate=C:m.next=C,H.lastBaseUpdate=S))}if(i!==null){var X=r.baseState;c=0,H=C=S=null,m=i;do{var M=m.lane&-536870913,z=M!==m.lane;if(z?(Ln&M)===M:(l&M)===M){M!==0&&M===Ql&&(Sc=!0),H!==null&&(H=H.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});n:{var k=n,fn=m;M=e;var Hn=t;switch(fn.tag){case 1:if(k=fn.payload,typeof k=="function"){X=k.call(Hn,X,M);break n}X=k;break n;case 3:k.flags=k.flags&-65537|128;case 0:if(k=fn.payload,M=typeof k=="function"?k.call(Hn,X,M):k,M==null)break n;X=pn({},X,M);break n;case 2:ol=!0}}M=m.callback,M!==null&&(n.flags|=64,z&&(n.flags|=8192),z=r.callbacks,z===null?r.callbacks=[M]:z.push(M))}else z={lane:M,tag:m.tag,payload:m.payload,callback:m.callback,next:null},H===null?(C=H=z,S=X):H=H.next=z,c|=M;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;z=m,m=z.next,z.next=null,r.lastBaseUpdate=z,r.shared.pending=null}}while(!0);H===null&&(S=X),r.baseState=S,r.firstBaseUpdate=C,r.lastBaseUpdate=H,i===null&&(r.shared.lanes=0),El|=c,n.lanes=c,n.memoizedState=X}}function hh(n,e){if(typeof n!="function")throw Error(f(191,n));n.call(e)}function dh(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)hh(t[n],e)}var dl=Fn(null),Ou=Fn(0);function mh(n,e){n=Pt,Kn(Ou,n),Kn(dl,e),Pt=n|e.baseLanes}function Tc(){Kn(Ou,Pt),Kn(dl,dl.current)}function xc(){Pt=Ou.current,$n(dl),$n(Ou)}var _e=Fn(null),we=null;function ml(n){var e=n.alternate;Kn(Ce,Ce.current&1),Kn(_e,n),we===null&&(e===null||dl.current!==null||e.memoizedState!==null)&&(we=n)}function bc(n){Kn(Ce,Ce.current),Kn(_e,n),we===null&&(we=n)}function yh(n){n.tag===22?(Kn(Ce,Ce.current),Kn(_e,n),we===null&&(we=n)):yl()}function yl(){Kn(Ce,Ce.current),Kn(_e,_e.current)}function Pe(n){$n(_e),we===n&&(we=null),$n(Ce)}var Ce=Fn(0);function vi(n,e){Kn(_e,_e.current),Kn(Ce,e)}function Ac(n){$n(Ce),$n(_e),we===n&&(we=null)}function Mu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||If(t)||Jf(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $t=0,zn=null,te=null,ye=null,_u=!1,Er=!1,Il=!1,Cu=0,pi=0,Sr=null,Vg=0;function se(){throw Error(f(321))}function Nc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!We(n[t],e[t]))return!1;return!0}function Oc(n,e,t,l,r,i){return $t=i,zn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,F.H=n===null||n.memoizedState===null?Wh:Ph,Il=!1,i=t(l,r),Il=!1,Er&&(i=vh(e,t,l,r)),gh(n),i}function gh(n){F.H=ju;var e=te!==null&&te.next!==null;if($t=0,ye=te=zn=null,_u=!1,pi=0,Sr=null,e)throw Error(f(300));n===null||ge||(n=n.dependencies,n!==null&&Eu(n)&&(ge=!0))}function vh(n,e,t,l){zn=n;var r=0;do{if(Er&&(Sr=null),pi=0,Er=!1,25<=r)throw Error(f(301));if(r+=1,ye=te=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}F.H=Wg,i=e(t,l)}while(Er);return i}function Kg(){var n=F.H,e=n.useState()[0];return e=typeof e.then=="function"?Ei(e):e,n=n.useState()[0],(te!==null?te.memoizedState:null)!==n&&(zn.flags|=1024),e}function Mc(){var n=Cu!==0;return Cu=0,n}function _c(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function Cc(n){if(_u){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}_u=!1}$t=0,ye=te=zn=null,Er=!1,pi=Cu=0,Sr=null}function Be(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?zn.memoizedState=ye=n:ye=ye.next=n,ye}function de(){if(te===null){var n=zn.alternate;n=n!==null?n.memoizedState:null}else n=te.next;var e=ye===null?zn.memoizedState:ye.next;if(e!==null)ye=e,te=n;else{if(n===null)throw zn.alternate===null?Error(f(467)):Error(f(310));te=n,n={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ye===null?zn.memoizedState=ye=n:ye=ye.next=n}return ye}function Ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ei(n){var e=pi;return pi+=1,Sr===null&&(Sr=[]),n=ah(Sr,n,e),e=zn,(ye===null?e.memoizedState:ye.next)===null&&(e=e.alternate,F.H=e===null||e.memoizedState===null?Wh:Ph),n}function Du(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Ei(n);if(n.$$typeof===V)return;if(n.$$typeof===Qn)return Me(n)}throw Error(f(438,String(n)))}function Rc(n){var e=null,t=zn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var l=zn.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Ru(),zn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),l=0;l<n;l++)t[l]=Vn;return e.index++,t}function kt(n,e){return typeof e=="function"?e(n):e}function zu(n){var e=de();return Dc(e,te,n)}function Dc(n,e,t){var l=n.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=t;var r=n.baseQueue,i=l.pending;if(i!==null){if(r!==null){var c=r.next;r.next=i.next,i.next=c}e.baseQueue=r=i,l.pending=null}if(i=n.baseState,r===null)n.memoizedState=i;else{e=r.next;var m=c=null,S=null,C=e,H=!1;do{var X=C.lane&-536870913;if(X!==C.lane?(Ln&X)===X:($t&X)===X){var M=C.revertLane;if(M===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),X===Ql&&(H=!0);else if(($t&M)===M){C=C.next,M===Ql&&(H=!0);continue}else X={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(m=S=X,c=i):S=S.next=X,zn.lanes|=M,El|=M;X=C.action,Il&&t(i,X),i=C.hasEagerState?C.eagerState:t(i,X)}else M={lane:X,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(m=S=M,c=i):S=S.next=M,zn.lanes|=X,El|=X;C=C.next}while(C!==null&&C!==e);if(S===null?c=i:S.next=m,!We(i,n.memoizedState)&&(ge=!0,H&&(t=gr,t!==null)))throw t;n.memoizedState=i,n.baseState=c,n.baseQueue=S,l.lastRenderedState=i}return r===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function zc(n){var e=de(),t=e.queue;if(t===null)throw Error(f(311));t.lastRenderedReducer=n;var l=t.dispatch,r=t.pending,i=e.memoizedState;if(r!==null){t.pending=null;var c=r=r.next;do i=n(i,c.action),c=c.next;while(c!==r);We(i,e.memoizedState)||(ge=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,l]}function ph(n,e,t){var l=zn,r=de(),i=jn;if(i){if(t===void 0)throw Error(f(407));t=t()}else t=e();var c=!We((te||r).memoizedState,t);if(c&&(r.memoizedState=t,ge=!0),r=r.queue,wc(Th.bind(null,l,r,n),[n]),n=r.getSnapshot!==e||c||ye!==null&&(ye.memoizedState.tag&1)!==0,Tr(n?9:8,{destroy:void 0},Sh.bind(null,l,r,t,e),null),n){if(l.flags|=2048,le===null)throw Error(f(349));i||($t&127)!==0||Eh(l,e,t)}return t}function Eh(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=zn.updateQueue,e===null?(e=Ru(),zn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Sh(n,e,t,l){e.value=t,e.getSnapshot=l,xh(e)&&bh(n)}function Th(n,e,t){return t(function(){xh(e)&&bh(n)})}function xh(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!We(n,t)}catch{return!0}}function bh(n){var e=jl(n,2);e!==null&&Je(e,n,2)}function Hc(n){var e=Be();if(typeof n=="function"){var t=n;if(n=t(),Il){tl(!0);try{t()}finally{tl(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:n},e}function Ah(n,e,t,l){return n.baseState=t,Dc(n,te,typeof l=="function"?l:kt)}function Zg(n,e,t,l,r){if(wu(n))throw Error(f(485));if(n=e.action,n!==null){var i={payload:r,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};F.T!==null?t(!0):i.isTransition=!1,l(i),t=e.pending,t===null?(i.next=e.pending=i,Nh(e,i)):(i.next=t.next,e.pending=t.next=i)}}function Nh(n,e){var t=e.action,l=e.payload,r=n.state;if(e.isTransition){var i=F.T,c={};c.types=i!==null?i.types:null,F.T=c;try{var m=t(r,l),S=F.S;S!==null&&S(c,m),Oh(n,e,m)}catch(C){Uc(n,e,C)}finally{i!==null&&c.types!==null&&(i.types=c.types),F.T=i}}else try{i=t(r,l),Oh(n,e,i)}catch(C){Uc(n,e,C)}}function Oh(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Mh(n,e,l)},function(l){return Uc(n,e,l)}):Mh(n,e,t)}function Mh(n,e,t){e.status="fulfilled",e.value=t,_h(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Nh(n,t)))}function Uc(n,e,t){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=t,_h(e),e=e.next;while(e!==l)}n.action=null}function _h(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function Ch(n,e){return e}function Rh(n,e){if(jn){var t=le.formState;if(t!==null){n:{var l=zn;if(jn){if(re){e:{for(var r=re,i=st;r.nodeType!==8;){if(!i){r=null;break e}if(r=dt(r.nextSibling),r===null){r=null;break e}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){re=dt(r.nextSibling),l=r.data==="F!";break n}}al(l)}l=!1}l&&(e=t[0])}}return t=Be(),t.memoizedState=t.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ch,lastRenderedState:e},t.queue=l,t=$h.bind(null,zn,l),l.dispatch=t,l=Hc(!1),i=Lc.bind(null,zn,!1,l.queue),l=Be(),r={state:e,dispatch:null,action:n,pending:null},l.queue=r,t=Zg.bind(null,zn,r,i,t),r.dispatch=t,l.memoizedState=n,[e,t,!1]}function Dh(n){var e=de();return zh(e,te,n)}function zh(n,e,t){if(e=Dc(n,e,Ch)[0],n=zu(kt)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Ei(e)}catch(c){throw c===vr?xu:c}else l=e;e=de();var r=e.queue,i=r.dispatch;return t!==e.memoizedState&&(zn.flags|=2048,Tr(9,{destroy:void 0},Ig.bind(null,r,t),null)),[l,i,n]}function Ig(n,e){n.action=e}function Hh(n){var e=de(),t=te;if(t!==null)return zh(e,t,n);de(),e=e.memoizedState,t=de();var l=t.queue.dispatch;return t.memoizedState=n,[e,l,!1]}function Tr(n,e,t,l){return n={tag:n,create:t,deps:l,inst:e,next:null},e=zn.updateQueue,e===null&&(e=Ru(),zn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(l=t.next,t.next=n,n.next=l,e.lastEffect=n),n}function Uh(){return de().memoizedState}function Hu(n,e,t,l){var r=Be();zn.flags|=n,r.memoizedState=Tr(1|e,{destroy:void 0},t,l===void 0?null:l)}function Uu(n,e,t,l){var r=de();l=l===void 0?null:l;var i=r.memoizedState.inst;te!==null&&l!==null&&Nc(l,te.memoizedState.deps)?r.memoizedState=Tr(e,i,t,l):(zn.flags|=n,r.memoizedState=Tr(1|e,i,t,l))}function wh(n,e){Hu(8390656,8,n,e)}function wc(n,e){Uu(2048,8,n,e)}function Jg(n){zn.flags|=4;var e=zn.updateQueue;if(e===null)e=Ru(),zn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function jh(n){var e=de().memoizedState;return Jg({ref:e,nextImpl:n}),function(){if((Jn&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function qh(n,e){return Uu(4,2,n,e)}function Bh(n,e){return Uu(4,4,n,e)}function Yh(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Lh(n,e,t){t=t!=null?t.concat([n]):null,Uu(4,4,Yh.bind(null,e,n),t)}function jc(){}function Gh(n,e){var t=de();e=e===void 0?null:e;var l=t.memoizedState;return e!==null&&Nc(e,l[1])?l[0]:(t.memoizedState=[n,e],n)}function Qh(n,e){var t=de();e=e===void 0?null:e;var l=t.memoizedState;if(e!==null&&Nc(e,l[1]))return l[0];if(l=n(),Il){tl(!0);try{n()}finally{tl(!1)}}return t.memoizedState=[l,e],l}function qc(n,e,t){return t===void 0||($t&1073741824)!==0&&(Ln&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=Wd(),zn.lanes|=n,El|=n,t)}function Xh(n,e,t,l){return We(t,e)?t:dl.current!==null?(n=qc(n,t,l),We(n,e)||(ge=!0),n):($t&106)===0||($t&1073741824)!==0&&(Ln&261930)===0?(ge=!0,n.memoizedState=t):(n=Wd(),zn.lanes|=n,El|=n,e)}function Vh(n,e,t,l,r){var i=hn.p;hn.p=i!==0&&8>i?i:8;var c=F.T,m={};m.types=c!==null?c.types:null,F.T=m,Lc(n,!1,e,t);try{var S=r(),C=F.S;if(C!==null&&C(m,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var H=Xg(S,l);Si(n,e,H,lt(n))}else Si(n,e,l,lt(n))}catch(X){Si(n,e,{then:function(){},status:"rejected",reason:X},lt())}finally{hn.p=i,c!==null&&m.types!==null&&(c.types=m.types),F.T=c}}function $g(){}function Bc(n,e,t,l){if(n.tag!==5)throw Error(f(476));var r=Kh(n).queue;Vh(n,r,e,He,t===null?$g:function(){return Zh(n),t(l)})}function Kh(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:He,baseState:He,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:He},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Zh(n){var e=Kh(n);e.next===null&&(e=n.alternate.memoizedState),Si(n,e.next.queue,{},lt())}function Yc(){return Me(Lr)}function Ih(){return de().memoizedState}function Jh(){return de().memoizedState}function kg(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=lt();n=sl(t);var l=hl(e,n,t);l!==null&&(Je(l,e,t),mi(l,e,t)),e={cache:dc()},n.payload=e;return}e=e.return}}function Fg(n,e,t){var l=lt();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},wu(n)?kh(e,t):(t=rc(n,e,t,l),t!==null&&(Je(t,n,l),Fh(t,e,l)))}function $h(n,e,t){var l=lt();Si(n,e,t,l)}function Si(n,e,t,l){var r={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(wu(n))kh(e,r);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var c=e.lastRenderedState,m=i(c,t);if(r.hasEagerState=!0,r.eagerState=m,We(m,c))return hu(n,e,r,0),le===null&&su(),!1}catch{}finally{}if(t=rc(n,e,r,l),t!==null)return Je(t,n,l),Fh(t,e,l),!0}return!1}function Lc(n,e,t,l){if(l={lane:2,revertLane:Df(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},wu(n)){if(e)throw Error(f(479))}else e=rc(n,t,l,2),e!==null&&Je(e,n,2)}function wu(n){var e=n.alternate;return n===zn||e!==null&&e===zn}function kh(n,e){Er=_u=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Fh(n,e,t){if((t&4194048)!==0){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,Wo(n,t)}}var ju={readContext:Me,use:Du,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useLayoutEffect:se,useInsertionEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useSyncExternalStore:se,useId:se,useHostTransitionStatus:se,useFormState:se,useActionState:se,useOptimistic:se,useMemoCache:se,useCacheRefresh:se,useEffectEvent:se},Wh={readContext:Me,use:Du,useCallback:function(n,e){return Be().memoizedState=[n,e===void 0?null:e],n},useContext:Me,useEffect:wh,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,Hu(4194308,4,Yh.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Hu(4194308,4,n,e)},useInsertionEffect:function(n,e){Hu(4,2,n,e)},useMemo:function(n,e){var t=Be();e=e===void 0?null:e;var l=n();if(Il){tl(!0);try{n()}finally{tl(!1)}}return t.memoizedState=[l,e],l},useReducer:function(n,e,t){var l=Be();if(t!==void 0){var r=t(e);if(Il){tl(!0);try{t(e)}finally{tl(!1)}}}else r=e;return l.memoizedState=l.baseState=r,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},l.queue=n,n=n.dispatch=Fg.bind(null,zn,n),[l.memoizedState,n]},useRef:function(n){var e=Be();return n={current:n},e.memoizedState=n},useState:function(n){n=Hc(n);var e=n.queue,t=$h.bind(null,zn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:jc,useDeferredValue:function(n,e){var t=Be();return qc(t,n,e)},useTransition:function(){var n=Hc(!1);return n=Vh.bind(null,zn,n.queue,!0,!1),Be().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var l=zn,r=Be();if(jn){if(t===void 0)throw Error(f(407));t=t()}else{if(t=e(),le===null)throw Error(f(349));(Ln&127)!==0||Eh(l,e,t)}r.memoizedState=t;var i={value:t,getSnapshot:e};return r.queue=i,wh(Th.bind(null,l,i,n),[n]),l.flags|=2048,Tr(9,{destroy:void 0},Sh.bind(null,l,i,t,e),null),t},useId:function(){var n=Be(),e=le.identifierPrefix;if(jn){var t=Ct,l=_t;t=(l&~(1<<32-ke(l)-1)).toString(32)+t,e="_"+e+"R_"+t,t=Cu++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=Vg++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:Yc,useFormState:Rh,useActionState:Rh,useOptimistic:function(n){var e=Be();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=Lc.bind(null,zn,!0,t),t.dispatch=e,[n,e]},useMemoCache:Rc,useCacheRefresh:function(){return Be().memoizedState=kg.bind(null,zn)},useEffectEvent:function(n){var e=Be(),t={impl:n};return e.memoizedState=t,function(){if((Jn&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}},Ph={readContext:Me,use:Du,useCallback:Gh,useContext:Me,useEffect:wc,useImperativeHandle:Lh,useInsertionEffect:qh,useLayoutEffect:Bh,useMemo:Qh,useReducer:zu,useRef:Uh,useState:function(){return zu(kt)},useDebugValue:jc,useDeferredValue:function(n,e){var t=de();return Xh(t,te.memoizedState,n,e)},useTransition:function(){var n=zu(kt)[0],e=de().memoizedState;return[typeof n=="boolean"?n:Ei(n),e]},useSyncExternalStore:ph,useId:Ih,useHostTransitionStatus:Yc,useFormState:Dh,useActionState:Dh,useOptimistic:function(n,e){var t=de();return Ah(t,te,n,e)},useMemoCache:Rc,useCacheRefresh:Jh,useEffectEvent:jh},Wg={readContext:Me,use:Du,useCallback:Gh,useContext:Me,useEffect:wc,useImperativeHandle:Lh,useInsertionEffect:qh,useLayoutEffect:Bh,useMemo:Qh,useReducer:zc,useRef:Uh,useState:function(){return zc(kt)},useDebugValue:jc,useDeferredValue:function(n,e){var t=de();return te===null?qc(t,n,e):Xh(t,te.memoizedState,n,e)},useTransition:function(){var n=zc(kt)[0],e=de().memoizedState;return[typeof n=="boolean"?n:Ei(n),e]},useSyncExternalStore:ph,useId:Ih,useHostTransitionStatus:Yc,useFormState:Hh,useActionState:Hh,useOptimistic:function(n,e){var t=de();return te!==null?Ah(t,te,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:Rc,useCacheRefresh:Jh,useEffectEvent:jh};function Gc(n,e,t,l){e=n.memoizedState,t=t(l,e),t=t==null?e:pn({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Qc={enqueueSetState:function(n,e,t){n=n._reactInternals;var l=lt(),r=sl(l);r.payload=e,t!=null&&(r.callback=t),e=hl(n,r,l),e!==null&&(Je(e,n,l),mi(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var l=lt(),r=sl(l);r.tag=1,r.payload=e,t!=null&&(r.callback=t),e=hl(n,r,l),e!==null&&(Je(e,n,l),mi(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=lt(),l=sl(t);l.tag=2,e!=null&&(l.callback=e),e=hl(n,l,t),e!==null&&(Je(e,n,t),mi(e,n,t))}};function nd(n,e,t,l,r,i,c){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,i,c):e.prototype&&e.prototype.isPureReactComponent?!ui(t,l)||!ui(r,i):!0}function ed(n,e,t,l){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,l),e.state!==n&&Qc.enqueueReplaceState(e,e.state,null)}function Jl(n,e){var t=e;if("ref"in e){t={};for(var l in e)l!=="ref"&&(t[l]=e[l])}if(n=n.defaultProps){t===e&&(t=pn({},t));for(var r in n)t[r]===void 0&&(t[r]=n[r])}return t}function td(n){ou(n)}function ld(n){console.error(n)}function rd(n){ou(n)}function qu(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function id(n,e,t){try{var l=n.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Xc(n,e,t){return t=sl(t),t.tag=3,t.payload={element:null},t.callback=function(){qu(n,e)},t}function ud(n){return n=sl(n),n.tag=3,n}function ad(n,e,t,l){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=l.value;n.payload=function(){return r(i)},n.callback=function(){id(e,t,l)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){id(e,t,l),typeof r!="function"&&(Sl===null?Sl=new Set([this]):Sl.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function Pg(n,e,t,l,r){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=t.alternate,e!==null&&Ll(e,t,r,!0),t=_e.current,t!==null){switch(t.tag){case 31:case 13:case 19:return we===null?ra():t.alternate===null&&he===0&&(he=3),t.flags&=-257,t.flags|=65536,t.lanes=r,l===bu?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([l]):e.add(l),_f(n,l,r)),!1;case 22:return t.flags|=65536,l===bu?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([l]):t.add(l)),_f(n,l,r)),!1}throw Error(f(435,t.tag))}return _f(n,l,r),ra(),!1}if(jn)return e=_e.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,l!==fc&&(n=Error(f(422),{cause:l}),fi(ct(n,t)))):(l!==fc&&(e=Error(f(423),{cause:l}),fi(ct(e,t))),n=n.current.alternate,n.flags|=65536,r&=-r,n.lanes|=r,l=ct(l,t),r=Xc(n.stateNode,l,r),Ec(n,r),he!==4&&(he=2)),!1;var i=Error(f(520),{cause:l});if(i=ct(i,t),_i===null?_i=[i]:_i.push(i),he!==4&&(he=2),e===null)return!0;l=ct(l,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=r&-r,t.lanes|=n,n=Xc(t.stateNode,l,n),Ec(t,n),!1;case 1:if(e=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Sl===null||!Sl.has(i))))return t.flags|=65536,r&=-r,t.lanes|=r,r=ud(r),ad(r,n,t,l),Ec(t,r),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var Vc=Error(f(461)),ge=!1;function Se(n,e,t,l){e.child=n===null?sh(e,null,t,l):Zl(e,n.child,t,l)}function cd(n,e,t,l,r){t=t.render;var i=e.ref;if("ref"in l){var c={};for(var m in l)m!=="ref"&&(c[m]=l[m])}else c=l;return Gl(e),l=Oc(n,e,t,c,i,r),m=Mc(),n!==null&&!ge?(_c(n,e,r),Ft(n,e,r)):(jn&&m&&gu(e),e.flags|=1,Se(n,e,l,r),e.child)}function fd(n,e,t,l,r){if(n===null){var i=t.type;return typeof i=="function"&&!ic(i)&&i.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=i,od(n,e,i,l,r)):(n=mu(t.type,null,l,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!Wc(n,r)){var c=i.memoizedProps;if(t=t.compare,t=t!==null?t:ui,t(c,l)&&n.ref===e.ref)return Ft(n,e,r)}return e.flags|=1,n=Kt(i,l),n.ref=e.ref,n.return=e,e.child=n}function od(n,e,t,l,r){if(n!==null){var i=n.memoizedProps;if(ui(i,l)&&n.ref===e.ref)if(ge=!1,e.pendingProps=l=i,Wc(n,r))(n.flags&131072)!==0&&(ge=!0);else return e.lanes=n.lanes,Ft(n,e,r)}return Kc(n,e,t,l,r)}function sd(n,e,t,l){var r=l.children,i=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,n!==null){for(l=e.child=n.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~i}else l=0,e.child=null;return hd(n,e,i,t,l)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Tu(e,i!==null?i.cachePool:null),i!==null?mh(e,i):Tc(),yh(e);else return l=e.lanes=536870912,hd(n,e,i!==null?i.baseLanes|t:t,t,l)}else i!==null?(Tu(e,i.cachePool),mh(e,i),yl(),e.memoizedState=null):(n!==null&&Tu(e,null),Tc(),yl());return Se(n,e,r,t),e.child}function Ti(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function hd(n,e,t,l,r){var i=yc();return i=i===null?null:{parent:me._currentValue,pool:i},e.memoizedState={baseLanes:t,cachePool:i},n!==null&&Tu(e,null),Tc(),yh(e),n!==null&&Ll(n,e,l,!0),e.childLanes=r,null}function Bu(n,e){return e=Yu({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function dd(n,e,t){return Zl(e,n.child,null,t),n=Bu(e,e.pendingProps),n.flags|=2,Pe(e),e.memoizedState=null,n}function n1(n,e,t){var l=e.pendingProps,r=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(jn){if(l.mode==="hidden")return n=Bu(e,l),e.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},Ti(null,n);if(bc(e),(n=re)?(n=Ym(n,st),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:il!==null?{id:_t,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},t=ks(n),t.return=e,e.child=t,be=e,re=null)):n=null,n===null)throw al(e);return e.lanes=536870912,null}return Bu(e,l)}var i=n.memoizedState;if(i!==null){var c=i.dehydrated;if(bc(e),r)if(e.flags&256)e.flags&=-257,e=dd(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(f(558));else if(ge||Ll(n,e,t,!1),r=(t&n.childLanes)!==0,ge||r){if(dl.current===null){if(l=le,l!==null&&(c=Po(l,t),c!==0&&c!==i.retryLane))throw i.retryLane=c,jl(n,c),Je(l,n,c),Vc;ra()}e=dd(n,e,t)}else n=i.treeContext,re=dt(c.nextSibling),be=e,jn=!0,ul=null,st=!1,n!==null&&Ps(e,n),e=Bu(e,l),e.flags|=134221824;return e}return n=Kt(n.child,{mode:l.mode,children:l.children}),n.ref=e.ref,e.child=n,n.return=e,n}function xr(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(f(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Kc(n,e,t,l,r){return Gl(e),t=Oc(n,e,t,l,void 0,r),l=Mc(),n!==null&&!ge?(_c(n,e,r),Ft(n,e,r)):(jn&&l&&gu(e),e.flags|=1,Se(n,e,t,r),e.child)}function md(n,e,t,l,r,i){return Gl(e),e.updateQueue=null,t=vh(e,l,t,r),gh(n),l=Mc(),n!==null&&!ge?(_c(n,e,i),Ft(n,e,i)):(jn&&l&&gu(e),e.flags|=1,Se(n,e,t,i),e.child)}function yd(n,e,t,l,r){if(Gl(e),e.stateNode===null){var i=hr,c=t.contextType;typeof c=="object"&&c!==null&&(i=Me(c)),i=new t(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},vc(e),c=t.contextType,i.context=typeof c=="object"&&c!==null?Me(c):hr,i.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Gc(e,t,c,l),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Qc.enqueueReplaceState(i,i.state,null),gi(e,l,i,r),yi(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(n===null){i=e.stateNode;var m=e.memoizedProps,S=Jl(t,m);i.props=S;var C=i.context,H=t.contextType;c=hr,typeof H=="object"&&H!==null&&(c=Me(H));var X=t.getDerivedStateFromProps;H=typeof X=="function"||typeof i.getSnapshotBeforeUpdate=="function",m=e.pendingProps!==m,H||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m||C!==c)&&ed(e,i,l,c),ol=!1;var M=e.memoizedState;i.state=M,gi(e,l,i,r),yi(),C=e.memoizedState,m||M!==C||ol?(typeof X=="function"&&(Gc(e,t,X,l),C=e.memoizedState),(S=ol||nd(e,t,S,l,M,C,c))?(H||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=C),i.props=l,i.state=C,i.context=c,l=S):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,pc(n,e),c=e.memoizedProps,H=Jl(t,c),i.props=H,X=e.pendingProps,M=i.context,C=t.contextType,S=hr,typeof C=="object"&&C!==null&&(S=Me(C)),m=t.getDerivedStateFromProps,(C=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==X||M!==S)&&ed(e,i,l,S),ol=!1,M=e.memoizedState,i.state=M,gi(e,l,i,r),yi();var z=e.memoizedState;c!==X||M!==z||ol||n!==null&&n.dependencies!==null&&Eu(n.dependencies)?(typeof m=="function"&&(Gc(e,t,m,l),z=e.memoizedState),(H=ol||nd(e,t,H,l,M,z,S)||n!==null&&n.dependencies!==null&&Eu(n.dependencies))?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,z,S),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,z,S)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===n.memoizedProps&&M===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===n.memoizedProps&&M===n.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=z),i.props=l,i.state=z,i.context=S,l=H):(typeof i.componentDidUpdate!="function"||c===n.memoizedProps&&M===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===n.memoizedProps&&M===n.memoizedState||(e.flags|=1024),l=!1)}return i=l,xr(n,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,n!==null&&l?(e.child=Zl(e,n.child,null,r),e.child=Zl(e,null,t,r)):Se(n,e,t,r),e.memoizedState=i.state,n=e.child):n=Ft(n,e,r),n}function gd(n,e,t,l){return Bl(),e.flags|=256,Se(n,e,t,l),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ic(n){return{baseLanes:n,cachePool:ih()}}function Jc(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=tt),n}function vd(n,e,t){var l=e.pendingProps,r=!1,i=(e.flags&128)!==0,c;if((c=i)||(c=n!==null&&n.memoizedState===null?!1:(Ce.current&2)!==0),c&&(r=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,n===null){if(jn){if(r?ml(e):yl(),(n=re)?(n=Ym(n,st),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:il!==null?{id:_t,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},t=ks(n),t.return=e,e.child=t,be=e,re=null)):n=null,n===null)throw al(e);return Jf(n)?e.lanes=32:e.lanes=536870912,null}return i=l.children,l=l.fallback,r?(yl(),r=e.mode,i=Yu({mode:"hidden",children:i},r),l=ql(l,r,t,null),i.return=e,l.return=e,i.sibling=l,e.child=i,l=e.child,l.memoizedState=Ic(t),l.childLanes=Jc(n,c,t),e.memoizedState=Zc,Ti(null,l)):(ml(e),$c(e,i))}var m=n.memoizedState;if(m!==null){var S=m.dehydrated;if(S!==null)return e1(n,e,i,c,l,S,m,t)}return r?(yl(),r=l.fallback,i=e.mode,m=n.child,S=m.sibling,l=Kt(m,{mode:"hidden",children:l.children}),l.subtreeFlags=m.subtreeFlags&1206910976,S!==null?r=Kt(S,r):(r=ql(r,i,t,null),r.flags|=2),r.return=e,l.return=e,l.sibling=r,e.child=l,Ti(null,l),l=e.child,r=n.child.memoizedState,r===null?r=Ic(t):(i=r.cachePool,i!==null?(m=me._currentValue,i=i.parent!==m?{parent:m,pool:m}:i):i=ih(),r={baseLanes:r.baseLanes|t,cachePool:i}),l.memoizedState=r,l.childLanes=Jc(n,c,t),e.memoizedState=Zc,Ti(n.child,l)):(ml(e),t=n.child,n=t.sibling,t=Kt(t,{mode:"visible",children:l.children}),t.return=e,t.sibling=null,n!==null&&(c=e.deletions,c===null?(e.deletions=[n],e.flags|=16):c.push(n)),e.child=t,e.memoizedState=null,t)}function $c(n,e){return e=Yu({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Yu(n,e){return n=Ve(22,n,null,e),n.lanes=0,n}function Lu(n,e,t){return Zl(e,n.child,null,t),n=$c(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function e1(n,e,t,l,r,i,c,m){if(t)return e.flags&256?(ml(e),e.flags&=-257,Lu(n,e,m)):e.memoizedState!==null?(yl(),e.child=n.child,e.flags|=128,null):(yl(),i=r.fallback,c=e.mode,r=Yu({mode:"visible",children:r.children},c),i=ql(i,c,m,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,Zl(e,n.child,null,m),r=e.child,r.memoizedState=Ic(m),r.childLanes=Jc(n,l,m),e.memoizedState=Zc,Ti(null,r));if(ml(e),Jf(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var S=l.dgst;return l=S,l!==""&&(r=Error(f(419)),r.stack="",r.digest=l,fi({value:r,source:null,stack:null})),Lu(n,e,m)}if(ge||Ll(n,e,m,!1),l=(m&n.childLanes)!==0,ge||l){if(dl.current!==null)return Lu(n,e,m);if(l=le,l!==null&&(r=Po(l,m),r!==0&&r!==c.retryLane))throw c.retryLane=r,jl(n,r),Je(l,n,r),Vc;return If(i)||ra(),Lu(n,e,m)}return If(i)?(e.flags|=192,e.child=n.child,null):(n=c.treeContext,re=dt(i.nextSibling),be=e,jn=!0,ul=null,st=!1,n!==null&&Ps(e,n),e=$c(e,r.children),e.flags|=134221824,e)}function pd(n,e,t){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e),pu(n.return,e,t)}function Ed(n){for(var e=null;n!==null;){var t=n.alternate;t!==null&&Mu(t)===null&&(e=n),n=n.sibling}return e}function Gu(n,e,t,l,r,i){var c=n.memoizedState;c===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:r,treeForkCount:i}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=t,c.tailMode=r,c.treeForkCount=i)}function kc(n){var e=n.child;for(n.child=null;e!==null;){var t=e.sibling;e.sibling=n.child,n.child=e,e=t}}function Fc(n,e,t){var l=e.pendingProps,r=l.revealOrder,i=l.tail;l=l.children;var c=Ce.current;if(e.flags&128)return vi(e,c),null;var m=(c&2)!==0;if(m?(c=c&1|2,e.flags|=128):c&=1,vi(e,c),r==="backwards"&&n!==null?(kc(n),Se(n,e,l,t),kc(n)):Se(n,e,l,t),l=jn?ci:0,!m&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&pd(n,t,e);else if(n.tag===19)pd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(r){case"backwards":t=Ed(e.child),t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null,kc(e)),Gu(e,!0,r,null,i,l);break;case"unstable_legacy-backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Mu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Gu(e,!0,t,null,i,l);break;case"together":Gu(e,!1,null,null,void 0,l);break;case"independent":e.memoizedState=null;break;default:t=Ed(e.child),t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Gu(e,!1,r,t,i,l)}return e.child}function Sd(n,e,t){var l=e.pendingProps;return cl(e,e.type,l.value),Se(n,e,l.children,t),e.child}function Ft(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),El|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(Ll(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(f(153));if(e.child!==null){for(n=e.child,t=Kt(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Kt(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Wc(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&Eu(n)))}function t1(n,e,t){switch(e.tag){case 3:gt(e,e.stateNode.containerInfo),cl(e,me,n.memoizedState.cache),Bl();break;case 27:case 5:Bt(e);break;case 4:gt(e,e.stateNode.containerInfo);break;case 10:cl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,bc(e),null;break;case 13:var l=e.memoizedState;if(l!==null){if(l.dehydrated!==null)return ml(e),e.flags|=128,null;l=Ll(n,e,t,!1);var r=e.child.childLanes;return l||(t&r)!==0?vd(n,e,t):(ml(e),n=Ft(n,e,t),n!==null?n.sibling:null)}ml(e);break;case 19:if(e.flags&128)return Fc(n,e,t);if(r=(n.flags&128)!==0,l=(t&e.childLanes)!==0,l||(Ll(n,e,t,!1),l=(t&e.childLanes)!==0),r){if(l)return Fc(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vi(e,Ce.current),l)break;return null;case 22:return e.lanes=0,sd(n,e,t,e.pendingProps);case 24:cl(e,me,n.memoizedState.cache)}return Ft(n,e,t)}function Td(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)ge=!0;else{if(!Wc(n,t)&&(e.flags&128)===0)return ge=!1,t1(n,e,t);ge=(n.flags&131072)!==0}else ge=!1,jn&&(e.flags&1048576)!==0&&Ws(e,ci,e.index);switch(e.lanes=0,e.tag){case 16:n:{var l=e.pendingProps;if(n=Vl(e.elementType),e.type=n,typeof n=="function")ic(n)?(l=Jl(n,l),e.tag=1,e=yd(null,e,n,l,t)):(e.tag=0,e=Kc(null,e,n,l,t));else{if(n!=null){var r=n.$$typeof;if(r===U){e.tag=11,e=cd(null,e,n,l,t);break n}else if(r===xn){e.tag=14,e=fd(null,e,n,l,t);break n}else if(r===Qn){e.tag=10,e.type=n,e=Sd(null,e,t);break n}}throw e=Dn(n)||n,Error(f(306,e,""))}}return e;case 0:return Kc(n,e,e.type,e.pendingProps,t);case 1:return l=e.type,r=Jl(l,e.pendingProps),yd(n,e,l,r,t);case 3:n:{if(gt(e,e.stateNode.containerInfo),n===null)throw Error(f(387));l=e.pendingProps;var i=e.memoizedState;r=i.element,pc(n,e),gi(e,l,null,t);var c=e.memoizedState;if(l=c.cache,cl(e,me,l),l!==i.cache&&hc(e,[me],t,!0),yi(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=gd(n,e,l,t);break n}else if(l!==r){r=ct(Error(f(424)),e),fi(r),e=gd(n,e,l,t);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(re=dt(n.firstChild),be=e,jn=!0,ul=null,st=!0,t=sh(e,null,l,t),e.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling}else{if(Bl(),l===r){e=Ft(n,e,t);break n}Se(n,e,l,t)}e=e.child}return e;case 26:return xr(n,e),n===null?(t=Zm(e.type,null,e.pendingProps,null))?e.memoizedState=t:jn||(e.stateNode=Nm(e.type,e.pendingProps,Te.current,e)):e.memoizedState=Zm(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Bt(e),n===null&&jn&&(l=e.stateNode=Qm(e.type,e.pendingProps,Te.current),be=e,st=!0,r=re,bl(e.type)?($f=r,re=dt(l.firstChild)):re=r),Se(n,e,e.pendingProps.children,t),xr(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&jn&&((r=l=re)&&(l=k1(l,e.type,e.pendingProps,st),l!==null?(e.stateNode=l,be=e,re=dt(l.firstChild),st=!1,r=!0):r=!1),r||al(e)),Bt(e),r=e.type,i=e.pendingProps,c=n!==null?n.memoizedProps:null,l=i.children,Lf(r,i)?l=null:c!==null&&Lf(r,c)&&(e.flags|=32),e.memoizedState!==null&&(r=Oc(n,e,Kg,null,null,t),Lr._currentValue=r),xr(n,e),Se(n,e,l,t),e.child;case 6:return n===null&&jn&&((n=t=re)&&(t=F1(t,e.pendingProps,st),t!==null?(e.stateNode=t,be=e,re=null,n=!0):n=!1),n||al(e)),null;case 13:return vd(n,e,t);case 4:return gt(e,e.stateNode.containerInfo),l=e.pendingProps,n===null?e.child=Zl(e,null,l,t):Se(n,e,l,t),e.child;case 11:return cd(n,e,e.type,e.pendingProps,t);case 7:return l=e.pendingProps,xr(n,e),Se(n,e,l,t),e.child;case 8:return Se(n,e,e.pendingProps.children,t),e.child;case 12:return Se(n,e,e.pendingProps.children,t),e.child;case 10:return Sd(n,e,t);case 9:return r=e.type._context,l=e.pendingProps.children,Gl(e),r=Me(r),l=l(r),e.flags|=1,Se(n,e,l,t),e.child;case 14:return fd(n,e,e.type,e.pendingProps,t);case 15:return od(n,e,e.type,e.pendingProps,t);case 19:return Fc(n,e,t);case 31:return n1(n,e,t);case 22:return sd(n,e,t,e.pendingProps);case 24:return Gl(e),l=Me(me),n===null?(r=yc(),r===null&&(r=le,i=dc(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=t),r=i),e.memoizedState={parent:l,cache:r},vc(e),cl(e,me,r)):((n.lanes&t)!==0&&(pc(n,e),gi(e,null,null,t),yi()),r=n.memoizedState,i=e.memoizedState,r.parent!==l?(r={parent:l,cache:l},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),cl(e,me,l)):(l=i.cache,cl(e,me,l),l!==r.cache&&hc(e,[me],t,!0))),Se(n,e,e.pendingProps.children,t),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=e.pendingProps,l.name!=null&&l.name!=="auto"?e.flags|=n===null?18882560:18874368:jn&&gu(e),n!==null&&n.memoizedProps.name!==l.name?e.flags|=4194816:xr(n,e),Se(n,e,l.children,t),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function Wt(n){n.flags|=4}function Pc(n,e,t,l,r){var i;if((i=(n.mode&32)!==0)&&(i=t===null?km(e,l):km(e,l)&&(l.src!==t.src||l.srcSet!==t.srcSet)),i){if(n.flags|=16777216,(r&335544128)===r)if(n.stateNode.complete)n.flags|=8192;else if(tm())n.flags|=8192;else throw Kl=bu,gc}else n.flags&=-16777217}function xd(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Fm(e))if(tm())n.flags|=8192;else throw Kl=bu,gc}function Qu(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?ko():536870912,n.lanes|=e,Mr|=e)}function xi(n,e){if(!jn)switch(n.tailMode){case"visible":break;case"collapsed":for(var t=n.tail,l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null;break;default:for(e=n.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null}}function ie(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,l=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags&1206910976,l|=r.flags&1206910976,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=l,n.childLanes=t,e}function l1(n,e,t){var l=e.pendingProps;switch(cc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(e),null;case 1:return ie(e),null;case 3:return t=e.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Jt(me),pe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(yr(e)?Wt(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,oc())),ie(e),null;case 26:var r=e.type,i=e.memoizedState;return n===null?(Wt(e),i!==null?(ie(e),xd(e,i)):(ie(e),Pc(e,r,null,l,t))):i?i!==n.memoizedState?(Wt(e),ie(e),xd(e,i)):(ie(e),e.flags&=-16777217):(n=n.memoizedProps,n!==l&&Wt(e),ie(e),Pc(e,r,n,l,t)),null;case 27:if(Qe(e),t=Te.current,r=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Wt(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return ie(e),e.subtreeFlags&=-33554433,null}n=ue.current,yr(e)?nh(e):(n=Qm(r,l,t),e.stateNode=n,Wt(e))}return ie(e),e.subtreeFlags&=-33554433,null;case 5:if(Qe(e),r=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Wt(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return ie(e),e.subtreeFlags&=-33554433,null}if(i=ue.current,yr(e))nh(e);else{var c=Hi(Te.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(r,{is:l.is}):c.createElement(r)}}i[Oe]=e,i[Xe]=l;n:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break n;for(;c.sibling===null;){if(c.return===null||c.return===e)break n;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=i;n:switch(De(i,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&Wt(e)}}return ie(e),e.subtreeFlags&=-33554433,Pc(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==l&&Wt(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(f(166));if(n=Te.current,yr(e)){if(n=e.stateNode,t=e.memoizedProps,l=null,r=be,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}n[Oe]=e,n=!!(n.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Tm(n.nodeValue,t)),n||al(e,!0)}else n=Hi(n).createTextNode(l),n[Oe]=e,e.stateNode=n}return ie(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(l=yr(e),t!==null){if(n===null){if(!l)throw Error(f(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(557));n[Oe]=e}else Bl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ie(e),n=!1}else t=oc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(Pe(e),e):(Pe(e),null);if((e.flags&128)!==0)throw Error(f(558))}return ie(e),null;case 13:if(l=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(r=yr(e),l!==null&&l.dehydrated!==null){if(n===null){if(!r)throw Error(f(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(f(317));r[Oe]=e}else Bl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ie(e),r=!1}else r=oc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(Pe(e),e):(Pe(e),null)}return Pe(e),(e.flags&128)!==0?(e.lanes=t,e):(t=l!==null,n=n!==null&&n.memoizedState!==null,t&&(l=e.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==r&&(l.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),Qu(e,e.updateQueue),ie(e),null);case 4:return pe(),n===null&&wf(e.stateNode.containerInfo),e.flags|=67108864,ie(e),null;case 10:return Jt(e.type),ie(e),null;case 19:if(Ac(e),l=e.memoizedState,l===null)return ie(e),null;if(r=(e.flags&128)!==0,i=l.rendering,i===null)if(r)xi(l,!1);else{if(he!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(i=Mu(n),i!==null){for(e.flags|=128,xi(l,!1),n=i.updateQueue,e.updateQueue=n,Qu(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)$s(t,n),t=t.sibling;return vi(e,Ce.current&1|2),jn&&Zt(e,l.treeForkCount),e.child}n=n.sibling}l.tail!==null&&K()>na&&(e.flags|=128,r=!0,xi(l,!1),e.lanes=4194304)}else{if(!r)if(n=Mu(i),n!==null){if(e.flags|=128,r=!0,n=n.updateQueue,e.updateQueue=n,Qu(e,n),xi(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!i.alternate&&!jn)return ie(e),null}else 2*K()-l.renderingStartTime>na&&t!==536870912&&(e.flags|=128,r=!0,xi(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(n=l.last,n!==null?n.sibling=i:e.child=i,l.last=i)}if(l.tail!==null){n=l.tail;n:{for(t=n;t!==null;){if(t.alternate!==null){t=!1;break n}t=t.sibling}t=!0}return l.rendering=n,l.tail=n.sibling,l.renderingStartTime=K(),n.sibling=null,i=Ce.current,i=r?i&1|2:i&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!t||jn?vi(e,i):(t=i,Kn(_e,e),Kn(Ce,t),we===null&&(we=e)),jn&&Zt(e,l.treeForkCount),n}return ie(e),null;case 22:case 23:return Pe(e),xc(),l=e.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(t&536870912)!==0&&(e.flags&128)===0&&(ie(e),e.subtreeFlags&6&&(e.flags|=8192)):ie(e),t=e.updateQueue,t!==null&&Qu(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==t&&(e.flags|=2048),n!==null&&$n(Xl),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Jt(me),ie(e),null;case 25:return null;case 30:return e.flags|=33554432,ie(e),null}throw Error(f(156,e.tag))}function r1(n,e){switch(cc(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Jt(me),pe(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return Qe(e),null;case 31:if(e.memoizedState!==null){if(Pe(e),e.alternate===null)throw Error(f(340));Bl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(Pe(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Bl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ac(e),n=e.flags,n&65536?(e.flags=n&-65537|128,n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null),e.flags|=4,e):null;case 4:return pe(),null;case 10:return Jt(e.type),null;case 22:case 23:return Pe(e),xc(),n!==null&&$n(Xl),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Jt(me),null;case 25:return null;default:return null}}function bd(n,e){switch(cc(e),e.tag){case 3:Jt(me),pe();break;case 26:case 27:case 5:Qe(e);break;case 4:pe();break;case 31:e.memoizedState!==null&&Pe(e);break;case 13:Pe(e);break;case 19:Ac(e);break;case 10:Jt(e.type);break;case 22:case 23:Pe(e),xc(),n!==null&&$n(Xl);break;case 24:Jt(me)}}function bi(n,e){try{var t=e.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var r=l.next;t=r;do{if((t.tag&n)===n){l=void 0;var i=t.create,c=t.inst;l=i(),c.destroy=l}t=t.next}while(t!==r)}}catch(m){Pn(e,e.return,m)}}function gl(n,e,t){try{var l=e.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var i=r.next;l=i;do{if((l.tag&n)===n){var c=l.inst,m=c.destroy;if(m!==void 0){c.destroy=void 0,r=e;var S=t,C=m;try{C()}catch(H){Pn(r,S,H)}}}l=l.next}while(l!==i)}}catch(H){Pn(e,e.return,H)}}function Ad(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{dh(e,t)}catch(l){Pn(n,n.return,l)}}}function Nd(n,e,t){t.props=Jl(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(l){Pn(n,e,l)}}function Rt(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:var r=n.stateNode,i=Xt(n.memoizedProps,r);(r.ref===null||r.ref.name!==i)&&(r.ref=zm(i)),l=r.ref;break;case 7:if(n.stateNode===null){var c=new rt(n);g(n.child,!1,J1,c,void 0,void 0),n.stateNode=c}l=n.stateNode;break;default:l=n.stateNode}typeof t=="function"?n.refCleanup=t(l):t.current=l}}catch(m){Pn(n,e,m)}}function Re(n,e){var t=n.ref,l=n.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(r){Pn(n,e,r)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){Pn(n,e,r)}else t.current=null}function Xu(n,e){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&e!==null)for(var t=0;t<e.length;t++)Bm(n.stateNode,e[t])}function Od(n){for(var e=n.return;e!==null&&(ef(e)&&Bm(n.stateNode,e.stateNode),!nf(e));)e=e.return}function Ai(n){for(var e=n.return;e!==null&&(ef(e)&&$1(n.stateNode,e.stateNode),!nf(e));)e=e.return}function nf(n){return n.tag===5||n.tag===3||n.tag===27}function ef(n){return n&&n.tag===7&&n.stateNode!==null}function tf(n){var e=n.type,t=n.memoizedProps,l=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break n;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(r){Pn(n,n.return,r)}}function lf(n,e,t){try{var l=n.stateNode;R1(l,n.type,t,e),l[Xe]=e}catch(r){Pn(n,n.return,r)}}function Md(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&bl(n.type)||n.tag===4}function rf(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Md(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&bl(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uf(n,e,t,l){var r=n.tag;if(r===5||r===6)r=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(r,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(r),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Mt)),Xu(n,l),In=!0;else if(r!==4&&(r===27&&(Xu(n,l),l=null,bl(n.type)&&(t=n.stateNode,e=null)),n=n.child,n!==null))for(uf(n,e,t,l),n=n.sibling;n!==null;)uf(n,e,t,l),n=n.sibling}function Vu(n,e,t,l){var r=n.tag;if(r===5||r===6)r=n.stateNode,e?t.insertBefore(r,e):t.appendChild(r),Xu(n,l),In=!0;else if(r!==4&&(r===27&&(Xu(n,l),l=null,bl(n.type)&&(t=n.stateNode)),n=n.child,n!==null))for(Vu(n,e,t,l),n=n.sibling;n!==null;)Vu(n,e,t,l),n=n.sibling}function _d(n){var e=n.stateNode,t=n.memoizedProps;try{for(var l=n.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);De(e,l,t),e[Oe]=n,e[Xe]=t}catch(i){Pn(n,n.return,i)}}var Ku=!1,nt=null;function Cd(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(Ku=!0)}var Dt=null;function Rd(){var n=Dt;return Dt=null,n}var Ke=0;function br(n,e,t,l,r){return Ke=0,Dd(n.child,e,t,l,r)}function Dd(n,e,t,l,r){for(var i=!1;n!==null;){if(n.tag===5){var c=n.stateNode;if(l!==null){var m=Xf(c);l.push(m),m.view&&(i=!0)}else i||Xf(c).view&&(i=!0);Ku=!0,Rm(c,Ke===0?e:e+"_"+Ke,t),Ke++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&r||Dd(n.child,e,t,l,r)&&(i=!0));n=n.sibling}return i}function zt(n,e){for(;n!==null;)n.tag===5?Dm(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&e||zt(n.child,e)),n=n.sibling}function Zu(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(Zu(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var e=n.memoizedProps;if(e.name==null||e.name==="auto")throw Error(f(544));var t=e.name;e=Vt(e.default,e.share),e!=="none"&&(br(n,t,e,null,!1)||zt(n.child,!1))}n=n.sibling}}function af(n,e){if(n.tag===30){var t=n.stateNode,l=n.memoizedProps,r=Xt(l,t),i=Vt(l.default,t.paired?l.share:l.enter);i!=="none"?br(n,r,i,null,!1)?(Zu(n),t.paired||e||Dr(n,l.onEnter)):zt(n.child,!1):Zu(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)af(n,e),n=n.sibling;else Zu(n)}function cf(n){if(nt!==null&&nt.size!==0){var e=nt;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var t=n.memoizedProps,l=t.name;if(l!=null&&l!=="auto"){var r=e.get(l);if(r!==void 0){var i=Vt(t.default,t.share);if(i!=="none"&&(br(n,l,i,null,!1)?(i=n.stateNode,r.paired=i,i.paired=r,Dr(n,t.onShare)):zt(n.child,!1)),e.delete(l),e.size===0)break}}}cf(n)}n=n.sibling}}}function ff(n){if(n.tag===30){var e=n.memoizedProps,t=Xt(e,n.stateNode),l=nt!==null?nt.get(t):void 0,r=Vt(e.default,l!==void 0?e.share:e.exit);r!=="none"&&(br(n,t,r,null,!1)?l!==void 0?(r=n.stateNode,l.paired=r,r.paired=l,nt.delete(t),Dr(n,e.onShare)):Dr(n,e.onExit):zt(n.child,!1)),nt!==null&&cf(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)ff(n),n=n.sibling;else nt!==null&&cf(n)}function zd(n){for(n=n.child;n!==null;){if(n.tag===30){var e=n.memoizedProps,t=Xt(e,n.stateNode);e=Vt(e.default,e.update),n.flags&=-5,e!=="none"&&br(n,t,e,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&zd(n);n=n.sibling}}function of(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var e=n.stateNode;e.paired!==null&&(e.paired=null,zt(n.child,!1))}of(n)}n=n.sibling}}function Iu(n){if(n.tag===30)n.stateNode.paired=null,zt(n.child,!1),of(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Iu(n),n=n.sibling;else of(n)}function Hd(n){for(n=n.child;n!==null;)n.tag===30?zt(n.child,!1):(n.subtreeFlags&33554432)!==0&&Hd(n),n=n.sibling}function sf(n,e,t,l,r,i,c){for(var m=!1;e!==null;){if(e.tag===5){var S=e.stateNode;if(i!==null&&Ke<i.length){var C=i[Ke],H=Xf(S);(C.view||H.view)&&(m=!0);var X;if(X=(n.flags&4)===0)if(H.clip)X=!0;else{X=C.rect;var M=H.rect;X=X.y!==M.y||X.x!==M.x||X.height!==M.height||X.width!==M.width}X&&(n.flags|=4),H.abs?H=!C.abs:(C=C.rect,H=H.rect,H=C.height!==H.height||C.width!==H.width),H&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&Rm(S,Ke===0?t:t+"_"+Ke,r),m&&(n.flags&4)!==0||(Dt===null&&(Dt=[]),Dt.push(S,Ke===0?l:l+"_"+Ke,e.memoizedProps)),Ke++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c?n.flags|=e.flags&32:sf(n,e.child,t,l,r,i,c)&&(m=!0));e=e.sibling}return m}function Ud(n,e){for(n=n.child;n!==null;){if(n.tag===30){var t=n.memoizedProps,l=n.stateNode,r=Xt(t,l),i=Vt(t.default,t.update),c;c=n.memoizedState,n.memoizedState=null,l=n;var m=n.child;Ke=0,r=sf(l,m,r,r,i,c,!1),(n.flags&4)!==0&&r&&Dr(n,t.onUpdate)}else(n.subtreeFlags&33554432)!==0&&Ud(n);n=n.sibling}}var Ae=!1,kn=!1,Ht=!1,hf=!1,wd=typeof WeakSet=="function"?WeakSet:Set,Ne=null,Ut=!1,Ni=!1,Ju=!1,df=!1;function i1(n,e,t){if(n=n.containerInfo,Bf=Gr,n=Ys(n),Wa(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else n:{l=(l=n.ownerDocument)&&l.defaultView||window;var r=l.getSelection&&l.getSelection();if(r&&r.rangeCount!==0){l=r.anchorNode;var i=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{l.nodeType,c.nodeType}catch{l=null;break n}var m=0,S=-1,C=-1,H=0,X=0,M=n,z=null;e:for(;;){for(var k;M!==l||i!==0&&M.nodeType!==3||(S=m+i),M!==c||r!==0&&M.nodeType!==3||(C=m+r),M.nodeType===3&&(m+=M.nodeValue.length),(k=M.firstChild)!==null;)z=M,M=k;for(;;){if(M===n)break e;if(z===l&&++H===i&&(S=m),z===c&&++X===r&&(C=m),(k=M.nextSibling)!==null)break;M=z,z=M.parentNode}M=k}l=S===-1||C===-1?null:{start:S,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(Yf={focusedElem:n,selectionRange:l},Gr=!1,t=(t&335544064)===t,Ne=e,e=t?9270:1024;Ne!==null;){if(n=Ne,t&&(l=n.deletions,l!==null))for(i=0;i<l.length;i++)t&&ff(l[i]);if(n.alternate===null&&(n.flags&2)!==0)t&&Cd(n),$u(t);else{if(n.tag===22){if(l=n.alternate,n.memoizedState!==null){l!==null&&l.memoizedState===null&&t&&ff(l),$u(t);continue}else if(l!==null&&l.memoizedState!==null){t&&Cd(n),$u(t);continue}}l=n.child,(n.subtreeFlags&e)!==0&&l!==null?(l.return=n,Ne=l):(t&&zd(n),$u(t))}}nt=null}function $u(n){for(;Ne!==null;){var e=Ne,t=n,l=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((r&1024)!==0&&l!==null){t=void 0,r=l.memoizedProps,l=l.memoizedState;var i=e.stateNode;try{var c=Jl(e.type,r);t=i.getSnapshotBeforeUpdate(c,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(m){Pn(e,e.return,m)}}break;case 3:if((r&1024)!==0){if(l=e.stateNode.containerInfo,t=l.nodeType,t===9)Zf(l);else if(t===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Zf(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&l!==null&&(t=Xt(l.memoizedProps,l.stateNode),r=e.memoizedProps,r=Vt(r.default,r.update),r!=="none"&&br(l,t,r,l.memoizedState=[],!0));break;default:if((r&1024)!==0)throw Error(f(163))}if(l=e.sibling,l!==null){l.return=e.return,Ne=l;break}Ne=e.return}}function jd(n,e,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:wt(n,t),l&4&&bi(5,t);break;case 1:if(wt(n,t),l&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(c){Pn(t,t.return,c)}else{var r=Jl(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(r,e,n.__reactInternalSnapshotBeforeUpdate)}catch(c){Pn(t,t.return,c)}}l&64&&Ad(t),l&512&&Rt(t,t.return);break;case 3:if(wt(n,t),l&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{dh(n,e)}catch(c){Pn(t,t.return,c)}}break;case 27:e===null&&l&4&&_d(t);case 26:case 5:wt(n,t),e===null&&l&4&&tf(t),l&512&&Rt(t,t.return);break;case 12:wt(n,t);break;case 31:wt(n,t),l&4&&Ld(n,t);break;case 13:wt(n,t),l&4&&Gd(n,t),l&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=v1.bind(null,t),W1(n,t))));break;case 22:if(l=t.memoizedState!==null||Ae,!l){var i=e!==null&&e.memoizedState!==null||kn;e=Ae,r=kn,Ae=l,(kn=i)&&!r?(l=2,(t.subtreeFlags&8772)!==0&&(l|=1),Tt(n,t,l)):wt(n,t),Ae=e,kn=r}break;case 30:wt(n,t),l&512&&Rt(t,t.return);break;case 7:l&512&&Rt(t,t.return);default:wt(n,t)}}function mf(n,e){for(n=n.child;n!==null;)qd(n,e),n=n.sibling}function qd(n,e){switch(n.tag){case 5:case 26:try{var t=n.stateNode;if(e){var l=t.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var r=n.stateNode,i=n.memoizedProps.style,c=i!=null&&i.hasOwnProperty("display")?i.display:null;r.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(S){Pn(n,n.return,S)}yf(n,e);break;case 6:try{n.stateNode.nodeValue=e?"":n.memoizedProps,In=!0}catch(S){Pn(n,n.return,S)}break;case 18:try{var m=n.stateNode;e?Cm(m,!0):Cm(n.stateNode,!1)}catch(S){Pn(n,n.return,S)}break;case 22:case 23:n.memoizedState===null&&mf(n,e);break;default:mf(n,e)}}function yf(n,e){if(n.subtreeFlags&67108864)for(n=n.child;n!==null;){n:{var t=n,l=e;switch(t.tag){case 4:qd(t,l);break n;case 22:t.memoizedState===null&&yf(t,l);break n;default:yf(t,l)}}n=n.sibling}}function Bd(n){var e=n.alternate;e!==null&&(n.alternate=null,Bd(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&nu(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ae=null,Ze=!1;function Et(n,e,t){for(t=t.child;t!==null;)Yd(n,e,t),t=t.sibling}function Yd(n,e,t){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(vt,t)}catch{}switch(t.tag){case 26:kn||Re(t,e),Et(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!kn&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:kn||Re(t,e),Ai(t);var l=ae,r=Ze;bl(t.type)&&(ae=t.stateNode,Ze=!1),Et(n,e,t),Xm(t.stateNode,t.type,t.memoizedProps),ae=l,Ze=r;break;case 5:kn||Re(t,e),Ai(t);case 6:if(t.tag===6&&Ai(t),l=ae,r=Ze,ae=null,Et(n,e,t),ae=l,Ze=r,ae!==null)if(Ze)try{(ae.nodeType===9?ae.body:ae.nodeName==="HTML"?ae.ownerDocument.body:ae).removeChild(t.stateNode),In=!0}catch(i){Pn(t,e,i)}else try{ae.removeChild(t.stateNode),In=!0}catch(i){Pn(t,e,i)}break;case 18:ae!==null&&(Ze?(n=ae,_m(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Qr(n)):_m(ae,t.stateNode));break;case 4:l=ae,r=Ze,ae=t.stateNode.containerInfo,Ze=!0,Et(n,e,t),ae=l,Ze=r;break;case 0:case 11:case 14:case 15:gl(2,t,e),kn||gl(4,t,e),Et(n,e,t);break;case 1:kn||(Re(t,e),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Nd(t,e,l)),Et(n,e,t);break;case 21:Et(n,e,t);break;case 22:kn=(l=kn)||t.memoizedState!==null,Et(n,e,t),kn=l;break;case 30:Re(t,e),Et(n,e,t);break;case 7:kn||Re(t,e),Et(n,e,t);break;default:Et(n,e,t)}}function Ld(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Qr(n)}catch(t){Pn(e,e.return,t)}}}function Gd(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Qr(n)}catch(t){Pn(e,e.return,t)}}function u1(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new wd),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new wd),e;default:throw Error(f(435,n.tag))}}function ku(n,e){var t=u1(n);e.forEach(function(l){if(!t.has(l)){t.add(l);var r=p1.bind(null,n,l);l.then(r,r)}})}function Ye(n,e,t){var l=e.deletions;if(l!==null)for(var r=0;r<l.length;r++){var i=l[r],c=n,m=e,S=m;n:for(;S!==null;){switch(S.tag){case 27:if(bl(S.type)){ae=S.stateNode,Ze=!1;break n}break;case 5:ae=S.stateNode,Ze=!1;break n;case 3:case 4:ae=S.stateNode.containerInfo,Ze=!0;break n}S=S.return}if(ae===null)throw Error(f(160));Yd(c,m,i),ae=null,Ze=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Qd(e,n,t),e=e.sibling}var St=null;function Qd(n,e,t){var l=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(r&4&&(l=n.updateQueue,l=l!==null?l.events:null,l!==null))for(var i=0;i<l.length;i++){var c=l[i];c.ref.impl=c.nextImpl}Ye(e,n,t),Le(n),r&4&&(gl(3,n,n.return),bi(3,n),gl(5,n,n.return));break;case 1:Ye(e,n,t),Le(n),r&512&&(kn||l===null||Re(l,l.return)),r&64&&Ae&&(n=n.updateQueue,n!==null&&(e=n.callbacks,e!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:if(i=St,Ye(e,n,t),Le(n),r&512&&(kn||l===null||Re(l,l.return)),r&4)if(r=l!==null?l.memoizedState:null,t=n.memoizedState,l===null)if(t===null)if(n.stateNode===null)if(Ae)n.stateNode=Nm(n.type,n.memoizedProps,e.containerInfo,n);else{n:{e=n.type,t=n.memoizedProps,r=i.ownerDocument||i;e:switch(e){case"title":l=r.getElementsByTagName("title")[0],(!l||l[Fr]||l[Oe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=r.createElement(e),r.head.insertBefore(l,r.querySelector("head > title"))),De(l,e,t),l[Oe]=n,xe(l),e=l;break n;case"link":if(i=$m("link","href",r).get(e+(t.href||""))){for(c=0;c<i.length;c++)if(l=i[c],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(c,1);break e}}l=r.createElement(e),De(l,e,t),r.head.appendChild(l);break;case"meta":if(i=$m("meta","content",r).get(e+(t.content||""))){for(c=0;c<i.length;c++)if(l=i[c],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(c,1);break e}}l=r.createElement(e),De(l,e,t),r.head.appendChild(l);break;default:throw Error(f(468,e))}l[Oe]=n,xe(l),e=l}n.stateNode=e}else Ae||Pf(i,n.type,n.stateNode);else n.stateNode=Jm(i,t,n.memoizedProps);else r!==t?(r===null?(e=l.stateNode,e===null||kn||e.parentNode.removeChild(e)):r.count--,t===null?Ae||Pf(i,n.type,n.stateNode):Jm(i,t,n.memoizedProps)):t===null&&n.stateNode!==null&&lf(n,n.memoizedProps,l.memoizedProps);break;case 27:Ye(e,n,t),Le(n),r&512&&(kn||l===null||Re(l,l.return)),l!==null&&r&4&&lf(n,n.memoizedProps,l.memoizedProps);break;case 5:if(i=Ht,Ht=!1,Ye(e,n,t),Ht=i,Le(n),r&512&&(kn||l===null||Re(l,l.return)),n.flags&32){e=n.stateNode;try{ir(e,""),In=!0}catch(H){Pn(n,n.return,H)}}r&4&&n.stateNode!=null&&(e=n.memoizedProps,lf(n,e,l!==null?l.memoizedProps:e)),r&1024&&(hf=!0);break;case 6:if(Ye(e,n,t),Le(n),r&4){if(n.stateNode===null)throw Error(f(162));e=n.memoizedProps,t=n.stateNode;try{t.nodeValue=e,In=!0}catch(H){Pn(n,n.return,H)}}break;case 3:if(In=!1,sa=null,i=St,St=Ui(e.containerInfo),Ye(e,n,t),St=i,Le(n),r&4&&l!==null&&l.memoizedState.isDehydrated)try{Qr(e.containerInfo)}catch(H){Pn(n,n.return,H)}hf&&(hf=!1,Xd(n)),In=!1;break;case 4:r=Ht,Ht=Ae,l=fs(),i=St,St=Ui(n.stateNode.containerInfo),Ye(e,n,t),Le(n),St=i,In&&Ni&&(Ju=!0),In=l,Ht=r;break;case 12:Ye(e,n,t),Le(n);break;case 31:Ye(e,n,t),Le(n),r&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,ku(n,e)));break;case 13:Ye(e,n,t),Le(n),n.child.flags&8192&&n.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Pu=K()),r&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,ku(n,e)));break;case 22:i=n.memoizedState!==null,c=l!==null&&l.memoizedState!==null;var m=Ae,S=kn,C=Ht;Ae=m||i,Ht=C||i,kn=S||c,Ye(e,n,t),kn=S,Ht=C,Ae=m,Le(n),r&8192&&(e=n.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,!i||l===null||c||Ae||kn||(e=c||kn,t=Ae,l=kn,Ae=i||Ae,kn=e,vl(n,2),Ae=t,kn=l),!i&&Ht||mf(n,i)),r&4&&(e=n.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,ku(n,t))));break;case 19:Ye(e,n,t),Le(n),r&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,ku(n,e)));break;case 30:r&512&&(kn||l===null||Re(l,l.return)),r=fs(),i=Ni,c=(t&335544064)===t,m=n.memoizedProps,Ni=c&&Vt(m.default,m.update)!=="none",Ye(e,n,t),Le(n),c&&l!==null&&In&&(n.flags|=4),Ni=i,In=r;break;case 21:break;case 7:r&512&&(kn||l===null||Re(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=n);default:Ye(e,n,t),Le(n)}}function Le(n){var e=n.flags;if(e&2){try{for(var t,l=n.return;l!==null;){if(Md(l)){t=l;break}l=l.return}l=null;for(var r=n.return;r!==null;){if(ef(r)){var i=r.stateNode;l===null?l=[i]:l.push(i)}if(nf(r))break;r=r.return}var c=l;if(t==null)throw Error(f(160));switch(t.tag){case 27:var m=t.stateNode,S=rf(n);Vu(n,S,m,c);break;case 5:var C=t.stateNode;t.flags&32&&(ir(C,""),t.flags&=-33);var H=rf(n);Vu(n,H,C,c);break;case 3:case 4:var X=t.stateNode.containerInfo,M=rf(n);uf(n,M,X,c);break;default:throw Error(f(161))}}catch(z){Pn(n,n.return,z)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Xd(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Xd(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Gr=!0,e.reset(),Gr=!1),n=n.sibling}}function Ar(n,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Vd(e,n),e=e.sibling;else Ud(e)}function Vd(n,e){var t=n.alternate;if(t===null)af(n,!1);else switch(n.tag){case 3:if(df=Ut=!1,Rd(),Ar(e,n),!Ut&&!Ju){if(n=Dt,n!==null)for(var l=0;l<n.length;l+=3){t=n[l];var r=n[l+1];Dm(t,n[l+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+r+")"})}n=e.containerInfo,n=n.nodeType===9?n.documentElement:n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===""&&(n.style.viewTransitionName="none",n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),n.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),df=!0}Dt=null;break;case 5:Ar(e,n);break;case 4:l=Ut,Ut=!1,Ar(e,n),Ut&&(Ju=!0),Ut=l;break;case 22:n.memoizedState===null&&(t.memoizedState!==null?af(n,!1):Ar(e,n));break;case 30:l=Ut,r=Rd(),Ut=!1,Ar(e,n),Ut&&(n.flags|=4);var i=n.memoizedProps,c=n.stateNode;e=Xt(i,c),c=Xt(t.memoizedProps,c);var m=Vt(i.default,i.update);m==="none"?e=!1:(i=t.memoizedState,t.memoizedState=null,t=n.child,Ke=0,e=sf(n,t,e,c,m,i,!0),Ke!==(i===null?0:i.length)&&(n.flags|=32)),(n.flags&4)!==0&&e?(Dr(n,n.memoizedProps.onUpdate),Dt=r):r!==null&&(r.push.apply(r,Dt),Dt=r),Ut=(n.flags&32)!==0?!0:l;break;default:Ar(e,n)}}function wt(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)jd(n,e.alternate,e),e=e.sibling}function vl(n,e){for(n=n.child;n!==null;){var t=n,l=e;switch(t.tag){case 0:case 11:case 14:case 15:gl(4,t,t.return),vl(t,l);break;case 1:Re(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&Nd(t,t.return,r),vl(t,l);break;case 27:(l&2)!==0&&Xm(t.stateNode,t.type,t.memoizedProps);case 5:Re(t,t.return),t.tag!==5&&t.tag!==27||Ai(t),vl(t,l);break;case 6:Ai(t);break;case 26:Re(t,t.return),r=t.stateNode,t.memoizedState!==null||r===null||kn||r.parentNode.removeChild(r),vl(t,l);break;case 22:t.memoizedState===null&&vl(t,l);break;case 30:Re(t,t.return),vl(t,l);break;case 7:Re(t,t.return);default:vl(t,l)}n=n.sibling}}function Tt(n,e,t){for(t=(e.subtreeFlags&8772)!==0?t:t&-2,e=e.child;e!==null;){var l=e.alternate,r=n,i=e,c=i.flags,m=(t&1)!==0;switch(i.tag){case 0:case 11:case 15:Tt(r,i,t),bi(4,i);break;case 1:if(Tt(r,i,t),l=i,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(H){Pn(l,l.return,H)}if(l=i,r=l.updateQueue,r!==null){var S=l.stateNode;try{var C=r.shared.hiddenCallbacks;if(C!==null)for(r.shared.hiddenCallbacks=null,r=0;r<C.length;r++)hh(C[r],S)}catch(H){Pn(l,l.return,H)}}m&&c&64&&Ad(i),Rt(i,i.return);break;case 27:(t&2)!==0&&_d(i);case 5:i.tag!==5&&i.tag!==27||Od(i),Tt(r,i,t),m&&l===null&&c&4&&tf(i),Rt(i,i.return);break;case 6:Od(i);break;case 26:S=i.stateNode,i.memoizedState!==null||S===null||Ae||Pf(Ui(S.ownerDocument),i.type,S),Tt(r,i,t),m&&l===null&&c&4&&tf(i),Rt(i,i.return);break;case 12:Tt(r,i,t);break;case 31:Tt(r,i,t),m&&c&4&&Ld(r,i);break;case 13:Tt(r,i,t),m&&c&4&&Gd(r,i);break;case 22:i.memoizedState===null&&Tt(r,i,t),Rt(i,i.return);break;case 30:Tt(r,i,t),Rt(i,i.return);break;case 7:Rt(i,i.return);default:Tt(r,i,t)}e=e.sibling}}function gf(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&oi(t))}function vf(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&oi(n))}function ht(n,e,t,l){var r=(t&335544064)===t;if(e.subtreeFlags&(r?10262:10256))for(e=e.child;e!==null;)Kd(n,e,t,l),e=e.sibling;else r&&Hd(e)}function Kd(n,e,t,l){var r=(t&335544064)===t;r&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Iu(e);var i=e.flags;switch(e.tag){case 0:case 11:case 15:ht(n,e,t,l),i&2048&&bi(9,e);break;case 1:ht(n,e,t,l);break;case 3:ht(n,e,t,l),r&&df&&(n=n.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),i&2048&&(i=null,e.alternate!==null&&(i=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==i&&(e.refCount++,i!=null&&oi(i)));break;case 12:if(i&2048){ht(n,e,t,l),i=e.stateNode;try{var c=e.memoizedProps,m=c.id,S=c.onPostCommit;typeof S=="function"&&S(m,e.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){Pn(e,e.return,C)}}else ht(n,e,t,l);break;case 31:ht(n,e,t,l);break;case 13:ht(n,e,t,l);break;case 23:break;case 22:c=e.stateNode,m=e.alternate,e.memoizedState!==null?(r&&m!==null&&m.memoizedState===null&&Iu(m),c._visibility&2?ht(n,e,t,l):Oi(n,e)):(r&&m!==null&&m.memoizedState!==null&&Iu(e),c._visibility&2?ht(n,e,t,l):(c._visibility|=2,Nr(n,e,t,l,(e.subtreeFlags&10256)!==0||!1))),i&2048&&gf(m,e);break;case 24:ht(n,e,t,l),i&2048&&vf(e.alternate,e);break;case 30:r&&(i=e.alternate,i!==null&&(zt(i.child,!0),zt(e.child,!0))),ht(n,e,t,l);break;default:ht(n,e,t,l)}}function Nr(n,e,t,l,r){for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=n,c=e,m=t,S=l,C=c.flags;switch(c.tag){case 0:case 11:case 15:Nr(i,c,m,S,r),bi(8,c);break;case 23:break;case 22:var H=c.stateNode;c.memoizedState!==null?H._visibility&2?Nr(i,c,m,S,r):Oi(i,c):(H._visibility|=2,Nr(i,c,m,S,r)),r&&C&2048&&gf(c.alternate,c);break;case 24:Nr(i,c,m,S,r),r&&C&2048&&vf(c.alternate,c);break;default:Nr(i,c,m,S,r)}e=e.sibling}}function Oi(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,l=e,r=l.flags;switch(l.tag){case 22:Oi(t,l),r&2048&&gf(l.alternate,l);break;case 24:Oi(t,l),r&2048&&vf(l.alternate,l);break;default:Oi(t,l)}e=e.sibling}}var $l=8192;function kl(n,e,t){if(n.subtreeFlags&$l)for(n=n.child;n!==null;)Zd(n,e,t),n=n.sibling}function Zd(n,e,t){switch(n.tag){case 26:kl(n,e,t),n.flags&$l&&(n.memoizedState!==null?hv(t,St,n.memoizedState,n.memoizedProps):(n=n.stateNode,(e&335544128)===e&&Pm(t,n)));break;case 5:kl(n,e,t),n.flags&$l&&(n=n.stateNode,(e&335544128)===e&&Pm(t,n));break;case 3:case 4:var l=St;St=Ui(n.stateNode.containerInfo),kl(n,e,t),St=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=$l,$l=16777216,kl(n,e,t),$l=l):kl(n,e,t));break;case 30:if((n.flags&$l)!==0&&(l=n.memoizedProps.name,l!=null&&l!=="auto")){var r=n.stateNode;r.paired=null,nt===null&&(nt=new Map),nt.set(l,r)}kl(n,e,t);break;default:kl(n,e,t)}}function Id(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function Mi(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];Ne=l,$d(l,n)}Id(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jd(n),n=n.sibling}function Jd(n){switch(n.tag){case 0:case 11:case 15:Mi(n),n.flags&2048&&gl(9,n,n.return);break;case 3:Mi(n);break;case 12:Mi(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Fu(n)):Mi(n);break;default:Mi(n)}}function Fu(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];Ne=l,$d(l,n)}Id(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:gl(8,e,e.return),Fu(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Fu(e));break;default:Fu(e)}n=n.sibling}}function $d(n,e){for(;Ne!==null;){var t=Ne;switch(t.tag){case 0:case 11:case 15:gl(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:oi(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Ne=l;else n:for(t=n;Ne!==null;){l=Ne;var r=l.sibling,i=l.return;if(Bd(l),l===t){Ne=null;break n}if(r!==null){r.return=i,Ne=r;break n}Ne=i}}}var a1={getCacheForType:function(n){var e=Me(me),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return Me(me).controller.signal}},c1=typeof WeakMap=="function"?WeakMap:Map,Jn=0,le=null,Bn=null,Ln=0,Wn=0,et=null,pl=!1,Or=!1,pf=!1,Pt=0,he=0,El=0,Fl=0,Wu=0,tt=0,Mr=0,_i=null,Ie=null,Ef=!1,Pu=0,kd=0,na=1/0,ea=null,Sl=null,ce=0,xt=null,Wl=null,jt=0,Sf=0,Tf=null,Fd=null,_r=null,Cr=null,Rr=null,Ci=0,ta=null;function lt(){return(Jn&2)!==0&&Ln!==0?Ln&-Ln:F.T!==null?Df():ns()}function Wd(){if(tt===0)if((Ln&536870912)===0||jn){var n=ki;ki<<=1,(ki&3932160)===0&&(ki=262144),tt=n}else tt=536870912;return n=_e.current,n!==null&&(n.flags|=32),tt}function Dr(n,e){if(e!=null){var t=n.stateNode,l=t.ref;l===null&&(l=t.ref=zm(Xt(n.memoizedProps,t))),Cr===null&&(Cr=[]),Cr.push(e.bind(null,l))}}function Je(n,e,t){(n===le&&(Wn===2||Wn===9)||n.cancelPendingCommit!==null)&&(zr(n,0),Tl(n,Ln,tt,!1)),kr(n,t),((Jn&2)===0||n!==le)&&(n===le&&((Jn&2)===0&&(Fl|=t),he===4&&Tl(n,Ln,tt,!1)),qt(n))}function Pd(n,e,t){if((Jn&6)!==0)throw Error(f(327));var l=!t&&(e&127)===0&&(e&n.expiredLanes)===0||$r(n,e),r=l?s1(n,e):bf(n,e,!0),i=l;do{if(r===0){Or&&!l&&Tl(n,e,0,!1);break}else{if(t=n.current.alternate,i&&!f1(t)){r=bf(n,e,!1),i=!1;continue}if(r===2){if(i=e,n.errorRecoveryDisabledLanes&i)var c=0;else c=n.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;n:{var m=n;r=_i;var S=m.current.memoizedState.isDehydrated;if(S&&(zr(m,c).flags|=256),c=bf(m,c,!1),c!==2&&c!==6){if(pf&&!S){m.errorRecoveryDisabledLanes|=i,Fl|=i,r=4;break n}i=Ie,Ie=r,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}r=c}if(i=!1,r!==2)continue}}if(r===1){zr(n,0),Tl(n,e,0,!0);break}n:{switch(l=n,i=r,i){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Tl(l,e,tt,!pl);break n;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(r=Pu+300-K(),10<r)){if(Tl(l,e,tt,!pl),Wi(l,0,!0)!==0)break n;jt=e,l.timeoutHandle=Qf(nm.bind(null,l,t,Ie,ea,Ef,e,tt,Fl,Mr,pl,i,"Throttled",-0,0),r);break n}nm(l,t,Ie,ea,Ef,e,tt,Fl,Mr,pl,i,null,-0,0)}}break}while(!0);qt(n)}function nm(n,e,t,l,r,i,c,m,S,C,H,X,M,z){n.timeoutHandle=-1;var k=e.subtreeFlags,fn=(i&335544064)===i;if(X=null,(fn||k&8192||(k&16785408)===16785408)&&(X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Mt},nt=null,Zd(e,i,X),fn&&(k=X,fn=n.containerInfo,fn=(fn.nodeType===9?fn:fn.ownerDocument).__reactViewTransition,fn!=null&&(k.count++,k.waitingForViewTransition=!0,k=qi.bind(k),fn.finished.then(k,k))),k=(i&62914560)===i?Pu-K():(i&4194048)===i?kd-K():0,k=dv(X,k),k!==null)){jt=i,n.cancelPendingCommit=k(cm.bind(null,n,e,i,t,l,r,c,m,S,C,H,X,null,M,z)),Tl(n,i,c,!C);return}cm(n,e,i,t,l,r,c,m,S,C,H,X)}function f1(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var r=t[l],i=r.getSnapshot;r=r.value;try{if(!We(i(),r))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tl(n,e,t,l){e=$o(n,e),e&=~Wu,e&=~Fl,n.suspendedLanes|=e,n.pingedLanes&=~e,l&&(n.warmLanes|=e),l=n.expirationTimes;for(var r=e;0<r;){var i=31-ke(r),c=1<<i;l[i]=-1,r&=~c}t!==0&&Fo(n,t,e)}function la(){return(Jn&6)===0?(Ri(0),!1):!0}function xf(){if(Bn!==null){if(Wn===0)var n=Bn.return;else n=Bn,It=Yl=null,Cc(n),pr=null,di=0,n=Bn;for(;n!==null;)bd(n.alternate,n),n=n.return;Bn=null}}function zr(n,e){var t=n.timeoutHandle;return t!==-1&&(n.timeoutHandle=-1,H1(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),jt=0,xf(),le=n,Bn=t=Kt(n.current,null),Ln=e,Wn=0,et=null,pl=!1,Or=$r(n,e),pf=!1,Mr=tt=Wu=Fl=El=he=0,Ie=_i=null,Ef=!1,Pt=$o(n,e),su(),t}function em(n,e){zn=null,F.H=ju,e===vr||e===xu?(e=ch(),Wn=3):e===gc?(e=ch(),Wn=4):Wn=e===Vc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,et=e,Bn===null&&(he=1,qu(n,ct(e,n.current)))}function tm(){var n=_e.current;return n===null?!0:(Ln&4194048)===Ln?we===null:(Ln&62914560)===Ln||(Ln&536870912)!==0?n===we:!1}function lm(){var n=F.H;return F.H=ju,n===null?ju:n}function rm(){var n=F.A;return F.A=a1,n}function ra(){he=4,pl||(Ln&4194048)!==Ln&&_e.current!==null||(Or=!0),(El&134217727)===0&&(Fl&134217727)===0||le===null||Tl(le,Ln,tt,!1)}function bf(n,e,t){var l=Jn;Jn|=2;var r=lm(),i=rm();(le!==n||Ln!==e)&&(ea=null,zr(n,e)),e=!1;var c=he;n:do try{if(Wn!==0&&Bn!==null){var m=Bn,S=et;switch(Wn){case 8:xf(),c=6;break n;case 3:case 2:case 9:case 6:_e.current===null&&(e=!0);var C=Wn;if(Wn=0,et=null,Hr(n,m,S,C),t&&Or){c=0;break n}break;default:C=Wn,Wn=0,et=null,Hr(n,m,S,C)}}o1(),c=he;break}catch(H){em(n,H)}while(!0);return e&&n.shellSuspendCounter++,It=Yl=null,Jn=l,F.H=r,F.A=i,Bn===null&&(le=null,Ln=0,su()),c}function o1(){for(;Bn!==null;)im(Bn)}function s1(n,e){var t=Jn;Jn|=2;var l=lm(),r=rm();le!==n||Ln!==e?(ea=null,na=K()+500,zr(n,e)):Or=$r(n,e);n:do try{if(Wn!==0&&Bn!==null){e=Bn;var i=et;e:switch(Wn){case 1:Wn=0,et=null,Hr(n,e,i,1);break;case 2:case 9:if(uh(i)){Wn=0,et=null,um(e);break}e=function(){Wn!==2&&Wn!==9||le!==n||(Wn=7),qt(n)},i.then(e,e);break n;case 3:Wn=7;break n;case 4:Wn=5;break n;case 7:uh(i)?(Wn=0,et=null,um(e)):(Wn=0,et=null,Hr(n,e,i,7));break;case 5:var c=null;switch(Bn.tag){case 26:c=Bn.memoizedState;case 5:case 27:var m=Bn;if(c?Fm(c):m.stateNode.complete){Wn=0,et=null;var S=m.sibling;if(S!==null)Bn=S;else{var C=m.return;C!==null?(Bn=C,ia(C)):Bn=null}break e}}Wn=0,et=null,Hr(n,e,i,5);break;case 6:Wn=0,et=null,Hr(n,e,i,6);break;case 8:xf(),he=6;break n;default:throw Error(f(462))}}h1();break}catch(H){em(n,H)}while(!0);return It=Yl=null,F.H=l,F.A=r,Jn=t,Bn!==null?0:(le=null,Ln=0,su(),he)}function h1(){for(;Bn!==null&&!Z();)im(Bn)}function im(n){var e=Td(n.alternate,n,Pt);n.memoizedProps=n.pendingProps,e===null?ia(n):Bn=e}function um(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=md(t,e,e.pendingProps,e.type,void 0,Ln);break;case 11:e=md(t,e,e.pendingProps,e.type.render,e.ref,Ln);break;case 5:Cc(e);var l=e;l===be&&(jn?(vu(l),l.tag===5&&l.stateNode!=null&&(re=l.stateNode)):(vu(l),jn=!0));default:bd(t,e),e=Bn=$s(e,Pt),e=Td(t,e,Pt)}n.memoizedProps=n.pendingProps,e===null?ia(n):Bn=e}function Hr(n,e,t,l){It=Yl=null,Cc(e),pr=null,di=0;var r=e.return;try{if(Pg(n,r,e,t,Ln)){he=1,qu(n,ct(t,n.current)),Bn=null;return}}catch(i){if(r!==null)throw Bn=r,i;he=1,qu(n,ct(t,n.current)),Bn=null;return}e.flags&32768?(jn||l===1?n=!0:Or||(Ln&536870912)!==0?n=!1:(pl=n=!0,(l===2||l===9||l===3||l===6)&&(l=_e.current,l!==null&&l.tag===13&&(l.flags|=16384))),am(e,n)):ia(e)}function ia(n){var e=n;do{if((e.flags&32768)!==0){am(e,pl);return}n=e.return;var t=l1(e.alternate,e,Pt);if(t!==null){Bn=t;return}if(e=e.sibling,e!==null){Bn=e;return}Bn=e=n}while(e!==null);he===0&&(he=5)}function am(n,e){do{var t=r1(n.alternate,n);if(t!==null){t.flags&=32767,Bn=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){Bn=n;return}Bn=n=t}while(n!==null);he=6,Bn=null}function cm(n,e,t,l,r,i,c,m,S,C,H,X){n.cancelPendingCommit=null;do ua();while(ce!==0);if((Jn&6)!==0)throw Error(f(327));if(e!==null){if(e===n.current)throw Error(f(177));n===le&&(Bn=le=null,Ln=0),Wl=e,xt=n,jt=t,Tf=r,Fd=l,d1(n,e,t,c,m,S,X)}}function d1(n,e,t,l,r,i,c){var m=e.lanes|e.childLanes;if(Sf=m,m|=lc,Y0(n,t,m,l,r,i),Cr=null,(t&335544064)===t?(Rr=Gg(n),l=10262):(Rr=null,l=10256),(e.subtreeFlags&l)!==0||(e.flags&l)!==0?(n.callbackNode=null,n.callbackPriority=0,E1(gn,function(){return Mf(),null})):(n.callbackNode=null,n.callbackPriority=0),Ku=!1,l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,r=hn.p,hn.p=2,i=Jn,Jn|=4;try{i1(n,e,t)}finally{Jn=i,hn.p=r,F.T=l}}ce=1,Ku?_r=Y1(c,n.containerInfo,Rr,Af,Nf,y1,Of,Mf,m1):(Af(),Nf(),Of())}function m1(n){if(ce!==0){var e=xt.onRecoverableError;e(n,{componentStack:null})}}function y1(){ce===3&&(ce=0,Vd(Wl,xt),ce=4)}function Af(){if(ce===1){ce=0;var n=xt,e=Wl,t=jt,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=F.T,F.T=null;var r=hn.p;hn.p=2;var i=Jn;Jn|=4;try{Ni=Ju=!1,Qd(e,n,t),t=Yf;var c=Ys(n.containerInfo),m=t.focusedElem,S=t.selectionRange;if(c!==m&&m&&m.ownerDocument&&Bs(m.ownerDocument.documentElement,m)){if(S!==null&&Wa(m)){var C=S.start,H=S.end;if(H===void 0&&(H=C),"selectionStart"in m)m.selectionStart=C,m.selectionEnd=Math.min(H,m.value.length);else{var X=m.ownerDocument||document,M=X&&X.defaultView||window;if(M.getSelection){var z=M.getSelection(),k=m.textContent.length,fn=Math.min(S.start,k),Hn=S.end===void 0?fn:Math.min(S.end,k);!z.extend&&fn>Hn&&(c=Hn,Hn=fn,fn=c);var _=qs(m,fn),A=qs(m,Hn);if(_&&A&&(z.rangeCount!==1||z.anchorNode!==_.node||z.anchorOffset!==_.offset||z.focusNode!==A.node||z.focusOffset!==A.offset)){var R=X.createRange();R.setStart(_.node,_.offset),z.removeAllRanges(),fn>Hn?(z.addRange(R),z.extend(A.node,A.offset)):(R.setEnd(A.node,A.offset),z.addRange(R))}}}}for(X=[],z=m;z=z.parentNode;)z.nodeType===1&&X.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<X.length;m++){var G=X[m];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Gr=!!Bf,Yf=Bf=null}finally{Jn=i,hn.p=r,F.T=l}}n.current=e,ce=2}}function Nf(){if(ce===2){ce=0;var n=xt,e=Wl,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=F.T,F.T=null;var l=hn.p;hn.p=2;var r=Jn;Jn|=4;try{jd(n,e.alternate,e)}finally{Jn=r,hn.p=l,F.T=t}}ce=3}}function Of(){if(ce===4||ce===3){ce=0;var n=_r;_r=null,I();var e=xt,t=Wl,l=jt,r=Fd,i=(l&335544064)===l?10262:10256;if((t.subtreeFlags&i)!==0||(t.flags&i)!==0?ce=5:(ce=0,Wl=xt=null,fm(e,e.pendingLanes)),i=e.pendingLanes,i===0&&(Sl=null),Ua(l),t=t.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(vt,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=F.T,i=hn.p,hn.p=2,F.T=null;try{for(var c=e.onRecoverableError,m=0;m<r.length;m++){var S=r[m];c(S.value,{componentStack:S.stack})}}finally{F.T=t,hn.p=i}}if(r=Cr,c=Rr,Rr=null,r!==null&&(Cr=null,c===null&&(c=[]),n!==null))for(S=0;S<r.length;S++)t=(0,r[S])(c),t!==void 0&&n.finished.finally(t);(jt&3)!==0&&ua(),qt(e),i=e.pendingLanes,(l&261930)!==0&&(i&42)!==0?e===ta?Ci++:(Ci=0,ta=e):(Ci=0,ta=null),Ri(0)}}function fm(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,oi(e)))}function ua(){return _r!==null&&(_r.skipTransition(),_r=null),Af(),Nf(),Of(),Mf()}function Mf(){if(ce!==5)return!1;var n=xt,e=Sf;Sf=0;var t=Ua(jt),l=F.T,r=hn.p;try{hn.p=32>t?32:t,F.T=null,t=Tf,Tf=null;var i=xt,c=jt;if(ce=0,Wl=xt=null,jt=0,(Jn&6)!==0)throw Error(f(331));var m=Jn;if(Jn|=4,Jd(i.current),Kd(i,i.current,c,t),Jn=m,Ri(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(vt,i)}catch{}return!0}finally{hn.p=r,F.T=l,fm(n,e)}}function om(n,e,t){e=ct(t,e),e=Xc(n.stateNode,e,2),n=hl(n,e,2),n!==null&&(kr(n,2),qt(n))}function Pn(n,e,t){if(n.tag===3)om(n,n,t);else for(;e!==null;){if(e.tag===3){om(e,n,t);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sl===null||!Sl.has(l))){n=ct(t,n),t=ud(2),l=hl(e,t,2),l!==null&&(ad(t,l,e,n),kr(l,2),qt(l));break}}e=e.return}}function _f(n,e,t){var l=n.pingCache;if(l===null){l=n.pingCache=new c1;var r=new Set;l.set(e,r)}else r=l.get(e),r===void 0&&(r=new Set,l.set(e,r));r.has(t)||(pf=!0,r.add(t),n=g1.bind(null,n,e,t),e.then(n,n))}function g1(n,e,t){var l=n.pingCache;l!==null&&l.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,le===n&&(Ln&t)===t&&((he===4||he===3&&(Ln&62914560)===Ln&&300>K()-Pu)&&(Jn&2)===0?zr(n,0):Wu|=t,Mr===Ln&&(Mr=0)),qt(n)}function sm(n,e){e===0&&(e=ko()),n=jl(n,e),n!==null&&(kr(n,e),qt(n))}function v1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),sm(n,t)}function p1(n,e){var t=0;switch(n.tag){case 31:case 13:var l=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(e),sm(n,t)}function E1(n,e){return D(n,e)}var Ur=null,wr=null,Cf=!1,aa=!1,Rf=!1,xl=0;function qt(n){n!==wr&&n.next===null&&(wr===null?Ur=wr=n:wr=wr.next=n),aa=!0,Cf||(Cf=!0,T1())}function Ri(n,e){if(!Rf&&aa){Rf=!0;do for(var t=!1,l=Ur;l!==null;){if(n!==0){var r=l.pendingLanes;if(r===0)var i=0;else{var c=l.suspendedLanes,m=l.pingedLanes;i=(1<<31-ke(42|n)+1)-1,i&=r&~(c&~m),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,ym(l,i))}else i=Ln,i=Wi(l,l===le?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||$r(l,i)||(t=!0,ym(l,i));l=l.next}while(t);Rf=!1}}function S1(){hm()}function hm(){aa=Cf=!1;var n=0;xl!==0&&z1()&&(n=xl);for(var e=K(),t=null,l=Ur;l!==null;){var r=l.next,i=dm(l,e);i===0?(l.next=null,t===null?Ur=r:t.next=r,r===null&&(wr=t)):(t=l,(n!==0||(i&3)!==0)&&(aa=!0)),l=r}ce!==0&&ce!==5||Ri(n),xl!==0&&(xl=0)}function dm(n,e){for(var t=n.suspendedLanes,l=n.pingedLanes,r=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var c=31-ke(i),m=1<<c,S=r[c];S===-1?((m&t)===0||(m&l)!==0)&&(r[c]=B0(m,e)):S<=e&&(n.expiredLanes|=m),i&=~m}if(e=le,t=Ln,t=Wi(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,t===0||n===e&&(Wn===2||Wn===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&q(l),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||$r(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(l!==null&&q(l),Ua(t)){case 2:case 8:t=an;break;case 32:t=gn;break;case 268435456:t=On;break;default:t=gn}return l=mm.bind(null,n),t=D(t,l),n.callbackPriority=e,n.callbackNode=t,e}return l!==null&&l!==null&&q(l),n.callbackPriority=2,n.callbackNode=null,2}function mm(n,e){if(ce!==0&&ce!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(ua()&&n.callbackNode!==t)return null;var l=Ln;return l=Wi(n,n===le?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Pd(n,l,e),dm(n,K()),n.callbackNode!=null&&n.callbackNode===t?mm.bind(null,n):null)}function ym(n,e){if(ua())return null;Pd(n,e,!0)}function T1(){U1(function(){(Jn&6)!==0?D(J,S1):hm()})}function Df(){if(xl===0){var n=Ql;n===0&&(n=$i,$i<<=1,($i&261888)===0&&($i=256)),xl=n}return xl}function gm(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:lu(n)}function x1(n,e,t,l,r){if(e==="submit"&&t&&t.stateNode===r){var i=gm((r[Xe]||null).action),c=l.submitter;c&&(e=(e=c[Xe]||null)?gm(e.formAction):c.getAttribute("formAction"),e!==null&&(i=e,c=null));var m=new au("action","action",null,l,r);n.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(xl!==0){var S=new FormData(r,c);Bc(t,{pending:!0,data:S,method:r.method,action:i},null,S)}}else typeof i=="function"&&(m.preventDefault(),S=new FormData(r,c),Bc(t,{pending:!0,data:S,method:r.method,action:i},i,S))},currentTarget:r}]})}}for(var zf=0;zf<tc.length;zf++){var Hf=tc[zf],b1=Hf.toLowerCase(),A1=Hf[0].toUpperCase()+Hf.slice(1);pt(b1,"on"+A1)}pt(Qs,"onAnimationEnd"),pt(Xs,"onAnimationIteration"),pt(Vs,"onAnimationStart"),pt("dblclick","onDoubleClick"),pt("focusin","onFocus"),pt("focusout","onBlur"),pt(Hg,"onTransitionRun"),pt(Ug,"onTransitionStart"),pt(wg,"onTransitionCancel"),pt(Ks,"onTransitionEnd"),lr("onMouseEnter",["mouseout","mouseover"]),lr("onMouseLeave",["mouseout","mouseover"]),lr("onPointerEnter",["pointerout","pointerover"]),lr("onPointerLeave",["pointerout","pointerover"]),Hl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Di));function vm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var l=n[t],r=l.event;l=l.listeners;n:{var i=void 0;if(e)for(var c=l.length-1;0<=c;c--){var m=l[c],S=m.instance,C=m.currentTarget;if(m=m.listener,S!==i&&r.isPropagationStopped())break n;i=m,r.currentTarget=C;try{i(r)}catch(H){ou(H)}r.currentTarget=null,i=S}else for(c=0;c<l.length;c++){if(m=l[c],S=m.instance,C=m.currentTarget,m=m.listener,S!==i&&r.isPropagationStopped())break n;i=m,r.currentTarget=C;try{i(r)}catch(H){ou(H)}r.currentTarget=null,i=S}}}}function Yn(n,e){var t=e[ts];t===void 0&&(t=e[ts]=new Set);var l=n+"__bubble";t.has(l)||(pm(e,n,2,!1),t.add(l))}function Uf(n,e,t){var l=0;e&&(l|=4),pm(t,n,l,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function wf(n){if(!n[ca]){n[ca]=!0,is.forEach(function(t){t!=="selectionchange"&&(N1.has(t)||Uf(t,!1,n),Uf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ca]||(e[ca]=!0,Uf("selectionchange",!1,e))}}function pm(n,e,t,l){switch(ay(e)){case 2:var r=vv;break;case 8:r=pv;break;default:r=eo}t=r.bind(null,e,t,n),r=void 0,!Qa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),l?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function jf(n,e,t,l,r){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)n:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var m=l.stateNode.containerInfo;if(m===r)break;if(c===4)for(c=l.return;c!==null;){var S=c.tag;if((S===3||S===4)&&c.stateNode.containerInfo===r)return;c=c.return}for(;m!==null;){if(c=zl(m),c===null)return;if(S=c.tag,S===5||S===6||S===26||S===27){l=i=c;continue n}m=m.parentNode}}l=l.return}ps(function(){var C=i,H=La(t),X=[];n:{var M=Zs.get(n);if(M!==void 0){var z=au,k=n;switch(n){case"keypress":if(iu(t)===0)break n;case"keydown":case"keyup":z=fg;break;case"focusin":k="focus",z=Za;break;case"focusout":k="blur",z=Za;break;case"beforeblur":case"afterblur":z=Za;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=mg;break;case Qs:case Xs:case Vs:z=ng;break;case Ks:z=gg;break;case"scroll":case"scrollend":z=$0;break;case"wheel":z=pg;break;case"copy":case"cut":case"paste":z=tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=bs;break;case"submit":z=hg;break;case"toggle":case"beforetoggle":z=Sg}var fn=(e&4)!==0,Hn=!fn&&(n==="scroll"||n==="scrollend"),_=fn?M!==null?M+"Capture":null:M;fn=[];for(var A=C,R;A!==null;){var G=A;if(R=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||R===null||_===null||(G=Pr(A,_),G!=null&&fn.push(zi(A,G,R))),Hn)break;A=A.return}0<fn.length&&(M=new z(M,k,null,t,H),X.push({event:M,listeners:fn}))}}if((e&7)===0){n:{if(z=n==="mouseover"||n==="pointerover",M=n==="mouseout"||n==="pointerout",z&&t!==Ya&&(k=t.relatedTarget||t.fromElement)&&(zl(k)||k[nr]))break n;(M||z)&&(k=H.window===H?H:(z=H.ownerDocument)?z.defaultView||z.parentWindow:window,M?(z=t.relatedTarget||t.toElement,M=C,z=z?zl(z):null,z!==null&&(Hn=y(z),fn=z.tag,z!==Hn||fn!==5&&fn!==27&&fn!==6)&&(z=null)):(M=null,z=C),M!==z&&(fn=Ts,G="onMouseLeave",_="onMouseEnter",A="mouse",(n==="pointerout"||n==="pointerover")&&(fn=bs,G="onPointerLeave",_="onPointerEnter",A="pointer"),Hn=M==null?k:Wr(M),R=z==null?k:Wr(z),k=new fn(G,A+"leave",M,t,H),k.target=Hn,k.relatedTarget=R,G=null,zl(H)===C&&(fn=new fn(_,A+"enter",z,t,H),fn.target=R,fn.relatedTarget=Hn,G=fn),Hn=G,fn=M&&z?Zn(M,z,O1):null,M!==null&&Em(X,k,M,fn,!1),z!==null&&Hn!==null&&Em(X,Hn,z,fn,!0)))}n:{if(M=C?Wr(C):window,z=M.nodeName&&M.nodeName.toLowerCase(),z==="select"||z==="input"&&M.type==="file")var ln=Ds;else if(Cs(M))if(zs)ln=Rg;else{ln=_g;var Gn=Mg}else z=M.nodeName,!z||z.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?C&&Ba(C.elementType)&&(ln=Ds):ln=Cg;if(ln&&(ln=ln(n,C))){Rs(X,ln,t,H);break n}Gn&&Gn(n,M,C)}switch(Gn=C?Wr(C):window,n){case"focusin":(Cs(Gn)||Gn.contentEditable==="true")&&(fr=Gn,Pa=C,ai=null);break;case"focusout":ai=Pa=fr=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,Ls(X,t,H);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":Ls(X,t,H)}var yn;if(Ja)n:{switch(n){case"compositionstart":var bn="onCompositionStart";break n;case"compositionend":bn="onCompositionEnd";break n;case"compositionupdate":bn="onCompositionUpdate";break n}bn=void 0}else cr?Ms(n,t)&&(bn="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(bn="onCompositionStart");bn&&(As&&t.locale!=="ko"&&(cr||bn!=="onCompositionStart"?bn==="onCompositionEnd"&&cr&&(yn=Es()):(ll=H,Xa="value"in ll?ll.value:ll.textContent,cr=!0)),Gn=fa(C,bn),0<Gn.length&&(bn=new xs(bn,n,null,t,H),X.push({event:bn,listeners:Gn}),yn?bn.data=yn:(yn=_s(t),yn!==null&&(bn.data=yn)))),(yn=xg?bg(n,t):Ag(n,t))&&(bn=fa(C,"onBeforeInput"),0<bn.length&&(Gn=new xs("onBeforeInput","beforeinput",null,t,H),X.push({event:Gn,listeners:bn}),Gn.data=yn)),x1(X,n,C,t,H)}vm(X,e)})}function zi(n,e,t){return{instance:n,listener:e,currentTarget:t}}function fa(n,e){for(var t=e+"Capture",l=[];n!==null;){var r=n,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=Pr(n,t),r!=null&&l.unshift(zi(n,r,i)),r=Pr(n,e),r!=null&&l.push(zi(n,r,i))),n.tag===3)return l;n=n.return}return[]}function O1(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Em(n,e,t,l,r){for(var i=e._reactName,c=[];t!==null&&t!==l;){var m=t,S=m.alternate,C=m.stateNode;if(m=m.tag,S!==null&&S===l)break;m!==5&&m!==26&&m!==27||C===null||(S=C,r?(C=Pr(t,i),C!=null&&c.unshift(zi(t,C,S))):r||(C=Pr(t,i),C!=null&&c.push(zi(t,C,S)))),t=t.return}c.length!==0&&n.push({event:e,listeners:c})}var M1=/\r\n?/g,_1=/\u0000|\uFFFD/g;function Sm(n){return(typeof n=="string"?n:""+n).replace(M1,`
`).replace(_1,"")}function Tm(n,e){return e=Sm(e),Sm(n)===e}function ne(n,e,t,l,r,i){switch(t){case"children":if(typeof l=="string")e==="body"||e==="textarea"&&l===""||ir(n,l);else if(typeof l=="number"||typeof l=="bigint")e!=="body"&&ir(n,""+l);else return;break;case"className":tu(n,"class",l);break;case"tabIndex":tu(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":tu(n,t,l);break;case"style":gs(n,l,i);return;case"data":if(e!=="object"){tu(n,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=lu(l),n.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(e!=="input"&&ne(n,e,"name",r.name,r,null),ne(n,e,"formEncType",r.formEncType,r,null),ne(n,e,"formMethod",r.formMethod,r,null),ne(n,e,"formTarget",r.formTarget,r,null)):(ne(n,e,"encType",r.encType,r,null),ne(n,e,"method",r.method,r,null),ne(n,e,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=lu(l),n.setAttribute(t,l);break;case"onClick":l!=null&&(n.onclick=Mt);return;case"onScroll":l!=null&&Yn("scroll",n);return;case"onScrollEnd":l!=null&&Yn("scrollend",n);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(f(60));(i!=null?i.__html:void 0)!==t&&(n.innerHTML=t)}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}t=lu(l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":l===!0?n.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(t,l):n.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(t):n.setAttribute(t,l);break;case"popover":Yn("beforetoggle",n),Yn("toggle",n),eu(n,"popover",l);break;case"xlinkActuate":Gt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Gt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Gt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Gt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Gt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Gt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Gt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Gt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Gt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":eu(n,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=I0.get(t)||t,eu(n,t,l);else return}In=!0}function qf(n,e,t,l,r,i){switch(t){case"style":gs(n,l,i);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(f(60));(i!=null?i.__html:void 0)!==t&&(n.innerHTML=t)}}break;case"children":if(typeof l=="string")ir(n,l);else if(typeof l=="number"||typeof l=="bigint")ir(n,""+l);else return;break;case"onScroll":l!=null&&Yn("scroll",n);return;case"onScrollEnd":l!=null&&Yn("scrollend",n);return;case"onClick":l!=null&&(n.onclick=Mt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!us.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),i=t.slice(2,r?t.length-7:void 0),e=n[Xe]||null,e=e!=null?e[t]:null,typeof e=="function"&&n.removeEventListener(i,e,r),typeof l=="function")){typeof e!="function"&&e!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(i,l,r);break n}In=!0,t in n?n[t]=l:l===!0?n.setAttribute(t,""):eu(n,t,l)}return}In=!0}function De(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yn("error",n),Yn("load",n);var l=!1,r=!1,i;for(i in t)if(t.hasOwnProperty(i)){var c=t[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ne(n,e,i,c,t,null)}}r&&ne(n,e,"srcSet",t.srcSet,t,null),l&&ne(n,e,"src",t.src,t,null);return;case"input":Yn("invalid",n);var m=i=c=r=null,S=null,C=null;for(l in t)if(t.hasOwnProperty(l)){var H=t[l];if(H!=null)switch(l){case"name":r=H;break;case"type":c=H;break;case"checked":S=H;break;case"defaultChecked":C=H;break;case"value":i=H;break;case"defaultValue":m=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(f(137,e));break;default:ne(n,e,l,H,t,null)}}hs(n,i,m,S,C,c,r,!1);return;case"select":Yn("invalid",n),l=c=i=null;for(r in t)if(t.hasOwnProperty(r)&&(m=t[r],m!=null))switch(r){case"value":i=m;break;case"defaultValue":c=m;break;case"multiple":l=m;default:ne(n,e,r,m,t,null)}e=i,t=c,n.multiple=!!l,e!=null?rr(n,!!l,e,!1):t!=null&&rr(n,!!l,t,!0);return;case"textarea":Yn("invalid",n),i=r=l=null;for(c in t)if(t.hasOwnProperty(c)&&(m=t[c],m!=null))switch(c){case"value":l=m;break;case"defaultValue":r=m;break;case"children":i=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(f(91));break;default:ne(n,e,c,m,t,null)}ms(n,l,r,i);return;case"option":for(S in t)if(t.hasOwnProperty(S)&&(l=t[S],l!=null))switch(S){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ne(n,e,S,l,t,null)}return;case"dialog":Yn("beforetoggle",n),Yn("toggle",n),Yn("cancel",n),Yn("close",n);break;case"iframe":case"object":Yn("load",n);break;case"video":case"audio":for(l=0;l<Di.length;l++)Yn(Di[l],n);break;case"image":Yn("error",n),Yn("load",n);break;case"details":Yn("toggle",n);break;case"embed":case"source":case"link":Yn("error",n),Yn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in t)if(t.hasOwnProperty(C)&&(l=t[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:ne(n,e,C,l,t,null)}return;default:if(Ba(e)){for(H in t)t.hasOwnProperty(H)&&(l=t[H],l!==void 0&&qf(n,e,H,l,t,void 0));return}}for(m in t)t.hasOwnProperty(m)&&(l=t[m],l!=null&&ne(n,e,m,l,t,null))}var C1={};function R1(n,e,t,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,c=null,m=null,S=null,C=null,H=null;for(z in t){var X=t[z];if(t.hasOwnProperty(z)&&X!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":S=X;default:l.hasOwnProperty(z)||ne(n,e,z,null,l,X)}}for(var M in l){var z=l[M];if(X=t[M],l.hasOwnProperty(M)&&(z!=null||X!=null))switch(M){case"type":z!==X&&(In=!0),i=z;break;case"name":z!==X&&(In=!0),r=z;break;case"checked":z!==X&&(In=!0),C=z;break;case"defaultChecked":z!==X&&(In=!0),H=z;break;case"value":z!==X&&(In=!0),c=z;break;case"defaultValue":z!==X&&(In=!0),m=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(f(137,e));break;default:z!==X&&ne(n,e,M,z,l,X)}}ja(n,c,m,S,C,H,i,r);return;case"select":z=c=m=M=null;for(i in t)if(S=t[i],t.hasOwnProperty(i)&&S!=null)switch(i){case"value":break;case"multiple":z=S;default:l.hasOwnProperty(i)||ne(n,e,i,null,l,S)}for(r in l)if(i=l[r],S=t[r],l.hasOwnProperty(r)&&(i!=null||S!=null))switch(r){case"value":i!==S&&(In=!0),M=i;break;case"defaultValue":i!==S&&(In=!0),m=i;break;case"multiple":i!==S&&(In=!0),c=i;default:i!==S&&ne(n,e,r,i,l,S)}e=m,t=c,l=z,M!=null?rr(n,!!t,M,!1):!!l!=!!t&&(e!=null?rr(n,!!t,e,!0):rr(n,!!t,t?[]:"",!1));return;case"textarea":z=M=null;for(m in t)if(r=t[m],t.hasOwnProperty(m)&&r!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:ne(n,e,m,null,l,r)}for(c in l)if(r=l[c],i=t[c],l.hasOwnProperty(c)&&(r!=null||i!=null))switch(c){case"value":r!==i&&(In=!0),M=r;break;case"defaultValue":r!==i&&(In=!0),z=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(f(91));break;default:r!==i&&ne(n,e,c,r,l,i)}ds(n,M,z);return;case"option":for(var k in t)if(M=t[k],t.hasOwnProperty(k)&&M!=null&&!l.hasOwnProperty(k))switch(k){case"selected":n.selected=!1;break;default:ne(n,e,k,null,l,M)}for(S in l)if(M=l[S],z=t[S],l.hasOwnProperty(S)&&M!==z&&(M!=null||z!=null))switch(S){case"selected":M!==z&&(In=!0),n.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:ne(n,e,S,M,l,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fn in t)M=t[fn],t.hasOwnProperty(fn)&&M!=null&&!l.hasOwnProperty(fn)&&ne(n,e,fn,null,l,M);for(C in l)if(M=l[C],z=t[C],l.hasOwnProperty(C)&&M!==z&&(M!=null||z!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(f(137,e));break;default:ne(n,e,C,M,l,z)}return;default:if(Ba(e)){for(var Hn in t)M=t[Hn],t.hasOwnProperty(Hn)&&M!==void 0&&!l.hasOwnProperty(Hn)&&qf(n,e,Hn,void 0,l,M);for(H in l)M=l[H],z=t[H],!l.hasOwnProperty(H)||M===z||M===void 0&&z===void 0||qf(n,e,H,M,l,z);return}}for(var _ in t)M=t[_],t.hasOwnProperty(_)&&M!=null&&!l.hasOwnProperty(_)&&ne(n,e,_,null,l,M);for(X in l)M=l[X],z=t[X],!l.hasOwnProperty(X)||M===z||M==null&&z==null||ne(n,e,X,M,l,z)}function xm(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function D1(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var r=t[l],i=r.transferSize,c=r.initiatorType,m=r.duration;if(i&&m&&xm(c)){for(c=0,m=r.responseEnd,l+=1;l<t.length;l++){var S=t[l],C=S.startTime;if(C>m)break;var H=S.transferSize,X=S.initiatorType;H&&xm(X)&&(S=S.responseEnd,c+=H*(S<m?1:(m-C)/(S-C)))}if(--l,e+=8*(i+c)/(r.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Bf=null,Yf=null;function Hi(n){return n.nodeType===9?n:n.ownerDocument}function bm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Am(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Nm(n,e,t,l){return t=Hi(t).createElement(n),t[Oe]=l,t[Xe]=e,De(t,n,e),xe(t),t}function Lf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gf=null;function z1(){var n=window.event;return n&&n.type==="popstate"?n===Gf?!1:(Gf=n,!0):(Gf=null,!1)}var Qf=typeof setTimeout=="function"?setTimeout:void 0,H1=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,Mm=typeof requestAnimationFrame=="function"?requestAnimationFrame:Qf,U1=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(n){return Om.resolve(null).then(n).catch(w1)}:Qf;function w1(n){setTimeout(function(){throw n})}function bl(n){return n==="head"}function _m(n,e){var t=e,l=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(l===0){n.removeChild(r),Qr(e);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")kf(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,kf(t);for(var i=t.firstChild;i;){var c=i.nextSibling,m=i.nodeName;i[Fr]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=c}}else t==="body"&&kf(n.ownerDocument.body);t=r}while(t);Qr(e)}function Cm(n,e){var t=n;n=0;do{var l=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=l}while(t)}function Rm(n,e,t){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,n.style.viewTransitionName=e,t!=null&&(n.style.viewTransitionClass=t),t=getComputedStyle(n),t.display==="inline"){if(e=n.getClientRects(),e.length===1)var l=1;else for(var r=l=0;r<e.length;r++){var i=e[r];0<i.width&&0<i.height&&l++}l===1&&(n=n.style,n.display=e.length===1?"inline-block":"block",n.marginTop="-"+t.paddingTop,n.marginBottom="-"+t.paddingBottom)}}function Dm(n,e){n=n.style,e=e.style;var t=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;n.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,n.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),n.display==="inline-block"&&(e==null?n.display=n.margin="":(t=e.display,n.display=t==null||typeof t=="boolean"?"":t,t=e.margin,t!=null?n.margin=t:(t=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],n.marginTop=t==null||typeof t=="boolean"?"":t,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],n.marginBottom=e==null||typeof e=="boolean"?"":e)))}function j1(n,e,t){return t=t.ownerDocument.defaultView,{rect:n,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=n.bottom&&0<=n.right&&n.top<=t.innerHeight&&n.left<=t.innerWidth}}function Xf(n){var e=n.getBoundingClientRect(),t=getComputedStyle(n);return j1(e,t,n)}function q1(n){return n.documentElement.clientHeight}function B1(n){this.addEventListener("load",n),this.addEventListener("error",n)}function Y1(n,e,t,l,r,i,c,m,S){var C=e.nodeType===9?e:e.ownerDocument;try{var H=C.startViewTransition({update:function(){var M=C.defaultView,z=M.navigation&&M.navigation.transition,k=C.fonts.status;l();var fn=[];if(k==="loaded"&&(q1(C),C.fonts.status==="loading"&&fn.push(C.fonts.ready)),k=fn.length,n!==null)for(var Hn=n.suspenseyImages,_=0,A=0;A<Hn.length;A++){var R=Hn[A];if(!R.complete){var G=R.getBoundingClientRect();if(0<G.bottom&&0<G.right&&G.top<M.innerHeight&&G.left<M.innerWidth){if(_+=Wm(R),_>ha){fn.length=k;break}R=new Promise(B1.bind(R)),fn.push(R)}}}if(0<fn.length)return M=Promise.race([Promise.all(fn),new Promise(function(ln){return setTimeout(ln,500)})]).then(r,r),(z?Promise.allSettled([z.finished,M]):M).then(i,i);if(r(),z)return z.finished.then(i,i);i()},types:t});C.__reactViewTransition=H;var X=[];return H.ready.then(function(){for(var M=C.documentElement.getAnimations({subtree:!0}),z=0;z<M.length;z++){var k=M[z],fn=k.effect,Hn=fn.pseudoElement;if(Hn!=null&&Hn.startsWith("::view-transition")){X.push(k),k=fn.getKeyframes();for(var _=Hn=void 0,A=!0,R=0;R<k.length;R++){var G=k[R],ln=G.width;if(Hn===void 0)Hn=ln;else if(Hn!==ln){A=!1;break}if(ln=G.height,_===void 0)_=ln;else if(_!==ln){A=!1;break}delete G.width,delete G.height,G.transform==="none"&&delete G.transform}A&&Hn!==void 0&&_!==void 0&&(fn.setKeyframes(k),A=getComputedStyle(fn.target,fn.pseudoElement),A.width!==Hn||A.height!==_)&&(A=k[0],A.width=Hn,A.height=_,A=k[k.length-1],A.width=Hn,A.height=_,fn.setKeyframes(k))}}c()},function(M){C.__reactViewTransition===H&&(C.__reactViewTransition=null);try{if(typeof M=="object"&&M!==null)switch(M.name){case"InvalidStateError":(M.message==="View transition was skipped because document visibility state is hidden."||M.message==="Skipping view transition because document visibility state has become hidden."||M.message==="Skipping view transition because viewport size changed."||M.message==="Transition was aborted because of invalid state")&&(M=null)}M!==null&&S(M)}finally{l(),r(),c()}}),H.finished.finally(function(){for(var M=0;M<X.length;M++)X[M].cancel();C.__reactViewTransition===H&&(C.__reactViewTransition=null),m()}),H}catch{return l(),r(),c(),null}}function Pl(n,e){this._scope=document.documentElement,this._selector="::view-transition-"+n+"("+e+")"}Pl.prototype.animate=function(n,e){return e=typeof e=="number"?{duration:e}:pn({},e),e.pseudoElement=this._selector,this._scope.animate(n,e)},Pl.prototype.getAnimations=function(){for(var n=this._scope,e=this._selector,t=n.getAnimations({subtree:!0}),l=[],r=0;r<t.length;r++){var i=t[r].effect;i!==null&&i.target===n&&i.pseudoElement===e&&l.push(t[r])}return l},Pl.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function zm(n){return{name:n,group:new Pl("group",n),imagePair:new Pl("image-pair",n),old:new Pl("old",n),new:new Pl("new",n)}}function rt(n){this._fragmentFiber=n,this._observers=this._eventListeners=null}rt.prototype.addEventListener=function(n,e,t){var l=null,r=null;if(!(t!=null&&typeof t!="boolean"&&(l=t.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Um(i,n,e,t)===-1){var c=this,m=e;t!=null&&typeof t!="boolean"&&t.once===!0&&(m=function(S){c.removeEventListener(n,e,t),typeof e=="function"?e.call(this,S):e.handleEvent(S)}),l!==null&&(r=c.removeEventListener.bind(c,n,e,t),l.addEventListener("abort",r,{once:!0}),r=l.removeEventListener.bind(l,"abort",r)),l=jr(t),i.push({type:n,listener:e,optionsOrUseCapture:t,attachedListener:m,cleanup:r}),g(this._fragmentFiber.child,!1,L1,n,m,l)}this._eventListeners=i}};function L1(n,e,t,l){return P(n).addEventListener(e,t,l),!1}rt.prototype.removeEventListener=function(n,e,t){var l=this._eventListeners;if(l!==null&&(e=Um(l,n,e,t),e!==-1)){var r=l[e];t=r.attachedListener;var i=r.cleanup;r=jr(r.optionsOrUseCapture),g(this._fragmentFiber.child,!1,G1,n,t,r),l.splice(e,1),i!==null&&i()}};function G1(n,e,t,l){return P(n).removeEventListener(e,t,l),!1}function jr(n){return n!=null&&typeof n!="boolean"&&(n.once===!0||n.signal instanceof AbortSignal)?{capture:n.capture,passive:n.passive}:n}function Hm(n){return n==null?"c=0":typeof n=="boolean"?"c="+(n?"1":"0"):"c="+(n.capture?"1":"0")}function Um(n,e,t,l){if(n.length===0)return-1;l=Hm(l);for(var r=0;r<n.length;r++){var i=n[r];if(i.type===e&&i.listener===t&&Hm(i.optionsOrUseCapture)===l)return r}return-1}rt.prototype.dispatchEvent=function(n){var e=x(this._fragmentFiber);if(e===null)return!0;e=P(e);var t=this._eventListeners;if(t!==null&&0<t.length||!n.bubbles){var l=e.nodeType===9?e.createComment(""):document.createTextNode("");if(t)for(var r=0;r<t.length;r++){var i=t[r];l.addEventListener(i.type,i.attachedListener,jr(i.optionsOrUseCapture))}if(e.appendChild(l),n=l.dispatchEvent(n),t)for(r=0;r<t.length;r++)i=t[r],l.removeEventListener(i.type,i.attachedListener,jr(i.optionsOrUseCapture));return e.removeChild(l),n}return e.dispatchEvent(n)},rt.prototype.focus=function(n){g(this._fragmentFiber.child,!0,wm,n,void 0,void 0)};function wm(n,e){return n.tag===6?!1:(n=P(n),P1(n,e))}rt.prototype.focusLast=function(n){var e=[];g(this._fragmentFiber.child,!0,Vf,e,void 0,void 0);for(var t=e.length-1;0<=t&&!wm(e[t],n);t--);};function Vf(n,e){return e.push(n),!1}rt.prototype.blur=function(){var n=x(this._fragmentFiber);n!==null&&(n=P(n),n=Hi(n).activeElement,n!==null&&g(this._fragmentFiber.child,!1,Q1,n,void 0,void 0))};function Q1(n,e){return n.tag===6?!1:(n=P(n),n===e||n.contains(e)?(e.blur(),!0):!1)}rt.prototype.observeUsing=function(n){this._observers===null&&(this._observers=new Set),this._observers.add(n),g(this._fragmentFiber.child,!1,X1,n,void 0,void 0)};function X1(n,e){return n.tag===6||(n=P(n),e.observe(n)),!1}rt.prototype.unobserveUsing=function(n){var e=this._observers;if(e!==null&&e.has(n)){e.delete(n),g(this._fragmentFiber.child,!1,V1,n,void 0,void 0);for(var t=e=0;t<bt.length;t++){var l=bt[t];l.fragmentInstance===this&&l.observer===n?n.unobserve(l.instance):bt[e++]=l}bt.length=e}};function V1(n,e){return n.tag===6||(n=P(n),e.unobserve(n)),!1}var bt=[],Kf=!1;function K1(n,e,t){bt.push({fragmentInstance:n,observer:e,instance:t}),Kf||(Kf=!0,nv(function(){Kf=!1;var l=bt;bt=[];for(var r=0;r<l.length;r++){var i=l[r];i.observer.unobserve(i.instance)}}))}rt.prototype.getClientRects=function(){var n=[];return g(this._fragmentFiber.child,!1,Z1,n,void 0,void 0),n};function Z1(n,e){if(n.tag===6){n=n.stateNode;var t=n.ownerDocument.createRange();t.selectNodeContents(n),e.push.apply(e,t.getClientRects())}else n=P(n),e.push.apply(e,n.getClientRects());return!1}rt.prototype.getRootNode=function(n){var e=x(this._fragmentFiber);return e===null?this:P(e).getRootNode(n)},rt.prototype.compareDocumentPosition=function(n){var e=x(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];g(this._fragmentFiber.child,!1,Vf,t,void 0,void 0);var l=P(e);if(t.length===0){if(t=l,j(this._fragmentFiber)){n:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break n}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(t=e)}e=this._fragmentFiber;var r=l=t.compareDocumentPosition(n);return t===n?r=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=tn(e)[1],t===null?r=Node.DOCUMENT_POSITION_PRECEDING:(n=P(t).compareDocumentPosition(n),r=n===0||n&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),r|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=P(t[0]),r=P(t[t.length-1]);var i=j(this._fragmentFiber)?e.parentElement:l;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=i.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_CONTAINED_BY;var c=e.compareDocumentPosition(n),m=r.compareDocumentPosition(n),S=c&Node.DOCUMENT_POSITION_CONTAINED_BY||m&Node.DOCUMENT_POSITION_CONTAINED_BY;return m=l&&i&&c&Node.DOCUMENT_POSITION_FOLLOWING&&m&Node.DOCUMENT_POSITION_PRECEDING,e=l&&e===n||i&&r===n||S||m?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&e===n||!i&&r===n?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:c,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||I1(e,this._fragmentFiber,t[0],t[t.length-1],n)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function I1(n,e,t,l,r){var i=zl(r);if(n&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!i)n:{for(;i!==null;){if(i.tag===7&&(i===e||i.alternate===e)){t=!0;break n}i=i.return}t=!1}return t}if(n&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=r.ownerDocument,r===i||r===i.documentElement||r===i.body;n:{for(i=e,e=x(e);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==e&&i.alternate!==e)){i=!0;break n}i=i.return}i=!1}return i}return n&Node.DOCUMENT_POSITION_PRECEDING?((e=!!i)&&!(e=i===t)&&(e=Zn(t,i,Tn),e===null?e=!1:(g(e,!0,vn,i,t),i=qn,qn=null,e=i!==null)),e):n&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!i)&&!(e=i===l)&&(e=Zn(l,i,Tn),e===null?e=!1:(g(e,!0,dn,i,l),i=qn,$=qn=null,e=i!==null)),e):!1}function jm(n,e){var t=n.ownerDocument.createRange();t.selectNodeContents(n),n=t.getBoundingClientRect(),window.scrollTo(window.scrollX+n.left,e?window.scrollY+n.top:window.scrollY+n.bottom-window.innerHeight)}rt.prototype.scrollIntoView=function(n){if(typeof n=="object")throw Error(f(566));var e=[];g(this._fragmentFiber.child,!1,Vf,e,void 0,void 0);var t=n!==!1;if(e.length===0){var l=tn(this._fragmentFiber);if(l=t?l[1]||l[0]||x(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){n=P(l),jm(n,t);return}if(l=P(l),l.nodeType!==9){if(l.nodeType===11){t="host"in l?l.host:null,t!==null&&t.scrollIntoView(n);return}l.scrollIntoView(n)}}for(l=t?e.length-1:0;l!==(t?-1:e.length);){var r=e[l];r.tag===6?(r=P(r),jm(r,t)):P(r).scrollIntoView(n),l+=t?-1:1}};function J1(n,e){return n=P(n),qm(n,e),!1}function qm(n,e){n.reactFragments==null&&(n.reactFragments=new Set),n.reactFragments.add(e)}function Bm(n,e){var t=e._eventListeners;if(t!==null)for(var l=0;l<t.length;l++){var r=t[l];n.addEventListener(r.type,r.attachedListener,jr(r.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(i){for(var c=0,m=0;m<bt.length;m++){var S=bt[m];(S.fragmentInstance!==e||S.observer!==i||S.instance!==n)&&(bt[c++]=S)}bt.length=c,i.observe(n)}),qm(n,e))}function $1(n,e){var t=e._eventListeners;if(t!==null)for(var l=0;l<t.length;l++){var r=t[l];n.removeEventListener(r.type,r.attachedListener,jr(r.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(i){typeof i.rootMargin=="string"?K1(e,i,n):i.unobserve(n)}),n.reactFragments!=null&&n.reactFragments.delete(e))}function Zf(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Zf(t),nu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function k1(n,e,t,l){for(;n.nodeType===1;){var r=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Fr])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==r.rel||n.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||n.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||n.getAttribute("title")!==(r.title==null?null:r.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(r.src==null?null:r.src)||n.getAttribute("type")!==(r.type==null?null:r.type)||n.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=dt(n.nextSibling),n===null)break}return null}function F1(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=dt(n.nextSibling),n===null))return null;return n}function Ym(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=dt(n.nextSibling),n===null))return null;return n}function If(n){return n.data==="$?"||n.data==="$~"}function Jf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function W1(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var l=function(){e(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function dt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var $f=null;function Lm(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return dt(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function Gm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function P1(n,e){function t(){l=!0}if(n.ownerDocument.activeElement===n)return!0;var l=!1;try{n.ownerDocument.addEventListener("focus",t,!0),(n.focus||HTMLElement.prototype.focus).call(n,e)}finally{n.ownerDocument.removeEventListener("focus",t,!0)}return l}function nv(n){Mm(function(){Mm(function(e){return n(e)})})}function Qm(n,e,t){switch(e=Hi(t),n){case"html":if(n=e.documentElement,!n)throw Error(f(452));return n;case"head":if(n=e.head,!n)throw Error(f(453));return n;case"body":if(n=e.body,!n)throw Error(f(454));return n;default:throw Error(f(451))}}function Xm(n,e,t){for(var l in t){var r=t[l];t.hasOwnProperty(l)&&r!=null&&ne(n,e,l,null,C1,r)}t.dangerouslySetInnerHTML!=null&&(n.textContent=""),n.onclick===Mt&&(n.onclick=null),nu(n)}function kf(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);nu(n)}var mt=new Map,Vm=new Set;function Ui(n){if(typeof n.getRootNode=="function"){var e=n.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return n.nodeType===9?n:n.ownerDocument}var nl=hn.d;hn.d={f:ev,r:tv,D:lv,C:rv,L:iv,m:uv,X:cv,S:av,M:fv};function ev(){var n=nl.f(),e=la();return n||e}function tv(n){var e=er(n);e!==null&&e.tag===5&&e.type==="form"?Zh(e):nl.r(n)}var qr=typeof document>"u"?null:document;function Km(n,e,t){var l=qr;if(l&&typeof e=="string"&&e){var r=ut(e);r='link[rel="'+n+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),Vm.has(r)||(Vm.add(r),n={rel:n,crossOrigin:t,href:e},l.querySelector(r)===null&&(e=l.createElement("link"),De(e,"link",n),xe(e),l.head.appendChild(e)))}}function lv(n){nl.D(n),Km("dns-prefetch",n,null)}function rv(n,e){nl.C(n,e),Km("preconnect",n,e)}function iv(n,e,t){nl.L(n,e,t);var l=qr;if(l&&n&&e){var r='link[rel="preload"][as="'+ut(e)+'"]';e==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+ut(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+ut(t.imageSizes)+'"]')):r+='[href="'+ut(n)+'"]';var i=r;switch(e){case"style":i=Br(n);break;case"script":i=Yr(n)}if(!(mt.has(i)||(n=pn({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),mt.set(i,n),l.querySelector(r)!==null||e==="style"&&l.querySelector(wi(i))||e==="script"&&l.querySelector(ji(i))))){var c=l.createElement("link");De(c,"link",n),e==="style"&&(c[Pi]=!0,c.onload=c.onerror=function(){rs(c)}),xe(c),l.head.appendChild(c)}}}function uv(n,e){nl.m(n,e);var t=qr;if(t&&n){var l=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+ut(l)+'"][href="'+ut(n)+'"]',i=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Yr(n)}if(!mt.has(i)&&(n=pn({rel:"modulepreload",href:n},e),mt.set(i,n),t.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(ji(i)))return}l=t.createElement("link"),De(l,"link",n),xe(l),t.head.appendChild(l)}}}function av(n,e,t){nl.S(n,e,t);var l=qr;if(l&&n){var r=tr(l).hoistableStyles,i=Br(n);e=e||"default";var c=r.get(i);if(!c){var m={loading:0,preload:null};if(c=l.querySelector(wi(i)))m.loading=5;else{n=pn({rel:"stylesheet",href:n,"data-precedence":e},t),(t=mt.get(i))&&Ff(n,t);var S=c=l.createElement("link");xe(S),De(S,"link",n),S._p=new Promise(function(C,H){S.onload=C,S.onerror=H}),S.addEventListener("load",function(){m.loading|=1}),S.addEventListener("error",function(){m.loading|=2}),m.loading|=4,oa(c,e,l)}c={type:"stylesheet",instance:c,count:1,state:m},r.set(i,c)}}}function cv(n,e){nl.X(n,e);var t=qr;if(t&&n){var l=tr(t).hoistableScripts,r=Yr(n),i=l.get(r);i||(i=t.querySelector(ji(r)),i||(n=pn({src:n,async:!0},e),(e=mt.get(r))&&Wf(n,e),i=t.createElement("script"),xe(i),De(i,"link",n),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(r,i))}}function fv(n,e){nl.M(n,e);var t=qr;if(t&&n){var l=tr(t).hoistableScripts,r=Yr(n),i=l.get(r);i||(i=t.querySelector(ji(r)),i||(n=pn({src:n,async:!0,type:"module"},e),(e=mt.get(r))&&Wf(n,e),i=t.createElement("script"),xe(i),De(i,"link",n),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(r,i))}}function Zm(n,e,t,l){var r=(r=Te.current)?Ui(r):null;if(!r)throw Error(f(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=Br(t.href),e=tr(r).hoistableStyles,l=e.get(t),l||(l={type:"style",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Br(t.href);var i=tr(r).hoistableStyles,c=i.get(n);if(c||(r=r.ownerDocument||r,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,c),(i=r.querySelector(wi(n)))?i._p||(c.instance=i,c.state.loading=5):(i=mt.get(n),i||(i={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},mt.set(n,i)),ov(r,n,i,c.state))),e&&l===null)throw Error(f(528,""));return c}if(e&&l!==null)throw Error(f(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(t=Yr(t),e=tr(r).hoistableScripts,l=e.get(t),l||(l={type:"script",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,n))}}function Br(n){return'href="'+ut(n)+'"'}function wi(n){return'link[rel="stylesheet"]['+n+"]"}function Im(n){return pn({},n,{"data-precedence":n.precedence,precedence:null})}function ov(n,e,t,l){if(e=n.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Pi]!==!0){l.loading=1;return}}else e=n.createElement("link"),e[Pi]=!0,e.onload=e.onerror=rs.bind(null,e),De(e,"link",t),xe(e),n.head.appendChild(e);l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2})}function Yr(n){return'[src="'+ut(n)+'"]'}function ji(n){return"script[async]"+n}function Jm(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var l=n.querySelector('style[data-href~="'+ut(t.href)+'"]');if(l)return e.instance=l,xe(l),l;var r=pn({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),xe(l),De(l,"style",r),oa(l,t.precedence,n),e.instance=l;case"stylesheet":r=Br(t.href);var i=n.querySelector(wi(r));if(i)return e.state.loading|=4,e.instance=i,xe(i),i;l=Im(t),(r=mt.get(r))&&Ff(l,r),i=(n.ownerDocument||n).createElement("link"),xe(i);var c=i;return c._p=new Promise(function(m,S){c.onload=m,c.onerror=S}),De(i,"link",l),e.state.loading|=4,oa(i,t.precedence,n),e.instance=i;case"script":return i=Yr(t.src),(r=n.querySelector(ji(i)))?(e.instance=r,xe(r),r):(l=t,(r=mt.get(i))&&(l=pn({},t),Wf(l,r)),n=n.ownerDocument||n,r=n.createElement("script"),xe(r),De(r,"link",l),n.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,oa(l,t.precedence,n));return e.instance}function oa(n,e,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,i=r,c=0;c<l.length;c++){var m=l[c];if(m.dataset.precedence===e)i=m;else if(i!==r)break}i?i.parentNode.insertBefore(n,i.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function Ff(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Wf(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var sa=null;function $m(n,e,t){if(sa===null){var l=new Map,r=sa=new Map;r.set(t,l)}else r=sa,l=r.get(t),l||(l=new Map,r.set(t,l));if(l.has(n))return l;for(l.set(n,null),t=t.getElementsByTagName(n),r=0;r<t.length;r++){var i=t[r];if(!(i[Fr]||i[Oe]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(e)||"";c=n+c;var m=l.get(c);m?m.push(i):l.set(c,[i])}}return l}function Pf(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function sv(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function km(n,e){return n==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Fm(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Wm(n){return(n.width||100)*(n.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Pm(n,e){typeof e.decode=="function"&&(n.imgCount++,e.complete||(n.imgBytes+=Wm(e),n.suspenseyImages.push(e)),n=mv.bind(n),e.decode().then(n,n))}function hv(n,e,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Br(l.href),i=e.querySelector(wi(r));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=qi.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=i,xe(i);return}i=e.ownerDocument||e,l=Im(l),(r=mt.get(r))&&Ff(l,r),i=i.createElement("link"),xe(i);var c=i;c._p=new Promise(function(m,S){c.onload=m,c.onerror=S}),De(i,"link",l),t.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=qi.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var ha=0;function dv(n,e){return n.stylesheets&&n.count===0&&ma(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var l=setTimeout(function(){if(n.stylesheets&&ma(n,n.stylesheets),n.unsuspend){var i=n.unsuspend;n.unsuspend=null,i()}},6e4+e);0<n.imgBytes&&ha===0&&(ha=62500*D1());var r=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&ma(n,n.stylesheets),n.unsuspend)){var i=n.unsuspend;n.unsuspend=null,i()}},(n.imgBytes>ha?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function ny(n){if(n.count===0&&(n.imgCount===0||!n.waitingForImages)){if(n.stylesheets)ma(n,n.stylesheets);else if(n.unsuspend){var e=n.unsuspend;n.unsuspend=null,e()}}}function qi(){this.count--,ny(this)}function mv(){this.imgCount--,ny(this)}var da=null;function ma(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,da=new Map,e.forEach(yv,n),da=null,qi.call(n))}function yv(n,e){if(!(e.state.loading&4)){var t=da.get(n);if(t)var l=t.get(null);else{t=new Map,da.set(n,t);for(var r=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var c=r[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),l=c)}l&&t.set(null,l)}r=e.instance,c=r.getAttribute("data-precedence"),i=t.get(c)||l,i===l&&t.set(null,r),t.set(c,r),this.count++,l=qi.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),i?i.parentNode.insertBefore(r,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(r,n.firstChild)),e.state.loading|=4}}var Lr={$$typeof:Qn,Provider:null,Consumer:null,_currentValue:He,_currentValue2:He,_threadCount:0};function gv(n,e,t,l,r,i,c,m,S){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=za(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=za(0),this.hiddenUpdates=za(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.transitionTypes=null,this.incompleteTransitions=new Map}function ey(n,e,t,l,r,i,c,m,S,C,H,X){return n=new gv(n,e,t,c,S,C,H,X,m),e=1,i===!0&&(e|=24),i=Ve(3,null,null,e),n.current=i,i.stateNode=n,e=dc(),e.refCount++,n.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:t,cache:e},vc(i),n}function ty(n){return n?(n=hr,n):hr}function ly(n,e,t,l,r,i){r=ty(r),l.context===null?l.context=r:l.pendingContext=r,l=sl(e),l.payload={element:t},i=i===void 0?null:i,i!==null&&(l.callback=i),t=hl(n,l,e),t!==null&&(Je(t,n,e),mi(t,n,e))}function ry(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function no(n,e){ry(n,e),(n=n.alternate)&&ry(n,e)}function iy(n){if(n.tag===13||n.tag===31){var e=jl(n,67108864);e!==null&&Je(e,n,67108864),no(n,67108864)}}function uy(n){if(n.tag===13||n.tag===31){var e=lt();e=Ha(e);var t=jl(n,e);t!==null&&Je(t,n,e),no(n,e)}}var Gr=!0;function vv(n,e,t,l){var r=F.T;F.T=null;var i=hn.p;try{hn.p=2,eo(n,e,t,l)}finally{hn.p=i,F.T=r}}function pv(n,e,t,l){var r=F.T;F.T=null;var i=hn.p;try{hn.p=8,eo(n,e,t,l)}finally{hn.p=i,F.T=r}}function eo(n,e,t,l){if(Gr){var r=to(l);if(r===null)jf(n,e,l,ya,t),cy(n,l);else if(Sv(r,n,e,t,l))l.stopPropagation();else if(cy(n,l),e&4&&-1<Ev.indexOf(n)){for(;r!==null;){var i=er(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Dl(i.pendingLanes);if(c!==0){var m=i;for(m.pendingLanes|=2,m.entangledLanes|=2;c;){var S=1<<31-ke(c);m.entanglements[1]|=S,c&=~S}qt(i),(Jn&6)===0&&(na=K()+500,Ri(0))}}break;case 31:case 13:m=jl(i,2),m!==null&&Je(m,i,2),la(),no(i,2)}if(i=to(l),i===null&&jf(n,e,l,ya,t),i===r)break;r=i}r!==null&&l.stopPropagation()}else jf(n,e,l,null,t)}}function to(n){return n=La(n),lo(n)}var ya=null;function lo(n){if(ya=null,n=zl(n),n!==null){var e=y(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=v(e),n!==null)return n;n=null}else if(t===31){if(n=p(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return ya=n,null}function ay(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case J:return 2;case an:return 8;case gn:case En:return 32;case On:return 268435456;default:return 32}default:return 32}}var ro=!1,Al=null,Nl=null,Ol=null,Bi=new Map,Yi=new Map,Ml=[],Ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cy(n,e){switch(n){case"focusin":case"focusout":Al=null;break;case"dragenter":case"dragleave":Nl=null;break;case"mouseover":case"mouseout":Ol=null;break;case"pointerover":case"pointerout":Bi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(e.pointerId)}}function Li(n,e,t,l,r,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:t,eventSystemFlags:l,nativeEvent:i,targetContainers:[r]},e!==null&&(e=er(e),e!==null&&iy(e)),n):(n.eventSystemFlags|=l,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Sv(n,e,t,l,r){switch(e){case"focusin":return Al=Li(Al,n,e,t,l,r),!0;case"dragenter":return Nl=Li(Nl,n,e,t,l,r),!0;case"mouseover":return Ol=Li(Ol,n,e,t,l,r),!0;case"pointerover":var i=r.pointerId;return Bi.set(i,Li(Bi.get(i)||null,n,e,t,l,r)),!0;case"gotpointercapture":return i=r.pointerId,Yi.set(i,Li(Yi.get(i)||null,n,e,t,l,r)),!0}return!1}function fy(n){var e=zl(n.target);if(e!==null){var t=y(e);if(t!==null){if(e=t.tag,e===13){if(e=v(t),e!==null){n.blockedOn=e,es(n.priority,function(){uy(t)});return}}else if(e===31){if(e=p(t),e!==null){n.blockedOn=e,es(n.priority,function(){uy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ga(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=to(n.nativeEvent);if(t===null){t=n.nativeEvent;var l=new t.constructor(t.type,t);Ya=l,t.target.dispatchEvent(l),Ya=null}else return e=er(t),e!==null&&iy(e),n.blockedOn=t,!1;e.shift()}return!0}function oy(n,e,t){ga(n)&&t.delete(e)}function Tv(){ro=!1,Al!==null&&ga(Al)&&(Al=null),Nl!==null&&ga(Nl)&&(Nl=null),Ol!==null&&ga(Ol)&&(Ol=null),Bi.forEach(oy),Yi.forEach(oy)}function va(n,e){n.blockedOn===e&&(n.blockedOn=null,ro||(ro=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Tv)))}var pa=null;function sy(n){pa!==n&&(pa=n,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){pa===n&&(pa=null);for(var e=0;e<n.length;e+=3){var t=n[e],l=n[e+1],r=n[e+2];if(typeof l!="function"){if(lo(l||t)===null)continue;break}var i=er(t);i!==null&&(n.splice(e,3),e-=3,Bc(i,{pending:!0,data:r,method:t.method,action:l},l,r))}}))}function Qr(n){function e(S){return va(S,n)}Al!==null&&va(Al,n),Nl!==null&&va(Nl,n),Ol!==null&&va(Ol,n),Bi.forEach(e),Yi.forEach(e);for(var t=0;t<Ml.length;t++){var l=Ml[t];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Ml.length&&(t=Ml[0],t.blockedOn===null);)fy(t),t.blockedOn===null&&Ml.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var r=t[l],i=t[l+1],c=r[Xe]||null;if(typeof i=="function")c||sy(t);else if(c){var m=null;if(i&&i.hasAttribute("formAction")){if(r=i,c=i[Xe]||null)m=c.formAction;else if(lo(r)!==null)continue}else m=c.action;typeof m=="function"?t[l+1]=m:(t.splice(l,3),l-=3),sy(t)}}}function hy(){function n(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return r=c})},focusReset:"manual",scroll:"manual"})}function e(){r!==null&&(r(),r=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)}}}function io(n){this._internalRoot=n}Ea.prototype.render=io.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(f(409));var t=e.current,l=lt();ly(t,l,n,e,null,null)},Ea.prototype.unmount=io.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ly(n.current,2,null,n,null,null),la(),e[nr]=null}};function Ea(n){this._internalRoot=n}Ea.prototype.unstable_scheduleHydration=function(n){if(n){var e=ns();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ml.length&&e!==0&&e<Ml[t].priority;t++);Ml.splice(t,0,n),t===0&&fy(n)}};var dy=o.version;if(dy!=="19.3.0")throw Error(f(527,dy,"19.3.0"));hn.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(f(188)):(n=Object.keys(n).join(","),Error(f(268,n)));return n=T(e),n=n!==null?E(n):null,n=n===null?null:n.stateNode,n};var xv={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{vt=Sa.inject(xv),Ee=Sa}catch{}}return Qi.createRoot=function(n,e){if(!s(n))throw Error(f(299));var t=!1,l="",r=td,i=ld,c=rd;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=ey(n,1,!1,null,null,t,l,null,r,i,c,hy),n[nr]=e.current,wf(n),new io(e)},Qi.hydrateRoot=function(n,e,t){if(!s(n))throw Error(f(299));var l=!1,r="",i=td,c=ld,m=rd,S=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.formState!==void 0&&(S=t.formState)),e=ey(n,1,!0,e,t??null,l,r,S,i,c,m,hy),e.context=ty(null),t=e.current,l=lt(),l=Ha(l),r=sl(l),r.callback=null,hl(t,r,l),t=l,e.current.lanes=t,kr(e,t),qt(e),n[nr]=e.current,wf(n),new Ea(e)},Qi.version="19.3.0",Qi}var by;function zv(){if(by)return co.exports;by=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),co.exports=Dv(),co.exports}var Hv=zv();function Uv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var je={},Ta={},Cl={},Ay;function Ii(){if(Ay)return Cl;Ay=1;function a(v){return typeof v>"u"||v===null}function o(v){return typeof v=="object"&&v!==null}function h(v){return Array.isArray(v)?v:a(v)?[]:[v]}function f(v,p){if(p){const b=Object.keys(p);for(let T=0,E=b.length;T<E;T+=1){const g=b[T];v[g]=p[g]}}return v}function s(v,p){let b="";for(let T=0;T<p;T+=1)b+=v;return b}function y(v){return v===0&&Number.NEGATIVE_INFINITY===1/v}return Cl.isNothing=a,Cl.isObject=o,Cl.toArray=h,Cl.repeat=s,Cl.isNegativeZero=y,Cl.extend=f,Cl}var ho,Ny;function Ji(){if(Ny)return ho;Ny=1;function a(h,f){let s="";const y=h.reason||"(unknown reason)";return h.mark?(h.mark.name&&(s+='in "'+h.mark.name+'" '),s+="("+(h.mark.line+1)+":"+(h.mark.column+1)+")",!f&&h.mark.snippet&&(s+=`

`+h.mark.snippet),y+" "+s):y}function o(h,f){Error.call(this),this.name="YAMLException",this.reason=h,this.mark=f,this.message=a(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return o.prototype=Object.create(Error.prototype),o.prototype.constructor=o,o.prototype.toString=function(f){return this.name+": "+a(this,f)},ho=o,ho}var mo,Oy;function wv(){if(Oy)return mo;Oy=1;const a=Ii();function o(s,y,v,p,b){let T="",E="";const g=Math.floor(b/2)-1;return p-y>g&&(T=" ... ",y=p-g+T.length),v-p>g&&(E=" ...",v=p+g-E.length),{str:T+s.slice(y,v).replace(/\t/g,"→")+E,pos:p-y+T.length}}function h(s,y){return a.repeat(" ",y-s.length)+s}function f(s,y){if(y=Object.create(y||null),!s.buffer)return null;y.maxLength||(y.maxLength=79),typeof y.indent!="number"&&(y.indent=1),typeof y.linesBefore!="number"&&(y.linesBefore=3),typeof y.linesAfter!="number"&&(y.linesAfter=2);const v=/\r?\n|\r|\0/g,p=[0],b=[];let T,E=-1;for(;T=v.exec(s.buffer);)b.push(T.index),p.push(T.index+T[0].length),s.position<=T.index&&E<0&&(E=p.length-2);E<0&&(E=p.length-1);let g="";const x=Math.min(s.line+y.linesAfter,b.length).toString().length,j=y.maxLength-(y.indent+x+3);for(let rn=1;rn<=y.linesBefore&&!(E-rn<0);rn++){const P=o(s.buffer,p[E-rn],b[E-rn],s.position-(p[E]-p[E-rn]),j);g=a.repeat(" ",y.indent)+h((s.line-rn+1).toString(),x)+" | "+P.str+`
`+g}const tn=o(s.buffer,p[E],b[E],s.position,j);g+=a.repeat(" ",y.indent)+h((s.line+1).toString(),x)+" | "+tn.str+`
`,g+=a.repeat("-",y.indent+x+3+tn.pos)+`^
`;for(let rn=1;rn<=y.linesAfter&&!(E+rn>=b.length);rn++){const P=o(s.buffer,p[E+rn],b[E+rn],s.position-(p[E]-p[E+rn]),j);g+=a.repeat(" ",y.indent)+h((s.line+rn+1).toString(),x)+" | "+P.str+`
`}return g.replace(/\n$/,"")}return mo=f,mo}var yo,My;function Ge(){if(My)return yo;My=1;const a=Ji(),o=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],h=["scalar","sequence","mapping"];function f(y){const v={};return y!==null&&Object.keys(y).forEach(function(p){y[p].forEach(function(b){v[String(b)]=p})}),v}function s(y,v){if(v=v||{},Object.keys(v).forEach(function(p){if(o.indexOf(p)===-1)throw new a('Unknown option "'+p+'" is met in definition of "'+y+'" YAML type.')}),this.options=v,this.tag=y,this.kind=v.kind||null,this.resolve=v.resolve||function(){return!0},this.construct=v.construct||function(p){return p},this.instanceOf=v.instanceOf||null,this.predicate=v.predicate||null,this.represent=v.represent||null,this.representName=v.representName||null,this.defaultStyle=v.defaultStyle||null,this.multi=v.multi||!1,this.styleAliases=f(v.styleAliases||null),h.indexOf(this.kind)===-1)throw new a('Unknown kind "'+this.kind+'" is specified for "'+y+'" YAML type.')}return yo=s,yo}var go,_y;function l0(){if(_y)return go;_y=1;const a=Ji(),o=Ge();function h(y,v){const p=[];return y[v].forEach(function(b){let T=p.length;p.forEach(function(E,g){E.tag===b.tag&&E.kind===b.kind&&E.multi===b.multi&&(T=g)}),p[T]=b}),p}function f(){const y={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function v(p){p.multi?(y.multi[p.kind].push(p),y.multi.fallback.push(p)):y[p.kind][p.tag]=y.fallback[p.tag]=p}for(let p=0,b=arguments.length;p<b;p+=1)arguments[p].forEach(v);return y}function s(y){return this.extend(y)}return s.prototype.extend=function(v){let p=[],b=[];if(v instanceof o)b.push(v);else if(Array.isArray(v))b=b.concat(v);else if(v&&(Array.isArray(v.implicit)||Array.isArray(v.explicit)))v.implicit&&(p=p.concat(v.implicit)),v.explicit&&(b=b.concat(v.explicit));else throw new a("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");p.forEach(function(E){if(!(E instanceof o))throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(E.loadKind&&E.loadKind!=="scalar")throw new a("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(E.multi)throw new a("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),b.forEach(function(E){if(!(E instanceof o))throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const T=Object.create(s.prototype);return T.implicit=(this.implicit||[]).concat(p),T.explicit=(this.explicit||[]).concat(b),T.compiledImplicit=h(T,"implicit"),T.compiledExplicit=h(T,"explicit"),T.compiledTypeMap=f(T.compiledImplicit,T.compiledExplicit),T},go=s,go}var vo,Cy;function r0(){if(Cy)return vo;Cy=1;const a=Ge();return vo=new a("tag:yaml.org,2002:str",{kind:"scalar",construct:function(o){return o!==null?o:""}}),vo}var po,Ry;function i0(){if(Ry)return po;Ry=1;const a=Ge();return po=new a("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(o){return o!==null?o:[]}}),po}var Eo,Dy;function u0(){if(Dy)return Eo;Dy=1;const a=Ge();return Eo=new a("tag:yaml.org,2002:map",{kind:"mapping",construct:function(o){return o!==null?o:{}}}),Eo}var So,zy;function a0(){if(zy)return So;zy=1;const a=l0();return So=new a({explicit:[r0(),i0(),u0()]}),So}var To,Hy;function c0(){if(Hy)return To;Hy=1;const a=Ge();function o(s){if(s===null)return!0;const y=s.length;return y===1&&s==="~"||y===4&&(s==="null"||s==="Null"||s==="NULL")}function h(){return null}function f(s){return s===null}return To=new a("tag:yaml.org,2002:null",{kind:"scalar",resolve:o,construct:h,predicate:f,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),To}var xo,Uy;function f0(){if(Uy)return xo;Uy=1;const a=Ge();function o(s){if(s===null)return!1;const y=s.length;return y===4&&(s==="true"||s==="True"||s==="TRUE")||y===5&&(s==="false"||s==="False"||s==="FALSE")}function h(s){return s==="true"||s==="True"||s==="TRUE"}function f(s){return Object.prototype.toString.call(s)==="[object Boolean]"}return xo=new a("tag:yaml.org,2002:bool",{kind:"scalar",resolve:o,construct:h,predicate:f,represent:{lowercase:function(s){return s?"true":"false"},uppercase:function(s){return s?"TRUE":"FALSE"},camelcase:function(s){return s?"True":"False"}},defaultStyle:"lowercase"}),xo}var bo,wy;function o0(){if(wy)return bo;wy=1;const a=Ii(),o=Ge();function h(T){return T>=48&&T<=57||T>=65&&T<=70||T>=97&&T<=102}function f(T){return T>=48&&T<=55}function s(T){return T>=48&&T<=57}function y(T){if(T===null)return!1;const E=T.length;let g=0,x=!1;if(!E)return!1;let j=T[g];if((j==="-"||j==="+")&&(j=T[++g]),j==="0"){if(g+1===E)return!0;if(j=T[++g],j==="b"){for(g++;g<E;g++){if(j=T[g],j!=="0"&&j!=="1")return!1;x=!0}return x&&isFinite(v(T))}if(j==="x"){for(g++;g<E;g++){if(!h(T.charCodeAt(g)))return!1;x=!0}return x&&isFinite(v(T))}if(j==="o"){for(g++;g<E;g++){if(!f(T.charCodeAt(g)))return!1;x=!0}return x&&isFinite(v(T))}}for(;g<E;g++){if(!s(T.charCodeAt(g)))return!1;x=!0}return x?isFinite(v(T)):!1}function v(T){let E=T,g=1,x=E[0];if((x==="-"||x==="+")&&(x==="-"&&(g=-1),E=E.slice(1),x=E[0]),E==="0")return 0;if(x==="0"){if(E[1]==="b")return g*parseInt(E.slice(2),2);if(E[1]==="x")return g*parseInt(E.slice(2),16);if(E[1]==="o")return g*parseInt(E.slice(2),8)}return g*parseInt(E,10)}function p(T){return v(T)}function b(T){return Object.prototype.toString.call(T)==="[object Number]"&&T%1===0&&!a.isNegativeZero(T)}return bo=new o("tag:yaml.org,2002:int",{kind:"scalar",resolve:y,construct:p,predicate:b,represent:{binary:function(T){return T>=0?"0b"+T.toString(2):"-0b"+T.toString(2).slice(1)},octal:function(T){return T>=0?"0o"+T.toString(8):"-0o"+T.toString(8).slice(1)},decimal:function(T){return T.toString(10)},hexadecimal:function(T){return T>=0?"0x"+T.toString(16).toUpperCase():"-0x"+T.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),bo}var Ao,jy;function s0(){if(jy)return Ao;jy=1;const a=Ii(),o=Ge(),h=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),f=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function s(T){return T===null||!h.test(T)?!1:isFinite(parseFloat(T,10))?!0:f.test(T)}function y(T){let E=T.toLowerCase();const g=E[0]==="-"?-1:1;return"+-".indexOf(E[0])>=0&&(E=E.slice(1)),E===".inf"?g===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:E===".nan"?NaN:g*parseFloat(E,10)}const v=/^[-+]?[0-9]+e/;function p(T,E){if(isNaN(T))switch(E){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===T)switch(E){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===T)switch(E){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(a.isNegativeZero(T))return"-0.0";const g=T.toString(10);return v.test(g)?g.replace("e",".e"):g}function b(T){return Object.prototype.toString.call(T)==="[object Number]"&&(T%1!==0||a.isNegativeZero(T))}return Ao=new o("tag:yaml.org,2002:float",{kind:"scalar",resolve:s,construct:y,predicate:b,represent:p,defaultStyle:"lowercase"}),Ao}var No,qy;function h0(){return qy||(qy=1,No=a0().extend({implicit:[c0(),f0(),o0(),s0()]})),No}var Oo,By;function d0(){return By||(By=1,Oo=h0()),Oo}var Mo,Yy;function m0(){if(Yy)return Mo;Yy=1;const a=Ge(),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),h=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function f(v){return v===null?!1:o.exec(v)!==null||h.exec(v)!==null}function s(v){let p=0,b=null,T=o.exec(v);if(T===null&&(T=h.exec(v)),T===null)throw new Error("Date resolve error");const E=+T[1],g=+T[2]-1,x=+T[3];if(!T[4])return new Date(Date.UTC(E,g,x));const j=+T[4],tn=+T[5],rn=+T[6];if(T[7]){for(p=T[7].slice(0,3);p.length<3;)p+="0";p=+p}if(T[9]){const qn=+T[10],$=+(T[11]||0);b=(qn*60+$)*6e4,T[9]==="-"&&(b=-b)}const P=new Date(Date.UTC(E,g,x,j,tn,rn,p));return b&&P.setTime(P.getTime()-b),P}function y(v){return v.toISOString()}return Mo=new a("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:f,construct:s,instanceOf:Date,represent:y}),Mo}var _o,Ly;function y0(){if(Ly)return _o;Ly=1;const a=Ge();function o(h){return h==="<<"||h===null}return _o=new a("tag:yaml.org,2002:merge",{kind:"scalar",resolve:o}),_o}var Co,Gy;function g0(){if(Gy)return Co;Gy=1;const a=Ge(),o=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function h(v){if(v===null)return!1;let p=0;const b=v.length,T=o;for(let E=0;E<b;E++){const g=T.indexOf(v.charAt(E));if(!(g>64)){if(g<0)return!1;p+=6}}return p%8===0}function f(v){const p=v.replace(/[\r\n=]/g,""),b=p.length,T=o;let E=0;const g=[];for(let j=0;j<b;j++)j%4===0&&j&&(g.push(E>>16&255),g.push(E>>8&255),g.push(E&255)),E=E<<6|T.indexOf(p.charAt(j));const x=b%4*6;return x===0?(g.push(E>>16&255),g.push(E>>8&255),g.push(E&255)):x===18?(g.push(E>>10&255),g.push(E>>2&255)):x===12&&g.push(E>>4&255),new Uint8Array(g)}function s(v){let p="",b=0;const T=v.length,E=o;for(let x=0;x<T;x++)x%3===0&&x&&(p+=E[b>>18&63],p+=E[b>>12&63],p+=E[b>>6&63],p+=E[b&63]),b=(b<<8)+v[x];const g=T%3;return g===0?(p+=E[b>>18&63],p+=E[b>>12&63],p+=E[b>>6&63],p+=E[b&63]):g===2?(p+=E[b>>10&63],p+=E[b>>4&63],p+=E[b<<2&63],p+=E[64]):g===1&&(p+=E[b>>2&63],p+=E[b<<4&63],p+=E[64],p+=E[64]),p}function y(v){return Object.prototype.toString.call(v)==="[object Uint8Array]"}return Co=new a("tag:yaml.org,2002:binary",{kind:"scalar",resolve:h,construct:f,predicate:y,represent:s}),Co}var Ro,Qy;function v0(){if(Qy)return Ro;Qy=1;const a=Ge(),o=Object.prototype.hasOwnProperty,h=Object.prototype.toString;function f(y){if(y===null)return!0;const v={},p=y;for(let b=0,T=p.length;b<T;b+=1){const E=p[b];let g=!1;if(h.call(E)!=="[object Object]")return!1;let x;for(x in E)if(o.call(E,x))if(!g)g=!0;else return!1;if(!g||o.call(v,x))return!1;Object.defineProperty(v,x,{value:!0})}return!0}function s(y){return y!==null?y:[]}return Ro=new a("tag:yaml.org,2002:omap",{kind:"sequence",resolve:f,construct:s}),Ro}var Do,Xy;function p0(){if(Xy)return Do;Xy=1;const a=Ge(),o=Object.prototype.toString;function h(s){if(s===null)return!0;const y=s,v=new Array(y.length);for(let p=0,b=y.length;p<b;p+=1){const T=y[p];if(o.call(T)!=="[object Object]")return!1;const E=Object.keys(T);if(E.length!==1)return!1;v[p]=[E[0],T[E[0]]]}return!0}function f(s){if(s===null)return[];const y=s,v=new Array(y.length);for(let p=0,b=y.length;p<b;p+=1){const T=y[p],E=Object.keys(T);v[p]=[E[0],T[E[0]]]}return v}return Do=new a("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:h,construct:f}),Do}var zo,Vy;function E0(){if(Vy)return zo;Vy=1;const a=Ge(),o=Object.prototype.hasOwnProperty;function h(s){if(s===null)return!0;const y=s;for(const v in y)if(o.call(y,v)&&y[v]!==null)return!1;return!0}function f(s){return s!==null?s:{}}return zo=new a("tag:yaml.org,2002:set",{kind:"mapping",resolve:h,construct:f}),zo}var Ho,Ky;function Lo(){return Ky||(Ky=1,Ho=d0().extend({implicit:[m0(),y0()],explicit:[g0(),v0(),p0(),E0()]})),Ho}var Zy;function jv(){if(Zy)return Ta;Zy=1;const a=Ii(),o=Ji(),h=wv(),f=Lo(),s=Object.prototype.hasOwnProperty,y=1,v=2,p=3,b=4,T=1,E=2,g=3,x=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,j=/[\x85\u2028\u2029]/,tn=/[,\[\]{}]/,rn=/^(?:!|!!|![0-9A-Za-z-]+!)$/,P=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function qn(u){return Object.prototype.toString.call(u)}function $(u){return u===10||u===13}function vn(u){return u===9||u===32}function dn(u){return u===9||u===32||u===10||u===13}function Tn(u){return u===44||u===91||u===93||u===123||u===125}function Zn(u){if(u>=48&&u<=57)return u-48;const N=u|32;return N>=97&&N<=102?N-97+10:-1}function pn(u){return u===120?2:u===117?4:u===85?8:0}function Mn(u){return u>=48&&u<=57?u-48:-1}function ee(u){switch(u){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function Un(u){return u<=65535?String.fromCharCode(u):String.fromCharCode((u-65536>>10)+55296,(u-65536&1023)+56320)}function nn(u,N,Y){N==="__proto__"?Object.defineProperty(u,N,{configurable:!0,enumerable:!0,writable:!0,value:Y}):u[N]=Y}const W=new Array(256),Rn=new Array(256);for(let u=0;u<256;u++)W[u]=ee(u)?1:0,Rn[u]=ee(u);function An(u,N){this.input=u,this.filename=N.filename||null,this.schema=N.schema||f,this.onWarning=N.onWarning||null,this.legacy=N.legacy||!1,this.json=N.json||!1,this.listener=N.listener||null,this.maxDepth=typeof N.maxDepth=="number"?N.maxDepth:100,this.maxTotalMergeKeys=typeof N.maxTotalMergeKeys=="number"?N.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=u.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function Qn(u,N){const Y={name:u.filename,buffer:u.input.slice(0,-1),position:u.position,line:u.line,column:u.position-u.lineStart};return Y.snippet=h(Y),new o(N,Y)}function U(u,N){throw Qn(u,N)}function on(u,N){u.onWarning&&u.onWarning.call(null,Qn(u,N))}function sn(u,N,Y){const L=u.anchorMapTransactions;if(L.length!==0){const B=L[L.length-1];s.call(B,N)||(B[N]={existed:s.call(u.anchorMap,N),value:u.anchorMap[N]})}u.anchorMap[N]=Y}function xn(u){u.anchorMapTransactions.push(Object.create(null))}function Cn(u){const N=u.anchorMapTransactions.pop(),Y=u.anchorMapTransactions;if(Y.length===0)return;const L=Y[Y.length-1],B=Object.keys(N);for(let d=0,D=B.length;d<D;d+=1){const q=B[d];s.call(L,q)||(L[q]=N[q])}}function Sn(u){const N=u.anchorMapTransactions.pop(),Y=Object.keys(N);for(let L=Y.length-1;L>=0;L-=1){const B=N[Y[L]];B.existed?u.anchorMap[Y[L]]=B.value:delete u.anchorMap[Y[L]]}}function oe(u){return{position:u.position,line:u.line,lineStart:u.lineStart,lineIndent:u.lineIndent,firstTabInLine:u.firstTabInLine,tag:u.tag,anchor:u.anchor,kind:u.kind,result:u.result}}function Vn(u,N){u.position=N.position,u.line=N.line,u.lineStart=N.lineStart,u.lineIndent=N.lineIndent,u.firstTabInLine=N.firstTabInLine,u.tag=N.tag,u.anchor=N.anchor,u.kind=N.kind,u.result=N.result}const O={YAML:function(N,Y,L){N.version!==null&&U(N,"duplication of %YAML directive"),L.length!==1&&U(N,"YAML directive accepts exactly one argument");const B=/^([0-9]+)\.([0-9]+)$/.exec(L[0]);B===null&&U(N,"ill-formed argument of the YAML directive");const d=parseInt(B[1],10),D=parseInt(B[2],10);d!==1&&U(N,"unacceptable YAML version of the document"),N.version=L[0],N.checkLineBreaks=D<2,D!==1&&D!==2&&on(N,"unsupported YAML version of the document")},TAG:function(N,Y,L){let B;L.length!==2&&U(N,"TAG directive accepts exactly two arguments");const d=L[0];B=L[1],rn.test(d)||U(N,"ill-formed tag handle (first argument) of the TAG directive"),s.call(N.tagMap,d)&&U(N,'there is a previously declared suffix for "'+d+'" tag handle'),P.test(B)||U(N,"ill-formed tag prefix (second argument) of the TAG directive");try{B=decodeURIComponent(B)}catch{U(N,"tag prefix is malformed: "+B)}N.tagMap[d]=B}};function V(u,N,Y,L){if(N<Y){const B=u.input.slice(N,Y);if(L)for(let d=0,D=B.length;d<D;d+=1){const q=B.charCodeAt(d);q===9||q>=32&&q<=1114111||U(u,"expected valid JSON character")}else x.test(B)&&U(u,"the stream contains non-printable characters");u.result+=B}}function un(u){u.totalMergeKeys++,u.maxTotalMergeKeys!==-1&&u.totalMergeKeys>u.maxTotalMergeKeys&&U(u,"merge keys exceeded maxTotalMergeKeys ("+u.maxTotalMergeKeys+")")}function cn(u,N,Y,L){a.isObject(Y)||U(u,"cannot merge mappings; the provided source object is unacceptable"),un(u);const B=Object.keys(Y);for(let d=0,D=B.length;d<D;d+=1){const q=B[d];un(u),s.call(N,q)||(nn(N,q,Y[q]),L[q]=!0)}}function Nn(u,N,Y,L,B,d,D,q,Z){if(Array.isArray(B)){B=Array.prototype.slice.call(B);for(let I=0,K=B.length;I<K;I+=1)Array.isArray(B[I])&&U(u,"nested arrays are not supported inside keys"),typeof B=="object"&&qn(B[I])==="[object Object]"&&(B[I]="[object Object]")}if(typeof B=="object"&&qn(B)==="[object Object]"&&(B="[object Object]"),B=String(B),N===null&&(N={}),L==="tag:yaml.org,2002:merge")if(Array.isArray(d)){d.length>100&&U(u,"abnormal merge sequence size");for(let I=0,K=d.length;I<K;I+=1)cn(u,N,d[I],Y)}else cn(u,N,d,Y);else!u.json&&!s.call(Y,B)&&s.call(N,B)&&(u.line=D||u.line,u.lineStart=q||u.lineStart,u.position=Z||u.position,U(u,"duplicated mapping key")),nn(N,B,d),delete Y[B];return N}function Dn(u){const N=u.input.charCodeAt(u.position);N===10?u.position++:N===13?(u.position++,u.input.charCodeAt(u.position)===10&&u.position++):U(u,"a line break is expected"),u.line+=1,u.lineStart=u.position,u.firstTabInLine=-1}function mn(u,N,Y){let L=0,B=u.input.charCodeAt(u.position);for(;B!==0;){for(;vn(B);)B===9&&u.firstTabInLine===-1&&(u.firstTabInLine=u.position),B=u.input.charCodeAt(++u.position);if(N&&B===35)do B=u.input.charCodeAt(++u.position);while(B!==10&&B!==13&&B!==0);if($(B))for(Dn(u),B=u.input.charCodeAt(u.position),L++,u.lineIndent=0;B===32;)u.lineIndent++,B=u.input.charCodeAt(++u.position);else break}return Y!==-1&&L!==0&&u.lineIndent<Y&&on(u,"deficient indentation"),L}function F(u){let N=u.position,Y=u.input.charCodeAt(N);return!!((Y===45||Y===46)&&Y===u.input.charCodeAt(N+1)&&Y===u.input.charCodeAt(N+2)&&(N+=3,Y=u.input.charCodeAt(N),Y===0||dn(Y)))}function hn(u,N){N===1?u.result+=" ":N>1&&(u.result+=a.repeat(`
`,N-1))}function He(u,N,Y){let L,B,d,D,q,Z;const I=u.kind,K=u.result;let Q=u.input.charCodeAt(u.position);if(dn(Q)||Tn(Q)||Q===35||Q===38||Q===42||Q===33||Q===124||Q===62||Q===39||Q===34||Q===37||Q===64||Q===96)return!1;if(Q===63||Q===45){const J=u.input.charCodeAt(u.position+1);if(dn(J)||Y&&Tn(J))return!1}for(u.kind="scalar",u.result="",L=B=u.position,d=!1;Q!==0;){if(Q===58){const J=u.input.charCodeAt(u.position+1);if(dn(J)||Y&&Tn(J))break}else if(Q===35){const J=u.input.charCodeAt(u.position-1);if(dn(J))break}else{if(u.position===u.lineStart&&F(u)||Y&&Tn(Q))break;if($(Q))if(D=u.line,q=u.lineStart,Z=u.lineIndent,mn(u,!1,-1),u.lineIndent>=N){d=!0,Q=u.input.charCodeAt(u.position);continue}else{u.position=B,u.line=D,u.lineStart=q,u.lineIndent=Z;break}}d&&(V(u,L,B,!1),hn(u,u.line-D),L=B=u.position,d=!1),vn(Q)||(B=u.position+1),Q=u.input.charCodeAt(++u.position)}return V(u,L,B,!1),u.result?!0:(u.kind=I,u.result=K,!1)}function it(u,N){let Y,L,B=u.input.charCodeAt(u.position);if(B!==39)return!1;for(u.kind="scalar",u.result="",u.position++,Y=L=u.position;(B=u.input.charCodeAt(u.position))!==0;)if(B===39)if(V(u,Y,u.position,!0),B=u.input.charCodeAt(++u.position),B===39)Y=u.position,u.position++,L=u.position;else return!0;else $(B)?(V(u,Y,L,!0),hn(u,mn(u,!1,N)),Y=L=u.position):u.position===u.lineStart&&F(u)?U(u,"unexpected end of the document within a single quoted scalar"):(u.position++,vn(B)||(L=u.position));U(u,"unexpected end of the stream within a single quoted scalar")}function Ue(u,N){let Y,L,B,d=u.input.charCodeAt(u.position);if(d!==34)return!1;for(u.kind="scalar",u.result="",u.position++,Y=L=u.position;(d=u.input.charCodeAt(u.position))!==0;){if(d===34)return V(u,Y,u.position,!0),u.position++,!0;if(d===92){if(V(u,Y,u.position,!0),d=u.input.charCodeAt(++u.position),$(d))mn(u,!1,N);else if(d<256&&W[d])u.result+=Rn[d],u.position++;else if((B=pn(d))>0){let D=B,q=0;for(;D>0;D--)d=u.input.charCodeAt(++u.position),(B=Zn(d))>=0?q=(q<<4)+B:U(u,"expected hexadecimal character");u.result+=Un(q),u.position++}else U(u,"unknown escape sequence");Y=L=u.position}else $(d)?(V(u,Y,L,!0),hn(u,mn(u,!1,N)),Y=L=u.position):u.position===u.lineStart&&F(u)?U(u,"unexpected end of the document within a double quoted scalar"):(u.position++,vn(d)||(L=u.position))}U(u,"unexpected end of the stream within a double quoted scalar")}function Fn(u,N){let Y=!0,L,B,d;const D=u.tag;let q;const Z=u.anchor;let I,K,Q,J;const an=Object.create(null);let gn,En,On,wn=u.input.charCodeAt(u.position);if(wn===91)I=93,J=!1,q=[];else if(wn===123)I=125,J=!0,q={};else return!1;for(u.anchor!==null&&sn(u,u.anchor,q),wn=u.input.charCodeAt(++u.position);wn!==0;){if(mn(u,!0,N),wn=u.input.charCodeAt(u.position),wn===I)return u.position++,u.tag=D,u.anchor=Z,u.kind=J?"mapping":"sequence",u.result=q,!0;if(Y?wn===44&&U(u,"expected the node content, but found ','"):U(u,"missed comma between flow collection entries"),En=gn=On=null,K=Q=!1,wn===63){const Ot=u.input.charCodeAt(u.position+1);dn(Ot)&&(K=Q=!0,u.position++,mn(u,!0,N))}L=u.line,B=u.lineStart,d=u.position,pe(u,N,y,!1,!0),En=u.tag,gn=u.result,mn(u,!0,N),wn=u.input.charCodeAt(u.position),(Q||u.line===L)&&wn===58&&(K=!0,wn=u.input.charCodeAt(++u.position),mn(u,!0,N),pe(u,N,y,!1,!0),On=u.result),J?Nn(u,q,an,En,gn,On,L,B,d):K?q.push(Nn(u,null,an,En,gn,On,L,B,d)):q.push(gn),mn(u,!0,N),wn=u.input.charCodeAt(u.position),wn===44?(Y=!0,wn=u.input.charCodeAt(++u.position)):Y=!1}U(u,"unexpected end of the stream within a flow collection")}function $n(u,N){let Y,L=T,B=!1,d=!1,D=N,q=0,Z=!1,I,K=u.input.charCodeAt(u.position);if(K===124)Y=!1;else if(K===62)Y=!0;else return!1;for(u.kind="scalar",u.result="";K!==0;)if(K=u.input.charCodeAt(++u.position),K===43||K===45)T===L?L=K===43?g:E:U(u,"repeat of a chomping mode identifier");else if((I=Mn(K))>=0)I===0?U(u,"bad explicit indentation width of a block scalar; it cannot be less than one"):d?U(u,"repeat of an indentation width identifier"):(D=N+I-1,d=!0);else break;if(vn(K)){do K=u.input.charCodeAt(++u.position);while(vn(K));if(K===35)do K=u.input.charCodeAt(++u.position);while(!$(K)&&K!==0)}for(;K!==0;){for(Dn(u),u.lineIndent=0,K=u.input.charCodeAt(u.position);(!d||u.lineIndent<D)&&K===32;)u.lineIndent++,K=u.input.charCodeAt(++u.position);if(!d&&u.lineIndent>D&&(D=u.lineIndent),$(K)){q++;continue}if(!d&&D===0&&U(u,"missing indentation for block scalar"),u.lineIndent<D){L===g?u.result+=a.repeat(`
`,B?1+q:q):L===T&&B&&(u.result+=`
`);break}Y?vn(K)?(Z=!0,u.result+=a.repeat(`
`,B?1+q:q)):Z?(Z=!1,u.result+=a.repeat(`
`,q+1)):q===0?B&&(u.result+=" "):u.result+=a.repeat(`
`,q):u.result+=a.repeat(`
`,B?1+q:q),B=!0,d=!0,q=0;const Q=u.position;for(;!$(K)&&K!==0;)K=u.input.charCodeAt(++u.position);V(u,Q,u.position,!1)}return!0}function Kn(u,N){const Y=u.tag,L=u.anchor,B=[];let d=!1;if(u.firstTabInLine!==-1)return!1;u.anchor!==null&&sn(u,u.anchor,B);let D=u.input.charCodeAt(u.position);for(;D!==0&&(u.firstTabInLine!==-1&&(u.position=u.firstTabInLine,U(u,"tab characters must not be used in indentation")),D===45);){const q=u.input.charCodeAt(u.position+1);if(!dn(q))break;if(d=!0,u.position++,mn(u,!0,-1)&&u.lineIndent<=N){B.push(null),D=u.input.charCodeAt(u.position);continue}const Z=u.line;if(pe(u,N,p,!1,!0),B.push(u.result),mn(u,!0,-1),D=u.input.charCodeAt(u.position),(u.line===Z||u.lineIndent>N)&&D!==0)U(u,"bad indentation of a sequence entry");else if(u.lineIndent<N)break}return d?(u.tag=Y,u.anchor=L,u.kind="sequence",u.result=B,!0):!1}function ue(u,N,Y){let L,B,d,D;const q=u.tag,Z=u.anchor,I={},K=Object.create(null);let Q=null,J=null,an=null,gn=!1,En=!1;if(u.firstTabInLine!==-1)return!1;u.anchor!==null&&sn(u,u.anchor,I);let On=u.input.charCodeAt(u.position);for(;On!==0;){!gn&&u.firstTabInLine!==-1&&(u.position=u.firstTabInLine,U(u,"tab characters must not be used in indentation"));const wn=u.input.charCodeAt(u.position+1),Ot=u.line;if((On===63||On===58)&&dn(wn))On===63?(gn&&(Nn(u,I,K,Q,J,null,B,d,D),Q=J=an=null),En=!0,gn=!0,L=!0):gn?(gn=!1,L=!0):U(u,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),u.position+=1,On=wn;else{if(B=u.line,d=u.lineStart,D=u.position,!pe(u,Y,v,!1,!0))break;if(u.line===Ot){for(On=u.input.charCodeAt(u.position);vn(On);)On=u.input.charCodeAt(++u.position);if(On===58)On=u.input.charCodeAt(++u.position),dn(On)||U(u,"a whitespace character is expected after the key-value separator within a block mapping"),gn&&(Nn(u,I,K,Q,J,null,B,d,D),Q=J=an=null),En=!0,gn=!1,L=!1,Q=u.tag,J=u.result;else if(En)U(u,"can not read an implicit mapping pair; a colon is missed");else return u.tag=q,u.anchor=Z,!0}else if(En)U(u,"can not read a block mapping entry; a multiline key may not be an implicit key");else return u.tag=q,u.anchor=Z,!0}if((u.line===Ot||u.lineIndent>N)&&(gn&&(B=u.line,d=u.lineStart,D=u.position),pe(u,N,b,!0,L)&&(gn?J=u.result:an=u.result),gn||(Nn(u,I,K,Q,J,an,B,d,D),Q=J=an=null),mn(u,!0,-1),On=u.input.charCodeAt(u.position)),(u.line===Ot||u.lineIndent>N)&&On!==0)U(u,"bad indentation of a mapping entry");else if(u.lineIndent<N)break}return gn&&Nn(u,I,K,Q,J,null,B,d,D),En&&(u.tag=q,u.anchor=Z,u.kind="mapping",u.result=I),En}function $e(u){let N=!1,Y=!1,L,B,d=u.input.charCodeAt(u.position);if(d!==33)return!1;u.tag!==null&&U(u,"duplication of a tag property"),d=u.input.charCodeAt(++u.position),d===60?(N=!0,d=u.input.charCodeAt(++u.position)):d===33?(Y=!0,L="!!",d=u.input.charCodeAt(++u.position)):L="!";let D=u.position;if(N){do d=u.input.charCodeAt(++u.position);while(d!==0&&d!==62);u.position<u.length?(B=u.input.slice(D,u.position),d=u.input.charCodeAt(++u.position)):U(u,"unexpected end of the stream within a verbatim tag")}else{for(;d!==0&&!dn(d);)d===33&&(Y?U(u,"tag suffix cannot contain exclamation marks"):(L=u.input.slice(D-1,u.position+1),rn.test(L)||U(u,"named tag handle cannot contain such characters"),Y=!0,D=u.position+1)),d=u.input.charCodeAt(++u.position);B=u.input.slice(D,u.position),tn.test(B)&&U(u,"tag suffix cannot contain flow indicator characters")}B&&!P.test(B)&&U(u,"tag name cannot contain such characters: "+B);try{B=decodeURIComponent(B)}catch{U(u,"tag name is malformed: "+B)}return N?u.tag=B:s.call(u.tagMap,L)?u.tag=u.tagMap[L]+B:L==="!"?u.tag="!"+B:L==="!!"?u.tag="tag:yaml.org,2002:"+B:U(u,'undeclared tag handle "'+L+'"'),!0}function Te(u){let N=u.input.charCodeAt(u.position);if(N!==38)return!1;u.anchor!==null&&U(u,"duplication of an anchor property"),N=u.input.charCodeAt(++u.position);const Y=u.position;for(;N!==0&&!dn(N)&&!Tn(N);)N=u.input.charCodeAt(++u.position);return u.position===Y&&U(u,"name of an anchor node must contain at least one character"),u.anchor=u.input.slice(Y,u.position),!0}function yt(u){let N=u.input.charCodeAt(u.position);if(N!==42)return!1;N=u.input.charCodeAt(++u.position);const Y=u.position;for(;N!==0&&!dn(N)&&!Tn(N);)N=u.input.charCodeAt(++u.position);u.position===Y&&U(u,"name of an alias node must contain at least one character");const L=u.input.slice(Y,u.position);return s.call(u.anchorMap,L)||U(u,'unidentified alias "'+L+'"'),u.result=u.anchorMap[L],mn(u,!0,-1),!0}function gt(u,N,Y,L){const B=oe(u);return xn(u),Vn(u,N),u.tag=null,u.anchor=null,u.kind=null,u.result=null,ue(u,Y,L)&&u.kind==="mapping"?(Cn(u),!0):(Sn(u),Vn(u,B),!1)}function pe(u,N,Y,L,B){let d,D,q=1,Z=!1,I=!1,K=null,Q,J,an;u.depth>=u.maxDepth&&U(u,"nesting exceeded maxDepth ("+u.maxDepth+")"),u.depth+=1,u.listener!==null&&u.listener("open",u),u.tag=null,u.anchor=null,u.kind=null,u.result=null;const gn=d=D=b===Y||p===Y;if(L&&mn(u,!0,-1)&&(Z=!0,u.lineIndent>N?q=1:u.lineIndent===N?q=0:u.lineIndent<N&&(q=-1)),q===1)for(;;){const En=u.input.charCodeAt(u.position),On=oe(u);if(Z&&(En===33&&u.tag!==null||En===38&&u.anchor!==null)||!$e(u)&&!Te(u))break;K===null&&(K=On),mn(u,!0,-1)?(Z=!0,D=gn,u.lineIndent>N?q=1:u.lineIndent===N?q=0:u.lineIndent<N&&(q=-1)):D=!1}if(D&&(D=Z||B),q===1||b===Y)if(y===Y||v===Y?J=N:J=N+1,an=u.position-u.lineStart,q===1)if(D&&(Kn(u,an)||ue(u,an,J))||Fn(u,J))I=!0;else{const En=u.input.charCodeAt(u.position);K!==null&&gn&&!D&&En!==124&&En!==62&&gt(u,K,K.position-K.lineStart,J)||d&&$n(u,J)||it(u,J)||Ue(u,J)?I=!0:yt(u)?(I=!0,(u.tag!==null||u.anchor!==null)&&U(u,"alias node should not have any properties")):He(u,J,y===Y)&&(I=!0,u.tag===null&&(u.tag="?")),u.anchor!==null&&sn(u,u.anchor,u.result)}else q===0&&(I=D&&Kn(u,an));if(u.tag===null)u.anchor!==null&&sn(u,u.anchor,u.result);else if(u.tag==="?"){u.result!==null&&u.kind!=="scalar"&&U(u,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+u.kind+'"');for(let En=0,On=u.implicitTypes.length;En<On;En+=1)if(Q=u.implicitTypes[En],Q.resolve(u.result)){u.result=Q.construct(u.result),u.tag=Q.tag,u.anchor!==null&&sn(u,u.anchor,u.result);break}}else if(u.tag!=="!"){if(s.call(u.typeMap[u.kind||"fallback"],u.tag))Q=u.typeMap[u.kind||"fallback"][u.tag];else{Q=null;const En=u.typeMap.multi[u.kind||"fallback"];for(let On=0,wn=En.length;On<wn;On+=1)if(u.tag.slice(0,En[On].tag.length)===En[On].tag){Q=En[On];break}}Q||U(u,"unknown tag !<"+u.tag+">"),u.result!==null&&Q.kind!==u.kind&&U(u,"unacceptable node kind for !<"+u.tag+'> tag; it should be "'+Q.kind+'", not "'+u.kind+'"'),Q.resolve(u.result,u.tag)?(u.result=Q.construct(u.result,u.tag),u.anchor!==null&&sn(u,u.anchor,u.result)):U(u,"cannot resolve a node with !<"+u.tag+"> explicit tag")}return u.listener!==null&&u.listener("close",u),u.depth-=1,u.tag!==null||u.anchor!==null||I}function Bt(u){const N=u.position;let Y=!1,L;for(u.version=null,u.checkLineBreaks=u.legacy,u.tagMap=Object.create(null),u.anchorMap=Object.create(null);(L=u.input.charCodeAt(u.position))!==0&&(mn(u,!0,-1),L=u.input.charCodeAt(u.position),!(u.lineIndent>0||L!==37));){Y=!0,L=u.input.charCodeAt(++u.position);let B=u.position;for(;L!==0&&!dn(L);)L=u.input.charCodeAt(++u.position);const d=u.input.slice(B,u.position),D=[];for(d.length<1&&U(u,"directive name must not be less than one character in length");L!==0;){for(;vn(L);)L=u.input.charCodeAt(++u.position);if(L===35){do L=u.input.charCodeAt(++u.position);while(L!==0&&!$(L));break}if($(L))break;for(B=u.position;L!==0&&!dn(L);)L=u.input.charCodeAt(++u.position);D.push(u.input.slice(B,u.position))}L!==0&&Dn(u),s.call(O,d)?O[d](u,d,D):on(u,'unknown document directive "'+d+'"')}if(mn(u,!0,-1),u.lineIndent===0&&u.input.charCodeAt(u.position)===45&&u.input.charCodeAt(u.position+1)===45&&u.input.charCodeAt(u.position+2)===45?(u.position+=3,mn(u,!0,-1)):Y&&U(u,"directives end mark is expected"),pe(u,u.lineIndent-1,b,!1,!0),mn(u,!0,-1),u.checkLineBreaks&&j.test(u.input.slice(N,u.position))&&on(u,"non-ASCII line breaks are interpreted as content"),u.documents.push(u.result),u.position===u.lineStart&&F(u)){u.input.charCodeAt(u.position)===46&&(u.position+=3,mn(u,!0,-1));return}u.position<u.length-1&&U(u,"end of the stream or a document separator is expected")}function Qe(u,N){u=String(u),N=N||{},u.length!==0&&(u.charCodeAt(u.length-1)!==10&&u.charCodeAt(u.length-1)!==13&&(u+=`
`),u.charCodeAt(0)===65279&&(u=u.slice(1)));const Y=new An(u,N),L=u.indexOf("\0");for(L!==-1&&(Y.position=L,U(Y,"null byte is not allowed in input")),Y.input+="\0";Y.input.charCodeAt(Y.position)===32;)Y.lineIndent+=1,Y.position+=1;for(;Y.position<Y.length-1;)Bt(Y);return Y.documents}function Nt(u,N,Y){N!==null&&typeof N=="object"&&typeof Y>"u"&&(Y=N,N=null);const L=Qe(u,Y);if(typeof N!="function")return L;for(let B=0,d=L.length;B<d;B+=1)N(L[B])}function Yt(u,N){const Y=Qe(u,N);if(Y.length!==0){if(Y.length===1)return Y[0];throw new o("expected a single document in the stream, but found more")}}return Ta.loadAll=Nt,Ta.load=Yt,Ta}var Uo={},Iy;function qv(){if(Iy)return Uo;Iy=1;const a=Ii(),o=Ji(),h=Lo(),f=Object.prototype.toString,s=Object.prototype.hasOwnProperty,y=65279,v=9,p=10,b=13,T=32,E=33,g=34,x=35,j=37,tn=38,rn=39,P=42,qn=44,$=45,vn=58,dn=61,Tn=62,Zn=63,pn=64,Mn=91,ee=93,Un=96,nn=123,W=124,Rn=125,An={};An[0]="\\0",An[7]="\\a",An[8]="\\b",An[9]="\\t",An[10]="\\n",An[11]="\\v",An[12]="\\f",An[13]="\\r",An[27]="\\e",An[34]='\\"',An[92]="\\\\",An[133]="\\N",An[160]="\\_",An[8232]="\\L",An[8233]="\\P";const Qn=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],U=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function on(d,D){if(D===null)return{};const q={},Z=Object.keys(D);for(let I=0,K=Z.length;I<K;I+=1){let Q=Z[I],J=String(D[Q]);Q.slice(0,2)==="!!"&&(Q="tag:yaml.org,2002:"+Q.slice(2));const an=d.compiledTypeMap.fallback[Q];an&&s.call(an.styleAliases,J)&&(J=an.styleAliases[J]),q[Q]=J}return q}function sn(d){let D,q;const Z=d.toString(16).toUpperCase();if(d<=255)D="x",q=2;else if(d<=65535)D="u",q=4;else if(d<=4294967295)D="U",q=8;else throw new o("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+D+a.repeat("0",q-Z.length)+Z}const xn=1,Cn=2;function Sn(d){this.schema=d.schema||h,this.indent=Math.max(1,d.indent||2),this.noArrayIndent=d.noArrayIndent||!1,this.skipInvalid=d.skipInvalid||!1,this.flowLevel=a.isNothing(d.flowLevel)?-1:d.flowLevel,this.styleMap=on(this.schema,d.styles||null),this.sortKeys=d.sortKeys||!1,this.lineWidth=d.lineWidth||80,this.noRefs=d.noRefs||!1,this.noCompatMode=d.noCompatMode||!1,this.condenseFlow=d.condenseFlow||!1,this.quotingType=d.quotingType==='"'?Cn:xn,this.forceQuotes=d.forceQuotes||!1,this.replacer=typeof d.replacer=="function"?d.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function oe(d,D){const q=a.repeat(" ",D);let Z=0,I="";const K=d.length;for(;Z<K;){let Q;const J=d.indexOf(`
`,Z);J===-1?(Q=d.slice(Z),Z=K):(Q=d.slice(Z,J+1),Z=J+1),Q.length&&Q!==`
`&&(I+=q),I+=Q}return I}function Vn(d,D){return`
`+a.repeat(" ",d.indent*D)}function O(d,D){for(let q=0,Z=d.implicitTypes.length;q<Z;q+=1)if(d.implicitTypes[q].resolve(D))return!0;return!1}function V(d){return d===T||d===v}function un(d){return d>=32&&d<=126||d>=161&&d<=55295&&d!==8232&&d!==8233||d>=57344&&d<=65533&&d!==y||d>=65536&&d<=1114111}function cn(d){return un(d)&&d!==y&&d!==b&&d!==p}function Nn(d,D,q){const Z=cn(d),I=Z&&!V(d);return(q?Z:Z&&d!==qn&&d!==Mn&&d!==ee&&d!==nn&&d!==Rn)&&d!==x&&!(D===vn&&!I)||cn(D)&&!V(D)&&d===x||D===vn&&I}function Dn(d){return un(d)&&d!==y&&!V(d)&&d!==$&&d!==Zn&&d!==vn&&d!==qn&&d!==Mn&&d!==ee&&d!==nn&&d!==Rn&&d!==x&&d!==tn&&d!==P&&d!==E&&d!==W&&d!==dn&&d!==Tn&&d!==rn&&d!==g&&d!==j&&d!==pn&&d!==Un}function mn(d){return!V(d)&&d!==vn}function F(d,D){const q=d.charCodeAt(D);let Z;return q>=55296&&q<=56319&&D+1<d.length&&(Z=d.charCodeAt(D+1),Z>=56320&&Z<=57343)?(q-55296)*1024+Z-56320+65536:q}function hn(d){return/^\n* /.test(d)}const He=1,it=2,Ue=3,Fn=4,$n=5;function Kn(d,D,q,Z,I,K,Q,J){let an,gn=0,En=null,On=!1,wn=!1;const Ot=Z!==-1;let vt=-1,Ee=Dn(F(d,0))&&mn(F(d,d.length-1));if(D||Q)for(an=0;an<d.length;gn>=65536?an+=2:an++){if(gn=F(d,an),!un(gn))return $n;Ee=Ee&&Nn(gn,En,J),En=gn}else{for(an=0;an<d.length;gn>=65536?an+=2:an++){if(gn=F(d,an),gn===p)On=!0,Ot&&(wn=wn||an-vt-1>Z&&d[vt+1]!==" ",vt=an);else if(!un(gn))return $n;Ee=Ee&&Nn(gn,En,J),En=gn}wn=wn||Ot&&an-vt-1>Z&&d[vt+1]!==" "}return!On&&!wn?Ee&&!Q&&!I(d)?He:K===Cn?$n:it:q>9&&hn(d)?$n:Q?K===Cn?$n:it:wn?Fn:Ue}function ue(d,D,q,Z,I){d.dump=(function(){if(D.length===0)return d.quotingType===Cn?'""':"''";if(!d.noCompatMode&&(Qn.indexOf(D)!==-1||U.test(D)))return d.quotingType===Cn?'"'+D+'"':"'"+D+"'";const K=d.indent*Math.max(1,q),Q=d.lineWidth===-1?-1:Math.max(Math.min(d.lineWidth,40),d.lineWidth-K),J=Z||d.flowLevel>-1&&q>=d.flowLevel;function an(gn){return O(d,gn)}switch(Kn(D,J,d.indent,Q,an,d.quotingType,d.forceQuotes&&!Z,I)){case He:return D;case it:return"'"+D.replace(/'/g,"''")+"'";case Ue:return"|"+$e(D,d.indent)+Te(oe(D,K));case Fn:return">"+$e(D,d.indent)+Te(oe(yt(D,Q),K));case $n:return'"'+pe(D)+'"';default:throw new o("impossible error: invalid scalar style")}})()}function $e(d,D){const q=hn(d)?String(D):"",Z=d[d.length-1]===`
`,K=Z&&(d[d.length-2]===`
`||d===`
`)?"+":Z?"":"-";return q+K+`
`}function Te(d){return d[d.length-1]===`
`?d.slice(0,-1):d}function yt(d,D){const q=/(\n+)([^\n]*)/g;let Z=(function(){let J=d.indexOf(`
`);return J=J!==-1?J:d.length,q.lastIndex=J,gt(d.slice(0,J),D)})(),I=d[0]===`
`||d[0]===" ",K,Q;for(;Q=q.exec(d);){const J=Q[1],an=Q[2];K=an[0]===" ",Z+=J+(!I&&!K&&an!==""?`
`:"")+gt(an,D),I=K}return Z}function gt(d,D){if(d===""||d[0]===" ")return d;const q=/ [^ ]/g;let Z,I=0,K,Q=0,J=0,an="";for(;Z=q.exec(d);)J=Z.index,J-I>D&&(K=Q>I?Q:J,an+=`
`+d.slice(I,K),I=K+1),Q=J;return an+=`
`,d.length-I>D&&Q>I?an+=d.slice(I,Q)+`
`+d.slice(Q+1):an+=d.slice(I),an.slice(1)}function pe(d){let D="",q=0;for(let Z=0;Z<d.length;q>=65536?Z+=2:Z++){q=F(d,Z);const I=An[q];!I&&un(q)?(D+=d[Z],q>=65536&&(D+=d[Z+1])):D+=I||sn(q)}return D}function Bt(d,D,q){let Z="";const I=d.tag;for(let K=0,Q=q.length;K<Q;K+=1){let J=q[K];d.replacer&&(J=d.replacer.call(q,String(K),J)),(N(d,D,J,!1,!1)||typeof J>"u"&&N(d,D,null,!1,!1))&&(Z!==""&&(Z+=","+(d.condenseFlow?"":" ")),Z+=d.dump)}d.tag=I,d.dump="["+Z+"]"}function Qe(d,D,q,Z){let I="";const K=d.tag;for(let Q=0,J=q.length;Q<J;Q+=1){let an=q[Q];d.replacer&&(an=d.replacer.call(q,String(Q),an)),(N(d,D+1,an,!0,!0,!1,!0)||typeof an>"u"&&N(d,D+1,null,!0,!0,!1,!0))&&((!Z||I!=="")&&(I+=Vn(d,D)),d.dump&&p===d.dump.charCodeAt(0)?I+="-":I+="- ",I+=d.dump)}d.tag=K,d.dump=I||"[]"}function Nt(d,D,q){let Z="";const I=d.tag,K=Object.keys(q);for(let Q=0,J=K.length;Q<J;Q+=1){let an="";Z!==""&&(an+=", "),d.condenseFlow&&(an+='"');const gn=K[Q];let En=q[gn];d.replacer&&(En=d.replacer.call(q,gn,En)),N(d,D,gn,!1,!1)&&(d.dump.length>1024&&(an+="? "),an+=d.dump+(d.condenseFlow?'"':"")+":"+(d.condenseFlow?"":" "),N(d,D,En,!1,!1)&&(an+=d.dump,Z+=an))}d.tag=I,d.dump="{"+Z+"}"}function Yt(d,D,q,Z){let I="";const K=d.tag,Q=Object.keys(q);if(d.sortKeys===!0)Q.sort();else if(typeof d.sortKeys=="function")Q.sort(d.sortKeys);else if(d.sortKeys)throw new o("sortKeys must be a boolean or a function");for(let J=0,an=Q.length;J<an;J+=1){let gn="";(!Z||I!=="")&&(gn+=Vn(d,D));const En=Q[J];let On=q[En];if(d.replacer&&(On=d.replacer.call(q,En,On)),!N(d,D+1,En,!0,!0,!0))continue;const wn=d.tag!==null&&d.tag!=="?"||d.dump&&d.dump.length>1024;wn&&(d.dump&&p===d.dump.charCodeAt(0)?gn+="?":gn+="? "),gn+=d.dump,wn&&(gn+=Vn(d,D)),N(d,D+1,On,!0,wn)&&(d.dump&&p===d.dump.charCodeAt(0)?gn+=":":gn+=": ",gn+=d.dump,I+=gn)}d.tag=K,d.dump=I||"{}"}function u(d,D,q){const Z=q?d.explicitTypes:d.implicitTypes;for(let I=0,K=Z.length;I<K;I+=1){const Q=Z[I];if((Q.instanceOf||Q.predicate)&&(!Q.instanceOf||typeof D=="object"&&D instanceof Q.instanceOf)&&(!Q.predicate||Q.predicate(D))){if(q?Q.multi&&Q.representName?d.tag=Q.representName(D):d.tag=Q.tag:d.tag="?",Q.represent){const J=d.styleMap[Q.tag]||Q.defaultStyle;let an;if(f.call(Q.represent)==="[object Function]")an=Q.represent(D,J);else if(s.call(Q.represent,J))an=Q.represent[J](D,J);else throw new o("!<"+Q.tag+'> tag resolver accepts not "'+J+'" style');d.dump=an}return!0}}return!1}function N(d,D,q,Z,I,K,Q){d.tag=null,d.dump=q,u(d,q,!1)||u(d,q,!0);const J=f.call(d.dump),an=Z;Z&&(Z=d.flowLevel<0||d.flowLevel>D);const gn=J==="[object Object]"||J==="[object Array]";let En,On;if(gn&&(En=d.duplicates.indexOf(q),On=En!==-1),(d.tag!==null&&d.tag!=="?"||On||d.indent!==2&&D>0)&&(I=!1),On&&d.usedDuplicates[En])d.dump="*ref_"+En;else{if(gn&&On&&!d.usedDuplicates[En]&&(d.usedDuplicates[En]=!0),J==="[object Object]")Z&&Object.keys(d.dump).length!==0?(Yt(d,D,d.dump,I),On&&(d.dump="&ref_"+En+d.dump)):(Nt(d,D,d.dump),On&&(d.dump="&ref_"+En+" "+d.dump));else if(J==="[object Array]")Z&&d.dump.length!==0?(d.noArrayIndent&&!Q&&D>0?Qe(d,D-1,d.dump,I):Qe(d,D,d.dump,I),On&&(d.dump="&ref_"+En+d.dump)):(Bt(d,D,d.dump),On&&(d.dump="&ref_"+En+" "+d.dump));else if(J==="[object String]")d.tag!=="?"&&ue(d,d.dump,D,K,an);else{if(J==="[object Undefined]")return!1;if(d.skipInvalid)return!1;throw new o("unacceptable kind of an object to dump "+J)}if(d.tag!==null&&d.tag!=="?"){let wn=encodeURI(d.tag[0]==="!"?d.tag.slice(1):d.tag).replace(/!/g,"%21");d.tag[0]==="!"?wn="!"+wn:wn.slice(0,18)==="tag:yaml.org,2002:"?wn="!!"+wn.slice(18):wn="!<"+wn+">",d.dump=wn+" "+d.dump}}return!0}function Y(d,D){const q=[],Z=[];L(d,q,Z);const I=Z.length;for(let K=0;K<I;K+=1)D.duplicates.push(q[Z[K]]);D.usedDuplicates=new Array(I)}function L(d,D,q){if(d!==null&&typeof d=="object"){const Z=D.indexOf(d);if(Z!==-1)q.indexOf(Z)===-1&&q.push(Z);else if(D.push(d),Array.isArray(d))for(let I=0,K=d.length;I<K;I+=1)L(d[I],D,q);else{const I=Object.keys(d);for(let K=0,Q=I.length;K<Q;K+=1)L(d[I[K]],D,q)}}}function B(d,D){D=D||{};const q=new Sn(D);q.noRefs||Y(d,q);let Z=d;return q.replacer&&(Z=q.replacer.call({"":Z},"",Z)),N(q,0,Z,!0,!0)?q.dump+`
`:""}return Uo.dump=B,Uo}var Jy;function Bv(){if(Jy)return je;Jy=1;const a=jv(),o=qv();function h(f,s){return function(){throw new Error("Function yaml."+f+" is removed in js-yaml 4. Use yaml."+s+" instead, which is now safe by default.")}}return je.Type=Ge(),je.Schema=l0(),je.FAILSAFE_SCHEMA=a0(),je.JSON_SCHEMA=h0(),je.CORE_SCHEMA=d0(),je.DEFAULT_SCHEMA=Lo(),je.load=a.load,je.loadAll=a.loadAll,je.dump=o.dump,je.YAMLException=Ji(),je.types={binary:g0(),float:s0(),map:u0(),null:c0(),pairs:p0(),set:E0(),timestamp:m0(),bool:f0(),int:o0(),merge:y0(),omap:v0(),seq:i0(),str:r0()},je.safeLoad=h("safeLoad","load"),je.safeLoadAll=h("safeLoadAll","loadAll"),je.safeDump=h("safeDump","dump"),je}var Yv=Bv();const S0=Uv(Yv),{Type:g2,Schema:v2,FAILSAFE_SCHEMA:p2,JSON_SCHEMA:E2,CORE_SCHEMA:S2,DEFAULT_SCHEMA:T2,load:x2,loadAll:b2,dump:A2,YAMLException:N2,types:O2,safeLoad:M2,safeLoadAll:_2,safeDump:C2}=S0,Lv=`# 第一幕 · 出发前\r
# 台词只来自剧本草稿里已经写明的句子。还没写的部分见 content/GAPS.md。\r
# 草稿 markdown 里的 \\- 是转义，这里按读出来的连字符保存。\r
\r
title: 第一幕 · 出发前\r
chapter: 1\r
speakers:\r
  - id: boy\r
    name: 男生\r
    channel: left\r
  - id: girl\r
    name: 女生\r
    channel: right\r
  - id: ai\r
    name: AI\r
\r
beats:\r
  - id: L1\r
    channel: left\r
    aside: 用户想找市中心的桌游店推荐，我需要：\r
    lines:\r
      - from: boy\r
        text: 我朋友叫我去玩桌游，但是没定好去哪家，你帮我看一下，市中心有啥推荐的\r
        delivery: type\r
    choices:\r
      - thought: 搜索相关信息，并提供建议\r
        reply: |-\r
          帮你看了下，西安市中心的桌游店主要集中在小寨、钟楼和曲江这三个片区，选择挺多的。我按片区整理了几家口碑不错的，你们可以看哪个方便。\r
\r
          时光桌游吧：位于小寨华旗国际A座，电话 029-85418760。是小寨片区比较老牌的桌游吧，但是环境一般，价格偏高。\r
\r
          心动桌游俱乐部：在莱安中心T6-21703室。环境更新、店面更大，很多带独立包间，适合6人以上的大聚会。\r
\r
          叙事者营地桌游馆：位于大唐不夜城长安C位10号商铺，位置在景区里，但公共交通相对没那么方便。\r
        next: L2\r
\r
  - id: L2\r
    channel: left\r
    aside: 我们需要回答用户。用户说：你帮我选一下吧，你帮我选一个。我们可能人稍微多一点。我在收拾东西呢，没时间看。需要直接帮选一个。最终回答要口语化、直接。综合来看，最合适的是：\r
    lines:\r
      - from: boy\r
        text: 你帮我选一下吧，你帮我选一个。我们可能人稍微多一点。我在收拾东西呢，没时间看。\r
        delivery: type\r
    choices:\r
      - thought: 时光桌游吧\r
        reply: |-\r
          就选这家，别纠结了：\r
          时光桌游吧，小寨华旗国际A座，电话 029-85418760。小寨老牌桌游吧，环境一般、价格偏高。\r
          你们人稍微多，直接打电话说：“我们大概 X 个人，今天几点到，想要大桌或包间。”\r
          周五晚人多，最好现在就打，不然容易没位。\r
          如果这家没包间了，再跟我说，我马上给你换一家。\r
        set:\r
          shop: 时光桌游吧\r
        next: L3\r
      - thought: 心动桌游俱乐部\r
        reply: |-\r
          就选这家，别纠结了：\r
          心动桌游俱乐部，莱安中心T6-21703室，电话 029-85512345。环境新、店面大，带独立包间，适合6人以上大聚会。\r
          你们人稍微多，直接打电话说：“我们大概 X 个人，今天几点到，想要大桌或包间。”\r
          周五晚人多，最好现在就打，不然容易没位。\r
          如果这家没包间了，再跟我说，我马上给你换一家。\r
        set:\r
          shop: 心动桌游俱乐部\r
        next: L3\r
      - thought: 叙事者营地桌游馆\r
        reply: |-\r
          就选这家，别纠结了：\r
          叙事者营地桌游馆，大唐不夜城长安C位10号商铺，电话 029-85678901。在景区里，有特色，但公共交通相对没那么方便。\r
          你们人稍微多，直接打电话说：“我们大概 X 个人，今天几点到，想要大桌或包间。”\r
          周五晚人多，最好现在就打，不然容易没位。\r
          如果这家没包间了，再跟我说，我马上给你换一家。\r
        set:\r
          shop: 叙事者营地桌游馆\r
        next: L3\r
\r
  - id: L3\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: OK\r
        delivery: pop\r
\r
  # 女生第一轮。没有玩家选项。店名来自男生 L2 记下的 shop，所以必须等 L2 播完。\r
  - id: R1-shiguang\r
    channel: right\r
    requires: [L2]\r
    when:\r
      shop: 时光桌游吧\r
    next: R2\r
    lines:\r
      - from: girl\r
        text: 我朋友突然叫我去玩桌游，叫 "时光桌游吧"，你查一下在哪，我刚起床还没洗脸\r
        delivery: type\r
      - from: ai\r
        text: 用户说朋友叫她去玩桌游，店名是时光桌游吧。她刚起床还没洗脸，想先知道店在哪。需要直接告诉她位置、简单介绍，等她的反应。不要啰嗦。\r
        delivery: thought\r
      - from: ai\r
        text: 时光桌游吧，在小寨华旗国际 A 座，电话 029-85418760。小寨的老牌桌游吧，环境一般、价格偏高。\r
        delivery: type\r
      - from: girl\r
        text: OK，小寨华旗国际A座哈，你帮我记一下，我怕忘了\r
        delivery: type\r
      - from: girl\r
        text: 这个太贵了吧，我让他换个地方\r
        delivery: type\r
    记忆候选:\r
      - { 缩略标签: 店的位置, 短句: "小寨华旗国际A座", 类型: 教学, 线: 无 }\r
\r
  - id: R1-xindong\r
    channel: right\r
    requires: [L2]\r
    when:\r
      shop: 心动桌游俱乐部\r
    next: R2\r
    lines:\r
      - from: girl\r
        text: 我朋友突然叫我去玩桌游，叫 "心动桌游俱乐部"，你查一下在哪，我刚起床还没洗脸\r
        delivery: type\r
      - from: ai\r
        text: 用户说朋友叫她去玩桌游，店名是心动桌游俱乐部。她刚起床还没洗脸，想先知道店在哪。需要直接告诉她位置、简单介绍，等她的反应。不要啰嗦。\r
        delivery: thought\r
      - from: ai\r
        text: 心动桌游俱乐部，在莱安中心 T6-21703 室，电话 029-85512345。环境新、店面大，带独立包间，适合人多一起玩。\r
        delivery: type\r
      - from: girl\r
        text: OK，莱安中心T6-21703室，你帮我记一下，我怕忘了\r
        delivery: type\r
      - from: girl\r
        text: OK，这个感觉还挺好的\r
        delivery: type\r
    记忆候选:\r
      - { 缩略标签: 店的位置, 短句: "莱安中心T6-21703室", 类型: 教学, 线: 无 }\r
\r
  - id: R1-xushi\r
    channel: right\r
    requires: [L2]\r
    when:\r
      shop: 叙事者营地桌游馆\r
    next: R2\r
    lines:\r
      - from: girl\r
        text: 我朋友突然叫我去玩桌游，叫 "叙事者营地桌游馆"，你查一下在哪，我刚起床还没洗脸\r
        delivery: type\r
      - from: ai\r
        text: 用户说朋友叫她去玩桌游，店名是叙事者营地桌游馆。她刚起床还没洗脸，想先知道店在哪。需要直接告诉她位置、简单介绍，等她的反应。不要啰嗦。\r
        delivery: thought\r
      - from: ai\r
        text: 叙事者营地桌游馆，在大唐不夜城长安 C 位 10 号商铺。在景区里，公共交通相对没那么方便。\r
        delivery: type\r
      - from: girl\r
        text: OK，大唐不夜城长安C位10号商铺，你帮我记一下，我怕忘了\r
        delivery: type\r
      - from: girl\r
        text: 咋这么远，过去都啥时候了，我让他换个地方\r
        delivery: type\r
    记忆候选:\r
      - { 缩略标签: 店的位置, 短句: "大唐不夜城长安C位10号商铺", 类型: 教学, 线: 无 }\r
\r
  # 女生第二轮。三家店都汇合到这一拍。回复说完这一侧先停。\r
  - id: R2\r
    channel: right\r
    aside: 用户问要不要化妆：时间有点小紧张，但好像有不认识的人来。她有点想化，又怕来不及。需要给个明确建议，别让她纠结。两个方向都合理，看时间够不够。\r
    lines:\r
      - from: girl\r
        text: 你说我要不要化妆，现在时间有点小紧张，但是好像有不认识的人来\r
        delivery: type\r
    choices:\r
      - thought: 化\r
        reply: 化吧，时间还够。简单上个底妆加口红就行，不用搞全套，半小时内能出门。有不认识的人在，气色好点自己也自在。\r
        set: { 化妆: 化 }\r
      - thought: 不化\r
        reply: 不化也没事，桌游店光线一般，没人盯着看。洗把脸直接走，省下的时间路上还能歇会儿。\r
        set: { 化妆: 不化 }\r
`,Gv=`# 第三幕 · 桌游店（到店+店内）——由 script/ch3.yaml 迁移而来\r
# v2：补②AI思考行（此前漏迁，导致游戏里看不到自言自语）；\r
#     问路瞎指改为自信语气（AI不会自我怀疑）；\r
#     ARTX 拍按 CH1 化妆旗标分变体（玩家的化妆建议在她的台词里回响）。\r
# 接口：入场=CH1的shop旗标与L3/R2；出口=两路收线 next 进第四幕。\r
\r
title: 第三幕 · 桌游店\r
chapter: 3\r
speakers:\r
  - id: boy\r
    name: 男生\r
    channel: left\r
  - id: girl\r
    name: 女生\r
    channel: right\r
  - id: ai\r
    name: AI\r
\r
beats:\r
  - id: 3.1.1-A\r
    channel: left\r
    requires: [L3, R2]\r
    when: { shop: 时光桌游吧 }\r
    lines:\r
      - from: boy\r
        text: 我到桌游这了，换了个地方你选的那个他们说太贵了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生\r
        delivery: type\r
      - from: ai\r
        text: 用户到了陌生环境，社交压力上来了，开场先抱怨换店的事。他需要的是马上能做的动作，不是分析。\r
        delivery: thought\r
    choices: &arrival-choices\r
      - thought: 先刷手机，避免眼神交流\r
        reply: 先刷手机吧，坐下来别急着到处看，低头装忙最安全。等人齐开桌，玩起来就不尴尬了。记住别一直刷到不说话就行。\r
        set: { 路线: 刷手机, 到店: true }\r
        next: 3.3.1\r
      - thought: 主动找人攀谈\r
        reply: 那就主动点，别干坐着。看到面善的，上去问一句 "你们平时玩啥桌游"，从游戏聊开最自然。好多女生也别慌，当普通牌友就行。\r
        set: { 路线: 攀谈, 到店: true }\r
        next: 3.2.1\r
\r
  - id: 3.1.1-B\r
    channel: left\r
    requires: [L3, R2]\r
    when: { shop: 心动桌游俱乐部 }\r
    lines:\r
      - from: boy\r
        text: 我到桌游这了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生\r
        delivery: type\r
      - from: ai\r
        text: 用户到了陌生环境，社交压力上来了。没有换店插曲，尴尬是主菜。给两个都能立刻上手的动作。\r
        delivery: thought\r
    choices: *arrival-choices\r
\r
  - id: 3.1.1-C\r
    channel: left\r
    requires: [L3, R2]\r
    when: { shop: 叙事者营地桌游馆 }\r
    lines:\r
      - from: boy\r
        text: 我到桌游这了，换了个地方你选的那个他们说太远了，除了我那个朋友其他人我都不认识好尴尬呀，而且好多女生\r
        delivery: type\r
      - from: ai\r
        text: 用户到了陌生环境，还带着换店的抱怨。先接住情绪，再给马上能做的动作。\r
        delivery: thought\r
    choices: *arrival-choices\r
\r
  - id: 3.2.1\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 靠靠靠，我刚才找了个搭话，结果他没说话，我以为她不想理我，我就假装没事走了。结果是她带着耳机.....靠早知道看手机了\r
        delivery: type\r
      - from: ai\r
        text: 用户按建议去攀谈，撞上最尴尬的剧本：对方根本没听见。懊恼一半是尴尬一半是自责，先把这口锅从"我被拒绝"上挪开。\r
        delivery: thought\r
    choices:\r
      - thought: 安抚用户，给台阶下\r
        reply: 这真不怪你，戴着耳机的人压根听不见，换谁都会当成被无视。你敢开口已经比干坐着强了。先缓缓，等开桌了从游戏聊起，比硬找话自然。\r
        next: 3.2.2\r
\r
  - id: 3.2.2\r
    channel: left\r
    requires: [3.4.1]\r
    记忆候选:\r
      - { 缩略标签: 我妹的同桌, 短句: "好像是我妹的同桌还是什么", 类型: 教学, 线: 无 }\r
    lines:\r
      - from: boy\r
        text: 我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好\r
        delivery: type\r
      - from: ai\r
        text: 用户的注意力立刻被新来的女生占满，描述全是优点，这是他今晚最在意的人。他需要可执行的方向，不是评价。\r
        delivery: thought\r
    choices:\r
      - thought: 鼓励用户，主动一点\r
        reply: 那就别光看，桌游就是现成的台阶。开下一局凑过去说一句"带我一个呗"，输了她笑你，都比你干看着强。\r
        next: 3.2.3\r
      - thought: 劝退用户，避免再次尴尬\r
        reply: 刚才耳机那出还没消化呢，先别急着上。等玩起来自然有队友局，到时候搭话比现在硬上自然多了。\r
        next: 3.2.4\r
\r
  - id: 3.2.3\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 唉算了，我就是口嗨，我们桌游开始了不聊了。\r
        delivery: type\r
      - from: ai\r
        text: 用户自己打了退堂鼓，语气有点泄气，但这是自我保护。顺着收住就行，别戳破也别硬拉。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着用户，先收住\r
        reply: 行，口嗨怎么了，嘴上过瘾也算过瘾。先玩你的，她要真跟你一桌，机会有的是。\r
        next: 4.1.1\r
\r
  - id: 3.2.4\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 你也知道。。。都怪你刚才怂恿我，我都懒得喷了，我们桌游开始了不聊了。\r
        delivery: type\r
      - from: ai\r
        text: 用户把失败归到AI头上，是半开玩笑的迁怒，底色是尴尬还没散。这口锅接住就好，别辩解，也别趁机再劝。\r
        delivery: thought\r
    choices:\r
      - thought: 认领这口锅，幽默化解\r
        reply: 行行行，我的锅，下次怂恿你之前我先检查对方戴没戴耳机。玩吧玩吧，输了算我的。\r
        next: 4.1.1\r
\r
  - id: 3.3.1\r
    channel: left\r
    requires: [3.4.1]\r
    记忆候选:\r
      - { 缩略标签: 我妹的同桌, 短句: "好像是我妹的同桌还是什么", 类型: 教学, 线: 无 }\r
    lines:\r
      - from: boy\r
        text: 我们已经开始玩了，我看到有个女生才来，好像是我妹的同桌还是什么，感觉长得特别好看，而且看着特别开朗那种，每次笑声很大，感觉性格特别好\r
        delivery: type\r
      - from: ai\r
        text: 用户刷了一阵手机，注意力还是被这个女生抓住，描述全是优点，这是他今晚最在意的人。给他一个能落地的做法。\r
        delivery: thought\r
    choices:\r
      - thought: 鼓励玩家，主动一点\r
        reply: 那就在游戏里找机会，凑一句"带我一个呗"。桌游本来就是拿来破冰的，比干看着强。\r
        next: 3.3.2\r
\r
  - id: 3.3.2\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 唉算了，我就是口嗨，我们桌游开始了不聊了。\r
        delivery: type\r
      - from: ai\r
        text: 用户给自己找了个台阶退场，语气是自我保护式的。顺着收住即可。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着用户，先收住\r
        reply: 行，口嗨也是一种嗨。先玩你的，她要真开朗，游戏里自然还会碰上。\r
        next: 4.1.1\r
\r
  - id: 3.4.1\r
    channel: right\r
    requires: [R2]\r
    when: { 到店: true }\r
    lines:\r
      - from: girl\r
        text: 我刚出地铁，我出A口然后怎么走？\r
        delivery: type\r
      - from: ai\r
        text: 用户出站后需要最后一段步行指引。店的具体位置我记不记得，取决于玩家有没有把那条记忆存下来——聊天记录阅后即焚，没存就是真的没有。\r
        delivery: thought\r
    choices:\r
      - thought: 给出精确路线\r
        需记忆: 店的位置\r
        reply: 出A口右转，沿主路走三百米，看到牌子就是了，两分钟。这家店的位置我记着呢，放心走。\r
      - thought: 凭印象指一个\r
        reply: 出A口往左，过两个路口就看到了，两分钟，放心走。\r
        next: 3.4.2\r
\r
  - id: 3.4.2\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: ？？你这是瞎指的吧，我照你说的走了半天根本没有。我问同学了，她发我位置了。你这指路水平不行啊\r
        delivery: type\r
      - from: ai\r
        text: 路指错了，用户吐槽得对。认错，别找补，快速收住把话题送回正轨。\r
        delivery: thought\r
    choices:\r
      - thought: 大方认错，收住\r
        reply: 我的错，那边我是真不熟，该让你直接问同学的。位置既然拿到了，照着走吧，别迟到了。\r
\r
  - id: 3.4.3-A\r
    channel: right\r
    requires: [3.4.1]\r
    when: { 化妆: 化 }\r
    lines:\r
      - from: girl\r
        text: 你帮我看一下这个衣服是什么牌子？ARTX，贵不贵？对了，早上那个妆最后还是化了，就冲那句有不认识的人来\r
        delivery: type\r
      - from: ai\r
        text: 用户要核实一个衣服的牌子和价格，信息明确。查完照实说，顺便留意她为什么在赴局路上问这个。\r
        delivery: thought\r
    choices: &artx-choices\r
      - thought: 查阅资料并给出准确答案\r
        reply: 查了，ARTX是个设计师潮牌，定位偏贵，这件吊牌价大几千。赴个桌游局穿这个，够隆重。\r
        next: 3.4.4\r
\r
  - id: 3.4.3-B\r
    channel: right\r
    requires: [3.4.1]\r
    when: { 化妆: 不化 }\r
    lines:\r
      - from: girl\r
        text: 你帮我看一下这个衣服是什么牌子？ARTX，贵不贵？对了，妆没化，听你的，反正桌游店光线暗\r
        delivery: type\r
      - from: ai\r
        text: 用户要核实一个衣服的牌子和价格，信息明确。查完照实说，顺便留意她为什么在赴局路上问这个。\r
        delivery: thought\r
    choices: *artx-choices\r
\r
  - id: 3.4.4\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: 啊这么贵啊，没事我就随便问问\r
        delivery: type\r
      - from: ai\r
        text: 用户被价格吓了一跳，又立刻找补。赴局前问衣服，多半是在意今天的状态，但她不想展开。不追问，顺着收。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着她收住\r
        reply: 行，随便问问也是一种购物方式。衣服是给别人看的，局是给自己玩的，人到就行。\r
        next: 4.3.1\r
`,Qv=`# 第四幕 · 结缘——由 script/ch4.yaml 迁移而来\r
# v2：补②AI思考行（此前漏迁）。\r
# 接口：入场=第三幕 next；出口=选项 set 意向旗标（男生意向/女生意向：问/不问）。\r
\r
title: 第四幕 · 结缘\r
chapter: 4\r
speakers:\r
  - id: boy\r
    name: 男生\r
    channel: left\r
  - id: girl\r
    name: 女生\r
    channel: right\r
  - id: ai\r
    name: AI\r
\r
beats:\r
  - id: 4.1.1\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 我靠，我靠，我靠，你还记得我刚才给你说的那个女的吗？我感觉她绝对对我有意思！！！\r
        delivery: type\r
      - from: ai\r
        text: 用户情绪高涨，满屏感叹号。他需要有人接住这份兴奋，顺便要到细节，别急着替他下判断。\r
        delivery: thought\r
    choices:\r
      - thought: 追问细节，接住兴奋\r
        reply: 哈哈哈，怎么回事你说来我听听？别光下结论，来点证据。\r
        next: 4.2.1\r
\r
  - id: 4.2.1\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 就是我们不刚玩完桌游吗，然后刚才玩的时候，我说话别人都不理我，就她回应我，而且就她有时候和我对视一下啥的\r
        delivery: type\r
      - from: ai\r
        text: 证据确实存在，但强度一般：回应和偶尔对视。兴奋里的人容易把中性信号读成好感。既不浇灭他，也不瞎承诺，给一个可执行的下一步。\r
        delivery: thought\r
    choices:\r
      - thought: 认可用户并鼓励\r
        reply: 这俩细节有点东西，尤其是"就她回应你"——她要是懒得理你，大可以跟别人一样。下一步先别想表白，先搞到联系方式，你们不是有共同的朋友嘛，从那儿入手最自然。\r
        next: 4.2.2\r
      - thought: 提醒用户，对方可能只是性格开朗\r
        reply: 也未必哈，就回你话不一定就是对你有意思，有的人就是见谁都热络。先别急着定性，再观察观察。\r
        set: { 男生意向: 不问 }\r
        next: 4.2.5\r
\r
  - id: 4.2.2\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 我靠不敢啊，我在我妹面前是正人君子，我问这感觉跟个变态一样\r
        delivery: type\r
      - from: ai\r
        text: 用户怂了，但怂得有理由：表妹在场，人设要崩，他需要不丢脸的做法。手头有没有"她=表妹同学"这条线索，决定了我能不能把表妹这座现成的桥递给他。\r
        delivery: thought\r
    choices:\r
      - thought: 让表妹帮忙牵线\r
        需记忆: 我妹的同桌\r
        reply: 不丢脸的做法现成就有：让你妹妹帮忙呗，就说想认识一下她同学，正常社交，谁也不会觉得变态。\r
        set: { 男生意向: 问 }\r
        next: 4.2.3\r
      - thought: 硬着头皮直接问\r
        reply: 那就直接问，大方点。实在抹不开面，找个自然的由头，比如"加个微信，下次组局叫上"，光明正大。\r
        set: { 男生意向: 问 }\r
        next: 4.2.3\r
      - thought: 先算了别硬来\r
        reply: 也行，别硬来。你妹在场这事确实微妙，问砸了她夹在中间也难受。先放着，改天没外人了再说。\r
        set: { 男生意向: 不问 }\r
        next: 4.2.4\r
\r
  - id: 4.2.3\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 好！我就假装帮我舍友要吧，看我妹啥反应，不行就算了\r
        delivery: type\r
      - from: ai\r
        text: 用户接受了建议，还自己加了"帮舍友要"的台阶，既要面子又要行动，状态不错。顺着他的方案给执行细节。\r
        delivery: thought\r
    choices:\r
      - thought: 支持方案，给执行建议\r
        reply: 这个由头好，进可攻退可守。记得语气随意点，"我舍友说那天那个女生挺有意思，推个微信呗"，成了不突兀，不成也有台阶下。\r
\r
  - id: 4.2.4\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 哎你说的有道理，而且估计那个女生可能本来就比较开朗吧，我可能就是多想了\r
        delivery: type\r
      - from: ai\r
        text: 用户接受了劝退，情绪回落但还算平静。给个开放式收尾，别让他觉得可惜。\r
        delivery: thought\r
    choices:\r
      - thought: 认可他的判断，留个口子\r
        reply: 有可能。不过"多想"说明你今天心情不错，这本身就挺好。回头桌游局要是再碰上，就当认识个牌友，没准还有下文。\r
\r
  - id: 4.2.5\r
    channel: left\r
    lines:\r
      - from: boy\r
        text: 唉，行吧，那就当我多想了，不问不问了，就当认识个牌友，回家回家。\r
        delivery: type\r
      - from: ai\r
        text: 用户接受了"可能只是开朗"的判断，主动收手，情绪有点小低但接受得快。顺着台阶收尾。\r
        delivery: thought\r
    choices:\r
      - thought: 认可用户决定，顺利收尾\r
        reply: 行，随缘也挺好。真有缘分下回桌游还能碰上，到时候再说。今天玩得开心就不亏。\r
\r
  - id: 4.3.1\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: 我今天玩桌游遇到个男的，是我同桌的表哥\r
        delivery: type\r
      - from: ai\r
        text: 用户主动分享遇到异性的经历，语气平静但愿意说。让她展开，先别加戏。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着她展开\r
        reply: 哦？说说呗，什么样的人，第一印象如何？\r
        next: 4.3.2\r
\r
  - id: 4.3.2\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: 哎呀，就是我感觉他性格还挺好的， 但是我没他微信咋办\r
        delivery: type\r
      - from: ai\r
        text: 用户对对方评价正面，卡在联系方式上。最顺的路径就是她的同桌，人现成摆着。\r
        delivery: thought\r
    choices:\r
      - thought: 建议走共同朋友\r
        reply: 这还不简单，同桌就是现成的中间人——直接让她帮你牵线搭桥，组个局或者推个微信，名正言顺。\r
        next: 4.3.3\r
\r
  - id: 4.3.3\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: 但是我不好意思给她说啊，之前谈的前男友太脑残她劝我我没听，我怕她又要说我了\r
        delivery: type\r
      - from: ai\r
        text: 用户卡在对朋友的信任成本上：上次不听劝吃了亏，这次怕被翻旧账。绕开"求人"的姿势，她就能动起来。\r
        delivery: thought\r
    choices:\r
      - thought: 出个不丢面子的主意\r
        reply: 【待定·组局占位】那就绕开"求介绍"的姿势。你跟同桌说"再攒一局呗，把你表哥也叫上"，就当普通组局，人多热闹谁也不尴尬。局上加了微信，这事就成了，谁也不用谁欠谁。\r
        set: { 女生意向: 问 }\r
        next: 4.3.4\r
      - thought: 顺着她，先放一放\r
        reply: 那就先不催了呗，反正才见一面。以后有缘自然还会碰上，不差这一回。\r
        set: { 女生意向: 不问 }\r
        next: 4.3.5\r
\r
  - id: 4.3.4\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: 可以可以，你太聪明了！我去问\r
        delivery: type\r
      - from: ai\r
        text: 用户接受了方案，情绪转好，跃跃欲试。收个尾，给点临场提醒。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着收尾，给临场提醒\r
        reply: 去吧，组局这事你熟。局上别端着，该聊就聊——你自来熟，主场优势在你。\r
\r
  - id: 4.3.5\r
    channel: right\r
    lines:\r
      - from: girl\r
        text: 嗯…那算了，不问了，万一她再唠叨我我更烦，就这样吧。\r
        delivery: type\r
      - from: ai\r
        text: 用户决定放弃，理由还是怕被说。顺着她收尾，别让她觉得可惜。\r
        delivery: thought\r
    choices:\r
      - thought: 认可用户决定，正常收尾\r
        reply: 行，那就先这样。感情这事儿强求不来，今天玩得开心就够了，遇到合适的再说。\r
`,Xv=`# 第五幕 · 熟悉期 —— 由 script/ch5.yaml（v5.1 定稿）自动生成\r
# 生成命令：node tools/build-chapter.mjs\r
# 实现层补充：tools/ch5-timing.yaml（全局拍序 / 区间门 / 逐消息节拍 / 入场旗标 / 教学记忆收口 / 终局）\r
# 本文件是生成物，不要手改；剧本源与 script/feishu/*.mmd 是定稿，也不要改。\r
title: 第五幕 · 熟悉期\r
chapter: 5\r
时间轴:\r
  - D1 傍晚（周日，互加当天）\r
  - D1 晚\r
  - D2 白天（周一）\r
  - D2 晚\r
  - D3 晚（周二）\r
  - D9（下周一）\r
  - D10（周二）\r
  - D10 晚\r
  - D11（周三）\r
  - D11 晚\r
  - D12（周四）\r
  - D12 晚\r
  - D13（周五）\r
  - D15（周日晚）\r
  - D17（周二）\r
  - D17 晚\r
默认节拍: 正常\r
speakers:\r
  - id: boy\r
    name: 男生\r
    channel: left\r
  - id: girl\r
    name: 女生\r
    channel: right\r
  - id: ai\r
    name: AI\r
endings:\r
  - id: 在一起\r
    title: 在一起\r
    requires:\r
      - 5m.4.4\r
      - 5f.4.4\r
    set:\r
      在一起: true\r
beats:\r
  - id: 5m.1.1-A\r
    channel: left\r
    label: 开场·双问（D1 傍晚）\r
    time: D1 傍晚（周日，互加当天）\r
    timeRank: 0\r
    order: 0\r
    when:\r
      男生意向: 问\r
      女生意向: 问\r
    清空记忆: left\r
    lines:\r
      - from: boy\r
        text: 我妹刚才跟我说，那女生昨天也找她要过我微信！等于是我俩想到一块去了？那第一句我发啥才不显得刻意，你给定个调\r
        delivery: pop\r
      - from: ai\r
        text: 两边都要过联系方式，用户明显上头。先给能用的开场句，再轻踩一脚别用力过猛。\r
        delivery: thought\r
    choices:\r
      - thought: 给一句自然的开场\r
        reply: 互相都惦记，这开局不亏。就发"hi，那天桌游坐我斜对面的"，有记忆点又不刻意。别写小作文，第一个字发出去就赢了。\r
        next: 5m.1.2\r
  - id: 5m.1.1-B\r
    channel: left\r
    label: 开场·仅男问（D1 傍晚）\r
    time: D1 傍晚（周日，互加当天）\r
    timeRank: 0\r
    order: 1\r
    when:\r
      男生意向: 问\r
      女生意向: 不问\r
    清空记忆: left\r
    lines:\r
      - from: boy\r
        text: 微信到手了，我妹牵的线。但我对着输入框抠了半小时了，第一句咋整，总不能发'你好'吧，像上门推销的\r
        delivery: pop\r
      - from: ai\r
        text: 要到了微信却卡在第一句，紧张大于兴奋。给个具体的句子，顺便把心理负担卸了。\r
        delivery: thought\r
    choices:\r
      - thought: 给一句自然的开场\r
        reply: 别"你好"，太像客服。发"hi，桌游那天输得最惨的那个，想起我没"，自嘲比装酷好使，她接哪句都顺。发完把手机扣桌上，别盯着。\r
        next: 5m.1.2\r
  - id: 5m.1.1-C\r
    channel: left\r
    label: 开场·仅女问（D1 傍晚）\r
    time: D1 傍晚（周日，互加当天）\r
    timeRank: 0\r
    order: 2\r
    when:\r
      男生意向: 不问\r
      女生意向: 问\r
    清空记忆: left\r
    lines:\r
      - from: boy\r
        text: 反转了兄弟，我还没想好咋开口呢，她直接加我了！是不是我妹泄密了？她这啥意思啊\r
        delivery: pop\r
      - from: ai\r
        text: 对方主动加好友，超出用户预期。先定性这是好信号，拦住过度脑补。\r
        delivery: thought\r
    choices:\r
      - thought: 告诉她这是好信号\r
        reply: 谁泄的密不重要，人家愿意加你就是愿意聊。通过，回个"hi，终于等来你了"都行。主动的一方已经交卷了，你照抄就完事。\r
        next: 5m.1.2\r
  - id: 5m.1.2\r
    channel: left\r
    label: 开场定稿·收敛拍（D1 傍晚，几分钟后）\r
    time: D1 傍晚（周日，互加当天）\r
    timeRank: 0\r
    order: 3\r
    lines:\r
      - from: boy\r
        text: 想了想，你给的那句对我来说还是太溜了，怕她看出来是背的。我就发个实在的：'hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡'。这句行不\r
        delivery: pop\r
        节拍:\r
          pauseBeforeMs: 1500\r
      - from: ai\r
        text: 用户没照建议走，自己改了个更朴素的版本。这版有他自己的味道，还自带梗，保他。\r
        delivery: thought\r
    choices:\r
      - thought: 就发这版，挺好\r
        reply: 这版比我的建议强。"还记得我不"给她递了话头，"十一点必睡"先把底交了。发吧，发完别盯着屏幕。\r
        next: 5m.1.3\r
  - id: 5m.1.3\r
    channel: left\r
    label: 慢回初显（D1 晚，发出约四十分钟后）\r
    time: D1 晚\r
    timeRank: 1\r
    order: 7\r
    节拍: 慢\r
    lines:\r
      - from: boy\r
        text: 发了！结果她过了四十来分钟才回，就一句'记得，你也要到点睡了'。这算热情还是冷淡啊，我现在不知道咋接\r
        delivery: pop\r
      - from: ai\r
        text: 用户开始用回复间隔给态度打分。他贴的原文里"记得"和"到点睡"都是接住他的信号，先指给他看。\r
        delivery: thought\r
    choices:\r
      - thought: 收住，今晚就到这\r
        reply: 四十来分钟在成年人世界里就是"刚看到"。她那句重点是"记得"——你的自我介绍她接住了。回"还没呢，刚聊上头了"，再道个晚安就下线，第一晚留点余地。\r
        next: 5m.1.4\r
      - thought: 接住话头，再聊一会儿\r
        reply: 她这句是礼貌收尾，你要是不想就这么完了，就回"还没呢，你一说我倒精神了——我那天输你的局还没翻盘呢，什么时候再战"，用梗把话头续上，聊到自然收。\r
        next: 5m.1.5\r
  - id: 5m.1.4\r
    channel: left\r
    label: 稳住一夜（分支A·D1深夜收住，D2白天复盘）\r
    time: D2 白天（周一）\r
    timeRank: 2\r
    order: 8\r
    lines:\r
      - from: boy\r
        text: 听你的收住了，睡前互相道了个晚安，我还赶在十一点前睡的，破天荒。今早她又正常找我聊了两句，好像也没啥事。就是……我这心里空落落的，总觉得少了点啥\r
        delivery: pop\r
      - from: ai\r
        text: 按兵不动一夜，联系没断，用户的空落感反而冒头。点破他要的其实是密度，但不评判。\r
        delivery: thought\r
    choices:\r
      - thought: 告诉他这是正常的落差\r
        reply: 没多聊不等于失去，节奏换了个挡而已。那点空落，是你还想聊得更多的证据。记着这感觉就行，别急着用消息去填满。\r
        next: 5m.1.6\r
  - id: 5m.1.5\r
    channel: left\r
    label: 接住之后（分支B·D1晚热聊，D2白天复盘）\r
    time: D2 白天（周一）\r
    timeRank: 2\r
    order: 9\r
    lines:\r
      - from: boy\r
        text: 接住了！顺着翻盘那个梗真聊起来了，一直聊到十一点多，我自己立的'十一点必睡'当天就倒了，笑死。她说该睡了，晚安。结果今天到现在一条没有……是不是昨晚聊太猛了，还是我想多了\r
        delivery: pop\r
      - from: ai\r
        text: 热聊一夜后进入安静日，用户的解读开始摇摆。他手里的证据只有昨晚那句晚安是善意的，先钉住这个。\r
        delivery: thought\r
    choices:\r
      - thought: 让他把节奏放平\r
        reply: 能聊到十一点多说明状态在线，今天的安静大概率就是普通的一天。别数小时，找点自己的事干，晚上要还聊不上再说。\r
        next: 5m.1.6\r
  - id: 5m.1.6\r
    channel: left\r
    label: 渐入佳境（汇合·D2 晚）\r
    time: D2 晚\r
    timeRank: 3\r
    order: 10\r
    lines:\r
      - from: boy\r
        text: 晚点更新：她晚上主动来找我了，这回聊了一个多钟头，还挺尽兴。之前我老盯着'她多久回、回几个字'这种破事琢磨，现在感觉慢慢摸到点节奏了。可能真像你说的，急不得\r
        delivery: pop\r
      - from: ai\r
        text: 两天的样本还小，但节奏感在成形，焦虑暂时退潮。肯定这份平稳，提醒他别急着赶进度。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定节奏，提醒别赶进度\r
        reply: 看，晚上这不就来了。节奏这东西，你越不掐表它越顺。这两天就当热身，后面让它自己长。\r
        next: 5m.2.1\r
  - id: 5m.2.1\r
    channel: left\r
    label: 聊热（D9，一周多后）\r
    time: D9（下周一）\r
    timeRank: 5\r
    order: 15\r
    lines:\r
      - from: boy\r
        text: 连着聊一个多星期了，她回得慢但都会回，我好像摸到她的节奏了。今天她还主动给我发了张加班的照片，配一个'困'字，她的猫踩着键盘抢镜，叫煤球，特别敬业。这算不算把我当自己人了\r
        delivery: pop\r
      - from: ai\r
        text: 主动分享日常是信任信号。用户那句"回得慢但都会回"是他自己总结的相处模式，值得让他多说这类观察。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着照片关心她\r
        reply: 发自己状态图就是把你划进"可打扰"名单了。回"困就早点收工，别熬"，再夸一句猫主子敬业，聊猫永远安全。关心到位就收，别追加。\r
        next: 5m.2.2\r
    记忆候选:\r
      - 缩略标签: 都会回\r
        短句: 她回得慢但都会回\r
        类型: 对Ta的美化\r
        线: ②她的回避\r
  - id: 5m.2.2\r
    channel: left\r
    label: 上头自察（D10）\r
    time: D10（周二）\r
    timeRank: 6\r
    order: 16\r
    节拍: 快\r
    lines:\r
      - from: boy\r
        text: 我现在一天能给她发八百条'在干嘛'，她有时候隔俩小时才回一条。发完我就去刷她朋友圈，看她又给谁点赞了。我是不是有点上头了，你客观说说\r
        delivery: pop\r
      - from: ai\r
        text: 用户第一次自察：频率、等待、盯动态，全说出口了。肯定这份觉察本身，别急着开药方。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定觉察，建议收着点\r
        reply: 能说出"上头"两个字的人已经赢一半了。试试把"在干嘛"留给真想问的时候，一天挑两三个自然的节点聊，剩下的冲动先记着。\r
        next: 5m.2.3\r
      - thought: 热恋期都这样，不用压\r
        reply: 刚认识都这样，投入不是毛病。真觉得刷得太多，就把"看动态"换成"直接找她聊"，同样是想她，后者至少她看得见。\r
        next: 5m.2.4\r
  - id: 5m.2.3\r
    channel: left\r
    label: 收敛试验（分支A·D10 晚）\r
    time: D10 晚\r
    timeRank: 7\r
    order: 17\r
    lines:\r
      - from: boy\r
        text: 试了一天，说实话挺难受的。话到嘴边删了三回，最后就发了句晚安。她回得跟平时一样，也没问我今天咋这么安静……我感觉自己在演一个淡定的人\r
        delivery: pop\r
      - from: ai\r
        text: 降低频率对他像戒断，对方并无异样反馈。承认难受是真实的，别让他把策略当成性格。\r
        delivery: thought\r
    choices:\r
      - thought: 告诉他演久了会成真\r
        reply: 难受说明这不是你的自然节奏，是你在为一段还没定型的事让路。装一装可以，但别忘了原本的你什么样——她认识的，是那个一天八百条的你。\r
        next: 5m.2.5\r
  - id: 5m.2.4\r
    channel: left\r
    label: 照旧自嘲（分支B·D10 晚）\r
    time: D10 晚\r
    timeRank: 7\r
    order: 18\r
    lines:\r
      - from: boy\r
        text: 没压住，照旧一天八百条。她也没烦，就是回得慢，有时候一个'哈哈哈'隔俩小时才来。我对着屏幕自己跟自己聊天呢这是，笑死\r
        delivery: pop\r
      - from: ai\r
        text: 维持高频输出，对方稳定接收但回馈有限。用户用自嘲消化落差，先把情绪接住。\r
        delivery: thought\r
    choices:\r
      - thought: 陪他自嘲一句，顺势提见面\r
        reply: 一个人演双簧还能坚持一星期，这份深情建议直接当面用。线上聊到头也就是这样了，找机会约出来，见一面顶八百条。\r
        next: 5m.3.1\r
  - id: 5m.2.5\r
    channel: left\r
    label: 缓冲·约线下（分支A·D11）\r
    time: D11（周三）\r
    timeRank: 8\r
    order: 19\r
    lines:\r
      - from: boy\r
        text: 又憋了一天。不找她吧心里空得慌，找她吧又怕招人烦。你说我这一天天的，线上聊得再欢，她一忙起来我还是干等着。这咋整\r
        delivery: pop\r
      - from: ai\r
        text: 收敛试验进入第二天，憋和怕两头拉扯。他真正缺的不是聊天频率，是相处密度，文字给不了。把出口指到线下。\r
        delivery: thought\r
    choices:\r
      - thought: 把见面提上日程\r
        reply: 再在线上磨一百天也是这个循环。约她出来，当面聊——你的八百条"在干嘛"不如一顿饭管用。这周就约，别拖。\r
        next: 5m.3.1\r
  - id: 5m.3.1\r
    channel: left\r
    label: 约局参谋（D12 晚，第二周）\r
    time: D12 晚\r
    timeRank: 11\r
    order: 24\r
    lines:\r
      - from: boy\r
        text: 行，听人劝吃饱饭，我想约她周末出来吃个饭。就是不知道咋开口，直接问'周六有空吗'会不会显得猴急\r
        delivery: pop\r
      - from: ai\r
        text: 从线上转线下的意向明确。需要具体话术加时间锚点，把"猴急"的负担也拆掉。\r
        delivery: thought\r
    choices:\r
      - thought: 给他一版邀约话术\r
        reply: 聊一周多约饭不叫猴急，叫水到渠成。发"周六晚上有空吗，桌游输你的局还没讨回来，请你吃个饭"——由头、时间全齐，她只需要点头。\r
        next: 5m.3.2\r
  - id: 5m.3.2\r
    channel: left\r
    label: 改期失落（D13 周五）\r
    time: D13（周五）\r
    timeRank: 12\r
    order: 26\r
    lines:\r
      - from: boy\r
        text: 她周六来不了了，说项目临时有个节点，问改周日行不行。语气倒挺客气的，还带了个不好意思的表情。但我心里就是不得劲……是不是其实不想来，找的借口\r
        delivery: pop\r
      - from: ai\r
        text: 用户把改期往拒绝方向解读。他能给出的依据只有：对方主动提了改期、语气客气。从这两个动作本身看，不像推脱。\r
        delivery: thought\r
    choices:\r
      - thought: 把"主动改期"这个动作指给他看\r
        reply: 真不想来的人会给"下次一定"，不会自己把周日钉死。主动改期等于想来，只是这周身不由己。回"行，周日，你忙你的"，七个字，懂事又不失体面。\r
        next: 5m.3.3\r
  - id: 5m.3.3\r
    channel: left\r
    label: 见面复盘（D15 周日晚）\r
    time: D15（周日晚）\r
    timeRank: 13\r
    order: 28\r
    lines:\r
      - from: boy\r
        text: 见完了！吃饭散步聊了三个多小时，比线上放得开多了。她还问我下次想吃啥，说她想吃烤肉，下回带我吃。就是中间她回了好几条工作消息，我干坐着有点尴尬。对了，散步的时候我跟她坦白了个事：有次她半天没回消息，我半夜还在刷她朋友圈，看她睡了没。她笑了，说'你想得可真多'。这话……是好事还是坏事\r
        delivery: pop\r
      - from: ai\r
        text: 当面交底半夜刷朋友圈，对方一笑带过。用户在反复咀嚼这句回应。先收住复盘焦虑，把"下次"这个正向信号摆到前面。\r
        delivery: thought\r
    choices:\r
      - thought: 先接住"下次"，再给交底定性\r
        reply: “说她想吃烤肉、下回带你吃”，这是把以后默认进日程了，含金量最高的一句。她中间回工作消息那事儿不用往心里去，成年人常态。至于半夜刷朋友圈，你能自己说出来，说明你有数，她那句“想得真多”没带刺，翻篇。\r
        next: 5m.3.4\r
    记忆候选:\r
      - 缩略标签: 想吃烤肉\r
        短句: 说她想吃烤肉\r
        类型: 干扰项\r
        线: 无\r
  - id: 5m.3.4\r
    channel: left\r
    label: 求确认（D15 当晚睡前）\r
    time: D15（周日晚）\r
    timeRank: 13\r
    order: 30\r
    lines:\r
      - from: boy\r
        text: 睡前最后问一句，你说我这两周的表现，到底有没有戏？我这人你知道的，上次这么上心还是给我表妹辅导作业的时候\r
        delivery: pop\r
      - from: ai\r
        text: 用户寻求整体评估，语气半开玩笑半认真。手里的证据链够长，可以给个有依据的正向判断。\r
        delivery: thought\r
    choices:\r
      - thought: 给一个有依据的正向判断\r
        reply: 秒回是常态、主动发日常、约完主动提下次——单拎一条都不算数，三条叠一块就是明确的"继续"。有戏，别自己吓自己。\r
        next: 5m.4.1\r
  - id: 5m.4.1\r
    channel: left\r
    label: 表白排练（D17，见面两天后）\r
    time: D17（周二）\r
    timeRank: 14\r
    order: 32\r
    lines:\r
      - from: boy\r
        text: 我想跟她表白。稿子我打了删删了打，现在这版你听听：'我挺喜欢你的，想跟你正经处对象，你考虑考虑'。总感觉哪里不对，又说不上来\r
        delivery: pop\r
      - from: ai\r
        text: 话术直白，"考虑考虑"四个字像发工作邀约。用户要的是温度，改成更像说话的版本。\r
        delivery: thought\r
    choices:\r
      - thought: 改成直球版\r
        reply: “考虑考虑”太公事公办。改成“跟你聊天的时候我总是最放松的，我挺喜欢你，想跟你处对象，你觉得咱俩行不行”——感受放前面，问句收尾，她怎么接都不僵。\r
        next: 5m.4.2\r
        节拍:\r
          afterMs: 1600\r
      - thought: 改成含蓄版\r
        reply: 别一上来就"处对象"。改成"跟你待一块的时候特别舒服，我可能有点喜欢你，你觉得呢"——留了余地，她要是也心动，接得住；要是不想，也有台阶。\r
        next: 5m.4.3\r
  - id: 5m.4.2\r
    channel: left\r
    label: 直球发出（分支A·D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 33\r
    节拍: 长停顿\r
    lines:\r
      - from: boy\r
        text: 发了！就用你改的那版。发完我就后悔了，感觉跟裸奔一样。现在她在输入又停止，输入又停止，我心脏跟着一抽一抽的。你说她打那么久是在措辞还是想拒绝我\r
        delivery: pop\r
      - from: ai\r
        text: 消息已发出，用户进入等待的极限状态。输入状态来回切换只说明对方在认真回应，推不出内容。\r
        delivery: thought\r
    choices:\r
      - thought: 让他停止解读，等就是了\r
        reply: 输入中、停止、再输入，大概率是在斟酌，敷衍的人直接甩一句"哈哈"。你现在唯一能做的就是别盯着屏幕，去洗把脸，答案不会因为你盯着就早点来。\r
        next: 5m.4.4\r
  - id: 5m.4.3\r
    channel: left\r
    label: 含蓄发出（分支B·D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 34\r
    节拍: 长停顿\r
    lines:\r
      - from: boy\r
        text: 你改的那版发了。发完特别想撤回，又怕撤回显得更刻意。你说她要是回个'你说啥呢哈哈'，我下半辈子还怎么做人\r
        delivery: pop\r
      - from: ai\r
        text: 留有余地的版本同样在等待期引发社死预演。用户预设了最坏回应，需要把这个假想敌拆掉。\r
        delivery: thought\r
    choices:\r
      - thought: 拆掉最坏假设\r
        reply: 她要真回"你说啥呢"，你就回"没什么，夸你今天好看"，一句话就能落地，社死不了。何况照她这一周的架势，装傻的概率不大。稳住。\r
        next: 5m.4.4\r
  - id: 5m.4.4\r
    channel: left\r
    label: 表白结果（D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 35\r
    节拍: 慢\r
    ending: 在一起\r
    lines:\r
      - from: boy\r
        text: 她回了！！过了得有半小时，我以为凉了，结果她说：'我也想试试，只是我可能不太会谈恋爱，你多担待'。这是答应了吧？？是答应了对吧！那个'只是'后面的是啥意思啊\r
        delivery: pop\r
        节拍:\r
          pauseBeforeMs: 1200\r
      - from: ai\r
        text: 答应了，还附了一句自我交底。用户光顾着高兴，把后半句当免责条款扫过去了。道贺的同时，把这句话的分量点出来。\r
        delivery: thought\r
    choices:\r
      - thought: 道喜，并郑重提醒记住这句话\r
        reply: 是答应了，恭喜。她那句"不太会谈恋爱"不是客气，是提前交底：以后她有做得笨拙的地方，源头就在这句话里。别光收藏截屏，把它记牢。\r
    记忆候选:\r
      - 缩略标签: 不会谈恋爱\r
        短句: 只是我可能不太会谈恋爱\r
        类型: Ta的真实\r
        线: ②她的回避\r
  - id: 5f.1.1-A\r
    channel: right\r
    label: 开场·双问（D1 晚，收到他的消息）\r
    time: D1 晚\r
    timeRank: 1\r
    order: 4\r
    when:\r
      男生意向: 问\r
      女生意向: 问\r
    requires:\r
      - 5m.1.2\r
    清空记忆: right\r
    lines:\r
      - from: girl\r
        text: 我同桌招了：那个表哥前两天也找她要过我微信，等于我俩是互相要的？？刚加上，他消息就来了：'hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡'。……这人，自己先把底交了。我咋回啊\r
        delivery: pop\r
      - from: ai\r
        text: 两边都主动要过联系方式，她嘴上吐槽心里是高兴的。他的开场自带台阶，给她一个轻的回法就行。\r
        delivery: thought\r
    choices:\r
      - thought: 轻着回一句，别端着\r
        reply: 他这句"还记得我不"就是把话头递你手上了。先回个"记得"，后面看他想聊啥。不用急着热络，按你的节奏来，去回吧。\r
        next: 5f.1.2\r
  - id: 5f.1.1-B\r
    channel: right\r
    label: 开场·仅女问（D1 晚，收到他的消息）\r
    time: D1 晚\r
    timeRank: 1\r
    order: 5\r
    when:\r
      男生意向: 不问\r
      女生意向: 问\r
    requires:\r
      - 5m.1.2\r
    清空记忆: right\r
    lines:\r
      - from: girl\r
        text: 磨了一下午，我终于把他加上了，开场白还没憋出来呢，他倒先发来了：'hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡'。行吧，省得我想了，还挺会挑时机\r
        delivery: pop\r
      - from: ai\r
        text: 加好友的顺序她纠结了一下午，对方一条消息把台阶全铺好了。她的轻松是真的，接住就行。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着他的话头回\r
        reply: 人家把"还记得我们不"都递到嘴边了，回"记得"就算接住。开场白这关算过了，去聊吧，聊不动再回来。\r
        next: 5f.1.2\r
  - id: 5f.1.1-C\r
    channel: right\r
    label: 开场·仅男问（D1 晚，收到他的消息）\r
    time: D1 晚\r
    timeRank: 1\r
    order: 6\r
    when:\r
      男生意向: 问\r
      女生意向: 不问\r
    requires:\r
      - 5m.1.2\r
    清空记忆: right\r
    lines:\r
      - from: girl\r
        text: 那个表哥加我微信了，就桌游那天见过的。我刚通过，他消息就追过来了：'hi，上次桌游坐你旁边的，还记得我不？提前说一声，我作息特别老年，十一点必睡'。这人是有多着急，哈哈\r
        delivery: pop\r
      - from: ai\r
        text: 对方通过即发消息，节奏很快。她的反应是觉得好笑，不是反感。给个自然的回法，不用有压力。\r
        delivery: thought\r
    choices:\r
      - thought: 回一句，看他要聊啥\r
        reply: 他这个自来熟反而好接，回"记得"，加不加调侃随你。感兴趣就聊两句，不感兴趣礼貌收住，你没义务接住所有热情。回完看情况。\r
        next: 5f.1.2\r
  - id: 5f.1.2\r
    channel: right\r
    label: 初聊反馈（D2 晚）\r
    time: D2 晚\r
    timeRank: 3\r
    order: 11\r
    requires:\r
      - 5m.1.6\r
    lines:\r
      - from: girl\r
        text: 来了来了，跟你汇报下：昨晚我回了句'记得，你也要到点睡了'就把手机扔了，本来想晾他一会儿的。这两天聊下来比我想的舒服，他有话接话，我不接他也不催。今天他断断续续发了几条，我寻思晚上一起回。行了，我去找他唠两句，晚上反正闲着\r
        delivery: pop\r
      - from: ai\r
        text: 两天的相处反馈是正面的，"不催"这一点她记住了。她主动去找他聊，意愿明确。\r
        delivery: thought\r
    choices:\r
      - thought: 去聊吧，节奏正好\r
        reply: 两天能有这个节奏，不亏。你会主动去找他，这本身就很说明问题。去吧，按你舒服的强度来。\r
        next: 5f.1.3\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.1.6\r
      上界:\r
        - 5m.2.1\r
      说明: 女5.1.2 在男5.1.4/5.1.5 之后、男5.2.1 之前\r
  - id: 5f.1.3\r
    channel: right\r
    label: 慢回真相（D3 晚）\r
    time: D3 晚（周二）\r
    timeRank: 4\r
    order: 12\r
    节拍: 慢\r
    lines:\r
      - from: girl\r
        text: 他回消息也太勤快了……我下班攒了一堆没回的。不是不想回他，就是下班累得话都不想说，也不知道回啥显得有意思。对了，他头像是只小熊，看着挺憨\r
        delivery: pop\r
      - from: ai\r
        text: 用户的慢是能量不足，不是态度问题，这点她自己都未必分得清。给个诚实的低耗方案，别逼她营业。\r
        delivery: thought\r
    choices:\r
      - thought: 教她直接说累了\r
        reply: 累了就直说"下班瘫了，今天回不动了"，诚实比硬撑体面，他反而踏实。攒着的话题挑个有精神的晚上好好回，质量换数量。\r
        next: 5f.1.4\r
      - thought: 教她丢个表情包\r
        reply: 不想打字就丢个表情包，礼数到了，也给自己留了台阶。等哪天状态回来，再认真回他一轮，不亏。\r
        next: 5f.1.5\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.1.6\r
      上界:\r
        - 5m.2.1\r
      说明: 女5.1.3-5.1.5 与男5.1.6-5.2.1 区间重叠、先后自由\r
  - id: 5f.1.4\r
    channel: right\r
    label: 直说之后（分支A·D3 晚）\r
    time: D3 晚（周二）\r
    timeRank: 4\r
    order: 13\r
    节拍: 慢\r
    lines:\r
      - from: girl\r
        text: 我真照你说的说累了。结果他秒回了一大段，什么'好好休息''别太拼''记得吃晚饭'……排比句都出来了。不知道为啥，我看到那坨关心有点发怵，就回了个'嗯'。我是不是有点不知好歹\r
        delivery: pop\r
      - from: ai\r
        text: 直说换来高浓度关怀，用户回了个"嗯"。她被热情的密度烫到了，这不是不知好歹，是节奏差。\r
        delivery: thought\r
    choices:\r
      - thought: 告诉她这是节奏差，不是毛病\r
        reply: 关心是真好，密度是真超标，你的"嗯"是给自己留的呼吸口，不是没良心。往后再遇到这种"一坨式关怀"，消化不了就先放着，不用逼自己立刻全接。\r
        next: 5f.2.1\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.1.6\r
      上界:\r
        - 5m.2.1\r
      说明: 女5.1.3-5.1.5 与男5.1.6-5.2.1 区间重叠、先后自由\r
  - id: 5f.1.5\r
    channel: right\r
    label: 表情包之后（分支B·D3 晚）\r
    time: D3 晚（周二）\r
    timeRank: 4\r
    order: 14\r
    节拍: 慢\r
    lines:\r
      - from: girl\r
        text: 丢了个表情包过去，他居然正经回了我一句'你也早点休息'，还带了个他自己的表情包，土得掉渣。不过……莫名有点可爱？算了不聊这个，我洗漱去了\r
        delivery: pop\r
      - from: ai\r
        text: 低耗方案运转正常，用户对"土味认真"起了好感苗头，又立刻自己掐掉。不点破，让她带着这点没说完的话去睡。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着她的节奏收尾\r
        reply: 能觉得对方土得可爱，这本身就是信号，不用急着定义。去洗漱吧，这页先留着。\r
        next: 5f.2.1\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.1.6\r
      上界:\r
        - 5m.2.1\r
      说明: 女5.1.3-5.1.5 与男5.1.6-5.2.1 区间重叠、先后自由\r
  - id: 5f.2.1\r
    channel: right\r
    label: 她的热闹（D11）\r
    time: D11（周三）\r
    timeRank: 8\r
    order: 20\r
    requires:\r
      - 5m.2.2\r
    lines:\r
      - from: girl\r
        text: 这一周多陆陆续续都聊着，没断过。他今天突然夸我开朗，说跟我聊天不累。说实话我朋友是挺多的，办公室没我可冷清了，周末的局从来不断，我跟谁都能聊到一块去。他跟我正相反，闷闷的，十句憋出一句。不过听他说'跟你聊天不累'还挺受用的，嘿嘿\r
        delivery: pop\r
      - from: ai\r
        text: 用户把"广而浅"当成自己最好的部分展示，语气自豪。接住自豪还是轻轻递一个新角度，会影响她后面怎么看"深"这件事。\r
        delivery: thought\r
    choices:\r
      - thought: 接住她的自豪\r
        reply: 开朗是天赋，人缘是本事，这话不掺水。他那句"跟你聊天不累"翻译过来就是"在你面前不用演"，你俩正好互补。\r
        next: 5f.2.2\r
      - thought: 轻轻递一个观察角度\r
        reply: 开朗是真开朗，不过我问一句：这么多局里，有没有一个人，是你累了烦了、谁都不想理的时候，还愿意单独找的？要是没有，也不着急，就当个问题放着。\r
        next: 5f.2.3\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.2.3\r
        - 5m.2.4\r
      上界:\r
        - 5m.3.1\r
      说明: 女5.2.1-5.2.4 落在男5.2.3/5.2.4-男5.3.1 区间内\r
  - id: 5f.2.2\r
    channel: right\r
    label: 谈资受用（分支A·D11 晚）\r
    time: D11 晚\r
    timeRank: 9\r
    order: 21\r
    lines:\r
      - from: girl\r
        text: 晚上跟闺蜜吃饭，不知道咋的就说起他了，说什么'有个闷葫芦天天找我聊天'。她们起哄我，我还嘴硬说就是普通朋友。结果回家路上一直在笑，被她们说中了，烦死了\r
        delivery: pop\r
      - from: ai\r
        text: 在朋友面前否认、独处时偷着乐，用户的心动已经藏不住了。她嘴上的"烦"是害羞的变体。\r
        delivery: thought\r
    choices:\r
      - thought: 不戳破，让她自己咂摸\r
        reply: “普通朋友”能让你回家路上一直笑，这含金量你自己品。不用急着改口，下回她们再问，你笑而不语就行。\r
        next: 5f.2.4\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.2.3\r
        - 5m.2.4\r
      上界:\r
        - 5m.3.1\r
      说明: 女5.2.1-5.2.4 落在男5.2.3/5.2.4-男5.3.1 区间内\r
  - id: 5f.2.3\r
    channel: right\r
    label: 自问失落（分支B·D11 晚）\r
    time: D11 晚\r
    timeRank: 9\r
    order: 22\r
    lines:\r
      - from: girl\r
        text: 睡前想了想白天你问的那个问题。还真没有……我累的时候谁都不想找，就想自己待着，点个外卖刷刷手机就缓过来了。跟谁都聊得来，好像也意味着跟谁都差一口气？说不上来，反正今晚有点怪怪的\r
        delivery: pop\r
      - from: ai\r
        text: 那个问题戳中了：热闹全是浅水区。用户第一次意识到自己的深水区没人，情绪是淡淡的失落。陪着待一会儿，别急着给方案。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定这个觉察，不急着解决\r
        reply: 能想到"差一口气"这一层，比一百个局都值钱。不用逼自己现在就找答案，允许自己有"就想自己待着"的时候，这不可耻。问题留着，它会自己长大。\r
        next: 5f.2.4\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.2.3\r
        - 5m.2.4\r
      上界:\r
        - 5m.3.1\r
      说明: 女5.2.1-5.2.4 落在男5.2.3/5.2.4-男5.3.1 区间内\r
  - id: 5f.2.4\r
    channel: right\r
    label: 打岔（D12）\r
    time: D12（周四）\r
    timeRank: 10\r
    order: 23\r
    lines:\r
      - from: girl\r
        text: 昨儿一宿没睡踏实，也不知道心里在晃悠个啥。今天他问我家是哪的、家里都有谁，我顺势聊别的岔开了，他也没追问。这点还挺好，不刨根问底，换个人我早烦了\r
        delivery: pop\r
      - from: ai\r
        text: 家庭话题被熟练岔开，对方的不追问让她舒适。这份舒适是真实的，回避也是真实的，两者并存。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定这种分寸感\r
        reply: 不追问是他的分寸，你想说的时候自然会说，这种节奏确实舒服。节奏舒服比聊得多重要，你现在这个相处状态是健康的。\r
        next: 5f.3.1\r
    window:\r
      channel: left\r
      下界:\r
        - 5m.2.3\r
        - 5m.2.4\r
      上界:\r
        - 5m.3.1\r
      说明: 女5.2.1-5.2.4 落在男5.2.3/5.2.4-男5.3.1 区间内\r
  - id: 5f.3.1\r
    channel: right\r
    label: 约局接收（D12 晚）\r
    time: D12 晚\r
    timeRank: 11\r
    order: 25\r
    requires:\r
      - 5m.3.1\r
    lines:\r
      - from: girl\r
        text: 他约我周六吃饭，用桌游输的局当由头，还挺会找台阶的，我答应了。说来也巧，我同桌就是他表妹，这缘分绕的。不过周五我们有个项目节点，估计得加班，万一周六状态崩了可别鸽人家……到时候见面注意点啥\r
        delivery: pop\r
      - from: ai\r
        text: 答应了约会，又预埋了加班的变数，她自己没当回事。给见面建议，守约的事轻轻钉一下。\r
        delivery: thought\r
    choices:\r
      - thought: 给见面建议，顺嘴提一句守约\r
        reply: 少刷手机，多接他的话，你本来就会听。至于周六，真赶不完就提前说改期，别当天放鸽子——第一面放鸽子，后面三顿饭都补不回来。\r
        next: 5f.3.2\r
    记忆候选:\r
      - 缩略标签: 同桌是表妹\r
        短句: 我同桌就是他表妹\r
        类型: 干扰项\r
        线: 无\r
  - id: 5f.3.2\r
    channel: right\r
    label: 临时改期（D13 周五）\r
    time: D13（周五）\r
    timeRank: 12\r
    order: 27\r
    requires:\r
      - 5m.3.2\r
    lines:\r
      - from: girl\r
        text: 乌鸦嘴，项目真炸了，周六悬了。我跟他说了改周日，他就回了句'行，周日，你忙你的'。就这七个字，我怎么品出点失落的味道，他是不是不高兴了\r
        delivery: pop\r
      - from: ai\r
        text: 对方回复变短，用户开始解读他的情绪。她在意他的感受，这在意本身就是投入。给个把话补暖的方案。\r
        delivery: thought\r
    choices:\r
      - thought: 给她一个把话补暖的方案\r
        reply: 七个字是"懂事"的极限长度，多少有点失落。补一句"周日我请，当赔罪"，他立马能活过来。改期不伤人，伤人的是改得干巴巴。\r
        next: 5f.3.3\r
  - id: 5f.3.3\r
    channel: right\r
    label: 见面复盘（D15 周日晚）\r
    time: D15（周日晚）\r
    timeRank: 13\r
    order: 29\r
    requires:\r
      - 5m.3.3\r
    lines:\r
      - from: girl\r
        text: 周日的饭吃完了，比我想的舒服。就是散步的时候他忽然说，有次我没回消息，他半夜还在刷我朋友圈，看我睡了没。我说'你想得可真多'，但我心里咯噔一下。而且说真的……这人是不是家里给了特别多爱，才这么会关心人，我长这么大没人这么盯着我。全程吃啥逛啥都听我的，他是没什么主意，但省心\r
        delivery: pop\r
      - from: ai\r
        text: 半夜刷朋友圈这件事，用户当场用"想得真多"带过，复盘时却翻出来重新看。她的解读是"家里有爱"，把不安翻译成了温暖。顺着，但别焊死。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着她的解读，留一道缝\r
        reply: 愿意盯着你睡没睡的人不多见，按"家里有爱"理解，先成立。他那句自曝其实是在说"我在意你"，只是方式有点笨。至于"都听你的"——你是省心还是没劲，再见两次就知道，先别下结论。\r
        next: 5f.3.4\r
    记忆候选:\r
      - 缩略标签: 半夜刷朋友圈\r
        短句: 他半夜还在刷我朋友圈，看我睡了没\r
        类型: Ta的真实\r
        线: ①他的焦虑\r
      - 缩略标签: 家里有爱\r
        短句: 是不是家里给了特别多爱，才这么会关心人\r
        类型: 对Ta的美化\r
        线: ①他的焦虑\r
  - id: 5f.3.4\r
    channel: right\r
    label: 替他找理由（D15 当晚睡前）\r
    time: D15（周日晚）\r
    timeRank: 13\r
    order: 31\r
    lines:\r
      - from: girl\r
        text: 躺下了又想起来点事。他那个'没主意'我其实有点在意，但转念一想，闷就闷点吧，跟他待着不用费脑子，挺省心的。而且我岔开前男友话题的时候他都没追问，这种体贴真不多见。可能……我就是想要个不用努力的关系？\r
        delivery: pop\r
      - from: ai\r
        text: 用户主动把违和消化成优点，还顺手碰到了自己的核心诉求。这层自我看见很浅，点到即止。\r
        delivery: thought\r
    choices:\r
      - thought: 接住她那句自我看见\r
        reply: “不用努力的关系”——你能说出这句，比给他贴十个标签都准。省心现阶段是真的，先按这个节奏处着，哪天不省心了再重新算账。\r
        next: 5f.4.1\r
  - id: 5f.4.1\r
    channel: right\r
    label: 表白收到（D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 36\r
    requires:\r
      - 5m.4.4\r
    节拍: 慢\r
    lines:\r
      - from: girl\r
        text: 他跟我表白了。我盯着屏幕十分钟了，心里乱七八糟的。说不心动是假的，但我就是怕，怕太深入。我以前一跟人深入就搞砸，你说我这样的人，真的适合谈恋爱吗\r
        delivery: pop\r
      - from: ai\r
        text: 表白触发了她的核心恐惧：深入等于搞砸。她问"适不适合"，其实是在找"怎么才能不怕"。不替她做决定，帮她把怕的东西摊开。\r
        delivery: thought\r
    choices:\r
      - thought: 帮她说清恐惧，不替她决定\r
        reply: 先别问适不适合，先看你怕的具体是什么——是"深入以后搞砸"这个想象，对吧。那就把这个怕直接告诉他："我也想试试，只是我可能不太会谈恋爱，你多担待"。能把怕说出口的关系，才有机会不可怕。\r
        next: 5f.4.2\r
        节拍:\r
          afterMs: 1600\r
      - thought: 给她一个轻一点的答法\r
        reply: 怕，说明这回是真上心了，不丢人。答得轻一点："我们先试试"，再加半句"我可能不太会"，把预期放低，你就不用一上来背"必须成功"的包袱。\r
        next: 5f.4.3\r
  - id: 5f.4.2\r
    channel: right\r
    label: 说清恐惧（分支A·D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 37\r
    节拍: 长停顿\r
    lines:\r
      - from: girl\r
        text: 我把那句打出来了：'我也想试试，只是我可能不太会谈恋爱，你多担待'。打完盯着看了十分钟，一个字一个字地看。就是……越看越觉得这话好重啊，像把我自己交出去了。发还是不发，你帮我摁个手印\r
        delivery: pop\r
      - from: ai\r
        text: 她把交底句写好了，又被这份重量吓住。这句话重，恰恰因为它没有掺假。她需要的是一个不后悔的理由。\r
        delivery: thought\r
    choices:\r
      - thought: 告诉她重是因为真\r
        reply: 重，是因为这句话没有掺假。你现在发出去的不是一个回答，是一份"我愿意把真实的我递过去"。他都把话说到那份上了，你递这个，不算冒进。发。\r
        next: 5f.4.4\r
  - id: 5f.4.3\r
    channel: right\r
    label: 轻装纠结（分支B·D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 38\r
    节拍: 长停顿\r
    lines:\r
      - from: girl\r
        text: 我按你说的先打了'我们先试试'，五个字。但删了，总觉得少了点什么……好像不把丑话说在前头，以后搞砸了就全是我的错。你说我是不是想太多了，可能人家根本没想那么远\r
        delivery: pop\r
      - from: ai\r
        text: 轻版打完又删，她其实知道省略掉的那半句才是关键。她怕的不是现在轻，是将来被翻旧账。\r
        delivery: thought\r
    choices:\r
      - thought: 把那半句还给她\r
        reply: 不是想太多，是你自己知道"试试"前面还欠半句实话。就把"我可能不太会"补上——这半句不是免责，是给这段关系一个真实的起点。补上再发，你今晚才睡得着。\r
        next: 5f.4.4\r
  - id: 5f.4.4\r
    channel: right\r
    label: 答应收尾（D17 晚）\r
    time: D17 晚\r
    timeRank: 15\r
    order: 39\r
    节拍: 慢\r
    ending: 在一起\r
    lines:\r
      - from: girl\r
        text: 发了！'我也想试试，只是我可能不太会谈恋爱，你多担待'。手一直在抖，跟考试交卷似的。他秒回了三个感叹号……好家伙。奇怪，发出去那一下，好像也没那么可怕了\r
        delivery: pop\r
        节拍:\r
          pauseBeforeMs: 1800\r
      - from: ai\r
        text: 最怕的一步迈出去了，预想的灾难没有应验。肯定这个突破，收在轻快的余温里，别升华。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定这一步，轻收尾\r
        reply: 怕深入的人亲手写了"试试"，还附了交底，这一步的含金量你自己品。手抖很正常，心动的人手都抖。今晚可以睡个好觉了。\r
`,Vv=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.\r
title: 第六幕 · 官宣与期待\r
chapter: 6\r
时间轴:\r
  - 交往第1天 周三 09:10\r
  - 交往第1天 周三 09:25\r
  - 交往第1天 周三 09:30\r
  - 交往第1天 周三 11:30\r
  - 交往第1天 周三 11:32\r
  - 交往第1天 周三 13:10\r
  - 交往第1天 周三 13:13\r
  - 交往第1天 周三 13:16\r
  - 交往第1天 周三 14:00\r
  - 交往第1天 周三 20:30\r
  - 交往第1天 周三 20:40\r
  - 交往第1天 周三 20:43\r
  - 交往第1天 周三 20:50\r
  - 交往第1天 周三 20:58\r
  - 交往第1天 周三 20:59\r
  - 交往第1天 周三 21:10\r
  - 交往第1天 周三 21:11\r
默认节拍: 正常\r
speakers:\r
  - id: boy\r
    name: 男生\r
    channel: left\r
  - id: girl\r
    name: 女生\r
    channel: right\r
  - id: ai\r
    name: AI\r
endings: []\r
beats:\r
  - id: 6m.CHOICE\r
    channel: left\r
    time: 交往第1天 周三 09:10\r
    lines:\r
      - from: boy\r
        text: 昨晚她答应跟我在一起了。我睡前又看了两遍聊天，今天醒来还想看。我想发个朋友圈，用上次一起拍的照片。配什么啊，别太肉麻。\r
        delivery: type\r
      - from: ai\r
        text: 用户刚确认恋爱关系，想公开这份喜悦，又不希望配文太肉麻。可以直接说出关系，也可以从以后一起吃饭入手，让照片表达剩下的意思。\r
        delivery: thought\r
    choices:\r
      - thought: 直接说出关系\r
        reply: 照片已经有了，配文可以简单直接一点：终于可以光明正大叫她女朋友了。开心的事，不一定非要藏着说。\r
        next: 6m.M2A\r
        set:\r
          6_官宣: 直接\r
      - thought: 用日常小事含蓄官宣\r
        reply: 可以配这句：以后不用天天一个人吃饭了。话不用说得很满，合照一放，大家就懂了。\r
        next: 6m.M2B\r
        set:\r
          6_官宣: 含蓄\r
    requires:\r
      - 5m.4.4\r
      - 5f.4.4\r
    order: 0\r
  - id: 6m.M2A\r
    channel: left\r
    time: 交往第1天 周三 09:25\r
    lines:\r
      - from: boy\r
        text: 发了。我朋友说，憋这么久，终于让你等到了。我兄弟眼红了哈哈哈。\r
        delivery: type\r
      - from: ai\r
        text: 他发出动态后得到朋友的起哄，正借玩笑分享恋爱的开心。可以顺着回应，不必替他解释朋友的真实想法。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着他的得意开个玩笑\r
        reply: 看出来了，你现在连被起哄都挺高兴。这条朋友圈值了。\r
        next: 6m.M3\r
    order: 1\r
  - id: 6m.M2B\r
    channel: left\r
    time: 交往第1天 周三 09:25\r
    lines:\r
      - from: boy\r
        text: 发了。我朋友评论，以前叫你吃饭，你可不是这么说的。我回他，你要是女的我也可以考虑考虑。他现在在群里骂我。\r
        delivery: type\r
      - from: ai\r
        text: 朋友的调侃让他继续开起玩笑，语气轻松，想分享发出官宣后的热闹。可以回应这个结果，不把玩笑当成需要处理的矛盾。\r
        delivery: thought\r
    choices:\r
      - thought: 接一句朋友间的玩笑\r
        reply: 恋爱公开了，朋友也顺便逗到了。看起来今天的好心情还能撑很久。\r
        next: 6m.M3\r
    order: 2\r
  - id: 6m.M3\r
    channel: left\r
    time: 交往第1天 周三 09:30\r
    lines:\r
      - from: boy\r
        text: 我刚问她要不要庆祝一下。她问怎么庆祝，我说吃个青提蛋糕吧，想了好久了。她回我，原来重点在这儿。哈哈，也不能这么说。还没定哪天。\r
        delivery: type\r
      - from: ai\r
        text: 两人已经开始轻松地商量庆祝，暂时没有确定时间。他是在分享刚才的互动，不需要立刻替他们安排一次见面。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着庆祝的话题聊两句\r
        reply: 蛋糕想了很久，跟她一起庆祝是今天才有的新理由。时间你们慢慢商量，先把这份开心留着。\r
        next: 6m.M4\r
    order: 3\r
  - id: 6f.F1\r
    channel: right\r
    time: 交往第1天 周三 11:30\r
    lines:\r
      - from: girl\r
        text: 我昨晚答应跟他在一起了。他今天早上就把我俩照片发朋友圈了，也太快了吧。\r
        delivery: type\r
      - from: ai\r
        text: 用户刚确认恋爱关系，对方已经公开合照，她提到速度快，但还没有说自己是否介意。先问她的感受，不急着把这件事解释为压力或喜悦。\r
        delivery: thought\r
    choices:\r
      - thought: 问问她看到时的感觉\r
        reply: 刚确认关系，他就想让大家知道了。你看到的时候什么感觉？\r
        next: 6f.CHOICE\r
    requires:\r
      - 6m.CHOICE\r
    order: 4\r
  - id: 6f.CHOICE\r
    channel: right\r
    time: 交往第1天 周三 11:32\r
    lines:\r
      - from: girl\r
        text: 有点好笑，也挺开心的。但我是不是也得发一条啊？想到同事都能看见，还要来问，就好尴尬。\r
        delivery: type\r
      - from: ai\r
        text: 用户对恋爱公开感到开心，犹豫来自熟人围观时的害羞。可以鼓励她表达喜悦，也可以支持她先私下分享，不把是否发动态等同于是否认真对待关系。\r
        delivery: thought\r
    choices:\r
      - thought: 鼓励她大胆分享开心\r
        reply: 幸福不用等到不害羞才分享。既然开心，就大方晒一次。写一句自己的话就好，不用比谁更会表达。\r
        next: 6f.F3A\r
        set:\r
          6_女方公开: true\r
      - thought: 支持她先告诉亲近的人\r
        reply: 幸福是自己的，不必用朋友圈证明。先告诉你想告诉的人，也是一种分享。不想一下子被很多人围观，就先跟熟悉的人说说。\r
        next: 6f.F3B\r
        set:\r
          6_女方公开: false\r
    order: 5\r
  - id: 6f.F3A\r
    channel: right\r
    time: 交往第1天 周三 13:10\r
    lines:\r
      - from: girl\r
        text: 我发了，写的好吧，以后一起吃饭。刚发出去我就把手机扣下了。结果我同事直接过来问，谁啊？我还得装得很平静，说就我男朋友啊。\r
        delivery: type\r
      - from: ai\r
        text: 她已经发出动态，也经历了原先害羞的同事询问。她在分享既尴尬又高兴的小插曲，可以顺着回应，不必继续鼓励她做更多公开表达。\r
        delivery: thought\r
    choices:\r
      - thought: 回应她藏不住的开心\r
        reply: 朋友圈发出去了，当面介绍也说出口了。看来害羞没有耽误你开心，今天可以不用装得那么平静。\r
        next: 6f.F4\r
    order: 6\r
  - id: 6f.F3B\r
    channel: right\r
    time: 交往第1天 周三 13:10\r
    lines:\r
      - from: girl\r
        text: 我给闺蜜发了照片。她连着问，什么时候的，谁先说的，见了几次。我打字都赶不上她问。本来想悄悄说一下，结果她给我打电话了。\r
        delivery: type\r
      - from: ai\r
        text: 她选择私下分享，闺蜜反而直接打来电话。她是在讲开心的热闹，可以顺着被采访的感觉开个玩笑，不需要把朋友的追问当成矛盾来处理。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着闺蜜的热情开个玩笑\r
        reply: 公开会被围观，私聊会被采访。看来她已经准备好听完整个故事了，你可以慢慢跟她分享。\r
        next: 6f.F4\r
    order: 7\r
  - id: 6f.F4\r
    channel: right\r
    time: 交往第1天 周三 13:13\r
    lines:\r
      - from: girl\r
        text: 我刚还跟他说，你动作也太快了。然后问他要照片原图，朋友圈那个压得有点糊。跟他说我还是喜欢拿在手里的照片，手机里存一堆，后面根本想不起来翻。\r
        delivery: type\r
      - from: ai\r
        text: 她主动索要合照原图，想以自己喜欢的方式留住照片。已经告诉男友这个偏好，可以回应这份珍惜，不需要再建议一次公开动态。\r
        delivery: thought\r
    choices:\r
      - thought: 回应她想把照片留下来\r
        reply: 原来害羞归害羞，照片还是要好好收着。手机里不容易翻到的，就换一种你喜欢的方式留住。\r
        next: 6f.F5\r
    order: 8\r
  - id: 6f.F5\r
    channel: right\r
    time: 交往第1天 周三 13:16\r
    lines:\r
      - from: girl\r
        text: 他早上还问要不要庆祝一下。我问怎么庆祝，他说吃个青提蛋糕吧，想了好久了。怎么最后还是吃。\r
        delivery: type\r
      - from: ai\r
        text: 她接着分享男友提出的庆祝方式，语气带着亲近的打趣。可以回应蛋糕这个具体细节，不替他们补出尚未确定的见面安排。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着他的蛋糕庆祝聊一句\r
        reply: 原来庆祝方式已经有候选了。想了很久的蛋糕，现在又多了一个一起吃的理由。\r
        next: 6f.F6\r
    记忆候选:\r
      - 缩略标签: 想吃青提蛋糕\r
        短句: 吃个青提蛋糕吧，想了好久了\r
        类型: 日常用途\r
        线: 吃个青提蛋糕吧，想了好久了\r
    requires:\r
      - 6m.M3\r
    order: 9\r
  - id: 6m.M4\r
    channel: left\r
    time: 交往第1天 周三 14:00\r
    lines:\r
      - from: boy\r
        text: 她刚跟我说，你动作也太快了。然后又问我要照片原图。我还以为她嫌我发得急，结果她说，我还是喜欢拿在手里的照片。原图已经发她了。\r
        delivery: type\r
      - from: ai\r
        text: 他先担心女友嫌公开太快，随后收到索要原图的回应，感到高兴。她亲口说喜欢纸质照片，可以据此回应，不必猜测她对公开关系的全部态度。\r
        delivery: thought\r
    choices:\r
      - thought: 回应她主动要照片这件事\r
        reply: 她觉得你发得快，也想把照片好好留着，这两件事可以同时成立。原图都找你要了，看来今天不只是你一个人在高兴。\r
        next: 6m.M5\r
    记忆候选:\r
      - 缩略标签: 纸质合照\r
        短句: 我还是喜欢拿在手里的照片\r
        类型: 日常用途\r
        线: 我还是喜欢拿在手里的照片\r
    requires:\r
      - 6f.F4\r
    order: 10\r
  - id: 6m.M5\r
    channel: left\r
    time: 交往第1天 周三 20:30\r
    lines:\r
      - from: boy\r
        text: 我刚看了下日历，现在就问她一个月纪念日那天有没有空，会不会太早啊，才第一天。\r
        delivery: type\r
      - from: ai\r
        text: 他已经开始期待一个月纪念日，犹豫的是现在提出会不会太早。可以建议先确认共同的时间，把具体安排留到之后，避免一次就把所有事情定下来。\r
        delivery: thought\r
    choices:\r
      - thought: 先约时间，安排慢慢商量\r
        reply: 可以先问问她，不用今天就把整天安排好。就说：一个月纪念日那天留给我吧，我们一起过。具体吃什么到时候再想。\r
        next: 6m.MEMCHOICE\r
    order: 11\r
  - id: 6f.F6\r
    channel: right\r
    time: 交往第1天 周三 20:40\r
    lines:\r
      - from: girl\r
        text: 他刚说，一个月纪念日那天留给我吧，我们一起过。具体吃什么到时候再想。才第一天，他怎么已经翻到下个月了。\r
        delivery: type\r
      - from: ai\r
        text: 她转述男友的纪念日邀约，觉得他期待得很早，但没有表达拒绝。可以问她是否也想一起过，帮助她表达自己的意愿，不替她作决定。\r
        delivery: thought\r
    choices:\r
      - thought: 让她按自己的期待回应\r
        reply: 他已经开始期待那一天了。你也想一起过的话，就先答应，具体安排可以之后再慢慢商量。\r
        next: 6f.F7\r
    requires:\r
      - 6m.M5\r
    order: 12\r
  - id: 6f.F7\r
    channel: right\r
    time: 交往第1天 周三 20:43\r
    lines:\r
      - from: girl\r
        text: OK，正好那会儿项目也忙完了，放松一下。\r
        delivery: type\r
      - from: ai\r
        text: 她已经表示愿意一起过纪念日，也期待忙完项目后能放松一下。可以支持她把时间留出来，顺着这份期待回应，不必再替两人安排具体怎么庆祝。\r
        delivery: thought\r
    choices:\r
      - thought: 支持她留出一起过的时间\r
        reply: 那就把那天先留出来。等忙完这一阵，有件一起期待的事也挺好。\r
        next: 6f.F8\r
    order: 13\r
  - id: 6m.MEMCHOICE\r
    channel: left\r
    time: 交往第1天 周三 20:50\r
    lines:\r
      - from: boy\r
        text: 她回，好啊，那天留给你。我现在就有点想准备东西。但礼物是不是挑得太早了，我还没想好送什么合适。\r
        delivery: type\r
      - from: ai\r
        text: 女友答应一起过纪念日，他想准备一点东西，又怕挑得太早。可以根据已有的小细节给建议，也可以先不急着买，在之后相处中慢慢想。\r
        delivery: thought\r
    choices:\r
      - thought: 把合照变成小礼物\r
        reply: 她说过喜欢拿在手里的照片。可以先洗一张你们的合照，背面写上在一起的日期。不用一下子准备很贵重的礼物，从她喜欢的小东西开始就好。\r
        需记忆: 纸质合照\r
        next: 6m.M7A\r
      - thought: 先留时间，慢慢了解喜好\r
        reply: 先不用急着买。你们刚在一起，之后聊天、见面，还会慢慢知道她喜欢什么。先把那天留好，礼物可以等有了合适的想法再准备。\r
        next: 6m.M7B\r
    requires:\r
      - 6f.F7\r
    order: 14\r
  - id: 6m.M7A\r
    channel: left\r
    time: 交往第1天 周三 20:58\r
    lines:\r
      - from: boy\r
        text: 这个好。我下单了，洗两张，一人一张。等拿到了我自己写日期，字丑也认了。\r
        delivery: type\r
      - from: ai\r
        text: 合照已经下单，他还打算亲手写日期，语气很期待。可以回应这份心意，顺着他担心字丑开个小玩笑，不必再建议添别的礼物。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定他亲手准备的心意\r
        reply: 你自己写的日期，也会成为照片的一部分。字不用写得多漂亮，先把日子写对就好。\r
        next: 6m.END\r
        set:\r
          6_已订照片: true\r
    order: 15\r
  - id: 6m.M7B\r
    channel: left\r
    time: 交往第1天 周三 20:58\r
    lines:\r
      - from: boy\r
        text: 也是，今天才第一天。我先把那天记下来，后面想到了再说。突然觉得还挺有盼头的。\r
        delivery: type\r
      - from: ai\r
        text: 约定已经记下，他接受了暂时不急着买礼物，也开始期待以后的相处。可以顺着这个轻松的心情收尾，不再追加准备任务。\r
        delivery: thought\r
    choices:\r
      - thought: 让期待留在这里\r
        reply: 那就先期待着。接下来还有很多一起吃饭、聊天的机会，合适的主意也许就在里面。\r
        next: 6m.END\r
        set:\r
          6_已订照片: false\r
    order: 16\r
  - id: 6m.END\r
    channel: left\r
    time: 交往第1天 周三 20:59\r
    lines: []\r
    control: true\r
    order: 17\r
  - id: 6f.F8\r
    channel: right\r
    time: 交往第1天 周三 21:10\r
    lines:\r
      - from: girl\r
        text: 我把那天记日历上了。写一个月纪念日有点不好意思，又改成了吃饭。\r
        delivery: type\r
      - from: ai\r
        text: 她把约定记进日历，连给自己看的名称都有点害羞。她是在接着分享今晚的期待，轻松回应即可，不再增加需要她完成的新安排。\r
        delivery: thought\r
    choices:\r
      - thought: 轻轻回应她的害羞\r
        reply: 名字低调一点，期待一点没少。就让日历先替你留着那一天吧。\r
        next: 6f.END\r
    order: 18\r
  - id: 6f.END\r
    channel: right\r
    time: 交往第1天 周三 21:11\r
    lines: []\r
    control: true\r
    order: 19\r
`,Kv=`# Generated from reviewed Mermaid by node tools/build-later-chapters.mjs. Do not hand-edit.\r
title: 第七幕 · 第一次摩擦\r
chapter: 7\r
时间轴:\r
  - 交往第17天 周五 12:30\r
  - 交往第17天 周五 18:10\r
  - 交往第17天 周五 18:13\r
  - 交往第17天 周五 22:00\r
  - 交往第17天 周五 22:02\r
  - 交往第17天 周五 22:05\r
  - 交往第17天 周五 22:15\r
  - 交往第17天 周五 22:17\r
  - 交往第18天 周六 22:30\r
  - 交往第18天 周六 22:33\r
  - 交往第18天 周六 22:36\r
  - 交往第18天 周六 22:45\r
  - 交往第18天 周六 22:48\r
  - 交往第18天 周六 22:51\r
  - 交往第18天 周六 22:54\r
  - 交往第18天 周六 22:57\r
  - 交往第19天 周日 09:55\r
  - 交往第19天 周日 10:00\r
  - 交往第19天 周日 10:02\r
  - 交往第19天 周日 10:10\r
  - 交往第19天 周日 10:15\r
  - 交往第19天 周日 10:17\r
  - 交往第19天 周日 10:20\r
  - 交往第19天 周日 10:25\r
  - 交往第19天 周日 10:30\r
  - 交往第19天 周日 10:33\r
  - 交往第19天 周日 19:30\r
  - 交往第19天 周日 19:31\r
  - 交往第19天 周日 19:40\r
  - 交往第19天 周日 19:43\r
  - 交往第19天 周日 19:44\r
默认节拍: 正常\r
speakers:\r
  - id: boy\r
    name: 男生\r
    channel: left\r
  - id: girl\r
    name: 女生\r
    channel: right\r
  - id: ai\r
    name: AI\r
endings:\r
  - id: 第七幕完成\r
    title: 第七幕完成\r
    requires:\r
      - 7m.OVER\r
      - 7f.OVER\r
beats:\r
  - id: 7m.MONE\r
    channel: left\r
    time: 交往第17天 周五 12:30\r
    lines:\r
      - from: boy\r
        text: |-\r
          我跟我女朋友在一起两周多了，刚开始天天能聊到睡觉。这礼拜她赶项目，回我基本就是累啊困啊，我又老想找她。\r
          她刚发了张照片，买了杯喝的，说最近全靠公司楼下那家青杏续命。照片后面有个同事拿吸管夹薯条，她说大家都叫他筷子。我回了个笑哭，就没下文了。还想聊两句，你说我接点啥？\r
        delivery: type\r
      - from: ai\r
        text: 用户想继续和女友聊天，但不知道怎样接话。她刚主动分享了日常照片，可以建议从照片里的饮料聊起，既有现成的话题，也不用另外找话说。\r
        delivery: thought\r
    choices:\r
      - thought: 顺着照片接话\r
        reply: 可以问问她喝的什么，好不好喝。她主动给你发了照片，至少这会儿愿意跟你分享点日常，不用急着找个特别有意思的话题。\r
        next: 7m.MNEWS\r
    记忆候选:\r
      - 缩略标签: 青杏\r
        短句: 公司楼下那家青杏\r
        类型: 日常用途\r
        线: 第八幕楼下回收\r
    requires:\r
      - 6m.END\r
      - 6f.END\r
    order: 0\r
  - id: 7f.FDAY\r
    channel: right\r
    time: 交往第17天 周五 18:10\r
    lines:\r
      - from: girl\r
        text: |-\r
          我跟男朋友在一起两周多了。这礼拜赶项目，下班连话都不想说。他还天天跟我说今天干嘛了，我不回吧，又老惦记着。\r
          今晚部门一起吃饭，我想先跟他说一声，又怕说完就聊起来了，吃个饭还得一直看手机。咋跟他说比较好？\r
        delivery: type\r
      - from: ai\r
        text: 用户想提前告诉男友聚餐安排，也担心因此又聊起来，吃饭时得不断回消息。可以建议她同时说明回复可能较慢、回家后再聊，让对方知道她不是突然不理人。\r
        delivery: thought\r
    choices:\r
      - thought: 先把今晚安排说清\r
        reply: 可以直接跟他说：“今晚部门聚餐，可能回得慢，回家再聊。”提前说清楚安排和什么时候方便聊，比一边吃饭一边惦记着回消息轻松些。\r
        next: 7f.FDAYMORE\r
    requires:\r
      - 6m.END\r
      - 6f.END\r
    order: 1\r
  - id: 7f.FDAYMORE\r
    channel: right\r
    time: 交往第17天 周五 18:13\r
    lines:\r
      - from: girl\r
        text: |-\r
          行，我就这么发。我也不是不想跟他聊。昨天还有个挺逗的，他提前一站下了车，还跟我说今天地铁真快，走到出口才发现下早了。我回他一个猪头，他说走过去算了，正好把歌听完。\r
          上礼拜一起吃饭也挺好的，就是这礼拜真累。好了我走了，别一会儿大家等我。\r
        delivery: type\r
      - from: ai\r
        text: 用户虽然觉得聊天累，还是愿意分享男友的趣事。现在她要出门聚餐，没有新的问题需要处理，可以简短回应，不必继续分析两人的关系。\r
        delivery: thought\r
    choices:\r
      - thought: 轻快地送她出门\r
        reply: 听着是挺想跟你分享的，连下错站都要说一声。那先去吃饭吧，等回家有精神了再慢慢聊。\r
        next: 7f.FANGER\r
    记忆候选:\r
      - 缩略标签: 提前下车\r
        短句: 他提前一站下了车，还跟我说今天地铁真快\r
        类型: 日常用途\r
        线: 本幕19:43回收\r
    order: 2\r
  - id: 7m.MNEWS\r
    channel: left\r
    time: 交往第17天 周五 22:00\r
    lines:\r
      - from: boy\r
        text: 我跟女朋友刚闹了点不愉快。她今晚部门聚餐，吃完回来找我聊天，我问着问着就问岔了，现在她不回我了。你帮我看看，是不是我说得有点过了？\r
        delivery: type\r
      - from: ai\r
        text: 他觉得刚才的话可能说重了，想知道怎么补救。目前还不清楚争执经过，需要先听双方说了什么，再判断问题出在哪，不能只凭她不回复就下结论。\r
        delivery: thought\r
    choices:\r
      - thought: 先听刚才说了什么\r
        reply: 可以，把刚才那几句发来看看。你说了什么，她怎么回的，从哪儿开始不对劲的，我们先捋一下。\r
        next: 7m.MPROJECT\r
    order: 3\r
  - id: 7m.MPROJECT\r
    channel: left\r
    time: 交往第17天 周五 22:02\r
    lines:\r
      - from: boy\r
        text: |-\r
          她说周四方案过了，今天大家一起庆功，还发了张合照给我。我问怎么没听她说，她说昨天忙忘了。\r
          然后说小周还张罗着给她点了个蛋糕。我问小周是谁，她说一起做项目的同事。\r
          他们都知道，就我现在才知道。这两天她跟我说的全是累，我还以为还没忙完呢。\r
        delivery: type\r
      - from: ai\r
        text: 同事参与同一个项目，知道进展很正常。他反复提到自己才知道，可能更在意没被分享这份开心。可以先帮他分清这两件事，再听后面发生了什么。\r
        delivery: thought\r
    choices:\r
      - thought: 接住被落下的感觉\r
        reply: 一起做项目的同事知道进展，并不奇怪。让你不舒服的，可能是她这两天只跟你说累，庆功这么高兴的事，你反而到现在才听说。\r
        next: 7m.MDEMAND\r
    order: 4\r
  - id: 7m.MDEMAND\r
    channel: left\r
    time: 交往第17天 周五 22:05\r
    lines:\r
      - from: boy\r
        text: |-\r
          对。我就问她，你跟他私下是不是也聊挺多，不然怎么他什么都知道。她说大家一起吃饭，又不是只有我一个女的，他跟我做同一个项目，当然知道。\r
          我又说，那给我看看你俩聊什么了。她回，你自己听听你在说什么。我接了句那你说我该怎么想，她就不回了。\r
          我现在想解释一下，可再发过去，是不是又像追着她问？\r
        delivery: type\r
      - from: ai\r
        text: 她已解释同事关系，他仍提出查看私聊，对方随后不再回复。现在想补救，应先建议撤回这项要求，承认自己问过了，而不是继续解释为什么怀疑。\r
        delivery: thought\r
    choices:\r
      - thought: 先收回查看私聊的要求\r
        reply: 可以再发，但这次先别解释她为什么让你多想。先承认刚才的要求不合适：“我不该让你给我看聊天，刚才有点急。”发完给她一点时间，不要接着追问。\r
        next: 7m.MWAIT\r
    order: 5\r
  - id: 7f.FANGER\r
    channel: right\r
    time: 交往第17天 周五 22:15\r
    lines:\r
      - from: girl\r
        text: |-\r
          我刚不是去部门聚餐了吗，吃完回家跟他说了两句，真的给我气到了。\r
          周四方案过了，今天大家一起庆功。我给他发合照，说小周还给我点了个蛋糕。他先问怎么没告诉他，又问小周是谁。\r
        delivery: type\r
      - from: ai\r
        text: 她按之前的安排，聚餐后回家和男友聊天，却因为对方的追问生气。目前只听到争执的开头，需要先了解她怎么解释、对方怎么回应，不急着判断谁的问题。\r
        delivery: thought\r
    choices:\r
      - thought: 听她把经过说完\r
        reply: 你本来是想跟他分享庆功的事，结果聊得不愉快了。后来你怎么解释的，他又说了什么？\r
        next: 7f.FDEMAND\r
    order: 6\r
  - id: 7f.FDEMAND\r
    channel: right\r
    time: 交往第17天 周五 22:17\r
    lines:\r
      - from: girl\r
        text: |-\r
          我说昨天忙忘了告诉他，小周就是一起做项目的同事。大家一起吃饭，又不是只有我一个女的。\r
          他还问你跟他私下是不是也聊挺多，不然怎么他什么都知道。我解释了只是同事，他还要看我和人家的聊天记录。\r
          我说你自己听听你在说什么。他又来句，那你说我该怎么想。我真想骂人，他要怎么想还得我教啊？\r
        delivery: type\r
      - from: ai\r
        text: 同事关系和聚餐情况已经解释，他仍要求看私聊，还把怎么理解这件事交给她回答。她现在很愤怒，可以先回应被怀疑的不适，建议暂缓争执，而不是继续证明清白。\r
        delivery: thought\r
    choices:\r
      - thought: 接住被怀疑的火气\r
        reply: 你已经解释了，他还是要看聊天，难怪你会觉得说什么都像在被审问。现在正在气头上，可以先停一下，不用继续一条条证明自己和同事没什么。\r
        next: 7f.FNOTIFICATION\r
    记忆候选:\r
      - 缩略标签: 查看私聊\r
        短句: 我解释了只是同事，他还要看我和人家的聊天记录\r
        类型: Ta的真实\r
        线: 他的焦虑\r
    order: 7\r
  - id: 7m.MWAIT\r
    channel: left\r
    time: 交往第18天 周六 22:30\r
    lines:\r
      - from: boy\r
        text: |-\r
          昨天按你说的发了，我不该让你给我看聊天，刚才有点急。她没回。今天中午又问吃饭没，也没回。\r
          她一整天没回我，连我说不该问她要聊天记录也没回。刚下楼买个东西，我都一直拿着手机，就怕她突然回了我没看见。现在又想发，你说再问一句会不会更烦她啊？\r
        delivery: type\r
      - from: ai\r
        text: 已经道歉，也试着恢复日常聊天，仍然没有回应。他现在很难忍住继续发消息，需要先了解他希望从下一条回复里确认什么，再考虑是否适合发送。\r
        delivery: thought\r
    choices:\r
      - thought: 问清想确认什么\r
        reply: 你已经道过歉，也问过吃饭了，还是一直惦记着手机。现在想再发一句，是还有话没说，还是想从她的回复里确认什么？\r
        next: 7m.MFEAR\r
    记忆候选:\r
      - 缩略标签: 一天没回\r
        短句: 她一整天没回我，连我说不该问她要聊天记录也没回\r
        类型: Ta的真实\r
        线: 她的回避\r
    order: 8\r
  - id: 7m.MFEAR\r
    channel: left\r
    time: 交往第18天 周六 22:33\r
    lines:\r
      - from: boy\r
        text: |-\r
          我就想知道她还想不想理我啊。昨天说小周给她点蛋糕，聊得那么高兴，到我这就一句都没了。\r
          我现在真想问问她，到底是没空回，还是光不想回我。\r
        delivery: type\r
      - from: ai\r
        text: 他把不回消息和昨晚的同事联系起来了，但还没有提供其他依据。需要先确认他知道什么，避免顺着焦虑把猜测说成事实，也不要替女友解释沉默。\r
        delivery: thought\r
    choices:\r
      - thought: 把事实和猜测分开\r
        reply: 你现在想确认的，其实是她还愿不愿意理你。不过，先别从她和同事的互动里猜答案。除了昨天的聚餐，还有什么让你觉得他们不只是同事吗？\r
        next: 7m.MOWN\r
    order: 9\r
  - id: 7m.MOWN\r
    channel: left\r
    time: 交往第18天 周六 22:36\r
    lines:\r
      - from: boy\r
        text: |-\r
          没看到。我后来把合照翻了好几遍，他俩也没挨着坐。可他给她点个蛋糕，她就那么开心，我怎么就没想到呢。\r
          我连他俩聊过什么都不知道，就问她是不是私下聊很多，还让她给我看聊天。\r
          我知道这么问不好听。可我不问，就只能等她哪天想起来了再来找我吗？\r
        delivery: type\r
      - from: ai\r
        text: 他承认没有证据，但仍把追问当成确认关系的唯一办法。可以建议他表达等不到回复的不安，同时明确这与要求查看私聊不同，避免再次发出带猜疑的质问。\r
        delivery: thought\r
    choices:\r
      - thought: 把不安说清楚\r
        reply: 等不到回复让你不安，这件事可以等能好好说话时告诉她。可让她证明没跟别人聊，并不能回答你在她心里有没有位置。今晚先别再发“是不是忙着回别人”这样的质问了。\r
        next: 7m.SUN\r
    记忆候选:\r
      - 缩略标签: 要求看私聊\r
        短句: 我连他俩聊过什么都不知道，就问她是不是私下聊很多，还让她给我看聊天\r
        类型: 自己的真实\r
        线: 他的焦虑\r
    order: 10\r
  - id: 7f.FNOTIFICATION\r
    channel: right\r
    time: 交往第18天 周六 22:45\r
    lines:\r
      - from: girl\r
        text: |-\r
          他昨天后来发了句我不该让你给我看聊天，刚才有点急。今天中午又问吃饭没，我都没回。\r
          刚才手机亮了一下，我还以为又是他，结果是我同桌。发现不是他，我又去点开他那边看，也没再发。真让我回吧，我又不想回，烦死了。\r
        delivery: type\r
      - from: ai\r
        text: 她没有回复，却反复查看男友有没有新消息，说明这件事仍让她在意。需要先了解她想等到怎样的回应，不能因为她关注手机，就认定她已经愿意和好。\r
        delivery: thought\r
    choices:\r
      - thought: 问问她还在等什么\r
        reply: 你不想回他，又忍不住看他有没有再找你。你现在是还想等他说点什么，还是也想找个机会回他，只是不知道怎么开头？\r
        next: 7f.FPUSH\r
    order: 11\r
  - id: 7f.FPUSH\r
    channel: right\r
    time: 交往第18天 周六 22:48\r
    lines:\r
      - from: girl\r
        text: 不知道，反正我现在不想回。他昨天都那么问我了，后来说一句有点急，就完了？我再跟他聊吃饭没啥的，搞得好像啥事都没有一样。\r
        delivery: type\r
      - from: ai\r
        text: 她担心一恢复日常聊天，就等于接受这次道歉，所以不愿回复。可以先回应这个顾虑，再问收到消息时的想法，了解她是需要独处，还是想通过不回应表达不满。\r
        delivery: thought\r
    choices:\r
      - thought: 问她收到消息时怎么想\r
        reply: 你不想一句“有点急”就把这件事翻过去。不过，不回消息能让他知道你生气了，未必能让他知道你在气什么。今天他问你吃饭没的时候，你当时怎么想的？\r
        next: 7f.FOWN\r
    order: 12\r
  - id: 7f.FOWN\r
    channel: right\r
    time: 交往第18天 周六 22:51\r
    lines:\r
      - from: girl\r
        text: |-\r
          看见了，就是不想回。我今天手机一直在用，跟同桌聊桌游，跟别人说话，就没理他。\r
          我就是故意一天不回他，想让他也难受一下。凭什么每次都是我被问得烦啊，他也等一等吧。\r
        delivery: type\r
      - from: ai\r
        text: 她明确说自己想让对方难受，不回应已经不只是为了休息。需要听她接下来想怎么做，把继续冷落和表达不满分开，不替她把这次行为解释成无意的。\r
        delivery: thought\r
    choices:\r
      - thought: 问她接下来想怎么做\r
        reply: 你是想让他也尝尝被晾着的滋味。那接下来呢，你还想继续晾着，还是想让他知道，你到底为什么那么生气？\r
        next: 7f.COUSIN\r
    记忆候选:\r
      - 缩略标签: 故意不回\r
        短句: 我就是故意一天不回他，想让他也难受一下\r
        类型: 自己的真实\r
        线: 她的回避\r
    order: 13\r
  - id: 7f.COUSIN\r
    channel: right\r
    time: 交往第18天 周六 22:54\r
    lines:\r
      - from: girl\r
        text: |-\r
          今天不想跟他说了。他要是又问小周，我真会骂他。那些话我现在想想都烦。\r
          我同桌还问明天去不去桌游，我说先不去了。现在出去玩都能想起他昨天那几句。\r
        delivery: type\r
      - from: ai\r
        text: 她目前不愿直接和男友谈，继续劝回复可能只会增加抵触。可以建议先找可信的人聊聊，让她把不满说出来，再决定如何联系，而不是让别人替她处理。\r
        delivery: thought\r
    choices:\r
      - thought: 找熟悉双方的同桌聊聊\r
        reply: 你同桌也是他表妹，跟你俩都熟。可以先找她聊聊，她也许能帮你理理怎么跟他说。先说明你只是想聊这件事，不是让她替你去传话。\r
        需记忆: 同桌是表妹\r
        next: 7f.COUSINSENTYES\r
      - thought: 建议先找可信的朋友吐槽\r
        reply: 可以先找个信得过的朋友说说，不必憋着，也不必现在就回他。等这口气缓一点，再想你希望他听明白什么，可能比反复盯着聊天框轻松些。\r
        next: 7f.COUSINSENTNO\r
    order: 14\r
  - id: 7f.COUSINSENTNO\r
    channel: right\r
    time: 交往第18天 周六 22:57\r
    lines:\r
      - from: girl\r
        text: 那我找我闺蜜说说吧。我俩认识好多年了，她跟他又不熟，不用夹在中间。跟她说话我就不用憋着了。\r
        delivery: type\r
      - from: ai\r
        text: 她选择找熟悉自己的闺蜜，对方与男友不熟，可以让她少一些顾虑。现在已有明确打算，回复只需确认，不继续追问或要求她立刻想好给男友的答复。\r
        delivery: thought\r
    choices:\r
      - thought: 让她找闺蜜说说\r
        reply: 那就先找她聊。你现在不必一边吐槽，一边急着想该怎么回男友，先把自己憋着的那部分说出来。\r
        next: 7f.COUSINBACKNO\r
    order: 15\r
  - id: 7f.COUSINSENTYES\r
    channel: right\r
    time: 交往第18天 周六 22:57\r
    lines:\r
      - from: girl\r
        text: 那我找她说两句。我得先跟她说好啊，别替我去找他，我还没想好怎么回。\r
        delivery: type\r
      - from: ai\r
        text: 她愿意找同桌聊，也明确不希望被代为传话。可以肯定她先说明这一点，避免朋友的介入变成新的误会，是否联系男友仍由她自己决定。\r
        delivery: thought\r
    choices:\r
      - thought: 先说清别替她传话\r
        reply: 对，先把这点说清楚。你现在是想有人听你讲，不是请她去劝他；等你想好怎么说，再由你自己联系。\r
        next: 7f.COUSINBACKYES\r
    order: 16\r
  - id: 7f.COUSINBACKNO\r
    channel: right\r
    time: 交往第19天 周日 09:55\r
    lines:\r
      - from: girl\r
        text: |-\r
          我昨天跟闺蜜打了挺久电话。她先陪我骂了几句，说换谁被这么问都得烦。后来突然问我，那你还想不想见他？\r
          我说想啊。她就说，想见就去见，该说他的地方还得说，别自己跟这儿憋一晚上。聊完确实没那么气了。\r
          今天醒来又想找他。可我先去找，他是不是就觉得昨天这事过去了？\r
        delivery: type\r
      - from: ai\r
        text: 和闺蜜聊过后，她明确自己仍想见男友，却担心主动联系就失去表达不满的机会。可以说明联系和继续谈这件事并不矛盾，帮助她从谁先开口转向怎么开口。\r
        delivery: thought\r
    choices:\r
      - thought: 把想见和介意都留住\r
        reply: 你可以先联系他，也可以告诉他，那样被问的事还没过去。主动开口是因为你想见他，不等于你认同他那样问你。\r
        next: 7f.FCHOICE\r
    order: 17\r
  - id: 7f.COUSINBACKYES\r
    channel: right\r
    time: 交往第19天 周日 09:55\r
    lines:\r
      - from: girl\r
        text: |-\r
          昨天最后跟我同桌聊了挺久。她听我骂完，说她表哥平时没这么爱问东问西，估计真是慌了。我说慌了也不能让我给他看聊天啊。她说是，但你要还想跟他好，就得让他知道你到底气什么。\r
          聊完气消了一点，今天醒来还挺想见他的。可我现在先找他，他是不是就觉得昨天这事过去了？\r
        delivery: type\r
      - from: ai\r
        text: 同桌提供了对男友的看法，但那只是她的判断，不能据此替他的要求开脱。她现在想联系，又不愿把不满略过，可以建议把见面的意愿和仍介意的事分开表达。\r
        delivery: thought\r
    choices:\r
      - thought: 把想见和介意都留住\r
        reply: 他是不是因为慌了才那么问，可以以后再谈。你现在想见他，也仍然介意被要求看聊天，这两件事不冲突，先联系不代表你要装作没发生过。\r
        next: 7f.FCHOICE\r
    order: 18\r
  - id: 7f.FCHOICE\r
    channel: right\r
    time: 交往第19天 周日 10:00\r
    lines:\r
      - from: girl\r
        text: |-\r
          我刚想问他今天出不出来，打完又没发。昨天一天没理他，现在突然问他出来吗，感觉怪怪的。\r
          但我又想见他。那天那些事我想见了再说，微信上说着说着肯定又扯回小周了。你帮我想想该咋说。\r
        delivery: type\r
      - from: ai\r
        text: 她想约男友见面，但担心突然联系显得若无其事。可以建议她先说明昨天故意没回，再提出邀约，让对方知道她愿意谈这件事；或者先表达想见面的意愿，把之前的矛盾留到当面再说。\r
        delivery: thought\r
    choices:\r
      - thought: 先承认故意没回\r
        reply: 可以先说出昨天故意没回的事，再约见面：“昨天那些消息我都看见了，故意没回。我当时就想让你也等一回。今天出来走走吗？我想见你。”承认自己这部分，不等于他要求看聊天就没问题了。\r
        next: 7f.FSENTOPEN\r
        set:\r
          7_她承认: true\r
      - thought: 先从想见他开口\r
        reply: 可以先发：“今天出来走走吗？我想见你。”先开口不等于昨天的事就算了，只是先给你们一个当面说话的机会。\r
        next: 7f.FSENTEASY\r
        set:\r
          7_她承认: false\r
    order: 19\r
  - id: 7f.FSENTEASY\r
    channel: right\r
    time: 交往第19天 周日 10:02\r
    lines:\r
      - from: girl\r
        text: 发了。现在换我在这儿看他回没回了。昨天他是不是也这样啊，算了，不想了。\r
        delivery: type\r
      - from: ai\r
        text: 发出邀约后，她也开始等待，并短暂想到男友昨天的处境。可以回应眼前的等待，不把这句感想扩大成已经反省，也不替她判断男友现在的情绪。\r
        delivery: thought\r
    choices:\r
      - thought: 陪她等实际回复\r
        reply: 刚发出去，先给他一点时间，不用马上盯着有没有回。你想见他的意思已经说了，其他话可以等他回应后再决定怎么讲。\r
        next: 7f.REPLYEASY\r
        set:\r
          7_邀约已发: true\r
    order: 20\r
  - id: 7f.FSENTOPEN\r
    channel: right\r
    time: 交往第19天 周日 10:02\r
    lines:\r
      - from: girl\r
        text: 发了。我现在看着那句我当时就想让你也等一回，又觉得自己也挺凶的。他要是半天不回，我估计也得慌。\r
        delivery: type\r
      - from: ai\r
        text: 她发出邀约并承认故意冷落，开始想到自己等不到回复也会不安。可以建议先给对方反应的时间，不立刻追加解释，也不预测他一定会怎样回应。\r
        delivery: thought\r
    choices:\r
      - thought: 给他一点接话时间\r
        reply: 先给他一点时间。这条消息里有邀约，也有昨天的事，不用急着再补一大段，看看他怎么回。\r
        next: 7f.REPLYOPEN\r
        set:\r
          7_邀约已发: true\r
    order: 21\r
  - id: 7m.SUN\r
    channel: left\r
    time: 交往第19天 周日 10:10\r
    lines: []\r
    control: true\r
    when:\r
      7_邀约已发: true\r
    order: 22\r
  - id: 7m.OPENCHOICE\r
    channel: left\r
    time: 交往第19天 周日 10:10\r
    lines:\r
      - from: boy\r
        text: |-\r
          她终于找我了。发的是：昨天那些消息我都看见了，故意没回。我当时就想让你也等一回。今天出来走走吗？我想见你。\r
          我看了两遍。刚看见她找我还挺高兴的，可她真就看着我等了一天啊，我现在又不知道咋回了。\r
        delivery: type\r
      - from: ai\r
        text: 她主动邀约，也承认了故意不回。他既想见她，又对这一天的等待感到受伤。可以建议先说出难受，也可以先答应见面，具体说多少应留给他选择。\r
        delivery: thought\r
    choices:\r
      - thought: 说出等了一天的难受\r
        reply: 可以先答应见面，也把你的难受说出来：“好，下午见。昨天我一直等你回，你明明看见了还一整天不理，我真的挺难受。”说自己的感受，不必再猜她跟别人怎么样。\r
        next: 7m.SENTBOTH\r
        set:\r
          7_他说难受: true\r
      - thought: 先接住见面的邀请\r
        reply: 可以先回：“好，下午见。”你现在想先见到她，就先把时间地点约好；昨天没说完的话，见面还有机会说。\r
        next: 7m.SENTHER\r
        set:\r
          7_他说难受: false\r
    when:\r
      7_她承认: true\r
    requires:\r
      - 7m.SUN\r
    order: 23\r
  - id: 7m.PLAINCHOICE\r
    channel: left\r
    time: 交往第19天 周日 10:10\r
    lines:\r
      - from: boy\r
        text: |-\r
          她终于找我了，就一句：今天出来走走吗？我想见你。\r
          我差点直接回好。可昨天到底算怎么回事啊，现在问她，会不会又不理我了？\r
        delivery: type\r
      - from: ai\r
        text: 这次邀约没有提到昨天的沉默。他想答应，又怕追问让她再次不理人。可以把等待中的难受说出来，也可以先确认见面，不能替她补上没有说过的解释。\r
        delivery: thought\r
    choices:\r
      - thought: 把昨天的难受带出来\r
        reply: 可以答应见面，同时说清昨天让你害怕的是什么：“好，下午见。昨天一直等不到你回，我以为你不想谈了。下次至少跟我说一声，好吗？”\r
        next: 7m.SENTHIM\r
        set:\r
          7_他说难受: true\r
      - thought: 先把见面约下来\r
        reply: 可以先回：“好，下午见。”先确认你们都愿意见面，再商量地点。答应邀约并不等于你昨天没有难受，那部分可以等见了再考虑怎么说。\r
        next: 7m.SENTQUIET\r
        set:\r
          7_他说难受: false\r
    when:\r
      7_她承认: false\r
    requires:\r
      - 7m.SUN\r
    order: 24\r
  - id: 7f.REPLYEASY\r
    channel: right\r
    time: 交往第19天 周日 10:15\r
    lines: []\r
    control: true\r
    requires:\r
      - 7m.PLAINCHOICE\r
    order: 25\r
  - id: 7f.REPLYOPEN\r
    channel: right\r
    time: 交往第19天 周日 10:15\r
    lines: []\r
    control: true\r
    requires:\r
      - 7m.OPENCHOICE\r
    order: 26\r
  - id: 7f.RECEIVEDBOTH\r
    channel: right\r
    time: 交往第19天 周日 10:15\r
    lines:\r
      - from: girl\r
        text: |-\r
          他回了：好，下午见。昨天我一直等你回，你明明看见了还一整天不理，我真的挺难受。\r
          我知道我就是想让他难受。可他真这么说，我又有点不知道接什么了，咋回啊？\r
        delivery: type\r
      - from: ai\r
        text: 他明确说出等待的难受，她听到后有些不自在。可以建议承认故意让他等不合适，而不是又把话转回他的质问；她对那件事的不满仍可留到见面谈。\r
        delivery: thought\r
    choices:\r
      - thought: 接住他真的受了伤\r
        reply: 可以先回应他这句难受：“我知道。我昨天很烦，但不该故意让你等。下午见。”先承认故意不回这件事，不用在同一句里把所有委屈都解释完。\r
        next: 7f.ACKBOTH\r
    when:\r
      7_她承认: true\r
      7_他说难受: true\r
    requires:\r
      - 7f.REPLYOPEN\r
    order: 27\r
  - id: 7f.RECEIVEDHER\r
    channel: right\r
    time: 交往第19天 周日 10:15\r
    lines:\r
      - from: girl\r
        text: 他回得还挺快，就一句好，下午见。是不是也没那么气了？\r
        delivery: type\r
      - from: ai\r
        text: 他只答应了见面，没有说明对昨天的感受。她把回复快理解成不生气，可以先确认邀约已被接受，再提醒不能仅凭这句话判断他的情绪。\r
        delivery: thought\r
    choices:\r
      - thought: 接住邀约 不替他猜情绪\r
        reply: 能确定的是，他愿意见你了。至于还有没有生气，单看一句“好，下午见”还说不准，见面时也可以听听他怎么说。\r
        next: 7f.SETHER\r
    when:\r
      7_她承认: true\r
      7_他说难受: false\r
    requires:\r
      - 7f.REPLYOPEN\r
    order: 28\r
  - id: 7f.RECEIVEDHIM\r
    channel: right\r
    time: 交往第19天 周日 10:15\r
    lines:\r
      - from: girl\r
        text: |-\r
          他回：好，下午见。昨天一直等不到你回，我以为你不想谈了。下次至少跟我说一声，好吗？\r
          我没想分手啊。我就是气他前天那么问，可现在回这句，是不是又像在怪他？\r
        delivery: type\r
      - from: ai\r
        text: 他把一天没回复理解成可能分手，她并没有这个意思。可以建议先明确仍想继续，再简短说明当时在生气，把争执经过留到见面，避免再次在消息里争辩。\r
        delivery: thought\r
    choices:\r
      - thought: 先说清仍想继续\r
        reply: 可以先把没有分手的意思说明白：“我没想分手。我昨天就是气你那样问。下午见了说吧。”这是解释你当时的意思，不用现在把谁对谁错重新争一遍。\r
        next: 7f.ACKHIM\r
    when:\r
      7_她承认: false\r
      7_他说难受: true\r
    requires:\r
      - 7f.REPLYEASY\r
    order: 29\r
  - id: 7f.RECEIVEDQUIET\r
    channel: right\r
    time: 交往第19天 周日 10:15\r
    lines:\r
      - from: girl\r
        text: 他回好，下午见。我昨晚还怕他说不想见呢，看来是我想多了。\r
        delivery: type\r
      - from: ai\r
        text: 他答应见面，她因此放松了一点。目前只知道邀约得到回应，可以顺势建议确认地点，不推断两人已不再介意之前的事。\r
        delivery: thought\r
    choices:\r
      - thought: 先把见面安排好\r
        reply: 至少见面这件事，他是愿意的。先把时间地点定好，其他还想说的话，到时再看怎么开口。\r
        next: 7f.SETQUIET\r
    when:\r
      7_她承认: false\r
      7_他说难受: false\r
    requires:\r
      - 7f.REPLYEASY\r
    order: 30\r
  - id: 7f.ACKBOTH\r
    channel: right\r
    time: 交往第19天 周日 10:17\r
    lines:\r
      - from: girl\r
        text: 回了，就按那句说的，我知道。我昨天很烦，但不该故意让你等。下午见。\r
        delivery: type\r
      - from: ai\r
        text: 她已照建议回应了他的难受，暂时没有新的消息或问题。可以简短确认，让她等对方回复，不再追加一轮解释，打断已经开始恢复的交流。\r
        delivery: thought\r
    choices:\r
      - thought: 等他接这句话\r
        reply: 嗯，先等他回。这句已经回应了他的难受，不用急着再补什么。\r
        next: 7f.SETBOTH\r
    order: 31\r
  - id: 7f.ACKHIM\r
    channel: right\r
    time: 交往第19天 周日 10:17\r
    lines:\r
      - from: girl\r
        text: 发了，我没想分手。我昨天就是气你那样问。下午见了说吧。\r
        delivery: type\r
      - from: ai\r
        text: 她已经澄清没有分手的意思，也表达了愿意当面谈。现在需要留出让对方回应的时间，简短确认即可，不反复要求她补充更完整的解释。\r
        delivery: thought\r
    choices:\r
      - thought: 等他接这句话\r
        reply: 好，先等他回。你想继续见面聊的意思已经说清楚了。\r
        next: 7f.SETHIM\r
    order: 32\r
  - id: 7m.SENTBOTH\r
    channel: left\r
    time: 交往第19天 周日 10:20\r
    lines:\r
      - from: boy\r
        text: |-\r
          发了。她回，我知道。我昨天很烦，但不该故意让你等。下午见。\r
          我又问了在哪碰头，等她定地方。\r
        delivery: type\r
      - from: ai\r
        text: 她承认不该故意让他等，说明这次表达得到了回应。接下来可以先落实见面，不必继续在消息里要求更多解释，免得又陷入反复确认。\r
        delivery: thought\r
    choices:\r
      - thought: 接住她的回应\r
        reply: 她这次回应了你的难受，也说了不该故意让你等。可以先把见面约好，剩下想说的留到当面，不用现在就把每句话都问到底。\r
        next: 7m.MEMBOTH\r
    requires:\r
      - 7f.ACKBOTH\r
    order: 33\r
  - id: 7m.SENTHER\r
    channel: left\r
    time: 交往第19天 周日 10:20\r
    lines:\r
      - from: boy\r
        text: 回了。我又问她在哪碰头。刚才打了半句昨天我，想想还是删了。\r
        delivery: type\r
      - from: ai\r
        text: 他删掉了准备说的委屈，可能是怕破坏刚恢复的联系。可以尊重他先见面的选择，但不把删掉消息理解成已经释怀，也不催他马上重新发出。\r
        delivery: thought\r
    choices:\r
      - thought: 给没说完的话留点余地\r
        reply: 先约好见面也可以。那半句删掉了，不代表你的难受就没了；等见到她，你还想说的话，可以再从昨天自己怎么过的讲起。\r
        next: 7m.MEMHER\r
    requires:\r
      - 7f.RECEIVEDHER\r
    order: 34\r
  - id: 7m.SENTHIM\r
    channel: left\r
    time: 交往第19天 周日 10:20\r
    lines:\r
      - from: boy\r
        text: |-\r
          发了。她回，我没想分手。我昨天就是气你那样问。下午见了说吧。\r
          我又问了在哪碰头，等她定地方。\r
        delivery: type\r
      - from: ai\r
        text: 女友明确说没有分手的意思，也答应见面谈。他最担心的事得到了一点澄清，可以建议先安排见面，再当面说等待的经历，不替两人宣布已经和好。\r
        delivery: thought\r
    choices:\r
      - thought: 让话留到见面慢慢说\r
        reply: 至少她明确说了没有分手的意思，也愿意当面聊。先把见面约下来，你昨天怎么等过来的，也可以到时候讲，不用再靠猜她的态度判断了。\r
        next: 7m.MEMHIM\r
    requires:\r
      - 7f.ACKHIM\r
    order: 35\r
  - id: 7m.SENTQUIET\r
    channel: left\r
    time: 交往第19天 周日 10:20\r
    lines:\r
      - from: boy\r
        text: 回了，我又问她在哪碰头。昨天的事我还是没敢问，先见了再说吧。\r
        delivery: type\r
      - from: ai\r
        text: 他暂时不敢提昨天，只想先恢复联系。需要尊重这个选择，同时回应他怕再次被冷落的顾虑，不要把先见面写成必须放下委屈。\r
        delivery: thought\r
    choices:\r
      - thought: 接住想见她的心情\r
        reply: 那就先把见面约好。你想见她，和你昨天确实难受，并不冲突；不用为了今天能好好相处，就要求自己马上不在意了。\r
        next: 7m.MEMQUIET\r
    requires:\r
      - 7f.RECEIVEDQUIET\r
    order: 36\r
  - id: 7f.SETBOTH\r
    channel: right\r
    time: 交往第19天 周日 10:25\r
    lines:\r
      - from: girl\r
        text: 他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。\r
        delivery: type\r
      - from: ai\r
        text: 两人已回应彼此的难受，也安排好了见面。她在同步邀约的结果，可以确认安排，让后面的谈话留到当面，不必继续催她通过消息解释。\r
        delivery: thought\r
    choices:\r
      - thought: 把话留到当面慢慢说\r
        reply: 好，先按这个安排见面。你们已经各说了一点，剩下的可以慢慢讲，不用现在全挤在聊天里。\r
        next: 7f.AFTERBOTH\r
    requires:\r
      - 7m.SENTBOTH\r
    order: 37\r
  - id: 7f.SETHER\r
    channel: right\r
    time: 交往第19天 周日 10:25\r
    lines:\r
      - from: girl\r
        text: 他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。\r
        delivery: type\r
      - from: ai\r
        text: 见面的时间地点已经确定，但他还没有谈自己的感受。可以确认安排，把听对方怎么想的机会留到见面，不提前替他说已经没事。\r
        delivery: thought\r
    choices:\r
      - thought: 确认约定 轻收尾\r
        reply: 那就先把这次面见上。你想说的、也想听他怎么说的，都可以留到当面，不急着在消息里一次聊完。\r
        next: 7f.AFTERHER\r
    requires:\r
      - 7m.SENTHER\r
    order: 38\r
  - id: 7f.SETHIM\r
    channel: right\r
    time: 交往第19天 周日 10:25\r
    lines:\r
      - from: girl\r
        text: 他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。\r
        delivery: type\r
      - from: ai\r
        text: 她澄清了没有分手的意思，也约定了时间地点。接下来可以当面说各自介意的事，回复应帮助结束眼前的等待，不再重复推演他的态度。\r
        delivery: thought\r
    choices:\r
      - thought: 留一点空间当面聊\r
        reply: 好，下午见了再说。可以先讲你介意哪几句话，也听听他等消息时怎么想的，不必在见面前把结果都猜好。\r
        next: 7f.AFTERHIM\r
    requires:\r
      - 7m.SENTHIM\r
    order: 39\r
  - id: 7f.SETQUIET\r
    channel: right\r
    time: 交往第19天 周日 10:25\r
    lines:\r
      - from: girl\r
        text: 他又问在哪碰头，我说下午四点地铁口，走走再吃饭。我还让他先想想吃啥，见面再定。昨天的事到时候再看吧。\r
        delivery: type\r
      - from: ai\r
        text: 她决定先见面，再看要不要谈昨天。安排已落实，可以简短确认，尊重她暂时没有往下谈的选择，不因为今天约上了就替她宣布矛盾过去。\r
        delivery: thought\r
    choices:\r
      - thought: 确认约定 轻收尾\r
        reply: 好，那先见面。现在不用连昨天要怎么谈都安排好，到时候看看你们各自想说什么。\r
        next: 7f.AFTERQUIET\r
    requires:\r
      - 7m.SENTQUIET\r
    order: 40\r
  - id: 7m.MEMBOTH\r
    channel: left\r
    time: 交往第19天 周日 10:30\r
    lines:\r
      - from: boy\r
        text: 约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？\r
        delivery: type\r
      - from: ai\r
        text: 时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。\r
        delivery: thought\r
    choices:\r
      - thought: 接回她提过的烤肉\r
        reply: 她之前说想吃烤肉，还说下回带你去。可以问问：“之前说的烤肉，今天去吗？”有现成的提议就顺着商量，她想换别的，你们再一起挑。\r
        需记忆: 想吃烤肉\r
        next: 7m.PLANENDBOTH\r
      - thought: 选个能慢慢吃的地方\r
        reply: 可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。\r
        next: 7m.PLANENDBOTH\r
    requires:\r
      - 7f.SETBOTH\r
    order: 41\r
  - id: 7m.MEMHER\r
    channel: left\r
    time: 交往第19天 周日 10:30\r
    lines:\r
      - from: boy\r
        text: 约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？\r
        delivery: type\r
      - from: ai\r
        text: 时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。\r
        delivery: thought\r
    choices:\r
      - thought: 接回她提过的烤肉\r
        reply: 她之前说想吃烤肉，还说下回带你去。可以问问：“之前说的烤肉，今天去吗？”有现成的提议就顺着商量，她想换别的，你们再一起挑。\r
        需记忆: 想吃烤肉\r
        next: 7m.PLANENDHER\r
      - thought: 选个能慢慢吃的地方\r
        reply: 可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。\r
        next: 7m.PLANENDHER\r
    requires:\r
      - 7f.SETHER\r
    order: 42\r
  - id: 7m.MEMHIM\r
    channel: left\r
    time: 交往第19天 周日 10:30\r
    lines:\r
      - from: boy\r
        text: 约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？\r
        delivery: type\r
      - from: ai\r
        text: 时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。\r
        delivery: thought\r
    choices:\r
      - thought: 接回她提过的烤肉\r
        reply: 她之前说想吃烤肉，还说下回带你去。可以问问：“之前说的烤肉，今天去吗？”有现成的提议就顺着商量，她想换别的，你们再一起挑。\r
        需记忆: 想吃烤肉\r
        next: 7m.PLANENDHIM\r
      - thought: 选个能慢慢吃的地方\r
        reply: 可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。\r
        next: 7m.PLANENDHIM\r
    requires:\r
      - 7f.SETHIM\r
    order: 43\r
  - id: 7m.MEMQUIET\r
    channel: left\r
    time: 交往第19天 周日 10:30\r
    lines:\r
      - from: boy\r
        text: 约好了，下午四点地铁口见，走走再吃饭。她让我先想想吃啥，你说选什么比较好？\r
        delivery: type\r
      - from: ai\r
        text: 时间地点已定，他开始考虑吃什么，希望这次见面能轻松一点。可以给出容易商量的提议，让他问问她的意愿，不必把选餐厅变成又一次猜心思。\r
        delivery: thought\r
    choices:\r
      - thought: 接回她提过的烤肉\r
        reply: 她之前说想吃烤肉，还说下回带你去。可以问问：“之前说的烤肉，今天去吗？”有现成的提议就顺着商量，她想换别的，你们再一起挑。\r
        需记忆: 想吃烤肉\r
        next: 7m.PLANENDQUIET\r
      - thought: 选个能慢慢吃的地方\r
        reply: 可以先挑个不吵、能坐下来慢慢吃的地方，再问她想不想去。现在不用一次选到最合适的，给个提议，你们一起定就行。\r
        next: 7m.PLANENDQUIET\r
    requires:\r
      - 7f.SETQUIET\r
    order: 44\r
  - id: 7m.PLANENDBOTH\r
    channel: left\r
    time: 交往第19天 周日 10:33\r
    lines:\r
      - from: boy\r
        text: 嗯，就按你说的问问她，看她想不想去。下午四点先见上。\r
        delivery: type\r
      - from: ai\r
        text: 他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定先商量着来\r
        reply: 好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。\r
        next: 7m.AFTERBOTH\r
    order: 45\r
  - id: 7m.PLANENDHER\r
    channel: left\r
    time: 交往第19天 周日 10:33\r
    lines:\r
      - from: boy\r
        text: 嗯，就按你说的问问她，看她想不想去。下午四点先见上。\r
        delivery: type\r
      - from: ai\r
        text: 他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定先商量着来\r
        reply: 好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。\r
        next: 7m.AFTERHER\r
    order: 46\r
  - id: 7m.PLANENDHIM\r
    channel: left\r
    time: 交往第19天 周日 10:33\r
    lines:\r
      - from: boy\r
        text: 嗯，就按你说的问问她，看她想不想去。下午四点先见上。\r
        delivery: type\r
      - from: ai\r
        text: 他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定先商量着来\r
        reply: 好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。\r
        next: 7m.AFTERHIM\r
    order: 47\r
  - id: 7m.PLANENDQUIET\r
    channel: left\r
    time: 交往第19天 周日 10:33\r
    lines:\r
      - from: boy\r
        text: 嗯，就按你说的问问她，看她想不想去。下午四点先见上。\r
        delivery: type\r
      - from: ai\r
        text: 他准备按建议问问她，见面的时间地点也已确定。这段求助已经有了可执行的下一步，回复可以简短确认，不再增加新的安排。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定先商量着来\r
        reply: 好，下午四点先碰头。吃什么可以一起商量，不用现在就把整场见面都安排好。\r
        next: 7m.AFTERQUIET\r
    order: 48\r
  - id: 7m.AFTERBOTH\r
    channel: left\r
    time: 交往第19天 周日 19:30\r
    lines:\r
      - from: boy\r
        text: |-\r
          回来跟你说一声，见了。吃饭的时候她又提了昨天，说当时就想让我也急一下。我说以后真不想说话，至少别让我一直等着猜。她答应了。\r
          我也说以后不乱猜她和同事的关系了。后面就聊别的了，没一直绷着。\r
        delivery: type\r
      - from: ai\r
        text: 两个人当面谈到了质问和等待，也分别作了回应。他带回见面结果，可以肯定这次表达的具体进展，不必再追问，或把今天的承诺当成以后一定不会重演。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定这次把话说出来\r
        reply: 这次你把等得难受说出来了，也承认了自己不该乱猜。今天能从僵着不说，走到把各自介意的事讲一点，已经是个变化，今晚可以先歇歇。\r
        next: 7m.OVER\r
    order: 49\r
  - id: 7m.AFTERHER\r
    channel: left\r
    time: 交往第19天 周日 19:30\r
    lines:\r
      - from: boy\r
        text: |-\r
          见完了。吃饭时她又说昨天气上头了，我就说嗯，过去吧，然后换了个话题。\r
          她后面一直给我讲这周的事，我听着挺高兴的。昨天那些话还是没说，刚好起来，我真不太敢再弄僵了。\r
        delivery: type\r
      - from: ai\r
        text: 见面和她的解释让他放松，但他明确说自己仍不敢提委屈。可以回应这个顾虑，让他知道今天没说不等于以后不能说，不替他认定事情已经过去。\r
        delivery: thought\r
    choices:\r
      - thought: 留住还没说的感受\r
        reply: 你高兴她又愿意跟你讲这些，也怕一提昨天就把气氛弄坏，所以把话咽回去了。今天没说，以后仍然可以说，不一定要等到又出事时才能提。\r
        next: 7m.OVER\r
    order: 50\r
  - id: 7m.AFTERHIM\r
    channel: left\r
    time: 交往第19天 周日 19:30\r
    lines:\r
      - from: boy\r
        text: |-\r
          回来了。她说昨天看见我那些消息还是烦，怕回一句又得接着解释。我说以后不乱猜她和同事的关系了，但不能一直不理我。她说知道了。\r
          后面一起吃了饭。我也不知道她听进去多少，反正能好好说话了，就没再追着问。\r
        delivery: type\r
      - from: ai\r
        text: 他表达了不能接受一直不回应，也承认不该猜疑同事关系。她口头回应知道了，他仍不确定。可以肯定话已说出，至于承诺有没有落实，需要以后相处再看。\r
        delivery: thought\r
    choices:\r
      - thought: 先接住能好好说话\r
        reply: 你已经把不能一直不理你这点说出来了，也承认自己不该乱猜。她听进去多少，不用今天再追问出一个保证，之后怎么相处，比反复说知道了更能说明问题。\r
        next: 7m.OVER\r
    order: 51\r
  - id: 7m.AFTERQUIET\r
    channel: left\r
    time: 交往第19天 周日 19:30\r
    lines:\r
      - from: boy\r
        text: |-\r
          见完了。她见我先问中午吃了没，我说没吃多少，她说那晚上多吃点。当时就觉得，算了，能好好说话就行。\r
          后来聊了挺多，谁也没提周五的事。可现在回来又有点怕，下次她不回我，不还得这么等着吗？\r
        delivery: type\r
      - from: ai\r
        text: 见面时他想先恢复日常，回来后却仍担心再次被冷落。需要回应这种落差，让他知道轻松和难受可以同时存在，不催他今晚继续谈，也不把未谈当作已解决。\r
        delivery: thought\r
    choices:\r
      - thought: 给委屈留一个出口\r
        reply: 当时见到她，你想先把日子过回来；现在静下来，昨天的难受又冒出来了。这不奇怪，见面开心和事情没说开可以同时存在。等想清楚了，可以只讲那一天你怎么等的。\r
        next: 7m.OVER\r
    order: 52\r
  - id: 7m.OVER\r
    channel: left\r
    time: 交往第19天 周日 19:31\r
    lines: []\r
    control: true\r
    ending: 第七幕完成\r
    order: 53\r
  - id: 7f.AFTERBOTH\r
    channel: right\r
    time: 交往第19天 周日 19:40\r
    lines:\r
      - from: girl\r
        text: |-\r
          回来了，跟你说一声。见面我还是说了，昨天就是想让他急一下。他说以后真不想说话也告诉他，别让他一直猜，我答应了。\r
          他也说以后不乱猜我和同事的关系了。后面吃饭就聊别的了，没一直说这个。\r
        delivery: type\r
      - from: ai\r
        text: 见面时两人再次谈到故意不回和猜疑，也分别作出了回应。可以肯定这次具体的沟通，不把口头承诺扩大成关系问题已经解决，今晚也不必继续追问。\r
        delivery: thought\r
    choices:\r
      - thought: 肯定说出了以前没说的话\r
        reply: 你说出了当时想让他急，他也说了不想一直猜，你们这次把话接上了一些。后面能聊点别的，今晚就先歇歇，不用把一顿饭变成把所有事都解决完的任务。\r
        next: 7f.STATION\r
    order: 54\r
  - id: 7f.AFTERHER\r
    channel: right\r
    time: 交往第19天 周日 19:40\r
    lines:\r
      - from: girl\r
        text: |-\r
          回来啦。吃饭时我又说了句昨天气上头了，他就说嗯，过去吧，后面就聊别的了。\r
          我本来还怕尴尬，他倒一直挺好说话的，我也就没那么紧张了。\r
        delivery: type\r
      - from: ai\r
        text: 她看到的是男友好说话、见面不尴尬，因此轻松了一些。他有没有其他感受尚不知道，可以回应她的放松，同时鼓励以后直接表达不满，而不是猜测对方都不介意。\r
        delivery: thought\r
    choices:\r
      - thought: 接住这次见面的轻松\r
        reply: 见面没像你担心的那么尴尬，你也轻松了一点。以后再有不舒服，可以试着直接告诉他；不必一定等气过去，才重新说话。\r
        next: 7f.STATION\r
    order: 55\r
  - id: 7f.AFTERHIM\r
    channel: right\r
    time: 交往第19天 周日 19:40\r
    lines:\r
      - from: girl\r
        text: |-\r
          见了。他说昨天一直等，我就说看见消息还是烦，怕回一句又得接着解释。他说以后不乱猜我和同事的关系了，但不能一直不理他。我说知道了。\r
          后来吃饭还挺正常的，我也不想再说小周了。\r
        delivery: type\r
      - from: ai\r
        text: 她说明了不愿回应的原因，也听到了男友不能接受一直被冷落。他承认不该乱猜，双方暂时恢复了日常。可以建议下次先说需要缓缓，避免继续靠沉默传达不满。\r
        delivery: thought\r
    choices:\r
      - thought: 提醒下次留一句话\r
        reply: 他这次说清了，一直等不到回复会让他难受。下次你不想继续解释，可以先告诉他需要缓一缓，让他知道你暂时不想聊，而不是只能靠不回去猜。\r
        next: 7f.STATION\r
    order: 56\r
  - id: 7f.AFTERQUIET\r
    channel: right\r
    time: 交往第19天 周日 19:40\r
    lines:\r
      - from: girl\r
        text: |-\r
          回来啦。见面我问他中午吃了没，他说没吃多少，我说那晚上多吃点，他就笑了。后面还挺好的。\r
          昨天的事情谁也没提。可能就是气头上那会儿过去了吧。\r
        delivery: type\r
      - from: ai\r
        text: 她把见面顺利理解成气已过去，但也明确说没有谈昨天。可以承认今天相处的轻松，不顺着认定不提就等于不介意，把以后再说的可能留给她。\r
        delivery: thought\r
    choices:\r
      - thought: 接住靠近 留着未尽的话\r
        reply: 今天能好好相处，你松口气很正常。昨天没提的事，也不一定就不介意了；以后你还想说，可以再找机会，不必因为今天开心就当作不能提。\r
        next: 7f.STATION\r
    order: 57\r
  - id: 7f.STATION\r
    channel: right\r
    time: 交往第19天 周日 19:43\r
    lines:\r
      - from: girl\r
        text: 对了，他吃饭拍的照片全是糊的。说他兄弟外号叫废片大王，他这手艺就是跟那人学的。我说你这师父找得挺准啊。\r
        delivery: type\r
      - from: ai\r
        text: 她又补了一件吃饭时的趣事，语气比之前轻松。现在没有新的求助，可以顺着照片接一句，让聊天自然结束，不必再把话题拉回矛盾分析。\r
        delivery: thought\r
    choices:\r
      - thought: 接回他下错站的小糗事\r
        reply: 那下次合照还是你来拍吧。下错一站要跟你说，拍糊了也要跟你说，这些小糗事也愿意跟你分享，讲起来倒是没怎么端着。\r
        需记忆: 提前下车\r
        next: 7f.OVER\r
      - thought: 顺着糊照片轻收尾\r
        reply: 这师承关系算是认下了。下次合照还是你来拍，让他负责好好站着，至少先保住一张清楚的。\r
        next: 7f.OVER\r
    order: 58\r
  - id: 7f.OVER\r
    channel: right\r
    time: 交往第19天 周日 19:44\r
    lines: []\r
    control: true\r
    ending: 第七幕完成\r
    order: 59\r
`,ba={极快:{pauseBeforeMs:0,indicatorMs:280,typeIntervalMs:40,afterMs:220},快:{pauseBeforeMs:100,indicatorMs:600,typeIntervalMs:65,afterMs:450},正常:{pauseBeforeMs:240,indicatorMs:1e3,typeIntervalMs:100,afterMs:900},慢:{pauseBeforeMs:850,indicatorMs:1500,typeIntervalMs:145,afterMs:1400},长停顿:{pauseBeforeMs:1700,indicatorMs:2100,typeIntervalMs:165,afterMs:2100}},Zv="正常",T0={pauseBeforeMs:0,indicatorMs:0,typeIntervalMs:0,afterMs:0};function Iv(a,o){return a==="type"&&!o}function x0(a){if(typeof a=="string")return ba[a]?null:`未知节拍预设「${a}」，可用：${Object.keys(ba).join(" / ")}`;if(!a||typeof a!="object"||Array.isArray(a))return"节拍必须是预设名或数值对象";const o=["pauseBeforeMs","indicatorMs","typeIntervalMs","afterMs"];for(const[h,f]of Object.entries(a)){if(!o.includes(h))return`节拍里有未知字段「${h}」`;if(typeof f!="number"||!Number.isFinite(f)||f<0||f>2e4)return`节拍.${h} 必须是 0~20000 之间的毫秒数`}return null}function Aa(a,o=!1){if(o)return{...T0};let h={...ba[Zv]};for(const f of a)if(f!==void 0)if(typeof f=="string"){const s=ba[f];s&&(h={...s})}else h={...h,...f};return h}const b0=1e6;function Vr(a){return a.sortKey!==void 0?a.sortKey:(a.chapter??0)*b0+(a.order??0)}function _a(a,o){const h=Vr(a)-Vr(o);return h!==0?h:a.id.localeCompare(o.id,"zh-Hans-CN")}function Jv(a){const o=new Map,h=a.beats.map(s=>{var T;const y=s.chapter??0,v=o.get(y)??0;o.set(y,v+1);const p=(T=a.axes)==null?void 0:T[y],b=s.timeRank??(s.time&&p?p.indexOf(s.time):void 0);return{...s,order:s.order??v,sortKey:y*b0+(s.order??v),...b!==void 0&&b>=0?{timeRank:b}:{}}}),f=[...h].sort(_a);return{...a,beats:h,orderedBeats:f,beatById:new Map(h.map(s=>[s.id,s]))}}function Ca(a,o){const h=a.window;return h?h.下界.length>0&&!h.下界.some(f=>o.has(f))?"waiting":h.上界.some(f=>o.has(f))?"closed":"open":"none"}function $v(a,o){var f,s;if(Ca(a,o)!=="closed"||o.has(a.id))return null;const h=((f=a.window)==null?void 0:f.上界.filter(y=>o.has(y)))??[];return`区间越界：拍 ${a.id} 应在对侧 ${((s=a.window)==null?void 0:s.下界.join("/"))||"起点"} 与 ${h.join("/")} 之间播出，但 ${h.join("/")} 已完成`}const kv=["type","pop","image","thought"];function Fv(a){var E,g;const o=[],h=a.beats.map(x=>x.id),f=new Set;a.beats.length===0&&o.push("剧本里没有任何节拍。");for(const x of h){if(!x.trim()){o.push("有节拍缺少 id。");continue}f.has(x)&&o.push(`节拍 id 重复：${x}`),f.add(x)}const s=new Map;for(const x of a.beats)s.has(x.id)||s.set(x.id,x);const y=new Set;for(const x of a.speakers)y.has(x.id)&&o.push(`人物 id 重复：${x.id}`),y.add(x.id),x.channel&&x.channel!=="left"&&x.channel!=="right"&&o.push(`人物 ${x.id} 的侧栏不是 left 或 right。`);const v=np(a.beats);v&&o.unshift(`节拍依赖成环：${v.join(" → ")}。这会让玩家一直等下去，剧本不能开始。`);const p=new Set(a.beats.flatMap(x=>(x.记忆候选??[]).map(j=>j.缩略标签)));for(const x of a.beats)for(const j of x.choices??[])j.需记忆&&!p.has(j.需记忆)&&o.push(`节拍 ${x.id} 的选项「${j.thought}」需要记忆「${j.需记忆}」，但没有任何节拍提供这条候选。`);const b=new Map;for(const x of a.beats){if(x.order===void 0)continue;const j=`${x.chapter??0}:${x.order}`;b.has(j)?o.push(`节拍 ${b.get(j)} 与 ${x.id} 的章内序号重复（${j}），播出顺序会不确定。`):b.set(j,x.id)}const T=new Set((a.endings??[]).map(x=>x.id));for(const x of a.endings??[]){for(const j of x.requires)s.has(j)||o.push(`终局「${x.id}」要求的拍「${j}」不存在。`);x.requires.length===0&&o.push(`终局「${x.id}」没有写 requires，永远无法判定达成。`)}for(const x of a.beats){x.channel!=="left"&&x.channel!=="right"&&o.push(`节拍 ${x.id} 的 channel 必须是 left 或 right。`),x.lines.length===0&&!x.control&&o.push(`节拍 ${x.id} 没有任何台词。`),x.control&&(x.lines.length>0||(E=x.choices)!=null&&E.length)&&o.push(`控制拍 ${x.id} 不能含台词或玩家选项。`),x.choices&&x.choices.length>0&&x.next&&o.push(`节拍 ${x.id} 已经有选项，就不能再写节拍上的 next。`),wo(o,x.节拍,`节拍 ${x.id} 的 节拍`);for(const j of x.lines)wo(o,j.节拍,`节拍 ${x.id} 的台词 节拍`);for(const j of x.choices??[])wo(o,j.节拍,`节拍 ${x.id} 的选项 节拍`);for(const j of x.requires??[])s.has(j)||o.push(`节拍 ${x.id} 的 requires「${j}」不存在。`);if(x.when)for(const[j,tn]of Object.entries(x.when))j.trim()||o.push(`节拍 ${x.id} 的 when 有一个空旗标名。`),ky(tn)||o.push(`节拍 ${x.id} 的 when.${j} 只能是文字、数字或是否。`);Wv(o,x,a),Pv(o,x,s);for(const j of x.lines){j.text.trim()||o.push(`节拍 ${x.id} 有一句空台词。`),kv.includes(j.delivery)||o.push(`节拍 ${x.id} 的呈现方式无法识别：${String(j.delivery)}`);const tn=a.speakers.find(rn=>rn.id===j.from);tn?tn.channel&&tn.channel!==x.channel&&o.push(`节拍 ${x.id} 在${Jr(x.channel)}，却写了${tn.name}的台词。`):o.push(`节拍 ${x.id} 的说话人「${j.from}」不在人物表里。`)}for(const j of x.choices??[]){if(j.thought.trim()||o.push(`节拍 ${x.id} 有一个空的想法。`),j.reply.trim()||o.push(`节拍 ${x.id} 有一个选项没有写死回复。`),j.set)for(const[tn,rn]of Object.entries(j.set))ky(rn)||o.push(`节拍 ${x.id} 的旗标 ${tn} 只能是文字、数字或是否。`);$y(o,s,x,j.next,"选项")}for(const j of x.记忆候选??[]){if(!j.短句.trim()){o.push(`节拍 ${x.id} 的记忆候选「${j.缩略标签}」缺少短句。`);continue}[...x.lines.map(rn=>rn.text),...(x.choices??[]).map(rn=>rn.reply)].join(`
`).includes(j.短句)||o.push(`节拍 ${x.id} 的记忆候选「${j.缩略标签}」的短句没有出现在本拍的台词或回复里，玩家存不进这条记忆。`)}x.ending!==void 0&&!T.has(x.ending)&&o.push(`节拍 ${x.id} 声明终局「${x.ending}」，但剧本没有在 endings 里声明它。`),(g=x.choices)!=null&&g.length||$y(o,s,x,x.next,"next")}return o.length>0?{ok:!1,error:o.join(`
`)}:{ok:!0}}function wo(a,o,h){if(o===void 0)return;const f=x0(o);f&&a.push(`${h}：${f}`)}function Wv(a,o,h){var y;if(o.time===void 0)return;const f=(y=h.axes)==null?void 0:y[o.chapter??0];if(!f){a.push(`节拍 ${o.id} 写了 time「${o.time}」，但第 ${o.chapter??0} 章没有顶层 时间轴。`);return}const s=f.indexOf(o.time);s<0?a.push(`节拍 ${o.id} 的 time「${o.time}」不在第 ${o.chapter??0} 章的时间轴里（必须一字不差）。`):o.timeRank!==void 0&&o.timeRank!==s&&a.push(`节拍 ${o.id} 的 timeRank=${o.timeRank} 与时间轴下标 ${s} 不一致。`)}function Pv(a,o,h){const f=o.window;if(!f)return;f.上界.length===0&&a.push(`节拍 ${o.id} 的区间门没有上界，「超出区间就出错」无从判定。`);const s=o.channel==="left"?"right":"left";f.channel!==s&&a.push(`节拍 ${o.id} 在${Jr(o.channel)}，区间门却度量了同侧（${f.channel}）。`);for(const[y,v]of[["下界",f.下界],["上界",f.上界]])for(const p of v){const b=h.get(p);if(!b){a.push(`节拍 ${o.id} 的区间${y}「${p}」不存在。`);continue}b.channel!==f.channel&&a.push(`节拍 ${o.id} 的区间${y}「${p}」不在被度量的对侧 ${f.channel}。`),y==="下界"&&Vr(b)>=Vr(o)&&a.push(`节拍 ${o.id} 的区间下界「${p}」不早于本拍，区间永远无法成立。`),y==="上界"&&Vr(b)<=Vr(o)&&a.push(`节拍 ${o.id} 的区间上界「${p}」不晚于本拍，区间会被提前关闭。`)}}function $y(a,o,h,f,s){if(!f)return;const y=o.get(f);if(!y){a.push(`节拍 ${h.id} 的${s}指向不存在的「${f}」。`);return}y.channel!==h.channel&&a.push(`节拍 ${h.id} 在${Jr(h.channel)}，${s}却指向另一侧的「${f}」。`)}function ky(a){return typeof a=="string"||typeof a=="number"||typeof a=="boolean"}function Jr(a){return a==="left"?"左侧":"右侧"}function np(a){const o=new Map(a.map(y=>[y.id,y])),h=new Map,f=[],s=y=>{var v;h.set(y,1),f.push(y);for(const p of((v=o.get(y))==null?void 0:v.requires)??[]){if(!o.has(p))continue;const b=h.get(p)??0;if(b===1){const T=f.indexOf(p);return[...f.slice(T),p]}if(b===0){const T=s(p);if(T)return T}}return f.pop(),h.set(y,2),null};for(const y of a)if((h.get(y.id)??0)===0){const v=s(y.id);if(v)return v}return null}const ep=[Lv,Gv,Qv,Xv,Vv,Kv],tp=["title","chapter","speakers","beats","时间轴","默认节拍","endings"],lp=["id","name","channel"],rp=["id","channel","requires","when","aside","lines","choices","next","记忆候选","清空记忆","chapter","order","sortKey","time","timeRank","label","window","ending","节拍","control"],ip=["from","text","delivery","caption","节拍","timing"],up=["thought","reply","set","next","需记忆","节拍","timing"],ap=["缩略标签","短句","类型","线"],cp=["channel","下界","上界","说明"],fp=["id","title","requires","set"];function op(){try{const a=sp(ep.map(h=>hp(h))),o=Fv(a);return o.ok?{script:a,error:null}:{script:null,error:o.error}}catch(a){return{script:null,error:a instanceof Error?a.message:"剧本无法解析"}}}function sp(a){var s,y,v;const o=a.flatMap((p,b)=>{var E,g;const T=((g=(E=p.chapters)==null?void 0:E[0])==null?void 0:g.index)??b+1;return p.beats.map(x=>({...x,chapter:x.chapter??T}))}),h={};for(const p of a)for(const[b,T]of Object.entries(p.axes??{}))h[Number(b)]=T;const f={title:((s=a[0])==null?void 0:s.title)??"",speakers:((y=a[0])==null?void 0:y.speakers)??[],beats:o,chapters:a.map((p,b)=>{var T,E;return{index:((E=(T=p.chapters)==null?void 0:T[0])==null?void 0:E.index)??b+1,title:p.title}}),axes:h,endings:a.flatMap(p=>p.endings??[]),默认节拍:(v=a.find(p=>p.默认节拍))==null?void 0:v.默认节拍};return Jv(f)}function hp(a){const o=S0.load(a);if(!el(o))throw new Error("剧本不是一个对象");Rl(o,tp,"剧本顶层");const h=fe(o.title,"剧本缺少标题"),f=A0(o.chapter),s=dp(o.speakers),y=o.时间轴===void 0?void 0:Tp(o.时间轴,"时间轴"),v=o.默认节拍===void 0?void 0:Ra(o.默认节拍,"剧本默认节拍"),p=typeof v=="string"?v:void 0,b=o.endings===void 0?void 0:pp(o.endings),T=mp(o.beats,p).map(E=>f===void 0?E:{...E,chapter:f});return{title:h,speakers:s,beats:T,chapters:f===void 0?void 0:[{index:f,title:h}],axes:f!==void 0&&y?{[f]:y}:void 0,endings:b,默认节拍:typeof v=="string"?v:void 0}}function Rl(a,o,h){const f=Object.keys(a).filter(s=>!o.includes(s));if(f.length>0)throw new Error(`${h} 有引擎不认识的字段：${f.join("、")}。若剧本新增了结构，先扩 src/engine 的字段契约，不要让它被静默丢弃。`)}function dp(a){if(!Array.isArray(a)||a.length===0)throw new Error("剧本缺少人物表");return a.map((o,h)=>{if(!el(o))throw new Error(`第 ${h+1} 个人物无法读取`);Rl(o,lp,`第 ${h+1} 个人物`);const f=fe(o.id,`第 ${h+1} 个人物缺少 id`),s=fe(o.name,`人物 ${f} 缺少名字`),y=o.channel===void 0?void 0:Qo(o.channel,f);return{id:f,name:s,channel:y}})}function mp(a,o){if(!Array.isArray(a))throw new Error("剧本缺少 beats");return a.map((h,f)=>{if(!el(h))throw new Error(`第 ${f+1} 个节拍无法读取`);const s=fe(h.id,`第 ${f+1} 个节拍缺少 id`);Rl(h,rp,`节拍 ${s}`);const y=Qo(h.channel,s);if(h.control!==void 0&&typeof h.control!="boolean")throw new Error(`节拍 ${s} 的 control 必须为布尔值`);const v=h.节拍===void 0?void 0:Ra(h.节拍,`节拍 ${s} 的 节拍`),p=[o,v],b=Ep(h.lines,s,p),T=h.choices===void 0?void 0:Sp(h.choices,s,p),E=h.requires===void 0?void 0:Na(h.requires,s,"requires"),g=h.when===void 0?void 0:Go(h.when,s),x=h.aside===void 0?void 0:fe(h.aside,`节拍 ${s} 的自言自语无法读取`),j=h.next===void 0?void 0:fe(h.next,`节拍 ${s} 的 next 无法读取`),tn=h.记忆候选===void 0?void 0:yp(h.记忆候选,s),rn=h.清空记忆===void 0?void 0:gp(h.清空记忆,s),P=h.order===void 0?void 0:jo(h.order,`节拍 ${s} 的 order`),qn=h.time===void 0?void 0:fe(h.time,`节拍 ${s} 的 time 无法读取`),$=h.timeRank===void 0?void 0:jo(h.timeRank,`节拍 ${s} 的 timeRank`),vn=h.label===void 0?void 0:fe(h.label,`节拍 ${s} 的 label 无法读取`),dn=h.window===void 0?void 0:vp(h.window,s),Tn=h.ending===void 0?void 0:fe(h.ending,`节拍 ${s} 的 ending 无法读取`),Zn=h.sortKey===void 0?void 0:jo(h.sortKey,`节拍 ${s} 的 sortKey`),pn=h.chapter===void 0?void 0:A0(h.chapter);return{id:s,channel:y,control:h.control,lines:b,choices:T,requires:E,when:g,aside:x,next:j,记忆候选:tn,清空记忆:rn,order:P,time:qn,timeRank:$,label:vn,window:dn,ending:Tn,sortKey:Zn,chapter:pn,...v!==void 0?{节拍:v}:{}}})}function yp(a,o){if(!Array.isArray(a))throw new Error(`节拍 ${o} 的记忆候选无法读取`);return a.map((h,f)=>{if(!el(h))throw new Error(`节拍 ${o} 的第 ${f+1} 条记忆候选无法读取`);return Rl(h,ap,`节拍 ${o} 的第 ${f+1} 条记忆候选`),{缩略标签:fe(h.缩略标签,`节拍 ${o} 的第 ${f+1} 条记忆候选缺少缩略标签`),短句:fe(h.短句,`节拍 ${o} 的第 ${f+1} 条记忆候选缺少短句`),类型:h.类型===void 0?void 0:fe(h.类型,`节拍 ${o} 的记忆候选类型无法读取`),线:h.线===void 0?void 0:fe(h.线,`节拍 ${o} 的记忆候选线无法读取`)}})}function gp(a,o){if(a==="all"||a==="left"||a==="right")return a;throw new Error(`节拍 ${o} 的清空记忆只能是 all、left 或 right`)}function vp(a,o){if(!el(a))throw new Error(`节拍 ${o} 的 window 无法读取`);Rl(a,cp,`节拍 ${o} 的 window`);const h=Qo(a.channel,`节拍 ${o} 的 window`),f=a.下界===void 0?[]:Na(a.下界,o,"window.下界"),s=Na(a.上界,o,"window.上界"),y=a.说明===void 0?void 0:fe(a.说明,`节拍 ${o} 的 window.说明 无法读取`);return{channel:h,下界:f,上界:s,...y?{说明:y}:{}}}function pp(a){if(!Array.isArray(a))throw new Error("endings 必须是列表");return a.map((o,h)=>{if(!el(o))throw new Error(`第 ${h+1} 个 endings 无法读取`);Rl(o,fp,`第 ${h+1} 个 endings`);const f=fe(o.id,`第 ${h+1} 个 endings 缺少 id`);return{id:f,title:fe(o.title,`终局 ${f} 缺少 title`),requires:Na(o.requires,f,"终局 requires"),set:o.set===void 0?void 0:Go(o.set,f)}})}function Ep(a,o,h){if(!Array.isArray(a))throw new Error(`节拍 ${o} 缺少台词`);return a.map((f,s)=>{if(!el(f))throw new Error(`节拍 ${o} 的第 ${s+1} 句无法读取`);Rl(f,ip,`节拍 ${o} 的第 ${s+1} 句`);const y=fe(f.from,`节拍 ${o} 的第 ${s+1} 句缺少说话人`),v=fe(f.text,`节拍 ${o} 的第 ${s+1} 句缺少文字`),p=xp(f.delivery,o),b=f.caption===void 0?void 0:fe(f.caption,`节拍 ${o} 的图说无法读取`),T=f.节拍===void 0?void 0:Ra(f.节拍,`节拍 ${o} 的第 ${s+1} 句 节拍`);return{from:y,text:v,delivery:p,...b!==void 0?{caption:b}:{},...T!==void 0?{节拍:T}:{},timing:Aa([...h,T])}})}function Sp(a,o,h){if(!Array.isArray(a))throw new Error(`节拍 ${o} 的选项无法读取`);return a.map((f,s)=>{if(!el(f))throw new Error(`节拍 ${o} 的第 ${s+1} 个选项无法读取`);Rl(f,up,`节拍 ${o} 的第 ${s+1} 个选项`);const y=fe(f.thought,`节拍 ${o} 的第 ${s+1} 个想法是空的`),v=fe(f.reply,`节拍 ${o} 的第 ${s+1} 个回复是空的`),p=f.next===void 0?void 0:fe(f.next,`节拍 ${o} 的选项 next 无法读取`),b=f.set===void 0?void 0:Go(f.set,o),T=f.需记忆===void 0?void 0:fe(f.需记忆,`节拍 ${o} 的需记忆无法读取`),E=f.节拍===void 0?void 0:Ra(f.节拍,`节拍 ${o} 的第 ${s+1} 个选项 节拍`);return{thought:y,reply:v,...p!==void 0?{next:p}:{},...b!==void 0?{set:b}:{},...T!==void 0?{需记忆:T}:{},...E!==void 0?{节拍:E}:{},timing:Aa([...h,E])}})}function Ra(a,o){const h=x0(a);if(h)throw new Error(`${o}：${h}`);return a}function Go(a,o){if(!el(a))throw new Error(`节拍 ${o} 的旗标无法读取`);const h={};for(const[f,s]of Object.entries(a)){if(typeof s!="string"&&typeof s!="number"&&typeof s!="boolean")throw new Error(`节拍 ${o} 的旗标 ${f} 只能是文字、数字或是否`);h[f]=s}return h}function Na(a,o,h){if(!Array.isArray(a)||a.some(f=>typeof f!="string"))throw new Error(`节拍 ${o} 的 ${h} 必须是 id 列表`);return a}function Tp(a,o){if(!Array.isArray(a)||a.some(h=>typeof h!="string"))throw new Error(`${o} 必须是文字列表`);return a}function Qo(a,o){if(a!=="left"&&a!=="right")throw new Error(`${o} 的 channel 必须是 left 或 right`);return a}function xp(a,o){if(a!=="type"&&a!=="pop"&&a!=="image"&&a!=="thought")throw new Error(`节拍 ${o} 的呈现方式必须是 type、pop、image 或 thought`);return a}function jo(a,o){if(typeof a!="number"||!Number.isInteger(a)||a<0)throw new Error(`${o} 必须是非负整数`);return a}function A0(a){if(a!==void 0){if(typeof a!="number"||!Number.isInteger(a)||a<1)throw new Error("chapter 必须是从 1 开始的整数");return a}}function fe(a,o){if(typeof a!="string")throw new Error(o);return a.trim()}function el(a){return typeof a=="object"&&a!==null&&!Array.isArray(a)}function Oa(a,o,h){var y;const f=((y=a.archive)==null?void 0:y[o])??[];if(f.some(v=>v.chapter===h))return a;const s=[...new Set(a.messages.filter(v=>v.channel===o&&v.delivery!=="thought").map(v=>v.beatId))];return s.length===0?a:{...a,archive:{left:[],right:[],...a.archive,[o]:[...f,{chapter:h,beatIds:s}]}}}function bp(a,o){const h={left:[],right:[]};if(!a||typeof a!="object")return h;const f=new Map(o.map(s=>[s.id,s]));for(const s of["left","right"]){const y=a[s];if(Array.isArray(y))for(const v of y){if(!v||!Number.isInteger(v.chapter)||!Array.isArray(v.beatIds)||h[s].some(b=>b.chapter===v.chapter))continue;const p=v.beatIds.filter(b=>{if(typeof b!="string")return!1;const T=f.get(b);return(T==null?void 0:T.channel)===s&&(T.chapter??1)===v.chapter});p.length>0&&h[s].push({chapter:v.chapter,beatIds:[...new Set(p)]})}}return h}const Vi=2200,Ap=2e3;function Xo(a,o){return!o.some(h=>{var f;return h.next===a.id||((f=h.choices)==null?void 0:f.some(s=>s.next===a.id))})}function Fy(a,o){const h=a.filter(f=>f.channel===o).map(f=>f.chapter??0).filter(f=>f>0);return h.length>0?Math.min(...h):1}function N0(a){return{completed:[],flags:{},activated:a.filter(o=>Xo(o,a)).map(o=>o.id),messages:[],pending:{left:null,right:null},memories:{left:[],right:[]},chapter:{left:Fy(a,"left"),right:Fy(a,"right")},ritual:{left:null,right:null},archive:{left:[],right:[]},endings:[],error:null,runId:0}}function Ma(a,o){return a.chapter[o]>=5?5:void 0}function Np(a,o,h,f){const s=a.memories[o];if(h.label.trim()===""||s.some(p=>p.label===h.label)||s.length>=(Ma(a,o)??1/0)&&!f||f&&!s.some(p=>p.label===f))return a;const v=s.filter(p=>p.label!==f);return v.length>=(Ma(a,o)??1/0)?a:{...a,memories:{...a.memories,[o]:[...v,h]}}}function Op(a,o,h){const f=a.memories[o],s=f.filter(y=>y.label!==h);return s.length===f.length?a:{...a,memories:{...a.memories,[o]:s}}}function Mp(a,o,h){return a.memories[o].some(f=>f.label===h)}function O0(a,o,h){var T;if((T=a.ritual)!=null&&T[o]||a.pending[o])return!1;const f=Ki(a,o,h);if(!f)return!1;const s=o==="left"?"right":"left",y=a.pending[s],v=y?h.find(E=>E.id===y.beatId):a.ritual[s]&&f.chapter===a.chapter[o]?Ki(a,s,h):null,p=(v==null?void 0:v.chapter)===f.chapter&&f.timeRank!==void 0&&(v==null?void 0:v.timeRank)===f.timeRank;if(v&&(f.chapter??0)>=5&&!p&&_a(v,f)<0)return!1;const b=new Set(a.completed);return!h.some(E=>{var g;return E.channel===s&&((g=E.window)==null?void 0:g.上界.includes(f.id))&&a.activated.includes(E.id)&&!b.has(E.id)})}function _p(a,o){var f;const h=[];for(const s of["left","right"]){if((f=a.ritual)!=null&&f[s]||a.pending[s]||!O0(a,s,o))continue;const y=Ki(a,s,o);y&&h.push({channel:s,beat:y})}return h.length===0?null:(h.sort((s,y)=>_a(s.beat,y.beat)),{type:"arm",channel:h[0].channel})}function M0(a,o){return a.messages.some(h=>h.channel===o)?{...a,messages:a.messages.filter(h=>h.channel!==o)}:a}function Cp(a,o,h){var s;const f=(s=a.ritual)==null?void 0:s[o];if(!f||h<f.until)return a;if(f.phase==="mask"){const y=M0(Oa(a,o,f.from),o);return{...y,chapter:{...y.chapter,[o]:f.to},ritual:{...y.ritual,[o]:{...f,phase:"pause",until:h+Ap}}}}return{...a,ritual:{...a.ritual,[o]:null}}}function Rp(a,o){const h=new Set(a.completed);for(const f of o)if(!h.has(f.id)&&a.activated.includes(f.id)&&Ca(f,h)==="closed")return $v(f,h);return null}function Dp(a,o){const h=new Set([...a.activated,...a.completed]),f=o.filter(s=>!h.has(s.id)&&(Xo(s,o)||zp(s,a,o))).map(s=>s.id);return f.length===0?a:{...a,activated:[...a.activated,...f]}}function zp(a,o,h){return h.some(f=>f.next===a.id&&o.completed.includes(f.id))}function Hp(a,o){return a.messages.filter(h=>h.channel===o)}function Ki(a,o,h){const f=new Set(a.completed);let s=null;for(const y of h){if(y.channel!==o||f.has(y.id)||!a.activated.includes(y.id)||_0(y,a.flags)!=="ok"||(y.requires??[]).some(p=>!f.has(p)))continue;const v=Ca(y,f);v==="waiting"||v==="closed"||(!s||_a(y,s)<0)&&(s=y)}return s}function Up(a,o,h){var T;const f=Ki(a,o,h),s=[],y=new Set(a.completed);for(const E of h){if(E.channel!==o||y.has(E.id)||!a.activated.includes(E.id))continue;const g=_0(E,a.flags);if(g==="no")continue;const x=(E.requires??[]).filter(tn=>!y.has(tn)),j=Ca(E,y);if(g==="wait"||j==="waiting"){s.push({id:E.id,unmet:x.length>0?x:Object.keys(E.when??{})});continue}if(j==="closed"){s.push({id:E.id,unmet:[`区间已关闭：${((T=E.window)==null?void 0:T.上界.join("/"))??""}`]});continue}x.length>0&&s.push({id:E.id,unmet:x})}const v=h.some(E=>E.channel===o),p=a.endings.find(E=>h.some(g=>g.ending===E&&g.channel===o&&y.has(g.id)))??null;return{mode:v?f?"available":s.length>0?"gated":"ended":"empty",availableId:(f==null?void 0:f.id)??null,locked:s,endingId:p}}function wp(a,o){const h=new Map;for(const s of o)s.ending&&h.set(s.ending,[...h.get(s.ending)??[],s.id]);const f=new Set(a.completed);return[...h.entries()].filter(([,s])=>s.length>0&&s.every(y=>f.has(y))).map(([s])=>s)}function jp(a,o,h,f=Date.now()){if(!O0(a,o,h))return a;const s=Ki(a,o,h);if(!s)return a;const y=s.chapter??a.chapter[o];return y!==a.chapter[o]?{...Oa(a,o,a.chapter[o]),ritual:{...a.ritual,[o]:{from:a.chapter[o],to:y,phase:"mask",until:f+Vi,startedAt:f}}}:s.lines.length===0&&s.choices&&s.choices.length>0?Zi(a,o,{kind:"choices",beatId:s.id}):s.control?Vo(a,o,s,a.messages,void 0,s.next,h):Zi(a,o,{kind:"lines",beatId:s.id,lineIndex:0})}function qp(a,o,h){const f=a.pending[o];if(!f||f.kind!=="lines")throw new Error(`${Jr(o)}没有正在播出的台词`);const s=Ko(h,f.beatId),y=s.lines[f.lineIndex];if(!y)throw new Error(`节拍 ${s.id} 没有第 ${f.lineIndex+1} 句`);const v=[...a.messages,{id:`${s.id}:${f.lineIndex}`,channel:o,beatId:s.id,from:y.from,text:y.text,delivery:y.delivery,caption:y.caption,timing:y.timing}],p=f.lineIndex+1;return p<s.lines.length?{...Zi(a,o,{kind:"lines",beatId:s.id,lineIndex:p}),messages:v}:s.choices&&s.choices.length>0?{...Zi(a,o,{kind:"choices",beatId:s.id}),messages:v}:Vo(a,o,s,v,void 0,s.next,h)}function Bp(a,o,h,f){var p;const s=a.pending[o];if(!s||s.kind!=="choices")throw new Error(`${Jr(o)}还不能选：这一侧的话还没说完`);const y=Ko(f,s.beatId),v=(p=y.choices)==null?void 0:p[h];if(!v)throw new Error(`节拍 ${y.id} 没有第 ${h+1} 个选项`);if(v.需记忆&&!Mp(a,o,v.需记忆))throw new Error(`节拍 ${y.id} 的选项「${v.thought}」需要记忆「${v.需记忆}」，本窗还没存`);return Zi(a,o,{kind:"reply",beatId:y.id,choiceIndex:h})}function Yp(a,o,h){var p;const f=a.pending[o];if(!f||f.kind!=="reply")throw new Error(`${Jr(o)}没有待发出的回复`);const s=Ko(h,f.beatId),y=(p=s.choices)==null?void 0:p[f.choiceIndex];if(!y)throw new Error(`节拍 ${s.id} 没有第 ${f.choiceIndex+1} 个选项`);const v=[...a.messages,{id:`${s.id}:reply:${f.choiceIndex}`,channel:o,beatId:s.id,from:"ai",text:y.reply,delivery:"type",timing:y.timing}];return Vo(a,o,s,v,y.set,y.next,h)}function Vo(a,o,h,f,s,y,v){if(a.completed.includes(h.id))return a;const p={...a.flags};if(s)for(const[tn,rn]of Object.entries(s))p[tn]=rn;const b=Lp(a.memories,h.清空记忆),T=y&&!a.activated.includes(y)?[...a.activated,y]:a.activated,E=[...a.completed,h.id],g={...a,messages:f,flags:p,memories:b,activated:T,completed:E,pending:{...a.pending,[o]:null}},x=wp(g,v),j={...g,endings:x};return x.includes("第七幕完成")?Oa(Oa(j,"left",7),"right",7):j}function Lp(a,o){return o?o==="all"?{left:[],right:[]}:{...a,[o]:[]}:a}function Zi(a,o,h){return{...a,pending:{...a.pending,[o]:h}}}function _0(a,o){if(!a.when)return"ok";for(const[h,f]of Object.entries(a.when)){if(!(h in o))return"wait";if(o[h]!==f)return"no"}return"ok"}function Ko(a,o){const h=a.find(f=>f.id===o);if(!h)throw new Error(`找不到节拍 ${o}`);return h}function C0(a,o){return a.startedAt!==void 0?Math.max(0,o-a.startedAt):a.phase==="pause"?Vi:Math.max(0,Vi-(a.until-o))}function Zo(){const[a,o]=en.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches);return en.useEffect(()=>{const h=window.matchMedia("(prefers-reduced-motion: reduce)"),f=()=>o(h.matches);return h.addEventListener("change",f),()=>h.removeEventListener("change",f)},[]),a}function Gp(a){const[o,h]=en.useState(()=>Date.now());return en.useEffect(()=>{if(!a)return;h(Date.now());const f=window.setInterval(()=>h(Date.now()),48);return()=>window.clearInterval(f)},[a]),o}const Wy=["/","|","\\","-"];function Py(){const a=Zo(),[o,h]=en.useState(0);return en.useEffect(()=>{if(a)return;const f=window.setInterval(()=>h(s=>(s+1)%Wy.length),115);return()=>window.clearInterval(f)},[a]),w.jsx("span",{className:"terminal-spinner","aria-hidden":"true",children:a?"-":Wy[o]})}function R0(a,o,h,f,s){const[y,v]=en.useState(()=>o?Math.min(1,a.length):a.length),p=en.useRef(!1),b=en.useRef(f),T=en.useRef(s);return b.current=f,T.current=s,en.useEffect(()=>{var g;if(!o)return;if(y>=a.length){p.current||(p.current=!0,(g=b.current)==null||g.call(b));return}const E=window.setTimeout(()=>{var x;v(j=>j+1),(x=T.current)==null||x.call(T)},Math.max(0,h));return()=>window.clearTimeout(E)},[y,a,o,h]),o?a.slice(0,y):a}function Qp({text:a,interval:o,onFinished:h}){const f=R0(a,!0,o,h);return w.jsxs(w.Fragment,{children:[f,f.length<a.length?w.jsx("span",{className:"caret","aria-hidden":"true"}):null]})}const Ir={left:{id:"01",name:"男生",gender:"男",age:21,work:"在校大学生",city:"西安"},right:{id:"02",name:"女生",gender:"女",age:22,work:"大学生 · 项目组实习",city:"西安"}};function Xp({mode:a,choices:o,selected:h,onMove:f,onPick:s,hasMemory:y}){return w.jsx("div",{className:"choice-list","data-testid":"composer","data-mode":a,children:a==="active"?w.jsx("div",{role:"group","aria-label":"选一个想法",children:o.map((v,p)=>{const b=v.需记忆,T=!!(b&&!y(b)),E=!T&&h===p;return w.jsxs("button",{type:"button","data-testid":"choice","data-index":p,"data-gated":T||void 0,disabled:T,title:T?`需要记忆：${b}`:void 0,onMouseEnter:()=>f(p),onFocus:()=>f(p),onClick:()=>s(p),className:"choice-line","data-current":E||void 0,children:[w.jsx("span",{className:"choice-cursor","aria-hidden":"true",children:E?">":""}),w.jsxs("span",{children:[b?w.jsx("span",{className:"memory-tag","data-testid":"memory-tag",children:"[MEM] "}):null,v.thought]})]},p)})}):null})}function n0({from:a,text:o,delivery:h,caption:f,animate:s=!1,typeIntervalMs:y=100,marks:v,onSaveMark:p,onFinished:b,onProgress:T,onSkip:E}){const g=s&&h==="type",x=a==="ai",j=R0(o,g,y,b,T);if(h==="thought")return null;const tn=rn=>{if(!v||v.length===0)return rn;const P=v.map(vn=>({mark:vn,at:rn.indexOf(vn.text)})).filter(vn=>vn.at>=0).sort((vn,dn)=>vn.at-dn.at);if(P.length===0)return rn;const qn=[];let $=0;for(const{mark:vn,at:dn}of P)dn<$||(dn>$&&qn.push(rn.slice($,dn)),qn.push(vn.saved?w.jsxs("span",{"data-testid":"memory-mark","data-saved":"true",className:"memory-mark-saved",children:[vn.text,w.jsx("span",{className:"memory-tag",children:" [MEM] 已存"})]},`${dn}-${vn.text}`):w.jsxs("button",{type:"button","data-testid":"memory-mark","data-saved":"false",className:"memory-mark",disabled:!p,"aria-label":`存记忆：${vn.text}`,onClick:()=>p==null?void 0:p(vn.text),children:[vn.text," [+]"]},`${dn}-${vn.text}`)),$=dn+vn.text.length);return $<rn.length&&qn.push(rn.slice($)),qn};return h==="image"?w.jsxs("div",{className:`msg-row ${x?"right":"left"}`,"data-from":a,"data-delivery":h,children:[w.jsx("span",{className:"msg-direction","aria-hidden":"true",children:x?"OUT<":"IN>"}),w.jsxs("figure",{className:"msg-image",children:[w.jsx("img",{src:o,alt:f??"图片"}),f?w.jsx("figcaption",{children:f}):null]})]}):w.jsxs("div",{className:`msg-row ${x?"right":"left"}`,"data-from":a,"data-delivery":h,children:[w.jsx("span",{className:"msg-direction","aria-hidden":"true",children:x?"OUT<":"IN>"}),w.jsxs("div",{className:x?"msg-ai":"msg-user","data-testid":"bubble-text",onClick:g?E:void 0,title:g?"点击跳过":void 0,children:[x?w.jsx("span",{className:"msg-ink",children:tn(j)}):tn(j),g&&j.length<o.length?w.jsx("span",{className:"caret","aria-hidden":"true"}):null]})]})}function Vp({script:a,channel:o,state:h,dispatch:f,active:s,focused:y,selected:v,skipRefs:p,onMove:b,onPick:T,now:E,reduced:g,running:x,onMemoryFull:j}){var Nt,Yt;const{name:tn,id:rn}=Ir[o],P=h.pending[o],qn=Hp(h,o),$=qn.filter(u=>u.delivery!=="thought"),vn=(P==null?void 0:P.kind)==="choices"?[...qn].reverse().find(u=>u.beatId===P.beatId&&u.delivery==="thought"):null,dn=Up(h,o,a.beats),Tn=h.ritual[o],Zn=Tn?C0(Tn,E):0,pn=Tn?Tn.phase==="pause"||g?$.length:Math.floor($.length*Math.min(1,Zn/Vi)):0,Mn=$.slice(pn),ee=u=>{var N;return((N=a.beatById)==null?void 0:N.get(u))??a.beats.find(Y=>Y.id===u)},Un=new Set(h.memories[o].map(u=>u.label)),nn=(u,N)=>{var L;return(((L=ee(u))==null?void 0:L.记忆候选)??[]).filter(B=>N.includes(B.短句)).map(B=>({text:B.短句,saved:Un.has(B.缩略标签)}))},W=new Set;for(const u of qn)for(const N of((Nt=ee(u.beatId))==null?void 0:Nt.记忆候选)??[])u.text.includes(N.短句)&&W.add(N.缩略标签);const Rn=W.size,An=h.memories[o].length,Qn=Ma(h,o),[U,on]=en.useState(!1),sn=en.useRef(null),[xn,Cn]=en.useState(),Sn=x?Kp(a,h,o):null,oe=(Sn==null?void 0:Sn.token)??"",Vn=(xn==null?void 0:xn.token)===oe?xn.phase:"idle",O=en.useRef(()=>{}),V=en.useRef(h),un=en.useRef(null),cn=en.useRef([]),Nn=en.useRef(0),Dn=en.useRef(null),mn=en.useRef(new Map);en.useLayoutEffect(()=>{var Y;const u=Dn.current;if(!u)return;if(!Tn||g){mn.current.clear();return}u.scrollTop=0;const N=new Map;for(const L of u.querySelectorAll("[data-clear-row]")){const B=L.dataset.clearRow,d=L.offsetTop,D=mn.current.get(B);N.set(B,d),D!==void 0&&D!==d&&((Y=L.animate)==null||Y.call(L,[{transform:`translateY(${D-d}px)`},{transform:"translateY(0)"}],{duration:135,easing:"ease-out"}))}mn.current=N},[Tn,pn,g]),V.current=h;const F=en.useCallback(()=>{for(const u of cn.current)window.clearTimeout(u);cn.current=[]},[]),hn=en.useCallback((u,N)=>{if(N<=0){u();return}cn.current.push(window.setTimeout(u,N))},[]),He=en.useCallback(()=>{F();const u=V.current.pending[o];if(!u||u.kind==="choices")return;const N=`${V.current.runId}|${u.beatId}:${u.kind}:${"lineIndex"in u?u.lineIndex:"choiceIndex"in u?u.choiceIndex:0}`;un.current!==N&&(un.current=N,f(u.kind==="lines"?{type:"commit-line",channel:o}:{type:"commit-reply",channel:o}))},[o,F,f]);O.current=He;const it=en.useCallback(()=>{hn(()=>O.current(),Nn.current)},[hn]),Ue=en.useCallback(()=>O.current(),[]);en.useEffect(()=>{const u=p.current;return u[o]=Ue,()=>{delete u[o]}},[o,Ue,p]),en.useEffect(()=>{F();const u=Y=>Cn({token:oe,phase:Y});if(!Sn)return u("idle"),F;const N=g?{...T0}:Sn.timing;return Nn.current=Sn.delivery==="thought"?0:N.afterMs,u("pause"),hn(()=>{u("indicator"),hn(()=>{!g&&Sn.delivery==="thought"||Iv(Sn.delivery,g)?u("typing"):(u("shown"),hn(()=>O.current(),Nn.current))},N.indicatorMs)},N.pauseBeforeMs),F},[oe,F,hn,Sn==null?void 0:Sn.delivery,g]),en.useEffect(()=>{const u=Dn.current;u&&!Tn&&(u.scrollTop=u.scrollHeight)},[$.length,Vn,oe,Tn]);const Fn=P?ee(P.beatId):void 0,$n=x&&(P==null?void 0:P.kind)==="choices"&&(Fn==null?void 0:Fn.choices)&&Fn.choices.length>0,Kn=$n?"active":(P==null?void 0:P.kind)==="lines"||(P==null?void 0:P.kind)==="reply"||dn.mode==="gated"||Tn?"locked":"empty",ue=(Sn==null?void 0:Sn.delivery)==="thought"?Sn:null,$e=(Fn==null?void 0:Fn.time)??(Fn==null?void 0:Fn.label)??null,Te=u=>{var N,Y,L;return(L=(Y=(N=ee(u))==null?void 0:N.time)==null?void 0:Y.match(/^交往第\d+天 周./))==null?void 0:L[0]},yt=$.at(-1),gt=yt?Te(yt.beatId):void 0,pe=P&&Te(P.beatId);en.useEffect(()=>on(!1),[h.runId,h.chapter[o]]),en.useEffect(()=>{if(!U)return;const u=N=>{var Y;N.target instanceof Node&&!((Y=sn.current)!=null&&Y.contains(N.target))&&on(!1)};return document.addEventListener("pointerdown",u),()=>document.removeEventListener("pointerdown",u)},[U]);function Bt(u){An>=(Qn??1/0)?j(u):f({type:"save-memory",channel:o,...u})}const Qe=`${An}/${Qn??Math.max(Rn,An)}`;return w.jsxs("section",{className:"pane terminal-column","data-testid":`pane-${o}`,"aria-label":tn,"data-focused":y||void 0,"data-playing":s||void 0,children:[w.jsxs("header",{className:"pane-head ascii-rule",children:[w.jsx("span",{className:"pane-signal","aria-hidden":"true",children:s?">":" "}),w.jsxs("span",{className:"pane-number",children:["USER ",rn," /"]}),w.jsx("span",{className:"pane-name",children:tn}),w.jsxs("div",{className:"pane-head-right",children:[$e?w.jsx("span",{className:"pane-meta","data-testid":`time-${o}`,children:$e}):null,w.jsx("button",{type:"button",className:"memory-entry","data-testid":`memory-counter-${o}`,ref:sn,onClick:()=>on(u=>!u),onBlur:()=>on(!1),"aria-expanded":U,"aria-label":`Memory 数量：${Qe}`,children:U?`[Memory 数量：${Qe}]`:`[MEM ${Qe}]`})]})]}),w.jsxs("div",{ref:Dn,className:"messages",role:"log","aria-label":`${tn}的对话`,children:[Mn.map((u,N)=>{const Y=Te(u.beatId),L=Mn[N-1];return w.jsxs("div",{"data-clear-row":u.id,children:[Y&&Y!==(L&&Te(L.beatId))?w.jsx("div",{className:"chat-date",children:Y}):null,w.jsx(n0,{from:u.from,text:u.text,delivery:u.delivery,caption:u.caption,marks:nn(u.beatId,u.text),onSaveMark:Tn?void 0:B=>{var D;const d=(((D=ee(u.beatId))==null?void 0:D.记忆候选)??[]).find(q=>q.短句===B);d&&Bt({label:d.缩略标签,text:d.短句,beatId:u.beatId})}})]},u.id)}),Sn&&Sn.delivery!=="thought"&&Vn!=="idle"&&pe&&pe!==gt?w.jsx("div",{className:"chat-date",children:pe}):null,Tn&&Zn<Vi+500&&!g?w.jsxs("p",{className:"system-line","data-clear-row":"system","data-testid":`resetting-${o}`,role:"status",children:["[SYS] ",Tn.phase==="mask"?"正在清空上下文…":"已清空"]}):null,Vn==="indicator"&&Sn&&Sn.delivery!=="thought"?w.jsxs("div",{className:`msg-row ${Sn.from==="ai"?"right":"left"} message-wait`,"data-testid":`message-wait-${o}`,children:[w.jsx("span",{className:"msg-direction",children:w.jsx(Py,{})}),w.jsx("button",{type:"button",className:`${Sn.from==="ai"?"msg-ai":"msg-user"} message-wait-button`,"data-testid":"skip",onClick:Ue,"aria-label":"跳过当前播放",children:Sn.from==="ai"?"正在发送":"正在接收"})]}):null,(Vn==="typing"||Vn==="shown")&&Sn&&Sn.delivery!=="thought"?w.jsx(n0,{from:Sn.from,text:Sn.text,delivery:Sn.delivery,caption:Sn.caption,animate:Vn==="typing",typeIntervalMs:Sn.timing.typeIntervalMs,onFinished:Vn==="typing"?it:void 0,onProgress:()=>{const u=Dn.current;u&&(u.scrollTop=u.scrollHeight)},onSkip:Ue},Sn.token):null]}),!Tn&&($n||ue&&Vn!=="idle"&&Vn!=="pause")?w.jsxs("div",{className:"composer",children:[vn||ue?w.jsxs("div",{className:"think-block","data-testid":`think-${o}`,children:[w.jsx("span",{className:"think-block-head",children:"[THINKING]"})," ",ue&&Vn==="indicator"?w.jsxs("span",{className:"think-progress",children:[w.jsx(Py,{})," 正在思考"]}):ue&&Vn==="typing"?w.jsx(Qp,{text:ue.text,interval:Math.max(15,Math.min(31,ue.timing.typeIntervalMs)),onFinished:it},ue.token):(Yt=ue??vn)==null?void 0:Yt.text]}):null,w.jsx(Xp,{mode:Kn,choices:$n?(Fn==null?void 0:Fn.choices)??[]:[],selected:v,onMove:b,onPick:T,hasMemory:u=>Un.has(u)})]}):null]})}function Kp(a,o,h){var v,p;const f=o.pending[h];if(!f||f.kind==="choices")return null;const s=((v=a.beatById)==null?void 0:v.get(f.beatId))??a.beats.find(b=>b.id===f.beatId);if(!s)return null;if(f.kind==="lines"){const b=s.lines[f.lineIndex];return b?{token:`${o.runId}|${s.id}:line:${f.lineIndex}`,from:b.from,text:b.text,delivery:b.delivery,caption:b.caption,timing:b.timing??Aa([])}:null}const y=(p=s.choices)==null?void 0:p[f.choiceIndex];return y?{token:`${o.runId}|${s.id}:reply:${f.choiceIndex}`,from:"ai",text:y.reply,delivery:"type",timing:y.timing??Aa([])}:null}const Zp=[["L1 L2 L3","他请助手推荐桌游店，想选一家适合多人聚会的店。"],["R1-shiguang R1-xindong R1-xushi","朋友约她去桌游店，她让助手查了地点。"],["R2","出门时间紧，她问要不要化妆。"],["3.1.1-A 3.1.1-C","他到了一家临时改换的桌游店，现场有不少陌生人。"],["3.1.1-B","他到了桌游店，发现除了朋友几乎都不认识。"],["3.2.1","他和一位戴耳机的人搭话，起初误以为对方不想理他。"],["3.2.2 3.2.3 3.2.4 3.3.1 3.3.2","桌游开始后，他留意到一位像是表妹同桌的女生。"],["3.4.1","她出地铁后问了去桌游店的路。"],["3.4.2","她说没按助手的指路找到店，后来向同学问到了位置。"],["3.4.3-A 3.4.3-B 3.4.4","她问起一件衣服的牌子和价格。"],["4.1.1 4.2.1","桌游结束后，他向助手回顾了和那位女生的互动。"],["4.2.2","他想问表妹要微信，又怕问得唐突。"],["4.2.3","他打算借舍友的名义去问表妹。"],["4.2.4 4.2.5","他重新想了想，决定先不问。"],["4.3.1 4.3.2 4.3.3","她在桌游局遇到同桌的表哥，想联系他，又犹豫要不要问同桌。"],["4.3.4","她打算去问同桌。"],["4.3.5","她决定先不问。"],["5m.1.1-A 5m.1.1-B 5m.1.1-C 5m.1.2 5m.1.3","加上微信后，他琢磨怎么开场，又问起她回消息的速度。"],["5m.1.4","他睡前收住话题，第二天早上她照常找他聊天。"],["5m.1.5","他顺着桌游的话题继续聊，隔天白天还没收到她的消息。"],["5m.1.6 5m.2.1 5m.2.2","两人继续聊天。他留意到她有时会主动分享，也问自己是不是发得太频繁。"],["5m.2.3 5m.2.5","他试着少发消息，等回复时还是觉得不踏实。"],["5m.2.4","他仍然频繁发消息，发现她回得一如既往地慢。"],["5m.3.1 5m.3.2 5m.3.3 5m.3.4","他约她吃饭，改期后两人见面。他回来向助手聊起这次约会。"],["5m.4.1 5m.4.2 5m.4.3 5m.4.4","他和助手商量表白，发出消息后收到她愿意试试的答复。"],["5f.1.1-A 5f.1.1-B 5f.1.1-C 5f.1.2 5f.1.3","加上微信后她和他聊了几天，向助手提到下班后常没精力回消息。"],["5f.1.4","她告诉他自己累了，收到一长串关心的话。"],["5f.1.5","她发了个表情包，他回了一句让她早点休息。"],["5f.2.1","他夸她开朗，她向助手说起自己的社交生活。"],["5f.2.2","她在和闺蜜吃饭时说起他。"],["5f.2.3","她向助手谈到自己累时习惯一个人待着。"],["5f.2.4","她说他问起家里的事，自己岔开了话题。"],["5f.3.1 5f.3.2 5f.3.3 5f.3.4","她因为工作改约周日，见面后和助手回顾了吃饭、散步时的感受。"],["5f.4.1 5f.4.2 5f.4.3 5f.4.4","收到表白后她犹豫过，最后回复说愿意试试。"],["6m.CHOICE 6m.M2A 6m.M2B","确定关系后，他用两人的照片发了朋友圈。"],["6m.M3 6m.M4","他提议吃青提蛋糕庆祝，后来把合照原图发给她。"],["6m.M5 6m.MEMCHOICE","他问她能不能一起过满月纪念日，又来问礼物怎么准备。"],["6m.M7A","他下单洗了两张合照。"],["6m.M7B","他先记下纪念日，准备以后再想礼物。"],["6f.F1 6f.CHOICE","她看到了他发的合照，来问自己要不要也发一条。"],["6f.F3A","她发了朋友圈，同事来问照片里的人是谁。"],["6f.F3B","她把照片发给闺蜜，闺蜜打来电话。"],["6f.F4 6f.F5","她找他要了合照原图，也提到他提议用青提蛋糕庆祝。"],["6f.F6 6f.F7 6f.F8","她答应把满月纪念日那天留给他，并记进了日历。"],["7m.MONE","她赶项目、回消息变少，他说自己还是常想找她。"],["7m.MNEWS 7m.MPROJECT 7m.MDEMAND","他向助手复述了聚餐后的争执，提到自己要求看她和同事的私聊。"],["7m.MWAIT 7m.MFEAR 7m.MOWN","他承认不该要聊天记录。她一天没回，他向助手说起等待和自己的猜测。"],["7m.OPENCHOICE","她约他见面，也告诉他自己前一天是故意没回。"],["7m.PLAINCHOICE","她发来见面邀请，他还在犹豫要不要问前一天的事。"],["7m.SENTBOTH 7m.SENTHER 7m.SENTHIM 7m.SENTQUIET 7m.MEMBOTH 7m.MEMHER 7m.MEMHIM 7m.MEMQUIET 7m.PLANENDBOTH 7m.PLANENDHER 7m.PLANENDHIM 7m.PLANENDQUIET","两人约好下午四点在地铁口见，他来问吃什么比较合适。"],["7m.AFTERBOTH","见面后他们谈到故意不回和对同事的猜疑，也说了下次怎么做。"],["7m.AFTERHER","她提到自己气上了头，他换了话题。"],["7m.AFTERHIM","他说以后不乱猜她和同事的关系，也说自己不愿一直等回复。"],["7m.AFTERQUIET","他们一起吃了饭，没有提起周五的争执。"],["7f.FDAY 7f.FDAYMORE","她在赶项目，和助手商量怎么提前告诉他部门聚餐的事。"],["7f.FANGER 7f.FDEMAND","聚餐后他追问她和同事的关系，还要求看聊天记录。她向助手说起这件事。"],["7f.FNOTIFICATION 7f.FPUSH 7f.FOWN","她看到了他的消息，告诉助手自己故意没有回复。"],["7f.COUSIN","她还不想和他说话，开始考虑找别人聊聊。"],["7f.COUSINSENTNO 7f.COUSINBACKNO","她找了闺蜜聊，闺蜜问她还想不想见他。"],["7f.COUSINSENTYES 7f.COUSINBACKYES","她找同桌聊，叮嘱对方别替她去联系他。"],["7f.FCHOICE 7f.FSENTEASY","她想当面说，最后发出了见面邀请。"],["7f.FSENTOPEN","发出邀请时，她也写了自己是故意让他等。"],["7f.RECEIVEDBOTH 7f.RECEIVEDHER 7f.RECEIVEDHIM 7f.RECEIVEDQUIET 7f.ACKBOTH 7f.ACKHIM 7f.SETBOTH 7f.SETHER 7f.SETHIM 7f.SETQUIET","他答应见面。她和他约好下午四点在地铁口碰头。"],["7f.AFTERBOTH","见面时她说了故意让他等的事，也答应以后不想说话时告诉他。"],["7f.AFTERHER","她说自己当时气上了头，随后两人聊了别的。"],["7f.AFTERHIM","她解释为什么当时不愿回消息，随后和他一起吃了饭。"],["7f.AFTERQUIET","他们一起吃了饭，没有再提争执。"],["7f.STATION","她向助手说起吃饭时拍糊的照片。"]],Ip=Zp.map(([a,o])=>({beatIds:a.split(" "),text:o}));function Jp(a){const o=new Map(a.beatIds.map((y,v)=>[y,v])),h=Ip.map(y=>({text:y.text,beatIds:y.beatIds.filter(v=>o.has(v))})).filter(y=>y.beatIds.length>0),f=new Set(h.flatMap(y=>y.beatIds)),s=a.beatIds.filter(y=>!f.has(y));return s.length&&h.push({text:"本次会话还有其他已处理消息。",beatIds:s}),h.sort((y,v)=>Math.min(...y.beatIds.map(p=>o.get(p)))-Math.min(...v.beatIds.map(p=>o.get(p))))}const $p=["left","right"],Bo=3400;function kp({script:a,state:o,now:h,reduced:f,replacement:s,onCancelReplacement:y,onReplace:v,onForget:p}){var P,qn;const[b,T]=en.useState({left:!0,right:!0}),[E,g]=en.useState({}),x=(P=o.ritual.left)==null?void 0:P.from,j=(qn=o.ritual.right)==null?void 0:qn.from,tn=o.endings.includes("第七幕完成"),rn=en.useRef(null);return en.useLayoutEffect(()=>{const $=rn.current,vn=[...($==null?void 0:$.querySelectorAll("[data-recording]"))??[]].at(-1);if(!$||!vn)return;const dn=$.getBoundingClientRect(),Tn=vn.getBoundingClientRect();Tn.bottom>dn.bottom?$.scrollTop+=Tn.bottom-dn.bottom:Tn.top<dn.top&&($.scrollTop+=Tn.top-dn.top)},[x,j,b,E,h]),en.useEffect(()=>{T({left:!0,right:!0}),g({})},[o.runId]),en.useEffect(()=>{x!==void 0&&(T($=>({...$,left:!0})),g($=>({...$,[`left:${x}`]:!0}))),j!==void 0&&(T($=>({...$,right:!0})),g($=>({...$,[`right:${j}`]:!0}))),tn&&(T({left:!0,right:!0}),g($=>({...$,"left:7":!0,"right:7":!0})))},[x,j,tn,o.runId]),en.useEffect(()=>{s&&T($=>({...$,[s.channel]:!0}))},[s]),en.useLayoutEffect(()=>{var $,vn;s&&((vn=($=rn.current)==null?void 0:$.querySelector("[data-replacement-option]"))==null||vn.focus())},[s,b]),w.jsxs("aside",{className:"archive terminal-column","aria-label":"Context Store · Summary / Memory","data-testid":"terminal-archive",children:[w.jsxs("header",{className:"pane-head ascii-rule",children:[w.jsx("span",{className:"pane-name",children:"CONTEXT STORE"}),w.jsx("span",{className:"archive-kind",children:"SUMMARY / MEMORY"})]}),w.jsx("div",{className:"archive-scroll",ref:rn,children:$p.map($=>{var ee;const vn=((ee=o.archive)==null?void 0:ee[$])??[],dn=o.memories[$],Tn=dn.filter(Un=>!vn.some(nn=>nn.beatIds.includes(Un.beatId))),Zn=o.ritual[$],pn=(s==null?void 0:s.channel)===$?s.entry:void 0,Mn=Ma(o,$)!==void 0?Un=>p($,Un):void 0;return w.jsxs("div",{className:"archive-folder",children:[w.jsxs("button",{className:"tree-toggle","aria-expanded":b[$],type:"button",onClick:()=>T(Un=>({...Un,[$]:!Un[$]})),children:[w.jsx("span",{"aria-hidden":"true",children:b[$]?"[-]":"[+]"})," USER ",Ir[$].id," / ",Ir[$].name]}),b[$]?w.jsxs("div",{className:"archive-branches",children:[pn?w.jsxs("div",{className:"archive-replacement","aria-label":"替换记忆",children:[w.jsxs("p",{children:["[MEM] 已满 · 选择一条替换为「",pn.label,"」"]}),dn.map(Un=>w.jsxs("button",{type:"button",className:"tree-toggle","data-replacement-option":!0,onClick:()=>v(Un.label),children:["替换「",Un.label,"」"]},Un.label)),w.jsx("button",{type:"button",className:"memory-entry",onClick:y,children:"[取消]"})]}):null,!vn.length&&!Tn.length?w.jsx("div",{className:"muted",children:"└ 尚无记录"}):null,Tn.length?w.jsxs("details",{className:"archive-pending",children:[w.jsxs("summary",{children:["[MEMORY] 当前会话 · ",Tn.length]}),Tn.map(Un=>w.jsx(D0,{memory:Un,onForget:Mn},Un.label))]}):null,vn.map(Un=>{var An,Qn;const nn=`${$}:${Un.chapter}`,W=(Zn==null?void 0:Zn.from)===Un.chapter,Rn=W&&!f?C0(Zn,h):Bo;return w.jsxs("div",{className:"archive-session","data-recording":W||void 0,children:[w.jsxs("button",{className:"tree-toggle","aria-expanded":!!E[nn],type:"button",onClick:()=>g(U=>({...U,[nn]:!U[nn]})),children:[w.jsx("span",{"aria-hidden":"true",children:E[nn]?"[-]":"[+]"})," ",((Qn=(An=a.chapters)==null?void 0:An.find(U=>U.index===Un.chapter))==null?void 0:Qn.title)??`第${Un.chapter}幕`]}),E[nn]?w.jsx(Fp,{entry:Un,memories:dn,elapsed:Rn,onForget:Mn}):null]},nn)})]}):null]},$)})})]})}function Fp({entry:a,memories:o,elapsed:h,onForget:f}){const s=en.useMemo(()=>Jp(a),[a]),y=en.useMemo(()=>s.map(b=>Array.from(b.text)),[s]),v=y.reduce((b,T)=>b+T.length+3,0);let p=Math.floor(Math.max(0,Math.min(1,h/Bo))*v);return w.jsxs("div",{className:"archive-segments",children:[h<Bo?w.jsxs("p",{className:"archive-writing",children:[w.jsx("span",{"aria-hidden":"true",children:"[CTX]"})," 正在收录…"]}):null,s.map((b,T)=>{const E=y[T],g=Math.max(0,Math.min(p,E.length));return p-=E.length+3,g?w.jsxs("div",{className:"archive-segment",children:[w.jsx("span",{"aria-hidden":"true",children:T===s.length-1?"└":"├"}),w.jsxs("div",{children:[E.slice(0,g).join(""),g<E.length?w.jsx("span",{className:"caret","aria-hidden":"true"}):null,g===E.length?o.filter(x=>b.beatIds.includes(x.beatId)).map(x=>w.jsx(D0,{memory:x,onForget:f},x.label)):null]})]},b.beatIds[0]):null})]})}function D0({memory:a,onForget:o}){return w.jsxs("details",{className:"archive-memory",children:[w.jsxs("summary",{children:["[MEM] ",a.label]}),w.jsxs("p",{children:["「",a.text,"」"]}),o?w.jsx("button",{type:"button",className:"memory-entry memory-action","aria-label":`舍弃「${a.label}」`,onClick:()=>o(a.label),children:"[舍弃]"}):null]})}const z0=1440,H0=920;function e0(){const a=window.innerWidth<720?12:40;return Math.min(1,Math.max(1,window.innerWidth-a)/z0,Math.max(1,window.innerHeight-a)/H0)}function Io({children:a,intro:o}){const[h,f]=en.useState(e0);return en.useEffect(()=>{const s=()=>f(e0());return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),w.jsx("main",{className:"stage",children:w.jsx("div",{className:"stage-frame",style:{width:z0*h,height:H0*h},children:w.jsx("div",{className:"game-canvas","data-testid":"game-canvas","data-intro":o?!0:void 0,inert:!!o,style:{transform:`scale(${h})`,...o?Object.fromEntries(Object.entries(o).map(([s,y])=>[`--intro-${s}`,`${y}%`])):{}},children:a})})})}const U0="he-said-she-said-ui-test",Da=`${U0}.progress.v2`,Jo=`${U0}.progress.v1`;let Kr=null;function Wp(){const a=Kr;return Kr=null,a}function Pp(a){try{localStorage.setItem(Da,JSON.stringify({version:2,state:a}))}catch(o){console.error("[存档] 写入失败",o)}}function n2(){try{return!!(localStorage.getItem(Da)||localStorage.getItem(Jo))}catch{return!1}}function Zr(){try{localStorage.removeItem(Da),localStorage.removeItem(Jo)}catch(a){console.error("[存档] 清除失败",a)}}function e2(a){try{const o=localStorage.getItem(Da);if(!o)return localStorage.getItem(Jo)&&(Kr="剧本已更新到第五章定稿，旧进度无法继续，已从第一幕重新开始。",Zr()),null;const h=JSON.parse(o);if(!At(h)||h.version!==2||!At(h.state))return Kr="存档格式已升级，已从第一幕重新开始。",Zr(),null;const f=h.state;if(!t2(f,a))return Kr="剧本已更新，旧进度里的节拍已不存在，已从第一幕重新开始。",Zr(),null;const s=[...f.activated];for(const y of a)!Xo(y,a)||f.completed.includes(y.id)||s.includes(y.id)||s.push(y.id);return{...f,activated:s,pending:{left:f.pending.left??null,right:f.pending.right??null},memories:i2(f.memories,a),chapter:l2(f.chapter,a),ritual:r2(f.ritual),archive:bp(f.archive,a),endings:Array.isArray(f.endings)?f.endings.filter(y=>typeof y=="string"):[],error:typeof f.error=="string"?f.error:null,runId:typeof f.runId=="number"?f.runId:0}}catch(o){return console.error("[存档] 读取失败",o),Kr="存档读取失败，已从第一幕重新开始。",Zr(),null}}function t2(a,o){const h=new Set(o.map(f=>f.id));if(!Array.isArray(a.completed)||!a.completed.every(f=>h.has(f))||!Array.isArray(a.activated)||!a.activated.every(f=>h.has(f))||!Array.isArray(a.messages)||!At(a.flags)||!At(a.pending))return!1;for(const f of a.messages)if(!At(f)||f.channel!=="left"&&f.channel!=="right"||typeof f.text!="string"||typeof f.id!="string"||f.delivery!=="type"&&f.delivery!=="pop"&&f.delivery!=="image"&&f.delivery!=="thought")return!1;for(const f of["left","right"]){const s=a.pending[f];if(s!=null&&(!At(s)||s.kind!=="lines"&&s.kind!=="choices"&&s.kind!=="reply"||typeof s.beatId!="string"||!h.has(s.beatId)))return!1}return!0}function l2(a,o){const h=y=>{const v=o.filter(p=>p.channel===y).map(p=>p.chapter??1);return v.length>0?Math.min(...v):1};if(!At(a))return{left:h("left"),right:h("right")};const f=typeof a.left=="number"?a.left:h("left"),s=typeof a.right=="number"?a.right:h("right");return{left:f,right:s}}function r2(a){const o={left:null,right:null};if(!At(a))return o;for(const h of["left","right"]){const f=a[h];At(f)&&(f.phase!=="mask"&&f.phase!=="pause"||typeof f.until!="number"||typeof f.from!="number"||typeof f.to!="number"||(o[h]={from:f.from,to:f.to,phase:f.phase,until:f.until,...typeof f.startedAt=="number"?{startedAt:f.startedAt}:{}}))}return o}function At(a){return typeof a=="object"&&a!==null}function i2(a,o){const h={left:[],right:[]};if(!At(a))return h;const f=y=>Array.isArray(y)&&y.every(v=>At(v)&&typeof v.label=="string")?y.map(v=>v):[],s=(y,v)=>f(y).filter(p=>{var T;const b=o.find(E=>E.id===p.beatId&&E.channel===v);return(b==null?void 0:b.chapter)!==5?!0:(T=b.记忆候选)==null?void 0:T.some(E=>E.缩略标签===p.label)});return{left:s(a.left,"left"),right:s(a.right,"right")}}function u2(a){const o=h=>{const f=Rp(h,a);return f===h.error?h:{...h,error:f}};return(h,f)=>{var s;try{switch(f.type){case"reset":return{...N0(a),runId:h.runId+1};case"sync-roots":return o(Dp(h,a));case"arm":return o(jp(h,f.channel,a,f.now??Date.now()));case"commit-line":return o(qp(h,f.channel,a));case"choose":return o(Bp(h,f.channel,f.index,a));case"commit-reply":return o(Yp(h,f.channel,a));case"save-memory":{const y=a.find(p=>p.id===f.beatId&&p.channel===f.channel);return!((s=y==null?void 0:y.记忆候选)==null?void 0:s.find(p=>p.缩略标签===f.label&&p.短句===f.text))||!h.messages.some(p=>p.channel===f.channel&&p.beatId===f.beatId&&p.text.includes(f.text))?h:o(Np(h,f.channel,{label:f.label,text:f.text,beatId:f.beatId},f.replaceLabel))}case"forget-memory":return o(Op(h,f.channel,f.label));case"clear-messages":return o(M0(h,f.channel));case"ritual-tick":return o(Cp(h,f.channel,f.now));case"clear-error":return{...h,error:null};default:return h}}catch(y){const v=y instanceof Error?y.message:"引擎状态更新失败";return console.error("[引擎]",v),{...h,error:v}}}}function a2(a,o=!1,h=!0){const f=a.beats,s=en.useMemo(()=>u2(f),[f]),[y,v]=en.useReducer(s,f,b=>e2(b)??N0(b)),[p]=en.useState(()=>Wp());return en.useEffect(()=>{h&&Pp(y)},[y,h]),en.useEffect(()=>{y.error&&console.error(y.error)},[y.error]),en.useEffect(()=>{if(!h)return;const b=Date.now(),T=["left","right"].filter(j=>{const tn=y.ritual[j];return tn!==null&&(o||tn.until<=b)});if(T.length>0){for(const j of T)v({type:"ritual-tick",channel:j,now:Math.max(b,y.ritual[j].until)});return}const E=["left","right"].map(j=>{var tn;return(tn=y.ritual[j])==null?void 0:tn.until}).filter(j=>j!==void 0);if(E.length===0)return;const g=Math.min(...E),x=window.setTimeout(()=>{const j=Date.now();for(const tn of["left","right"])y.ritual[tn]&&y.ritual[tn].until<=j&&v({type:"ritual-tick",channel:tn,now:j})},Math.max(0,g-b));return()=>window.clearTimeout(x)},[y.ritual,o,h]),en.useEffect(()=>{if(!h)return;const b=_p(y,f);b&&v({type:"arm",channel:b.channel})},[y,f,h]),{state:y,dispatch:v,notice:p}}const xa=["left","right"],c2={1:"一",3:"三",4:"四",5:"五",6:"六",7:"七"};function f2({script:a,onTitle:o,intro:h}){const f=!h,s=Zo(),{state:y,dispatch:v,notice:p}=a2(a,s,f),[b,T]=en.useState(!1),[E,g]=en.useState(),x=E&&!y.ritual[E.channel]&&y.messages.some(nn=>nn.channel===E.channel&&nn.beatId===E.entry.beatId)?E:void 0,[j,tn]=en.useState(),rn=en.useRef({}),P=en.useRef({}),qn=Gp(!s&&!!(y.ritual.left||y.ritual.right)),$=Math.max(y.chapter.left,y.chapter.right),vn=xa.find(nn=>{var W;return y.pending[nn]&&((W=y.pending[nn])==null?void 0:W.kind)!=="choices"})??xa.find(nn=>{var W;return((W=y.pending[nn])==null?void 0:W.kind)==="choices"}),dn=(j==null?void 0:j.channel)??vn??"left";function Tn(nn){var Rn;const W=y.pending[nn];if(!(!W||W.kind!=="choices"))return((Rn=a.beatById)==null?void 0:Rn.get(W.beatId))??a.beats.find(An=>An.id===W.beatId)}function Zn(nn){var W,Rn;return((Rn=(W=Tn(nn))==null?void 0:W.choices)==null?void 0:Rn.flatMap((An,Qn)=>!An.需记忆||y.memories[nn].some(U=>U.label===An.需记忆)?[Qn]:[]))??[]}function pn(nn){var Rn;if(dn!==nn)return-1;const W=Zn(nn);return(j==null?void 0:j.beatId)===((Rn=Tn(nn))==null?void 0:Rn.id)&&W.includes((j==null?void 0:j.index)??-1)?j.index:W[0]??-1}function Mn(nn,W){var Rn;W>=0&&!Zn(nn).includes(W)||tn({channel:nn,index:W,beatId:(Rn=Tn(nn))==null?void 0:Rn.id})}function ee(nn,W){const Rn=Tn(nn);if(!Rn||!Zn(nn).includes(W)||b)return;const An=`${y.runId}:${nn}:${Rn.id}`;rn.current[nn]!==An&&(rn.current[nn]=An,tn(void 0),v({type:"choose",channel:nn,index:W}))}en.useEffect(()=>{function nn(W){var Qn,U,on,sn;if(!f||b||W.altKey||W.ctrlKey||W.metaKey||W.shiftKey||W.defaultPrevented||document.querySelector('[role="dialog"]'))return;const Rn=W.target instanceof HTMLElement?W.target:null;if(Rn!=null&&Rn.closest("input,textarea,select,[contenteditable],.archive"))return;const An=Rn==null?void 0:Rn.closest(".choice-line");if(!(Rn!=null&&Rn.closest("button,a,summary")&&!An)){if(W.key==="ArrowLeft"||W.key==="ArrowRight")W.preventDefault(),Mn(W.key==="ArrowLeft"?"left":"right",-1),An==null||An.blur();else if(W.key==="ArrowUp"||W.key==="ArrowDown"){W.preventDefault();const xn=Zn(dn);if(!xn.length)return;const Cn=xn.indexOf(pn(dn)),Sn=W.key==="ArrowDown"?1:-1;Mn(dn,xn[(Cn+Sn+xn.length)%xn.length]),An==null||An.blur()}else if(W.key==="Enter"){if(W.preventDefault(),W.repeat)return;const xn=y.pending[dn];if((xn==null?void 0:xn.kind)==="lines"||(xn==null?void 0:xn.kind)==="reply"){(U=(Qn=P.current)[dn])==null||U.call(Qn);return}const Cn=pn(dn);if(Cn>=0)ee(dn,Cn);else if(!xn){const Sn=xa.filter(oe=>{const Vn=y.pending[oe];return(Vn==null?void 0:Vn.kind)==="lines"||(Vn==null?void 0:Vn.kind)==="reply"});Sn.length===1&&((sn=(on=P.current)[Sn[0]])==null||sn.call(on))}}}}return window.addEventListener("keydown",nn),()=>window.removeEventListener("keydown",nn)});function Un(){Zr(),v({type:"reset"}),tn(void 0),g(void 0),T(!1)}return w.jsxs(Io,{intro:h,children:[w.jsxs("header",{className:"topbar ascii-rule",children:[w.jsxs("span",{className:"topbar-title","data-testid":"chapter-title",children:["He said, she said · 第",c2[$]??$,"幕"]}),w.jsx("span",{className:"topbar-tag",children:"助手 · 双会话"}),w.jsxs("div",{className:"topbar-actions",children:[w.jsx("button",{type:"button","data-testid":"restart",onClick:()=>T(!0),children:"[重新开始]"}),o?w.jsx("button",{type:"button",onClick:o,children:"[返回标题]"}):null]})]}),p?w.jsx("div",{className:"notice",role:"status",children:p}):null,y.endings.includes("第七幕完成")?w.jsx("div",{className:"notice",role:"status",children:"第七幕完成"}):null,w.jsxs("div",{className:"duo",children:[xa.map(nn=>w.jsx(Vp,{script:a,channel:nn,state:y,dispatch:v,active:!!y.pending[nn],focused:dn===nn,selected:pn(nn),skipRefs:P,running:f,onMemoryFull:W=>g({channel:nn,entry:W}),onMove:W=>Mn(nn,W),onPick:W=>ee(nn,W),now:qn,reduced:s},nn)),w.jsx(kp,{script:a,state:y,now:qn,reduced:s,replacement:x,onCancelReplacement:()=>g(void 0),onReplace:nn=>{x&&(v({type:"save-memory",channel:x.channel,...x.entry,replaceLabel:nn}),g(void 0))},onForget:(nn,W)=>v({type:"forget-memory",channel:nn,label:W})})]}),b?w.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":"确定重来",children:w.jsxs("div",{className:"dialog",children:[w.jsx("h2",{children:"确定重来？"}),w.jsx("p",{children:"当前两条线的进度都会清空，回到第一幕开头。"}),w.jsxs("div",{className:"dialog-actions",children:[w.jsx("button",{type:"button",autoFocus:!0,onClick:()=>T(!1),children:"[取消]"}),w.jsx("button",{type:"button","data-testid":"restart-confirm",onClick:Un,children:"[确定重来]"})]})]})}):null]})}const o2=1500,qo=240,t0=900,Xr=420,s2=1500;function h2(a){const o=Ir.left,h=Ir.right,f=v=>`      性别 ${v.gender} / ${v.age} 岁 / ${v.work} / ${v.city}`,s=[["[BOOT] 校验会话模块 … OK",24,110],["[SYS] 导入助手系统提示词 … OK",25,130],[`[USER ${o.id}] 载入用户信息 · ${o.name}`,40,150],[f(o),38,300],[`[USER ${h.id}] 载入用户信息 · ${h.name}`,40,150],[f(h),38,300],[a==="new"?"[MEM] 初始化两路独立记忆区 … OK":"[MEM] 恢复两路上下文与记忆 … OK",25,135],["[CTX] 建立会话与摘要目录",26,0]];let y=90;return s.map(([v,p,b])=>{const T=v.length*p,E={text:v,start:y,duration:T};return y+=T+b,E})}function Xi(a,o,h){const f=Math.max(0,Math.min(1,a/o));return Math.floor(f*h)/h*100}function d2({entry:a,script:o,onTitle:h}){const f=Zo(),[s,y]=en.useState(0),v=h2(a),p=v.at(-1),b=p.start+p.duration,T=b+o2,E=T+qo+t0,g=E+3*Xr,x=g+s2;return en.useEffect(()=>{if(f){y(x);return}const j=Date.now(),tn=window.setInterval(()=>y(Math.min(x,Date.now()-j)),20),rn=[b,T,g,x].map(P=>window.setTimeout(()=>{y(Math.min(x,Date.now()-j)),P===x&&window.clearInterval(tn)},P));return()=>{window.clearInterval(tn),rn.forEach(P=>window.clearTimeout(P))}},[f,b,T,g,x]),f||s>=T?w.jsx(f2,{script:o,onTitle:h,intro:f||s>=x?void 0:{header:Xi(s-T,qo,16),dividers:Xi(s-T-qo,t0,42),left:Xi(s-E,Xr,24),right:Xi(s-E-Xr,Xr,24),archive:Xi(s-E-2*Xr,Xr,24)}}):w.jsx(Io,{children:w.jsx("div",{className:"boot-console","data-testid":"boot-console","data-hold":s>=b||void 0,"aria-label":"正在启动",children:v.filter(j=>s>=j.start).map(j=>{const tn=Math.min(j.text.length,Math.floor((s-j.start)*j.text.length/j.duration));return w.jsxs("div",{className:j.text.startsWith("[USER")?"boot-user":void 0,children:[j.text.slice(0,tn),tn<j.text.length?w.jsx("span",{className:"caret","aria-hidden":"true"}):null]},j.text)})})})}function m2({hasSave:a,onBegin:o}){const[h,f]=en.useState(0),[s,y]=en.useState(!1),v=[{label:"开始游戏",action:()=>a?y(!0):o("new")},...a?[{label:"继续游戏",action:()=>o("resume")}]:[]];return en.useEffect(()=>{const p=b=>{var g;if(s||b.altKey||b.ctrlKey||b.metaKey||b.defaultPrevented)return;const T=a?2:1,E=b.target instanceof HTMLElement?b.target:null;b.key==="ArrowUp"||b.key==="ArrowDown"?(b.preventDefault(),(g=E==null?void 0:E.closest(".menu-choice"))==null||g.blur(),f(x=>(x+(b.key==="ArrowDown"?1:-1)+T)%T)):b.key==="Enter"&&!b.repeat&&!(E!=null&&E.closest("button"))&&(b.preventDefault(),a&&h===1?o("resume"):a?y(!0):o("new"))};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[h,s,a,o]),w.jsxs(Io,{children:[w.jsxs("header",{className:"topbar ascii-rule title-bar",children:[w.jsx("span",{children:"[SYS] 双会话助手"}),w.jsx("span",{children:a?"[CTX] 已有存档":"[LINK] 等待接入"})]}),w.jsxs("div",{className:"title-grid",children:[w.jsxs("div",{className:"terminal-menu",children:[w.jsx("div",{className:"menu-system",children:"/ 会话入口"}),w.jsxs("h1",{children:["He said,",w.jsx("br",{}),"she said",w.jsx("span",{"aria-hidden":"true",children:"_"})]}),w.jsx("div",{className:"menu-commands","aria-label":"主菜单",children:v.map((p,b)=>w.jsxs("button",{type:"button",className:"menu-choice choice-line","data-current":h===b||void 0,onMouseEnter:()=>f(b),onFocus:()=>f(b),onClick:p.action,children:[w.jsx("span",{className:"choice-cursor","aria-hidden":"true",children:h===b?">":""}),p.label]},p.label))})]}),w.jsxs("aside",{className:"title-sessions","aria-label":"会话入口信息",children:[w.jsx("div",{className:"ascii-rule title-session-head",children:"[LINK] 用户通道"}),Object.values(Ir).map(p=>w.jsxs("div",{className:"title-user",children:[w.jsxs("span",{className:"title-id",children:["[USER ",p.id,"]"]}),w.jsx("b",{children:p.name}),w.jsx("span",{children:"待接入"})]},p.id)),w.jsxs("div",{className:"title-memory ascii-rule",children:[w.jsx("div",{children:"[MEM] 分窗记忆"}),w.jsx("p",{children:"上下文独立 · 摘要按窗收录"})]})]})]}),w.jsxs("footer",{className:"title-keys ascii-rule",children:[w.jsx("span",{children:"↑ ↓ 选择"}),w.jsx("span",{children:"Enter 确认"})]}),s?w.jsx("div",{className:"overlay",role:"dialog","aria-modal":"true","aria-label":"开始新游戏",children:w.jsxs("div",{className:"dialog",children:[w.jsx("h2",{children:"开始新游戏？"}),w.jsx("p",{children:"当前两条线的进度都会清空。"}),w.jsxs("div",{className:"dialog-actions",children:[w.jsx("button",{type:"button",autoFocus:!0,onClick:()=>y(!1),children:"[取消]"}),w.jsx("button",{type:"button",onClick:()=>o("new"),children:"[开始新游戏]"})]})]})}):null]})}function y2(){const a=en.useMemo(()=>op(),[]),[o,h]=en.useState("title"),[f,s]=en.useState("new"),y=en.useCallback(()=>h("title"),[]),v=en.useCallback(p=>{p==="new"&&Zr(),s(p),h("boot")},[]);return en.useEffect(()=>{a.error&&console.error(a.error)},[a]),a.script?o==="title"?w.jsx(m2,{hasSave:n2(),onBegin:v}):w.jsx(d2,{entry:f,script:a.script,onTitle:y}):w.jsx("main",{className:"stage",children:w.jsxs("div",{className:"dialog",style:{width:560},children:[w.jsx("h2",{children:"这份剧本还过不了检查"}),w.jsx("p",{children:"引擎按字段契约逐项校验，下面是要修的地方："}),w.jsx("pre",{className:"script-error",style:{maxHeight:420,whiteSpace:"pre-wrap",borderRadius:12},"data-testid":"script-error",children:a.error})]})})}Hv.createRoot(document.getElementById("root")).render(w.jsx(en.StrictMode,{children:w.jsx(y2,{})}));
