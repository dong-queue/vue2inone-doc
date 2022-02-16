export default {
  data: () => ({
    overlay: false,
  }),

  watch: {
    overlay(val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 3000)
    },
  },
  methods: {
    changeOverlay () {
      this.overlay = !this.overlay
    }
  }
}