<template>
  <div>
    <div class="container">
      <div class="row py-4">
        <div class="col-md-6 px-0" v-if="product">
          <div>
            <div
              class="bg-cover bg"
              :style="{backgroundImage:`url(${product.imageUrl})`}"
            ></div>
          </div>
        </div>
        <div class="col-md-6 pl-5">
          <div>
            <h1 class="mt-4">{{product.title}}</h1>
            <h4 class="mt-3">{{product.price | currency}}/{{product.unit}}</h4>
            <hr>
            <p class="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, possimus placeat officia eos mollitia quas doloremque unde iusto nemo, tempore odio repellendus? Eius temporibus odio perferendis rem? Praesentium, quia et?</p>
            <select
              name
              class="form-control mt-3"
              v-model="count"
            >
              <option
                :value="num"
                v-for="(num) in 10"
                :key="num"
              >選購 {{num}} {{product.unit}}</option>
            </select>
            <div class="modal-footer">
              <div class="text-muted text-nowrap mr-3">
                小計
                <strong>{{product.price * count}}</strong> 元
              </div>
              <button
                type="button"
                class="btn btn-primary"
                @click="addTocart(product.id, count)"
              >
                <i
                  class="fas fa-spinner fa-spin"
                  v-if="Loading"
                ></i>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <h5 class="my-5">相關商品</h5>
      <div class="related_product">
        <div
          class="related_card"
          v-for="(card,index) in relatedProduct"
          :key="index"
        >
          <router-link
            tag="div"
            :to='`/client/product/${card.id}`'
            class="related_img bg-cover"
            :style="{backgroundImage:`url(${card.imageUrl})`}"
          ></router-link>
          <h4 class="related_title my-2">{{card.title}}</h4>
          <p class="related_price">{{card.price | currency}}</p>
          <a
            class="button btn"
            href="javascript:;"
            @click="addTocart(card.id)"
          >Add to cart</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scope>
@import "../../assets/helpers/_cilientProduct.scss";
</style>
<script>
export default {
  data() {
    return {
      productId: '',
      product: {},
      count: 1,
      relatedProduct: [],
    };
  },
  methods: {
    getProduct() {
      this.product = {};
      const relatedProduct = this.$store.state.client.products;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/product/${this.productId}`;
      this.$store.dispatch('updateLoading', true);
      this.$http.get(api).then((res) => {
        this.$store.dispatch('updateLoading', false);
        this.product = res.data.product;
        this.relatedProduct = [];
        relatedProduct.forEach((item) => {
          if (item.category === this.product.category
            && item.id !== this.product.id
            && this.relatedProduct.length < 3) {
            this.relatedProduct.push(item);
          }
        });
      });
    },
    addTocart(id, qty = this.count) {
      this.$store.dispatch('addTocart', { product_id: id, qty });
    },
  },
  computed: {
    Loading() {
      return this.$store.state.status.btnLoading;
    },
  },
  watch: {
    $route(to) {
      const vm = this;
      vm.productId = to.params.productId;
      vm.getProduct();
      vm.count = 1;
    },
  },
  created() {
    this.productId = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
