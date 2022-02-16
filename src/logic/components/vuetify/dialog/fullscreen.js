export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
  methods: {
    changeDialog (value) {
      this.dialog = value
    }
  }
}