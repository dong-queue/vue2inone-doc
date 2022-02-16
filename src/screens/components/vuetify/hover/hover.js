export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Hover', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.hover.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // hover-list
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.hover.list.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.hover.list.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/hover/#hover-list',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/hover/list' },

    // transition
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.hover.transition.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.hover.transition.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/hover/#transition',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/hover/transition' }
  ]
}