export default {
  items: [
    { component: 'row', class: 'light--text', items: [
      { component: 'col', cols: 4, items: [
        { component: 'text', itemtext: 'on'}
      ]},
      { component: 'col', cols: 4, items: [
        { component: 'text', itemtext: 'off' }
      ]},
      { component: 'col', cols: 4, items: [
        { component: 'text', itemtext: 'indeterminate' }
      ]}
    ]},
    { component: 'row', items: [
      { component: 'col', cols: 4, items: [
        { component: 'checkbox', inputValue: true, value: true }
      ]},
      { component: 'col', cols: 4, items: [
        { component: 'checkbox', value: true }
      ]},
      { component: 'col', cols: 4, items: [
        { component: 'checkbox', indeterminate: true, value: true }
      ]}
    ]},
    { component: 'row', class: 'light--text', items: [
      { component: 'col', cols: 4, items: [
        { component: 'text', itemtext: 'on disabled' }
      ]},
      { component: 'col', cols: 4, items: [
        { component: 'text', itemtext: 'off disabled' }
      ]}
    ]},
    { component: 'row', items: [
      { component: 'col', cols: 4, items: [
        { component: 'checkbox', inputValue: true, value: true }
      ]},
      { component: 'col', cols: 4, items: [
        { component: 'checkbox', value: true, disabled: true }
      ]}
    ]}
  ]
}