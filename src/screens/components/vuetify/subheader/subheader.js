export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Subheaders', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.subheader.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // inset
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.subheader.inset.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.subheader.inset.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/subheaders/#inset',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/subheader/inset' },

    // grid
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.subheader.grid.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.subheader.grid.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/subheaders/#grid',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/subheader/grid' },

    // menu
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.subheader.menu.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.subheader.menu.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/subheaders/#menu',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/subheader/menu' },

    // social-media
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.subheader.social.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.subheader.social.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/subheaders/#social-media',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/subheader/social' }
  ]
}