export default {
  items: [
    { component: 'stepper', model: 'e6', vertical: true, items: [
      { component: 'stepper-step', complete: {value: 'e6', func: e => e > 1}, step: 1, itemtext: 'Select an app', items: [
        { component: 'text', itemtext: '<small>Summarize if needed</small>'}
      ]},
      { component: 'stepper-content', step: 1, items: [
        { component: 'card', color: 'grey lighten-1', class: 'mb-12', height: '200px' },
        { component: 'btn', color: 'primary', evnts: [{ event: 'click', method: 'changeStep', value: 2 }], itemtext: 'Continue' },
        { component: 'btn', text: true, itemtext: 'Cancel' }
      ]},
      { component: 'stepper-step', complete: {value: 'e6', func: e => e > 2}, step: 2, itemtext: 'Configure analytics for this app' },
      { component: 'stepper-content', step: 2, items: [
        { component: 'card', color: 'grey lighten-1', class: 'mb-12', height: '200px' },
        { component: 'btn', color: 'primary', evnts: [{ event: 'click', method: 'changeStep', value: 3 }], itemtext: 'Continue' },
        { component: 'btn', text: true, itemtext: 'Cancel' }
      ]},
      { component: 'stepper-step', complete: {value: 'e6', func: e => e > 3}, step: 3, itemtext: 'Select an ad format and name ad unit' },
      { component: 'stepper-content', step: 3, items: [
        { component: 'card', color: 'grey lighten-1', class: 'mb-12', height: '200px' },
        { component: 'btn', color: 'primary', evnts: [{ event: 'click', method: 'changeStep', value: 4 }], itemtext: 'Continue' },
        { component: 'btn', text: true, itemtext: 'Cancel' }
      ]},
      { component: 'stepper-step', step: 4, itemtext: 'View setup instructions' },
      { component: 'stepper-content', step: 4, items: [
        { component: 'card', color: 'grey lighten-1', class: 'mb-12', height: '200px' },
        { component: 'btn', color: 'primary', evnts: [{ event: 'click', method: 'changeStep', value: 1 }], itemtext: 'Continue' },
        { component: 'btn', text: true, itemtext: 'Cancel' }
      ]},
    ]}
  ]
}