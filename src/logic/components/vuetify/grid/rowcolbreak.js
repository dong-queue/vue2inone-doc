export default {
  data () {
    return {
      cols: [6, 6]
    }
  },
  watch: {
    '$vuetify.breakpoint' (value) {
      const { lg, sm } = value
      this.cols = lg ? [3, 9] : sm ? [9, 3] : [6, 6]
    },
  },
  created () {
    const { lg, sm } = this.$vuetify.breakpoint
    this.cols = lg ? [3, 9] : sm ? [9, 3] : [6, 6]
  },
  methods: {
    getColSize (value) {
      return this.cols[value - 1]
    }
  }
}