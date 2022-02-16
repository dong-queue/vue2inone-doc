export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    element: null
  }),
  methods: {
    show(e) {
      e.preventDefault()
      this.menu = false
      this.element = e.target
      this.$nextTick(() => {
        this.menu = true
      })
    },
    changeFav () {
      this.fav = !this.fav
    },
    closeMenu () {
      this.menu = false
    }
  },
}