(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dispositivos"],{"2b5d":function(e,t,i){"use strict";i("7db0"),i("c975"),i("fb6a"),i("a434"),i("b0c0"),i("d3b7"),i("25f0"),i("8a79");var n=i("5530"),s=(i("2bfd"),i("b974")),a=(i("4de4"),i("d81d"),i("45fc"),i("498a"),i("8654")),o=i("d9f7"),l=i("80d2"),r=Object(n["a"])(Object(n["a"])({},s["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),c=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,i){return i.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:function(){return r}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var i=Object(l["r"])(t,e.itemText),n=null!=i?String(i):"";return e.filter(t,String(e.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch=e,this.$emit("update:search-input",e)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=s["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(n["a"])(Object(n["a"])({},r),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=s["a"].options.computed.listData.call(this);return e.props=Object(n["a"])(Object(n["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=void 0)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(e,t){var i=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){i.internalSearch&&(1===e.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===l["x"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l["x"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l["x"].backspace&&e!==l["x"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var i=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===i){var n=this.selectedItems.length,s=e!==n-1?e:e-1,a=this.selectedItems[s];a?this.selectItem(t):this.setValue(this.multiple?[]:void 0),this.selectedIndex=s}else this.selectedIndex=i}},clearableCallback:function(){this.internalSearch=void 0,s["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=a["a"].options.methods.genInput.call(this);return e.data=Object(o["a"])(e.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=s["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,i=t.value;t.value&&this.activateMenu(),this.internalSearch=i,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;s["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){s["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){s["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){if(-1!==this.selectedIndex){var t=this.selectedItems[this.selectedIndex],i=this.getText(t);e.clipboardData.setData("text/plain",i),e.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}}});t["a"]=c.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return s["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var t=this.delimiters.find((function(t){return e.endsWith(t)}));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var e=c.options.methods.genInput.call(this);return delete e.data.attrs.name,e.data.on.paste=this.onPaste,e},genChipSelection:function(e,t){var i=this,a=s["a"].options.methods.genChipSelection.call(this,e,t);return this.multiple&&(a.componentOptions.listeners=Object(n["a"])(Object(n["a"])({},a.componentOptions.listeners),{},{dblclick:function(){i.editingIndex=t,i.internalSearch=i.getText(e),i.selectedIndex=-1}})),a},onChipInput:function(e){s["a"].options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(e,t){this.autoSelectFirst&&c.options.methods.onFilteredItemsChanged.call(this,e,t)},onKeyDown:function(e){var t=e.keyCode;s["a"].options.methods.onKeyDown.call(this,e),this.multiple&&t===l["x"].left&&0===this.$refs.input.selectionStart?this.updateSelf():t===l["x"].enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();c.options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():c.options.methods.selectItem.call(this,e)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(e){s["a"].options.methods.setValue.call(this,null!=e?e:this.internalSearch)},updateEditing:function(){var e=this.internalValue.slice();e[this.editingIndex]=this.internalSearch,this.setValue(e),this.editingIndex=-1},updateCombobox:function(){var e=Boolean(this.$scopedSlots.selection)||this.hasChips;e&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),e&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this.getMenuIndex();if(!(e<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var t=this.selectedItems.indexOf(this.internalSearch);if(t>-1){var i=this.internalValue.slice();i.splice(t,1),this.setValue(i)}if(e>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(e){if(this.multiple&&!this.searchIsDirty){var t=e.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");t&&-1===this.findExistingIndex(t)&&(e.preventDefault(),s["a"].options.methods.selectItem.call(this,t))}}}})},"2bfd":function(e,t,i){},"61fe":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.dispositivos,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[e._v("Cadastro de Dispositivos")]),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",s,!1),n),[e._v("Novo Item")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-combobox",{attrs:{items:e.marcas,"item-text":"marca",label:"Marcas",outlined:""},model:{value:e.editedItem.marca,callback:function(t){e.$set(e.editedItem,"marca",t)},expression:"editedItem.marca"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-combobox",{attrs:{items:e.modelos,"item-text":"modelo",label:"Modelo",outlined:""},model:{value:e.editedItem.modelo,callback:function(t){e.$set(e.editedItem,"modelo",t)},expression:"editedItem.modelo"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[i("v-combobox",{attrs:{items:e.clientes,"item-text":"nome",label:"Cliente",outlined:""},model:{value:e.editedItem.cliente,callback:function(t){e.$set(e.editedItem,"cliente",t)},expression:"editedItem.cliente"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{label:"Número de Série",outlined:""},model:{value:e.editedItem.num_serie,callback:function(t){e.$set(e.editedItem,"num_serie",t)},expression:"editedItem.num_serie"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{label:"Descrição",outlined:""},model:{value:e.editedItem.descricao,callback:function(t){e.$set(e.editedItem,"descricao",t)},expression:"editedItem.descricao"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Salvar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v("mdi-pencil")]),i("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v("mdi-delete")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Resetar")])]},proxy:!0}])})},s=[],a=(i("c975"),i("a434"),{data:function(){return{dialog:!1,headers:[{text:"ID",value:"id"},{text:"Marca",align:"start",value:"marca"},{text:"Modelo",value:"modelo"},{text:"Num Série",value:"num_serie"},{text:"Descrição",value:"descricao"},{text:"Cliente",value:"cliente"},{text:"Ações",value:"actions",sortable:!1}],dispositivos:[],modelos:[],marcas:[],clientes:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?"Cadastrar Dispositivo:":"Editar Dispositivo:"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.dispositivos=[{id:1,marca:"LG",modelo:"K-10",num_serie:"123456",descricao:"Azul",cliente:"José da Silva"},{id:2,marca:"Motorola",modelo:"Moto G6",num_serie:"456789",descricao:"Verde",cliente:"Francisco Roberto"},{id:3,marca:"Nokia",modelo:"B360",num_serie:"77456789",descricao:"Cinza",cliente:"Roberto Miranda"},{id:4,marca:"Apple",modelo:"11 Max",num_serie:"4561231",descricao:"Branco",cliente:"Maria Lucia"}],this.marcas=[{id:1,marca:"LG"},{id:2,marca:"Motorola"},{id:3,marca:"Xiaomi"},{id:4,marca:"Apple"},{id:5,marca:"Samsung"},{id:6,marca:"Nokia"}],this.modelos=[{id:1,marca:"LG",modelo:"LG-K10"},{id:2,marca:"Motorola",modelo:"Moto G6"},{id:3,marca:"Xiaomi",modelo:"Note 8"},{id:4,marca:"Apple",modelo:"11 Max"},{id:5,marca:"Samsung",modelo:"S9 Plus"},{id:6,marca:"Nokia",modelo:"B360"}],this.clientes=[{id:1,nome:"José da Silva"},{id:2,nome:"Francisco Roberto"},{id:3,nome:"Roberto Miranda"},{id:4,nome:"Maria Lucia"},{id:5,nome:"Ana Luzia"},{id:6,nome:"Fernando Bueno"}]},editItem:function(e){this.editedIndex=this.dispositivos.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.dispositivos.indexOf(e);confirm("Você tem certeza que deseja apagar este item?")&&this.dispositivos.splice(t,1)},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.dispositivos[this.editedIndex],this.editedItem):this.dispositivos.push(this.editedItem),this.close()}}}),o=a,l=i("2877"),r=i("6544"),c=i.n(r),d=i("8336"),h=i("b0af"),u=i("99d9"),m=i("62ad"),p=i("2b5d"),f=i("a523"),v=i("8fea"),I=i("169a"),g=i("132d"),x=i("0fd9"),b=i("2fa4"),S=i("8654"),D=i("71d9"),y=i("2a7f"),C=Object(l["a"])(o,n,s,!1,null,null,null);t["default"]=C.exports;c()(C,{VBtn:d["a"],VCard:h["a"],VCardActions:u["a"],VCardText:u["b"],VCardTitle:u["c"],VCol:m["a"],VCombobox:p["a"],VContainer:f["a"],VDataTable:v["a"],VDialog:I["a"],VIcon:g["a"],VRow:x["a"],VSpacer:b["a"],VTextField:S["a"],VToolbar:D["a"],VToolbarTitle:y["a"]})},"8a79":function(e,t,i){"use strict";var n=i("23e7"),s=i("06cf").f,a=i("50c4"),o=i("5a34"),l=i("1d80"),r=i("ab13"),c=i("c430"),d="".endsWith,h=Math.min,u=r("endsWith"),m=!c&&!u&&!!function(){var e=s(String.prototype,"endsWith");return e&&!e.writable}();n({target:"String",proto:!0,forced:!m&&!u},{endsWith:function(e){var t=String(l(this));o(e);var i=arguments.length>1?arguments[1]:void 0,n=a(t.length),s=void 0===i?n:h(a(i),n),r=String(e);return d?d.call(t,r,s):t.slice(s-r.length,s)===r}})}}]);
//# sourceMappingURL=dispositivos.f98120a3.js.map