<!--  -->
<template>
  <div class="page">
    <van-search
      v-model="value"
      show-action
      shape="round"
      background="#e0e0e0"
      placeholder="请输入搜索关键词"
    >
      <template #left>
        <i class="iconfont icon-buoumaotubiao20" @click="goback"></i>
      </template>
      <template #action>
        <span @click="search(false)">搜索</span>
      </template>
    </van-search>
    <div class="history">
      <span>最近搜索</span>
      <i class="iconfont icon-guanbi3" @click="tagList = []"></i>
    </div>
    <div class="tag">
      <van-tag
        style="margin: 3px"
        plain
        round
        v-for="(item, index) in tagList"
        :key="index"
        @click="search(item)"
      >{{item}}</van-tag>
    </div>
  </div>
</template>

<script>
import { Search, Button, Tag } from "vant";
export default {
  components: {
    [Search.name]: Search,
    [Button.name]: Button,
    [Tag.name]: Tag
  },
  data() {
    return {
      value: "",
      tagList: []
    };
  },

  methods: {
    goback() {
      this.$router.back(1);
    },
    search(val) {
      const searchVal = val
        ? val
        : this.value;
        (!val && this.value) && this.tagList.push(searchVal);
      this.$router.replace({
        path: "/classify",
        query: {
          showSideBar: true,
          search: searchVal
        }
      });
      this.value = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  @include page();
  background: #fff;
  .history {
    @include flex(space-between);
    width: 100%;
    font-size: 0.7rem;
    padding: 1rem;
    color: #acacac;
  }
  .tag {
    display: flex;
    flex-wrap: wrap;
    padding: 0 1rem;
  }
}
.icon-buoumaotubiao20 {
  font-size: 1.5rem;
  margin-right: 0.6rem;
}
</style>