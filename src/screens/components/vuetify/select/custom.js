export default {
  items: [
    {
      component: 'row', align: 'center', items: [
        { component: 'col', cols: 6, items: [
          { component: 'subheader', itemtext: 'Custom items' },
        ]},
        { component: 'col', cols: 6, items: [
          {
            component: 'select', model: 'select', hint: { value: 'select', func: (e) => `${e.state}, ${e.abbr}`},
            items: 'items', itemText: 'state', itemValue: 'abbr', label: 'Select', persistentHint: true, returnObject: true,
            singleLine: true
          }
        ]}
      ]
    },
  ]
}