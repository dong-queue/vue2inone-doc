export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Bottom sheets', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bsheet.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/api/v-bottom-sheet/',
      name: 'vuetify API document'
    },
    // inset
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.bsheet.inset.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bsheet.inset.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/bottom-sheets/#inset',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/bsheet/inset' },

    // model
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.bsheet.model.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bsheet.model.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/bottom-sheets/#model',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/bsheet/model' },


    // persistent
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.bsheet.persistent.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bsheet.persistent.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/bottom-sheets/#persistent',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/bsheet/persistent' },


    // music-player
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.bsheet.music.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bsheet.music.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/bottom-sheets/#music-player',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/bsheet/music' },


    // open-in-list
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.bsheet.open.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.bsheet.open.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/bottom-sheets/#open-in-list',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/bsheet/open' },
  ]
}