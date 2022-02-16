export default {
  items: [
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Inputs', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.input.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // error
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.input.error.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.input.error.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/inputs/#error-count',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/input/error' },
    { component: 'code', file: 'components/vuetify/input/error2' },

    // hide-details
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.input.hide.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.input.hide.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/inputs/#hide-details',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/input/hide' },

    // hint
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.input.hint.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.input.hint.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/inputs/#hint',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/input/hint' },

    // loading
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.input.loading.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.input.loading.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/inputs/#loading',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/input/loading' },

    // rules
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.input.rules.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.input.rules.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/inputs/#rules',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/input/rules' },

    // success
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.input.success.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.input.success.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/inputs/#success',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/input/success' },

    // slot-clicks
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.input.sclick.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.input.sclick.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/inputs/#slot-clicks',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/input/sclick' },

    // // append-and-prepend
    // {
    //   component: 'iterator',
    //   items: [
    //     { component: 'div', itemtext: 'vuetify.input.apppre', class: 'ma-0', textJustify: 'left' },
    //   ]
    // },
    // {
    //   component: 'link', class: 'ml-4',
    //   link: 'https://vuetifyjs.com/en/components/inputs/#append-and-prepend',
    //   name: 'See code in vuetify official document'
    // },
    // { component: 'code', file: 'components/vuetify/input/apppre' }
  ]
}
