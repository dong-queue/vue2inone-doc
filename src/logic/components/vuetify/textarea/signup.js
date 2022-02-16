export default {
  data: () => ({
    agreement: false,
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
    dialog: false,
    mail: undefined,
    form: false,
    isLoading: false,
    pwd: undefined,
    phone: undefined,
    rules: {
      email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
      length: v => (v || '').length >= 6 || `Invalid character length, required 6`,
      password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        'Password must contain an upper case letter, a numeric character, and a special character',
      required: v => !!v || 'This field is required',
    },
  }),
  methods: {
    reset () {
      this.$refs.code.getRef('form').reset()
    },
    openDialog (e) {
      e.stopPropagation()
      e.preventDefault()
      this.dialog = true
    },
    closeDialog(value) {
      this.agreement = value
      this.dialog = false
    }
  }
}