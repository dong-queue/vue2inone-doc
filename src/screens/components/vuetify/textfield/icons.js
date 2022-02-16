export default {
  items: [
    { component: 'row', itemsfor: 'items', subItemName: 'item', items: [
      {
        component: 'col', cols: 12, sm: 6, itemsfor: 'item.col', subItemName: 'attr', items: [
        { component: 'text-field', bind: 'attr'}
      ]}
    ]}
  ]
}