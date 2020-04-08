<!--  -->
<template>
  <div>
    <div class="info-header">
      <div class="title">
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=535990282,1655061248&fm=26&gp=0.jpg"
          alt
        />
        <span>Efcjq</span>
      </div>
    </div>
    <div class="info-content">
      <div class="juan">
        <div class="item">
          <img src="/assets/img/钱包.png" alt />
          <span>我的券</span>
        </div>
        <div class="item">
          <i class="iconfont icon-shoucangbiaoqianbeiwanglu"></i>
          <span>我的券</span>
        </div>
        <div class="item">
          <i class="iconfont icon-shoucangbiaoqianbeiwanglu"></i>
          <span>我的券</span>
        </div>
      </div>
      <div style="padding:.4rem;background: #fff;border-radius:5px">
        <h4 style="margin-top:10px;font-size:.8rem">我的服务</h4>
        <van-grid>
          <van-grid-item
            v-for="(item, index) in myServeList"
            :icon="item.icon"
            :text="item.text"
            :key="index"
            @click="goPath(0, item)"
          />
        </van-grid>
 
      </div>

      <div style="padding:.4rem;background: #fff;border-radius:5px;margin-top:10px">
        <h4 style="margin-top:10px;font-size:.8rem">更多服务</h4>
        <van-grid>
          <van-grid-item icon="photo-o" text="联系商家" />
          <van-grid-item icon="photo-o" text="投诉建议" />
          <van-grid-item icon="photo-o" text="帮助中心" />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem } from "vant";
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data() {
    return {
      myServeList: [
        { icon: "description", text: "全部订单", active: 0 },
        { icon: "balance-list-o", text: "待付款订单", active: 1},
        { icon: "todo-list-o", text: "待发货订单", active: 2 },
        { icon: "newspaper-o", text: "待收货订单", active: 3 },
        { icon: "notes-o", text: "待评价订单", active: 4 }
      ]
    };
  },
  // mounted() {

  // },
  methods: {
    goPath(type, item) {
      let path = ""
      const  query = {};

      switch (type) {
        case 0:
          path = "/Settlement";
          query.active = item.active
          break;
      }
      this.$router.push({ path, query });
    }
  }
};
</script>

<style lang="scss" scoped>
.info-header {
  position: relative;
  height: 30vh;
  background-image: url(http://img3.imgtn.bdimg.com/it/u=206818258,2204156867&fm=26&gp=0.jpg);
  .title {
    @include p-center;
    @include flex-c;
    > img {
      @include wh(3rem);
      border-radius: 50%;
    }
  }
}
.info-content {
  position: relative;
  width: 100%;
  height: 75vh;
  margin-top: -5vh;
  padding: 0.4rem;
  padding-top: 40px;
  background: #f3f3f3;
  border-radius: 3%;
  .juan {
    display: flex;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.3rem;
    background: #fff;
    z-index: 2;
    width: 80%;
    height: 40px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    .item {
      width: 33%;
      height: 100%;
      @include flex;
    }
  }
}
</style>