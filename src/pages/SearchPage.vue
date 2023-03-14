<!--搜索页面-->

<template>
  <!--  搜索框-->
  <form action="/">
    <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>

  <!--  分割线-->
  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeId.length===0">请选择标签</div>

  <!--间距-->
  <van-row gutter="16" style="padding: 0 16px">
    <van-col v-for="tag in activeId">
      <!--  标签-->
      <van-tag closeable size="small" type="primary" @close="doClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>
  <!--分割线-->
  <van-divider content-position="left">选择标签</van-divider>


  <van-tree-select
      v-model:active-id="activeId"
      v-model:main-active-index="activeIndex"
      :items="items"
  />
</template>

<script setup>
import {ref} from 'vue';

const originItems = [
  {
    text: '浙江',
    children: [
      {text: '杭州', id: '杭州'},
      {text: '温州', id: '温州'},
      {text: '宁波', id: '宁波', disabled: true},
    ],
  },
  {
    text: '江苏',
    children: [
      {text: '南京', id: '南京'},
      {text: '无锡', id: '无锡'},
      {text: '徐州', id: '徐州'},
    ],
  },
  //  查询不能出现这种没有子类的
  {
    text: '福建', disabled: true,
    children: [],
  },
]

// 标签列表
let items = ref(originItems);


const value = ref('');
const onSearch = (val) => {
  console.log(1)
  items.value = originItems.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(value.value))
    return tempParentTag
  })
};
const onCancel = () => {
  value.value = ''
  items.value = originItems;
};


// 已选中的标签
const activeId = ref([]);
const activeIndex = ref(0);


// 删除标签
const doClose = (tag) => {
  activeId.value = activeId.value.filter(item => {
    return item !== tag;
  })
}
</script>

<style scoped></style>