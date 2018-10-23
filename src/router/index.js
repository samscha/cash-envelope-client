import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Envelopes from '@/components/Envelopes'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'Login',
      component: Login
    },*/
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
