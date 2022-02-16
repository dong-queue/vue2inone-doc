export default {
  items: [
    { component: 'div', class: 'transparent', items: [
      { component: 'progress-linear', model: 'value', 'buffer-value': 'bufferValue' },
      { component: 'text', itemtext: '<br>'}
    ]},
    { component: 'div', items: [
      { component: 'progress-linear', model: 'value', 'buffer-value': 'bufferValue', color: 'purple' },
      { component: 'text', itemtext: '<br>' }
    ]},
    { component: 'div', items: [
      { component: 'progress-linear', model: 'value', 'buffer-value': 'bufferValue', color: 'red lighten-2' },
      { component: 'text', itemtext: '<br>' }
    ]},
    { component: 'div', items: [
      { component: 'progress-linear', model: 'value', 'buffer-value': 'bufferValue', color: 'black' }
    ]}
  ]
}