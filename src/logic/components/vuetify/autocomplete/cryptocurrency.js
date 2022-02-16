export default {
  data: () => ({
    isLoading: false,
    items: [],
    model: null,
    search: null,
    tab: null,
    isModel: true
  }),

  watch: {
    model (val) {
      if (val != null) this.tab = 0
      else this.tab = null
      this.isModel = !val
    },
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return

      this.isLoading = true

      // Lazily load input items
      fetch('https://api.coingecko.com/api/v3/coins/list')
        .then(res => res.clone().json())
        .then(res => {
          this.items = res
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
  },
  methods: {
    changeSearch (e) {
      // console.log('change-search', e)
      this.search = e
    },
  }
}