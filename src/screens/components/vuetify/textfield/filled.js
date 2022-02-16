export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'text-field', model: 'first', label: 'First Name', filled: true }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'text-field', model: 'last', label: 'First Name', filled: true }
      ]}
    ]}
  ]
}