System.register(["./index-beb9b2be.system.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.c}],execute:function(){t({a:o,c:n});function n(t){if(!Object.prototype.hasOwnProperty.call(window,"fwRemoveToast"))window.addEventListener("fwRemoveToast",r);var e=document.querySelector(".fw-toast-stack."+t.position);var n;if(e){n=e}else{n=document.createElement("div");n.className="fw-toast-stack "+t.position;n.style.cssText="position: fixed;\n      z-index: 950;\n      top: 10px;\n      "+i(t.position)+"\n      background-color: $color-milk;\n      max-width: 100%;\n      max-height: 100%;";document.body.appendChild(n)}return n}function o(t,n,o){if(t===void 0){t={}}var i=c(t,o);var r;if(t.contentref){var s=document.querySelector(t.contentref);r=e(s,true,true);i.content=""}else{r=document.createElement("fw-toast-message")}Object.entries(i).map((function(t){var e=t[0],n=t[1];if(n)r.setAttribute(a(e),n)}));n.appendChild(r)}function i(t){switch(t){case"top-left":return"left: 10px;";case"top-right":return"right: 10px;";case"top-center":return"left: calc(50% - 200px);"}}function r(t){var e=t.target;document.querySelectorAll(".fw-toast-stack").forEach((function(t){if(t.contains(e)){t.removeChild(e)}}))}function c(t,e){if(t===void 0){t={}}var n,o,i,r,c,a;var s=Object.assign({},{timeout:(n=t.timeout)!==null&&n!==void 0?n:e.timeout,type:(o=t.type)!==null&&o!==void 0?o:e.type,content:(i=t.content)!==null&&i!==void 0?i:e.content,actionLinkText:(r=t.actionLinkText)!==null&&r!==void 0?r:e.actionLinkText,sticky:(c=t.sticky)!==null&&c!==void 0?c:e.sticky,pauseOnHover:(a=t.pauseOnHover)!==null&&a!==void 0?a:e.pauseOnHover,open:true});return s}function a(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()}}}}));