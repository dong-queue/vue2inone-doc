export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Tabs', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.tab.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // align-with-title
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.tab.alignTitle.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.tab.alignTitle.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/tabs/#align-with-title',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/tab/alignTitle' },

    // center-active
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.tab.center.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.tab.center.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/tabs/#center-active',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/tab/center' },

    // custom-icons
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.tab.customIcon.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.tab.customIcon.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/tabs/#custom-icons',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/tab/customIcon' },

    // icons-and-text
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.tab.icontext.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.tab.icontext.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/tabs/#icons-and-text',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/tab/icontext' },

    // right
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.tab.right.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.tab.right.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/tabs/#right',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/tab/right' },

    // vertical-tabs
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.tab.vertical.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.tab.vertical.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/tabs/#vertical-tabs',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/tab/vertical' }
  ]
}