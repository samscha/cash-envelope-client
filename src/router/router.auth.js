import store from '../store';

export const check = (to, from, next) => {
  if (store.getters.isAuthenticated) return next();

  next(`/login`);
};

export const login = (to, from, next) => {
  if (store.getters.isAuthenticated) return next('/envelopes');

  next();
};

// export const resetErrors = (to, from, next) => {
//   console.log('RESET');
//   store.dispatch('resetError');

//   next();
// };
