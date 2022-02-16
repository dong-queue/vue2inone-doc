export default {
  items: [
    { component: 'select', model: 'value', items: 'items', label: 'Select item', multiple: true,
      slots: [
        { name: 'selection', type: 'data', slotDataName: 'slot', items: [
          { component: 'chip', if: [{ target: 'slot.index', value: '0' }], itemtext: 'slot.item' },
          { component: 'text', if: [{target: 'slot.index', value: '1'}], class: 'grey--text caption', 
            itemtext: {value: '_self', func: ({value}) => `(+${value.length -1} others)`}
          }
        ]}
      ]
    }
  ]
}