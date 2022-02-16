export default {
  data() {
    return {
      dialog: {
        dialog: false,
        dialog2: false,
        dialog3: false
      },
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me 2',
        },
      ],
      select: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' },
      ],
      isShowMenu: false,
      btnElement: null
    }
  },
  methods: {
    changeDialog (value) {
      this.dialog[value[0]] = value[1]
    },
    showMenu (e) {
      e.preventDefault()
      this.isShowMenu = false
      this.btnElement = e.target
      this.$nextTick(() => this.isShowMenu = true)
    }
  }
}