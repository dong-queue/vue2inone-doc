const color = [
  'blue-grey', 'teal', 'brown', 'indigo'
]
export default {
  data: () => ({ 
    value: 1,
    color: 'teal' 
  }),
  methods: {
    change (e) {
      this.value1 = e
      this.color = color[e] || 'blue-grey'
    }
  }
}