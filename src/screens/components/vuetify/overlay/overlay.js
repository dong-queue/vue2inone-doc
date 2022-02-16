export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Overlays', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.overlay.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // Advanced
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.overlay.advanced.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.overlay.advanced.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/overlays/#advanced',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/overlay/advanced' },

    // loader
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.overlay.loader.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.overlay.loader.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/overlays/#loader',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/overlay/loader' }
  ]
}