<!--  -->
<template>
  <div class="page">
    <!-- <div class="classify-left"> -->
    <!-- <van-sidebar v-model="activeKey" class="classify-left" v-show="!$route.query.showSideBar " >
      <van-sidebar-item :title="item.name" v-for="(item, index) in sidebarList" :key="index" />
    </van-sidebar>-->
    <base-navbar
      v-show="!$route.query.showSideBar"
      class="classify-left"
      :list="sidebarList"
      direction="col"
      :font-size="13"
      @change="changeSideMav"
    />
    <div class="nav-list">
      <base-navbar :list="navList" @change="changeNavbar"/>
      <div class="shop-list">
        <van-card
          v-for="(item, index) in 10"
          :key="index"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          @click="gotoMsg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Card } from "vant";
import BaseNavbar from "../components/BaseNavbar";
export default {
  components: {
    [Card.name]: Card,
    BaseNavbar
  },
  data() {
    return {
      // icon
      up: 'icon-shangjiantou1',
      dowm: 'icon-xiajiantou',
      navbarActive:0,
      classifyId: 0,
      storeType: 0,
      sidebarList: [
        { label: "公共配三件" },
        { label: "公共广告" },
        { label: "轮胎" },
        { label: "轮胎" },
        { label: "轮胎" },
        { label: "轮胎" },
        { label: "轮胎" },
        { label: "轮胎" },
        { label: "轮胎" },
        { label: "轮胎" },
        { label: "轮胎" },
        { label: "轮胎" },
        { label: "轮胎" },
        { label: "轮胎" },
      ],
      navList: [
        {label: '默认'},
        {label: '价格', icon:'icon-shangjiantou1'},
        {label: '销量', icon:'icon-shangjiantou1'},
        {label: '库存', icon:'icon-shangjiantou1'},
      ]
    };
  },
  // mounted() {

  // },
  methods: {
    gotoMsg() {
      this.$router.push({
        path: "/shopmsg",
        query: {
          id: 1
        }
      });
    },
    changeSideMav(data) {
      this.classifyId = data.label
      console.log(this.classifyId)
    },
    changeNavbar(item, index) {
      if(this.navbarActive === index) {
        if(this.navList[index].icon) {
      console.log(1)
          this.navList[index].icon = this.navList[index].icon === this.up ? this.dowm : this.up
        }
      }
      this.navbarActive = index
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  @include page;
  display: flex;
  .classify-left {
    // height: 100%;
    width: 25%;
    background-color: #fff;
    font-size: 0.7rem;
    border-right: 1px solid #e0e0e0;
    padding-bottom: 60px;
  }
  .classify-right {
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
}
/deep/ .van-tabs__content {
  flex: 1;
  overflow: auto;
  padding-bottom: 50px;
}
/deep/ .van-card:not(:first-child) {
  border: 1px solid #e0e0e0;
  margin-top: 0;
}
.nav-list {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  .shop-list {
    flex: 1;
    overflow: auto;
    margin-bottom: 50px;
  }
}
</style>