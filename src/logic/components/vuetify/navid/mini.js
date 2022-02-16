export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
    }
  },
  methods: {
    updateMini (e) {
      this.mini = e
    },
    changeMini () {
      // e.stopPropagation()
      this.mini = !this.mini
    }
  }
}