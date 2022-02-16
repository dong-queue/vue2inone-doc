export default {
  data: () => ({
    sheet: false,
    class: {
      iconPause: null,
      iconForward: null
    }
  }),
  created () {
    this.class.iconPause = { 'mx-5': this.$vuetify.breakpoint.mdAndUp }
    this.class.iconForward = { 'ml-0': true, 'mr-3': this.$vuetify.breakpoint.mdAndUp }
  },
  methods: {
    changeSheet () {
      this.sheet = !this.sheet
    }
  }
}