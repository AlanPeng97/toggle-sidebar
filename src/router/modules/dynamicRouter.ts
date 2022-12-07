// import { resetRouter } from "@/router/index";
import axios from "axios";
import router from "@/router/index";
import { staticRouter } from "./stacticRouter";
import { resetRouter } from "@/router/index";
const modules = require.context("@/views/", true, /\.vue$/);

// 初始化动态路由

export const initDynamicRouter = async () => {
  let dynamicRouter: any[] = [];
  await axios({
    method: "GET",
    url: "https://mock.mengxuegu.com/mock/638d8d8c93a67b5f106692c4/toggle_sidebar/menu/list",
  }).then((res) => {
    // const routes = JSON.parse(JSON.stringify(res.data));
    // console.log(res.data.data);
    let count = 0;
    res.data.data.forEach((item: any) => {
      count++;
      if (item.component) {
        item.component = modules("." + item.component + ".vue").default;
      }
      // resetRouter();
      router.addRoute(item);
      console.log(count);
      dynamicRouter.push(item);
    });
    // console.log(dynamicRouter);
    router.options.routes = [...staticRouter, ...dynamicRouter];
    console.log(router.getRoutes());
  });
};
