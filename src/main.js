import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VEmbed from "vue-embed";
import VueRouter from "vue-router";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./lang/i18n";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VEmbed);
Vue.use(VueRouter);
Vue.use(Antd);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
