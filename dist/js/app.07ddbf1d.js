(function(t){function e(e){for(var a,c,s=e[0],u=e[1],i=e[2],d=0,h=[];d<s.length;d++)c=s[d],o[c]&&h.push(o[c][0]),o[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},c={app:0},o={app:0},r=[];function s(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-07a3c440":"e242e378","chunk-0ff91e26":"e5655753","chunk-2d0a2d18":"3875fc74","chunk-2d0a4d35":"dbe68f66","chunk-2d0b380f":"634a8168","chunk-2d0d2fb0":"32fc6262","chunk-2d0d74b3":"46f761bf","chunk-2d0da302":"7b2678f5","chunk-2d0ddf77":"d6499f59","chunk-2d207d46":"2073db18","chunk-4138785c":"acbd988b","chunk-602aec82":"6e280e6d","chunk-60e07b50":"477fcb1c","chunk-6fb7b588":"9211b786"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-07a3c440":1,"chunk-0ff91e26":1,"chunk-4138785c":1,"chunk-602aec82":1,"chunk-60e07b50":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-07a3c440":"03ed5712","chunk-0ff91e26":"65a3aea7","chunk-2d0a2d18":"31d6cfe0","chunk-2d0a4d35":"31d6cfe0","chunk-2d0b380f":"31d6cfe0","chunk-2d0d2fb0":"31d6cfe0","chunk-2d0d74b3":"31d6cfe0","chunk-2d0da302":"31d6cfe0","chunk-2d0ddf77":"31d6cfe0","chunk-2d207d46":"31d6cfe0","chunk-4138785c":"5a6a04f1","chunk-602aec82":"cb9ada97","chunk-60e07b50":"e5333787","chunk-6fb7b588":"31d6cfe0"}[t]+".css",o=u.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===o))return e()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){i=h[s],d=i.getAttribute("data-href");if(d===a||d===o)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[t],l.parentNode.removeChild(l),n(r)},l.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(l)}).then(function(){c[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=r);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(t),i=function(e){d.onerror=d.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+c+")");r.type=a,r.request=c,n[1](r)}o[t]=void 0}};var h=setTimeout(function(){i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/Vue3/dist/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var h=0;h<i.length;h++)e(i[h]);var l=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3abf":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),c=n("bc3a"),o=n.n(c),r=n("a7fe"),s=n.n(r),u=n("9062"),i=n.n(u),d=(n("e40d"),n("7bb1")),h=n("427f"),l=n.n(h),f=(n("a481"),n("c5f6"),function(t){var e=Number(t);return"$".concat(e.toFixed(0).replace(/./g,function(t,e,n){var a=e&&"."!==t&&(n.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return a}))}),p=function(t){var e=new Date(1e3*t),n="".concat(e.getFullYear(),"-"),a="".concat(e.getMonth()+1<10?"0".concat(e.getMonth()+1):e.getMonth()+1,"-"),c="".concat(e.getDate()," "),o=n+a+c;return o},m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),n("message"),n("scroll"),n("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.1/css/all.css",integrity:"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",crossorigin:"anonymous"}}),n("router-view")],1)},g=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-alert"},t._l(t.messages,function(e,a){return n("div",{key:a,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v("\n    "+t._s(e.message)+"\n    "),n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(a)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},v=[],k={name:"Navbar",data:function(){return{}},methods:{removeMessage:function(t){this.$store.dispatch("message/removeMessage",t)}},created:function(){},computed:{messages:function(){return this.$store.state.message.messages}}},O=k,y=(n("c0f2"),n("2877")),A=Object(y["a"])(O,b,v,!1,null,null,null),T=A.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"scroll",on:{click:t.scroll}},[n("i",{staticClass:"fas fa-arrow-up"})])])},L=[],C={methods:{scroll:function(){window.scrollTo(0,0)}}},E=C,N=(n("ad2a"),Object(y["a"])(E,w,L,!1,null,null,null)),P=N.exports,x={components:{message:T,scroll:P},computed:{isLoading:function(){return this.$store.state.isLoading}},created:function(){this.$store.dispatch("client/getProduct"),this.$store.dispatch("getCarts")}},M=x,_=(n("5c0b"),Object(y["a"])(M,m,g,!1,null,null,null)),S=_.exports,I=n("8c4f");a["a"].use(I["a"]);var j=new I["a"]({routes:[{path:"*",redirect:"/client/home"},{path:"/login",name:"Login",component:function(){return n.e("chunk-60e07b50").then(n.bind(null,"ddb4"))}},{path:"/admin",name:"admin",component:function(){return n.e("chunk-2d0d2fb0").then(n.bind(null,"5b8e"))},meta:{requiresAuth:!0},children:[{path:"products",name:"products",component:function(){return n.e("chunk-6fb7b588").then(n.bind(null,"480e"))},meta:{requiresAuth:!0}},{path:"product/:productId",name:"product",component:function(){return n.e("chunk-2d0a4d35").then(n.bind(null,"07a9"))},meta:{requiresAuth:!0}},{path:"coupon",name:"coupon",component:function(){return n.e("chunk-2d0d74b3").then(n.bind(null,"75cb"))},meta:{requiresAuth:!0}},{path:"simulation",name:"simulation",component:function(){return n.e("chunk-2d0a2d18").then(n.bind(null,"0013"))},meta:{requiresAuth:!0}},{path:"orderlist",name:"OrderList",component:function(){return n.e("chunk-2d0da302").then(n.bind(null,"6b11"))},meta:{requiresAuth:!0}},{path:"order/:orderId",name:"Order",component:function(){return n.e("chunk-2d207d46").then(n.bind(null,"a1cc"))},meta:{requiresAuth:!0}}]},{path:"/client",name:"client",component:function(){return n.e("chunk-0ff91e26").then(n.bind(null,"8472"))},children:[{path:"home",name:"home",component:function(){return n.e("chunk-2d0ddf77").then(n.bind(null,"8449"))}},{path:"products",name:"clientProducts",component:function(){return n.e("chunk-602aec82").then(n.bind(null,"0767"))}},{path:"product/:productId",name:"clientProduct",component:function(){return n.e("chunk-07a3c440").then(n.bind(null,"f02d"))}},{path:"orderout",name:"orderOut",component:function(){return n.e("chunk-4138785c").then(n.bind(null,"d2a5"))}},{path:"clientorder/:orderId",name:"clientOrder",component:function(){return n.e("chunk-2d0b380f").then(n.bind(null,"293e"))},meta:{requiresAuth:!0}}]}]}),D=(n("4989"),n("2f62")),G={namespaced:!0,state:{products:[],pagination:{}},mutations:{PRODUCT:function(t,e){t.products=e},PAGINATION:function(t,e){t.pagination=e}},actions:{getProducts:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("shoptext","/admin/products?page=").concat(n);this.dispatch("updateLoading",!0),o.a.get(a).then(function(n){t.commit("PAGINATION",n.data.pagination),e.dispatch("updateLoading",!1),t.commit("PRODUCT",n.data.products)})}}},q=(n("ac6a"),n("cebc")),$={strick:!0,namespaced:!0,state:{messages:[]},mutations:{MESSAGES:function(t,e){t.messages.push(e)}},actions:{updateMessage:function(t,e){var n=Math.floor(new Date/1e3);t.commit("MESSAGES",Object(q["a"])({},e,{timestamp:n})),this.dispatch("message/removeMessageWithTiming",n)},removeMessage:function(t,e){t.state.messages.splice(e,1)},removeMessageWithTiming:function(t,e){setTimeout(function(){t.state.messages.forEach(function(n,a){n.timestamp===e&&t.state.messages.splice(a,1)})},5e3)}}},R=n("75fc"),B=(n("5df3"),n("4f7f"),{namespaced:!0,state:{products:[],categories:[],pagination:{}},mutations:{PRODUCTS:function(t,e){t.products=[],0===t.products.length&&e.forEach(function(e){e.is_enabled&&t.products.push(e)})},CATEGORY:function(t,e){var n=new Set;e.forEach(function(t){n.add(t.category)}),t.categories=Object(R["a"])(n)},PAGINATION:function(t,e){t.pagination=e}},actions:{getProduct:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("shoptext","/products?page=").concat(n);this.dispatch("updateLoading",!0),o.a.get(a).then(function(n){e.dispatch("updateLoading",!1),t.commit("CATEGORY",n.data.products),t.commit("PRODUCTS",n.data.products),t.commit("PAGINATION",n.data.pagination)})}}});a["a"].use(D["a"]);var U=new D["a"].Store({strick:!0,state:{isLoading:!1,status:{btnLoading:""},cart:{carts:[]}},mutations:{LOADING:function(t,e){t.isLoading=e},BTNLOADING:function(t,e){t.status.btnLoading=e},CART:function(t,e){t.cart=e}},actions:{updateLoading:function(t,e){t.commit("LOADING",e)},getCarts:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("shoptext","/cart");o.a.get(e).then(function(e){t.commit("CART",e.data.data)})},addTocart:function(t,e){var n=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("shoptext","/cart");t.commit("BTNLOADING",!0),o.a.post(a,{data:e}).then(function(e){e.data.success&&(t.commit("BTNLOADING",!1),n.dispatch("getCarts"),n.dispatch("message/updateMessage",{message:"成功加入購物車",status:"success"}))})},removeCart:function(t,e){var n=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("shoptext","/cart/").concat(e);t.state.status.btnLoading=e,o.a.delete(a).then(function(){n.dispatch("message/updateMessage",{message:"成功刪除",status:"danger"}),n.state.status.btnLoading=!1,n.dispatch("getCarts")})}},modules:{backState:G,message:$,client:B}});a["a"].config.productionTip=!1,o.a.defaults.withCredentials=!0,a["a"].component("Loading",i.a),a["a"].filter("currency",f),a["a"].filter("time",p),a["a"].use(d["a"]),d["a"].Validator.localize("zh_TW",l.a),a["a"].use(s.a,o.a),new a["a"]({router:j,store:U,render:function(t){return t(S)}}).$mount("#app"),j.beforeEach(function(t,e,n){if(t.meta.requiresAuth){var a="".concat("https://vue-course-api.hexschool.io","/api/user/check");o.a.post(a).then(function(t){t.data.success?n():n({path:"/login"})})}else n()}),j.afterEach(function(){window.scrollTo(0,500)})},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),c=n.n(a);c.a},"5e27":function(t,e,n){},"828f":function(t,e,n){},ad2a:function(t,e,n){"use strict";var a=n("828f"),c=n.n(a);c.a},c0f2:function(t,e,n){"use strict";var a=n("3abf"),c=n.n(a);c.a}});
//# sourceMappingURL=app.07ddbf1d.js.map