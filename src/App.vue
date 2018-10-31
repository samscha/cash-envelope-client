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
// adapted from https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}

window.addEventListener('keydown', handleFirstTab);

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
  margin: 20px 0;
  min-width: 300px;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

// adapted from https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
body:not(.user-is-tabbing) button:focus,
body:not(.user-is-tabbing) input:focus,
body:not(.user-is-tabbing) select:focus,
body:not(.user-is-tabbing) textarea:focus {
  outline: none;
}

.app {
  .header {
    display: flex;
    flex-direction: row;
    height: 70px;
    justify-content: space-between;
    padding: 0 15px;

    @media @phone {
      flex-direction: column;
      height: initial;
    }

    .logo {
      .logo();
    }

    .nav-bar {
      display: flex;

      @media @phone {
        flex-direction: column;
        padding: 15px 0;
        margin: 10px 0;
      }
    }
  }
}
</style>
