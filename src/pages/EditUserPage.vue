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



<script setup >
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {Toast} from "vant";
import {getCurrentUser} from "../services/user.js";

// 查看当前路由的信息
const route = useRoute();
const router = useRouter();

// 双向绑定，一种数据绑定技术，
// 它可以在用户界面和数据模型之间建立双向的联系，当一个值在用户界面发生变化时，数据模型也会跟着变化，反之亦然。
const editUser = ref({
  editKey: route.query.editKey,
  currentValue: route.query.currentValue,
  editName: route.query.editName,
});




// @submit为提交表单且验证通过后触发
const onSubmit = async (values) => {
  const currentUser= await getCurrentUser()
  // 如果用户不存在，则直接返回
  if (!currentUser){
    Toast.fail("用户未登录，")
    return;
  }

  const res = await myAxios.post('/user/update',{
    'id':currentUser.id,
    [editUser.value.editKey]:editUser.value.currentValue
  })
  if (res.code===0 && res.data>0){
    Toast.success('修改成功');
    router.back(); // 返回之前的页面
  }
  else {
    Toast.fail("修改错误");
  }

  // 把三个属性提交到后台
  console.log(values);
};
</script>

<style scoped>

</style>