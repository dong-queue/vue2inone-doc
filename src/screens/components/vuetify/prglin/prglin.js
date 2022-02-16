export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Progress linear', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.prglin.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // buffer
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.prglin.buffer.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.prglin.buffer.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/progress-linear/#buffer-value',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/prglin/buffer' },

    // indeterminate
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.prglin.indeterminate.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.prglin.indeterminate.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/progress-linear/#indeterminate',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/prglin/indeterminate' },

    // reversed
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.prglin.reversed.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.prglin.reversed.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/progress-linear/#reversed',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/prglin/reversed' },

    // query
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.prglin.query.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.prglin.query.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/progress-linear/#query',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/prglin/query' },

    // file-loader
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.prglin.loader.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.prglin.loader.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/progress-linear/#file-loader',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/prglin/loader' },

    // toolbar-loader
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.prglin.toolbar.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.prglin.toolbar.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/progress-linear/#toolbar-loader',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/prglin/toolbar' }
  ]
}