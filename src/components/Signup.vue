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

      <p class="login-error" v-if="error">{{ error }}</p>

      <button type="submit" :disabled="loading || $v.$invalid">
        <p v-if="!loading">signup</p>
        <font-awesome-icon v-else icon="spinner" pulse />
      </button>

     <nav-link class="login-link" uri="/login" text="have an account? log in"></nav-link>
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
      if (this.error) this.$store.dispatch('resetError');
    },
    password(newVal, oldVal) {
      if (this.error) this.$store.dispatch('resetError');
    },
    confirmPassword(newVal, oldVal) {
      if (this.error) this.$store.dispatch('resetError');
    },
  },
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