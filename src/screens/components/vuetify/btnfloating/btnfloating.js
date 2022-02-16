export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Buttons: Floating Action Button', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.btnfloating.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // display-animation
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.btnfloating.animation.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.btnfloating.animation.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/floating-action-buttons/#display-animation',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/btnfloating/animation' },

    // lateral-screens
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.btnfloating.lateral.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.btnfloating.lateral.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/floating-action-buttons/#lateral-screens',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/btnfloating/lateral' },

    // #small-variant
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.btnfloating.variant.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.btnfloating.variant.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/floating-action-buttons/#small-variant',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/btnfloating/variant' },

    // #speed-dial
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.btnfloating.speed.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.btnfloating.speed.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/floating-action-buttons/#speed-dial',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/btnfloating/speed' },
  ]
}