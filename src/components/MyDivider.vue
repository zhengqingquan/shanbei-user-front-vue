<!--分隔符-->

<template>
  <van-divider class="my-divider" :style="{borderColor: '#1989fa'}">
    分隔符
  </van-divider>
</template>

<script setup>
</script>

<style scoped>
.my-divider {
  margin-bottom: 16px;
  color: #1989fa;
  /*padding是CSS中的一个盒模型属性，用于设置一个元素的内边距（padding）。
  内边距是元素内容和元素边框之间的空白区域，它可以用于控制元素内容与元素边框之间的距离，也可以用于增加元素的可点击面积。
  padding属性可以使用一个值、两个值、三个值或四个值来设置。
  当使用一个值时，该值表示所有四个方向的内边距大小；
  当使用两个值时，第一个值表示上下方向的内边距大小，第二个值表示左右方向的内边距大小；
  当使用三个值时，第一个值表示上方的内边距大小，第二个值表示左右方向的内边距大小，第三个值表示下方的内边距大小；
  当使用四个值时，它们依次表示上、右、下、左四个方向的内边距大小。*/
  padding: 0 16px;
}
</style>