<template>
  <div class="login">
    <h2 class="title">
      <p v-if="!loading">log in</p>
      <p v-else>logging in...</p>
    </h2>

    <form @submit.prevent="login">
      <label for="email" />
      <input v-model="email"
        type="email"
        id="email"
        placeholder="email address"
        required
        autofocus
        :disabled="loading"
        @input="$v.email.$touch()"
      >
      <div class="error" v-if="$v.email.$error">{{ emailErrors }}</div>

      <label for="password" />
      <input
        v-model="password"
        type="password"
        id="password"
        placeholder="password"
        required
        :disabled="loading"
        @input="$v.password.$touch()"
      >
      <div class="error" v-if="$v.password.$error">{{ passwordErrors }}</div>

      <p class="login-error" v-if="error.message">{{ error.message }}</p>

      <button type="submit" :disabled="loading || $v.$invalid || error.status > 0">
        <p v-if="!loading">login</p>
        <font-awesome-icon v-else icon="spinner" pulse />
      </button>

     <nav-link class="signup-link" uri="/signup" text="don't have an account? sign up"></nav-link>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { error as e, validation as v } from '../utils';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  mounted() {
    this.$store.dispatch('resetError');
  },
  computed: mapState({
    loading: state => state.auth.loading,
    error: state => state.auth.error,
    emailErrors() {
      return e.form.email(this);
    },
    passwordErrors() {
      return e.form.password(this);
    },
  }),
  watch: {
    email(newVal, oldVal) {
      if (this.error.status !== 0) this.$store.dispatch('resetError');
    },
    password(newVal, oldVal) {
      if (this.error.status !== 0) this.$store.dispatch('resetError');
    },
  },
  methods: {
    async login() {
      const { email, password } = this;

      await this.$store.dispatch('login', { email, password });

      if (this.error.status === 0) this.$router.push('/envelopes');
    },
  },
  validations: {
    email: v.form.email,
    password: v.form.password,
  },
};
</script>

<style lang="less">
@import './../index.less';

.login {
  .title {
    margin: 10px 0;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      .input();
    }

    .error {
      .error();
    }

    .login-error {
      .error();

      font-size: @fontSize;
    }

    button {
      .divButton();

      height: 50px;
      margin: 10px auto;
      width: 250px;
    }

    .signup-link {
      margin-top: 10px;
    }
  }
}
</style>