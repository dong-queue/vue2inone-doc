export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, items: [
        { component: 'text-field', model: 'message', appendIcon: {value: 'marker', func: (e) => e ? 'mdi-map-marker' : 'mdi-map-marker-off'},
          appendOuterIcon: {value: 'message', func: (e) => e ? 'mdi-send' : 'mdi-microphone' },
          prependIcon: {value: '_self', func: (e) => e.icons[e.iconIndex]}, filled: true, clearIcon: 'mdi-close-circle',
          clearable: true, label: 'Message', type: 'text', 
          evnts: [
            { event: 'click:append', method: 'toggleMarker' },
            { event: 'click:append-outer', method: 'sendMessage' },
            { event: 'click:prepend', method: 'changeIcon' },
            { event: 'click:clear', method: 'clearMessage' }
          ]
        }
      ]}
    ]}
  ]
}