<template>
  <div class="signup">
    <h2 class="title">
      <p v-if="!loading">create an account</p>
      <p v-else>signing up...</p>
    </h2>

    <form @submit.prevent="signup">
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

      <label for="confirmPassword" />
      <input
        v-model="confirmPassword"
        type="password"
        id="confirmPassword"
        placeholder="confirm password"
        required
        :disabled="loading"
        @input="$v.confirmPassword.$touch()"
      >
      <div class="error" v-if="$v.confirmPassword.$error">{{ confirmPasswordErrors }}</div>

      <p class="signup-error" v-if="error.message">{{ error.message }}</p>

      <button type="submit" :disabled="loading || $v.$invalid || (error.status > 0 && error.status !== 500)">
        <p v-if="!loading">signup</p>
        <font-awesome-icon v-else icon="spinner" pulse />
      </button>

     <nav-link class="login-link" uri="/login" text="have an account already? log in"></nav-link>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { error as e, validation as v } from '../utils';

export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  mounted() {
    // configure this to onPageLeave instead of mount
    // to persist error when session expired
    // aka when user is logged in with token but session entry is deleted
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
    confirmPasswordErrors() {
      return e.form.confirmPassword(this);
    },
  }),
  watch: {
    email(newVal, oldVal) {
      if (this.error.status !== 0) this.$store.dispatch('resetError');
    },
    password(newVal, oldVal) {
      if (this.error.status !== 0) this.$store.dispatch('resetError');
    },
    confirmPassword(newVal, oldVal) {
      if (this.error) this.$store.dispatch('resetError');
    },
  },
  methods: {
    async signup() {
      const { email, password, confirmPassword } = this;

      await this.$store.dispatch('signup', { email, password });

      if (this.error.status === 0) this.$router.push('/envelopes');
    },
  },
  validations: {
    email: v.form.email,
    password: v.form.password,
    confirmPassword: v.form.confirmPassword,
  },
};
</script>

<style lang="less">
@import './../index.less';

.signup {
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

    .signup-error {
      .error();

      font-size: @fontSize;
    }

    button {
      .divButton();

      height: 50px;
      margin: 10px auto;
      width: 225px;
    }

    .login-link {
      margin-top: 10px;
    }
  }
}
</style>