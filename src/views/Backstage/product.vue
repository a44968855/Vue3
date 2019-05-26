<template>
  <div>
    <div class="container">
        <div class="row py-4">
      <div class="col-md-6 px-0">
        <div>
          <div
            class="bg-cover"
            :style="{backgroundImage:`url(${product.imageUrl})`}"
            style="height:380px"
          ></div>
        </div>
      </div>
      <div class="col-md-6 pl-5">
        <div>
          <h1 class="mt-4">{{product.title}}</h1>
          <h4 class="mt-3">{{product.price|currency}}/{{product.unit}}</h4>
          <hr>
          <p class="h5">{{product.content}}</p>
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
              <strong>{{ count * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addTocart(product.id, product.num)"
            >
              <i
                class="fas fa-spinner fa-spin"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {},
      productId: '',
      count: 1,
    };
  },
  methods: {
    getProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/product/${vm.productId}`;
      vm.$http.get(api).then((res) => {
        vm.product = res.data.product;
      });
    },
    addTocart(id, qty = 1) {
      this.$store.dispatch('addTocart', { product_id: id, qty });
    },
  },
  created() {
    this.productId = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
