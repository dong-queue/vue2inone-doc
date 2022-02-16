export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Toolbar', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.toolbar.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // Include text, button and autocomplete
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.toolbar.include.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.toolbar.include.intro' }
      ]
    },
    { component: 'code', file: 'components/vuetify/toolbar/include' },

    // Backgroud
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.toolbar.background.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.toolbar.background.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/toolbars/#background',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/toolbar/background' },

    // Collapse
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.toolbar.collapse.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.toolbar.collapse.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/toolbars/#collapse',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/toolbar/collapse' },

    // Dense
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.toolbar.dense.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.toolbar.dense.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/toolbars/#dense-toolbars',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/toolbar/dense' },

    // Extension height
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.toolbar.height.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.toolbar.height.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/toolbars/#extended',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/toolbar/height' },

    // Floating with search
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.toolbar.floating.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.toolbar.floating.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/toolbars/#extension-height',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/toolbar/floating' },

    // Light and Dark
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.toolbar.light.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.toolbar.light.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/toolbars/#light-and-dark',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/toolbar/light' },

    // Prominent toolbars
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.toolbar.prominent.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.toolbar.prominent.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/toolbars/#prominent-toolbars',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/toolbar/prominent' },

    // Contextual action bar
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.toolbar.contextual.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.toolbar.contextual.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/toolbars/#contextual-action-bar',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/toolbar/contextual' },

    // Flexible and card toolbar
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.toolbar.flexible.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.toolbar.flexible.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/toolbars/#flexible-and-card-toolbar',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/toolbar/flexible' },

    // Variations
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.toolbar.variations.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.toolbar.variations.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/toolbars/#variations',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/toolbar/variations' }
  ]
}