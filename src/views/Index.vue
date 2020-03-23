<template>
  <div class="index">
    <div>wellcome vvh5+</div>
  </div>
</template>

<script>
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
  display flex
  justify-content center
  align-items center
  height calc(100vh - 92px)
</style>