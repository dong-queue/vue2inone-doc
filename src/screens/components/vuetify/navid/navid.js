export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Navigation drawers', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.navid.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // bottom-drawer
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.navid.bottom.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.navid.bottom.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/navigation-drawers/#bottom-drawer',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/navid/bottom' },

    // expand-on-hover
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.navid.hover.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.navid.hover.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/navigation-drawers/#expand-on-hover',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/navid/hover' },

    // images
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.navid.images.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.navid.images.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/navigation-drawers/#images',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/navid/images' },

    // mini-variant
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.navid.mini.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.navid.mini.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/navigation-drawers/#mini-variant',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/navid/mini' },

    // permanent-and-floating
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.navid.floating.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.navid.floating.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/navigation-drawers/#permanent-and-floating',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/navid/floating' },

    // combined-drawer
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.navid.combined.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.navid.combined.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/navigation-drawers/#combined-drawer',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/navid/combined' }
  ]
}