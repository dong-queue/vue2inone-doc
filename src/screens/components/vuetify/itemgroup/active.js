export default {
  items: [
    { component: 'item-group', activeClass: 'primary', items: [
      { component: 'container', items: [
        { component: 'row', itemsfor: 3, items: [
          { component: 'col', cols: 12, md: 4, items: [
            { component: 'item', slots: [
              { name: 'default', type: 'data', slotDataName: 'slot', items: [
                { component: 'card', class: 'd-flex align-center', dark: true, height: '200', 
                  evnts: [{event: 'click', value: 'slot.toggle', func: e => e() }],
                  items: [
                    { component: 'div', if: [{target: 'slot.active', value: 'true' }], class: 'display-3 flex-grow-1 text-center', itemtext: 'Active' }
                  ]
                }
              ]}
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}