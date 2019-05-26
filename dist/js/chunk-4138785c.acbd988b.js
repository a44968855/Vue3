(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4138785c"],{"71f3":function(t,e,a){"use strict";var s=a("b0f4"),r=a.n(s);r.a},b0f4:function(t,e,a){},d2a5:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-8 pb-5"},[a("h2",{staticClass:"h1 py-3 font-weight-bold"},[t._v("購物車清單")]),0===t.cart.carts.length?a("span",{staticClass:"pb-5"},[t._v("購物車內還沒有商品喔。趕緊搶購!!")]):t._e(),0!==t.cart.total?a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.cart.carts,function(e,s){return a("tr",{key:s},[a("td",[a("button",{staticClass:"btn text-danger",attrs:{href:"#",disabled:t.status===e.id},on:{click:function(a){return a.preventDefault(),t.removeCart(e.id)}}},[t.status===e.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):a("i",{staticClass:"fas fa-trash-alt"})])]),a("td",[t._v("\n                "+t._s(e.product.title)+"\n                "),e.coupon?a("div",{staticClass:"text-success"},[t._v("已套用優惠券")]):t._e()]),a("td",[t._v(t._s(e.qty)+" / "+t._s(e.product.unit))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))])])}),0),a("tfoot",[a("tr",[a("td",{staticClass:"text-right h4",attrs:{colspan:"3"}},[t._v("總計")]),a("td",{staticClass:"text-right h4"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),t.cart.final_total!==t.cart.total?a("tr",[a("td",{staticClass:"text-right h4",attrs:{colspan:"3"}},[t._v("打折後")]),a("td",{staticClass:"text-right h4 text-success"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])]):t._e()])]):t._e(),0!==t.cart.total?a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼: shop","aria-label":"Recipient's username","aria-describedby":"basic-addon2"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn input-group-text",attrs:{id:"basic-addon2"},on:{click:t.addCouponCode}},[t._v("套用優惠碼")])])]):t._e()])]),0!==t.cart.total?a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.createdOrder(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("姓名必須輸入")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{type:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("address")?a("span",{staticClass:"text-danger"},[t._v("地址欄位不得留空")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._m(1)])]):t._e()])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td"),a("td",[t._v("品名")]),a("td",[t._v("數量")]),a("td",{staticClass:"text-right"},[t._v("價錢")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger"},[t._v("送出訂單")])])}],o={data:function(){return{isLoading:!1,coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{removeCart:function(t){this.$store.dispatch("removeCart",t)},addCouponCode:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("shoptext","/coupon"),a=this,s={code:a.coupon_code};a.$http.post(e,{data:s}).then(function(e){e.data.success&&t.$store.dispatch("getCarts")})},createdOrder:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("shoptext","/order"),e=this,a=e.form;this.$validator.validate().then(function(s){s?e.$http.post(t,{data:a}).then(function(t){t.data.success&&e.$router.push("/client/clientorder/".concat(t.data.orderId))}):e.$store.dispatch("message/updateMessage",{message:"欄位不完整",status:"danger"})})}},computed:{cart:function(){return this.$store.state.cart},status:function(){return this.$store.state.status.btnLoading}}},i=o,n=(a("71f3"),a("2877")),c=Object(n["a"])(i,s,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-4138785c.acbd988b.js.map