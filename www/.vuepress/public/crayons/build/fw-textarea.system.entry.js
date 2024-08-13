var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{l(r.next(t))}catch(e){a(e)}}function s(t){try{l(r["throw"](t))}catch(e){a(e)}}function l(t){t.done?n(t.value):i(t.value).then(o,s)}l((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(s){o=[6,s];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./index-c04bc24f.system.js","./index-d10c7ade.system.js","./field-control-3422d0ba.system.js"],(function(t){"use strict";var e,n,r,i,a,o,s;return{setters:[function(t){e=t.r;n=t.h;r=t.i;i=t.j},function(t){a=t.b;o=t.r},function(t){s=t.F}],execute:function(){var l=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:"*";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.textarea-container{-webkit-margin-after:var(--fw-textarea-margin-bottom, 0px);margin-block-end:var(--fw-textarea-margin-bottom, 0px);width:inherit}.textarea-container-inner{display:block;width:var(--fw-textarea-width, 100%);position:relative}.textarea-container-inner textarea{border:0;border:1px solid #cfd7df;border-radius:4px;-webkit-padding-after:5px;padding-block-end:5px;padding-inline:12px;-webkit-padding-before:4px;padding-block-start:4px;background-color:#fff;-webkit-box-shadow:none;box-shadow:none;min-height:var(--fw-textarea-min-height, 24px);font-size:14px;font-weight:500;letter-spacing:0;line-height:20px;font-family:inherit;cursor:text;display:inline-block;color:var(--fw-textarea-input-color, #12344d);}@media screen and (prefers-reduced-motion: reduce){.textarea-container-inner textarea:hover,.textarea-container-inner textarea:focus{-webkit-transition:none;transition:none}}.textarea-container-inner textarea:hover{border:1px #475867 solid;-webkit-transition:0.2s linear;transition:0.2s linear}.textarea-container-inner textarea:focus{outline:none;background:#fff;border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5}.textarea-container-inner textarea[disabled]{color:#92a2b1;background-color:#f5f7f9;border-style:solid}.textarea-container-inner textarea[disabled]:hover,.textarea-container-inner textarea[disabled]:focus{border:1px solid #cfd7df;cursor:not-allowed}.textarea-container-inner+.help-block{font-size:12px;-webkit-margin-before:3px;margin-block-start:3px;color:#92a2b1;position:inherit;-webkit-margin-after:0;margin-block-end:0;display:block;-webkit-padding-start:2px;padding-inline-start:2px}.textarea-container-inner.error>textarea{border-color:#d72d30}.textarea-container-inner.error>textarea:focus{-webkit-box-shadow:none;box-shadow:none;border-color:#d72d30}.textarea-container-inner.error>textarea:hover{border-color:#d72d30}.textarea-container-inner.error+.help-block{color:#d72d30}.textarea-container-inner.warning>textarea{border-color:#f8ab59}.textarea-container-inner.warning>textarea:focus{-webkit-box-shadow:none;box-shadow:none;border-color:#f8ab59}.textarea-container-inner.warning>textarea:hover{border-color:#f8ab59}.textarea-container-inner.warning+.help-block{color:#f8ab59}::-webkit-input-placeholder{color:#92a2b1;opacity:1}::-moz-placeholder{color:#92a2b1;opacity:1}:-ms-input-placeholder{color:#92a2b1;opacity:1}::-ms-input-placeholder{color:#92a2b1;opacity:1}::placeholder{color:#92a2b1;opacity:1}::-webkit-input-placeholder{color:#92a2b1}::-moz-placeholder{color:#92a2b1}:-ms-input-placeholder{color:#92a2b1}:-moz-placeholder{color:#92a2b1}.responsive{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}';var c=t("fw_textarea",function(){function t(t){var r=this;e(this,t);this.fwFocus=n(this,"fwFocus",7);this.fwBlur=n(this,"fwBlur",7);this.fwInput=n(this,"fwInput",7);this.hasFocus=false;this.hasHintTextSlot=false;this.hasWarningTextSlot=false;this.hasErrorTextSlot=false;this.label="";this.value="";this.name="";this.state="normal";this.wrap="soft";this.resize="both";this.readonly=false;this.required=false;this.disabled=false;this.hintText="";this.warningText="";this.errorText="";this.onInput=function(t){var e=t.target;if(e){r.value=e.value||""}r.fwInput.emit({event:t,name:r.name,value:r.getValue()})};this.onFocus=function(){r.hasFocus=true;r.fwFocus.emit()};this.onBlur=function(t){r.hasFocus=false;r.fwBlur.emit({event:t,name:r.name})}}t.prototype.getValue=function(){return this.value||""};t.prototype.hasValue=function(){return this.getValue().length>0};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.nativeInput){this.nativeInput.focus()}return[2]}))}))};t.prototype.componentWillLoad=function(){this.checkSlotContent()};t.prototype.checkSlotContent=function(){this.hasHintTextSlot=a(this.host,"hint-text");this.hasWarningTextSlot=a(this.host,"warning-text");this.hasErrorTextSlot=a(this.host,"error-text")};t.prototype.getAriaDescribedBy=function(){if(this.state==="normal")return"hint-"+this.name;else if(this.state==="error")return"error-"+this.name;else if(this.state==="warning")return"warning-"+this.name;return null};t.prototype.render=function(){var t;var e=this;var n=this,i=n.host,a=n.name,l=n.value;var c={resize:this.resize};o(i,a,l);return r(s,{inputId:this.name,label:this.label,labelId:this.label+"-"+this.name,state:this.state,hintTextId:"hint-"+this.name,hintText:this.hintText,hasHintTextSlot:this.hasHintTextSlot,errorTextId:"error-"+this.name,errorText:this.errorText,hasErrorTextSlot:this.hasErrorTextSlot,warningTextId:"warning-"+this.name,warningText:this.warningText,hasWarningTextSlot:this.hasWarningTextSlot,required:this.required},r("div",{"aria-disabled":this.disabled,class:{"has-value":this.hasValue(),"has-focus":this.hasFocus}},r("div",{class:"textarea-container"},r("div",{class:(t={"textarea-container-inner":true},t[this.state]=true,t)},r("textarea",{class:{responsive:this.cols===undefined},style:c,ref:function(t){return e.nativeInput=t},disabled:this.disabled,name:this.name,placeholder:this.placeholder||"",minLength:this.minlength,maxLength:this.maxlength,readOnly:this.readonly,required:this.required,value:this.value,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,rows:this.rows,cols:this.cols,wrap:this.wrap,id:this.name,"aria-invalid":this.state==="error","aria-describedby":this.getAriaDescribedBy()})))))};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());c.style=l}}}));