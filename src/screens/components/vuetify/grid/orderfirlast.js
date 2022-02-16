export default {
  items: [
    { component: 'contai', class: 'grey lighten-5', items: [
      { component: 'row', noGutters: true, items: [
        { component: 'col', order: 'last', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: 'First, but unordered'}] }
        ]},
        { component: 'col', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: 'Second, but last'}] }
        ]},
        { component: 'col', order: 'first', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: 'Third, but first'}] }
        ]}
      ]}
    ]}
  ]
}