export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Range Sliders', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.range.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // disabled
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.range.disabled.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.range.disabled.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/range-sliders/#disabled',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/range/disabled' },

    // min-and-max
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.range.minmax.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.range.minmax.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/range-sliders/#min-and-max',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/range/minmax' },

    // step
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.range.step.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.range.step.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/range-sliders/#step',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/range/step' },

    // vertical-sliders
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.range.vertical.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.range.vertical.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/range-sliders/#vertical-sliders',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/range/vertical' },

    // thumb-label
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.range.thumb.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.range.thumb.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/range-sliders/#thumb-label',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/range/thumb' }
  ]
}