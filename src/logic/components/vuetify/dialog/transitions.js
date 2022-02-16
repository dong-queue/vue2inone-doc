export default {
  data() {
    return {
      dialog: {
        bottom: false,
        top: false
      }
    }
  },
  methods: {
    changeDialog(value) {
      this.dialog[value[0]] = value[1]
    }
  }
}