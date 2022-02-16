export default {
  data: () => ({
    bar: {
      text: 'text',
      autocompleteItems: [
        { text: 'item 1', value: 'item1' },
        { text: 'item 2', value: 'item2' }
      ],
      item: 'item1'
    }
  }),
  methods: {
    click () {
      this.$message({ type: 'success', showClose: true, message: 'Click button!', duration: 5000 })
    },
    dataChanged (value) {
      this.$message({ type: 'warning', showClose: true, message: String('value changed').concat(': ', value), duration: 5000 })
    }
  }
}