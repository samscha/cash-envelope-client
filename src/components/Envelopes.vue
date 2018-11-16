<template>
  <div class="envelopes">
    <h1 class="title">Envelopes</h1>

    <p class="error" v-if="error.message">{{ error.message }}</p>
  </div>
</template>

<script>
import api from '../utils/axios';

export default {
  name: 'Envelopes',
  data() {
    return {
      envelopes: [],
      error: { status: 0, message: '' },
    };
  },
  async mounted() {
    try {
      const { data } = await api.get(`/envelopes`);

      this.envelopes = [...data];
    } catch (err) {
      if (!err.response) {
        this.error.status = -1;
        this.error.message = 'Server connection error. Please try again later';
        return;
      }

      const { data } = err.response;

      if (data.status === 401) {
        this.$store.commit('unauth', data);
        this.$router.push('/login');
      }

      this.error.status = data.status;
      this.error.message = data.message;
    }
  },
};
</script>

<style lang="less">
@import './../index.less';
.envelopes {
  .title {
    margin: 0 0 24px 0;
  }

  .error {
    .error();
  }
}
</style>