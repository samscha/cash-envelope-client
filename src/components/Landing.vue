<template>
  <div class="landing">
    <div class="tab-bar">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currTab === tab }]"
        v-on:click="currTab = tab"
      >
        <div v-if="tab === 'web'" class="icon-wrapper">
          <font-awesome-icon icon="desktop" />
        </div>
        <div v-else class="icon-wrapper">
          <font-awesome-icon icon="mobile-alt" />
        </div>
        {{ tab }}
      </button>
    </div>

    <component
      v-bind:is="currTabComp"
      class="tab"
    ></component>
  </div>
</template>

<script>
import app from './tabApp.vue';
import web from './tabWeb.vue';

export default {
  name: 'Landing',
  components: {
    'tab-app': app,
    'tab-web': web,
  },
  data() {
    return {
      message: 'Cash Evelope 1',
      currRoute: this.$router.currentRoute.path,
      currTab: 'web',
      tabs: ['web', 'app'],
    };
  },
  computed: {
    currTabComp() {
      return 'tab-' + this.currTab.toLowerCase();
    },
    webIcon() {
      return currTab === 'web';

      if (currTab === 'web') return `<font-awesome-icon icon="desktop" />`;

      return `<font-awesome-icon icon="mobile-alt" />`;
    },
  },
};
</script>

<style lang="less">
@import './../index.less';

.landing {
  .tab-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 0 15px 0;

    .tab-button {
      .button(7px);

      display: flex;
      flex-direction: row;

      &:active {
        text-decoration: none;
      }

      .icon-wrapper {
        margin: 0 4px;
      }
    }

    .tab-button.active {
      background-color: @colorTheme;
      color: @white;
      border-color: @colorTheme;
    }
  }

  h1 {
    color: orange;
  }
}
</style>