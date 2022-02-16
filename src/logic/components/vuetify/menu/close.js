export default {
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
    showMenu: false,
    closeOnClick: true,
    element: null
  }),
  methods: {
    show(e) {
      e.preventDefault()
      this.showMenu = false
      this.element = e.target
      this.$nextTick(() => {
        this.showMenu = true
      })
    },
  },
}