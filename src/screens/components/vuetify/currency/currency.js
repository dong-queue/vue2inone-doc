export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Currencies', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.currency.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // default
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.currency.default.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.currency.default.intro' }
      ]
    },
    { component: 'code', file: 'components/vuetify/currency/default' }
  ]
}