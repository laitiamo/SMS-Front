<template>
  <el-card shadow="always">
    <div class="title-container">
      <el-row type="flex" style="flex-wrap:wrap;" justify="center">
        <el-col>
          <img src="../assets/avatars.jpg" class="user-avator" alt :xs="24" />
        </el-col>
        <el-col class="user-info-cont">
          <div class="info" v-if="userType === 1">
            {{ name }}{{ getRole() }}，{{ getTimeState() }}
          </div>
          <div class="info" v-if="userType == 2">
            {{ getTimeState() }}李晓婷{{ getRole() }}
          </div>
          <div class="info" v-if="userType == 3">
            {{ getTimeState() }}{{ getRole() }}
          </div>
          <div class="info-detail">
            <div class="info-username" v-if="userType === 1">
              <i class="el-icon-info"></i>
              学号：{{ username }}
            </div>
            <div class="info-username" v-if="userType !== 1">
              <i class="el-icon-info"></i>
              教职工号：{{ username }}
            </div>
            <div class="info-class" v-if="userType === 1">
              <i class="el-icon-s-management"></i>
              院系：{{ departmentName }}
            </div>
            <div class="info-class" v-if="userType === 1">
              <i class="el-icon-s-management"></i>
              专业：{{ majorName }}
            </div>
            <div class="info-class" v-if="userType === 1">
              <i class="el-icon-s-home"></i>
              班级：{{ className }}
            </div>
          </div>
        </el-col>
        <el-col> </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import * as studentapi from "../api/student/info";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      number: "",
      name: "",
      departmentName: "",
      majorName: "",
      className: "",
      email: "",
      birthday: "",
      sex: "",
      password: null,
    };
  },
  methods: {
    get() {
      let userType = this.userType;
      if (userType == 1) {
        studentapi.get().then((res) => {
          this.name = res.name;
          this.className = res.className;
          this.majorName = res.majorName;
          this.departmentName = res.departmentName;
        });
      }
    },
    getTimeState() {
      // 获取当前时间
      let timeNow = new Date();
      // 获取当前小时
      let hours = timeNow.getHours();
      // 设置默认文字
      let state = ``;
      // 判断当前时间段
      if (hours >= 5 && hours <= 10) {
        state = `早上好！`;
      } else if (hours > 10 && hours <= 14) {
        state = `中午好！`;
      } else if (hours > 14 && hours <= 18) {
        state = `下午好！`;
      } else if ((hours > 18 && hours <= 24) || (hours >= 0 && hours < 5)) {
        state = `晚上好！`;
      }
      return state;
    },
    getRole() {
      // 设置角色ID
      let userType = this.userType;
      // 设置称呼
      let rolename = ``;
      // 判断登录用户
      if (userType === 1) {
        rolename = `同学`;
      } else if (userType === 2){
        rolename = `老师`;
      } else {
        rolename = `系统管理员`;
      }
      return rolename;
    },
  },
  created() {
    this.get();
  },
  computed: {
    ...mapGetters(["userId", "username", "userType"]),
  },
};
</script>

<style scoped>
.line {
  margin: 8px 8px;
  height: 0.5em;
}
.title-container {
  text-align: center;
  margin-bottom: 24px;
  box-sizing: border-box;
  margin: auto;
  padding: 0;
  min-height: 200px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-weight: 0.0625rem;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
.user-avator {
  margin-top: 3%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.user-info-cont {
  text-align: left;
  padding-left: 40px;
  font-family: "方正兰亭超细黑";
  flex: 1;
  margin-left: 0%;
  margin-right: 0;
  color: rgb(0, 0, 0);
}
.item-counter {
  flex: 1;
  margin-top: 3%;
  margin-right: -3%;
}
.info {
  font-size: 36px;
  margin-top: 3%;
  margin-bottom: 3%;
  text-align: center;
}
.info-detail {
  font-size: 20px;
  margin-top: 5%;
  margin-left: 5%;
  text-align: left;
}
.info-username {
  margin-top: 2%;
  margin-bottom: 1%;
}
.info-class {
  margin-top: 2%;
  margin-bottom: 1%;
}
.info-role {
  margin-top: 2%;
  margin-bottom: 10%;
}
.info-inform {
  font-size: 15px;
  margin-top: 1%;
  margin-bottom: 10%;
  text-align: left;
}
</style>
