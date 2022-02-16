export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Parallax', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.parallax.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // content
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.parallax.content.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.parallax.content.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/parallax/#content',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/parallax/content' },

    // custom-height
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.parallax.height.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.parallax.height.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/parallax/#custom-height',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/parallax/height' }
  ]
}