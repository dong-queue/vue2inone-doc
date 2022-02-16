export default {
  data: () => ({
    sheet: false,
    element: 'null',
  }),
  methods: {
    changeSheet () {
      this.sheet = !this.sheet
    },
    open (event) {
      event.preventDefault()
      this.sheet = false
      this.element = event.target
      this.$nextTick(() => {
        this.sheet = true
      })
    }
  }
}