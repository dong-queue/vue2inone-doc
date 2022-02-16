export default {
  methods: {
    click () {
      this.$message({ type: 'success', showClose: true, message: 'Click button!', duration: 5000 })
    }
  }
}