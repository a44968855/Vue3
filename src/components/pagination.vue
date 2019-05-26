<template>
  <div class="d-flex justify-content-center">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{'disabled': !paginations.has_pre }"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="getProducts(paginations.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="(page) in paginations.total_pages"
          :key="page"
          :class="{'active': paginations.current_page === page}"
          @click.prevent="getProducts(page)"
        >
          <a
            class="page-link"
            href="#"
          >{{ page }}</a>
        </li>
        <li
          class="page-item"
          :class="{'disabled': !paginations.has_next }"
          @click.prevent="getProducts(paginations.current_page + 1)"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: ['pagination'],
  methods: {
    getProducts(page) {
      if (this.$route.name === 'clientProducts') {
        this.$store.dispatch('client/getProduct', page);
      }
      this.$store.dispatch('backState/getProducts', page);
    },
  },
  computed: {
    paginations() {
      if (this.$route.name === 'clientProducts') {
        return this.$store.state.client.pagination;
      } return this.$store.state.backState.pagination;
    },
  },
};
</script>
