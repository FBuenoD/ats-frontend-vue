(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orcamentos"],{"8ec0":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.ordemServicoItem,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[e._v("Serviços")]),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),a),[e._v("Novo Item")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-select",{attrs:{items:e.servicos,"item-text":"servico",label:"Serviços",outlined:""},model:{value:e.editedItem.servico,callback:function(t){e.$set(e.editedItem,"servico",t)},expression:"editedItem.servico"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{label:"Valor",outlined:""},model:{value:e.editedItem.valor,callback:function(t){e.$set(e.editedItem,"valor",t)},expression:"editedItem.valor"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Salvar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var a=t.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v("mdi-pencil")]),i("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v("mdi-delete")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Resetar")])]},proxy:!0}])})},o=[],s=(i("c975"),i("a434"),{data:function(){return{dialog:!1,headers:[{text:"ID",value:"id"},{text:"Serviço",align:"start",value:"servico"},{text:"Valor",value:"valor"},{text:"Ações",value:"actions",sortable:!1}],ordemServicoItem:[],servicos:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?"Cadastrar Serviço:":"Editar Serviço:"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.ordemServicoItem=[{id:1,servico:"Trocar Tela",valor:"100"},{id:2,servico:"Trocar Bateria",valor:"150"},{id:3,servico:"Formatar SO",valor:"20"},{id:4,servico:"Limpeza Geral",valor:"20"}],this.servicos=[{id:1,servico:"Trocar Bateria"},{id:2,servico:"Limpeza Geral"},{id:3,servico:"Trocar Tela"},{id:4,servico:"Formatar SO"}]},editItem:function(e){this.editedIndex=this.ordemServicoItem.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.ordemServicoItem.indexOf(e);confirm("Você tem certeza que deseja apagar este item?")&&this.ordemServicoItem.splice(t,1)},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.ordemServicoItem[this.editedIndex],this.editedItem):this.ordemServicoItem.push(this.editedItem),this.close()}}}),c=s,r=i("2877"),d=i("6544"),n=i.n(d),l=i("8336"),v=i("b0af"),m=i("99d9"),u=i("62ad"),f=i("a523"),b=i("8fea"),p=i("169a"),I=i("132d"),x=i("0fd9"),h=i("b974"),T=i("2fa4"),V=i("8654"),k=i("71d9"),C=i("2a7f"),g=Object(r["a"])(c,a,o,!1,null,null,null);t["a"]=g.exports;n()(g,{VBtn:l["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:u["a"],VContainer:f["a"],VDataTable:b["a"],VDialog:p["a"],VIcon:I["a"],VRow:x["a"],VSelect:h["a"],VSpacer:T["a"],VTextField:V["a"],VToolbar:k["a"],VToolbarTitle:C["a"]})},c233:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.orcamentos,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[e._v("Cadastro de Orçamentos")]),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),a),[e._v("Novo Item")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-select",{attrs:{items:e.clientes,"item-text":"nome",label:"Cliente",outlined:""},model:{value:e.editedItem.cliente,callback:function(t){e.$set(e.editedItem,"cliente",t)},expression:"editedItem.cliente"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-select",{attrs:{items:e.dispositivos,"item-text":"dispositivo",label:"Dispositivos",outlined:""},model:{value:e.editedItem.dispositivo,callback:function(t){e.$set(e.editedItem,"dispositivo",t)},expression:"editedItem.dispositivo"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[i("TabelaOrdemServicoItem")],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[i("v-text-field",{attrs:{label:"Descrição",outlined:""},model:{value:e.editedItem.descricao,callback:function(t){e.$set(e.editedItem,"descricao",t)},expression:"editedItem.descricao"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-select",{attrs:{items:e.tecnicos,"item-text":"tecnico",label:"Tecnico",outlined:""},model:{value:e.editedItem.tecnico,callback:function(t){e.$set(e.editedItem,"tecnico",t)},expression:"editedItem.tecnico"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{label:"Valor Total",outlined:""},model:{value:e.editedItem.valorTotal,callback:function(t){e.$set(e.editedItem,"valorTotal",t)},expression:"editedItem.valorTotal"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Salvar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var a=t.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v("mdi-pencil")]),i("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v("mdi-delete")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Resetar")])]},proxy:!0}])})},o=[],s=(i("c975"),i("a434"),i("8ec0")),c={components:{TabelaOrdemServicoItem:s["a"]},data:function(){return{dialog:!1,headers:[{text:"ID",value:"id"},{text:"Cliente",value:"cliente"},{text:"Dispositivo",align:"start",value:"dispositivo"},{text:"Tecnico",value:"tecnico"},{text:"Valor Total",value:"valorTotal"},{text:"Ações",value:"actions",sortable:!1}],orcamentos:[],tecnicos:[],dispositivos:[],clientes:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?"Cadastrar Orçamento:":"Editar Orçamento:"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.orcamentos=[{id:1,dispositivo:"55648754",tecnico:"José Da Costa",valorTotal:"150",descricao:"Azul",cliente:"José da Silva"},{id:2,dispositivo:"6549879",tecnico:"José Da Costa",valorTotal:"200",descricao:"Verde",cliente:"Francisco Roberto"},{id:3,dispositivo:"566447",tecnico:"José Da Costa",valorTotal:"300",descricao:"Cinza",cliente:"Roberto Miranda"},{id:4,dispositivo:"4567894",tecnico:"José Da Costa",valorTotal:"500",descricao:"Branco",cliente:"Maria Lucia"}],this.dispositivos=[{id:1,dispositivo:"4567894"},{id:2,dispositivo:"566447"},{id:3,dispositivo:"6549879"},{id:4,dispositivo:"22123154"},{id:5,dispositivo:"55648754"},{id:6,dispositivo:"23164978"}],this.tecnicos=[{id:1,tecnico:"José Da Costa"},{id:2,tecnico:"Matter Zomms"},{id:3,tecnico:"Piter Jack"},{id:4,tecnico:"Steve Dogrs"},{id:5,tecnico:"Alberts Lindebeerg"},{id:6,tecnico:"Jotesr Huberts"}],this.clientes=[{id:1,nome:"José da Silva"},{id:2,nome:"Francisco Roberto"},{id:3,nome:"Roberto Miranda"},{id:4,nome:"Maria Lucia"},{id:5,nome:"Ana Luzia"},{id:6,nome:"Fernando Bueno"}]},editItem:function(e){this.editedIndex=this.orcamentos.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.orcamentos.indexOf(e);confirm("Você tem certeza que deseja apagar este item?")&&this.orcamentos.splice(t,1)},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.orcamentos[this.editedIndex],this.editedItem):this.orcamentos.push(this.editedItem),this.close()}}},r=c,d=i("2877"),n=i("6544"),l=i.n(n),v=i("8336"),m=i("b0af"),u=i("99d9"),f=i("62ad"),b=i("a523"),p=i("8fea"),I=i("169a"),x=i("132d"),h=i("0fd9"),T=i("b974"),V=i("2fa4"),k=i("8654"),C=i("71d9"),g=i("2a7f"),S=Object(d["a"])(r,a,o,!1,null,null,null);t["default"]=S.exports;l()(S,{VBtn:v["a"],VCard:m["a"],VCardActions:u["a"],VCardText:u["b"],VCardTitle:u["c"],VCol:f["a"],VContainer:b["a"],VDataTable:p["a"],VDialog:I["a"],VIcon:x["a"],VRow:h["a"],VSelect:T["a"],VSpacer:V["a"],VTextField:k["a"],VToolbar:C["a"],VToolbarTitle:g["a"]})}}]);
//# sourceMappingURL=orcamentos.3406fc70.js.map