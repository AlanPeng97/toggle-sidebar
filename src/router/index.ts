import Vue from "vue";
import VueRouter from "vue-router";
import platform1Router from "./platform1";
import platform2Router from "./platform2";
Vue.use(VueRouter);

import Home from "@/views/home/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/about/index.vue"),
  },
  {
    path: "/platform1",
    name: "platform1",
    component: () => import("@/views/platform1/index.vue"),
    children: platform1Router,
  },
  {
    path: "/platform2",
    name: "platform2",
    component: () => import("@/views/platform2/index.vue"),
    children: platform2Router,
  },
];

const router = new VueRouter({ routes });
export default router;
