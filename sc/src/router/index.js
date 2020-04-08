import Vue from "vue";
import VueRouter from "vue-router";
// const routerPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location?: any):any {
//   return routerPush.call(this, location).catch((error: any)=> error)
// }


Vue.use(VueRouter);

const routes = [
  {path: '/',redirect: 'home'},
  { path: "/home", name: "home", component: () => import('../views/Home.vue'), meta:{showFooter: true},  },
  { path: "/myinfo", name: "myinfo", component: () => import('../views/MyInfo.vue'), meta:{showFooter: true} },
  { path: "/classify", name: "classify", component: () => import('../views/Classify.vue'), meta:{showFooter: true} },
  { path: "/shopping", name: "shopping", component: () => import('../views/Shopping.vue'), meta:{showFooter: true} },
  { path: "/shopmsg", name: "ShopMsg", component: () => import('../views/ShopMsg.vue') },
  { path: "/search", name: "Searchpage", component: () => import('../views/Searchpage.vue') },
  { path: "/order", name: "order", component: () => import('../views/Order.vue') },
  { path: "/address", name: "address", component: () => import('../views/Address.vue') },
  { path: "/addressmsg", name: "addressmsg", component: () => import('../views/AddressMsg.vue') },
  { path: "/settlement", name: "settlement", component: () => import('../views/Settlement.vue') },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
