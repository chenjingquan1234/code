<!--  -->
<template>
  <div>
    <!-- 搜索 -->
    <div class="search">
      <div class="seach-left">
        <i class="iconfont icon icon-sousuo"></i>
        <input type="text" class="search-input" @focus="gotoPath(2)" placeholder="请输入关键字搜索商品" />
      </div>
      <i class="iconfont search-right icon-icon_xinyong_xianxing_jijin-"></i>
    </div>
    <!-- 首页轮播 -->
    <base-swiper style="margin-top:50px" :bannerList="bannerList"  />
    <!-- 导航 -->
    <div class="nav">
      <div class="nav-item" v-for="(item, index) in navList" :key="index">
        <img :src="item.url" class="nav-img" alt />
        <span class="nav-text">{{item.name}}</span>
      </div>
    </div>

    <div class="shopping-wrap">
      <div class="shoping" v-for="(items, indexs) in 2" :key="indexs">
        <div class="header">
          <div class="header-left">
            <p class="title">其他</p>
          </div>
          <div class="header-right">
            <span>更多</span>
            <i class="iconfont icon-jiantou1"></i>
          </div>
        </div>
        <div class="content" @click="gotoPath(1)">
          <div class="item" v-for="(item, index) in 4" :key="index">
            <div class="head">
              <img
                src="https://img12.360buyimg.com/n7/jfs/t1/71435/25/6273/176927/5d465a98E59e550f8/3eb450a1f83e2c8b.jpg"
                alt
              />
              <div class="title">一汽大众迈腾b8汽车钥匙电池 b7遥控器松下原装电子【持久款2032】 【进口汽</div>
            </div>
            <div class="foot">
              <div >
                <span class="new-price">￥400</span>
                <span class="old-price">￥ 500</span>
              </div>
              <div class="right">立即选购</div>
            </div>
          </div>
        </div>
      </div>
      <div class="shop-bottom">-由广州恒富宝有限公司技术支持-</div>
    </div>
  </div>
</template>

<script>
import BaseSwiper from '../components/BaseSwiper'
export default {
  components: {
    BaseSwiper
  },
  data() {
    return {
      navList: [
        {
          url:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=535990282,1655061248&fm=26&gp=0.jpg",
          name: "全部商品",
          path: ""
        },
        {
          url:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3022602690,3061840388&fm=26&gp=0.jpg",
          name: "商品分类",
          path: ""
        },
        {
          url:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3505280470,4055995392&fm=26&gp=0.jpg",
          name: "在线预约",
          path: ""
        },
        {
          url:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=535990282,1655061248&fm=26&gp=0.jpg",
          name: "会员套餐",
          path: ""
        }
      ],
      bannerList: [
        {
          url:
            "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1759645535,259162939&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1443558778,3377829768&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2303765867,58982314&fm=26&gp=0.jpg"
        }
      ],
    };
  },
  computed: {},
  // mounted() {
   
  // },
  methods: {
   gotoPath(type){
     let path = ''
     switch(type) {
       case 1: 
        path = '/shopmsg'
        break
       case 2: 
        path = '/search'
        break
     }
     this.$router.push({
       path: path
     })
   }
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 200px;
}
.m-t {
  margin-top: 50px;
}
.search {
  @include p-fixed-t(50px);
  @include flex(space-between);
  padding: 5px 1rem;
  width: 100%;
  margin-bottom: 30px;
  background: rgb(160, 58, 58);
  z-index: 666;
  .seach-left {
    position: relative;
    @include flex-s;
    @include wh(90%, 80%);
    .search-input {
      @include wh(100%, 80%);
      border-radius: 13px;
      padding-left: 8%;
    }
    .icon {
      @include p-left(1%);
      font-size: 1.3rem;
    }
  }
  .search-right {
    color: #fff;
  }
}
.nav {
  @include flex-s;
  width: 100%;
  padding: 3px;
  margin-top: 5px;
  background-color: #fff;
  .nav-item {
    @include flex-c(flex-start);
    width: 25%;
    .nav-img {
      width: 3.3rem;
      height: 50px;
    }
    .nav-text {
      font-size: 0.7rem;
      margin-top: 3px;
    }
  }
}
.shopping-wrap {
  width: 100%;
  margin-top: 10px;
  .shoping {
    width: 100%;
    margin-top: 10px;
    .header {
      @include flex(space-between);
      font-size: 0.9rem;
      position: relative;
      width: 100%;
      background-color: #fff;
      padding: 10px 4%;
      .header-left {
        display: flex;
        // line-height: 47px;
        &:before {
          content: "";
          @include p-left(2%);
          width: 4px;
          height: 50%;
          background-color: rgb(47, 192, 71);
        }
        .title {
         
          font-size: 0.9rem;
        }
      }
      .header-right {
        @include flex();
        font-size: 0.5rem;
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 5px 0.8rem;
      @include flex(space-between);
      .item {
        width: 49%;
        margin-top: 5px;
        background-color: #fff;
        padding: 0.5rem;
        box-shadow:0 2px 4px rgba(0, 0, 0, .3);
        .head {
          img {
            width: 100%;
            height: 160px;
          }
          .title{
            text-align: left;
            height: 1.5rem;
            font-size: 0.7rem;
            overflow: hidden;
          }
        }
        .foot {
          @include flex(space-between);
          margin-top: 4px;
          .new-price{
            color:red;
            font-size: 0.9rem;
          }
          .old-price{
            color:rgba(0, 0, 0, 0.4);
            margin-left:0.3rem;
            font-size: 0.7rem;
             text-decoration:line-through
          }
          .right {
            font-size: 0.7rem;
            color:rgb(41, 101, 170)
          }
        }
      }
    }
  }
  .shop-bottom{
    margin: 20px 0 50px 0;
    font-size: 0.7rem;
  }
}
</style>