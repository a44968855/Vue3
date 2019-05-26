import axios from 'axios';

export default {
  namespaced: true,
  state: {
    products: [],
    pagination: {},
  },
  mutations: {
    PRODUCT(state, payload) {
      state.products = payload;
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
  },
  actions: {
    getProducts(context, item = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/products?page=${item}`;
      this.dispatch('updateLoading', true);
      axios.get(api).then((res) => {
        context.commit('PAGINATION', res.data.pagination);
        this.dispatch('updateLoading', false);
        context.commit('PRODUCT', res.data.products);
      });
    },
  },
};
