import{a as R,ar as G,v as h,a7 as I,N as M,al as z,_ as u,R as H,S as x,n as b,T as J,G as L}from"./index.c800431b.js";var Q=globalThis&&globalThis.__rest||function(o,e){var r={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&e.indexOf(n)<0&&(r[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(o);t<n.length;t++)e.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(o,n[t])&&(r[n[t]]=o[n[t]]);return r},U={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:L.any,required:Boolean},X=R({name:"Checkbox",inheritAttrs:!1,props:G(U,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(e,r){var n=r.attrs,t=r.emit,m=r.expose,i=h(e.checked===void 0?e.defaultChecked:e.checked),d=h();I(function(){return e.checked},function(){i.value=e.checked}),M(function(){z(function(){})}),m({focus:function(){var a;(a=d.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=d.value)===null||a===void 0||a.blur()}});var s=h(),p=function(a){if(!e.disabled){e.checked===void 0&&(i.value=a.target.checked),a.shiftKey=s.value;var f={target:u(u({},e),{checked:a.target.checked}),stopPropagation:function(){a.stopPropagation()},preventDefault:function(){a.preventDefault()},nativeEvent:a};e.checked!==void 0&&(d.value.checked=!!e.checked),t("change",f),s.value=!1}},C=function(a){t("click",a),s.value=a.shiftKey};return function(){var c,a=e.prefixCls,f=e.name,v=e.id,K=e.type,y=e.disabled,P=e.readonly,O=e.tabindex,S=e.autofocus,B=e.value,_=e.required,N=Q(e,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),j=n.class,w=n.onFocus,q=n.onBlur,T=n.onKeydown,D=n.onKeypress,A=n.onKeyup,k=u(u({},N),n),F=Object.keys(k).reduce(function(g,l){return(l.substr(0,5)==="aria-"||l.substr(0,5)==="data-"||l==="role")&&(g[l]=k[l]),g},{}),V=H(a,j,(c={},x(c,"".concat(a,"-checked"),i.value),x(c,"".concat(a,"-disabled"),y),c)),E=u(u({name:f,id:v,type:K,readonly:P,disabled:y,tabindex:O,class:"".concat(a,"-input"),checked:!!i.value,autofocus:S,value:B},F),{onChange:p,onClick:C,onFocus:w,onBlur:q,onKeydown:T,onKeypress:D,onKeyup:A,required:_});return b("span",{class:V},[b("input",J({ref:d},E),null),b("span",{class:"".concat(a,"-inner")},null)])}}});export{X as V};
