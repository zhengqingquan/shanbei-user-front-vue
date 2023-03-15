// Vue项目主入口

import { createApp } from "vue";
import App from "./App.vue";
// 引入组件
import components from "./config/components";
// 引入项目的路由
import router from "./config/route";


// 引入根组件，创建一个应用程序实例（根实例）
// App 组件是我们应用程序的根组件，包含了应用程序的所有其他组件。
// 在创建应用程序实例时，Vue.js 自动将 App 组件注册为根组件，并创建一个根实例，该实例将在 DOM 中渲染整个应用程序。
const app = createApp(App);

// 按需引入组件。
components.forEach(component=>{
    app.use(component)
})
app.use(router);

// mount叫做挂载，把某个东西挂载到墙上。
// 墙贴是App.vue，这里把#app和App.vue关联起来。把App.vue挂到墙上。
// #是用来指定ID的。这里的指定到index.html中的”app“
app.mount("#app");
