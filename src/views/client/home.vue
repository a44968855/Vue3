<template>
  <div class="mt-4 home">
    <div class="container">
      <div class="bd-example carousel">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="1"
            ></li>
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="2"
            ></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                class="d-block w-100"
                alt=""
              >
              <div class="carousel-caption d-none d-md-block b-white">
                <h5>歡慶開幕</h5>
                <p>輸入折扣碼:shop 全館5折起</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                class="d-block w-100"
                alt=""
              >
              <div class="carousel-caption d-none d-md-block b-white">
                <h5>歡慶開幕</h5>
                <p>輸入折扣碼:shop 全館5折起</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                class="d-block w-100"
                alt=""
              >
              <div class="carousel-caption d-none d-md-block b-white">
                <h5>歡慶開幕</h5>
                <p>輸入折扣碼:shop 全館5折起</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="link-box">
        <router-link
          :to="{path:'/client/products',query:{category:'衣服'}}"
          tag='div'
          class="shirt"
        >
          <img
            src="https://images.unsplash.com/photo-1505308105194-5f5be740d93d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          >
          <h6>shirt</h6>
        </router-link>
        <router-link
          :to="{path:'/client/products',query:{category:'鞋子'}}"
          tag="div"
          class="shoes"
        >
          <img
            src="https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          >
          <h6>shoes</h6>
        </router-link>
        <router-link
          :to="{path:'/client/products',query:{category:'包包'}}"
          tag='div'
          class="bags"
        >
          <img
            src="https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          >
          <h6>bags</h6>
        </router-link>
      </div>
      <h2 class="new_product">
        NEW PRODUCT
      </h2>
      <div class="home_content mt-5">
        <div
          class="wrapper"
          v-for="(card,index) in products"
          :key="index"
          v-show="index < 3"
        >
          <div
            class="productImage bg-cover"
            :style="{backgroundImage:`url(${card.imageUrl})`}"
          ></div>
          <div class="buttons">
            <a
              class="button"
              href="javascript:;"
              @click="addTocart(card.id)"
            >
            Add to cart</a>
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
      <div class="more mt-4">
        <button class="more-button">
          <router-link to="/client/products">
            查看更多
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    addTocart(id, qty = 1) {
      this.$store.dispatch('addTocart', { product_id: id, qty });
    },
  },
  computed: {
    products() {
      return this.$store.state.client.products;
    },
  },
  created() {
    this.$store.dispatch('client/getProduct');
  },
};
</script>
