<!--信息修改页面-->

<template>
  <van-form @submit="onSubmit">
      <!--修改栏-->
      <van-field
          :v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`请输入${editUser.editName}`"
      />

      <!--提交按钮-->
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
  </van-form>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";

// 查看当前路由的信息
const router = useRoute();
const editUser = ref({
  editKey: router.query.editKey,
  currentValue: router.query.currentValue,
  editName: router.query.editName,
})

// @submit为提交表单且验证通过后触发
const onSubmit = (values) => {
  // 把三个属性提交到后台
  console.log('submit', values);
};
</script>

<style scoped>

</style>