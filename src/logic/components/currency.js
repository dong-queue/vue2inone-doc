export default {
  data: () => ({
    currency: {
      model1: 0,
      rules: [v => Number(v) > 0 || 'over zero amount'],
      model2: null
    }
  }),
  methods: {
  }
}