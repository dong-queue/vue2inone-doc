export default {
  items: [
    { component: 'row', align: 'center', items: [
      { component: 'col', cols: 6, items: [
        { component: 'subheader', itemtext: 'Prepended icon' }
      ]},
      { component: 'col', cols: 6, items: [
        { component: 'select', model: 'e1', items: 'states', menuProps: 'auto', label: 'Select',
          hideDetails: true, prependIcon: 'mdi-map', singleLine: true
        }
      ]},
      { component: 'col', cols: 6, items: [
        { component: 'subhdr', itemtext: 'Append icon' }
      ]},
      { component: 'col', cols: 6, items: [
        { component: 'select', model: 'e2', items: 'states', 'menu-props': 'auto', label: 'Select',
          'hide-details': true, 'append-outer-icon': 'mdi-map', 'single-line': true
        }
      ]}
    ]}
  ]
}