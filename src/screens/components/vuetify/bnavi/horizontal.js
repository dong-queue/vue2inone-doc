export default {
  items: [
    {
      component: 'bnavi', model: 'value', color: 'primary', horizontal: true, inputValue: true,
      items: [
        {
          component: 'btn',
          items: [
            { component: 'text', itemtext: 'Recents' },
            { component: 'icon', name: 'mdi-history' }
          ]
        },
        {
          component: 'btn',
          items: [
            { component: 'text', itemtext: 'Favorites' },
            { component: 'icon', name: 'mdi-heart' }
          ]
        },
        {
          component: 'btn',
          items: [
            { component: 'text', itemtext: 'Nearby' },
            { component: 'icon', name: 'mdi-map-marker' }
          ]
        }
      ]
    }
  ]
}