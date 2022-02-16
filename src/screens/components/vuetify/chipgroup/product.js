export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: 400, items: [
      { component: 'card-title', items: [
        { component: 'text', class: 'display-1', itemtext: 'Shirt Blouse' },
        { component: 'spacer' },
        { component: 'text', class: 'title', itemtext: '$44.50' }
      ]},
      { component: 'card-text', itemtext: 'Our blouses are available in 8 colors. You can custom order a built-in arch support for any of the models.' },
      { component: 'divider', class: 'mx-4' },
      { component: 'card-text', items: [
        { component: 'text', class: 'subheading', itemtext: 'Select size' },
        { component: 'chip-group', model: 'selection', activeClass: 'deep-purple--text text--accent-4', mandatory: true, itemsfor: 'sizes', items: [
          { component: 'chip', value: 'subItem', itemtext: 'subItem' }
        ]}
      ]},
      { component: 'card-actions', items: [
        { component: 'btn', block: true, class: 'white--text', color: 'deep-purple accent-4', itemtext: 'Add to Cart' }
      ]}
    ]}
  ]
}