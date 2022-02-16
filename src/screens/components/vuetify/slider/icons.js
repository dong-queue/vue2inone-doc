export default {
  items: [
    { component: 'crd', flat: true, color: 'transparent', items: [
      { component: 'subheader', itemtext: 'Media volume' },
      { component: 'card-text', items: [{ component: 'slider', model: 'media', prependIcon: 'mdi-volume-high' }] },
      { component: 'subhdr', itemtext: 'Alarm volume' },
      { component: 'crdtxt', items: [{ component: 'sld', model: 'alarm', appendIcon: 'mdi-alarm' }]},
      { component: 'subhdr', itemtext: 'Icon click callback' },
      { component: 'crdtxt', items: [
        { component: 'sld', model: 'zoom', 'append-icon': 'mdi-magnify-plus-outline', 'prepend-icon': 'mdi-magnify-minus-outline',
          evnts: [{ event: 'click:append', method: 'zoomIn' }, { event: 'click:prepend', method: 'zoomOut' }]
        }
      ]}
    ]}
  ]
}