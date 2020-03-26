<template>
  <div class="index" ref="index">
    <div>
      <div>wellcome vvh5+</div>
      <div>wellcome vvh5+</div>
      <div>wellcome vvh5+</div>
      <div>wellcome vvh5+</div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
    };
  },
  mounted() {
    window.plus
      ? this.plusReady()
      : document.addEventListener("plusready", this.plusReady, !1);
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.index, {});
    });
  },
  methods: {
    plusReady() {}
  }
};
</script>

<style lang="stylus" scoped>
.index {
  height: 100vh;

  div {
    div {
      height: 100vh;
    }
  }
}
</style>