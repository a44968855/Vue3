<template>
  <div>
    <div class="row">
      <div
        class="col-md-4 mb-4 mt-4"
        v-for="(card,index) in products"
        :key="index"
      >
        <div class="card border-0 shadow-sm">
          <div
            style="height: 150px; background-size: cover; background-position: center"
            :style="{backgroundImage:`url(${card.imageUrl})`}"
          >
          </div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{card.category}}</span>
            <h5 class="card-title">
              <a
                href="#"
                class="text-dark"
              >{{card.title}}</a>
            </h5>
            <p class="card-text">內容</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <!-- <div class="h5">2,800 元</div> -->
              <del class="h6">原價 {{card.origin_price | currency}} 元</del>
              <div class="h5">現在只要 {{card.price | currency}} 元</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <router-link
              class="btn btn-outline-secondary btn-sm"
              :to="`/admin/product/${card.id}`"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="btnLoading"
              ></i>
              查看更多
            </router-link>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addTocart(card.id)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="btnLoading"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- cart--------------- -->
    <div class="container">
      <table class="table">
        <thead>
          <th></th>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr
            v-for="item in cart.carts"
            :Key="item.id"
          >
            <td class="align-middle">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeCart(item.id)"
                :disabled="btnLoading===cart.id ? true : false"
              >
                <i
                  class="far fa-trash-alt"
                  v-if="btnLoading !== item.id"
                ></i>
                <i
                  class="fas fa-spinner fa-spin"
                  v-else
                ></i>

              </button>
            </td>
            <td class="align-middle">
              {{ item.product.title }}
              <div
                class="text-success"
                v-if="item.coupon"
              >
                已套用優惠券
              </div>
            </td>
            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="align-middle text-right">{{ item.final_total | currency}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td
              colspan="3"
              class="text-right"
            >總計</td>
            <td class="text-right">{{ cart.total | currency }}</td>
          </tr>
          <tr>
            <td
              colspan="3"
              class="text-right text-success"
            >折扣價</td>
            <td class="text-right text-success">{{ cart.final_total | currency }}</td>
          </tr>
        </tfoot>
      </table>
      <div class="input-group mb-3 input-group-sm">
        <input
          type="text"
          class="form-control"
          placeholder="請輸入優惠碼"
          v-model="CouponCode"
        >
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="addCouponCode"
          >
            套用優惠碼
          </button>
        </div>
      </div>
      <!-- form--------------- -->
      <div class="my-5 row justify-content-center">
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
              required
            >
            <span class="text-danger"></span>
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
            >
            <span class="text-danger"></span>
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
            >
            <span class="text-danger">地址欄位不得留空</span>
          </div>

          <div class="form-group">
            <label for="comment">留言</label>
            <textarea
              name=""
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
<script>
export default {
  data() {
    return {
      CouponCode: '',
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
    getProducts() {
      this.$store.dispatch('backState/getProducts');
    },
    getCarts() {
      this.$store.dispatch('getCarts');
    },
    addTocart(id, qty = 1) {
      this.$store.dispatch('addTocart', { product_id: id, qty });
    },
    removeCart(id) {
      this.$store.dispatch('removeCart', id);
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/coupon`;
      const vm = this;
      const coupon = { code: vm.CouponCode };
      vm.$http.post(api, { data: coupon }).then((res) => {
        if (res.data.success) {
          vm.getCarts();
        }
      });
    },
    createdOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/order`;
      const vm = this;
      const order = vm.form;
      vm.$http.post(api, { data: order }).then((res) => {
        if (res.data.success) {
          vm.$router.push(`/admin/order/${res.data.orderId}`);
        }
      });
    },
  },
  computed: {
    products() {
      return this.$store.state.backState.products;
    },
    cart() {
      return this.$store.state.cart;
    },
    btnLoading() {
      return this.$store.state.status.btnLoading;
    },
  },
  created() {
    this.getProducts();
    this.getCarts();
  },
};
</script>
