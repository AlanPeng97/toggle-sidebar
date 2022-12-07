import Vue from "vue";
import App from "./App.vue";
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// iconfont CSS
import "@/assets/iconfont/iconfont.css";
// axios
import axios from "axios";
import router from "@/router/index";

Vue.prototype.$http = axios;
axios.defaults.baseURL =
  " https://mock.mengxuegu.com/mock/638d8d8c93a67b5f106692c4/toggle_sidebar";
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
