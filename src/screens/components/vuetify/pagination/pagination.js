export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Paginations', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.pagination.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // circle
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.pagination.circle.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.pagination.circle.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/paginations/#circle',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/pagination/circle' },

    // length
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.pagination.length.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.pagination.length.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/paginations/#length',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/pagination/length' },

    // total-visible
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.pagination.total.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.pagination.total.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/paginations/#total-visible',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/pagination/total' }
  ]
}