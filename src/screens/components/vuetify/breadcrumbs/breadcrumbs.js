export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Breadcrumbs', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.breadcrumbs.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/api/v-breadcrumbs/',
      name: 'vuetify v-breadcrumbs API document'
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/api/v-breadcrumbs-item/',
      name: 'vuetify v-breadcrumbs-item API document'
    },
    // divider
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.breadcrumbs.divider.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.breadcrumbs.divider.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/breadcrumbs/#divider',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/breadcrumbs/divider' },

    // large
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.breadcrumbs.large.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.breadcrumbs.large.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/breadcrumbs/#large',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/breadcrumbs/large' },


    // icon-dividers
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.breadcrumbs.iconDivider.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.breadcrumbs.iconDivider.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/breadcrumbs/#icon-dividers',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/breadcrumbs/iconDivider' },

    // item
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.breadcrumbs.item.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.breadcrumbs.item.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/breadcrumbs/#item',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/breadcrumbs/item' },

  ]
}