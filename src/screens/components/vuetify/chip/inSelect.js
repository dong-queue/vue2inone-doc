export default {
  items: [
    {
      component: 'combobox', model: 'chipList', items: 'items', chips: true, clearable: true,
      label: 'Your favorite hobbies',
      multiple: true, prependIcon: 'mdi-filter-variant', solo: true,
      slots: [
        { name: 'selection', type: 'data', slotDataName: 'slot',
          items: [
            {
              component: 'chip', inputValue: 'slot.selected', close: true, attrs: 'slot.attrs',
              evnts: [
                { event: 'click', value: 'slot.select', func: (select, event) => select(event) },
                { event: 'click:close', method: 'remove', value: 'slot.item' }
              ],
              items: [
                { component: 'text', itemtext: 'slot.item' },
                { component: 'text', itemtext: '(interest)' }
              ]
            }
          ]
        }
      ]
    }
  ]
}