import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/User.vue";
import SearchPage from "../pages/SearchPage.vue";
import WorldMap from "../pages/WorldMap.vue"

// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
  { path: "/", component: Index },
  { path: "/team", component: Team },
  { path: "/user", component: User },
  { path: "/search", component: SearchPage },
  // {path:"/WorldMap",component: WorldMap},
];

export default routes;
