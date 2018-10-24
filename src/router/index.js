import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Login from '@/components/Login';
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
    },
    {
      path: '/envelopes',
      namae: 'Envelopes',
      component: Envelopes,
      beforeEnter: auth.checkAuth,
    },
  ],
});

export default router;
