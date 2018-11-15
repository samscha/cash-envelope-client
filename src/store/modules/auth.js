import api from '../../utils/axios';

import { error as e } from '../../utils';

export const AUTH_LOGIN_START = `AUTH_LOGIN_START`;
// export const AUTH_LOGIN_SUCCESS = `AUTH_LOGIN_SUCCESS`;
// export const AUTH_LOGIN_FAIL = `AUTH_LOGIN_FAIL`;
// export const AUTH_LOGIN_ERROR = `AUTH_LOGIN_ERROR`;

const _initialState = {
  isAuthenticated: false,
  loading: false,
  user: '',
  error: { status: 0, message: '' },
};

export default {
  state: { ..._initialState },
  mutations: {
    authenticate(state, username) {
      state.isAuthenticated = true;
      state.error = { ..._initialState.error };
      state.user = username;
    },
    start(state) {
      state.loading = true;
    },
    /**
     * error code retrieved from error util
     *
     * @param {Object} state
     * @param {Object} error { status: Number, message: String }
     */
    error(state, error) {
      state.error.message = error.message;
      state.error.status = error.status;
    },
    end(state) {
      state.loading = false;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = '';
      localStorage.removeItem(`store`);
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
    resetError({ commit }) {
      commit('error', { message: '', status: 0 });
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
