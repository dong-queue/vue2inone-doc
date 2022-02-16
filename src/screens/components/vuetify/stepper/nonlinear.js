export default {
  items: [
    { component: 'div', items: [
      { component: 'stepper', nonlinear: true, items: [
        { component: 'stepper-header', items: [
          { component: 'stepper-step', editable: true, step: 1, itemtext: 'Select campaign settings' },
          { component: 'divider' },
          { component: 'stepper-step', editable: true, step: 2, itemtext: 'Create an ad group' },
          { component: 'divider' },
          { component: 'stepper-step', editable: true, step: 3, itemtext: 'Create an ad' }
        ]}
      ]},
      { component: 'stepper', class: 'mt-12', nonlinear: true, items: [
        { component: 'stepper-header', items: [
          { component: 'stepper-step', complete: true, editable: true, step: 1, itemtext: 'Select campaign settings' },
          { component: 'divider' },
          { component: 'stepper-step', editable: true, step: 2, itemtext: 'Create an ad group' },
          { component: 'divider' },
          { component: 'stepper-step', complete: true, editable: true, step: 3, itemtext: 'Create an ad' }
        ]}
      ]},
      { component: 'stepper', class: 'mt-12', nonlinear: true, value: 3, items: [
        { component: 'stepper-header', items: [
          { component: 'stepper-step', complete: true, editable: true, step: 1, itemtext: 'Select campaign settings' },
          { component: 'divider' },
          { component: 'stepper-step', complete: true, editable: true, step: 2, itemtext: 'Create an ad group' },
          { component: 'divider' },
          { component: 'stepper-step', complete: true, editable: true, step: 3, itemtext: 'Create an ad' }
        ]}
      ]}
    ]}
  ]
}