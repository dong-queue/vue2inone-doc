export default {
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model1: null,
    disableBtn: true,
    search: null,
    items1: [],
    fields: []
  }),
  watch: {
    model1 () {
      this.disableBtn = !this.model1
      this.fields = Object.keys(this.model1 || []).map(key => {
        return {
          key,
          value: this.model1[key] || 'n/a',
        }
      }) || []
    },
    search() {
      // Items have already been loaded
      if (this.items1.length > 0) return

      // Items have already been requested
      if (this.isLoading) return

      this.isLoading = true

      // Lazily load input items
      fetch('https://api.publicapis.org/entries')
        .then(res => res.json())
        .then(res => {
          const { count, entries } = res
          this.count = count
          this.entries = entries
          this.items1 = this.entries.map(entry => {
            const Description = entry.Description.length > this.descriptionLimit
              ? entry.Description.slice(0, this.descriptionLimit) + '...'
              : entry.Description

            return Object.assign({}, entry, { Description })
          })
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
    clearModel () {
      this.model1 = null
    }
  }
}