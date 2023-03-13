<template>
  <!--    顶部-->
  <van-nav-bar
    title="标题"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <slot name="content"> 这里写内容</slot>

  <div id="content">
    <!--    <template v-if="active === 'index'"> </template>-->
    <!--    <template v-if="active === 'team'"> </template>-->
    <router-view />
  </div>

  <router-link to="/">go to home</router-link>
  <router-link to="/team">队伍</router-link>

  <!--底部-->
  <!--  <van-tabbar v-model="active" @change="onChange">-->
  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team"
      >队伍页
    </van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user"
      >个人
    </van-tabbar-item>
    <van-tabbar-item to="/index" icon="setting-o" name="temp"
      >临时
    </van-tabbar-item>
  </van-tabbar>
</template>

<!--setup 是Vue3的语法糖-->
<!--会将所有定义的变量都暴露给页面，这样就不用写return-->
<script setup>
import { showToast } from "vant";
import { useRouter } from "vue-router";

const router = useRouter();
const onClickLeft = () => {
  router.push("/index");
};
const onClickRight = () => {
  router.push("/search");
};

// const active = ref("index");
const onChange = (index) => showToast(`标签 ${index}`);
</script>

<style scoped></style>