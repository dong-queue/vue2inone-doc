export default {
  items: [
    { component: 'container', items: [
      { component: 'row', items: [
        { component: 'col', cols: 12, md: 4, items: [
          { component: 'skeleton-loader', class: 'mb-6', boilerplate: true, elevation: 2, type: 'card-avatar, article, actions' },
          { component: 'skeleton', class: 'mb-6', boilerplate: true, elevation: 2, type: 'date-picker' }
        ]},
        { component: 'col', cols: 12, md: 4, items: [
          { component: 'skeleton', class: 'mb-6', boilerplate: true, elevation: 2, type: 'article, actions' },
          { component: 'skeleton', class: 'mb-6', boilerplate: true, elevation: 2, type: 'table-heading, list-item-two-line, image, table-tfoot' },
        ]},
        { component: 'col', cols: 12, md: 4, items: [
          { component: 'skeleton', class: 'mb-6', boilerplate: true, elevation: 2, type: 'list-item-avatar, divider, list-item-three-line, card-heading, image, actions' },
          { component: 'skeleton', class: 'mb-6', boilerplate: true, elevation: 2, type: 'list-item-avatar-three-line, image, article' },
        ]}
      ]}
    ]}
  ]
}