export default {
  items: [
    { component: 'container', class: 'grey lighten-5', items: [
      { component: 'row', class: 'mb-6', noGutters: true, itemsfor: 2, items: [
        { component: 'col', lg: {value: '_self', func: e => e.cols[e.subItem - 1]}, md: 6,
          sm: { value: '_self', func: e => e.cols[e.subItem - 1] }, 
          items: [
            { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [
              { component: 'text', itemtext: { value: '_self', func: e => `col-${e.cols[e.subItem - 1]}` } }
            ]}
          ] 
        }
      ]},
      { component: 'row', noGutters: true, itemsfor: 3, items: [
        { component: 'col', cols: 'sm', items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [
            { component: 'text', itemtext: 'col' }
          ]}
        ] }
      ]}
    ]}
  ]
}