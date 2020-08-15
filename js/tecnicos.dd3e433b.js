(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tecnicos"],{"2e24":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.ltecnico,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[e._v("Cadastro de Tecnicos")]),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),n),[e._v("Novo Item")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-card-title",[i("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[i("v-text-field",{attrs:{label:"Nome",outlined:"",required:"",counter:200,rules:e.tecnicoRulesNomeEndereco},model:{value:e.editedItem.nome,callback:function(t){e.$set(e.editedItem,"nome",t)},expression:"editedItem.nome"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:{mask:"###.###.###-##"},expression:"{mask:'###.###.###-##'}"}],attrs:{label:"CPF",outlined:"",required:"",rules:e.tecnicoRulesCpf},model:{value:e.editedItem.cpf,callback:function(t){e.$set(e.editedItem,"cpf",t)},expression:"editedItem.cpf"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:{mask:"(##) ####-####"},expression:"{mask:'(##) ####-####'}"}],attrs:{label:"Telefone",outlined:"",required:"",rules:e.tecnicoRulesTelefone},model:{value:e.editedItem.telefone,callback:function(t){e.$set(e.editedItem,"telefone",t)},expression:"editedItem.telefone"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[i("v-text-field",{attrs:{label:"Endereço",outlined:"",required:"",counter:200,rules:e.tecnicoRulesNomeEndereco},model:{value:e.editedItem.endereco,callback:function(t){e.$set(e.editedItem,"endereco",t)},expression:"editedItem.endereco"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{label:"Login",outlined:"",required:"",counter:50,rules:e.tecnicoRulesLoginSenha},model:{value:e.editedItem.login,callback:function(t){e.$set(e.editedItem,"login",t)},expression:"editedItem.login"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{label:"Senha",type:"password",outlined:"",required:"",counter:50,rules:e.tecnicoRulesLoginSenha},model:{value:e.editedItem.senha,callback:function(t){e.$set(e.editedItem,"senha",t)},expression:"editedItem.senha"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),i("v-btn",{attrs:{disabled:!e.valid,color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Salvar")])],1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"430px"},model:{value:e.dialogExcluir,callback:function(t){e.dialogExcluir=t},expression:"dialogExcluir"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[e._v("Deseja mesmo remover este Item?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeExcluir}},[e._v("Cancelar")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemComfirm}},[e._v("Sim")]),i("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v("mdi-pencil")]),i("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v("mdi-delete")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Resetar")])]},proxy:!0}])})},o=[],c=(i("c975"),i("a434"),i("ac1f"),i("841c"),i("3cec")),a=i("1821"),s=c["a"].build(),l={novo:"Novo Tecnico",edicao:"Edição de Tecnico",exclusao:"Deseja mesmo remover este Tecnico?"},d={name:"ltecnico",components:{},directives:{mask:a["mask"]},data:function(){return{dialog:!1,dialogExcluir:!1,valid:!0,tecnicoRulesNomeEndereco:[function(e){return!!e||"Preenchimento Necessário"},function(e){return e&&e.length<=200&&e.length>=10||"O campo deve ter pelo menos 10 e no maximo 200 letras"}],tecnicoRulesCpf:[function(e){return!!e||"Preenchimento Necessário"},function(e){return e&&e.length<=14&&e.length>=14||"O campo deve ter 11 digitos"}],tecnicoRulesTelefone:[function(e){return!!e||"Preenchimento Necessário"},function(e){return e&&e.length<=14&&e.length>=14||"O campo deve ter 10 digitos"}],tecnicoRulesLoginSenha:[function(e){return!!e||"Preenchimento Necessário"},function(e){return e&&e.length<=50&&e.length>=5||"O campo deve ter pelo menos 5 e no maximo 50 letras"}],headers:[{text:"ID",value:"id"},{text:"Nome",align:"start",value:"nome"},{text:"CPF",value:"cpf"},{text:"Telefone",value:"telefone"},{text:"Endereço",value:"endereco"},{text:"Ações",align:"end",value:"actions",sortable:!1}],ltecnico:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?l.novo:l.edicao}},watch:{dialog:function(e){e||this.close()}},created:function(){this.fetchRecords()},methods:{fetchRecords:function(){s.search({}).then(this.fetchRecodsSuccess)},fetchRecodsSuccess:function(e){Array.isArray(e.rows)?this.ltecnico=e.rows:this.ltecnico=[]},editItem:function(e){this.editedIndex=this.ltecnico.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.ltecnico.indexOf(e),this.editedItem=Object.assign({},e),this.dialogExcluir=!0},deleteItemComfirm:function(){s.destroy(this.editedItem).then(this.ltecnico.splice(this.editedIndex,1)),this.closeExcluir()},closeExcluir:function(){var e=this;this.dialogExcluir=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;this.editedIndex>-1?(console.log(this.editedItem),s.update(this.editedItem).then(Object.assign(this.ltecnico[this.editedIndex],this.editedItem))):s.create(this.editedItem).then((function(t){return e.ltecnico.push(t)})),this.close()}}},r=d,u=i("2877"),m=i("6544"),v=i.n(m),f=i("8336"),h=i("b0af"),x=i("99d9"),p=i("62ad"),b=i("a523"),I=i("8fea"),g=i("169a"),k=i("4bd4"),C=i("132d"),T=i("0fd9"),_=i("2fa4"),w=i("8654"),E=i("71d9"),O=i("2a7f"),R=Object(u["a"])(r,n,o,!1,null,null,null);t["default"]=R.exports;v()(R,{VBtn:f["a"],VCard:h["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:p["a"],VContainer:b["a"],VDataTable:I["a"],VDialog:g["a"],VForm:k["a"],VIcon:C["a"],VRow:T["a"],VSpacer:_["a"],VTextField:w["a"],VToolbar:E["a"],VToolbarTitle:O["a"]})},"3cec":function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i("d4ec"),o=i("262e"),c=i("2caf"),a=i("ade3"),s=i("de4f"),l=function(e){Object(o["a"])(i,e);var t=Object(c["a"])(i);function i(){return Object(n["a"])(this,i),t.apply(this,arguments)}return i}(s["a"]);Object(a["a"])(l,"resource","/tecnicos")}}]);
//# sourceMappingURL=tecnicos.dd3e433b.js.map