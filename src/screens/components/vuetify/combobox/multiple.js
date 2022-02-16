export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, items: [
        { component: 'combobox', model: 'select', items: 'items', label: 'Select a favorite activity or create a new one', multiple: true}
      ]},
      { component: 'col', cols: 12, items: [
        { component: 'combobox', model: 'select', items: 'items', label: 'I use chips', multiple: true, chips: true }
      ]},
      { component: 'col', cols: 12, items: [
        { component: 'com', model: 'select', items: 'items', label: 'I use a scoped slot', multiple: true, chips: true,
          slots: [
            { name: 'selection', type: 'data', slotDataName: 'data', items: [
              { component: 'chip', attrs: 'data.attrs', inputValue: 'data.selected', disabled: 'data.disabled', 
                evnts: [{ event: 'click:close', method: 'selectItem', value: 'data'}],
                items: [{ component: 'avatar', class: 'accent white--text', left: true, 
                  items: [{ component: 'text', itemtext: {value: 'data.item', func: (e) => e.slice(0, 1).toUpperCase()} }]
                }],
                itemtext: 'data.item'
              }
            ]}
          ]
        }
      ]},
      { component: 'col', cols: 12, items: [
        { component: 'com', model: 'select', label: `I'm readonly`, chips: true, multiple: true, readonly: true }
      ]}
    ]}
  ]
}