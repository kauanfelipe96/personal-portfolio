function gd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tu={exports:{}},Ao={},Lu={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kr=Symbol.for("react.element"),wd=Symbol.for("react.portal"),Sd=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),Nd=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),jd=Symbol.for("react.memo"),zd=Symbol.for("react.lazy"),ua=Symbol.iterator;function Od(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var Mu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ru=Object.assign,Iu={};function _n(e,t,n){this.props=e,this.context=t,this.refs=Iu,this.updater=n||Mu}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $u(){}$u.prototype=_n.prototype;function ts(e,t,n){this.props=e,this.context=t,this.refs=Iu,this.updater=n||Mu}var ns=ts.prototype=new $u;ns.constructor=ts;Ru(ns,_n.prototype);ns.isPureReactComponent=!0;var ca=Array.isArray,Du=Object.prototype.hasOwnProperty,rs={current:null},Fu={key:!0,ref:!0,__self:!0,__source:!0};function Au(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Du.call(t,r)&&!Fu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:kr,type:e,key:i,ref:l,props:o,_owner:rs.current}}function Td(e,t){return{$$typeof:kr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function os(e){return typeof e=="object"&&e!==null&&e.$$typeof===kr}function Ld(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fa=/\/+/g;function _i(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ld(""+e.key):t.toString(36)}function Gr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case kr:case wd:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+_i(l,0):r,ca(o)?(n="",e!=null&&(n=e.replace(fa,"$&/")+"/"),Gr(o,t,n,"",function(c){return c})):o!=null&&(os(o)&&(o=Td(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(fa,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ca(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+_i(i,s);l+=Gr(i,t,n,a,o)}else if(a=Od(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+_i(i,s++),l+=Gr(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Or(e,t,n){if(e==null)return e;var r=[],o=0;return Gr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Md(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Jr={transition:null},Rd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Jr,ReactCurrentOwner:rs};function Vu(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Or,forEach:function(e,t,n){Or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Or(e,function(){t++}),t},toArray:function(e){return Or(e,function(t){return t})||[]},only:function(e){if(!os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=_n;M.Fragment=Sd;M.Profiler=Cd;M.PureComponent=ts;M.StrictMode=kd;M.Suspense=_d;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rd;M.act=Vu;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ru({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=rs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Du.call(t,a)&&!Fu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:kr,type:e.type,key:o,ref:i,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:Nd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ed,_context:e},e.Consumer=e};M.createElement=Au;M.createFactory=function(e){var t=Au.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Pd,render:e}};M.isValidElement=os;M.lazy=function(e){return{$$typeof:zd,_payload:{_status:-1,_result:e},_init:Md}};M.memo=function(e,t){return{$$typeof:jd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Jr.transition;Jr.transition={};try{e()}finally{Jr.transition=t}};M.unstable_act=Vu;M.useCallback=function(e,t){return ge.current.useCallback(e,t)};M.useContext=function(e){return ge.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};M.useEffect=function(e,t){return ge.current.useEffect(e,t)};M.useId=function(){return ge.current.useId()};M.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ge.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};M.useRef=function(e){return ge.current.useRef(e)};M.useState=function(e){return ge.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ge.current.useTransition()};M.version="18.3.1";Lu.exports=M;var T=Lu.exports;const De=xd(T),da=gd({__proto__:null,default:De},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id=T,$d=Symbol.for("react.element"),Dd=Symbol.for("react.fragment"),Fd=Object.prototype.hasOwnProperty,Ad=Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vd={key:!0,ref:!0,__self:!0,__source:!0};function Bu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Fd.call(t,r)&&!Vd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:$d,type:e,key:i,ref:l,props:o,_owner:Ad.current}}Ao.Fragment=Dd;Ao.jsx=Bu;Ao.jsxs=Bu;Tu.exports=Ao;var m=Tu.exports,nl={},Uu={exports:{}},Te={},Hu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,O){var L=_.length;_.push(O);e:for(;0<L;){var G=L-1>>>1,re=_[G];if(0<o(re,O))_[G]=O,_[L]=re,L=G;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var O=_[0],L=_.pop();if(L!==O){_[0]=L;e:for(var G=0,re=_.length,jr=re>>>1;G<jr;){var $t=2*(G+1)-1,Pi=_[$t],Dt=$t+1,zr=_[Dt];if(0>o(Pi,L))Dt<re&&0>o(zr,Pi)?(_[G]=zr,_[Dt]=L,G=Dt):(_[G]=Pi,_[$t]=L,G=$t);else if(Dt<re&&0>o(zr,L))_[G]=zr,_[Dt]=L,G=Dt;else break e}}return O}function o(_,O){var L=_.sortIndex-O.sortIndex;return L!==0?L:_.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],y=1,h=null,p=3,w=!1,x=!1,v=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=_)r(c),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(c)}}function g(_){if(v=!1,d(_),!x)if(n(a)!==null)x=!0,Ei(E);else{var O=n(c);O!==null&&Ni(g,O.startTime-_)}}function E(_,O){x=!1,v&&(v=!1,f(j),j=-1),w=!0;var L=p;try{for(d(O),h=n(a);h!==null&&(!(h.expirationTime>O)||_&&!Ue());){var G=h.callback;if(typeof G=="function"){h.callback=null,p=h.priorityLevel;var re=G(h.expirationTime<=O);O=e.unstable_now(),typeof re=="function"?h.callback=re:h===n(a)&&r(a),d(O)}else r(a);h=n(a)}if(h!==null)var jr=!0;else{var $t=n(c);$t!==null&&Ni(g,$t.startTime-O),jr=!1}return jr}finally{h=null,p=L,w=!1}}var N=!1,C=null,j=-1,Z=5,R=-1;function Ue(){return!(e.unstable_now()-R<Z)}function Tn(){if(C!==null){var _=e.unstable_now();R=_;var O=!0;try{O=C(!0,_)}finally{O?Ln():(N=!1,C=null)}}else N=!1}var Ln;if(typeof u=="function")Ln=function(){u(Tn)};else if(typeof MessageChannel<"u"){var aa=new MessageChannel,vd=aa.port2;aa.port1.onmessage=Tn,Ln=function(){vd.postMessage(null)}}else Ln=function(){z(Tn,0)};function Ei(_){C=_,N||(N=!0,Ln())}function Ni(_,O){j=z(function(){_(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,Ei(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var L=p;p=O;try{return _()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,O){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var L=p;p=_;try{return O()}finally{p=L}},e.unstable_scheduleCallback=function(_,O,L){var G=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?G+L:G):L=G,_){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=L+re,_={id:y++,callback:O,priorityLevel:_,startTime:L,expirationTime:re,sortIndex:-1},L>G?(_.sortIndex=L,t(c,_),n(a)===null&&_===n(c)&&(v?(f(j),j=-1):v=!0,Ni(g,L-G))):(_.sortIndex=re,t(a,_),x||w||(x=!0,Ei(E))),_},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(_){var O=p;return function(){var L=p;p=O;try{return _.apply(this,arguments)}finally{p=L}}}})(Wu);Hu.exports=Wu;var Bd=Hu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud=T,Oe=Bd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qu=new Set,tr={};function Gt(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(tr[e]=t,e=0;e<t.length;e++)Qu.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rl=Object.prototype.hasOwnProperty,Hd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pa={},ma={};function Wd(e){return rl.call(ma,e)?!0:rl.call(pa,e)?!1:Hd.test(e)?ma[e]=!0:(pa[e]=!0,!1)}function Qd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yd(e,t,n,r){if(t===null||typeof t>"u"||Qd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var is=/[\-:]([a-z])/g;function ls(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(is,ls);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(is,ls);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(is,ls);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ss(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yd(t,n,o,r)&&(n=null),r||o===null?Wd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tr=Symbol.for("react.element"),qt=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),as=Symbol.for("react.strict_mode"),ol=Symbol.for("react.profiler"),Yu=Symbol.for("react.provider"),Xu=Symbol.for("react.context"),us=Symbol.for("react.forward_ref"),il=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),cs=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Ku=Symbol.for("react.offscreen"),ha=Symbol.iterator;function Mn(e){return e===null||typeof e!="object"?null:(e=ha&&e[ha]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,ji;function Un(e){if(ji===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ji=t&&t[1]||""}return`
`+ji+e}var zi=!1;function Oi(e,t){if(!e||zi)return"";zi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{zi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function Xd(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=Oi(e.type,!1),e;case 11:return e=Oi(e.type.render,!1),e;case 1:return e=Oi(e.type,!0),e;default:return""}}function sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case qt:return"Portal";case ol:return"Profiler";case as:return"StrictMode";case il:return"Suspense";case ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xu:return(e.displayName||"Context")+".Consumer";case Yu:return(e._context.displayName||"Context")+".Provider";case us:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cs:return t=e.displayName||null,t!==null?t:sl(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return sl(e(t))}catch{}}return null}function Kd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sl(t);case 8:return t===as?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e){var t=Zu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lr(e){e._valueTracker||(e._valueTracker=Zd(e))}function Gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function al(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ya(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ju(e,t){t=t.checked,t!=null&&ss(e,"checked",t,!1)}function ul(e,t){Ju(e,t);var n=Tt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cl(e,t.type,n):t.hasOwnProperty("defaultValue")&&cl(e,t.type,Tt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function va(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cl(e,t,n){(t!=="number"||fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hn=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ga(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Hn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tt(n)}}function bu(e,t){var n=Tt(t.value),r=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mr,ec=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gd=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(e){Gd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yn[t]=Yn[e]})});function tc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yn.hasOwnProperty(e)&&Yn[e]?(""+t).trim():t+"px"}function nc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=tc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Jd=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pl(e,t){if(t){if(Jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,pn=null,mn=null;function wa(e){if(e=Nr(e)){if(typeof yl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Wo(t),yl(e.stateNode,e.type,t))}}function rc(e){pn?mn?mn.push(e):mn=[e]:pn=e}function oc(){if(pn){var e=pn,t=mn;if(mn=pn=null,wa(e),t)for(e=0;e<t.length;e++)wa(t[e])}}function ic(e,t){return e(t)}function lc(){}var Ti=!1;function sc(e,t,n){if(Ti)return e(t,n);Ti=!0;try{return ic(e,t,n)}finally{Ti=!1,(pn!==null||mn!==null)&&(lc(),oc())}}function rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var vl=!1;if(ut)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){vl=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{vl=!1}function bd(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(y){this.onError(y)}}var Xn=!1,po=null,mo=!1,gl=null,qd={onError:function(e){Xn=!0,po=e}};function e0(e,t,n,r,o,i,l,s,a){Xn=!1,po=null,bd.apply(qd,arguments)}function t0(e,t,n,r,o,i,l,s,a){if(e0.apply(this,arguments),Xn){if(Xn){var c=po;Xn=!1,po=null}else throw Error(S(198));mo||(mo=!0,gl=c)}}function Jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ac(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sa(e){if(Jt(e)!==e)throw Error(S(188))}function n0(e){var t=e.alternate;if(!t){if(t=Jt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Sa(o),e;if(i===r)return Sa(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function uc(e){return e=n0(e),e!==null?cc(e):null}function cc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cc(e);if(t!==null)return t;e=e.sibling}return null}var fc=Oe.unstable_scheduleCallback,ka=Oe.unstable_cancelCallback,r0=Oe.unstable_shouldYield,o0=Oe.unstable_requestPaint,J=Oe.unstable_now,i0=Oe.unstable_getCurrentPriorityLevel,ds=Oe.unstable_ImmediatePriority,dc=Oe.unstable_UserBlockingPriority,ho=Oe.unstable_NormalPriority,l0=Oe.unstable_LowPriority,pc=Oe.unstable_IdlePriority,Vo=null,tt=null;function s0(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Vo,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:c0,a0=Math.log,u0=Math.LN2;function c0(e){return e>>>=0,e===0?32:31-(a0(e)/u0|0)|0}var Rr=64,Ir=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Wn(s):(i&=l,i!==0&&(r=Wn(i)))}else l=n&~o,l!==0?r=Wn(l):i!==0&&(r=Wn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),o=1<<n,r|=e[n],t&=~o;return r}function f0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Xe(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=f0(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mc(){var e=Rr;return Rr<<=1,!(Rr&4194240)&&(Rr=64),e}function Li(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function p0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function hc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yc,ms,vc,gc,xc,wl=!1,$r=[],Ct=null,Et=null,Nt=null,or=new Map,ir=new Map,xt=[],m0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ca(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(t.pointerId)}}function In(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Nr(t),t!==null&&ms(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function h0(e,t,n,r,o){switch(t){case"focusin":return Ct=In(Ct,e,t,n,r,o),!0;case"dragenter":return Et=In(Et,e,t,n,r,o),!0;case"mouseover":return Nt=In(Nt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return or.set(i,In(or.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ir.set(i,In(ir.get(i)||null,e,t,n,r,o)),!0}return!1}function wc(e){var t=Vt(e.target);if(t!==null){var n=Jt(t);if(n!==null){if(t=n.tag,t===13){if(t=ac(n),t!==null){e.blockedOn=t,xc(e.priority,function(){vc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hl=r,n.target.dispatchEvent(r),hl=null}else return t=Nr(n),t!==null&&ms(t),e.blockedOn=n,!1;t.shift()}return!0}function Ea(e,t,n){br(e)&&n.delete(t)}function y0(){wl=!1,Ct!==null&&br(Ct)&&(Ct=null),Et!==null&&br(Et)&&(Et=null),Nt!==null&&br(Nt)&&(Nt=null),or.forEach(Ea),ir.forEach(Ea)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,wl||(wl=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,y0)))}function lr(e){function t(o){return $n(o,e)}if(0<$r.length){$n($r[0],e);for(var n=1;n<$r.length;n++){var r=$r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&$n(Ct,e),Et!==null&&$n(Et,e),Nt!==null&&$n(Nt,e),or.forEach(t),ir.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)wc(n),n.blockedOn===null&&xt.shift()}var hn=pt.ReactCurrentBatchConfig,vo=!0;function v0(e,t,n,r){var o=F,i=hn.transition;hn.transition=null;try{F=1,hs(e,t,n,r)}finally{F=o,hn.transition=i}}function g0(e,t,n,r){var o=F,i=hn.transition;hn.transition=null;try{F=4,hs(e,t,n,r)}finally{F=o,hn.transition=i}}function hs(e,t,n,r){if(vo){var o=Sl(e,t,n,r);if(o===null)Ui(e,t,r,go,n),Ca(e,r);else if(h0(o,e,t,n,r))r.stopPropagation();else if(Ca(e,r),t&4&&-1<m0.indexOf(e)){for(;o!==null;){var i=Nr(o);if(i!==null&&yc(i),i=Sl(e,t,n,r),i===null&&Ui(e,t,r,go,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ui(e,t,r,null,n)}}var go=null;function Sl(e,t,n,r){if(go=null,e=fs(r),e=Vt(e),e!==null)if(t=Jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ac(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return go=e,null}function Sc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i0()){case ds:return 1;case dc:return 4;case ho:case l0:return 16;case pc:return 536870912;default:return 16}default:return 16}}var St=null,ys=null,qr=null;function kc(){if(qr)return qr;var e,t=ys,n=t.length,r,o="value"in St?St.value:St.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return qr=o.slice(e,1<r?1-r:void 0)}function eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function Na(){return!1}function Le(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Dr:Na,this.isPropagationStopped=Na,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vs=Le(jn),Er=X({},jn,{view:0,detail:0}),x0=Le(Er),Mi,Ri,Dn,Bo=X({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dn&&(Dn&&e.type==="mousemove"?(Mi=e.screenX-Dn.screenX,Ri=e.screenY-Dn.screenY):Ri=Mi=0,Dn=e),Mi)},movementY:function(e){return"movementY"in e?e.movementY:Ri}}),Pa=Le(Bo),w0=X({},Bo,{dataTransfer:0}),S0=Le(w0),k0=X({},Er,{relatedTarget:0}),Ii=Le(k0),C0=X({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=Le(C0),N0=X({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P0=Le(N0),_0=X({},jn,{data:0}),_a=Le(_0),j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=O0[e])?!!t[e]:!1}function gs(){return T0}var L0=X({},Er,{key:function(e){if(e.key){var t=j0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(e){return e.type==="keypress"?eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M0=Le(L0),R0=X({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ja=Le(R0),I0=X({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),$0=Le(I0),D0=X({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=Le(D0),A0=X({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),V0=Le(A0),B0=[9,13,27,32],xs=ut&&"CompositionEvent"in window,Kn=null;ut&&"documentMode"in document&&(Kn=document.documentMode);var U0=ut&&"TextEvent"in window&&!Kn,Cc=ut&&(!xs||Kn&&8<Kn&&11>=Kn),za=" ",Oa=!1;function Ec(e,t){switch(e){case"keyup":return B0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function H0(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(Oa=!0,za);case"textInput":return e=t.data,e===za&&Oa?null:e;default:return null}}function W0(e,t){if(tn)return e==="compositionend"||!xs&&Ec(e,t)?(e=kc(),qr=ys=St=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cc&&t.locale!=="ko"?null:t.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Q0[e.type]:t==="textarea"}function Pc(e,t,n,r){rc(r),t=xo(t,"onChange"),0<t.length&&(n=new vs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,sr=null;function Y0(e){Dc(e,0)}function Uo(e){var t=on(e);if(Gu(t))return e}function X0(e,t){if(e==="change")return t}var _c=!1;if(ut){var $i;if(ut){var Di="oninput"in document;if(!Di){var La=document.createElement("div");La.setAttribute("oninput","return;"),Di=typeof La.oninput=="function"}$i=Di}else $i=!1;_c=$i&&(!document.documentMode||9<document.documentMode)}function Ma(){Zn&&(Zn.detachEvent("onpropertychange",jc),sr=Zn=null)}function jc(e){if(e.propertyName==="value"&&Uo(sr)){var t=[];Pc(t,sr,e,fs(e)),sc(Y0,t)}}function K0(e,t,n){e==="focusin"?(Ma(),Zn=t,sr=n,Zn.attachEvent("onpropertychange",jc)):e==="focusout"&&Ma()}function Z0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Uo(sr)}function G0(e,t){if(e==="click")return Uo(t)}function J0(e,t){if(e==="input"||e==="change")return Uo(t)}function b0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:b0;function ar(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!rl.call(t,o)||!Ze(e[o],t[o]))return!1}return!0}function Ra(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ia(e,t){var n=Ra(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ra(n)}}function zc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Oc(){for(var e=window,t=fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fo(e.document)}return t}function ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function q0(e){var t=Oc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zc(n.ownerDocument.documentElement,n)){if(r!==null&&ws(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ia(n,i);var l=Ia(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ep=ut&&"documentMode"in document&&11>=document.documentMode,nn=null,kl=null,Gn=null,Cl=!1;function $a(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cl||nn==null||nn!==fo(r)||(r=nn,"selectionStart"in r&&ws(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&ar(Gn,r)||(Gn=r,r=xo(kl,"onSelect"),0<r.length&&(t=new vs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nn)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rn={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},Fi={},Tc={};ut&&(Tc=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Ho(e){if(Fi[e])return Fi[e];if(!rn[e])return e;var t=rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tc)return Fi[e]=t[n];return e}var Lc=Ho("animationend"),Mc=Ho("animationiteration"),Rc=Ho("animationstart"),Ic=Ho("transitionend"),$c=new Map,Da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){$c.set(e,t),Gt(t,[e])}for(var Ai=0;Ai<Da.length;Ai++){var Vi=Da[Ai],tp=Vi.toLowerCase(),np=Vi[0].toUpperCase()+Vi.slice(1);Mt(tp,"on"+np)}Mt(Lc,"onAnimationEnd");Mt(Mc,"onAnimationIteration");Mt(Rc,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(Ic,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));function Fa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,t0(r,t,void 0,e),e.currentTarget=null}function Dc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Fa(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Fa(o,s,c),i=a}}}if(mo)throw e=gl,mo=!1,gl=null,e}function U(e,t){var n=t[jl];n===void 0&&(n=t[jl]=new Set);var r=e+"__bubble";n.has(r)||(Fc(t,e,2,!1),n.add(r))}function Bi(e,t,n){var r=0;t&&(r|=4),Fc(n,e,r,t)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Ar]){e[Ar]=!0,Qu.forEach(function(n){n!=="selectionchange"&&(rp.has(n)||Bi(n,!1,e),Bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ar]||(t[Ar]=!0,Bi("selectionchange",!1,t))}}function Fc(e,t,n,r){switch(Sc(t)){case 1:var o=v0;break;case 4:o=g0;break;default:o=hs}n=o.bind(null,t,n,e),o=void 0,!vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ui(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Vt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}sc(function(){var c=i,y=fs(n),h=[];e:{var p=$c.get(e);if(p!==void 0){var w=vs,x=e;switch(e){case"keypress":if(eo(n)===0)break e;case"keydown":case"keyup":w=M0;break;case"focusin":x="focus",w=Ii;break;case"focusout":x="blur",w=Ii;break;case"beforeblur":case"afterblur":w=Ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=$0;break;case Lc:case Mc:case Rc:w=E0;break;case Ic:w=F0;break;case"scroll":w=x0;break;case"wheel":w=V0;break;case"copy":case"cut":case"paste":w=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ja}var v=(t&4)!==0,z=!v&&e==="scroll",f=v?p!==null?p+"Capture":null:p;v=[];for(var u=c,d;u!==null;){d=u;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=rr(u,f),g!=null&&v.push(cr(u,g,d)))),z)break;u=u.return}0<v.length&&(p=new w(p,x,null,n,y),h.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==hl&&(x=n.relatedTarget||n.fromElement)&&(Vt(x)||x[ct]))break e;if((w||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?Vt(x):null,x!==null&&(z=Jt(x),x!==z||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(v=Pa,g="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=ja,g="onPointerLeave",f="onPointerEnter",u="pointer"),z=w==null?p:on(w),d=x==null?p:on(x),p=new v(g,u+"leave",w,n,y),p.target=z,p.relatedTarget=d,g=null,Vt(y)===c&&(v=new v(f,u+"enter",x,n,y),v.target=d,v.relatedTarget=z,g=v),z=g,w&&x)t:{for(v=w,f=x,u=0,d=v;d;d=bt(d))u++;for(d=0,g=f;g;g=bt(g))d++;for(;0<u-d;)v=bt(v),u--;for(;0<d-u;)f=bt(f),d--;for(;u--;){if(v===f||f!==null&&v===f.alternate)break t;v=bt(v),f=bt(f)}v=null}else v=null;w!==null&&Aa(h,p,w,v,!1),x!==null&&z!==null&&Aa(h,z,x,v,!0)}}e:{if(p=c?on(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var E=X0;else if(Ta(p))if(_c)E=J0;else{E=Z0;var N=K0}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=G0);if(E&&(E=E(e,c))){Pc(h,E,n,y);break e}N&&N(e,p,c),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&cl(p,"number",p.value)}switch(N=c?on(c):window,e){case"focusin":(Ta(N)||N.contentEditable==="true")&&(nn=N,kl=c,Gn=null);break;case"focusout":Gn=kl=nn=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,$a(h,n,y);break;case"selectionchange":if(ep)break;case"keydown":case"keyup":$a(h,n,y)}var C;if(xs)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else tn?Ec(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Cc&&n.locale!=="ko"&&(tn||j!=="onCompositionStart"?j==="onCompositionEnd"&&tn&&(C=kc()):(St=y,ys="value"in St?St.value:St.textContent,tn=!0)),N=xo(c,j),0<N.length&&(j=new _a(j,e,null,n,y),h.push({event:j,listeners:N}),C?j.data=C:(C=Nc(n),C!==null&&(j.data=C)))),(C=U0?H0(e,n):W0(e,n))&&(c=xo(c,"onBeforeInput"),0<c.length&&(y=new _a("onBeforeInput","beforeinput",null,n,y),h.push({event:y,listeners:c}),y.data=C))}Dc(h,t)})}function cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=rr(e,n),i!=null&&r.unshift(cr(e,i,o)),i=rr(e,t),i!=null&&r.push(cr(e,i,o))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Aa(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=rr(n,i),a!=null&&l.unshift(cr(n,a,s))):o||(a=rr(n,i),a!=null&&l.push(cr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var op=/\r\n?/g,ip=/\u0000|\uFFFD/g;function Va(e){return(typeof e=="string"?e:""+e).replace(op,`
`).replace(ip,"")}function Vr(e,t,n){if(t=Va(t),Va(e)!==t&&n)throw Error(S(425))}function wo(){}var El=null,Nl=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _l=typeof setTimeout=="function"?setTimeout:void 0,lp=typeof clearTimeout=="function"?clearTimeout:void 0,Ba=typeof Promise=="function"?Promise:void 0,sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ba<"u"?function(e){return Ba.resolve(null).then(e).catch(ap)}:_l;function ap(e){setTimeout(function(){throw e})}function Hi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);lr(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ua(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zn=Math.random().toString(36).slice(2),et="__reactFiber$"+zn,fr="__reactProps$"+zn,ct="__reactContainer$"+zn,jl="__reactEvents$"+zn,up="__reactListeners$"+zn,cp="__reactHandles$"+zn;function Vt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ua(e);e!==null;){if(n=e[et])return n;e=Ua(e)}return t}e=n,n=e.parentNode}return null}function Nr(e){return e=e[et]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Wo(e){return e[fr]||null}var zl=[],ln=-1;function Rt(e){return{current:e}}function H(e){0>ln||(e.current=zl[ln],zl[ln]=null,ln--)}function B(e,t){ln++,zl[ln]=e.current,e.current=t}var Lt={},he=Rt(Lt),ke=Rt(!1),Qt=Lt;function wn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function So(){H(ke),H(he)}function Ha(e,t,n){if(he.current!==Lt)throw Error(S(168));B(he,t),B(ke,n)}function Ac(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Kd(e)||"Unknown",o));return X({},n,r)}function ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Qt=he.current,B(he,e),B(ke,ke.current),!0}function Wa(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ac(e,t,Qt),r.__reactInternalMemoizedMergedChildContext=e,H(ke),H(he),B(he,e)):H(ke),B(ke,n)}var it=null,Qo=!1,Wi=!1;function Vc(e){it===null?it=[e]:it.push(e)}function fp(e){Qo=!0,Vc(e)}function It(){if(!Wi&&it!==null){Wi=!0;var e=0,t=F;try{var n=it;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,Qo=!1}catch(o){throw it!==null&&(it=it.slice(e+1)),fc(ds,It),o}finally{F=t,Wi=!1}}return null}var sn=[],an=0,Co=null,Eo=0,Re=[],Ie=0,Yt=null,lt=1,st="";function Ft(e,t){sn[an++]=Eo,sn[an++]=Co,Co=e,Eo=t}function Bc(e,t,n){Re[Ie++]=lt,Re[Ie++]=st,Re[Ie++]=Yt,Yt=e;var r=lt;e=st;var o=32-Xe(r)-1;r&=~(1<<o),n+=1;var i=32-Xe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,lt=1<<32-Xe(t)+o|n<<o|r,st=i+e}else lt=1<<i|n<<o|r,st=e}function Ss(e){e.return!==null&&(Ft(e,1),Bc(e,1,0))}function ks(e){for(;e===Co;)Co=sn[--an],sn[an]=null,Eo=sn[--an],sn[an]=null;for(;e===Yt;)Yt=Re[--Ie],Re[Ie]=null,st=Re[--Ie],Re[Ie]=null,lt=Re[--Ie],Re[Ie]=null}var je=null,_e=null,W=!1,Ye=null;function Uc(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,_e=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yt!==null?{id:lt,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,_e=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(W){var t=_e;if(t){var n=t;if(!Qa(e,t)){if(Ol(e))throw Error(S(418));t=Pt(n.nextSibling);var r=je;t&&Qa(e,t)?Uc(r,n):(e.flags=e.flags&-4097|2,W=!1,je=e)}}else{if(Ol(e))throw Error(S(418));e.flags=e.flags&-4097|2,W=!1,je=e}}}function Ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Br(e){if(e!==je)return!1;if(!W)return Ya(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=_e)){if(Ol(e))throw Hc(),Error(S(418));for(;t;)Uc(e,t),t=Pt(t.nextSibling)}if(Ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=je?Pt(e.stateNode.nextSibling):null;return!0}function Hc(){for(var e=_e;e;)e=Pt(e.nextSibling)}function Sn(){_e=je=null,W=!1}function Cs(e){Ye===null?Ye=[e]:Ye.push(e)}var dp=pt.ReactCurrentBatchConfig;function Fn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xa(e){var t=e._init;return t(e._payload)}function Wc(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Ot(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,g){return u===null||u.tag!==6?(u=Ji(d,f.mode,g),u.return=f,u):(u=o(u,d),u.return=f,u)}function a(f,u,d,g){var E=d.type;return E===en?y(f,u,d.props.children,g,d.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&Xa(E)===u.type)?(g=o(u,d.props),g.ref=Fn(f,u,d),g.return=f,g):(g=so(d.type,d.key,d.props,null,f.mode,g),g.ref=Fn(f,u,d),g.return=f,g)}function c(f,u,d,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=bi(d,f.mode,g),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function y(f,u,d,g,E){return u===null||u.tag!==7?(u=Wt(d,f.mode,g,E),u.return=f,u):(u=o(u,d),u.return=f,u)}function h(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ji(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Tr:return d=so(u.type,u.key,u.props,null,f.mode,d),d.ref=Fn(f,null,u),d.return=f,d;case qt:return u=bi(u,f.mode,d),u.return=f,u;case yt:var g=u._init;return h(f,g(u._payload),d)}if(Hn(u)||Mn(u))return u=Wt(u,f.mode,d,null),u.return=f,u;Ur(f,u)}return null}function p(f,u,d,g){var E=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:s(f,u,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Tr:return d.key===E?a(f,u,d,g):null;case qt:return d.key===E?c(f,u,d,g):null;case yt:return E=d._init,p(f,u,E(d._payload),g)}if(Hn(d)||Mn(d))return E!==null?null:y(f,u,d,g,null);Ur(f,d)}return null}function w(f,u,d,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,s(u,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Tr:return f=f.get(g.key===null?d:g.key)||null,a(u,f,g,E);case qt:return f=f.get(g.key===null?d:g.key)||null,c(u,f,g,E);case yt:var N=g._init;return w(f,u,d,N(g._payload),E)}if(Hn(g)||Mn(g))return f=f.get(d)||null,y(u,f,g,E,null);Ur(u,g)}return null}function x(f,u,d,g){for(var E=null,N=null,C=u,j=u=0,Z=null;C!==null&&j<d.length;j++){C.index>j?(Z=C,C=null):Z=C.sibling;var R=p(f,C,d[j],g);if(R===null){C===null&&(C=Z);break}e&&C&&R.alternate===null&&t(f,C),u=i(R,u,j),N===null?E=R:N.sibling=R,N=R,C=Z}if(j===d.length)return n(f,C),W&&Ft(f,j),E;if(C===null){for(;j<d.length;j++)C=h(f,d[j],g),C!==null&&(u=i(C,u,j),N===null?E=C:N.sibling=C,N=C);return W&&Ft(f,j),E}for(C=r(f,C);j<d.length;j++)Z=w(C,f,j,d[j],g),Z!==null&&(e&&Z.alternate!==null&&C.delete(Z.key===null?j:Z.key),u=i(Z,u,j),N===null?E=Z:N.sibling=Z,N=Z);return e&&C.forEach(function(Ue){return t(f,Ue)}),W&&Ft(f,j),E}function v(f,u,d,g){var E=Mn(d);if(typeof E!="function")throw Error(S(150));if(d=E.call(d),d==null)throw Error(S(151));for(var N=E=null,C=u,j=u=0,Z=null,R=d.next();C!==null&&!R.done;j++,R=d.next()){C.index>j?(Z=C,C=null):Z=C.sibling;var Ue=p(f,C,R.value,g);if(Ue===null){C===null&&(C=Z);break}e&&C&&Ue.alternate===null&&t(f,C),u=i(Ue,u,j),N===null?E=Ue:N.sibling=Ue,N=Ue,C=Z}if(R.done)return n(f,C),W&&Ft(f,j),E;if(C===null){for(;!R.done;j++,R=d.next())R=h(f,R.value,g),R!==null&&(u=i(R,u,j),N===null?E=R:N.sibling=R,N=R);return W&&Ft(f,j),E}for(C=r(f,C);!R.done;j++,R=d.next())R=w(C,f,j,R.value,g),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?j:R.key),u=i(R,u,j),N===null?E=R:N.sibling=R,N=R);return e&&C.forEach(function(Tn){return t(f,Tn)}),W&&Ft(f,j),E}function z(f,u,d,g){if(typeof d=="object"&&d!==null&&d.type===en&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Tr:e:{for(var E=d.key,N=u;N!==null;){if(N.key===E){if(E=d.type,E===en){if(N.tag===7){n(f,N.sibling),u=o(N,d.props.children),u.return=f,f=u;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&Xa(E)===N.type){n(f,N.sibling),u=o(N,d.props),u.ref=Fn(f,N,d),u.return=f,f=u;break e}n(f,N);break}else t(f,N);N=N.sibling}d.type===en?(u=Wt(d.props.children,f.mode,g,d.key),u.return=f,f=u):(g=so(d.type,d.key,d.props,null,f.mode,g),g.ref=Fn(f,u,d),g.return=f,f=g)}return l(f);case qt:e:{for(N=d.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=bi(d,f.mode,g),u.return=f,f=u}return l(f);case yt:return N=d._init,z(f,u,N(d._payload),g)}if(Hn(d))return x(f,u,d,g);if(Mn(d))return v(f,u,d,g);Ur(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=Ji(d,f.mode,g),u.return=f,f=u),l(f)):n(f,u)}return z}var kn=Wc(!0),Qc=Wc(!1),No=Rt(null),Po=null,un=null,Es=null;function Ns(){Es=un=Po=null}function Ps(e){var t=No.current;H(No),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yn(e,t){Po=e,Es=un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Es!==e)if(e={context:e,memoizedValue:t,next:null},un===null){if(Po===null)throw Error(S(308));un=e,Po.dependencies={lanes:0,firstContext:e}}else un=un.next=e;return t}var Bt=null;function _s(e){Bt===null?Bt=[e]:Bt.push(e)}function Yc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,_s(t)):(n.next=o.next,o.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ft(e,n)}return o=r.interleaved,o===null?(t.next=t,_s(r)):(t.next=o.next,o.next=t),r.interleaved=t,ft(e,n)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _o(e,t,n,r){var o=e.updateQueue;vt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==l&&(s===null?y.firstBaseUpdate=c:s.next=c,y.lastBaseUpdate=a))}if(i!==null){var h=o.baseState;l=0,y=c=a=null,s=i;do{var p=s.lane,w=s.eventTime;if((r&p)===p){y!==null&&(y=y.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,v=s;switch(p=t,w=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(w,h,p);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,p=typeof x=="function"?x.call(w,h,p):x,p==null)break e;h=X({},h,p);break e;case 2:vt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else w={eventTime:w,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(c=y=w,a=h):y=y.next=w,l|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(y===null&&(a=h),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Kt|=l,e.lanes=l,e.memoizedState=h}}function Za(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Pr={},nt=Rt(Pr),dr=Rt(Pr),pr=Rt(Pr);function Ut(e){if(e===Pr)throw Error(S(174));return e}function zs(e,t){switch(B(pr,t),B(dr,e),B(nt,Pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}H(nt),B(nt,t)}function Cn(){H(nt),H(dr),H(pr)}function Kc(e){Ut(pr.current);var t=Ut(nt.current),n=dl(t,e.type);t!==n&&(B(dr,e),B(nt,n))}function Os(e){dr.current===e&&(H(nt),H(dr))}var Q=Rt(0);function jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qi=[];function Ts(){for(var e=0;e<Qi.length;e++)Qi[e]._workInProgressVersionPrimary=null;Qi.length=0}var no=pt.ReactCurrentDispatcher,Yi=pt.ReactCurrentBatchConfig,Xt=0,Y=null,te=null,oe=null,zo=!1,Jn=!1,mr=0,pp=0;function fe(){throw Error(S(321))}function Ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function Ms(e,t,n,r,o,i){if(Xt=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=e===null||e.memoizedState===null?vp:gp,e=n(r,o),Jn){i=0;do{if(Jn=!1,mr=0,25<=i)throw Error(S(301));i+=1,oe=te=null,t.updateQueue=null,no.current=xp,e=n(r,o)}while(Jn)}if(no.current=Oo,t=te!==null&&te.next!==null,Xt=0,oe=te=Y=null,zo=!1,t)throw Error(S(300));return e}function Rs(){var e=mr!==0;return mr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Y.memoizedState=oe=e:oe=oe.next=e,oe}function Ve(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=oe===null?Y.memoizedState:oe.next;if(t!==null)oe=t,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},oe===null?Y.memoizedState=oe=e:oe=oe.next=e}return oe}function hr(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=Ve(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var y=c.lane;if((Xt&y)===y)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:y,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,Y.lanes|=y,Kt|=y}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,Ze(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,Kt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ki(e){var t=Ve(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ze(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Zc(){}function Gc(e,t){var n=Y,r=Ve(),o=t(),i=!Ze(r.memoizedState,o);if(i&&(r.memoizedState=o,Se=!0),r=r.queue,Is(qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,yr(9,bc.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(S(349));Xt&30||Jc(n,t,o)}return o}function Jc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bc(e,t,n,r){t.value=n,t.getSnapshot=r,ef(t)&&tf(e)}function qc(e,t,n){return n(function(){ef(t)&&tf(e)})}function ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function tf(e){var t=ft(e,1);t!==null&&Ke(t,e,1,-1)}function Ga(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=yp.bind(null,Y,e),[t.memoizedState,e]}function yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nf(){return Ve().memoizedState}function ro(e,t,n,r){var o=Je();Y.flags|=e,o.memoizedState=yr(1|t,n,void 0,r===void 0?null:r)}function Yo(e,t,n,r){var o=Ve();r=r===void 0?null:r;var i=void 0;if(te!==null){var l=te.memoizedState;if(i=l.destroy,r!==null&&Ls(r,l.deps)){o.memoizedState=yr(t,n,i,r);return}}Y.flags|=e,o.memoizedState=yr(1|t,n,i,r)}function Ja(e,t){return ro(8390656,8,e,t)}function Is(e,t){return Yo(2048,8,e,t)}function rf(e,t){return Yo(4,2,e,t)}function of(e,t){return Yo(4,4,e,t)}function lf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sf(e,t,n){return n=n!=null?n.concat([e]):null,Yo(4,4,lf.bind(null,t,e),n)}function $s(){}function af(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function uf(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cf(e,t,n){return Xt&21?(Ze(n,t)||(n=mc(),Y.lanes|=n,Kt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function mp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),t()}finally{F=n,Yi.transition=r}}function ff(){return Ve().memoizedState}function hp(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},df(e))pf(t,n);else if(n=Yc(e,t,n,r),n!==null){var o=ve();Ke(n,e,r,o),mf(n,t,r)}}function yp(e,t,n){var r=zt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(df(e))pf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Ze(s,l)){var a=t.interleaved;a===null?(o.next=o,_s(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Yc(e,t,o,r),n!==null&&(o=ve(),Ke(n,e,r,o),mf(n,t,r))}}function df(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function pf(e,t){Jn=zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}var Oo={readContext:Ae,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},vp={readContext:Ae,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ja,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ro(4194308,4,lf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return ro(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hp.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Ga,useDebugValue:$s,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Ga(!1),t=e[0];return e=mp.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=Je();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ie===null)throw Error(S(349));Xt&30||Jc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ja(qc.bind(null,r,i,e),[e]),r.flags|=2048,yr(9,bc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=ie.identifierPrefix;if(W){var n=st,r=lt;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gp={readContext:Ae,useCallback:af,useContext:Ae,useEffect:Is,useImperativeHandle:sf,useInsertionEffect:rf,useLayoutEffect:of,useMemo:uf,useReducer:Xi,useRef:nf,useState:function(){return Xi(hr)},useDebugValue:$s,useDeferredValue:function(e){var t=Ve();return cf(t,te.memoizedState,e)},useTransition:function(){var e=Xi(hr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Zc,useSyncExternalStore:Gc,useId:ff,unstable_isNewReconciler:!1},xp={readContext:Ae,useCallback:af,useContext:Ae,useEffect:Is,useImperativeHandle:sf,useInsertionEffect:rf,useLayoutEffect:of,useMemo:uf,useReducer:Ki,useRef:nf,useState:function(){return Ki(hr)},useDebugValue:$s,useDeferredValue:function(e){var t=Ve();return te===null?t.memoizedState=e:cf(t,te.memoizedState,e)},useTransition:function(){var e=Ki(hr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Zc,useSyncExternalStore:Gc,useId:ff,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xo={isMounted:function(e){return(e=e._reactInternals)?Jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),o=zt(e),i=at(r,o);i.payload=t,n!=null&&(i.callback=n),t=_t(e,i,o),t!==null&&(Ke(t,e,o,r),to(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),o=zt(e),i=at(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=_t(e,i,o),t!==null&&(Ke(t,e,o,r),to(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=zt(e),o=at(n,r);o.tag=2,t!=null&&(o.callback=t),t=_t(e,o,r),t!==null&&(Ke(t,e,r,n),to(t,e,r))}};function ba(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(o,i):!0}function hf(e,t,n){var r=!1,o=Lt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=Ce(t)?Qt:he.current,r=t.contextTypes,i=(r=r!=null)?wn(e,o):Lt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function qa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function Rl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},js(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=Ce(t)?Qt:he.current,o.context=wn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ml(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Xo.enqueueReplaceState(o,o.state,null),_o(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function En(e,t){try{var n="",r=t;do n+=Xd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Zi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Il(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wp=typeof WeakMap=="function"?WeakMap:Map;function yf(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Lo||(Lo=!0,Ql=r),Il(e,t)},n}function vf(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Il(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Il(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function eu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Rp.bind(null,e,t,n),t.then(e,e))}function tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var Sp=pt.ReactCurrentOwner,Se=!1;function ye(e,t,n,r){t.child=e===null?Qc(t,null,n,r):kn(t,e.child,n,r)}function ru(e,t,n,r,o){n=n.render;var i=t.ref;return yn(t,o),r=Ms(e,t,n,r,i,o),n=Rs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(W&&n&&Ss(t),t.flags|=1,ye(e,t,r,o),t.child)}function ou(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ws(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,gf(e,t,i,r,o)):(e=so(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(l,r)&&e.ref===t.ref)return dt(e,t,o)}return t.flags|=1,e=Ot(i,r),e.ref=t.ref,e.return=t,t.child=e}function gf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ar(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,dt(e,t,o)}return $l(e,t,n,r,o)}function xf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(fn,Pe),Pe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(fn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(fn,Pe),Pe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(fn,Pe),Pe|=r;return ye(e,t,o,n),t.child}function wf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $l(e,t,n,r,o){var i=Ce(n)?Qt:he.current;return i=wn(t,i),yn(t,o),n=Ms(e,t,n,r,i,o),r=Rs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(W&&r&&Ss(t),t.flags|=1,ye(e,t,n,o),t.child)}function iu(e,t,n,r,o){if(Ce(n)){var i=!0;ko(t)}else i=!1;if(yn(t,o),t.stateNode===null)oo(e,t),hf(t,n,r),Rl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=Ce(n)?Qt:he.current,c=wn(t,c));var y=n.getDerivedStateFromProps,h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&qa(t,l,r,c),vt=!1;var p=t.memoizedState;l.state=p,_o(t,r,l,o),a=t.memoizedState,s!==r||p!==a||ke.current||vt?(typeof y=="function"&&(Ml(t,n,y,r),a=t.memoizedState),(s=vt||ba(t,n,s,r,p,a,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Xc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:We(t.type,s),l.props=c,h=t.pendingProps,p=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ae(a):(a=Ce(n)?Qt:he.current,a=wn(t,a));var w=n.getDerivedStateFromProps;(y=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||p!==a)&&qa(t,l,r,a),vt=!1,p=t.memoizedState,l.state=p,_o(t,r,l,o);var x=t.memoizedState;s!==h||p!==x||ke.current||vt?(typeof w=="function"&&(Ml(t,n,w,r),x=t.memoizedState),(c=vt||ba(t,n,c,r,p,x,a)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Dl(e,t,n,r,i,o)}function Dl(e,t,n,r,o,i){wf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Wa(t,n,!1),dt(e,t,i);r=t.stateNode,Sp.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=kn(t,e.child,null,i),t.child=kn(t,null,s,i)):ye(e,t,s,i),t.memoizedState=r.state,o&&Wa(t,n,!0),t.child}function Sf(e){var t=e.stateNode;t.pendingContext?Ha(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ha(e,t.context,!1),zs(e,t.containerInfo)}function lu(e,t,n,r,o){return Sn(),Cs(o),t.flags|=256,ye(e,t,n,r),t.child}var Fl={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function kf(e,t,n){var r=t.pendingProps,o=Q.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(Q,o&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Go(l,r,0,null),e=Wt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Al(n),t.memoizedState=Fl,e):Ds(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return kp(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Ot(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Ot(s,i):(i=Wt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Al(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Fl,r}return i=e.child,e=i.sibling,r=Ot(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ds(e,t){return t=Go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hr(e,t,n,r){return r!==null&&Cs(r),kn(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kp(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Zi(Error(S(422))),Hr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Go({mode:"visible",children:r.children},o,0,null),i=Wt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&kn(t,e.child,null,l),t.child.memoizedState=Al(l),t.memoizedState=Fl,i);if(!(t.mode&1))return Hr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=Zi(i,r,void 0),Hr(e,t,l,r)}if(s=(l&e.childLanes)!==0,Se||s){if(r=ie,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ft(e,o),Ke(r,e,o,-1))}return Hs(),r=Zi(Error(S(421))),Hr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ip.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,_e=Pt(o.nextSibling),je=t,W=!0,Ye=null,e!==null&&(Re[Ie++]=lt,Re[Ie++]=st,Re[Ie++]=Yt,lt=e.id,st=e.overflow,Yt=t),t=Ds(t,r.children),t.flags|=4096,t)}function su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function Gi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Cf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ye(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&su(e,n,t);else if(e.tag===19)su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&jo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Gi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&jo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Gi(t,!0,n,null,i);break;case"together":Gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cp(e,t,n){switch(t.tag){case 3:Sf(t),Sn();break;case 5:Kc(t);break;case 1:Ce(t.type)&&ko(t);break;case 4:zs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(No,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?kf(e,t,n):(B(Q,Q.current&1),e=dt(e,t,n),e!==null?e.sibling:null);B(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Cf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,xf(e,t,n)}return dt(e,t,n)}var Ef,Vl,Nf,Pf;Ef=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vl=function(){};Nf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ut(nt.current);var i=null;switch(n){case"input":o=al(e,o),r=al(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=fl(e,o),r=fl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wo)}pl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&U("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Pf=function(e,t,n,r){n!==r&&(t.flags|=4)};function An(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ep(e,t,n){var r=t.pendingProps;switch(ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ce(t.type)&&So(),de(t),null;case 3:return r=t.stateNode,Cn(),H(ke),H(he),Ts(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Kl(Ye),Ye=null))),Vl(e,t),de(t),null;case 5:Os(t);var o=Ut(pr.current);if(n=t.type,e!==null&&t.stateNode!=null)Nf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return de(t),null}if(e=Ut(nt.current),Br(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[et]=t,r[fr]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<Qn.length;o++)U(Qn[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":ya(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":ga(r,i),U("invalid",r)}pl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Vr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Vr(r.textContent,s,e),o=["children",""+s]):tr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&U("scroll",r)}switch(n){case"input":Lr(r),va(r,i,!0);break;case"textarea":Lr(r),xa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=wo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[et]=t,e[fr]=r,Ef(e,t,!1,!1),t.stateNode=e;e:{switch(l=ml(n,r),n){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<Qn.length;o++)U(Qn[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":ya(e,r),o=al(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),U("invalid",e);break;case"textarea":ga(e,r),o=fl(e,r),U("invalid",e);break;default:o=r}pl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?nc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ec(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&nr(e,a):typeof a=="number"&&nr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(tr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&U("scroll",e):a!=null&&ss(e,i,a,l))}switch(n){case"input":Lr(e),va(e,r,!1);break;case"textarea":Lr(e),xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?dn(e,!!r.multiple,i,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Pf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Ut(pr.current),Ut(nt.current),Br(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return de(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&_e!==null&&t.mode&1&&!(t.flags&128))Hc(),Sn(),t.flags|=98560,i=!1;else if(i=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[et]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Ye!==null&&(Kl(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ne===0&&(ne=3):Hs())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Cn(),Vl(e,t),e===null&&ur(t.stateNode.containerInfo),de(t),null;case 10:return Ps(t.type._context),de(t),null;case 17:return Ce(t.type)&&So(),de(t),null;case 19:if(H(Q),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)An(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=jo(e),l!==null){for(t.flags|=128,An(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>Nn&&(t.flags|=128,r=!0,An(i,!1),t.lanes=4194304)}else{if(!r)if(e=jo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),An(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!W)return de(t),null}else 2*J()-i.renderingStartTime>Nn&&n!==1073741824&&(t.flags|=128,r=!0,An(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=Q.current,B(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Us(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Np(e,t){switch(ks(t),t.tag){case 1:return Ce(t.type)&&So(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cn(),H(ke),H(he),Ts(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Os(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return Cn(),null;case 10:return Ps(t.type._context),null;case 22:case 23:return Us(),null;case 24:return null;default:return null}}var Wr=!1,me=!1,Pp=typeof WeakSet=="function"?WeakSet:Set,P=null;function cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Bl(e,t,n){try{n()}catch(r){K(e,t,r)}}var au=!1;function _p(e,t){if(El=vo,e=Oc(),ws(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,y=0,h=e,p=null;t:for(;;){for(var w;h!==n||o!==0&&h.nodeType!==3||(s=l+o),h!==i||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(w=h.firstChild)!==null;)p=h,h=w;for(;;){if(h===e)break t;if(p===n&&++c===o&&(s=l),p===i&&++y===r&&(a=l),(w=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nl={focusedElem:e,selectionRange:n},vo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,z=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:We(t.type,v),z);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(g){K(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return x=au,au=!1,x}function bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Bl(t,n,i)}o=o.next}while(o!==r)}}function Ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ul(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _f(e){var t=e.alternate;t!==null&&(e.alternate=null,_f(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[fr],delete t[jl],delete t[up],delete t[cp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jf(e){return e.tag===5||e.tag===3||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wo));else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}var se=null,Qe=!1;function ht(e,t,n){for(n=n.child;n!==null;)zf(e,t,n),n=n.sibling}function zf(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 5:me||cn(n,t);case 6:var r=se,o=Qe;se=null,ht(e,t,n),se=r,Qe=o,se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Qe?(e=se,n=n.stateNode,e.nodeType===8?Hi(e.parentNode,n):e.nodeType===1&&Hi(e,n),lr(e)):Hi(se,n.stateNode));break;case 4:r=se,o=Qe,se=n.stateNode.containerInfo,Qe=!0,ht(e,t,n),se=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Bl(n,t,l),o=o.next}while(o!==r)}ht(e,t,n);break;case 1:if(!me&&(cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){K(n,t,s)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,ht(e,t,n),me=r):ht(e,t,n);break;default:ht(e,t,n)}}function cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pp),t.forEach(function(r){var o=$p.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,Qe=!1;break e;case 3:se=s.stateNode.containerInfo,Qe=!0;break e;case 4:se=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(se===null)throw Error(S(160));zf(i,l,o),se=null,Qe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){K(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Of(t,e),t=t.sibling}function Of(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Ge(e),r&4){try{bn(3,e,e.return),Ko(3,e)}catch(v){K(e,e.return,v)}try{bn(5,e,e.return)}catch(v){K(e,e.return,v)}}break;case 1:He(t,e),Ge(e),r&512&&n!==null&&cn(n,n.return);break;case 5:if(He(t,e),Ge(e),r&512&&n!==null&&cn(n,n.return),e.flags&32){var o=e.stateNode;try{nr(o,"")}catch(v){K(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ju(o,i),ml(s,l);var c=ml(s,i);for(l=0;l<a.length;l+=2){var y=a[l],h=a[l+1];y==="style"?nc(o,h):y==="dangerouslySetInnerHTML"?ec(o,h):y==="children"?nr(o,h):ss(o,y,h,c)}switch(s){case"input":ul(o,i);break;case"textarea":bu(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?dn(o,!!i.multiple,w,!1):p!==!!i.multiple&&(i.defaultValue!=null?dn(o,!!i.multiple,i.defaultValue,!0):dn(o,!!i.multiple,i.multiple?[]:"",!1))}o[fr]=i}catch(v){K(e,e.return,v)}}break;case 6:if(He(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){K(e,e.return,v)}}break;case 3:if(He(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(v){K(e,e.return,v)}break;case 4:He(t,e),Ge(e);break;case 13:He(t,e),Ge(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Vs=J())),r&4&&cu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||y,He(t,e),me=c):He(t,e),Ge(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!y&&e.mode&1)for(P=e,y=e.child;y!==null;){for(h=P=y;P!==null;){switch(p=P,w=p.child,p.tag){case 0:case 11:case 14:case 15:bn(4,p,p.return);break;case 1:cn(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){K(r,n,v)}}break;case 5:cn(p,p.return);break;case 22:if(p.memoizedState!==null){du(h);continue}}w!==null?(w.return=p,P=w):du(h)}y=y.sibling}e:for(y=null,h=e;;){if(h.tag===5){if(y===null){y=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=tc("display",l))}catch(v){K(e,e.return,v)}}}else if(h.tag===6){if(y===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){K(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;y===h&&(y=null),h=h.return}y===h&&(y=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:He(t,e),Ge(e),r&4&&cu(e);break;case 21:break;default:He(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(nr(o,""),r.flags&=-33);var i=uu(e);Wl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=uu(e);Hl(e,s,l);break;default:throw Error(S(161))}}catch(a){K(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jp(e,t,n){P=e,Tf(e)}function Tf(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Wr;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||me;s=Wr;var c=me;if(Wr=l,(me=a)&&!c)for(P=o;P!==null;)l=P,a=l.child,l.tag===22&&l.memoizedState!==null?pu(o):a!==null?(a.return=l,P=a):pu(o);for(;i!==null;)P=i,Tf(i),i=i.sibling;P=o,Wr=s,me=c}fu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):fu(e)}}function fu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Ko(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Za(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Za(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var y=c.memoizedState;if(y!==null){var h=y.dehydrated;h!==null&&lr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&Ul(t)}catch(p){K(t,t.return,p)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function du(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function pu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ko(4,t)}catch(a){K(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){K(t,o,a)}}var i=t.return;try{Ul(t)}catch(a){K(t,i,a)}break;case 5:var l=t.return;try{Ul(t)}catch(a){K(t,l,a)}}}catch(a){K(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var zp=Math.ceil,To=pt.ReactCurrentDispatcher,Fs=pt.ReactCurrentOwner,Fe=pt.ReactCurrentBatchConfig,I=0,ie=null,q=null,ue=0,Pe=0,fn=Rt(0),ne=0,vr=null,Kt=0,Zo=0,As=0,qn=null,we=null,Vs=0,Nn=1/0,ot=null,Lo=!1,Ql=null,jt=null,Qr=!1,kt=null,Mo=0,er=0,Yl=null,io=-1,lo=0;function ve(){return I&6?J():io!==-1?io:io=J()}function zt(e){return e.mode&1?I&2&&ue!==0?ue&-ue:dp.transition!==null?(lo===0&&(lo=mc()),lo):(e=F,e!==0||(e=window.event,e=e===void 0?16:Sc(e.type)),e):1}function Ke(e,t,n,r){if(50<er)throw er=0,Yl=null,Error(S(185));Cr(e,n,r),(!(I&2)||e!==ie)&&(e===ie&&(!(I&2)&&(Zo|=n),ne===4&&wt(e,ue)),Ee(e,r),n===1&&I===0&&!(t.mode&1)&&(Nn=J()+500,Qo&&It()))}function Ee(e,t){var n=e.callbackNode;d0(e,t);var r=yo(e,e===ie?ue:0);if(r===0)n!==null&&ka(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ka(n),t===1)e.tag===0?fp(mu.bind(null,e)):Vc(mu.bind(null,e)),sp(function(){!(I&6)&&It()}),n=null;else{switch(hc(r)){case 1:n=ds;break;case 4:n=dc;break;case 16:n=ho;break;case 536870912:n=pc;break;default:n=ho}n=Af(n,Lf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lf(e,t){if(io=-1,lo=0,I&6)throw Error(S(327));var n=e.callbackNode;if(vn()&&e.callbackNode!==n)return null;var r=yo(e,e===ie?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ro(e,r);else{t=r;var o=I;I|=2;var i=Rf();(ie!==e||ue!==t)&&(ot=null,Nn=J()+500,Ht(e,t));do try{Lp();break}catch(s){Mf(e,s)}while(!0);Ns(),To.current=i,I=o,q!==null?t=0:(ie=null,ue=0,t=ne)}if(t!==0){if(t===2&&(o=xl(e),o!==0&&(r=o,t=Xl(e,o))),t===1)throw n=vr,Ht(e,0),wt(e,r),Ee(e,J()),n;if(t===6)wt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Op(o)&&(t=Ro(e,r),t===2&&(i=xl(e),i!==0&&(r=i,t=Xl(e,i))),t===1))throw n=vr,Ht(e,0),wt(e,r),Ee(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:At(e,we,ot);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=Vs+500-J(),10<t)){if(yo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_l(At.bind(null,e,we,ot),t);break}At(e,we,ot);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Xe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zp(r/1960))-r,10<r){e.timeoutHandle=_l(At.bind(null,e,we,ot),r);break}At(e,we,ot);break;case 5:At(e,we,ot);break;default:throw Error(S(329))}}}return Ee(e,J()),e.callbackNode===n?Lf.bind(null,e):null}function Xl(e,t){var n=qn;return e.current.memoizedState.isDehydrated&&(Ht(e,t).flags|=256),e=Ro(e,t),e!==2&&(t=we,we=n,t!==null&&Kl(t)),e}function Kl(e){we===null?we=e:we.push.apply(we,e)}function Op(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ze(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~As,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function mu(e){if(I&6)throw Error(S(327));vn();var t=yo(e,0);if(!(t&1))return Ee(e,J()),null;var n=Ro(e,t);if(e.tag!==0&&n===2){var r=xl(e);r!==0&&(t=r,n=Xl(e,r))}if(n===1)throw n=vr,Ht(e,0),wt(e,t),Ee(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,At(e,we,ot),Ee(e,J()),null}function Bs(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Nn=J()+500,Qo&&It())}}function Zt(e){kt!==null&&kt.tag===0&&!(I&6)&&vn();var t=I;I|=1;var n=Fe.transition,r=F;try{if(Fe.transition=null,F=1,e)return e()}finally{F=r,Fe.transition=n,I=t,!(I&6)&&It()}}function Us(){Pe=fn.current,H(fn)}function Ht(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(ks(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:Cn(),H(ke),H(he),Ts();break;case 5:Os(r);break;case 4:Cn();break;case 13:H(Q);break;case 19:H(Q);break;case 10:Ps(r.type._context);break;case 22:case 23:Us()}n=n.return}if(ie=e,q=e=Ot(e.current,null),ue=Pe=t,ne=0,vr=null,As=Zo=Kt=0,we=qn=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Bt=null}return e}function Mf(e,t){do{var n=q;try{if(Ns(),no.current=Oo,zo){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}zo=!1}if(Xt=0,oe=te=Y=null,Jn=!1,mr=0,Fs.current=null,n===null||n.return===null){ne=1,vr=t,q=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,y=s,h=y.tag;if(!(y.mode&1)&&(h===0||h===11||h===15)){var p=y.alternate;p?(y.updateQueue=p.updateQueue,y.memoizedState=p.memoizedState,y.lanes=p.lanes):(y.updateQueue=null,y.memoizedState=null)}var w=tu(l);if(w!==null){w.flags&=-257,nu(w,l,s,i,t),w.mode&1&&eu(i,c,t),t=w,a=c;var x=t.updateQueue;if(x===null){var v=new Set;v.add(a),t.updateQueue=v}else x.add(a);break e}else{if(!(t&1)){eu(i,c,t),Hs();break e}a=Error(S(426))}}else if(W&&s.mode&1){var z=tu(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),nu(z,l,s,i,t),Cs(En(a,s));break e}}i=a=En(a,s),ne!==4&&(ne=2),qn===null?qn=[i]:qn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=yf(i,a,t);Ka(i,f);break e;case 1:s=a;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(jt===null||!jt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=vf(i,s,t);Ka(i,g);break e}}i=i.return}while(i!==null)}$f(n)}catch(E){t=E,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Rf(){var e=To.current;return To.current=Oo,e===null?Oo:e}function Hs(){(ne===0||ne===3||ne===2)&&(ne=4),ie===null||!(Kt&268435455)&&!(Zo&268435455)||wt(ie,ue)}function Ro(e,t){var n=I;I|=2;var r=Rf();(ie!==e||ue!==t)&&(ot=null,Ht(e,t));do try{Tp();break}catch(o){Mf(e,o)}while(!0);if(Ns(),I=n,To.current=r,q!==null)throw Error(S(261));return ie=null,ue=0,ne}function Tp(){for(;q!==null;)If(q)}function Lp(){for(;q!==null&&!r0();)If(q)}function If(e){var t=Ff(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?$f(e):q=t,Fs.current=null}function $f(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Np(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,q=null;return}}else if(n=Ep(n,t,Pe),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ne===0&&(ne=5)}function At(e,t,n){var r=F,o=Fe.transition;try{Fe.transition=null,F=1,Mp(e,t,n,r)}finally{Fe.transition=o,F=r}return null}function Mp(e,t,n,r){do vn();while(kt!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(p0(e,i),e===ie&&(q=ie=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qr||(Qr=!0,Af(ho,function(){return vn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Fe.transition,Fe.transition=null;var l=F;F=1;var s=I;I|=4,Fs.current=null,_p(e,n),Of(n,e),q0(Nl),vo=!!El,Nl=El=null,e.current=n,jp(n),o0(),I=s,F=l,Fe.transition=i}else e.current=n;if(Qr&&(Qr=!1,kt=e,Mo=o),i=e.pendingLanes,i===0&&(jt=null),s0(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Lo)throw Lo=!1,e=Ql,Ql=null,e;return Mo&1&&e.tag!==0&&vn(),i=e.pendingLanes,i&1?e===Yl?er++:(er=0,Yl=e):er=0,It(),null}function vn(){if(kt!==null){var e=hc(Mo),t=Fe.transition,n=F;try{if(Fe.transition=null,F=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,Mo=0,I&6)throw Error(S(331));var o=I;for(I|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(P=c;P!==null;){var y=P;switch(y.tag){case 0:case 11:case 15:bn(8,y,i)}var h=y.child;if(h!==null)h.return=y,P=h;else for(;P!==null;){y=P;var p=y.sibling,w=y.return;if(_f(y),y===c){P=null;break}if(p!==null){p.return=w,P=p;break}P=w}}}var x=i.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var z=v.sibling;v.sibling=null,v=z}while(v!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:bn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,P=f;break e}P=i.return}}var u=e.current;for(P=u;P!==null;){l=P;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,P=d;else e:for(l=u;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ko(9,s)}}catch(E){K(s,s.return,E)}if(s===l){P=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,P=g;break e}P=s.return}}if(I=o,It(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Vo,e)}catch{}r=!0}return r}finally{F=n,Fe.transition=t}}return!1}function hu(e,t,n){t=En(n,t),t=yf(e,t,1),e=_t(e,t,1),t=ve(),e!==null&&(Cr(e,1,t),Ee(e,t))}function K(e,t,n){if(e.tag===3)hu(e,e,n);else for(;t!==null;){if(t.tag===3){hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=En(n,e),e=vf(t,e,1),t=_t(t,e,1),e=ve(),t!==null&&(Cr(t,1,e),Ee(t,e));break}}t=t.return}}function Rp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ue&n)===n&&(ne===4||ne===3&&(ue&130023424)===ue&&500>J()-Vs?Ht(e,0):As|=n),Ee(e,t)}function Df(e,t){t===0&&(e.mode&1?(t=Ir,Ir<<=1,!(Ir&130023424)&&(Ir=4194304)):t=1);var n=ve();e=ft(e,t),e!==null&&(Cr(e,t,n),Ee(e,n))}function Ip(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Df(e,n)}function $p(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Df(e,n)}var Ff;Ff=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Cp(e,t,n);Se=!!(e.flags&131072)}else Se=!1,W&&t.flags&1048576&&Bc(t,Eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oo(e,t),e=t.pendingProps;var o=wn(t,he.current);yn(t,n),o=Ms(null,t,r,e,o,n);var i=Rs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(i=!0,ko(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,js(t),o.updater=Xo,t.stateNode=o,o._reactInternals=t,Rl(t,r,e,n),t=Dl(null,t,r,!0,i,n)):(t.tag=0,W&&i&&Ss(t),ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Fp(r),e=We(r,e),o){case 0:t=$l(null,t,r,e,n);break e;case 1:t=iu(null,t,r,e,n);break e;case 11:t=ru(null,t,r,e,n);break e;case 14:t=ou(null,t,r,We(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),$l(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),iu(e,t,r,o,n);case 3:e:{if(Sf(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Xc(e,t),_o(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=En(Error(S(423)),t),t=lu(e,t,r,n,o);break e}else if(r!==o){o=En(Error(S(424)),t),t=lu(e,t,r,n,o);break e}else for(_e=Pt(t.stateNode.containerInfo.firstChild),je=t,W=!0,Ye=null,n=Qc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===o){t=dt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return Kc(t),e===null&&Tl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Pl(r,o)?l=null:i!==null&&Pl(r,i)&&(t.flags|=32),wf(e,t),ye(e,t,l,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return kf(e,t,n);case 4:return zs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),ru(e,t,r,o,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,B(No,r._currentValue),r._currentValue=l,i!==null)if(Ze(i.value,l)){if(i.children===o.children&&!ke.current){t=dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=at(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var y=c.pending;y===null?a.next=a:(a.next=y.next,y.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ll(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ll(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,yn(t,n),o=Ae(o),r=r(o),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,o=We(r,t.pendingProps),o=We(r.type,o),ou(e,t,r,o,n);case 15:return gf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),oo(e,t),t.tag=1,Ce(r)?(e=!0,ko(t)):e=!1,yn(t,n),hf(t,r,o),Rl(t,r,o,n),Dl(null,t,r,!0,e,n);case 19:return Cf(e,t,n);case 22:return xf(e,t,n)}throw Error(S(156,t.tag))};function Af(e,t){return fc(e,t)}function Dp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new Dp(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fp(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===us)return 11;if(e===cs)return 14}return 2}function Ot(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function so(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ws(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case en:return Wt(n.children,o,i,t);case as:l=8,o|=8;break;case ol:return e=$e(12,n,t,o|2),e.elementType=ol,e.lanes=i,e;case il:return e=$e(13,n,t,o),e.elementType=il,e.lanes=i,e;case ll:return e=$e(19,n,t,o),e.elementType=ll,e.lanes=i,e;case Ku:return Go(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yu:l=10;break e;case Xu:l=9;break e;case us:l=11;break e;case cs:l=14;break e;case yt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=$e(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Wt(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function Go(e,t,n,r){return e=$e(22,e,r,t),e.elementType=Ku,e.lanes=n,e.stateNode={isHidden:!1},e}function Ji(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function bi(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ap(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Li(0),this.expirationTimes=Li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Li(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qs(e,t,n,r,o,i,l,s,a){return e=new Ap(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=$e(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},js(i),e}function Vp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vf(e){if(!e)return Lt;e=e._reactInternals;e:{if(Jt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ce(n))return Ac(e,n,t)}return t}function Bf(e,t,n,r,o,i,l,s,a){return e=Qs(n,r,!0,e,o,i,l,s,a),e.context=Vf(null),n=e.current,r=ve(),o=zt(n),i=at(r,o),i.callback=t??null,_t(n,i,o),e.current.lanes=o,Cr(e,o,r),Ee(e,r),e}function Jo(e,t,n,r){var o=t.current,i=ve(),l=zt(o);return n=Vf(n),t.context===null?t.context=n:t.pendingContext=n,t=at(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(o,t,l),e!==null&&(Ke(e,o,l,i),to(e,o,l)),l}function Io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ys(e,t){yu(e,t),(e=e.alternate)&&yu(e,t)}function Bp(){return null}var Uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xs(e){this._internalRoot=e}bo.prototype.render=Xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Jo(e,t,null,null)};bo.prototype.unmount=Xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){Jo(null,e,null,null)}),t[ct]=null}};function bo(e){this._internalRoot=e}bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&wc(e)}};function Ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vu(){}function Up(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Io(l);i.call(c)}}var l=Bf(t,r,e,0,null,!1,!1,"",vu);return e._reactRootContainer=l,e[ct]=l.current,ur(e.nodeType===8?e.parentNode:e),Zt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Io(a);s.call(c)}}var a=Qs(e,0,!1,null,null,!1,!1,"",vu);return e._reactRootContainer=a,e[ct]=a.current,ur(e.nodeType===8?e.parentNode:e),Zt(function(){Jo(t,a,n,r)}),a}function ei(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Io(l);s.call(a)}}Jo(t,l,e,o)}else l=Up(n,t,e,o,r);return Io(l)}yc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(ps(t,n|1),Ee(t,J()),!(I&6)&&(Nn=J()+500,It()))}break;case 13:Zt(function(){var r=ft(e,1);if(r!==null){var o=ve();Ke(r,e,1,o)}}),Ys(e,1)}};ms=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ve();Ke(t,e,134217728,n)}Ys(e,134217728)}};vc=function(e){if(e.tag===13){var t=zt(e),n=ft(e,t);if(n!==null){var r=ve();Ke(n,e,t,r)}Ys(e,t)}};gc=function(){return F};xc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};yl=function(e,t,n){switch(t){case"input":if(ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Wo(r);if(!o)throw Error(S(90));Gu(r),ul(r,o)}}}break;case"textarea":bu(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}};ic=Bs;lc=Zt;var Hp={usingClientEntryPoint:!1,Events:[Nr,on,Wo,rc,oc,Bs]},Vn={findFiberByHostInstance:Vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wp={bundleType:Vn.bundleType,version:Vn.version,rendererPackageName:Vn.rendererPackageName,rendererConfig:Vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uc(e),e===null?null:e.stateNode},findFiberByHostInstance:Vn.findFiberByHostInstance||Bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{Vo=Yr.inject(Wp),tt=Yr}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hp;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ks(t))throw Error(S(200));return Vp(e,t,null,n)};Te.createRoot=function(e,t){if(!Ks(e))throw Error(S(299));var n=!1,r="",o=Uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qs(e,1,!1,null,null,n,!1,r,o),e[ct]=t.current,ur(e.nodeType===8?e.parentNode:e),new Xs(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=uc(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Zt(e)};Te.hydrate=function(e,t,n){if(!qo(t))throw Error(S(200));return ei(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Ks(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Uf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,o,!1,i,l),e[ct]=t.current,ur(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new bo(t)};Te.render=function(e,t,n){if(!qo(t))throw Error(S(200));return ei(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!qo(e))throw Error(S(40));return e._reactRootContainer?(Zt(function(){ei(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Te.unstable_batchedUpdates=Bs;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ei(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function Hf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hf)}catch(e){console.error(e)}}Hf(),Uu.exports=Te;var Qp=Uu.exports,gu=Qp;nl.createRoot=gu.createRoot,nl.hydrateRoot=gu.hydrateRoot;var Wf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xu=De.createContext&&De.createContext(Wf),Yp=["attr","size","title"];function Xp(e,t){if(e==null)return{};var n=Kp(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Kp(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$o.apply(this,arguments)}function wu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Do(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wu(Object(n),!0).forEach(function(r){Zp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zp(e,t,n){return t=Gp(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gp(e){var t=Jp(e,"string");return typeof t=="symbol"?t:t+""}function Jp(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qf(e){return e&&e.map((t,n)=>De.createElement(t.tag,Do({key:n},t.attr),Qf(t.child)))}function mt(e){return t=>De.createElement(bp,$o({attr:Do({},e.attr)},t),Qf(e.child))}function bp(e){var t=n=>{var{attr:r,size:o,title:i}=e,l=Xp(e,Yp),s=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),De.createElement("svg",$o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:Do(Do({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&De.createElement("title",null,i),e.children)};return xu!==void 0?De.createElement(xu.Consumer,null,n=>t(n)):t(Wf)}function qi(e){return mt({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,118.31V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V118.31h0A191.14,191.14,0,0,0,128,144,191.08,191.08,0,0,0,224,118.31Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112ZM232,72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8ZM40,72v41.62A184.07,184.07,0,0,0,128,136a184,184,0,0,0,88-22.39V72ZM216,200V131.63A200.25,200.25,0,0,1,128,152a200.19,200.19,0,0,1-88-20.36V200H216Z"},child:[]}]})(e)}function Su(e){return mt({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07L128,160Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"},child:[]}]})(e)}function qp(e){return mt({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M108,112a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H112A4,4,0,0,1,108,112ZM228,72V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V72A12,12,0,0,1,40,60H84V48a20,20,0,0,1,20-20h48a20,20,0,0,1,20,20V60h44A12,12,0,0,1,228,72ZM92,60h72V48a12,12,0,0,0-12-12H104A12,12,0,0,0,92,48ZM36,72v44a188,188,0,0,0,92,24,188,188,0,0,0,92-24V72a4,4,0,0,0-4-4H40A4,4,0,0,0,36,72ZM220,200V125.1A196.06,196.06,0,0,1,128,148a196,196,0,0,1-92-22.9V200a4,4,0,0,0,4,4H216A4,4,0,0,0,220,200Z"},child:[]}]})(e)}function e1(e){return mt({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M210.83,69.17l-40-40A4,4,0,0,0,168,28H88A12,12,0,0,0,76,40V60H56A12,12,0,0,0,44,72V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V196h20a12,12,0,0,0,12-12V72A4,4,0,0,0,210.83,69.17ZM172,216a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h78.34L172,105.66Zm32-32a4,4,0,0,1-4,4H180V104a4,4,0,0,0-1.17-2.83l-40-40A4,4,0,0,0,136,60H84V40a4,4,0,0,1,4-4h78.34L204,73.66Zm-64-32a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h48A4,4,0,0,1,140,152Zm0,32a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h48A4,4,0,0,1,140,184Z"},child:[]}]})(e)}function t1(e){return mt({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z"},child:[]}]})(e)}function n1(e){return mt({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"},child:[]}]})(e)}function r1({setDarkMode:e,darkMode:t}){console.log(t);const[n,r]=T.useState(!1),[o,i]=T.useState(!1),l=()=>{r(!n)};return m.jsx("div",{className:"dark:shadow-black md:flex flex-col md:flex-row md:min-h-screen fixed lg:w-[256px] w-full z-10",children:m.jsxs("div",{onClick:()=>i(!1),className:"flex flex-col w-full md:w-64 text-gray-700 bg-white flex-shrink-0 shadow-xl","x-data":"{ open: false }",children:[m.jsxs("div",{className:"dark:bg-slate-900 flex-shrink-0 pl-8 pr-2 py-4 flex flex-row items-center justify-between",children:[m.jsxs("div",{className:"flex flex-col w-full",children:[m.jsxs("label",{className:"switch self-end",children:[m.jsx("input",{type:"checkbox",onChange:()=>e(!t),checked:t}),m.jsx("span",{className:"slider"})]}),m.jsxs("a",{href:"#",className:"dark:text-slate-50 text-[50px] font-bold text-blue-900 lg:mb-36 mb-0",children:["kf",m.jsx("span",{className:"text-blue-500",children:"."})]})]}),m.jsx("button",{className:"rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline",onClick:l,children:m.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"w-6 h-6",children:n?m.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}):m.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",clipRule:"evenodd"})})})]}),m.jsxs("nav",{className:`dark:bg-slate-900 flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto ${n?"block":"hidden"}`,children:[m.jsxs("a",{href:"#home",className:"dark:text-slate-50 dark:hover:text-blue-500 flex items-center px-4 py-2 text-blue-900 hover:text-blue-500",children:[m.jsx(t1,{className:"text-[25px] mr-2 font-extralight"})," Início"]}),m.jsxs("a",{href:"#about",className:"dark:text-slate-50 dark:hover:text-blue-500 flex items-center px-4 py-2 mt-2 text-blue-900 hover:text-blue-500",children:[m.jsx(n1,{className:"text-[25px] mr-2"})," Sobre"]}),m.jsxs("a",{href:"#experience",className:"dark:text-slate-50 dark:hover:text-blue-500 flex items-center px-4 py-2 mt-2 text-blue-900 hover:text-blue-500",children:[m.jsx(qp,{className:"text-[25px] mr-2"})," Experiências"]}),m.jsxs("a",{href:"#works",className:"dark:text-slate-50 dark:hover:text-blue-500 flex items-center px-4 py-2 mt-2 text-blue-900 hover:text-blue-500",children:[m.jsx(e1,{className:"text-[25px] mr-2"})," Projetos"]})]})]})})}function o1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function i1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var l1=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(i1(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=o1(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),pe="-ms-",Fo="-moz-",$="-webkit-",Yf="comm",Zs="rule",Gs="decl",s1="@import",Xf="@keyframes",a1="@layer",u1=Math.abs,ti=String.fromCharCode,c1=Object.assign;function f1(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function Kf(e){return e.trim()}function d1(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Zl(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function gr(e,t,n){return e.slice(t,n)}function be(e){return e.length}function Js(e){return e.length}function Xr(e,t){return t.push(e),e}function p1(e,t){return e.map(t).join("")}var ni=1,Pn=1,Zf=0,Ne=0,b=0,On="";function ri(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ni,column:Pn,length:l,return:""}}function Bn(e,t){return c1(ri("",null,null,"",null,null,0),e,{length:-e.length},t)}function m1(){return b}function h1(){return b=Ne>0?ae(On,--Ne):0,Pn--,b===10&&(Pn=1,ni--),b}function ze(){return b=Ne<Zf?ae(On,Ne++):0,Pn++,b===10&&(Pn=1,ni++),b}function rt(){return ae(On,Ne)}function ao(){return Ne}function _r(e,t){return gr(On,e,t)}function xr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gf(e){return ni=Pn=1,Zf=be(On=e),Ne=0,[]}function Jf(e){return On="",e}function uo(e){return Kf(_r(Ne-1,Gl(e===91?e+2:e===40?e+1:e)))}function y1(e){for(;(b=rt())&&b<33;)ze();return xr(e)>2||xr(b)>3?"":" "}function v1(e,t){for(;--t&&ze()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return _r(e,ao()+(t<6&&rt()==32&&ze()==32))}function Gl(e){for(;ze();)switch(b){case e:return Ne;case 34:case 39:e!==34&&e!==39&&Gl(b);break;case 40:e===41&&Gl(e);break;case 92:ze();break}return Ne}function g1(e,t){for(;ze()&&e+b!==57;)if(e+b===84&&rt()===47)break;return"/*"+_r(t,Ne-1)+"*"+ti(e===47?e:ze())}function x1(e){for(;!xr(rt());)ze();return _r(e,Ne)}function w1(e){return Jf(co("",null,null,null,[""],e=Gf(e),0,[0],e))}function co(e,t,n,r,o,i,l,s,a){for(var c=0,y=0,h=l,p=0,w=0,x=0,v=1,z=1,f=1,u=0,d="",g=o,E=i,N=r,C=d;z;)switch(x=u,u=ze()){case 40:if(x!=108&&ae(C,h-1)==58){Zl(C+=D(uo(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:C+=uo(u);break;case 9:case 10:case 13:case 32:C+=y1(x);break;case 92:C+=v1(ao()-1,7);continue;case 47:switch(rt()){case 42:case 47:Xr(S1(g1(ze(),ao()),t,n),a);break;default:C+="/"}break;case 123*v:s[c++]=be(C)*f;case 125*v:case 59:case 0:switch(u){case 0:case 125:z=0;case 59+y:f==-1&&(C=D(C,/\f/g,"")),w>0&&be(C)-h&&Xr(w>32?Cu(C+";",r,n,h-1):Cu(D(C," ","")+";",r,n,h-2),a);break;case 59:C+=";";default:if(Xr(N=ku(C,t,n,c,y,o,s,d,g=[],E=[],h),i),u===123)if(y===0)co(C,t,N,N,g,i,h,s,E);else switch(p===99&&ae(C,3)===110?100:p){case 100:case 108:case 109:case 115:co(e,N,N,r&&Xr(ku(e,N,N,0,0,o,s,d,o,g=[],h),E),o,E,h,s,r?g:E);break;default:co(C,N,N,N,[""],E,0,s,E)}}c=y=w=0,v=f=1,d=C="",h=l;break;case 58:h=1+be(C),w=x;default:if(v<1){if(u==123)--v;else if(u==125&&v++==0&&h1()==125)continue}switch(C+=ti(u),u*v){case 38:f=y>0?1:(C+="\f",-1);break;case 44:s[c++]=(be(C)-1)*f,f=1;break;case 64:rt()===45&&(C+=uo(ze())),p=rt(),y=h=be(d=C+=x1(ao())),u++;break;case 45:x===45&&be(C)==2&&(v=0)}}return i}function ku(e,t,n,r,o,i,l,s,a,c,y){for(var h=o-1,p=o===0?i:[""],w=Js(p),x=0,v=0,z=0;x<r;++x)for(var f=0,u=gr(e,h+1,h=u1(v=l[x])),d=e;f<w;++f)(d=Kf(v>0?p[f]+" "+u:D(u,/&\f/g,p[f])))&&(a[z++]=d);return ri(e,t,n,o===0?Zs:s,a,c,y)}function S1(e,t,n){return ri(e,t,n,Yf,ti(m1()),gr(e,2,-2),0)}function Cu(e,t,n,r){return ri(e,t,n,Gs,gr(e,0,r),gr(e,r+1,-1),r)}function gn(e,t){for(var n="",r=Js(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function k1(e,t,n,r){switch(e.type){case a1:if(e.children.length)break;case s1:case Gs:return e.return=e.return||e.value;case Yf:return"";case Xf:return e.return=e.value+"{"+gn(e.children,r)+"}";case Zs:e.value=e.props.join(",")}return be(n=gn(e.children,r))?e.return=e.value+"{"+n+"}":""}function C1(e){var t=Js(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function E1(e){return function(t){t.root||(t=t.return)&&e(t)}}function N1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var P1=function(t,n,r){for(var o=0,i=0;o=i,i=rt(),o===38&&i===12&&(n[r]=1),!xr(i);)ze();return _r(t,Ne)},_1=function(t,n){var r=-1,o=44;do switch(xr(o)){case 0:o===38&&rt()===12&&(n[r]=1),t[r]+=P1(Ne-1,n,r);break;case 2:t[r]+=uo(o);break;case 4:if(o===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ti(o)}while(o=ze());return t},j1=function(t,n){return Jf(_1(Gf(t),n))},Eu=new WeakMap,z1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Eu.get(r))&&!o){Eu.set(t,!0);for(var i=[],l=j1(n,i),s=r.props,a=0,c=0;a<l.length;a++)for(var y=0;y<s.length;y++,c++)t.props[c]=i[a]?l[a].replace(/&\f/g,s[y]):s[y]+" "+l[a]}}},O1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function bf(e,t){switch(f1(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Fo+e+pe+e+e;case 6828:case 4268:return $+e+pe+e+e;case 6165:return $+e+pe+"flex-"+e+e;case 5187:return $+e+D(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return $+e+pe+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return $+e+pe+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+pe+D(e,"shrink","negative")+e;case 5292:return $+e+pe+D(e,"basis","preferred-size")+e;case 6060:return $+"box-"+D(e,"-grow","")+$+e+pe+D(e,"grow","positive")+e;case 4554:return $+D(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(be(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Fo+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zl(e,"stretch")?bf(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ae(e,t+1)!==115)break;case 6444:switch(ae(e,be(e)-3-(~Zl(e,"!important")&&10))){case 107:return D(e,":",":"+$)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ae(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+pe+"$2box$3")+e}break;case 5936:switch(ae(e,t+11)){case 114:return $+e+pe+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+pe+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+pe+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+pe+e+e}return e}var T1=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Gs:t.return=bf(t.value,t.length);break;case Xf:return gn([Bn(t,{value:D(t.value,"@","@"+$)})],o);case Zs:if(t.length)return p1(t.props,function(i){switch(d1(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return gn([Bn(t,{props:[D(i,/:(read-\w+)/,":"+Fo+"$1")]})],o);case"::placeholder":return gn([Bn(t,{props:[D(i,/:(plac\w+)/,":"+$+"input-$1")]}),Bn(t,{props:[D(i,/:(plac\w+)/,":"+Fo+"$1")]}),Bn(t,{props:[D(i,/:(plac\w+)/,pe+"input-$1")]})],o)}return""})}},L1=[T1],M1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var z=v.getAttribute("data-emotion");z.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||L1,i={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var z=v.getAttribute("data-emotion").split(" "),f=1;f<z.length;f++)i[z[f]]=!0;s.push(v)});var a,c=[z1,O1];{var y,h=[k1,E1(function(v){y.insert(v)})],p=C1(c.concat(o,h)),w=function(z){return gn(w1(z),p)};a=function(z,f,u,d){y=u,w(z?z+"{"+f.styles+"}":f.styles),d&&(x.inserted[f.name]=!0)}}var x={key:n,sheet:new l1({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return x.sheet.hydrate(s),x},qf={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le=typeof Symbol=="function"&&Symbol.for,bs=le?Symbol.for("react.element"):60103,qs=le?Symbol.for("react.portal"):60106,oi=le?Symbol.for("react.fragment"):60107,ii=le?Symbol.for("react.strict_mode"):60108,li=le?Symbol.for("react.profiler"):60114,si=le?Symbol.for("react.provider"):60109,ai=le?Symbol.for("react.context"):60110,ea=le?Symbol.for("react.async_mode"):60111,ui=le?Symbol.for("react.concurrent_mode"):60111,ci=le?Symbol.for("react.forward_ref"):60112,fi=le?Symbol.for("react.suspense"):60113,R1=le?Symbol.for("react.suspense_list"):60120,di=le?Symbol.for("react.memo"):60115,pi=le?Symbol.for("react.lazy"):60116,I1=le?Symbol.for("react.block"):60121,$1=le?Symbol.for("react.fundamental"):60117,D1=le?Symbol.for("react.responder"):60118,F1=le?Symbol.for("react.scope"):60119;function Me(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case bs:switch(e=e.type,e){case ea:case ui:case oi:case li:case ii:case fi:return e;default:switch(e=e&&e.$$typeof,e){case ai:case ci:case pi:case di:case si:return e;default:return t}}case qs:return t}}}function ed(e){return Me(e)===ui}A.AsyncMode=ea;A.ConcurrentMode=ui;A.ContextConsumer=ai;A.ContextProvider=si;A.Element=bs;A.ForwardRef=ci;A.Fragment=oi;A.Lazy=pi;A.Memo=di;A.Portal=qs;A.Profiler=li;A.StrictMode=ii;A.Suspense=fi;A.isAsyncMode=function(e){return ed(e)||Me(e)===ea};A.isConcurrentMode=ed;A.isContextConsumer=function(e){return Me(e)===ai};A.isContextProvider=function(e){return Me(e)===si};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===bs};A.isForwardRef=function(e){return Me(e)===ci};A.isFragment=function(e){return Me(e)===oi};A.isLazy=function(e){return Me(e)===pi};A.isMemo=function(e){return Me(e)===di};A.isPortal=function(e){return Me(e)===qs};A.isProfiler=function(e){return Me(e)===li};A.isStrictMode=function(e){return Me(e)===ii};A.isSuspense=function(e){return Me(e)===fi};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===oi||e===ui||e===li||e===ii||e===fi||e===R1||typeof e=="object"&&e!==null&&(e.$$typeof===pi||e.$$typeof===di||e.$$typeof===si||e.$$typeof===ai||e.$$typeof===ci||e.$$typeof===$1||e.$$typeof===D1||e.$$typeof===F1||e.$$typeof===I1)};A.typeOf=Me;qf.exports=A;var A1=qf.exports,td=A1,V1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},B1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nd={};nd[td.ForwardRef]=V1;nd[td.Memo]=B1;var U1=!0;function rd(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var ta=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||U1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},od=function(t,n,r){ta(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function H1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var W1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Q1=/[A-Z]|^ms/g,Y1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,id=function(t){return t.charCodeAt(1)===45},Nu=function(t){return t!=null&&typeof t!="boolean"},el=N1(function(e){return id(e)?e:e.replace(Q1,"-$&").toLowerCase()}),Pu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Y1,function(r,o,i){return qe={name:o,styles:i,next:qe},o})}return W1[t]!==1&&!id(t)&&typeof n=="number"&&n!==0?n+"px":n};function wr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return qe={name:n.name,styles:n.styles,next:qe},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)qe={name:r.name,styles:r.styles,next:qe},r=r.next;var o=n.styles+";";return o}return X1(e,t,n)}case"function":{if(e!==void 0){var i=qe,l=n(e);return qe=i,wr(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function X1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=wr(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Nu(l)&&(r+=el(i)+":"+Pu(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Nu(l[s])&&(r+=el(i)+":"+Pu(i,l[s])+";");else{var a=wr(e,t,l);switch(i){case"animation":case"animationName":{r+=el(i)+":"+a+";";break}default:r+=i+"{"+a+"}"}}}return r}var _u=/label:\s*([^\s;\n{]+)\s*(;|$)/g,qe,na=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";qe=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=wr(r,n,l)):i+=l[0];for(var s=1;s<t.length;s++)i+=wr(r,n,t[s]),o&&(i+=l[s]);_u.lastIndex=0;for(var a="",c;(c=_u.exec(i))!==null;)a+="-"+c[1];var y=H1(i)+a;return{name:y,styles:i,next:qe}},K1=function(t){return t()},Z1=da.useInsertionEffect?da.useInsertionEffect:!1,ld=Z1||K1,ra={}.hasOwnProperty,sd=T.createContext(typeof HTMLElement<"u"?M1({key:"css"}):null);sd.Provider;var ad=function(t){return T.forwardRef(function(n,r){var o=T.useContext(sd);return t(n,o,r)})},ud=T.createContext({}),Jl="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",G1=function(t,n){var r={};for(var o in n)ra.call(n,o)&&(r[o]=n[o]);return r[Jl]=t,r},J1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return ta(n,r,o),ld(function(){return od(n,r,o)}),null},b1=ad(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Jl],i=[r],l="";typeof e.className=="string"?l=rd(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var s=na(i,void 0,T.useContext(ud));l+=t.key+"-"+s.name;var a={};for(var c in e)ra.call(e,c)&&c!=="css"&&c!==Jl&&(a[c]=e[c]);return a.ref=n,a.className=l,T.createElement(T.Fragment,null,T.createElement(J1,{cache:t,serialized:s,isStringTag:typeof o=="string"}),T.createElement(o,a))}),q1=b1,em=m.Fragment;function ee(e,t,n){return ra.call(t,"css")?m.jsx(q1,G1(e,t),n):m.jsx(e,t,n)}function cd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return na(t)}var k=function(){var t=cd.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},tm=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var s in i)i[s]&&s&&(l&&(l+=" "),l+=s)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function nm(e,t,n){var r=[],o=rd(e,r,n);return r.length<2?n:o+t(r)}var rm=function(t){var n=t.cache,r=t.serializedArr;return ld(function(){for(var o=0;o<r.length;o++)od(n,r[o],!1)}),null},tl=ad(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,y=new Array(c),h=0;h<c;h++)y[h]=arguments[h];var p=na(y,t.registered);return r.push(p),ta(t,p,!1),t.key+"-"+p.name},i=function(){for(var c=arguments.length,y=new Array(c),h=0;h<c;h++)y[h]=arguments[h];return nm(t.registered,o,tm(y))},l={css:o,cx:i,theme:T.useContext(ud)},s=e.children(l);return n=!0,T.createElement(T.Fragment,null,T.createElement(rm,{cache:t,serializedArr:r}),s)}),om=Object.defineProperty,im=(e,t,n)=>t in e?om(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kr=(e,t,n)=>(im(e,typeof t!="symbol"?t+"":t,n),n),bl=new Map,Zr=new WeakMap,ju=0,lm=void 0;function sm(e){return e?(Zr.has(e)||(ju+=1,Zr.set(e,ju.toString())),Zr.get(e)):"0"}function am(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?sm(e.root):e[t]}`).toString()}function um(e){const t=am(e);let n=bl.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(s=>{var a;const c=s.isIntersecting&&o.some(y=>s.intersectionRatio>=y);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(y=>{y(c,s)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},bl.set(t,n)}return n}function fd(e,t,n={},r=lm){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:i,elements:l}=um(n),s=l.get(e)||[];return l.has(e)||l.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),bl.delete(o))}}function cm(e){return typeof e.children!="function"}var zu=class extends T.Component{constructor(e){super(e),Kr(this,"node",null),Kr(this,"_unobserveCb",null),Kr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Kr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),cm(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=fd(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:x}=this.state;return e({inView:w,entry:x,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:s,trackVisibility:a,delay:c,initialInView:y,fallbackInView:h,...p}=this.props;return T.createElement(t||"div",{ref:this.handleNode,...p},e)}};function dd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:s,fallbackInView:a,onChange:c}={}){var y;const[h,p]=T.useState(null),w=T.useRef(),[x,v]=T.useState({inView:!!s,entry:void 0});w.current=c,T.useEffect(()=>{if(l||!h)return;let d;return d=fd(h,(g,E)=>{v({inView:g,entry:E}),w.current&&w.current(g,E),E.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,h,o,r,i,l,n,a,t]);const z=(y=x.entry)==null?void 0:y.target,f=T.useRef();!h&&z&&!i&&!l&&f.current!==z&&(f.current=z,v({inView:!!s,entry:void 0}));const u=[p,x.inView,x.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var pd={exports:{}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),ia=Symbol.for("react.portal"),mi=Symbol.for("react.fragment"),hi=Symbol.for("react.strict_mode"),yi=Symbol.for("react.profiler"),vi=Symbol.for("react.provider"),gi=Symbol.for("react.context"),fm=Symbol.for("react.server_context"),xi=Symbol.for("react.forward_ref"),wi=Symbol.for("react.suspense"),Si=Symbol.for("react.suspense_list"),ki=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),dm=Symbol.for("react.offscreen"),md;md=Symbol.for("react.module.reference");function Be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case oa:switch(e=e.type,e){case mi:case yi:case hi:case wi:case Si:return e;default:switch(e=e&&e.$$typeof,e){case fm:case gi:case xi:case Ci:case ki:case vi:return e;default:return t}}case ia:return t}}}V.ContextConsumer=gi;V.ContextProvider=vi;V.Element=oa;V.ForwardRef=xi;V.Fragment=mi;V.Lazy=Ci;V.Memo=ki;V.Portal=ia;V.Profiler=yi;V.StrictMode=hi;V.Suspense=wi;V.SuspenseList=Si;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return Be(e)===gi};V.isContextProvider=function(e){return Be(e)===vi};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===oa};V.isForwardRef=function(e){return Be(e)===xi};V.isFragment=function(e){return Be(e)===mi};V.isLazy=function(e){return Be(e)===Ci};V.isMemo=function(e){return Be(e)===ki};V.isPortal=function(e){return Be(e)===ia};V.isProfiler=function(e){return Be(e)===yi};V.isStrictMode=function(e){return Be(e)===hi};V.isSuspense=function(e){return Be(e)===wi};V.isSuspenseList=function(e){return Be(e)===Si};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===mi||e===yi||e===hi||e===wi||e===Si||e===dm||typeof e=="object"&&e!==null&&(e.$$typeof===Ci||e.$$typeof===ki||e.$$typeof===vi||e.$$typeof===gi||e.$$typeof===xi||e.$$typeof===md||e.getModuleId!==void 0)};V.typeOf=Be;pd.exports=V;var pm=pd.exports;k`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;k`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;k`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;k`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;k`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;k`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const mm=k`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,hm=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ym=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vm=k`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gm=k`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,la=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xm=k`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wm=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sm=k`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,km=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Cm=k`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Em=k`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Nm=k`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Pm({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=la,iterationCount:o=1}){return cd`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function _m(e){return e==null}function jm(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function hd(e,t){return n=>n?e():t()}function Sr(e){return hd(e,()=>null)}function ql(e){return Sr(()=>({opacity:0}))(e)}const sa=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=la,triggerOnce:s=!1,className:a,style:c,childClassName:y,childStyle:h,children:p,onVisibilityChange:w}=e,x=T.useMemo(()=>Pm({keyframes:l,duration:o}),[o,l]);return _m(p)?null:jm(p)?ee(Om,{...e,animationStyles:x,children:String(p)}):pm.isFragment(p)?ee(yd,{...e,animationStyles:x}):ee(em,{children:T.Children.map(p,(v,z)=>{if(!T.isValidElement(v))return null;const f=r+(t?z*o*n:0);switch(v.type){case"ol":case"ul":return ee(tl,{children:({cx:u})=>ee(v.type,{...v.props,className:u(a,v.props.className),style:Object.assign({},c,v.props.style),children:ee(sa,{...e,children:v.props.children})})});case"li":return ee(zu,{threshold:i,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>ee(tl,{children:({cx:g})=>ee(v.type,{...v.props,ref:d,className:g(y,v.props.className),css:Sr(()=>x)(u),style:Object.assign({},h,v.props.style,ql(!u),{animationDelay:f+"ms"})})})});default:return ee(zu,{threshold:i,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>ee("div",{ref:d,className:a,css:Sr(()=>x)(u),style:Object.assign({},c,ql(!u),{animationDelay:f+"ms"}),children:ee(tl,{children:({cx:g})=>ee(v.type,{...v.props,className:g(y,v.props.className),style:Object.assign({},h,v.props.style)})})})})}})})},zm={display:"inline-block",whiteSpace:"pre"},Om=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:s=!1,className:a,style:c,children:y,onVisibilityChange:h}=e,{ref:p,inView:w}=dd({triggerOnce:s,threshold:l,onChange:h});return hd(()=>ee("div",{ref:p,className:a,style:Object.assign({},c,zm),children:y.split("").map((x,v)=>ee("span",{css:Sr(()=>t)(w),style:{animationDelay:o+v*i*r+"ms"},children:x},v))}),()=>ee(yd,{...e,children:y}))(n)},yd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:s}=e,{ref:a,inView:c}=dd({triggerOnce:r,threshold:n,onChange:s});return ee("div",{ref:a,className:o,css:Sr(()=>t)(c),style:Object.assign({},i,ql(!c)),children:l})},Tm=k`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,Lm=k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Mm=k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Rm=k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Im=k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$m=k`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Dm=k`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Fm=k`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Am=k`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Vm=k`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;function Bm(e,t){switch(t){case"down":return e?Dm:Lm;case"left":return e?Fm:Mm;case"right":return e?Am:Rm;case"up":return e?Vm:Im;default:return e?$m:Tm}}const Um=e=>{const{direction:t,reverse:n=!1,...r}=e,o=T.useMemo(()=>Bm(n,t),[t,n]);return ee(sa,{keyframes:o,...r})},Hm=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Wm=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Qm=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ym=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Xm=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Km=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Zm=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Gm=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Jm=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,bm=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,qm=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,eh=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,th=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function nh(e,t,n){switch(n){case"bottom-left":return t?Wm:hm;case"bottom-right":return t?Qm:ym;case"down":return e?t?Xm:gm:t?Ym:vm;case"left":return e?t?Zm:xm:t?Km:la;case"right":return e?t?Jm:Sm:t?Gm:wm;case"top-left":return t?bm:km;case"top-right":return t?qm:Cm;case"up":return e?t?th:Nm:t?eh:Em;default:return t?Hm:mm}}const gt=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=T.useMemo(()=>nh(t,r,n),[t,n,r]);return ee(sa,{keyframes:i,...o})};k`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;k`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;k`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;k`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;k`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;k`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;k`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;k`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function rh(e){return mt({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function oh(e){return mt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function ih(e){return mt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function es(){return es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}var lh={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},sh=new(function(){function e(){}var t=e.prototype;return t.load=function(n,r,o){if(n.el=typeof o=="string"?document.querySelector(o):o,n.options=es({},lh,r),n.isInput=n.el.tagName.toLowerCase()==="input",n.attr=n.options.attr,n.bindInputFocusEvents=n.options.bindInputFocusEvents,n.showCursor=!n.isInput&&n.options.showCursor,n.cursorChar=n.options.cursorChar,n.cursorBlinking=!0,n.elContent=n.attr?n.el.getAttribute(n.attr):n.el.textContent,n.contentType=n.options.contentType,n.typeSpeed=n.options.typeSpeed,n.startDelay=n.options.startDelay,n.backSpeed=n.options.backSpeed,n.smartBackspace=n.options.smartBackspace,n.backDelay=n.options.backDelay,n.fadeOut=n.options.fadeOut,n.fadeOutClass=n.options.fadeOutClass,n.fadeOutDelay=n.options.fadeOutDelay,n.isPaused=!1,n.strings=n.options.strings.map(function(c){return c.trim()}),n.stringsElement=typeof n.options.stringsElement=="string"?document.querySelector(n.options.stringsElement):n.options.stringsElement,n.stringsElement){n.strings=[],n.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var i=Array.prototype.slice.apply(n.stringsElement.children),l=i.length;if(l)for(var s=0;s<l;s+=1)n.strings.push(i[s].innerHTML.trim())}for(var a in n.strPos=0,n.currentElContent=this.getCurrentElContent(n),n.currentElContent&&n.currentElContent.length>0&&(n.strPos=n.currentElContent.length-1,n.strings.unshift(n.currentElContent)),n.sequence=[],n.strings)n.sequence[a]=a;n.arrayPos=0,n.stopNum=0,n.loop=n.options.loop,n.loopCount=n.options.loopCount,n.curLoop=0,n.shuffle=n.options.shuffle,n.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},n.typingComplete=!1,n.autoInsertCss=n.options.autoInsertCss,n.autoInsertCss&&(this.appendCursorAnimationCss(n),this.appendFadeOutAnimationCss(n))},t.getCurrentElContent=function(n){return n.attr?n.el.getAttribute(n.attr):n.isInput?n.el.value:n.contentType==="html"?n.el.innerHTML:n.el.textContent},t.appendCursorAnimationCss=function(n){var r="data-typed-js-cursor-css";if(n.showCursor&&!document.querySelector("["+r+"]")){var o=document.createElement("style");o.setAttribute(r,"true"),o.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(o)}},t.appendFadeOutAnimationCss=function(n){var r="data-typed-fadeout-js-css";if(n.fadeOut&&!document.querySelector("["+r+"]")){var o=document.createElement("style");o.setAttribute(r,"true"),o.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(o)}},e}()),Ou=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(n,r,o){if(o.contentType!=="html")return r;var i=n.substring(r).charAt(0);if(i==="<"||i==="&"){var l;for(l=i==="<"?">":";";n.substring(r+1).charAt(0)!==l&&!(1+ ++r>n.length););r++}return r},t.backSpaceHtmlChars=function(n,r,o){if(o.contentType!=="html")return r;var i=n.substring(r).charAt(0);if(i===">"||i===";"){var l;for(l=i===">"?"<":"&";n.substring(r-1).charAt(0)!==l&&!(--r<0););r--}return r},e}()),ah=function(){function e(n,r){sh.load(this,r,n),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(n){n===void 0&&(n=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,n&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var n=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){n.strPos===0?n.typewrite(n.strings[n.sequence[n.arrayPos]],n.strPos):n.backspace(n.strings[n.sequence[n.arrayPos]],n.strPos)},this.startDelay)},t.typewrite=function(n,r){var o=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),l=1;this.pause.status!==!0?this.timeout=setTimeout(function(){r=Ou.typeHtmlChars(n,r,o);var s=0,a=n.substring(r);if(a.charAt(0)==="^"&&/^\^\d+/.test(a)){var c=1;c+=(a=/\d+/.exec(a)[0]).length,s=parseInt(a),o.temporaryPause=!0,o.options.onTypingPaused(o.arrayPos,o),n=n.substring(0,r)+n.substring(r+c),o.toggleBlinking(!0)}if(a.charAt(0)==="`"){for(;n.substring(r+l).charAt(0)!=="`"&&(l++,!(r+l>n.length)););var y=n.substring(0,r),h=n.substring(y.length+1,r+l),p=n.substring(r+l+1);n=y+h+p,l--}o.timeout=setTimeout(function(){o.toggleBlinking(!1),r>=n.length?o.doneTyping(n,r):o.keepTyping(n,r,l),o.temporaryPause&&(o.temporaryPause=!1,o.options.onTypingResumed(o.arrayPos,o))},s)},i):this.setPauseStatus(n,r,!0)},t.keepTyping=function(n,r,o){r===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var i=n.substring(0,r+=o);this.replaceText(i),this.typewrite(n,r)},t.doneTyping=function(n,r){var o=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){o.backspace(n,r)},this.backDelay))},t.backspace=function(n,r){var o=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){r=Ou.backSpaceHtmlChars(n,r,o);var l=n.substring(0,r);if(o.replaceText(l),o.smartBackspace){var s=o.strings[o.arrayPos+1];o.stopNum=s&&l===s.substring(0,r)?r:0}r>o.stopNum?(r--,o.backspace(n,r)):r<=o.stopNum&&(o.arrayPos++,o.arrayPos===o.strings.length?(o.arrayPos=0,o.options.onLastStringBackspaced(),o.shuffleStringsIfNeeded(),o.begin()):o.typewrite(o.strings[o.sequence[o.arrayPos]],r))},i)}else this.setPauseStatus(n,r,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(n,r,o){this.pause.typewrite=o,this.pause.curString=n,this.pause.curStrPos=r},t.toggleBlinking=function(n){this.cursor&&(this.pause.status||this.cursorBlinking!==n&&(this.cursorBlinking=n,n?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(n){return Math.round(Math.random()*n/2)+n},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},t.initFadeOut=function(){var n=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){n.arrayPos++,n.replaceText(""),n.strings.length>n.arrayPos?n.typewrite(n.strings[n.sequence[n.arrayPos]],0):(n.typewrite(n.strings[0],0),n.arrayPos=0)},this.fadeOutDelay)},t.replaceText=function(n){this.attr?this.el.setAttribute(this.attr,n):this.isInput?this.el.value=n:this.contentType==="html"?this.el.innerHTML=n:this.el.textContent=n},t.bindFocusEvents=function(){var n=this;this.isInput&&(this.el.addEventListener("focus",function(r){n.stop()}),this.el.addEventListener("blur",function(r){n.el.value&&n.el.value.length!==0||n.start()}))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();const uh=T.memo(({style:e,className:t,typedRef:n,parseRef:r,stopped:o,children:i,startWhenVisible:l,...s})=>{const a=T.useRef(null),c=T.useMemo(()=>{var h;return[...Object.values(s).filter(p=>typeof p=="boolean"||typeof p=="number"||typeof p=="string"),(h=s.strings)==null?void 0:h.join(",")]},[s]);T.useEffect(()=>{const h=r&&r(a)||a.current,p=new ah(h,{...s});if((o||l)&&(p==null||p.stop()),l){const w=new IntersectionObserver(([x])=>{x.isIntersecting&&(p==null||p.start(),w.disconnect())});w.observe(h)}return n&&p&&n(p),()=>{p.destroy()}},c);const y=i?De.cloneElement(i,{ref:a}):De.createElement("span",{style:e,ref:a});return De.createElement("span",{style:e,className:t,"data-testid":"react-typed"},y)}),ch="/personal-portfolio/assets/brazil-icon-DXiK5huI.png",fh="/personal-portfolio/assets/usa-icon-_5kDnNTj.png";function dh(){return m.jsx(m.Fragment,{children:m.jsxs("section",{className:"h-[100vh] dark:bg-slate-950 flex flex-col items-center md:justify-center justify-start lg:pt-0 pt-60",id:"home",children:[m.jsx(Um,{duration:2e3,children:m.jsx("h1",{className:"text-[40px] dark:text-slate-50 text-blue-900 font-bold",children:"Kauan Felipe"})}),m.jsx("h2",{className:"mt-3 dark:text-slate-50",children:m.jsx(uh,{strings:["Desenvolvedor full stack júnior","C#",".Net Core","API REST","MySQL","JavaScript","React.js"],typeSpeed:40,backSpeed:50,loop:!0})}),m.jsxs("div",{className:"flex items-center gap-6 text-blue-500 mt-5",children:[m.jsx("a",{href:"mailto:kauan_falima@hotmail.com",target:"_blank",children:m.jsx(ih,{className:"text-[30px] hover:text-blue-800 dark:hover:text-slate-50 duration-500"})}),m.jsx("a",{href:"https://github.com/kauanfelipe96",target:"_blank",children:m.jsx(rh,{className:"text-[30px] dark:hover:text-slate-50 hover:text-black duration-500",alt:"Link para perfil no GitHub"})}),m.jsx("a",{href:"https://www.linkedin.com/in/kauanfelipe96/",target:"_blank",children:m.jsx(oh,{className:"text-[30px] hover:text-blue-800 dark:hover:text-slate-50 duration-500",alt:"Link para perfil do LinkedIn"})})]}),m.jsx("a",{href:"/personal-portfolio/curriculum.pdf",target:"_blank",rel:"noopener noreferrer",children:m.jsx("button",{className:"bg-blue-500 text-white font-bold rounded-full px-8 py-2 text-center mt-5 hover:scale-110 duration-500 hover:bg-blue-700",children:"Curriculum Vitae"})}),m.jsxs("div",{className:"flex gap-5 mt-5",children:[m.jsx("img",{src:ch,alt:"bandeira do Brasil",className:"w-[50px] hover:scale-125 duration-500 rounded-md"}),m.jsx("img",{src:fh,alt:"bandeira",className:"w-[50px] hover:scale-125 duration-500 rounded-md"})]}),m.jsx("a",{href:"#about",className:"absolute bottom-5",children:m.jsxs("div",{className:"flex flex-col items-center",children:[m.jsx("p",{className:"mb-3 text-blue-500 font-light",children:"Ver mais"}),m.jsx("div",{className:"scroll-down",children:m.jsx("div",{className:"mousey",children:m.jsx("div",{className:"scroller"})})})]})})]})})}const ph="/personal-portfolio/assets/persona-D_YSKL3K.png";function mh(){return m.jsxs("section",{className:"dark:bg-slate-950 lg:px-20 px-5 py-20",id:"about",children:[m.jsx(gt,{direction:"left",duration:2e3,children:m.jsx("h2",{className:"dark:bg-slate-950 dark:text-slate-50 text-[35px] text-blue-900 font-bold",children:"Sobre mim"})}),m.jsxs("div",{className:"flex xl:flex-row flex-col items-center justify-between gap-6 mt-5",children:[m.jsx("img",{src:ph,alt:"Avatar",className:"w-[200px] h-[200px]"}),m.jsx(gt,{duration:2e3,triggerOnce:!0,children:m.jsxs("div",{className:"dark:border-blue-500 dark:border dark:bg-slate-950 dark:text-slate-50 w-full bg-white rounded-xl py-10 px-8 shadow-xl flex xl:flex-row flex-col justify-between gap-10",children:[m.jsx("p",{className:"dark:bg-slate-950 dark:text-slate-50 text-blue-900 xl:w-[50%] w-[100%] text-justify",children:"Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Cursando Análise e Desenvolvimento de Sistemas e com experiência prática em diversas empresas, estou comprometido em impulsionar o sucesso dos projetos em que me envolvo."}),m.jsxs("div",{className:"xl:w-[50%] w-[100%]",children:[m.jsxs("div",{className:"mb-7",children:[m.jsx("h3",{className:"dark:text-slate-50 font-bold text-blue-900 leading-[1px]",children:"Front-end"}),m.jsx("h4",{className:"dark:text-slate-50 text-end text-blue-900",children:"50%"}),m.jsx("div",{className:"w-[70%] bg-purple-500 h-[7px] rounded-full"})]}),m.jsxs("div",{className:"mb-7",children:[m.jsx("h3",{className:"dark:text-slate-50 font-bold text-blue-900 leading-[1px]",children:"Back-end"}),m.jsx("h4",{className:"dark:text-slate-50 text-end text-blue-900",children:"85%"}),m.jsx("div",{className:"w-[85%] bg-cyan-500 h-[7px] rounded-full"})]}),m.jsxs("div",{children:[m.jsx("h3",{className:"dark:text-slate-50 font-bold text-blue-900 leading-[1px]",children:"Databases"}),m.jsx("h4",{className:"dark:text-slate-50 text-end text-blue-900",children:"75%"}),m.jsx("div",{className:"w-[80%] bg-rose-500 h-[7px] rounded-full"})]})]})]})})]})]})}function hh(){return m.jsxs("section",{className:"dark:bg-slate-950 lg:px-20 px-5 py-20",id:"experience",children:[m.jsx(gt,{direction:"left",duration:2e3,triggerOnce:!0,children:m.jsx("h2",{className:"dark:text-slate-50 dark:bg-slate-950 text-[35px] text-blue-900 font-bold mb-5",children:"Experiências"})}),m.jsxs("div",{className:"flex xl:flex-row flex-col gap-10",children:[m.jsxs("div",{className:"xl:w-[50%] w-[100%] h-full dark:bg-slate-950 dark:border-blue-500 dark:border  bg-white rounded-xl py-10 px-8 shadow-xl justify-between gap-10",children:[m.jsxs("div",{className:"flex gap-5",children:[m.jsxs("div",{className:"dark:bg-slate-950 flex flex-col items-center",children:[m.jsx(qi,{className:"text-[40px] text-blue-500"}),m.jsx("span",{className:"h-[100%] w-[2px] bg-blue-400"})]}),m.jsx(gt,{direction:"left",duration:2100,triggerOnce:!0,children:m.jsxs("div",{className:"dark:bg-slate-950 pb-5",children:[m.jsx("span",{className:"dark:text-slate-50 text-sm text-blue-900 font-light",children:"Julho 2023 - Dezembro 2023"}),m.jsx("h3",{className:"dark:text-slate-50 font-bold text-[25px] text-blue-900",children:" Bono Energia "}),m.jsx("h4",{className:"dark:text-slate-50 font-semibold text-[18px] text-blue-900 mb-2",children:"(Analista de Sistemas Pleno)"}),m.jsxs("ul",{className:"dark:text-slate-50 text-blue-900 text-[18px] mb-2 font-light",children:[m.jsx("li",{children:"- Desenvolvimento de uma API com integração com WebService, utilizando NetCore."}),m.jsx("li",{children:"- Criação e manutenção de uma estrutura de banco de dados SQL."}),m.jsx("li",{children:"- Implementação de políticas de segurança na API."}),m.jsx("li",{children:"- Utilização da metodologia Scrum."}),m.jsx("li",{children:"- Deploy em ambiente de homologação e produção."}),m.jsx("li",{children:"- Colaboração na criação de um ambiente otimizado para o PowerBi."})]})]})})]}),m.jsxs("div",{className:"flex gap-5",children:[m.jsxs("div",{className:"flex flex-col items-center",children:[m.jsx(qi,{className:"text-[40px] text-blue-500"}),m.jsx("span",{className:"h-[100%] w-[2px] bg-blue-400"})]}),m.jsx(gt,{direction:"left",duration:2100,triggerOnce:!0,children:m.jsxs("div",{className:"pb-5",children:[m.jsx("span",{className:"dark:text-slate-50 text-sm text-blue-900 font-light",children:"Janeiro 2021 - Abril 2022"}),m.jsx("h3",{className:"dark:text-slate-50 font-bold text-[25px] text-blue-900",children:" Dribion Software "}),m.jsx("h4",{className:"dark:text-slate-50 font-semibold text-[18px] text-blue-900 mb-2",children:"(Suporte Técnico)"}),m.jsxs("ul",{className:"dark:text-slate-50 text-blue-900 text-[18px] mb-2 font-light",children:[m.jsx("li",{children:"- Treinamento aos clientes e novos funcionários."}),m.jsx("li",{children:"- Gestão Financeira"}),m.jsx("li",{children:"- Faturamento"}),m.jsx("li",{children:"- Controle de Estoque"}),m.jsx("li",{children:"- Notas fiscais: Nfe, NFCe, MDFe, CTe e CCe."}),m.jsx("li",{children:"- Básico de SQL Server."}),m.jsx("li",{children:"- Breve experiência como Tester."}),m.jsx("li",{children:"- Supervisão da instalação de programas e sistemas de software."})]})]})})]}),m.jsxs("div",{className:"flex gap-5",children:[m.jsxs("div",{className:"flex flex-col items-center",children:[m.jsx(qi,{className:"text-[40px] text-blue-500"}),m.jsx("span",{className:"h-[100%] w-[2px] bg-blue-400"})]}),m.jsx(gt,{direction:"left",duration:2100,triggerOnce:!0,children:m.jsxs("div",{children:[m.jsx("span",{className:"dark:text-slate-50 text-sm text-blue-900 font-light",children:"Abril 2015 - Fevereiro 2020"}),m.jsx("h3",{className:"dark:text-slate-50 font-bold text-[25px] text-blue-900",children:" Cia Iguaçu de Café Solúvel "}),m.jsx("h4",{className:"dark:text-slate-50 font-semibold text-[18px] text-blue-900 mb-2",children:"(Auxiliar Administrativo Contabil)"}),m.jsxs("ul",{className:"dark:text-slate-50 text-blue-900 text-[18px] mb-2 font-light",children:[m.jsx("li",{children:"- Conferencia de relatórios e levantamentos."}),m.jsx("li",{children:"- Organização de arquivos e almoxarifado do setor."}),m.jsx("li",{children:"- Serviços Externos."}),m.jsx("li",{children:"- Organização de documentos e balancetes."}),m.jsx("li",{children:"- Experiência com sistema SAP R3."})]})]})})]})]}),m.jsxs("div",{className:"xl:w-[50%] w-[100%] h-full dark:bg-slate-950 dark:border-blue-500 dark:border bg-white rounded-xl py-10 px-8 shadow-xl justify-between gap-10",children:[m.jsxs("div",{className:"flex gap-5",children:[m.jsxs("div",{className:"flex flex-col items-center",children:[m.jsx(Su,{className:"text-[50px] text-yellow-400"}),m.jsx("span",{className:"h-[100%] w-[2px] bg-yellow-400"})]}),m.jsx("div",{className:"pb-5",children:m.jsxs(gt,{direction:"left",duration:2100,triggerOnce:!0,children:[m.jsx("span",{className:"dark:text-slate-50 text-sm text-blue-900 font-light",children:"Julho 2016 - Presente"}),m.jsx("h3",{className:"dark:text-slate-50 font-bold text-[25px] text-blue-900",children:"Universidade Tecnológica Federal do Paraná"}),m.jsx("h4",{className:"dark:text-slate-50 font-semibold text-[18px] text-blue-900 mb-2",children:"Análise e Desenvolvimento de Sistemas"})]})})]}),m.jsxs("div",{className:"flex gap-5",children:[m.jsxs("div",{className:"flex flex-col items-center",children:[m.jsx(Su,{className:"text-[50px] text-yellow-400"}),m.jsx("span",{className:"h-[100%] w-[2px] bg-yellow-400"})]}),m.jsx("div",{className:"pb-5",children:m.jsxs(gt,{direction:"left",duration:2100,triggerOnce:!0,children:[m.jsx("span",{className:"dark:text-slate-50 text-sm text-blue-900 font-light",children:"2009 - 2011"}),m.jsx("h3",{className:"dark:text-slate-50 font-bold text-[25px] text-blue-900",children:"Cursos de Especialização"}),m.jsxs("ul",{className:"dark:text-slate-50 text-blue-900 text-[18px] mb-2 font-light",children:[m.jsx("li",{children:"- Informática básica e avançada."}),m.jsx("li",{children:"- Especialização em hardware."})]})]})})]})]})]})]})}function yh(){return m.jsx("div",{className:"w-[100%] h-[100%] flex items-center justify-center fixed bg-slate-50",children:m.jsx("span",{class:"loader"})})}function vh(){const[e,t]=T.useState(!1),[n,r]=T.useState(!1);return T.useEffect(()=>{r(!0),setTimeout(()=>{r(!1)},1500)},[]),T.useEffect(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]),m.jsx(m.Fragment,{children:n?m.jsx(yh,{}):m.jsxs(m.Fragment,{children:[m.jsx(r1,{setDarkMode:t,darkMode:e}),m.jsx("div",{className:"md:flex flex-col md:flex-row md:min-h-screen w-full",children:m.jsxs("div",{className:"lg:ml-[256px] ml-0",children:[m.jsx(dh,{}),m.jsx(mh,{}),m.jsx(hh,{})]})})]})})}nl.createRoot(document.getElementById("root")).render(m.jsx(De.StrictMode,{children:m.jsx(vh,{})}));
