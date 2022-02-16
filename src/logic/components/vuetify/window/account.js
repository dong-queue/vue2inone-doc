export default {
  data: () => ({
    step: 1,
    currentTitle: 'Sign-up'
  }),
  watch: {
    step (value) {
      let title = ['Sign-up', 'Create a password', 'Account created']
      this.currentTitle = title[value -1]
    }
  },
  methods: {
    moveStep (plusminus) {
      if (plusminus == '+') this.step++ 
      else this.step-- 
    }
  }
}