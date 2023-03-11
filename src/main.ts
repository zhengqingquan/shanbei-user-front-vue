// Vue项目主入口

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Button, Icon, NavBar, Tabbar, TabbarItem} from "vant";



// mount叫做挂载，把某个东西挂载到墙上。
// 墙贴是App.vue，这里把#app和App.vue关联起来。
// 把App.vue挂到墙上。
// #是用来指定ID的。这里的指定到index.html中的”app“
const app=createApp(App);
app.use(Button);
app.use(NavBar);
app.use(Icon)
app.use(Tabbar)
app.use(TabbarItem)
app.mount('#app');

