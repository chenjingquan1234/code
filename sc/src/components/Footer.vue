<!--  -->
<template>
  <div id="footer">
    <div class="item" v-for="(item, index) in footerList" :class="item.path === $route.path ? 'on':''" :key="index" @click="gotoPath(item.path)">
      <i class="iconfont" :class="item.icon"></i>
      <p class="text">{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      footerList: [
        { text: "首页", icon: "icon-shouye", path: '/home' },
        { text: "分类", icon: "icon-fenlei", path: '/classify' },
        { text: "购物车", icon: "icon-gouwuchekong", path: '/shopping' },
        { text: "我的", icon: "icon-icon-geren", path: '/myinfo' }
      ]
    };
  },
//   mounted() {},
  methods: {
      gotoPath(path) {
        this.$router.replace(path)
      }
  }
};
</script>

<style lang="scss">
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border-top: 1px solid #e0e0e0;
  padding: 4px 0 ;
  background: #fff;
  z-index: 666;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    .iconfont {
        font-size: 15px;
    }
    .text {
        font-size: 15px;
        margin-top: 5px;
    }
  }
  .on {
    color: red
  }
}
</style>
