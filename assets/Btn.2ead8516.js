var A=(t,a,c)=>new Promise((l,p)=>{var f=n=>{try{r(c.next(n))}catch(e){p(e)}},E=n=>{try{r(c.throw(n))}catch(e){p(e)}},r=n=>n.done?l(n.value):Promise.resolve(n.value).then(f,E);r((c=c.apply(t,a)).next())});import{aw as P,a as v,du as g,bw as h,bG as b,s as M,f as w,ay as d,bQ as S,o as i,j as m,z as u,n as o,i as y,B as s,t as x,h as T,l as F,x as C,F as $,ft as N}from"./index.c800431b.js";import{A as V}from"./index.fe1b1327.js";import{D as W}from"./index.6db80edb.js";import j from"./CurrentPermissionMode.82778384.js";import{A as I}from"./index.721bea7d.js";import{P as U}from"./index.8cc5073c.js";import"./index.55ba9482.js";import"./index.79e97efa.js";import"./useSize.d1c2dbeb.js";import"./eagerComputed.a75b7643.js";import"./useWindowSizeFn.093773b3.js";import"./useContentViewHeight.538fdda4.js";import"./ArrowLeftOutlined.62dd3d44.js";import"./index.628c072b.js";import"./transButton.dcbbd421.js";const z=v({components:{Alert:V,PageWrapper:U,CurrentPermissionMode:j,Divider:W,Authority:I},setup(){const{hasPermission:t}=g(),a=h(),c=b(),l=M(),p=w(()=>c.getProjectConfig.permissionMode===N.BACK);function f(E){return A(this,null,function*(){const r="fakeToken"+E;l.setToken(r),l.getUserInfoAction(),a.changePermissionCode()})}return{hasPermission:t,permissionStore:a,switchToken:f,isBackPermissionMode:p}}});function G(t,a,c,l,p,f){const E=d("CurrentPermissionMode"),r=d("Divider"),n=d("Alert"),e=d("a-button"),_=d("Authority"),D=d("PageWrapper"),B=S("auth");return i(),m(D,{contentBackground:"",title:"\u6309\u94AE\u6743\u9650\u63A7\u5236",contentClass:"p-4"},{default:u(()=>[o(E),y("p",null,[s(" \u5F53\u524D\u62E5\u6709\u7684code\u5217\u8868: "),y("a",null,x(t.permissionStore.getPermCodeList),1)]),o(r),o(n,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316(\u5FC5\u987B\u5904\u4E8E\u540E\u53F0\u6743\u9650\u6A21\u5F0F\u624D\u53EF\u6D4B\u8BD5\u6B64\u9875\u9762\u6240\u5C55\u793A\u7684\u529F\u80FD)","show-icon":""}),o(r),o(e,{type:"primary",class:"mr-2",onClick:a[0]||(a[0]=k=>t.switchToken(2)),disabled:!t.isBackPermissionMode},{default:u(()=>[s(" \u70B9\u51FB\u5207\u6362\u6309\u94AE\u6743\u9650(\u7528\u6237id\u4E3A2) ")]),_:1},8,["disabled"]),o(e,{type:"primary",onClick:a[1]||(a[1]=k=>t.switchToken(1)),disabled:!t.isBackPermissionMode},{default:u(()=>[s(" \u70B9\u51FB\u5207\u6362\u6309\u94AE\u6743\u9650(\u7528\u6237id\u4E3A1,\u9ED8\u8BA4) ")]),_:1},8,["disabled"]),t.isBackPermissionMode?(i(),T($,{key:0},[o(r,null,{default:u(()=>[s("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650")]),_:1}),o(_,{value:"1000"},{default:u(()=>[o(e,{type:"primary",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 ")]),_:1})]),_:1}),o(_,{value:"2000"},{default:u(()=>[o(e,{color:"success",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 ")]),_:1})]),_:1}),o(_,{value:["1000","2000"]},{default:u(()=>[o(e,{color:"error",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})]),_:1}),o(r,null,{default:u(()=>[s("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650")]),_:1}),t.hasPermission("1000")?(i(),m(e,{key:0,type:"primary",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 ")]),_:1})):F("",!0),t.hasPermission("2000")?(i(),m(e,{key:1,color:"success",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 ")]),_:1})):F("",!0),t.hasPermission(["1000","2000"])?(i(),m(e,{key:2,color:"error",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})):F("",!0),o(r,null,{default:u(()=>[s("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)")]),_:1}),C((i(),m(e,{type:"primary",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 ")]),_:1})),[[B,"1000"]]),C((i(),m(e,{color:"success",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 ")]),_:1})),[[B,"2000"]]),C((i(),m(e,{color:"error",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})),[[B,["1000","2000"]]])],64)):F("",!0)]),_:1})}var ru=P(z,[["render",G],["__scopeId","data-v-7809ec10"]]);export{ru as default};
