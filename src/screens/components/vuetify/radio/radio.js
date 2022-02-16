export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Radio buttons', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.radio.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // colors
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.radio.colors.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.radio.colors.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/radio-buttons/#colors',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/radio/colors' },

    // direction
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.radio.direction.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.radio.direction.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/radio-buttons/#direction',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/radio/direction' },

    // mandatory
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.radio.mandatory.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.radio.mandatory.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/radio-buttons/#mandatory',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/radio/mandatory' },

    // label
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.radio.label.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.radio.label.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/radio-buttons/#label',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/radio/label' },
  ]
}