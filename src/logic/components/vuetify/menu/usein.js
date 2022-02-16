export default {
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
    menu: false,
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
    }
  },
}