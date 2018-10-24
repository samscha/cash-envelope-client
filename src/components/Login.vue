<template>
  <div class="login">
    <form class="login" @submit.prevent="login">
      <h2>Please sign in</h2>

      <label for="email" class="inputLabel">Email address</label>
      <input
        v-model="email"
        type="email"
        id="email"
        placeholder="Email address"
        required
        autofocus
      >

      <label for="password" class="inputLabel">Password</label>
      <input
        v-model="password"
        type="password"
        id="password"
        placeholder="Password"
        required
      >

      <button type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login: async function() {
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
@color: blue;

.inputLabel {
  color: @color;
}
</style>