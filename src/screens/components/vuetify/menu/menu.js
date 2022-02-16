export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Menus', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.menu.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // absolute-without-activator
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.menu.absoluteWithout.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.menu.absoluteWithout.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/menus/#absolute-without-activator',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/menu/absoluteWithout' },

    // close-on-click
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.menu.close.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.menu.close.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/menus/#close-on-click',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/menu/close' },

    // popover-menu
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.menu.popover.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.menu.popover.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/menus/#popover-menu',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/menu/popover' },

    // use-in-components
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.menu.usein.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.menu.usein.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/menus/#use-in-components',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/menu/usein' }
  ]
}