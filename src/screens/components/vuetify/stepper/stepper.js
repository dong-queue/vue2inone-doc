export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Steppers', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.stepper.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.stepper.usage.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.stepper.usage.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/steppers/#usage',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/stepper/usage' },

    // alternate-label
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.stepper.label.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.stepper.label.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/steppers/#alternate-label',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/stepper/label' },

    // non-linear
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.stepper.nonlinear.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.stepper.nonlinear.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/steppers/#non-linear',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/stepper/nonlinear' },

    // vertical
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.stepper.vertical.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.stepper.vertical.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/steppers/#vertical',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/stepper/vertical' },

    // alternative-label-with-errors
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.stepper.labelerror.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.stepper.labelerror.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/steppers/#alternative-label-with-errors',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/stepper/labelerror' },

    // dynamic-steps
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.stepper.dynamic.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.stepper.dynamic.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/steppers/#dynamic-steps',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/stepper/dynamic' },

    // optional-steps
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.stepper.optional.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.stepper.optional.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/steppers/#optional-steps',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/stepper/optional' }
  ]
}