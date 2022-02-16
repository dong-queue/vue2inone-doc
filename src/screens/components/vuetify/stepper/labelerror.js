export default {
  items: [
    { component: 'stepper', 'alt-labels': true, items: [
      { component: 'stepper-header', items: [
        { component: 'stepper-step', step: 3, complete: true, itemtext: 'Ad type' },
        { component: 'divider' },
        { component: 'stepper-step', step: 4, complete: true, itemtext: 'Ad style' },
        { component: 'divider' },
        { component: 'stepper-step', step: 5, rules: [() => false], itemtext: 'Custom channels', items: [{component: 'text', html: '<small>Alert message</small>'}] },
        { component: 'divider' },
        { component: 'stepper-step', step: 6, itemtext: 'Get code' }
      ]}
    ]}
  ]
}