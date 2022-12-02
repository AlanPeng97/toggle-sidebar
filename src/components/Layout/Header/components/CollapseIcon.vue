<template>
  <div class="collapse-icon" @click="switchCollapse">
    <i
      :class="[
        isCollapse ? 'icon-zhedie-shouqi' : 'icon-zhedie-zhankai',
        'iconfont',
      ]"
    ></i>
  </div>
</template>
<script>
import bus from "@/store/modules/eventBus.js";

export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  computed: {},
  methods: {
    switchCollapse() {
      this.isCollapse = !this.isCollapse;
      bus.$emit("switchCollapse", this.isCollapse);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../index.scss";
</style>
