export default {
  data() {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
    }
  },
  methods: {
    reset () {
      this.chip1 = true
      this.chip2 = true
      this.chip3 = true
      this.chip4 = true
    },
    closeChip (value) {
      if (value.name) this[value.name] = false
    }
  }
}
