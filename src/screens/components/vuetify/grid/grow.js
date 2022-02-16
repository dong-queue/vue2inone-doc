export default {
  items: [
    { component: 'container', class: 'grey lighten-5', items: [
      { component: 'row', class: 'mb-6', 'no-gutters': true, itemsfor: 4, items: [
        { component: 'col', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: 'col'}] }
        ]}
      ]},
      { component: 'row', noGutters: true, itemsfor: 2, items: [
        { component: 'col', cols: {value: 'subItem', func: n => n === 1 ? 8 : 4}, items: [
          { component: 'card', class: 'pa-2', tile: true, outlined: true, items: [
            { component: 'text', itemtext: {value: 'subItem', func: n => `col-${n == 1 ? '8' : '4'}`}}
          ]}
        ]}
      ]}
    ]}
  ]
}