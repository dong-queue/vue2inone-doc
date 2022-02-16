export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Sheets', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.sheet.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // elevation
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.sheet.elevation.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.sheet.elevation.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/sheets/#elevation',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/sheet/elevation' },

    // color
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.sheet.color.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.sheet.color.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/sheets/#color',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/sheet/color' }
  ]
}