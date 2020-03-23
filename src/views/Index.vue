<template>
  <div class="index">
    <van-index-bar :index-list="indexList" :sticky-offset-top="46">
      <div v-for="(item,index ) of indexList" :key='index'>
        <van-index-anchor :index="index">标题{{index}}</van-index-anchor>
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { IndexBar, IndexAnchor } from 'vant';
export default {
  data () {
    return {
      indexList:[1,2,3,4,5,6,7,8,9]
    }
  },
  mounted() {
    window.plus ? this.plusReady() : document.addEventListener("plusready", this.plusReady, !1)
  },
  methods: {
    plusReady() {
      
    }
  }
};
</script>

<style lang="stylus" scoped>
.index 
  position relative
</style>