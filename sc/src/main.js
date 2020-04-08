import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './static/css/reset.css'
import { Swipe, SwipeItem } from 'mint-ui';
import "mint-ui/lib/style.css"


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false;
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
