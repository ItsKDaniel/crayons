var __awaiter=this&&this.__awaiter||function(e,t,i,n){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function o(e){try{l(n.next(e))}catch(t){a(t)}}function s(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):r(e.value).then(o,s)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,r,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;r=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(o[0]===6&&i.label<a[1]){i.label=a[1];a=o;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(o);break}if(a[2])i.ops.pop();i.trys.pop();continue}o=t.call(e,i)}catch(s){o=[6,s];r=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./index-c04bc24f.system.js","./index-d10c7ade.system.js"],(function(e){"use strict";var t,i,n,r,a,o,s,l,c;return{setters:[function(e){t=e.r;i=e.h;n=e.i;r=e.k;a=e.j},function(e){o=e.f;s=e.w;l=e.b;c=e.r}],execute:function(){var h=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:"*";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}';var u=e("fw_radio_group",function(){function e(e){var n=this;t(this,e);this.fwChange=i(this,"fwChange",7);this.selectedIndex=0;this.allowEmpty=false;this.label="";this.name="";this.orientation="column";this.required=false;this.hintText="";this.warningText="";this.errorText="";this.state="normal";this.hasHintTextSlot=false;this.hasWarningTextSlot=false;this.hasErrorTextSlot=false;this.onSelect=function(e){var t=e.target;if(t){n.value=t.value}};this.onDeselect=function(e){return __awaiter(n,void 0,void 0,(function(){var t;return __generator(this,(function(i){switch(i.label){case 0:t=e.target;if(this.allowEmpty&&t.value===this.value){this.value=undefined}return[4,this.updateRadios()];case 1:i.sent();return[2]}}))}))}}e.prototype.valueChanged=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.updateRadios()];case 1:e.sent();return[2]}}))}))};e.prototype.handleKeydown=function(e){if(e.code==="ArrowDown"||e.code==="ArrowRight"||e.code==="ArrowLeft"||e.code==="ArrowUp"||e.code==="Space"){e.preventDefault()}};e.prototype.handleKeyup=function(e){var t=this.radios;var i=["ArrowDown","ArrowRight","ArrowUp","ArrowLeft","Space"];var n=this.selectedIndex;switch(e.code){case"ArrowDown":case"ArrowRight":t[n].setAttribute("tabindex","-1");t[n].checked=false;this.selectedIndex=++this.selectedIndex%t.length;t[this.selectedIndex].setAttribute("tabindex","0");t[this.selectedIndex].checked=true;t[this.selectedIndex].focus();this.value=t[this.selectedIndex].value;break;case"ArrowUp":case"ArrowLeft":t[n].setAttribute("tabindex","-1");t[n].checked=false;this.selectedIndex=this.selectedIndex===0?t.length-1:--this.selectedIndex;t[this.selectedIndex].setAttribute("tabindex","0");t[this.selectedIndex].checked=true;t[this.selectedIndex].focus();this.value=t[this.selectedIndex].value;break;case"Space":t[0].checked=true;t[0].focus();this.value=t[0].value;break;default:break}if(i.includes(e.code)){this.fwChange.emit({event:e,name:this.name,value:this.value})}};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;var i=this;return __generator(this,(function(n){switch(n.label){case 0:e=this.host;this.radios=Array.from(this.host.querySelectorAll("fw-radio")).filter((function(e){return!e.disabled}));if(!(this.value===undefined))return[3,2];t=o(e,"fw-radio");if(!(t!==undefined))return[3,2];return[4,t.componentOnReady()];case 1:n.sent();if(this.value===undefined){this.value=t.value}n.label=2;case 2:this.mutationO=s(e,"fw-radio",(function(e){return __awaiter(i,void 0,void 0,(function(){var t=this;return __generator(this,(function(i){switch(i.label){case 0:if(!(e!==undefined))return[3,1];e.componentOnReady().then((function(){t.value=e.value})).catch();return[3,3];case 1:return[4,this.updateRadios()];case 2:i.sent();i.label=3;case 3:return[2]}}))}))}));return[2]}}))}))};e.prototype.componentDidLoad=function(){var e=this;var t=this.host.querySelector(".field-input");if(t){t.style.display="flex";t.style.flexDirection=this.orientation}var i=this.host.querySelectorAll("fw-radio");i.forEach((function(t,n){if(e.orientation==="column"){t.classList.add("fw-radio-group__radio");t.classList.toggle("fw-radio-group__radio--last",n===i.length-1)}}))};e.prototype.componentWillLoad=function(){this.checkSlotContent()};e.prototype.checkSlotContent=function(){this.hasHintTextSlot=l(this.host,"hint-text");this.hasWarningTextSlot=l(this.host,"warning-text");this.hasErrorTextSlot=l(this.host,"error-text")};e.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};e.prototype.updateRadios=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,i,n,r,a,o,s;return __generator(this,(function(l){switch(l.label){case 0:return[4,this.radios];case 1:e=l.sent();t=this.value;i=false;for(n=0,r=e.entries();n<r.length;n++){a=r[n],o=a[0],s=a[1];if(!i&&s.value===t){i=true;s.checked=true;s.setAttribute("tabindex","0");this.selectedIndex=o}else{s.setAttribute("tabindex","-1");s.checked=false}}if(!i){e.length!==0&&e[0].setAttribute("tabindex","0");this.selectedIndex=0;this.value=undefined}return[2]}}))}))};e.prototype.getAriaDescribedBy=function(){if(this.state==="normal")return"hint-"+this.name;else if(this.state==="error")return"error-"+this.name;else if(this.state==="warning")return"warning-"+this.name;return null};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,i;return __generator(this,(function(n){i=this.radios;(t=(e=i[0])===null||e===void 0?void 0:e.setFocus)===null||t===void 0?void 0:t.call(e);return[2]}))}))};e.prototype.render=function(){var e=this,t=e.host,i=e.name,a=e.value;var o=!!this.label;var s=this.hintText?true:this.hasHintTextSlot;var l=this.errorText?true:this.hasErrorTextSlot;var h=this.warningText?true:this.hasWarningTextSlot;var u=this.state==="normal"?true:false;var d=this.state==="error"?true:false;var f=this.state==="warning"?true:false;var p=this.label&&this.name?this.label+"-"+this.name:this.label?this.label:this.name&&this.name;var b="hint-"+this.name;var g="warning-"+this.name;var x="error-"+this.name;c(t,i,a);return n(r,{role:"radiogroup","aria-labelledby":p,onFwSelect:this.onSelect,onFwDeselect:this.onDeselect,"aria-describedby":this.getAriaDescribedBy()},n("div",{class:{"field-control":true}},o&&n("label",{id:p,class:{"field-control-label":true,required:this.required},"aria-hidden":o?"false":"true"},this.label),n("div",{class:"field-input"},n("slot",null)),u&&s&&n("div",{id:b,class:"field-control-hint-text","aria-hidden":s?"false":"true"},n("slot",{name:"hint-text"},this.hintText)),d&&l&&n("div",{id:x,class:"field-control-error-text","aria-hidden":l?"false":"true"},n("slot",{name:"error-text"},this.errorText)),f&&h&&n("div",{id:g,class:"field-control-warning-text","aria-hidden":h?"false":"true"},n("slot",{name:"warning-text"},this.warningText))))};Object.defineProperty(e.prototype,"host",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:false,configurable:true});return e}());u.style=h}}}));