<template>
  <div class="main-box">
    <div class="header">
      <h2>守护爱困粉丝后台中心</h2>
      <div class="header-right">
        <img
          src="https://img2.baidu.com/it/u=758015942,432461262&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=978"
          alt=""
        />
        <div class="operation">
          <el-dropdown @command="handleCommand">
            <el-button type="primary">
              更多操作<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <!-- <el-dropdown-item command="a">修改密码</el-dropdown-item> -->
                <el-dropdown-item command="b">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="buttom">
      <div class="sider">
        <el-menu
          :default-active="openeds[0]"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="false"
          :collapse-transition="false"
          mode="vertical"
          :default-openeds="['1']"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>爱坤动态</span>
            </template>
            <el-menu-item
              @click="toPath(item)"
              v-for="(item, index) in menus"
              :key="index"
              :index="item.path"
              >{{ item.name }}</el-menu-item
            >
          </el-sub-menu>
        </el-menu>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
import { Menu as IconMenu, Location, ArrowDown } from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const menus = ref([]);
const openeds = ref([]);
onMounted(() => {
  if (!localStorage.getItem("token")) {
    router.push("/login");
    return;
  }

  router.options.routes.forEach((item) => {
    item.children?.forEach((c) => {
      menus.value.push(c);
    });
  });
  //解决页面刷新时,sibbar右侧选中不正确问题
  openeds.value = [route.path];
});
const toPath = (item) => {
  router.push({ path: item.path });
};
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleCommand = (command) => {
  if (command === "b") {
    router.push("/login");
    localStorage.removeItem("token");
  }
};
</script>
<style scoped lang="scss">
.main-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    box-sizing: border-box;
    height: 80px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0078d4;
    color: #fff;
    .header-right {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 20px;
      }
      .operation {
        color: #fff;
        .text {
          color: #fff;
        }
      }
    }
  }
  .buttom {
    box-sizing: border-box;
    flex: 1;
    display: flex;
    height: calc(100% - 80px);
    .sider {
      width: 15vw;
    }
    .content {
      box-sizing: border-box;
      padding: 20px;
      flex: 1;
      height: 100%;
      overflow-y: auto;
    }
  }
}
::v-deep .el-dropdown {
  color: #fff;
  .el-icon--right {
    color: #fff !important;
  }
}
::v-deep .el-menu {
  height: 100%;
}
</style>
