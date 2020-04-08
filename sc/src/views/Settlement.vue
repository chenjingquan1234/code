<template>
  <div class="page">
    <base-navbar v-model="active" class="navbar" :list="navList" :fontSize="14" />
    <div class="order" v-for="(item, index) in 10" :key="index">
      <div class="shopwrapper">
        <div class="head">
          <div>
            <span>订单号：</span>
            <span class="order-num">3243243243243234</span>
          </div>
          <span class="title">待支付</span>
        </div>
        <div class="shop-list">
          <div class="shop-item">
            <img
              class="item-left"
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2059513566,2535479640&fm=26&gp=0.jpg"
              alt
            />
            <div class="item-right">
              <div class="shop-title">
                <div class="title">机油滤少所所所所所所少时诵诗书所所芯</div>
                <div class="shop-type">400ml</div>
              </div>
              <div class="shop-price">
                <div class="price">
                  <div class="new-price">$ 4000.00</div>
                  <div class="old-price">$ 4000.00</div>
                </div>
                <span class="quantity">x1</span>
              </div>
            </div>
          </div>
        </div>
        <div class="all">{{`共2件商品 小计： ￥ 200000.00元`}}</div>
        <div class="footer">
            <van-button size="small" plain   type="danger">删除按钮</van-button>
            <van-button size="small" plain style="margin-left：.5rem" type="info">默认按钮</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseNavbar from "../components/BaseNavbar";
import { Button } from 'vant';
export default {
  components: {
    BaseNavbar,
    [Button.name]: Button,
  },
  data() {
    return {
      active: 0,
      navList: [
        { label: "全部订单" },
        { label: "待付款" },
        { label: "待发货" },
        { label: "待收货" },
        { label: "待评价" }
      ]
    };
  },
  mounted() {
    this.active = this.$route.query.active
  }
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  .navbar {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 666;
  }
  .shopwrapper {
  padding: 0.4rem;
  background-color: #fff;
  margin-top: 50px;
  .head {
    @include flex(space-between);
    padding: 0.6rem 0.5rem;
    border-bottom: 1px solid #f3f3f3;
    .order-num {
      font-size: 0.8rem;
      color: red;
    }
  }
  .shop-list {
    .shop-item {
      display: flex;
      padding: 0.8rem 0.2rem;
      // background: #f5f3f3;
      background: #fff;
      .item-left {
        @include wh(5rem);
      }
      .item-right {
        display: flex;
        // padding-left: .3rem;
        margin-left: 0.7rem;
        padding-bottom: 0.6rem;
        flex: 1;
        // border-bottom: 1px solid #f3f3f3;
        .shop-title {
          width: 70%;
          .shop-type {
            margin-top: 0.3rem;
            font-size: 0.9rem;
            color: rgb(168, 165, 165);
          }
        }
        .shop-price {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: flex-end;
          width: 30%;
          .price {
            text-align: right;
          }
          .old-price {
            @include oldPrice;
            margin-top: 0.3rem;
          }
          .quantity {
            font-size: 0.9rem;
            margin-bottom: 0.3rem;
          }
        }
      }
    }
  }
  .all {
    display: flex;
    justify-content: flex-end;
  }
  .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: .6rem 0;
  }
}
}
</style>