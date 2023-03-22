<!--个人页面-->

<template>
<!--  只有user这个对象存在才展示这个信息-->
  <template v-if="user">
    <van-cell title="昵称" is-link to="/user/edit" />
    <van-cell title="用户账号" :value="user.userAccount"/>
    <van-cell title="头像" is-link to="/user/edit">
      <img style="height: 48px" :src="user.avatarUrl" alt="头像图片"/>
    </van-cell>
    <van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
    <van-cell title="电话" is-link to="/user/edit" :value="user.phone"/>
    <van-cell title="手机" is-link to="/user/edit" :value="user.phone"/>
    <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
<!--    <van-cell title="创建日期" :value="user.createTime.toDateString()"/>-->
    <van-cell title="创建日期" :value="user.createTime"/>
  </template>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user";

// const user = {
//   id: 1,
//   username: "shanbei",
//   userAccount: "shanbei123",
//   avatarUrl: "string",
//   gender: "男",
//   phone: "123",
//   email: "@qq.com",
//   createTime: new Date(),
// }

const user = ref();

// 钩子函数，会在页面首次加载的时候执行。
onMounted(async ()=>{
    user.value=await getCurrentUser();
})

import {useRouter} from "vue-router";
import myAxios from "../plugins/myAxios";
import {Toast} from "vant";

// useRouter()用来跳转路由
const router = useRouter();

// 跳转到对于的编辑页面
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