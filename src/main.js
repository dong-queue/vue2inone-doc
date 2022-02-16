import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './plugins/element.js'
import Tool from '@/utils/tools'
import Moment from 'moment'
import _ from 'lodash'
import store from '@/store'

if (process.env.VUE_APP_GOOGLE_ANALYTICS) {
  Vue.use(require('vue-gtag').default, {
    config: { id: process.env.VUE_APP_GOOGLE_ANALYTICS },
    appName: 'v-iterator document'
  })
}

// import v-iterator
import {VIterator} from 'v-iterator'
Vue.component(VIterator.name, VIterator)

// import ag-grid
import { AgGridVue } from 'ag-grid-vue'
Vue.component('ag-grid-vue', AgGridVue)

// import ag chart
import { AgChartsVue } from 'ag-charts-vue'
Vue.component('ag-charts-vue', AgChartsVue)

Vue.prototype.$util = Tool
Vue.prototype._ = _
Vue.prototype.$moment = Moment

Vue.config.productionTip = false

import i18n from '@/i18n'

Vue.mixin({
  methods: {
    async callEvent (name, item, even) {
      console.log('main.js-callEvent', name, item, typeof (this[name]), this[name])
      this.$util.getIsValid(this, name) && typeof (this[name]) === 'function' ?
        await this[name](item, even) : this.$emit('callEvent', name, item, even)
    },
  }
})

// import DynamicStyle from 'vue-dynamic-style'
// Vue.use(DynamicStyle) 

new Vue({
  i18n,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
