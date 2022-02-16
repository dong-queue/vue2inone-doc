export default {
  data: () => ({
    date: '2018-03-02',
    allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0
  })
}