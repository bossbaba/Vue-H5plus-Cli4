<template>
  <div>
    <van-nav-bar
      @click-left="onClickLeft"
      left-text="返回"
      title="单元格"
      :fixed="true"
      :z-index="9999"
    />
    <div class="scrollheight" ref="scroll">
      <div>
        <div class="title">基础用法</div>
        <van-cell-group>
          <van-cell title="单元格" value="内容" />
          <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>

        <div class="title">单元格大小</div>
        <van-cell-group>
          <van-cell title="单元格" value="内容" size="large" />
          <van-cell title="单元格" value="内容" size="large" label="描述信息" />
        </van-cell-group>

        <div class="title">展示图标</div>
        <van-cell-group>
          <van-cell title="单元格" icon="location-o" />
        </van-cell-group>
        <div class="title">只设置 value</div>
        <van-cell-group>
          <van-cell value="内容" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollruning();
    });
  },
  methods: {
    scrollruning() {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true
      });
    },
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style>
.title {
  padding: 20px;
  background: #f5f5f5;
}
</style>