export default {
  data: () => ({
    bpm: 40,
    interval: null,
    isPlaying: false,
    color: 'indigo'
  }),
  watch: {
    bpm (value) {
      this.color = value < 100 ? 'indigo' : value < 125 ? 'teal' : value < 140 ? 'green' : value < 175 ? 'orange' : 'red'
    }
  },

  methods: {
    decrement() {
      this.bpm--
    },
    increment() {
      this.bpm++
    },
    toggle() {
      this.isPlaying = !this.isPlaying
    },
  },
}