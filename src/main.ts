// Vue项目主入口

import { createApp } from "vue";
import App from "./App.vue";
import { Button, Icon, NavBar, Tabbar, TabbarItem } from "vant";
import * as VueRouter from "vue-router";
import routes from "./config/route";

// 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

// mount叫做挂载，把某个东西挂载到墙上。
// 墙贴是App.vue，这里把#app和App.vue关联起来。
// 把App.vue挂到墙上。
// #是用来指定ID的。这里的指定到index.html中的”app“
const app = createApp(App);
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);
app.use(router);
app.mount("#app");
