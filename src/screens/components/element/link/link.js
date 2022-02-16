export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Link', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'element.link.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },
    // Basic Usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.link.basic.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/link#basic',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/link/basic' },
    // Icon
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.link.icon.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/link#icon',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/link/icon' }
  ]
}