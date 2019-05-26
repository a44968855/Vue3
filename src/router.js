import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Backstage/Home.vue';
// import backstate from './store/backstate';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/client/home',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Backstage/Login.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./components/Backstage/dashboard.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          name: 'products',
          component: () => import('./views/Backstage/products.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'product/:productId',
          name: 'product',
          component: () => import('./views/Backstage/product.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: () => import('./views/Backstage/coupon.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'simulation',
          name: 'simulation',
          component: () => import('./views/Backstage/simulation.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'orderlist',
          name: 'OrderList',
          component: () => import('./views/Backstage/OrderList.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'order/:orderId',
          name: 'Order',
          component: () => import('./views/Backstage/Order.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/client',
      name: 'client',
      component: () => import('./components/client/client.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('./views/client/home.vue'),
        },
        {
          path: 'products',
          name: 'clientProducts',
          component: () => import('./views/client/clientProducts.vue'),
        },
        {
          path: 'product/:productId',
          name: 'clientProduct',
          component: () => import('./views/client/clientProduct.vue'),
        },
        {
          path: 'orderout',
          name: 'orderOut',
          component: () => import('./views/client/OrderOut.vue'),
        },
        {
          path: 'clientorder/:orderId',
          name: 'clientOrder',
          component: () => import('./views/client/clientOrder.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
