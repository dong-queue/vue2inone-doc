export default {
  items: [
    { component: 'container', class: 'grey lighten-5', items: [
      { component: 'row', class: 'mb-6', noGutters: true, itemsfor: 3, items: [
        { component: 'col', cols: {value: 'subItem', func: n => n === 2 ? 6 : undefined}, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [
            { component: 'text', itemtext: {value: 'subItem', func: n => `${n} of 3 ${n == 2 ? '(wider)' : ''}`}}
          ]}
        ]}
      ]},
      { component: 'row', 'no-gutters': true, itemsfor: 3, items: [
        { component: 'col', cols: {value: 'subItem', func: n => n === 2 ? 5 : undefined}, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [
            { component: 'text', itemtext: { value: 'subItem', func: n => `${n} of 3 ${n == 2 ? '(wider)' : ''}` }}
          ]}
        ]}
      ]}
    ]}
  ]
}