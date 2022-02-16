export default {
  items: [
    { component: 'card', flat: true, items: [
      { component: 'cardText', itemsfor: 'items', subItemName: 'item', items: [
        { component: 'row', itemsfor: 'item.row', subItemName: 'row', items: [
          { component: 'col', cols: 12, sm: 4, md: 4, itemsfor: 'row.col', items: [
            { component: 'switch', model: 'ex11', label: 'subItem', color: 'subItem', value: 'subItem', hideDetails: true, }
          ]}
        ]}
      ]}
    ]}
  ]
}