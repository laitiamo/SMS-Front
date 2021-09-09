import Vue from "vue";
import Vuex from "vuex";
import SideBarItem from "../common/sideBarItem";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: {
      loggedIn: false,
      userId: -1,
      username: "",
      userType: 0,
      permission: 0
    },
    sideBarItems: [],
    loading: false
  },
  mutations: {
    //设置登录状态
    login(state, res) {
      state.status.loggedIn = res.loggedIn;
      state.status.userId = res.userId;
      state.status.username = res.username;
      state.status.userType = res.userType;
      state.status.permission = res.permission;

      let items = [];
      for (let i = 0; i < SideBarItem.items.length; i++) {
        let item = SideBarItem.items[i];
        if (
          item.userType === res.userType &&
          (item.permission & res.permission) === item.permission
        ) {
          items.push(item);
        }
      }
      state.sideBarItems = items;
    },
    logout(state) {
      state.status = {
        loggedIn: false,
        userId: -1,
        username: "",
        userType: 0,
        permission: 0
      };
    }
  },
  getters: {
    loggedIn: state => state.status.loggedIn,
    userId: state => state.status.userId,
    username: state => state.status.username,
    userType: state => state.status.userType,
    permission: state => state.status.permission,
  },
  actions: {},
  modules: {}
});
