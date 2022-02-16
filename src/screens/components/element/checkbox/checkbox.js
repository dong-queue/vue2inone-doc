export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Checkbox', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'element.checkbox.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // Basic Usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.checkbox.basic.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/checkbox#basic-usage',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/checkbox/basic' },

    // Checkbox group
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.checkbox.group.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/checkbox#checkbox-group',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/checkbox/group' }

  ]
}