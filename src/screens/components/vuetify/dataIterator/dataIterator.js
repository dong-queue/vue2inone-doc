export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Data iterators', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.dataIterator.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // default
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.dataIterator.default.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.dataIterator.default.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/data-iterators/#default',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/dataIterator/default' },

    // header-and-footer
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.dataIterator.headerfooter.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.dataIterator.headerfooter.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/data-iterators/#header-and-footer',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/dataIterator/headerfooter' },

    // filter
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.dataIterator.filter.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.dataIterator.filter.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/data-iterators/#filter',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/dataIterator/filter' }
  ]
}