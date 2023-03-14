import Index from "../pages/Index.vue";
import Team from "../pages/TeamPage.vue";
import User from "../pages/UserPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/EditUserPage.vue";
import WorldMap from "../pages/WorldMap.vue"

// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
  { path: "/", component: Index },
  { path: "/team", component: Team },
  { path: "/user", component: User },
  { path: "/search", component: SearchPage },
  // 动态路由
  {path:"/user/edit/:",component: UserEditPage}
  // {path:"/WorldMap",component: WorldMap},
];

export default routes;
