<!--  -->
<template>
  <div class="page">
    <!-- <div class="classify-left"> -->
    <van-sidebar v-model="activeKey" class="classify-left" v-show="!$route.query.showSideBar " >
      <van-sidebar-item :title="item.name" v-for="(item, index) in sidebarList" :key="index" />
    </van-sidebar>
    <!-- </div> -->
    <!-- <div class="classify-right"> -->
    <van-tabs v-model="active" style="width:100%" class="classify-right">
      <van-tab title="默认" style="max-heigth: 100%;overflow:hidden">
          <!-- <p v-for="(item, index) in 60" :key="index">阿萨德撒旦撒</p> -->
           <van-card
           v-for="(item, index) in 60" :key="index"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            @click="gotoMsg"
            />
      </van-tab>
      <van-tab title="价格">
           <van-card
           v-for="(item, index) in 60" :key="index"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
      </van-tab>
      <van-tab title="销量">
           <van-card
           v-for="(item, index) in 60" :key="index"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
      </van-tab>
      <van-tab title="库存">
           <van-card
           v-for="(item, index) in 60" :key="index"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
      </van-tab>
    </van-tabs>
    <!-- </div> -->
  </div>
</template>

<script>
import { Sidebar, SidebarItem, Tab, Tabs, Card  } from "vant";
export default {
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Card.name]: Card
  },
  data() {
    return {
      activeKey: 0,
      active: 2,
      sidebarList: [
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: '轮胎'},
          {name: 'bb'},
          {name: 'aa'}
      ]
    };
  },
  // mounted() {

  // },
  methods: {
      gotoMsg() {
          this.$router.push({
              path: '/shopmsg',
              query: {
                  id:1
              }
          })
      }
  }
};
</script>

<style lang="scss" scoped>
.page {
  @include page;
  display: flex;
  .classify-left {
    height: 100%;
    width: 30%;
    background-color: #fff;
    font-size: 0.7rem;
    border-right: 1px solid #e0e0e0;
    padding-bottom: 60px;
  }
  .classify-right {
    width:100%;
    overflow: auto;
    display: flex;
    flex-direction: column
  }
}
/deep/ .van-tabs__content{
    flex: 1;
    overflow: auto;
    padding-bottom: 50px;
}
/deep/ .van-card:not(:first-child) {
    border: 1px solid #e0e0e0;
    margin-top: 0;
}
</style>