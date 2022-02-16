export default {
  data: () => ({
    autocomplete: {
      values: ['foo', 'bar'],
      value: null,
      hasSaved: false,
      isEditing: false,
      items1: ['foo', 'bar', 'fizz', 'buzz'],
      items3: [
        { name: 'Florida', abbr: 'FL', id: 1 },
        { name: 'Georgia', abbr: 'GA', id: 2 },
        { name: 'Nebraska', abbr: 'NE', id: 3 },
        { name: 'California', abbr: 'CA', id: 4 },
        { name: 'New York', abbr: 'NY', id: 5 },
      ],
      items4: [],
      isDisabled: true,
      value2: '',
      value3: ''
    },
    iconName: 'mdi-pencil'
  }),
  watch: {
    'autocomplete.isEditing' (val) {
      this.iconName = val ? 'mdi-close' : 'mdi-pencil'
    },
  },
  methods: {
    changeEdit() {
      this.autocomplete.isEditing = !this.autocomplete.isEditing
      this.autocomplete.isDisabled = !this.autocomplete.isEditing
    },
    click () {
      this.changeEdit()
      this.$message({ type: 'success', showClose: true, message: 'Click button!', duration: 5000 })
    }
  }
}