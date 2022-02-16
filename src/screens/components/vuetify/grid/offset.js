export default {
  items: [
    { component: 'container', class: 'grey lighten-5', items: [
      { component: 'row', class: 'mb-6', 'no-gutters': true, items: [
        { component: 'col', md: 4, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{component: 'text', itemtext: '.col-md-4'}] }
        ]},
        { component: 'col', md: 4, offsetMd: 4, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-md-4 .offset-md-4'}] }
        ]}
      ]},
      { component: 'row', class: 'mb-6', noGutters: true, items: [
        { component: 'col', md: 3, 'offset-md': 3, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-md-3 .offset-md-3'}] }
        ]},
        { component: 'col', md: 3, 'offset-md': 3, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-md-3 .offset-md-3'}] }
        ]}
      ]},
      { component: 'row', 'no-gutters': true, items: [
        { component: 'col', md: 6, offsetMd: 3, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-md-6 .offset-md-3'}] }
        ]}
      ]}
    ]}
  ]
}