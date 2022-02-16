var dragEvent = null
var createEvent = null
export default {
  data: () => ({
    value: '',
    events: [],
    colors: ['#2196F3', '#3F51B5', '#673AB7', '#00BCD4', '#4CAF50', '#FF9800', '#757575'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    dragStart: null,
    createStart: null,
    extendOriginal: null,
    eventColor: (event) => {
      const rgb = parseInt(event.color.substring(1), 16)
      const r = (rgb >> 16) & 0xFF
      const g = (rgb >> 8) & 0xFF
      const b = (rgb >> 0) & 0xFF

      return event === dragEvent
        ? `rgba(${r}, ${g}, ${b}, 0.7)`
        : event === createEvent
          ? `rgba(${r}, ${g}, ${b}, 0.7)`
          : event.color
    }
  }),
  methods: {
    startDrag({ event, timed }) {
      if (event && timed) {
        dragEvent = event
        this.dragTime = null
        this.extendOriginal = null
      }
    },
    startTime(tms) {
      const mouse = this.toTime(tms)

      if (dragEvent && this.dragTime === null) {
        const start = dragEvent.start

        this.dragTime = mouse - start
      } else {
        this.createStart = this.roundTime(mouse)
        createEvent = {
          name: `Event #${this.events.length}`,
          color: this.rndElement(this.colors),
          start: this.createStart,
          end: this.createStart,
          timed: true,
        }

        this.events.push(createEvent)
      }
    },
    extendBottom(event) {
      console.log('extendBottom', event)
      createEvent = event
      this.createStart = event.start
      this.extendOriginal = event.end
    },
    mouseMove(tms) {
      const mouse = this.toTime(tms)

      if (dragEvent && this.dragTime !== null) {
        const start = dragEvent.start
        const end = dragEvent.end
        const duration = end - start
        const newStartTime = mouse - this.dragTime
        const newStart = this.roundTime(newStartTime)
        const newEnd = newStart + duration

        dragEvent.start = newStart
        dragEvent.end = newEnd
      } else if (createEvent && this.createStart !== null) {
        const mouseRounded = this.roundTime(mouse, false)
        const min = Math.min(mouseRounded, this.createStart)
        const max = Math.max(mouseRounded, this.createStart)

        createEvent.start = min
        createEvent.end = max
      }
    },
    endDrag() {
      this.dragTime = null
      dragEvent = null
      createEvent = null
      this.createStart = null
      this.extendOriginal = null
    },
    cancelDrag() {
      console.log('cancelDrag')
      if (createEvent) {
        if (this.extendOriginal) {
          createEvent.end = this.extendOriginal
        } else {
          const i = this.events.indexOf(createEvent)
          if (i !== -1) {
            this.events.splice(i, 1)
          }
        }
      }

      createEvent = null
      this.createStart = null
      this.dragTime = null
      dragEvent = null
    },
    roundTime(time, down = true) {
      const roundTo = 15 // minutes
      const roundDownTime = roundTo * 60 * 1000

      return down
        ? time - time % roundDownTime
        : time + (roundDownTime - (time % roundDownTime))
    },
    toTime(tms) {
      return new Date(tms.year, tms.month - 1, tms.day, tms.hour, tms.minute).getTime()
    },
    getEvents({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`).getTime()
      const max = new Date(`${end.date}T23:59:59`).getTime()
      const days = (max - min) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const timed = this.rnd(0, 3) !== 0
        const firstTimestamp = this.rnd(min, max)
        const secondTimestamp = this.rnd(2, timed ? 8 : 288) * 900000
        const start = firstTimestamp - (firstTimestamp % 900000)
        const end = start + secondTimestamp

        events.push({
          name: this.rndElement(this.names),
          color: this.rndElement(this.colors),
          start,
          end,
          timed,
        })
      }

      this.events = events
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    rndElement(arr) {
      return arr[this.rnd(0, arr.length - 1)]
    },
  },
}