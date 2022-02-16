export default {
  data() {
    return {
      dialog: false,
    }
  },
  watch: {
    dialog(val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 4000)
    },
  },
  methods: {
    changeDialog(value) {
      this.dialog = value
    }
  }
}
