(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["statusgarantia"],{e922:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.status,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:""}},[e("v-toolbar-title",[t._v("Cadastro de Status da Garantia")]),e("v-spacer"),e("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,s=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",s,!1),i),[t._v("Novo Item")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[e("v-text-field",{attrs:{label:"Status",outlined:""},model:{value:t.editedItem.status,callback:function(a){t.$set(t.editedItem,"status",a)},expression:"editedItem.status"}})],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Salvar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(a){var i=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.editItem(i)}}},[t._v("mdi-pencil")]),e("v-icon",{attrs:{small:""},on:{click:function(a){return t.deleteItem(i)}}},[t._v("mdi-delete")])]}},{key:"no-data",fn:function(){return[e("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Resetar")])]},proxy:!0}])})},s=[],n=(e("c975"),e("a434"),{data:function(){return{dialog:!1,headers:[{text:"ID",value:"id"},{text:"Status",align:"start",value:"status"},{text:"Ações",value:"actions",sortable:!1}],status:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?"Cadastrar Status:":"Editar Status:"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.status=[{id:1,status:"Aguardando"},{id:2,status:"Em Análise"},{id:3,status:"Finalizado"},{id:4,status:"Aguardando Aprovação"}]},editItem:function(t){this.editedIndex=this.status.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var a=this.status.indexOf(t);confirm("Você tem certeza que deseja apagar este item?")&&this.status.splice(a,1)},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.status[this.editedIndex],this.editedItem):this.status.push(this.editedItem),this.close()}}}),d=n,o=e("2877"),r=e("6544"),l=e.n(r),c=e("8336"),u=e("b0af"),v=e("99d9"),f=e("62ad"),m=e("a523"),h=e("8fea"),b=e("169a"),p=e("132d"),x=e("0fd9"),I=e("2fa4"),g=e("8654"),k=e("71d9"),V=e("2a7f"),_=Object(o["a"])(d,i,s,!1,null,null,null);a["default"]=_.exports;l()(_,{VBtn:c["a"],VCard:u["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:f["a"],VContainer:m["a"],VDataTable:h["a"],VDialog:b["a"],VIcon:p["a"],VRow:x["a"],VSpacer:I["a"],VTextField:g["a"],VToolbar:k["a"],VToolbarTitle:V["a"]})}}]);
//# sourceMappingURL=statusgarantia.3307fce0.js.map