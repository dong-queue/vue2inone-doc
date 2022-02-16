export default {
  data() {
    return {
      select: ['Vuetify', 'Programming'],
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
    }
  },
  methods: {
    selectItem (data) {
      data.parent.selectItem(data.item)
    }
  }
}