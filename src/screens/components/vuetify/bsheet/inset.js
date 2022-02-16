export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      { component: 'btn', color: 'orange', dark: true, itemtext: 'Open Inset', evnts: [{event: 'click', method: 'open'}]},
      {
        component: 'bsheet', inset: true, model: 'sheet', activator: 'element',
        items: [
          {
            component: 'sheet', class: 'text-center', height: '200px', items: [
              {
                component: 'btn', class: 'mt-6', text: true, color: 'error',
                evnts: [
                  { event: 'click', method: 'changeSheet' }
                ],
                itemtext: 'close'
              },
              { component: 'div', class: 'my-3', itemtext: 'This is a bottom sheet using the inset prop' }
            ]
          }
        ]
      }
    ]}
  ]
}