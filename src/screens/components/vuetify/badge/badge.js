export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Badges', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.badge.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/api/v-badge/',
      name: 'vuetify API document'
    },
    // customization-options
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.badge.custom.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.badge.custom.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/badges/#customization-options',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/badge/custom' },

    // dynamic-notifications
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.badge.notifications.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.badge.notifications.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/badges/#dynamic-notifications',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/badge/notifications' },

    // show-on-hover
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.badge.hover.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.badge.hover.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/badges/#show-on-hover',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/badge/hover' },

    // tabs
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.badge.tabs.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.badge.tabs.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/badges/#tabs',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/badge/tabs' },
  ]
}