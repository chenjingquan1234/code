import Vue from "vue";
export default {
  install() {
    const bus = new Vue({
      data() {
        return {
          searchList: []
        };
      }
    });
    Vue.prototype.$bus = bus;
  }
};
