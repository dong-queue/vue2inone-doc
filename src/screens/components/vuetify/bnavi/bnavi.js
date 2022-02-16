export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Bottom navigation', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bnavi.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/api/v-bottom-navigation/',
      name: 'vuetify API document'
    },
    // color
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.bnavi.color.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bnavi.color.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/bottom-navigation/#color',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/bnavi/color' },

    // grow
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.bnavi.grow.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bnavi.grow.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/bottom-navigation/#grow',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/bnavi/grow' },

    // hide on scroll
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.bnavi.hide.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bnavi.hide.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/bottom-navigation/#hide-on-scroll',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/bnavi/hide' },

    // horizantal
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.bnavi.horizontal.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bnavi.horizontal.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/bottom-navigation/#horizontal',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/bnavi/horizontal' },

    // // scroll-threshold
    // {
    //   component: 'iterator',
    //   items: [
    //     { component: 'div', class: 'py-4' },
    //     { component: 'text', itemtext: 'vuetify.bnavi.scroll.heading', class: 'text-h6', textJustify: 'left' },
    //     { component: 'text', itemtext: 'vuetify.bnavi.scroll.intro' }
    //   ]
    // },
    // {
    //   component: 'link', class: 'ml-4',
    //   link: 'https://vuetifyjs.com/en/components/bottom-navigation/#scroll-threshold',
    //   name: 'See code in vuetify official document'
    // },
    // { component: 'code', file: 'components/vuetify/bnavi/scroll' },

    // shift
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.bnavi.shift.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bnavi.shift.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/bottom-navigation/#shift',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/bnavi/shift' },

    // toggle
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.bnavi.toggle.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bnavi.toggle.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/bottom-navigation/#toggle',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/bnavi/toggle' },
  ]
}