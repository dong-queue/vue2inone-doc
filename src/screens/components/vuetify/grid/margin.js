export default {
  items: [
    { component: 'div', class: 'ma-5 pa-5 justify-center', items: [
      {
        component: 'container', class: 'grey lighten-5', style: 'width: 700px', items: [
        { component: 'row', items: [
          { component: 'col', md: 4, items: [
            { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{component: 'text', itemtext: '.col-md-4'}] }
          ]},
          { component: 'col', md: 4, class: 'ml-auto', items: [
            { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-md-4 .ml-auto'}] }
          ]}
        ]},
        { component: 'row', items: [
          { component: 'col', md: 3, class: 'ml-md-auto', items: [
            { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-md-3 .ml-md-auto'}] }
          ]},
          { component: 'col', md: 3, class: 'ml-md-auto', items: [
            { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-md-3 .ml-md-auto'}] }
          ]}
        ]},
        { component: 'row', items: [
          { component: 'col', md: 'auto', class: 'mr-auto', items: [
            { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-auto .mr-auto'}] }
          ]},
          { component: 'col', cols: 'auto', items: [
            { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-auto'}] }
          ]}
        ]}
      ]}
    ]}
  ]
}