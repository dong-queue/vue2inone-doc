export default {
  items: [
    { component: 'sheet', width: '100%', height: '100%', class: 'pa-12', items: [
      { component: 'swc', model: 'switch1', flat: true, label: { value: 'switch1', func: (e) => `Switch 1: ${e.toString()}`}},
      { component: 'swc', model: 'switch2', flat: true, label: { value: 'switch2', func: (e) => `Switch 2: ${e.toString()}` } }
    ]}
  ]
}