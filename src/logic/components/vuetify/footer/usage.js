export default {
  data: () => ({
    icons: [
      { name: 'mdi-home' },
      { name: 'mdi-email' },
      { name: 'mdi-calendar' },
      { name: 'mdi-delete' },
    ],
    items: [
      'default',
      'absolute',
      'fixed',
    ],
    padless: false,
    variant: 'default',
    attrs: {
      absolute: false,
      fixed: false
    }
  }),
  watch: {
    variant (val) {
      if (val === 'default') {
        this.attrs.absolute = false
        this.attrs.fixed = false
      } else {
        this.attrs[val] = true
      }
    }
  }
}