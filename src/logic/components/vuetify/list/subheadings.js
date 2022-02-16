export default {
  data() {
    return {
      settings: [],
      active: {
        '0': false,
        '1': false,
        '2': false,
        '3': false
      }
    }
  },
  methods: {
    click(e) {
      // console.log(e, this.active[e])
      this.active[e] = !this.active[e]
      this.settings = Object.keys(this.active).filter(x => this.active[x])
    }
  }
}