<!--  -->
<template>
  <div>
    <base-swiper :height="'50vh'" :autoplay="false" :bannerList="bannerList" />
    <div class="shop-price">
      <div class="price">
        <span class="fuhao">￥</span>
        <span class="new-price">400</span>
        <span class="text">原价:</span>
        <span class="old-price">￥ 500</span>
      </div>
      <div class="title">海波汽d哒哒哒哒哒哒多多多多多多多多多多配</div>
    </div>
    <div class="divider"></div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-button type="warning" text="加入购物车" @click="showToast" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>

    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked"
    />
  </div>
</template>

<script>
import BaseSwiper from "../components/BaseSwiper";
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Sku } from "vant";
export default {
  components: {
    BaseSwiper,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Sku.name]: Sku
  },
  data() {
    return {
      quota: 0,
      goodsId: "",
      goods: {
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/1.jpg"
      },
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img.yzcdn.cn/1p.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img.yzcdn.cn/2p.jpg"
              }
            ]
          }
        ]
      },
      show: false,
      bannerList: [
        {
          url:
            "https://img11.360buyimg.com/n1/jfs/t1/28928/28/11618/238581/5c907a36E06640d30/94fe3749aa925a86.jpg"
        },
        {
          url:
            "https://img11.360buyimg.com/n1/jfs/t1/29249/2/11489/85202/5c907a38E3eec5a10/eff6bf8764de9241.jpg"
        },
        {
          url:
            "https://img11.360buyimg.com/n1/jfs/t1/26575/38/11275/158351/5c907a37E5503694a/b12e8650cf758e98.jpg"
        }
      ]
    };
  },
  // mounted() {

  // },
  methods: {
    showToast() {
      this.show = true;
    },
    onBuyClicked() {
      console.log(11);
    }
  }
};
</script>

<style lang="scss" scoped>
.shop-price {
  background: #fff;
  border-top: 1px solid #e0e0e0;
  padding: 1rem;
  .price {
    .fuhao {
      color: rgb(173, 31, 31);
      font-size: 0.7rem;
    }
    .text {
      margin: 0 0.5rem;
      font-size: 0.7rem;
    }
    .new-price {
      color: rgb(173, 31, 31);
      font-size: 1.3rem;
    }
    .old-price {
      color: rgba(0, 0, 0, 0.4);
      margin-left: 0.3rem;
      font-size: 0.7rem;
      text-decoration: line-through;
    }
  }
  .title {
    margin-top: 10px;
    font-size: 0.7rem;
  }
}
.divider {
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  width: 80%;
  height: 1px;
  background: #c2c0c0;
  &::before {
    content: "继续拖动查看详情";
    @include p-center();
    padding: 0 1rem;
    font-size: 0.5rem;
    background: #e0e0e0;
  }
}
</style>