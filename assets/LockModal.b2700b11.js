var f=(e,m,r)=>new Promise((c,a)=>{var d=o=>{try{t(r.next(o))}catch(i){a(i)}},s=o=>{try{t(r.throw(o))}catch(i){a(i)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(d,s);t((r=r.apply(e,m)).next())});import{aw as w,a as C,b as y,s as $,f as _,ay as u,o as x,j as F,z as h,i as p,q as l,t as g,n as k,B as L,az as M,c as S}from"./index.c800431b.js";import{B as I,a as N}from"./index.92a3f361.js";import{B as R}from"./BasicForm.c3b1ca96.js";import{u as P}from"./useForm.61515d33.js";import{u as z}from"./lock.e6c21488.js";import{h as U}from"./header.d801b988.js";import"./useWindowSizeFn.093773b3.js";import"./FullscreenOutlined.742bfd7f.js";/* empty css              *//* empty css              */import"./index.6db80edb.js";import"./index.6139f0dd.js";import"./Checkbox.447ca6d4.js";import"./index.3da20b62.js";import"./index.6cbc4d64.js";import"./index.3b641f7d.js";import"./index.0cd08f48.js";import"./index.7a866477.js";import"./get.caee8c08.js";import"./index.a42aa766.js";import"./eagerComputed.a75b7643.js";import"./index.f7f86126.js";import"./_baseIteratee.e55ebd37.js";import"./DeleteOutlined.6aa9aeab.js";import"./index.63870db1.js";import"./useRefs.7a789899.js";import"./Form.a4ff1d25.js";import"./Col.40561120.js";import"./useFlexGapSupport.739258dc.js";import"./useSize.d1c2dbeb.js";import"./transButton.dcbbd421.js";import"./index.2f86d672.js";import"./index.fe1b1327.js";import"./index.8c17ac6a.js";import"./uuid.2b29000c.js";import"./download.d3c47a2e.js";import"./base64Conver.08b9f4ec.js";import"./index.391fd71d.js";import"./index.cd6815a4.js";import"./uniqBy.a5b64e85.js";const V=C({name:"LockModal",components:{BasicModal:I,BasicForm:R},setup(){const{t:e}=S(),{prefixCls:m}=y("header-lock-modal"),r=$(),c=z(),a=_(()=>{var n;return(n=r.getUserInfo)==null?void 0:n.realName}),[d,{closeModal:s}]=N(),[t,{validateFields:o,resetFields:i}]=P({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const b=(yield o()).password;s(),c.setLockInfo({isLock:!0,pwd:b}),yield i()})}const B=_(()=>{const{avatar:n}=r.getUserInfo;return n||U});return{t:e,prefixCls:m,getRealName:a,register:d,registerForm:t,handleLock:v,avatar:B}}}),q=["src"];function D(e,m,r,c,a,d){const s=u("BasicForm"),t=u("a-button"),o=u("BasicModal");return x(),F(o,M({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:h(()=>[p("div",{class:l(`${e.prefixCls}__entry`)},[p("div",{class:l(`${e.prefixCls}__header`)},[p("img",{src:e.avatar,class:l(`${e.prefixCls}__header-img`)},null,10,q),p("p",{class:l(`${e.prefixCls}__header-name`)},g(e.getRealName),3)],2),k(s,{onRegister:e.registerForm},null,8,["onRegister"]),p("div",{class:l(`${e.prefixCls}__footer`)},[k(t,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:h(()=>[L(g(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var Fe=w(V,[["render",D]]);export{Fe as default};
