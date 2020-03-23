<template>
<div class="tabbar">
  <div class="tabbar-content">
    <van-tabbar v-model="active" @change="changeEvent">
      <van-tabbar-item :icon="item.icon" @click="SwitchTab(item)" v-for="(item,index) of Ymenu" :key="index">{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</div>
</template>

<script>
import {
  Tabbar,
  TabbarItem
} from "vant";
import {
  mapState,
  mapMutations
} from "vuex";
export default {
  data() {
    return {
      active: this.$store.state.CurrentPagesActive
    };
  },
  props: {
    Ymenu: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    ...mapMutations(["clickChangesCurrentPagesActive"]),
    SwitchTab(pages) {
      this.$emit("SwitchTab", pages);
    },
    changeEvent(e) {
      this.clickChangesCurrentPagesActive(e);
    }
  }
};
</script>

<style lang="stylus" scoped>
.tabbar {
  .tabbar-content {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
  }
}
</style>
