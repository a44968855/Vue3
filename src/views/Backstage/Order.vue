<template>
  <div>
    <div class="my-5 row justify-content-center">
      <form
        class="col-md-6"
        @submit.prevent="payOrder"
      >
        <table class="table">
          <thead>
            <th>品名</th>
            <th>數量</th>
            <th class="text-right">單價</th>
          </thead>
          <tbody>
            <tr
              v-for="item in orders.products"
              :key="item.id"
            >
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total | currency }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td
                colspan="2"
                class="text-right"
              >總計</td>
              <td class="text-right">{{ orders.total | currency }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ orders.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ orders.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ orders.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ orders.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!orders.is_paid">尚未付款</span>
                <span
                  v-else
                  class="text-success"
                >付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="text-right"
          v-if="orders.is_paid === false"
        >
          <button class="btn btn-danger"
          @click="payOrder"
          >確認付款去</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderId: '',
      orders: {
        user: {},
        products: {},
      },
    };
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/order/${this.orderId}`;
      this.$http.get(url).then((res) => {
        this.orders = res.data.order;
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/pay/${this.orderId}`;
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.getOrder();
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
