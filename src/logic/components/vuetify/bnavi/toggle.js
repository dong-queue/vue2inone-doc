export default {
  data() {
    return {
      value: 1,
      active: true,
    }
  },
  methods: {
    changeActive () {
      this.active = !this.active
    },
    naviChange (e) {
      this.value = e
    }
  }
}