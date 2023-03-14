<!--个人页面-->

<template>
  <van-cell title="昵称" is-link to="/user/edit"/>
  <van-cell title="用户账号" :value="user.userAccount"/>
  <van-cell title="头像" is-link to="/user/edit">
    <img style="height: 48px" :src="user.avatarUrl"/>
  </van-cell>
  <van-cell title="性别" is-link to="/user/edit" :value="user.gender"/>
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone"/>
  <van-cell title="手机" is-link to="/user/edit" :value="user.phone"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email"/>
  <van-cell title="创建日期" :value="user.createTime.toDateString()"/>

</template>

<script setup>
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
</script>

<style scoped>

</style>