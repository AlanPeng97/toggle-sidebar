<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-title">
      <h1>Menu</h1>
    </div>
    <div class="sidebar-item-wrapper">
      <!-- 切换sidebar的列表 -->
      <div class="sidebar-switch-item-list">
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
export default {
  data() {
    return {
      currentRouter: this.$router.currentRoute.name,
      currentRouterChildren: this.getChildRoutes(),
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
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
