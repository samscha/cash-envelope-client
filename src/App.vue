<template>
  <div id="app" class="app">
    <div class="header">
      <div class="logo">
        <router-link to="/">cash envelope</router-link>
      </div>

      <div class="nav">
        <div class="nav__link">
          <router-link to="/login">login</router-link>
        </div>

        <div class="nav__link">
          <router-link to="/envelopes">Envelopes</router-link>
        </div>

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

    .nav {
      display: flex;
      flex-direction: row;

      .nav__link {
        .link();
      }
    }
  }
}
</style>
