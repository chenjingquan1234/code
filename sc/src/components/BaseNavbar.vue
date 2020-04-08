<!--  -->
<template>
  <div :class="direction + '-wrap'">
    <div :class="[direction ? 'tag-' + direction : '']" ref="tag">
      <div
        v-for="(item, index) in list"
        :key="index"
        :style="style"
        :class="[
          direction ? direction + '-item': '', 
          index === curIndex ? 'on' : ''
        ]"
        @click="handleclick(item, index)"
      >
        <span>{{item[label]}}</span>
        <i v-show="item.icon" class="iconfont" :class="item.icon"></i>
      </div>
      <div
        :class="[direction ? direction + '-line': '']"
        :style="{
          [direction === 'row' ? 'width' : 'height']: (direction === 'row' ?  itemWidth/2 : children[curIndex]) + 'px', 
          transform: direction === 'row' ? translateX : translateY, 
          color}"
        ref="tagLine"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'modelIndex',
    event: 'active'
  },
  data() {
    return {
      tagWidth: 0,
      curIndex: 0,
      children: []
    };
  },
  props: {
    modelIndex: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => {
        [];
      }
    },
    color: {
      type: String,
      default: "red"
    },
    fontSize: {
      type: Number,
      default: 16
    },
    direction: {
      type: String,
      default: "row"
    },
    label: {
      type: String,
      default: "label"
    }
  },
  mounted() {
    const { direction } = this;
    if (direction === "row") {
      this.tagWidth = this.$refs.tag.offsetWidth;
    } else if (direction === "col") {
      const children = Array.from(this.$refs.tag.children).map(
        item => item.offsetHeight
      );
      children.pop();
      this.children = children;
    }
  },
  watch: {
    modelIndex: {
      handler(val) {
        this.curIndex = val
      },
      immediate: true
    }
  },
  computed: {
    style() {
      const style = {};
      this.direction === "row" && (style.width = this.itemWidth + "px");
      style.fontSize = this.fontSize + "px";
      return style;
    },
    itemWidth() {
      return this.list.length < 6
        ? this.tagWidth / this.list.length
        : this.tagWidth / 5;
    },
    translateX() {
      const index = this.itemWidth * this.curIndex;
      return `translateX(${index + this.itemWidth / 2}px) translateX(-50%)`;
    },
    translateY() {
      let height = 0,
        i = 0;
      while (this.curIndex !== 0 && i < this.curIndex) {
        height += this.children[i];
        i++;
      }
      return `translateY(${height}px)`;
    },

  },
  methods: {
    handleclick(item, index = 0) {
      // if (this.curIndex === index) {
      //   return;
      // }
      this.curIndex = index;
      this.$emit("change", item, index);
      this.$emit("active", index)
    }
  }
};
</script>

<style lang='scss' scoped>
.row-wrap {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  width: 100%;
}
.col-wrap {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  height: 100%;
  overflow-y: auto;
}
.tag-row {
  width: 100%;
  position: relative;
  overflow-x: auto;
  white-space: nowrap;
  background-color: #fff;
}
.row-item {
  line-height: 44px;
  display: inline-block;
  text-align: center;
  background-color: #fff;
  padding: 0 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.row-line {
  position: absolute;
  bottom: 5px;
  left: 0;
  height: 3px;
  background-color: red;
  border-radius: 3px;
  transition: .3s transform;
}
.col-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  background-color: red;
  border-radius: 3px;
  transition: 0.3s all;
}
.on {
  font-weight: 500;
  // color: rgb(179, 40, 40);
  background: #fff !important;
}

.tag-col {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: transparent;
}
.col-item {
  width: 100%;
  padding: 20px 12px 20px 8px;
  text-align: left;
  background-color: #fafafa;
  text-align: center;
}

</style>