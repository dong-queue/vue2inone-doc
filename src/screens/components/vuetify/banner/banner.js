export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Banners', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.banner.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/api/v-banner/',
      name: 'vuetify API document'
    },
    // single-line
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.banner.single.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.banner.single.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/banners/#single-line',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/banner/single' },

    // icon-click
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.banner.iconClick.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.banner.iconClick.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/banners/#icon-click',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/banner/iconClick' },
  ]
}