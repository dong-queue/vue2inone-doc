export default {
  data() {
    return {
      value: 30,
      rules: [
        v => v <= 40 || 'Only 40 in stock',
      ],
    }
  },
}