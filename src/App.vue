<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/envelopes">Envelopes</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'),
    local('.LucidaGrandeUI'), local('Ubuntu Light'), local('Segoe UI Light'),
    local('Roboto-Light'), local('DroidSans'), local('Tahoma');
}

#app {
  font-family: 'system';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
