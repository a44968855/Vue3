(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddf77"],{8449:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mt-4 home"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"link-box"},[a("router-link",{staticClass:"shirt",attrs:{to:{path:"/client/products",query:{category:"衣服"}},tag:"div"}},[a("img",{attrs:{src:"https://images.unsplash.com/photo-1505308105194-5f5be740d93d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",alt:""}}),a("h6",[t._v("shirt")])]),a("router-link",{staticClass:"shoes",attrs:{to:{path:"/client/products",query:{category:"鞋子"}},tag:"div"}},[a("img",{attrs:{src:"https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",alt:""}}),a("h6",[t._v("shoes")])]),a("router-link",{staticClass:"bags",attrs:{to:{path:"/client/products",query:{category:"包包"}},tag:"div"}},[a("img",{attrs:{src:"https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",alt:""}}),a("h6",[t._v("bags")])])],1),a("h2",{staticClass:"new_product"},[t._v("\n      NEW PRODUCT\n    ")]),a("div",{staticClass:"home_content mt-5"},t._l(t.products,function(s,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:i<3,expression:"index < 3"}],key:i,staticClass:"wrapper"},[a("div",{staticClass:"productImage bg-cover",style:{backgroundImage:"url("+s.imageUrl+")"}}),a("div",{staticClass:"buttons"},[a("a",{staticClass:"button",attrs:{href:"javascript:;"},on:{click:function(a){return t.addTocart(s.id)}}},[t._v("\n          Add to cart")]),a("router-link",{staticClass:"button",attrs:{tag:"a",to:"/client/product/"+s.id}},[t._v("Learn More")])],1),a("div",{staticClass:"info"},[a("div",{staticClass:"main-info"},[a("div",{staticClass:"left"},[a("p",{staticClass:"info_title"},[t._v(t._s(s.title))]),a("p",{staticClass:"category text"},[t._v(t._s(s.category))])]),a("div",{staticClass:"right"},[a("p",{staticClass:"price"},[t._v(t._s(t._f("currency")(s.price)))])])]),t._m(1,!0)])])}),0),a("div",{staticClass:"more mt-4"},[a("button",{staticClass:"more-button"},[a("router-link",{attrs:{to:"/client/products"}},[t._v("\n          查看更多\n        ")])],1)])])])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bd-example carousel"},[a("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleCaptions","data-ride":"carousel"}},[a("ol",{staticClass:"carousel-indicators"},[a("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"0"}}),a("li",{attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}}),a("li",{attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"2"}})]),a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",alt:""}}),a("div",{staticClass:"carousel-caption d-none d-md-block b-white"},[a("h5",[t._v("歡慶開幕")]),a("p",[t._v("輸入折扣碼:shop 全館5折起")])])]),a("div",{staticClass:"carousel-item"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",alt:""}}),a("div",{staticClass:"carousel-caption d-none d-md-block b-white"},[a("h5",[t._v("歡慶開幕")]),a("p",[t._v("輸入折扣碼:shop 全館5折起")])])]),a("div",{staticClass:"carousel-item"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",alt:""}}),a("div",{staticClass:"carousel-caption d-none d-md-block b-white"},[a("h5",[t._v("歡慶開幕")]),a("p",[t._v("輸入折扣碼:shop 全館5折起")])])])]),a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleCaptions",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])]),a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleCaptions",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sub-info"},[a("div",{staticClass:"sizes"},[a("p",{staticClass:"info_title"},[t._v("Sizes")]),a("p",{staticClass:"size-opts text"},[t._v("XS, S, M, L, XL")])])])}],c={methods:{addTocart:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("addTocart",{product_id:t,qty:s})}},computed:{products:function(){return this.$store.state.client.products}},created:function(){this.$store.dispatch("client/getProduct")}},e=c,r=a("2877"),l=Object(r["a"])(e,i,o,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0ddf77.d6499f59.js.map