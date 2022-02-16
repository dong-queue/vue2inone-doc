export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Images', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.image.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // Aspect ratio
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.image.ratio.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.image.ratio.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/images/#aspect-ratio',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/image/ratio' },

    // contain
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.image.contain.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.image.contain.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/images/#contain',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/image/contain' },

    // gradients
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.image.gradients.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.image.gradients.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/images/#gradients',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/image/gradients' },

    // placeholder
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.image.placeholder.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.image.placeholder.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/images/#placeholder',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/image/placeholder' },

    // grid
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.image.grid.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.image.grid.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/images/#grid',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/image/grid' }
  ]
}