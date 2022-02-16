export default {
  data () {
    return {
      value1: 1000,
      value2: 4000.46,
      value3: -1000,
      value4: 4000.46,
      value5: 4000.46,
      rules: [v => Number(v) < 9999 || 'Under 9999']
    }
  }
}