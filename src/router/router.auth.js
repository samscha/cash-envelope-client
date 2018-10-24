import store from '../store';

export const check = (to, from, next) => {
  if (store.getters.isAuthenticated) return next();

  next(`/login`);
};
