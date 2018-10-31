<template>
  <div class="signup">
    <form @submit.prevent="signup">
      <label for="email" />
      <input v-model="email"
        type="email"
        id="email"
        placeholder="email address"
        required
        autofocus
        :disabled="loading"
      >

      <label for="password" />
      <input
        v-model="password"
        type="password"
        id="password"
        placeholder="password"
        required
        :disabled="loading"
      >
      <label for="confirmPassword" />
      <input
        v-model="confirmPassword"
        type="password"
        id="confirmPassword"
        placeholder="confirm password"
        required
        :disabled="loading"
      >

      <button type="submit" :disabled="loading">
        signup
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  computed: mapState({
    loading: state => state.auth.loading,
  }),
  methods: {
    async signup() {
      const { email, password, confirmPassword } = this;

      try {
        await this.$store.dispatch('login', { email, password });
        this.$router.push('/envelopes');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="less">
@import './../index.less';

.signup {
  form {
    display: flex;
    flex-direction: column;

    input {
      font-size: @fontSize;
      margin: 10px auto;
      min-height: 50px;
      min-width: 250px;
      text-align: center;
    }

    button {
      .divButton();

      height: 50px;
      margin: 10px auto;
      width: 250px;
    }
  }
}
</style>