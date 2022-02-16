export default {
  items: [
    {
      component: 'row', justify: 'space-around', class: 'mx-2',
      items: [
      {
        component: 'btn', class: 'mx-1', color: 'primary', itemtext: 'Send Message',
        evnts: [
          { event: 'click', method: 'messagesPlus'}
        ], 
      },
      { component: 'btn', class: 'mx-1', color: 'error', itemtext: 'Clear Notifications',
        evnts: [
          { event: 'click', method: 'messagesZero' }
        ], 
      },
      { component: 'spacer' },
      {
        component: 'badge', value: 'messages', content: 'messages', color: 'green', overlap: true,
        items: [
          { component: 'icon', size: 'lg', name: 'mdi-vuetify' }
        ]
      }
    ]}
  ]
}