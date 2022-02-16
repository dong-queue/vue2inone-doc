export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Date pickers', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.date.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // allowed-dates
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.date.allowed.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.date.allowed.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/date-pickers/#allowed-dates',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/date/allowed' },

    // colors
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.date.colors.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.date.colors.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/date-pickers/#colors',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/date/colors' },

    // multiple
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.date.multiple.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.date.multiple.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/date-pickers/#multiple',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/date/multiple' },

    // picker-date
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.date.picker.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.date.picker.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/date-pickers/#picker-date',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/date/picker' },

    // range
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.date.range.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.date.range.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/date-pickers/#range',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/date/range' },

    // date-buttons
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.date.buttons.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.date.buttons.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/date-pickers/#date-buttons',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/date/buttons' }
  ]
}