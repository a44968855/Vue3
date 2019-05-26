<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8 pb-5">
          <h2 class="h1 py-3 font-weight-bold">購物車清單</h2>
          <span
            class="pb-5"
            v-if="cart.carts.length===0"
          >購物車內還沒有商品喔。趕緊搶購!!</span>
          <table
            class="table"
            v-if="cart.total!==0"
          >
            <thead>
              <tr>
                <td></td>
                <td>品名</td>
                <td>數量</td>
                <td class="text-right">價錢</td>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(cart,index) in cart.carts"
                :key="index"
              >
                <td>
                  <button
                    href="#"
                    class="btn text-danger"
                    @click.prevent="removeCart(cart.id)"
                    :disabled="status===cart.id ? true : false"
                  >
                    <i
                      v-if="status === cart.id"
                      class="fas fa-spinner fa-spin"
                    ></i>
                    <i
                      v-else
                      class="fas fa-trash-alt"
                    ></i>
                  </button>
                </td>
                <td>
                  {{cart.product.title}}
                  <div
                    class="text-success"
                    v-if="cart.coupon"
                  >已套用優惠券</div>
                </td>
                <td>{{cart.qty}} / {{cart.product.unit}}</td>
                <td class="text-right">{{cart.total|currency}}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  class="text-right h4"
                  colspan="3"
                >總計</td>
                <td class="text-right h4">{{cart.total|currency}}</td>
              </tr>
              <tr v-if="cart.final_total !==cart.total">
                <td
                  class="text-right h4"
                  colspan="3"
                >打折後</td>
                <td class="text-right h4 text-success">{{cart.final_total|currency}}</td>
              </tr>
            </tfoot>
          </table>
          <div
            class="input-group mb-3"
            v-if="cart.total!==0"
          >
            <input
              type="text"
              class="form-control"
              placeholder="請輸入優惠碼: shop"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              v-model="coupon_code"
            >
            <div class="input-group-append">
              <button
                class="btn input-group-text"
                id="basic-addon2"
                @click="addCouponCode"
              >套用優惠碼</button>
            </div>
          </div>
        </div>
      </div>
      <!-- form///// -->
      <div
        class="my-5 row justify-content-center"
        v-if="cart.total!==0"
      >
        <form
          class="col-md-6"
          @submit.prevent="createdOrder"
        >
          <div class="form-group">
            <label for="useremail">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="useremail"
              v-model="form.user.email"
              placeholder="請輸入 Email"
              v-validate="'required|email'"
            >
            <span
              class="text-danger"
              v-if="errors.has('email')"
            >{{ errors.first('email') }}</span>
          </div>

          <div class="form-group">
            <label for="username">收件人姓名</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="username"
              v-model="form.user.name"
              placeholder="輸入姓名"
              v-validate="'required'"
              :class="{'is-invalid':errors.has('name')}"
            >
            <span
              class="text-danger"
              v-if="errors.has('name')"
            >姓名必須輸入</span>
          </div>

          <div class="form-group">
            <label for="usertel">收件人電話</label>
            <input
              type="tel"
              class="form-control"
              id="usertel"
              v-model="form.user.tel"
              placeholder="請輸入電話"
            >
          </div>

          <div class="form-group">
            <label for="useraddress">收件人地址</label>
            <input
              type="text"
              class="form-control"
              name="address"
              id="useraddress"
              v-model="form.user.address"
              placeholder="請輸入地址"
              v-validate="'required'"
              :class="{'is-invalid': errors.has('address')}"
            >
            <span
              v-if="errors.has('address')"
              class="text-danger"
            >地址欄位不得留空</span>
          </div>

          <div class="form-group">
            <label for="comment">留言</label>
            <textarea
              name
              id="comment"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-right">
            <button class="btn btn-danger">送出訂單</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scope>
.tablew {
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
export default {
  data() {
    return {
      isLoading: false,
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    removeCart(id) {
      this.$store.dispatch('removeCart', id);
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/coupon`;
      const vm = this;
      const coupon = { code: vm.coupon_code };
      vm.$http.post(api, { data: coupon }).then((res) => {
        if (res.data.success) {
          this.$store.dispatch('getCarts');
        }
      });
    },
    createdOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/order`;
      const vm = this;
      const order = vm.form;
      this.$validator.validate().then((result) => {
        if (result) {
          vm.$http.post(api, { data: order }).then((res) => {
            if (res.data.success) {
              vm.$router.push(`/client/clientorder/${res.data.orderId}`);
            }
          });
        } else {
          vm.$store.dispatch('message/updateMessage', { message: '欄位不完整', status: 'danger' });
        }
      });
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    status() {
      return this.$store.state.status.btnLoading;
    },
  },
};
</script>
