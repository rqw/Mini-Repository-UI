var c=(o,e,n)=>new Promise((d,m)=>{var f=i=>{try{a(n.next(i))}catch(p){m(p)}},t=i=>{try{a(n.throw(i))}catch(p){m(p)}},a=i=>i.done?d(i.value):Promise.resolve(i.value).then(f,t);a((n=n.apply(o,e)).next())});import{B as v}from"./BasicForm.c3b1ca96.js";import{u as k}from"./useForm.61515d33.js";import{dK as A,aw as D,a as $,cD as g,ay as C,o as w,j as y,z as s,i as F,n as u,B as r,E as S}from"./index.c800431b.js";import{P as T}from"./index.8cc5073c.js";/* empty css              *//* empty css              */import"./index.6db80edb.js";import"./index.6139f0dd.js";import"./Checkbox.447ca6d4.js";import"./index.3da20b62.js";import"./index.6cbc4d64.js";import"./index.3b641f7d.js";import"./index.0cd08f48.js";import"./index.7a866477.js";import"./get.caee8c08.js";import"./index.a42aa766.js";import"./eagerComputed.a75b7643.js";import"./index.f7f86126.js";import"./_baseIteratee.e55ebd37.js";import"./DeleteOutlined.6aa9aeab.js";import"./index.63870db1.js";import"./useRefs.7a789899.js";import"./Form.a4ff1d25.js";import"./Col.40561120.js";import"./useFlexGapSupport.739258dc.js";import"./useSize.d1c2dbeb.js";import"./transButton.dcbbd421.js";import"./index.2f86d672.js";import"./index.92a3f361.js";import"./useWindowSizeFn.093773b3.js";import"./FullscreenOutlined.742bfd7f.js";import"./index.fe1b1327.js";import"./index.8c17ac6a.js";import"./uuid.2b29000c.js";import"./download.d3c47a2e.js";import"./base64Conver.08b9f4ec.js";import"./index.391fd71d.js";import"./index.cd6815a4.js";import"./uniqBy.a5b64e85.js";import"./index.55ba9482.js";import"./index.79e97efa.js";import"./useContentViewHeight.538fdda4.js";import"./ArrowLeftOutlined.62dd3d44.js";import"./index.628c072b.js";const B=o=>A.post({url:"/cascader/getAreaRecord",data:o}),P=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"fieldTime",component:"RangePicker",label:"\u65F6\u95F4\u5B57\u6BB5",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field8",component:"ApiCascader",label:"\u8054\u52A8",colProps:{span:8},componentProps:{api:B,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:o=>!(o.levelType<3)}},{field:"field9",component:"ApiCascader",label:"\u8054\u52A8\u56DE\u663E",colProps:{span:8},componentProps:{api:B,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:o=>!(o.levelType<3)}}],R=$({components:{BasicForm:v,CollapseContainer:g,PageWrapper:T},setup(){const{createMessage:o}=S(),[e,{setProps:n,setFieldsValue:d,updateSchema:m}]=k({labelWidth:120,schemas:P,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});function f(){return c(this,null,function*(){const a=yield function(){return new Promise(b=>{setTimeout(()=>{b({field9:["430000","430100","430102"],province:"\u6E56\u5357\u7701",city:"\u957F\u6C99\u5E02",district:"\u5CB3\u9E93\u533A"})},1e3)})}(),{field9:i,province:p,city:l,district:E}=a;yield m({field:"field9",componentProps:{displayRenderArray:[p,l,E]}}),yield d({field9:i})})}return{register:e,schemas:P,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))},setProps:n,handleLoad:f}}}),W={class:"mb-4"},z={class:"mb-4"};function M(o,e,n,d,m,f){const t=C("a-button"),a=C("BasicForm"),i=C("CollapseContainer"),p=C("PageWrapper");return w(),y(p,{title:"UseForm\u64CD\u4F5C\u793A\u4F8B"},{default:s(()=>[F("div",W,[u(t,{onClick:e[0]||(e[0]=l=>o.setProps({labelWidth:150})),class:"mr-2"},{default:s(()=>[r(" \u66F4\u6539labelWidth ")]),_:1}),u(t,{onClick:e[1]||(e[1]=l=>o.setProps({labelWidth:120})),class:"mr-2"},{default:s(()=>[r(" \u8FD8\u539FlabelWidth ")]),_:1}),u(t,{onClick:e[2]||(e[2]=l=>o.setProps({size:"large"})),class:"mr-2"},{default:s(()=>[r(" \u66F4\u6539Size ")]),_:1}),u(t,{onClick:e[3]||(e[3]=l=>o.setProps({size:"default"})),class:"mr-2"},{default:s(()=>[r(" \u8FD8\u539FSize ")]),_:1}),u(t,{onClick:e[4]||(e[4]=l=>o.setProps({disabled:!0})),class:"mr-2"},{default:s(()=>[r(" \u7981\u7528\u8868\u5355 ")]),_:1}),u(t,{onClick:e[5]||(e[5]=l=>o.setProps({disabled:!1})),class:"mr-2"},{default:s(()=>[r(" \u89E3\u9664\u7981\u7528 ")]),_:1}),u(t,{onClick:e[6]||(e[6]=l=>o.setProps({compact:!0})),class:"mr-2"},{default:s(()=>[r(" \u7D27\u51D1\u8868\u5355 ")]),_:1}),u(t,{onClick:e[7]||(e[7]=l=>o.setProps({compact:!1})),class:"mr-2"},{default:s(()=>[r(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD ")]),_:1}),u(t,{onClick:e[8]||(e[8]=l=>o.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:s(()=>[r(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E ")]),_:1})]),F("div",z,[u(t,{onClick:e[9]||(e[9]=l=>o.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:s(()=>[r(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE ")]),_:1}),u(t,{onClick:e[10]||(e[10]=l=>o.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:s(()=>[r(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE ")]),_:1}),u(t,{onClick:e[11]||(e[11]=l=>o.setProps({showResetButton:!1})),class:"mr-2"},{default:s(()=>[r(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(t,{onClick:e[12]||(e[12]=l=>o.setProps({showResetButton:!0})),class:"mr-2"},{default:s(()=>[r(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(t,{onClick:e[13]||(e[13]=l=>o.setProps({showSubmitButton:!1})),class:"mr-2"},{default:s(()=>[r(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE ")]),_:1}),u(t,{onClick:e[14]||(e[14]=l=>o.setProps({showSubmitButton:!0})),class:"mr-2"},{default:s(()=>[r(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE ")]),_:1}),u(t,{onClick:e[15]||(e[15]=l=>o.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:s(()=>[r(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(t,{onClick:e[16]||(e[16]=l=>o.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:s(()=>[r(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ")]),_:1}),u(t,{onClick:o.handleLoad,class:"mr-2"},{default:s(()=>[r(" \u8054\u52A8\u56DE\u663E ")]),_:1},8,["onClick"])]),u(i,{title:"useForm\u793A\u4F8B"},{default:s(()=>[u(a,{onRegister:o.register,onSubmit:o.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ge=D(R,[["render",M]]);export{ge as default};
