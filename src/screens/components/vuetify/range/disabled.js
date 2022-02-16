export default {
  items: [
    { component: 'container', fluid: true, items: [
      {
        component: 'row', items: [
          {
            component: 'col', cols: 12, items: [
              { component: 'range', model: 'value', disabled: true, label: 'Disabled' }
            ]
          }
        ]
      }
    ]}
  ]
}