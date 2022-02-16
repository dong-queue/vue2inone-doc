export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Dividers', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.divider.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // inset
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.divider.inset.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.divider.inset.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/dividers/#inset',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/divider/inset' },

    // vertical
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.divider.vertical.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.divider.vertical.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/dividers/#vertical',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/divider/vertical' },

    // portrait-view
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.divider.portrait.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.divider.portrait.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/dividers/#portrait-view',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/divider/portrait' },

    // subheaders
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.divider.subheaders.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.divider.subheaders.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/dividers/#subheaders',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/divider/subheaders' },

  ]
}