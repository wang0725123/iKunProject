import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router";
// import MusicList from '../views/musicList'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  // 注意这里使用路由path:'/'，Home, 如果你在app.vue  已经加载了首页，要删除app.vue中的组件，不然会重复加载
  {
    path: "/login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/main",
    redirect: "/main/index",
    component: () => import("../views/main.vue"),
    children: [
      {
        path: "/main/index",
        name: "爱坤人数记录",
        component: () => import("../views/index.vue"),
      },
      {
        path: "/main/about",
        name: "爱坤图片",
        component: () => import("../views/about.vue"),
      },
      {
        path: "/main/test",
        name: "爱坤舞蹈合集",
        component: () => import("../views/test.vue"),
      },
    ],
  },
];
// const routerHistory = createWebHistory();
// const routerHash = createWebHashHistory()
const routers = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
export default routers;
