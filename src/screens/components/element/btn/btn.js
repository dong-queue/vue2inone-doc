export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Buttons', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'element.btn.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },
    // Basic Usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.btn.basic.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/button#basic-usage',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/btn/basic' },

    // Disabled Button
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.btn.disable.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/button#disabled-button',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/btn/disable' },

    // Icon Button
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.btn.icon.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/button#icon-button',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/btn/icon' },

    // Button Group
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.btn.group.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/button#button-group',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/btn/group' }
  ]
}