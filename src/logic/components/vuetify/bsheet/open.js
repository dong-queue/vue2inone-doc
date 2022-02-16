export default {
  data: () => ({
    sheet: false,
    tiles: [
      { img: 'https://cdn.vuetifyjs.com/images/bottom-sheets/keep.png', title: 'Keep' },
      { img: 'https://cdn.vuetifyjs.com/images/bottom-sheets/inbox.png', title: 'Inbox' },
      { img: 'https://cdn.vuetifyjs.com/images/bottom-sheets/hangouts.png', title: 'Hangouts' },
      { img: 'https://cdn.vuetifyjs.com/images/bottom-sheets/messenger.png', title: 'Messenger' },
      { img: 'https://cdn.vuetifyjs.com/images/bottom-sheets/google.png', title: 'Google+' },
    ]
  }),
  methods: {
    changeSheet () {
      this.sheet = !this.sheet
    }
  }
}