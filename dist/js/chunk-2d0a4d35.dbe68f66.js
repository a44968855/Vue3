(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4d35"],{"07a9":function(t,c,o){"use strict";o.r(c);var a=function(){var t=this,c=t.$createElement,o=t._self._c||c;return o("div",[o("div",{staticClass:"container"},[o("div",{staticClass:"row py-4"},[o("div",{staticClass:"col-md-6 px-0"},[o("div",[o("div",{staticClass:"bg-cover",staticStyle:{height:"380px"},style:{backgroundImage:"url("+t.product.imageUrl+")"}})])]),o("div",{staticClass:"col-md-6 pl-5"},[o("div",[o("h1",{staticClass:"mt-4"},[t._v(t._s(t.product.title))]),o("h4",{staticClass:"mt-3"},[t._v(t._s(t._f("currency")(t.product.price))+"/"+t._s(t.product.unit))]),o("hr"),o("p",{staticClass:"h5"},[t._v(t._s(t.product.content))]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(c){var o=Array.prototype.filter.call(c.target.options,function(t){return t.selected}).map(function(t){var c="_value"in t?t._value:t.value;return c});t.count=c.target.multiple?o:o[0]}}},t._l(10,function(c){return o("option",{key:c,domProps:{value:c}},[t._v("選購 "+t._s(c)+" "+t._s(t.product.unit))])}),0),o("div",{staticClass:"modal-footer"},[o("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v("\n            小計\n            "),o("strong",[t._v(t._s(t.count*t.product.price))]),t._v(" 元\n          ")]),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(c){return t.addTocart(t.product.id,t.product.num)}}},[o("i",{staticClass:"fas fa-spinner fa-spin"}),t._v("\n            加到購物車\n          ")])])])])])])])},n=[],r={data:function(){return{product:{},productId:"",count:1}},methods:{getProduct:function(){var t=this,c="".concat("https://vue-course-api.hexschool.io","/api/").concat("shoptext","/product/").concat(t.productId);t.$http.get(c).then(function(c){t.product=c.data.product})},addTocart:function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("addTocart",{product_id:t,qty:c})}},created:function(){this.productId=this.$route.params.productId,this.getProduct()}},s=r,e=o("2877"),i=Object(e["a"])(s,a,n,!1,null,null,null);c["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0a4d35.dbe68f66.js.map