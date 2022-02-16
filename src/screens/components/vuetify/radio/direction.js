export default {
  items: [
    { component: 'radioGroup', model: 'column', column: true, items: [
      { component: 'radio', label: 'Option 1', value: 'radio-1' },
      { component: 'radio', label: 'Option 2', value: 'radio-2' }
    ]},
    { component: 'divider' },
    { component: 'radioGroup', model: 'row', row: true, items: [
      { component: 'radio', label: 'Option 1', value: 'radio-1' },
      { component: 'radio', label: 'Option 2', value: 'radio-2' }
    ]}
  ]
}