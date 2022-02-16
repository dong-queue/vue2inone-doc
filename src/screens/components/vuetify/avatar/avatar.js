export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Avatar', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.avatar.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/api/v-avatar/',
      name: 'vuetify API document'
    },
    // Size
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.avatar.size.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.avatar.size.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/avatars/#size',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/avatar/size' },
    
    // tile
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.avatar.tile.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.avatar.tile.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/avatars/#tile',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/avatar/tile' },

    // default
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.avatar.default.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.avatar.default.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/avatars/#default',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/avatar/default' },
    
    // advanced
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.avatar.advanced.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.avatar.advanced.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/avatars/#advanced-usage',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/avatar/advanced' },

    // profile-card
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.avatar.profile.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.avatar.profile.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/avatars/#profile-card',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/avatar/profile' },
  ]
}