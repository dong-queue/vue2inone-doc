export default {
  items: [
    { component: 'bread', items: 'items', 
      slots: [
        { name: 'item', type: 'data', slotDataName: 'data', items: [
          { component: 'breadItem', href: 'item.href', disabled: 'data.item.disabled', itemtext: 'data.item.text' }
        ]}
      ]
    }
  ]
}