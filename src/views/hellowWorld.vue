<template>
  <div class="main">
    <img :src="require('@/assets/tip.png')" style="width:100px" alt="" />
    <button class="sb-btn" @click="handleClick">点我</button>

    <button @click="getJson(1)">getJson1</button>
    <button @click="getJson(2)">getJson2</button>
    <button @click="getJson(3)">getJson3</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getJson(val) {
      import(`@/json/json${val}.json`).then(({ default: obj }) => {
        console.log(obj);
      });
    },
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
