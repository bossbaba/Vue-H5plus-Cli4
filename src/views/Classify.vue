<template>
  <div class="classify">
    <van-sidebar class="box-all-height colors" @change="onChange" v-model="activeKey">
      <van-sidebar-item v-for="(item,index) of menuConfig" :key="index" :title="item.text" />
    </van-sidebar>
    <div class="components" ref="scroll">
      <van-cell-group
        v-if="silderIndex == 0"
      >
        <van-cell
          v-for="(item,index) of config"
          :key="index"
          :title="item.text"
          is-link
          :to='item.to'
        />
      </van-cell-group>
      <div class="about">
      
    </div>
    </div>
    
  </div>
</template>

<script>
import componentsConfig from "@/config/components.config.js";
import menuConfig from "@/config/menu.config.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      activeKey: 0,
      config: componentsConfig,
      menuConfig: menuConfig,
      silderIndex:0
    };
  },
  mounted() {
    this.$nextTick(()=>{
      this.scrollRuning();
    })
  },
  methods: {
    onChange(index) {
      this.silderIndex = index;
      this.$nextTick(()=>{
        this.scrollRuning();
      })
    },
    // clickEvent (item) {
    // },
    scrollRuning () {
      this.scroll = new BScroll(this.$refs.scroll, {
        click:true
      });
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

.components {
  width: calc(100vw - 86px);
  height: calc(100vh - 92px);
}
</style>