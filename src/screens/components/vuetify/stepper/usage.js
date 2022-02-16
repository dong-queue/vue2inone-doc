export default {
  items: [
    { component: 'stepper', model: 'e1', items: [
      {
        component: 'stepper-header', items: [
          { component: 'stepper-step', editable: true, complete: { value: 'e1', func: e => e > 1 }, step: 1, itemtext: 'Name of step 1', evnts: [{ event: 'click', method: 'test' }] },
          { component: 'divider' },
          { component: 'stepper-step', editable: true, complete: { value: 'e1', func: e => e > 2 }, step: 2, itemtext: 'Name of step 2' },
          { component: 'divider' },
          { component: 'stepper-step', editable: true, step: 3, itemtext: 'Name of step 3' }
        ]
      },
      {
        component: 'stepper-items', items: [
          { component: 'stepper-content', step: 1, items: [
            { component: 'card', class: 'mb-12', color: 'grey lighten-1', height: '200px' },
            { component: 'btn', color: 'primary', evnts: [{event: 'click', method: 'move', value: 2}], itemtext: 'Continue' },
            { component: 'btn', text: true, itemtext: 'Cancel' }
          ]},
          { component: 'stepper-content', step: 2, items: [
            { component: 'card', class: 'mb-12', color: 'grey lighten-1', height: '200px' },
            { component: 'btn', color: 'primary', evnts: [{ event: 'click', method: 'move', value: 3 }], itemtext: 'Continue' },
            { component: 'btn', text: true, itemtext: 'Cancel' }
          ]},
          { component: 'stepper-content', step: 3, items: [
            { component: 'card', class: 'mb-12', color: 'grey lighten-1', height: '200px' },
            { component: 'btn', color: 'primary', evnts: [{ event: 'click', method: 'move', value: 1 }], itemtext: 'Continue' },
            { component: 'btn', text: true, itemtext: 'Cancel' }
          ]}
        ]
      }
    ]}
  ]
}