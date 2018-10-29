<template>
  <div id="app" class="app">
    <div class="header">
      <div class="logo">
        <router-link to="/">cash envelope</router-link>
      </div>

      <div class="nav-bar">
        <nav-link uri="/login" text="login"></nav-link>
        <nav-link uri="/envelopes" text="envelopes"></nav-link>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="less">
@import 'index.less';

@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'),
    local('.LucidaGrandeUI'), local('Ubuntu Light'), local('Segoe UI Light'),
    local('Roboto-Light'), local('DroidSans'), local('Tahoma');
}

#app {
  color: @colorTheme;
  font-family: 'system';
  font-size: @fontSize;
  margin-top: 20px;
  min-width: 300px;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.app {
  .header {
    display: flex;
    flex-direction: row;
    height: 70px;
    justify-content: space-between;
    padding: 0 15px;

    .logo {
      .logo();
    }

    .nav-bar {
      display: flex;
    }
  }
}
</style>
