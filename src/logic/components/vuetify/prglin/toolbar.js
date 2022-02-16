export default {
  data: () => ({
    loading: false,
  }),

  watch: {
    loading(val) {
      if (!val) return
      setTimeout(() => (this.loading = false), 3000)
    },
  },
  methods: {
    startLoading () {
      this.loading = true
    }
  }
}