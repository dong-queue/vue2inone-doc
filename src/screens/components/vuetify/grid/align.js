export default {
  items: [
    { component: 'div', items: [
      { component: 'container', itemsfor: 'alignments', class: 'grey lighten-5 mb-6', items: [
        { component: 'row', align: 'subItem', 'no-gutters': true, style: 'height: 150px', itemsfor: 3, items: [
          { component: 'col', items: [
            { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{component: 'text', itemtext: 'One of three columns'}]}
          ]}
        ]}
      ]},
    ]},
    { component: 'div', items: [
      { component: 'contai', class: 'grey lighten-5', items: [
        { component: 'row', noGutters: true, style: 'height: 150px', itemsfor: 'alignments', items: [
          { component: 'col', alignSelf: 'subItem', items: [
            { component: 'card', class: 'pa-2', outlined: true, tile: true, items: [{ component: 'text', itemtext: 'One of three columns' }]}
          ]}
        ]}
      ]}
    ]}
  ]
}