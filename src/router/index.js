import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Login from '@/components/Login';
import Signup from '@/components/Signup';
import Envelopes from '@/components/Envelopes';

import * as auth from './router.auth';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: auth.login,
      beforeRouteLeave: auth.reset,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      beforeRouteLeave: auth.reset,
    },
    {
      path: '/envelopes',
      namae: 'Envelopes',
      component: Envelopes,
      afterEnter: auth.check,
    },
  ],
});

export default router;
