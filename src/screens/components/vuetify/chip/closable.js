export default {
  items: [{
    component: 'div', class: 'text-center',
    items: [
      { component: 'btn', if: [
        { target: 'chip1', value: 'false' }, 
        { target: 'chip2', value: 'false' },
        { target: 'chip3', value: 'false' },
        { target: 'chip4', value: 'false' },
      ],
        close: true, color: 'primary', dark: true, itemtext: 'Reset Chips',
        evnts: [{ event: 'click', method: 'reset'}] 
      },
      {
        component: 'chip', if: [{ target: 'chip1', value: 'true'}], 
        class: 'ma-2', close: true,
        itemtext: 'Closable',
        evnts: [{ event: 'click:close', method: 'closeChip', value: {name: 'chip1'} }]
      },
      {
        component: 'chip', if: [{ target: 'chip2', value: 'true' }], class: 'ma-2', close: true, 
        itemtext: 'Remove', color: 'red', textColor: 'white',
        evnts: [{ event: 'click:close', method: 'closeChip', value: { name: 'chip2' } }]
      },
      {
        component: 'chip', if: [{ target: 'chip3', value: 'true' }], class: 'ma-2', close: true,
        itemtext: 'Success', color: 'green', outlined: true,
        evnts: [{ event: 'click:close', method: 'closeChip', value: { name: 'chip3' } }]
      },
      {
        component: 'chip', if: [{ target: 'chip4', value: 'true' }], class: 'ma-2', close: true,
        itemtext: 'Complete', color: 'orange', label: true, outlined: true,
        evnts: [{ event: 'click:close', method: 'closeChip', value: { name: 'chip4' } }]
      }
    ]
  }]
}