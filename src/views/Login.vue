<template>
  <div class="login-wrap">
    <el-carousel height="100vh" :interval="3000" arrow="never">
      <el-carousel-item v-for="item in 4" :key="item"> </el-carousel-item>
      <transition name="el-fade-in-linear" appear>
        <div class="login-form">
          <div align="center">
            <h2>学生信息管理系统</h2>
          </div>
          <el-form
            :model="formData"
            :rules="rules"
            class="form-content"
            label-width="0px"
            ref="form"
          >
            <el-form-item prop="id">
              <el-input placeholder="请输入用户名" v-model="formData.username">
                <span slot="prepend"><i class="el-icon-user"></i></span>
              </el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input
                @keyup.enter.native="submit()"
                placeholder="请输入密码"
                type="password"
                v-model="formData.password"
              >
                <span slot="prepend"><i class="el-icon-edit"></i></span>
              </el-input>
            </el-form-item>

            <div class="login-btn" v-loading="this.$store.state.loading">
              <el-button @click="submit()" type="primary">登录</el-button>
            </div>
          </el-form>
        </div>
      </transition>
    </el-carousel>
  </div>
</template>

<script>
import { login } from "../api/user";

export default {
  data: function() {
    return {
      formData: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          login(this.formData.username, this.formData.password).then((res) => {
            this.$message.success("登录成功: " + res.username);
            this.$store.commit("login", res);
            this.$router.push({ name: "container" });
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 10%;
  color: #fff;
}
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}

.form-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

.login-form {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  align-items: center;
  justify-content: space-evenly;
}

.form-content {
  padding: 30px 30px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
}

.el-radio {
  color: #fff;
}
.el-carousel__item:nth-child(1) {
  background: url("http://tva1.sinaimg.cn/large/00867Hz8gy1gu9k7zowmnj61z4140x6p02.jpg")
    no-repeat;
  background-size: cover;
  z-index: -99;
}
.el-carousel__item:nth-child(2) {
  background: url("http://tva1.sinaimg.cn/large/00867Hz8gy1gu9k8binpcj61hc0u0wq602.jpg")
    no-repeat;
  background-size: cover;
  z-index: -99;
}
.el-carousel__item:nth-child(3) {
  background: url("http://tva1.sinaimg.cn/large/00867Hz8gy1gu9k8m2by1j60jg0c6aaz02.jpg")
    no-repeat;
  background-size: cover;
  z-index: -99;
}
.el-carousel__item:nth-child(4) {
  background: url("http://tva1.sinaimg.cn/large/00867Hz8gy1gu9k8t3i8fj62yo1o0hdt02.jpg")
    no-repeat;
  background-size: cover;
  z-index: -99;
}
</style>
