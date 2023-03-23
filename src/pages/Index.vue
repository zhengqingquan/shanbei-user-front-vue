<!--搜索页面-->

<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username}` `${user.username}`"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      :tag="123"
  >
    <template #tags>
      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 8px;margin-top: 8px">
        {{ tag }}</van-tag>
      <van-tag plain type="primary">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
      <van-button size="mini">按钮</van-button>
    </template>
  </van-card>
  <van-empty v-if="!userList||userList.length<1" description="数据为空" />

  {{JSON.stringify(route.query)}}
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";
import qs from "qs";

// useRoute()是一个用于获取当前路由信息的Hook，它返回一个包含当前路由信息的对象，例如当前页面的路径、查询参数等。
// 可以使用它来获取当前路由信息并在组件中进行逻辑判断或展示。
const route = useRoute();

const {tags}=route.query;

const userList=ref([mockUser]);

// 钩子
// 当这个页面的dom元素加载好之后。可以执行从远程获取数据的方法。
onMounted(async ()=>{
// 向给定ID的用户发起请求
// 下面的请求完全执行结束才得到userList
  const userList = await myAxios.get('/user/recommend',{
    params:{
      tagNameList:tags,
      pageSize:8,
      pageNum:1,
    },
    paramsSerializer:params=>{
      return qs.stringify(params,{indices:false})
    }
  })
      .then(function (response) {
        // 处理成功情况
        console.log('/user/recommend succeed',response);
        Toast.success('请求成功')
        return response?.data;
      })
      .catch(function (error) {
        // 处理错误情况
        console.log('/user/recommend error',error);
        Toast.fail('请求失败')
      })
      .then(function () {
        // 总是会执行
        console.log('总是执行的请求')
      });

  if (userList){
    userListData.forEach(user=>{
      if (user.tags){
        user.tags=JSON.parse(user.tags)
      }
    })
    userList.value=userListData;
  }
})

</script>

<style scoped></style>