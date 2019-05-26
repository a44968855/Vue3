<template>
  <div>
    <table class="table">
      <thead>
        <tr class="text-center">
          <th scope="col">購買日期</th>
          <th scope="col">購買人</th>
          <th scope="col">Email</th>
          <th scope="col">購買項目</th>
          <th scope="col">訂單編號</th>
          <th scope="col">應付金額</th>
          <th scope="col">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="text-center"
          v-for="(item,index) in orders"
          :key="index"
        >
          <td>{{item.create_at | time}}</td>
          <td v-if="item.user">{{item.user.name}}</td>
          <td v-if="item.user">{{item.user.email}}</td>
          <td class="d-flex flex-column text-center">
            <span
              v-for="(item,index) in item.products"
              :key="index"
            >{{item.product.title}}</span>
          </td>
          <td>{{item.id}}</td>
          <td class="text-right">{{item.total | currency}}</td>
          <td>
            <span
              class="text-success"
              v-if="item.is_paid"
            >已付款</span>
            <span
              class="text-danger"
              v-else
            >尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import $ from 'jquery';

export default {
  data() {
    return {
      orders: {
        products: {},
      },
    };
  },
  methods: {
    getOrderList(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/orders?page=${page}`;
      const vm = this;
      vm.$http.get(api).then((res) => {
        vm.orders = res.data.orders;
      });
    },
  },
  created() {
    this.getOrderList();
  },
};
</script>
