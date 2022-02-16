export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Snackbars', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.snackbar.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // multiline
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.snackbar.multiline.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.snackbar.multiline.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/snackbars/#multi-line',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/snackbar/multiline' },

    // timeout
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.snackbar.timeout.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.snackbar.timeout.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/snackbars/#timeout',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/snackbar/timeout' },

    // variants
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.snackbar.variants.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.snackbar.variants.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/snackbars/#variants',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/snackbar/variants' }
  ]
}