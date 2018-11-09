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

      <button type="submit" :disabled="loading || $v.$invalid">
        <p v-if="!loading">login</p>
        <font-awesome-icon v-else icon="spinner" pulse />
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

const _charDiffErr = (num1, num2, str) => {
  let diff = num1 - num2;

  if (diff > 0) {
    return str + `${diff} char${diff > 1 ? 's' : ''} too many`;
  }

  diff = Math.abs(diff);

  return str + `${diff} char${diff > 1 ? 's' : ''} remaining`;
};

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
    emailErrors() {
      const { email, maxLength, minLength, $params } = this.$v.email;
      const pre = `email must be between 7 and 32 characters: `;

      if (!maxLength)
        return _charDiffErr(this.email.length, $params.maxLength.max, pre);

      if (!minLength)
        return _charDiffErr(this.email.length, $params.minLength.min, pre);

      if (!email) return `please check email format`;
    },
    passwordErrors() {
      const { password, maxLength, minLength, $params } = this.$v.password;
      const pre = `password must be between 8 and 64 characters: `;

      if (!maxLength)
        return _charDiffErr(this.password.length, $params.maxLength.max, pre);

      if (!minLength)
        return _charDiffErr(this.password.length, $params.minLength.min, pre);
    },
  }),
  methods: {
    async login() {
      const { email, password } = this;

      try {
        await this.$store.dispatch('login', {
          email,
          password,
        });

        // const { data } = await this.$store.dispatch('getEnvelopes');
        // console.log(data);

        this.$router.push('/envelopes');
      } catch (err) {
        console.log(err);
      }
    },
  },
  validations: {
    email: {
      required,
      email,
      minLength: minLength(7),
      maxLength: maxLength(32),
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(64),
    },
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

    button {
      .divButton();

      height: 50px;
      margin: 10px auto;
      width: 250px;
    }
  }
}
</style>