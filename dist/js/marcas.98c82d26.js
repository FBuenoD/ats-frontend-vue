(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["marcas"],{"5e6a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.lMarca},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("Cadastro de Marcas")]),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,c=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",c,!1),i),[t._v("Novo Item")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"Marca",outlined:""},model:{value:t.editedItem.nomeMarca,callback:function(e){t.$set(t.editedItem,"nomeMarca",e)},expression:"editedItem.nomeMarca"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Salvar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v("mdi-pencil")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v("mdi-delete")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Resetar")])]},proxy:!0}])})},c=[],n=(a("c975"),a("a434"),a("ac1f"),a("841c"),a("f0b9")),r=n["a"].build(),o={novo:"Nova Marca",edicao:"Edição de Marca",exclusao:"Deseja mesmo remover esta Marca?"},s={name:"lMarca",components:{},data:function(){return{dialog:!1,headers:[{text:"ID",value:"id"},{text:"Nome",value:"nomeMarca"},{text:"Ações",align:"end",value:"actions",sortable:!1}],lMarca:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?o.novo:o.edicao}},watch:{dialog:function(t){t||this.close()}},created:function(){this.fetchRecords()},methods:{fetchRecords:function(){r.search({}).then(this.fetchRecodsSuccess)},fetchRecodsSuccess:function(t){Array.isArray(t.rows)?this.lMarca=t.rows:this.lMarca=[]},editItem:function(t){this.editedIndex=this.lMarca.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this.lMarca.indexOf(t);confirm(o.exclusao)&&r.destroy(t).then(this.lMarca.splice(e,1))},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){var t=this;this.editedIndex>-1?(console.log(this.editedItem),r.update(this.editedItem).then(Object.assign(this.lMarca[this.editedIndex],this.editedItem))):r.create(this.editedItem).then((function(e){return t.lMarca.push(e)})),this.close()}}},d=s,l=a("2877"),u=a("6544"),f=a.n(u),v=a("8336"),m=a("b0af"),h=a("99d9"),b=a("62ad"),p=a("a523"),x=a("8fea"),I=a("169a"),M=a("132d"),k=a("0fd9"),g=a("2fa4"),V=a("8654"),_=a("71d9"),w=a("2a7f"),y=Object(l["a"])(d,i,c,!1,null,null,null);e["default"]=y.exports;f()(y,{VBtn:v["a"],VCard:m["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:b["a"],VContainer:p["a"],VDataTable:x["a"],VDialog:I["a"],VIcon:M["a"],VRow:k["a"],VSpacer:g["a"],VTextField:V["a"],VToolbar:_["a"],VToolbarTitle:w["a"]})},f0b9:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var i=a("d4ec"),c=a("262e"),n=a("2caf"),r=a("ade3"),o=a("de4f"),s=function(t){Object(c["a"])(a,t);var e=Object(n["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(o["a"]);Object(r["a"])(s,"resource","/marcas")}}]);
//# sourceMappingURL=marcas.98c82d26.js.map