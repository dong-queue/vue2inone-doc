export default {
  data() {
    return {
      alert: true,
    }
  },
  methods: {
    reset () {
      console.log('reset', this.alert)
      this.alert = true
    }
  }
}