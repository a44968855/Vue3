import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VeeValidate from 'vee-validate';
import zhTWVeeValidate from 'vee-validate/dist/locale/zh_TW';
import currency from './filter/currency';
import timeDate from './filter/timeDate';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import store from './store/store';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.component('Loading', Loading);
Vue.filter('currency', currency);
Vue.filter('time', timeDate);
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW', zhTWVeeValidate);
Vue.use(VueAxios, axios);
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
router.afterEach(() => {
  window.scrollTo(0, 500);
});
