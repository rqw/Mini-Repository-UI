import{B as C}from"./BasicForm.c3b1ca96.js";import{u as B}from"./useForm.61515d33.js";import{aw as E,a as g,cD as F,I as n,ay as e,o as h,j as b,z as p,n as i,bS as v,E as A}from"./index.c800431b.js";import{P}from"./index.8cc5073c.js";/* empty css              *//* empty css              */import"./index.6db80edb.js";import"./index.6139f0dd.js";import"./Checkbox.447ca6d4.js";import"./index.3da20b62.js";import"./index.6cbc4d64.js";import"./index.3b641f7d.js";import"./index.0cd08f48.js";import"./index.7a866477.js";import"./get.caee8c08.js";import"./index.a42aa766.js";import"./eagerComputed.a75b7643.js";import"./index.f7f86126.js";import"./_baseIteratee.e55ebd37.js";import"./DeleteOutlined.6aa9aeab.js";import"./index.63870db1.js";import"./useRefs.7a789899.js";import"./Form.a4ff1d25.js";import"./Col.40561120.js";import"./useFlexGapSupport.739258dc.js";import"./useSize.d1c2dbeb.js";import"./transButton.dcbbd421.js";import"./index.2f86d672.js";import"./index.92a3f361.js";import"./useWindowSizeFn.093773b3.js";import"./FullscreenOutlined.742bfd7f.js";import"./index.fe1b1327.js";import"./index.8c17ac6a.js";import"./uuid.2b29000c.js";import"./download.d3c47a2e.js";import"./base64Conver.08b9f4ec.js";import"./index.391fd71d.js";import"./index.cd6815a4.js";import"./uniqBy.a5b64e85.js";import"./index.55ba9482.js";import"./index.79e97efa.js";import"./useContentViewHeight.538fdda4.js";import"./ArrowLeftOutlined.62dd3d44.js";import"./index.628c072b.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function I(o,t,r,a,x,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:s,field:m})=>[i(l,{value:s[m],"onUpdate:value":_=>s[m]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ho=E(S,[["render",I]]);export{ho as default};
