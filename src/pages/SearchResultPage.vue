<!--搜索页面-->

<template>
  <van-card
      v-for="user in userList"
      num="2"
      price="2.00"
      v-bind:desc="user.profile"
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
  {{JSON.stringify(route.query)}}
</template>

<script setup>
import {ref} from 'vue';
import {useRoute, useRouter} from "vue-router";

const route=useRoute();

const {tags}=route.query;

const userList=ref([mockUser]);

const mockUser={
  id: 1,
  username: "shanbei",
  userAccount: "shanbei123",
  avatarUrl: "string",
  gender: "男",
  phone: "123",
  email: "@qq.com",
  profile:"用户简介",
  createTime: new Date(),
}

</script>

<style scoped></style>