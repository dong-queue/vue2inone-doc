export default {
  data: () => ({
    items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
    model: ['Vuetify'],
    search: null,
  }),

  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop())
      }
    },
  },
  methods: {
    changeSearch(e) {
      // console.log('change-search', e)
      this.search = e
    },
  }
}