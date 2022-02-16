export default {
  items: [
    { component: 'crd', flat: true, color: 'transparent', items: [
      { component: 'subhdr', itemtext: 'Show ticks when using slider' },
      { component: 'crdtxt', items: [{ component: 'sld', model: 'value', step: 10, ticks: true }]},
      { component: 'subhdr', itemtext: 'Always show ticks' },
      { component: 'crdtxt', items: [{ component: 'sld', model: 'value', step: 10, ticks: 'always' }] },
      { component: 'subhdr', itemtext: 'Tick size' },
      { component: 'crdtxt', items: [{ component: 'sld', model: 'value', step: 10, ticks: 'always', tickSize: 4 }] },
      { component: 'subhdr', itemtext: 'Tick labels' },
      { component: 'crdtxt', items: [{ component: 'sld', model: 'fruits', step: 1, tickLabels: 'ticksLabels', max: 3, ticks: 'always', 'tick-size': 4 }] }
    ]}
  ]
}