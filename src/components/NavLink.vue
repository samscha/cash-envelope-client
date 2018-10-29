<template>
  <div class="nav-link">
    <router-link v-bind:to="uri">{{ text }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    uri: String,
    text: String,
  },
};
</script>

<style lang="less">
@import './../index.less';

.nav-link {
  .link();
}
</style>