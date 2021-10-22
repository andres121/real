import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA1Z8H7n597indjgO41lEeQmF2oEzMrxko',
    libraries: 'places',
  }
});