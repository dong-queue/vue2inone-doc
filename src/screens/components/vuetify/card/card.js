export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Cards', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.card.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // loading
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.card.loading.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.card.loading.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/cards/#loading',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/card/loading' },

    // outlined
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.card.outlined.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.card.outlined.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/cards/#outlined',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/card/outlined' },

    // card-reveal
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.card.reveal.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.card.reveal.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/cards/#card-reveal',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/card/reveal' },

    // media-with-text
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.card.media.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.card.media.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/cards/#media-with-text',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/card/media' },

    // twitter
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.card.twitter.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.card.twitter.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/cards/#twitter-card',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/card/twitter' },

    // weather-card
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.card.weather.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.card.weather.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/cards/#weather-card',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/card/weather' },
  ]
}