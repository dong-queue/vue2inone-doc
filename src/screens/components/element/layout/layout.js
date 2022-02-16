export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Layout', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'element.layout.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/layout#utility-classes-for-hiding-elements',
      name: 'element-ui Layout API document'
    },
    // Basic Layout
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.layout.basic.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/layout#basic-layout',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/layout/basic' },

    // Column spacing
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.layout.spacing.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/layout#column-spacing',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/layout/spacing' },

    // Hybrid layout
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.layout.hybrid.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/layout#hybrid-layout',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/layout/hybrid' },

    // Column offset
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.layout.offset.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/layout#column-offset',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/layout/offset' },

    // Alignment
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.layout.alignment.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/layout#alignment',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/layout/alignment' },

    // Responsive Layout
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'element.layout.responsive.heading', class: 'text-h6', textJustify: 'left' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://element.eleme.io/#/en-US/component/layout#responsive-layout',
      name: 'See code in Element UI official document'
    },
    { component: 'code', file: 'components/element/layout/responsive' },
  ]
}