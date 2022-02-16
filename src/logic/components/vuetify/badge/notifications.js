export default {
  data() {
    return {
      messages: 0,
      show: false,
    }
  },
  methods: {
    messagesPlus () {
      this.messages = Number(++this.messages)
    },
    messagesZero () {
      this.messages = 0
    }
  }
}