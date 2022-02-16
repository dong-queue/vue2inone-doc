export default {
  items: [
    { component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Autocompletes', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', html: 'vuetify.auto.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/api/v-autocomplete/',
      name: 'vuetify API document'
    },
    // Dense
    { component: 'iterator',
      items: [ 
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.auto.dense.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.auto.dense.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/autocompletes/#dense',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/autocomplete/dense' },
    
    // Filter
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.auto.filter.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.auto.filter.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/autocompletes/#filter',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/autocomplete/filter' },

    // slots
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.auto.slots.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.auto.slots.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/autocompletes/#slots',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/autocomplete/slots' },

    // api-search
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.auto.apisch.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.auto.apisch.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/autocompletes/#apisch',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/autocomplete/apisch' },

    // asynchronous-items
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.auto.async.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.auto.async.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/autocompletes/#asynchronous-items',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/autocomplete/async' },

    // cryptocurrency-selector
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.auto.cryptocurrency.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.auto.cryptocurrency.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/autocompletes/#cryptocurrency-selector',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/autocomplete/cryptocurrency' },

    // state-selector
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.auto.state.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.auto.state.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/autocompletes/#state-selector',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/autocomplete/state' },
  ]
}
