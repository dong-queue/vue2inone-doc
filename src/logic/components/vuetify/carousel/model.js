export default {
  data() {
    return {
      colors: [
        { color: 'primary', index: 0 },
        { color: 'secondary', index: 1 },
        { color: 'yellow darken-2', index: 2 },
        { color: 'red', index: 3 },
        { color: 'orange', index: 4 },
      ],
      model: 0,
    }
  },
  methods: {
    changeModel (value) {
      value === '+' ? this.model++ : this.model--
    }
  }
}