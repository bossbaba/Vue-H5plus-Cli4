<template>
  <div class="classify">
    <van-sidebar class="box-all-height colors" @change="onChange" v-model="activeKey">
      <van-sidebar-item :to="item.to" v-for="(item,index) of config" :key="index" :title="item.text" />
    </van-sidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import menuconfig from "@/config/components.config.js";
export default {
  data() {
    return {
      activeKey: 0,
      config: menuconfig
    };
  },
  methods: {
    onChange(index) {
      // console.log(index);
    }
  }
};
</script>

<style lang="stylus" scoped>
.classify {
  display: flex;
  justify-content: flex-start;
}

.colors {
  background-color: #fafafa;
  width: 86px;
}

.content {
  width: calc(100vw - 86px);
  height: calc(100vh - 92px);
  overflow-y: auto;
}

</style>