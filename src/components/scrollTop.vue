<template>
  <div>
    <button
      class="scroll"
      @click="scroll"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<style lang="scss" scope>
.scroll {
  margin: 0;
  padding: 0;
  border: 1px solid transparent; //自定义边框
  outline: none;
  font-size: 30px;
  border-radius: 50px;
  z-index: 1;
  width: 50px;
  height: 50px;
  background-color: #ca9b52;
  position: fixed;
  right: 100px;
  bottom: 90px;
}
</style>
<script>

export default {
  methods: {
    scroll() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
