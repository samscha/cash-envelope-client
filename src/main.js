// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import axios from 'axios';
import Vuelidate from 'vuelidate'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import forts from './fortawesome';

import App from './App';
import NavLink from './components/NavLink';

import router from './router';
import store from './store';

Vue.use(Vuelidate);

Vue.component('nav-link', NavLink);

library.add(forts);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
