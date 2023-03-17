<!--信息修改页面-->

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <!--修改栏-->
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`请输入${editUser.editName}`"
      />
    </van-cell-group>
      <!--提交按钮-->
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
  </van-form>
</template>



<script setup>
import {useRoute} from "vue-router";
import {ref} from "vue";

// 查看当前路由的信息
const router = useRoute();

// 双向绑定，一种数据绑定技术，
// 它可以在用户界面和数据模型之间建立双向的联系，当一个值在用户界面发生变化时，数据模型也会跟着变化，反之亦然。
const editUser = ref({
  editKey: router.query.editKey,
  currentValue: router.query.currentValue,
  editName: router.query.editName,
});

// @submit为提交表单且验证通过后触发
const onSubmit = (values) => {
  // 把三个属性提交到后台
  console.log(values);
};
</script>

<style scoped>

</style>