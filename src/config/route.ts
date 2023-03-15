// 项目路由
import * as VueRouter from "vue-router";

import Index from "../pages/Index.vue";
import TeamPage from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/EditUserPage.vue";
import WorldMapPage from "../pages/WorldMapPage.vue"


// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
  { path: "/", component: Index },
  { path: "/team", component: TeamPage },
  { path: "/user", component: UserPage },
  { path: "/search", component: SearchPage },
  // 动态路由
  { path:"/user/edit/:",component: UserEditPage },
  {path:"/worldmap",component: WorldMapPage},
];


/**
 * 创建路由实例并传递 `routes` 配置
 * 你可以在这里输入更多的配置，但我们在这里
 * https://router.vuejs.org/zh/
 */
const router = VueRouter.createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
