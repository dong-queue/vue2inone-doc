export default {
  data: () => ({
    drawer: true,
    // content in app.vue ( screen only )
    content: {
      screen: screen
    },
    // rule used at form
    rule: {
      required: (value) => !!value || 'Required Item',
      nonZero: (v) => {
        return (Number(v) !== 0) || 'not allowed zero value'
      }
    },
    formIsValid: false
  }),
  watch: {
  },
  computed: {
  },
  methods: {
    changeDrawer() {
      // console.log('app - changeDrawer')
      this.drawer = (!this.drawer)
    },
    changeEdit() {
      this.autocomplete.isEditing = !this.autocomplete.isEditing
      this.autocomplete.isDisabled = !this.autocomplete.isEditing
    }
  }
}