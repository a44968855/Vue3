import axios from 'axios';

export default {
  namespaced: true,
  state: {
    products: [],
    categories: [],
    pagination: {},
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = [];
      if (state.products.length === 0) {
        payload.forEach((res) => {
          if (res.is_enabled) {
            state.products.push(res);
          }
        });
      }
    },
    CATEGORY(state, payload) {
      const categories = new Set();
      payload.forEach((item) => {
        categories.add(item.category);
      });
      state.categories = [...categories];
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
  },
  actions: {
    getProduct(context, item = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/products?page=${item}`;
      this.dispatch('updateLoading', true);
      axios.get(api).then((res) => {
        this.dispatch('updateLoading', false);
        context.commit('CATEGORY', res.data.products);
        context.commit('PRODUCTS', res.data.products);
        context.commit('PAGINATION', res.data.pagination);
      });
    },
  },
};
