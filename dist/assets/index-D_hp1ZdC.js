(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function s(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(c){if(c.ep)return;c.ep=!0;const p=s(c);fetch(c.href,p)}})();function G0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fl={exports:{}},Lo={},Al={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function Q0(){if(Nf)return fe;Nf=1;var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),$=Symbol.iterator;function k(b){return b===null||typeof b!="object"?null:(b=$&&b[$]||b["@@iterator"],typeof b=="function"?b:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,_={};function R(b,M,se){this.props=b,this.context=M,this.refs=_,this.updater=se||O}R.prototype.isReactComponent={},R.prototype.setState=function(b,M){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,M,"setState")},R.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function N(){}N.prototype=R.prototype;function A(b,M,se){this.props=b,this.context=M,this.refs=_,this.updater=se||O}var F=A.prototype=new N;F.constructor=A,P(F,R.prototype),F.isPureReactComponent=!0;var V=Array.isArray,Q=Object.prototype.hasOwnProperty,J={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function ne(b,M,se){var le,pe={},de=null,we=null;if(M!=null)for(le in M.ref!==void 0&&(we=M.ref),M.key!==void 0&&(de=""+M.key),M)Q.call(M,le)&&!q.hasOwnProperty(le)&&(pe[le]=M[le]);var ge=arguments.length-2;if(ge===1)pe.children=se;else if(1<ge){for(var ve=Array(ge),Ge=0;Ge<ge;Ge++)ve[Ge]=arguments[Ge+2];pe.children=ve}if(b&&b.defaultProps)for(le in ge=b.defaultProps,ge)pe[le]===void 0&&(pe[le]=ge[le]);return{$$typeof:n,type:b,key:de,ref:we,props:pe,_owner:J.current}}function he(b,M){return{$$typeof:n,type:b.type,key:M,ref:b.ref,props:b.props,_owner:b._owner}}function Te(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function St(b){var M={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(se){return M[se]})}var $t=/\/+/g;function rt(b,M){return typeof b=="object"&&b!==null&&b.key!=null?St(""+b.key):M.toString(36)}function ht(b,M,se,le,pe){var de=typeof b;(de==="undefined"||de==="boolean")&&(b=null);var we=!1;if(b===null)we=!0;else switch(de){case"string":case"number":we=!0;break;case"object":switch(b.$$typeof){case n:case o:we=!0}}if(we)return we=b,pe=pe(we),b=le===""?"."+rt(we,0):le,V(pe)?(se="",b!=null&&(se=b.replace($t,"$&/")+"/"),ht(pe,M,se,"",function(Ge){return Ge})):pe!=null&&(Te(pe)&&(pe=he(pe,se+(!pe.key||we&&we.key===pe.key?"":(""+pe.key).replace($t,"$&/")+"/")+b)),M.push(pe)),1;if(we=0,le=le===""?".":le+":",V(b))for(var ge=0;ge<b.length;ge++){de=b[ge];var ve=le+rt(de,ge);we+=ht(de,M,se,ve,pe)}else if(ve=k(b),typeof ve=="function")for(b=ve.call(b),ge=0;!(de=b.next()).done;)de=de.value,ve=le+rt(de,ge++),we+=ht(de,M,se,ve,pe);else if(de==="object")throw M=String(b),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return we}function Et(b,M,se){if(b==null)return b;var le=[],pe=0;return ht(b,le,"","",function(de){return M.call(se,de,pe++)}),le}function Xe(b){if(b._status===-1){var M=b._result;M=M(),M.then(function(se){(b._status===0||b._status===-1)&&(b._status=1,b._result=se)},function(se){(b._status===0||b._status===-1)&&(b._status=2,b._result=se)}),b._status===-1&&(b._status=0,b._result=M)}if(b._status===1)return b._result.default;throw b._result}var Ee={current:null},W={transition:null},te={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:W,ReactCurrentOwner:J};function Y(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:Et,forEach:function(b,M,se){Et(b,function(){M.apply(this,arguments)},se)},count:function(b){var M=0;return Et(b,function(){M++}),M},toArray:function(b){return Et(b,function(M){return M})||[]},only:function(b){if(!Te(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},fe.Component=R,fe.Fragment=s,fe.Profiler=c,fe.PureComponent=A,fe.StrictMode=a,fe.Suspense=v,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,fe.act=Y,fe.cloneElement=function(b,M,se){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var le=P({},b.props),pe=b.key,de=b.ref,we=b._owner;if(M!=null){if(M.ref!==void 0&&(de=M.ref,we=J.current),M.key!==void 0&&(pe=""+M.key),b.type&&b.type.defaultProps)var ge=b.type.defaultProps;for(ve in M)Q.call(M,ve)&&!q.hasOwnProperty(ve)&&(le[ve]=M[ve]===void 0&&ge!==void 0?ge[ve]:M[ve])}var ve=arguments.length-2;if(ve===1)le.children=se;else if(1<ve){ge=Array(ve);for(var Ge=0;Ge<ve;Ge++)ge[Ge]=arguments[Ge+2];le.children=ge}return{$$typeof:n,type:b.type,key:pe,ref:de,props:le,_owner:we}},fe.createContext=function(b){return b={$$typeof:m,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:p,_context:b},b.Consumer=b},fe.createElement=ne,fe.createFactory=function(b){var M=ne.bind(null,b);return M.type=b,M},fe.createRef=function(){return{current:null}},fe.forwardRef=function(b){return{$$typeof:g,render:b}},fe.isValidElement=Te,fe.lazy=function(b){return{$$typeof:w,_payload:{_status:-1,_result:b},_init:Xe}},fe.memo=function(b,M){return{$$typeof:y,type:b,compare:M===void 0?null:M}},fe.startTransition=function(b){var M=W.transition;W.transition={};try{b()}finally{W.transition=M}},fe.unstable_act=Y,fe.useCallback=function(b,M){return Ee.current.useCallback(b,M)},fe.useContext=function(b){return Ee.current.useContext(b)},fe.useDebugValue=function(){},fe.useDeferredValue=function(b){return Ee.current.useDeferredValue(b)},fe.useEffect=function(b,M){return Ee.current.useEffect(b,M)},fe.useId=function(){return Ee.current.useId()},fe.useImperativeHandle=function(b,M,se){return Ee.current.useImperativeHandle(b,M,se)},fe.useInsertionEffect=function(b,M){return Ee.current.useInsertionEffect(b,M)},fe.useLayoutEffect=function(b,M){return Ee.current.useLayoutEffect(b,M)},fe.useMemo=function(b,M){return Ee.current.useMemo(b,M)},fe.useReducer=function(b,M,se){return Ee.current.useReducer(b,M,se)},fe.useRef=function(b){return Ee.current.useRef(b)},fe.useState=function(b){return Ee.current.useState(b)},fe.useSyncExternalStore=function(b,M,se){return Ee.current.useSyncExternalStore(b,M,se)},fe.useTransition=function(){return Ee.current.useTransition()},fe.version="18.3.1",fe}var Of;function Su(){return Of||(Of=1,Al.exports=Q0()),Al.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If;function K0(){if(If)return Lo;If=1;var n=Su(),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function m(g,v,y){var w,$={},k=null,O=null;y!==void 0&&(k=""+y),v.key!==void 0&&(k=""+v.key),v.ref!==void 0&&(O=v.ref);for(w in v)a.call(v,w)&&!p.hasOwnProperty(w)&&($[w]=v[w]);if(g&&g.defaultProps)for(w in v=g.defaultProps,v)$[w]===void 0&&($[w]=v[w]);return{$$typeof:o,type:g,key:k,ref:O,props:$,_owner:c.current}}return Lo.Fragment=s,Lo.jsx=m,Lo.jsxs=m,Lo}var Ff;function X0(){return Ff||(Ff=1,Fl.exports=K0()),Fl.exports}var f=X0(),E=Su();const We=G0(E);var ns={},Ml={exports:{}},ft={},Dl={exports:{}},Bl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;function J0(){return Af||(Af=1,function(n){function o(W,te){var Y=W.length;W.push(te);e:for(;0<Y;){var b=Y-1>>>1,M=W[b];if(0<c(M,te))W[b]=te,W[Y]=M,Y=b;else break e}}function s(W){return W.length===0?null:W[0]}function a(W){if(W.length===0)return null;var te=W[0],Y=W.pop();if(Y!==te){W[0]=Y;e:for(var b=0,M=W.length,se=M>>>1;b<se;){var le=2*(b+1)-1,pe=W[le],de=le+1,we=W[de];if(0>c(pe,Y))de<M&&0>c(we,pe)?(W[b]=we,W[de]=Y,b=de):(W[b]=pe,W[le]=Y,b=le);else if(de<M&&0>c(we,Y))W[b]=we,W[de]=Y,b=de;else break e}}return te}function c(W,te){var Y=W.sortIndex-te.sortIndex;return Y!==0?Y:W.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var m=Date,g=m.now();n.unstable_now=function(){return m.now()-g}}var v=[],y=[],w=1,$=null,k=3,O=!1,P=!1,_=!1,R=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(W){for(var te=s(y);te!==null;){if(te.callback===null)a(y);else if(te.startTime<=W)a(y),te.sortIndex=te.expirationTime,o(v,te);else break;te=s(y)}}function V(W){if(_=!1,F(W),!P)if(s(v)!==null)P=!0,Xe(Q);else{var te=s(y);te!==null&&Ee(V,te.startTime-W)}}function Q(W,te){P=!1,_&&(_=!1,N(ne),ne=-1),O=!0;var Y=k;try{for(F(te),$=s(v);$!==null&&(!($.expirationTime>te)||W&&!St());){var b=$.callback;if(typeof b=="function"){$.callback=null,k=$.priorityLevel;var M=b($.expirationTime<=te);te=n.unstable_now(),typeof M=="function"?$.callback=M:$===s(v)&&a(v),F(te)}else a(v);$=s(v)}if($!==null)var se=!0;else{var le=s(y);le!==null&&Ee(V,le.startTime-te),se=!1}return se}finally{$=null,k=Y,O=!1}}var J=!1,q=null,ne=-1,he=5,Te=-1;function St(){return!(n.unstable_now()-Te<he)}function $t(){if(q!==null){var W=n.unstable_now();Te=W;var te=!0;try{te=q(!0,W)}finally{te?rt():(J=!1,q=null)}}else J=!1}var rt;if(typeof A=="function")rt=function(){A($t)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,Et=ht.port2;ht.port1.onmessage=$t,rt=function(){Et.postMessage(null)}}else rt=function(){R($t,0)};function Xe(W){q=W,J||(J=!0,rt())}function Ee(W,te){ne=R(function(){W(n.unstable_now())},te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){P||O||(P=!0,Xe(Q))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return k},n.unstable_getFirstCallbackNode=function(){return s(v)},n.unstable_next=function(W){switch(k){case 1:case 2:case 3:var te=3;break;default:te=k}var Y=k;k=te;try{return W()}finally{k=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,te){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Y=k;k=W;try{return te()}finally{k=Y}},n.unstable_scheduleCallback=function(W,te,Y){var b=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?b+Y:b):Y=b,W){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=Y+M,W={id:w++,callback:te,priorityLevel:W,startTime:Y,expirationTime:M,sortIndex:-1},Y>b?(W.sortIndex=Y,o(y,W),s(v)===null&&W===s(y)&&(_?(N(ne),ne=-1):_=!0,Ee(V,Y-b))):(W.sortIndex=M,o(v,W),P||O||(P=!0,Xe(Q))),W},n.unstable_shouldYield=St,n.unstable_wrapCallback=function(W){var te=k;return function(){var Y=k;k=te;try{return W.apply(this,arguments)}finally{k=Y}}}}(Bl)),Bl}var Mf;function Z0(){return Mf||(Mf=1,Dl.exports=J0()),Dl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function e1(){if(Df)return ft;Df=1;var n=Su(),o=Z0();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function p(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(c[e]=t,e=0;e<t.length;e++)a.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},$={};function k(e){return v.call($,e)?!0:v.call(w,e)?!1:y.test(e)?$[e]=!0:(w[e]=!0,!1)}function O(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,t,r,i){if(t===null||typeof t>"u"||O(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _(e,t,r,i,l,d,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=h}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];R[t]=new _(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function A(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(N,A);R[t]=new _(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(N,A);R[t]=new _(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(N,A);R[t]=new _(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function F(e,t,r,i){var l=R.hasOwnProperty(t)?R[t]:null;(l!==null?l.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P(t,r,l,i)&&(r=null),i||l===null?k(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,i=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var V=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),J=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),St=Symbol.for("react.context"),$t=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),ht=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),W=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,b;function M(e){if(b===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);b=t&&t[1]||""}return`
`+b+e}var se=!1;function le(e,t){if(!e||se)return"";se=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(T){var i=T}Reflect.construct(e,[],t)}else{try{t.call()}catch(T){i=T}e.call(t.prototype)}else{try{throw Error()}catch(T){i=T}e()}}catch(T){if(T&&i&&typeof T.stack=="string"){for(var l=T.stack.split(`
`),d=i.stack.split(`
`),h=l.length-1,x=d.length-1;1<=h&&0<=x&&l[h]!==d[x];)x--;for(;1<=h&&0<=x;h--,x--)if(l[h]!==d[x]){if(h!==1||x!==1)do if(h--,x--,0>x||l[h]!==d[x]){var S=`
`+l[h].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=h&&0<=x);break}}}finally{se=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?M(e):""}function pe(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case J:return"Portal";case he:return"Profiler";case ne:return"StrictMode";case rt:return"Suspense";case ht:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case St:return(e.displayName||"Context")+".Consumer";case Te:return(e._context.displayName||"Context")+".Provider";case $t:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Et:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}function we(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(t);case 8:return t===ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ge(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ge(e){var t=ve(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,d=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){i=""+h,d.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xt(e){e._valueTracker||(e._valueTracker=Ge(e))}function Lt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=ve(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vs(e,t){var r=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Du(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=ge(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bu(e,t){t=t.checked,t!=null&&F(e,"checked",t,!1)}function Ws(e,t){Bu(e,t);var r=ge(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qs(e,t.type,r):t.hasOwnProperty("defaultValue")&&qs(e,t.type,ge(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function qs(e,t,r){(t!=="number"||Yo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Wr=Array.isArray;function or(e,t,r,i){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&i&&(e[r].defaultSelected=!0)}else{for(r=""+ge(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ys(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(s(92));if(Wr(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ge(r)}}function Vu(e,t){var r=ge(t.value),i=ge(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Wu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Go,Yu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Go.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jh=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(e){Jh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yr[t]=Yr[e]})});function Gu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Yr.hasOwnProperty(e)&&Yr[e]?(""+t).trim():t+"px"}function Qu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,l=Gu(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,l):e[r]=l}}var Zh=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qs(e,t){if(t){if(Zh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xs=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,ir=null,sr=null;function Ku(e){if(e=go(e)){if(typeof Zs!="function")throw Error(s(280));var t=e.stateNode;t&&(t=yi(t),Zs(e.stateNode,e.type,t))}}function Xu(e){ir?sr?sr.push(e):sr=[e]:ir=e}function Ju(){if(ir){var e=ir,t=sr;if(sr=ir=null,Ku(e),t)for(e=0;e<t.length;e++)Ku(t[e])}}function Zu(e,t){return e(t)}function ec(){}var ea=!1;function tc(e,t,r){if(ea)return e(t,r);ea=!0;try{return Zu(e,t,r)}finally{ea=!1,(ir!==null||sr!==null)&&(ec(),Ju())}}function Gr(e,t){var r=e.stateNode;if(r===null)return null;var i=yi(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,t,typeof r));return r}var ta=!1;if(g)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){ta=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{ta=!1}function eg(e,t,r,i,l,d,h,x,S){var T=Array.prototype.slice.call(arguments,3);try{t.apply(r,T)}catch(B){this.onError(B)}}var Kr=!1,Qo=null,Ko=!1,na=null,tg={onError:function(e){Kr=!0,Qo=e}};function ng(e,t,r,i,l,d,h,x,S){Kr=!1,Qo=null,eg.apply(tg,arguments)}function rg(e,t,r,i,l,d,h,x,S){if(ng.apply(this,arguments),Kr){if(Kr){var T=Qo;Kr=!1,Qo=null}else throw Error(s(198));Ko||(Ko=!0,na=T)}}function Nn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function nc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rc(e){if(Nn(e)!==e)throw Error(s(188))}function og(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var r=e,i=t;;){var l=r.return;if(l===null)break;var d=l.alternate;if(d===null){if(i=l.return,i!==null){r=i;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===r)return rc(l),e;if(d===i)return rc(l),t;d=d.sibling}throw Error(s(188))}if(r.return!==i.return)r=l,i=d;else{for(var h=!1,x=l.child;x;){if(x===r){h=!0,r=l,i=d;break}if(x===i){h=!0,i=l,r=d;break}x=x.sibling}if(!h){for(x=d.child;x;){if(x===r){h=!0,r=d,i=l;break}if(x===i){h=!0,i=d,r=l;break}x=x.sibling}if(!h)throw Error(s(189))}}if(r.alternate!==i)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:t}function oc(e){return e=og(e),e!==null?ic(e):null}function ic(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ic(e);if(t!==null)return t;e=e.sibling}return null}var sc=o.unstable_scheduleCallback,ac=o.unstable_cancelCallback,ig=o.unstable_shouldYield,sg=o.unstable_requestPaint,Ne=o.unstable_now,ag=o.unstable_getCurrentPriorityLevel,ra=o.unstable_ImmediatePriority,lc=o.unstable_UserBlockingPriority,Xo=o.unstable_NormalPriority,lg=o.unstable_LowPriority,uc=o.unstable_IdlePriority,Jo=null,Bt=null;function ug(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:fg,cg=Math.log,dg=Math.LN2;function fg(e){return e>>>=0,e===0?32:31-(cg(e)/dg|0)|0}var Zo=64,ei=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ti(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,l=e.suspendedLanes,d=e.pingedLanes,h=r&268435455;if(h!==0){var x=h&~l;x!==0?i=Xr(x):(d&=h,d!==0&&(i=Xr(d)))}else h=r&~l,h!==0?i=Xr(h):d!==0&&(i=Xr(d));if(i===0)return 0;if(t!==0&&t!==i&&(t&l)===0&&(l=i&-i,d=t&-t,l>=d||l===16&&(d&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Tt(t),l=1<<r,i|=e[r],t&=~l;return i}function pg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mg(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-Tt(d),x=1<<h,S=l[h];S===-1?((x&r)===0||(x&i)!==0)&&(l[h]=pg(x,t)):S<=t&&(e.expiredLanes|=x),d&=~x}}function oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cc(){var e=Zo;return Zo<<=1,(Zo&4194240)===0&&(Zo=64),e}function ia(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Jr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=r}function hg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Tt(r),d=1<<l;t[l]=0,i[l]=-1,e[l]=-1,r&=~d}}function sa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Tt(r),l=1<<i;l&t|e[i]&t&&(e[i]|=t),r&=~l}}var $e=0;function dc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fc,aa,pc,mc,hc,la=!1,ni=[],fn=null,pn=null,mn=null,Zr=new Map,eo=new Map,hn=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gc(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(t.pointerId)}}function to(e,t,r,i,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:d,targetContainers:[l]},t!==null&&(t=go(t),t!==null&&aa(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function yg(e,t,r,i,l){switch(t){case"focusin":return fn=to(fn,e,t,r,i,l),!0;case"dragenter":return pn=to(pn,e,t,r,i,l),!0;case"mouseover":return mn=to(mn,e,t,r,i,l),!0;case"pointerover":var d=l.pointerId;return Zr.set(d,to(Zr.get(d)||null,e,t,r,i,l)),!0;case"gotpointercapture":return d=l.pointerId,eo.set(d,to(eo.get(d)||null,e,t,r,i,l)),!0}return!1}function yc(e){var t=On(e.target);if(t!==null){var r=Nn(t);if(r!==null){if(t=r.tag,t===13){if(t=nc(r),t!==null){e.blockedOn=t,hc(e.priority,function(){pc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Xs=i,r.target.dispatchEvent(i),Xs=null}else return t=go(r),t!==null&&aa(t),e.blockedOn=r,!1;t.shift()}return!0}function vc(e,t,r){ri(e)&&r.delete(t)}function vg(){la=!1,fn!==null&&ri(fn)&&(fn=null),pn!==null&&ri(pn)&&(pn=null),mn!==null&&ri(mn)&&(mn=null),Zr.forEach(vc),eo.forEach(vc)}function no(e,t){e.blockedOn===t&&(e.blockedOn=null,la||(la=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vg)))}function ro(e){function t(l){return no(l,e)}if(0<ni.length){no(ni[0],e);for(var r=1;r<ni.length;r++){var i=ni[r];i.blockedOn===e&&(i.blockedOn=null)}}for(fn!==null&&no(fn,e),pn!==null&&no(pn,e),mn!==null&&no(mn,e),Zr.forEach(t),eo.forEach(t),r=0;r<hn.length;r++)i=hn[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<hn.length&&(r=hn[0],r.blockedOn===null);)yc(r),r.blockedOn===null&&hn.shift()}var ar=V.ReactCurrentBatchConfig,oi=!0;function xg(e,t,r,i){var l=$e,d=ar.transition;ar.transition=null;try{$e=1,ua(e,t,r,i)}finally{$e=l,ar.transition=d}}function wg(e,t,r,i){var l=$e,d=ar.transition;ar.transition=null;try{$e=4,ua(e,t,r,i)}finally{$e=l,ar.transition=d}}function ua(e,t,r,i){if(oi){var l=ca(e,t,r,i);if(l===null)Pa(e,t,i,ii,r),gc(e,i);else if(yg(l,e,t,r,i))i.stopPropagation();else if(gc(e,i),t&4&&-1<gg.indexOf(e)){for(;l!==null;){var d=go(l);if(d!==null&&fc(d),d=ca(e,t,r,i),d===null&&Pa(e,t,i,ii,r),d===l)break;l=d}l!==null&&i.stopPropagation()}else Pa(e,t,i,null,r)}}var ii=null;function ca(e,t,r,i){if(ii=null,e=Js(i),e=On(e),e!==null)if(t=Nn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=nc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ii=e,null}function xc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ag()){case ra:return 1;case lc:return 4;case Xo:case lg:return 16;case uc:return 536870912;default:return 16}default:return 16}}var gn=null,da=null,si=null;function wc(){if(si)return si;var e,t=da,r=t.length,i,l="value"in gn?gn.value:gn.textContent,d=l.length;for(e=0;e<r&&t[e]===l[e];e++);var h=r-e;for(i=1;i<=h&&t[r-i]===l[d-i];i++);return si=l.slice(e,1<i?1-i:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function Sc(){return!1}function gt(e){function t(r,i,l,d,h){this._reactName=r,this._targetInst=l,this.type=i,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(r=e[x],this[x]=r?r(d):d[x]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?li:Sc,this.isPropagationStopped=Sc,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fa=gt(lr),oo=Y({},lr,{view:0,detail:0}),Sg=gt(oo),pa,ma,io,ui=Y({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(pa=e.screenX-io.screenX,ma=e.screenY-io.screenY):ma=pa=0,io=e),pa)},movementY:function(e){return"movementY"in e?e.movementY:ma}}),$c=gt(ui),$g=Y({},ui,{dataTransfer:0}),Eg=gt($g),Cg=Y({},oo,{relatedTarget:0}),ha=gt(Cg),jg=Y({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),kg=gt(jg),Pg=Y({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bg=gt(Pg),zg=Y({},lr,{data:0}),Ec=gt(zg),Rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _g(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tg[e])?!!t[e]:!1}function ga(){return _g}var Ng=Y({},oo,{key:function(e){if(e.key){var t=Rg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ga,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Og=gt(Ng),Ig=Y({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=gt(Ig),Fg=Y({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ga}),Ag=gt(Fg),Mg=Y({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=gt(Mg),Bg=Y({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ug=gt(Bg),Hg=[9,13,27,32],ya=g&&"CompositionEvent"in window,so=null;g&&"documentMode"in document&&(so=document.documentMode);var Vg=g&&"TextEvent"in window&&!so,jc=g&&(!ya||so&&8<so&&11>=so),kc=" ",Pc=!1;function bc(e,t){switch(e){case"keyup":return Hg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function Wg(e,t){switch(e){case"compositionend":return zc(t);case"keypress":return t.which!==32?null:(Pc=!0,kc);case"textInput":return e=t.data,e===kc&&Pc?null:e;default:return null}}function qg(e,t){if(ur)return e==="compositionend"||!ya&&bc(e,t)?(e=wc(),si=da=gn=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jc&&t.locale!=="ko"?null:t.data;default:return null}}var Yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yg[e.type]:t==="textarea"}function Lc(e,t,r,i){Xu(i),t=mi(t,"onChange"),0<t.length&&(r=new fa("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var ao=null,lo=null;function Gg(e){Qc(e,0)}function ci(e){var t=mr(e);if(Lt(t))return e}function Qg(e,t){if(e==="change")return t}var Tc=!1;if(g){var va;if(g){var xa="oninput"in document;if(!xa){var _c=document.createElement("div");_c.setAttribute("oninput","return;"),xa=typeof _c.oninput=="function"}va=xa}else va=!1;Tc=va&&(!document.documentMode||9<document.documentMode)}function Nc(){ao&&(ao.detachEvent("onpropertychange",Oc),lo=ao=null)}function Oc(e){if(e.propertyName==="value"&&ci(lo)){var t=[];Lc(t,lo,e,Js(e)),tc(Gg,t)}}function Kg(e,t,r){e==="focusin"?(Nc(),ao=t,lo=r,ao.attachEvent("onpropertychange",Oc)):e==="focusout"&&Nc()}function Xg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(lo)}function Jg(e,t){if(e==="click")return ci(t)}function Zg(e,t){if(e==="input"||e==="change")return ci(t)}function e0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:e0;function uo(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var l=r[i];if(!v.call(t,l)||!_t(e[l],t[l]))return!1}return!0}function Ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fc(e,t){var r=Ic(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ic(r)}}function Ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mc(){for(var e=window,t=Yo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Yo(e.document)}return t}function wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function t0(e){var t=Mc(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ac(r.ownerDocument.documentElement,r)){if(i!==null&&wa(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,d=Math.min(i.start,l);i=i.end===void 0?d:Math.min(i.end,l),!e.extend&&d>i&&(l=i,i=d,d=l),l=Fc(r,d);var h=Fc(r,i);l&&h&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),d>i?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var n0=g&&"documentMode"in document&&11>=document.documentMode,cr=null,Sa=null,co=null,$a=!1;function Dc(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;$a||cr==null||cr!==Yo(i)||(i=cr,"selectionStart"in i&&wa(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),co&&uo(co,i)||(co=i,i=mi(Sa,"onSelect"),0<i.length&&(t=new fa("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=cr)))}function di(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var dr={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},Ea={},Bc={};g&&(Bc=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function fi(e){if(Ea[e])return Ea[e];if(!dr[e])return e;var t=dr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Bc)return Ea[e]=t[r];return e}var Uc=fi("animationend"),Hc=fi("animationiteration"),Vc=fi("animationstart"),Wc=fi("transitionend"),qc=new Map,Yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){qc.set(e,t),p(t,[e])}for(var Ca=0;Ca<Yc.length;Ca++){var ja=Yc[Ca],r0=ja.toLowerCase(),o0=ja[0].toUpperCase()+ja.slice(1);yn(r0,"on"+o0)}yn(Uc,"onAnimationEnd"),yn(Hc,"onAnimationIteration"),yn(Vc,"onAnimationStart"),yn("dblclick","onDoubleClick"),yn("focusin","onFocus"),yn("focusout","onBlur"),yn(Wc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Gc(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,rg(i,t,void 0,e),e.currentTarget=null}function Qc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],l=i.event;i=i.listeners;e:{var d=void 0;if(t)for(var h=i.length-1;0<=h;h--){var x=i[h],S=x.instance,T=x.currentTarget;if(x=x.listener,S!==d&&l.isPropagationStopped())break e;Gc(l,x,T),d=S}else for(h=0;h<i.length;h++){if(x=i[h],S=x.instance,T=x.currentTarget,x=x.listener,S!==d&&l.isPropagationStopped())break e;Gc(l,x,T),d=S}}}if(Ko)throw e=na,Ko=!1,na=null,e}function je(e,t){var r=t[_a];r===void 0&&(r=t[_a]=new Set);var i=e+"__bubble";r.has(i)||(Kc(t,e,2,!1),r.add(i))}function ka(e,t,r){var i=0;t&&(i|=4),Kc(r,e,i,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function po(e){if(!e[pi]){e[pi]=!0,a.forEach(function(r){r!=="selectionchange"&&(i0.has(r)||ka(r,!1,e),ka(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,ka("selectionchange",!1,t))}}function Kc(e,t,r,i){switch(xc(t)){case 1:var l=xg;break;case 4:l=wg;break;default:l=ua}r=l.bind(null,t,r,e),l=void 0,!ta||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function Pa(e,t,r,i,l){var d=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var x=i.stateNode.containerInfo;if(x===l||x.nodeType===8&&x.parentNode===l)break;if(h===4)for(h=i.return;h!==null;){var S=h.tag;if((S===3||S===4)&&(S=h.stateNode.containerInfo,S===l||S.nodeType===8&&S.parentNode===l))return;h=h.return}for(;x!==null;){if(h=On(x),h===null)return;if(S=h.tag,S===5||S===6){i=d=h;continue e}x=x.parentNode}}i=i.return}tc(function(){var T=d,B=Js(r),U=[];e:{var D=qc.get(e);if(D!==void 0){var G=fa,X=e;switch(e){case"keypress":if(ai(r)===0)break e;case"keydown":case"keyup":G=Og;break;case"focusin":X="focus",G=ha;break;case"focusout":X="blur",G=ha;break;case"beforeblur":case"afterblur":G=ha;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=$c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Ag;break;case Uc:case Hc:case Vc:G=kg;break;case Wc:G=Dg;break;case"scroll":G=Sg;break;case"wheel":G=Ug;break;case"copy":case"cut":case"paste":G=bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Cc}var Z=(t&4)!==0,Oe=!Z&&e==="scroll",z=Z?D!==null?D+"Capture":null:D;Z=[];for(var j=T,L;j!==null;){L=j;var H=L.stateNode;if(L.tag===5&&H!==null&&(L=H,z!==null&&(H=Gr(j,z),H!=null&&Z.push(mo(j,H,L)))),Oe)break;j=j.return}0<Z.length&&(D=new G(D,X,null,r,B),U.push({event:D,listeners:Z}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",D&&r!==Xs&&(X=r.relatedTarget||r.fromElement)&&(On(X)||X[Jt]))break e;if((G||D)&&(D=B.window===B?B:(D=B.ownerDocument)?D.defaultView||D.parentWindow:window,G?(X=r.relatedTarget||r.toElement,G=T,X=X?On(X):null,X!==null&&(Oe=Nn(X),X!==Oe||X.tag!==5&&X.tag!==6)&&(X=null)):(G=null,X=T),G!==X)){if(Z=$c,H="onMouseLeave",z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Cc,H="onPointerLeave",z="onPointerEnter",j="pointer"),Oe=G==null?D:mr(G),L=X==null?D:mr(X),D=new Z(H,j+"leave",G,r,B),D.target=Oe,D.relatedTarget=L,H=null,On(B)===T&&(Z=new Z(z,j+"enter",X,r,B),Z.target=L,Z.relatedTarget=Oe,H=Z),Oe=H,G&&X)t:{for(Z=G,z=X,j=0,L=Z;L;L=fr(L))j++;for(L=0,H=z;H;H=fr(H))L++;for(;0<j-L;)Z=fr(Z),j--;for(;0<L-j;)z=fr(z),L--;for(;j--;){if(Z===z||z!==null&&Z===z.alternate)break t;Z=fr(Z),z=fr(z)}Z=null}else Z=null;G!==null&&Xc(U,D,G,Z,!1),X!==null&&Oe!==null&&Xc(U,Oe,X,Z,!0)}}e:{if(D=T?mr(T):window,G=D.nodeName&&D.nodeName.toLowerCase(),G==="select"||G==="input"&&D.type==="file")var ee=Qg;else if(Rc(D))if(Tc)ee=Zg;else{ee=Xg;var re=Kg}else(G=D.nodeName)&&G.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(ee=Jg);if(ee&&(ee=ee(e,T))){Lc(U,ee,r,B);break e}re&&re(e,D,T),e==="focusout"&&(re=D._wrapperState)&&re.controlled&&D.type==="number"&&qs(D,"number",D.value)}switch(re=T?mr(T):window,e){case"focusin":(Rc(re)||re.contentEditable==="true")&&(cr=re,Sa=T,co=null);break;case"focusout":co=Sa=cr=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,Dc(U,r,B);break;case"selectionchange":if(n0)break;case"keydown":case"keyup":Dc(U,r,B)}var oe;if(ya)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else ur?bc(e,r)&&(ie="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ie="onCompositionStart");ie&&(jc&&r.locale!=="ko"&&(ur||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&ur&&(oe=wc()):(gn=B,da="value"in gn?gn.value:gn.textContent,ur=!0)),re=mi(T,ie),0<re.length&&(ie=new Ec(ie,e,null,r,B),U.push({event:ie,listeners:re}),oe?ie.data=oe:(oe=zc(r),oe!==null&&(ie.data=oe)))),(oe=Vg?Wg(e,r):qg(e,r))&&(T=mi(T,"onBeforeInput"),0<T.length&&(B=new Ec("onBeforeInput","beforeinput",null,r,B),U.push({event:B,listeners:T}),B.data=oe))}Qc(U,t)})}function mo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function mi(e,t){for(var r=t+"Capture",i=[];e!==null;){var l=e,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=Gr(e,r),d!=null&&i.unshift(mo(e,d,l)),d=Gr(e,t),d!=null&&i.push(mo(e,d,l))),e=e.return}return i}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xc(e,t,r,i,l){for(var d=t._reactName,h=[];r!==null&&r!==i;){var x=r,S=x.alternate,T=x.stateNode;if(S!==null&&S===i)break;x.tag===5&&T!==null&&(x=T,l?(S=Gr(r,d),S!=null&&h.unshift(mo(r,S,x))):l||(S=Gr(r,d),S!=null&&h.push(mo(r,S,x)))),r=r.return}h.length!==0&&e.push({event:t,listeners:h})}var s0=/\r\n?/g,a0=/\u0000|\uFFFD/g;function Jc(e){return(typeof e=="string"?e:""+e).replace(s0,`
`).replace(a0,"")}function hi(e,t,r){if(t=Jc(t),Jc(e)!==t&&r)throw Error(s(425))}function gi(){}var ba=null,za=null;function Ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,l0=typeof clearTimeout=="function"?clearTimeout:void 0,Zc=typeof Promise=="function"?Promise:void 0,u0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zc<"u"?function(e){return Zc.resolve(null).then(e).catch(c0)}:La;function c0(e){setTimeout(function(){throw e})}function Ta(e,t){var r=t,i=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(i===0){e.removeChild(l),ro(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=l}while(r);ro(t)}function vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ed(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),Ut="__reactFiber$"+pr,ho="__reactProps$"+pr,Jt="__reactContainer$"+pr,_a="__reactEvents$"+pr,d0="__reactListeners$"+pr,f0="__reactHandles$"+pr;function On(e){var t=e[Ut];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Jt]||r[Ut]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ed(e);e!==null;){if(r=e[Ut])return r;e=ed(e)}return t}e=r,r=e.parentNode}return null}function go(e){return e=e[Ut]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function yi(e){return e[ho]||null}var Na=[],hr=-1;function xn(e){return{current:e}}function ke(e){0>hr||(e.current=Na[hr],Na[hr]=null,hr--)}function Ce(e,t){hr++,Na[hr]=e.current,e.current=t}var wn={},Je=xn(wn),at=xn(!1),In=wn;function gr(e,t){var r=e.type.contextTypes;if(!r)return wn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in r)l[d]=t[d];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function lt(e){return e=e.childContextTypes,e!=null}function vi(){ke(at),ke(Je)}function td(e,t,r){if(Je.current!==wn)throw Error(s(168));Ce(Je,t),Ce(at,r)}function nd(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var l in i)if(!(l in t))throw Error(s(108,we(e)||"Unknown",l));return Y({},r,i)}function xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,In=Je.current,Ce(Je,e),Ce(at,at.current),!0}function rd(e,t,r){var i=e.stateNode;if(!i)throw Error(s(169));r?(e=nd(e,t,In),i.__reactInternalMemoizedMergedChildContext=e,ke(at),ke(Je),Ce(Je,e)):ke(at),Ce(at,r)}var Zt=null,wi=!1,Oa=!1;function od(e){Zt===null?Zt=[e]:Zt.push(e)}function p0(e){wi=!0,od(e)}function Sn(){if(!Oa&&Zt!==null){Oa=!0;var e=0,t=$e;try{var r=Zt;for($e=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Zt=null,wi=!1}catch(l){throw Zt!==null&&(Zt=Zt.slice(e+1)),sc(ra,Sn),l}finally{$e=t,Oa=!1}}return null}var yr=[],vr=0,Si=null,$i=0,Ct=[],jt=0,Fn=null,en=1,tn="";function An(e,t){yr[vr++]=$i,yr[vr++]=Si,Si=e,$i=t}function id(e,t,r){Ct[jt++]=en,Ct[jt++]=tn,Ct[jt++]=Fn,Fn=e;var i=en;e=tn;var l=32-Tt(i)-1;i&=~(1<<l),r+=1;var d=32-Tt(t)+l;if(30<d){var h=l-l%5;d=(i&(1<<h)-1).toString(32),i>>=h,l-=h,en=1<<32-Tt(t)+l|r<<l|i,tn=d+e}else en=1<<d|r<<l|i,tn=e}function Ia(e){e.return!==null&&(An(e,1),id(e,1,0))}function Fa(e){for(;e===Si;)Si=yr[--vr],yr[vr]=null,$i=yr[--vr],yr[vr]=null;for(;e===Fn;)Fn=Ct[--jt],Ct[jt]=null,tn=Ct[--jt],Ct[jt]=null,en=Ct[--jt],Ct[jt]=null}var yt=null,vt=null,be=!1,Nt=null;function sd(e,t){var r=zt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ad(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,vt=vn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Fn!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=zt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,yt=e,vt=null,!0):!1;default:return!1}}function Aa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ma(e){if(be){var t=vt;if(t){var r=t;if(!ad(e,t)){if(Aa(e))throw Error(s(418));t=vn(r.nextSibling);var i=yt;t&&ad(e,t)?sd(i,r):(e.flags=e.flags&-4097|2,be=!1,yt=e)}}else{if(Aa(e))throw Error(s(418));e.flags=e.flags&-4097|2,be=!1,yt=e}}}function ld(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function Ei(e){if(e!==yt)return!1;if(!be)return ld(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ra(e.type,e.memoizedProps)),t&&(t=vt)){if(Aa(e))throw ud(),Error(s(418));for(;t;)sd(e,t),t=vn(t.nextSibling)}if(ld(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){vt=vn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=yt?vn(e.stateNode.nextSibling):null;return!0}function ud(){for(var e=vt;e;)e=vn(e.nextSibling)}function xr(){vt=yt=null,be=!1}function Da(e){Nt===null?Nt=[e]:Nt.push(e)}var m0=V.ReactCurrentBatchConfig;function yo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var i=r.stateNode}if(!i)throw Error(s(147,e));var l=i,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(h){var x=l.refs;h===null?delete x[d]:x[d]=h},t._stringRef=d,t)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function Ci(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cd(e){var t=e._init;return t(e._payload)}function dd(e){function t(z,j){if(e){var L=z.deletions;L===null?(z.deletions=[j],z.flags|=16):L.push(j)}}function r(z,j){if(!e)return null;for(;j!==null;)t(z,j),j=j.sibling;return null}function i(z,j){for(z=new Map;j!==null;)j.key!==null?z.set(j.key,j):z.set(j.index,j),j=j.sibling;return z}function l(z,j){return z=zn(z,j),z.index=0,z.sibling=null,z}function d(z,j,L){return z.index=L,e?(L=z.alternate,L!==null?(L=L.index,L<j?(z.flags|=2,j):L):(z.flags|=2,j)):(z.flags|=1048576,j)}function h(z){return e&&z.alternate===null&&(z.flags|=2),z}function x(z,j,L,H){return j===null||j.tag!==6?(j=Ll(L,z.mode,H),j.return=z,j):(j=l(j,L),j.return=z,j)}function S(z,j,L,H){var ee=L.type;return ee===q?B(z,j,L.props.children,H,L.key):j!==null&&(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Xe&&cd(ee)===j.type)?(H=l(j,L.props),H.ref=yo(z,j,L),H.return=z,H):(H=Gi(L.type,L.key,L.props,null,z.mode,H),H.ref=yo(z,j,L),H.return=z,H)}function T(z,j,L,H){return j===null||j.tag!==4||j.stateNode.containerInfo!==L.containerInfo||j.stateNode.implementation!==L.implementation?(j=Tl(L,z.mode,H),j.return=z,j):(j=l(j,L.children||[]),j.return=z,j)}function B(z,j,L,H,ee){return j===null||j.tag!==7?(j=qn(L,z.mode,H,ee),j.return=z,j):(j=l(j,L),j.return=z,j)}function U(z,j,L){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Ll(""+j,z.mode,L),j.return=z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:return L=Gi(j.type,j.key,j.props,null,z.mode,L),L.ref=yo(z,null,j),L.return=z,L;case J:return j=Tl(j,z.mode,L),j.return=z,j;case Xe:var H=j._init;return U(z,H(j._payload),L)}if(Wr(j)||te(j))return j=qn(j,z.mode,L,null),j.return=z,j;Ci(z,j)}return null}function D(z,j,L,H){var ee=j!==null?j.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return ee!==null?null:x(z,j,""+L,H);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Q:return L.key===ee?S(z,j,L,H):null;case J:return L.key===ee?T(z,j,L,H):null;case Xe:return ee=L._init,D(z,j,ee(L._payload),H)}if(Wr(L)||te(L))return ee!==null?null:B(z,j,L,H,null);Ci(z,L)}return null}function G(z,j,L,H,ee){if(typeof H=="string"&&H!==""||typeof H=="number")return z=z.get(L)||null,x(j,z,""+H,ee);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Q:return z=z.get(H.key===null?L:H.key)||null,S(j,z,H,ee);case J:return z=z.get(H.key===null?L:H.key)||null,T(j,z,H,ee);case Xe:var re=H._init;return G(z,j,L,re(H._payload),ee)}if(Wr(H)||te(H))return z=z.get(L)||null,B(j,z,H,ee,null);Ci(j,H)}return null}function X(z,j,L,H){for(var ee=null,re=null,oe=j,ie=j=0,Ue=null;oe!==null&&ie<L.length;ie++){oe.index>ie?(Ue=oe,oe=null):Ue=oe.sibling;var xe=D(z,oe,L[ie],H);if(xe===null){oe===null&&(oe=Ue);break}e&&oe&&xe.alternate===null&&t(z,oe),j=d(xe,j,ie),re===null?ee=xe:re.sibling=xe,re=xe,oe=Ue}if(ie===L.length)return r(z,oe),be&&An(z,ie),ee;if(oe===null){for(;ie<L.length;ie++)oe=U(z,L[ie],H),oe!==null&&(j=d(oe,j,ie),re===null?ee=oe:re.sibling=oe,re=oe);return be&&An(z,ie),ee}for(oe=i(z,oe);ie<L.length;ie++)Ue=G(oe,z,ie,L[ie],H),Ue!==null&&(e&&Ue.alternate!==null&&oe.delete(Ue.key===null?ie:Ue.key),j=d(Ue,j,ie),re===null?ee=Ue:re.sibling=Ue,re=Ue);return e&&oe.forEach(function(Rn){return t(z,Rn)}),be&&An(z,ie),ee}function Z(z,j,L,H){var ee=te(L);if(typeof ee!="function")throw Error(s(150));if(L=ee.call(L),L==null)throw Error(s(151));for(var re=ee=null,oe=j,ie=j=0,Ue=null,xe=L.next();oe!==null&&!xe.done;ie++,xe=L.next()){oe.index>ie?(Ue=oe,oe=null):Ue=oe.sibling;var Rn=D(z,oe,xe.value,H);if(Rn===null){oe===null&&(oe=Ue);break}e&&oe&&Rn.alternate===null&&t(z,oe),j=d(Rn,j,ie),re===null?ee=Rn:re.sibling=Rn,re=Rn,oe=Ue}if(xe.done)return r(z,oe),be&&An(z,ie),ee;if(oe===null){for(;!xe.done;ie++,xe=L.next())xe=U(z,xe.value,H),xe!==null&&(j=d(xe,j,ie),re===null?ee=xe:re.sibling=xe,re=xe);return be&&An(z,ie),ee}for(oe=i(z,oe);!xe.done;ie++,xe=L.next())xe=G(oe,z,ie,xe.value,H),xe!==null&&(e&&xe.alternate!==null&&oe.delete(xe.key===null?ie:xe.key),j=d(xe,j,ie),re===null?ee=xe:re.sibling=xe,re=xe);return e&&oe.forEach(function(Y0){return t(z,Y0)}),be&&An(z,ie),ee}function Oe(z,j,L,H){if(typeof L=="object"&&L!==null&&L.type===q&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case Q:e:{for(var ee=L.key,re=j;re!==null;){if(re.key===ee){if(ee=L.type,ee===q){if(re.tag===7){r(z,re.sibling),j=l(re,L.props.children),j.return=z,z=j;break e}}else if(re.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Xe&&cd(ee)===re.type){r(z,re.sibling),j=l(re,L.props),j.ref=yo(z,re,L),j.return=z,z=j;break e}r(z,re);break}else t(z,re);re=re.sibling}L.type===q?(j=qn(L.props.children,z.mode,H,L.key),j.return=z,z=j):(H=Gi(L.type,L.key,L.props,null,z.mode,H),H.ref=yo(z,j,L),H.return=z,z=H)}return h(z);case J:e:{for(re=L.key;j!==null;){if(j.key===re)if(j.tag===4&&j.stateNode.containerInfo===L.containerInfo&&j.stateNode.implementation===L.implementation){r(z,j.sibling),j=l(j,L.children||[]),j.return=z,z=j;break e}else{r(z,j);break}else t(z,j);j=j.sibling}j=Tl(L,z.mode,H),j.return=z,z=j}return h(z);case Xe:return re=L._init,Oe(z,j,re(L._payload),H)}if(Wr(L))return X(z,j,L,H);if(te(L))return Z(z,j,L,H);Ci(z,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,j!==null&&j.tag===6?(r(z,j.sibling),j=l(j,L),j.return=z,z=j):(r(z,j),j=Ll(L,z.mode,H),j.return=z,z=j),h(z)):r(z,j)}return Oe}var wr=dd(!0),fd=dd(!1),ji=xn(null),ki=null,Sr=null,Ba=null;function Ua(){Ba=Sr=ki=null}function Ha(e){var t=ji.current;ke(ji),e._currentValue=t}function Va(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function $r(e,t){ki=e,Ba=Sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ut=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(Ba!==e)if(e={context:e,memoizedValue:t,next:null},Sr===null){if(ki===null)throw Error(s(308));Sr=e,ki.dependencies={lanes:0,firstContext:e}}else Sr=Sr.next=e;return t}var Mn=null;function Wa(e){Mn===null?Mn=[e]:Mn.push(e)}function pd(e,t,r,i){var l=t.interleaved;return l===null?(r.next=r,Wa(t)):(r.next=l.next,l.next=r),t.interleaved=r,nn(e,i)}function nn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var $n=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ye&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,nn(e,r)}return l=i.interleaved,l===null?(t.next=t,Wa(i)):(t.next=l.next,l.next=t),i.interleaved=t,nn(e,r)}function Pi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,sa(e,r)}}function hd(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var l=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var h={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};d===null?l=d=h:d=d.next=h,r=r.next}while(r!==null);d===null?l=d=t:d=d.next=t}else l=d=t;r={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function bi(e,t,r,i){var l=e.updateQueue;$n=!1;var d=l.firstBaseUpdate,h=l.lastBaseUpdate,x=l.shared.pending;if(x!==null){l.shared.pending=null;var S=x,T=S.next;S.next=null,h===null?d=T:h.next=T,h=S;var B=e.alternate;B!==null&&(B=B.updateQueue,x=B.lastBaseUpdate,x!==h&&(x===null?B.firstBaseUpdate=T:x.next=T,B.lastBaseUpdate=S))}if(d!==null){var U=l.baseState;h=0,B=T=S=null,x=d;do{var D=x.lane,G=x.eventTime;if((i&D)===D){B!==null&&(B=B.next={eventTime:G,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var X=e,Z=x;switch(D=t,G=r,Z.tag){case 1:if(X=Z.payload,typeof X=="function"){U=X.call(G,U,D);break e}U=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=Z.payload,D=typeof X=="function"?X.call(G,U,D):X,D==null)break e;U=Y({},U,D);break e;case 2:$n=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,D=l.effects,D===null?l.effects=[x]:D.push(x))}else G={eventTime:G,lane:D,tag:x.tag,payload:x.payload,callback:x.callback,next:null},B===null?(T=B=G,S=U):B=B.next=G,h|=D;if(x=x.next,x===null){if(x=l.shared.pending,x===null)break;D=x,x=D.next,D.next=null,l.lastBaseUpdate=D,l.shared.pending=null}}while(!0);if(B===null&&(S=U),l.baseState=S,l.firstBaseUpdate=T,l.lastBaseUpdate=B,t=l.shared.interleaved,t!==null){l=t;do h|=l.lane,l=l.next;while(l!==t)}else d===null&&(l.shared.lanes=0);Un|=h,e.lanes=h,e.memoizedState=U}}function gd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],l=i.callback;if(l!==null){if(i.callback=null,i=r,typeof l!="function")throw Error(s(191,l));l.call(i)}}}var vo={},Ht=xn(vo),xo=xn(vo),wo=xn(vo);function Dn(e){if(e===vo)throw Error(s(174));return e}function Ya(e,t){switch(Ce(wo,t),Ce(xo,e),Ce(Ht,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gs(t,e)}ke(Ht),Ce(Ht,t)}function Er(){ke(Ht),ke(xo),ke(wo)}function yd(e){Dn(wo.current);var t=Dn(Ht.current),r=Gs(t,e.type);t!==r&&(Ce(xo,e),Ce(Ht,r))}function Ga(e){xo.current===e&&(ke(Ht),ke(xo))}var ze=xn(0);function zi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qa=[];function Ka(){for(var e=0;e<Qa.length;e++)Qa[e]._workInProgressVersionPrimary=null;Qa.length=0}var Ri=V.ReactCurrentDispatcher,Xa=V.ReactCurrentBatchConfig,Bn=0,Re=null,Ae=null,De=null,Li=!1,So=!1,$o=0,h0=0;function Ze(){throw Error(s(321))}function Ja(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!_t(e[r],t[r]))return!1;return!0}function Za(e,t,r,i,l,d){if(Bn=d,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?x0:w0,e=r(i,l),So){d=0;do{if(So=!1,$o=0,25<=d)throw Error(s(301));d+=1,De=Ae=null,t.updateQueue=null,Ri.current=S0,e=r(i,l)}while(So)}if(Ri.current=Ni,t=Ae!==null&&Ae.next!==null,Bn=0,De=Ae=Re=null,Li=!1,t)throw Error(s(300));return e}function el(){var e=$o!==0;return $o=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Re.memoizedState=De=e:De=De.next=e,De}function Pt(){if(Ae===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=De===null?Re.memoizedState:De.next;if(t!==null)De=t,Ae=e;else{if(e===null)throw Error(s(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},De===null?Re.memoizedState=De=e:De=De.next=e}return De}function Eo(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=Pt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var i=Ae,l=i.baseQueue,d=r.pending;if(d!==null){if(l!==null){var h=l.next;l.next=d.next,d.next=h}i.baseQueue=l=d,r.pending=null}if(l!==null){d=l.next,i=i.baseState;var x=h=null,S=null,T=d;do{var B=T.lane;if((Bn&B)===B)S!==null&&(S=S.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),i=T.hasEagerState?T.eagerState:e(i,T.action);else{var U={lane:B,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};S===null?(x=S=U,h=i):S=S.next=U,Re.lanes|=B,Un|=B}T=T.next}while(T!==null&&T!==d);S===null?h=i:S.next=x,_t(i,t.memoizedState)||(ut=!0),t.memoizedState=i,t.baseState=h,t.baseQueue=S,r.lastRenderedState=i}if(e=r.interleaved,e!==null){l=e;do d=l.lane,Re.lanes|=d,Un|=d,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function nl(e){var t=Pt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var i=r.dispatch,l=r.pending,d=t.memoizedState;if(l!==null){r.pending=null;var h=l=l.next;do d=e(d,h.action),h=h.next;while(h!==l);_t(d,t.memoizedState)||(ut=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),r.lastRenderedState=d}return[d,i]}function vd(){}function xd(e,t){var r=Re,i=Pt(),l=t(),d=!_t(i.memoizedState,l);if(d&&(i.memoizedState=l,ut=!0),i=i.queue,rl($d.bind(null,r,i,e),[e]),i.getSnapshot!==t||d||De!==null&&De.memoizedState.tag&1){if(r.flags|=2048,Co(9,Sd.bind(null,r,i,l,t),void 0,null),Be===null)throw Error(s(349));(Bn&30)!==0||wd(r,t,l)}return l}function wd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Sd(e,t,r,i){t.value=r,t.getSnapshot=i,Ed(t)&&Cd(e)}function $d(e,t,r){return r(function(){Ed(t)&&Cd(e)})}function Ed(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!_t(e,r)}catch{return!0}}function Cd(e){var t=nn(e,1);t!==null&&At(t,e,1,-1)}function jd(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:e},t.queue=e,e=e.dispatch=v0.bind(null,Re,e),[t.memoizedState,e]}function Co(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function kd(){return Pt().memoizedState}function Ti(e,t,r,i){var l=Vt();Re.flags|=e,l.memoizedState=Co(1|t,r,void 0,i===void 0?null:i)}function _i(e,t,r,i){var l=Pt();i=i===void 0?null:i;var d=void 0;if(Ae!==null){var h=Ae.memoizedState;if(d=h.destroy,i!==null&&Ja(i,h.deps)){l.memoizedState=Co(t,r,d,i);return}}Re.flags|=e,l.memoizedState=Co(1|t,r,d,i)}function Pd(e,t){return Ti(8390656,8,e,t)}function rl(e,t){return _i(2048,8,e,t)}function bd(e,t){return _i(4,2,e,t)}function zd(e,t){return _i(4,4,e,t)}function Rd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ld(e,t,r){return r=r!=null?r.concat([e]):null,_i(4,4,Rd.bind(null,t,e),r)}function ol(){}function Td(e,t){var r=Pt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Ja(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function _d(e,t){var r=Pt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Ja(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Nd(e,t,r){return(Bn&21)===0?(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=r):(_t(r,t)||(r=cc(),Re.lanes|=r,Un|=r,e.baseState=!0),t)}function g0(e,t){var r=$e;$e=r!==0&&4>r?r:4,e(!0);var i=Xa.transition;Xa.transition={};try{e(!1),t()}finally{$e=r,Xa.transition=i}}function Od(){return Pt().memoizedState}function y0(e,t,r){var i=Pn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Id(e))Fd(t,r);else if(r=pd(e,t,r,i),r!==null){var l=it();At(r,e,i,l),Ad(r,t,i)}}function v0(e,t,r){var i=Pn(e),l={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Id(e))Fd(t,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var h=t.lastRenderedState,x=d(h,r);if(l.hasEagerState=!0,l.eagerState=x,_t(x,h)){var S=t.interleaved;S===null?(l.next=l,Wa(t)):(l.next=S.next,S.next=l),t.interleaved=l;return}}catch{}finally{}r=pd(e,t,l,i),r!==null&&(l=it(),At(r,e,i,l),Ad(r,t,i))}}function Id(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Fd(e,t){So=Li=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ad(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,sa(e,r)}}var Ni={readContext:kt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},x0={readContext:kt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Pd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ti(4194308,4,Rd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ti(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ti(4,2,e,t)},useMemo:function(e,t){var r=Vt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Vt();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=y0.bind(null,Re,e),[i.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:jd,useDebugValue:ol,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=jd(!1),t=e[0];return e=g0.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=Re,l=Vt();if(be){if(r===void 0)throw Error(s(407));r=r()}else{if(r=t(),Be===null)throw Error(s(349));(Bn&30)!==0||wd(i,t,r)}l.memoizedState=r;var d={value:r,getSnapshot:t};return l.queue=d,Pd($d.bind(null,i,d,e),[e]),i.flags|=2048,Co(9,Sd.bind(null,i,d,r,t),void 0,null),r},useId:function(){var e=Vt(),t=Be.identifierPrefix;if(be){var r=tn,i=en;r=(i&~(1<<32-Tt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=$o++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=h0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},w0={readContext:kt,useCallback:Td,useContext:kt,useEffect:rl,useImperativeHandle:Ld,useInsertionEffect:bd,useLayoutEffect:zd,useMemo:_d,useReducer:tl,useRef:kd,useState:function(){return tl(Eo)},useDebugValue:ol,useDeferredValue:function(e){var t=Pt();return Nd(t,Ae.memoizedState,e)},useTransition:function(){var e=tl(Eo)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:vd,useSyncExternalStore:xd,useId:Od,unstable_isNewReconciler:!1},S0={readContext:kt,useCallback:Td,useContext:kt,useEffect:rl,useImperativeHandle:Ld,useInsertionEffect:bd,useLayoutEffect:zd,useMemo:_d,useReducer:nl,useRef:kd,useState:function(){return nl(Eo)},useDebugValue:ol,useDeferredValue:function(e){var t=Pt();return Ae===null?t.memoizedState=e:Nd(t,Ae.memoizedState,e)},useTransition:function(){var e=nl(Eo)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:vd,useSyncExternalStore:xd,useId:Od,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function il(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:Y({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Oi={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=it(),l=Pn(e),d=rn(i,l);d.payload=t,r!=null&&(d.callback=r),t=En(e,d,l),t!==null&&(At(t,e,l,i),Pi(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=it(),l=Pn(e),d=rn(i,l);d.tag=1,d.payload=t,r!=null&&(d.callback=r),t=En(e,d,l),t!==null&&(At(t,e,l,i),Pi(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=it(),i=Pn(e),l=rn(r,i);l.tag=2,t!=null&&(l.callback=t),t=En(e,l,i),t!==null&&(At(t,e,i,r),Pi(t,e,i))}};function Md(e,t,r,i,l,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,d,h):t.prototype&&t.prototype.isPureReactComponent?!uo(r,i)||!uo(l,d):!0}function Dd(e,t,r){var i=!1,l=wn,d=t.contextType;return typeof d=="object"&&d!==null?d=kt(d):(l=lt(t)?In:Je.current,i=t.contextTypes,d=(i=i!=null)?gr(e,l):wn),t=new t(r,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oi,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=d),t}function Bd(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Oi.enqueueReplaceState(t,t.state,null)}function sl(e,t,r,i){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},qa(e);var d=t.contextType;typeof d=="object"&&d!==null?l.context=kt(d):(d=lt(t)?In:Je.current,l.context=gr(e,d)),l.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(il(e,t,d,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Oi.enqueueReplaceState(l,l.state,null),bi(e,r,l,i),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t){try{var r="",i=t;do r+=pe(i),i=i.return;while(i);var l=r}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:l,digest:null}}function al(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ll(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var $0=typeof WeakMap=="function"?WeakMap:Map;function Ud(e,t,r){r=rn(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){Ui||(Ui=!0,El=i),ll(e,t)},r}function Hd(e,t,r){r=rn(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var l=t.value;r.payload=function(){return i(l)},r.callback=function(){ll(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){ll(e,t),typeof i!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),r}function Vd(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new $0;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(r)||(l.add(r),e=I0.bind(null,e,t,r),t.then(e,e))}function Wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qd(e,t,r,i,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=rn(-1,1),t.tag=2,En(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var E0=V.ReactCurrentOwner,ut=!1;function ot(e,t,r,i){t.child=e===null?fd(t,null,r,i):wr(t,e.child,r,i)}function Yd(e,t,r,i,l){r=r.render;var d=t.ref;return $r(t,l),i=Za(e,t,r,i,d,l),r=el(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,on(e,t,l)):(be&&r&&Ia(t),t.flags|=1,ot(e,t,i,l),t.child)}function Gd(e,t,r,i,l){if(e===null){var d=r.type;return typeof d=="function"&&!Rl(d)&&d.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=d,Qd(e,t,d,i,l)):(e=Gi(r.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&l)===0){var h=d.memoizedProps;if(r=r.compare,r=r!==null?r:uo,r(h,i)&&e.ref===t.ref)return on(e,t,l)}return t.flags|=1,e=zn(d,i),e.ref=t.ref,e.return=t,t.child=e}function Qd(e,t,r,i,l){if(e!==null){var d=e.memoizedProps;if(uo(d,i)&&e.ref===t.ref)if(ut=!1,t.pendingProps=i=d,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,on(e,t,l)}return ul(e,t,r,i,l)}function Kd(e,t,r){var i=t.pendingProps,l=i.children,d=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(kr,xt),xt|=r;else{if((r&1073741824)===0)return e=d!==null?d.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(kr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=d!==null?d.baseLanes:r,Ce(kr,xt),xt|=i}else d!==null?(i=d.baseLanes|r,t.memoizedState=null):i=r,Ce(kr,xt),xt|=i;return ot(e,t,l,r),t.child}function Xd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ul(e,t,r,i,l){var d=lt(r)?In:Je.current;return d=gr(t,d),$r(t,l),r=Za(e,t,r,i,d,l),i=el(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,on(e,t,l)):(be&&i&&Ia(t),t.flags|=1,ot(e,t,r,l),t.child)}function Jd(e,t,r,i,l){if(lt(r)){var d=!0;xi(t)}else d=!1;if($r(t,l),t.stateNode===null)Fi(e,t),Dd(t,r,i),sl(t,r,i,l),i=!0;else if(e===null){var h=t.stateNode,x=t.memoizedProps;h.props=x;var S=h.context,T=r.contextType;typeof T=="object"&&T!==null?T=kt(T):(T=lt(r)?In:Je.current,T=gr(t,T));var B=r.getDerivedStateFromProps,U=typeof B=="function"||typeof h.getSnapshotBeforeUpdate=="function";U||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==i||S!==T)&&Bd(t,h,i,T),$n=!1;var D=t.memoizedState;h.state=D,bi(t,i,h,l),S=t.memoizedState,x!==i||D!==S||at.current||$n?(typeof B=="function"&&(il(t,r,B,i),S=t.memoizedState),(x=$n||Md(t,r,x,i,D,S,T))?(U||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=S),h.props=i,h.state=S,h.context=T,i=x):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{h=t.stateNode,md(e,t),x=t.memoizedProps,T=t.type===t.elementType?x:Ot(t.type,x),h.props=T,U=t.pendingProps,D=h.context,S=r.contextType,typeof S=="object"&&S!==null?S=kt(S):(S=lt(r)?In:Je.current,S=gr(t,S));var G=r.getDerivedStateFromProps;(B=typeof G=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==U||D!==S)&&Bd(t,h,i,S),$n=!1,D=t.memoizedState,h.state=D,bi(t,i,h,l);var X=t.memoizedState;x!==U||D!==X||at.current||$n?(typeof G=="function"&&(il(t,r,G,i),X=t.memoizedState),(T=$n||Md(t,r,T,i,D,X,S)||!1)?(B||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(i,X,S),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(i,X,S)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=X),h.props=i,h.state=X,h.context=S,i=T):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return cl(e,t,r,i,d,l)}function cl(e,t,r,i,l,d){Xd(e,t);var h=(t.flags&128)!==0;if(!i&&!h)return l&&rd(t,r,!1),on(e,t,d);i=t.stateNode,E0.current=t;var x=h&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&h?(t.child=wr(t,e.child,null,d),t.child=wr(t,null,x,d)):ot(e,t,x,d),t.memoizedState=i.state,l&&rd(t,r,!0),t.child}function Zd(e){var t=e.stateNode;t.pendingContext?td(e,t.pendingContext,t.pendingContext!==t.context):t.context&&td(e,t.context,!1),Ya(e,t.containerInfo)}function ef(e,t,r,i,l){return xr(),Da(l),t.flags|=256,ot(e,t,r,i),t.child}var dl={dehydrated:null,treeContext:null,retryLane:0};function fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function tf(e,t,r){var i=t.pendingProps,l=ze.current,d=!1,h=(t.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(l&2)!==0),x?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ce(ze,l&1),e===null)return Ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=i.children,e=i.fallback,d?(i=t.mode,d=t.child,h={mode:"hidden",children:h},(i&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=h):d=Qi(h,i,0,null),e=qn(e,i,r,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=fl(r),t.memoizedState=dl,e):pl(t,h));if(l=e.memoizedState,l!==null&&(x=l.dehydrated,x!==null))return C0(e,t,h,i,x,l,r);if(d){d=i.fallback,h=t.mode,l=e.child,x=l.sibling;var S={mode:"hidden",children:i.children};return(h&1)===0&&t.child!==l?(i=t.child,i.childLanes=0,i.pendingProps=S,t.deletions=null):(i=zn(l,S),i.subtreeFlags=l.subtreeFlags&14680064),x!==null?d=zn(x,d):(d=qn(d,h,r,null),d.flags|=2),d.return=t,i.return=t,i.sibling=d,t.child=i,i=d,d=t.child,h=e.child.memoizedState,h=h===null?fl(r):{baseLanes:h.baseLanes|r,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~r,t.memoizedState=dl,i}return d=e.child,e=d.sibling,i=zn(d,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function pl(e,t){return t=Qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ii(e,t,r,i){return i!==null&&Da(i),wr(t,e.child,null,r),e=pl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function C0(e,t,r,i,l,d,h){if(r)return t.flags&256?(t.flags&=-257,i=al(Error(s(422))),Ii(e,t,h,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=i.fallback,l=t.mode,i=Qi({mode:"visible",children:i.children},l,0,null),d=qn(d,l,h,null),d.flags|=2,i.return=t,d.return=t,i.sibling=d,t.child=i,(t.mode&1)!==0&&wr(t,e.child,null,h),t.child.memoizedState=fl(h),t.memoizedState=dl,d);if((t.mode&1)===0)return Ii(e,t,h,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var x=i.dgst;return i=x,d=Error(s(419)),i=al(d,i,void 0),Ii(e,t,h,i)}if(x=(h&e.childLanes)!==0,ut||x){if(i=Be,i!==null){switch(h&-h){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(i.suspendedLanes|h))!==0?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,nn(e,l),At(i,e,l,-1))}return zl(),i=al(Error(s(421))),Ii(e,t,h,i)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=F0.bind(null,e),l._reactRetry=t,null):(e=d.treeContext,vt=vn(l.nextSibling),yt=t,be=!0,Nt=null,e!==null&&(Ct[jt++]=en,Ct[jt++]=tn,Ct[jt++]=Fn,en=e.id,tn=e.overflow,Fn=t),t=pl(t,i.children),t.flags|=4096,t)}function nf(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Va(e.return,t,r)}function ml(e,t,r,i,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:l}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=r,d.tailMode=l)}function rf(e,t,r){var i=t.pendingProps,l=i.revealOrder,d=i.tail;if(ot(e,t,i.children,r),i=ze.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,r,t);else if(e.tag===19)nf(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Ce(ze,i),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&zi(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),ml(t,!1,l,r,d);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&zi(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}ml(t,!0,r,null,d);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,r=zn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=zn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function j0(e,t,r){switch(t.tag){case 3:Zd(t),xr();break;case 5:yd(t);break;case 1:lt(t.type)&&xi(t);break;case 4:Ya(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,l=t.memoizedProps.value;Ce(ji,i._currentValue),i._currentValue=l;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Ce(ze,ze.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?tf(e,t,r):(Ce(ze,ze.current&1),e=on(e,t,r),e!==null?e.sibling:null);Ce(ze,ze.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return rf(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ce(ze,ze.current),i)break;return null;case 22:case 23:return t.lanes=0,Kd(e,t,r)}return on(e,t,r)}var of,hl,sf,af;of=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},hl=function(){},sf=function(e,t,r,i){var l=e.memoizedProps;if(l!==i){e=t.stateNode,Dn(Ht.current);var d=null;switch(r){case"input":l=Vs(e,l),i=Vs(e,i),d=[];break;case"select":l=Y({},l,{value:void 0}),i=Y({},i,{value:void 0}),d=[];break;case"textarea":l=Ys(e,l),i=Ys(e,i),d=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=gi)}Qs(r,i);var h;r=null;for(T in l)if(!i.hasOwnProperty(T)&&l.hasOwnProperty(T)&&l[T]!=null)if(T==="style"){var x=l[T];for(h in x)x.hasOwnProperty(h)&&(r||(r={}),r[h]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(c.hasOwnProperty(T)?d||(d=[]):(d=d||[]).push(T,null));for(T in i){var S=i[T];if(x=l!=null?l[T]:void 0,i.hasOwnProperty(T)&&S!==x&&(S!=null||x!=null))if(T==="style")if(x){for(h in x)!x.hasOwnProperty(h)||S&&S.hasOwnProperty(h)||(r||(r={}),r[h]="");for(h in S)S.hasOwnProperty(h)&&x[h]!==S[h]&&(r||(r={}),r[h]=S[h])}else r||(d||(d=[]),d.push(T,r)),r=S;else T==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,x=x?x.__html:void 0,S!=null&&x!==S&&(d=d||[]).push(T,S)):T==="children"?typeof S!="string"&&typeof S!="number"||(d=d||[]).push(T,""+S):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(c.hasOwnProperty(T)?(S!=null&&T==="onScroll"&&je("scroll",e),d||x===S||(d=[])):(d=d||[]).push(T,S))}r&&(d=d||[]).push("style",r);var T=d;(t.updateQueue=T)&&(t.flags|=4)}},af=function(e,t,r,i){r!==i&&(t.flags|=4)};function jo(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function k0(e,t,r){var i=t.pendingProps;switch(Fa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return lt(t.type)&&vi(),et(t),null;case 3:return i=t.stateNode,Er(),ke(at),ke(Je),Ka(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nt!==null&&(kl(Nt),Nt=null))),hl(e,t),et(t),null;case 5:Ga(t);var l=Dn(wo.current);if(r=t.type,e!==null&&t.stateNode!=null)sf(e,t,r,i,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(s(166));return et(t),null}if(e=Dn(Ht.current),Ei(t)){i=t.stateNode,r=t.type;var d=t.memoizedProps;switch(i[Ut]=t,i[ho]=d,e=(t.mode&1)!==0,r){case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":case"embed":je("load",i);break;case"video":case"audio":for(l=0;l<fo.length;l++)je(fo[l],i);break;case"source":je("error",i);break;case"img":case"image":case"link":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"input":Du(i,d),je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!d.multiple},je("invalid",i);break;case"textarea":Hu(i,d),je("invalid",i)}Qs(r,d),l=null;for(var h in d)if(d.hasOwnProperty(h)){var x=d[h];h==="children"?typeof x=="string"?i.textContent!==x&&(d.suppressHydrationWarning!==!0&&hi(i.textContent,x,e),l=["children",x]):typeof x=="number"&&i.textContent!==""+x&&(d.suppressHydrationWarning!==!0&&hi(i.textContent,x,e),l=["children",""+x]):c.hasOwnProperty(h)&&x!=null&&h==="onScroll"&&je("scroll",i)}switch(r){case"input":Xt(i),Uu(i,d,!0);break;case"textarea":Xt(i),Wu(i);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(i.onclick=gi)}i=l,t.updateQueue=i,i!==null&&(t.flags|=4)}else{h=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=h.createElement(r,{is:i.is}):(e=h.createElement(r),r==="select"&&(h=e,i.multiple?h.multiple=!0:i.size&&(h.size=i.size))):e=h.createElementNS(e,r),e[Ut]=t,e[ho]=i,of(e,t,!1,!1),t.stateNode=e;e:{switch(h=Ks(r,i),r){case"dialog":je("cancel",e),je("close",e),l=i;break;case"iframe":case"object":case"embed":je("load",e),l=i;break;case"video":case"audio":for(l=0;l<fo.length;l++)je(fo[l],e);l=i;break;case"source":je("error",e),l=i;break;case"img":case"image":case"link":je("error",e),je("load",e),l=i;break;case"details":je("toggle",e),l=i;break;case"input":Du(e,i),l=Vs(e,i),je("invalid",e);break;case"option":l=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},l=Y({},i,{value:void 0}),je("invalid",e);break;case"textarea":Hu(e,i),l=Ys(e,i),je("invalid",e);break;default:l=i}Qs(r,l),x=l;for(d in x)if(x.hasOwnProperty(d)){var S=x[d];d==="style"?Qu(e,S):d==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&Yu(e,S)):d==="children"?typeof S=="string"?(r!=="textarea"||S!=="")&&qr(e,S):typeof S=="number"&&qr(e,""+S):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(c.hasOwnProperty(d)?S!=null&&d==="onScroll"&&je("scroll",e):S!=null&&F(e,d,S,h))}switch(r){case"input":Xt(e),Uu(e,i,!1);break;case"textarea":Xt(e),Wu(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ge(i.value));break;case"select":e.multiple=!!i.multiple,d=i.value,d!=null?or(e,!!i.multiple,d,!1):i.defaultValue!=null&&or(e,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=gi)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)af(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(r=Dn(wo.current),Dn(Ht.current),Ei(t)){if(i=t.stateNode,r=t.memoizedProps,i[Ut]=t,(d=i.nodeValue!==r)&&(e=yt,e!==null))switch(e.tag){case 3:hi(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hi(i.nodeValue,r,(e.mode&1)!==0)}d&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Ut]=t,t.stateNode=i}return et(t),null;case 13:if(ke(ze),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&vt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ud(),xr(),t.flags|=98560,d=!1;else if(d=Ei(t),i!==null&&i.dehydrated!==null){if(e===null){if(!d)throw Error(s(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[Ut]=t}else xr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),d=!1}else Nt!==null&&(kl(Nt),Nt=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ze.current&1)!==0?Me===0&&(Me=3):zl())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return Er(),hl(e,t),e===null&&po(t.stateNode.containerInfo),et(t),null;case 10:return Ha(t.type._context),et(t),null;case 17:return lt(t.type)&&vi(),et(t),null;case 19:if(ke(ze),d=t.memoizedState,d===null)return et(t),null;if(i=(t.flags&128)!==0,h=d.rendering,h===null)if(i)jo(d,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=zi(e),h!==null){for(t.flags|=128,jo(d,!1),i=h.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)d=r,e=i,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ce(ze,ze.current&1|2),t.child}e=e.sibling}d.tail!==null&&Ne()>Pr&&(t.flags|=128,i=!0,jo(d,!1),t.lanes=4194304)}else{if(!i)if(e=zi(h),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),jo(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!be)return et(t),null}else 2*Ne()-d.renderingStartTime>Pr&&r!==1073741824&&(t.flags|=128,i=!0,jo(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(r=d.last,r!==null?r.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Ne(),t.sibling=null,r=ze.current,Ce(ze,i?r&1|2:r&1),t):(et(t),null);case 22:case 23:return bl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(xt&1073741824)!==0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function P0(e,t){switch(Fa(t),t.tag){case 1:return lt(t.type)&&vi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),ke(at),ke(Je),Ka(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ga(t),null;case 13:if(ke(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(ze),null;case 4:return Er(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return bl(),null;case 24:return null;default:return null}}var Ai=!1,tt=!1,b0=typeof WeakSet=="function"?WeakSet:Set,K=null;function jr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){_e(e,t,i)}else r.current=null}function gl(e,t,r){try{r()}catch(i){_e(e,t,i)}}var lf=!1;function z0(e,t){if(ba=oi,e=Mc(),wa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var l=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var h=0,x=-1,S=-1,T=0,B=0,U=e,D=null;t:for(;;){for(var G;U!==r||l!==0&&U.nodeType!==3||(x=h+l),U!==d||i!==0&&U.nodeType!==3||(S=h+i),U.nodeType===3&&(h+=U.nodeValue.length),(G=U.firstChild)!==null;)D=U,U=G;for(;;){if(U===e)break t;if(D===r&&++T===l&&(x=h),D===d&&++B===i&&(S=h),(G=U.nextSibling)!==null)break;U=D,D=U.parentNode}U=G}r=x===-1||S===-1?null:{start:x,end:S}}else r=null}r=r||{start:0,end:0}}else r=null;for(za={focusedElem:e,selectionRange:r},oi=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var X=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(X!==null){var Z=X.memoizedProps,Oe=X.memoizedState,z=t.stateNode,j=z.getSnapshotBeforeUpdate(t.elementType===t.type?Z:Ot(t.type,Z),Oe);z.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(H){_e(t,t.return,H)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return X=lf,lf=!1,X}function ko(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&e)===e){var d=l.destroy;l.destroy=void 0,d!==void 0&&gl(t,r,d)}l=l.next}while(l!==i)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function yl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function uf(e){var t=e.alternate;t!==null&&(e.alternate=null,uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ut],delete t[ho],delete t[_a],delete t[d0],delete t[f0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cf(e){return e.tag===5||e.tag===3||e.tag===4}function df(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=gi));else if(i!==4&&(e=e.child,e!==null))for(vl(e,t,r),e=e.sibling;e!==null;)vl(e,t,r),e=e.sibling}function xl(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(xl(e,t,r),e=e.sibling;e!==null;)xl(e,t,r),e=e.sibling}var Qe=null,It=!1;function Cn(e,t,r){for(r=r.child;r!==null;)ff(e,t,r),r=r.sibling}function ff(e,t,r){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Jo,r)}catch{}switch(r.tag){case 5:tt||jr(r,t);case 6:var i=Qe,l=It;Qe=null,Cn(e,t,r),Qe=i,It=l,Qe!==null&&(It?(e=Qe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Qe.removeChild(r.stateNode));break;case 18:Qe!==null&&(It?(e=Qe,r=r.stateNode,e.nodeType===8?Ta(e.parentNode,r):e.nodeType===1&&Ta(e,r),ro(e)):Ta(Qe,r.stateNode));break;case 4:i=Qe,l=It,Qe=r.stateNode.containerInfo,It=!0,Cn(e,t,r),Qe=i,It=l;break;case 0:case 11:case 14:case 15:if(!tt&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var d=l,h=d.destroy;d=d.tag,h!==void 0&&((d&2)!==0||(d&4)!==0)&&gl(r,t,h),l=l.next}while(l!==i)}Cn(e,t,r);break;case 1:if(!tt&&(jr(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(x){_e(r,t,x)}Cn(e,t,r);break;case 21:Cn(e,t,r);break;case 22:r.mode&1?(tt=(i=tt)||r.memoizedState!==null,Cn(e,t,r),tt=i):Cn(e,t,r);break;default:Cn(e,t,r)}}function pf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new b0),t.forEach(function(i){var l=A0.bind(null,e,i);r.has(i)||(r.add(i),i.then(l,l))})}}function Ft(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var l=r[i];try{var d=e,h=t,x=h;e:for(;x!==null;){switch(x.tag){case 5:Qe=x.stateNode,It=!1;break e;case 3:Qe=x.stateNode.containerInfo,It=!0;break e;case 4:Qe=x.stateNode.containerInfo,It=!0;break e}x=x.return}if(Qe===null)throw Error(s(160));ff(d,h,l),Qe=null,It=!1;var S=l.alternate;S!==null&&(S.return=null),l.return=null}catch(T){_e(l,t,T)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mf(t,e),t=t.sibling}function mf(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Wt(e),i&4){try{ko(3,e,e.return),Mi(3,e)}catch(Z){_e(e,e.return,Z)}try{ko(5,e,e.return)}catch(Z){_e(e,e.return,Z)}}break;case 1:Ft(t,e),Wt(e),i&512&&r!==null&&jr(r,r.return);break;case 5:if(Ft(t,e),Wt(e),i&512&&r!==null&&jr(r,r.return),e.flags&32){var l=e.stateNode;try{qr(l,"")}catch(Z){_e(e,e.return,Z)}}if(i&4&&(l=e.stateNode,l!=null)){var d=e.memoizedProps,h=r!==null?r.memoizedProps:d,x=e.type,S=e.updateQueue;if(e.updateQueue=null,S!==null)try{x==="input"&&d.type==="radio"&&d.name!=null&&Bu(l,d),Ks(x,h);var T=Ks(x,d);for(h=0;h<S.length;h+=2){var B=S[h],U=S[h+1];B==="style"?Qu(l,U):B==="dangerouslySetInnerHTML"?Yu(l,U):B==="children"?qr(l,U):F(l,B,U,T)}switch(x){case"input":Ws(l,d);break;case"textarea":Vu(l,d);break;case"select":var D=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var G=d.value;G!=null?or(l,!!d.multiple,G,!1):D!==!!d.multiple&&(d.defaultValue!=null?or(l,!!d.multiple,d.defaultValue,!0):or(l,!!d.multiple,d.multiple?[]:"",!1))}l[ho]=d}catch(Z){_e(e,e.return,Z)}}break;case 6:if(Ft(t,e),Wt(e),i&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,d=e.memoizedProps;try{l.nodeValue=d}catch(Z){_e(e,e.return,Z)}}break;case 3:if(Ft(t,e),Wt(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{ro(t.containerInfo)}catch(Z){_e(e,e.return,Z)}break;case 4:Ft(t,e),Wt(e);break;case 13:Ft(t,e),Wt(e),l=e.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||($l=Ne())),i&4&&pf(e);break;case 22:if(B=r!==null&&r.memoizedState!==null,e.mode&1?(tt=(T=tt)||B,Ft(t,e),tt=T):Ft(t,e),Wt(e),i&8192){if(T=e.memoizedState!==null,(e.stateNode.isHidden=T)&&!B&&(e.mode&1)!==0)for(K=e,B=e.child;B!==null;){for(U=K=B;K!==null;){switch(D=K,G=D.child,D.tag){case 0:case 11:case 14:case 15:ko(4,D,D.return);break;case 1:jr(D,D.return);var X=D.stateNode;if(typeof X.componentWillUnmount=="function"){i=D,r=D.return;try{t=i,X.props=t.memoizedProps,X.state=t.memoizedState,X.componentWillUnmount()}catch(Z){_e(i,r,Z)}}break;case 5:jr(D,D.return);break;case 22:if(D.memoizedState!==null){yf(U);continue}}G!==null?(G.return=D,K=G):yf(U)}B=B.sibling}e:for(B=null,U=e;;){if(U.tag===5){if(B===null){B=U;try{l=U.stateNode,T?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(x=U.stateNode,S=U.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null,x.style.display=Gu("display",h))}catch(Z){_e(e,e.return,Z)}}}else if(U.tag===6){if(B===null)try{U.stateNode.nodeValue=T?"":U.memoizedProps}catch(Z){_e(e,e.return,Z)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;B===U&&(B=null),U=U.return}B===U&&(B=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Ft(t,e),Wt(e),i&4&&pf(e);break;case 21:break;default:Ft(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(cf(r)){var i=r;break e}r=r.return}throw Error(s(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(qr(l,""),i.flags&=-33);var d=df(e);xl(e,d,l);break;case 3:case 4:var h=i.stateNode.containerInfo,x=df(e);vl(e,x,h);break;default:throw Error(s(161))}}catch(S){_e(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function R0(e,t,r){K=e,hf(e)}function hf(e,t,r){for(var i=(e.mode&1)!==0;K!==null;){var l=K,d=l.child;if(l.tag===22&&i){var h=l.memoizedState!==null||Ai;if(!h){var x=l.alternate,S=x!==null&&x.memoizedState!==null||tt;x=Ai;var T=tt;if(Ai=h,(tt=S)&&!T)for(K=l;K!==null;)h=K,S=h.child,h.tag===22&&h.memoizedState!==null?vf(l):S!==null?(S.return=h,K=S):vf(l);for(;d!==null;)K=d,hf(d),d=d.sibling;K=l,Ai=x,tt=T}gf(e)}else(l.subtreeFlags&8772)!==0&&d!==null?(d.return=l,K=d):gf(e)}}function gf(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:tt||Mi(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!tt)if(r===null)i.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Ot(t.type,r.memoizedProps);i.componentDidUpdate(l,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&gd(t,d,i);break;case 3:var h=t.updateQueue;if(h!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}gd(t,h,r)}break;case 5:var x=t.stateNode;if(r===null&&t.flags&4){r=x;var S=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&r.focus();break;case"img":S.src&&(r.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var T=t.alternate;if(T!==null){var B=T.memoizedState;if(B!==null){var U=B.dehydrated;U!==null&&ro(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}tt||t.flags&512&&yl(t)}catch(D){_e(t,t.return,D)}}if(t===e){K=null;break}if(r=t.sibling,r!==null){r.return=t.return,K=r;break}K=t.return}}function yf(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var r=t.sibling;if(r!==null){r.return=t.return,K=r;break}K=t.return}}function vf(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Mi(4,t)}catch(S){_e(t,r,S)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var l=t.return;try{i.componentDidMount()}catch(S){_e(t,l,S)}}var d=t.return;try{yl(t)}catch(S){_e(t,d,S)}break;case 5:var h=t.return;try{yl(t)}catch(S){_e(t,h,S)}}}catch(S){_e(t,t.return,S)}if(t===e){K=null;break}var x=t.sibling;if(x!==null){x.return=t.return,K=x;break}K=t.return}}var L0=Math.ceil,Di=V.ReactCurrentDispatcher,wl=V.ReactCurrentOwner,bt=V.ReactCurrentBatchConfig,ye=0,Be=null,Ie=null,Ke=0,xt=0,kr=xn(0),Me=0,Po=null,Un=0,Bi=0,Sl=0,bo=null,ct=null,$l=0,Pr=1/0,sn=null,Ui=!1,El=null,jn=null,Hi=!1,kn=null,Vi=0,zo=0,Cl=null,Wi=-1,qi=0;function it(){return(ye&6)!==0?Ne():Wi!==-1?Wi:Wi=Ne()}function Pn(e){return(e.mode&1)===0?1:(ye&2)!==0&&Ke!==0?Ke&-Ke:m0.transition!==null?(qi===0&&(qi=cc()),qi):(e=$e,e!==0||(e=window.event,e=e===void 0?16:xc(e.type)),e)}function At(e,t,r,i){if(50<zo)throw zo=0,Cl=null,Error(s(185));Jr(e,r,i),((ye&2)===0||e!==Be)&&(e===Be&&((ye&2)===0&&(Bi|=r),Me===4&&bn(e,Ke)),dt(e,i),r===1&&ye===0&&(t.mode&1)===0&&(Pr=Ne()+500,wi&&Sn()))}function dt(e,t){var r=e.callbackNode;mg(e,t);var i=ti(e,e===Be?Ke:0);if(i===0)r!==null&&ac(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&ac(r),t===1)e.tag===0?p0(wf.bind(null,e)):od(wf.bind(null,e)),u0(function(){(ye&6)===0&&Sn()}),r=null;else{switch(dc(i)){case 1:r=ra;break;case 4:r=lc;break;case 16:r=Xo;break;case 536870912:r=uc;break;default:r=Xo}r=bf(r,xf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function xf(e,t){if(Wi=-1,qi=0,(ye&6)!==0)throw Error(s(327));var r=e.callbackNode;if(br()&&e.callbackNode!==r)return null;var i=ti(e,e===Be?Ke:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Yi(e,i);else{t=i;var l=ye;ye|=2;var d=$f();(Be!==e||Ke!==t)&&(sn=null,Pr=Ne()+500,Vn(e,t));do try{N0();break}catch(x){Sf(e,x)}while(!0);Ua(),Di.current=d,ye=l,Ie!==null?t=0:(Be=null,Ke=0,t=Me)}if(t!==0){if(t===2&&(l=oa(e),l!==0&&(i=l,t=jl(e,l))),t===1)throw r=Po,Vn(e,0),bn(e,i),dt(e,Ne()),r;if(t===6)bn(e,i);else{if(l=e.current.alternate,(i&30)===0&&!T0(l)&&(t=Yi(e,i),t===2&&(d=oa(e),d!==0&&(i=d,t=jl(e,d))),t===1))throw r=Po,Vn(e,0),bn(e,i),dt(e,Ne()),r;switch(e.finishedWork=l,e.finishedLanes=i,t){case 0:case 1:throw Error(s(345));case 2:Wn(e,ct,sn);break;case 3:if(bn(e,i),(i&130023424)===i&&(t=$l+500-Ne(),10<t)){if(ti(e,0)!==0)break;if(l=e.suspendedLanes,(l&i)!==i){it(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=La(Wn.bind(null,e,ct,sn),t);break}Wn(e,ct,sn);break;case 4:if(bn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,l=-1;0<i;){var h=31-Tt(i);d=1<<h,h=t[h],h>l&&(l=h),i&=~d}if(i=l,i=Ne()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*L0(i/1960))-i,10<i){e.timeoutHandle=La(Wn.bind(null,e,ct,sn),i);break}Wn(e,ct,sn);break;case 5:Wn(e,ct,sn);break;default:throw Error(s(329))}}}return dt(e,Ne()),e.callbackNode===r?xf.bind(null,e):null}function jl(e,t){var r=bo;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=Yi(e,t),e!==2&&(t=ct,ct=r,t!==null&&kl(t)),e}function kl(e){ct===null?ct=e:ct.push.apply(ct,e)}function T0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var l=r[i],d=l.getSnapshot;l=l.value;try{if(!_t(d(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t){for(t&=~Sl,t&=~Bi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Tt(t),i=1<<r;e[r]=-1,t&=~i}}function wf(e){if((ye&6)!==0)throw Error(s(327));br();var t=ti(e,0);if((t&1)===0)return dt(e,Ne()),null;var r=Yi(e,t);if(e.tag!==0&&r===2){var i=oa(e);i!==0&&(t=i,r=jl(e,i))}if(r===1)throw r=Po,Vn(e,0),bn(e,t),dt(e,Ne()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wn(e,ct,sn),dt(e,Ne()),null}function Pl(e,t){var r=ye;ye|=1;try{return e(t)}finally{ye=r,ye===0&&(Pr=Ne()+500,wi&&Sn())}}function Hn(e){kn!==null&&kn.tag===0&&(ye&6)===0&&br();var t=ye;ye|=1;var r=bt.transition,i=$e;try{if(bt.transition=null,$e=1,e)return e()}finally{$e=i,bt.transition=r,ye=t,(ye&6)===0&&Sn()}}function bl(){xt=kr.current,ke(kr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,l0(r)),Ie!==null)for(r=Ie.return;r!==null;){var i=r;switch(Fa(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vi();break;case 3:Er(),ke(at),ke(Je),Ka();break;case 5:Ga(i);break;case 4:Er();break;case 13:ke(ze);break;case 19:ke(ze);break;case 10:Ha(i.type._context);break;case 22:case 23:bl()}r=r.return}if(Be=e,Ie=e=zn(e.current,null),Ke=xt=t,Me=0,Po=null,Sl=Bi=Un=0,ct=bo=null,Mn!==null){for(t=0;t<Mn.length;t++)if(r=Mn[t],i=r.interleaved,i!==null){r.interleaved=null;var l=i.next,d=r.pending;if(d!==null){var h=d.next;d.next=l,i.next=h}r.pending=i}Mn=null}return e}function Sf(e,t){do{var r=Ie;try{if(Ua(),Ri.current=Ni,Li){for(var i=Re.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}Li=!1}if(Bn=0,De=Ae=Re=null,So=!1,$o=0,wl.current=null,r===null||r.return===null){Me=1,Po=t,Ie=null;break}e:{var d=e,h=r.return,x=r,S=t;if(t=Ke,x.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var T=S,B=x,U=B.tag;if((B.mode&1)===0&&(U===0||U===11||U===15)){var D=B.alternate;D?(B.updateQueue=D.updateQueue,B.memoizedState=D.memoizedState,B.lanes=D.lanes):(B.updateQueue=null,B.memoizedState=null)}var G=Wd(h);if(G!==null){G.flags&=-257,qd(G,h,x,d,t),G.mode&1&&Vd(d,T,t),t=G,S=T;var X=t.updateQueue;if(X===null){var Z=new Set;Z.add(S),t.updateQueue=Z}else X.add(S);break e}else{if((t&1)===0){Vd(d,T,t),zl();break e}S=Error(s(426))}}else if(be&&x.mode&1){var Oe=Wd(h);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),qd(Oe,h,x,d,t),Da(Cr(S,x));break e}}d=S=Cr(S,x),Me!==4&&(Me=2),bo===null?bo=[d]:bo.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var z=Ud(d,S,t);hd(d,z);break e;case 1:x=S;var j=d.type,L=d.stateNode;if((d.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(jn===null||!jn.has(L)))){d.flags|=65536,t&=-t,d.lanes|=t;var H=Hd(d,x,t);hd(d,H);break e}}d=d.return}while(d!==null)}Cf(r)}catch(ee){t=ee,Ie===r&&r!==null&&(Ie=r=r.return);continue}break}while(!0)}function $f(){var e=Di.current;return Di.current=Ni,e===null?Ni:e}function zl(){(Me===0||Me===3||Me===2)&&(Me=4),Be===null||(Un&268435455)===0&&(Bi&268435455)===0||bn(Be,Ke)}function Yi(e,t){var r=ye;ye|=2;var i=$f();(Be!==e||Ke!==t)&&(sn=null,Vn(e,t));do try{_0();break}catch(l){Sf(e,l)}while(!0);if(Ua(),ye=r,Di.current=i,Ie!==null)throw Error(s(261));return Be=null,Ke=0,Me}function _0(){for(;Ie!==null;)Ef(Ie)}function N0(){for(;Ie!==null&&!ig();)Ef(Ie)}function Ef(e){var t=Pf(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?Cf(e):Ie=t,wl.current=null}function Cf(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=k0(r,t,xt),r!==null){Ie=r;return}}else{if(r=P0(r,t),r!==null){r.flags&=32767,Ie=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Ie=null;return}}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Me===0&&(Me=5)}function Wn(e,t,r){var i=$e,l=bt.transition;try{bt.transition=null,$e=1,O0(e,t,r,i)}finally{bt.transition=l,$e=i}return null}function O0(e,t,r,i){do br();while(kn!==null);if((ye&6)!==0)throw Error(s(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var d=r.lanes|r.childLanes;if(hg(e,d),e===Be&&(Ie=Be=null,Ke=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Hi||(Hi=!0,bf(Xo,function(){return br(),null})),d=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||d){d=bt.transition,bt.transition=null;var h=$e;$e=1;var x=ye;ye|=4,wl.current=null,z0(e,r),mf(r,e),t0(za),oi=!!ba,za=ba=null,e.current=r,R0(r),sg(),ye=x,$e=h,bt.transition=d}else e.current=r;if(Hi&&(Hi=!1,kn=e,Vi=l),d=e.pendingLanes,d===0&&(jn=null),ug(r.stateNode),dt(e,Ne()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],i(l.value,{componentStack:l.stack,digest:l.digest});if(Ui)throw Ui=!1,e=El,El=null,e;return(Vi&1)!==0&&e.tag!==0&&br(),d=e.pendingLanes,(d&1)!==0?e===Cl?zo++:(zo=0,Cl=e):zo=0,Sn(),null}function br(){if(kn!==null){var e=dc(Vi),t=bt.transition,r=$e;try{if(bt.transition=null,$e=16>e?16:e,kn===null)var i=!1;else{if(e=kn,kn=null,Vi=0,(ye&6)!==0)throw Error(s(331));var l=ye;for(ye|=4,K=e.current;K!==null;){var d=K,h=d.child;if((K.flags&16)!==0){var x=d.deletions;if(x!==null){for(var S=0;S<x.length;S++){var T=x[S];for(K=T;K!==null;){var B=K;switch(B.tag){case 0:case 11:case 15:ko(8,B,d)}var U=B.child;if(U!==null)U.return=B,K=U;else for(;K!==null;){B=K;var D=B.sibling,G=B.return;if(uf(B),B===T){K=null;break}if(D!==null){D.return=G,K=D;break}K=G}}}var X=d.alternate;if(X!==null){var Z=X.child;if(Z!==null){X.child=null;do{var Oe=Z.sibling;Z.sibling=null,Z=Oe}while(Z!==null)}}K=d}}if((d.subtreeFlags&2064)!==0&&h!==null)h.return=d,K=h;else e:for(;K!==null;){if(d=K,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:ko(9,d,d.return)}var z=d.sibling;if(z!==null){z.return=d.return,K=z;break e}K=d.return}}var j=e.current;for(K=j;K!==null;){h=K;var L=h.child;if((h.subtreeFlags&2064)!==0&&L!==null)L.return=h,K=L;else e:for(h=j;K!==null;){if(x=K,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:Mi(9,x)}}catch(ee){_e(x,x.return,ee)}if(x===h){K=null;break e}var H=x.sibling;if(H!==null){H.return=x.return,K=H;break e}K=x.return}}if(ye=l,Sn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Jo,e)}catch{}i=!0}return i}finally{$e=r,bt.transition=t}}return!1}function jf(e,t,r){t=Cr(r,t),t=Ud(e,t,1),e=En(e,t,1),t=it(),e!==null&&(Jr(e,1,t),dt(e,t))}function _e(e,t,r){if(e.tag===3)jf(e,e,r);else for(;t!==null;){if(t.tag===3){jf(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(jn===null||!jn.has(i))){e=Cr(r,e),e=Hd(t,e,1),t=En(t,e,1),e=it(),t!==null&&(Jr(t,1,e),dt(t,e));break}}t=t.return}}function I0(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&r,Be===e&&(Ke&r)===r&&(Me===4||Me===3&&(Ke&130023424)===Ke&&500>Ne()-$l?Vn(e,0):Sl|=r),dt(e,t)}function kf(e,t){t===0&&((e.mode&1)===0?t=1:(t=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var r=it();e=nn(e,t),e!==null&&(Jr(e,t,r),dt(e,r))}function F0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),kf(e,r)}function A0(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(s(314))}i!==null&&i.delete(t),kf(e,r)}var Pf;Pf=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)ut=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ut=!1,j0(e,t,r);ut=(e.flags&131072)!==0}else ut=!1,be&&(t.flags&1048576)!==0&&id(t,$i,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Fi(e,t),e=t.pendingProps;var l=gr(t,Je.current);$r(t,r),l=Za(null,t,i,e,l,r);var d=el();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(i)?(d=!0,xi(t)):d=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,qa(t),l.updater=Oi,t.stateNode=l,l._reactInternals=t,sl(t,i,e,r),t=cl(null,t,i,!0,d,r)):(t.tag=0,be&&d&&Ia(t),ot(null,t,l,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Fi(e,t),e=t.pendingProps,l=i._init,i=l(i._payload),t.type=i,l=t.tag=D0(i),e=Ot(i,e),l){case 0:t=ul(null,t,i,e,r);break e;case 1:t=Jd(null,t,i,e,r);break e;case 11:t=Yd(null,t,i,e,r);break e;case 14:t=Gd(null,t,i,Ot(i.type,e),r);break e}throw Error(s(306,i,""))}return t;case 0:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Ot(i,l),ul(e,t,i,l,r);case 1:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Ot(i,l),Jd(e,t,i,l,r);case 3:e:{if(Zd(t),e===null)throw Error(s(387));i=t.pendingProps,d=t.memoizedState,l=d.element,md(e,t),bi(t,i,null,r);var h=t.memoizedState;if(i=h.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){l=Cr(Error(s(423)),t),t=ef(e,t,i,r,l);break e}else if(i!==l){l=Cr(Error(s(424)),t),t=ef(e,t,i,r,l);break e}else for(vt=vn(t.stateNode.containerInfo.firstChild),yt=t,be=!0,Nt=null,r=fd(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(xr(),i===l){t=on(e,t,r);break e}ot(e,t,i,r)}t=t.child}return t;case 5:return yd(t),e===null&&Ma(t),i=t.type,l=t.pendingProps,d=e!==null?e.memoizedProps:null,h=l.children,Ra(i,l)?h=null:d!==null&&Ra(i,d)&&(t.flags|=32),Xd(e,t),ot(e,t,h,r),t.child;case 6:return e===null&&Ma(t),null;case 13:return tf(e,t,r);case 4:return Ya(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=wr(t,null,i,r):ot(e,t,i,r),t.child;case 11:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Ot(i,l),Yd(e,t,i,l,r);case 7:return ot(e,t,t.pendingProps,r),t.child;case 8:return ot(e,t,t.pendingProps.children,r),t.child;case 12:return ot(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,l=t.pendingProps,d=t.memoizedProps,h=l.value,Ce(ji,i._currentValue),i._currentValue=h,d!==null)if(_t(d.value,h)){if(d.children===l.children&&!at.current){t=on(e,t,r);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var x=d.dependencies;if(x!==null){h=d.child;for(var S=x.firstContext;S!==null;){if(S.context===i){if(d.tag===1){S=rn(-1,r&-r),S.tag=2;var T=d.updateQueue;if(T!==null){T=T.shared;var B=T.pending;B===null?S.next=S:(S.next=B.next,B.next=S),T.pending=S}}d.lanes|=r,S=d.alternate,S!==null&&(S.lanes|=r),Va(d.return,r,t),x.lanes|=r;break}S=S.next}}else if(d.tag===10)h=d.type===t.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(s(341));h.lanes|=r,x=h.alternate,x!==null&&(x.lanes|=r),Va(h,r,t),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===t){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}ot(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,i=t.pendingProps.children,$r(t,r),l=kt(l),i=i(l),t.flags|=1,ot(e,t,i,r),t.child;case 14:return i=t.type,l=Ot(i,t.pendingProps),l=Ot(i.type,l),Gd(e,t,i,l,r);case 15:return Qd(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Ot(i,l),Fi(e,t),t.tag=1,lt(i)?(e=!0,xi(t)):e=!1,$r(t,r),Dd(t,i,l),sl(t,i,l,r),cl(null,t,i,!0,e,r);case 19:return rf(e,t,r);case 22:return Kd(e,t,r)}throw Error(s(156,t.tag))};function bf(e,t){return sc(e,t)}function M0(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,r,i){return new M0(e,t,r,i)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function D0(e){if(typeof e=="function")return Rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$t)return 11;if(e===Et)return 14}return 2}function zn(e,t){var r=e.alternate;return r===null?(r=zt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Gi(e,t,r,i,l,d){var h=2;if(i=e,typeof e=="function")Rl(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case q:return qn(r.children,l,d,t);case ne:h=8,l|=8;break;case he:return e=zt(12,r,t,l|2),e.elementType=he,e.lanes=d,e;case rt:return e=zt(13,r,t,l),e.elementType=rt,e.lanes=d,e;case ht:return e=zt(19,r,t,l),e.elementType=ht,e.lanes=d,e;case Ee:return Qi(r,l,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Te:h=10;break e;case St:h=9;break e;case $t:h=11;break e;case Et:h=14;break e;case Xe:h=16,i=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=zt(h,r,t,l),t.elementType=e,t.type=i,t.lanes=d,t}function qn(e,t,r,i){return e=zt(7,e,i,t),e.lanes=r,e}function Qi(e,t,r,i){return e=zt(22,e,i,t),e.elementType=Ee,e.lanes=r,e.stateNode={isHidden:!1},e}function Ll(e,t,r){return e=zt(6,e,null,t),e.lanes=r,e}function Tl(e,t,r){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function B0(e,t,r,i,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function _l(e,t,r,i,l,d,h,x,S){return e=new B0(e,t,r,x,S),t===1?(t=1,d===!0&&(t|=8)):t=0,d=zt(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},qa(d),e}function U0(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function zf(e){if(!e)return wn;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(lt(r))return nd(e,r,t)}return t}function Rf(e,t,r,i,l,d,h,x,S){return e=_l(r,i,!0,e,l,d,h,x,S),e.context=zf(null),r=e.current,i=it(),l=Pn(r),d=rn(i,l),d.callback=t??null,En(r,d,l),e.current.lanes=l,Jr(e,l,i),dt(e,i),e}function Ki(e,t,r,i){var l=t.current,d=it(),h=Pn(l);return r=zf(r),t.context===null?t.context=r:t.pendingContext=r,t=rn(d,h),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=En(l,t,h),e!==null&&(At(e,l,h,d),Pi(e,l,h)),h}function Xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Nl(e,t){Lf(e,t),(e=e.alternate)&&Lf(e,t)}function H0(){return null}var Tf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ol(e){this._internalRoot=e}Ji.prototype.render=Ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ki(e,t,null,null)},Ji.prototype.unmount=Ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){Ki(null,e,null,null)}),t[Jt]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=mc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<hn.length&&t!==0&&t<hn[r].priority;r++);hn.splice(r,0,e),r===0&&yc(e)}};function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _f(){}function V0(e,t,r,i,l){if(l){if(typeof i=="function"){var d=i;i=function(){var T=Xi(h);d.call(T)}}var h=Rf(t,i,e,0,null,!1,!1,"",_f);return e._reactRootContainer=h,e[Jt]=h.current,po(e.nodeType===8?e.parentNode:e),Hn(),h}for(;l=e.lastChild;)e.removeChild(l);if(typeof i=="function"){var x=i;i=function(){var T=Xi(S);x.call(T)}}var S=_l(e,0,!1,null,null,!1,!1,"",_f);return e._reactRootContainer=S,e[Jt]=S.current,po(e.nodeType===8?e.parentNode:e),Hn(function(){Ki(t,S,r,i)}),S}function es(e,t,r,i,l){var d=r._reactRootContainer;if(d){var h=d;if(typeof l=="function"){var x=l;l=function(){var S=Xi(h);x.call(S)}}Ki(t,h,e,l)}else h=V0(r,t,e,l,i);return Xi(h)}fc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Xr(t.pendingLanes);r!==0&&(sa(t,r|1),dt(t,Ne()),(ye&6)===0&&(Pr=Ne()+500,Sn()))}break;case 13:Hn(function(){var i=nn(e,1);if(i!==null){var l=it();At(i,e,1,l)}}),Nl(e,1)}},aa=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var r=it();At(t,e,134217728,r)}Nl(e,134217728)}},pc=function(e){if(e.tag===13){var t=Pn(e),r=nn(e,t);if(r!==null){var i=it();At(r,e,t,i)}Nl(e,t)}},mc=function(){return $e},hc=function(e,t){var r=$e;try{return $e=e,t()}finally{$e=r}},Zs=function(e,t,r){switch(t){case"input":if(Ws(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var l=yi(i);if(!l)throw Error(s(90));Lt(i),Ws(i,l)}}}break;case"textarea":Vu(e,r);break;case"select":t=r.value,t!=null&&or(e,!!r.multiple,t,!1)}},Zu=Pl,ec=Hn;var W0={usingClientEntryPoint:!1,Events:[go,mr,yi,Xu,Ju,Pl]},Ro={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q0={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:V.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||H0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{Jo=ts.inject(q0),Bt=ts}catch{}}return ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W0,ft.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Il(t))throw Error(s(200));return U0(e,t,null,r)},ft.createRoot=function(e,t){if(!Il(e))throw Error(s(299));var r=!1,i="",l=Tf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=_l(e,1,!1,null,null,r,!1,i,l),e[Jt]=t.current,po(e.nodeType===8?e.parentNode:e),new Ol(t)},ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=oc(t),e=e===null?null:e.stateNode,e},ft.flushSync=function(e){return Hn(e)},ft.hydrate=function(e,t,r){if(!Zi(t))throw Error(s(200));return es(null,e,t,!0,r)},ft.hydrateRoot=function(e,t,r){if(!Il(e))throw Error(s(405));var i=r!=null&&r.hydratedSources||null,l=!1,d="",h=Tf;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),t=Rf(t,null,e,1,r??null,l,!1,d,h),e[Jt]=t.current,po(e),i)for(e=0;e<i.length;e++)r=i[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Ji(t)},ft.render=function(e,t,r){if(!Zi(t))throw Error(s(200));return es(null,e,t,!1,r)},ft.unmountComponentAtNode=function(e){if(!Zi(e))throw Error(s(40));return e._reactRootContainer?(Hn(function(){es(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1},ft.unstable_batchedUpdates=Pl,ft.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Zi(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return es(e,t,r,!1,i)},ft.version="18.3.1-next-f1338f8080-20240426",ft}var Bf;function t1(){if(Bf)return Ml.exports;Bf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Ml.exports=e1(),Ml.exports}var Uf;function n1(){if(Uf)return ns;Uf=1;var n=t1();return ns.createRoot=n.createRoot,ns.hydrateRoot=n.hydrateRoot,ns}var r1=n1(),To={},Hf;function o1(){if(Hf)return To;Hf=1,Object.defineProperty(To,"__esModule",{value:!0}),To.parse=m,To.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,s=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,p=(()=>{const k=function(){};return k.prototype=Object.create(null),k})();function m(k,O){const P=new p,_=k.length;if(_<2)return P;const R=(O==null?void 0:O.decode)||w;let N=0;do{const A=k.indexOf("=",N);if(A===-1)break;const F=k.indexOf(";",N),V=F===-1?_:F;if(A>V){N=k.lastIndexOf(";",A-1)+1;continue}const Q=g(k,N,A),J=v(k,A,Q),q=k.slice(Q,J);if(P[q]===void 0){let ne=g(k,A+1,V),he=v(k,V,ne);const Te=R(k.slice(ne,he));P[q]=Te}N=V+1}while(N<_);return P}function g(k,O,P){do{const _=k.charCodeAt(O);if(_!==32&&_!==9)return O}while(++O<P);return P}function v(k,O,P){for(;O>P;){const _=k.charCodeAt(--O);if(_!==32&&_!==9)return O+1}return P}function y(k,O,P){const _=(P==null?void 0:P.encode)||encodeURIComponent;if(!n.test(k))throw new TypeError(`argument name is invalid: ${k}`);const R=_(O);if(!o.test(R))throw new TypeError(`argument val is invalid: ${O}`);let N=k+"="+R;if(!P)return N;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);N+="; Max-Age="+P.maxAge}if(P.domain){if(!s.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);N+="; Domain="+P.domain}if(P.path){if(!a.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);N+="; Path="+P.path}if(P.expires){if(!$(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);N+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(N+="; HttpOnly"),P.secure&&(N+="; Secure"),P.partitioned&&(N+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":N+="; Priority=Low";break;case"medium":N+="; Priority=Medium";break;case"high":N+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":N+="; SameSite=Strict";break;case"lax":N+="; SameSite=Lax";break;case"none":N+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return N}function w(k){if(k.indexOf("%")===-1)return k;try{return decodeURIComponent(k)}catch{return k}}function $(k){return c.call(k)==="[object Date]"}return To}o1();var Vf="popstate";function i1(n={}){function o(a,c){let{pathname:p,search:m,hash:g}=a.location;return nu("",{pathname:p,search:m,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function s(a,c){return typeof c=="string"?c:Fo(c)}return a1(o,s,null,n)}function Le(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function Gt(n,o){if(!n){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function s1(){return Math.random().toString(36).substring(2,10)}function Wf(n,o){return{usr:n.state,key:n.key,idx:o}}function nu(n,o,s=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof o=="string"?Mr(o):o,state:s,key:o&&o.key||a||s1()}}function Fo({pathname:n="/",search:o="",hash:s=""}){return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Mr(n){let o={};if(n){let s=n.indexOf("#");s>=0&&(o.hash=n.substring(s),n=n.substring(0,s));let a=n.indexOf("?");a>=0&&(o.search=n.substring(a),n=n.substring(0,a)),n&&(o.pathname=n)}return o}function a1(n,o,s,a={}){let{window:c=document.defaultView,v5Compat:p=!1}=a,m=c.history,g="POP",v=null,y=w();y==null&&(y=0,m.replaceState({...m.state,idx:y},""));function w(){return(m.state||{idx:null}).idx}function $(){g="POP";let R=w(),N=R==null?null:R-y;y=R,v&&v({action:g,location:_.location,delta:N})}function k(R,N){g="PUSH";let A=nu(_.location,R,N);y=w()+1;let F=Wf(A,y),V=_.createHref(A);try{m.pushState(F,"",V)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;c.location.assign(V)}p&&v&&v({action:g,location:_.location,delta:1})}function O(R,N){g="REPLACE";let A=nu(_.location,R,N);y=w();let F=Wf(A,y),V=_.createHref(A);m.replaceState(F,"",V),p&&v&&v({action:g,location:_.location,delta:0})}function P(R){return l1(R)}let _={get action(){return g},get location(){return n(c,m)},listen(R){if(v)throw new Error("A history only accepts one active listener");return c.addEventListener(Vf,$),v=R,()=>{c.removeEventListener(Vf,$),v=null}},createHref(R){return o(c,R)},createURL:P,encodeLocation(R){let N=P(R);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:k,replace:O,go(R){return m.go(R)}};return _}function l1(n,o=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Le(s,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:Fo(n);return a=a.replace(/ $/,"%20"),!o&&a.startsWith("//")&&(a=s+a),new URL(a,s)}function Qp(n,o,s="/"){return u1(n,o,s,!1)}function u1(n,o,s,a){let c=typeof o=="string"?Mr(o):o,p=dn(c.pathname||"/",s);if(p==null)return null;let m=Kp(n);c1(m);let g=null;for(let v=0;g==null&&v<m.length;++v){let y=S1(p);g=x1(m[v],y,a)}return g}function Kp(n,o=[],s=[],a=""){let c=(p,m,g)=>{let v={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:m,route:p};v.relativePath.startsWith("/")&&(Le(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length));let y=cn([a,v.relativePath]),w=s.concat(v);p.children&&p.children.length>0&&(Le(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Kp(p.children,o,w,y)),!(p.path==null&&!p.index)&&o.push({path:y,score:y1(y,p.index),routesMeta:w})};return n.forEach((p,m)=>{var g;if(p.path===""||!((g=p.path)!=null&&g.includes("?")))c(p,m);else for(let v of Xp(p.path))c(p,m,v)}),o}function Xp(n){let o=n.split("/");if(o.length===0)return[];let[s,...a]=o,c=s.endsWith("?"),p=s.replace(/\?$/,"");if(a.length===0)return c?[p,""]:[p];let m=Xp(a.join("/")),g=[];return g.push(...m.map(v=>v===""?p:[p,v].join("/"))),c&&g.push(...m),g.map(v=>n.startsWith("/")&&v===""?"/":v)}function c1(n){n.sort((o,s)=>o.score!==s.score?s.score-o.score:v1(o.routesMeta.map(a=>a.childrenIndex),s.routesMeta.map(a=>a.childrenIndex)))}var d1=/^:[\w-]+$/,f1=3,p1=2,m1=1,h1=10,g1=-2,qf=n=>n==="*";function y1(n,o){let s=n.split("/"),a=s.length;return s.some(qf)&&(a+=g1),o&&(a+=p1),s.filter(c=>!qf(c)).reduce((c,p)=>c+(d1.test(p)?f1:p===""?m1:h1),a)}function v1(n,o){return n.length===o.length&&n.slice(0,-1).every((a,c)=>a===o[c])?n[n.length-1]-o[o.length-1]:0}function x1(n,o,s=!1){let{routesMeta:a}=n,c={},p="/",m=[];for(let g=0;g<a.length;++g){let v=a[g],y=g===a.length-1,w=p==="/"?o:o.slice(p.length)||"/",$=vs({path:v.relativePath,caseSensitive:v.caseSensitive,end:y},w),k=v.route;if(!$&&y&&s&&!a[a.length-1].route.index&&($=vs({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},w)),!$)return null;Object.assign(c,$.params),m.push({params:c,pathname:cn([p,$.pathname]),pathnameBase:j1(cn([p,$.pathnameBase])),route:k}),$.pathnameBase!=="/"&&(p=cn([p,$.pathnameBase]))}return m}function vs(n,o){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,a]=w1(n.path,n.caseSensitive,n.end),c=o.match(s);if(!c)return null;let p=c[0],m=p.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:a.reduce((y,{paramName:w,isOptional:$},k)=>{if(w==="*"){let P=g[k]||"";m=p.slice(0,p.length-P.length).replace(/(.)\/+$/,"$1")}const O=g[k];return $&&!O?y[w]=void 0:y[w]=(O||"").replace(/%2F/g,"/"),y},{}),pathname:p,pathnameBase:m,pattern:n}}function w1(n,o=!1,s=!0){Gt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,g,v)=>(a.push({paramName:g,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,o?void 0:"i"),a]}function S1(n){try{return n.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Gt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),n}}function dn(n,o){if(o==="/")return n;if(!n.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,a=n.charAt(s);return a&&a!=="/"?null:n.slice(s)||"/"}function $1(n,o="/"){let{pathname:s,search:a="",hash:c=""}=typeof n=="string"?Mr(n):n;return{pathname:s?s.startsWith("/")?s:E1(s,o):o,search:k1(a),hash:P1(c)}}function E1(n,o){let s=o.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function Ul(n,o,s,a){return`Cannot include a '${n}' character in a manually specified \`to.${o}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function C1(n){return n.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function Jp(n){let o=C1(n);return o.map((s,a)=>a===o.length-1?s.pathname:s.pathnameBase)}function Zp(n,o,s,a=!1){let c;typeof n=="string"?c=Mr(n):(c={...n},Le(!c.pathname||!c.pathname.includes("?"),Ul("?","pathname","search",c)),Le(!c.pathname||!c.pathname.includes("#"),Ul("#","pathname","hash",c)),Le(!c.search||!c.search.includes("#"),Ul("#","search","hash",c)));let p=n===""||c.pathname==="",m=p?"/":c.pathname,g;if(m==null)g=s;else{let $=o.length-1;if(!a&&m.startsWith("..")){let k=m.split("/");for(;k[0]==="..";)k.shift(),$-=1;c.pathname=k.join("/")}g=$>=0?o[$]:"/"}let v=$1(c,g),y=m&&m!=="/"&&m.endsWith("/"),w=(p||m===".")&&s.endsWith("/");return!v.pathname.endsWith("/")&&(y||w)&&(v.pathname+="/"),v}var cn=n=>n.join("/").replace(/\/\/+/g,"/"),j1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),k1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,P1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function b1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var em=["POST","PUT","PATCH","DELETE"];new Set(em);var z1=["GET",...em];new Set(z1);var Dr=E.createContext(null);Dr.displayName="DataRouter";var bs=E.createContext(null);bs.displayName="DataRouterState";var tm=E.createContext({isTransitioning:!1});tm.displayName="ViewTransition";var R1=E.createContext(new Map);R1.displayName="Fetchers";var L1=E.createContext(null);L1.displayName="Await";var Qt=E.createContext(null);Qt.displayName="Navigation";var Bo=E.createContext(null);Bo.displayName="Location";var Kt=E.createContext({outlet:null,matches:[],isDataRoute:!1});Kt.displayName="Route";var $u=E.createContext(null);$u.displayName="RouteError";function T1(n,{relative:o}={}){Le(Uo(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:a}=E.useContext(Qt),{hash:c,pathname:p,search:m}=Vo(n,{relative:o}),g=p;return s!=="/"&&(g=p==="/"?s:cn([s,p])),a.createHref({pathname:g,search:m,hash:c})}function Uo(){return E.useContext(Bo)!=null}function rr(){return Le(Uo(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Bo).location}var nm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function rm(n){E.useContext(Qt).static||E.useLayoutEffect(n)}function Ho(){let{isDataRoute:n}=E.useContext(Kt);return n?W1():_1()}function _1(){Le(Uo(),"useNavigate() may be used only in the context of a <Router> component.");let n=E.useContext(Dr),{basename:o,navigator:s}=E.useContext(Qt),{matches:a}=E.useContext(Kt),{pathname:c}=rr(),p=JSON.stringify(Jp(a)),m=E.useRef(!1);return rm(()=>{m.current=!0}),E.useCallback((v,y={})=>{if(Gt(m.current,nm),!m.current)return;if(typeof v=="number"){s.go(v);return}let w=Zp(v,JSON.parse(p),c,y.relative==="path");n==null&&o!=="/"&&(w.pathname=w.pathname==="/"?o:cn([o,w.pathname])),(y.replace?s.replace:s.push)(w,y.state,y)},[o,s,p,c,n])}E.createContext(null);function om(){let{matches:n}=E.useContext(Kt),o=n[n.length-1];return o?o.params:{}}function Vo(n,{relative:o}={}){let{matches:s}=E.useContext(Kt),{pathname:a}=rr(),c=JSON.stringify(Jp(s));return E.useMemo(()=>Zp(n,JSON.parse(c),a,o==="path"),[n,c,a,o])}function N1(n,o){return im(n,o)}function im(n,o,s,a){var A;Le(Uo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c,static:p}=E.useContext(Qt),{matches:m}=E.useContext(Kt),g=m[m.length-1],v=g?g.params:{},y=g?g.pathname:"/",w=g?g.pathnameBase:"/",$=g&&g.route;{let F=$&&$.path||"";sm(y,!$||F.endsWith("*")||F.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${F==="/"?"*":`${F}/*`}">.`)}let k=rr(),O;if(o){let F=typeof o=="string"?Mr(o):o;Le(w==="/"||((A=F.pathname)==null?void 0:A.startsWith(w)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${F.pathname}" was given in the \`location\` prop.`),O=F}else O=k;let P=O.pathname||"/",_=P;if(w!=="/"){let F=w.replace(/^\//,"").split("/");_="/"+P.replace(/^\//,"").split("/").slice(F.length).join("/")}let R=!p&&s&&s.matches&&s.matches.length>0?s.matches:Qp(n,{pathname:_});Gt($||R!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),Gt(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=M1(R&&R.map(F=>Object.assign({},F,{params:Object.assign({},v,F.params),pathname:cn([w,c.encodeLocation?c.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?w:cn([w,c.encodeLocation?c.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),m,s,a);return o&&N?E.createElement(Bo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},N):N}function O1(){let n=V1(),o=b1(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:a},p={padding:"2px 4px",backgroundColor:a},m=null;return console.error("Error handled by React Router default ErrorBoundary:",n),m=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:p},"ErrorBoundary")," or"," ",E.createElement("code",{style:p},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},o),s?E.createElement("pre",{style:c},s):null,m)}var I1=E.createElement(O1,null),F1=class extends E.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){console.error("React Router caught the following error during render",n,o)}render(){return this.state.error!==void 0?E.createElement(Kt.Provider,{value:this.props.routeContext},E.createElement($u.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function A1({routeContext:n,match:o,children:s}){let a=E.useContext(Dr);return a&&a.static&&a.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=o.route.id),E.createElement(Kt.Provider,{value:n},s)}function M1(n,o=[],s=null,a=null){if(n==null){if(!s)return null;if(s.errors)n=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let c=n,p=s==null?void 0:s.errors;if(p!=null){let v=c.findIndex(y=>y.route.id&&(p==null?void 0:p[y.route.id])!==void 0);Le(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let m=!1,g=-1;if(s)for(let v=0;v<c.length;v++){let y=c[v];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(g=v),y.route.id){let{loaderData:w,errors:$}=s,k=y.route.loader&&!w.hasOwnProperty(y.route.id)&&(!$||$[y.route.id]===void 0);if(y.route.lazy||k){m=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((v,y,w)=>{let $,k=!1,O=null,P=null;s&&($=p&&y.route.id?p[y.route.id]:void 0,O=y.route.errorElement||I1,m&&(g<0&&w===0?(sm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,P=null):g===w&&(k=!0,P=y.route.hydrateFallbackElement||null)));let _=o.concat(c.slice(0,w+1)),R=()=>{let N;return $?N=O:k?N=P:y.route.Component?N=E.createElement(y.route.Component,null):y.route.element?N=y.route.element:N=v,E.createElement(A1,{match:y,routeContext:{outlet:v,matches:_,isDataRoute:s!=null},children:N})};return s&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?E.createElement(F1,{location:s.location,revalidation:s.revalidation,component:O,error:$,children:R(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):R()},null)}function Eu(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function D1(n){let o=E.useContext(Dr);return Le(o,Eu(n)),o}function B1(n){let o=E.useContext(bs);return Le(o,Eu(n)),o}function U1(n){let o=E.useContext(Kt);return Le(o,Eu(n)),o}function Cu(n){let o=U1(n),s=o.matches[o.matches.length-1];return Le(s.route.id,`${n} can only be used on routes that contain a unique "id"`),s.route.id}function H1(){return Cu("useRouteId")}function V1(){var a;let n=E.useContext($u),o=B1("useRouteError"),s=Cu("useRouteError");return n!==void 0?n:(a=o.errors)==null?void 0:a[s]}function W1(){let{router:n}=D1("useNavigate"),o=Cu("useNavigate"),s=E.useRef(!1);return rm(()=>{s.current=!0}),E.useCallback(async(c,p={})=>{Gt(s.current,nm),s.current&&(typeof c=="number"?n.navigate(c):await n.navigate(c,{fromRouteId:o,...p}))},[n,o])}var Yf={};function sm(n,o,s){!o&&!Yf[n]&&(Yf[n]=!0,Gt(!1,s))}E.memo(q1);function q1({routes:n,future:o,state:s}){return im(n,void 0,s,o)}function He(n){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Y1({basename:n="/",children:o=null,location:s,navigationType:a="POP",navigator:c,static:p=!1}){Le(!Uo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=n.replace(/^\/*/,"/"),g=E.useMemo(()=>({basename:m,navigator:c,static:p,future:{}}),[m,c,p]);typeof s=="string"&&(s=Mr(s));let{pathname:v="/",search:y="",hash:w="",state:$=null,key:k="default"}=s,O=E.useMemo(()=>{let P=dn(v,m);return P==null?null:{location:{pathname:P,search:y,hash:w,state:$,key:k},navigationType:a}},[m,v,y,w,$,k,a]);return Gt(O!=null,`<Router basename="${m}"> is not able to match the URL "${v}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:E.createElement(Qt.Provider,{value:g},E.createElement(Bo.Provider,{children:o,value:O}))}function G1({children:n,location:o}){return N1(ru(n),o)}function ru(n,o=[]){let s=[];return E.Children.forEach(n,(a,c)=>{if(!E.isValidElement(a))return;let p=[...o,c];if(a.type===E.Fragment){s.push.apply(s,ru(a.props.children,p));return}Le(a.type===He,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!a.props.index||!a.props.children,"An index route cannot have child routes.");let m={id:a.props.id||p.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(m.children=ru(a.props.children,p)),s.push(m)}),s}var ls="get",us="application/x-www-form-urlencoded";function zs(n){return n!=null&&typeof n.tagName=="string"}function Q1(n){return zs(n)&&n.tagName.toLowerCase()==="button"}function K1(n){return zs(n)&&n.tagName.toLowerCase()==="form"}function X1(n){return zs(n)&&n.tagName.toLowerCase()==="input"}function J1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Z1(n,o){return n.button===0&&(!o||o==="_self")&&!J1(n)}var rs=null;function ey(){if(rs===null)try{new FormData(document.createElement("form"),0),rs=!1}catch{rs=!0}return rs}var ty=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hl(n){return n!=null&&!ty.has(n)?(Gt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${us}"`),null):n}function ny(n,o){let s,a,c,p,m;if(K1(n)){let g=n.getAttribute("action");a=g?dn(g,o):null,s=n.getAttribute("method")||ls,c=Hl(n.getAttribute("enctype"))||us,p=new FormData(n)}else if(Q1(n)||X1(n)&&(n.type==="submit"||n.type==="image")){let g=n.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=n.getAttribute("formaction")||g.getAttribute("action");if(a=v?dn(v,o):null,s=n.getAttribute("formmethod")||g.getAttribute("method")||ls,c=Hl(n.getAttribute("formenctype"))||Hl(g.getAttribute("enctype"))||us,p=new FormData(g,n),!ey()){let{name:y,type:w,value:$}=n;if(w==="image"){let k=y?`${y}.`:"";p.append(`${k}x`,"0"),p.append(`${k}y`,"0")}else y&&p.append(y,$)}}else{if(zs(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ls,a=null,c=us,m=n}return p&&c==="text/plain"&&(m=p,p=void 0),{action:a,method:s.toLowerCase(),encType:c,formData:p,body:m}}function ju(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}async function ry(n,o){if(n.id in o)return o[n.id];try{let s=await import(n.module);return o[n.id]=s,s}catch(s){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function oy(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function iy(n,o,s){let a=await Promise.all(n.map(async c=>{let p=o.routes[c.route.id];if(p){let m=await ry(p,s);return m.links?m.links():[]}return[]}));return uy(a.flat(1).filter(oy).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Gf(n,o,s,a,c,p){let m=(v,y)=>s[y]?v.route.id!==s[y].route.id:!0,g=(v,y)=>{var w;return s[y].pathname!==v.pathname||((w=s[y].route.path)==null?void 0:w.endsWith("*"))&&s[y].params["*"]!==v.params["*"]};return p==="assets"?o.filter((v,y)=>m(v,y)||g(v,y)):p==="data"?o.filter((v,y)=>{var $;let w=a.routes[v.route.id];if(!w||!w.hasLoader)return!1;if(m(v,y)||g(v,y))return!0;if(v.route.shouldRevalidate){let k=v.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:(($=s[0])==null?void 0:$.params)||{},nextUrl:new URL(n,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function sy(n,o,{includeHydrateFallback:s}={}){return ay(n.map(a=>{let c=o.routes[a.route.id];if(!c)return[];let p=[c.module];return c.clientActionModule&&(p=p.concat(c.clientActionModule)),c.clientLoaderModule&&(p=p.concat(c.clientLoaderModule)),s&&c.hydrateFallbackModule&&(p=p.concat(c.hydrateFallbackModule)),c.imports&&(p=p.concat(c.imports)),p}).flat(1))}function ay(n){return[...new Set(n)]}function ly(n){let o={},s=Object.keys(n).sort();for(let a of s)o[a]=n[a];return o}function uy(n,o){let s=new Set;return new Set(o),n.reduce((a,c)=>{let p=JSON.stringify(ly(c));return s.has(p)||(s.add(p),a.push({key:p,link:c})),a},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var cy=new Set([100,101,204,205]);function dy(n,o){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname="_root.data":o&&dn(s.pathname,o)==="/"?s.pathname=`${o.replace(/\/$/,"")}/_root.data`:s.pathname=`${s.pathname.replace(/\/$/,"")}.data`,s}function am(){let n=E.useContext(Dr);return ju(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function fy(){let n=E.useContext(bs);return ju(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var ku=E.createContext(void 0);ku.displayName="FrameworkContext";function lm(){let n=E.useContext(ku);return ju(n,"You must render this element inside a <HydratedRouter> element"),n}function py(n,o){let s=E.useContext(ku),[a,c]=E.useState(!1),[p,m]=E.useState(!1),{onFocus:g,onBlur:v,onMouseEnter:y,onMouseLeave:w,onTouchStart:$}=o,k=E.useRef(null);E.useEffect(()=>{if(n==="render"&&m(!0),n==="viewport"){let _=N=>{N.forEach(A=>{m(A.isIntersecting)})},R=new IntersectionObserver(_,{threshold:.5});return k.current&&R.observe(k.current),()=>{R.disconnect()}}},[n]),E.useEffect(()=>{if(a){let _=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(_)}}},[a]);let O=()=>{c(!0)},P=()=>{c(!1),m(!1)};return s?n!=="intent"?[p,k,{}]:[p,k,{onFocus:_o(g,O),onBlur:_o(v,P),onMouseEnter:_o(y,O),onMouseLeave:_o(w,P),onTouchStart:_o($,O)}]:[!1,k,{}]}function _o(n,o){return s=>{n&&n(s),s.defaultPrevented||o(s)}}function my({page:n,...o}){let{router:s}=am(),a=E.useMemo(()=>Qp(s.routes,n,s.basename),[s.routes,n,s.basename]);return a?E.createElement(gy,{page:n,matches:a,...o}):null}function hy(n){let{manifest:o,routeModules:s}=lm(),[a,c]=E.useState([]);return E.useEffect(()=>{let p=!1;return iy(n,o,s).then(m=>{p||c(m)}),()=>{p=!0}},[n,o,s]),a}function gy({page:n,matches:o,...s}){let a=rr(),{manifest:c,routeModules:p}=lm(),{basename:m}=am(),{loaderData:g,matches:v}=fy(),y=E.useMemo(()=>Gf(n,o,v,c,a,"data"),[n,o,v,c,a]),w=E.useMemo(()=>Gf(n,o,v,c,a,"assets"),[n,o,v,c,a]),$=E.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let P=new Set,_=!1;if(o.forEach(N=>{var F;let A=c.routes[N.route.id];!A||!A.hasLoader||(!y.some(V=>V.route.id===N.route.id)&&N.route.id in g&&((F=p[N.route.id])!=null&&F.shouldRevalidate)||A.hasClientLoader?_=!0:P.add(N.route.id))}),P.size===0)return[];let R=dy(n,m);return _&&P.size>0&&R.searchParams.set("_routes",o.filter(N=>P.has(N.route.id)).map(N=>N.route.id).join(",")),[R.pathname+R.search]},[m,g,a,c,y,o,n,p]),k=E.useMemo(()=>sy(w,c),[w,c]),O=hy(w);return E.createElement(E.Fragment,null,$.map(P=>E.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...s})),k.map(P=>E.createElement("link",{key:P,rel:"modulepreload",href:P,...s})),O.map(({key:P,link:_})=>E.createElement("link",{key:P,..._})))}function yy(...n){return o=>{n.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var um=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{um&&(window.__reactRouterVersion="7.6.0")}catch{}function vy({basename:n,children:o,window:s}){let a=E.useRef();a.current==null&&(a.current=i1({window:s,v5Compat:!0}));let c=a.current,[p,m]=E.useState({action:c.action,location:c.location}),g=E.useCallback(v=>{E.startTransition(()=>m(v))},[m]);return E.useLayoutEffect(()=>c.listen(g),[c,g]),E.createElement(Y1,{basename:n,children:o,location:p.location,navigationType:p.action,navigator:c})}var cm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=E.forwardRef(function({onClick:o,discover:s="render",prefetch:a="none",relative:c,reloadDocument:p,replace:m,state:g,target:v,to:y,preventScrollReset:w,viewTransition:$,...k},O){let{basename:P}=E.useContext(Qt),_=typeof y=="string"&&cm.test(y),R,N=!1;if(typeof y=="string"&&_&&(R=y,um))try{let he=new URL(window.location.href),Te=y.startsWith("//")?new URL(he.protocol+y):new URL(y),St=dn(Te.pathname,P);Te.origin===he.origin&&St!=null?y=St+Te.search+Te.hash:N=!0}catch{Gt(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=T1(y,{relative:c}),[F,V,Q]=py(a,k),J=Sy(y,{replace:m,state:g,target:v,preventScrollReset:w,relative:c,viewTransition:$});function q(he){o&&o(he),he.defaultPrevented||J(he)}let ne=E.createElement("a",{...k,...Q,href:R||A,onClick:N||p?o:q,ref:yy(O,V),target:v,"data-discover":!_&&s==="render"?"true":void 0});return F&&!_?E.createElement(E.Fragment,null,ne,E.createElement(my,{page:A})):ne});Ye.displayName="Link";var dm=E.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:a="",end:c=!1,style:p,to:m,viewTransition:g,children:v,...y},w){let $=Vo(m,{relative:y.relative}),k=rr(),O=E.useContext(bs),{navigator:P,basename:_}=E.useContext(Qt),R=O!=null&&ky($)&&g===!0,N=P.encodeLocation?P.encodeLocation($).pathname:$.pathname,A=k.pathname,F=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;s||(A=A.toLowerCase(),F=F?F.toLowerCase():null,N=N.toLowerCase()),F&&_&&(F=dn(F,_)||F);const V=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let Q=A===N||!c&&A.startsWith(N)&&A.charAt(V)==="/",J=F!=null&&(F===N||!c&&F.startsWith(N)&&F.charAt(N.length)==="/"),q={isActive:Q,isPending:J,isTransitioning:R},ne=Q?o:void 0,he;typeof a=="function"?he=a(q):he=[a,Q?"active":null,J?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let Te=typeof p=="function"?p(q):p;return E.createElement(Ye,{...y,"aria-current":ne,className:he,ref:w,style:Te,to:m,viewTransition:g},typeof v=="function"?v(q):v)});dm.displayName="NavLink";var xy=E.forwardRef(({discover:n="render",fetcherKey:o,navigate:s,reloadDocument:a,replace:c,state:p,method:m=ls,action:g,onSubmit:v,relative:y,preventScrollReset:w,viewTransition:$,...k},O)=>{let P=Cy(),_=jy(g,{relative:y}),R=m.toLowerCase()==="get"?"get":"post",N=typeof g=="string"&&cm.test(g),A=F=>{if(v&&v(F),F.defaultPrevented)return;F.preventDefault();let V=F.nativeEvent.submitter,Q=(V==null?void 0:V.getAttribute("formmethod"))||m;P(V||F.currentTarget,{fetcherKey:o,method:Q,navigate:s,replace:c,state:p,relative:y,preventScrollReset:w,viewTransition:$})};return E.createElement("form",{ref:O,method:R,action:_,onSubmit:a?v:A,...k,"data-discover":!N&&n==="render"?"true":void 0})});xy.displayName="Form";function wy(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fm(n){let o=E.useContext(Dr);return Le(o,wy(n)),o}function Sy(n,{target:o,replace:s,state:a,preventScrollReset:c,relative:p,viewTransition:m}={}){let g=Ho(),v=rr(),y=Vo(n,{relative:p});return E.useCallback(w=>{if(Z1(w,o)){w.preventDefault();let $=s!==void 0?s:Fo(v)===Fo(y);g(n,{replace:$,state:a,preventScrollReset:c,relative:p,viewTransition:m})}},[v,g,y,s,a,o,n,c,p,m])}var $y=0,Ey=()=>`__${String(++$y)}__`;function Cy(){let{router:n}=fm("useSubmit"),{basename:o}=E.useContext(Qt),s=H1();return E.useCallback(async(a,c={})=>{let{action:p,method:m,encType:g,formData:v,body:y}=ny(a,o);if(c.navigate===!1){let w=c.fetcherKey||Ey();await n.fetch(w,s,c.action||p,{preventScrollReset:c.preventScrollReset,formData:v,body:y,formMethod:c.method||m,formEncType:c.encType||g,flushSync:c.flushSync})}else await n.navigate(c.action||p,{preventScrollReset:c.preventScrollReset,formData:v,body:y,formMethod:c.method||m,formEncType:c.encType||g,replace:c.replace,state:c.state,fromRouteId:s,flushSync:c.flushSync,viewTransition:c.viewTransition})},[n,o,s])}function jy(n,{relative:o}={}){let{basename:s}=E.useContext(Qt),a=E.useContext(Kt);Le(a,"useFormAction must be used inside a RouteContext");let[c]=a.matches.slice(-1),p={...Vo(n||".",{relative:o})},m=rr();if(n==null){p.search=m.search;let g=new URLSearchParams(p.search),v=g.getAll("index");if(v.some(w=>w==="")){g.delete("index"),v.filter($=>$).forEach($=>g.append("index",$));let w=g.toString();p.search=w?`?${w}`:""}}return(!n||n===".")&&c.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(p.pathname=p.pathname==="/"?s:cn([s,p.pathname])),Fo(p)}function ky(n,o={}){let s=E.useContext(tm);Le(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=fm("useViewTransitionState"),c=Vo(n,{relative:o.relative});if(!s.isTransitioning)return!1;let p=dn(s.currentLocation.pathname,a)||s.currentLocation.pathname,m=dn(s.nextLocation.pathname,a)||s.nextLocation.pathname;return vs(c.pathname,m)!=null||vs(c.pathname,p)!=null}[...cy];var qe=function(){return qe=Object.assign||function(o){for(var s,a=1,c=arguments.length;a<c;a++){s=arguments[a];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(o[p]=s[p])}return o},qe.apply(this,arguments)};function Nr(n,o,s){if(s||arguments.length===2)for(var a=0,c=o.length,p;a<c;a++)(p||!(a in o))&&(p||(p=Array.prototype.slice.call(o,0,a)),p[a]=o[a]);return n.concat(p||Array.prototype.slice.call(o))}var Pe="-ms-",Io="-moz-",Se="-webkit-",pm="comm",Rs="rule",Pu="decl",Py="@import",mm="@keyframes",by="@layer",hm=Math.abs,bu=String.fromCharCode,ou=Object.assign;function zy(n,o){return Ve(n,0)^45?(((o<<2^Ve(n,0))<<2^Ve(n,1))<<2^Ve(n,2))<<2^Ve(n,3):0}function gm(n){return n.trim()}function un(n,o){return(n=o.exec(n))?n[0]:n}function ue(n,o,s){return n.replace(o,s)}function cs(n,o,s){return n.indexOf(o,s)}function Ve(n,o){return n.charCodeAt(o)|0}function Or(n,o,s){return n.slice(o,s)}function Yt(n){return n.length}function ym(n){return n.length}function Oo(n,o){return o.push(n),n}function Ry(n,o){return n.map(o).join("")}function Qf(n,o){return n.filter(function(s){return!un(s,o)})}var Ls=1,Ir=1,vm=0,Rt=0,Fe=0,Br="";function Ts(n,o,s,a,c,p,m,g){return{value:n,root:o,parent:s,type:a,props:c,children:p,line:Ls,column:Ir,length:m,return:"",siblings:g}}function Ln(n,o){return ou(Ts("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function zr(n){for(;n.root;)n=Ln(n.root,{children:[n]});Oo(n,n.siblings)}function Ly(){return Fe}function Ty(){return Fe=Rt>0?Ve(Br,--Rt):0,Ir--,Fe===10&&(Ir=1,Ls--),Fe}function Mt(){return Fe=Rt<vm?Ve(Br,Rt++):0,Ir++,Fe===10&&(Ir=1,Ls++),Fe}function Jn(){return Ve(Br,Rt)}function ds(){return Rt}function _s(n,o){return Or(Br,n,o)}function iu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _y(n){return Ls=Ir=1,vm=Yt(Br=n),Rt=0,[]}function Ny(n){return Br="",n}function Vl(n){return gm(_s(Rt-1,su(n===91?n+2:n===40?n+1:n)))}function Oy(n){for(;(Fe=Jn())&&Fe<33;)Mt();return iu(n)>2||iu(Fe)>3?"":" "}function Iy(n,o){for(;--o&&Mt()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return _s(n,ds()+(o<6&&Jn()==32&&Mt()==32))}function su(n){for(;Mt();)switch(Fe){case n:return Rt;case 34:case 39:n!==34&&n!==39&&su(Fe);break;case 40:n===41&&su(n);break;case 92:Mt();break}return Rt}function Fy(n,o){for(;Mt()&&n+Fe!==57;)if(n+Fe===84&&Jn()===47)break;return"/*"+_s(o,Rt-1)+"*"+bu(n===47?n:Mt())}function Ay(n){for(;!iu(Jn());)Mt();return _s(n,Rt)}function My(n){return Ny(fs("",null,null,null,[""],n=_y(n),0,[0],n))}function fs(n,o,s,a,c,p,m,g,v){for(var y=0,w=0,$=m,k=0,O=0,P=0,_=1,R=1,N=1,A=0,F="",V=c,Q=p,J=a,q=F;R;)switch(P=A,A=Mt()){case 40:if(P!=108&&Ve(q,$-1)==58){cs(q+=ue(Vl(A),"&","&\f"),"&\f",hm(y?g[y-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:q+=Vl(A);break;case 9:case 10:case 13:case 32:q+=Oy(P);break;case 92:q+=Iy(ds()-1,7);continue;case 47:switch(Jn()){case 42:case 47:Oo(Dy(Fy(Mt(),ds()),o,s,v),v);break;default:q+="/"}break;case 123*_:g[y++]=Yt(q)*N;case 125*_:case 59:case 0:switch(A){case 0:case 125:R=0;case 59+w:N==-1&&(q=ue(q,/\f/g,"")),O>0&&Yt(q)-$&&Oo(O>32?Xf(q+";",a,s,$-1,v):Xf(ue(q," ","")+";",a,s,$-2,v),v);break;case 59:q+=";";default:if(Oo(J=Kf(q,o,s,y,w,c,g,F,V=[],Q=[],$,p),p),A===123)if(w===0)fs(q,o,J,J,V,p,$,g,Q);else switch(k===99&&Ve(q,3)===110?100:k){case 100:case 108:case 109:case 115:fs(n,J,J,a&&Oo(Kf(n,J,J,0,0,c,g,F,c,V=[],$,Q),Q),c,Q,$,g,a?V:Q);break;default:fs(q,J,J,J,[""],Q,0,g,Q)}}y=w=O=0,_=N=1,F=q="",$=m;break;case 58:$=1+Yt(q),O=P;default:if(_<1){if(A==123)--_;else if(A==125&&_++==0&&Ty()==125)continue}switch(q+=bu(A),A*_){case 38:N=w>0?1:(q+="\f",-1);break;case 44:g[y++]=(Yt(q)-1)*N,N=1;break;case 64:Jn()===45&&(q+=Vl(Mt())),k=Jn(),w=$=Yt(F=q+=Ay(ds())),A++;break;case 45:P===45&&Yt(q)==2&&(_=0)}}return p}function Kf(n,o,s,a,c,p,m,g,v,y,w,$){for(var k=c-1,O=c===0?p:[""],P=ym(O),_=0,R=0,N=0;_<a;++_)for(var A=0,F=Or(n,k+1,k=hm(R=m[_])),V=n;A<P;++A)(V=gm(R>0?O[A]+" "+F:ue(F,/&\f/g,O[A])))&&(v[N++]=V);return Ts(n,o,s,c===0?Rs:g,v,y,w,$)}function Dy(n,o,s,a){return Ts(n,o,s,pm,bu(Ly()),Or(n,2,-2),0,a)}function Xf(n,o,s,a,c){return Ts(n,o,s,Pu,Or(n,0,a),Or(n,a+1,-1),a,c)}function xm(n,o,s){switch(zy(n,o)){case 5103:return Se+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+n+n;case 4789:return Io+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+n+Io+n+Pe+n+n;case 5936:switch(Ve(n,o+11)){case 114:return Se+n+Pe+ue(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Se+n+Pe+ue(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Se+n+Pe+ue(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Se+n+Pe+n+n;case 6165:return Se+n+Pe+"flex-"+n+n;case 5187:return Se+n+ue(n,/(\w+).+(:[^]+)/,Se+"box-$1$2"+Pe+"flex-$1$2")+n;case 5443:return Se+n+Pe+"flex-item-"+ue(n,/flex-|-self/g,"")+(un(n,/flex-|baseline/)?"":Pe+"grid-row-"+ue(n,/flex-|-self/g,""))+n;case 4675:return Se+n+Pe+"flex-line-pack"+ue(n,/align-content|flex-|-self/g,"")+n;case 5548:return Se+n+Pe+ue(n,"shrink","negative")+n;case 5292:return Se+n+Pe+ue(n,"basis","preferred-size")+n;case 6060:return Se+"box-"+ue(n,"-grow","")+Se+n+Pe+ue(n,"grow","positive")+n;case 4554:return Se+ue(n,/([^-])(transform)/g,"$1"+Se+"$2")+n;case 6187:return ue(ue(ue(n,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),n,"")+n;case 5495:case 3959:return ue(n,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return ue(ue(n,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+Pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+n+n;case 4200:if(!un(n,/flex-|baseline/))return Pe+"grid-column-align"+Or(n,o)+n;break;case 2592:case 3360:return Pe+ue(n,"template-","")+n;case 4384:case 3616:return s&&s.some(function(a,c){return o=c,un(a.props,/grid-\w+-end/)})?~cs(n+(s=s[o].value),"span",0)?n:Pe+ue(n,"-start","")+n+Pe+"grid-row-span:"+(~cs(s,"span",0)?un(s,/\d+/):+un(s,/\d+/)-+un(n,/\d+/))+";":Pe+ue(n,"-start","")+n;case 4896:case 4128:return s&&s.some(function(a){return un(a.props,/grid-\w+-start/)})?n:Pe+ue(ue(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ue(n,/(.+)-inline(.+)/,Se+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yt(n)-1-o>6)switch(Ve(n,o+1)){case 109:if(Ve(n,o+4)!==45)break;case 102:return ue(n,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+Io+(Ve(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~cs(n,"stretch",0)?xm(ue(n,"stretch","fill-available"),o,s)+n:n}break;case 5152:case 5920:return ue(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,c,p,m,g,v,y){return Pe+c+":"+p+y+(m?Pe+c+"-span:"+(g?v:+v-+p)+y:"")+n});case 4949:if(Ve(n,o+6)===121)return ue(n,":",":"+Se)+n;break;case 6444:switch(Ve(n,Ve(n,14)===45?18:11)){case 120:return ue(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Se+(Ve(n,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+Pe+"$2box$3")+n;case 100:return ue(n,":",":"+Pe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(n,"scroll-","scroll-snap-")+n}return n}function xs(n,o){for(var s="",a=0;a<n.length;a++)s+=o(n[a],a,n,o)||"";return s}function By(n,o,s,a){switch(n.type){case by:if(n.children.length)break;case Py:case Pu:return n.return=n.return||n.value;case pm:return"";case mm:return n.return=n.value+"{"+xs(n.children,a)+"}";case Rs:if(!Yt(n.value=n.props.join(",")))return""}return Yt(s=xs(n.children,a))?n.return=n.value+"{"+s+"}":""}function Uy(n){var o=ym(n);return function(s,a,c,p){for(var m="",g=0;g<o;g++)m+=n[g](s,a,c,p)||"";return m}}function Hy(n){return function(o){o.root||(o=o.return)&&n(o)}}function Vy(n,o,s,a){if(n.length>-1&&!n.return)switch(n.type){case Pu:n.return=xm(n.value,n.length,s);return;case mm:return xs([Ln(n,{value:ue(n.value,"@","@"+Se)})],a);case Rs:if(n.length)return Ry(s=n.props,function(c){switch(un(c,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zr(Ln(n,{props:[ue(c,/:(read-\w+)/,":"+Io+"$1")]})),zr(Ln(n,{props:[c]})),ou(n,{props:Qf(s,a)});break;case"::placeholder":zr(Ln(n,{props:[ue(c,/:(plac\w+)/,":"+Se+"input-$1")]})),zr(Ln(n,{props:[ue(c,/:(plac\w+)/,":"+Io+"$1")]})),zr(Ln(n,{props:[ue(c,/:(plac\w+)/,Pe+"input-$1")]})),zr(Ln(n,{props:[c]})),ou(n,{props:Qf(s,a)});break}return""})}}var Wy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wt={},Fr=typeof process<"u"&&wt!==void 0&&(wt.REACT_APP_SC_ATTR||wt.SC_ATTR)||"data-styled",wm="active",Sm="data-styled-version",Ns="6.1.18",zu=`/*!sc*/
`,ws=typeof window<"u"&&typeof document<"u",qy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==""?wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.SC_DISABLE_SPEEDY!==void 0&&wt.SC_DISABLE_SPEEDY!==""&&wt.SC_DISABLE_SPEEDY!=="false"&&wt.SC_DISABLE_SPEEDY),Yy={},Os=Object.freeze([]),Ar=Object.freeze({});function $m(n,o,s){return s===void 0&&(s=Ar),n.theme!==s.theme&&n.theme||o||s.theme}var Em=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Gy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qy=/(^-|-$)/g;function Jf(n){return n.replace(Gy,"-").replace(Qy,"")}var Ky=/(a)(d)/gi,os=52,Zf=function(n){return String.fromCharCode(n+(n>25?39:97))};function au(n){var o,s="";for(o=Math.abs(n);o>os;o=o/os|0)s=Zf(o%os)+s;return(Zf(o%os)+s).replace(Ky,"$1-$2")}var Wl,Cm=5381,_r=function(n,o){for(var s=o.length;s;)n=33*n^o.charCodeAt(--s);return n},jm=function(n){return _r(Cm,n)};function Ru(n){return au(jm(n)>>>0)}function Xy(n){return n.displayName||n.name||"Component"}function ql(n){return typeof n=="string"&&!0}var km=typeof Symbol=="function"&&Symbol.for,Pm=km?Symbol.for("react.memo"):60115,Jy=km?Symbol.for("react.forward_ref"):60112,Zy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ev={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tv=((Wl={})[Jy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wl[Pm]=bm,Wl);function ep(n){return("type"in(o=n)&&o.type.$$typeof)===Pm?bm:"$$typeof"in n?tv[n.$$typeof]:Zy;var o}var nv=Object.defineProperty,rv=Object.getOwnPropertyNames,tp=Object.getOwnPropertySymbols,ov=Object.getOwnPropertyDescriptor,iv=Object.getPrototypeOf,np=Object.prototype;function zm(n,o,s){if(typeof o!="string"){if(np){var a=iv(o);a&&a!==np&&zm(n,a,s)}var c=rv(o);tp&&(c=c.concat(tp(o)));for(var p=ep(n),m=ep(o),g=0;g<c.length;++g){var v=c[g];if(!(v in ev||s&&s[v]||m&&v in m||p&&v in p)){var y=ov(o,v);try{nv(n,v,y)}catch{}}}}return n}function er(n){return typeof n=="function"}function Lu(n){return typeof n=="object"&&"styledComponentId"in n}function Kn(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function Ss(n,o){if(n.length===0)return"";for(var s=n[0],a=1;a<n.length;a++)s+=n[a];return s}function Ao(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function lu(n,o,s){if(s===void 0&&(s=!1),!s&&!Ao(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var a=0;a<o.length;a++)n[a]=lu(n[a],o[a]);else if(Ao(o))for(var a in o)n[a]=lu(n[a],o[a]);return n}function Tu(n,o){Object.defineProperty(n,"toString",{value:o})}function tr(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var sv=function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var s=0,a=0;a<o;a++)s+=this.groupSizes[a];return s},n.prototype.insertRules=function(o,s){if(o>=this.groupSizes.length){for(var a=this.groupSizes,c=a.length,p=c;o>=p;)if((p<<=1)<0)throw tr(16,"".concat(o));this.groupSizes=new Uint32Array(p),this.groupSizes.set(a),this.length=p;for(var m=c;m<p;m++)this.groupSizes[m]=0}for(var g=this.indexOfGroup(o+1),v=(m=0,s.length);m<v;m++)this.tag.insertRule(g,s[m])&&(this.groupSizes[o]++,g++)},n.prototype.clearGroup=function(o){if(o<this.length){var s=this.groupSizes[o],a=this.indexOfGroup(o),c=a+s;this.groupSizes[o]=0;for(var p=a;p<c;p++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(o){var s="";if(o>=this.length||this.groupSizes[o]===0)return s;for(var a=this.groupSizes[o],c=this.indexOfGroup(o),p=c+a,m=c;m<p;m++)s+="".concat(this.tag.getRule(m)).concat(zu);return s},n}(),ps=new Map,$s=new Map,ms=1,is=function(n){if(ps.has(n))return ps.get(n);for(;$s.has(ms);)ms++;var o=ms++;return ps.set(n,o),$s.set(o,n),o},av=function(n,o){ms=o+1,ps.set(n,o),$s.set(o,n)},lv="style[".concat(Fr,"][").concat(Sm,'="').concat(Ns,'"]'),uv=new RegExp("^".concat(Fr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cv=function(n,o,s){for(var a,c=s.split(","),p=0,m=c.length;p<m;p++)(a=c[p])&&n.registerName(o,a)},dv=function(n,o){for(var s,a=((s=o.textContent)!==null&&s!==void 0?s:"").split(zu),c=[],p=0,m=a.length;p<m;p++){var g=a[p].trim();if(g){var v=g.match(uv);if(v){var y=0|parseInt(v[1],10),w=v[2];y!==0&&(av(w,y),cv(n,w,v[3]),n.getTag().insertRules(y,c)),c.length=0}else c.push(g)}}},rp=function(n){for(var o=document.querySelectorAll(lv),s=0,a=o.length;s<a;s++){var c=o[s];c&&c.getAttribute(Fr)!==wm&&(dv(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function fv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Rm=function(n){var o=document.head,s=n||o,a=document.createElement("style"),c=function(g){var v=Array.from(g.querySelectorAll("style[".concat(Fr,"]")));return v[v.length-1]}(s),p=c!==void 0?c.nextSibling:null;a.setAttribute(Fr,wm),a.setAttribute(Sm,Ns);var m=fv();return m&&a.setAttribute("nonce",m),s.insertBefore(a,p),a},pv=function(){function n(o){this.element=Rm(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var a=document.styleSheets,c=0,p=a.length;c<p;c++){var m=a[c];if(m.ownerNode===s)return m}throw tr(17)}(this.element),this.length=0}return n.prototype.insertRule=function(o,s){try{return this.sheet.insertRule(s,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var s=this.sheet.cssRules[o];return s&&s.cssText?s.cssText:""},n}(),mv=function(){function n(o){this.element=Rm(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,s){if(o<=this.length&&o>=0){var a=document.createTextNode(s);return this.element.insertBefore(a,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n}(),hv=function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,s){return o<=this.length&&(this.rules.splice(o,0,s),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n}(),op=ws,gv={isServer:!ws,useCSSOMInjection:!qy},Es=function(){function n(o,s,a){o===void 0&&(o=Ar),s===void 0&&(s={});var c=this;this.options=qe(qe({},gv),o),this.gs=s,this.names=new Map(a),this.server=!!o.isServer,!this.server&&ws&&op&&(op=!1,rp(this)),Tu(this,function(){return function(p){for(var m=p.getTag(),g=m.length,v="",y=function($){var k=function(N){return $s.get(N)}($);if(k===void 0)return"continue";var O=p.names.get(k),P=m.getGroup($);if(O===void 0||!O.size||P.length===0)return"continue";var _="".concat(Fr,".g").concat($,'[id="').concat(k,'"]'),R="";O!==void 0&&O.forEach(function(N){N.length>0&&(R+="".concat(N,","))}),v+="".concat(P).concat(_,'{content:"').concat(R,'"}').concat(zu)},w=0;w<g;w++)y(w);return v}(c)})}return n.registerId=function(o){return is(o)},n.prototype.rehydrate=function(){!this.server&&ws&&rp(this)},n.prototype.reconstructWithOptions=function(o,s){return s===void 0&&(s=!0),new n(qe(qe({},this.options),o),this.gs,s&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=function(s){var a=s.useCSSOMInjection,c=s.target;return s.isServer?new hv(c):a?new pv(c):new mv(c)}(this.options),new sv(o)));var o},n.prototype.hasNameForId=function(o,s){return this.names.has(o)&&this.names.get(o).has(s)},n.prototype.registerName=function(o,s){if(is(o),this.names.has(o))this.names.get(o).add(s);else{var a=new Set;a.add(s),this.names.set(o,a)}},n.prototype.insertRules=function(o,s,a){this.registerName(o,s),this.getTag().insertRules(is(o),a)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(is(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n}(),yv=/&/g,vv=/^\s*\/\/.*$/gm;function Lm(n,o){return n.map(function(s){return s.type==="rule"&&(s.value="".concat(o," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(o," ")),s.props=s.props.map(function(a){return"".concat(o," ").concat(a)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=Lm(s.children,o)),s})}function xv(n){var o,s,a,c=Ar,p=c.options,m=p===void 0?Ar:p,g=c.plugins,v=g===void 0?Os:g,y=function(k,O,P){return P.startsWith(s)&&P.endsWith(s)&&P.replaceAll(s,"").length>0?".".concat(o):k},w=v.slice();w.push(function(k){k.type===Rs&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(yv,s).replace(a,y))}),m.prefix&&w.push(Vy),w.push(By);var $=function(k,O,P,_){O===void 0&&(O=""),P===void 0&&(P=""),_===void 0&&(_="&"),o=_,s=O,a=new RegExp("\\".concat(s,"\\b"),"g");var R=k.replace(vv,""),N=My(P||O?"".concat(P," ").concat(O," { ").concat(R," }"):R);m.namespace&&(N=Lm(N,m.namespace));var A=[];return xs(N,Uy(w.concat(Hy(function(F){return A.push(F)})))),A};return $.hash=v.length?v.reduce(function(k,O){return O.name||tr(15),_r(k,O.name)},Cm).toString():"",$}var wv=new Es,uu=xv(),Tm=We.createContext({shouldForwardProp:void 0,styleSheet:wv,stylis:uu});Tm.Consumer;We.createContext(void 0);function cu(){return E.useContext(Tm)}var _m=function(){function n(o,s){var a=this;this.inject=function(c,p){p===void 0&&(p=uu);var m=a.name+p.hash;c.hasNameForId(a.id,m)||c.insertRules(a.id,m,p(a.rules,m,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=s,Tu(this,function(){throw tr(12,String(a.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=uu),this.name+o.hash},n}(),Sv=function(n){return n>="A"&&n<="Z"};function ip(n){for(var o="",s=0;s<n.length;s++){var a=n[s];if(s===1&&a==="-"&&n[0]==="-")return n;Sv(a)?o+="-"+a.toLowerCase():o+=a}return o.startsWith("ms-")?"-"+o:o}var Nm=function(n){return n==null||n===!1||n===""},Om=function(n){var o,s,a=[];for(var c in n){var p=n[c];n.hasOwnProperty(c)&&!Nm(p)&&(Array.isArray(p)&&p.isCss||er(p)?a.push("".concat(ip(c),":"),p,";"):Ao(p)?a.push.apply(a,Nr(Nr(["".concat(c," {")],Om(p),!1),["}"],!1)):a.push("".concat(ip(c),": ").concat((o=c,(s=p)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||o in Wy||o.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return a};function _n(n,o,s,a){if(Nm(n))return[];if(Lu(n))return[".".concat(n.styledComponentId)];if(er(n)){if(!er(p=n)||p.prototype&&p.prototype.isReactComponent||!o)return[n];var c=n(o);return _n(c,o,s,a)}var p;return n instanceof _m?s?(n.inject(s,a),[n.getName(a)]):[n]:Ao(n)?Om(n):Array.isArray(n)?Array.prototype.concat.apply(Os,n.map(function(m){return _n(m,o,s,a)})):[n.toString()]}function Im(n){for(var o=0;o<n.length;o+=1){var s=n[o];if(er(s)&&!Lu(s))return!1}return!0}var $v=jm(Ns),Ev=function(){function n(o,s,a){this.rules=o,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&Im(o),this.componentId=s,this.baseHash=_r($v,s),this.baseStyle=a,Es.registerId(s)}return n.prototype.generateAndInjectStyles=function(o,s,a){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,s,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))c=Kn(c,this.staticRulesId);else{var p=Ss(_n(this.rules,o,s,a)),m=au(_r(this.baseHash,p)>>>0);if(!s.hasNameForId(this.componentId,m)){var g=a(p,".".concat(m),void 0,this.componentId);s.insertRules(this.componentId,m,g)}c=Kn(c,m),this.staticRulesId=m}else{for(var v=_r(this.baseHash,a.hash),y="",w=0;w<this.rules.length;w++){var $=this.rules[w];if(typeof $=="string")y+=$;else if($){var k=Ss(_n($,o,s,a));v=_r(v,k+w),y+=k}}if(y){var O=au(v>>>0);s.hasNameForId(this.componentId,O)||s.insertRules(this.componentId,O,a(y,".".concat(O),void 0,this.componentId)),c=Kn(c,O)}}return c},n}(),Mo=We.createContext(void 0);Mo.Consumer;function Cv(n){var o=We.useContext(Mo),s=E.useMemo(function(){return function(a,c){if(!a)throw tr(14);if(er(a)){var p=a(c);return p}if(Array.isArray(a)||typeof a!="object")throw tr(8);return c?qe(qe({},c),a):a}(n.theme,o)},[n.theme,o]);return n.children?We.createElement(Mo.Provider,{value:s},n.children):null}var Yl={};function jv(n,o,s){var a=Lu(n),c=n,p=!ql(n),m=o.attrs,g=m===void 0?Os:m,v=o.componentId,y=v===void 0?function(V,Q){var J=typeof V!="string"?"sc":Jf(V);Yl[J]=(Yl[J]||0)+1;var q="".concat(J,"-").concat(Ru(Ns+J+Yl[J]));return Q?"".concat(Q,"-").concat(q):q}(o.displayName,o.parentComponentId):v,w=o.displayName,$=w===void 0?function(V){return ql(V)?"styled.".concat(V):"Styled(".concat(Xy(V),")")}(n):w,k=o.displayName&&o.componentId?"".concat(Jf(o.displayName),"-").concat(o.componentId):o.componentId||y,O=a&&c.attrs?c.attrs.concat(g).filter(Boolean):g,P=o.shouldForwardProp;if(a&&c.shouldForwardProp){var _=c.shouldForwardProp;if(o.shouldForwardProp){var R=o.shouldForwardProp;P=function(V,Q){return _(V,Q)&&R(V,Q)}}else P=_}var N=new Ev(s,k,a?c.componentStyle:void 0);function A(V,Q){return function(J,q,ne){var he=J.attrs,Te=J.componentStyle,St=J.defaultProps,$t=J.foldedComponentIds,rt=J.styledComponentId,ht=J.target,Et=We.useContext(Mo),Xe=cu(),Ee=J.shouldForwardProp||Xe.shouldForwardProp,W=$m(q,Et,St)||Ar,te=function(pe,de,we){for(var ge,ve=qe(qe({},de),{className:void 0,theme:we}),Ge=0;Ge<pe.length;Ge+=1){var Xt=er(ge=pe[Ge])?ge(ve):ge;for(var Lt in Xt)ve[Lt]=Lt==="className"?Kn(ve[Lt],Xt[Lt]):Lt==="style"?qe(qe({},ve[Lt]),Xt[Lt]):Xt[Lt]}return de.className&&(ve.className=Kn(ve.className,de.className)),ve}(he,q,W),Y=te.as||ht,b={};for(var M in te)te[M]===void 0||M[0]==="$"||M==="as"||M==="theme"&&te.theme===W||(M==="forwardedAs"?b.as=te.forwardedAs:Ee&&!Ee(M,Y)||(b[M]=te[M]));var se=function(pe,de){var we=cu(),ge=pe.generateAndInjectStyles(de,we.styleSheet,we.stylis);return ge}(Te,te),le=Kn($t,rt);return se&&(le+=" "+se),te.className&&(le+=" "+te.className),b[ql(Y)&&!Em.has(Y)?"class":"className"]=le,ne&&(b.ref=ne),E.createElement(Y,b)}(F,V,Q)}A.displayName=$;var F=We.forwardRef(A);return F.attrs=O,F.componentStyle=N,F.displayName=$,F.shouldForwardProp=P,F.foldedComponentIds=a?Kn(c.foldedComponentIds,c.styledComponentId):"",F.styledComponentId=k,F.target=a?c.target:n,Object.defineProperty(F,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=a?function(Q){for(var J=[],q=1;q<arguments.length;q++)J[q-1]=arguments[q];for(var ne=0,he=J;ne<he.length;ne++)lu(Q,he[ne],!0);return Q}({},c.defaultProps,V):V}}),Tu(F,function(){return".".concat(F.styledComponentId)}),p&&zm(F,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),F}function sp(n,o){for(var s=[n[0]],a=0,c=o.length;a<c;a+=1)s.push(o[a],n[a+1]);return s}var ap=function(n){return Object.assign(n,{isCss:!0})};function _u(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];if(er(n)||Ao(n))return ap(_n(sp(Os,Nr([n],o,!0))));var a=n;return o.length===0&&a.length===1&&typeof a[0]=="string"?_n(a):ap(_n(sp(a,o)))}function du(n,o,s){if(s===void 0&&(s=Ar),!o)throw tr(1,o);var a=function(c){for(var p=[],m=1;m<arguments.length;m++)p[m-1]=arguments[m];return n(o,s,_u.apply(void 0,Nr([c],p,!1)))};return a.attrs=function(c){return du(n,o,qe(qe({},s),{attrs:Array.prototype.concat(s.attrs,c).filter(Boolean)}))},a.withConfig=function(c){return du(n,o,qe(qe({},s),c))},a}var Fm=function(n){return du(jv,n)},C=Fm;Em.forEach(function(n){C[n]=Fm(n)});var kv=function(){function n(o,s){this.rules=o,this.componentId=s,this.isStatic=Im(o),Es.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,s,a,c){var p=c(Ss(_n(this.rules,s,a,c)),""),m=this.componentId+o;a.insertRules(m,m,p)},n.prototype.removeStyles=function(o,s){s.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,s,a,c){o>2&&Es.registerId(this.componentId+o),this.removeStyles(o,a),this.createStyles(o,s,a,c)},n}();function Pv(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];var a=_u.apply(void 0,Nr([n],o,!1)),c="sc-global-".concat(Ru(JSON.stringify(a))),p=new kv(a,c),m=function(v){var y=cu(),w=We.useContext(Mo),$=We.useRef(y.styleSheet.allocateGSInstance(c)).current;return y.styleSheet.server&&g($,v,y.styleSheet,w,y.stylis),We.useLayoutEffect(function(){if(!y.styleSheet.server)return g($,v,y.styleSheet,w,y.stylis),function(){return p.removeStyles($,y.styleSheet)}},[$,v,y.styleSheet,w,y.stylis]),null};function g(v,y,w,$,k){if(p.isStatic)p.renderStyles(v,Yy,w,k);else{var O=qe(qe({},y),{theme:$m(y,$,m.defaultProps)});p.renderStyles(v,O,w,k)}}return We.memo(m)}function st(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];var a=Ss(_u.apply(void 0,Nr([n],o,!1))),c=Ru(a);return new _m(c,a)}const u={colors:{primary:"#131E5B",secondary:"#47B5E4",tertiary:"#81C6E8",lightBlueGray:"#B2C9E4",darkGray:"#292B2C",mediumGray:"#3A3437",lightGray:"#CEDAEC",black:"#000000",white:"#FFFFFF",accent:"#008080",text:"#292B2C",textLight:"#FFFFFF",background:"#FFFFFF"},fonts:{primary:"Noto Sans V2",main:"'Open Sans', sans-serif",heading:"'arial', sans-serif"},fontSizes:{small:"0.8rem",medium:"1rem",large:"1.2rem",xlarge:"1.5rem",xxlarge:"2rem"},fontWeights:{light:300,normal:400,medium:500,bold:700},spacings:{xsmall:"0.5rem",small:"1rem",medium:"1.5rem",large:"2rem",xlarge:"3rem"},breakpoints:{mobile:"768px",tablet:"1024px",desktop:"1440px"}},bv=Pv`
 

@font-face {
  font-family: "Noto Sans V2";
  src: url("https://db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.eot");
  src: url("https://db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.eot?#iefix") format("embedded-opentype"),
       url("https://db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.woff2") format("woff2"),
       url("https://db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.woff") format("woff"),
       url("https://db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.ttf") format("truetype"),
       url("https://db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.svg#Noto Sans V2") format("svg");
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({theme:n})=>n.fonts.main};
    background-color: ${({theme:n})=>n.colors.background};
    color: ${({theme:n})=>n.colors.text};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:n})=>n.fonts.heading};
    color: ${({theme:n})=>n.colors.primary};
    margin-bottom: ${({theme:n})=>n.spacings.small};
  }

  a {
    color: ${({theme:n})=>n.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({theme:n})=>n.colors.secondary};
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  button {
    font-family: ${({theme:n})=>n.fonts.main};
    cursor: pointer;
  }
`;var Am={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lp=We.createContext&&We.createContext(Am),zv=["attr","size","title"];function Rv(n,o){if(n==null)return{};var s=Lv(n,o),a,c;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(c=0;c<p.length;c++)a=p[c],!(o.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(n,a)&&(s[a]=n[a])}return s}function Lv(n,o){if(n==null)return{};var s={};for(var a in n)if(Object.prototype.hasOwnProperty.call(n,a)){if(o.indexOf(a)>=0)continue;s[a]=n[a]}return s}function Cs(){return Cs=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a])}return n},Cs.apply(this,arguments)}function up(n,o){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);o&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),s.push.apply(s,a)}return s}function js(n){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?up(Object(s),!0).forEach(function(a){Tv(n,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):up(Object(s)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))})}return n}function Tv(n,o,s){return o=_v(o),o in n?Object.defineProperty(n,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[o]=s,n}function _v(n){var o=Nv(n,"string");return typeof o=="symbol"?o:o+""}function Nv(n,o){if(typeof n!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var a=s.call(n,o);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}function Mm(n){return n&&n.map((o,s)=>We.createElement(o.tag,js({key:s},o.attr),Mm(o.child)))}function me(n){return o=>We.createElement(Ov,Cs({attr:js({},n.attr)},o),Mm(n.child))}function Ov(n){var o=s=>{var{attr:a,size:c,title:p}=n,m=Rv(n,zv),g=c||s.size||"1em",v;return s.className&&(v=s.className),n.className&&(v=(v?v+" ":"")+n.className),We.createElement("svg",Cs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,a,m,{className:v,style:js(js({color:n.color||s.color},s.style),n.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),p&&We.createElement("title",null,p),n.children)};return lp!==void 0?We.createElement(lp.Consumer,null,s=>o(s)):o(Am)}function Iv(n){return me({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(n)}function Fv(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(n)}function Av(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}function Dm(n){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(n)}function Bm(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function Mv(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(n)}function Is(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(n)}function Dv(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function Bv(n){return me({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(n)}function Uv(n){return me({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(n)}function Um(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(n)}function Hv(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(n)}function Vv(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},child:[]}]})(n)}function Wv(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"},child:[]}]})(n)}function Ur(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function qv(n){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(n)}function Yv(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(n)}function Gv(n){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(n)}function Qv(n){return me({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-75.078 384H99.08c17.059-46.797 52.096-80 92.92-80 40.821 0 75.862 33.196 92.922 80zm.019-256H99.078C91.988 108.548 88 86.748 88 64h208c0 22.805-3.987 44.587-11.059 64z"},child:[]}]})(n)}function Kv(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(n)}function fu(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(n)}function Nu(n){return me({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(n)}function Hm(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(n)}function Ou(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(n)}function Vm(n){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"},child:[]}]})(n)}function Xv(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"},child:[]}]})(n)}function Jv(n){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M272 191.91c-17.6 0-32 14.4-32 32v80c0 8.84-7.16 16-16 16s-16-7.16-16-16v-76.55c0-17.39 4.72-34.47 13.69-49.39l77.75-129.59c9.09-15.16 4.19-34.81-10.97-43.91-14.45-8.67-32.72-4.3-42.3 9.21-.2.23-.62.21-.79.48l-117.26 175.9C117.56 205.9 112 224.31 112 243.29v80.23l-90.12 30.04A31.974 31.974 0 0 0 0 383.91v96c0 10.82 8.52 32 32 32 2.69 0 5.41-.34 8.06-1.03l179.19-46.62C269.16 449.99 304 403.8 304 351.91v-128c0-17.6-14.4-32-32-32zm346.12 161.73L528 323.6v-80.23c0-18.98-5.56-37.39-16.12-53.23L394.62 14.25c-.18-.27-.59-.24-.79-.48-9.58-13.51-27.85-17.88-42.3-9.21-15.16 9.09-20.06 28.75-10.97 43.91l77.75 129.59c8.97 14.92 13.69 32 13.69 49.39V304c0 8.84-7.16 16-16 16s-16-7.16-16-16v-80c0-17.6-14.4-32-32-32s-32 14.4-32 32v128c0 51.89 34.84 98.08 84.75 112.34l179.19 46.62c2.66.69 5.38 1.03 8.06 1.03 23.48 0 32-21.18 32-32v-96c0-13.77-8.81-25.99-21.88-30.35z"},child:[]}]})(n)}function Zv(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"},child:[]}]})(n)}function e2(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"},child:[]}]})(n)}function t2(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(n)}function Wm(n){return me({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function n2(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"},child:[]}]})(n)}function r2(n){return me({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(n)}function qm(n){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function Ym(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"},child:[]}]})(n)}function Gm(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function o2(n){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"},child:[]}]})(n)}const i2="/assets/Logotipo%20PIB-Cfe4ndc0.png",s2=C.header`
  background: linear-gradient(to bottom, #81C6E8, #131E5B);
  padding: 0 ${u.spacings.medium};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 90px;
  display: flex;
  align-items: center;
  
`,a2=C.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
  max-width: ${u.breakpoints.desktop};
  margin: 0 auto;
`,l2=C(Ye)`
  img {
    height: 60px; // Ajustar conforme o logo
    width: auto;
    transition: transform 0.3s ease;
  }
  &:hover img {
    transform: scale(1.05);
  }
`,u2=C.li`
  display: flex;
  align-items: center;
  gap: ${u.spacings.small};
  font-family: ${u.fonts.primary};
  font-size: ${u.fontSizes.medium};


  

  @media (max-width: ${u.breakpoints.tablet}) {
    flex-direction: column;
    position: absolute;
    top: 80px; // Abaixo do header
    left: 0;
    width: 100%;
    background-color: ${u.colors.white};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: ${u.spacings.medium} 0;
    max-height: ${n=>n.$isOpen?"calc(100vh - 80px)":"0"};
    overflow-y: auto;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: ${n=>n.$isOpen?1:0};
    visibility: ${n=>n.$isOpen?"visible":"hidden"};
  }
`,ln=C(dm)`
  color: ${u.colors.lightGray};
  text-decoration: none;
  font-weight: ${u.fontWeights.bold};
  padding: ${u.spacings.xsmall} ${u.spacings.xsmall};  
  transition: color 0.3s ease, background-color 0.3s ease;
    border-radius: 4px;

  &:hover,
  &.active {
    color: ${u.colors.primary};
    background-color: ${u.colors.primary}40;
    
    
  }

  @media (max-width: ${u.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
    padding: ${u.spacings.medium} 0;
    border-bottom: 1px solid ${u.colors.lightGray};
    &:last-child {
        border-bottom: none;
    }
  }
`,c2=C.div`
  display: flex;
  align-items: center;
  gap: ${u.spacings.small};
  margin-left: ${u.spacings.medium}; // Espaço entre nav links e auth

  @media (max-width: ${u.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    padding-top: ${u.spacings.small}; // Espaço acima no menu mobile
  }
`,d2=C(ln)`
  background-color: ${u.colors.primary};
  color: ${u.colors.white};
  border: 1px solid ${u.colors.primary};

  &:hover,
  &.active {
    background-color: ${u.colors.secondary};
    color: ${u.colors.white};
  }
`,f2=C.button`
  background-color: transparent;
  color: ${u.colors.primary};
  border: 1px solid ${u.colors.primary};
  padding: ${u.spacings.xsmall} ${u.spacings.small};
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${u.spacings.xsmall};
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: ${u.fontSizes.medium};

  &:hover {
    background-color: ${u.colors.primary};
    color: ${u.colors.white};
  }

  @media (max-width: ${u.breakpoints.tablet}) {
    width: calc(100% - ${u.spacings.large}); // Ajustar para padding do container
    margin: ${u.spacings.small} auto;
    justify-content: center;
  }
`,p2=C.div`
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: ${u.colors.primary};

  @media (max-width: ${u.breakpoints.tablet}) {
    display: block;
  }
`,m2=C.div`
  display: flex;
  align-items: center;
  gap: ${u.spacings.xsmall};
  color: ${u.colors.text};
  font-weight: 500;

  svg {
    color: ${u.colors.primary};
    font-size: 1.2em;
  }

  @media (max-width: ${u.breakpoints.tablet}) {
    padding: ${u.spacings.small} 0;
    border-top: 1px solid ${u.colors.lightGray};
    width: 100%;
    justify-content: center;
  }
`,h2=()=>{const[n,o]=E.useState(localStorage.getItem("isLoggedIn")==="true"),[s,a]=E.useState(JSON.parse(localStorage.getItem("currentUser")||"null")),c=Ho(),p=g=>{localStorage.setItem("isLoggedIn","true"),localStorage.setItem("currentUser",JSON.stringify(g)),o(!0),a(g)},m=()=>{localStorage.removeItem("isLoggedIn"),localStorage.removeItem("currentUser"),o(!1),a(null),c("/")};return E.useEffect(()=>{const g=()=>{o(localStorage.getItem("isLoggedIn")==="true"),a(JSON.parse(localStorage.getItem("currentUser")||"null"))};return window.addEventListener("storage",g),()=>{window.removeEventListener("storage",g)}},[]),{isLoggedIn:n,currentUser:s,login:p,logout:m}},g2=()=>{const[n,o]=E.useState(!1),{isLoggedIn:s,currentUser:a,logout:c}=h2(),p=()=>{o(!n)},m=()=>{o(!1)};return f.jsx(s2,{children:f.jsxs(a2,{children:[f.jsx(l2,{to:"/",onClick:m,children:f.jsx("img",{src:i2,alt:"Logo PIB"})}),f.jsx(p2,{onClick:p,children:n?f.jsx(Wm,{}):f.jsx(Mv,{})}),f.jsxs(u2,{$isOpen:n,children:[f.jsx(ln,{to:"/",onClick:m,end:!0,children:"Home"}),f.jsx(ln,{to:"/pib",onClick:m,children:"PIB"}),f.jsx(ln,{to:"/ministerios",onClick:m,children:"Ministérios"}),f.jsx(ln,{to:"/eventos",onClick:m,children:"Eventos"}),f.jsx(ln,{to:"/inscricoes",onClick:m,children:"Inscrições"}),f.jsx(ln,{to:"/cultos",onClick:m,children:"Cultos"}),f.jsx(ln,{to:"/mural-piedade",onClick:m,children:"Mural Oração"}),f.jsx(ln,{to:"/contribua",onClick:m,children:"Contribuir"}),f.jsx(c2,{children:s?f.jsxs(f.Fragment,{children:[a&&f.jsxs(m2,{children:[f.jsx(r2,{})," ",a.nome||a.email]}),f.jsxs(f2,{onClick:()=>{c(),m()},children:[f.jsx(t2,{})," Sair"]})]}):f.jsx(f.Fragment,{children:f.jsx(d2,{as:Ye,to:"/login",onClick:m,children:"Login"})})})]})]})})};function Qm(n,o){return function(){return n.apply(o,arguments)}}const{toString:y2}=Object.prototype,{getPrototypeOf:Iu}=Object,{iterator:Fs,toStringTag:Km}=Symbol,As=(n=>o=>{const s=y2.call(o);return n[s]||(n[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),Dt=n=>(n=n.toLowerCase(),o=>As(o)===n),Ms=n=>o=>typeof o===n,{isArray:Hr}=Array,Do=Ms("undefined");function v2(n){return n!==null&&!Do(n)&&n.constructor!==null&&!Do(n.constructor)&&pt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Xm=Dt("ArrayBuffer");function x2(n){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(n):o=n&&n.buffer&&Xm(n.buffer),o}const w2=Ms("string"),pt=Ms("function"),Jm=Ms("number"),Ds=n=>n!==null&&typeof n=="object",S2=n=>n===!0||n===!1,hs=n=>{if(As(n)!=="object")return!1;const o=Iu(n);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Km in n)&&!(Fs in n)},$2=Dt("Date"),E2=Dt("File"),C2=Dt("Blob"),j2=Dt("FileList"),k2=n=>Ds(n)&&pt(n.pipe),P2=n=>{let o;return n&&(typeof FormData=="function"&&n instanceof FormData||pt(n.append)&&((o=As(n))==="formdata"||o==="object"&&pt(n.toString)&&n.toString()==="[object FormData]"))},b2=Dt("URLSearchParams"),[z2,R2,L2,T2]=["ReadableStream","Request","Response","Headers"].map(Dt),_2=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wo(n,o,{allOwnKeys:s=!1}={}){if(n===null||typeof n>"u")return;let a,c;if(typeof n!="object"&&(n=[n]),Hr(n))for(a=0,c=n.length;a<c;a++)o.call(null,n[a],a,n);else{const p=s?Object.getOwnPropertyNames(n):Object.keys(n),m=p.length;let g;for(a=0;a<m;a++)g=p[a],o.call(null,n[g],g,n)}}function Zm(n,o){o=o.toLowerCase();const s=Object.keys(n);let a=s.length,c;for(;a-- >0;)if(c=s[a],o===c.toLowerCase())return c;return null}const Xn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,eh=n=>!Do(n)&&n!==Xn;function pu(){const{caseless:n}=eh(this)&&this||{},o={},s=(a,c)=>{const p=n&&Zm(o,c)||c;hs(o[p])&&hs(a)?o[p]=pu(o[p],a):hs(a)?o[p]=pu({},a):Hr(a)?o[p]=a.slice():o[p]=a};for(let a=0,c=arguments.length;a<c;a++)arguments[a]&&Wo(arguments[a],s);return o}const N2=(n,o,s,{allOwnKeys:a}={})=>(Wo(o,(c,p)=>{s&&pt(c)?n[p]=Qm(c,s):n[p]=c},{allOwnKeys:a}),n),O2=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),I2=(n,o,s,a)=>{n.prototype=Object.create(o.prototype,a),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:o.prototype}),s&&Object.assign(n.prototype,s)},F2=(n,o,s,a)=>{let c,p,m;const g={};if(o=o||{},n==null)return o;do{for(c=Object.getOwnPropertyNames(n),p=c.length;p-- >0;)m=c[p],(!a||a(m,n,o))&&!g[m]&&(o[m]=n[m],g[m]=!0);n=s!==!1&&Iu(n)}while(n&&(!s||s(n,o))&&n!==Object.prototype);return o},A2=(n,o,s)=>{n=String(n),(s===void 0||s>n.length)&&(s=n.length),s-=o.length;const a=n.indexOf(o,s);return a!==-1&&a===s},M2=n=>{if(!n)return null;if(Hr(n))return n;let o=n.length;if(!Jm(o))return null;const s=new Array(o);for(;o-- >0;)s[o]=n[o];return s},D2=(n=>o=>n&&o instanceof n)(typeof Uint8Array<"u"&&Iu(Uint8Array)),B2=(n,o)=>{const a=(n&&n[Fs]).call(n);let c;for(;(c=a.next())&&!c.done;){const p=c.value;o.call(n,p[0],p[1])}},U2=(n,o)=>{let s;const a=[];for(;(s=n.exec(o))!==null;)a.push(s);return a},H2=Dt("HTMLFormElement"),V2=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,a,c){return a.toUpperCase()+c}),cp=(({hasOwnProperty:n})=>(o,s)=>n.call(o,s))(Object.prototype),W2=Dt("RegExp"),th=(n,o)=>{const s=Object.getOwnPropertyDescriptors(n),a={};Wo(s,(c,p)=>{let m;(m=o(c,p,n))!==!1&&(a[p]=m||c)}),Object.defineProperties(n,a)},q2=n=>{th(n,(o,s)=>{if(pt(n)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const a=n[s];if(pt(a)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},Y2=(n,o)=>{const s={},a=c=>{c.forEach(p=>{s[p]=!0})};return Hr(n)?a(n):a(String(n).split(o)),s},G2=()=>{},Q2=(n,o)=>n!=null&&Number.isFinite(n=+n)?n:o;function K2(n){return!!(n&&pt(n.append)&&n[Km]==="FormData"&&n[Fs])}const X2=n=>{const o=new Array(10),s=(a,c)=>{if(Ds(a)){if(o.indexOf(a)>=0)return;if(!("toJSON"in a)){o[c]=a;const p=Hr(a)?[]:{};return Wo(a,(m,g)=>{const v=s(m,c+1);!Do(v)&&(p[g]=v)}),o[c]=void 0,p}}return a};return s(n,0)},J2=Dt("AsyncFunction"),Z2=n=>n&&(Ds(n)||pt(n))&&pt(n.then)&&pt(n.catch),nh=((n,o)=>n?setImmediate:o?((s,a)=>(Xn.addEventListener("message",({source:c,data:p})=>{c===Xn&&p===s&&a.length&&a.shift()()},!1),c=>{a.push(c),Xn.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",pt(Xn.postMessage)),ex=typeof queueMicrotask<"u"?queueMicrotask.bind(Xn):typeof process<"u"&&process.nextTick||nh,tx=n=>n!=null&&pt(n[Fs]),I={isArray:Hr,isArrayBuffer:Xm,isBuffer:v2,isFormData:P2,isArrayBufferView:x2,isString:w2,isNumber:Jm,isBoolean:S2,isObject:Ds,isPlainObject:hs,isReadableStream:z2,isRequest:R2,isResponse:L2,isHeaders:T2,isUndefined:Do,isDate:$2,isFile:E2,isBlob:C2,isRegExp:W2,isFunction:pt,isStream:k2,isURLSearchParams:b2,isTypedArray:D2,isFileList:j2,forEach:Wo,merge:pu,extend:N2,trim:_2,stripBOM:O2,inherits:I2,toFlatObject:F2,kindOf:As,kindOfTest:Dt,endsWith:A2,toArray:M2,forEachEntry:B2,matchAll:U2,isHTMLForm:H2,hasOwnProperty:cp,hasOwnProp:cp,reduceDescriptors:th,freezeMethods:q2,toObjectSet:Y2,toCamelCase:V2,noop:G2,toFiniteNumber:Q2,findKey:Zm,global:Xn,isContextDefined:eh,isSpecCompliantForm:K2,toJSONObject:X2,isAsyncFn:J2,isThenable:Z2,setImmediate:nh,asap:ex,isIterable:tx};function ae(n,o,s,a,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",o&&(this.code=o),s&&(this.config=s),a&&(this.request=a),c&&(this.response=c,this.status=c.status?c.status:null)}I.inherits(ae,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:I.toJSONObject(this.config),code:this.code,status:this.status}}});const rh=ae.prototype,oh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{oh[n]={value:n}});Object.defineProperties(ae,oh);Object.defineProperty(rh,"isAxiosError",{value:!0});ae.from=(n,o,s,a,c,p)=>{const m=Object.create(rh);return I.toFlatObject(n,m,function(v){return v!==Error.prototype},g=>g!=="isAxiosError"),ae.call(m,n.message,o,s,a,c),m.cause=n,m.name=n.name,p&&Object.assign(m,p),m};const nx=null;function mu(n){return I.isPlainObject(n)||I.isArray(n)}function ih(n){return I.endsWith(n,"[]")?n.slice(0,-2):n}function dp(n,o,s){return n?n.concat(o).map(function(c,p){return c=ih(c),!s&&p?"["+c+"]":c}).join(s?".":""):o}function rx(n){return I.isArray(n)&&!n.some(mu)}const ox=I.toFlatObject(I,{},null,function(o){return/^is[A-Z]/.test(o)});function Bs(n,o,s){if(!I.isObject(n))throw new TypeError("target must be an object");o=o||new FormData,s=I.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,R){return!I.isUndefined(R[_])});const a=s.metaTokens,c=s.visitor||w,p=s.dots,m=s.indexes,v=(s.Blob||typeof Blob<"u"&&Blob)&&I.isSpecCompliantForm(o);if(!I.isFunction(c))throw new TypeError("visitor must be a function");function y(P){if(P===null)return"";if(I.isDate(P))return P.toISOString();if(!v&&I.isBlob(P))throw new ae("Blob is not supported. Use a Buffer instead.");return I.isArrayBuffer(P)||I.isTypedArray(P)?v&&typeof Blob=="function"?new Blob([P]):Buffer.from(P):P}function w(P,_,R){let N=P;if(P&&!R&&typeof P=="object"){if(I.endsWith(_,"{}"))_=a?_:_.slice(0,-2),P=JSON.stringify(P);else if(I.isArray(P)&&rx(P)||(I.isFileList(P)||I.endsWith(_,"[]"))&&(N=I.toArray(P)))return _=ih(_),N.forEach(function(F,V){!(I.isUndefined(F)||F===null)&&o.append(m===!0?dp([_],V,p):m===null?_:_+"[]",y(F))}),!1}return mu(P)?!0:(o.append(dp(R,_,p),y(P)),!1)}const $=[],k=Object.assign(ox,{defaultVisitor:w,convertValue:y,isVisitable:mu});function O(P,_){if(!I.isUndefined(P)){if($.indexOf(P)!==-1)throw Error("Circular reference detected in "+_.join("."));$.push(P),I.forEach(P,function(N,A){(!(I.isUndefined(N)||N===null)&&c.call(o,N,I.isString(A)?A.trim():A,_,k))===!0&&O(N,_?_.concat(A):[A])}),$.pop()}}if(!I.isObject(n))throw new TypeError("data must be an object");return O(n),o}function fp(n){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(a){return o[a]})}function Fu(n,o){this._pairs=[],n&&Bs(n,this,o)}const sh=Fu.prototype;sh.append=function(o,s){this._pairs.push([o,s])};sh.toString=function(o){const s=o?function(a){return o.call(this,a,fp)}:fp;return this._pairs.map(function(c){return s(c[0])+"="+s(c[1])},"").join("&")};function ix(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ah(n,o,s){if(!o)return n;const a=s&&s.encode||ix;I.isFunction(s)&&(s={serialize:s});const c=s&&s.serialize;let p;if(c?p=c(o,s):p=I.isURLSearchParams(o)?o.toString():new Fu(o,s).toString(a),p){const m=n.indexOf("#");m!==-1&&(n=n.slice(0,m)),n+=(n.indexOf("?")===-1?"?":"&")+p}return n}class pp{constructor(){this.handlers=[]}use(o,s,a){return this.handlers.push({fulfilled:o,rejected:s,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){I.forEach(this.handlers,function(a){a!==null&&o(a)})}}const lh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},sx=typeof URLSearchParams<"u"?URLSearchParams:Fu,ax=typeof FormData<"u"?FormData:null,lx=typeof Blob<"u"?Blob:null,ux={isBrowser:!0,classes:{URLSearchParams:sx,FormData:ax,Blob:lx},protocols:["http","https","file","blob","url","data"]},Au=typeof window<"u"&&typeof document<"u",hu=typeof navigator=="object"&&navigator||void 0,cx=Au&&(!hu||["ReactNative","NativeScript","NS"].indexOf(hu.product)<0),dx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",fx=Au&&window.location.href||"http://localhost",px=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Au,hasStandardBrowserEnv:cx,hasStandardBrowserWebWorkerEnv:dx,navigator:hu,origin:fx},Symbol.toStringTag,{value:"Module"})),nt={...px,...ux};function mx(n,o){return Bs(n,new nt.classes.URLSearchParams,Object.assign({visitor:function(s,a,c,p){return nt.isNode&&I.isBuffer(s)?(this.append(a,s.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)}},o))}function hx(n){return I.matchAll(/\w+|\[(\w*)]/g,n).map(o=>o[0]==="[]"?"":o[1]||o[0])}function gx(n){const o={},s=Object.keys(n);let a;const c=s.length;let p;for(a=0;a<c;a++)p=s[a],o[p]=n[p];return o}function uh(n){function o(s,a,c,p){let m=s[p++];if(m==="__proto__")return!0;const g=Number.isFinite(+m),v=p>=s.length;return m=!m&&I.isArray(c)?c.length:m,v?(I.hasOwnProp(c,m)?c[m]=[c[m],a]:c[m]=a,!g):((!c[m]||!I.isObject(c[m]))&&(c[m]=[]),o(s,a,c[m],p)&&I.isArray(c[m])&&(c[m]=gx(c[m])),!g)}if(I.isFormData(n)&&I.isFunction(n.entries)){const s={};return I.forEachEntry(n,(a,c)=>{o(hx(a),c,s,0)}),s}return null}function yx(n,o,s){if(I.isString(n))try{return(o||JSON.parse)(n),I.trim(n)}catch(a){if(a.name!=="SyntaxError")throw a}return(s||JSON.stringify)(n)}const qo={transitional:lh,adapter:["xhr","http","fetch"],transformRequest:[function(o,s){const a=s.getContentType()||"",c=a.indexOf("application/json")>-1,p=I.isObject(o);if(p&&I.isHTMLForm(o)&&(o=new FormData(o)),I.isFormData(o))return c?JSON.stringify(uh(o)):o;if(I.isArrayBuffer(o)||I.isBuffer(o)||I.isStream(o)||I.isFile(o)||I.isBlob(o)||I.isReadableStream(o))return o;if(I.isArrayBufferView(o))return o.buffer;if(I.isURLSearchParams(o))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let g;if(p){if(a.indexOf("application/x-www-form-urlencoded")>-1)return mx(o,this.formSerializer).toString();if((g=I.isFileList(o))||a.indexOf("multipart/form-data")>-1){const v=this.env&&this.env.FormData;return Bs(g?{"files[]":o}:o,v&&new v,this.formSerializer)}}return p||c?(s.setContentType("application/json",!1),yx(o)):o}],transformResponse:[function(o){const s=this.transitional||qo.transitional,a=s&&s.forcedJSONParsing,c=this.responseType==="json";if(I.isResponse(o)||I.isReadableStream(o))return o;if(o&&I.isString(o)&&(a&&!this.responseType||c)){const m=!(s&&s.silentJSONParsing)&&c;try{return JSON.parse(o)}catch(g){if(m)throw g.name==="SyntaxError"?ae.from(g,ae.ERR_BAD_RESPONSE,this,null,this.response):g}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};I.forEach(["delete","get","head","post","put","patch"],n=>{qo.headers[n]={}});const vx=I.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),xx=n=>{const o={};let s,a,c;return n&&n.split(`
`).forEach(function(m){c=m.indexOf(":"),s=m.substring(0,c).trim().toLowerCase(),a=m.substring(c+1).trim(),!(!s||o[s]&&vx[s])&&(s==="set-cookie"?o[s]?o[s].push(a):o[s]=[a]:o[s]=o[s]?o[s]+", "+a:a)}),o},mp=Symbol("internals");function No(n){return n&&String(n).trim().toLowerCase()}function gs(n){return n===!1||n==null?n:I.isArray(n)?n.map(gs):String(n)}function wx(n){const o=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=s.exec(n);)o[a[1]]=a[2];return o}const Sx=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Gl(n,o,s,a,c){if(I.isFunction(a))return a.call(this,o,s);if(c&&(o=s),!!I.isString(o)){if(I.isString(a))return o.indexOf(a)!==-1;if(I.isRegExp(a))return a.test(o)}}function $x(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,s,a)=>s.toUpperCase()+a)}function Ex(n,o){const s=I.toCamelCase(" "+o);["get","set","has"].forEach(a=>{Object.defineProperty(n,a+s,{value:function(c,p,m){return this[a].call(this,o,c,p,m)},configurable:!0})})}let mt=class{constructor(o){o&&this.set(o)}set(o,s,a){const c=this;function p(g,v,y){const w=No(v);if(!w)throw new Error("header name must be a non-empty string");const $=I.findKey(c,w);(!$||c[$]===void 0||y===!0||y===void 0&&c[$]!==!1)&&(c[$||v]=gs(g))}const m=(g,v)=>I.forEach(g,(y,w)=>p(y,w,v));if(I.isPlainObject(o)||o instanceof this.constructor)m(o,s);else if(I.isString(o)&&(o=o.trim())&&!Sx(o))m(xx(o),s);else if(I.isObject(o)&&I.isIterable(o)){let g={},v,y;for(const w of o){if(!I.isArray(w))throw TypeError("Object iterator must return a key-value pair");g[y=w[0]]=(v=g[y])?I.isArray(v)?[...v,w[1]]:[v,w[1]]:w[1]}m(g,s)}else o!=null&&p(s,o,a);return this}get(o,s){if(o=No(o),o){const a=I.findKey(this,o);if(a){const c=this[a];if(!s)return c;if(s===!0)return wx(c);if(I.isFunction(s))return s.call(this,c,a);if(I.isRegExp(s))return s.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,s){if(o=No(o),o){const a=I.findKey(this,o);return!!(a&&this[a]!==void 0&&(!s||Gl(this,this[a],a,s)))}return!1}delete(o,s){const a=this;let c=!1;function p(m){if(m=No(m),m){const g=I.findKey(a,m);g&&(!s||Gl(a,a[g],g,s))&&(delete a[g],c=!0)}}return I.isArray(o)?o.forEach(p):p(o),c}clear(o){const s=Object.keys(this);let a=s.length,c=!1;for(;a--;){const p=s[a];(!o||Gl(this,this[p],p,o,!0))&&(delete this[p],c=!0)}return c}normalize(o){const s=this,a={};return I.forEach(this,(c,p)=>{const m=I.findKey(a,p);if(m){s[m]=gs(c),delete s[p];return}const g=o?$x(p):String(p).trim();g!==p&&delete s[p],s[g]=gs(c),a[g]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const s=Object.create(null);return I.forEach(this,(a,c)=>{a!=null&&a!==!1&&(s[c]=o&&I.isArray(a)?a.join(", "):a)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,s])=>o+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...s){const a=new this(o);return s.forEach(c=>a.set(c)),a}static accessor(o){const a=(this[mp]=this[mp]={accessors:{}}).accessors,c=this.prototype;function p(m){const g=No(m);a[g]||(Ex(c,m),a[g]=!0)}return I.isArray(o)?o.forEach(p):p(o),this}};mt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);I.reduceDescriptors(mt.prototype,({value:n},o)=>{let s=o[0].toUpperCase()+o.slice(1);return{get:()=>n,set(a){this[s]=a}}});I.freezeMethods(mt);function Ql(n,o){const s=this||qo,a=o||s,c=mt.from(a.headers);let p=a.data;return I.forEach(n,function(g){p=g.call(s,p,c.normalize(),o?o.status:void 0)}),c.normalize(),p}function ch(n){return!!(n&&n.__CANCEL__)}function Vr(n,o,s){ae.call(this,n??"canceled",ae.ERR_CANCELED,o,s),this.name="CanceledError"}I.inherits(Vr,ae,{__CANCEL__:!0});function dh(n,o,s){const a=s.config.validateStatus;!s.status||!a||a(s.status)?n(s):o(new ae("Request failed with status code "+s.status,[ae.ERR_BAD_REQUEST,ae.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function Cx(n){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return o&&o[1]||""}function jx(n,o){n=n||10;const s=new Array(n),a=new Array(n);let c=0,p=0,m;return o=o!==void 0?o:1e3,function(v){const y=Date.now(),w=a[p];m||(m=y),s[c]=v,a[c]=y;let $=p,k=0;for(;$!==c;)k+=s[$++],$=$%n;if(c=(c+1)%n,c===p&&(p=(p+1)%n),y-m<o)return;const O=w&&y-w;return O?Math.round(k*1e3/O):void 0}}function kx(n,o){let s=0,a=1e3/o,c,p;const m=(y,w=Date.now())=>{s=w,c=null,p&&(clearTimeout(p),p=null),n.apply(null,y)};return[(...y)=>{const w=Date.now(),$=w-s;$>=a?m(y,w):(c=y,p||(p=setTimeout(()=>{p=null,m(c)},a-$)))},()=>c&&m(c)]}const ks=(n,o,s=3)=>{let a=0;const c=jx(50,250);return kx(p=>{const m=p.loaded,g=p.lengthComputable?p.total:void 0,v=m-a,y=c(v),w=m<=g;a=m;const $={loaded:m,total:g,progress:g?m/g:void 0,bytes:v,rate:y||void 0,estimated:y&&g&&w?(g-m)/y:void 0,event:p,lengthComputable:g!=null,[o?"download":"upload"]:!0};n($)},s)},hp=(n,o)=>{const s=n!=null;return[a=>o[0]({lengthComputable:s,total:n,loaded:a}),o[1]]},gp=n=>(...o)=>I.asap(()=>n(...o)),Px=nt.hasStandardBrowserEnv?((n,o)=>s=>(s=new URL(s,nt.origin),n.protocol===s.protocol&&n.host===s.host&&(o||n.port===s.port)))(new URL(nt.origin),nt.navigator&&/(msie|trident)/i.test(nt.navigator.userAgent)):()=>!0,bx=nt.hasStandardBrowserEnv?{write(n,o,s,a,c,p){const m=[n+"="+encodeURIComponent(o)];I.isNumber(s)&&m.push("expires="+new Date(s).toGMTString()),I.isString(a)&&m.push("path="+a),I.isString(c)&&m.push("domain="+c),p===!0&&m.push("secure"),document.cookie=m.join("; ")},read(n){const o=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return o?decodeURIComponent(o[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function zx(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Rx(n,o){return o?n.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):n}function fh(n,o,s){let a=!zx(o);return n&&(a||s==!1)?Rx(n,o):o}const yp=n=>n instanceof mt?{...n}:n;function nr(n,o){o=o||{};const s={};function a(y,w,$,k){return I.isPlainObject(y)&&I.isPlainObject(w)?I.merge.call({caseless:k},y,w):I.isPlainObject(w)?I.merge({},w):I.isArray(w)?w.slice():w}function c(y,w,$,k){if(I.isUndefined(w)){if(!I.isUndefined(y))return a(void 0,y,$,k)}else return a(y,w,$,k)}function p(y,w){if(!I.isUndefined(w))return a(void 0,w)}function m(y,w){if(I.isUndefined(w)){if(!I.isUndefined(y))return a(void 0,y)}else return a(void 0,w)}function g(y,w,$){if($ in o)return a(y,w);if($ in n)return a(void 0,y)}const v={url:p,method:p,data:p,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:g,headers:(y,w,$)=>c(yp(y),yp(w),$,!0)};return I.forEach(Object.keys(Object.assign({},n,o)),function(w){const $=v[w]||c,k=$(n[w],o[w],w);I.isUndefined(k)&&$!==g||(s[w]=k)}),s}const ph=n=>{const o=nr({},n);let{data:s,withXSRFToken:a,xsrfHeaderName:c,xsrfCookieName:p,headers:m,auth:g}=o;o.headers=m=mt.from(m),o.url=ah(fh(o.baseURL,o.url,o.allowAbsoluteUrls),n.params,n.paramsSerializer),g&&m.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let v;if(I.isFormData(s)){if(nt.hasStandardBrowserEnv||nt.hasStandardBrowserWebWorkerEnv)m.setContentType(void 0);else if((v=m.getContentType())!==!1){const[y,...w]=v?v.split(";").map($=>$.trim()).filter(Boolean):[];m.setContentType([y||"multipart/form-data",...w].join("; "))}}if(nt.hasStandardBrowserEnv&&(a&&I.isFunction(a)&&(a=a(o)),a||a!==!1&&Px(o.url))){const y=c&&p&&bx.read(p);y&&m.set(c,y)}return o},Lx=typeof XMLHttpRequest<"u",Tx=Lx&&function(n){return new Promise(function(s,a){const c=ph(n);let p=c.data;const m=mt.from(c.headers).normalize();let{responseType:g,onUploadProgress:v,onDownloadProgress:y}=c,w,$,k,O,P;function _(){O&&O(),P&&P(),c.cancelToken&&c.cancelToken.unsubscribe(w),c.signal&&c.signal.removeEventListener("abort",w)}let R=new XMLHttpRequest;R.open(c.method.toUpperCase(),c.url,!0),R.timeout=c.timeout;function N(){if(!R)return;const F=mt.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),Q={data:!g||g==="text"||g==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:F,config:n,request:R};dh(function(q){s(q),_()},function(q){a(q),_()},Q),R=null}"onloadend"in R?R.onloadend=N:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(N)},R.onabort=function(){R&&(a(new ae("Request aborted",ae.ECONNABORTED,n,R)),R=null)},R.onerror=function(){a(new ae("Network Error",ae.ERR_NETWORK,n,R)),R=null},R.ontimeout=function(){let V=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const Q=c.transitional||lh;c.timeoutErrorMessage&&(V=c.timeoutErrorMessage),a(new ae(V,Q.clarifyTimeoutError?ae.ETIMEDOUT:ae.ECONNABORTED,n,R)),R=null},p===void 0&&m.setContentType(null),"setRequestHeader"in R&&I.forEach(m.toJSON(),function(V,Q){R.setRequestHeader(Q,V)}),I.isUndefined(c.withCredentials)||(R.withCredentials=!!c.withCredentials),g&&g!=="json"&&(R.responseType=c.responseType),y&&([k,P]=ks(y,!0),R.addEventListener("progress",k)),v&&R.upload&&([$,O]=ks(v),R.upload.addEventListener("progress",$),R.upload.addEventListener("loadend",O)),(c.cancelToken||c.signal)&&(w=F=>{R&&(a(!F||F.type?new Vr(null,n,R):F),R.abort(),R=null)},c.cancelToken&&c.cancelToken.subscribe(w),c.signal&&(c.signal.aborted?w():c.signal.addEventListener("abort",w)));const A=Cx(c.url);if(A&&nt.protocols.indexOf(A)===-1){a(new ae("Unsupported protocol "+A+":",ae.ERR_BAD_REQUEST,n));return}R.send(p||null)})},_x=(n,o)=>{const{length:s}=n=n?n.filter(Boolean):[];if(o||s){let a=new AbortController,c;const p=function(y){if(!c){c=!0,g();const w=y instanceof Error?y:this.reason;a.abort(w instanceof ae?w:new Vr(w instanceof Error?w.message:w))}};let m=o&&setTimeout(()=>{m=null,p(new ae(`timeout ${o} of ms exceeded`,ae.ETIMEDOUT))},o);const g=()=>{n&&(m&&clearTimeout(m),m=null,n.forEach(y=>{y.unsubscribe?y.unsubscribe(p):y.removeEventListener("abort",p)}),n=null)};n.forEach(y=>y.addEventListener("abort",p));const{signal:v}=a;return v.unsubscribe=()=>I.asap(g),v}},Nx=function*(n,o){let s=n.byteLength;if(s<o){yield n;return}let a=0,c;for(;a<s;)c=a+o,yield n.slice(a,c),a=c},Ox=async function*(n,o){for await(const s of Ix(n))yield*Nx(s,o)},Ix=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const o=n.getReader();try{for(;;){const{done:s,value:a}=await o.read();if(s)break;yield a}}finally{await o.cancel()}},vp=(n,o,s,a)=>{const c=Ox(n,o);let p=0,m,g=v=>{m||(m=!0,a&&a(v))};return new ReadableStream({async pull(v){try{const{done:y,value:w}=await c.next();if(y){g(),v.close();return}let $=w.byteLength;if(s){let k=p+=$;s(k)}v.enqueue(new Uint8Array(w))}catch(y){throw g(y),y}},cancel(v){return g(v),c.return()}},{highWaterMark:2})},Us=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",mh=Us&&typeof ReadableStream=="function",Fx=Us&&(typeof TextEncoder=="function"?(n=>o=>n.encode(o))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),hh=(n,...o)=>{try{return!!n(...o)}catch{return!1}},Ax=mh&&hh(()=>{let n=!1;const o=new Request(nt.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!o}),xp=64*1024,gu=mh&&hh(()=>I.isReadableStream(new Response("").body)),Ps={stream:gu&&(n=>n.body)};Us&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(o=>{!Ps[o]&&(Ps[o]=I.isFunction(n[o])?s=>s[o]():(s,a)=>{throw new ae(`Response type '${o}' is not supported`,ae.ERR_NOT_SUPPORT,a)})})})(new Response);const Mx=async n=>{if(n==null)return 0;if(I.isBlob(n))return n.size;if(I.isSpecCompliantForm(n))return(await new Request(nt.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(I.isArrayBufferView(n)||I.isArrayBuffer(n))return n.byteLength;if(I.isURLSearchParams(n)&&(n=n+""),I.isString(n))return(await Fx(n)).byteLength},Dx=async(n,o)=>{const s=I.toFiniteNumber(n.getContentLength());return s??Mx(o)},Bx=Us&&(async n=>{let{url:o,method:s,data:a,signal:c,cancelToken:p,timeout:m,onDownloadProgress:g,onUploadProgress:v,responseType:y,headers:w,withCredentials:$="same-origin",fetchOptions:k}=ph(n);y=y?(y+"").toLowerCase():"text";let O=_x([c,p&&p.toAbortSignal()],m),P;const _=O&&O.unsubscribe&&(()=>{O.unsubscribe()});let R;try{if(v&&Ax&&s!=="get"&&s!=="head"&&(R=await Dx(w,a))!==0){let Q=new Request(o,{method:"POST",body:a,duplex:"half"}),J;if(I.isFormData(a)&&(J=Q.headers.get("content-type"))&&w.setContentType(J),Q.body){const[q,ne]=hp(R,ks(gp(v)));a=vp(Q.body,xp,q,ne)}}I.isString($)||($=$?"include":"omit");const N="credentials"in Request.prototype;P=new Request(o,{...k,signal:O,method:s.toUpperCase(),headers:w.normalize().toJSON(),body:a,duplex:"half",credentials:N?$:void 0});let A=await fetch(P);const F=gu&&(y==="stream"||y==="response");if(gu&&(g||F&&_)){const Q={};["status","statusText","headers"].forEach(he=>{Q[he]=A[he]});const J=I.toFiniteNumber(A.headers.get("content-length")),[q,ne]=g&&hp(J,ks(gp(g),!0))||[];A=new Response(vp(A.body,xp,q,()=>{ne&&ne(),_&&_()}),Q)}y=y||"text";let V=await Ps[I.findKey(Ps,y)||"text"](A,n);return!F&&_&&_(),await new Promise((Q,J)=>{dh(Q,J,{data:V,headers:mt.from(A.headers),status:A.status,statusText:A.statusText,config:n,request:P})})}catch(N){throw _&&_(),N&&N.name==="TypeError"&&/Load failed|fetch/i.test(N.message)?Object.assign(new ae("Network Error",ae.ERR_NETWORK,n,P),{cause:N.cause||N}):ae.from(N,N&&N.code,n,P)}}),yu={http:nx,xhr:Tx,fetch:Bx};I.forEach(yu,(n,o)=>{if(n){try{Object.defineProperty(n,"name",{value:o})}catch{}Object.defineProperty(n,"adapterName",{value:o})}});const wp=n=>`- ${n}`,Ux=n=>I.isFunction(n)||n===null||n===!1,gh={getAdapter:n=>{n=I.isArray(n)?n:[n];const{length:o}=n;let s,a;const c={};for(let p=0;p<o;p++){s=n[p];let m;if(a=s,!Ux(s)&&(a=yu[(m=String(s)).toLowerCase()],a===void 0))throw new ae(`Unknown adapter '${m}'`);if(a)break;c[m||"#"+p]=a}if(!a){const p=Object.entries(c).map(([g,v])=>`adapter ${g} `+(v===!1?"is not supported by the environment":"is not available in the build"));let m=o?p.length>1?`since :
`+p.map(wp).join(`
`):" "+wp(p[0]):"as no adapter specified";throw new ae("There is no suitable adapter to dispatch the request "+m,"ERR_NOT_SUPPORT")}return a},adapters:yu};function Kl(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Vr(null,n)}function Sp(n){return Kl(n),n.headers=mt.from(n.headers),n.data=Ql.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),gh.getAdapter(n.adapter||qo.adapter)(n).then(function(a){return Kl(n),a.data=Ql.call(n,n.transformResponse,a),a.headers=mt.from(a.headers),a},function(a){return ch(a)||(Kl(n),a&&a.response&&(a.response.data=Ql.call(n,n.transformResponse,a.response),a.response.headers=mt.from(a.response.headers))),Promise.reject(a)})}const yh="1.9.0",Hs={};["object","boolean","number","function","string","symbol"].forEach((n,o)=>{Hs[n]=function(a){return typeof a===n||"a"+(o<1?"n ":" ")+n}});const $p={};Hs.transitional=function(o,s,a){function c(p,m){return"[Axios v"+yh+"] Transitional option '"+p+"'"+m+(a?". "+a:"")}return(p,m,g)=>{if(o===!1)throw new ae(c(m," has been removed"+(s?" in "+s:"")),ae.ERR_DEPRECATED);return s&&!$p[m]&&($p[m]=!0,console.warn(c(m," has been deprecated since v"+s+" and will be removed in the near future"))),o?o(p,m,g):!0}};Hs.spelling=function(o){return(s,a)=>(console.warn(`${a} is likely a misspelling of ${o}`),!0)};function Hx(n,o,s){if(typeof n!="object")throw new ae("options must be an object",ae.ERR_BAD_OPTION_VALUE);const a=Object.keys(n);let c=a.length;for(;c-- >0;){const p=a[c],m=o[p];if(m){const g=n[p],v=g===void 0||m(g,p,n);if(v!==!0)throw new ae("option "+p+" must be "+v,ae.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new ae("Unknown option "+p,ae.ERR_BAD_OPTION)}}const ys={assertOptions:Hx,validators:Hs},qt=ys.validators;let Zn=class{constructor(o){this.defaults=o||{},this.interceptors={request:new pp,response:new pp}}async request(o,s){try{return await this._request(o,s)}catch(a){if(a instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const p=c.stack?c.stack.replace(/^.+\n/,""):"";try{a.stack?p&&!String(a.stack).endsWith(p.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+p):a.stack=p}catch{}}throw a}}_request(o,s){typeof o=="string"?(s=s||{},s.url=o):s=o||{},s=nr(this.defaults,s);const{transitional:a,paramsSerializer:c,headers:p}=s;a!==void 0&&ys.assertOptions(a,{silentJSONParsing:qt.transitional(qt.boolean),forcedJSONParsing:qt.transitional(qt.boolean),clarifyTimeoutError:qt.transitional(qt.boolean)},!1),c!=null&&(I.isFunction(c)?s.paramsSerializer={serialize:c}:ys.assertOptions(c,{encode:qt.function,serialize:qt.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),ys.assertOptions(s,{baseUrl:qt.spelling("baseURL"),withXsrfToken:qt.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let m=p&&I.merge(p.common,p[s.method]);p&&I.forEach(["delete","get","head","post","put","patch","common"],P=>{delete p[P]}),s.headers=mt.concat(m,p);const g=[];let v=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(s)===!1||(v=v&&_.synchronous,g.unshift(_.fulfilled,_.rejected))});const y=[];this.interceptors.response.forEach(function(_){y.push(_.fulfilled,_.rejected)});let w,$=0,k;if(!v){const P=[Sp.bind(this),void 0];for(P.unshift.apply(P,g),P.push.apply(P,y),k=P.length,w=Promise.resolve(s);$<k;)w=w.then(P[$++],P[$++]);return w}k=g.length;let O=s;for($=0;$<k;){const P=g[$++],_=g[$++];try{O=P(O)}catch(R){_.call(this,R);break}}try{w=Sp.call(this,O)}catch(P){return Promise.reject(P)}for($=0,k=y.length;$<k;)w=w.then(y[$++],y[$++]);return w}getUri(o){o=nr(this.defaults,o);const s=fh(o.baseURL,o.url,o.allowAbsoluteUrls);return ah(s,o.params,o.paramsSerializer)}};I.forEach(["delete","get","head","options"],function(o){Zn.prototype[o]=function(s,a){return this.request(nr(a||{},{method:o,url:s,data:(a||{}).data}))}});I.forEach(["post","put","patch"],function(o){function s(a){return function(p,m,g){return this.request(nr(g||{},{method:o,headers:a?{"Content-Type":"multipart/form-data"}:{},url:p,data:m}))}}Zn.prototype[o]=s(),Zn.prototype[o+"Form"]=s(!0)});let Vx=class vh{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(p){s=p});const a=this;this.promise.then(c=>{if(!a._listeners)return;let p=a._listeners.length;for(;p-- >0;)a._listeners[p](c);a._listeners=null}),this.promise.then=c=>{let p;const m=new Promise(g=>{a.subscribe(g),p=g}).then(c);return m.cancel=function(){a.unsubscribe(p)},m},o(function(p,m,g){a.reason||(a.reason=new Vr(p,m,g),s(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const s=this._listeners.indexOf(o);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const o=new AbortController,s=a=>{o.abort(a)};return this.subscribe(s),o.signal.unsubscribe=()=>this.unsubscribe(s),o.signal}static source(){let o;return{token:new vh(function(c){o=c}),cancel:o}}};function Wx(n){return function(s){return n.apply(null,s)}}function qx(n){return I.isObject(n)&&n.isAxiosError===!0}const vu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(vu).forEach(([n,o])=>{vu[o]=n});function xh(n){const o=new Zn(n),s=Qm(Zn.prototype.request,o);return I.extend(s,Zn.prototype,o,{allOwnKeys:!0}),I.extend(s,o,null,{allOwnKeys:!0}),s.create=function(c){return xh(nr(n,c))},s}const ce=xh(qo);ce.Axios=Zn;ce.CanceledError=Vr;ce.CancelToken=Vx;ce.isCancel=ch;ce.VERSION=yh;ce.toFormData=Bs;ce.AxiosError=ae;ce.Cancel=ce.CanceledError;ce.all=function(o){return Promise.all(o)};ce.spread=Wx;ce.isAxiosError=qx;ce.mergeConfig=nr;ce.AxiosHeaders=mt;ce.formToJSON=n=>uh(I.isHTMLForm(n)?new FormData(n):n);ce.getAdapter=gh.getAdapter;ce.HttpStatusCode=vu;ce.default=ce;const{Axios:s6,AxiosError:a6,CanceledError:l6,isCancel:u6,CancelToken:c6,VERSION:d6,all:f6,Cancel:p6,isAxiosError:m6,spread:h6,toFormData:g6,AxiosHeaders:y6,HttpStatusCode:v6,formToJSON:x6,getAdapter:w6,mergeConfig:S6}=ce,Ep=C.footer`
  background: linear-gradient(to left, #131E5B, #81C6E8); // Cor escura para o footer
  color: ${u.colors.lightGray};
  padding: ${u.spacings.large} ${u.spacings.medium};
  font-family: ${u.fonts.main};
`,Yx=C.div`
  max-width: ${u.breakpoints.desktop};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${u.spacings.large};
  text-align: left;

  @media (max-width: ${u.breakpoints.mobile}) {
    text-align: center;
    grid-template-columns: 1fr;
  }
`,Xl=C.div`
  h4 {
    font-size: ${u.fontSizes.large};
    color: ${u.colors.white};
    margin-bottom: ${u.spacings.medium};
    font-family: ${u.fonts.heading};
    font-weight: 600;
  }

  p, a {
    font-size: ${u.fontSizes.medium};
    color: ${u.colors.lightGray};
    line-height: 1.7;
    margin-bottom: ${u.spacings.xsmall};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${u.colors.primary};
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: ${u.spacings.xsmall};
  }
`,Jl=C.div`
  display: flex;
  align-items: center;
  margin-bottom: ${u.spacings.small};
  
  svg {
    color: ${u.colors.primary};
    margin-right: ${u.spacings.small};
    font-size: 1.2em;
    min-width: 20px;
  }

  @media (max-width: ${u.breakpoints.mobile}) {
    justify-content: center;
  }
`,Gx=C.div`
  display: flex;
  gap: ${u.spacings.medium};
  margin-top: ${u.spacings.medium};

  a {
    color: ${u.colors.lightGray};
    font-size: 1.8rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: ${u.colors.primary};
      transform: scale(1.1);
    }
  }
  @media (max-width: ${u.breakpoints.mobile}) {
    justify-content: center;
  }
`,Qx=C.div`
  text-align: center;
  margin-top: ${u.spacings.large};
  padding-top: ${u.spacings.medium};
  border-top: 1px solid ${u.colors.mediumGray}50; // Linha sutil
  font-size: ${u.fontSizes.small};
  color: ${u.colors.mediumGray};

  a {
    color: ${u.colors.primary};
    text-decoration: underline;
    &:hover {
        color: ${u.colors.white};
    }
  }
`,Kx=C.img`
  max-height: 70px;
  margin-bottom: ${u.spacings.medium};
  
  @media (max-width: ${u.breakpoints.mobile}) {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`,Cp="/assets/logoPIB--0zaZ597.png",Xx=()=>{var c;const[n,o]=E.useState(null),[s,a]=E.useState(!0);return E.useEffect(()=>{(async()=>{var m,g;try{const y=(await ce.get("http://localhost:3001/contribuicao")).data,w={endereco:" R. José de Alencar, 2601",cidadeEstadoCep:"Estacao, Franca - SP, 14405-208",telefone:((m=y.contato)==null?void 0:m.telefone)||"(16) 3403-4383",email:((g=y.contato)==null?void 0:g.email)||"contato@pib.org.br",redesSociais:{facebook:"https://www.facebook.com/pibfrancaoficial/?locale=pt_BR",instagram:"https://www.instagram.com/pibfranca/",youtube:"https://www.youtube.com/@PIBFranca"},copyright:`© ${new Date().getFullYear()} Primeira Igreja Batista. Todos os direitos reservados.`,linksUteis:[{titulo:"Sobre Nós",url:"/pib"},{titulo:"Ministérios",url:"/ministerios"},{titulo:"Eventos",url:"/eventos"},{titulo:"Política de Privacidade",url:"/politica-de-privacidade"}],logoUrl:"/Logotipo PIB.png"};o(w)}catch(v){console.error("Erro ao buscar dados para o footer:",v),o({endereco:" R. José de Alencar, 2601",cidadeEstadoCep:"Estacao, Franca - SP, 14405-208",telefone:"(16) 3403-4383",email:"contato@example.com",redesSociais:{facebook:"#",instagram:"#",youtube:"#"},copyright:`© ${new Date().getFullYear()} Nome da Igreja. Todos os direitos reservados.`,linksUteis:[{titulo:"Sobre Nós",url:"/pib"},{titulo:"Ministérios",url:"/ministerios"},{titulo:"Eventos",url:"/eventos"},{titulo:"Política de Privacidade",url:"/politica-de-privacidade"}],logoUrl:Cp})}a(!1)})()},[]),s||!n?f.jsx(Ep,{children:f.jsx("p",{style:{textAlign:"center"},children:"Carregando rodapé..."})}):f.jsxs(Ep,{children:[f.jsxs(Yx,{children:[f.jsxs(Xl,{children:[f.jsx("h4",{children:"Contato"}),f.jsxs(Jl,{children:[f.jsx(Nu,{}),f.jsxs("div",{children:[f.jsx("p",{children:n.endereco}),f.jsx("p",{children:n.cidadeEstadoCep})]})]}),f.jsxs(Jl,{children:[f.jsx(Ou,{}),f.jsx("a",{href:`tel:${n.telefone}`,children:n.telefone})]}),f.jsxs(Jl,{children:[f.jsx(Ur,{}),f.jsx("a",{href:`mailto:${n.email}`,children:n.email})]})]}),f.jsxs(Xl,{children:[f.jsx("h4",{children:"Links Úteis"}),f.jsxs("ul",{children:[(c=n.linksUteis)==null?void 0:c.map(p=>f.jsx("li",{children:f.jsx(Ye,{to:p.url,children:p.titulo})},p.titulo)),f.jsx("li",{children:f.jsx(Ye,{to:"/cultos",children:"Nossos Cultos"})}),f.jsx("li",{children:f.jsx(Ye,{to:"/contribua",children:"Contribua"})})]})]}),f.jsxs(Xl,{children:[f.jsx("h4",{children:"Conecte-se Conosco"}),f.jsxs(Gx,{children:[n.redesSociais.facebook&&f.jsx("a",{href:n.redesSociais.facebook,target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:f.jsx(Iv,{})}),n.redesSociais.instagram&&f.jsx("a",{href:n.redesSociais.instagram,target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:f.jsx(Fv,{})}),n.redesSociais.youtube&&f.jsx("a",{href:n.redesSociais.youtube,target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:f.jsx(Dm,{})})]}),f.jsx("p",{style:{marginTop:u.spacings.medium},children:"Siga-nos nas redes sociais para ficar por dentro das novidades e eventos."}),f.jsx(Kx,{src:Cp,alt:"Logo da Igreja"})]})]}),f.jsxs(Qx,{children:[f.jsx("p",{children:n.copyright}),f.jsx("p",{children:f.jsx("a",{href:"https://portfolio-bruno-wener-fjax8twhb-brunowen10s-projects.vercel.app/",children:"Desenvolvido por Bruno Wener"})})]})]})},Jx=C.main`
  flex: 1;
  min-height: calc(100vh - 80px - 200px); // Ajustar 200px para a altura real do footer 
`,Zx=C.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,e4=({children:n})=>f.jsxs(Zx,{children:[f.jsx(g2,{}),f.jsx(Jx,{children:n}),f.jsx(Xx,{})]}),t4=C.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${u.colors.primary};
  color: ${u.colors.white};
  padding: ${u.spacings.medium};
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: ${u.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`,n4=C.p`
  margin: 0;
  font-size: ${u.fontSizes.medium};
  max-width: 70%;

  a {
    color: ${u.colors.white};
    text-decoration: underline;
    font-weight: bold;
    
    &:hover {
      color: ${u.colors.lightBlueGray};
    }
  }

  @media (max-width: ${u.breakpoints.mobile}) {
    max-width: 100%;
    margin-bottom: ${u.spacings.small};
  }
`,r4=C.div`
  display: flex;
  gap: ${u.spacings.small};

  @media (max-width: ${u.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`,wh=C.button`
  padding: ${u.spacings.xsmall} ${u.spacings.small};
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: ${u.fonts.main};
`,o4=C(wh)`
  background-color: ${u.colors.white};
  color: ${u.colors.primary};

  &:hover {
    background-color: ${u.colors.lightGray};
  }
`,i4=C(wh)`
  background-color: transparent;
  color: ${u.colors.white};
  border: 1px solid ${u.colors.white};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,s4=({onAccept:n,onReject:o})=>f.jsxs(t4,{role:"alert","aria-live":"polite",children:[f.jsxs(n4,{children:["Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa ",f.jsx("a",{href:"/politica-de-privacidade",children:"Política de Privacidade"}),"."]}),f.jsxs(r4,{children:[f.jsx(i4,{onClick:o,children:"Recusar"}),f.jsx(o4,{onClick:n,children:"Aceitar"})]})]}),Sh=st`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,a4=C.section`
  height: calc(100vh - 80px); // Full viewport height minus header
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${u.colors.white};
  text-align: center;
  position: relative;
  transition: background-image 0.5s ease-in-out;
`,l4=C.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: ${u.spacings.large};
  border-radius: 8px;
  animation: ${Sh} 1s ease-out;
  max-width: 80%;
  h1 {
    font-size: 3rem;
    margin-bottom: ${u.spacings.small};
    color: ${u.colors.white};
    font-family: ${u.fonts.heading};
    @media (max-width: ${u.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }
  p {
    font-size: ${u.fontSizes.large};
    margin-bottom: ${u.spacings.medium};
    @media (max-width: ${u.breakpoints.mobile}) {
      font-size: ${u.fontSizes.medium};
    }
  }
`,jp=C.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: ${u.spacings.small};
  cursor: pointer;
  font-size: 2rem;
  z-index: 5;
  transition: background-color 0.3s ease;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
  &.prev {
    left: ${u.spacings.medium};
  }
  &.next {
    right: ${u.spacings.medium};
  }
  @media (max-width: ${u.breakpoints.mobile}) {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    padding: ${u.spacings.xsmall};
  }
`,Zl=C.section`
  padding: ${u.spacings.xlarge} ${u.spacings.medium};
  text-align: center;
  animation: ${Sh} 0.8s ease-out;
  &:nth-child(even) { // Alternating background for visual separation
    background-color: ${u.colors.lightBlueGray}20; 
  }
`,eu=C.h2`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  margin-bottom: ${u.spacings.large};
  font-family: ${u.fonts.heading};
`,u4=C.div`
  display: flex;
  justify-content: center;
  gap: ${u.spacings.large};
  flex-wrap: wrap;
  margin-top: ${u.spacings.medium};
`,kp=C(Ye)`
  background-color: ${u.colors.white};
  padding: ${u.spacings.large};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-decoration: none;
  color: ${u.colors.text};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  svg {
    font-size: 2.5rem;
    color: ${u.colors.secondary};
    margin-bottom: ${u.spacings.small};
  }
  h3 {
    font-size: ${u.fontSizes.xlarge};
    color: ${u.colors.primary};
    margin-bottom: ${u.spacings.xsmall};
  }
  p {
    font-size: ${u.fontSizes.medium};
  }
`,c4=C.div`
  margin-top: ${u.spacings.medium};
`,d4=C.div`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  background-color: ${u.colors.black};
  margin: 0 auto ${u.spacings.medium} auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
  iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  p {
    font-size: ${u.fontSizes.large};
  }
`,f4=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${u.spacings.medium};
  margin-top: ${u.spacings.large};
`,p4=C.a`
  background-color: ${u.colors.white};
  border-radius: 6px;
  overflow: hidden;
  text-decoration: none;
  color: ${u.colors.text};
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.12);
  }
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  h4 {
    font-size: ${u.fontSizes.medium};
    padding: ${u.spacings.small};
    font-family: ${u.fonts.main};
    font-weight: 600;
    color: ${u.colors.primary};
  }
`,m4=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${u.spacings.medium};
  margin-top: ${u.spacings.medium};
  p {
    font-size: ${u.fontSizes.medium};
    line-height: 1.6;
    max-width: 600px;
  }
  img {
    max-width: 200px;
    border: 3px solid ${u.colors.lightGray};
    border-radius: 6px;
  }
`,Pp=C(Ye)`
  display: inline-flex;
  align-items: center;
  background-color: ${u.colors.primary};
  color: ${u.colors.white};
  padding: ${u.spacings.small} ${u.spacings.medium};
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: ${u.fontSizes.medium};
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: ${u.spacings.small};
  svg {
    margin-right: ${u.spacings.xsmall};
  }
  &:hover {
    color: ${u.colors.white};
    background-color: ${u.colors.secondary};
    transform: translateY(-2px);
  }
`,h4=C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: ${u.colors.primary};
  padding: ${u.spacings.xlarge} 0;
`,g4=C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: red;
  padding: ${u.spacings.xlarge} 0;
`,y4="AIzaSyDsWnR13KzLuN5l9ZXAFxGNrgiEcGLfOrA",v4="UCOzTUw4mIHcfhcH5WvA-TEQ",x4="https://www.googleapis.com/youtube/v3",$h=ce.create({baseURL:x4,params:{key:y4,channelId:v4}}),Eh=async()=>{try{const o=(await $h.get("/search",{params:{eventType:"live",type:"video",part:"snippet"}})).data;return console.log("Dados de transmissões ao vivo:",o),o}catch(n){if(console.error("Erro ao buscar transmissões ao vivo:",n),ce.isAxiosError(n)){if(n.response)throw console.error("Erro de requisição:",n.response.status,n.response.data),new Error(`Erro na API: ${n.response.status}`);if(n.request)throw console.error("Erro de rede:",n.message),new Error("Erro de rede. Verifique sua conexão.")}throw new Error("Ocorreu um erro inesperado.")}},Ch=async()=>{try{return(await $h.get("search",{params:{maxResults:3,order:"date",type:"video",part:"snippet"}})).data}catch(n){if(ce.isAxiosError(n)){if(n.response)throw console.error("Erro de requisição:",n.response.status,n.response.data),new Error(`Erro na API: ${n.response.status}`);if(n.request)throw console.error("Erro de rede:",n.message),new Error("Erro de rede. Verifique sua conexão.")}throw new Error("Ocorreu um erro inesperado.")}},w4=async()=>{try{const n=await Eh(),o=await Ch();console.log("Lives:",n),console.log("Recent Videos:",o)}catch{}};w4();const jh=E.createContext({live:null,videosRecentes:null,loading:!1}),S4=({children:n})=>{const[o,s]=E.useState(null),[a,c]=E.useState(null),[p,m]=E.useState(!1);return E.useEffect(()=>{(async()=>{try{m(!0);const v=await Eh();s(v);const y=await Ch();c(y)}catch(v){console.error("Erro ao carregar vídeos",v)}finally{m(!1)}})()},[]),f.jsx(jh.Provider,{value:{live:o,videosRecentes:a,loading:p},children:n})},$4=()=>{const n=E.useContext(jh);if(n===void 0)throw new Error("useYoutube deve ser usado dentro de um YoutubeProvider");return n},E4=()=>{var _,R,N;const[n,o]=E.useState([]),[s,a]=E.useState(null),[c,p]=E.useState(0),[m,g]=E.useState(!0),[v,y]=E.useState(null),{live:w,videosRecentes:$}=$4();E.useEffect(()=>{alert("⚠️ Atenção!Este site ainda não está finalizado e precisa de alguns ajustes. Ele foi postado para que os irmãos da igreja possam acompanhar o nosso avanço. O projeto já está quase concluído, mas o banco de dados ainda está sendo criado. Por isso, todas as informações exibidas aqui podem conter erros ou estarem incompletas. Agradecemos a compreensão de todos.")},[]),E.useEffect(()=>{(async()=>{try{console.log(),g(!0);const[F,V]=await Promise.all([ce.get("http://localhost:3001/eventos?destaque=true&_limit=5"),ce.get("http://localhost:3001/contribuicao")]);o(F.data),a(V.data),y(null)}catch(F){console.error("Erro ao buscar dados para a Home:",F),y("Não foi possível carregar todas as informações da página inicial.")}g(!1)})()},[]);const k=()=>{n.length!==0&&p(c===n.length-1?0:c+1)},O=()=>{n.length!==0&&p(c===0?n.length-1:c-1)};if(E.useEffect(()=>{if(n.length<=1)return;const A=setTimeout(()=>{k()},7e3);return()=>clearTimeout(A)},[c,n]),m)return f.jsx(h4,{children:"Carregando página inicial..."});if(v)return f.jsx(g4,{children:v});const P=(N=(R=(_=w==null?void 0:w.items)==null?void 0:_[0])==null?void 0:R.id)==null?void 0:N.videoId;return f.jsxs(f.Fragment,{children:[n.length>0&&f.jsxs(a4,{style:{backgroundImage:`url(${n[c].imagem})`},children:[n.length>0&&f.jsxs(f.Fragment,{children:[f.jsx(jp,{className:"prev",onClick:O,"aria-label":"Slide Anterior",children:f.jsx(Bv,{})}),f.jsx(jp,{className:"next",onClick:k,"aria-label":"Próximo Slide",children:f.jsx(Uv,{})})]}),f.jsxs(l4,{children:[f.jsx("h1",{children:n[c].titulo}),f.jsx("p",{children:n[c].descricao}),f.jsx(Pp,{as:Ye,to:"/eventos",children:"Ver Eventos"})]})]}),f.jsxs(Zl,{children:[f.jsx(eu,{children:"Confira Nossa Programação"}),f.jsxs(u4,{children:[f.jsxs(kp,{to:"/eventos",children:[f.jsx(Is,{}),f.jsx("h3",{children:"Eventos"}),f.jsx("p",{children:"Veja os próximos eventos e conferências."})]}),f.jsxs(kp,{to:"/cultos",children:[f.jsx(Um,{}),f.jsx("h3",{children:"Horários dos Cultos"}),f.jsx("p",{children:"Participe de nossos cultos semanais."})]})]})]}),f.jsxs(Zl,{children:[f.jsx(eu,{children:"Cultos Ao Vivo e Recentes"}),f.jsxs(c4,{children:[f.jsx(d4,{children:P?f.jsx("iframe",{width:"100%",height:"500",src:`https://www.youtube.com/embed/${P}?autoplay=1`,title:"Transmissão ao Vivo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):f.jsxs("p",{children:[f.jsx(Dm,{style:{fontSize:"4rem",marginRight:"10px"}})," ","Nenhum vídeo ao vivo no momento."]})}),f.jsx("h4",{children:"Últimas Transmissões e Vídeos"}),$!=null&&$.items&&$.items.length>0?f.jsx(f4,{children:$.items.filter(A=>!!A.id.videoId).map(A=>{var F;return f.jsxs(p4,{href:`https://www.youtube.com/watch?v=${A.id.videoId}`,target:"_blank",rel:"noopener noreferrer",children:[f.jsx("img",{src:((F=A.snippet.thumbnails.medium)==null?void 0:F.url)||A.snippet.thumbnails.default.url,alt:A.snippet.title}),f.jsx("h4",{children:A.snippet.title})]},A.id.videoId)})}):f.jsx("p",{children:"Nenhum vídeo recente encontrado."})]})]}),s&&f.jsxs(Zl,{children:[f.jsx(eu,{children:"Contribua com a Obra"}),f.jsxs(m4,{children:[f.jsx("p",{children:"Sua oferta e dízimo são importantes para a manutenção da casa de Deus e para o avanço do Reino. Agradecemos sua generosidade!"}),f.jsx("img",{src:s.pix.qrCodeUrl,alt:"QR Code para Contribuição"}),f.jsxs("p",{children:[f.jsx("strong",{children:"PIX (Chave):"})," ",s.pix.chave]}),f.jsxs(Pp,{to:"/contribua",children:[f.jsx(Wv,{})," Ver Todas as Formas de Contribuir"]})]})]})]})},C4="/assets/Pastor-Claudinei-DjIWRchG.jpg",j4="/assets/Pr-Sidonio-D_LAVEzH.jpg",k4="/assets/Pastor-Claudinei2-DONA7696.jpg",P4="/assets/Pastor-Euripides-C6tBMTaK.jpg",kh=st`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,b4=C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${kh} 0.8s ease-out;
  max-width: 900px;
  margin: 0 auto;
  background-color: ${u.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-top: ${u.spacings.large};
  margin-bottom: ${u.spacings.large};
`,z4=C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  margin-bottom: ${u.spacings.medium};
  text-align: center;
`,ss=C.section`
  margin-bottom: ${u.spacings.xlarge};
  animation: ${kh} 0.5s ease-out forwards;
  opacity: 0;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    animation-delay: 0.8s;
  }
`,as=C.h2`
  font-size: ${u.fontSizes.xlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  margin-bottom: ${u.spacings.medium};
  padding-bottom: ${u.spacings.xsmall};
  border-bottom: 2px solid ${u.colors.secondary};
  display: inline-block;
`,an=C.p`
  margin-top: ${u.spacings.small};
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  line-height: 1.8;
  margin-bottom: ${u.spacings.small};
`,R4=C.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`,L4=C.div`
  display: flex;
  gap: ${u.spacings.medium};
  align-items: center;
  justify-content: center;
`,T4=C.div`
  width: 30%;
  height: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`,_4=()=>{const n=[{src:C4,alt:"Pastor Claudinei de Araujo"},{src:P4,alt:"Pastor Euripides Neves"},{src:j4,alt:"Pastor Sidónio"},{src:k4,alt:"Pastor Edmilson"}];return f.jsxs(b4,{children:[f.jsx(z4,{children:"Sobre a PIB "}),f.jsxs(ss,{children:[f.jsx(as,{children:"Nossa História"}),f.jsx(R4,{children:f.jsx("iframe",{width:"600",height:"315",src:"https://www.youtube.com/embed/62PqXGkkBnI?si=AMWyv-9mPrbZYIil&start=74",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}),f.jsx(an,{children:"A Primeira Igreja Batista em Franca-SP tem suas raízes na rica história do movimento batista no Brasil, que se iniciou com a chegada dos primeiros missionários e a organização das primeiras igrejas no final do século XIX. A Convenção Batista Brasileira, fundada em 1907, é o órgão máximo que congrega as igrejas batistas no país, promovendo a cooperação em missões, educação teológica e publicações. Nossa igreja, como parte dessa história, busca honrar o legado de fé e serviço daqueles que nos precederam, mantendo os princípios batistas de autonomia da igreja local, sacerdócio individual do crente e a suficiência das Escrituras Sagradas."}),f.jsx(an,{children:"A Primeira Igreja Batista em Franca - SP nasceu do desejo de proclamar o Evangelho de Jesus Cristo de forma fiel às Escrituras e relevante para a comunidade. Desde a sua fundação, nosso propósito tem sido anunciar a salvação pela graça, mediante a fé, e servir como um farol de esperança e amor cristão. Ao longo dos anos, a PIB tem sido um lugar de comunhão, crescimento espiritual e serviço. Vidas têm sido transformadas pelo poder do Evangelho, famílias têm sido restauradas e a Palavra de Deus tem sido pregada com clareza e compromisso. Nossa trajetória é marcada pela fidelidade ao Senhor, pela cooperação com a Convenção Batista e pelo envolvimento ativo na evangelização local e mundial, sempre buscando glorificar a Deus em tudo o que fazemos."})]}),f.jsxs(ss,{children:[f.jsx(as,{children:"No Que Cremos"}),f.jsx(an,{children:"Nós cremos na Bíblia como a Palavra de Deus inspirada, infalível e autoritária para a fé e prática. Cremos em um só Deus, eternamente existente em três pessoas: Pai, Filho e Espírito Santo. Cremos na divindade de Jesus Cristo, em seu nascimento virginal, em sua vida sem pecado, em seus milagres, em sua morte vicária e expiatória, em sua ressurreição corporal, em sua ascensão à direita do Pai e em seu retorno pessoal em poder e glória. Cremos na salvação pela graça, mediante a fé em Jesus Cristo. Cremos na autonomia da igreja local e na separação entre Igreja e Estado."}),f.jsx(an,{children:"Cremos na importância da igreja local como comunidade de crentes regenerados, autônoma e comprometida com o cumprimento da Grande Comissão: fazer discípulos de todas as nações. Cremos nas ordenanças deixadas por Cristo: o Batismo por imersão e a Ceia do Senhor, como símbolos da nossa fé e comunhão com Ele."})]}),f.jsxs(ss,{children:[f.jsx(as,{children:"Nossa Missão, Visão e Valores"}),f.jsxs(an,{children:[f.jsx("strong",{children:"Missão:"}),f.jsx("br",{}),"Proclamar o Evangelho de Jesus Cristo, fazer discípulos e servir à comunidade, glorificando a Deus em todas as coisas."]}),f.jsxs(an,{children:[f.jsx("strong",{children:"Visão:"}),f.jsx("br",{}),"Ser uma igreja bíblica, acolhedora e missionária, que impacta a cidade, o Brasil e o mundo com o amor de Cristo, formando discípulos comprometidos com a Palavra e com o serviço no Reino de Deus."]}),f.jsxs(an,{children:[f.jsx("strong",{children:"Valores:"}),f.jsx("br",{}),"Fidelidade à Palavra de Deus – Tudo o que fazemos está fundamentado na Bíblia.",f.jsx("br",{}),"Adoração Cristocêntrica – Vivemos para glorificar a Cristo em espírito e em verdade.",f.jsx("br",{}),"Comunhão Fraterna – Valorizamos o amor, o cuidado e a unidade entre os irmãos.",f.jsx("br",{}),"Evangelização e Missões – Cumprimos o chamado de fazer discípulos em nossa cidade e até aos confins da Terra.",f.jsx("br",{}),"Serviço ao Próximo – Expressamos nossa fé por meio de atos de amor e compaixão."]})]}),f.jsxs(ss,{children:[f.jsx(as,{children:"Nossa Liderança"}),f.jsx(an,{children:"Conheça nossos líderes e pastores que guiam a PIB."}),f.jsx(L4,{children:n.map((o,s)=>f.jsx(T4,{children:f.jsxs("div",{children:[f.jsx("img",{src:o.src,alt:o.alt}),f.jsx(an,{children:o.alt})]})},s))})]})]})},Ph=st`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,bh=C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${Ph} 0.8s ease-out;
  max-width: 1200px;
  margin: 0 auto;
`,N4=C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  text-align: center;
  margin-bottom: ${u.spacings.medium};
  font-family: ${u.fonts.heading};
`,O4=C.p`
  font-size: ${u.fontSizes.large};
  color: ${u.colors.text};
  text-align: center;
  margin-bottom: ${u.spacings.xlarge};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
`,I4=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${u.spacings.large};
`,F4=C.div`
  background-color: ${u.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  animation: ${Ph} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--card-index) * 0.1s); /* Delay for staggered animation */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`,A4=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,M4=C.div`
  padding: ${u.spacings.medium};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,D4=C.h3`
  font-size: ${u.fontSizes.xlarge};
  color: ${u.colors.primary};
  margin-bottom: ${u.spacings.small};
  font-family: ${u.fonts.heading};
`,B4=C.p`
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  margin-bottom: ${u.spacings.medium};
  flex-grow: 1;
`,U4=C(Ye)`
  display: inline-block;
  background-color: ${u.colors.primary};
  color: ${u.colors.white};
  padding: ${u.spacings.small} ${u.spacings.medium};
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  transition: background-color 0.3s ease;
  margin-top: auto; // Alinha o botão na parte inferior do card

  &:hover {
    color: ${u.colors.white};
    background-color: ${u.colors.secondary};
  }
`,xu=C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: ${u.colors.primary};
  padding: ${u.spacings.xlarge};
`,zh=C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: red;
  padding: ${u.spacings.xlarge};
`,H4="http://localhost:3001",V4=async()=>{try{const o=(await ce.get(`${H4}/ministerios`)).data;return console.log("Dados de ministérios:",o),o}catch(n){if(console.error("Erro ao buscar Ministérios:",n),ce.isAxiosError(n)){if(n.response)throw console.error("Erro de requisição:",n.response.status,n.response.data),new Error(`Erro na API: ${n.response.status}`);if(n.request)throw console.error("Erro de rede:",n.message),new Error("Erro de rede. Verifique sua conexão.")}throw new Error("Ocorreu um erro inesperado.")}},Rh=E.createContext({ministerios:[],isLoading:!1,error:null}),W4=({children:n})=>{const[o,s]=E.useState([]),[a,c]=E.useState(!1),[p,m]=E.useState(null);return E.useEffect(()=>{(async()=>{try{c(!0);const v=await V4();s(v)}catch{m("Erro ao carregar ministérios")}finally{c(!1)}})()},[]),f.jsx(Rh.Provider,{value:{ministerios:o,isLoading:a,error:p},children:n})},Mu=()=>{const n=E.useContext(Rh);if(n===void 0)throw new Error("useMinisterios deve ser usado dentro de um MinisterioProvider");return n},q4=()=>{const{ministerios:n,isLoading:o,error:s}=Mu();return console.log("MinisteriosListPage - Dados dos ministérios:",n),o?f.jsx(xu,{children:"Carregando ministérios..."}):s?f.jsx(zh,{children:s}):f.jsxs(bh,{children:[f.jsx(N4,{children:"Nossos Ministérios"}),f.jsx(O4,{children:"Conheça os ministérios da nossa igreja, áreas de serviço e comunhão onde você pode crescer na fé, desenvolver seus dons e fazer a diferença na vida de outras pessoas. Encontre o seu lugar e junte-se a nós!"}),n.length===0&&!o&&f.jsx(xu,{children:"Nenhum ministério encontrado."}),f.jsx(I4,{children:n.map((a,c)=>f.jsxs(F4,{style:{"--card-index":c},children:[f.jsx(A4,{src:a.imagem,alt:`Imagem do Ministério ${a.nome}`}),f.jsxs(M4,{children:[f.jsx(D4,{children:a.nome}),f.jsx(B4,{children:a.descricaoCurta}),f.jsx(U4,{to:`/ministerios/${a.slug}`,children:"Saiba Mais"})]})]},a.id))})]})},Y4=async n=>{if(!n)throw new Error("Slug não fornecido");try{const o=await ce.get(`http://localhost:3001/ministerios?slug=${n}`);if(o.data&&o.data.length>0)return o.data[0];throw new Error("Ministério não encontrado")}catch{throw new Error("Erro ao buscar Ministério")}},Lh=E.createContext(void 0),bp=({children:n})=>{const[o,s]=E.useState(null),[a,c]=E.useState(!1),[p,m]=E.useState(null),{ministerioSlug:g}=om();return E.useEffect(()=>{if(!g){m("Slug do ministério não fornecido");return}(async()=>{c(!0);try{const y=await Y4(g);s(y)}catch{m("Erro ao carregar ministério")}finally{c(!1)}})()},[g]),f.jsx(Lh.Provider,{value:{ministerio:o,isLoading:a,error:p},children:n})},G4=()=>{const n=E.useContext(Lh);if(n===void 0)throw new Error("useMinisterio deve ser usado dentro de um MinisterioProvider");return n},Q4=st`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${Q4} 0.8s ease-out;
  max-width: 1000px;
  margin: 0 auto;
`;const Th=C(Ye)`
  display: inline-flex;
  align-items: center;
  color: ${u.colors.primary};
  font-weight: 600;
  text-decoration: none;
  margin-bottom: ${u.spacings.medium};
  font-size: ${u.fontSizes.medium};
  transition: color 0.3s ease;

  svg {
    margin-right: ${u.spacings.xsmall};
  }

  &:hover {
    color: ${u.colors.secondary};
  }
`,_h=C.header`
  text-align: center;
  margin-bottom: ${u.spacings.large};
  padding-bottom: ${u.spacings.medium};
  border-bottom: 1px solid ${u.colors.lightGray};
`,Nh=C.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${u.spacings.medium};
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`,K4=C.h1`
  font-size: 2.8rem; // Slightly larger for individual page
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  margin-bottom: ${u.spacings.small};
`,Oh=C.p`
  font-size: ${u.fontSizes.large};
  color: ${u.colors.text};
  max-width: 800px;
  margin: 0 auto ${u.spacings.medium} auto;
  line-height: 1.7;
  font-style: italic;
`,Ih=C.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${u.spacings.large};
  margin-top: ${u.spacings.medium};

  @media (min-width: ${u.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr; // Main content and sidebar
  }
`,Fh=C.article`
  h2 {
    font-size: ${u.fontSizes.xlarge};
    color: ${u.colors.primary};
    font-family: ${u.fonts.heading};
    margin-top: ${u.spacings.medium};
    margin-bottom: ${u.spacings.small};
    border-bottom: 2px solid ${u.colors.secondary};
    padding-bottom: ${u.spacings.xsmall};
    display: inline-block;
  }
  p {
    font-size: ${u.fontSizes.medium};
    color: ${u.colors.text};
    line-height: 1.8;
    margin-bottom: ${u.spacings.medium};
    white-space: pre-wrap; // Preserve line breaks from description
  }
`,Ah=C.aside`
  background-color: ${u.colors.white};
  padding: ${u.spacings.medium};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  align-self: flex-start; // Stick to top

  h3 {
    font-size: ${u.fontSizes.large};
    color: ${u.colors.primary};
    font-family: ${u.fonts.heading};
    margin-bottom: ${u.spacings.medium};
  }
`,Tn=C.div`
  display: flex;
 
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  
  svg {
    color: ${u.colors.secondary};
    margin-right: ${u.spacings.small};
    font-size: 1.2em;
    min-width: 20px; // Ensure icon alignment
  }
`,Mh=C.section`
  margin-top: ${u.spacings.large};
  h2 {
    text-align: center;
  }
`,Dh=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${u.spacings.medium};
  margin-bottom: ${u.spacings.large};

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
  }
`,Bh=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${u.spacings.medium};

  iframe {
    width: 100%;
    height: 200px;
    border-radius: 6px;
    border: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: ${u.colors.primary};
  padding: ${u.spacings.xlarge};
`;C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: red;
  padding: ${u.spacings.xlarge};
`;const X4=()=>{const{ministerio:n,isLoading:o,error:s}=G4();return o?f.jsx(xu,{children:"Carregando informações do ministério..."}):s||!n?f.jsx(zh,{children:s||"Ministério não encontrado."}):f.jsxs(bh,{children:[f.jsxs(Th,{to:"/ministerios",children:[f.jsx(Bm,{})," Voltar para todos os Ministérios"]}),f.jsxs(_h,{children:[f.jsx(Nh,{src:n.imagem,alt:`Imagem do Ministério ${n.nome}`}),f.jsx(K4,{children:n.nome}),f.jsx(Oh,{children:n.descricaoCurta})]}),f.jsxs(Ih,{children:[f.jsxs(Fh,{children:[f.jsx("h2",{children:"Sobre o Ministério"}),f.jsx("p",{children:n.descricaoCompleta||"Mais informações sobre este ministério em breve."})]}),f.jsxs(Ah,{children:[f.jsx("h3",{children:"Informações"}),n.lideranca&&f.jsxs("div",{children:[f.jsxs(Tn,{children:[f.jsx(Ym,{})," ",f.jsx("strong",{children:"Liderança:"})]}),f.jsx("div",{children:n.lideranca}),f.jsx("br",{})]}),n.contato&&f.jsxs("div",{children:[f.jsxs(Tn,{children:[f.jsx(Ur,{})," ",f.jsx("strong",{children:"Contato:"})]}),f.jsx("div",{children:n.contato}),f.jsx("br",{})]}),n.horarioEncontros&&f.jsxs("div",{children:[f.jsxs(Tn,{children:[f.jsx(Is,{})," ",f.jsx("strong",{children:"Encontros:"})]}),f.jsx("div",{children:n.horarioEncontros}),f.jsx("br",{})]})]})]}),n.fotos&&n.fotos.length>0||n.videosYoutube&&n.videosYoutube.length>0?f.jsxs(Mh,{children:[f.jsxs("h2",{children:[f.jsx(Vm,{})," Mídia do Ministério"]}),n.fotos&&n.fotos.length>0&&f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:"Fotos"}),f.jsx(Dh,{children:n.fotos.map((a,c)=>f.jsx("img",{src:a,alt:`Foto ${c+1} do Ministério ${n.nome}`},c))})]}),n.videosYoutube&&n.videosYoutube.length>0&&f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:"Vídeos"}),f.jsx(Bh,{children:n.videosYoutube.map((a,c)=>f.jsx("iframe",{src:a.replace("watch?v=","embed/"),title:`Vídeo ${c+1} do Ministério ${n.nome}`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},c))})]})]}):null]})},Uh=st`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Hh=C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${Uh} 0.8s ease-out;
  max-width: 1200px;
  margin: 0 auto;
`,Vh=C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  text-align: center;
  margin-bottom: ${u.spacings.xlarge};
  font-family: ${u.fonts.heading};
`,J4=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${u.spacings.large};
`,Wh=C.div`
  background-color: ${u.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  animation: ${Uh} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--card-index) * 0.1s);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`,Z4=C.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: ${u.colors.lightBlueGray}; // Placeholder color
`,ew=C.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Wh}:hover & {
    transform: scale(1.05);
  }
`,tw=C.div`
  padding: ${u.spacings.medium};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`,nw=C.p`
  font-size: ${u.fontSizes.small};
  color: ${u.colors.secondary};
  font-weight: 600;
  margin-bottom: ${u.spacings.xsmall};
  text-transform: uppercase;
`,rw=C.h3`
  font-size: ${u.fontSizes.xlarge};
  color: ${u.colors.primary};
  margin-bottom: ${u.spacings.small};
  font-family: ${u.fonts.heading};
  line-height: 1.3;
`,ow=C.p`
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  margin-bottom: ${u.spacings.medium};
  line-height: 1.6;
  flex-grow: 1;
`,iw=C.p`
  font-size: ${u.fontSizes.small};
  color: ${u.colors.mediumGray};
  margin-bottom: ${u.spacings.medium};
`,sw=C(Ye)`
  display: inline-block;
  background-color: ${u.colors.primary};
  color: ${u.colors.white};
  padding: ${u.spacings.small} ${u.spacings.medium};
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  transition: background-color 0.3s ease;
  margin-top: auto; 

  &:hover {
    color: ${u.colors.white};
    background-color: ${u.colors.secondary};
  }
`,zp=C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: ${u.colors.primary};
  padding: ${u.spacings.xlarge};
`,aw=C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: red;
  padding: ${u.spacings.xlarge};
`,lw=()=>{const[n,o]=E.useState([]),[s,a]=E.useState(!0),[c,p]=E.useState(null);return E.useEffect(()=>{(async()=>{try{const g=await ce.get("http://localhost:3001/eventos");o(g.data)}catch(g){p("Falha ao carregar os eventos. Tente novamente mais tarde."),console.error("Erro ao buscar eventos:",g)}a(!1)})()},[]),s?f.jsx(zp,{children:"Carregando eventos..."}):c?f.jsx(aw,{children:c}):f.jsxs(Hh,{children:[f.jsx(Vh,{children:"Próximos Eventos"}),n.length===0&&!s&&f.jsx(zp,{children:"Nenhum evento encontrado."}),f.jsx(J4,{children:n.map((m,g)=>f.jsxs(Wh,{style:{"--card-index":g},children:[f.jsx(Z4,{children:f.jsx(ew,{src:m.imagem,alt:`Imagem do evento ${m.titulo}`})}),f.jsxs(tw,{children:[f.jsx(nw,{children:m.data}),f.jsx(rw,{children:m.titulo}),f.jsx(ow,{children:m.descricao}),f.jsxs(iw,{children:["Local: ",m.local]}),f.jsx(sw,{to:`/eventos/${m.id}`,children:"Mais Informações"})]})]},m.id))})]})},uw=async n=>{if(!n)throw new Error("ID não fornecido");try{const o=await ce.get(`http://localhost:3001/eventos?id=${n}`);if(o.data&&o.data.length>0)return o.data[0];throw new Error("Evento não encontrado")}catch{throw new Error("Erro ao buscar Evento")}},qh=E.createContext(void 0),cw=({children:n})=>{const[o,s]=E.useState(null),[a,c]=E.useState(!0),[p,m]=E.useState(null),{id:g}=om();return E.useEffect(()=>{(async()=>{if(!g){m("ID do evento não fornecido"),c(!1);return}try{const y=await uw(g);s(y)}catch(y){m(y.message)}finally{c(!1)}})()},[g]),f.jsx(qh.Provider,{value:{evento:o,isLoading:a,error:p},children:n})},dw=()=>{const n=E.useContext(qh);if(!n)throw new Error("useEventos deve ser usado dentro de um <EventosProvider>");return n},fw=()=>{const{evento:n}=dw();return f.jsxs(Hh,{children:[f.jsxs(Th,{to:"/eventos",children:[f.jsx(Bm,{})," Voltar para todos os Ministérios"]}),f.jsxs(_h,{children:[f.jsx(Nh,{src:n==null?void 0:n.imagem,alt:`Imagem do Evento ${n==null?void 0:n.descricao}`}),f.jsx(Vh,{children:n==null?void 0:n.titulo}),f.jsx(Oh,{children:n==null?void 0:n.descricao})]}),f.jsxs(Ih,{children:[f.jsxs(Fh,{children:[f.jsx("h2",{children:"Sobre o Evento"}),f.jsx("p",{children:(n==null?void 0:n.sobre_evento)||"Mais informações sobre este ministério em breve."})]}),f.jsxs(Ah,{children:[f.jsx("h3",{children:"Informações:"}),(n==null?void 0:n.lideranca_responsavel)&&f.jsxs("div",{children:[f.jsxs(Tn,{children:[f.jsx(Ym,{})," ",f.jsx("strong",{children:" Liderança: "})]}),f.jsx("div",{children:n.lideranca_responsavel}),f.jsx("br",{})]}),(n==null?void 0:n.data)&&f.jsxs("div",{children:[f.jsxs(Tn,{children:[f.jsx(Is,{})," ",f.jsx("strong",{children:"Data do Evento:"})]}),f.jsx("div",{children:n.data}),f.jsx("br",{})]}),(n==null?void 0:n.dataFim)&&f.jsxs("div",{children:[f.jsxs(Tn,{children:[f.jsx(Qv,{})," ",f.jsx("strong",{children:"Inscrições até:"})]}),f.jsx("div",{children:n.dataFim}),f.jsx("br",{})]}),(n==null?void 0:n.local)&&f.jsxs("div",{children:[f.jsxs(Tn,{children:[f.jsx(Nu,{})," ",f.jsx("strong",{children:"Local:"})]}),f.jsx("div",{children:n.local}),f.jsx("br",{})]}),(n==null?void 0:n.inscricao)&&f.jsxs("div",{children:[f.jsxs(Tn,{children:[f.jsx(Ur,{})," ",f.jsx("strong",{children:"Link de Inscrição:"})]}),f.jsx("div",{children:f.jsx("a",{href:n.inscricao,target:"_blank",rel:"noopener noreferrer",children:n.inscricao})}),f.jsx("br",{})]})]})]}),n!=null&&n.fotos&&n.fotos.length>0||n!=null&&n.videosYoutube&&n.videosYoutube.length>0?f.jsxs(Mh,{children:[f.jsxs("h2",{children:[f.jsx(Vm,{})," Mídia do Evento"]}),n.fotos&&n.fotos.length>0&&f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:"Fotos"}),f.jsx(Dh,{children:n.fotos.map((o,s)=>f.jsx("img",{src:o,alt:`Foto ${s+1} do evento ${n.titulo}`},s))})]}),n.videosYoutube&&n.videosYoutube.length>0&&f.jsxs(f.Fragment,{children:[f.jsx("h3",{children:"Vídeos"}),f.jsx(Bh,{children:n.videosYoutube.map((o,s)=>f.jsx("iframe",{src:o,title:`Vídeo ${s+1} do evento ${n.titulo}`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},s))})]})]}):null]})},pw=st`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,mw=C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${pw} 0.8s ease-out;
  max-width: 800px;
  margin: ${u.spacings.large} auto;
  background-color: ${u.colors.white};
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`,hw=C.div`
  text-align: center;
  margin-bottom: ${u.spacings.large};
`,wu=C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  margin-bottom: ${u.spacings.small};
`,Yh=C.p`
  font-size: ${u.fontSizes.large};
  color: ${u.colors.text};
  max-width: 700px;
  margin: 0 auto ${u.spacings.medium} auto;
  line-height: 1.6;
`;C.form`
  display: flex;
  flex-direction: column;
  gap: ${u.spacings.medium};
`;const Rr=C.div`
  display: flex;
  flex-direction: column;
`,Lr=C.label`
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  margin-bottom: ${u.spacings.xsmall};
  font-weight: 600;
  display: flex;
  align-items: center;
  svg {
    margin-right: ${u.spacings.xsmall};
    color: ${u.colors.secondary};
  }
`,tu=C.input`
  padding: ${u.spacings.small};
  border: 1px solid ${u.colors.lightGray};
  border-radius: 4px;
  font-size: ${u.fontSizes.medium};
  font-family: ${u.fonts.main};
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${u.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px ${u.colors.primary}30;
  }
`,gw=C.select`
  padding: ${u.spacings.small};
  border: 1px solid ${u.colors.lightGray};
  border-radius: 4px;
  font-size: ${u.fontSizes.medium};
  font-family: ${u.fonts.main};
  background-color: white;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${u.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px ${u.colors.primary}30;
  }
`,yw=C.textarea`
  padding: ${u.spacings.small};
  border: 1px solid ${u.colors.lightGray};
  border-radius: 4px;
  font-size: ${u.fontSizes.medium};
  font-family: ${u.fonts.main};
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${u.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px ${u.colors.primary}30;
  }
`,Rp=C.div`
  display: flex;
  justify-content: flex-end;
  gap: ${u.spacings.small};
  margin-top: ${u.spacings.medium};
`,Lp=C.button`
  background-color: ${u.colors.primary};
  color: ${u.colors.white};
  padding: ${u.spacings.small} ${u.spacings.medium};
  border: none;
  border-radius: 4px;
  font-size: ${u.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;

  svg {
    margin-right: ${u.spacings.xsmall};
  }

  &:hover {
    background-color: ${u.colors.secondary};
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: ${u.colors.mediumGray};
    cursor: not-allowed;
    transform: none;
  }
`,vw=C.p`
  color: red;
  font-size: ${u.fontSizes.small};
  text-align: center;
  margin-top: ${u.spacings.small};
`,xw=C.p`
  color: green;
  font-size: ${u.fontSizes.medium};
  text-align: center;
  margin-top: ${u.spacings.small};
`,ww=C.div`
  display: flex;
  flex-direction: column;
  gap: ${u.spacings.xsmall};
  margin-top: ${u.spacings.small};
`,Sw=C.label`
  display: flex;
  align-items: center;
  padding: ${u.spacings.xsmall} ${u.spacings.small};
  border: 1px solid ${u.colors.lightGray};
  border-radius: 4px;
  font-size: ${u.fontSizes.medium};
  font-family: ${u.fonts.main};
  cursor: pointer;
  transition: all 0.2s ease;

  input {
    margin-right: ${u.spacings.small};
    accent-color: ${u.colors.primary};
    cursor: pointer;
  }

  &:hover {
    background-color: ${u.colors.primary}10;
    border-color: ${u.colors.primary};
  }
`,$w=()=>{const{ministerios:n}=Mu();return f.jsxs("div",{children:[f.jsx(wu,{children:"O que cada área faz: "}),n.map((o,s)=>{var a;return f.jsxs("div",{children:[f.jsx(wu,{children:o.nome}),(a=o.funcoes)==null?void 0:a.map((c,p)=>f.jsxs("div",{children:[f.jsx(Yh,{children:c.nome}),f.jsx("p",{children:c.descricao}),f.jsx("br",{})]},p)),f.jsx("p",{children:o.descricaoCurta})]},s)})]})},Ew=()=>{const{ministerios:n}=Mu(),[o,s]=E.useState({nome:"",email:"",telefone:"",ministerio:"",mensagem:""}),[a,c]=E.useState([]),[p,m]=E.useState(!1),[g,v]=E.useState(!1),[y,w]=E.useState(null),[$,k]=E.useState(null),O=A=>{const{id:F,value:V}=A.target;s(Q=>({...Q,[F==="ministerio"?"ministerio":F]:V})),F==="ministerio"&&c([])},P=A=>{c(F=>F.includes(A)?F.filter(V=>V!==A):[...F,A])},_=async A=>{A.preventDefault(),v(!0),w(null),k(null);const{nome:F,email:V,telefone:Q,ministerio:J}=o;if(!F||!V||!Q||!J){w("Por favor, preencha todos os campos obrigatórios (*)."),v(!1);return}const q={...o,funcoes:a,data:new Date().toISOString()};try{await ce.post("http://localhost:3001/inscricoes",q),k("Sua inscrição para voluntariado foi enviada com sucesso! Entraremos em contato em breve."),s({nome:"",email:"",telefone:"",ministerio:"",mensagem:""}),c([]),setTimeout(()=>k(null),3e3)}catch(ne){console.error("Erro ao enviar inscrição:",ne),w("Falha ao enviar sua inscrição. Tente novamente mais tarde.")}v(!1)},R=()=>{m(!p)},N=n.find(A=>A.nome===o.ministerio);return f.jsxs(mw,{children:[f.jsxs(hw,{children:[f.jsx(wu,{children:"Seja um Voluntário"}),f.jsx(Yh,{children:"Quer servir a Deus com seus dons e talentos? Preencha o formulário abaixo e junte-se a um de nossos ministérios."}),f.jsxs("div",{children:[f.jsx(Rp,{children:f.jsx(Lp,{type:"button",onClick:R,children:p?"Ocultar Áreas":"Instruções para se voluntariar"})}),p&&f.jsx($w,{})]})]}),f.jsxs("form",{onSubmit:_,children:[f.jsxs(Rr,{children:[f.jsxs(Lr,{htmlFor:"nome",children:[f.jsx(Gm,{})," Nome Completo *"]}),f.jsx(tu,{type:"text",id:"nome",value:o.nome,onChange:O,placeholder:"Seu nome completo",required:!0})]}),f.jsxs(Rr,{children:[f.jsxs(Lr,{htmlFor:"email",children:[f.jsx(Ur,{})," E-mail *"]}),f.jsx(tu,{type:"email",id:"email",value:o.email,onChange:O,placeholder:"seuemail@exemplo.com",required:!0})]}),f.jsxs(Rr,{children:[f.jsxs(Lr,{htmlFor:"telefone",children:[f.jsx(Ou,{})," Telefone (WhatsApp) *"]}),f.jsx(tu,{type:"tel",id:"telefone",value:o.telefone,onChange:O,placeholder:"(XX) XXXXX-XXXX",required:!0})]}),f.jsxs(Rr,{children:[f.jsxs(Lr,{htmlFor:"ministerio",children:[f.jsx(Yv,{})," Ministério de Interesse *"]}),f.jsxs(gw,{id:"ministerio",value:o.ministerio,onChange:O,required:!0,children:[f.jsx("option",{value:"",disabled:!0,children:"Selecione um ministério"}),n.map(A=>f.jsx("option",{value:A.nome,children:A.nome},A.id)),f.jsx("option",{value:"outro",children:"Outro / Não sei ainda"})]})]}),(N==null?void 0:N.funcoes)&&f.jsxs(Rr,{children:[f.jsx(Lr,{children:"Escolha suas funções de interesse:"}),f.jsx(ww,{children:N.funcoes.map(A=>f.jsxs(Sw,{htmlFor:`funcao-${A.id}`,children:[f.jsx("input",{type:"checkbox",id:`funcao-${A.id}`,checked:a.includes(A.nome),onChange:()=>P(A.nome)}),A.nome]},A.id))})]}),f.jsxs(Rr,{children:[f.jsxs(Lr,{htmlFor:"mensagem",children:[f.jsx(Kv,{})," Fale um pouco sobre você (opcional)"]}),f.jsx(yw,{id:"mensagem",value:o.mensagem,onChange:O,placeholder:"Ex: Tenho experiência com crianças, gosto de música, sou organizado(a), etc."})]}),y&&f.jsx(vw,{children:y}),$&&f.jsx(xw,{children:$}),f.jsx(Rp,{children:f.jsxs(Lp,{type:"submit",disabled:g,children:[f.jsx(Hm,{})," ",g?"Enviando...":"Enviar Inscrição"]})})]})]})},Gh=st`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Cw=C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${Gh} 0.8s ease-out;
  max-width: 900px;
  margin: 0 auto;
`,jw=C.div`
  text-align: center;
  margin-bottom: ${u.spacings.xlarge};
`,kw=C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  margin-bottom: ${u.spacings.small};
`,Pw=C.p`
  font-size: ${u.fontSizes.large};
  color: ${u.colors.text};
  max-width: 700px;
  margin: 0 auto ${u.spacings.medium} auto;
  line-height: 1.6;
`,bw=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${u.spacings.large};
`,zw=C.div`
  background-color: ${u.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
  padding: ${u.spacings.large};
  text-align: center;
  animation: ${Gh} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--card-index) * 0.1s);
  border-top: 5px solid ${u.colors.secondary};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`,Rw=C.div`
  font-size: 3rem;
  color: ${u.colors.primary};
  margin-bottom: ${u.spacings.medium};
`,Lw=C.h3`
  font-size: ${u.fontSizes.xlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  margin-bottom: ${u.spacings.xsmall};
`,Tw=C.p`
  font-size: ${u.fontSizes.large};
  color: ${u.colors.text};
  margin-bottom: ${u.spacings.small};
  font-weight: 600;
`,Tp=C.p`
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.mediumGray};
  line-height: 1.6;
  margin-bottom: ${u.spacings.medium};
`,_w=C.a`
  display: inline-flex;
  align-items: center;
  color: ${u.colors.primary};
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;

  svg {
    margin-right: ${u.spacings.xsmall};
  }

  &:hover {
    color: ${u.colors.secondary};
  }
`,_p=C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: ${u.colors.primary};
  padding: ${u.spacings.xlarge};
`,Nw=C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: red;
  padding: ${u.spacings.xlarge};
`,Ow=()=>{const[n,o]=E.useState([]),[s,a]=E.useState(!0),[c,p]=E.useState(null);return E.useEffect(()=>{(async()=>{try{const g=await ce.get("http://localhost:3001/cultos");o(g.data)}catch(g){p("Falha ao carregar os horários dos cultos. Tente novamente mais tarde."),console.error("Erro ao buscar cultos:",g)}a(!1)})()},[]),s?f.jsx(_p,{children:"Carregando horários dos cultos..."}):c?f.jsx(Nw,{children:c}):f.jsxs(Cw,{children:[f.jsxs(jw,{children:[f.jsx(kw,{children:"Nossos Cultos"}),f.jsx(Pw,{children:"Participe conosco dos nossos momentos de adoração, aprendizado da Palavra e comunhão. Confira nossos horários e programações."})]}),n.length===0&&!s&&f.jsx(_p,{children:"Nenhum horário de culto encontrado."}),f.jsx(bw,{children:n.map((m,g)=>f.jsxs(zw,{style:{"--card-index":g},children:[f.jsx(Rw,{children:f.jsx(Um,{})}),f.jsx(Lw,{children:m.dia}),m.horarios.map(v=>f.jsxs("div",{style:{marginBottom:u.spacings.small},children:[f.jsx(Tw,{children:v.hora}),f.jsx(Tp,{children:v.descricao})]},`${m.id}-${v.hora}`)),m.onlineLink&&f.jsxs(_w,{href:m.onlineLink,target:"_blank",rel:"noopener noreferrer",children:[f.jsx(o2,{})," Assistir Online"]}),f.jsxs(Tp,{style:{marginTop:u.spacings.medium},children:[f.jsx(Nu,{style:{marginRight:"5px"}})," Local: ",m.local]})]},m.id))})]})},Qh=st`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Iw=C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${Qh} 0.8s ease-out;
  max-width: 900px;
  margin: 0 auto;
  background-color: ${u.colors.background};
`,Fw=C.div`
  text-align: center;
  margin-bottom: ${u.spacings.xlarge};
`,Aw=C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  margin-bottom: ${u.spacings.small};
`,Mw=C.p`
  font-size: ${u.fontSizes.large};
  color: ${u.colors.text};
  max-width: 700px;
  margin: 0 auto ${u.spacings.medium} auto;
  line-height: 1.6;
`,Dw=C(Ye)`
  display: inline-flex;
  align-items: center;
  background-color: ${u.colors.primary};
  color: ${u.colors.white};
  padding: ${u.spacings.small} ${u.spacings.medium};
  border-radius: 50px; 
  text-decoration: none;
  font-weight: 600;
  font-size: ${u.fontSizes.medium};
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  svg {
    margin-right: ${u.spacings.xsmall};
    font-size: 1.2em;
  }

  &:hover {
    color: ${u.colors.white};
    background-color: ${u.colors.secondary};
    transform: translateY(-2px);
  }
`,Bw=C.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas de tamanho igual */
  gap: ${u.spacings.xsmall};
  margin-left: -200px;
    margin-right: -200px;
  margin-top: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 coluna em mobile */
  }
`,Uw=C.div`
  background-color: ${u.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
  padding: ${u.spacings.medium};
  animation: ${Qh} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--card-index) * 0.1s);
  border-left: 5px solid ${u.colors.secondary};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-200px);

    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`,Hw=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${u.spacings.small};
`,Vw=C.h3`
  font-size: ${u.fontSizes.large};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  font-weight: 700;
`,Ww=C.span`
  font-size: ${u.fontSizes.small};
  color: ${u.colors.mediumGray};
`,qw=C.p`
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  line-height: 1.7;
  margin-bottom: ${u.spacings.medium};
  white-space: pre-wrap; // Preserve line breaks
`,Yw=C.div`
  display: flex;
  align-items: center;
  gap: ${u.spacings.medium};
  margin-bottom: ${u.spacings.small}; // Espaço antes dos comentários
`,Np=C.button`
  background: none;
  border: none;
  color: ${u.colors.primary};
  font-size: ${u.fontSizes.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  transition: color 0.3s ease;

  svg {
    margin-right: ${u.spacings.xsmall};
    font-size: 1.1em;
  }

  &:hover {
    color: ${u.colors.secondary};
  }
`,Gw=C.div`
  margin-top: ${u.spacings.medium};
  padding-top: ${u.spacings.small};
  border-top: 1px solid ${u.colors.lightGray};
`,Qw=C.div`
  background-color: ${u.colors.lightBlueGray}20;
  padding: ${u.spacings.small};
  border-radius: 4px;
  margin-bottom: ${u.spacings.small};
  font-size: ${u.fontSizes.small};
`,Kw=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${u.spacings.xsmall};
  font-weight: bold;
  color: ${u.colors.primary};
`,Xw=C.p`
  color: ${u.colors.text};
  line-height: 1.5;
`,Op=C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: ${u.colors.primary};
  padding: ${u.spacings.xlarge};
`,Jw=C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: red;
  padding: ${u.spacings.xlarge};
`,Zw="http://localhost:3001",Qn=ce.create({baseURL:Zw,timeout:1e4,headers:{"Content-Type":"application/json"}});Qn.interceptors.response.use(n=>n,n=>{throw console.error("Erro na requisição:",n),n.response?new Error(`Erro ${n.response.status}: ${n.response.data.message||"Erro na requisição"}`):n.request?new Error("Erro de conexão. Verifique sua internet e tente novamente."):new Error("Erro inesperado. Tente novamente.")});const Ip={async getPedidos(){try{return(await Qn.get("/muralPiedade?_sort=id&_order=desc")).data}catch(n){const o=n instanceof Error?n.message:"Falha ao carregar os pedidos de oração";throw new Error(o)}},async updateInteracoes(n,o){try{await Qn.patch(`/muralPiedade/${n}`,{interacoes:o})}catch(s){const a=s instanceof Error?s.message:"Falha ao registrar interação";throw new Error(a)}},async getPedidoById(n){try{return(await Qn.get(`/muralPiedade/${n}`)).data}catch(o){const s=o instanceof Error?o.message:"Falha ao carregar o pedido";throw new Error(s)}},async addPedido(n){try{return(await Qn.post("/muralPiedade",{...n,interacoes:n.interacoes||0,comentarios:n.comentarios||[]})).data}catch(o){const s=o instanceof Error?o.message:"Falha ao adicionar pedido";throw new Error(s)}},async addComentario(n,o){try{const s=await this.getPedidoById(n),a={...o,id:Date.now()},c={...s,comentarios:[...s.comentarios,a]};return await Qn.put(`/muralPiedade/${n}`,c),a}catch(s){const a=s instanceof Error?s.message:"Falha ao adicionar comentário";throw new Error(a)}},async deletePedido(n){try{await Qn.delete(`/muralPiedade/${n}`)}catch(o){const s=o instanceof Error?o.message:"Falha ao deletar pedido";throw new Error(s)}}},e3=()=>{const[n,o]=E.useState([]),[s,a]=E.useState(!0),[c,p]=E.useState(null),m=async()=>{try{a(!0),p(null);const y=await Ip.getPedidos();o(y)}catch(y){const w=y instanceof Error?y.message:"Falha ao carregar os pedidos de oração. Tente novamente mais tarde.";p(w),console.error("Erro ao buscar pedidos de oração:",y)}finally{a(!1)}};E.useEffect(()=>{m()},[]);const g=async y=>{const w=n.find(k=>k.id===y);if(!w)return;const $=w.interacoes+1;try{await Ip.updateInteracoes(y,$),o(k=>k.map(O=>O.id===y?{...O,interacoes:$}:O))}catch(k){console.error("Erro ao registrar interação:",k),alert("Falha ao registrar interação. Tente novamente.")}},v=y=>{alert(`Funcionalidade de adicionar comentários ao pedido ${y} será implementada.`)};return s?f.jsx(Op,{children:"Carregando pedidos de oração..."}):c?f.jsx(Jw,{children:c}):f.jsxs(Iw,{children:[f.jsxs(Fw,{children:[f.jsx(Aw,{children:"Mural da Piedade"}),f.jsx(Mw,{children:'Um espaço para compartilhar seus pedidos de oração e interceder uns pelos outros. "Orai uns pelos outros, para serdes curados. Muito pode, por sua eficácia, a súplica do justo." (Tiago 5:16)'}),f.jsxs(Dw,{to:"/mural-piedade/novo",children:[f.jsx(Xv,{})," Fazer um Pedido de Oração"]})]}),n.length===0&&!s&&f.jsx(Op,{children:"Nenhum pedido de oração encontrado."}),f.jsx(Bw,{children:n.map((y,w)=>f.jsxs(Uw,{style:{"--card-index":w},children:[f.jsxs(Hw,{children:[f.jsx(Vw,{children:y.autor}),f.jsx(Ww,{children:y.data})]}),f.jsx(qw,{children:y.texto}),f.jsxs(Yw,{children:[f.jsxs(Np,{onClick:()=>g(y.id),title:"Interceder por este pedido",children:[f.jsx(Jv,{})," Interceder (",y.interacoes,")"]}),f.jsxs(Np,{onClick:()=>v(y.id),title:"Ver ou adicionar comentários",children:[f.jsx(Hv,{})," Comentários (",y.comentarios?y.comentarios.length:0,")"]})]}),y.comentarios&&y.comentarios.length>0&&f.jsx(Gw,{children:y.comentarios.map($=>f.jsxs(Qw,{children:[f.jsxs(Kw,{children:[f.jsx("span",{children:$.autor}),f.jsx("span",{children:$.data})]}),f.jsx(Xw,{children:$.texto})]},$.id))})]},y.id))})]})},t3=st`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,n3=C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${t3} 0.8s ease-out;
  max-width: 700px;
  margin: ${u.spacings.large} auto;
  background-color: ${u.colors.white};
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`,r3=C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  text-align: center;
  margin-bottom: ${u.spacings.medium};
`,o3=C.form`
  display: flex;
  flex-direction: column;
  gap: ${u.spacings.medium};
`,Fp=C.div`
  display: flex;
  flex-direction: column;
`,Ap=C.label`
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  margin-bottom: ${u.spacings.xsmall};
  font-weight: 600;
`,i3=C.input`
  padding: ${u.spacings.small};
  border: 1px solid ${u.colors.lightGray};
  border-radius: 4px;
  font-size: ${u.fontSizes.medium};
  font-family: ${u.fonts.main};
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${u.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px ${u.colors.primary}30;
  }
`,s3=C.textarea`
  padding: ${u.spacings.small};
  border: 1px solid ${u.colors.lightGray};
  border-radius: 4px;
  font-size: ${u.fontSizes.medium};
  font-family: ${u.fonts.main};
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${u.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px ${u.colors.primary}30;
  }
`,a3=C.div`
  display: flex;
  justify-content: flex-end;
  gap: ${u.spacings.small};
  margin-top: ${u.spacings.medium};
`,Kh=C.button`
  background-color: ${u.colors.primary};
  color: ${u.colors.white};
  padding: ${u.spacings.small} ${u.spacings.medium};
  border: none;
  border-radius: 4px;
  font-size: ${u.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;

  svg {
    margin-right: ${u.spacings.xsmall};
  }

  &:hover {
    background-color: ${u.colors.secondary};
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: ${u.colors.mediumGray};
    cursor: not-allowed;
    transform: none;
  }
`,l3=C(Kh)`
  background-color: ${u.colors.lightGray};
  color: ${u.colors.text};

  &:hover {
    background-color: ${u.colors.mediumGray};
  }
`,u3=C.p`
  color: red;
  font-size: ${u.fontSizes.small};
  text-align: center;
  margin-top: ${u.spacings.small};
`,c3=C.p`
  color: green;
  font-size: ${u.fontSizes.medium};
  text-align: center;
  margin-top: ${u.spacings.small};
`,d3=()=>{const[n,o]=E.useState(""),[s,a]=E.useState(""),[c,p]=E.useState(!1),[m,g]=E.useState(null),[v,y]=E.useState(null),w=Ho(),$=async k=>{if(k.preventDefault(),p(!0),g(null),y(null),!n.trim()||!s.trim()){g("Por favor, preencha seu nome e o pedido de oração."),p(!1);return}const O={autor:n,texto:s,data:new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}),interacoes:0,comentarios:[]};try{await ce.post("http://localhost:3001/muralPiedade",O),y("Seu pedido de oração foi enviado com sucesso!"),o(""),a(""),setTimeout(()=>{w("/mural-piedade")},2e3)}catch(P){console.error("Erro ao enviar pedido:",P),g("Falha ao enviar seu pedido. Tente novamente mais tarde.")}p(!1)};return f.jsxs(n3,{children:[f.jsx(r3,{children:"Novo Pedido de Oração"}),f.jsxs(o3,{onSubmit:$,children:[f.jsxs(Fp,{children:[f.jsx(Ap,{htmlFor:"autor",children:'Seu Nome (ou "Anônimo")'}),f.jsx(i3,{type:"text",id:"autor",value:n,onChange:k=>o(k.target.value),placeholder:"Ex: João Silva ou Anônimo",required:!0})]}),f.jsxs(Fp,{children:[f.jsx(Ap,{htmlFor:"texto",children:"Seu Pedido de Oração"}),f.jsx(s3,{id:"texto",value:s,onChange:k=>a(k.target.value),placeholder:"Descreva aqui seu pedido...",required:!0})]}),m&&f.jsx(u3,{children:m}),v&&f.jsx(c3,{children:v}),f.jsxs(a3,{children:[f.jsxs(l3,{type:"button",onClick:()=>w("/mural-piedade"),disabled:c,children:[f.jsx(Wm,{})," Cancelar"]}),f.jsxs(Kh,{type:"submit",disabled:c,children:[f.jsx(Hm,{})," ",c?"Enviando...":"Enviar Pedido"]})]})]})]})},Xh=st`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,f3=C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${Xh} 0.8s ease-out;
  max-width: 900px;
  margin: 0 auto;
`,p3=C.div`
  text-align: center;
  margin-bottom: ${u.spacings.xlarge};
`,m3=C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  margin-bottom: ${u.spacings.small};
`,h3=C.p`
  font-size: ${u.fontSizes.large};
  color: ${u.colors.text};
  max-width: 700px;
  margin: 0 auto ${u.spacings.medium} auto;
  line-height: 1.6;
`,Mp=C.section`
  background-color: ${u.colors.white};
  padding: ${u.spacings.large};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
  margin-bottom: ${u.spacings.large};
  animation: ${Xh} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: 0.2s;
`,Dp=C.h2`
  font-size: ${u.fontSizes.xlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  margin-bottom: ${u.spacings.medium};
  border-bottom: 2px solid ${u.colors.secondary};
  padding-bottom: ${u.spacings.xsmall};
  display: inline-block;
`,g3=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${u.spacings.large};
  margin-bottom: ${u.spacings.large};
`,Bp=C.div`
  background-color: ${u.colors.lightBlueGray}20; // Light background
  padding: ${u.spacings.medium};
  border-radius: 6px;
  border: 1px solid ${u.colors.lightGray};

  h4 {
    font-size: ${u.fontSizes.large};
    color: ${u.colors.secondary};
    margin-bottom: ${u.spacings.small};
    display: flex;
    align-items: center;
    svg {
      margin-right: ${u.spacings.xsmall};
    }
  }

  p {
    font-size: ${u.fontSizes.medium};
    color: ${u.colors.text};
    line-height: 1.7;
    margin-bottom: ${u.spacings.xsmall};
    word-break: break-word;
  }

  strong {
    font-weight: 600;
  }
`,y3=C.button`
  background-color: ${u.colors.primary};
  color: white;
  border: none;
  padding: ${u.spacings.xsmall} ${u.spacings.small};
  border-radius: 4px;
  cursor: pointer;
  font-size: ${u.fontSizes.small};
  display: inline-flex;
  align-items: center;
  transition: background-color 0.3s ease;
  margin-top: ${u.spacings.xsmall};

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: ${u.colors.secondary};
  }
`,v3=C.div`
  text-align: center;
  margin-bottom: ${u.spacings.large};

  img {
    max-width: 250px;
    height: auto;
    border: 5px solid ${u.colors.lightGray};
    border-radius: 8px;
    margin: 0 auto ${u.spacings.small} auto;
  }
`,Up=C.p`
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  text-align: center;
  line-height: 1.6;

  a {
    color: ${u.colors.primary};
    font-weight: 600;
    text-decoration: underline;
    &:hover {
      color: ${u.colors.secondary};
    }
  }
`,x3=C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: ${u.colors.primary};
  padding: ${u.spacings.xlarge};
`,w3=C.p`
  text-align: center;
  font-size: ${u.fontSizes.large};
  color: red;
  padding: ${u.spacings.xlarge};
`,S3=()=>{const[n,o]=E.useState(null),[s,a]=E.useState(!0),[c,p]=E.useState(null),[m,g]=E.useState("");E.useEffect(()=>{(async()=>{try{const w=await ce.get("http://localhost:3001/contribuicao");o(w.data)}catch(w){p("Falha ao carregar as informações de contribuição. Tente novamente mais tarde."),console.error("Erro ao buscar dados de contribuição:",w)}a(!1)})()},[]);const v=(y,w)=>{navigator.clipboard.writeText(y).then(()=>{g(`Copiado: ${w}`),setTimeout(()=>g(""),2e3)}).catch($=>{console.error("Erro ao copiar: ",$),g("Erro ao copiar"),setTimeout(()=>g(""),2e3)})};return s?f.jsx(x3,{children:"Carregando informações de contribuição..."}):c||!n?f.jsx(w3,{children:c||"Dados não encontrados"}):f.jsxs(f3,{children:[f.jsxs(p3,{children:[f.jsx(m3,{children:"Contribua"}),f.jsx(h3,{children:"Sua generosidade nos ajuda a continuar espalhando a mensagem do Evangelho e a realizar nossos projetos e ministérios. Veja como você pode ofertar e dizimar."})]}),f.jsxs(Mp,{children:[f.jsx(Dp,{children:"Transferência Bancária / PIX"}),f.jsxs(g3,{children:[f.jsxs(Bp,{children:[f.jsxs("h4",{children:[f.jsx(n2,{})," Dados Bancários"]}),f.jsxs("p",{children:[f.jsx("strong",{children:"Banco:"})," ",n.contaBancaria.banco]}),f.jsxs("p",{children:[f.jsx("strong",{children:"Agência:"})," ",n.contaBancaria.agencia]}),f.jsxs("p",{children:[f.jsx("strong",{children:"Conta Corrente:"})," ",n.contaBancaria.conta]}),f.jsxs("p",{children:[f.jsx("strong",{children:"Nome:"})," ",n.contaBancaria.titular]}),f.jsxs("p",{children:[f.jsx("strong",{children:"CNPJ:"})," ",n.contaBancaria.cnpj]}),f.jsxs(y3,{onClick:()=>v(n.contaBancaria.cnpj,"CNPJ"),children:[f.jsx(Vv,{})," Copiar CNPJ (Chave PIX)"]})]}),f.jsxs(Bp,{children:[f.jsxs("h4",{children:[f.jsx(Zv,{})," PIX com QR Code"]}),f.jsxs(v3,{children:[f.jsx("img",{src:n.pix.qrCodeUrl,alt:"QR Code para PIX"}),f.jsx("p",{children:"Aponte a câmera do seu celular para o QR Code acima."})]})]})]}),m&&f.jsx("p",{style:{textAlign:"center",color:u.colors.secondary,marginBottom:u.spacings.small},children:m})]}),f.jsxs(Mp,{style:{animationDelay:"0.4s"},children:[f.jsx(Dp,{children:"Outras Formas de Contribuir"}),f.jsxs(Up,{children:["Você também pode entregar sua oferta ou dízimo presencialmente durante nossos cultos e celebrações. Para mais informações ou se precisar de ajuda, entre em contato conosco através do nosso WhatsApp:",f.jsxs("a",{href:`https://wa.me/${n.contato.whatsapp}`,target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Av,{})," ",n.contato.telefone]}),"."]})]}),f.jsx(Up,{style:{marginTop:u.spacings.large},children:'"Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria." (2 Coríntios 9:7)'})]})},$3=st`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,E3=C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${$3} 0.8s ease-out;
  max-width: 450px;
  margin: ${u.spacings.xlarge} auto;
  background-color: ${u.colors.white};
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`,C3=C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  text-align: center;
  margin-bottom: ${u.spacings.large};
`,j3=C.form`
  display: flex;
  flex-direction: column;
  gap: ${u.spacings.medium};
`,Hp=C.div`
  display: flex;
  flex-direction: column;
`,Vp=C.label`
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  margin-bottom: ${u.spacings.xsmall};
  font-weight: 600;
  display: flex;
  align-items: center;
  svg {
    margin-right: ${u.spacings.xsmall};
    color: ${u.colors.secondary};
  }
`,Wp=C.input`
  padding: ${u.spacings.small}; // Um pouco mais de padding
  border: 1px solid ${u.colors.lightGray};
  border-radius: 4px;
  font-size: ${u.fontSizes.medium};
  font-family: ${u.fonts.main};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: ${u.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px ${u.colors.primary}40; // Sombra de foco mais suave
  }
`,k3=C.button`
  background-color: ${u.colors.primary};
  color: ${u.colors.white};
  padding: ${u.spacings.medium};
  border: none;
  border-radius: 4px;
  font-size: ${u.fontSizes.large};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${u.spacings.small};

  svg {
    margin-right: ${u.spacings.small};
  }

  &:hover {
    background-color: ${u.colors.secondary};
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: ${u.colors.mediumGray};
    cursor: not-allowed;
    transform: none;
  }
`,P3=C(Ye)`
  color: ${u.colors.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  display: block;
  margin-top: ${u.spacings.medium};
  transition: color 0.3s ease;

  &:hover {
    color: ${u.colors.secondary};
    text-decoration: underline;
  }
`,b3=C.p`
  color: red;
  font-size: ${u.fontSizes.small};
  text-align: center;
  margin-top: ${u.spacings.small};
`,z3=()=>{const[n,o]=E.useState(localStorage.getItem("isLoggedIn")==="true"),[s,a]=E.useState(JSON.parse(localStorage.getItem("currentUser")||"null"));return{isLoggedIn:n,currentUser:s,login:m=>{localStorage.setItem("isLoggedIn","true"),localStorage.setItem("currentUser",JSON.stringify(m)),o(!0),a(m)},logout:()=>{localStorage.removeItem("isLoggedIn"),localStorage.removeItem("currentUser"),o(!1),a(null)}}},R3=()=>{const[n,o]=E.useState(""),[s,a]=E.useState(""),[c,p]=E.useState(!1),[m,g]=E.useState(null),v=Ho(),{login:y}=z3(),w=async $=>{if($.preventDefault(),p(!0),g(null),!n.trim()||!s.trim()){g("Por favor, preencha e-mail e senha."),p(!1);return}try{const k=await ce.get(`http://localhost:3001/usuarios?email=${n}&senha=${s}`);k.data&&k.data.length>0?(y(k.data[0]),v("/")):g("E-mail ou senha inválidos.")}catch(k){console.error("Erro ao tentar fazer login:",k),g("Falha ao tentar fazer login. Verifique sua conexão ou tente mais tarde.")}p(!1)};return f.jsxs(E3,{children:[f.jsx(C3,{children:"Acessar Conta"}),f.jsxs(j3,{onSubmit:w,children:[f.jsxs(Hp,{children:[f.jsxs(Vp,{htmlFor:"email",children:[f.jsx(Ur,{})," E-mail"]}),f.jsx(Wp,{type:"email",id:"email",value:n,onChange:$=>o($.target.value),placeholder:"seuemail@exemplo.com",required:!0})]}),f.jsxs(Hp,{children:[f.jsxs(Vp,{htmlFor:"senha",children:[f.jsx(fu,{})," Senha"]}),f.jsx(Wp,{type:"password",id:"senha",value:s,onChange:$=>a($.target.value),placeholder:"Sua senha",required:!0})]}),m&&f.jsx(b3,{children:m}),f.jsxs(k3,{type:"submit",disabled:c,children:[f.jsx(e2,{})," ",c?"Entrando...":"Entrar"]})]}),f.jsxs(P3,{to:"/register",children:["Não tem uma conta? Cadastre-se ",f.jsx(qm,{style:{marginLeft:"5px"}})]})]})};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=(n,o)=>{const s=E.forwardRef(({color:a="currentColor",size:c=24,strokeWidth:p=2,absoluteStrokeWidth:m,className:g="",children:v,...y},w)=>E.createElement("svg",{ref:w,...L3,width:c,height:c,stroke:a,strokeWidth:m?Number(p)*24/Number(c):p,className:["lucide",`lucide-${T3(n)}`,g].join(" "),...y},[...o.map(([$,k])=>E.createElement($,k)),...Array.isArray(v)?v:[v]]));return s.displayName=`${n}`,s};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=_3("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]),O3=st`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,I3=C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${O3} 0.8s ease-out;
  max-width: 550px;
  margin: ${u.spacings.xlarge} auto;
  background-color: ${u.colors.white};
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`,F3=C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  text-align: center;
  margin-bottom: ${u.spacings.medium};
`,A3=C.p`
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  text-align: center;
  margin-bottom: ${u.spacings.large};
`,M3=C.form`
  display: flex;
  flex-direction: column;
  gap: ${u.spacings.medium};
`,Yn=C.div`
  display: flex;
  flex-direction: column;
`,qp=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${u.spacings.medium};
  
  @media (max-width: ${u.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Gn=C.label`
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  margin-bottom: ${u.spacings.xsmall};
  font-weight: 600;
  display: flex;
  align-items: center;
  svg {
    margin-right: ${u.spacings.xsmall};
    color: ${u.colors.secondary};
  }
`,Tr=C.input`
  padding: ${u.spacings.xsmall};
  border: 1px solid ${u.colors.lightGray};
  border-radius: 4px;
  font-size: ${u.fontSizes.medium};
  font-family: ${u.fonts.main};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: ${u.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px ${u.colors.primary}40;
  }
`,D3=C.div`
  display: flex;
  align-items: flex-start;
  margin-top: ${u.spacings.small};
  
  input {
    margin-top: 5px;
    margin-right: ${u.spacings.small};
  }
  
  label {
    font-size: ${u.fontSizes.small};
    line-height: 1.5;
  }
`,B3=C.button`
  background-color: ${u.colors.primary};
  color: ${u.colors.white};
  padding: ${u.spacings.medium};
  border: none;
  border-radius: 4px;
  font-size: ${u.fontSizes.large};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${u.spacings.small};

  svg {
    margin-right: ${u.spacings.small};
  }

  &:hover {
    background-color: ${u.colors.secondary};
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: ${u.colors.mediumGray};
    cursor: not-allowed;
    transform: none;
  }
`,U3=C(N3)`
  color: ${u.colors.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  display: block;
  margin-top: ${u.spacings.medium};
  transition: color 0.3s ease;

  &:hover {
    color: ${u.colors.secondary};
    text-decoration: underline;
  }
`,H3=C.p`
  color: red;
  font-size: ${u.fontSizes.small};
  text-align: center;
  margin-top: ${u.spacings.small};
`,V3=C.p`
  color: green;
  font-size: ${u.fontSizes.medium};
  text-align: center;
  margin-top: ${u.spacings.small};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: ${u.spacings.xsmall};
  }
`,Yp=()=>{const[n,o]=E.useState(""),[s,a]=E.useState(""),[c,p]=E.useState(""),[m,g]=E.useState(""),[v,y]=E.useState(""),[w,$]=E.useState(""),[k,O]=E.useState(!1),[P,_]=E.useState(!1),[R,N]=E.useState(!1),[A,F]=E.useState(null),[V,Q]=E.useState(null),J=Ho(),q=async ne=>{if(ne.preventDefault(),N(!0),F(null),Q(null),!n.trim()||!s.trim()||!c.trim()||!m.trim()){F("Por favor, preencha todos os campos obrigatórios."),N(!1);return}if(c!==m){F("As senhas são diferentes."),N(!1);return}if(!P){F("Você precisa aceitar os termos de uso e política de privacidade."),N(!1);return}try{const he=await ce.get(`http://localhost:3001/usuarios?email=${s}`);if(he.data&&he.data.length>0){F("Este e-mail já está em uso. Tente fazer login ou use outro e-mail."),N(!1);return}const Te={nome:n,email:s,senha:c,perfil:k?"Membro":"Visitante",userAdm:!1,dataCadastro:new Date().toISOString(),telefone:v,dataNascimento:w};await ce.post("http://localhost:3001/usuarios",Te),Q("Cadastro realizado com sucesso!"),o(""),a(""),p(""),g(""),y(""),$(""),_(!1),setTimeout(()=>{J("/login")},2e3)}catch(he){console.error("Erro ao cadastrar:",he),F("Falha ao realizar cadastro. Tente novamente mais tarde.")}N(!1)};return f.jsxs(I3,{children:[f.jsx(F3,{children:"Cadastre-se"}),f.jsx(A3,{children:"Crie sua conta para participar da nossa comunidade online"}),V?f.jsxs(V3,{children:[f.jsx(Dv,{})," ",V]}):f.jsxs(M3,{onSubmit:q,children:[f.jsxs(Yn,{children:[f.jsxs(Gn,{htmlFor:"nome",children:[f.jsx(Gm,{})," Nome Completo *"]}),f.jsx(Tr,{type:"text",id:"nome",value:n,onChange:ne=>o(ne.target.value),placeholder:"Seu nome completo",required:!0})]}),f.jsxs(Yn,{children:[f.jsxs(Gn,{htmlFor:"email",children:[f.jsx(Ur,{})," E-mail *"]}),f.jsx(Tr,{type:"email",id:"email",value:s,onChange:ne=>a(ne.target.value),placeholder:"seu email",required:!0})]}),f.jsxs(qp,{children:[f.jsxs(Yn,{children:[f.jsxs(Gn,{htmlFor:"senha",children:[f.jsx(fu,{})," Senha *"]}),f.jsx(Tr,{type:"password",id:"senha",value:c,onChange:ne=>p(ne.target.value),placeholder:"Sua senha",required:!0})]}),f.jsxs(Yn,{children:[f.jsxs(Gn,{htmlFor:"confirmarSenha",children:[f.jsx(fu,{})," Confirmar Senha *"]}),f.jsx(Tr,{type:"password",id:"confirmarSenha",value:m,onChange:ne=>g(ne.target.value),placeholder:"Confirme sua senha",required:!0})]})]}),f.jsxs(qp,{children:[f.jsxs(Yn,{children:[f.jsxs(Gn,{htmlFor:"telefone",children:[f.jsx(Ou,{})," Telefone"]}),f.jsx(Tr,{type:"tel",id:"telefone",value:v,onChange:ne=>y(ne.target.value),placeholder:"(XX) XXXXX-XXXX"})]}),f.jsxs(Yn,{children:[f.jsxs(Gn,{htmlFor:"dataNascimento",children:[f.jsx(Is,{})," Data de Nascimento"]}),f.jsx(Tr,{type:"date",id:"dataNascimento",value:w,onChange:ne=>$(ne.target.value)})]}),f.jsxs(Yn,{children:[f.jsx(Gn,{htmlFor:"membro",children:"Você é membro da Pib aceito ou aclamado em assembleia?"}),f.jsx("input",{type:"checkbox",id:"membro",checked:k,onChange:ne=>O(ne.target.checked)}),f.jsx("span",{children:k?"Sim":"Não"})]})]}),f.jsxs(D3,{children:[f.jsx("input",{type:"checkbox",id:"aceitaTermos",checked:P,onChange:ne=>_(ne.target.checked),required:!0}),f.jsxs("label",{htmlFor:"aceitaTermos",children:["Concordo com os ",f.jsx(Ye,{to:"/termos-de-uso",children:"Termos de Uso"})," e a ",f.jsx(Ye,{to:"/politica-de-privacidade",children:"Política de Privacidade"})," da igreja."]})]}),A&&f.jsx(H3,{children:A}),f.jsxs(B3,{type:"submit",disabled:R,children:[f.jsx(qm,{})," ",R?"Cadastrando...":"Cadastrar"]})]}),f.jsx(U3,{to:"/login",children:"Já tem uma conta? Faça login"})]})},W3=st`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,q3=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 160px); // Full height minus header and footer (approx)
  padding: ${u.spacings.large};
  text-align: center;
  animation: ${W3} 0.8s ease-out;
  background-color: ${u.colors.background};
`,Y3=C.div`
  font-size: 5rem;
  color: ${u.colors.secondary};
  margin-bottom: ${u.spacings.medium};
`,G3=C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  margin-bottom: ${u.spacings.small};
`,Q3=C.p`
  font-size: ${u.fontSizes.large};
  color: ${u.colors.text};
  margin-bottom: ${u.spacings.large};
  max-width: 500px;
`,K3=C(Ye)`
  display: inline-flex;
  align-items: center;
  background-color: ${u.colors.primary};
  color: ${u.colors.white};
  padding: ${u.spacings.medium} ${u.spacings.large};
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: ${u.fontSizes.medium};
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  svg {
    margin-right: ${u.spacings.small};
  }

  &:hover {
    color: ${u.colors.white};
    background-color: ${u.colors.secondary};
    transform: translateY(-2px);
  }
`,X3=()=>f.jsxs(q3,{children:[f.jsx(Y3,{children:f.jsx(qv,{})}),f.jsx(G3,{children:"Oops! Página Não Encontrada"}),f.jsx(Q3,{children:"A página que você está procurando não existe ou foi movida. Verifique o endereço digitado ou volte para a página inicial."}),f.jsxs(K3,{to:"/",children:[f.jsx(Gv,{})," Voltar para a Página Inicial"]})]}),J3=st`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Z3=C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${J3} 0.8s ease-out;
  max-width: 800px;
  margin: 0 auto;
  background-color: ${u.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-top: ${u.spacings.large};
  margin-bottom: ${u.spacings.large};
`,e6=C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  margin-bottom: ${u.spacings.medium};
  text-align: center;
`,t6=C.section`
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  line-height: 1.8;

  h2 {
    font-size: ${u.fontSizes.xlarge};
    color: ${u.colors.primary};
    font-family: ${u.fonts.heading};
    margin-top: ${u.spacings.large};
    margin-bottom: ${u.spacings.small};
  }

  p {
    margin-bottom: ${u.spacings.medium};
  }

  ul {
    list-style: disc;
    margin-left: ${u.spacings.medium};
    margin-bottom: ${u.spacings.medium};
  }

  li {
    margin-bottom: ${u.spacings.xsmall};
  }
`,Gp=()=>f.jsxs(Z3,{children:[f.jsx(e6,{children:"Política de Privacidade"}),f.jsxs(t6,{children:[f.jsxs("p",{children:[f.jsx("strong",{children:"Última atualização:"})," 15 de Maio de 2025"]}),f.jsx("p",{children:'A [Nome da Igreja] ("nós", "nosso") opera o website [endereço do site] (o "Serviço"). Esta página informa sobre nossas políticas relativas à coleta, uso e divulgação de dados pessoais quando você usa nosso Serviço e as escolhas que você associou a esses dados. Nós usamos seus dados para fornecer e melhorar o Serviço. Ao usar o Serviço, você concorda com a coleta e uso de informações de acordo com esta política. Salvo definição em contrário nesta Política de Privacidade, os termos utilizados nesta Política de Privacidade têm o mesmo significado que os nossos Termos e Condições, acessíveis em [endereço do site]/termos-de-uso.'}),f.jsx("h2",{children:"Coleta e Uso de Informações"}),f.jsx("p",{children:"Coletamos vários tipos diferentes de informações para diversos fins, a fim de fornecer e melhorar nosso Serviço para você."}),f.jsx("h3",{children:"Tipos de Dados Coletados"}),f.jsx("h4",{children:"Dados Pessoais"}),f.jsx("p",{children:'Ao usar nosso Serviço, podemos pedir que você nos forneça certas informações de identificação pessoal que podem ser usadas para contatá-lo ou identificá-lo ("Dados Pessoais"). As informações de identificação pessoal podem incluir, mas não se limitam a:'}),f.jsxs("ul",{children:[f.jsx("li",{children:"Endereço de e-mail"}),f.jsx("li",{children:"Nome e sobrenome"}),f.jsx("li",{children:"Número de telefone"}),f.jsx("li",{children:"Endereço, Estado, Província, CEP/Código Postal, Cidade"}),f.jsx("li",{children:"Cookies e Dados de Uso"})]}),f.jsx("h4",{children:"Dados de Uso"}),f.jsx("p",{children:'Também podemos coletar informações sobre como o Serviço é acessado e usado ("Dados de Uso"). Estes Dados de Uso podem incluir informações como o endereço de Protocolo de Internet do seu computador (por exemplo, endereço IP), tipo de navegador, versão do navegador, as páginas do nosso Serviço que você visita, a hora e data da sua visita, o tempo gasto nessas páginas, identificadores únicos de dispositivos e outros dados de diagnóstico.'}),f.jsx("h2",{children:"Seus Direitos de Proteção de Dados sob a LGPD"}),f.jsx("p",{children:"Se você é um residente do Brasil, você tem certos direitos de proteção de dados sob a Lei Geral de Proteção de Dados (LGPD). A [Nome da Igreja] visa tomar medidas razoáveis para permitir que você corrija, altere, exclua ou limite o uso de seus Dados Pessoais."}),f.jsx("p",{children:"Se você deseja ser informado sobre quais Dados Pessoais mantemos sobre você e se você quer que eles sejam removidos de nossos sistemas, por favor, entre em contato conosco."}),f.jsx("p",{children:"Em certas circunstâncias, você tem os seguintes direitos de proteção de dados:"}),f.jsxs("ul",{children:[f.jsx("li",{children:"O direito de acessar, atualizar ou excluir as informações que temos sobre você."}),f.jsx("li",{children:"O direito de retificação."}),f.jsx("li",{children:"O direito de objeção."}),f.jsx("li",{children:"O direito de restrição."}),f.jsx("li",{children:"O direito à portabilidade de dados."}),f.jsx("li",{children:"O direito de retirar o consentimento."})]}),f.jsx("h2",{children:"Contate-Nos"}),f.jsx("p",{children:"Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Por e-mail: [emaildecontato@example.com]"}),f.jsx("li",{children:"Visitando esta página em nosso website: [endereço do site]/contato"})]})]})]}),n6=st`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;C.div`
  padding: ${u.spacings.large} ${u.spacings.medium};
  animation: ${n6} 0.8s ease-out;
  max-width: 800px;
  margin: 0 auto;
  background-color: ${u.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-top: ${u.spacings.large};
  margin-bottom: ${u.spacings.large};
`;C.h1`
  font-size: ${u.fontSizes.xxlarge};
  color: ${u.colors.primary};
  font-family: ${u.fonts.heading};
  margin-bottom: ${u.spacings.medium};
  text-align: center;
`;C.section`
  font-size: ${u.fontSizes.medium};
  color: ${u.colors.text};
  line-height: 1.8;

  h2 {
    font-size: ${u.fontSizes.xlarge};
    color: ${u.colors.primary};
    font-family: ${u.fonts.heading};
    margin-top: ${u.spacings.large};
    margin-bottom: ${u.spacings.small};
  }

  p {
    margin-bottom: ${u.spacings.medium};
  }

  ul {
    list-style: disc;
    margin-left: ${u.spacings.medium};
    margin-bottom: ${u.spacings.medium};
  }

  li {
    margin-bottom: ${u.spacings.xsmall};
  }
`;function r6(){const[n,o]=E.useState(!1);E.useEffect(()=>{localStorage.getItem("cookie_consent")||o(!0)},[]);const s=()=>{localStorage.setItem("cookie_consent","accepted"),o(!1)},a=()=>{localStorage.setItem("cookie_consent","rejected"),o(!1)};return f.jsxs(Cv,{theme:u,children:[f.jsx(bv,{theme:u}),f.jsxs(vy,{children:[f.jsx(e4,{children:f.jsx(S4,{children:f.jsx(W4,{children:f.jsx(bp,{children:f.jsxs(G1,{children:[f.jsx(He,{path:"/",element:f.jsx(E4,{})}),f.jsx(He,{path:"/pib",element:f.jsx(_4,{})})," ",f.jsx(He,{path:"/ministerios",element:f.jsx(q4,{})}),f.jsx(He,{path:"/ministerios/:ministerioSlug",element:f.jsx(bp,{children:f.jsx(X4,{})})}),f.jsx(He,{path:"/eventos",element:f.jsx(lw,{})}),f.jsx(He,{path:"/eventos/:id",element:f.jsx(cw,{children:f.jsx(fw,{})})}),f.jsx(He,{path:"/inscricoes",element:f.jsx(Ew,{})}),f.jsx(He,{path:"/cultos",element:f.jsx(Ow,{})}),f.jsx(He,{path:"/mural-piedade",element:f.jsx(e3,{})}),f.jsx(He,{path:"/mural-piedade/novo",element:f.jsx(d3,{})}),f.jsx(He,{path:"/contribua",element:f.jsx(S3,{})}),f.jsx(He,{path:"/login",element:f.jsx(R3,{})}),f.jsx(He,{path:"/register",element:f.jsx(Yp,{})}),f.jsx(He,{path:"/access",element:f.jsx(Yp,{})}),f.jsx(He,{path:"/politica-de-privacidade",element:f.jsx(Gp,{})}),f.jsx(He,{path:"/termos-de-uso",element:f.jsx(Gp,{})})," ",f.jsx(He,{path:"*",element:f.jsx(X3,{})})]})})})})}),n&&f.jsx(s4,{onAccept:s,onReject:a})]})]})}r1.createRoot(document.getElementById("root")).render(f.jsx(E.StrictMode,{children:f.jsx(r6,{})}));
