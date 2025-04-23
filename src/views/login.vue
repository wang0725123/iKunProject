<template>
  <div class="login" v-loading="loading" element-loading-text="登录中...">
    <div class="form">
      <div
        style="
          text-align: center;
          font-size: 24px;
          margin-bottom: 20px;
          color: #0078d4;
        "
      >
        守护爱困粉丝后台中心
      </div>
      <el-form ref="ruleForm" label-width="auto">
        <el-form-item label="用户名">
          <el-input v-model="formData.userName" placeholder="请输入用户名!" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="formData.password"
            placeholder="请输入密码!"
            type="password"
          />
        </el-form-item>
      </el-form>
      <el-button
        style="width: 100%; margin-top: 30px"
        type="primary"
        @click="login"
        @keydown.enter="keyDown()"
        >登录</el-button
      >
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const router = useRouter();
const loading = ref(false);
const formData = reactive({
  userName: "admin",
  password: "123456",
});
onMounted(() => {
  window.addEventListener("keydown", keyDown);
});
const keyDown = (e) => {
  if (e.keyCode == 13 || e.keyCode == 100) {
    login();
  }
};
const login = () => {
  if (!formData.userName) {
    return ElMessage({
      message: "用户名不能为空",
      type: "warning",
    });
  }
  if (!formData.password) {
    return ElMessage({
      message: "密码不能为空",
      type: "warning",
    });
  }
  if (formData.userName !== "admin") {
    return ElMessage({
      message: "用户名错误!",
      type: "warning",
    });
  }
  if (formData.password != 123456) {
    return ElMessage({
      message: "密码错误!",
      type: "warning",
    });
  }
  loading.value = true;

  setTimeout(() => {
    router.push({ path: "/main" });
    localStorage.setItem("token", "123ahdbhafsdkfkjkwe");
    loading.value = false;
  }, 3000);
};
onUnmounted(() => {
  //销毁事件
  window.removeEventListener("keydown", keyDown, false);
});
</script>
<style scoped lang="scss">
.login {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  background-image: url("https://ts1.tc.mm.bing.net/th/id/R-C.63865ef371f7c5bc7c7e7463c61032c7?rik=vAVZBkjbXQDofg&riu=http%3a%2f%2fi0.hdslb.com%2fbfs%2farchive%2ff4daf9d5799b5e1d6b9971c5d461c95f204dc7a7.jpg&ehk=6hGkeBgcvahx57Y9nLULNP092nDwrAuHrQi2N%2fetlAs%3d&risl=&pid=ImgRaw&r=0") !important;
  background-size: cover; /* 让背景图片覆盖整个元素，同时保持图片的比例 */
  background-position: center; /* 确保图片在元素中居中 */
  background-repeat: no-repeat; /* 防止图片重复 */
  .form {
    width: 500px;
    height: 300px;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #fff;
  }
}
</style>
