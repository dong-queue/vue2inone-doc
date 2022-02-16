import Vue from 'vue'
import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css'
locale.use(lang)
Vue.prototype.$message = ElementUI.Message
// Vue.component(Checkbox.name, Checkbox)
// Vue.component(Popover.name, Popover)
Vue.use(ElementUI)