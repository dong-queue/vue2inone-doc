export default {
  items: [
    { component: 'container', class: 'grey lighten-5', itemsfor: 'justify', items: [
      { component: 'row', justify: 'subItem', itemsfor: 2, items: [
        { component: 'col', md: 4, items: [
          { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [
            { component: 'text', itemtext: 'One of two columns' }
          ]}
        ]}
      ]}
    ]}
  ]
}