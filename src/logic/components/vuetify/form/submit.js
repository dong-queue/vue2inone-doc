export default {
  data: () => ({
    valid: true,
    isNotValid: false,
    name: '',
    requiredRule: v => !!v || 'Required',
    nameRule: v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    email: '',
    emailRule: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),
  watch: {
    valid (value) {
      this.isNotValid = !value
    }
  },
  methods: {
    validate() {
      this.$refs.code.getRef('form').validate()
    },
    reset() {
      this.$refs.code.getRef('form').reset()
    },
    resetValidation() {
      this.$refs.code.getRef('form').resetValidation()
    },
  },
}