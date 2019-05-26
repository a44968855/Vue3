<template>
  <div class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <ul class="list-group">
            <li
              class="list-group-item"
              :class="{'active' : selectCategory=== '全部'}"
              @click="selectCategory = '全部'"
            >全部</li>
            <li
              class="list-group-item"
              v-for="(item) in category"
              :key="item"
              :class="{'active' : selectCategory=== item}"
              @click="selectCategory = item"
            >{{item}}
            </li>
          </ul>
        </div>
        <div class="col-9">
          <div class="card-item">
            <div
              class="wrapper"
              v-for="(card,index) in products"
              :key="index"
              v-show="card.category === selectCategory || selectCategory === '全部'"
            >
              <div
                class="productImage"
                :style="{backgroundImage:`url(${card.imageUrl})`}"
              ></div>
              <div class="buttons">
                <a
                  href="javascript:;"
                  class="button"
                  @click="addTocart(card.id)"
                >Add to cart</a>
                <router-link
                  class="button"
                  tag='a'
                  :to="`/client/product/${card.id}`"
                >Learn More</router-link>
              </div>
              <div class="info">
                <div class="main-info">
                  <div class="left">
                    <p class="info_title">{{card.title}}</p>
                    <p class="category text">{{card.category}}</p>
                  </div>
                  <div class="right">
                    <p class="price">{{card.price | currency}}</p>
                  </div>
                </div>
                <div class="sub-info">
                  <div class="sizes">
                    <p class="info_title">Sizes</p>
                    <p class="size-opts text">XS, S, M, L, XL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pagination :pagination="pagination"></pagination>
    </div>
  </div>
</template>
<style lang="scss" scope>
@import "../../assets/helpers/clientProducts.scss";
</style>
<script>
import pagination from '../../components/pagination.vue';

export default {
  data() {
    return {
      selectCategory: '全部',
    };
  },
  methods: {
    addTocart(id, qty = 1) {
      this.$store.dispatch('addTocart', { product_id: id, qty });
    },
    getProducts() {
      this.$store.dispatch('client/getProduct');
    },
  },
  computed: {
    products() {
      return this.$store.state.client.products;
    },
    category() {
      return this.$store.state.client.categories;
    },
    pagination() {
      return this.$store.state.client.pagination;
    },
  },
  created() {
    if (this.$route.query.category) {
      this.selectCategory = this.$route.query.category;
    }
  },
  components: {
    pagination,
  },
};
</script>
