export default {
  items: [
    { component: 'div', items: [
      { component: 'stepper', altLabels: true, items: [
        { component: 'stepper-header', items: [
          { component: 'stepper-step', step: 1, itemtext: 'Ad unit details' },
          { component: 'divider' },
          { component: 'stepper-step', step: 2, itemtext: 'Ad sizes' },
          { component: 'divider' },
          { component: 'stepper-step', step: 3, itemtext: 'Ad templates' }
        ]}
      ]},
      { component: 'stepper', 'alt-labels': true, class: 'mt-12', items: [
        { component: 'stepper-header', items: [
          { component: 'stepper-step', step: 1, itemtext: 'Ad unit details' },
          { component: 'divider' },
          { component: 'stepper-step', step: 2, itemtext: 'Ad sizes' },
          { component: 'divider' },
          { component: 'stepper-step', step: 3, itemtext: 'Ad templates' }
        ]}
      ]}
    ]}
  ]
}