export default {
  items: [
    { component: 'row', itemsfor: 'items', subItemName: 'item', items: [
      {
        component: 'col', cols: 'item.cols', sm: 'item.sm', itemsfor: 'item.col', subItemName: 'attr', items: [
        { component: 'text-field', bind: 'attr'}
      ]}
    ]}
  ]
}