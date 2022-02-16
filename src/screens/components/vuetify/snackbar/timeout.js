export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      { component: 'btn', dark: true, color: 'orange darken-2', evnts: [{event: 'click', method: 'changeSnackbar', value: true}], itemtext: 'Open Snackbar' },
      { component: 'snackbar', model: 'snackbar', timeout: 'timeout', itemtext: 'text', slots: [
        { name: 'action', type: 'data', slotDataName: 'slot', items: [
          { component: 'btn', color: 'blue', text: true, attrs: 'slot.attrs',
            evnts: [{event: 'click', method: 'changeSnackbar', value: false}], itemtext: 'Close Snackbar'
          }
        ]}
      ] }
    ]}
  ]
}