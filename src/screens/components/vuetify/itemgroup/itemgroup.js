export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Item groups', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.itemgroup.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // active
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.itemgroup.active.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.itemgroup.active.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/item-groups/#active-class',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/itemgroup/active' },

    // chips
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.itemgroup.chips.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.itemgroup.chips.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/item-groups/#chips',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/itemgroup/chips' },

    // selection
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.itemgroup.selection.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.itemgroup.selection.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/item-groups/#selection',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/itemgroup/selection' }

  ]
}