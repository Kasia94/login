<template>
  <div id="app">
    <h1>Strona główna</h1>
    <b-button
      class="loginButton"
      v-if="isLogged"
      @click="$store.commit('setLogged', false)"
    >
      Wyloguj
    </b-button>

    <Login
      ref="loginModal"
      @login="$refs.confirmLoginModal.setShow(true)"
      v-if="!isLogged"
    />
    <confirmModal ref="confirmLoginModal" />
  </div>
</template>

<script>
import Login from './pages/Login.vue'
import confirmModal from './components/confirmModal.vue'

export default {
  components: {
    Login,
    confirmModal
  },
  computed: {
    isLogged () {
      return this.$store.state.logged
    }
  },
  methods: {
    setShow () {
      this.$bvModal.hide('loginModal')
      this.$bvModal.show('confirmModal')
    }
  },
  watch: {
    isLogged (val) {
      if (val) {
        setTimeout(() => {
          alert('Zalogowano')
        }, 100)
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.loginButton {
  margin-top: 10%;
}
</style>
