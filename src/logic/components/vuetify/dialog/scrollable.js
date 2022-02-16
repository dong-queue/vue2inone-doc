export default {
  data() {
    return {
      dialogm1: '',
      dialog: false,
      radio: [
        { label: 'Bahamas, The', value: 'bahamas' },
        { label: 'Bahrain', value: 'bahrain' },
        { label: 'Bangladesh', value: 'bangladesh' },
        { label: 'Barbados', value: 'barbados' },
        { label: 'Belarus', value: 'belarus' },
        { label: 'Belgium', value: 'belgium' },
        { label: 'Belize', value: 'belize' },
        { label: 'Benin', value: 'benin' },
        { label: 'Bhutan', value: 'bhutan' },
        { label: 'Bolivia', value: 'bolivia' },
        { label: 'Bosnia and Herzegovina', value: 'bosnia' },
        { label: 'Botswana', value: 'botswana' },
        { label: 'Brazil', value: 'brazil' },
        { label: 'Brunei', value: 'brunei' },
        { label: 'Bulgaria', value: 'bulgaria' },
        { label: 'Burkina Faso', value: 'burkina' },
        { label: 'Burma', value: 'burma' },
        { label: 'Burundi', value: 'burundi' }
      ]
    }
  },
  methods: {
    changeDialog(value) {
      this.dialog = value
    }
  }
}