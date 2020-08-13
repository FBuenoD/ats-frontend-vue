(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["statusgarantia"],{"519a":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("d4ec"),n=a("262e"),s=a("2caf"),o=a("ade3"),r=a("de4f"),c=function(t){Object(n["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(r["a"]);Object(o["a"])(c,"resource","/statusgarantia")},e922:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.stgarantia,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-toolbar-title",[t._v("Cadastro de Status de Garantia")]),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",n,!1),i),[t._v("Novo Item")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"Status",outlined:"",required:"",counter:100,rules:t.statusRules},model:{value:t.editedItem.descricao,callback:function(e){t.$set(t.editedItem,"descricao",e)},expression:"editedItem.descricao"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancelar")]),a("v-btn",{attrs:{disabled:!t.valid,color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Salvar")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"430px"},model:{value:t.dialogExcluir,callback:function(e){t.dialogExcluir=e},expression:"dialogExcluir"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Deseja mesmo remover este Item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeExcluir}},[t._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemComfirm}},[t._v("Sim")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v("mdi-pencil")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v("mdi-delete")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Resetar")])]},proxy:!0}])})},n=[],s=(a("c975"),a("a434"),a("ac1f"),a("841c"),a("519a")),o=s["a"].build(),r={novo:"Novo Status de Garantia",edicao:"Edição de Status de Garantia",exclusao:"Deseja mesmo remover este Status de Garantia?"},c={name:"stgarantia",components:{},data:function(){return{dialog:!1,dialogExcluir:!1,valid:!0,statusRules:[function(t){return!!t||"Preenchimento Necessário"},function(t){return t&&t.length<=100&&t.length>=5||"O campo deve ter pelo menos 5 e no maximo 100 letras"}],headers:[{text:"ID",value:"id"},{text:"Descrição",value:"descricao"},{text:"Ações",align:"end",value:"actions",sortable:!1}],stgarantia:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?r.novo:r.edicao}},watch:{dialog:function(t){t||this.close()}},created:function(){this.fetchRecords()},methods:{fetchRecords:function(){o.search({}).then(this.fetchRecodsSuccess)},fetchRecodsSuccess:function(t){Array.isArray(t.rows)?this.stgarantia=t.rows:this.stgarantia=[]},editItem:function(t){this.editedIndex=this.stgarantia.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.stgarantia.indexOf(t),this.editedItem=Object.assign({},t),this.dialogExcluir=!0},deleteItemComfirm:function(){o.destroy(this.editedItem).then(this.stgarantia.splice(this.editedIndex,1)),this.closeExcluir()},closeExcluir:function(){var t=this;this.dialogExcluir=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){var t=this;this.editedIndex>-1?(console.log(this.editedItem),o.update(this.editedItem).then(Object.assign(this.stgarantia[this.editedIndex],this.editedItem))):o.create(this.editedItem).then((function(e){return t.stgarantia.push(e)})),this.close()}}},d=c,l=a("2877"),u=a("6544"),v=a.n(u),m=a("8336"),f=a("b0af"),h=a("99d9"),x=a("62ad"),b=a("a523"),g=a("8fea"),p=a("169a"),I=a("4bd4"),k=a("132d"),_=a("0fd9"),C=a("2fa4"),V=a("8654"),w=a("71d9"),y=a("2a7f"),O=Object(l["a"])(d,i,n,!1,null,null,null);e["default"]=O.exports;v()(O,{VBtn:m["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:x["a"],VContainer:b["a"],VDataTable:g["a"],VDialog:p["a"],VForm:I["a"],VIcon:k["a"],VRow:_["a"],VSpacer:C["a"],VTextField:V["a"],VToolbar:w["a"],VToolbarTitle:y["a"]})}}]);
//# sourceMappingURL=statusgarantia.fe5cf3ca.js.map