import Vue from 'vue'
import VueRouter from 'vue-router'

import homeComponent from '@/components/homeComponent'
import aboutComponent from '@/components/aboutComponent'
import detalleComponent from '@/components/detalleComponent'

Vue.use(VueRouter)

export default new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/:code',
      name: 'inicio',
      component: homeComponent
    },

    {
      path: '/detalle/:id',
      name: 'detalle',
      component: detalleComponent
    },

    {
      path: '/about',
      name: 'about',
      component: aboutComponent
    }
  ]
})
