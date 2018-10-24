import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    isAuthenticated: false,
    user: {},
  },
  mutations: {
    inc: state => state.count++,
    dec: state => state.count--,
    authenticate(state, user) {
      state.user = { ...user };
      state.isAuthenticated = true;
    },
  },
  actions: {
    authenticate({ state, store }, user) {
      console.log(`action`);
    },
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
  },
});
