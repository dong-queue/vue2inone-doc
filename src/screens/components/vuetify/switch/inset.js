export default {
  items: [
    {
      component: 'sheet', class: 'pa-5', items: [
        { component: 'swc', model: 'switch1', inset: true, label: { value: 'switch1', func: (e) => `Switch 1: ${e.toString()}` } },
        { component: 'swc', model: 'switch2', inset: true, label: { value: 'switch2', func: (e) => `Switch 2: ${e.toString()}` } }
      ]
    }
  ]
}