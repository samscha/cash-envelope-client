<template>
  <div class="login">
    <form @submit.prevent="login">
      <label for="email" class="inputLabel"></label>
      <input
        v-model="email"
        type="email"
        id="email"
        placeholder="email address"
        required
        autofocus
        :disabled="loading"
      >

      <label for="password" class="inputLabel"></label>
      <input
        v-model="password"
        type="password"
        id="password"
        placeholder="password"
        required
        :disabled="loading"
      >

      <button
        type="submit"
        :disabled="loading"
       >
        login
       </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: mapState({
    loading: state => state.auth.loading,
  }),
  methods: {
    async login() {
      const { email, password } = this;

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

.login {
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