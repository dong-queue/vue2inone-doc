export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Switches', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.switch.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // colors
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.switch.colors.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.switch.colors.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/switches/#colors',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/switch/colors' },

    // flat
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.switch.flat.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.switch.flat.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/switches/#flat',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/switch/flat' },

    // inset
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.switch.inset.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.switch.inset.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/switches/#inset',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/switch/inset' },

    // model-as-boolean
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.switch.boolean.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.switch.boolean.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/switches/#model-as-boolean',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/switch/boolean' },

    // states
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.switch.states.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.switch.states.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/switches/#states',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/switch/states' },

    // label
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.switch.label.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.switch.label.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/switches/#label',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/switch/label' }
  ]
}