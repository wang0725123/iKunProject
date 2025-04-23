<template>
  <div class="index">
    <div id="main"></div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import * as echarts from "echarts";

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById("main"));
  // 绘制图表
  myChart.setOption({
    title: {
      text: "爱坤各地粉丝人数",
    },
    tooltip: {},
    xAxis: {
      data: ["北京", "厦门", "合肥", "成都", "南京", "乌鲁木齐"],
    },
    yAxis: {},
    series: [
      {
        color: "#0074cd",
        name: "爱坤人数",
        type: "bar",
        data: [5, 20, 1, 10, 10, 20],
      },
    ],
  });
});
</script>
<style scoped lang="scss">
.index {
  height: 100%;
  #main {
    width: 100%;
    height: 500px;
  }
}
</style>
