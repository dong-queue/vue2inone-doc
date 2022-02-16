export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Progress circular', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.prgcir.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // indeterminate
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.prgcir.indeterminate.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.prgcir.indeterminate.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/progress-circular/#indeterminate',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/prgcir/indeterminate' },

    // rotate
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.prgcir.rotate.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.prgcir.rotate.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/progress-circular/#rotate',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/prgcir/rotate' }
  ]
}