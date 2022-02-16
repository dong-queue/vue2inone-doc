export default {
  data() {
    return {
      chipList: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
      items: ['Streaming', 'Eating'],
    }
  },

  methods: {
    remove(item) {
      this.chipList.splice(this.chipList.indexOf(item), 1)
      this.chipList = [...this.chipList]
    },
  },
}