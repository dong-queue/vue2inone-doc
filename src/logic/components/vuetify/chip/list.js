export default {
  data: () => ({
    items: [
      {
        text: 'Nature',
        icon: 'mdi-nature',
      },
      {
        text: 'Nightlife',
        icon: 'mdi-glass-wine',
      },
      {
        text: 'November',
        icon: 'mdi-calendar-range',
      },
      {
        text: 'Portland',
        icon: 'mdi-map-marker',
      },
      {
        text: 'Biking',
        icon: 'mdi-bike',
      },
    ],
    loading: false,
    search: '',
    selected: [],
    selections: [],
    allSelected: false,
    categories: [],
    disableNext: true
  }),

  computed: {
    
  },

  watch: {
    selected (value) {
      this.search = ''
      this.makeSelections()
      this.disableNext = !value.length
    },
    search () {
      this.makeCategories()
    }
  },
  created () {
    this.makeCategories()
  },
  methods: {
    focusSearch () {
      this.$refs.search.focus()
    },
    next() {
      this.loading = true

      setTimeout(() => {
        this.search = ''
        this.selected = []
        this.loading = false
      }, 2000)
    },
    pushSelected (value) {
      this.selected.push(value)
    },
    removeSelected (value) {
      this.selected.splice(this.selected.findIndex(x => x == value), 1)
    },
    makeSelections () {
      this.selections = []

      for (const selection of this.selected) {
        this.selections.push(selection)
      }
      this.allSelected = this.selected.length === this.items.length
      this.makeCategories()
    },
    makeCategories () {
      const search = this.search.toLowerCase()
      if (!search) this.categories = this.items
      else {
        this.categories = this.items.filter(item => {
          const text = item.text.toLowerCase()

          return text.indexOf(search) > -1
        })
      }
      this.categories = this.categories.filter(x => {
        return !this.selected.some(y => y === x)
      })
    }
  },
}