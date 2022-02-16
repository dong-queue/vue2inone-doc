export default {
  data: () => ({
    dates: ['2019-09-10', '2019-09-20'],
    dateRangeText: '2019-09-10 ~ 2019-09-20'
  }),
  watch: {
    dates () {
      this.dateRangeText = this.dates.join(' ~ ')
    }
  }
}