/*! For license information please see main.7a630e74.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),a=n(43),i=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}var s=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var k=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var S=Symbol.for("react.memo_cache_sentinel"),E=Symbol.iterator;function C(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=E&&e[E]||e["@@iterator"])?e:null}var j=Symbol.for("react.client.reference");function _(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===j?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case d:return"Fragment";case c:return"Portal";case p:return"Profiler";case f:return"StrictMode";case y:return"Suspense";case b:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case g:return(e.displayName||"Context")+".Provider";case m:return(e._context.displayName||"Context")+".Consumer";case v:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case x:return null!==(t=e.displayName||null)?t:_(e.type)||"Memo";case w:t=e._payload,e=e._init;try{return _(e(t))}catch(n){}}return null}var z,P,T=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=Object.assign;function O(e){if(void 0===z)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);z=t&&t[1]||"",P=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+z+e+P}var N=!1;function R(e,t){if(!e||N)return"";N=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(l){if(l&&r&&"string"===typeof l.stack)return[l.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),o=i[0],l=i[1];if(o&&l){var s=o.split("\n"),u=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===u.length)for(r=s.length-1,a=u.length-1;1<=r&&0<=a&&s[r]!==u[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==u[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==u[a]){var c="\n"+s[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=a);break}}}finally{N=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?O(n):""}function A(e){switch(e.tag){case 26:case 27:case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 15:return e=R(e.type,!1);case 11:return e=R(e.type.render,!1);case 1:return e=R(e.type,!0);default:return""}}function L(e){try{var t="";do{t+=A(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function D(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function $(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function M(e){if(D(e)!==e)throw Error(o(188))}function B(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=B(e)))return t;e=e.sibling}return null}var I=Array.isArray,U=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},W=[],V=-1;function q(e){return{current:e}}function G(e){0>V||(e.current=W[V],W[V]=null,V--)}function Y(e,t){V++,W[V]=e.current,e.current=t}var K=q(null),Q=q(null),X=q(null),J=q(null);function Z(e,t){switch(Y(X,t),Y(Q,e),Y(K,null),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Qc(t):0;break;default:if(t=(e=8===e?t.parentNode:t).tagName,e=e.namespaceURI)t=Xc(e=Qc(e),t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G(K),Y(K,t)}function ee(){G(K),G(Q),G(X)}function te(e){null!==e.memoizedState&&Y(J,e);var t=K.current,n=Xc(t,e.type);t!==n&&(Y(Q,e),Y(K,n))}function ne(e){Q.current===e&&(G(K),G(Q)),J.current===e&&(G(J),Ld._currentValue=H)}var re=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,oe=r.unstable_shouldYield,le=r.unstable_requestPaint,se=r.unstable_now,ue=r.unstable_getCurrentPriorityLevel,ce=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,pe=r.unstable_LowPriority,he=r.unstable_IdlePriority,me=r.log,ge=r.unstable_setDisableYieldValue,ve=null,ye=null;function be(e){if("function"===typeof me&&ge(e),ye&&"function"===typeof ye.setStrictMode)try{ye.setStrictMode(ve,e)}catch(t){}}var xe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(we(e)/ke|0)|0},we=Math.log,ke=Math.LN2;var Se=128,Ee=4194304;function Ce(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194176&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function je(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=e.warmLanes;e=0!==e.finishedLanes;var l=134217727&n;return 0!==l?0!==(n=l&~a)?r=Ce(n):0!==(i&=l)?r=Ce(i):e||0!==(o=l&~o)&&(r=Ce(o)):0!==(l=n&~a)?r=Ce(l):0!==i?r=Ce(i):e||0!==(o=n&~o)&&(r=Ce(o)),0===r?0:0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||32===a&&0!==(4194176&o))?t:r}function _e(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function ze(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Pe(){var e=Se;return 0===(4194176&(Se<<=1))&&(Se=128),e}function Te(){var e=Ee;return 0===(62914560&(Ee<<=1))&&(Ee=4194304),e}function Fe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ne(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-xe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194218&n}function Re(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Ae(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Le(){var e=U.p;return 0!==e?e:void 0===(e=window.event)?32:Xd(e.type)}var De=Math.random().toString(36).slice(2),$e="__reactFiber$"+De,Me="__reactProps$"+De,Be="__reactContainer$"+De,Ie="__reactEvents$"+De,Ue="__reactListeners$"+De,He="__reactHandles$"+De,We="__reactResources$"+De,Ve="__reactMarker$"+De;function qe(e){delete e[$e],delete e[Me],delete e[Ie],delete e[Ue],delete e[He]}function Ge(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Be]||n[$e]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=sd(e);null!==e;){if(n=e[$e])return n;e=sd(e)}return t}n=(e=n).parentNode}return null}function Ye(e){if(e=e[$e]||e[Be]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Ke(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Qe(e){var t=e[We];return t||(t=e[We]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Ve]=!0}var Je=new Set,Ze={};function et(e,t){tt(e,t),tt(e+"Capture",t)}function tt(e,t){for(Ze[e]=t,e=0;e<t.length;e++)Je.add(t[e])}var nt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},it={};function ot(e,t,n){if(a=t,re.call(it,a)||!re.call(at,a)&&(rt.test(a)?it[a]=!0:(at[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function lt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function st(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ct(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ct(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ct(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function mt(e){return e.replace(ht,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,r,a,i,o,l){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?yt(e,o,ut(t)):null!=n?yt(e,o,ut(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=i&&(e.defaultChecked=!!i),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ut(l):e.removeAttribute("name")}function vt(e,t,n,r,a,i,o,l){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return;n=null!=n?""+ut(n):"",t=null!=t?""+ut(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function yt(e,t,n){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ut(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ut(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(I(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ut(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||St.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Et(e,a,r)}else for(var i in t)t.hasOwnProperty(i)&&Et(e,i,t[i])}function jt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _t=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pt(e){return zt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tt=null;function Ft(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ot=null,Nt=null;function Rt(e){var t=Ye(e);if(t&&(e=t.stateNode)){var n=e[Me]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Me]||null;if(!a)throw Error(o(90));gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var At=!1;function Lt(e,t,n){if(At)return e(t,n);At=!0;try{return e(t)}finally{if(At=!1,(null!==Ot||null!==Nt)&&($u(),Ot&&(t=Ot,e=Nt,Nt=Ot=null,Rt(t),e)))for(t=0;t<e.length;t++)Rt(e[t])}}function Dt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Me]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var $t=!1;if(nt)try{var Mt={};Object.defineProperty(Mt,"passive",{get:function(){$t=!0}}),window.addEventListener("test",Mt,Mt),window.removeEventListener("test",Mt,Mt)}catch(kf){$t=!1}var Bt=null,It=null,Ut=null;function Ht(){if(Ut)return Ut;var e,t,n=It,r=n.length,a="value"in Bt?Bt.value:Bt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Ut=a.slice(e,1<t?1-t:void 0)}function Wt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Vt(){return!0}function qt(){return!1}function Gt(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Vt:qt,this.isPropagationStopped=qt,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Vt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Vt)},persist:function(){},isPersistent:Vt}),t}var Yt,Kt,Qt,Xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jt=Gt(Xt),Zt=F({},Xt,{view:0,detail:0}),en=Gt(Zt),tn=F({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qt&&(Qt&&"mousemove"===e.type?(Yt=e.screenX-Qt.screenX,Kt=e.screenY-Qt.screenY):Kt=Yt=0,Qt=e),Yt)},movementY:function(e){return"movementY"in e?e.movementY:Kt}}),nn=Gt(tn),rn=Gt(F({},tn,{dataTransfer:0})),an=Gt(F({},Zt,{relatedTarget:0})),on=Gt(F({},Xt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=Gt(F({},Xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),sn=Gt(F({},Xt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=dn[e])&&!!t[e]}function pn(){return fn}var hn=Gt(F({},Zt,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Wt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?cn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pn,charCode:function(e){return"keypress"===e.type?Wt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Wt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),mn=Gt(F({},tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),gn=Gt(F({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pn})),vn=Gt(F({},Xt,{propertyName:0,elapsedTime:0,pseudoElement:0})),yn=Gt(F({},tn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),bn=Gt(F({},Xt,{newState:0,oldState:0})),xn=[9,13,27,32],wn=nt&&"CompositionEvent"in window,kn=null;nt&&"documentMode"in document&&(kn=document.documentMode);var Sn=nt&&"TextEvent"in window&&!kn,En=nt&&(!wn||kn&&8<kn&&11>=kn),Cn=String.fromCharCode(32),jn=!1;function _n(e,t){switch(e){case"keyup":return-1!==xn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Pn=!1;var Tn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Tn[e.type]:"textarea"===t}function On(e,t,n,r){Ot?Nt?Nt.push(r):Nt=[r]:Ot=r,0<(t=Lc(t,"onChange")).length&&(n=new Jt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nn=null,Rn=null;function An(e){zc(e,0)}function Ln(e){if(ft(Ke(e)))return e}function Dn(e,t){if("change"===e)return t}var $n=!1;if(nt){var Mn;if(nt){var Bn="oninput"in document;if(!Bn){var In=document.createElement("div");In.setAttribute("oninput","return;"),Bn="function"===typeof In.oninput}Mn=Bn}else Mn=!1;$n=Mn&&(!document.documentMode||9<document.documentMode)}function Un(){Nn&&(Nn.detachEvent("onpropertychange",Hn),Rn=Nn=null)}function Hn(e){if("value"===e.propertyName&&Ln(Rn)){var t=[];On(t,Rn,e,Ft(e)),Lt(An,t)}}function Wn(e,t,n){"focusin"===e?(Un(),Rn=n,(Nn=t).attachEvent("onpropertychange",Hn)):"focusout"===e&&Un()}function Vn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Ln(Rn)}function qn(e,t){if("click"===e)return Ln(t)}function Gn(e,t){if("input"===e||"change"===e)return Ln(t)}var Yn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Kn(e,t){if(Yn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!re.call(t,a)||!Yn(e[a],t[a]))return!1}return!0}function Qn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xn(e,t){var n,r=Qn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qn(r)}}function Jn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Jn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Zn(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=pt((e=t.contentWindow).document)}return t}function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function tr(e,t){var n=Zn(t);t=e.focusedElem;var r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Jn(t.ownerDocument.documentElement,t)){if(null!==r&&er(t))if(e=r.start,void 0===(n=r.end)&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if((n=(e=t.ownerDocument||document)&&e.defaultView||window).getSelection){n=n.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!n.extend&&i>r&&(a=r,r=i,i=a),a=Xn(t,i);var o=Xn(t,r);a&&o&&(1!==n.rangeCount||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&((e=e.createRange()).setStart(a.node,a.offset),n.removeAllRanges(),i>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}for(e=[],n=t;n=n.parentNode;)1===n.nodeType&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for("function"===typeof t.focus&&t.focus(),t=0;t<e.length;t++)(n=e[t]).element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nr=nt&&"documentMode"in document&&11>=document.documentMode,rr=null,ar=null,ir=null,or=!1;function lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;or||null==rr||rr!==pt(r)||("selectionStart"in(r=rr)&&er(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ir&&Kn(ir,r)||(ir=r,0<(r=Lc(ar,"onSelect")).length&&(t=new Jt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},cr={},dr={};function fr(e){if(cr[e])return cr[e];if(!ur[e])return e;var t,n=ur[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return cr[e]=n[t];return e}nt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);var pr=fr("animationend"),hr=fr("animationiteration"),mr=fr("animationstart"),gr=fr("transitionrun"),vr=fr("transitionstart"),yr=fr("transitioncancel"),br=fr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function kr(e,t){xr.set(e,t),et(t,[e])}var Sr=[],Er=0,Cr=0;function jr(){for(var e=Er,t=Cr=Er=0;t<e;){var n=Sr[t];Sr[t++]=null;var r=Sr[t];Sr[t++]=null;var a=Sr[t];Sr[t++]=null;var i=Sr[t];if(Sr[t++]=null,null!==r&&null!==a){var o=r.pending;null===o?a.next=a:(a.next=o.next,o.next=a),r.pending=a}0!==i&&Tr(n,a,i)}}function _r(e,t,n,r){Sr[Er++]=e,Sr[Er++]=t,Sr[Er++]=n,Sr[Er++]=r,Cr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function zr(e,t,n,r){return _r(e,t,n,r),Fr(e)}function Pr(e,t){return _r(e,null,null,t),Fr(e)}function Tr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(a=!0)),e=i,i=i.return;a&&null!==t&&3===e.tag&&(i=e.stateNode,a=31-xe(n),null===(e=(i=i.hiddenUpdates)[a])?i[a]=[t]:e.push(t),t.lane=536870912|n)}function Fr(e){if(50<zu)throw zu=0,Pu=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Or={},Nr=new WeakMap;function Rr(e,t){if("object"===typeof e&&null!==e){var n=Nr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:L(t)},Nr.set(e,t),t)}return{value:e,source:t,stack:L(t)}}var Ar=[],Lr=0,Dr=null,$r=0,Mr=[],Br=0,Ir=null,Ur=1,Hr="";function Wr(e,t){Ar[Lr++]=$r,Ar[Lr++]=Dr,Dr=e,$r=t}function Vr(e,t,n){Mr[Br++]=Ur,Mr[Br++]=Hr,Mr[Br++]=Ir,Ir=e;var r=Ur;e=Hr;var a=32-xe(r)-1;r&=~(1<<a),n+=1;var i=32-xe(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Ur=1<<32-xe(t)+a|n<<a|r,Hr=i+e}else Ur=1<<i|n<<a|r,Hr=e}function qr(e){null!==e.return&&(Wr(e,1),Vr(e,1,0))}function Gr(e){for(;e===Dr;)Dr=Ar[--Lr],Ar[Lr]=null,$r=Ar[--Lr],Ar[Lr]=null;for(;e===Ir;)Ir=Mr[--Br],Mr[Br]=null,Hr=Mr[--Br],Mr[Br]=null,Ur=Mr[--Br],Mr[Br]=null}var Yr=null,Kr=null,Qr=!1,Xr=null,Jr=!1,Zr=Error(o(519));function ea(e){throw ia(Rr(Error(o(418,"")),e)),Zr}function ta(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[$e]=e,t[Me]=r,n){case"dialog":Pc("cancel",t),Pc("close",t);break;case"iframe":case"object":case"embed":Pc("load",t);break;case"video":case"audio":for(n=0;n<jc.length;n++)Pc(jc[n],t);break;case"source":Pc("error",t);break;case"img":case"image":case"link":Pc("error",t),Pc("load",t);break;case"details":Pc("toggle",t);break;case"input":Pc("invalid",t),vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Pc("invalid",t);break;case"textarea":Pc("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Uc(t.textContent,n)?(null!=r.popover&&(Pc("beforetoggle",t),Pc("toggle",t)),null!=r.onScroll&&Pc("scroll",t),null!=r.onScrollEnd&&Pc("scrollend",t),null!=r.onClick&&(t.onclick=Hc),t=!0):t=!1,t||ea(e)}function na(e){for(Yr=e.return;Yr;)switch(Yr.tag){case 3:case 27:return void(Jr=!0);case 5:case 13:return void(Jr=!1);default:Yr=Yr.return}}function ra(e){if(e!==Yr)return!1;if(!Qr)return na(e),Qr=!0,!1;var t,n=!1;if((t=3!==e.tag&&27!==e.tag)&&((t=5===e.tag)&&(t=!("form"!==(t=e.type)&&"button"!==t)||Jc(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&Kr&&ea(e),na(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){Kr=ld(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}Kr=null}}else Kr=Yr?ld(e.stateNode.nextSibling):null;return!0}function aa(){Kr=Yr=null,Qr=!1}function ia(e){null===Xr?Xr=[e]:Xr.push(e)}var oa=Error(o(460)),la=Error(o(474)),sa={then:function(){}};function ua(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ca(){}function da(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(ca,ca),t=n),t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===oa)throw Error(o(483));throw e;default:if("string"===typeof t.status)t.then(ca,ca);else{if(null!==(e=tu)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===oa)throw Error(o(483));throw e}throw fa=t,oa}}var fa=null;function pa(){if(null===fa)throw Error(o(459));var e=fa;return fa=null,e}var ha=null,ma=0;function ga(e){var t=ma;return ma+=1,null===ha&&(ha=[]),da(ha,e,t)}function va(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function ya(e,t){if(t.$$typeof===s)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function xa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Ds(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=33554434,n):r:(t.flags|=33554434,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=33554434),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Us(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n,r){var i=n.type;return i===d?h(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===w&&ba(i)===t.type)?(va(t=a(t,n.props),n),t.return=e,t):(va(t=Ms(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function p(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Hs(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function h(e,t,n,r,i){return null===t||7!==t.tag?((t=Bs(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function m(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Us(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case u:return va(n=Ms(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case c:return(t=Hs(t,e.mode,n)).return=e,t;case w:return m(e,t=(0,t._init)(t._payload),n)}if(I(t)||C(t))return(t=Bs(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return m(e,ga(t),n);if(t.$$typeof===g)return m(e,jl(e,t),n);ya(e,t)}return null}function v(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case u:return n.key===a?f(e,t,n,r):null;case c:return n.key===a?p(e,t,n,r):null;case w:return v(e,t,n=(a=n._init)(n._payload),r)}if(I(n)||C(n))return null!==a?null:h(e,t,n,r,null);if("function"===typeof n.then)return v(e,t,ga(n),r);if(n.$$typeof===g)return v(e,t,jl(e,n),r);ya(e,n)}return null}function y(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case u:return f(t,e=e.get(null===r.key?n:r.key)||null,r,a);case c:return p(t,e=e.get(null===r.key?n:r.key)||null,r,a);case w:return y(e,t,n,r=(0,r._init)(r._payload),a)}if(I(r)||C(r))return h(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return y(e,t,n,ga(r),a);if(r.$$typeof===g)return y(e,t,n,jl(t,r),a);ya(t,r)}return null}function b(s,f,p,h){if("object"===typeof p&&null!==p&&p.type===d&&null===p.key&&(p=p.props.children),"object"===typeof p&&null!==p){switch(p.$$typeof){case u:e:{for(var x=p.key;null!==f;){if(f.key===x){if((x=p.type)===d){if(7===f.tag){n(s,f.sibling),(h=a(f,p.props.children)).return=s,s=h;break e}}else if(f.elementType===x||"object"===typeof x&&null!==x&&x.$$typeof===w&&ba(x)===f.type){n(s,f.sibling),va(h=a(f,p.props),p),h.return=s,s=h;break e}n(s,f);break}t(s,f),f=f.sibling}p.type===d?((h=Bs(p.props.children,s.mode,h,p.key)).return=s,s=h):(va(h=Ms(p.type,p.key,p.props,null,s.mode,h),p),h.return=s,s=h)}return l(s);case c:e:{for(x=p.key;null!==f;){if(f.key===x){if(4===f.tag&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(s,f.sibling),(h=a(f,p.children||[])).return=s,s=h;break e}n(s,f);break}t(s,f),f=f.sibling}(h=Hs(p,s.mode,h)).return=s,s=h}return l(s);case w:return b(s,f,p=(x=p._init)(p._payload),h)}if(I(p))return function(a,o,l,s){for(var u=null,c=null,d=o,f=o=0,p=null;null!==d&&f<l.length;f++){d.index>f?(p=d,d=null):p=d.sibling;var h=v(a,d,l[f],s);if(null===h){null===d&&(d=p);break}e&&d&&null===h.alternate&&t(a,d),o=i(h,o,f),null===c?u=h:c.sibling=h,c=h,d=p}if(f===l.length)return n(a,d),Qr&&Wr(a,f),u;if(null===d){for(;f<l.length;f++)null!==(d=m(a,l[f],s))&&(o=i(d,o,f),null===c?u=d:c.sibling=d,c=d);return Qr&&Wr(a,f),u}for(d=r(d);f<l.length;f++)null!==(p=y(d,a,f,l[f],s))&&(e&&null!==p.alternate&&d.delete(null===p.key?f:p.key),o=i(p,o,f),null===c?u=p:c.sibling=p,c=p);return e&&d.forEach((function(e){return t(a,e)})),Qr&&Wr(a,f),u}(s,f,p,h);if(C(p)){if("function"!==typeof(x=C(p)))throw Error(o(150));return function(a,l,s,u){if(null==s)throw Error(o(151));for(var c=null,d=null,f=l,p=l=0,h=null,g=s.next();null!==f&&!g.done;p++,g=s.next()){f.index>p?(h=f,f=null):h=f.sibling;var b=v(a,f,g.value,u);if(null===b){null===f&&(f=h);break}e&&f&&null===b.alternate&&t(a,f),l=i(b,l,p),null===d?c=b:d.sibling=b,d=b,f=h}if(g.done)return n(a,f),Qr&&Wr(a,p),c;if(null===f){for(;!g.done;p++,g=s.next())null!==(g=m(a,g.value,u))&&(l=i(g,l,p),null===d?c=g:d.sibling=g,d=g);return Qr&&Wr(a,p),c}for(f=r(f);!g.done;p++,g=s.next())null!==(g=y(f,a,p,g.value,u))&&(e&&null!==g.alternate&&f.delete(null===g.key?p:g.key),l=i(g,l,p),null===d?c=g:d.sibling=g,d=g);return e&&f.forEach((function(e){return t(a,e)})),Qr&&Wr(a,p),c}(s,f,p=x.call(p),h)}if("function"===typeof p.then)return b(s,f,ga(p),h);if(p.$$typeof===g)return b(s,f,jl(s,p),h);ya(s,p)}return"string"===typeof p&&""!==p||"number"===typeof p||"bigint"===typeof p?(p=""+p,null!==f&&6===f.tag?(n(s,f.sibling),(h=a(f,p)).return=s,s=h):(n(s,f),(h=Us(p,s.mode,h)).return=s,s=h),l(s)):n(s,f)}return function(e,t,n,r){try{ma=0;var a=b(e,t,n,r);return ha=null,a}catch(o){if(o===oa)throw o;var i=As(29,o,null,e.mode);return i.lanes=r,i.return=e,i}}}var wa=xa(!0),ka=xa(!1),Sa=q(null),Ea=q(0);function Ca(e,t){Y(Ea,e=uu),Y(Sa,t),uu=e|t.baseLanes}function ja(){Y(Ea,uu),Y(Sa,Sa.current)}function _a(){uu=Ea.current,G(Sa),G(Ea)}var za=q(null),Pa=null;function Ta(e){var t=e.alternate;Y(Ra,1&Ra.current),Y(za,e),null===Pa&&(null===t||null!==Sa.current||null!==t.memoizedState)&&(Pa=e)}function Fa(e){if(22===e.tag){if(Y(Ra,Ra.current),Y(za,e),null===Pa){var t=e.alternate;null!==t&&null!==t.memoizedState&&(Pa=e)}}else Oa()}function Oa(){Y(Ra,Ra.current),Y(za,za.current)}function Na(e){G(za),Pa===e&&(Pa=null),G(Ra)}var Ra=q(0);function Aa(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var La="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Da=r.unstable_scheduleCallback,$a=r.unstable_NormalPriority,Ma={$$typeof:g,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ba(){return{controller:new La,data:new Map,refCount:0}}function Ia(e){e.refCount--,0===e.refCount&&Da($a,(function(){e.controller.abort()}))}var Ua=null,Ha=0,Wa=0,Va=null;function qa(){if(0===--Ha&&null!==Ua){null!==Va&&(Va.status="fulfilled");var e=Ua;Ua=null,Wa=0,Va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ga=T.S;T.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ua){var n=Ua=[];Ha=0,Wa=wc(),Va={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ha++,t.then(qa,qa)}(0,t),null!==Ga&&Ga(e,t)};var Ya=q(null);function Ka(){var e=Ya.current;return null!==e?e:tu.pooledCache}function Qa(e,t){Y(Ya,null===t?Ya.current:t.pool)}function Xa(){var e=Ka();return null===e?null:{parent:Ma._currentValue,pool:e}}var Ja=0,Za=null,ei=null,ti=null,ni=!1,ri=!1,ai=!1,ii=0,oi=0,li=null,si=0;function ui(){throw Error(o(321))}function ci(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yn(e[n],t[n]))return!1;return!0}function di(e,t,n,r,a,i){return Ja=i,Za=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=null===e||null===e.memoizedState?jo:_o,ai=!1,i=n(r,a),ai=!1,ri&&(i=pi(t,n,r,a)),fi(e),i}function fi(e){T.H=Co;var t=null!==ei&&null!==ei.next;if(Ja=0,ti=ei=Za=null,ni=!1,oi=0,li=null,t)throw Error(o(300));null===e||Wo||null!==(e=e.dependencies)&&Sl(e)&&(Wo=!0)}function pi(e,t,n,r){Za=e;var a=0;do{if(ri&&(li=null),oi=0,ri=!1,25<=a)throw Error(o(301));if(a+=1,ti=ei=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}T.H=zo,i=t(n,r)}while(ri);return i}function hi(){var e=T.H,t=e.useState()[0];return t="function"===typeof t.then?xi(t):t,e=e.useState()[0],(null!==ei?ei.memoizedState:null)!==e&&(Za.flags|=1024),t}function mi(){var e=0!==ii;return ii=0,e}function gi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function vi(e){if(ni){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ni=!1}Ja=0,ti=ei=Za=null,ri=!1,oi=ii=0,li=null}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ti?Za.memoizedState=ti=e:ti=ti.next=e,ti}function bi(){if(null===ei){var e=Za.alternate;e=null!==e?e.memoizedState:null}else e=ei.next;var t=null===ti?Za.memoizedState:ti.next;if(null!==t)ti=t,ei=e;else{if(null===e){if(null===Za.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(ei=e).memoizedState,baseState:ei.baseState,baseQueue:ei.baseQueue,queue:ei.queue,next:null},null===ti?Za.memoizedState=ti=e:ti=ti.next=e}return ti}function xi(e){var t=oi;return oi+=1,null===li&&(li=[]),e=da(li,e,t),t=Za,null===(null===ti?t.memoizedState:ti.next)&&(t=t.alternate,T.H=null===t||null===t.memoizedState?jo:_o),e}function wi(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return xi(e);if(e.$$typeof===g)return Cl(e)}throw Error(o(438,String(e)))}function ki(e){var t=null,n=Za.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Za.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Za.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=S;return t.index++,n}function Si(e,t){return"function"===typeof t?t(e):t}function Ei(e){return Ci(bi(),ei,e)}function Ci(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var a=e.baseQueue,i=r.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}t.baseQueue=a=i,r.pending=null}if(i=e.baseState,null===a)e.memoizedState=i;else{var s=l=null,u=null,c=t=a.next,d=!1;do{var f=-536870913&c.lane;if(f!==c.lane?(ru&f)===f:(Ja&f)===f){var p=c.revertLane;if(0===p)null!==u&&(u=u.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Wa&&(d=!0);else{if((Ja&p)===p){c=c.next,p===Wa&&(d=!0);continue}f={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=f,l=i):u=u.next=f,Za.lanes|=p,du|=p}f=c.action,ai&&n(i,f),i=c.hasEagerState?c.eagerState:n(i,f)}else p={lane:f,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=p,l=i):u=u.next=p,Za.lanes|=f,du|=f;c=c.next}while(null!==c&&c!==t);if(null===u?l=i:u.next=s,!Yn(i,e.memoizedState)&&(Wo=!0,d&&null!==(n=Va)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=u,r.lastRenderedState=i}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ji(e){var t=bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);Yn(i,t.memoizedState)||(Wo=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _i(e,t,n){var r=Za,a=bi(),i=Qr;if(i){if(void 0===n)throw Error(o(407));n=n()}else n=t();var l=!Yn((ei||a).memoizedState,n);if(l&&(a.memoizedState=n,Wo=!0),a=a.queue,Ji(Ti.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||null!==ti&&1&ti.memoizedState.tag){if(r.flags|=2048,Gi(9,Pi.bind(null,r,a,n,t),{destroy:void 0},null),null===tu)throw Error(o(349));i||0!==(60&Ja)||zi(r,t,n)}return n}function zi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Za.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Za.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Pi(e,t,n,r){t.value=n,t.getSnapshot=r,Fi(t)&&Oi(e)}function Ti(e,t,n){return n((function(){Fi(t)&&Oi(e)}))}function Fi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yn(e,n)}catch(r){return!0}}function Oi(e){var t=Pr(e,2);null!==t&&Ou(t,e,2)}function Ni(e){var t=yi();if("function"===typeof e){var n=e;if(e=n(),ai){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:e},t}function Ri(e,t,n,r){return e.baseState=n,Ci(e,ei,"function"===typeof r?r:Si)}function Ai(e,t,n,r,a){if(ko(e))throw Error(o(485));if(null!==(e=t.action)){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==T.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,Li(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Li(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var i=T.T,o={};T.T=o;try{var l=n(a,r),s=T.S;null!==s&&s(o,l),Di(e,t,l)}catch(u){Mi(e,t,u)}finally{T.T=i}}else try{Di(e,t,i=n(a,r))}catch(c){Mi(e,t,c)}}function Di(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){$i(e,t,n)}),(function(n){return Mi(e,t,n)})):$i(e,t,n)}function $i(e,t,n){t.status="fulfilled",t.value=n,Bi(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Li(e,n)))}function Mi(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,Bi(t),t=t.next}while(t!==r)}e.action=null}function Bi(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ii(e,t){return t}function Ui(e,t){if(Qr){var n=tu.formState;if(null!==n){e:{var r=Za;if(Qr){if(Kr){t:{for(var a=Kr,i=Jr;8!==a.nodeType;){if(!i){a=null;break t}if(null===(a=ld(a.nextSibling))){a=null;break t}}a="F!"===(i=a.data)||"F"===i?a:null}if(a){Kr=ld(a.nextSibling),r="F!"===a.data;break e}}ea(r)}r=!1}r&&(t=n[0])}}return(n=yi()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:t},n.queue=r,n=bo.bind(null,Za,r),r.dispatch=n,r=Ni(!1),i=wo.bind(null,Za,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=yi()).queue=a,n=Ai.bind(null,Za,a,i,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Hi(e){return Wi(bi(),ei,e)}function Wi(e,t,n){t=Ci(e,t,Ii)[0],e=Ei(Si)[0],t="object"===typeof t&&null!==t&&"function"===typeof t.then?xi(t):t;var r=bi(),a=r.queue,i=a.dispatch;return n!==r.memoizedState&&(Za.flags|=2048,Gi(9,Vi.bind(null,a,n),{destroy:void 0},null)),[t,i,e]}function Vi(e,t){e.action=t}function qi(e){var t=bi(),n=ei;if(null!==n)return Wi(t,n,e);bi(),t=t.memoizedState;var r=(n=bi()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Gi(e,t,n,r){return e={tag:e,create:t,inst:n,deps:r,next:null},null===(t=Za.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Za.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Yi(){return bi().memoizedState}function Ki(e,t,n,r){var a=yi();Za.flags|=e,a.memoizedState=Gi(1|t,n,{destroy:void 0},void 0===r?null:r)}function Qi(e,t,n,r){var a=bi();r=void 0===r?null:r;var i=a.memoizedState.inst;null!==ei&&null!==r&&ci(r,ei.memoizedState.deps)?a.memoizedState=Gi(t,n,i,r):(Za.flags|=e,a.memoizedState=Gi(1|t,n,i,r))}function Xi(e,t){Ki(8390656,8,e,t)}function Ji(e,t){Qi(2048,8,e,t)}function Zi(e,t){return Qi(4,2,e,t)}function eo(e,t){return Qi(4,4,e,t)}function to(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function no(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Qi(4,4,to.bind(null,t,e),n)}function ro(){}function ao(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&ci(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function io(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&ci(t,r[1]))return r[0];if(r=e(),ai){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function oo(e,t,n){return void 0===n||0!==(1073741824&Ja)?e.memoizedState=t:(e.memoizedState=n,e=Fu(),Za.lanes|=e,du|=e,n)}function lo(e,t,n,r){return Yn(n,t)?n:null!==Sa.current?(e=oo(e,n,r),Yn(e,t)||(Wo=!0),e):0===(42&Ja)?(Wo=!0,e.memoizedState=n):(e=Fu(),Za.lanes|=e,du|=e,t)}function so(e,t,n,r,a){var i=U.p;U.p=0!==i&&8>i?i:8;var o=T.T,l={};T.T=l,wo(e,!1,t,n);try{var s=a(),u=T.S;if(null!==u&&u(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)xo(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(s,r),Tu());else xo(e,t,r,Tu())}catch(c){xo(e,t,{then:function(){},status:"rejected",reason:c},Tu())}finally{U.p=i,T.T=o}}function uo(){}function co(e,t,n,r){if(5!==e.tag)throw Error(o(476));var a=fo(e).queue;so(e,a,t,H,null===n?uo:function(){return po(e),n(r)})}function fo(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:H},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function po(e){xo(e,fo(e).next.queue,{},Tu())}function ho(){return Cl(Ld)}function mo(){return bi().memoizedState}function go(){return bi().memoizedState}function vo(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Tu(),r=Ol(t,e=Fl(n),n);return null!==r&&(Ou(r,t,n),Nl(r,t,n)),t={cache:Ba()},void(e.payload=t)}t=t.return}}function yo(e,t,n){var r=Tu();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ko(e)?So(t,n):null!==(n=zr(e,t,n,r))&&(Ou(n,e,r),Eo(n,t,r))}function bo(e,t,n){xo(e,t,n,Tu())}function xo(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ko(e))So(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Yn(l,o))return _r(e,t,a,0),null===tu&&jr(),!1}catch(s){}if(null!==(n=zr(e,t,a,r)))return Ou(n,e,r),Eo(n,t,r),!0}return!1}function wo(e,t,n,r){if(r={lane:2,revertLane:wc(),action:r,hasEagerState:!1,eagerState:null,next:null},ko(e)){if(t)throw Error(o(479))}else null!==(t=zr(e,n,r,2))&&Ou(t,e,2)}function ko(e){var t=e.alternate;return e===Za||null!==t&&t===Za}function So(e,t){ri=ni=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eo(e,t,n){if(0!==(4194176&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}var Co={readContext:Cl,use:wi,useCallback:ui,useContext:ui,useEffect:ui,useImperativeHandle:ui,useLayoutEffect:ui,useInsertionEffect:ui,useMemo:ui,useReducer:ui,useRef:ui,useState:ui,useDebugValue:ui,useDeferredValue:ui,useTransition:ui,useSyncExternalStore:ui,useId:ui};Co.useCacheRefresh=ui,Co.useMemoCache=ui,Co.useHostTransitionStatus=ui,Co.useFormState=ui,Co.useActionState=ui,Co.useOptimistic=ui;var jo={readContext:Cl,use:wi,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:Cl,useEffect:Xi,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Ki(4194308,4,to.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){Ki(4,2,e,t)},useMemo:function(e,t){var n=yi();t=void 0===t?null:t;var r=e();if(ai){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=yi();if(void 0!==n){var a=n(t);if(ai){be(!0);try{n(t)}finally{be(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=yo.bind(null,Za,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:function(e){var t=(e=Ni(e)).queue,n=bo.bind(null,Za,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ro,useDeferredValue:function(e,t){return oo(yi(),e,t)},useTransition:function(){var e=Ni(!1);return e=so.bind(null,Za,e.queue,!0,!1),yi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Za,a=yi();if(Qr){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===tu)throw Error(o(349));0!==(60&ru)||zi(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Xi(Ti.bind(null,r,i,e),[e]),r.flags|=2048,Gi(9,Pi.bind(null,r,i,n,t),{destroy:void 0},null),n},useId:function(){var e=yi(),t=tu.identifierPrefix;if(Qr){var n=Hr;t=":"+t+"R"+(n=(Ur&~(1<<32-xe(Ur)-1)).toString(32)+n),0<(n=ii++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=si++).toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return yi().memoizedState=vo.bind(null,Za)}};jo.useMemoCache=ki,jo.useHostTransitionStatus=ho,jo.useFormState=Ui,jo.useActionState=Ui,jo.useOptimistic=function(e){var t=yi();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wo.bind(null,Za,!0,n),n.dispatch=t,[e,t]};var _o={readContext:Cl,use:wi,useCallback:ao,useContext:Cl,useEffect:Ji,useImperativeHandle:no,useInsertionEffect:Zi,useLayoutEffect:eo,useMemo:io,useReducer:Ei,useRef:Yi,useState:function(){return Ei(Si)},useDebugValue:ro,useDeferredValue:function(e,t){return lo(bi(),ei.memoizedState,e,t)},useTransition:function(){var e=Ei(Si)[0],t=bi().memoizedState;return["boolean"===typeof e?e:xi(e),t]},useSyncExternalStore:_i,useId:mo};_o.useCacheRefresh=go,_o.useMemoCache=ki,_o.useHostTransitionStatus=ho,_o.useFormState=Hi,_o.useActionState=Hi,_o.useOptimistic=function(e,t){return Ri(bi(),0,e,t)};var zo={readContext:Cl,use:wi,useCallback:ao,useContext:Cl,useEffect:Ji,useImperativeHandle:no,useInsertionEffect:Zi,useLayoutEffect:eo,useMemo:io,useReducer:ji,useRef:Yi,useState:function(){return ji(Si)},useDebugValue:ro,useDeferredValue:function(e,t){var n=bi();return null===ei?oo(n,e,t):lo(n,ei.memoizedState,e,t)},useTransition:function(){var e=ji(Si)[0],t=bi().memoizedState;return["boolean"===typeof e?e:xi(e),t]},useSyncExternalStore:_i,useId:mo};function Po(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}zo.useCacheRefresh=go,zo.useMemoCache=ki,zo.useHostTransitionStatus=ho,zo.useFormState=qi,zo.useActionState=qi,zo.useOptimistic=function(e,t){var n=bi();return null!==ei?Ri(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])};var To={isMounted:function(e){return!!(e=e._reactInternals)&&D(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Tu(),a=Fl(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ol(e,a,r))&&(Ou(t,e,r),Nl(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Tu(),a=Fl(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ol(e,a,r))&&(Ou(t,e,r),Nl(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tu(),r=Fl(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=Ol(e,r,n))&&(Ou(t,e,n),Nl(t,e,n))}};function Fo(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!Kn(n,r)||!Kn(a,i))}function Oo(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function No(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=F({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}var Ro="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function Ao(e){Ro(e)}function Lo(e){console.error(e)}function Do(e){Ro(e)}function $o(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function Mo(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function Bo(e,t,n){return(n=Fl(n)).tag=3,n.payload={element:null},n.callback=function(){$o(e,t)},n}function Io(e){return(e=Fl(e)).tag=3,e}function Uo(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var i=r.value;e.payload=function(){return a(i)},e.callback=function(){Mo(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Mo(t,n,r),"function"!==typeof a&&(null===ku?ku=new Set([this]):ku.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ho=Error(o(461)),Wo=!1;function Vo(e,t,n,r){t.child=null===e?ka(t,null,n,r):wa(t,e.child,n,r)}function qo(e,t,n,r,a){n=n.render;var i=t.ref;if("ref"in r){var o={};for(var l in r)"ref"!==l&&(o[l]=r[l])}else o=r;return El(t),r=di(e,t,n,o,i,a),l=mi(),null===e||Wo?(Qr&&l&&qr(t),t.flags|=1,Vo(e,t,r,a),t.child):(gi(e,t,a),fl(e,t,a))}function Go(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Ls(i)||void 0!==i.defaultProps||null!==n.compare?((e=Ms(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Yo(e,t,i,r,a))}if(i=e.child,!pl(e,a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:Kn)(o,r)&&e.ref===t.ref)return fl(e,t,a)}return t.flags|=1,(e=Ds(i,r)).ref=t.ref,e.return=t,t.child=e}function Yo(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(Kn(i,r)&&e.ref===t.ref){if(Wo=!1,t.pendingProps=r=i,!pl(e,a))return t.lanes=e.lanes,fl(e,t,a);0!==(131072&e.flags)&&(Wo=!0)}}return Jo(e,t,n,r,a)}function Ko(e,t,n){var r=t.pendingProps,a=r.children,i=0!==(2&t.stateNode._pendingVisibility),o=null!==e?e.memoizedState:null;if(Xo(e,t),"hidden"===r.mode||i){if(0!==(128&t.flags)){if(r=null!==o?o.baseLanes|n:n,null!==e){for(a=t.child=e.child,i=0;null!==a;)i=i|a.lanes|a.childLanes,a=a.sibling;t.childLanes=i&~r}else t.childLanes=0,t.child=null;return Qo(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Qo(e,t,null!==o?o.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qa(0,null!==o?o.cachePool:null),null!==o?Ca(t,o):ja(),Fa(t)}else null!==o?(Qa(0,o.cachePool),Ca(t,o),Oa(),t.memoizedState=null):(null!==e&&Qa(0,null),ja(),Oa());return Vo(e,t,a,n),t.child}function Qo(e,t,n,r){var a=Ka();return a=null===a?null:{parent:Ma._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Qa(0,null),ja(),Fa(t),null!==e&&kl(e,t,r,!0),null}function Xo(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=2097664);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=2097664)}}function Jo(e,t,n,r,a){return El(t),n=di(e,t,n,r,void 0,a),r=mi(),null===e||Wo?(Qr&&r&&qr(t),t.flags|=1,Vo(e,t,n,a),t.child):(gi(e,t,a),fl(e,t,a))}function Zo(e,t,n,r,a,i){return El(t),t.updateQueue=null,n=pi(t,r,n,a),fi(e),r=mi(),null===e||Wo?(Qr&&r&&qr(t),t.flags|=1,Vo(e,t,n,i),t.child):(gi(e,t,i),fl(e,t,i))}function el(e,t,n,r,a){if(El(t),null===t.stateNode){var i=Or,o=n.contextType;"object"===typeof o&&null!==o&&(i=Cl(o)),i=new n(r,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=To,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},Pl(t),o=n.contextType,i.context="object"===typeof o&&null!==o?Cl(o):Or,i.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(Po(t,n,o,r),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(o=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),o!==i.state&&To.enqueueReplaceState(i,i.state,null),Dl(t,r,i,a),Ll(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;var l=t.memoizedProps,s=No(n,l);i.props=s;var u=i.context,c=n.contextType;o=Or,"object"===typeof c&&null!==c&&(o=Cl(c));var d=n.getDerivedStateFromProps;c="function"===typeof d||"function"===typeof i.getSnapshotBeforeUpdate,l=t.pendingProps!==l,c||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l||u!==o)&&Oo(t,i,r,o),zl=!1;var f=t.memoizedState;i.state=f,Dl(t,r,i,a),Ll(),u=t.memoizedState,l||f!==u||zl?("function"===typeof d&&(Po(t,n,d,r),u=t.memoizedState),(s=zl||Fo(t,n,s,r,f,u,o))?(c||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=o,r=s):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Tl(e,t),c=No(n,o=t.memoizedProps),i.props=c,d=t.pendingProps,f=i.context,u=n.contextType,s=Or,"object"===typeof u&&null!==u&&(s=Cl(u)),(u="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(o!==d||f!==s)&&Oo(t,i,r,s),zl=!1,f=t.memoizedState,i.state=f,Dl(t,r,i,a),Ll();var p=t.memoizedState;o!==d||f!==p||zl||null!==e&&null!==e.dependencies&&Sl(e.dependencies)?("function"===typeof l&&(Po(t,n,l,r),p=t.memoizedState),(c=zl||Fo(t,n,c,r,f,p,s)||null!==e&&null!==e.dependencies&&Sl(e.dependencies))?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,p,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=s,r=c):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Xo(e,t),r=0!==(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,n,a)):Vo(e,t,n,a),t.memoizedState=i.state,e=t.child):e=fl(e,t,a),e}function tl(e,t,n,r){return aa(),t.flags|=256,Vo(e,t,n,r),t.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:Xa()}}function al(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=hu),e}function il(e,t,n){var r,a=t.pendingProps,i=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Ra.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(Qr){if(i?Ta(t):Oa(),Qr){var s,u=Kr;if(s=u){e:{for(s=u,u=Jr;8!==s.nodeType;){if(!u){u=null;break e}if(null===(s=ld(s.nextSibling))){u=null;break e}}u=s}null!==u?(t.memoizedState={dehydrated:u,treeContext:null!==Ir?{id:Ur,overflow:Hr}:null,retryLane:536870912},(s=As(18,null,null,0)).stateNode=u,s.return=t,t.child=s,Yr=t,Kr=null,s=!0):s=!1}s||ea(t)}if(null!==(u=t.memoizedState)&&null!==(u=u.dehydrated))return"$!"===u.data?t.lanes=16:t.lanes=536870912,null;Na(t)}return u=a.children,a=a.fallback,i?(Oa(),u=ll({mode:"hidden",children:u},i=t.mode),a=Bs(a,i,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,(i=t.child).memoizedState=rl(n),i.childLanes=al(e,r,n),t.memoizedState=nl,a):(Ta(t),ol(t,u))}if(null!==(s=e.memoizedState)&&null!==(u=s.dehydrated)){if(l)256&t.flags?(Ta(t),t.flags&=-257,t=sl(e,t,n)):null!==t.memoizedState?(Oa(),t.child=e.child,t.flags|=128,t=null):(Oa(),i=a.fallback,u=t.mode,a=ll({mode:"visible",children:a.children},u),(i=Bs(i,u,n,null)).flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,wa(t,e.child,null,n),(a=t.child).memoizedState=rl(n),a.childLanes=al(e,r,n),t.memoizedState=nl,t=i);else if(Ta(t),"$!"===u.data){if(r=u.nextSibling&&u.nextSibling.dataset)var c=r.dgst;r=c,(a=Error(o(419))).stack="",a.digest=r,ia({value:a,source:null,stack:null}),t=sl(e,t,n)}else if(Wo||kl(e,t,n,!1),r=0!==(n&e.childLanes),Wo||r){if(null!==(r=tu)){if(0!==(42&(a=n&-n)))a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(0!==(a=0!==(a&(r.suspendedLanes|n))?0:a)&&a!==s.retryLane)throw s.retryLane=a,Pr(e,a),Ou(r,e,a),Ho}"$?"===u.data||Wu(),t=sl(e,t,n)}else"$?"===u.data?(t.flags|=128,t.child=e.child,t=lc.bind(null,e),u._reactRetry=t,t=null):(e=s.treeContext,Kr=ld(u.nextSibling),Yr=t,Qr=!0,Xr=null,Jr=!1,null!==e&&(Mr[Br++]=Ur,Mr[Br++]=Hr,Mr[Br++]=Ir,Ur=e.id,Hr=e.overflow,Ir=t),(t=ol(t,a.children)).flags|=4096);return t}return i?(Oa(),i=a.fallback,u=t.mode,c=(s=e.child).sibling,(a=Ds(s,{mode:"hidden",children:a.children})).subtreeFlags=31457280&s.subtreeFlags,null!==c?i=Ds(c,i):(i=Bs(i,u,n,null)).flags|=2,i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,null===(u=e.child.memoizedState)?u=rl(n):(null!==(s=u.cachePool)?(c=Ma._currentValue,s=s.parent!==c?{parent:c,pool:c}:s):s=Xa(),u={baseLanes:u.baseLanes|n,cachePool:s}),i.memoizedState=u,i.childLanes=al(e,r,n),t.memoizedState=nl,a):(Ta(t),e=(n=e.child).sibling,(n=Ds(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function ol(e,t){return(t=ll({mode:"visible",children:t},e.mode)).return=e,e.child=t}function ll(e,t){return Is(e,t,0,null)}function sl(e,t,n){return wa(t,e.child,null,n),(e=ol(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ul(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),xl(e.return,t,n)}function cl(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function dl(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Vo(e,t,r.children,n),0!==(2&(r=Ra.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ul(e,n,t);else if(19===e.tag)ul(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(Y(Ra,r),a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Aa(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),cl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Aa(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}cl(t,!0,n,null,i);break;case"together":cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),du|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(kl(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Ds(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ds(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function pl(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Sl(e))}function hl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Wo=!0;else{if(!pl(e,n)&&0===(128&t.flags))return Wo=!1,function(e,t,n){switch(t.tag){case 3:Z(t,t.stateNode.containerInfo),yl(t,Ma,e.memoizedState.cache),aa();break;case 27:case 5:te(t);break;case 4:Z(t,t.stateNode.containerInfo);break;case 10:yl(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Ta(t),t.flags|=128,null):0!==(n&t.child.childLanes)?il(e,t,n):(Ta(t),null!==(e=fl(e,t,n))?e.sibling:null);Ta(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(kl(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return dl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Y(Ra,Ra.current),r)break;return null;case 22:case 23:return t.lanes=0,Ko(e,t,n);case 24:yl(t,Ma,e.memoizedState.cache)}return fl(e,t,n)}(e,t,n);Wo=0!==(131072&e.flags)}else Wo=!1,Qr&&0!==(1048576&t.flags)&&Vr(t,$r,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,a=r._init;if(r=a(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((a=r.$$typeof)===v){t.tag=11,t=qo(null,t,r,e,n);break e}if(a===x){t.tag=14,t=Go(null,t,r,e,n);break e}}throw t=_(r)||r,Error(o(306,t,""))}Ls(r)?(e=No(r,e),t.tag=1,t=el(null,t,r,e,n)):(t.tag=0,t=Jo(null,t,r,e,n))}return t;case 0:return Jo(e,t,t.type,t.pendingProps,n);case 1:return el(e,t,r=t.type,a=No(r,t.pendingProps),n);case 3:e:{if(Z(t,t.stateNode.containerInfo),null===e)throw Error(o(387));var i=t.pendingProps;r=(a=t.memoizedState).element,Tl(e,t),Dl(t,i,null,n);var l=t.memoizedState;if(i=l.cache,yl(t,Ma,i),i!==a.cache&&wl(t,[Ma],n,!0),Ll(),i=l.element,a.isDehydrated){if(a={element:i,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=tl(e,t,i,n);break e}if(i!==r){ia(r=Rr(Error(o(424)),t)),t=tl(e,t,i,n);break e}for(Kr=ld(t.stateNode.containerInfo.firstChild),Yr=t,Qr=!0,Xr=null,Jr=!0,n=ka(t,null,i,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(aa(),i===r){t=fl(e,t,n);break e}Vo(e,t,i,n)}t=t.child}return t;case 26:return Xo(e,t),null===e?(n=gd(t.type,null,t.pendingProps,null))?t.memoizedState=n:Qr||(n=t.type,e=t.pendingProps,(r=Kc(X.current).createElement(n))[$e]=t,r[Me]=e,qc(r,n,e),Xe(r),t.stateNode=r):t.memoizedState=gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return te(t),null===e&&Qr&&(r=t.stateNode=ud(t.type,t.pendingProps,X.current),Yr=t,Jr=!0,Kr=ld(r.firstChild)),r=t.pendingProps.children,null!==e||Qr?Vo(e,t,r,n):t.child=wa(t,null,r,n),Xo(e,t),t.child;case 5:return null===e&&Qr&&((a=r=Kr)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ve])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(null==a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===i)return e}if(null===(e=ld(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,Jr))?(t.stateNode=r,Yr=t,Kr=ld(r.firstChild),Jr=!1,a=!0):a=!1),a||ea(t)),te(t),a=t.type,i=t.pendingProps,l=null!==e?e.memoizedProps:null,r=i.children,Jc(a,i)?r=null:null!==l&&Jc(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=di(e,t,hi,null,null,n),Ld._currentValue=a),Xo(e,t),Vo(e,t,r,n),t.child;case 6:return null===e&&Qr&&((e=n=Kr)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=ld(e.nextSibling)))return null}return e}(n,t.pendingProps,Jr))?(t.stateNode=n,Yr=t,Kr=null,e=!0):e=!1),e||ea(t)),null;case 13:return il(e,t,n);case 4:return Z(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wa(t,null,r,n):Vo(e,t,r,n),t.child;case 11:return qo(e,t,t.type,t.pendingProps,n);case 7:return Vo(e,t,t.pendingProps,n),t.child;case 8:case 12:return Vo(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,yl(t,t.type,r.value),Vo(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,El(t),r=r(a=Cl(a)),t.flags|=1,Vo(e,t,r,n),t.child;case 14:return Go(e,t,t.type,t.pendingProps,n);case 15:return Yo(e,t,t.type,t.pendingProps,n);case 19:return dl(e,t,n);case 22:return Ko(e,t,n);case 24:return El(t),r=Cl(Ma),null===e?(null===(a=Ka())&&(a=tu,i=Ba(),a.pooledCache=i,i.refCount++,null!==i&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:r,cache:a},Pl(t),yl(t,Ma,a)):(0!==(e.lanes&n)&&(Tl(e,t),Dl(t,null,null,n),Ll()),a=e.memoizedState,i=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),yl(t,Ma,r)):(r=i.cache,yl(t,Ma,r),r!==a.cache&&wl(t,[Ma],n,!0))),Vo(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}var ml=q(null),gl=null,vl=null;function yl(e,t,n){Y(ml,t._currentValue),t._currentValue=n}function bl(e){e._currentValue=ml.current,G(ml)}function xl(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wl(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var i=a.dependencies;if(null!==i){var l=a.child;i=i.firstContext;e:for(;null!==i;){var s=i;i=a;for(var u=0;u<t.length;u++)if(s.context===t[u]){i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),xl(i.return,n,e),r||(l=null);break e}i=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(o(341));l.lanes|=n,null!==(i=l.alternate)&&(i.lanes|=n),xl(l,n,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function kl(e,t,n,r){e=null;for(var a=t,i=!1;null!==a;){if(!i)if(0!==(524288&a.flags))i=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(o(387));if(null!==(l=l.memoizedProps)){var s=a.type;Yn(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===J.current){if(null===(l=a.alternate))throw Error(o(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(Ld):e=[Ld])}a=a.return}null!==e&&wl(t,e,n,r),t.flags|=262144}function Sl(e){for(e=e.firstContext;null!==e;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function El(e){gl=e,vl=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Cl(e){return _l(gl,e)}function jl(e,t){return null===gl&&El(e),_l(e,t)}function _l(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===vl){if(null===e)throw Error(o(308));vl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vl=vl.next=t;return n}var zl=!1;function Pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ol(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&eu)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Fr(e),Tr(e,null,n),t}return _r(e,r,t,n),Fr(e)}function Nl(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194176&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}function Rl(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Al=!1;function Ll(){if(Al){if(null!==Va)throw Va}}function Dl(e,t,n,r){Al=!1;var a=e.updateQueue;zl=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===o?i=u:o.next=u,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,c=u=s=null,l=i;;){var f=-536870913&l.lane,p=f!==l.lane;if(p?(ru&f)===f:(r&f)===f){0!==f&&f===Wa&&(Al=!0),null!==c&&(c=c.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,m=l;f=t;var g=n;switch(m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(g,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(g,d,f):h)||void 0===f)break e;d=F({},d,f);break e;case 2:zl=!0}}null!==(f=l.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=a.callbacks)?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,o|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(p=l).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null===i&&(a.shared.lanes=0),du|=o,e.lanes=o,e.memoizedState=d}}function $l(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function Ml(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)$l(n[e],t)}function Bl(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var i=n.create,o=n.inst;r=i(),o.destroy=r}n=n.next}while(n!==a)}}catch(l){rc(t,t.return,l)}}function Il(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var i=a.next;r=i;do{if((r.tag&e)===e){var o=r.inst,l=o.destroy;if(void 0!==l){o.destroy=void 0,a=t;var s=n;try{l()}catch(u){rc(a,s,u)}}}r=r.next}while(r!==i)}}catch(u){rc(t,t.return,u)}}function Ul(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{Ml(t,n)}catch(r){rc(e,e.return,r)}}}function Hl(e,t,n){n.props=No(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){rc(e,t,r)}}function Wl(e,t){try{var n=e.ref;if(null!==n){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var a=r;break;default:a=r}"function"===typeof n?e.refCleanup=n(a):n.current=a}}catch(i){rc(e,t,i)}}function Vl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){rc(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){rc(e,t,i)}else n.current=null}function ql(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){rc(e,e.return,a)}}function Gl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,l=null,s=null,u=null,c=null,d=null;for(h in n){var f=n[h];if(n.hasOwnProperty(h)&&null!=f)switch(h){case"checked":case"value":break;case"defaultValue":u=f;default:r.hasOwnProperty(h)||Wc(e,t,h,null,r,f)}}for(var p in r){var h=r[p];if(f=n[p],r.hasOwnProperty(p)&&(null!=h||null!=f))switch(p){case"type":i=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":l=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:h!==f&&Wc(e,t,p,h,r,f)}}return void gt(e,l,s,u,c,d,i,a);case"select":for(i in h=l=s=p=null,n)if(u=n[i],n.hasOwnProperty(i)&&null!=u)switch(i){case"value":break;case"multiple":h=u;default:r.hasOwnProperty(i)||Wc(e,t,i,null,r,u)}for(a in r)if(i=r[a],u=n[a],r.hasOwnProperty(a)&&(null!=i||null!=u))switch(a){case"value":p=i;break;case"defaultValue":s=i;break;case"multiple":l=i;default:i!==u&&Wc(e,t,a,i,r,u)}return t=s,n=l,r=h,void(null!=p?bt(e,!!n,p,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(s in h=p=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Wc(e,t,s,null,r,a)}for(l in r)if(a=r[l],i=n[l],r.hasOwnProperty(l)&&(null!=a||null!=i))switch(l){case"value":p=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(o(91));break;default:a!==i&&Wc(e,t,l,a,r,i)}return void xt(e,p,h);case"option":for(var m in n)if(p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Wc(e,t,m,null,r,p);for(u in r)if(p=r[u],h=n[u],r.hasOwnProperty(u)&&p!==h&&(null!=p||null!=h))if("selected"===u)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Wc(e,t,u,p,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&Wc(e,t,g,null,r,p);for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:Wc(e,t,c,p,r,h)}return;default:if(jt(t)){for(var v in n)p=n[v],n.hasOwnProperty(v)&&void 0!==p&&!r.hasOwnProperty(v)&&Vc(e,t,v,void 0,r,p);for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||void 0===p&&void 0===h||Vc(e,t,d,p,r,h);return}}for(var y in n)p=n[y],n.hasOwnProperty(y)&&null!=p&&!r.hasOwnProperty(y)&&Wc(e,t,y,null,r,p);for(f in r)p=r[f],h=n[f],!r.hasOwnProperty(f)||p===h||null==p&&null==h||Wc(e,t,f,p,r,h)}(r,e.type,n,t),r[Me]=t}catch(a){rc(e,e.return,a)}}function Yl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag||4===e.tag}function Kl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Yl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&27!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Ql(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Hc));else if(4!==r&&27!==r&&null!==(e=e.child))for(Ql(e,t,n),e=e.sibling;null!==e;)Ql(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&27!==r&&null!==(e=e.child))for(Xl(e,t,n),e=e.sibling;null!==e;)Xl(e,t,n),e=e.sibling}var Jl=!1,Zl=!1,es=!1,ts="function"===typeof WeakSet?WeakSet:Set,ns=null,rs=!1;function as(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:vs(e,n),4&r&&Bl(5,n);break;case 1:if(vs(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(l){rc(n,n.return,l)}else{var a=No(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){rc(n,n.return,s)}}64&r&&Ul(n),512&r&&Wl(n,n.return);break;case 3:if(vs(e,n),64&r&&null!==(r=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:e=n.child.stateNode}try{Ml(r,e)}catch(l){rc(n,n.return,l)}}break;case 26:vs(e,n),512&r&&Wl(n,n.return);break;case 27:case 5:vs(e,n),null===t&&4&r&&ql(n),512&r&&Wl(n,n.return);break;case 12:default:vs(e,n);break;case 13:vs(e,n),4&r&&cs(e,n);break;case 22:if(!(a=null!==n.memoizedState||Jl)){t=null!==t&&null!==t.memoizedState||Zl;var i=Jl,o=Zl;Jl=a,(Zl=t)&&!o?bs(e,n,0!==(8772&n.subtreeFlags)):vs(e,n),Jl=i,Zl=o}512&r&&("manual"===n.memoizedProps.mode?Wl(n,n.return):Vl(n,n.return))}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var os=null,ls=!1;function ss(e,t,n){for(n=n.child;null!==n;)us(e,t,n),n=n.sibling}function us(e,t,n){if(ye&&"function"===typeof ye.onCommitFiberUnmount)try{ye.onCommitFiberUnmount(ve,n)}catch(o){}switch(n.tag){case 26:Zl||Vl(n,t),ss(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Zl||Vl(n,t);var r=os,a=ls;for(os=n.stateNode,ss(e,t,n),t=(n=n.stateNode).attributes;t.length;)n.removeAttributeNode(t[0]);qe(n),os=r,ls=a;break;case 5:Zl||Vl(n,t);case 6:a=os;var i=ls;if(os=null,ss(e,t,n),ls=i,null!==(os=a))if(ls)try{e=os,r=n.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)}catch(l){rc(n,t,l)}else try{os.removeChild(n.stateNode)}catch(l){rc(n,t,l)}break;case 18:null!==os&&(ls?(t=os,n=n.stateNode,8===t.nodeType?id(t.parentNode,n):1===t.nodeType&&id(t,n),gf(t)):id(os,n.stateNode));break;case 4:r=os,a=ls,os=n.stateNode.containerInfo,ls=!0,ss(e,t,n),os=r,ls=a;break;case 0:case 11:case 14:case 15:Zl||Il(2,n,t),Zl||Il(4,n,t),ss(e,t,n);break;case 1:Zl||(Vl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&Hl(n,t,r)),ss(e,t,n);break;case 21:ss(e,t,n);break;case 22:Zl||Vl(n,t),Zl=(r=Zl)||null!==n.memoizedState,ss(e,t,n),Zl=r;break;default:ss(e,t,n)}}function cs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{gf(e)}catch(n){rc(t,t.return,n)}}function ds(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new ts),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new ts),t;default:throw Error(o(435,e.tag))}}(e);t.forEach((function(t){var r=sc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function fs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:case 5:os=s.stateNode,ls=!1;break e;case 3:case 4:os=s.stateNode.containerInfo,ls=!0;break e}s=s.return}if(null===os)throw Error(o(160));us(i,l,a),os=null,ls=!1,null!==(i=a.alternate)&&(i.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)hs(t,e),t=t.sibling}var ps=null;function hs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fs(t,e),ms(e),4&r&&(Il(3,e,e.return),Bl(3,e),Il(5,e,e.return));break;case 1:fs(t,e),ms(e),512&r&&(Zl||null===n||Vl(n,n.return)),64&r&&Jl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=ps;if(fs(t,e),ms(e),512&r&&(Zl||null===n||Vl(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(i=a.getElementsByTagName("title")[0])||i[Ve]||i[$e]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=a.createElement(r),a.head.insertBefore(i,a.querySelector("head > title"))),qc(i,r,n),i[$e]=e,Xe(i),r=i;break e;case"link":var l=_d("link","href",a).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((i=l[s]).getAttribute("href")===(null==n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}qc(i=a.createElement(r),r,n),a.head.appendChild(i);break;case"meta":if(l=_d("meta","content",a).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((i=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}qc(i=a.createElement(r),r,n),a.head.appendChild(i);break;default:throw Error(o(468,r))}i[$e]=e,Xe(i),r=i}e.stateNode=r}else zd(a,e.type,e.stateNode);else e.stateNode=kd(a,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?zd(a,e.type,e.stateNode):kd(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&Gl(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(4&r&&null===e.alternate){a=e.stateNode,i=e.memoizedProps;try{for(var u=a.firstChild;u;){var c=u.nextSibling,d=u.nodeName;u[Ve]||"HEAD"===d||"BODY"===d||"SCRIPT"===d||"STYLE"===d||"LINK"===d&&"stylesheet"===u.rel.toLowerCase()||a.removeChild(u),u=c}for(var f=e.type,p=a.attributes;p.length;)a.removeAttributeNode(p[0]);qc(a,f,i),a[$e]=e,a[Me]=i}catch(m){rc(e,e.return,m)}}case 5:if(fs(t,e),ms(e),512&r&&(Zl||null===n||Vl(n,n.return)),32&e.flags){a=e.stateNode;try{kt(a,"")}catch(m){rc(e,e.return,m)}}4&r&&null!=e.stateNode&&Gl(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(es=!0);break;case 6:if(fs(t,e),ms(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){rc(e,e.return,m)}}break;case 3:if(jd=null,a=ps,ps=fd(t.containerInfo),fs(t,e),ps=a,ms(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{gf(t.containerInfo)}catch(m){rc(e,e.return,m)}es&&(es=!1,gs(e));break;case 4:r=ps,ps=fd(e.stateNode.containerInfo),fs(t,e),ms(e),ps=r;break;case 12:fs(t,e),ms(e);break;case 13:fs(t,e),ms(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(bu=se()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,ds(e,r)));break;case 22:if(512&r&&(Zl||null===n||Vl(n,n.return)),u=null!==e.memoizedState,c=null!==n&&null!==n.memoizedState,Jl=(d=Jl)||u,Zl=(f=Zl)||c,fs(t,e),Zl=f,Jl=d,ms(e),(t=e.stateNode)._current=e,t._visibility&=-3,t._visibility|=2&t._pendingVisibility,8192&r&&(t._visibility=u?-2&t._visibility:1|t._visibility,u&&(t=Jl||Zl,null===n||c||t||ys(e)),null===e.memoizedProps||"manual"!==e.memoizedProps.mode))e:for(n=null,t=e;;){if(5===t.tag||26===t.tag||27===t.tag){if(null===n){c=n=t;try{if(a=c.stateNode,u)"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none";else{l=c.stateNode;var h=void 0!==(s=c.memoizedProps.style)&&null!==s&&s.hasOwnProperty("display")?s.display:null;l.style.display=null==h||"boolean"===typeof h?"":(""+h).trim()}}catch(m){rc(c,c.return,m)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){rc(c,c.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,ds(e,n))));break;case 19:fs(t,e),ms(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,ds(e,r)));break;case 21:break;default:fs(t,e),ms(e)}}function ms(e){var t=e.flags;if(2&t){try{if(27!==e.tag){e:{for(var n=e.return;null!==n;){if(Yl(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 27:var a=r.stateNode;Xl(e,Kl(e),a);break;case 5:var i=r.stateNode;32&r.flags&&(kt(i,""),r.flags&=-33),Xl(e,Kl(e),i);break;case 3:case 4:var l=r.stateNode.containerInfo;Ql(e,Kl(e),l);break;default:throw Error(o(161))}}}catch(s){rc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function gs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;gs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function vs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)as(e,t.alternate,t),t=t.sibling}function ys(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Il(4,t,t.return),ys(t);break;case 1:Vl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&Hl(t,t.return,n),ys(t);break;case 26:case 27:case 5:Vl(t,t.return),ys(t);break;case 22:Vl(t,t.return),null===t.memoizedState&&ys(t);break;default:ys(t)}e=e.sibling}}function bs(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:bs(a,i,n),Bl(4,i);break;case 1:if(bs(a,i,n),"function"===typeof(a=(r=i).stateNode).componentDidMount)try{a.componentDidMount()}catch(u){rc(r,r.return,u)}if(null!==(a=(r=i).updateQueue)){var l=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)$l(s[a],l)}catch(u){rc(r,r.return,u)}}n&&64&o&&Ul(i),Wl(i,i.return);break;case 26:case 27:case 5:bs(a,i,n),n&&null===r&&4&o&&ql(i),Wl(i,i.return);break;case 12:default:bs(a,i,n);break;case 13:bs(a,i,n),n&&4&o&&cs(a,i);break;case 22:null===i.memoizedState&&bs(a,i,n),Wl(i,i.return)}t=t.sibling}}function xs(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ia(n))}function ws(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ia(e))}function ks(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Ss(e,t,n,r),t=t.sibling}function Ss(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ks(e,t,n,r),2048&a&&Bl(9,t);break;case 3:ks(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ia(e)));break;case 12:if(2048&a){ks(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,l=i.onPostCommit;"function"===typeof l&&l(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){rc(t,t.return,s)}}else ks(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,null!==t.memoizedState?4&i._visibility?ks(e,t,n,r):Cs(e,t):4&i._visibility?ks(e,t,n,r):(i._visibility|=4,Es(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&a&&xs(t.alternate,t);break;case 24:ks(e,t,n,r),2048&a&&ws(t.alternate,t);break;default:ks(e,t,n,r)}}function Es(e,t,n,r,a){for(a=a&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var i=e,o=t,l=n,s=r,u=o.flags;switch(o.tag){case 0:case 11:case 15:Es(i,o,l,s,a),Bl(8,o);break;case 23:break;case 22:var c=o.stateNode;null!==o.memoizedState?4&c._visibility?Es(i,o,l,s,a):Cs(i,o):(c._visibility|=4,Es(i,o,l,s,a)),a&&2048&u&&xs(o.alternate,o);break;case 24:Es(i,o,l,s,a),a&&2048&u&&ws(o.alternate,o);break;default:Es(i,o,l,s,a)}t=t.sibling}}function Cs(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Cs(n,r),2048&a&&xs(r.alternate,r);break;case 24:Cs(n,r),2048&a&&ws(r.alternate,r);break;default:Cs(n,r)}t=t.sibling}}var js=8192;function _s(e){if(e.subtreeFlags&js)for(e=e.child;null!==e;)zs(e),e=e.sibling}function zs(e){switch(e.tag){case 26:_s(e),e.flags&js&&null!==e.memoizedState&&function(e,t,n){if(null===Td)throw Error(o(475));var r=Td;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var a=vd(n.href),i=e.querySelector(yd(a));if(i)return null!==(e=i._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Od.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=i,void Xe(i);i=e.ownerDocument||e,n=bd(n),(a=cd.get(a))&&Ed(n,a),Xe(i=i.createElement("link"));var l=i;l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),qc(i,"link",n),t.instance=i}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Od.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(ps,e.memoizedState,e.memoizedProps);break;case 5:default:_s(e);break;case 3:case 4:var t=ps;ps=fd(e.stateNode.containerInfo),_s(e),ps=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=js,js=16777216,_s(e),js=t):_s(e))}}function Ps(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Ts(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ns=r,Ns(r,e)}Ps(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Fs(e),e=e.sibling}function Fs(e){switch(e.tag){case 0:case 11:case 15:Ts(e),2048&e.flags&&Il(9,e,e.return);break;case 3:case 12:default:Ts(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&4&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-5,Os(e)):Ts(e)}}function Os(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ns=r,Ns(r,e)}Ps(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Il(8,t,t.return),Os(t);break;case 22:4&(n=t.stateNode)._visibility&&(n._visibility&=-5,Os(t));break;default:Os(t)}e=e.sibling}}function Ns(e,t){for(;null!==ns;){var n=ns;switch(n.tag){case 0:case 11:case 15:Il(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Ia(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,ns=r;else e:for(n=e;null!==ns;){var a=(r=ns).sibling,i=r.return;if(is(r),r===n){ns=null;break e}if(null!==a){a.return=i,ns=a;break e}ns=i}}}function Rs(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function As(e,t,n,r){return new Rs(e,t,n,r)}function Ls(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ds(e,t){var n=e.alternate;return null===n?((n=As(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=31457280&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function $s(e,t){e.flags&=31457282;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ms(e,t,n,r,a,i){var l=0;if(r=e,"function"===typeof e)Ls(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,K.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case d:return Bs(n.children,a,i,t);case f:l=8,a|=24;break;case p:return(e=As(12,n,t,2|a)).elementType=p,e.lanes=i,e;case y:return(e=As(13,n,t,a)).elementType=y,e.lanes=i,e;case b:return(e=As(19,n,t,a)).elementType=b,e.lanes=i,e;case k:return Is(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case h:case g:l=10;break e;case m:l=9;break e;case v:l=11;break e;case x:l=14;break e;case w:l=16,r=null;break e}l=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=As(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Bs(e,t,n,r){return(e=As(7,e,r,t)).lanes=n,e}function Is(e,t,n,r){(e=As(22,e,r,t)).elementType=k,e.lanes=n;var a={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=a._current;if(null===e)throw Error(o(456));if(0===(2&a._pendingVisibility)){var t=Pr(e,2);null!==t&&(a._pendingVisibility|=2,Ou(t,e,2))}},attach:function(){var e=a._current;if(null===e)throw Error(o(456));if(0!==(2&a._pendingVisibility)){var t=Pr(e,2);null!==t&&(a._pendingVisibility&=-3,Ou(t,e,2))}}};return e.stateNode=a,e}function Us(e,t,n){return(e=As(6,e,null,t)).lanes=n,e}function Hs(e,t,n){return(t=As(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ws(e){e.flags|=4}function Vs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Pd(t)){if(null!==(t=za.current)&&((4194176&ru)===ru?null!==Pa:(62914560&ru)!==ru&&0===(536870912&ru)||t!==Pa))throw fa=sa,la;e.flags|=8192}}function qs(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Te():536870912,e.lanes|=t,mu|=t)}function Gs(e,t){if(!Qr)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ys(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=31457280&a.subtreeFlags,r|=31457280&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ks(e,t,n){var r=t.pendingProps;switch(Gr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return Ys(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),bl(Ma),ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ra(t)?Ws(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==Xr&&(Ru(Xr),Xr=null))),Ys(t),null;case 26:return n=t.memoizedState,null===e?(Ws(t),null!==n?(Ys(t),Vs(t,n)):(Ys(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Ws(t),Ys(t),Vs(t,n)):(Ys(t),t.flags&=-16777217):(e.memoizedProps!==r&&Ws(t),Ys(t),t.flags&=-16777217),null;case 27:ne(t),n=X.current;var a=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Ws(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ys(t),null}e=K.current,ra(t)?ta(t):(e=ud(a,r,n),t.stateNode=e,Ws(t))}return Ys(t),null;case 5:if(ne(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Ws(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ys(t),null}if(e=K.current,ra(t))ta(t);else{switch(a=Kc(X.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?a.createElement(n,{is:r.is}):a.createElement(n)}}e[$e]=t,e[Me]=r;e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode);else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;null===a.sibling;){if(null===a.return||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(qc(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ws(t)}}return Ys(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Ws(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=X.current,ra(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=Yr))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[$e]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Uc(e.nodeValue,n)))||ea(t)}else(e=Kc(e).createTextNode(r))[$e]=t,t.stateNode=e}return Ys(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ra(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[$e]=t}else aa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ys(t),a=!1}else null!==Xr&&(Ru(Xr),Xr=null),a=!0;if(!a)return 256&t.flags?(Na(t),t):(Na(t),null)}if(Na(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool);var i=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),qs(t,t.updateQueue),Ys(t),null;case 4:return ee(),null===e&&Oc(t.stateNode.containerInfo),Ys(t),null;case 10:return bl(t.type),Ys(t),null;case 19:if(G(Ra),null===(a=t.memoizedState))return Ys(t),null;if(r=0!==(128&t.flags),null===(i=a.rendering))if(r)Gs(a,!1);else{if(0!==cu||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=Aa(e))){for(t.flags|=128,Gs(a,!1),e=i.updateQueue,t.updateQueue=e,qs(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)$s(n,e),n=n.sibling;return Y(Ra,1&Ra.current|2),t.child}e=e.sibling}null!==a.tail&&se()>xu&&(t.flags|=128,r=!0,Gs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Aa(i))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,qs(t,e),Gs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!i.alternate&&!Qr)return Ys(t),null}else 2*se()-a.renderingStartTime>xu&&536870912!==n&&(t.flags|=128,r=!0,Gs(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=a.last)?e.sibling=i:t.child=i,a.last=i)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=se(),t.sibling=null,e=Ra.current,Y(Ra,r?1&e|2:1&e),t):(Ys(t),null);case 22:case 23:return Na(t),_a(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(Ys(t),6&t.subtreeFlags&&(t.flags|=8192)):Ys(t),null!==(n=t.updateQueue)&&qs(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&G(Ya),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),bl(Ma),Ys(t),null;case 25:return null}throw Error(o(156,t.tag))}function Qs(e,t){switch(Gr(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return bl(Ma),ee(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return ne(t),null;case 13:if(Na(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));aa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return G(Ra),null;case 4:return ee(),null;case 10:return bl(t.type),null;case 22:case 23:return Na(t),_a(),null!==e&&G(Ya),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return bl(Ma),null;default:return null}}function Xs(e,t){switch(Gr(t),t.tag){case 3:bl(Ma),ee();break;case 26:case 27:case 5:ne(t);break;case 4:ee();break;case 13:Na(t);break;case 19:G(Ra);break;case 10:bl(t.type);break;case 22:case 23:Na(t),_a(),null!==e&&G(Ya);break;case 24:bl(Ma)}}var Js={getCacheForType:function(e){var t=Cl(Ma),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},Zs="function"===typeof WeakMap?WeakMap:Map,eu=0,tu=null,nu=null,ru=0,au=0,iu=null,ou=!1,lu=!1,su=!1,uu=0,cu=0,du=0,fu=0,pu=0,hu=0,mu=0,gu=null,vu=null,yu=!1,bu=0,xu=1/0,wu=null,ku=null,Su=!1,Eu=null,Cu=0,ju=0,_u=null,zu=0,Pu=null;function Tu(){if(0!==(2&eu)&&0!==ru)return ru&-ru;if(null!==T.T){return 0!==Wa?Wa:wc()}return Le()}function Fu(){0===hu&&(hu=0===(536870912&ru)||Qr?Pe():536870912);var e=za.current;return null!==e&&(e.flags|=32),hu}function Ou(e,t,n){(e===tu&&2===au||null!==e.cancelPendingCommit)&&(Bu(e,0),Du(e,ru,hu,!1)),Oe(e,n),0!==(2&eu)&&e===tu||(e===tu&&(0===(2&eu)&&(fu|=n),4===cu&&Du(e,ru,hu,!1)),mc(e))}function Nu(e,t,n){if(0!==(6&eu))throw Error(o(327));for(var r=!n&&0===(60&t)&&0===(t&e.expiredLanes)||_e(e,t),a=r?function(e,t){var n=eu;eu|=2;var r=Uu(),a=Hu();tu!==e||ru!==t?(wu=null,xu=se()+500,Bu(e,t)):lu=_e(e,t);e:for(;;)try{if(0!==au&&null!==nu){t=nu;var i=iu;t:switch(au){case 1:au=0,iu=null,Qu(e,t,i,1);break;case 2:if(ua(i)){au=0,iu=null,Ku(t);break}t=function(){2===au&&tu===e&&(au=7),mc(e)},i.then(t,t);break e;case 3:au=7;break e;case 4:au=5;break e;case 7:ua(i)?(au=0,iu=null,Ku(t)):(au=0,iu=null,Qu(e,t,i,7));break;case 5:var l=null;switch(nu.tag){case 26:l=nu.memoizedState;case 5:case 27:var s=nu;if(!l||Pd(l)){au=0,iu=null;var u=s.sibling;if(null!==u)nu=u;else{var c=s.return;null!==c?(nu=c,Xu(c)):nu=null}break t}}au=0,iu=null,Qu(e,t,i,5);break;case 6:au=0,iu=null,Qu(e,t,i,6);break;case 8:Mu(),cu=6;break e;default:throw Error(o(462))}}Gu();break}catch(d){Iu(e,d)}return vl=gl=null,T.H=r,T.A=a,eu=n,null!==nu?0:(tu=null,ru=0,jr(),cu)}(e,t):Vu(e,t,!0),i=r;;){if(0===a){lu&&!r&&Du(e,t,0,!1);break}if(6===a)Du(e,t,0,!ou);else{if(n=e.current.alternate,i&&!Lu(n)){a=Vu(e,t,!1),i=!1;continue}if(2===a){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=gu;var u=s.current.memoizedState.isDehydrated;if(u&&(Bu(s,l).flags|=256),2!==(l=Vu(s,l,!1))){if(su&&!u){s.errorRecoveryDisabledLanes|=i,fu|=i,a=4;break e}i=vu,vu=a,null!==i&&Ru(i)}a=l}if(i=!1,2!==a)continue}}if(1===a){Bu(e,0),Du(e,t,0,!0);break}e:{switch(r=e,a){case 0:case 1:throw Error(o(345));case 4:if((4194176&t)===t){Du(r,t,hu,!ou);break e}break;case 2:vu=null;break;case 3:case 5:break;default:throw Error(o(329))}if(r.finishedWork=n,r.finishedLanes=t,(62914560&t)===t&&10<(i=bu+300-se())){if(Du(r,t,hu,!ou),0!==je(r,0))break e;r.timeoutHandle=ed(Au.bind(null,r,n,vu,wu,yu,t,hu,fu,mu,ou,2,-0,0),i)}else Au(r,n,vu,wu,yu,t,hu,fu,mu,ou,0,-0,0)}}break}mc(e)}function Ru(e){null===vu?vu=e:vu.push.apply(vu,e)}function Au(e,t,n,r,a,i,l,s,u,c,d,f,p){var h=t.subtreeFlags;if((8192&h||16785408===(16785408&h))&&(Td={stylesheets:null,count:0,unsuspend:Fd},zs(t),null!==(t=function(){if(null===Td)throw Error(o(475));var e=Td;return e.stylesheets&&0===e.count&&Rd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Rd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=t(Zu.bind(null,e,n,r,a,l,s,u,1,f,p)),void Du(e,i,l,!c);Zu(e,n,r,a,l,s,u,d,f,p)}function Lu(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Yn(i(),a))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Du(e,t,n,r){t&=~pu,t&=~fu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var i=31-xe(a),o=1<<i;r[i]=-1,a&=~o}0!==n&&Ne(e,n,t)}function $u(){return 0!==(6&eu)||(gc(0,!1),!1)}function Mu(){if(null!==nu){if(0===au)var e=nu.return;else vl=gl=null,vi(e=nu),ha=null,ma=0,e=nu;for(;null!==e;)Xs(e.alternate,e),e=e.return;nu=null}}function Bu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,td(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Mu(),tu=e,nu=n=Ds(e.current,null),ru=t,au=0,iu=null,ou=!1,lu=_e(e,t),su=!1,mu=hu=pu=fu=du=cu=0,vu=gu=null,yu=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-xe(r),i=1<<a;t|=e[a],r&=~i}return uu=t,jr(),n}function Iu(e,t){Za=null,T.H=Co,t===oa?(t=pa(),au=3):t===la?(t=pa(),au=4):au=t===Ho?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,iu=t,null===nu&&(cu=1,$o(e,Rr(t,e.current)))}function Uu(){var e=T.H;return T.H=Co,null===e?Co:e}function Hu(){var e=T.A;return T.A=Js,e}function Wu(){cu=4,ou||(4194176&ru)!==ru&&null!==za.current||(lu=!0),0===(134217727&du)&&0===(134217727&fu)||null===tu||Du(tu,ru,hu,!1)}function Vu(e,t,n){var r=eu;eu|=2;var a=Uu(),i=Hu();tu===e&&ru===t||(wu=null,Bu(e,t)),t=!1;var o=cu;e:for(;;)try{if(0!==au&&null!==nu){var l=nu,s=iu;switch(au){case 8:Mu(),o=6;break e;case 3:case 2:case 6:null===za.current&&(t=!0);var u=au;if(au=0,iu=null,Qu(e,l,s,u),n&&lu){o=0;break e}break;default:u=au,au=0,iu=null,Qu(e,l,s,u)}}qu(),o=cu;break}catch(c){Iu(e,c)}return t&&e.shellSuspendCounter++,vl=gl=null,eu=r,T.H=a,T.A=i,null===nu&&(tu=null,ru=0,jr()),o}function qu(){for(;null!==nu;)Yu(nu)}function Gu(){for(;null!==nu&&!oe();)Yu(nu)}function Yu(e){var t=hl(e.alternate,e,uu);e.memoizedProps=e.pendingProps,null===t?Xu(e):nu=t}function Ku(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zo(n,t,t.pendingProps,t.type,void 0,ru);break;case 11:t=Zo(n,t,t.pendingProps,t.type.render,t.ref,ru);break;case 5:vi(t);default:Xs(n,t),t=hl(n,t=nu=$s(t,uu),uu)}e.memoizedProps=e.pendingProps,null===t?Xu(e):nu=t}function Qu(e,t,n,r){vl=gl=null,vi(t),ha=null,ma=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&kl(t,n,a,!0),null!==(n=za.current)){switch(n.tag){case 13:return null===Pa?Wu():null===n.alternate&&0===cu&&(cu=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===sa?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),ac(e,r,a)),!1;case 22:return n.flags|=65536,r===sa?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),ac(e,r,a)),!1}throw Error(o(435,n.tag))}return ac(e,r,a),Wu(),!1}if(Qr)return null!==(t=za.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Zr&&ia(Rr(e=Error(o(422),{cause:r}),n))):(r!==Zr&&ia(Rr(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Rr(r,n),Rl(e,a=Bo(e.stateNode,r,a)),4!==cu&&(cu=2)),!1;var i=Error(o(520),{cause:r});if(i=Rr(i,n),null===gu?gu=[i]:gu.push(i),4!==cu&&(cu=2),null===t)return!0;r=Rr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,Rl(n,e=Bo(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===ku||!ku.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,Uo(a=Io(a),e,n,r),Rl(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,ru))return cu=1,$o(e,Rr(n,e.current)),void(nu=null)}catch(i){if(null!==a)throw nu=a,i;return cu=1,$o(e,Rr(n,e.current)),void(nu=null)}32768&t.flags?(Qr||1===r?e=!0:lu||0!==(536870912&ru)?e=!1:(ou=e=!0,(2===r||3===r||6===r)&&(null!==(r=za.current)&&13===r.tag&&(r.flags|=16384))),Ju(t,e)):Xu(t)}function Xu(e){var t=e;do{if(0!==(32768&t.flags))return void Ju(t,ou);e=t.return;var n=Ks(t.alternate,t,uu);if(null!==n)return void(nu=n);if(null!==(t=t.sibling))return void(nu=t);nu=t=e}while(null!==t);0===cu&&(cu=5)}function Ju(e,t){do{var n=Qs(e.alternate,e);if(null!==n)return n.flags&=32767,void(nu=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(nu=e);nu=e=n}while(null!==e);cu=6,nu=null}function Zu(e,t,n,r,a,i,l,s,u,c){var d=T.T,f=U.p;try{U.p=2,T.T=null,function(e,t,n,r,a,i,l,s){do{tc()}while(null!==Eu);if(0!==(6&eu))throw Error(o(327));var u=e.finishedWork;if(r=e.finishedLanes,null===u)return null;if(e.finishedWork=null,e.finishedLanes=0,u===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var c=u.lanes|u.childLanes;if(function(e,t,n,r,a,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(n=o&~n;0<n;){var c=31-xe(n),d=1<<c;l[c]=0,s[c]=-1;var f=u[c];if(null!==f)for(u[c]=null,c=0;c<f.length;c++){var p=f[c];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&Ne(e,r,0),0!==i&&0===a&&0!==e.tag&&(e.suspendedLanes|=i&~(o&~t))}(e,r,c|=Cr,i,l,s),e===tu&&(nu=tu=null,ru=0),0===(10256&u.subtreeFlags)&&0===(10256&u.flags)||Su||(Su=!0,ju=c,_u=n,function(e,t){ae(e,t)}(fe,(function(){return tc(),null}))),n=0!==(15990&u.flags),0!==(15990&u.subtreeFlags)||n?(n=T.T,T.T=null,i=U.p,U.p=2,l=eu,eu|=4,function(e,t){if(e=e.containerInfo,Gc=Wd,er(e=Zn(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(g){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yc={focusedElem:e,selectionRange:n},Wd=!1,ns=t;null!==ns;)if(e=(t=ns).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,ns=e;else for(;null!==ns;){switch(i=(t=ns).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var m=No(n.type,a,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){rc(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))od(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":od(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,ns=e;break}ns=t.return}m=rs,rs=!1}(e,u),hs(u,e),tr(Yc,e.containerInfo),Wd=!!Gc,Yc=Gc=null,e.current=u,as(e,u.alternate,u),le(),eu=l,U.p=i,T.T=n):e.current=u,Su?(Su=!1,Eu=e,Cu=r):ec(e,c),c=e.pendingLanes,0===c&&(ku=null),function(e){if(ye&&"function"===typeof ye.onCommitFiberRoot)try{ye.onCommitFiberRoot(ve,e,void 0,128===(128&e.current.flags))}catch(t){}}(u.stateNode),mc(e),null!==t)for(a=e.onRecoverableError,u=0;u<t.length;u++)c=t[u],a(c.value,{componentStack:c.stack});0!==(3&Cu)&&tc(),c=e.pendingLanes,0!==(4194218&r)&&0!==(42&c)?e===Pu?zu++:(zu=0,Pu=e):zu=0,gc(0,!1)}(e,t,n,r,f,a,i,l)}finally{T.T=d,U.p=f}}function ec(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ia(t)))}function tc(){if(null!==Eu){var e=Eu,t=ju;ju=0;var n=Ae(Cu),r=T.T,a=U.p;try{if(U.p=32>n?32:n,T.T=null,null===Eu)var i=!1;else{n=_u,_u=null;var l=Eu,s=Cu;if(Eu=null,Cu=0,0!==(6&eu))throw Error(o(331));var u=eu;if(eu|=4,Fs(l.current),Ss(l,l.current,s,n),eu=u,gc(0,!1),ye&&"function"===typeof ye.onPostCommitFiberRoot)try{ye.onPostCommitFiberRoot(ve,l)}catch(c){}i=!0}return i}finally{U.p=a,T.T=r,ec(e,t)}}return!1}function nc(e,t,n){t=Rr(n,t),null!==(e=Ol(e,t=Bo(e.stateNode,t,2),2))&&(Oe(e,2),mc(e))}function rc(e,t,n){if(3===e.tag)nc(e,e,n);else for(;null!==t;){if(3===t.tag){nc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===ku||!ku.has(r))){e=Rr(n,e),null!==(r=Ol(t,n=Io(2),2))&&(Uo(n,r,t,e),Oe(r,2),mc(r));break}}t=t.return}}function ac(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Zs;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(su=!0,a.add(n),e=ic.bind(null,e,t,n),t.then(e,e))}function ic(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tu===e&&(ru&n)===n&&(4===cu||3===cu&&(62914560&ru)===ru&&300>se()-bu?0===(2&eu)&&Bu(e,0):pu|=n,mu===ru&&(mu=0)),mc(e)}function oc(e,t){0===t&&(t=Te()),null!==(e=Pr(e,t))&&(Oe(e,t),mc(e))}function lc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),oc(e,n)}function sc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),oc(e,n)}var uc=null,cc=null,dc=!1,fc=!1,pc=!1,hc=0;function mc(e){var t;e!==cc&&null===e.next&&(null===cc?uc=cc=e:cc=cc.next=e),fc=!0,dc||(dc=!0,t=vc,rd((function(){0!==(6&eu)?ae(ce,t):t()})))}function gc(e,t){if(!pc&&fc){pc=!0;do{for(var n=!1,r=uc;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var i=0;else{var o=r.suspendedLanes,l=r.pingedLanes;i=(1<<31-xe(42|e)+1)-1,i=201326677&(i&=a&~(o&~l))?201326677&i|1:i?2|i:0}0!==i&&(n=!0,xc(r,i))}else i=ru,0===(3&(i=je(r,r===tu?i:0)))||_e(r,i)||(n=!0,xc(r,i));r=r.next}}while(n);pc=!1}}function vc(){fc=dc=!1;var e=0;0!==hc&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==Zc&&(Zc=e,!0);return Zc=null,!1}()&&(e=hc),hc=0);for(var t=se(),n=null,r=uc;null!==r;){var a=r.next,i=yc(r,t);0===i?(r.next=null,null===n?uc=a:n.next=a,null===a&&(cc=n)):(n=r,(0!==e||0!==(3&i))&&(fc=!0)),r=a}gc(e,!1)}function yc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var o=31-xe(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=ze(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}if(n=ru,n=je(e,e===(t=tu)?n:0),r=e.callbackNode,0===n||e===t&&2===au||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ie(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||_e(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ie(r),Ae(n)){case 2:case 8:n=de;break;case 32:default:n=fe;break;case 268435456:n=he}return r=bc.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ie(r),e.callbackPriority=2,e.callbackNode=null,2}function bc(e,t){var n=e.callbackNode;if(tc()&&e.callbackNode!==n)return null;var r=ru;return 0===(r=je(e,e===tu?r:0))?null:(Nu(e,r,t),yc(e,se()),null!=e.callbackNode&&e.callbackNode===n?bc.bind(null,e):null)}function xc(e,t){if(tc())return null;Nu(e,t,!0)}function wc(){return 0===hc&&(hc=Pe()),hc}function kc(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Pt(""+e)}function Sc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Ec=0;Ec<wr.length;Ec++){var Cc=wr[Ec];kr(Cc.toLowerCase(),"on"+(Cc[0].toUpperCase()+Cc.slice(1)))}kr(pr,"onAnimationEnd"),kr(hr,"onAnimationIteration"),kr(mr,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(gr,"onTransitionRun"),kr(vr,"onTransitionStart"),kr(yr,"onTransitionCancel"),kr(br,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_c=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jc));function zc(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;i=l,a.currentTarget=u;try{i(a)}catch(c){Ro(c)}a.currentTarget=null,i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;i=l,a.currentTarget=u;try{i(a)}catch(c){Ro(c)}a.currentTarget=null,i=s}}}}function Pc(e,t){var n=t[Ie];void 0===n&&(n=t[Ie]=new Set);var r=e+"__bubble";n.has(r)||(Nc(t,e,2,!1),n.add(r))}function Tc(e,t,n){var r=0;t&&(r|=4),Nc(n,e,r,t)}var Fc="_reactListening"+Math.random().toString(36).slice(2);function Oc(e){if(!e[Fc]){e[Fc]=!0,Je.forEach((function(t){"selectionchange"!==t&&(_c.has(t)||Tc(t,!1,e),Tc(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fc]||(t[Fc]=!0,Tc("selectionchange",!1,t))}}function Nc(e,t,n,r){switch(Xd(t)){case 2:var a=Vd;break;case 8:a=qd;break;default:a=Gd}n=a.bind(null,t,n,e),a=void 0,!$t||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Rc(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=Ge(l)))return;if(5===(s=o.tag)||6===s||26===s||27===s){r=i=o;continue e}l=l.parentNode}}r=r.return}Lt((function(){var r=i,a=Ft(n),o=[];e:{var l=xr.get(e);if(void 0!==l){var s=Jt,u=e;switch(e){case"keypress":if(0===Wt(n))break e;case"keydown":case"keyup":s=hn;break;case"focusin":u="focus",s=an;break;case"focusout":u="blur",s=an;break;case"beforeblur":case"afterblur":s=an;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=rn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=gn;break;case pr:case hr:case mr:s=on;break;case br:s=vn;break;case"scroll":case"scrollend":s=en;break;case"wheel":s=yn;break;case"copy":case"cut":case"paste":s=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=mn;break;case"toggle":case"beforetoggle":s=bn}var c=0!==(4&t),d=!c&&("scroll"===e||"scrollend"===e),f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=h;if(p=m.stateNode,5!==(m=m.tag)&&26!==m&&27!==m||null===p||null===f||null!=(m=Dt(h,f))&&c.push(Ac(h,m,p)),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),o.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Tt||!(u=n.relatedTarget||n.fromElement)||!Ge(u)&&!u[Be])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ge(u):null)&&(d=D(u),c=u.tag,u!==d||5!==c&&27!==c&&6!==c)&&(u=null)):(s=null,u=r),s!==u)){if(c=nn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=mn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:Ke(s),p=null==u?l:Ke(u),(l=new c(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,Ge(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Dc(p))h++;for(p=0,m=f;m;m=Dc(m))p++;for(;0<h-p;)c=Dc(c),h--;for(;0<p-h;)f=Dc(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Dc(c),f=Dc(f)}c=null}else c=null;null!==s&&$c(o,l,s,c,!1),null!==u&&null!==d&&$c(o,d,u,c,!0)}if("select"===(s=(l=r?Ke(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Dn;else if(Fn(l))if($n)g=Gn;else{g=Vn;var v=Wn}else!(s=l.nodeName)||"input"!==s.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&jt(r.elementType)&&(g=Dn):g=qn;switch(g&&(g=g(e,r))?On(o,g,n,a):(v&&v(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&yt(l,"number",l.value)),v=r?Ke(r):window,e){case"focusin":(Fn(v)||"true"===v.contentEditable)&&(rr=v,ar=r,ir=null);break;case"focusout":ir=ar=rr=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,lr(o,n,a);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":lr(o,n,a)}var y;if(wn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Pn?_n(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(En&&"ko"!==n.locale&&(Pn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Pn&&(y=Ht()):(It="value"in(Bt=a)?Bt.value:Bt.textContent,Pn=!0)),0<(v=Lc(r,b)).length&&(b=new sn(b,e,null,n,a),o.push({event:b,listeners:v}),y?b.data=y:null!==(y=zn(n))&&(b.data=y))),(y=Sn?function(e,t){switch(e){case"compositionend":return zn(t);case"keypress":return 32!==t.which?null:(jn=!0,Cn);case"textInput":return(e=t.data)===Cn&&jn?null:e;default:return null}}(e,n):function(e,t){if(Pn)return"compositionend"===e||!wn&&_n(e,t)?(e=Ht(),Ut=It=Bt=null,Pn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return En&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(b=Lc(r,"onBeforeInput")).length&&(v=new sn("onBeforeInput","beforeinput",null,n,a),o.push({event:v,listeners:b}),v.data=y)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var i=kc((a[Me]||null).action),o=r.submitter;o&&null!==(t=(t=o[Me]||null)?kc(t.formAction):o.getAttribute("formAction"))&&(i=t,o=null);var l=new Jt("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==hc){var e=o?Sc(a,o):new FormData(a);co(n,{pending:!0,data:e,method:a.method,action:i},null,e)}}else"function"===typeof i&&(l.preventDefault(),e=o?Sc(a,o):new FormData(a),co(n,{pending:!0,data:e,method:a.method,action:i},i,e))},currentTarget:a}]})}}(o,e,r,n,a)}zc(o,t)}))}function Ac(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lc(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5!==(a=a.tag)&&26!==a&&27!==a||null===i||(null!=(a=Dt(e,n))&&r.unshift(Ac(e,a,i)),null!=(a=Dt(e,t))&&r.push(Ac(e,a,i))),e=e.return}return r}function Dc(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function $c(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===u||(s=u,a?null!=(u=Dt(n,i))&&o.unshift(Ac(n,u,s)):a||null!=(u=Dt(n,i))&&o.push(Ac(n,u,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Mc=/\r\n?/g,Bc=/\u0000|\uFFFD/g;function Ic(e){return("string"===typeof e?e:""+e).replace(Mc,"\n").replace(Bc,"")}function Uc(e,t){return t=Ic(t),Ic(e)===t}function Hc(){}function Wc(e,t,n,r,a,i){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||kt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&kt(e,""+r);break;case"className":lt(e,"class",r);break;case"tabIndex":lt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":lt(e,n,r);break;case"style":Ct(e,r,i);break;case"data":if("object"!==t){lt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Pt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&Wc(e,t,"name",a.name,a,null),Wc(e,t,"formEncType",a.formEncType,a,null),Wc(e,t,"formMethod",a.formMethod,a,null),Wc(e,t,"formTarget",a.formTarget,a,null)):(Wc(e,t,"encType",a.encType,a,null),Wc(e,t,"method",a.method,a,null),Wc(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Pt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Hc);break;case"onScroll":null!=r&&Pc("scroll",e);break;case"onScrollEnd":null!=r&&Pc("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Pt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Pc("beforetoggle",e),Pc("toggle",e),ot(e,"popover",r);break;case"xlinkActuate":st(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":st(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":st(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":st(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":st(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":st(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":st(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":st(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":st(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ot(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&ot(e,n=_t.get(n)||n,r)}}function Vc(e,t,n,r,a,i){switch(n){case"style":Ct(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?kt(e,r):("number"===typeof r||"bigint"===typeof r)&&kt(e,""+r);break;case"onScroll":null!=r&&Pc("scroll",e);break;case"onScrollEnd":null!=r&&Pc("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Hc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ze.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(i=null!=(i=e[Me]||null)?i[n]:null)&&e.removeEventListener(t,i,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):ot(e,n,r):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function qc(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pc("error",e),Pc("load",e);var r,a=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Wc(e,t,r,l,n,null)}}return i&&Wc(e,t,"srcSet",n.srcSet,n,null),void(a&&Wc(e,t,"src",n.src,n,null));case"input":Pc("invalid",e);var s=r=l=i=null,u=null,c=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":i=d;break;case"type":l=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:Wc(e,t,a,d,n,null)}}return vt(e,r,s,u,c,l,i,!1),void dt(e);case"select":for(i in Pc("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:Wc(e,t,i,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?bt(e,!!a,t,!1):null!=n&&bt(e,!!a,n,!0));case"textarea":for(l in Pc("invalid",e),r=i=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(o(91));break;default:Wc(e,t,l,s,n,null)}return wt(e,a,i,r),void dt(e);case"option":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))if("selected"===u)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else Wc(e,t,u,a,n,null);return;case"dialog":Pc("cancel",e),Pc("close",e);break;case"iframe":case"object":Pc("load",e);break;case"video":case"audio":for(a=0;a<jc.length;a++)Pc(jc[a],e);break;case"image":Pc("error",e),Pc("load",e);break;case"details":Pc("toggle",e);break;case"embed":case"source":case"link":Pc("error",e),Pc("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Wc(e,t,c,a,n,null)}return;default:if(jt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&Vc(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&Wc(e,t,s,a,n,null))}var Gc=null,Yc=null;function Kc(e){return 9===e.nodeType?e:e.ownerDocument}function Qc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xc(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Jc(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Zc=null;var ed="function"===typeof setTimeout?setTimeout:void 0,td="function"===typeof clearTimeout?clearTimeout:void 0,nd="function"===typeof Promise?Promise:void 0,rd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof nd?function(e){return nd.resolve(null).then(e).catch(ad)}:ed;function ad(e){setTimeout((function(){throw e}))}function id(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void gf(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);gf(t)}function od(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":od(n),qe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function ld(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}function sd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function ud(e,t,n){switch(t=Kc(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}var cd=new Map,dd=new Set;function fd(e){return"function"===typeof e.getRootNode?e.getRootNode():e.ownerDocument}var pd=U.d;U.d={f:function(){var e=pd.f(),t=$u();return e||t},r:function(e){var t=Ye(e);null!==t&&5===t.tag&&"form"===t.type?po(t):pd.r(e)},D:function(e){pd.D(e),md("dns-prefetch",e,null)},C:function(e,t){pd.C(e,t),md("preconnect",e,t)},L:function(e,t,n){pd.L(e,t,n);var r=hd;if(r&&e&&t){var a='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+mt(n.imageSizes)+'"]')):a+='[href="'+mt(e)+'"]';var i=a;switch(t){case"style":i=vd(e);break;case"script":i=xd(e)}cd.has(i)||(e=F({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),cd.set(i,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(yd(i))||"script"===t&&r.querySelector(wd(i))||(qc(t=r.createElement("link"),"link",e),Xe(t),r.head.appendChild(t)))}},m:function(e,t){pd.m(e,t);var n=hd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',i=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=xd(e)}if(!cd.has(i)&&(e=F({rel:"modulepreload",href:e},t),cd.set(i,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wd(i)))return}qc(r=n.createElement("link"),"link",e),Xe(r),n.head.appendChild(r)}}},X:function(e,t){pd.X(e,t);var n=hd;if(n&&e){var r=Qe(n).hoistableScripts,a=xd(e),i=r.get(a);i||((i=n.querySelector(wd(a)))||(e=F({src:e,async:!0},t),(t=cd.get(a))&&Cd(e,t),Xe(i=n.createElement("script")),qc(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}},S:function(e,t,n){pd.S(e,t,n);var r=hd;if(r&&e){var a=Qe(r).hoistableStyles,i=vd(e);t=t||"default";var o=a.get(i);if(!o){var l={loading:0,preload:null};if(o=r.querySelector(yd(i)))l.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":t},n),(n=cd.get(i))&&Ed(e,n);var s=o=r.createElement("link");Xe(s),qc(s,"link",e),s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),s.addEventListener("load",(function(){l.loading|=1})),s.addEventListener("error",(function(){l.loading|=2})),l.loading|=4,Sd(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:l},a.set(i,o)}}},M:function(e,t){pd.M(e,t);var n=hd;if(n&&e){var r=Qe(n).hoistableScripts,a=xd(e),i=r.get(a);i||((i=n.querySelector(wd(a)))||(e=F({src:e,async:!0,type:"module"},t),(t=cd.get(a))&&Cd(e,t),Xe(i=n.createElement("script")),qc(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}};var hd="undefined"===typeof document?null:document;function md(e,t,n){var r=hd;if(r&&"string"===typeof t&&t){var a=mt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),dd.has(a)||(dd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(qc(t=r.createElement("link"),"link",e),Xe(t),r.head.appendChild(t)))}}function gd(e,t,n,r){var a,i,l,s,u=(u=X.current)?fd(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=vd(n.href),(r=(n=Qe(u).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=vd(n.href);var c=Qe(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector(yd(e)))&&!c._p&&(d.instance=c,d.state.loading=5),cd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},cd.set(e,n),c||(a=u,i=e,l=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+i+"]")?s.loading=1:(i=a.createElement("link"),s.preload=i,i.addEventListener("load",(function(){return s.loading|=1})),i.addEventListener("error",(function(){return s.loading|=2})),qc(i,"link",l),Xe(i),a.head.appendChild(i))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=xd(n),(r=(n=Qe(u).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function vd(e){return'href="'+mt(e)+'"'}function yd(e){return'link[rel="stylesheet"]['+e+"]"}function bd(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function xd(e){return'[src="'+mt(e)+'"]'}function wd(e){return"script[async]"+e}function kd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,Xe(r),r;var a=F({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Xe(r=(e.ownerDocument||e).createElement("style")),qc(r,"style",a),Sd(r,n.precedence,e),t.instance=r;case"stylesheet":a=vd(n.href);var i=e.querySelector(yd(a));if(i)return t.state.loading|=4,t.instance=i,Xe(i),i;r=bd(n),(a=cd.get(a))&&Ed(r,a),Xe(i=(e.ownerDocument||e).createElement("link"));var l=i;return l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),qc(i,"link",r),t.state.loading|=4,Sd(i,n.precedence,e),t.instance=i;case"script":return i=xd(n.src),(a=e.querySelector(wd(i)))?(t.instance=a,Xe(a),a):(r=n,(a=cd.get(i))&&Cd(r=F({},n),a),Xe(a=(e=e.ownerDocument||e).createElement("script")),qc(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Sd(r,n.precedence,e));return t.instance}function Sd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,i=a,o=0;o<r.length;o++){var l=r[o];if(l.dataset.precedence===t)i=l;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Ed(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Cd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var jd=null;function _d(e,t,n){if(null===jd){var r=new Map,a=jd=new Map;a.set(n,r)}else(r=(a=jd).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[Ve]||i[$e]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var o=i.getAttribute(t)||"";o=e+o;var l=r.get(o);l?l.push(i):r.set(o,[i])}}return r}function zd(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Pd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Td=null;function Fd(){}function Od(){if(this.count--,0===this.count)if(this.stylesheets)Rd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Nd=null;function Rd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Nd=new Map,t.forEach(Ad,e),Nd=null,Od.call(e))}function Ad(e,t){if(!(4&t.state.loading)){var n=Nd.get(e);if(n)var r=n.get(null);else{n=new Map,Nd.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(a=t.instance).getAttribute("data-precedence"),(i=n.get(o)||r)===r&&n.set(null,a),n.set(o,a),this.count++,r=Od.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),i?i.parentNode.insertBefore(a,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var Ld={$$typeof:g,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Dd(e,t,n,r,a,i,o,l){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fe(0),this.hiddenUpdates=Fe(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function $d(e,t,n,r,a,i,o,l,s,u,c,d){return e=new Dd(e,t,n,o,l,s,u,d),t=1,!0===i&&(t|=24),i=As(3,null,null,t),e.current=i,i.stateNode=e,(t=Ba()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},Pl(i),e}function Md(e){return e?e=Or:Or}function Bd(e,t,n,r,a,i){a=Md(a),null===r.context?r.context=a:r.pendingContext=a,(r=Fl(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=Ol(e,r,t))&&(Ou(n,0,t),Nl(n,e,t))}function Id(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ud(e,t){Id(e,t),(e=e.alternate)&&Id(e,t)}function Hd(e){if(13===e.tag){var t=Pr(e,67108864);null!==t&&Ou(t,0,67108864),Ud(e,67108864)}}var Wd=!0;function Vd(e,t,n,r){var a=T.T;T.T=null;var i=U.p;try{U.p=2,Gd(e,t,n,r)}finally{U.p=i,T.T=a}}function qd(e,t,n,r){var a=T.T;T.T=null;var i=U.p;try{U.p=8,Gd(e,t,n,r)}finally{U.p=i,T.T=a}}function Gd(e,t,n,r){if(Wd){var a=Yd(r);if(null===a)Rc(e,t,r,Kd,n),lf(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Zd=sf(Zd,e,t,n,r,a),!0;case"dragenter":return ef=sf(ef,e,t,n,r,a),!0;case"mouseover":return tf=sf(tf,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return nf.set(i,sf(nf.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,rf.set(i,sf(rf.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(lf(e,r),4&t&&-1<of.indexOf(e)){for(;null!==a;){var i=Ye(a);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var o=Ce(i.pendingLanes);if(0!==o){var l=i;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var s=1<<31-xe(o);l.entanglements[1]|=s,o&=~s}mc(i),0===(6&eu)&&(xu=se()+500,gc(0,!1))}}break;case 13:null!==(l=Pr(i,2))&&Ou(l,0,2),$u(),Ud(i,2)}if(null===(i=Yd(r))&&Rc(e,t,r,Kd,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Rc(e,t,r,null,n)}}function Yd(e){return Qd(e=Ft(e))}var Kd=null;function Qd(e){if(Kd=null,null!==(e=Ge(e))){var t=D(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=$(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Kd=e,null}function Xd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ue()){case ce:return 2;case de:return 8;case fe:case pe:return 32;case he:return 268435456;default:return 32}default:return 32}}var Jd=!1,Zd=null,ef=null,tf=null,nf=new Map,rf=new Map,af=[],of="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lf(e,t){switch(e){case"focusin":case"focusout":Zd=null;break;case"dragenter":case"dragleave":ef=null;break;case"mouseover":case"mouseout":tf=null;break;case"pointerover":case"pointerout":nf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rf.delete(t.pointerId)}}function sf(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=Ye(t))&&Hd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function uf(e){var t=Ge(e.target);if(null!==t){var n=D(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=$(n)))return e.blockedOn=t,void function(e,t){var n=U.p;try{return U.p=e,t()}finally{U.p=n}}(e.priority,(function(){if(13===n.tag){var e=Tu(),t=Pr(n,e);null!==t&&Ou(t,0,e),Ud(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function cf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yd(e.nativeEvent);if(null!==n)return null!==(t=Ye(n))&&Hd(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Tt=r,n.target.dispatchEvent(r),Tt=null,t.shift()}return!0}function df(e,t,n){cf(e)&&n.delete(t)}function ff(){Jd=!1,null!==Zd&&cf(Zd)&&(Zd=null),null!==ef&&cf(ef)&&(ef=null),null!==tf&&cf(tf)&&(tf=null),nf.forEach(df),rf.forEach(df)}function pf(e,t){e.blockedOn===t&&(e.blockedOn=null,Jd||(Jd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ff)))}var hf=null;function mf(e){hf!==e&&(hf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){hf===e&&(hf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===Qd(r||n))continue;break}var i=Ye(n);null!==i&&(e.splice(t,3),t-=3,co(i,{pending:!0,data:a,method:n.method,action:r},r,a))}})))}function gf(e){function t(t){return pf(t,e)}null!==Zd&&pf(Zd,e),null!==ef&&pf(ef,e),null!==tf&&pf(tf,e),nf.forEach(t),rf.forEach(t);for(var n=0;n<af.length;n++){var r=af[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<af.length&&null===(n=af[0]).blockedOn;)uf(n),null===n.blockedOn&&af.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],i=n[r+1],o=a[Me]||null;if("function"===typeof i)o||mf(n);else if(o){var l=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[Me]||null)l=o.formAction;else if(null!==Qd(a))continue}else l=o.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),mf(n)}}}function vf(e){this._internalRoot=e}function yf(e){this._internalRoot=e}yf.prototype.render=vf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Bd(t.current,Tu(),e,t,null,null)},yf.prototype.unmount=vf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;0===e.tag&&tc(),Bd(e.current,2,null,e,null,null),$u(),t[Be]=null}},yf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Le();e={blockedOn:null,target:e,priority:t};for(var n=0;n<af.length&&0!==t&&t<af[n].priority;n++);af.splice(n,0,e),0===n&&uf(e)}};var bf=a.version;if("19.0.0"!==bf)throw Error(o(527,bf,"19.0.0"));U.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=D(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return M(a),e;if(i===r)return M(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?B(e):null)?null:e.stateNode};var xf={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:T,findFiberByHostInstance:Ge,reconcilerVersion:"19.0.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wf.isDisabled&&wf.supportsFiber)try{ve=wf.inject(xf),ye=wf}catch(Sf){}}t.createRoot=function(e,t){if(!l(e))throw Error(o(299));var n=!1,r="",a=Ao,i=Lo,s=Do;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=$d(e,1,!1,null,0,n,r,a,i,s,0,null),e[Be]=t.current,Oc(8===e.nodeType?e.parentNode:e),new vf(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(o(299));var r=!1,a="",i=Ao,s=Lo,u=Do,c=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(u=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(c=n.formState)),(t=$d(e,1,!0,t,0,r,a,i,s,u,0,c)).context=Md(null),n=t.current,(a=Fl(r=Tu())).callback=null,Ol(n,a,r),t.current.lanes=r,Oe(t,r),mc(t),e[Be]=t.current,Oc(e),new yf(t)},t.version="19.0.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function E(e,t,r,a,i,o){return r=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function z(){}function P(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,u,c=!1;if(null===e)c=!0;else switch(l){case"bigint":case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0;break;case f:return P((c=e._init)(e._payload),t,a,i,o)}}if(c)return o=o(e),c=""===i?"."+_(e,0):i,w(o)?(a="",null!=c&&(a=c.replace(j,"$&/")+"/"),P(o,t,a,"",(function(e){return e}))):null!=o&&(C(o)&&(s=o,u=a+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+c,o=E(s.type,u,void 0,0,0,s.props)),t.push(o)),1;c=0;var d,h=""===i?".":i+":";if(w(e))for(var m=0;m<e.length;m++)c+=P(i=e[m],t,a,l=h+_(i,m),o);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(i=e.next()).done;)c+=P(i=i.value,t,a,l=h+_(i,m++),o);else if("object"===l){if("function"===typeof e.then)return P(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(z,z):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,i,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return c}function T(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function F(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function N(){}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=o,t.PureComponent=b,t.StrictMode=i,t.Suspense=c,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(a=""+t.key),t)!S.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var o=Array(i),l=0;l<i;l++)o[l]=arguments[l+2];r.children=o}return E(e.type,a,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var o=arguments.length-2;if(1===o)a.children=n;else if(1<o){for(var l=Array(o),s=0;s<o;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r]);return E(e,i,void 0,0,0,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:F}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,n={};k.T=n;try{var r=e(),a=k.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(N,O)}catch(i){O(i)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,n){return k.H.useActionState(e,t,n)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return k.H.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,n){return k.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return k.H.useReducer(e,t,n)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return k.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return k.H.useTransition()},t.version="19.0.0"},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,a=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function s(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function u(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function c(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=o.p;try{if(s.T=null,o.p=2,e)return e()}finally{s.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:i}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=u(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=u(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.0.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<a&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,x(e),!m)if(null!==r(u))m=!0,F();else{var t=r(c);null!==t&&O(w,t.startTime-e)}}var k,S=!1,E=-1,C=5,j=-1;function _(){return!(t.unstable_now()-j<C)}function z(){if(S){var e=t.unstable_now();j=e;var n=!0;try{e:{m=!1,g&&(g=!1,y(E),E=-1),h=!0;var i=p;try{t:{for(x(e),f=r(u);null!==f&&!(f.expirationTime>e&&_());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var l=o(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){f.callback=l,x(e),n=!0;break t}f===r(u)&&a(u),x(e)}else a(u);f=r(u)}if(null!==f)n=!0;else{var s=r(c);null!==s&&O(w,s.startTime-e),n=!1}}break e}finally{f=null,p=i,h=!1}n=void 0}}finally{n?k():S=!1}}}if("function"===typeof b)k=function(){b(z)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,T=P.port2;P.port1.onmessage=z,k=function(){T.postMessage(null)}}else k=function(){v(z,0)};function F(){S||(S=!0,k())}function O(e,n){E=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,F())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(g?(y(E),E=-1):g=!0,O(w,i-o))):(e.sortIndex=l,n(u,e),m||h||(m=!0,F())),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".bdb13658.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="gamegenesis-website:";n.l=(r,a,i,o)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/gamegenesis-website/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=i);var o=n.p+n.u(t),l=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,i,o=r[0],l=r[1],s=r[2],u=0;if(o.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);u<o.length;u++)i=o[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkgamegenesis_website=self.webpackChunkgamegenesis_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=(n(358),"popstate");function a(){return d((function(e,t){let{pathname:n="/",search:r="",hash:a=""}=c(e.location.hash.substring(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),s("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:u(t))}),(function(e,t){o("/"===e.pathname.charAt(0),`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}),arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function i(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function o(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function l(e,t){return{usr:e.state,key:e.key,idx:t}}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?c(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function u(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function c(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:c=!1}=a,d=o.history,f="POP",p=null,h=m();function m(){return(d.state||{idx:null}).idx}function g(){f="POP";let e=m(),t=null==e?null:e-h;h=e,p&&p({action:f,location:y.location,delta:t})}function v(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:u(e);return n=n.replace(/ $/,"%20"),i(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==h&&(h=0,d.replaceState({...d.state,idx:h},""));let y={get action(){return f},get location(){return e(o,d)},listen(e){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(r,g),p=e,()=>{o.removeEventListener(r,g),p=null}},createHref:e=>t(o,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f="PUSH";let r=s(y.location,e,t);n&&n(r,e),h=m()+1;let a=l(r,h),i=y.createHref(r);try{d.pushState(a,"",i)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;o.location.assign(i)}c&&p&&p({action:f,location:y.location,delta:1})},replace:function(e,t){f="REPLACE";let r=s(y.location,e,t);n&&n(r,e),h=m();let a=l(r,h),i=y.createHref(r);d.replaceState(a,"",i),c&&p&&p({action:f,location:y.location,delta:0})},go:e=>d.go(e)};return y}new WeakMap;function f(e,t){return p(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function p(e,t,n,r){let a=_(("string"===typeof t?c(t):t).pathname||"/",n);if(null==a)return null;let i=h(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let o=null;for(let l=0;null==o&&l<i.length;++l){let e=j(a);o=E(i[l],e,r)}return o}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=(e,a,o)=>{let l={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};l.relativePath.startsWith("/")&&(i(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let s=O([r,l.relativePath]),u=n.concat(l);e.children&&e.children.length>0&&(i(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),h(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:S(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of m(e.path))a(e,t,n);else a(e,t)})),t}function m(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return a?[i,""]:[i];let o=m(r.join("/")),l=[];return l.push(...o.map((e=>""===e?i:[i,e].join("/")))),a&&l.push(...o),l.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,v=3,y=2,b=1,x=10,w=-2,k=e=>"*"===e;function S(e,t){let n=e.split("/"),r=n.length;return n.some(k)&&(r+=w),t&&(r+=y),n.filter((e=>!k(e))).reduce(((e,t)=>e+(g.test(t)?v:""===t?b:x)),r)}function E(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===i?t:t.slice(i.length)||"/",c=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),o.push({params:a,pathname:O([i,c.pathname]),pathnameBase:N(O([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=O([i,c.pathnameBase]))}return o}function C(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];o("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let i=new RegExp(a,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=s[n]||"";l=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const o=s[n];return e[r]=a&&!o?void 0:(o||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:l,pattern:e}}function j(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return o(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function _(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function z(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function P(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function T(e){let t=P(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function F(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=c(e):(r={...e},i(!r.pathname||!r.pathname.includes("?"),z("?","pathname","search",r)),i(!r.pathname||!r.pathname.includes("#"),z("#","pathname","hash",r)),i(!r.search||!r.search.includes("#"),z("#","search","hash",r)));let o,l=""===e||""===r.pathname,s=l?"/":r.pathname;if(null==s)o=n;else{let e=t.length-1;if(!a&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:a=""}="string"===typeof e?c(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:R(r),hash:A(a)}}(r,o),d=s&&"/"!==s&&s.endsWith("/"),f=(l||"."===s)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}var O=e=>e.join("/").replace(/\/\/+/g,"/"),N=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),R=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",A=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function L(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var D=["POST","PUT","PATCH","DELETE"],$=(new Set(D),["GET",...D]);new Set($),Symbol("ResetLoaderData");var M=e.createContext(null);M.displayName="DataRouter";var B=e.createContext(null);B.displayName="DataRouterState";var I=e.createContext({isTransitioning:!1});I.displayName="ViewTransition";var U=e.createContext(new Map);U.displayName="Fetchers";var H=e.createContext(null);H.displayName="Await";var W=e.createContext(null);W.displayName="Navigation";var V=e.createContext(null);V.displayName="Location";var q=e.createContext({outlet:null,matches:[],isDataRoute:!1});q.displayName="Route";var G=e.createContext(null);G.displayName="RouteError";function Y(){return null!=e.useContext(V)}function K(){return i(Y(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(V).location}var Q="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function X(t){e.useContext(W).static||e.useLayoutEffect(t)}function J(){let{isDataRoute:t}=e.useContext(q);return t?function(){let{router:t}=le("useNavigate"),n=ue("useNavigate"),r=e.useRef(!1);X((()=>{r.current=!0}));let a=e.useCallback((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(r.current,Q),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...a}))}),[t,n]);return a}():function(){i(Y(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(M),{basename:n,navigator:r}=e.useContext(W),{matches:a}=e.useContext(q),{pathname:l}=K(),s=JSON.stringify(T(a)),u=e.useRef(!1);X((()=>{u.current=!0}));let c=e.useCallback((function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(u.current,Q),!u.current)return;if("number"===typeof e)return void r.go(e);let i=F(e,JSON.parse(s),l,"path"===a.relative);null==t&&"/"!==n&&(i.pathname="/"===i.pathname?n:O([n,i.pathname])),(a.replace?r.replace:r.push)(i,a.state,a)}),[n,r,s,l,t]);return c}()}e.createContext(null);function Z(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(q),{pathname:a}=K(),i=JSON.stringify(T(r));return e.useMemo((()=>F(t,JSON.parse(i),a,"path"===n)),[t,i,a,n])}function ee(t,n,r,a){i(Y(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:s}=e.useContext(W),{matches:u}=e.useContext(q),d=u[u.length-1],p=d?d.params:{},h=d?d.pathname:"/",m=d?d.pathnameBase:"/",g=d&&d.route;{let e=g&&g.path||"";fe(h,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v,y=K();if(n){let e="string"===typeof n?c(n):n;i("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),v=e}else v=y;let b=v.pathname||"/",x=b;if("/"!==m){let e=m.replace(/^\//,"").split("/");x="/"+b.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!s&&r&&r.matches&&r.matches.length>0?r.matches:f(t,{pathname:x});o(g||null!=w,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),o(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=ie(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:O([m,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:O([m,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,r,a);return n&&k?e.createElement(V.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},k):k}function te(){let t=ce(),n=L(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a},o={padding:"2px 4px",backgroundColor:a},l=null;return console.error("Error handled by React Router default ErrorBoundary:",t),l=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:o},"ErrorBoundary")," or"," ",e.createElement("code",{style:o},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:i},r):null,l)}var ne=e.createElement(te,null),re=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(q.Provider,{value:this.props.routeContext},e.createElement(G.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ae(t){let{routeContext:n,match:r,children:a}=t,i=e.useContext(M);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(q.Provider,{value:n},a)}function ie(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let a=t,o=r?.errors;if(null!=o){let e=a.findIndex((e=>e.route.id&&void 0!==o?.[e.route.id]));i(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,e+1))}let l=!1,s=-1;if(r)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:n}=r,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||i){l=!0,a=s>=0?a.slice(0,s+1):[a[0]];break}}}return a.reduceRight(((t,i,u)=>{let c,d=!1,f=null,p=null;r&&(c=o&&i.route.id?o[i.route.id]:void 0,f=i.route.errorElement||ne,l&&(s<0&&0===u?(fe("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===u&&(d=!0,p=i.route.hydrateFallbackElement||null)));let h=n.concat(a.slice(0,u+1)),m=()=>{let n;return n=c?f:d?p:i.route.Component?e.createElement(i.route.Component,null):i.route.element?i.route.element:t,e.createElement(ae,{match:i,routeContext:{outlet:t,matches:h,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===u)?e.createElement(re,{location:r.location,revalidation:r.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}function oe(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function le(t){let n=e.useContext(M);return i(n,oe(t)),n}function se(t){let n=e.useContext(B);return i(n,oe(t)),n}function ue(t){let n=function(t){let n=e.useContext(q);return i(n,oe(t)),n}(t),r=n.matches[n.matches.length-1];return i(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function ce(){let t=e.useContext(G),n=se("useRouteError"),r=ue("useRouteError");return void 0!==t?t:n.errors?.[r]}var de={};function fe(e,t,n){t||de[e]||(de[e]=!0,o(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return ee(t,void 0,r,n)}));function pe(e){i(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function he(t){let{basename:n="/",children:r=null,location:a,navigationType:l="POP",navigator:s,static:u=!1}=t;i(!Y(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),f=e.useMemo((()=>({basename:d,navigator:s,static:u,future:{}})),[d,s,u]);"string"===typeof a&&(a=c(a));let{pathname:p="/",search:h="",hash:m="",state:g=null,key:v="default"}=a,y=e.useMemo((()=>{let e=_(p,d);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:v},navigationType:l}}),[d,p,h,m,g,v,l]);return o(null!=y,`<Router basename="${d}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:e.createElement(W.Provider,{value:f},e.createElement(V.Provider,{children:r,value:y}))}function me(e){let{children:t,location:n}=e;return ee(ge(t),n)}e.Component;function ge(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,a)=>{if(!e.isValidElement(t))return;let o=[...n,a];if(t.type===e.Fragment)return void r.push.apply(r,ge(t.props.children,o));i(t.type===pe,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),i(!t.props.index||!t.props.children,"An index route cannot have child routes.");let l={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(l.children=ge(t.props.children,o)),r.push(l)})),r}var ve="get",ye="application/x-www-form-urlencoded";function be(e){return null!=e&&"string"===typeof e.tagName}var xe=null;var we=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ke(e){return null==e||we.has(e)?e:(o(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ye}"`),null)}function Se(e,t){let n,r,a,i,o;if(be(l=e)&&"form"===l.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?_(o,t):null,n=e.getAttribute("method")||ve,a=ke(e.getAttribute("enctype"))||ye,i=new FormData(e)}else if(function(e){return be(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return be(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||o.getAttribute("action");if(r=l?_(l,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||ve,a=ke(e.getAttribute("formenctype"))||ke(o.getAttribute("enctype"))||ye,i=new FormData(o,e),!function(){if(null===xe)try{new FormData(document.createElement("form"),0),xe=!1}catch(e){xe=!0}return xe}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(be(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ve,r=null,a=ye,o=e}var l;return i&&"text/plain"===a&&(o=i,i=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:i,body:o}}function Ee(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Ce(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function je(e){return null!=e&&"string"===typeof e.page}function _e(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function ze(e,t,n,r,a,i){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter(((e,t)=>o(e,t)||l(e,t))):"data"===i?t.filter(((t,i)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(o(t,i)||l(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Pe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a})).flat(1),[...new Set(r)];var r}function Te(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,a)=>{if(t&&!je(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(i)||(n.add(i),e.push({key:i,link:a})),e}),[])}function Fe(e){return{__html:e}}Symbol("SingleFetchRedirect");function Oe(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===_(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function Ne(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let a,i=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(L(n))return e.createElement(Re,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),i);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Re,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},a.stack),i)}function Re(t){let{title:n,renderScripts:r,isOutsideRemixApp:a,children:i}=t,{routeModules:o}=Me();return o.root?.Layout&&!a?i:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,r?e.createElement(qe,null):null)))}function Ae(e){return!0===e}function Le(){let t=e.useContext(M);return Ee(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function De(){let t=e.useContext(B);return Ee(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var $e=e.createContext(void 0);function Me(){let t=e.useContext($e);return Ee(t,"You must render this element inside a <HydratedRouter> element"),t}function Be(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ie(e,t,n){if(n&&!Ve)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function Ue(t){let{page:n,...r}=t,{router:a}=Le(),i=e.useMemo((()=>f(a.routes,n,a.basename)),[a.routes,n,a.basename]);return i?e.createElement(We,{page:n,matches:i,...r}):null}function He(t){let{manifest:n,routeModules:r}=Me(),[a,i]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await Ce(r,n);return e.links?e.links():[]}return[]})));return Te(r.flat(1).filter(_e).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||i(t)})),()=>{e=!0}}),[t,n,r]),a}function We(t){let{page:n,matches:r,...a}=t,i=K(),{manifest:o,routeModules:l}=Me(),{basename:s}=Le(),{loaderData:u,matches:c}=De(),d=e.useMemo((()=>ze(n,r,c,o,i,"data")),[n,r,c,o,i]),f=e.useMemo((()=>ze(n,r,c,o,i,"assets")),[n,r,c,o,i]),p=e.useMemo((()=>{if(n===i.pathname+i.search+i.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=o.routes[n.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===n.route.id))&&n.route.id in u&&l[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let a=Oe(n,s);return t&&e.size>0&&a.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[a.pathname+a.search]}),[s,u,i,o,d,r,n,l]),h=e.useMemo((()=>Pe(f,o)),[f,o]),m=He(f);return e.createElement(e.Fragment,null,p.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...a}))),h.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...a}))),m.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}$e.displayName="FrameworkContext";var Ve=!1;function qe(t){let{manifest:n,serverHandoffString:r,isSpaMode:a,ssr:i,renderMeta:o}=Me(),{router:l,static:s,staticContext:u}=Le(),{matches:c}=De(),d=Ae(i);o&&(o.didRenderScripts=!0);let p=Ie(c,null,a);e.useEffect((()=>{0}),[]);let h=e.useMemo((()=>{let a=u?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=s?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${p.map(((e,t)=>{let r=`route${t}`,a=n.routes[e.route.id];Ee(a,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:o,hydrateFallbackModule:l,module:s}=a,u=[...i?[{module:i,varName:`${r}_clientAction`}]:[],...o?[{module:o,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:s,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(s)};`:[u.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${u.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let n=new Set(t.state.matches.map((e=>e.route.id))),r=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(r.pop();r.length>0;)a.push(`/${r.join("/")}`),r.pop();a.forEach((e=>{let r=f(t.routes,e,t.basename);r&&r.forEach((e=>n.add(e.route.id)))}));let i=[...n].reduce(((t,n)=>Object.assign(t,{[n]:e.routes[n]})),{});return{...e,routes:i}}(n,l),null,2)};`:""}\n  window.__reactRouterRouteModules = {${p.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Fe(a),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Fe(i),type:"module",async:!0}))}),[]),m=Ve?[]:n.entry.imports.concat(Pe(p,n,{includeHydrateFallback:!0}));return Ve?null:e.createElement(e.Fragment,null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin}),[...new Set(g)].map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin}))),h);var g}function Ge(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Ye="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Ye&&(window.__reactRouterVersion="7.4.0")}catch(js){}function Ke(t){let{basename:n,children:r,window:i}=t,o=e.useRef();null==o.current&&(o.current=a({window:i,v5Compat:!0}));let l=o.current,[s,u]=e.useState({action:l.action,location:l.location}),c=e.useCallback((t=>{e.startTransition((()=>u(t)))}),[u]);return e.useLayoutEffect((()=>l.listen(c)),[l,c]),e.createElement(he,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:l})}var Qe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xe=e.forwardRef((function(t,n){let r,{onClick:a,discover:l="render",prefetch:s="none",relative:c,reloadDocument:d,replace:f,state:p,target:h,to:m,preventScrollReset:g,viewTransition:v,...y}=t,{basename:b}=e.useContext(W),x="string"===typeof m&&Qe.test(m),w=!1;if("string"===typeof m&&x&&(r=m,Ye))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=_(t.pathname,b);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(js){o(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(Y(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=e.useContext(W),{hash:o,pathname:l,search:s}=Z(t,{relative:n}),u=l;return"/"!==r&&(u="/"===l?r:O([r,l])),a.createHref({pathname:u,search:s,hash:o})}(m,{relative:c}),[S,E,C]=function(t,n){let r=e.useContext($e),[a,i]=e.useState(!1),[o,l]=e.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=n,p=e.useRef(null);e.useEffect((()=>{if("render"===t&&l(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{l(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(a){let e=setTimeout((()=>{l(!0)}),100);return()=>{clearTimeout(e)}}}),[a]);let h=()=>{i(!0)},m=()=>{i(!1),l(!1)};return r?"intent"!==t?[o,p,{}]:[o,p,{onFocus:Be(s,h),onBlur:Be(u,m),onMouseEnter:Be(c,h),onMouseLeave:Be(d,m),onTouchStart:Be(f,h)}]:[!1,p,{}]}(s,y),j=function(t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o,viewTransition:l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=J(),c=K(),d=Z(t,{relative:o});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:u(c)===u(d);s(t,{replace:n,state:a,preventScrollReset:i,relative:o,viewTransition:l})}}),[c,s,d,r,a,n,t,i,o,l])}(m,{replace:f,state:p,target:h,preventScrollReset:g,relative:c,viewTransition:v});let z=e.createElement("a",{...y,...C,href:r||k,onClick:w||d?a:function(e){a&&a(e),e.defaultPrevented||j(e)},ref:Ge(n,E),target:h,"data-discover":x||"render"!==l?void 0:"true"});return S&&!x?e.createElement(e.Fragment,null,z,e.createElement(Ue,{page:k})):z}));Xe.displayName="Link",e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:l=!1,style:s,to:u,viewTransition:c,children:d,...f}=t,p=Z(u,{relative:f.relative}),h=K(),m=e.useContext(B),{navigator:g,basename:v}=e.useContext(W),y=null!=m&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(I);i(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=et("useViewTransitionState"),o=Z(t,{relative:n.relative});if(!r.isTransitioning)return!1;let l=_(r.currentLocation.pathname,a)||r.currentLocation.pathname,s=_(r.nextLocation.pathname,a)||r.nextLocation.pathname;return null!=C(o.pathname,s)||null!=C(o.pathname,l)}(p)&&!0===c,b=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,x=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&v&&(w=_(w,v)||w);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let S,E=x===b||!l&&x.startsWith(b)&&"/"===x.charAt(k),j=null!=w&&(w===b||!l&&w.startsWith(b)&&"/"===w.charAt(b.length)),z={isActive:E,isPending:j,isTransitioning:y},P=E?r:void 0;S="function"===typeof o?o(z):[o,E?"active":null,j?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let T="function"===typeof s?s(z):s;return e.createElement(Xe,{...f,"aria-current":P,className:S,ref:n,style:T,to:u,viewTransition:c},"function"===typeof d?d(z):d)})).displayName="NavLink";var Je=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:a,navigate:o,reloadDocument:l,replace:s,state:c,method:d=ve,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:g,...v}=t,y=rt(),b=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(W),a=e.useContext(q);i(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...Z(t||".",{relative:n})},s=K();if(null==t){l.search=s.search;let e=new URLSearchParams(l.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();l.search=n?`?${n}`:""}}t&&"."!==t||!o.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(l.pathname="/"===l.pathname?r:O([r,l.pathname]));return u(l)}(f,{relative:h}),x="get"===d.toLowerCase()?"get":"post",w="string"===typeof f&&Qe.test(f);return e.createElement("form",{ref:n,method:x,action:b,onSubmit:l?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;y(t||e.currentTarget,{fetcherKey:a,method:n,navigate:o,replace:s,state:c,relative:h,preventScrollReset:m,viewTransition:g})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function Ze(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function et(t){let n=e.useContext(M);return i(n,Ze(t)),n}Je.displayName="Form";var tt=0,nt=()=>`__${String(++tt)}__`;function rt(){let{router:t}=et("useSubmit"),{basename:n}=e.useContext(W),r=ue("useRouteId");return e.useCallback((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:o,encType:l,formData:s,body:u}=Se(e,n);if(!1===a.navigate){let e=a.fetcherKey||nt();await t.fetch(e,r,a.action||i,{preventScrollReset:a.preventScrollReset,formData:s,body:u,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await t.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:s,body:u,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})}),[t,n,r])}new TextEncoder;var at=function(){return at=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},at.apply(this,arguments)};Object.create;function it(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var ot=n(324),lt=n.n(ot),st="-ms-",ut="-moz-",ct="-webkit-",dt="comm",ft="rule",pt="decl",ht="@keyframes",mt=Math.abs,gt=String.fromCharCode,vt=Object.assign;function yt(e){return e.trim()}function bt(e,t){return(e=t.exec(e))?e[0]:e}function xt(e,t,n){return e.replace(t,n)}function wt(e,t,n){return e.indexOf(t,n)}function kt(e,t){return 0|e.charCodeAt(t)}function St(e,t,n){return e.slice(t,n)}function Et(e){return e.length}function Ct(e){return e.length}function jt(e,t){return t.push(e),e}function _t(e,t){return e.filter((function(e){return!bt(e,t)}))}var zt=1,Pt=1,Tt=0,Ft=0,Ot=0,Nt="";function Rt(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:zt,column:Pt,length:o,return:"",siblings:l}}function At(e,t){return vt(Rt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Lt(e){for(;e.root;)e=At(e.root,{children:[e]});jt(e,e.siblings)}function Dt(){return Ot=Ft>0?kt(Nt,--Ft):0,Pt--,10===Ot&&(Pt=1,zt--),Ot}function $t(){return Ot=Ft<Tt?kt(Nt,Ft++):0,Pt++,10===Ot&&(Pt=1,zt++),Ot}function Mt(){return kt(Nt,Ft)}function Bt(){return Ft}function It(e,t){return St(Nt,e,t)}function Ut(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ht(e){return zt=Pt=1,Tt=Et(Nt=e),Ft=0,[]}function Wt(e){return Nt="",e}function Vt(e){return yt(It(Ft-1,Yt(91===e?e+2:40===e?e+1:e)))}function qt(e){for(;(Ot=Mt())&&Ot<33;)$t();return Ut(e)>2||Ut(Ot)>3?"":" "}function Gt(e,t){for(;--t&&$t()&&!(Ot<48||Ot>102||Ot>57&&Ot<65||Ot>70&&Ot<97););return It(e,Bt()+(t<6&&32==Mt()&&32==$t()))}function Yt(e){for(;$t();)switch(Ot){case e:return Ft;case 34:case 39:34!==e&&39!==e&&Yt(Ot);break;case 40:41===e&&Yt(e);break;case 92:$t()}return Ft}function Kt(e,t){for(;$t()&&e+Ot!==57&&(e+Ot!==84||47!==Mt()););return"/*"+It(t,Ft-1)+"*"+gt(47===e?e:$t())}function Qt(e){for(;!Ut(Mt());)$t();return It(e,Ft)}function Xt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Jt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case pt:return e.return=e.return||e.value;case dt:return"";case ht:return e.return=e.value+"{"+Xt(e.children,r)+"}";case ft:if(!Et(e.value=e.props.join(",")))return""}return Et(n=Xt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Zt(e,t,n){switch(function(e,t){return 45^kt(e,0)?(((t<<2^kt(e,0))<<2^kt(e,1))<<2^kt(e,2))<<2^kt(e,3):0}(e,t)){case 5103:return ct+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ct+e+e;case 4789:return ut+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ct+e+ut+e+st+e+e;case 5936:switch(kt(e,t+11)){case 114:return ct+e+st+xt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ct+e+st+xt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ct+e+st+xt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ct+e+st+e+e;case 6165:return ct+e+st+"flex-"+e+e;case 5187:return ct+e+xt(e,/(\w+).+(:[^]+)/,ct+"box-$1$2"+st+"flex-$1$2")+e;case 5443:return ct+e+st+"flex-item-"+xt(e,/flex-|-self/g,"")+(bt(e,/flex-|baseline/)?"":st+"grid-row-"+xt(e,/flex-|-self/g,""))+e;case 4675:return ct+e+st+"flex-line-pack"+xt(e,/align-content|flex-|-self/g,"")+e;case 5548:return ct+e+st+xt(e,"shrink","negative")+e;case 5292:return ct+e+st+xt(e,"basis","preferred-size")+e;case 6060:return ct+"box-"+xt(e,"-grow","")+ct+e+st+xt(e,"grow","positive")+e;case 4554:return ct+xt(e,/([^-])(transform)/g,"$1"+ct+"$2")+e;case 6187:return xt(xt(xt(e,/(zoom-|grab)/,ct+"$1"),/(image-set)/,ct+"$1"),e,"")+e;case 5495:case 3959:return xt(e,/(image-set\([^]*)/,ct+"$1$`$1");case 4968:return xt(xt(e,/(.+:)(flex-)?(.*)/,ct+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ct+e+e;case 4200:if(!bt(e,/flex-|baseline/))return st+"grid-column-align"+St(e,t)+e;break;case 2592:case 3360:return st+xt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,bt(e.props,/grid-\w+-end/)}))?~wt(e+(n=n[t].value),"span",0)?e:st+xt(e,"-start","")+e+st+"grid-row-span:"+(~wt(n,"span",0)?bt(n,/\d+/):+bt(n,/\d+/)-+bt(e,/\d+/))+";":st+xt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return bt(e.props,/grid-\w+-start/)}))?e:st+xt(xt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return xt(e,/(.+)-inline(.+)/,ct+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Et(e)-1-t>6)switch(kt(e,t+1)){case 109:if(45!==kt(e,t+4))break;case 102:return xt(e,/(.+:)(.+)-([^]+)/,"$1"+ct+"$2-$3$1"+ut+(108==kt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~wt(e,"stretch",0)?Zt(xt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return xt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,i,o,l){return st+n+":"+r+l+(a?st+n+"-span:"+(i?o:+o-+r)+l:"")+e}));case 4949:if(121===kt(e,t+6))return xt(e,":",":"+ct)+e;break;case 6444:switch(kt(e,45===kt(e,14)?18:11)){case 120:return xt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ct+(45===kt(e,14)?"inline-":"")+"box$3$1"+ct+"$2$3$1"+st+"$2box$3")+e;case 100:return xt(e,":",":"+st)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return xt(e,"scroll-","scroll-snap-")+e}return e}function en(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case pt:return void(e.return=Zt(e.value,e.length,n));case ht:return Xt([At(e,{value:xt(e.value,"@","@"+ct)})],r);case ft:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(bt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Lt(At(e,{props:[xt(t,/:(read-\w+)/,":-moz-$1")]})),Lt(At(e,{props:[t]})),vt(e,{props:_t(n,r)});break;case"::placeholder":Lt(At(e,{props:[xt(t,/:(plac\w+)/,":"+ct+"input-$1")]})),Lt(At(e,{props:[xt(t,/:(plac\w+)/,":-moz-$1")]})),Lt(At(e,{props:[xt(t,/:(plac\w+)/,st+"input-$1")]})),Lt(At(e,{props:[t]})),vt(e,{props:_t(n,r)})}return""}))}}function tn(e){return Wt(nn("",null,null,null,[""],e=Ht(e),0,[0],e))}function nn(e,t,n,r,a,i,o,l,s){for(var u=0,c=0,d=o,f=0,p=0,h=0,m=1,g=1,v=1,y=0,b="",x=a,w=i,k=r,S=b;g;)switch(h=y,y=$t()){case 40:if(108!=h&&58==kt(S,d-1)){-1!=wt(S+=xt(Vt(y),"&","&\f"),"&\f",mt(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=Vt(y);break;case 9:case 10:case 13:case 32:S+=qt(h);break;case 92:S+=Gt(Bt()-1,7);continue;case 47:switch(Mt()){case 42:case 47:jt(an(Kt($t(),Bt()),t,n,s),s);break;default:S+="/"}break;case 123*m:l[u++]=Et(S)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(S=xt(S,/\f/g,"")),p>0&&Et(S)-d&&jt(p>32?on(S+";",r,n,d-1,s):on(xt(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(jt(k=rn(S,t,n,u,c,a,l,b,x=[],w=[],d,i),i),123===y)if(0===c)nn(S,t,k,k,x,i,d,l,w);else switch(99===f&&110===kt(S,3)?100:f){case 100:case 108:case 109:case 115:nn(e,k,k,r&&jt(rn(e,k,k,0,0,a,l,b,a,x=[],d,w),w),a,w,d,l,r?x:w);break;default:nn(S,k,k,k,[""],w,0,l,w)}}u=c=p=0,m=v=1,b=S="",d=o;break;case 58:d=1+Et(S),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Dt())continue;switch(S+=gt(y),y*m){case 38:v=c>0?1:(S+="\f",-1);break;case 44:l[u++]=(Et(S)-1)*v,v=1;break;case 64:45===Mt()&&(S+=Vt($t())),f=Mt(),c=d=Et(b=S+=Qt(Bt())),y++;break;case 45:45===h&&2==Et(S)&&(m=0)}}return i}function rn(e,t,n,r,a,i,o,l,s,u,c,d){for(var f=a-1,p=0===a?i:[""],h=Ct(p),m=0,g=0,v=0;m<r;++m)for(var y=0,b=St(e,f+1,f=mt(g=o[m])),x=e;y<h;++y)(x=yt(g>0?p[y]+" "+b:xt(b,/&\f/g,p[y])))&&(s[v++]=x);return Rt(e,t,n,0===a?ft:l,s,u,c,d)}function an(e,t,n,r){return Rt(e,t,n,dt,gt(Ot),St(e,2,-2),0,r)}function on(e,t,n,r,a){return Rt(e,t,n,pt,St(e,0,r),St(e,r+1,-1),r,a)}var ln={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},sn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",un="active",cn="data-styled-version",dn="6.1.16",fn="/*!sc*/\n",pn="undefined"!=typeof window&&"HTMLElement"in window,hn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/gamegenesis-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),mn={},gn=(new Set,Object.freeze([])),vn=Object.freeze({});function yn(e,t,n){return void 0===n&&(n=vn),e.theme!==n.theme&&e.theme||t||n.theme}var bn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wn=/(^-|-$)/g;function kn(e){return e.replace(xn,"-").replace(wn,"")}var Sn=/(a)(d)/gi,En=function(e){return String.fromCharCode(e+(e>25?39:97))};function Cn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=En(t%52)+n;return(En(t%52)+n).replace(Sn,"$1-$2")}var jn,_n=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},zn=function(e){return _n(5381,e)};function Pn(e){return Cn(zn(e)>>>0)}function Tn(e){return e.displayName||e.name||"Component"}function Fn(e){return"string"==typeof e&&!0}var On="function"==typeof Symbol&&Symbol.for,Nn=On?Symbol.for("react.memo"):60115,Rn=On?Symbol.for("react.forward_ref"):60112,An={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ln={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$n=((jn={})[Rn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jn[Nn]=Dn,jn);function Mn(e){return("type"in(t=e)&&t.type.$$typeof)===Nn?Dn:"$$typeof"in e?$n[e.$$typeof]:An;var t}var Bn=Object.defineProperty,In=Object.getOwnPropertyNames,Un=Object.getOwnPropertySymbols,Hn=Object.getOwnPropertyDescriptor,Wn=Object.getPrototypeOf,Vn=Object.prototype;function qn(e,t,n){if("string"!=typeof t){if(Vn){var r=Wn(t);r&&r!==Vn&&qn(e,r,n)}var a=In(t);Un&&(a=a.concat(Un(t)));for(var i=Mn(e),o=Mn(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Ln||n&&n[s]||o&&s in o||i&&s in i)){var u=Hn(t,s);try{Bn(e,s,u)}catch(e){}}}}return e}function Gn(e){return"function"==typeof e}function Yn(e){return"object"==typeof e&&"styledComponentId"in e}function Kn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Qn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Xn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Jn(e,t,n){if(void 0===n&&(n=!1),!n&&!Xn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Jn(e[r],t[r]);else if(Xn(t))for(var r in t)e[r]=Jn(e[r],t[r]);return e}function Zn(e,t){Object.defineProperty(e,"toString",{value:t})}function er(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw er(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(fn);return t},e}(),nr=new Map,rr=new Map,ar=1,ir=function(e){if(nr.has(e))return nr.get(e);for(;rr.has(ar);)ar++;var t=ar++;return nr.set(e,t),rr.set(t,e),t},or=function(e,t){ar=t+1,nr.set(e,t),rr.set(t,e)},lr="style[".concat(sn,"][").concat(cn,'="').concat(dn,'"]'),sr=new RegExp("^".concat(sn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ur=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},cr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fn),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(sr);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(or(c,u),ur(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},dr=function(e){for(var t=document.querySelectorAll(lr),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(sn)!==un&&(cr(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function fr(){return n.nc}var pr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(sn,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(sn,un),r.setAttribute(cn,dn);var o=fr();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},hr=function(){function e(e){this.element=pr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw er(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),mr=function(){function e(e){this.element=pr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),gr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),vr=pn,yr={isServer:!pn,useCSSOMInjection:!hn},br=function(){function e(e,t,n){void 0===e&&(e=vn),void 0===t&&(t={});var r=this;this.options=at(at({},yr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&pn&&vr&&(vr=!1,dr(this)),Zn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return rr.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(sn,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(fn)},i=0;i<n;i++)a(i);return r}(r)}))}return e.registerId=function(e){return ir(e)},e.prototype.rehydrate=function(){!this.server&&pn&&dr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(at(at({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new gr(n):t?new hr(n):new mr(n)}(this.options),new tr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ir(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ir(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ir(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),xr=/&/g,wr=/^\s*\/\/.*$/gm;function kr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=kr(e.children,t)),e}))}function Sr(e){var t,n,r,a=void 0===e?vn:e,i=a.options,o=void 0===i?vn:i,l=a.plugins,s=void 0===l?gn:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===ft&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(xr,n).replace(r,u))})),o.prefix&&c.push(en),c.push(Jt);var d=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(wr,""),u=tn(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(u=kr(u,o.namespace));var d,f=[];return Xt(u,function(e){var t=Ct(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||er(15),_n(e,t.name)}),5381).toString():"",d}var Er=new br,Cr=Sr(),jr=e.createContext({shouldForwardProp:void 0,styleSheet:Er,stylis:Cr}),_r=(jr.Consumer,e.createContext(void 0));function zr(){return(0,e.useContext)(jr)}function Pr(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],i=zr().styleSheet,o=(0,e.useMemo)((function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,i]),l=(0,e.useMemo)((function(){return Sr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){lt()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var s=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:l}}),[t.shouldForwardProp,o,l]);return e.createElement(jr.Provider,{value:s},e.createElement(_r.Provider,{value:l},t.children))}var Tr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Cr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Zn(this,(function(){throw er(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Cr),this.name+e.hash},e}(),Fr=function(e){return e>="A"&&e<="Z"};function Or(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Fr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Nr=function(e){return null==e||!1===e||""===e},Rr=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!Nr(i)&&(Array.isArray(i)&&i.isCss||Gn(i)?r.push("".concat(Or(a),":"),i,";"):Xn(i)?r.push.apply(r,it(it(["".concat(a," {")],Rr(i),!1),["}"],!1)):r.push("".concat(Or(a),": ").concat((t=a,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ln||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ar(e,t,n,r){return Nr(e)?[]:Yn(e)?[".".concat(e.styledComponentId)]:Gn(e)?!Gn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Ar(e(t),t,n,r):e instanceof Tr?n?(e.inject(n,r),[e.getName(r)]):[e]:Xn(e)?Rr(e):Array.isArray(e)?Array.prototype.concat.apply(gn,e.map((function(e){return Ar(e,t,n,r)}))):[e.toString()];var a}function Lr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Gn(n)&&!Yn(n))return!1}return!0}var Dr=zn(dn),$r=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Lr(e),this.componentId=t,this.baseHash=_n(Dr,t),this.baseStyle=n,br.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Kn(r,this.staticRulesId);else{var a=Qn(Ar(this.rules,e,t,n)),i=Cn(_n(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=Kn(r,i),this.staticRulesId=i}else{for(var l=_n(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Qn(Ar(c,e,t,n));l=_n(l,d+u),s+=d}}if(s){var f=Cn(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Kn(r,f)}}return r},e}(),Mr=e.createContext(void 0);Mr.Consumer;var Br={};new Set;function Ir(t,n,r){var a=Yn(t),i=t,o=!Fn(t),l=n.attrs,s=void 0===l?gn:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":kn(e);Br[n]=(Br[n]||0)+1;var r="".concat(n,"-").concat(Pn(dn+n+Br[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return Fn(e)?"styled.".concat(e):"Styled(".concat(Tn(e),")")}(t):d,p=n.displayName&&n.componentId?"".concat(kn(n.displayName),"-").concat(n.componentId):n.componentId||c,h=a&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new $r(r,p,a?i.componentStyle:void 0);function b(t,n){return function(t,n,r){var a=t.attrs,i=t.componentStyle,o=t.defaultProps,l=t.foldedComponentIds,s=t.styledComponentId,u=t.target,c=e.useContext(Mr),d=zr(),f=t.shouldForwardProp||d.shouldForwardProp,p=yn(n,c,o)||vn,h=function(e,t,n){for(var r,a=at(at({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=Gn(r=e[i])?r(a):r;for(var l in o)a[l]="className"===l?Kn(a[l],o[l]):"style"===l?at(at({},a[l]),o[l]):o[l]}return t.className&&(a.className=Kn(a.className,t.className)),a}(a,n,p),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var n=zr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),b=Kn(l,s);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[Fn(m)&&!bn.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,e.createElement)(m,g)}(x,t,n)}b.displayName=f;var x=e.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=a?Kn(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=p,x.target=a?i.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Jn(e,a[r],!0);return e}({},i.defaultProps,e):e}}),Zn(x,(function(){return".".concat(x.styledComponentId)})),o&&qn(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Ur(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Hr=function(e){return Object.assign(e,{isCss:!0})};function Wr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Gn(e)||Xn(e))return Hr(Ar(Ur(gn,it([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ar(r):Hr(Ar(Ur(r,t)))}function Vr(e,t,n){if(void 0===n&&(n=vn),!t)throw er(1,t);var r=function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,Wr.apply(void 0,it([r],a,!1)))};return r.attrs=function(r){return Vr(e,t,at(at({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Vr(e,t,at(at({},n),r))},r}var qr=function(e){return Vr(Ir,e)},Gr=qr;bn.forEach((function(e){Gr[e]=qr(e)}));var Yr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Lr(e),br.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(Qn(Ar(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&br.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Kr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Qn(Wr.apply(void 0,it([e],t,!1))),a=Pn(r);return new Tr(a,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=fr(),r=Qn([n&&'nonce="'.concat(n,'"'),"".concat(sn,'="true"'),"".concat(cn,'="').concat(dn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw er(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw er(2);var r=t.instance.toString();if(!r)return[];var a=((n={})[sn]="",n[cn]=dn,n.dangerouslySetInnerHTML={__html:r},n),i=fr();return i&&(a.nonce=i),[e.createElement("style",at({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new br({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw er(2);return e.createElement(Pr,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw er(3)}})(),"__sc-".concat(sn,"__");var Qr=n(579);const Xr=Gr.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: white;
`,Jr=Gr.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`,Zr=Gr.img`
  height: 40px;
  margin-right: 10px;
`,ea=Gr.div`
  display: flex;
  gap: 2rem;
`,ta=Gr(Xe)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`,na=Gr.div`
  position: relative;
  display: inline-block;
  
  &:hover .dropdown-content {
    display: block;
  }
`,ra=Gr.div`
  display: none;
  position: absolute;
  background-color: #111;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
`,aa=Gr(Xe)`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
  &:hover {
    background-color: #222;
  }
`,ia=Gr(Xe)`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: white;
  padding: 0.5rem 1.5rem;
  border: 1px solid white;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: black;
  }
`,oa=Gr.span`
  margin-left: 8px;
`,la=()=>(0,Qr.jsxs)(Xr,{children:[(0,Qr.jsxs)(Jr,{as:Xe,to:"/",children:[(0,Qr.jsx)(Zr,{src:"/logo.svg",alt:"GameGenesis Logo"}),"GameGenesis"]}),(0,Qr.jsxs)(ea,{children:[(0,Qr.jsxs)(na,{children:[(0,Qr.jsx)(ta,{to:"/services",children:"Service \u25bc"}),(0,Qr.jsxs)(ra,{className:"dropdown-content",children:[(0,Qr.jsx)(aa,{to:"/services/game-development",children:"Game Development"}),(0,Qr.jsx)(aa,{to:"/services/3d-modeling",children:"3D Modeling"}),(0,Qr.jsx)(aa,{to:"/services/animation",children:"Animation"}),(0,Qr.jsx)(aa,{to:"/genres",children:"Game Genres"}),(0,Qr.jsx)(aa,{to:"/team",children:"Team Composition"}),(0,Qr.jsx)(aa,{to:"/technology",children:"Game Technology"})]})]}),(0,Qr.jsx)(ta,{to:"/about",children:"About Us"}),(0,Qr.jsx)(ta,{to:"/hire",children:"Hire"}),(0,Qr.jsx)(ta,{to:"/portfolio",children:"Portfolio"}),(0,Qr.jsx)(ta,{to:"/blog",children:"Blog"})]}),(0,Qr.jsxs)(ia,{to:"/contact",children:["Contact Us ",(0,Qr.jsx)(oa,{children:"\u2192"})]})]}),sa=n.p+"static/media/hero.4e677964764756ac0f6b.png",ua=Gr.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
  overflow: hidden;
  background-color: #111;
`,ca=Gr.div`
  width: 90%;
  height: 85vh;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);

    &::before {
      opacity: 1;
    }

    .hero-content {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,da=Gr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 2;

  ${ca}:hover & {
    opacity: 1;
  }
`,fa=Gr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  z-index: 3;
`,pa=Gr.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 1.1;
  font-family: 'Orbitron', sans-serif;
`,ha=Gr.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 700px;
`,ma=Gr.div`
  display: flex;
  gap: 1rem;
`,ga=Gr(Xe)`
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
`,va=Gr(ga)`
  background-color: #4ECDC4;
  color: black;
  
  &:hover {
    background-color: #3DBCB4;
  }
`,ya=Gr(ga)`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,ba=Gr.span`
  margin-left: 8px;
`,xa=()=>(0,Qr.jsx)(ua,{children:(0,Qr.jsxs)(ca,{children:[(0,Qr.jsx)("img",{src:sa,alt:"Hero background",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}}),(0,Qr.jsx)(da,{}),(0,Qr.jsxs)(fa,{className:"hero-content",children:[(0,Qr.jsx)(pa,{children:"We create worlds for you to play"}),(0,Qr.jsx)(ha,{children:"Lorem ipsum dolor sit amet. Qui debitis mollitia et quos possimus aut nihil iure. Non molestiae nisi qui vitae dolore ut fuga veritatis sit reprehenderit eius quo rerum exercitationem. Id iure eius et quaerat nulla et temporibus voluptas cum tenetur corrupti qui debitis saepe!"}),(0,Qr.jsxs)(ma,{children:[(0,Qr.jsxs)(va,{to:"/get-started",children:["Get Started ",(0,Qr.jsx)(ba,{children:"\u2192"})]}),(0,Qr.jsx)(ya,{to:"/learn-more",children:"Learn More"})]})]})]})}),wa=Gr.section`
  background-color: #000;
  color: white;
  padding: 5rem 2rem;
  width: 100%;
`,ka=Gr.div`
  margin-bottom: 8rem;
  padding-left: 5rem;
`,Sa=Gr(Xe)`
  font-size: 4.5rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  
  span {
    display: inline-block;
    background: linear-gradient(to right, #4ECDC4, #FF6B6B);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  svg {
    margin-left: 1rem;
    font-size: 3rem;
    color: #FF6B6B;
  }
`,Ea=Gr.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Ca=Gr.div`
  text-align: center;
  flex: 1;
  min-width: 220px;
  background-color: #111;
  border-radius: 10px;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(78, 205, 196, 0.2);
  }
`,ja=Gr.h3`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: 'Orbitron', sans-serif;
  
  span {
    background: linear-gradient(to right, #4ECDC4, #FF6B6B);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`,_a=Gr.p`
  font-size: 1.2rem;
  line-height: 1.4;
`,za=()=>(0,Qr.jsxs)(wa,{children:[(0,Qr.jsx)(ka,{children:(0,Qr.jsxs)(Sa,{to:"/about",children:["About Us ",(0,Qr.jsx)("span",{children:"\u2192"})]})}),(0,Qr.jsxs)(Ea,{children:[(0,Qr.jsxs)(Ca,{children:[(0,Qr.jsxs)(ja,{children:["350",(0,Qr.jsx)("span",{children:"+"})]}),(0,Qr.jsx)(_a,{children:"Game Artists and Developers"})]}),(0,Qr.jsxs)(Ca,{children:[(0,Qr.jsxs)(ja,{children:["350",(0,Qr.jsx)("span",{children:"+"})]}),(0,Qr.jsx)(_a,{children:"Game Artists and Developers"})]}),(0,Qr.jsxs)(Ca,{children:[(0,Qr.jsxs)(ja,{children:["350",(0,Qr.jsx)("span",{children:"+"})]}),(0,Qr.jsx)(_a,{children:"Game Artists and Developers"})]}),(0,Qr.jsxs)(Ca,{children:[(0,Qr.jsxs)(ja,{children:["350",(0,Qr.jsx)("span",{children:"+"})]}),(0,Qr.jsx)(_a,{children:"Game Artists and Developers"})]})]})]}),Pa=n.p+"static/media/j.5ea1418198b14100e1da.png",Ta=Gr.section`
  background-color: #000;
  color: white;
  padding: 6rem 2rem;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: radial-gradient(circle at top left, rgba(60, 0, 60, 0.3), rgba(0, 0, 0, 0.9) 70%);
`,Fa=Gr.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
`,Oa=Gr.div`
  flex: 1;
  min-width: 300px;
  padding: 2rem;
  z-index: 1;
  
  @media (max-width: 1024px) {
    flex: 100%;
  }
`,Na=Gr.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  z-index: 1;
  align-content: center;
  
  @media (max-width: 1024px) {
    flex: 100%;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`,Ra=Gr.div`
  margin-bottom: 2rem;
`,Aa=Gr.h2`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.1;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 0.5rem;
`,La=Gr.span`
  background: linear-gradient(to right, #4ECDC4, #FF6B6B);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: flex;
  align-items: center;
  font-size: 3.5rem;
  
  span {
    margin-left: 0.5rem;
    color: #FF6B6B;
  }
`,Da=Gr.div`
  background-image: url(${Pa});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 650px;
  width: 100%;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10%;
    width: 120%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(139, 0, 139, 0.4), rgba(60, 0, 60, 0) 70%);
    z-index: -1;
  }
`,$a=Gr.div`
  border: 1px solid #FF6B6B;
  border-radius: 8px;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(60, 0, 60, 0.8), rgba(0, 0, 0, 0.9));
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(255, 107, 107, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.2);
  }
`,Ma=Gr.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`,Ba=Gr.div`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  color: #4ECDC4;
  font-size: 2rem;
  
  svg {
    fill: #4FFF4F;
    width: 100%;
    height: 100%;
  }
`,Ia=Gr.h3`
  font-size: 1.5rem;
  font-family: 'Orbitron', sans-serif;
  color: #4ECDC4;
`,Ua=Gr.p`
  font-size: 1rem;
  line-height: 1.5;
  overflow: hidden;
  flex: 1;
  color: white;
`,Ha=()=>(0,Qr.jsx)(Ta,{children:(0,Qr.jsxs)(Fa,{children:[(0,Qr.jsxs)(Oa,{children:[(0,Qr.jsxs)(Ra,{children:[(0,Qr.jsx)(Aa,{children:"Game Development"}),(0,Qr.jsxs)(La,{children:["Services ",(0,Qr.jsx)("span",{children:"\u2192"})]})]}),(0,Qr.jsx)(Da,{})]}),(0,Qr.jsxs)(Na,{children:[(0,Qr.jsxs)($a,{children:[(0,Qr.jsxs)(Ma,{children:[(0,Qr.jsx)(Ba,{children:(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"40",height:"40",children:(0,Qr.jsx)("path",{d:"M7.5 4C4.46 4 2 6.46 2 9.5S4.46 15 7.5 15c2.64 0 4.84-1.84 5.41-4.3.3.07.59.15.9.15 2.21 0 4-1.79 4-4s-1.79-4-4-4c-.31 0-.6.08-.9.15C12.34 5.84 10.14 4 7.5 4zm0 2c1.93 0 3.5 1.57 3.5 3.5S9.43 13 7.5 13 4 11.43 4 9.5 5.57 6 7.5 6zm6.5 1c1.1 0 2 .9 2 2s-.9 2-2 2c1.1 0-2-.9-2-2s.9-2 2-2zm2.5 8c-2.21 0-4 1.79-4 4v.5c0 .13.01.26.02.39.03.25.09.5.16.74l.11.31c.06.16.13.31.22.46.04.07.08.13.13.2.13.18.28.35.44.5.11.09.23.18.35.26.08.05.16.1.24.15.14.07.29.13.44.19.1.03.19.07.29.09.27.07.55.11.84.11s.57-.04.84-.11c.1-.03.19-.06.29-.09.15-.06.3-.12.44-.19.08-.04.16-.1.24-.15.12-.08.24-.16.35-.26.16-.15.31-.32.44-.5.05-.07.09-.13.13-.2.08-.15.16-.3.22-.46l.11-.31c.07-.24.13-.49.16-.74.02-.13.02-.26.02-.39v-.5c.01-2.21-1.79-4-3.99-4zm-7 0c-3.31 0-6 2.69-6 6v.5c0 .13.01.26.02.39.03.25.09.5.16.74l.11.31c.06.16.13.31.22.46.04.07.08.13.13.2.13.18.28.35.44.5.11.09.23.18.35.26.08.05.16.1.24.15.14.07.29.13.44.19.1.03.19.07.29.09.27.07.55.11.84.11s.57-.04.84-.11c.1-.03.19-.06.29-.09.15-.06.3-.12.44-.19.08-.04.16-.1.24-.15.12-.08.24-.16.35-.26.16-.15.31-.32.44-.5.05-.07.09-.13.13-.2.08-.15.16-.3.22-.46l.11-.31c.07-.24.13-.49.16-.74.02-.13.02-.26.02-.39v-.5c0-3.31-2.69-6-6-6z"})})}),(0,Qr.jsx)(Ia,{children:"Full-Cycle Development"})]}),(0,Qr.jsx)(Ua,{children:"Our team handles every aspect of game development from concept to launch. We create stunning visuals, engaging gameplay, and optimize performance to deliver a polished gaming experience that meets the highest industry standards."})]}),(0,Qr.jsxs)($a,{children:[(0,Qr.jsxs)(Ma,{children:[(0,Qr.jsx)(Ba,{children:(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"40",height:"40",children:(0,Qr.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z"})})}),(0,Qr.jsx)(Ia,{children:"Game Co-Development"})]}),(0,Qr.jsx)(Ua,{children:"Partner with our experienced team to enhance your existing project. We seamlessly integrate with your workflow to provide specialized expertise, additional resources, and innovative solutions that elevate your game to new heights."})]}),(0,Qr.jsxs)($a,{children:[(0,Qr.jsxs)(Ma,{children:[(0,Qr.jsx)(Ba,{children:(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"40",height:"40",children:(0,Qr.jsx)("path",{d:"M17 15l1.55 1.55c-.96 1.69-3.33 3.04-5.55 3.37V11h3V9h-3V7.82C14.16 7.4 15 6.3 15 5c0-1.65-1.35-3-3-3S9 3.35 9 5c0 1.3.84 2.4 2 2.82V9H8v2h3v8.92c-2.22-.33-4.59-1.68-5.55-3.37L7 15l-4-3 4-3-1.55-1.55C6.37 5.11 9.5 4 12 4c2.5 0 5.63 1.11 6.55 3.45L17 9l4 3-4 3z"})})}),(0,Qr.jsx)(Ia,{children:"2D & 3D Development"})]}),(0,Qr.jsx)(Ua,{children:"From vibrant 2D worlds to immersive 3D environments, we craft visually stunning and technically optimized game assets. Our artists and developers collaborate to create captivating visuals that bring your game's universe to life."})]}),(0,Qr.jsxs)($a,{children:[(0,Qr.jsxs)(Ma,{children:[(0,Qr.jsx)(Ba,{children:(0,Qr.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"40",height:"40",children:[(0,Qr.jsx)("path",{d:"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"}),(0,Qr.jsx)("circle",{cx:"14.5",cy:"13.5",r:"1.5"}),(0,Qr.jsx)("circle",{cx:"18.5",cy:"10.5",r:"1.5"})]})}),(0,Qr.jsx)(Ia,{children:"Game Dev for PC & Console"})]}),(0,Qr.jsx)(Ua,{children:"We specialize in developing high-performance games for PC and major console platforms. Our expertise in platform-specific optimization ensures your game delivers a smooth, responsive experience across different hardware configurations."})]})]})]})}),Wa=Gr.section`
  background-color: #000;
  color: white;
  padding: 6rem 2rem;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: radial-gradient(circle at top right, rgba(60, 0, 60, 0.3), rgba(0, 0, 0, 0.9) 70%);
`,Va=Gr.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
`,qa=Gr.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  z-index: 1;
  align-content: center;
  
  @media (max-width: 1024px) {
    flex: 100%;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`,Ga=Gr.div`
  flex: 1;
  min-width: 300px;
  padding: 2rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex: 100%;
  }
`,Ya=Gr.div`
  border: 1px solid #FF6B6B;
  border-radius: 8px;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(60, 0, 60, 0.8), rgba(0, 0, 0, 0.9));
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(255, 107, 107, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.2);
  }
`,Ka=Gr.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`,Qa=Gr.div`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  color: #4ECDC4;
  font-size: 2rem;
  
  svg {
    fill: #4FFF4F;
    width: 100%;
    height: 100%;
  }
`,Xa=Gr.h3`
  font-size: 1.5rem;
  font-family: 'Orbitron', sans-serif;
  color: #4ECDC4;
`,Ja=Gr.p`
  font-size: 1rem;
  line-height: 1.5;
  overflow: hidden;
  flex: 1;
  color: white;
`,Za=Gr.div`
  background-image: url(${Pa});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 750px;
  width: 100%;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10%;
    width: 120%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(139, 0, 139, 0.4), rgba(60, 0, 60, 0) 70%);
    z-index: -1;
  }
`,ei=()=>(0,Qr.jsx)(Wa,{children:(0,Qr.jsxs)(Va,{children:[(0,Qr.jsxs)(qa,{children:[(0,Qr.jsxs)(Ya,{children:[(0,Qr.jsxs)(Ka,{children:[(0,Qr.jsx)(Qa,{children:(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"40",height:"40",children:(0,Qr.jsx)("path",{d:"M7.5 4C4.46 4 2 6.46 2 9.5S4.46 15 7.5 15c2.64 0 4.84-1.84 5.41-4.3.3.07.59.15.9.15 2.21 0 4-1.79 4-4s-1.79-4-4-4c-.31 0-.6.08-.9.15C12.34 5.84 10.14 4 7.5 4zm0 2c1.93 0 3.5 1.57 3.5 3.5S9.43 13 7.5 13 4 11.43 4 9.5 5.57 6 7.5 6zm6.5 1c1.1 0 2 .9 2 2s-.9 2-2 2c1.1 0-2-.9-2-2s.9-2 2-2zm2.5 8c-2.21 0-4 1.79-4 4v.5c0 .13.01.26.02.39.03.25.09.5.16.74l.11.31c.06.16.13.31.22.46.04.07.08.13.13.2.13.18.28.35.44.5.11.09.23.18.35.26.08.05.16.1.24.15.14.07.29.13.44.19.1.03.19.07.29.09.27.07.55.11.84.11s.57-.04.84-.11c.1-.03.19-.06.29-.09.15-.06.3-.12.44-.19.08-.04.16-.1.24-.15.12-.08.24-.16.35-.26.16-.15.31-.32.44-.5.05-.07.09-.13.13-.2.08-.15.16-.3.22-.46l.11-.31c.07-.24.13-.49.16-.74.02-.13.02-.26.02-.39v-.5c.01-2.21-1.79-4-3.99-4zm-7 0c-3.31 0-6 2.69-6 6v.5c0 .13.01.26.02.39.03.25.09.5.16.74l.11.31c.06.16.13.31.22.46.04.07.08.13.13.2.13.18.28.35.44.5.11.09.23.18.35.26.08.05.16.1.24.15.14.07.29.13.44.19.1.03.19.07.29.09.27.07.55.11.84.11s.57-.04.84-.11c.1-.03.19-.06.29-.09.15-.06.3-.12.44-.19.08-.04.16-.1.24-.15.12-.08.24-.16.35-.26.16-.15.31-.32.44-.5.05-.07.09-.13.13-.2.08-.15.16-.3.22-.46l.11-.31c.07-.24.13-.49.16-.74.02-.13.02-.26.02-.39v-.5c0-3.31-2.69-6-6-6z"})})}),(0,Qr.jsx)(Xa,{children:"Full-Cycle Development"})]}),(0,Qr.jsx)(Ja,{children:"Our team handles every aspect of game development from concept to launch. We create stunning visuals, engaging gameplay, and optimize performance to deliver a polished gaming experience that meets the highest industry standards."})]}),(0,Qr.jsxs)(Ya,{children:[(0,Qr.jsxs)(Ka,{children:[(0,Qr.jsx)(Qa,{children:(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"40",height:"40",children:(0,Qr.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z"})})}),(0,Qr.jsx)(Xa,{children:"Game Co-Development"})]}),(0,Qr.jsx)(Ja,{children:"Partner with our experienced team to enhance your existing project. We seamlessly integrate with your workflow to provide specialized expertise, additional resources, and innovative solutions that elevate your game to new heights."})]}),(0,Qr.jsxs)(Ya,{children:[(0,Qr.jsxs)(Ka,{children:[(0,Qr.jsx)(Qa,{children:(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"40",height:"40",children:(0,Qr.jsx)("path",{d:"M17 15l1.55 1.55c-.96 1.69-3.33 3.04-5.55 3.37V11h3V9h-3V7.82C14.16 7.4 15 6.3 15 5c0-1.65-1.35-3-3-3S9 3.35 9 5c0 1.3.84 2.4 2 2.82V9H8v2h3v8.92c-2.22-.33-4.59-1.68-5.55-3.37L7 15l-4-3 4-3-1.55-1.55C6.37 5.11 9.5 4 12 4c2.5 0 5.63 1.11 6.55 3.45L17 9l4 3-4 3z"})})}),(0,Qr.jsx)(Xa,{children:"2D & 3D Development"})]}),(0,Qr.jsx)(Ja,{children:"From vibrant 2D worlds to immersive 3D environments, we craft visually stunning and technically optimized game assets. Our artists and developers collaborate to create captivating visuals that bring your game's universe to life."})]}),(0,Qr.jsxs)(Ya,{children:[(0,Qr.jsxs)(Ka,{children:[(0,Qr.jsx)(Qa,{children:(0,Qr.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"40",height:"40",children:[(0,Qr.jsx)("path",{d:"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"}),(0,Qr.jsx)("circle",{cx:"14.5",cy:"13.5",r:"1.5"}),(0,Qr.jsx)("circle",{cx:"18.5",cy:"10.5",r:"1.5"})]})}),(0,Qr.jsx)(Xa,{children:"Game Dev for PC & Console"})]}),(0,Qr.jsx)(Ja,{children:"We specialize in developing high-performance games for PC and major console platforms. Our expertise in platform-specific optimization ensures your game delivers a smooth, responsive experience across different hardware configurations."})]})]}),(0,Qr.jsx)(Ga,{children:(0,Qr.jsx)(Za,{})})]})}),ti=n.p+"static/media/castel.4823ee03a399d7f6f75c.png",ni=Gr.section`
  background-color: #000;
  color: white;
  padding: 6rem 2rem;
  width: 100%;
  overflow: hidden;
  position: relative;
`,ri=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,ai=Gr.div`
  margin-bottom: 3rem;
`,ii=Gr.h2`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.1;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 0.5rem;
  color: white;
`,oi=Gr.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,li=Gr.span`
  background: linear-gradient(to right, #8EE3D0, #FF6B6B);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 3.5rem;
  font-family: 'Orbitron', sans-serif;
  
  span {
    margin-left: 0.5rem;
    color: #FF6B6B;
  }
`,si=Gr.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 900px;
  margin-bottom: 3rem;
`,ui=Gr.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,ci=Gr.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.2);
    
    img {
      transform: scale(1.1);
    }
  }
`,di=Gr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`,fi=Gr.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,pi=Gr.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  color: white;
  margin: 0;
`,hi=()=>(0,Qr.jsx)(ni,{children:(0,Qr.jsxs)(ri,{children:[(0,Qr.jsxs)(ai,{children:[(0,Qr.jsx)(ii,{children:"Genre of Game"}),(0,Qr.jsx)(oi,{children:(0,Qr.jsxs)(li,{children:["We Serve ",(0,Qr.jsx)("span",{children:"\u2192"})]})}),(0,Qr.jsx)(si,{children:"As a top game development company, we pride ourselves on delivering cutting-edge solutions that redefine gaming experiences. Explore our modern-edge game development services that can help you set new standards in the gaming industry."})]}),(0,Qr.jsx)(ui,{children:["Adventure","Role-Playing","Strategy","Simulation","Action","Puzzle","Sports","Racing"].map(((e,t)=>(0,Qr.jsxs)(ci,{children:[(0,Qr.jsx)(di,{src:ti,alt:`${e} Games`}),(0,Qr.jsx)(fi,{children:(0,Qr.jsx)(pi,{children:e})})]},t)))})]})}),mi=Gr.section`
  background-color: #000;
  color: white;
  padding: 6rem 2rem;
  width: 100%;
  overflow: hidden;
  position: relative;
`,gi=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,vi=Gr.div`
  margin-bottom: 3rem;
`,yi=Gr.h2`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.1;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 0.5rem;
  color: white;
`,bi=Gr.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,xi=Gr.span`
  background: linear-gradient(to right, #8EE3D0, #FF6B6B);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 3.5rem;
  font-family: 'Orbitron', sans-serif;
  
  span {
    margin-left: 0.5rem;
    color: #FF6B6B;
  }
`,wi=Gr.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 900px;
  margin-bottom: 3rem;
`,ki=Gr.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Si=(Kr`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`,Kr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Kr`
  0% { 
    transform: translateY(100px);
    opacity: 0;
  }
  10% { 
    transform: translateY(0);
    opacity: 1;
  }
  15% { 
    transform: rotate(0deg);
  }
  20% { 
    transform: rotate(15deg);
  }
  25% { 
    transform: rotate(0deg);
  }
  30% { 
    transform: rotate(15deg);
  }
  35% {
    transform: rotate(0deg);
  }
  100% { 
    transform: rotate(0deg);
    opacity: 1;
  }
`),Ei=Kr`
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
  }
  10% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  80% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Ci=Gr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,ji=Gr.div`
  position: relative;
  width: 100px;
  height: 110px;
  margin-bottom: -25px;
  z-index: 10;
  animation: ${Si} 8s ease-in-out infinite;
  animation-fill-mode: both;
`,_i=Gr.div`
  width: 50px;
  height: 80px;
  background-color: #FFB6A6;
  border-radius: 12px 12px 0 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  
  /* Add thumb */
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 25px;
    background-color: #FFB6A6;
    border-radius: 8px;
    left: -8px;
    top: 35px;
    transform: rotate(-20deg);
  }
  
  /* Add fingers */
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 20px;
    background-color: #FFB6A6;
    border-radius: 12px 12px 0 0;
    top: -12px;
    left: 0;
    
    /* Create finger separations with box-shadow */
    box-shadow: 
      -8px 0 0 -4px rgba(0, 0, 0, 0.1),
      8px 0 0 -4px rgba(0, 0, 0, 0.1),
      24px 0 0 -4px rgba(0, 0, 0, 0.1);
  }
`,zi=Gr.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #4FFF4F;
  color: black;
  padding: 5px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: bold;
  z-index: 2;
  animation: ${Ei} 8s ease-in-out infinite;
  animation-delay: 1.2s;
  animation-fill-mode: both;
`,Pi=Gr.div`
  position: absolute;
  top: 35px;
  left: 5px;
  background-color: #FF6B6B;
  color: white;
  padding: 5px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: bold;
  z-index: 2;
  animation: ${Ei} 8s ease-in-out infinite;
  animation-delay: 1.5s;
  animation-fill-mode: both;
`,Ti=Gr.div`
  width: 100%;
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 2rem 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.2);
    border-color: #FF6B6B;
  }
`,Fi=Gr.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.4rem;
  color: white;
  margin: 0 0 0.5rem 0;
`,Oi=Gr.h4`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  color: #4ECDC4;
  margin: 0;
`,Ni=Gr.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  margin: 0.5rem 0;
`,Ri=Kr`
  0% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
`,Ai=Gr.div`
  position: absolute;
  width: 10px;
  height: 24px;
  background-color: #FFB6A6;
  border-radius: 5px;
  top: -20px;
  
  &:nth-child(1) {
    left: 5px;
    height: 28px;
    animation: ${Ri} 1s ease-in-out infinite;
    animation-delay: 0.1s;
  }
  
  &:nth-child(2) {
    left: 18px;
    height: 32px;
    animation: ${Ri} 1s ease-in-out infinite;
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    left: 31px;
    height: 28px;
    animation: ${Ri} 1s ease-in-out infinite;
    animation-delay: 0.3s;
  }
  
  &:nth-child(4) {
    left: 43px;
    height: 22px;
    animation: ${Ri} 1s ease-in-out infinite;
    animation-delay: 0.4s;
  }
`,Li=()=>(0,Qr.jsx)(mi,{children:(0,Qr.jsxs)(gi,{children:[(0,Qr.jsxs)(vi,{children:[(0,Qr.jsx)(yi,{children:"Team Composition You Get For Your Game"}),(0,Qr.jsx)(bi,{children:(0,Qr.jsxs)(xi,{children:["Development Project ",(0,Qr.jsx)("span",{children:"\u2192"})]})}),(0,Qr.jsx)(wi,{children:"As a top game development company, we pride ourselves on delivering cutting-edge solutions that redefine gaming experiences. Explore our modern-edge game development services that can help you set new standards in the gaming industry."})]}),(0,Qr.jsx)(ki,{children:["Game Designer","Level Designer","UI/UX Designer","Character Designer","Environment Artist","Texture Artist","3D Modeler","Animator","Technical Artist","VFX Artist","Sound Designer","QA Tester"].map(((e,t)=>(0,Qr.jsxs)(Ci,{children:[(0,Qr.jsxs)(ji,{className:"hand-container",style:{animationDelay:.2*t+"s"},children:[(0,Qr.jsx)(zi,{className:"designer-text-green",style:{animationDelay:1.2+.2*t+"s"},children:"I am"}),(0,Qr.jsxs)(_i,{children:[(0,Qr.jsx)(Ai,{}),(0,Qr.jsx)(Ai,{}),(0,Qr.jsx)(Ai,{}),(0,Qr.jsx)(Ai,{})]}),(0,Qr.jsx)(Pi,{className:"designer-text-orange",style:{animationDelay:1.5+.2*t+"s"},children:"Designer"})]}),(0,Qr.jsx)(Ti,{className:"role-card",children:(0,Qr.jsxs)("div",{children:[(0,Qr.jsx)(Fi,{children:"Design"}),(0,Qr.jsx)(Oi,{children:"Sprint"}),(0,Qr.jsx)(Ni,{children:"Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse."})]})})]},t)))})]})}),Di=Gr.section`
  background-color: #000;
  color: white;
  padding: 6rem 2rem;
  width: 100%;
  overflow: hidden;
  position: relative;
`,$i=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,Mi=Gr.div`
  margin-bottom: 3rem;
`,Bi=Gr.h2`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.1;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 0.5rem;
  color: white;
`,Ii=Gr.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Ui=Gr.span`
  background: linear-gradient(to right, #8EE3D0, #FF6B6B);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 3.5rem;
  font-family: 'Orbitron', sans-serif;
  
  span {
    margin-left: 0.5rem;
    color: #FF6B6B;
  }
`,Hi=Gr.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 900px;
  margin-bottom: 3rem;
`,Wi=Gr.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Vi=Kr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,qi=Kr`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,Gi=Kr`
  0% {
    opacity: 0.7;
    box-shadow: 0 0 4px #FF0000;
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 6px #FF0000, 0 0 8px #FF0000;
  }
  100% {
    opacity: 0.7;
    box-shadow: 0 0 4px #FF0000;
  }
`,Yi=Gr.div`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid #1E90FF;
  border-radius: 8px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${Vi} 0.8s ease-out forwards;
  animation-delay: ${e=>e.delay||"0s"};
  opacity: 0;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(30, 144, 255, 0.3);
  }
`,Ki=Gr.div`
  position: relative;
  width: 90px;
  height: 90px;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 5px rgba(30, 144, 255, 0.3));
  
  svg {
    width: 100%;
    height: 100%;
    animation: ${qi} 3s ease-in-out infinite;
  }
`,Qi=Gr.div`
  position: absolute;
  top: 0;
  right: 18px;
  width: 8px;
  height: 8px;
  background-color: #FF0000;
  border-radius: 50%;
  animation: ${Gi} 2s ease-in-out infinite;
`,Xi=Gr.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`,Ji=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
`,Zi=Gr(Di)`
  margin-top: 5rem;
`,eo=Gr(Yi)`
  border-color: #FF6B6B;
  position: relative;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
  }
  
  &::before {
    content: '${e=>e.number}';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #FF6B6B, #FF3366);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
  }
`,to=Gr.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  background-color: rgba(255, 107, 107, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 50%;
    height: 50%;
    fill: #FF6B6B;
  }
`,no=()=>{const e=()=>(0,Qr.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",fill:"#1E90FF",children:[(0,Qr.jsx)("path",{d:"M448 64H192C85.96 64 0 149.96 0 256s85.96 192 192 192h256c106.04 0 192-85.96 192-192S554.04 64 448 64z"}),(0,Qr.jsx)("rect",{x:"160",y:"224",width:"70",height:"30",rx:"5",fill:"#003366"}),(0,Qr.jsx)("rect",{x:"180",y:"194",width:"30",height:"90",rx:"5",fill:"#003366"}),(0,Qr.jsx)("circle",{cx:"416",cy:"248",r:"18",fill:"#FFAA00"}),(0,Qr.jsx)("circle",{cx:"416",cy:"296",r:"18",fill:"#FFAA00"}),(0,Qr.jsx)("circle",{cx:"464",cy:"200",r:"18",fill:"#FFAA00"}),(0,Qr.jsx)("circle",{cx:"464",cy:"248",r:"18",fill:"#FFAA00"}),(0,Qr.jsx)("circle",{cx:"416",cy:"248",r:"18",fill:"none",stroke:"#FF8800",strokeWidth:"2"}),(0,Qr.jsx)("circle",{cx:"416",cy:"296",r:"18",fill:"none",stroke:"#FF8800",strokeWidth:"2"}),(0,Qr.jsx)("circle",{cx:"464",cy:"200",r:"18",fill:"none",stroke:"#FF8800",strokeWidth:"2"}),(0,Qr.jsx)("circle",{cx:"464",cy:"248",r:"18",fill:"none",stroke:"#FF8800",strokeWidth:"2"})]}),t=[()=>(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,Qr.jsx)("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"})}),()=>(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,Qr.jsx)("path",{d:"M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"})}),()=>(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,Qr.jsx)("path",{d:"M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"})}),()=>(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,Qr.jsx)("path",{d:"M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9L224 380.2c-13.3 4.8-24.9 8.8-33.8 11.8c-11.5 3.8-23.8 .8-32.2-7.7l-30.7-30.7c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9L224 380.2c-13.3 4.8-24.9 8.8-33.8 11.8c-11.5 3.8-23.8 .8-32.2-7.7l-1.4-1.4zM112 192a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"})})];return(0,Qr.jsxs)(Qr.Fragment,{children:[(0,Qr.jsx)(Di,{children:(0,Qr.jsxs)($i,{children:[(0,Qr.jsxs)(Mi,{children:[(0,Qr.jsx)(Bi,{children:"Game Development Technology"}),(0,Qr.jsx)(Ii,{children:(0,Qr.jsxs)(Ui,{children:["Stack We Use ",(0,Qr.jsx)("span",{children:"\u2192"})]})}),(0,Qr.jsx)(Hi,{children:"As a top game development company, we pride ourselves on delivering cutting-edge solutions that redefine gaming experiences. Explore our modern-edge game development services that can help you set new standards in the gaming industry."})]}),(0,Qr.jsx)(Wi,{children:[{name:"Unity",description:"Industry standard for cross-platform game development with powerful 2D and 3D capabilities. Perfect for indie and high-end commercial projects."},{name:"Unreal Engine",description:"Cutting-edge graphics and rendering technology for creating visually stunning games with advanced physics and realistic environments."},{name:"Mobile Technology",description:"Specialized frameworks for iOS and Android development, optimized for performance and reach. Perfect for casual and mid-core gaming."},{name:"Cloud Gaming",description:"Server-side rendering and streaming technology that delivers high-quality gaming experiences on any device without hardware limitations."}].map(((t,n)=>(0,Qr.jsxs)(Yi,{delay:.2*n+"s",children:[(0,Qr.jsxs)(Ki,{style:{animationDelay:.5*n+"s"},children:[(0,Qr.jsx)(e,{}),(0,Qr.jsx)(Qi,{style:{animationDelay:.3*n+"s"}})]}),(0,Qr.jsx)(Xi,{children:t.name}),(0,Qr.jsx)(Ji,{children:t.description})]},n)))})]})}),(0,Qr.jsx)(Zi,{children:(0,Qr.jsxs)($i,{children:[(0,Qr.jsxs)(Mi,{children:[(0,Qr.jsx)(Bi,{children:"How We Work"}),(0,Qr.jsx)(Ii,{children:(0,Qr.jsxs)(Ui,{children:["Our Process ",(0,Qr.jsx)("span",{children:"\u2192"})]})}),(0,Qr.jsx)(Hi,{children:"Our streamlined development process ensures the highest quality output while maintaining transparent communication throughout the project lifecycle. We follow a proven methodology that balances creativity with technical excellence."})]}),(0,Qr.jsx)(Wi,{children:[{name:"Discovery & Planning",description:"We begin with in-depth consultations to understand your vision, target audience, and project goals. Our team creates detailed specifications and development roadmaps."},{name:"Design & Prototyping",description:"Our designers create concept art, character designs, and gameplay mechanics. We develop interactive prototypes to test and refine core experiences."},{name:"Development Sprints",description:"Using agile methodologies, we break development into manageable sprints, delivering playable builds regularly for your feedback and iterative improvement."},{name:"Testing & Launch",description:"Rigorous quality assurance process eliminates bugs and optimizes performance. We handle submission to app stores and provide launch marketing support."}].map(((e,n)=>{const r=t[n];return(0,Qr.jsxs)(eo,{number:n+1,delay:.2*n+"s",children:[(0,Qr.jsx)(to,{children:(0,Qr.jsx)(r,{})}),(0,Qr.jsx)(Xi,{children:e.name}),(0,Qr.jsx)(Ji,{children:e.description})]},n)}))})]})})]})},ro=Gr.section`
  background-color: #000;
  color: white;
  padding: 6rem 2rem;
  width: 100%;
  overflow: hidden;
  position: relative;
`,ao=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,io=Gr.div`
  margin-bottom: 3rem;
`,oo=Gr.h2`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.1;
  font-family: 'Orbitron', sans-serif;
  color: white;
`,lo=Gr.span`
  background: linear-gradient(to right, #8EE3D0, #FF6B6B);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 3.5rem;
  font-family: 'Orbitron', sans-serif;
  
  span {
    margin-left: 0.5rem;
    color: #FF6B6B;
  }
`,so=Gr.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 900px;
  margin-bottom: 3rem;
`,uo=Gr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,co=Kr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,fo=Kr`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`,po=Kr`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,ho=(Kr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Kr`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`),mo=Gr.div`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid #FF6B6B;
  border-radius: 8px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${co} 0.8s ease-out forwards;
  animation-delay: ${e=>e.delay||"0s"};
  opacity: 0;
  height: 100%;
`,go=Gr.div`
  width: 100px;
  height: 100px;
  margin-bottom: 1.5rem;
  position: relative;
`,vo=Gr.h3`
  font-size: 1.5rem;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 1.5rem;
  color: white;
`,yo=Gr.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`,bo=Kr`
  0% {
    box-shadow: 0 0 5px #FFCC00;
  }
  50% {
    box-shadow: 0 0 20px #FFCC00, 0 0 30px #FFCC00;
  }
  100% {
    box-shadow: 0 0 5px #FFCC00;
  }
`,xo=Gr.div`
  position: relative;
  width: 100px;
  height: 100px;
  animation: ${fo} 3s ease-in-out infinite;
  
  .bulb {
    position: absolute;
    top: 10px;
    left: 30px;
    width: 40px;
    height: 40px;
    background-color: #FFCC00;
    border-radius: 50% 50% 5px 5px;
    animation: ${bo} 2s infinite;
  }
  
  .base {
    position: absolute;
    bottom: 20px;
    left: 40px;
    width: 20px;
    height: 30px;
    background-color: #AAA;
    border-radius: 5px;
  }
  
  .light-ray {
    position: absolute;
    background-color: rgba(255, 204, 0, 0.5);
  }
  
  .ray1 {
    top: 0;
    left: 45px;
    height: 15px;
    width: 5px;
    transform: rotate(0deg);
  }
  
  .ray2 {
    top: 20px;
    left: 65px;
    height: 5px;
    width: 15px;
    transform: rotate(0deg);
  }
  
  .ray3 {
    top: 20px;
    left: 20px;
    height: 5px;
    width: 15px;
    transform: rotate(0deg);
  }
`,wo=Kr`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,ko=Gr.div`
  position: relative;
  width: 100px;
  height: 100px;
  animation: ${po} 4s ease-in-out infinite;
  
  .brain-main {
    position: absolute;
    top: 20px;
    left: 30px;
    width: 40px;
    height: 50px;
    background-color: #FF6B6B;
    border-radius: 20px 20px 10px 10px;
    animation: ${wo} 2s infinite;
  }
  
  .brain-left {
    position: absolute;
    top: 25px;
    left: 25px;
    width: 20px;
    height: 30px;
    background-color: #FF6B6B;
    border-radius: 10px 0 10px 10px;
    transform: rotate(-15deg);
  }
  
  .brain-right {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 20px;
    height: 30px;
    background-color: #FF6B6B;
    border-radius: 0 10px 10px 10px;
    transform: rotate(15deg);
  }
  
  .light {
    position: absolute;
    top: 5px;
    left: 40px;
    width: 20px;
    height: 20px;
    background-color: #FFCC00;
    border-radius: 50%;
    box-shadow: 0 0 10px #FFCC00;
  }
  
  .gear {
    position: absolute;
    background-color: #33AAFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .gear1 {
    top: 30px;
    left: 18px;
    width: 15px;
    height: 15px;
    animation: ${ho} 4s linear infinite;
  }
  
  .gear2 {
    top: 30px;
    right: 18px;
    width: 15px;
    height: 15px;
    animation: ${ho} 4s linear infinite reverse;
  }
`,So=Kr`
  0% {
    transform: translateX(-50px) scale(0.8);
    opacity: 0;
  }
  70% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  90% {
    transform: translateX(5px) scale(1.1);
  }
  100% {
    transform: translateX(0) scale(1);
  }
`,Eo=Gr.div`
  position: relative;
  width: 100px;
  height: 100px;
  animation: ${fo} 4s ease-in-out infinite;
  
  .target-outer {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #FF3333;
  }
  
  .target-middle {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
  }
  
  .target-inner {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #FF3333;
  }
  
  .target-center {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
  }
  
  .arrow {
    position: absolute;
    top: 45px;
    right: 40px;
    width: 40px;
    height: 10px;
    background-color: black;
    transform-origin: right center;
    animation: ${So} 3s ease-in-out infinite;
  }
  
  .arrow::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 0;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent black transparent transparent;
  }
`,Co=()=>(0,Qr.jsx)(ro,{children:(0,Qr.jsxs)(ao,{children:[(0,Qr.jsxs)(io,{children:[(0,Qr.jsxs)(oo,{children:[(0,Qr.jsx)("span",{style:{color:"#8EE3D0"},children:"Why"})," ",(0,Qr.jsxs)(lo,{children:["Choose US ",(0,Qr.jsx)("span",{children:"\u2192"})]})]}),(0,Qr.jsx)(so,{children:"As a top game development company, we pride ourselves on delivering cutting-edge solutions that redefine gaming experiences. Explore our modern-edge game development services that can help you set new standards in the gaming industry."})]}),(0,Qr.jsxs)(uo,{children:[(0,Qr.jsxs)(mo,{delay:"0.2s",children:[(0,Qr.jsx)(go,{children:(0,Qr.jsxs)(xo,{children:[(0,Qr.jsx)("div",{className:"bulb"}),(0,Qr.jsx)("div",{className:"base"}),(0,Qr.jsx)("div",{className:"light-ray ray1"}),(0,Qr.jsx)("div",{className:"light-ray ray2"}),(0,Qr.jsx)("div",{className:"light-ray ray3"})]})}),(0,Qr.jsx)(vo,{children:"Fresh Ideas"}),(0,Qr.jsx)(yo,{children:"Lorem ipsum dolor sit amet. Qui debitis mollitia et quos possimus aut nihil iure. Non molestiae nisi qui vitae dolore ut fuga veritatis sit reprehenderit eius quo rerum exercitationem. Id iure eius et quaerat nulla et"})]}),(0,Qr.jsxs)(mo,{delay:"0.4s",children:[(0,Qr.jsx)(go,{children:(0,Qr.jsxs)(ko,{children:[(0,Qr.jsx)("div",{className:"brain-main"}),(0,Qr.jsx)("div",{className:"brain-left"}),(0,Qr.jsx)("div",{className:"brain-right"}),(0,Qr.jsx)("div",{className:"light"}),(0,Qr.jsx)("div",{className:"gear gear1"}),(0,Qr.jsx)("div",{className:"gear gear2"})]})}),(0,Qr.jsx)(vo,{children:"Creative Design"}),(0,Qr.jsx)(yo,{children:"Lorem ipsum dolor sit amet. Qui debitis mollitia et quos possimus aut nihil iure. Non molestiae nisi qui vitae dolore ut fuga veritatis sit reprehenderit eius quo rerum exercitationem. Id iure eius et quaerat nulla et"})]}),(0,Qr.jsxs)(mo,{delay:"0.6s",children:[(0,Qr.jsx)(go,{children:(0,Qr.jsxs)(Eo,{children:[(0,Qr.jsx)("div",{className:"target-outer"}),(0,Qr.jsx)("div",{className:"target-middle"}),(0,Qr.jsx)("div",{className:"target-inner"}),(0,Qr.jsx)("div",{className:"target-center"}),(0,Qr.jsx)("div",{className:"arrow"})]})}),(0,Qr.jsx)(vo,{children:"On Time Schedule"}),(0,Qr.jsx)(yo,{children:"Lorem ipsum dolor sit amet. Qui debitis mollitia et quos possimus aut nihil iure. Non molestiae nisi qui vitae dolore ut fuga veritatis sit reprehenderit eius quo rerum exercitationem. Id iure eius et quaerat nulla et"})]})]})]})}),jo=n.p+"static/media/a.e9ce9da8ea614678cc85.png",_o=n.p+"static/media/b.17ef0995fbd712301fbe.png",zo=n.p+"static/media/c.31340afbc701b6b973c2.png",Po=n.p+"static/media/d.0cd68972499ec9f4c6bf.png",To=Gr.section`
  background-color: #000;
  color: white;
  padding: 6rem 0;
  width: 100%;
  overflow: hidden;
  position: relative;
`,Fo=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,Oo=Kr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,No=Gr.h2`
  font-size: 3.8rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 3rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  animation: ${Oo} 0.8s ease-out forwards;
  
  span:first-child {
    color: #8EE3D0;
    margin-right: 1rem;
  }
  
  span:nth-child(2) {
    background: linear-gradient(to right, #F586A0, #FF6B6B);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`,Ro=Gr.span`
  font-size: 2.5rem;
  margin-left: 1rem;
  transform: rotate(45deg);
  color: #FF6B6B;
  display: inline-block;
`,Ao=Gr.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1.5rem;
  padding: 0 2rem;
  
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
`,Lo=Kr`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Do=Kr`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.03);
  }
`,$o=Gr.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  animation: ${Lo} 0.8s ease-out forwards;
  animation-delay: ${e=>e.delay||"0s"};
  opacity: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    animation: ${Do} 0.3s forwards;
  }
`,Mo=Gr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`,Bo=Gr($o)`
  width: 100%;
  height: 480px;
  
  @media (min-width: 768px) {
    width: 560px;
    height: 480px;
  }
`,Io=Gr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    width: 560px;
  }
`,Uo=Gr($o)`
  width: 100%;
  aspect-ratio: 1 / 1;
  
  @media (min-width: 768px) {
    width: 100%;
    height: 229px;
  }
`,Ho=Gr.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Wo=Gr.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  margin: 0;
`,Vo=Gr.span`
  font-size: 2rem;
  color: white;
  transform: translateX(0);
  transition: transform 0.3s ease;
  
  ${$o}:hover & {
    transform: translateX(5px);
  }
`,qo=()=>(0,Qr.jsx)(To,{children:(0,Qr.jsxs)(Fo,{children:[(0,Qr.jsxs)(No,{children:[(0,Qr.jsx)("span",{children:"Game"})," ",(0,Qr.jsx)("span",{children:"Portfolio"})," ",(0,Qr.jsx)(Ro,{children:"\u2197"})]}),(0,Qr.jsxs)(Ao,{children:[(0,Qr.jsxs)(Bo,{delay:"0.1s",children:[(0,Qr.jsx)(Mo,{src:jo,alt:"Toy Picker Game"}),(0,Qr.jsxs)(Ho,{children:[(0,Qr.jsx)(Wo,{children:"Toy Picker"}),(0,Qr.jsx)(Vo,{children:"\u2192"})]})]}),(0,Qr.jsxs)(Io,{children:[(0,Qr.jsx)(Uo,{delay:"0.2s",children:(0,Qr.jsx)(Mo,{src:_o,alt:"Dark Skies Game"})}),(0,Qr.jsx)(Uo,{delay:"0.3s",children:(0,Qr.jsx)(Mo,{src:zo,alt:"Truck Adventure Game"})}),(0,Qr.jsx)(Uo,{delay:"0.4s",children:(0,Qr.jsx)(Mo,{src:ti,alt:"Castle Adventure Game"})}),(0,Qr.jsx)(Uo,{delay:"0.5s",children:(0,Qr.jsx)(Mo,{src:Po,alt:"Casino Game"})})]})]})]})}),Go=Gr.section`
  background-color: #000;
  color: white;
  padding: 6rem 0;
  width: 100%;
  overflow: hidden;
  position: relative;
`,Yo=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,Ko=Kr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Qo=Gr.h2`
  font-size: 3.8rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 3rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  animation: ${Ko} 0.8s ease-out forwards;
  
  span:first-child {
    color: #8EE3D0;
    margin-right: 1rem;
  }
  
  span:nth-child(2) {
    background: linear-gradient(to right, #F586A0, #FF6B6B);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`,Xo=Gr.span`
  font-size: 2.5rem;
  margin-left: 1rem;
  transform: rotate(45deg);
  color: #FF6B6B;
  display: inline-block;
`,Jo=Gr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 0 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Zo=Kr`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,el=Gr.div`
  background-color: #1A1A1A;
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 107, 0.3);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${Zo} 0.8s ease-out forwards;
  animation-delay: ${e=>e.delay||"0s"};
  opacity: 0;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, #8EE3D0, #FF6B6B);
  }
`,tl=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
`,nl=Gr.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0 0 1.5rem 0;
  width: 100%;
`,rl=Gr.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,al=Gr.div`
  display: flex;
  align-items: center;
`,il=Gr.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  border: 2px solid #FF6B6B;
`,ol=Gr.div`
  display: flex;
  flex-direction: column;
`,ll=Gr.h4`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  margin: 0 0 0.3rem 0;
`,sl=Gr.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`,ul=Gr.div`
  display: flex;
  align-items: center;
  color: #FFAA00;
  
  svg {
    margin-right: 0.5rem;
  }
`,cl=()=>{const e=[{text:"Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus",name:"Emily Johnson",role:"Design Lead",image:"https://randomuser.me/api/portraits/women/44.jpg",rating:4.9},{text:"Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus",name:"Olivia Carter",role:"Product Designer",image:"https://randomuser.me/api/portraits/women/68.jpg",rating:4.9},{text:"Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus",name:"Wyatt Turner",role:"CEO",image:"https://randomuser.me/api/portraits/men/32.jpg",rating:4.9}],t=()=>(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Qr.jsx)("path",{d:"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"})});return(0,Qr.jsx)(Go,{children:(0,Qr.jsxs)(Yo,{children:[(0,Qr.jsxs)(Qo,{children:[(0,Qr.jsx)("span",{children:"Testimonial"})," ",(0,Qr.jsx)(Xo,{children:"\u2197"})]}),(0,Qr.jsx)(Jo,{children:e.map(((e,n)=>(0,Qr.jsxs)(el,{delay:.2*n+"s",children:[(0,Qr.jsx)(tl,{children:e.text}),(0,Qr.jsx)(nl,{}),(0,Qr.jsxs)(rl,{children:[(0,Qr.jsxs)(al,{children:[(0,Qr.jsx)(il,{src:e.image,alt:e.name}),(0,Qr.jsxs)(ol,{children:[(0,Qr.jsx)(ll,{children:e.name}),(0,Qr.jsx)(sl,{children:e.role})]})]}),(0,Qr.jsxs)(ul,{children:[(0,Qr.jsx)(t,{}),(0,Qr.jsx)("span",{children:e.rating})]})]})]},n)))})]})})},dl=Gr.section`
  background-color: #000;
  color: white;
  padding: 6rem 0;
  width: 100%;
  overflow: hidden;
  position: relative;
`,fl=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,pl=Kr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,hl=Gr.h2`
  font-size: 3.8rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 3rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  animation: ${pl} 0.8s ease-out forwards;
  
  span:first-child {
    color: #8EE3D0;
    margin-right: 1rem;
  }
  
  span:nth-child(2) {
    background: linear-gradient(to right, #F586A0, #FF6B6B);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`,ml=Gr.span`
  font-size: 2.5rem;
  margin-left: 1rem;
  transform: rotate(45deg);
  color: #FF6B6B;
  display: inline-block;
`,gl=Gr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
  max-width: 100%;
`,vl=Gr.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${pl} 0.6s ease-out forwards;
  animation-delay: ${e=>e.delay||"0s"};
  opacity: 0;
  
  &:first-child {
    border: 1px solid rgba(255, 107, 107, 0.3);
    border-radius: 8px;
    background-color: #1A1A1A;
    overflow: hidden;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(to right, #8EE3D0, #FF6B6B);
    }
  }
`,yl=Gr.div`
  padding: ${e=>e.isActive?"1.5rem 1.5rem 0 1.5rem":"1.5rem"};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
`,bl=Gr.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  flex-grow: 1;
`,xl=Gr.span`
  transition: transform 0.3s ease;
  transform: ${e=>e.isActive?"rotate(180deg)":"rotate(0)"};
  margin-left: 1rem;
  font-size: 1.5rem;
  color: ${e=>e.isActive?"#FF6B6B":"white"};
`,wl=Gr.div`
  max-height: ${e=>e.isActive?"1000px":"0"};
  overflow: hidden;
  transition: max-height 0.5s ease;
  padding: ${e=>e.isActive?"1rem 1.5rem 1.5rem 1.5rem":"0 1.5rem"};
`,kl=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
`,Sl=()=>{const[t,n]=(0,e.useState)(0);return(0,Qr.jsx)(dl,{children:(0,Qr.jsxs)(fl,{children:[(0,Qr.jsxs)(hl,{children:[(0,Qr.jsx)("span",{children:"Frequently"})," ",(0,Qr.jsx)("span",{children:"Asked Questions"})," ",(0,Qr.jsx)(ml,{children:"\u2197"})]}),(0,Qr.jsx)(gl,{children:[{question:"Lorem ipsum dolor sit amet. Et aperiam laudantium eum atque repellendus qui",answer:"Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectusUt dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus"},{question:"Lorem ipsum dolor sit amet. Et aperiam laudantium eum atque repellendus qui",answer:"Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus"},{question:"Lorem ipsum dolor sit amet. Et aperiam laudantium eum atque repellendus qui",answer:"Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus"},{question:"Lorem ipsum dolor sit amet. Et aperiam laudantium eum atque repellendus qui",answer:"Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus"}].map(((e,r)=>(0,Qr.jsxs)(vl,{delay:.1*r+"s",children:[(0,Qr.jsxs)(yl,{onClick:()=>(e=>{n(t===e?null:e)})(r),isActive:t===r,children:[(0,Qr.jsx)(bl,{children:e.question}),(0,Qr.jsx)(xl,{isActive:t===r,children:t===r?"\u25b3":"\u25bd"})]}),(0,Qr.jsx)(wl,{isActive:t===r,children:(0,Qr.jsx)(kl,{children:e.answer})})]},r)))})]})})},El=n.p+"static/media/e.72f9207e77ce4402f09c.png",Cl=n.p+"static/media/f.4539852d9c8c94285882.png",jl=n.p+"static/media/g.7687696e66c5cbfe7f19.png",_l=Gr.section`
  background-color: #000;
  color: white;
  padding: 6rem 0;
  width: 100%;
  overflow: hidden;
  position: relative;
`,zl=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,Pl=Kr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Tl=Gr.h2`
  font-size: 3.8rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 3rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  animation: ${Pl} 0.8s ease-out forwards;
  
  span:first-child {
    color: #8EE3D0;
    margin-right: 1rem;
  }
  
  span:nth-child(2) {
    background: linear-gradient(to right, #F586A0, #FF6B6B);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`,Fl=Gr.span`
  font-size: 2.5rem;
  margin-left: 1rem;
  transform: rotate(45deg);
  color: #FF6B6B;
  display: inline-block;
`,Ol=Gr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 0 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Nl=Kr`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Rl=Gr.div`
  background-color: #0F0F0F;
  border-radius: 10px;
  overflow: hidden;
  animation: ${Nl} 0.8s ease-out forwards;
  animation-delay: ${e=>e.delay||"0s"};
  opacity: 0;
  height: 100%;
  transition: transform 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: translateY(-5px);
  }
`,Al=Gr.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`,Ll=Gr.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #000;
`,Dl=Gr.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
`,$l=Gr.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
`,Ml=Gr.div`
  padding: 1.5rem;
`,Bl=Gr.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
  color: white;
`,Il=Gr(Xe)`
  align-self: flex-end;
  margin: 2rem 2rem 0 0;
  padding: 0.8rem 1.5rem;
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  font-size: 0.9rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: #FF6B6B;
  }
  
  svg {
    margin-left: 0.5rem;
  }
`,Ul=()=>{const e=[{image:El,date:"01 Aug 2023",category:"Global",title:"How technology is revolutionizing the travel experience"},{image:Cl,date:"21 Nov 2023",category:"Global",title:"Tech enhanced journeys: How travel industry embraces innovation"},{image:jl,date:"05 Dec 2023",category:"Global",title:"A Journey of a thousand miles begins with a single step"}];return(0,Qr.jsx)(_l,{children:(0,Qr.jsxs)(zl,{children:[(0,Qr.jsxs)(Tl,{children:[(0,Qr.jsx)("span",{children:"Blogs"})," ",(0,Qr.jsx)(Fl,{children:"\u2197"})]}),(0,Qr.jsx)(Ol,{children:e.map(((e,t)=>(0,Qr.jsxs)(Rl,{delay:.2*t+"s",children:[(0,Qr.jsx)(Al,{src:e.image,alt:e.title}),(0,Qr.jsxs)(Ll,{children:[(0,Qr.jsx)(Dl,{children:e.date}),(0,Qr.jsx)($l,{children:e.category})]}),(0,Qr.jsx)(Ml,{children:(0,Qr.jsx)(Bl,{children:e.title})})]},t)))}),(0,Qr.jsxs)(Il,{to:"/blogs",children:["View All",(0,Qr.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Qr.jsx)("path",{d:"M5 12h14"}),(0,Qr.jsx)("path",{d:"M12 5l7 7-7 7"})]})]})]})})},Hl=n.p+"static/media/q.c1a0f2be9b5f2c7d3973.png",Wl=Gr.section`
  background-color: #000;
  color: white;
  padding: 5rem 0 10rem; /* Reduced bottom padding */
  width: 100%;
  position: relative;
  margin-bottom: 0;
  z-index: 0;
`,Vl=Gr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`,ql=Gr.div`
  background-color: #1A1A1A;
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #FF6B6B;
  border-bottom: 1px solid #FF6B6B;
  height: 400px;
  max-height: 400px;
  overflow: visible; /* Important - allow content to overflow */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, #8EE3D0, #FF6B6B);
  }
`,Gl=Gr.div`
  padding: 2.5rem;
  width: 60%;
  
  @media (max-width: 992px) {
    width: 100%;
    padding: 2rem;
  }
`,Yl=Kr`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Kl=Gr.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;
  font-family: 'Orbitron', sans-serif;
  
  span:first-child {
    color: #8EE3D0;
    display: block;
  }
  
  span:nth-child(2) {
    background: linear-gradient(to right, #F586A0, #FF6B6B);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: block;
    animation: ${Yl} 3s ease infinite;
    background-size: 200% auto;
  }
  
  span:last-child {
    color: #FFFFFF;
    display: block;
  }
`,Ql=Gr.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 550px;
`,Xl=Gr(Xe)`
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: #FF6B6B;
  }
  
  svg {
    margin-left: 0.5rem;
  }
`,Jl=Gr.div`
  position: absolute;
  right: 5%;
  top: -20px;
  width: 250px;
  height: 380px;
  z-index: 5;
  display: flex;
  align-items: flex-end;
  
  @media (max-width: 992px) {
    display: none;
  }
`,Zl=Gr.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.4));
`,es=()=>(0,Qr.jsx)(Wl,{className:"CTASection",children:(0,Qr.jsxs)(Vl,{children:[(0,Qr.jsx)(ql,{children:(0,Qr.jsxs)(Gl,{children:[(0,Qr.jsxs)(Kl,{children:[(0,Qr.jsx)("span",{children:"Got an amazing"}),(0,Qr.jsx)("span",{children:"Game"}),(0,Qr.jsx)("span",{children:"Development"}),(0,Qr.jsx)("span",{children:"Idea?"})]}),(0,Qr.jsx)(Ql,{children:"Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus Ut dolor rerum."}),(0,Qr.jsxs)(Xl,{to:"/contact",children:["Let's Discuss",(0,Qr.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Qr.jsx)("path",{d:"M5 12h14"}),(0,Qr.jsx)("path",{d:"M12 5l7 7-7 7"})]})]})]})}),(0,Qr.jsx)(Jl,{children:(0,Qr.jsx)(Zl,{src:Hl,alt:"Game Character Knight"})})]})}),ts=Gr.div`
  position: relative;
  background-color: #000;
  overflow: hidden;
`,ns=()=>(0,Qr.jsxs)(ts,{children:[(0,Qr.jsx)(xa,{}),(0,Qr.jsx)(za,{}),(0,Qr.jsx)(Ha,{}),(0,Qr.jsx)(ei,{}),(0,Qr.jsx)(hi,{}),(0,Qr.jsx)(Li,{}),(0,Qr.jsx)(no,{}),(0,Qr.jsx)(Co,{}),(0,Qr.jsx)(qo,{}),(0,Qr.jsx)(cl,{}),(0,Qr.jsx)(Sl,{}),(0,Qr.jsx)(Ul,{}),(0,Qr.jsx)(es,{})]}),rs=()=>(0,Qr.jsx)(hi,{}),as=()=>(0,Qr.jsx)(Li,{}),is=()=>(0,Qr.jsx)(no,{}),os=Gr.footer`
  background: linear-gradient(90deg, #0294BA, #6E48AA);
  color: white;
  padding: 3rem 0 0.5rem;
  position: relative;
  z-index: 2;
  margin-top: -5rem; /* Reduced negative margin to prevent overlap */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem; /* Reduced height to match margin-top */
    background: linear-gradient(to bottom, transparent, #0294BA);
    z-index: -1;
    pointer-events: none;
  }
`,ls=Gr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
  position: relative;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,ss=Gr.div`
  display: flex;
  flex-direction: column;
`,us=Gr.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`,cs=Gr.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4ECDC4, #FF6B6B);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-weight: bold;
  font-size: 0.9rem;
`,ds=Gr.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
`,fs=Gr.p`
  font-size: 0.8rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`,ps=Gr.div`
  display: flex;
  flex-direction: column;
`,hs=Gr.h3`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`,ms=Gr(Xe)`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`,gs=Gr.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`,vs=Gr.span`
  font-size: 0.8rem;
  margin-left: 0.5rem;
`,ys=Gr.div`
  display: flex;
  gap: 0.7rem;
  margin-top: 0.5rem;
`,bs=Gr(Xe)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: white;
  color: #0294BA;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f0f0f0;
  }
`,xs=Gr.div`
  text-align: center;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.7rem;
`,ws=()=>(0,Qr.jsxs)(os,{children:[(0,Qr.jsxs)(ls,{children:[(0,Qr.jsxs)(ss,{children:[(0,Qr.jsxs)(us,{children:[(0,Qr.jsx)(cs,{children:"G"}),(0,Qr.jsx)(ds,{children:"GameGenesis"})]}),(0,Qr.jsx)(fs,{children:"Maecenas tristique in ipsum et commodo lorem"})]}),(0,Qr.jsxs)(ps,{children:[(0,Qr.jsx)(hs,{children:"About Us"}),(0,Qr.jsx)(ms,{to:"/team",children:"Our Team"}),(0,Qr.jsx)(ms,{to:"/gallery",children:"Gallery"}),(0,Qr.jsx)(ms,{to:"/milestone",children:"Milestone"}),(0,Qr.jsx)(ms,{to:"/support",children:"Support"})]}),(0,Qr.jsxs)(ps,{children:[(0,Qr.jsx)(hs,{children:"Service"}),(0,Qr.jsx)(ms,{to:"/development",children:"Development"}),(0,Qr.jsx)(ms,{to:"/contact",children:"Contact"}),(0,Qr.jsx)(ms,{to:"/beta-test",children:"Beta Test"}),(0,Qr.jsx)(ms,{to:"/faq",children:"Faq"})]}),(0,Qr.jsxs)(ps,{children:[(0,Qr.jsx)(hs,{children:"Further Information"}),(0,Qr.jsx)(ms,{to:"/terms",children:"Terms & Condition"}),(0,Qr.jsx)(ms,{to:"/privacy",children:"Privacy Policy"}),(0,Qr.jsx)(ms,{to:"/legal",children:"Legal Info"})]}),(0,Qr.jsxs)(ps,{children:[(0,Qr.jsx)(hs,{children:"Contact Us"}),(0,Qr.jsxs)(gs,{children:[(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Qr.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),(0,Qr.jsx)(vs,{children:"082-543-8768-22"})]}),(0,Qr.jsxs)(gs,{children:[(0,Qr.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Qr.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,Qr.jsx)("polyline",{points:"22,6 12,13 2,6"})]}),(0,Qr.jsx)(vs,{children:"Dev@support.com"})]}),(0,Qr.jsxs)(ys,{children:[(0,Qr.jsx)(bs,{to:"#",children:(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16",children:(0,Qr.jsx)("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})})}),(0,Qr.jsx)(bs,{to:"#",children:(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16",children:(0,Qr.jsx)("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})})}),(0,Qr.jsx)(bs,{to:"#",children:(0,Qr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16",children:(0,Qr.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})]})]})]}),(0,Qr.jsx)(xs,{children:"Copyright \xa9 2025 GameGenesis - Game Development Service | Powered by GameGenesis - Game Development Service"})]}),ks=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=Wr.apply(void 0,it([t],n,!1)),i="sc-global-".concat(Pn(JSON.stringify(a))),o=new Yr(a,i),l=function(t){var n=zr(),r=e.useContext(Mr),a=e.useRef(n.styleSheet.allocateGSInstance(i)).current;return n.styleSheet.server&&s(a,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return s(a,t,n.styleSheet,r,n.stylis),function(){return o.removeStyles(a,n.styleSheet)}}),[a,t,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,a){if(o.isStatic)o.renderStyles(e,mn,n,a);else{var i=at(at({},t),{theme:yn(t,r,l.defaultProps)});o.renderStyles(e,i,n,a)}}return e.memo(l)})`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #000;
    color: white;
    overflow-x: hidden;
  }
  
  /* Create seamless sections by adjusting all section components */
  section {
    padding: 2rem 0 !important;
    position: relative;
    overflow: hidden;
  }
  
  /* Remove extra padding on first and last sections */
  section:first-of-type {
    padding-top: 0 !important;
  }
  
  /* Override padding for sections with specific styling needs */
  section[class*="CTASection"] {
    padding: 8rem 0 10rem !important;
  }
  
  /* Ensure that all section transitions are smooth */
  section, footer {
    transition: all 0.3s ease;
  }
`,Ss=Gr.div`
  position: relative;
  background-color: #000;
`;const Es=function(){return(0,Qr.jsxs)(Ke,{children:[(0,Qr.jsx)(ks,{}),(0,Qr.jsx)(la,{}),(0,Qr.jsx)(Ss,{children:(0,Qr.jsxs)(me,{children:[(0,Qr.jsx)(pe,{path:"/",element:(0,Qr.jsx)(ns,{})}),(0,Qr.jsx)(pe,{path:"/genres",element:(0,Qr.jsx)(rs,{})}),(0,Qr.jsx)(pe,{path:"/team",element:(0,Qr.jsx)(as,{})}),(0,Qr.jsx)(pe,{path:"/technology",element:(0,Qr.jsx)(is,{})})]})}),(0,Qr.jsx)(ws,{})]})},Cs=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:i,getTTFB:o}=t;n(e),r(e),a(e),i(e),o(e)}))};t.createRoot(document.getElementById("root")).render((0,Qr.jsx)(e.StrictMode,{children:(0,Qr.jsx)(Es,{})})),Cs()})()})();
//# sourceMappingURL=main.7a630e74.js.map