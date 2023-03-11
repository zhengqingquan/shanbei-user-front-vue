<template>
  <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  />
</template>

<!--setup 是Vue3的语法糖-->
<!--会将所有定义的变量都暴露给页面，这样就不用写return-->
<script setup>
const onClickLeft = () => alert("左");
const onClickRight = () => alert("右");
</script>

<style scoped>

</style>