<template>
  <div>
    <clientTitle></clientTitle>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import clientTitle from './clientTitle.vue';
import Footer from './footer.vue';

export default {
  components: {
    clientTitle,
    Footer,
  },
};
</script>
