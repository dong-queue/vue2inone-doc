export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Skeleton loaders', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.skeleton.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // boilerplate
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.skeleton.boilerplate.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.skeleton.boilerplate.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/skeleton-loaders/#boilerplate-component',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/skeleton/boilerplate' }
  ]
}