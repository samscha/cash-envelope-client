<template>
  <div class="about">
    <h1>Envelopes</h1>
    <p>
      lala
      <br>
      test
      <br>
    </p>
  </div>
</template>

<script>
import api from '../utils/axios';

export default {
  name: 'Envelopes',
  data() {
    return {
      envelopes: [],
    };
  },
  async mounted() {
    try {
      const { data } = await api.get(`/envelopes`);

      this.envelopes = [...data];
    } catch (err) {
      console.error(err);
    }
    // this.$store.dispatch('getEnvelopes');
  },
};
</script>
