export default {
  data: () => ({
    bar: {
      color: 'deep-purple accent-4',
      isAppbar: true,
      selection: [],
      toolbarTitle: 'Photos',
      selectItems: ['Foo', 'Bar', 'Fizz', 'Buzz']
    },
    isSelecion: false
  }),
  watch: {
    'bar.selection' (value) {
      this.bar.color = value.length ? 'grey darken-4' : 'deep-purple accent-4'
      this.bar.isAppbar = !value.length
      this.isSelecion = value.length
    }
  },
  methods: {
    initSelection() {
      this.bar.selection = []
    },
  }
}