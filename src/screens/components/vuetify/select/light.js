export default {
  items: [
    { component: 'card', items: [
      { component: 'row', class: 'ma-4', align: 'center', items: [
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'select', model: 'value', items: 'items', attach: true, chips: true, label: 'Chips', multiple: true }
        ]},
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'slt', model: 'value', items: 'items', filled: true, chips: true, label: 'Chips', multiple: true }
        ]},
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'slt', model: 'value', items: 'items', outlined: true, chips: true, label: 'Chips', multiple: true }
        ]},
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'slt', model: 'value', items: 'items', solo: true, chips: true, label: 'Chips', multiple: true }
        ]}
      ]}
    ]}
  ]
}