// 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/User.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/team", component: Team },
  { path: "/user", component: User },
];

export default routes;
