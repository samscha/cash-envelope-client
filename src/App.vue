<template>
  <div id="app" class="app">
    <div class="header">
      <div class="logo">
        <p>CASH</p>
      </div>

      <div class="nav">
        <div class="nav__link">
          <router-link to="/">home</router-link>
        </div>

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
  font-family: 'system';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.app {
  .header {
    display: flex;
    flex-direction: row;
    height: 70px;
    justify-content: space-between;
    padding: 0 15px;

    .logo {
      width: 50px;
    }

    .nav {
      display: flex;
      flex-direction: row;

      .nav__link {
        margin: 0 7px;

        a {
          color: green;
          padding: 4px;
          text-decoration: none;

          &:hover {
            background-color: blue;
            color: white;
          }

          &:active {
            // font-weight: 999;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
