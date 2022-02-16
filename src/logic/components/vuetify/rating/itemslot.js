export default {
  data: () => ({
    colors: ['green', 'purple', 'orange', 'indigo', 'red'],
    rating: 4.5,
  }),
  methods: {
    genColor(i) {
      return this.colors[i]
    },
  },
}