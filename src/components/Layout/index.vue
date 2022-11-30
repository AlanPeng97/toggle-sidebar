<template>
  <div class="layout">
    <SideBar></SideBar>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import SideBar from "./SideBar/index.vue";
export default {
  components: {
    SideBar,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
