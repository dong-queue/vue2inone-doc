export default {
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
    }
  },
  methods: {
    changeLoader (params) {
      this[`loading${params}`] = true
      setTimeout(() => (this[`loading${params}`] = false), 3000)
    }
  }
}