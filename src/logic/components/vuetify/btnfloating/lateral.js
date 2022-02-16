export default {
  data: () => ({
    fab: false,
    hidden: false,
    tabs: null,
    activeFab: { color: 'success', icon: 'mdi-share-variant' }
  }),
  watch : {
    tabs (value) {
      switch (value) {
        case 'one': 
          this.activeFab = { color: 'success', icon: 'mdi-share-variant' }
          break
        case 'two': 
          this.activeFab = { color: 'red', icon: 'mdi-pencil' }
          break
        case 'three': 
          this.activeFab = { color: 'green', icon: 'mdi-chevron-up' }
          break
        default: 
          this.activeFab = {}
      }
    }
  }
}