export default {
  items: [
    { component: 'row', items: [
      { component: 'col', items: [
        { component: 'sheet', height: '500', items: [
          { component: 'calendar', now: 'today', value: 'today', color: 'primay',
            slots: [
              { name: 'day', type: 'data', items: [
                { component: 'row', class: 'fill-height', itemsfor: 'tracked[slotData.date]', 
                  items: [
                    { component: 'sheet', if: [{ target: 'slotData.past' }], title: 'subItem.category', color: 'subItem.color', 
                      width: 'subItem.percent', height: '100%', tile: true 
                    }
                ]}
              ]}
            ]
          }
        ]}
      ]}
    ]}  
  ]   
}