<template>
  <van-card
      v-for="user in props.userList"
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
</template>

<script setup lang="ts">

interface UserCardListProps{
  userList:UserType[];// 是一个必填项
}

// withDefaults()是为你的属性赋一个默认值。
const props = withDefaults(defineProps<UserCardListProps>(),{
  // @ts-ignore
  userList:[] as UserType[]
});


</script>

<style scoped>

</style>