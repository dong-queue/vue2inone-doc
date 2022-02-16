export default {
  items: [
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Forms', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.form.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // rules
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.form.rules.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.form.rules.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/forms/#rules',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/form/rules' },

    // validation-with-submit-26-clear
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.form.submit.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.form.submit.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/forms/#validation-with-submit-26-clear',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/form/submit' }
  ]
}
