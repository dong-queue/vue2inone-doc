export default {
  items: [
    { component: 'text', class: 'text-start', itemtext: 'radios' },
    { component: 'radioGroup', model: 'radios', mandatory: true, items: [
      { component: 'radio', label: 'Option 1', value: 'radio-1' },
      { component: 'radio', label: 'Option 2', value: 'radio-2' }
    ]}
  ]
}