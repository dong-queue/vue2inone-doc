export default {
  class: 'text-center',
  items: [
    { component: 'div', class: 'text-center', items: [
      {
        component: 'btn', color: 'green', dark: true,
        evnts: [
          { event: 'click', method: 'changeSheet' }
        ],
        itemtext: 'Open Persistent'
      },
      {
        component: 'bsheet', persistent: true, model: 'sheet',
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