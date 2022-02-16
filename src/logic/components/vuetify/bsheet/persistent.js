export default {
  data: () => ({
    sheet: false,
  }),
  methods: {
    changeSheet () {
      this.sheet = !this.sheet
    }
  }
}