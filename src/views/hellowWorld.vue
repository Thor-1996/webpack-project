<template>
  <div class="main">
    <button class="sb-btn" @click="handleClick">点我</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$router.push("/next");
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  text-align: center;
  .sb-btn {
    color: blue;
  }
}
</style>
