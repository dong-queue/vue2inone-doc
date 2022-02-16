export default {
  
  items: [
    { class: 'overflow-hidden', items: [
      {
        class: 'text-center mb-8', items: [
          {
            component: 'btn', color: 'deep-purple', outlined: true, itemtext: 'Toggle Navigation',
            evnts: [{ event: 'click', method: 'changeActive' }],
          }
        ]
      },
      {
        component: 'bnavi', model: 'value', inputValue: 'active', color: 'indigo',
        evnts: [{ event: 'change', method: 'naviChange' }],
        items: [
          {
            component: 'btn', items: [
              { component: 'text', itemtext: 'Recents' },
              { component: 'icon', name: 'mdi-history' }
            ]
          },
          {
            component: 'btn', items: [
              { component: 'text', itemtext: 'Favorites' },
              { component: 'icon', name: 'mdi-heart' }
            ]
          },
          {
            component: 'btn', items: [
              { component: 'text', itemtext: 'Nearby' },
              { component: 'icon', name: 'mdi-marker' }
            ]
          },
        ]
      }
    ]}
  ]
}