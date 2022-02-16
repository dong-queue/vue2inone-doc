export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Alerts', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.alert.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/api/v-alert/',
      name: 'vuetify API document'
    },
    // border
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.alert.border.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.alert.border.intro'}
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/alerts/#border',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/alert/border' },

    // colored-border
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.alert.colorBorder.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.alert.colorBorder.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/alerts/#colored-border',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/alert/colorBorder' },

    // dismissible
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.alert.dismissible.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.alert.dismissible.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/alerts/#dismissible',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/alert/dismissible' }
  ]
}