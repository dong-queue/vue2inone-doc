export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'text-field', model: 'first', label: 'First Name', outlined: true }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'txtfld', model: 'last', label: 'Last Name', outlined: true }
      ]}
    ]}
  ]
}