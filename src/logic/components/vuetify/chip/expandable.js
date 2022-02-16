export default {
  data: () => ({
    isShowMenu: false,
    element: null
  }),
  methods: {
    closeMenu () {
      this.isShowMenu = false
    },
    showMenu (e) {
      // console.log('showMenu', e)
      e.preventDefault()
      this.isShowMenu = false
      this.element = e.target
      this.$nextTick(() => this.isShowMenu = true)
    }
  }
}