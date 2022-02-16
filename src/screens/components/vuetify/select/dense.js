export default {
  items: [
    { component: 'row', align: 'center', items: [
      { component: 'col', class: 'd-flex', cols: 12, sm: 6, items: [
        { component: 'select', items: 'items', label: 'Standard', dense: true }
      ]},
      { component: 'col', class: 'd-flex', cols: 12, sm: 6, items: [
        { component: 'select', items: 'items', filled: true, label: 'Filled style', dense: true }
      ]},
      { component: 'col', class: 'd-flex', cols: 12, sm: 6, items: [
        { component: 'select', items: 'items', outlined: true, label: 'Outlined style', dense: true }
      ]},
      { component: 'col', class: 'd-flex', cols: 12, sm: 6, items: [
        { component: 'select', items: 'items', solo: true, label: 'Solo style', dense: true }
      ]}
    ]}
  ]
}