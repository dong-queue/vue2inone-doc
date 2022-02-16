export default {
  data: () => ({
    snackbar: false,
    text: 'My timeout is set to 2000.',
    timeout: 2000,
  }),
  methods: {
    changeSnackbar (value) {
      this.snackbar = value
    }
  }
}