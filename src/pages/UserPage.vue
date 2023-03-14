<!--个人页面-->

<template>
  <van-cell title="昵称" is-link to="/user/edit"/>
  <van-cell title="用户账号" :value="user.userAccount"/>
  <van-cell title="头像" is-link to="/user/edit">
    <img style="height: 48px" :src="user.avatarUrl"/>
  </van-cell>
  <van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone"/>
  <van-cell title="手机" is-link to="/user/edit" :value="user.phone"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email"/>
  <van-cell title="创建日期" :value="user.createTime.toDateString()"/>

</template>

<script setup lang="ts">

const user = {
  id: 1,
  username: "shanbei",
  userAccount: "shanbei123",
  avatarUrl: "string",
  gender: "男",
  phone: "123",
  email: "@qq.com",
  createTime: new Date(),
}

import {useRouter,useRoute} from "vue-router";

// useRouter()是用来跳转路由
const router = useRouter();

const toEdit =(editKey:string,editName:string, currentValue:string)=>{
  router.push({
    path:'/user/edit',
    query:{
      editKey,
      editName,
      currentValue,
    }
  })
}

</script>

<style scoped>

</style>