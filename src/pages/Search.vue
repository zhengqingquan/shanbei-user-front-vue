<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { Toast } from "vant";

const searchText = ref("");
// onSearch表示你点击搜索之后执行的事件
const onSearch = (val) => Toast(val);
// onCancel表示你点击取消之后执行的事件
const onCancel = () => Toast("取消");

</script>

<style scoped></style>