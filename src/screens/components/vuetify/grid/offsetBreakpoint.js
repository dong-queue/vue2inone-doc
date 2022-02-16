export default {
  items: [
    { component: 'contai', class: 'grey lighten-5', items: [
      { component: 'row', class: 'mb-6', 'no-gutters': true, items: [
        { component: 'col', sm: 5, md: 6, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-sm-5 .col-md-6'}] }
        ]},
        { component: 'col', sm: 5, offsetSM: 2, md: 6, offfsetMd: 0, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0'}] }
        ]},
      ]},
      { component: 'row', 'no-gutters': true, items: [
        { component: 'col', sm: 6, md: 5, lg: 6, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-sm-6 .col-md-5 .col-lg-6'}] }
        ]},
        { component: 'col', sm: 6, md: 5, lg: 6, 'offset-md': 2, 'offset-lg': '0', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0'}] }
        ]},
      ]}
    ]}
  ]
}