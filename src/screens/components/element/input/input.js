export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Input', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'element.input.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // Basic Usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.input.basic.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/input#basic-usage',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/input/basic' }

  ]
}