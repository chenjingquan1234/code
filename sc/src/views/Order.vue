<!--  -->
<template>
  <div>
      <div class="address">
          <van-cell title="选择/添加收货地址" value="选择地址" @click="chooseAddress" />
      </div>
    <div class="shopwrapper">
      <div class="head">
        <span class="title">【鑫利达】</span>
        <div>
          <span>订单号：</span>
          <span class="order-num">3243243243243234</span>
        </div>
      </div>
      <div class="shop-list">
        <div class="shop-item" v-for="(item, index) in 2" :key="index">
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
    </div>
    <div class="shop-msg">
      <van-cell-group>
        <van-cell title="买家姓名" value="陈先生" />
        <van-cell title="微信呢称" value="efcjq" />
        <van-cell title="会员卡号" value="213213212" />
        <van-cell title="会员优惠" value="-￥0.00" />
        <van-cell title="运费" value="0.00" />
        <van-cell title="会员门店" value="恒富宝测试门店" />
        <van-cell title="支付方式" @click="payBtn" is-link :value='radio' />
      </van-cell-group>
      <van-popup position="bottom" v-model="showpayType">
        <div class="pay-type">
          <van-radio-group v-model="radio">
            <van-cell-group>
              <van-cell title="微信支付" clickable @click="radio = '微信支付'">
                <template #right-icon>
                  <van-radio name="微信支付" />
                </template>
              </van-cell>
              <van-cell title="卡号支付" clickable @click="radio = '卡号支付'">
                <template #right-icon>
                  <van-radio name="卡号支付" />
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
      </van-popup>
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
      <!-- 优惠券列表 -->
      <van-popup
        name="1"
        v-model="showList"
        round
        position="bottom"
        style="height: 90%; padding-top: 4px;"
      >
        <van-coupon-list
          :show-exchange-bar="false"
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
    <van-submit-bar :price="30050" button-text="结算" @submit="onChange" />
  </div>
</template>

<script>
import {
  SubmitBar,
  CouponCell,
  CouponList,
  Popup,
  Icon,
  Cell,
  RadioGroup,
  Radio
} from "vant";

export default {
  components: {
    [SubmitBar.name]: SubmitBar,
    [CouponCell.name]: CouponCell,
    [CouponList.name]: CouponList,
    [Popup.name]: Popup,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio
  },
  data() {
    return {
      radio: "",
      showpayType: false,
      showList: false,
      chosenCoupon: -1,
      coupons: [
        {
          available: 1,
          condition: "无使用门槛\n最多优惠12元",
          reason: "",
          value: 150,
          name: "优惠s称",
          startAt: 1489104000,
          endAt: 1514592000,
          valueDesc: "1.5",
          unitDesc: "元"
        }
      ]
    };
  },
  //   mounted() {},
  methods: {
    chooseAddress() {
        this.$router.push({
            path: '/address'
        })
    },
    payBtn() {
      this.showpayType = true;
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(this.coupons[0]);
    }
  }
};
</script>

<style lang='scss' scoped>
.shopwrapper {
  padding: 0.4rem;
  background-color: #fff;
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

      margin-top: 0.9rem;
      .item-left {
        @include wh(5rem);
      }
      .item-right {
        display: flex;
        // padding-left: .3rem;
        margin-left: 0.7rem;
        padding-bottom: 0.6rem;
        flex: 1;
        border-bottom: 1px solid #f3f3f3;
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
    margin-top: 0.8rem;
    padding: 0.9rem 0;
  }
}
.shop-msg {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 0 0.3rem;
  margin-top: 10px;
  margin-bottom: 50px;
  color: #323233;
  font-size: 0.8rem;
  
}
.pay-type {
  width: 100%;
  height: 30vh;
}
.address {
    margin-bottom: 15px;
}
</style>