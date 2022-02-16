export default {
  items: [
    { component: 'div', items: [
      { component: 'card', class: 'mb-4', items: [
        { component: 'card-text', items: [
          { component: 'select', model: 'steps', items: [ 2, 3, 4, 5, 6 ], label: '# of steps' }
        ]}
      ]},
      { component: 'stepper', model: 'e1', items: [
        {
          component: 'stepper-header', itemsfor: 'steps', items: [
          { component: 'stepper-step', complete: { value: '_self', func: e => e.e1 > e.subItem}, 
            step: 'subItem', editable: true, itemtext: { value: 'subItem', func: e => `Step ${e}`}
          },
          { component: 'divider', if: [{target: '_self', value: e => e.subItem != e.steps}] }
        ]},
        {
          component: 'stepper-items', itemsfor: 'steps', items: [
          { component: 'stepper-content', step: 'subItem', items: [
            { component: 'card', class: 'mb-12', color: 'grey lighten-1', height: '200px' },
            { component: 'btn', color: 'primary', evnts: [{event: 'click', method: 'nextStep', value: 'subItem'}], itemtext: 'Continue' },
            { component: 'btn', text: true, itemtext: 'Cancel' }
          ]}
        ]}
      ]}
    ]}
  ]
}