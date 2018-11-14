import api from '../../axios';

import { error as e } from '../../utils';

export const AUTH_LOGIN_START = `AUTH_LOGIN_START`;
// export const AUTH_LOGIN_SUCCESS = `AUTH_LOGIN_SUCCESS`;
// export const AUTH_LOGIN_FAIL = `AUTH_LOGIN_FAIL`;
// export const AUTH_LOGIN_ERROR = `AUTH_LOGIN_ERROR`;

const _initialState = {
  isAuthenticated: false,
  loading: false,
  user: '',
  error: '',
};

export default {
  state: { ..._initialState },
  mutations: {
    authenticate(state, username) {
      state.isAuthenticated = true;
      state.user = username;
    },
    start(state) {
      state.loading = true;
    },
    error(state, error) {
      state.error = error;
    },
    end(state) {
      state.loading = false;
    },
  },
  actions: {
    // async start({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       console.log(`waited 2s`);
    //       resolve();
    //     }, 2000);
    //   });
    // },
    async getEnvelopes({}) {
      return api.get(`/envelopes`);
    },
    resetError({ commit }) {
      commit('error', '');
    },
    async login({ commit }, user) {
      commit('start');

      return api
        .post(`/login`, { username: user.email, password: user.password })
        .then(response => {
          commit('authenticate', user.email);
          commit('end');
        })
        .catch(err => {
          commit('error', e.response.message(err));
          commit('end');
        });
    },
    async signup({ commit }, user) {
      commit('start');

      return api
        .post(`/users`, { username: user.email, password: user.password })
        .then(response => {
          commit('authenticate', user.email);
          commit('end');
        })
        .catch(err => {
          commit('error', e.response.message(err));
          commit('end');
        });
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
};
