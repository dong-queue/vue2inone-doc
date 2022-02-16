export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'List item groups', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.listitemgroup.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // active
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.listitemgroup.active.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.listitemgroup.active.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/list-item-groups/#active-class',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/listitemgroup/active' },

    // flat-list
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.listitemgroup.flat.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.listitemgroup.flat.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/list-item-groups/#flat-list',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/listitemgroup/flat' },

    // selection-controls
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.listitemgroup.selection.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.listitemgroup.selection.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/list-item-groups/#selection-controls',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/listitemgroup/selection' }

  ]
}