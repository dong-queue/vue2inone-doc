export default {
  items: [
    { component: 'div', items: [
      { component: 'stepper', value: 1, items: [
        { component: 'stepper-header', items: [
          { component: 'stepper-step', step: 1, itemtext: 'Select campaign settings' },
          { component: 'divider' },
          { component: 'stepper-step', step: 2, itemtext: 'Create an ad group', items: [{component: 'text', html: '<small>Optional</small>'}] },
          { component: 'divider' },
          { component: 'stepper-step', step: 3, itemtext: 'Create an ad' }
        ]}
      ]},
      { component: 'stepper', value: 2, class: 'mt-12', items: [
        { component: 'stepper-header', items: [
          { component: 'stepper-step', step: 1, itemtext: 'Select campaign settings' },
          { component: 'divider' },
          { component: 'stepper-step', step: 2, itemtext: 'Create an ad group', items: [{component: 'text', html: '<small>Optional</small>'}] },
          { component: 'divider' },
          { component: 'stepper-step', step: 3, itemtext: 'Create an ad' }
        ]}
      ]}
    ]}
  ]
}