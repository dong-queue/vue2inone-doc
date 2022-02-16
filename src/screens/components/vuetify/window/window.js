export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Windows', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.window.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.window.usage.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.window.usage.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/windows/#usage',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/window/usage' },

    // account-creation
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.window.account.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.window.account.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/windows/#account-creation',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/window/account' },

    // onboarding
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.window.onboarding.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.window.onboarding.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/windows/#onboarding',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/window/onboarding' }
  ]
}