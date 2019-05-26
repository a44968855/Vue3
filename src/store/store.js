import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import backState from './backstate';
import message from './message';
import client from './client';

Vue.use(Vuex);

export default new Vuex.Store({
  strick: true,
  state: {
    isLoading: false,
    status: { btnLoading: '' },
    cart: {
      carts: [],
    },
  },
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    BTNLOADING(state, payload) {
      state.status.btnLoading = payload;
    },
    CART(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    getCarts(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`;
      axios.get(api).then((res) => {
        context.commit('CART', res.data.data);
      });
    },
    addTocart(context, state) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`;
      context.commit('BTNLOADING', true);
      axios.post(api, { data: state }).then((res) => {
        if (res.data.success) {
          context.commit('BTNLOADING', false);
          this.dispatch('getCarts');
          this.dispatch('message/updateMessage', { message: '成功加入購物車', status: 'success' });
        }
      });
    },
    removeCart(context, state) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart/${state}`;
      context.state.status.btnLoading = state;
      axios.delete(api).then(() => {
        this.dispatch('message/updateMessage', { message: '成功刪除', status: 'danger' });
        this.state.status.btnLoading = false;
        this.dispatch('getCarts');
      });
    },
  },
  modules: {
    backState,
    message,
    client,
  },
});
