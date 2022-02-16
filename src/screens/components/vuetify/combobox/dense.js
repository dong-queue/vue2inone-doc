export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, items: [
        { component: 'combobox', model: 'select', items: 'items', label: 'Combobox', multiple: true, outlined: true, dense: true }
      ]}
    ]}
  ]
}