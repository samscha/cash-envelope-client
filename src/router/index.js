import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Envelopes from '@/components/Envelopes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
        path: '/envelopes',
        namae: 'Envelopes',
        component: Envelopes
    }
  ]
})
