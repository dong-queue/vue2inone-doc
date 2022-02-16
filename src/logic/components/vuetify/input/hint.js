export default {
  data: () => ({
    showMessages: false,
    messages: ''
  }),
  watch : {
    showMessages (value) {
      this.messages = value ? ['Message'] : ''
    }
  }
}