<template>
  <div class="header">
    <div class="title">
      <div class="container">
        <div class="logo">Logo</div>
        <div class="info">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    </div>
    <div class="img">
      <h1 class="shopName">LOGO</h1>
    </div>
    <div class="nav-wrap">
      <div class="container">
        <ul class="nav">
          <router-link
            :class="{'active' : this.$route.name==='home'}"
            tag="li"
            to="/client/home"
          >
            Home
          </router-link>
          <router-link
            :class="{'active' : this.$route.name==='clientProducts'}"
            tag="li"
            to="/client/products"
          >
            Product
          </router-link>
          <router-link
            tag="li"
            to="/Login"
          >
            Admin
          </router-link>
        </ul>

        <div class="cart">
          <button
            class="bag btn"
            type="button"
            data-toggle="modal"
            data-target="#cartsModal"
          >
            <a href="javascript:;"><i class="fas fa-shopping-bag"></i></a>
            <span
              class="drop_badge badge-pill badge-danger"
              v-if="cart"
            >{{cart.carts.length}}</span>
          </button>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div
      id="cartsModal"
      class="modal"
      tabindex="-1"
      role="dialog"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title font-weight-bold">購 物 車</h5>
            <button
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
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
                      class="btn text-danger disabled"
                      @click.prevent="removeCart(cart.id)"
                      :disabled="status===cart.id ? true : false"
                    >
                      <i
                        v-if="status===cart.id"
                        class="fas fa-spinner fa-spin"
                      ></i>
                      <i
                        v-else
                        class="fas fa-trash-alt"
                      ></i>
                    </button>
                  </td>
                  <td>{{cart.product.title}}</td>
                  <td>{{cart.qty}}</td>
                  <td class="text-right">{{cart.total|currency}}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td
                    class="text-right"
                    colspan="3"
                  >總計</td>
                  <td class="text-right">{{cart.final_total|currency}}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >繼續選購</button>
            <router-link
              class="btn btn-success"
              to="/client/orderout"
              data-dismiss="modal"
            >前往付款</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getCart() {
      this.$store.dispatch('getCart');
    },
    removeCart(id) {
      this.$store.dispatch('removeCart', id);
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

<style lang="scss">
@import "../../assets/all.scss";
</style>
