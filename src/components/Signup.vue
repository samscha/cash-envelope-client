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
      <div class="error" v-if="$v.email.$invalid">{{ emailErrors }}</div>

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
import {
  email,
  maxLength,
  minLength,
  required,
  sameAs,
} from 'vuelidate/lib/validators';
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
    emailErrors() {
      const { email, maxLength, minLength, $params } = this.$v.email;
      const pre = `email must be between 7 and 32 characters: `;

      if (!maxLength) {
        const diff = this.email.length - $params.maxLength.max;

        return pre + `${diff} char${diff > 1 ? 's' : ''} too many`;
      }

      if (!minLength) {
        const diff = $params.minLength.min - this.email.length;

        return pre + `${diff} char${diff > 1 ? 's' : ''} remaining`;
      }

      if (!email) return `please check email format`;
    },
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
  validations: {
    email: {
      // required,
      email,
      minLength: minLength(7),
      maxLength: maxLength(32),
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(64),
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs('password'),
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
      .input();
    }

    .error {
      .error();
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