export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      { component: 'btn', dark: true, color: 'red darken-2', evnts: [{ event: 'click', method: 'changeSnackbar', value: true }], itemtext: 'Open Snackbar' },
      { component: 'snackbar', model: 'snackbar', multiLine: 'multiLine', itemtext: 'text', slots: [
        { name: 'action', type: 'data', slotDataName: 'slot', items: [
          { component: 'btn', attrs: 'slot.attrs', color: 'red', text: true, 
            evnts: [{event: 'click', method: 'changeSnackbar', value: false}], itemtext: 'Close' 
          }
        ]}
      ]}
    ]}
  ]
}