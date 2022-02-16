export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      { component: 'progress-circular', rotate: '360', size: 100, width: 15, value: 'value', color: 'teal', items: [
        { component: 'text', itemtext: 'value' }
      ]},
      { component: 'progress-circular', rotate: -90, size: 100, width: 15, value: 'value', color: 'primary', items: [
        { component: 'text', itemtext: 'value' }
      ]},
      { component: 'progress-circular', rotate: 90, size: 100, width: 15, value: 'value', color: 'red', items: [
        { component: 'text', itemtext: 'value' }
      ]},
      { component: 'progress-circular', rotate: 180, size: 100, width: 15, value: 'value', color: 'pink', items: [
        { component: 'text', itemtext: 'value' }
      ]},
    ]}
  ]
}