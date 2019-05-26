<template>
  <div class="hello">
    <dashboard></dashboard>
    <router-view/>
  </div>
</template>

<script>
import dashboard from '../../components/Backstage/dashboard.vue';

export default {
  components: {
    dashboard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
