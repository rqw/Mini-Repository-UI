var m=(t,n,e)=>new Promise((s,u)=>{var l=a=>{try{r(e.next(a))}catch(c){u(c)}},o=a=>{try{r(e.throw(a))}catch(c){u(c)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,o);r((e=e.apply(t,n)).next())});import{at as z,w as I,au as h,L as g,f as C,ap as F,al as k,am as A,k as d,v as p,av as T,a as S,C as N,aw as w,ax as D,ay as f,o as b,j as y,z as v,B as j,t as E,az as _,c as O,b as P,aA as R,aB as L,n as V,aC as q,aD as x,aE as U,aF as $}from"./index.c800431b.js";function G(t,n="value",e="change",s){const u=z(),l=u==null?void 0:u.emit,o=I({value:t[n]}),r=h(o),a=i=>{o.value=i};return g(()=>{o.value=t[n]}),[C({get(){return o.value},set(i){F(i,r.value)||(o.value=i,k(()=>{l==null||l(e,i,...A(d(s))||[])}))}}),a,r]}function H(t){const n=p(t),e=p(!1);let s;function u(){s&&window.clearInterval(s)}function l(){e.value=!1,u(),s=null}function o(){d(e)||!!s||(e.value=!0,s=setInterval(()=>{d(n)===1?(l(),n.value=t):n.value-=1},1e3))}function r(){n.value=t,l()}function a(){r(),o()}return T(()=>{r()}),{start:o,reset:r,restart:a,clear:u,stop:l,currentCount:n,isStart:e}}const J={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},K=S({name:"CountButton",components:{Button:N},props:J,setup(t){const n=p(!1),{currentCount:e,isStart:s,start:u,reset:l}=H(t.count),{t:o}=O(),r=C(()=>d(s)?o("component.countdown.sendText",[d(e)]):o("component.countdown.normalText"));g(()=>{t.value===void 0&&l()});function a(){return m(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&D(c)){n.value=!0;try{(yield c())&&u()}finally{n.value=!1}}else u()})}return{handleStart:a,currentCount:e,loading:n,getButtonText:r,isStart:s}}});function M(t,n,e,s,u,l){const o=f("Button");return b(),y(o,_(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:v(()=>[j(E(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var B=w(K,[["render",M]]);const Q={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},W=S({name:"CountDownInput",components:{CountButton:B},inheritAttrs:!1,props:Q,setup(t){const{prefixCls:n}=P("countdown-input"),[e]=G(t);return{prefixCls:n,state:e}}});function X(t,n,e,s,u,l){const o=f("CountButton"),r=f("a-input");return b(),y(r,_(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),R({addonAfter:v(()=>[V(o,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[L(Object.keys(t.$slots).filter(a=>a!=="addonAfter"),a=>({name:a,fn:v(c=>[q(t.$slots,a,x(U(c||{})))])}))]),1040,["class","size","value"])}var Y=w(W,[["render",X]]);const nt=$(Y);$(B);export{nt as C,G as u};
