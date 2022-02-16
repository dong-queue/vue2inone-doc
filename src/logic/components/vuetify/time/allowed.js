export default {
  data() {
    return {
      time: '11:15',
      timeStep: '10:10',
      allowedHours: v => v % 2,
      allowedMinutes: v => v >= 10 && v <= 50,
      allowedStep: m => m % 10 === 0,
    }
  },
}