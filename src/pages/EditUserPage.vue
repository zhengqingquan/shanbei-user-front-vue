<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          :v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
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
const editUser=ref({
  editKey:router.query.editKey,
  currentValue:router.query.currentValue,
  editName:router.query.editName,
})

const onSubmit = (values) => {
  // 把三个属性提交到后台
  console.log('submit', values);
};
</script>

<style scoped>

</style>