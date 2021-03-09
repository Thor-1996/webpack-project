import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import "@/style/index.less";

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
