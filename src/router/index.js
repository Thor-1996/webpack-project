import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/hellowWorld.vue"),
  },
  {
    path: "/next",
    component: () => import("@/views/next.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
