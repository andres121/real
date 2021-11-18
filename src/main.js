import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "./libs/axios";
import "./libs/map"
import "./libs/v-select"
import "./libs/sweet-alerts"

import router from './router'


import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
