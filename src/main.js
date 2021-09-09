import Vue from "vue";
import ElementUI from "element-ui";
import VueClipboard from "vue-clipboard2";
import ECharts from "vue-echarts";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import { vueInstance } from "./common/ajax";

Vue.config.productionTip = false;

Vue.use(ElementUI)
  .use(VueClipboard)
  .component("v-chart", ECharts);

let instance = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

vueInstance.instance = instance;
vueInstance.store = instance.$store;
