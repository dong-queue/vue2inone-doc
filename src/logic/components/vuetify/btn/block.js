export default {
  methods: {
    btnClick () {
      // console.log('btnClick', this)
      this.$message({ type: 'success', showClose: true, message: 'Click button!', duration: 5000 })
    }
  }
}