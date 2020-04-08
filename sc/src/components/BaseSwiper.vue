<!--  -->
<template>
  <div>
    <swiper v-if="showSwiper" class="swiper" :options="swiperOption" :style="{'height':height}">
      <swiper-slide v-for="(item, index) in bannerList" :key="index" @click="handleBanner(item, index)">
        <div class="swiper-content-wrapper">
            <img :src="item.url" style="width:100%;height:100%"  alt="暂无图片" />
            <!-- <slot name="content">sss</slot> -->
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props:{
      bannerList: {
          type: Array,
          default: ()=>{[]}
      },
      height: {
          type: String,
          default: '200px'
      },
      paginationType: {
          type: Number,
          default: 0
      },
      slidesPerView: {
          type: Number,
          default: 0
      },
      autoplay: {
          type: Boolean,
          default: true
      }
  },
  data() {
    return {
      showSwiper:false,
      swiperOption: {}
    };
  },
  mounted() {
         this.initSwiper()
  },
  methods: {
    initSwiper() {
        this.showSwiper = false
        let pagination
        if(this.paginationType === 0) {
            pagination = {el: ".swiper-pagination",}
        } else {
            pagination = {
              el: ".swiper-pagination",
              clickable: true,
              bulletClass: 'my-bullet',
              bulletActiveClass: 'my-bullet-active'
            }
        }
        this.showSwiper = false
        this.swiperOption = {
            pagination: pagination,
            loopAdditionalSlides: 3,
            loop: true
          }
        if(this.showSwiper) this.swiperOption.slidesPerView = this.showSwiper
        if(this.autoplay) this.swiperOption.autoplay = {// 自动滑动
              disableOnInteraction: false
            }
        this.showSwiper = true
    },
    handleBanner(item, index) {
      this.$emit('handleBanner', item, index)
    }
  }
};
</script>

<style lang="scss">
.swiper-content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.my-bullet{
    border-radius: .02rem;
    width: 1rem;
    height: 2px;
    margin: 0.5rem;
    display: inline-block;
    background: #666
}
.my-bullet-active {
    background: #3CDBC0;
    height: 2px;
     width: 1rem

}

</style>