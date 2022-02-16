export default {
  items: [
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Combobox', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.combobox.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // dense
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.combobox.dense.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.combobox.dense.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/combobox/#dense',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/combobox/dense' },

    // multiple-combobox
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.combobox.multiple.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.combobox.multiple.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/combobox/#multiple-combobox',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/combobox/multiple' },

    // no-data-with-chips
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.combobox.nodata.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.combobox.nodata.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/combobox/#no-data-with-chips',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/combobox/nodata' },

    // advanced-custom-options
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.combobox.advanced.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.combobox.advanced.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/combobox/#advanced-custom-options',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/combobox/advanced' }
  ]
}
