<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <!--其中name是英文字段名称-->
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <!--native-type表示这个按钮是触发提交事件的按钮-->
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import {ref} from 'vue';
import myAxios from "../plugins/myAxios.js";
import {Toast} from "vant";
import {useRouter} from "vue-router";

// useRouter()是一个用于管理路由跳转的Hook，它返回一个包含了路由跳转方法的对象，例如push()、replace()、back()等。
// 使用useRouter()可以在组件中进行编程式导航，比如在用户点击某个按钮时，通过调用router.push('/other-page')来跳转到另一个页面。
const router = useRouter();

// 用户账号，默认值为空字符串。
const userAccount = ref('');
// 用户密码，默认值为空字符串。
const userPassword = ref('');

// 提交按钮
const onSubmit = async (values) => {
  console.log('submit', values);
  const res = await myAxios.post('/user/login', {
    userAccount: userAccount.value,
    userPassword: userPassword.value,
  })
  console.log(res, '用户等各路');
  if (res.code === 0 && res.data) {
    Toast.success('登录成功');
    router.replace('/');
  } else {
    Toast.fail('登录失败');
  }
};
</script>

<style scoped>

</style>