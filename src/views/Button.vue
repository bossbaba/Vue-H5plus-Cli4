<template>
  <div>
    <span class="paddingtb">按钮类型</span>
    <div class="flex-wrap-row">
      <div class="margintb" v-for="(item,index) of buttonConfig" :key="index">
        <van-button :type="item.type">{{item.text}}</van-button>
      </div>
    </div>
    <span class="paddingtb">朴素按钮</span>
    <div class="flex-wrap-row">
      <div class="margintb">
        <van-button plain type="primary">朴素按钮</van-button>
      </div>
      <div class="margintb">
        <van-button plain type="info">朴素按钮</van-button>
      </div>
    </div>
    <span class="paddingtb">细边框</span>
    <div class="flex-wrap-row">
      <div class="margintb">
        <van-button plain hairline type="primary">细边框按钮</van-button>
      </div>
      <div class="margintb">
        <van-button plain hairline type="info">细边框按钮</van-button>
      </div>
    </div>
    <span class="paddingtb">禁用状态</span>
    <div class="flex-wrap-row">
      <div class="margintb">
        <van-button disabled type="primary">细边框按钮</van-button>
      </div>
      <div class="margintb">
        <van-button disabled type="info">细边框按钮</van-button>
      </div>
    </div>
    <span class="paddingtb">加载状态</span>
    <div class="flex-wrap-row">
      <div class="margintb">
        <van-button loading type="primary" />
      </div>
      <div class="margintb">
        <van-button loading type="primary" loading-type="spinner" />
      </div>
      <div class="margintb">
        <van-button loading type="info" loading-text="加载中..." />
      </div>
    </div>
    <span class="paddingtb">按钮形状</span>
    <div class="flex-wrap-row">
      <div class="margintb">
        <van-button square type="primary">方形按钮</van-button>
      </div>
      <div class="margintb">
        <van-button round type="info">圆形按钮</van-button>
      </div>
    </div>
    <span class="paddingtb">图标按钮</span>
    <div class="flex-wrap-row">
      <div class="margintb">
        <van-button icon="star-o" type="primary" />
      </div>
      <div class="margintb">
        <van-button icon="star-o" type="primary">按钮</van-button>
      </div>
      <div class="margintb">
        <van-button icon="https://img.yzcdn.cn/vant/logo.png" type="info">按钮</van-button>
      </div>
    </div>
    <span class="paddingtb">按钮尺寸</span>
    <div class="margintb">
      <van-button type="primary" size="large">大号按钮</van-button>
    </div>
    <div class="flex-wrap-row">
      <div class="margintb">
        <van-button type="primary" size="normal">普通按钮</van-button>
      </div>
      <div class="margintb">
        <van-button type="primary" size="small">小型按钮</van-button>
      </div>
      <div class="margintb">
        <van-button type="primary" size="mini">迷你按钮</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonConfig: [
        {
          type: "default",
          text: "默认按钮"
        },
        {
          type: "primary",
          text: "主要按钮"
        },
        {
          type: "info",
          text: "信息按钮"
        },
        {
          type: "warning",
          text: "警告按钮"
        },
        {
          type: "danger",
          text: "危险按钮"
        }
      ]
    };
  }
};
</script>

<style>
</style>