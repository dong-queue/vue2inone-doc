export default {
  data: () => ({
    date: null,
    trip: {
      name: '',
      location: null,
      start: null,
      end: null,
    },
    locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'],
  }),
  methods: {
    closeMenu (type) {
      this.$refs.code.getRef(type).isActive = false
    },
    saveDate (type) {
      this.$refs.code.getRef(type).save(this.date)
      let attr = type === 'startMenu' ? 'start' : 'end'
      this.trip[attr] = this.date
    }
  }
}