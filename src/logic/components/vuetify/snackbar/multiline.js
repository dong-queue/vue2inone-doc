export default {
  data: () => ({
    multiLine: true,
    snackbar: false,
    text: `I'm a multi-line snackbar.`,
  }),
  methods: {
    changeSnackbar (value) {
      this.snackbar = value
    }
  }
}