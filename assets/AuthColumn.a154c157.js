import{B as s}from"./TableImg.5d32c8fe.js";import{l as d}from"./BasicForm.c3b1ca96.js";import{u as c}from"./useTable.af4189d8.js";import{d as F}from"./table.4769f213.js";import{aw as h,a as b,ay as a,o as r,h as f,n as B,z as A,j as C,l as w}from"./index.c800431b.js";import"./index.6139f0dd.js";import"./Checkbox.447ca6d4.js";import"./index.3da20b62.js";import"./index.a42aa766.js";import"./eagerComputed.a75b7643.js";import"./useForm.61515d33.js";import"./index.8cc5073c.js";import"./index.55ba9482.js";import"./index.79e97efa.js";import"./useSize.d1c2dbeb.js";import"./useWindowSizeFn.093773b3.js";import"./useContentViewHeight.538fdda4.js";import"./ArrowLeftOutlined.62dd3d44.js";import"./index.628c072b.js";import"./transButton.dcbbd421.js";import"./index.3b641f7d.js";import"./index.0cd08f48.js";import"./index.6cbc4d64.js";import"./uuid.2b29000c.js";import"./index.f7f86126.js";import"./_baseIteratee.e55ebd37.js";import"./get.caee8c08.js";import"./DeleteOutlined.6aa9aeab.js";import"./index.63870db1.js";import"./useRefs.7a789899.js";import"./Form.a4ff1d25.js";import"./Col.40561120.js";import"./useFlexGapSupport.739258dc.js";import"./index.92a3f361.js";import"./FullscreenOutlined.742bfd7f.js";import"./index.6db80edb.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.0f3e39dd.js";import"./index.8c17ac6a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.96149d46.js";import"./index.20576eb6.js";/* empty css              *//* empty css              */import"./index.7a866477.js";import"./index.2f86d672.js";import"./index.fe1b1327.js";import"./download.d3c47a2e.js";import"./base64Conver.08b9f4ec.js";import"./index.391fd71d.js";import"./index.cd6815a4.js";import"./uniqBy.a5b64e85.js";const I=[{title:"\u7F16\u53F7",dataIndex:"no",width:100},{title:"\u59D3\u540D",dataIndex:"name",width:200,auth:"test"},{title:"\u72B6\u6001",dataIndex:"status"},{title:"\u72B6\u60011",dataIndex:"status1"},{title:"\u72B6\u60012",dataIndex:"status2"},{title:"\u72B6\u60013",dataIndex:"status3"},{title:"\u72B6\u60014",dataIndex:"status4"},{title:"\u72B6\u60015",dataIndex:"status5"},{title:"\u5730\u5740",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],T=b({components:{BasicTable:s,TableAction:d},setup(){const[t]=c({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:F,columns:I,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"}});function i(e){}function u(e){}function n(e){}return{registerTable:t,handleEdit:i,handleDelete:u,handleOpen:n}}}),x={class:"p-4"};function _(t,i,u,n,e,E){const l=a("TableAction"),p=a("BasicTable");return r(),f("div",x,[B(p,{onRegister:t.registerTable},{bodyCell:A(({column:m,record:o})=>[m.key==="action"?(r(),C(l,{key:0,actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,o),auth:"other"},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,o),auth:"super"}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:g=>o.status!=="enable"},{label:"\u7981\u7528",popConfirm:{title:"\u662F\u5426\u7981\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:()=>o.status==="enable"},{label:"\u540C\u65F6\u63A7\u5236",popConfirm:{title:"\u662F\u5426\u52A8\u6001\u663E\u793A\uFF1F",confirm:t.handleOpen.bind(null,o)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])])}var Et=h(T,[["render",_]]);export{Et as default};
