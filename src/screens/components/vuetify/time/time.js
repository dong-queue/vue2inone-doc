export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Time pickers', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.time.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // allowed-times
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.time.allowed.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.time.allowed.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/time-pickers/#allowed-times',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/time/allowed' }
  ]
}