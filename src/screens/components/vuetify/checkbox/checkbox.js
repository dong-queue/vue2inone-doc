export default {
  items: [
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Checkboxes', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.checkbox.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // colors
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.checkbox.colors.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.checkbox.colors.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/checkboxes/#colors',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/checkbox/colors' },

    // model-as-array
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.checkbox.array.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.checkbox.array.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/checkboxes/#model-as-array',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/checkbox/array' },

    // model-as-boolean
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.checkbox.boolean.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.checkbox.boolean.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/checkboxes/#model-as-boolean',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/checkbox/boolean' },

    // states
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.checkbox.states.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.checkbox.states.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/checkboxes/#states',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/checkbox/states' },

    // label-slot
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.checkbox.label.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.checkbox.label.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/checkboxes/#label-slot',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/checkbox/label' },

    // inline-text-field
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.checkbox.inline.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.checkbox.inline.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/checkboxes/#inline-text-field',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/checkbox/inline' }
  ]
}
