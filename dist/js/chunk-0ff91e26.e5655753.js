(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ff91e26"],{8472:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("clientTitle"),s("router-view"),s("Footer")],1)},i=[],n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[t._m(0),t._m(1),s("div",{staticClass:"nav-wrap"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"nav"},[s("router-link",{class:{active:"home"===this.$route.name},attrs:{tag:"li",to:"/client/home"}},[t._v("\n          Home\n        ")]),s("router-link",{class:{active:"clientProducts"===this.$route.name},attrs:{tag:"li",to:"/client/products"}},[t._v("\n          Product\n        ")]),s("router-link",{attrs:{tag:"li",to:"/Login"}},[t._v("\n          Admin\n        ")])],1),s("div",{staticClass:"cart"},[s("button",{staticClass:"bag btn",attrs:{type:"button","data-toggle":"modal","data-target":"#cartsModal"}},[t._m(2),t.cart?s("span",{staticClass:"drop_badge badge-pill badge-danger"},[t._v(t._s(t.cart.carts.length))]):t._e()])])])]),s("div",{staticClass:"modal",attrs:{id:"cartsModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(3),s("div",{staticClass:"modal-body"},[s("table",{staticClass:"table"},[t._m(4),s("tbody",t._l(t.cart.carts,function(a,e){return s("tr",{key:e},[s("td",[s("button",{staticClass:"btn text-danger disabled",attrs:{href:"#",disabled:t.status===a.id},on:{click:function(s){return s.preventDefault(),t.removeCart(a.id)}}},[t.status===a.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):s("i",{staticClass:"fas fa-trash-alt"})])]),s("td",[t._v(t._s(a.product.title))]),s("td",[t._v(t._s(a.qty))]),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.total)))])])}),0),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])])])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("繼續選購")]),s("router-link",{staticClass:"btn btn-success",attrs:{to:"/client/orderout","data-dismiss":"modal"}},[t._v("前往付款")])],1)])])])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title"},[s("div",{staticClass:"container"},[s("div",{staticClass:"logo"},[t._v("Logo")]),s("div",{staticClass:"info"},[s("i",{staticClass:"fab fa-facebook-f"}),s("i",{staticClass:"fab fa-google"}),s("i",{staticClass:"fab fa-instagram"})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"img"},[s("h1",{staticClass:"shopName"},[t._v("LOGO")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"fas fa-shopping-bag"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title font-weight-bold"},[t._v("購 物 車")]),s("button",{staticClass:"close",attrs:{"data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("td"),s("td",[t._v("品名")]),s("td",[t._v("數量")]),s("td",{staticClass:"text-right"},[t._v("價錢")])])])}],c={methods:{getCart:function(){this.$store.dispatch("getCart")},removeCart:function(t){this.$store.dispatch("removeCart",t)}},computed:{cart:function(){return this.$store.state.cart},status:function(){return this.$store.state.status.btnLoading}}},l=c,o=(s("84cc"),s("2877")),d=Object(o["a"])(l,n,r,!1,null,null,null),u=d.exports,f=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("section",{staticClass:"footer mt-4"},[s("footer",{staticClass:"py-4 d-flex justify-content-center align-items-center"},[s("p",{staticClass:"text-white m-0"},[t._v("© Copright 2019 僅提供練習用 無商業用途")])])])])}],_=(s("c8d4"),{}),m=Object(o["a"])(_,f,v,!1,null,null,null),C=m.exports,h={components:{clientTitle:u,Footer:C}},b=h,g=Object(o["a"])(b,e,i,!1,null,null,null);a["default"]=g.exports},"84cc":function(t,a,s){"use strict";var e=s("9480"),i=s.n(e);i.a},9480:function(t,a,s){},c8d4:function(t,a,s){"use strict";var e=s("d3cb"),i=s.n(e);i.a},d3cb:function(t,a,s){}}]);
//# sourceMappingURL=chunk-0ff91e26.e5655753.js.map