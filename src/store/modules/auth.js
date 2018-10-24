export const AUTH_LOGIN_START = `AUTH_LOGIN_START`;
// export const AUTH_LOGIN_SUCCESS = `AUTH_LOGIN_SUCCESS`;
// export const AUTH_LOGIN_FAIL = `AUTH_LOGIN_FAIL`;
// export const AUTH_LOGIN_ERROR = `AUTH_LOGIN_ERROR`;

const _initialState = {
  isAuthenticated: false,
  loading: false,
  user: {},
};

export default {
  state: { ..._initialState },
  mutations: {
    authenticate(state, user) {
      state.isAuthenticated = true;
      state.user = { ...user };
    },
    start(state) {
      state.loading = true;
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
    async login({ commit, dispatch }, user) {
      commit('start');
      // await dispatch('start');
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('authenticate', user);
          commit('end');
          resolve();
        }, 2000);
      });
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
};
