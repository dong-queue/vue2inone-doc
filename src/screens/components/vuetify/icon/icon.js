export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Icons', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.icon.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // color
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.icon.color.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.icon.color.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/icons/#color',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/icon/color' },

    // click
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.icon.click.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.icon.click.intro' }
        
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/icons/#click',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/icon/click' },

    // buttons
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.icon.buttons.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.icon.buttons.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/icons/#buttons',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/icon/buttons' }
  ]
}