export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      {
        component: 'btn', color: 'blue', dark: true,
        evnts: [{ event: 'click', method: 'changeSheet' }],
        itemtext: 'Open v-model'
      },
      {
        component: 'bsheet', model: 'sheet', items: [
          {
            component: 'sheet', class: 'text-center', height: '200px', items: [
              {
                component: 'btn', class: 'mt-6', text: true, color: 'red',
                evnts: [{ event: 'click', method: 'changeSheet' }],
                itemtext: 'close'
              },
              { component: 'div', class: 'py-3', itemtext: 'This is a bottom sheet using the controlled by v-model instead of activator' }
            ]
          }
        ]
      }
    ]}
  ]
}