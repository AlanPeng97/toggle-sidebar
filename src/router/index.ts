import Vue from "vue";
import Router from "vue-router";
// import platform1Router from "./platform1";
// import platform2Router from "./platform2";
import { staticRouter } from "@/router/modules/stacticRouter";
import { initDynamicRouter } from "@/router/modules/dynamicRouter";

Vue.use(Router);

const createRouter = () =>
  new Router({
    routes: staticRouter,
  });

const router = createRouter();

let isToken = true;
router.beforeEach(async (to, from, next) => {
  if (isToken) {
    await initDynamicRouter();
    // next({ ...to, replace: true });
    router.replace(to.path);

    isToken = false;
  } else {
    next();
  }
});

export function resetRouter() {
  const newRouter = createRouter();
  router.match = newRouter.match;
  console.log("reset"); // the relevant part
}
// console.log(router.options.routes);

export default router;
