export default {
  data: () => ({
    isHover: false,
    model: {
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition'
    },
    activeFab: {}
  }),
  watch: {
    'model.top' (val) {
      this.model.bottom = !val
    },
    'model.right' (val) {
      this.model.left = !val
    },
    'model.bottom' (val) {
      this.model.top = !val
    },
    'model.left' (val) {
      this.model.right = !val
    }
  },
}