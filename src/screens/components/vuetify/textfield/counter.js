export default {
  items: [
    { component: 'form', items: [
      { component: 'row', items: [
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'text-field', model: 'message1', label: 'Regular', clearable: true }
        ]},
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'txtfld', model: 'message2', solo: true, label: 'Solo', clearable: true }
        ]},
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'text-field', model: 'message3', filled: true, label: 'Filled', clearable: true }
        ]},
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'txtfld', model: 'message4', outlined: true, label: 'Outlined', clearable: true }
        ]},
      ]}
    ]}
  ]
}