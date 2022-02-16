export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    pickerDate: null,
    notes: [],
    allNotes: [
      'President met with prime minister',
      'New power plant opened',
      'Rocket launch announced',
      'Global warming discussion cancelled',
      'Company changed its location',
    ],
  }),
  watch: {
    pickerDate() {
      this.notes = [
        this.allNotes[Math.floor(Math.random() * 5)],
        this.allNotes[Math.floor(Math.random() * 5)],
        this.allNotes[Math.floor(Math.random() * 5)],
      ].filter((value, index, self) => self.indexOf(value) === index)
    },
  },
  methods: {
    updatePickerDate (e) {
      this.pickerDate = e
    }
  }
}