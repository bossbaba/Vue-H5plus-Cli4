<template>
  <div class="home">
    <van-nav-bar
      :title="CurrentPagesTitle"
      :fixed="true"
      :z-index="9999"
    />
    <div  class="imp">
      <component v-bind:is="currentTabComponent"></component>
    </div>
    <Tabbar @SwitchTab="TabPages" :Ymenu="YMenu"></Tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import Tabbar from "@/components/Tabbar";
import { mapState, mapMutations } from "vuex";
import {Toast} from 'vant'
import { NavBar } from 'vant';
export default {
  name: "home",
  data() {
    return {
      YMenu: [
        {
          path: () => import("@/views/Index.vue"),
          icon: "home-o",
          name: "index",
          text: "主页"
        },
        {
          path: () => import("@/views/Classify.vue"),
          icon: "apps-o",
          name: "classify",
          text: "分类"
        },
        {
          path: () => import("@/views/Cart.vue"),
          icon: "cart-o",
          name: "cart",
          text: "购物车"
        },
        {
          path: () => import("@/views/Mine.vue"),
          icon: "friends-o",
          name: "mine",
          text: "我的"
        }
      ],
      currentTabComponent: this.$store.state.CurrentPages
    };
  },
  components: {
    Tabbar
  },
  created() {
    this.YMenu.forEach(ele => {
      Vue.component(ele.name, ele.path);
    });
  },
  computed: {
    ...mapState(["CurrentPages","CurrentPagesTitle"])
  },
  mounted() {
    window.plus
      ? this.plusReady()
      : document.addEventListener("plusready", this.plusReady, !1);
  },
  methods: {
    ...mapMutations(["clickChangesCurrentPages","clickChangesCurrentPagesTitle"]),
    TabPages(item) {
      this.currentTabComponent = item.name;
      this.clickChangesCurrentPages(item.name);
      this.clickChangesCurrentPagesTitle(item.text);
    },
    plusReady() {
      let tapBackBtn = null 
      plus.key.addEventListener("backbutton", () => {
        this.$router.back(-1);
        if (this.$route.path === "/") {
          if(!tapBackBtn){
            tapBackBtn = new Date().getTime();
            Toast('双击退出程序！');
            setTimeout(()=>{
              tapBackBtn = null
            },1000)
          }else {
            if((new Date())-tapBackBtn < 1000){
              this.vhQuitApp()
            }
          }
        }
      });
    }
  }
};
</script>

<style lang="stylus">
  .imp
    margin-top 46px
    margin-bottom 44px
</style>