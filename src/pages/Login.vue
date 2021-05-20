<template>
<b-card>
  <b-card-body>
    <b-form  @submit.prevent="checkLogin">
      <b-form-group label="Nazwa użytkownika:" label-for="input-1">
        <b-form-input
        v-model="login"
          placeholder="Wprowadź nazwę użytkownika"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Hasło:" label-for="password">
        <b-form-input
        v-model="password"
          placeholder="Wprowadź hasło"
          required
        ></b-form-input>
      </b-form-group>
      <b-button
        class="btn-submit"
        type="submit"
        variant="primary"
        >Zaloguj</b-button
      >
    </b-form>
  </b-card-body>
</b-card>
</template>

<script>
export default {
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    checkLogin () {
      if (this.login && this.password) {
        this.$emit('login')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.btn-submit {
  margin-left: 80%;
  margin-top: 5%;
}
</style>
