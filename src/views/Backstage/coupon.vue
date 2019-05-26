<template>
  <div>
    <div class="d-flex justify-content-end">
      <button
        class="btn btn-primary mt-4"
        @click="openModal('post')"
      >新增優惠券</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>優惠名稱</th>
          <th>折扣比例</th>
          <th>截止日期</th>
          <th>折扣碼</th>
          <th class="text-center">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,key) in coupon"
          :key="key"
        >
          <td>{{item.title}}</td>
          <td>{{item.percent}}%</td>
          <td>{{item.due_date}}</td>
          <td>{{item.code}}</td>
          <td class="d-flex justify-content-center">
            <div>
              <button
                class="btn btn-outline-primary"
                @click="openModal('put',item)"
              >修改</button>
              <button
                class="btn btn-outline-danger"
                @click="opendelModal('delete',item)"
              >刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- postModal -->
    <div
      class="modal"
      id="postModal"
      tabindex="-1"
      role="dialog"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title">{{ title }}</h5>
          </div>
          <div class="modal-body">
            <label for="coupon_title">優惠名稱</label>
            <input
              type="text"
              class="form-control"
              id="coupon_title"
              placeholder="優惠名稱"
              v-model="tempcoupon.title"
            >
            <label for="coupon_title">折扣比例</label>
            <input
              type="text"
              class="form-control"
              id="coupon_percent"
              placeholder="折扣比例"
              v-model="tempcoupon.percent"
            >
            <label for="coupon_dueDate">截止日期</label>
            <input
              type="date"
              class="form-control"
              id="coupon_dueDate"
              placeholder="截止日期"
              v-model="tempcoupon.due_date"
            >
            <label for="coupon_code">折扣碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              placeholder="折扣碼"
              v-model="tempcoupon.code"
            >
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >關閉</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="postCoupon(tempcoupon.id)"
            >儲存</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delmodal -->
    <div
      class="modal"
      id="delModal"
      tabindex="-1"
      role="dialog"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title">確認刪除{{tempcoupon.title}}優惠券</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="text-danger">確認刪除{{tempcoupon.title}}優惠券</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >取消</button>
            <button
              type="button"
              class="btn btn-danger"
              @click="postCoupon(tempcoupon.id)"
            >確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';

export default {
  data() {
    return {
      coupon: [],
      tempcoupon: {},
      couponMethod: '',
      title: '',
    };
  },
  methods: {
    getCoupon(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/coupons?page=${page}`;
      const vm = this;
      vm.$http.get(api).then((res) => {
        vm.coupon = res.data.coupons;
      });
    },
    openModal(status, item) {
      this.couponMethod = status;
      this.title = '新增優惠券';
      this.tempcoupon = {};
      if (status === 'put') {
        this.title = '修改優惠券';
        this.tempcoupon = { ...item };
      }
      $('#postModal').modal('show');
    },
    opendelModal(status, item) {
      this.couponMethod = status;
      this.tempcoupon = { ...item };
      $('#delModal').modal('show');
    },
    postCoupon(id) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/coupon`;
      const vm = this;
      if (vm.couponMethod === 'delete') {
        api = `${process.env.VUE_APP_APIPATH}/api/${
          process.env.VUE_APP_CUSTOMPATH
        }/admin/coupon/${id}`;
      } else if (vm.couponMethod === 'put') {
        api = `${process.env.VUE_APP_APIPATH}/api/${
          process.env.VUE_APP_CUSTOMPATH
        }/admin/coupon/${id}`;
      }
      vm.$http[vm.couponMethod](api, { data: vm.tempcoupon }).then((res) => {
        vm.getCoupon();
        $('#postModal').modal('hide');
        $('#delModal').modal('hide');
      });
    },
  },
  created() {
    this.getCoupon();
  },
};
</script>
