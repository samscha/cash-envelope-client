import store from '../store';

export const checkAuth = (to, from, next) => {
  if (store.getters.isAuthenticated) return next();

  next(`/login`);
};
