<template>
  <div class="layout">
    <SideBar></SideBar>
    <div class="content">
      <div id="header">
        <Header></Header>
      </div>
      <transition name="fade-transform" mode="out-in">
        <router-view>
          <!-- <component :is="Component"></component> -->
        </router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import SideBar from "./SideBar/index.vue";
import Header from "./Header/index.vue";
export default {
  components: {
    SideBar,
    Header,
  },
  data() {
    return {
      data: "",
    };
  },
  computed: {},
  methods: {
    async getData() {
      const { data: res } = await this.$http.get("/example");
      this.data = res;
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: row;
  .content {
    flex-grow: 1;
    background-color: #ccc;
  }
}
</style>
