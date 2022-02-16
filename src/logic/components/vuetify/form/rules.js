export default {
  data: () => ({
    allowSpaces: false,
    match: 'Foobar',
    max: 0,
    model: 'Foobar',
    rules: []
  }),
  watch: {
    max () {
      this.validateField()
      this.changeRules()
    },
    allowSpaces () {
      this.validateField()
      this.changeRules()
    },
    match () {
      this.validateField()
      this.changeRules()
    }
  },
  created () {
    this.changeRules()
  },
  methods: {
    changeRules () {
      const rules = []

      if (this.max) {
        const rule =
          v => (v || '').length <= this.max ||
            `A maximum of ${this.max} characters is allowed`

        rules.push(rule)
      }

      if (!this.allowSpaces) {
        const rule =
          v => (v || '').indexOf(' ') < 0 ||
            'No spaces are allowed'

        rules.push(rule)
      }

      if (this.match) {
        const rule =
          v => (!!v && v) === this.match ||
            'Values do not match'

        rules.push(rule)
      }

      this.rules = rules
    },
    validateField() {
      let form = this.$refs.code.getRef('form')
      form.validate()
    },
  }
}