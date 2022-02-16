export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Footers', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.footer.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.footer.usage.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.footer.usage.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/footer/#usage',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/footer/usage' },

    // padless-footer
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.footer.padless.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.footer.padless.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/footer/#padless-footer',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/footer/padless' },

    // indigo-footer
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.footer.indigo.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.footer.indigo.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/footer/#indigo-footer',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/footer/indigo' },

    // teal-footer
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.footer.teal.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.footer.teal.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/footer/#teal-footer',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/footer/teal' },

  ]
}