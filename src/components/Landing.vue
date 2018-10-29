<template>
  <div class="landing">
    <div class="nav">
      <div class="nav__link">
        <router-link to="/" v-bind:style="linkStyling('/')">
          <font-awesome-icon icon="desktop" />
          web
        </router-link>
      </div>

      <div class="nav__link">
        <router-link to="/">
          <font-awesome-icon icon="mobile-alt" /> 
          app
        </router-link>
      </div>
    </div>

    <div class="h1">{{ message }}</div>
    <p>current route: {{ currRoute }}</p>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      message: 'Cash Evelope 1',
      currRoute: this.$router.currentRoute.path,
    };
  },
  methods: {
    linkStyling(path) {
      const style = {};

      if (this.currRoute === path) {
        style['background-color'] = '#9fb4ca';
      }

      return style;
    },
  },
};
</script>

<style lang="less">
@import './../index.less';

.landing {
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 0 15px 0;

    .nav__link {
      .link(7px);
    }
  }

  .h1 {
    font-size: @fontHeader;
    font-weight: 700;
    color: orange;
  }
}
</style>