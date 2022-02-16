
import { mapState } from 'vuex'
import Code from '@/components/Code.vue'
import Test from '@/components/ElementTest.vue'

export default {
  name: 'Core',
  components: {
    VCode: Code,
    VTest: Test
  },
  mixins: [],
  props: {
    dynamicArg: {
      type: Object,
      default: () => ({}),
    }
  },
  delay: 200,
  timeout: 3000,
  data() {
    return {
      dynamic: {
        condition: '',
        screen: {}
      },
      component: undefined,
    }
  },
  created () {
    if (this.$util.getIsValid(this.dynamicArg, 'name')) {
      Object.keys(this.dynamicArg).map(x => {
        if (x !== 'screen') this.$data[x] = this.dynamicArg[x]
      })
    }
  },
  computed: {
    ...mapState([
      'page'
    ])
  },
  methods: {
    isValid (isValid) {
      // console.log('isValid', isValid)
      this['vaild'] = isValid
    }
  }
}