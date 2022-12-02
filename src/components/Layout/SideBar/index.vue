<template>
  <div class="sidebar-wrapper" :class="{ collapse: isCollapse }">
    <div class="sidebar-title bottom-border">
      <h1>Menu</h1>
    </div>
    <div class="sidebar-item-wrapper">
      <!-- 切换sidebar的列表 -->
      <div class="sidebar-switch-item-list bottom-border">
        <div
          v-for="item in $router.options.routes"
          :key="item.path"
          class="switch-item"
        >
          <router-link :to="item.path" @click.native="changeRouter">
            {{ item.name }}
          </router-link>
        </div>
      </div>
      <!-- sidebar列表 -->
      <!-- <div>{{ currentRouterChildren }}</div> -->
      <div class="sidebar-item-list">
        <div v-for="item in currentRouterChildren" :key="item.path">
          <div>{{ item.name }}</div>
        </div>
      </div>
      <!-- <button @click="check">check</button> -->
    </div>
  </div>
</template>
<script>
import bus from "@/store/modules/eventBus.js";

export default {
  data() {
    return {
      currentRouter: this.$router.currentRoute.name,
      currentRouterChildren: this.getChildRoutes(),
      isCollapse: true,
    };
  },
  computed: {},
  // created() {
  //   this.changeRouter();
  // },
  watch: {
    $route(to) {
      // console.log(to);
      this.currentRouter = to.name;
      this.currentRouterChildren = this.getChildRoutes();
    },
  },
  methods: {
    changeRouter: function () {
      this.currentRouter = this.$router.currentRoute.name;
      // console.log(this.currentRouter);
    },
    check: function () {
      console.log(this.currentRouter);
      console.log(this.$router.options.routes);
      console.log(this.$route.matched);
      console.log(this.childRoutes());
    },
    getChildRoutes() {
      let routes = {
        children: this.$router.options.routes,
      };
      let route = this.$route.matched;
      // let childRoutes = [];
      for (let i = 0; i < route.length; i++) {
        routes = routes.children.find((item) => item.name == route[i].name);
      }
      // arr = routes.children.find((item) => item.name == route[0].name);
      return routes.children;
    },
    changeCollapse() {
      bus.$emit("switchCollapse", (val) => {
        this.isCollapse = val;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
