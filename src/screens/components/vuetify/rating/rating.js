export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Ratings', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.rating.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // incremented
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.rating.incremented.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.rating.incremented.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/ratings/#incremented',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/rating/incremented' },

    // item-slot
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.rating.itemslot.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.rating.itemslot.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/ratings/#item-slot',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/rating/itemslot' },

    // advanced-usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.rating.advanced.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.rating.advanced.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/ratings/#advanced-usage',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/rating/advanced' },

    // card-ratings
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.rating.card.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.rating.card.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/ratings/#card-ratings',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/rating/card' }
  ]
}