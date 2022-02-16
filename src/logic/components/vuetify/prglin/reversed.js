export default {
  data() {
    return {
      isReverse: false
    }
  },
  created() {
    this.isReverse = this.$vuetify.rtl
  },
}