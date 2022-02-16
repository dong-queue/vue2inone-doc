export default {
  name: 'VueFile',
  template: `
    <v-iterator 
        ref="code"
        :dynamicArg="dynamicArg"
        :data="$data" 
        :rule="_.get(dynamicArg, 'rule')"
        v-on="customEvent"
      />`,
  mixins: [],
  props: {
    dynamicArg: {
      type: Object,
      default: () => ({}),
    }
  },
  delay: 200,
  timeout: 3000,
  data: () => ({
    dynamic: {
      condition: '',
      screen: { }
    }
  }),
  created () {
    if (this.$util.getIsValid(this.dynamicArg, 'name')) {
      Object.keys(this.dynamicArg).map(x => {
        if (x !== 'screen') this.$data[x] = this.dynamicArg[x]
      })
    }
  },
  computed: {
    customEvent () {
      let result = {}
      this.methods.map(x => {
        Object.assign(result, {[x]: this[x]})
      })
      return result
    }
  },
  methods: {}
}
