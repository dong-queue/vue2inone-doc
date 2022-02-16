import Vue from 'vue'
import _ from 'lodash'

const requireLang = require.context('@/i18n', true, /\.json$/ )

let message = {ko: {}, en: {}}


requireLang.keys().forEach(fileName => {
  const langConfig = requireLang(fileName)
  var langName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  // const langCode = String(langName).slice(0, String(langName).indexOf('/'))
  let langArray = String(langName).split('/')

  if (Array.isArray(langArray) && langArray.length > 1) {
    message = _.merge(message, langArray.reduceRight((acc, item, index) => {
      return { [item]: index === langArray.length - 1 ? langConfig : acc }
    }, {}) )
  }
})

// console.log(message)

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'ko',
  fallbackLocale: 'ko',
  messages: message,
  silentTranslationWarn: true
})


// import en from './en'
// import ko from './ko'
// import _ from 'lodash'
// import Vue from 'vue'
// import VueI18n from 'vue-i18n'

// Vue.use(VueI18n)

// export default new VueI18n({
//   locale: 'en',
//   fallbackLocale: 'en',
//   messages: _.assign({}, en, ko),
//   silentTranslationWarn: true
// })