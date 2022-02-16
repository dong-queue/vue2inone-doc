export default {
  items: [
    { component: 'container', class: 'grey lighten-5', items: [
      { component: 'row', items: [
        { component: 'col', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col'}] }
        ]},
        { component: 'spacer' },
        { component: 'col', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col'}] }
        ]},
      ]},
      { component: 'row', items: [
        { component: 'col', cols: 'auto', lg: 3, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-auto'}] }
        ]},
        { component: 'spacer' },
        { component: 'col', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col'}] }
        ]},
        { component: 'spacer' },
        { component: 'col', md: 5, items: [
          { component: 'card', class: 'pa-2', cols: 'auto', outlined: true, tile: true, items: [{ component: 'text', itemtext: '.col-md-5'}]}
        ]}
      ]},
    ]}
  ]
}