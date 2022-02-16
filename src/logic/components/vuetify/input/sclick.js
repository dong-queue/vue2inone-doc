export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    appendIconCallback() {
      alert('click:append')
    },
    prependIconCallback() {
      alert('click:prepend')
    },
  },
}