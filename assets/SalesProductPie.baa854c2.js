import{a as r,v as u,a7 as l,o as s,j as m,z as d,i as c,bm as p,k as f}from"./index.c800431b.js";import{C as h}from"./index.89c1b1d6.js";import"./index.c943458f.js";/* empty css              */import{u as g}from"./useECharts.98012ed9.js";import"./index.482fbc64.js";import"./index.cd6815a4.js";import"./Col.40561120.js";import"./useFlexGapSupport.739258dc.js";import"./useRefs.7a789899.js";import"./PlusOutlined.273bddb0.js";const z=r({__name:"SalesProductPie",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,a=u(null),{setOptions:o}=g(a);return l(()=>t.loading,()=>{t.loading||o({tooltip:{trigger:"item"},series:[{name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"\u7535\u5B50\u4EA7\u54C1"},{value:310,name:"\u670D\u88C5"},{value:274,name:"\u5316\u5986\u54C1"},{value:400,name:"\u5BB6\u5C45"}].sort(function(i,n){return i.value-n.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(i,n)=>(s(),m(f(h),{title:"\u6210\u4EA4\u5360\u6BD4",loading:e.loading},{default:d(()=>[c("div",{ref_key:"chartRef",ref:a,style:p({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{z as default};
