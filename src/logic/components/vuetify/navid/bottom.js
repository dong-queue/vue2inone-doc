export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
  methods: {
    changeDrawer () {
      this.drawer = !this.drawer
    }
  }
}