export default {
  data: () => ({
    dialog: false,
  }),
  methods: {
    changeDialog(value) {
      this.dialog = value
    }
  }
}