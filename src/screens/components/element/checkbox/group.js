export default {
  items: [
    { component: 'checkbox-group', framework: 'el', model: 'checkList', items: [
      { component: 'checkbox', framework: 'el', label: 'Option A', itemtext: 'Option A' },
      { component: 'checkbox', framework: 'el', label: 'Option B', itemtext: 'Option B' },
      { component: 'checkbox', framework: 'el', label: 'Option C', itemtext: 'Option C' },
      { component: 'checkbox', framework: 'el', label: 'disabled', itemtext: 'disabled', disabled: true },
      { component: 'checkbox', framework: 'el', label: 'selected and disabled', itemtext: 'selected and disabled', disabled: true }
    ]}
  ]
}