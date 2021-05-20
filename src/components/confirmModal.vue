<template>
  <b-modal v-model="show" @ok="confirm">
    czy na pewno chcesz się zalogować ?
  </b-modal>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    setShow (val) {
      this.show = val
    },
    confirm (event) {
      event.preventDefault()
      this.$store.commit('setLogged', true)
      this.setShow(false)
    }
  }
}
</script>
