<template>
  <!--顶部-NavBar导航栏-->
  <van-nav-bar
      title="shanbei"
      left-arrow
      fixed=fixed
      placeholder="placeholder"
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>

  <!--动态渲染路由匹配到的组件-->
  <div id="content">
    <router-view/>
  </div>

  <!--底部-Tabbar标签栏-->
  <van-tabbar route>
    <van-tabbar-item to="/index" icon="home-o" name="index">
      主页
    </van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">
      队伍页
    </van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">
      个人
    </van-tabbar-item>
    <van-tabbar-item to="/worldmap" icon="setting-o" name="worldmap">
      地图
    </van-tabbar-item>
  </van-tabbar>
</template>

<!--setup 是Vue3的语法糖-->
<!--会将所有定义的变量都暴露给页面，这样就不用写return-->
<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
const onClickLeft = () => {
  router.back();
};
const onClickRight = () => {
  router.push("/search");
};

</script>

<style scoped></style>