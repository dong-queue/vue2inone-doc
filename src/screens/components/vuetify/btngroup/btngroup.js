export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Button groups', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.btngroup.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.btngroup.usage.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.btngroup.usage.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/button-groups/#usage',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/btngroup/usage' }

  ]
}