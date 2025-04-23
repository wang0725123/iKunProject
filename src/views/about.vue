<template>
  <div class="about">
    <div class="item-box" v-for="(item, index) in 102" :key="index">
      <img
        style="width: 60%; height: 100%"
        src="https://img2.baidu.com/it/u=3702330060,1199243996&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=506"
        alt=""
      />
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.about {
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); //分成三栏，每栏均等分
  grid-gap: 10px 20px; //行间距 列间距
  .item-box {
    height: 200px;
  }
}
</style>
