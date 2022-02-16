export default {
  items: [
    { component: 'row', items: [
      { component: 'col', items: [
        { component: 'sheet', height: '400', items: [
          { component: 'calendar', color: 'primary', type: 'day', 
            slots: [
              {
                name: 'day-header', type: 'data', slotDataName: 'data', items: [
                  { component: 'text', if: [{ target: 'data.present' }], class: 'text-left', itemtext: 'Today' }
              ]},
              {
                name: 'interval', type: 'data', items: [
                { component: 'div', class: 'text-center', itemtext: { value: 'slotData.hour', func: function (hour) { return String(hour || '0' ).concat(` o'clock`) } } }
              ]}
            ]
          }
        ]}
      ]}
    ]}
  ]
}