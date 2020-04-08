<!--  -->
<template>
  <div class="page">
    <div class="shop-card" v-for="(item, index) in 2" :key="index">
      <div>
          <van-checkbox v-model="checked"></van-checkbox>
      </div>
      <van-card
        class="shop-right"
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #footer>
          <van-button size="mini" color="red " plain>删除</van-button>
        </template>
        <template #num>
          <!-- <van-button size="mini" color="red " plain>删除</van-button> --><van-stepper v-model="value" />
        </template>
      </van-card>
    </div>
    <van-submit-bar :price="3050" button-text="结算" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { Card, SubmitBar, button, checkbox, Stepper  } from "vant";
export default {
  components: {
    [Card.name]: Card,
    [checkbox.name]: checkbox,
    [button.name]: button,
    [SubmitBar.name]: SubmitBar,
     [Stepper.name]: Stepper,
  },
  data() {
    return {
      value: '',
      checked: false
    };
  },
  // mounted() {

  // },
  methods: {
    onSubmit() {
      this.$router.push({
        path: '/order'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .van-submit-bar {
  bottom: 52px;
}
.page {
    padding: .3rem;
}
.shop-card {
    @include flex-s;
    padding: .5rem;
    border: 1px solid #e0e0e0;
    background: #fff;
    box-shadow:0 2px 4px rgba(0, 0, 0, .3);
    margin-top: 3px;
    .shop-right {
        flex:1
    }
}
</style>