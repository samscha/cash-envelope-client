import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  mutations: {
    init(state) {
      const _store = localStorage.getItem(`store`);

      if (_store)
        store.replaceState({
          ...state,
          ...JSON.parse(_store),
        });
    },
  },
  modules: {
    auth,
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem(`store`, JSON.stringify(state));
});

export default store;

// export default new Vuex.Store({
//   state: {
//     count: 0,
//     isAuthenticated: false,
//     user: {},
//   },
//   mutations: {
//     inc: state => state.count++,
//     dec: state => state.count--,
//     authenticate(state, user) {
//       state.user = { ...user };
//       state.isAuthenticated = true;
//     },
//   },
//   actions: {
//     authenticate({ state, store }, user) {
//       console.log(`action`);
//     },
//   },
//   getters: {
//     isAuthenticated: state => state.isAuthenticated,
//   },
// });
