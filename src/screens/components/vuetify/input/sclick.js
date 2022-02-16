export default {
  items: [
    { component: 'container', id: 'input-usage', fluid: true, items: [
      {
        component: 'row', items: [
          {
            component: 'col', cols: 12, items: [
              {
                component: 'input', messages: ['Messaagses'], appendIcon: 'mdi-close', prependIcon: 'mdi-phone',
                evnts: [{ event: 'click:append', method: 'appendIconCallback' },
                  { event: 'click:prepend', method: 'prependIconCallback' }
                ],
                itemtext: 'Default Slot'
              }
            ]
          }
        ]
      }
    ]}
  ]
}