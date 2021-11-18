import Vue from 'vue'
import Vuex from 'vuex'
import home from "./modules/home";
import contact from "./modules/contact";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    contact
  },

})