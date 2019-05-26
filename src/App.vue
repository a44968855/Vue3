<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <message></message>
    <scroll></scroll>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/all.scss";
</style>
<script>

import message from './components/message.vue';
import scroll from './components/scrollTop.vue';

export default {
  components: {
    message,
    scroll,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  created() {
    this.$store.dispatch('client/getProduct');
    this.$store.dispatch('getCarts');
  },
};
</script>
