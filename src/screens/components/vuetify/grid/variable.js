export default {
  items: [
    { component: 'container', class: 'grey lighten-5', items: [
      { component: 'row', class: 'mb-6', justify: 'center', 'no-gutters': true, items: [
        { component: 'col', lg: 2, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '1 of 3'}] }
        ]},
        { component: 'col', md: 'auto', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: 'Variable width content' }] }
        ]},
        { component: 'col', lg: 2, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '3 of 3' }] }
        ]}
      ]},
      { component: 'row', 'no-gutters': true, items: [
        { component: 'col', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '1 of 3'}] }
        ]},
        { component: 'col', md: 'auto', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: 'Variable width content' }] }
        ]},
        { component: 'col', lg: 2, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '3 of 3' }] }
        ]}
      ]},
    ]}
  ]
}