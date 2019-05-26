<template>
  <div>
    <div class="text-right my-4">
      <button
        class="btn btn-primary"
        @click="openModal('post')"
      >建立新產品</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th width="120">#</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="80">編輯</th>
          <th width="80">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in products"
          :key="item.id"
        >
          <th scope="row">{{ index+1 }}</th>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price | currency}}</td>
          <td>{{ item.price | currency}}</td>
          <td>
            <p v-if="item.is_enabled">啟用</p>
            <p v-else>未啟用</p>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal('put', item)"
            >
              編輯</button>
          </td>
          <td>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="delModal('delete', item)"
            >
              刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pagination="pagination"></pagination>
    <!------------------------------------ modal ------------------------------------>
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-lg"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              <span v-if="modalStatus==='put'">編輯產品</span>
              <span v-else>新增產品</span>
            </h5>
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
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                  >
                </div>
                <div class="form-group">
                  <label for="customFile">或 上傳圖片
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="fileLoading === true"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile() , onUpload()"
                  >
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt=""
                  :src="tempProduct.imageUrl"
                >
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="tempProduct.title"
                  >
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="tempProduct.category"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                    >
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="tempProduct.origin_price"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="tempProduct.price"
                    >
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="tempProduct.content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    >
                    <label
                      class="form-check-label"
                      for="is_enabled"
                    >
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >取消</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >確認</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              <span>刪除產品</span>
            </h5>
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
            是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >取消</button>
            <button
              type="button"
              class="btn btn-danger"
              @click="updateProduct"
            >確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import pagination from '../../components/pagination.vue';

export default {
  data() {
    return {
      modalStatus: '',
      tempProduct: {},
      fileLoading: false,
    };
  },
  methods: {
    onUpload() {

    },
    getProducts(item) {
      this.$store.dispatch('backState/getProducts', item);
    },
    openModal(status, item) {
      const vm = this;
      if (status === 'post') {
        vm.tempProduct = {};
        vm.modalStatus = status;
      } else if (status === 'put') {
        vm.tempProduct = { ...item };
        vm.modalStatus = status;
        this.$refs.files.value = '';
      }
      $('#productModal').modal('show');
    },
    updateProduct() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/product`;
      const vm = this;
      this.$store.dispatch('updateLoading', true);
      if (vm.modalStatus === 'put') {
        api = `${process.env.VUE_APP_APIPATH}/api/${
          process.env.VUE_APP_CUSTOMPATH
        }/admin/product/${vm.tempProduct.id}`;
        this.$refs.files.value = '';
      } else if (vm.modalStatus === 'delete') {
        api = `${process.env.VUE_APP_APIPATH}/api/${
          process.env.VUE_APP_CUSTOMPATH
        }/admin/product/${vm.tempProduct.id}`;
      }
      vm.$http[vm.modalStatus](api, { data: vm.tempProduct }).then(() => {
        this.$store.dispatch('updateLoading', false);
        $('#productModal').modal('hide');
        $('#delProductModal').modal('hide');
        vm.getProducts();
      });
    },
    uploadFile() {
      const uploadedFile = this.$refs.files.files[0];
      const vm = this;
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/upload`;
      this.fileLoading = true;
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        this.fileLoading = false;
        if (res.data.success) {
          vm.$store.dispatch('message/updateMessage', { message: '上傳成功', status: 'success' });
          vm.$set(vm.tempProduct, 'imageUrl', res.data.imageUrl);
        } else {
          vm.$store.dispatch('message/updateMessage', { message: '上傳失敗', status: 'danger' });
        }
      });
    },
    delModal(status, item) {
      const vm = this;
      $('#delProductModal').modal('show');
      vm.tempProduct = item;
      vm.modalStatus = status;
    },
  },
  computed: {
    products() {
      return this.$store.state.backState.products;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    pagination() {
      return this.$store.state.pagination;
    },
  },
  created() {
    this.getProducts();
  },
  components: {
    pagination,
  },
};
</script>
