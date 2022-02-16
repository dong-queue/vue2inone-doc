export default {
  items: [
    { component: 'contai', class: 'grey lighten-5', items: [
      { component: 'row', 'no-gutters': true, items: [
        { component: 'col', cols: 12, sm: 6, md: 8, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{component: 'text', itemtext: '.col-12 .col-sm-6 .col-md-8'}]}
        ]},
        { component: 'col', cols: 6, md: 4, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{component: 'text', itemtext: '.col-6 .col-md-4'}]}
        ]}
      ]}
    ]}
  ]
}