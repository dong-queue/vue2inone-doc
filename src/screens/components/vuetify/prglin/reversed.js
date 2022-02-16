export default {
  items: [
    { component: 'div', items: [
      { component: 'progress-linear', color: 'pink', value: 15, reverse: true },
      { component: 'text', itemtext: '<br>' }
    ]},
    { component: 'div', items: [
      { component: 'progress-linear', color: 'lime', indeterminate: true, reverse: true },
      { component: 'text', itemtext: '<br>' }
    ]},
    { component: 'div', items: [
      { component: 'progress-linear', 'buffer-value': 55, color: 'success', reverse: true, stream: true, value: 30 },
      { component: 'text', itemtext: '<br>' }
    ]},
    { component: 'subheader', itemtext: 'In specific cases you may want progress to display in left-to-right mode regardless of the application direction (LTR or RTL):' },
    { component: 'progress-linear', reverse: 'isReverse', value: 15}
  ]
}