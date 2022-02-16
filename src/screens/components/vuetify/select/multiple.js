export default {
  items: [
    { component: 'row', align: 'center', items: [
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'subheader', itemtext: 'Multiple with persistent hint' }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'select', model: 'e6', items: 'states', menuProps: { maxHeight: '400' }, label: 'Select',
          multiple: true, hint: 'Pick your favorite states', persistentHint: true
        }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'subheader', itemtext: 'Multiple (Chips) with persistent hint' }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'select', model: 'e7', items: 'states', label: 'Select',
          multiple: true, chips: true, hint: 'What are the target regionss', persistentHint: true
        }
      ]}
    ]}
  ]
}