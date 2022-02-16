export default {
  data: () => ({
    copied: false,
    dialog: false,
    rating: 10,
  }),

  methods: {
    copy() {
      const markup = this.$refs.link
      markup.focus()
      document.execCommand('selectAll', false, null)
      this.copied = document.execCommand('copy')
    },
    changeDialog (value) {
      this.dialog = value
    }
  },
}