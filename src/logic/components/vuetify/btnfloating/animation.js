export default {
  data: () => ({
    hidden: false,
    btnText: 'Hide'
  }),
  methods: {
    changeHidden () {
      this.hidden = !this.hidden
      this.btnText = this.hidden ? 'Show' : 'Hide'
    }
  }
}