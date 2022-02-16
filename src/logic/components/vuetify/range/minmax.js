export default {
  data() {
    return {
      min: -50,
      max: 90,
      range: [-20, 70],
      value1: -20,
      value2: 70
    }
  },
  watch: {
    'range' (value) {
      this.value1 = value[0]
      this.value2 = value[1]
    }
  },
  methods: {
    setValue1 (event) {
      this.$set(this.range, 0, event)
    },
    setValue2 (event) {
      this.$set(this.range, 1, event)
    }
  }
}