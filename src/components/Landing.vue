<template>
  <div class="landing">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      message: 'Cash Evelope 1',
    };
  },
};
</script>

<style lang="less">
h1 {
  font-size: 2.4em;
  font-weight: 700;
  color: red;
}
</style>