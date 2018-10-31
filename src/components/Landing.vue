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
const web = {
  template: `
    <div class="tab-web">
      <a href="https://github.com/samscha/cash-envelope-client" target="_blank" rel="noopener noreferrer" v-bind:style="{ margin: '0 0 8px 0' }">
        GitHub
      </a> 
    </div>
  `,
};

const app = {
  template: `
    <div class="tab-web" v-bind:style="{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }">
      <img src="https://cdn-images-1.medium.com/max/800/1*NuSm7aVLj7QIr5JimpGDYw.png" alt="native-app-home" v-bind:style="{ alignSelf: 'center', height: '100%', maxWidth: '550px', width: '100%' }">

      <a href="https://expo.io/@samscha/cash-envelope-native" target="_blank" rel="noopener noreferrer" v-bind:style="{ margin: '0 0 8px 0' }">
        Expo
      </a>

      <a href="https://github.com/samscha/cash-envelope-native" target="_blank" rel="noopener noreferrer" v-bind:style="{ margin: '0 0 8px 0' }">
        GitHub
      </a>

      <a href="https://medium.com/@samscha/creating-a-postgres-java-spring-react-native-virtual-cash-envelope-app-in-depth-tutorial-9dc62af8fd3f" target="_blank" rel="noopener noreferrer">
        Blog
      </a>
    </div>
  `,
};

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
      .divButton(7px);

      background-color: @white;
      display: flex;
      flex-direction: row;

      &:active {
        text-decoration: none;
      }

      .icon-wrapper {
        margin: 0 5px 0 0;
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