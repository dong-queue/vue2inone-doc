export default {
  items: [
    { component: 'row', itemsfor: 'items', items: [
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'text-field', value: 'subItem.value', bind: 'subItem'}
      ]}
    ]}
  ]
}