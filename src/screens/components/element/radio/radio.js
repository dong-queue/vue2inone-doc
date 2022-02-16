export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Radio', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'element.radio.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // Basic Usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.radio.basic.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/radio#basic-usage',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/radio/basic' },

    // Radio button group
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.radio.group.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/radio#radio-button-group',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/radio/group' }

  ]
}