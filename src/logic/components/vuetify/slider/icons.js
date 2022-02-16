export default {
  data() {
    return {
      media: 0,
      alarm: 0,
      zoom: 0,
    }
  },

  methods: {
    zoomOut() {
      this.zoom = (this.zoom - 10) || 0
    },
    zoomIn() {
      this.zoom = (this.zoom + 10) || 100
    },
  },
}