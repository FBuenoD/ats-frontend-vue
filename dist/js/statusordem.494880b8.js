(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["statusordem"],{"6dc2":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.stordem,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Cadastro de Status da Ordem de Serviço")]),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",i,!1),o),[e._v("Novo Item")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"Status",outlined:"",required:"",counter:100,rules:e.statusRules},model:{value:e.editedItem.descricao,callback:function(t){e.$set(e.editedItem,"descricao",t)},expression:"editedItem.descricao"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),a("v-btn",{attrs:{disabled:!e.valid,color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Salvar")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v("mdi-pencil")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("mdi-delete")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Resetar")])]},proxy:!0}])})},i=[],s=(a("c975"),a("a434"),a("ac1f"),a("841c"),a("d4ec")),r=a("262e"),d=a("2caf"),n=a("ade3"),c=a("de4f"),l=function(e){Object(r["a"])(a,e);var t=Object(d["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(c["a"]);Object(n["a"])(l,"resource","/statusordem");var u=l.build(),m={novo:"Novo Status de Ordem de Serviço",edicao:"Edição de Status de Ordem de Serviço",exclusao:"Deseja mesmo remover este Status de Ordem de Serviço?"},v={name:"stordem",components:{},data:function(){return{dialog:!1,valid:!0,statusRules:[function(e){return!!e||"Preenchimento Necessário"},function(e){return e&&e.length<=100&&e.length>=5||"O campo deve ter pelo menos 5 e no maximo 100 letras"}],headers:[{text:"ID",value:"id"},{text:"Descrição",value:"descricao"},{text:"Ações",align:"end",value:"actions",sortable:!1}],stordem:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?m.novo:m.edicao}},watch:{dialog:function(e){e||this.close()}},created:function(){this.fetchRecords()},methods:{fetchRecords:function(){u.search({}).then(this.fetchRecodsSuccess)},fetchRecodsSuccess:function(e){Array.isArray(e.rows)?this.stordem=e.rows:this.stordem=[]},editItem:function(e){this.editedIndex=this.stordem.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.stordem.indexOf(e);confirm(m.exclusao)&&u.destroy(e).then(this.stordem.splice(t,1))},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;this.editedIndex>-1?(console.log(this.editedItem),u.update(this.editedItem).then(Object.assign(this.stordem[this.editedIndex],this.editedItem))):u.create(this.editedItem).then((function(t){return e.stordem.push(t)})),this.close()}}},f=v,h=a("2877"),b=a("6544"),p=a.n(b),x=a("8336"),I=a("b0af"),k=a("99d9"),g=a("62ad"),V=a("a523"),O=a("8fea"),S=a("169a"),_=a("4bd4"),y=a("132d"),w=a("0fd9"),C=a("2fa4"),T=a("8654"),j=a("71d9"),R=a("2a7f"),D=Object(h["a"])(f,o,i,!1,null,null,null);t["default"]=D.exports;p()(D,{VBtn:x["a"],VCard:I["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VCol:g["a"],VContainer:V["a"],VDataTable:O["a"],VDialog:S["a"],VForm:_["a"],VIcon:y["a"],VRow:w["a"],VSpacer:C["a"],VTextField:T["a"],VToolbar:j["a"],VToolbarTitle:R["a"]})}}]);
//# sourceMappingURL=statusordem.494880b8.js.map