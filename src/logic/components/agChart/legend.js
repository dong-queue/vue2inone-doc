export default {
  data () {
    return {
      options: null,
      isShowChart: false,
    }
  },
  beforeMount () {
    this.options = {
      data: [
        {
          label: 'Android',
          value: 56.9,
        },
        {
          label: 'iOS',
          value: 22.5,
        },
        {
          label: 'BlackBerry',
          value: 6.8,
        },
        {
          label: 'Symbian',
          value: 8.5,
        },
        {
          label: 'Bada',
          value: 2.6,
        },
        {
          label: 'Windows',
          value: 1.9,
        },
      ],
      series: [
        {
          type: 'pie',
          angleKey: 'value',
          labelKey: 'label',
          strokeWidth: 3,
        },
      ],
      legend: { position: 'right' },
    }
  },
  mounted () {
    this.isShowChart = true
  },
  methods: {
    show () {
      this.isShowChart = !this.isShowChart
    },
    updateLegendPosition(value) {
      this.isShowChart = false
      this.options.legend.position = value
      setTimeout(() => {this.isShowChart = true}, 1)
    },
    setLegendEnabled(enabled) {
      this.isShowChart = false
      this.options.legend.enabled = enabled
      setTimeout(() => { this.isShowChart = true }, 1)
    },
  }
}