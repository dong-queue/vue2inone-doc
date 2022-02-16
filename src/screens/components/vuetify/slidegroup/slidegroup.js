export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Slide groups', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.slidegroup.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // active
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.slidegroup.active.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.slidegroup.active.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/slide-groups/#active-class',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/slidegroup/active' },

    // custom-icons
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.slidegroup.customicon.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.slidegroup.customicon.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/slide-groups/#custom-icons',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/slidegroup/customicon' },

    // pseudo-carousel
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.slidegroup.pseudo.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.slidegroup.pseudo.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/slide-groups/#pseudo-carousel',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/slidegroup/pseudo' }
  ]
}