export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Treeview', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.treeview.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.treeview.usage.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.treeview.usage.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/treeview/#usage',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/treeview/usage' },

    // item-disabled
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.treeview.disabled.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.treeview.disabled.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/treeview/#item-disabled',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/treeview/disabled' },

    // load-children
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.treeview.loadChildren.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.treeview.loadChildren.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/treeview/#load-children',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/treeview/loadChildren' }
  ]
}