export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Chip groups', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.chipgroup.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // column
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.chipgroup.column.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.chipgroup.column.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/chip-groups/#column',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/chipgroup/column' },

    // filter-results
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.chipgroup.filter.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.chipgroup.filter.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/chip-groups/#filter-results',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/chipgroup/filter' },

    // mandatory
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.chipgroup.mandatory.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.chipgroup.mandatory.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/chip-groups/#mandatory',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/chipgroup/mandatory' },

    // multiple
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.chipgroup.multiple.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.chipgroup.multiple.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/chip-groups/#multiple',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/chipgroup/multiple' },

    // product-card
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.chipgroup.product.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.chipgroup.product.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/chip-groups/#product-card',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/chipgroup/product' },

    // toothbrush-card
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.chipgroup.toothbrush.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.chipgroup.toothbrush.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/chip-groups/#toothbrush-card',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/chipgroup/toothbrush' }

  ]
}