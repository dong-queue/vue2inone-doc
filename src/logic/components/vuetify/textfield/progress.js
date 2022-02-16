export default {
  data: () => ({
    value: '',
    custom: true,
    progress: Math.min(100, 0),
    color: 'error'
  }),
  watch: {
    value (v) {
      this.progress = Math.min(100, v.length * 10)
      this.color = ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
    }
  }
}