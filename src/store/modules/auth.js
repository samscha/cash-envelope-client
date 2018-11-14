import api from '../../axios';

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
    async login({ commit, dispatch }, user) {
      commit('start');
      // await dispatch('start');
      return api
        .post(`/login`, { username: user.email, password: user.password })
        .then(response => {
          commit('authenticate', user.email);
          commit('end');
        })
        .catch(err => {
          const codes = [500, 422, 401];

          if (err.response) {
            const { data } = err.response;

            if (codes.includes(data.status)) commit('error', data.message);
          } else {
            commit('error', `Server connection error. Please try again later`);
          }

          commit('end');
          // return data.message;
        });
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     commit('authenticate', user);
      //     commit('end');
      //     reject();
      //   }, 4000);
      // });
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
};
