<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    router
    @select="handleSelect"
    background-color="#eeeeee"
    text-color="#303841"
    active-text-color="#ff5722"
  >
    <el-menu-item style="float: right" @click="loginOutHander"
      ><i class="el-icon-switch-button" />退出登录</el-menu-item
    >
    <template v-for="item in items">
      <template v-if="item.subs">
        <el-submenu :index="item.index" :key="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </template>
          <template v-for="subItem in item.subs">
            <el-submenu
              :index="subItem.index"
              :key="subItem.index"
              v-if="subItem.subs"
            >
              <template slot="title">{{ subItem.title }}</template>
              <el-menu-item
                :index="threeItem.index"
                :key="i"
                v-for="(threeItem, i) in subItem.subs"
                >{{ threeItem.title }}
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="subItem.index" :key="subItem.index" v-else
              >{{ subItem.title }}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.index" :key="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>
<script>
import { logout } from "../api/user";

export default {
  name: "Header",
  computed: {
    items() {
      return this.$store.state.sideBarItems;
    },
    routePath() {
      return this.$route.path;
    },
  },
  data() {
    return {
      fullscreen: false,
    };
  },
  methods: {
    loginOutHander() {
      logout().then(() => {
        this.$store.commit("logout");
        this.$message.success("注销成功");
        this.$router.push("/login");
      });
    },
  },
};
</script>
<style scoped>
.head-bar {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: rgb(0, 0, 0);
  background-color: #ffffff;
}

.header-ico {
  float: left;
  padding: 0 21px;
  line-height: 70px;
}

.head-bar .logo {
  margin-left: 1%;
  float: left;
  width: 250px;
  line-height: 70px;
}

.head-right {
  float: right;
  padding-right: 50px;
}

.head-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}

.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}

.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}

.btn-bell .el-icon-bell {
  color: #fff;
}

.user-name {
  margin-left: 10px;
}

.user-avatar {
  margin-left: 20px;
}

.user-avatar img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}

.el-dropdown-menu__item {
  text-align: center;
}
</style>
