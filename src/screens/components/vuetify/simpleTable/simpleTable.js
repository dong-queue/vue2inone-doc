export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Simple tables', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.simpleTable.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.simpleTable.usage.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.simpleTable.usage.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/simple-tables/#usage',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/simpleTable/usage' },

    // dark
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.simpleTable.dark.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.simpleTable.dark.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/simple-tables/#dark',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/simpleTable/dark' },

    // dense
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.simpleTable.dense.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.simpleTable.dense.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/simple-tables/#dense',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/simpleTable/dense' },

    // fixed-header
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.simpleTable.fixheader.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.simpleTable.fixheader.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/simple-tables/#fixed-header',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/simpleTable/fixheader' }
  ]
}