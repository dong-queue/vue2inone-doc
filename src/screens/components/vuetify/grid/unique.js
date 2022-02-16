export default {
  items: [
    { component: 'container', class: 'grey lighten-5', items: [
      { component: 'row', items: [
        { component: 'col', cols: 12, md: 8, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{component: 'text', itemtext: '.col-12 .col-md-8'}]}
        ]},
        { component: 'col', cols: 6, md: 4, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{component: 'text', itemtext: '.col-6 .col-md-4'}]}
        ]}
      ]},
      { component: 'row', itemsfor: 3, items: [
        { component: 'col', cols: 6, md: 4, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-6 .col-md-4' }]}
        ]}
      ]},
      { component: 'row', itemsfor: 2, items: [
        { component: 'col', cols: 6, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-6' }] }
        ]}
      ]}
    ]}
  ]
}