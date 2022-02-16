export default {
  data: () => ({
    dates: ['2018-09-15', '2018-09-20'],
    menu: false,
    element: null
  }),
  watch: {
    menu (e) {
      if (!e) this.element = null
    }
  },
  methods: {
    closeMenu () {
      this.menu = false
    },
    save (dates) {
      console.log(this.$refs.code.getRef('menu'))
      this.$refs.code.getRef('menu').save(dates)
    },
    showMenu (e) {
      e.preventDefault()
      this.menu = false
      this.element = e.target
      this.$nextTick(() => {
        this.menu = true
      })
    }
  }
}