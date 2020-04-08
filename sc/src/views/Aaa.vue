<!--  -->
<template>
  <div id="tag" ref="tag">
    <div
      class="tag-item"
      :style="{width: itemWidth  + 'px'}"
      v-for="(item, index) in list"
      :key="index"
      @click="handleclick(index)"
    >{{item}}</div>
    <div
      class="tag-line"
      :style="{width: itemWidth/2  + 'px', transform: `${translateX} translateX(-50%)`, color: color}"
      ref="tagLine"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagWidth: 0,
      index: 1,
      children: []
    };
  },
  props: {
      list: {
          type: Array,
          default: ()=>{[]}
      },
      color: {
          type: String,
          default: 'red'
      }
  },
  mounted() {
    this.tagWidth = this.$refs.tag.offsetWidth;
  },
  computed: {
    itemWidth() {
      return this.tagWidth / this.list.length;
    },
    translateX() {
      const index = this.itemWidth * this.index;
      return `translateX(${index - this.itemWidth / 2}px)`;
    }
  },
  methods: {
    handleclick(index = 0) {
      if (this.index === index + 1) {
        return;
      }
      this.$emit("click");
      this.index = index + 1;
    }
  }
};
</script>

<style lang='scss' scoped>
#tag {
  width: 100%;
  display: flex;
  position: relative;
}
.tag-item {
  text-align: center;
  background-color: #fff;
  padding: 1rem;
}
.tag-line {
  position: absolute;
  bottom: 5px;
  left: 0;
  height: 3px;
  background-color: red;
  border-radius: 3px;
  transition: 0.3s all;
}
</style>