export default {
  items: [
    { component: 'card', items: [
      { component: 'tabs', model: 'tab', 'background-color': 'deep-purple accent-4', 
        centered: true, dark: true, 'icons-and-text': true, 'tabs-slider': true,
        items: [
          { component: 'tab', href: '#tab-1', itemtext: 'Recents', items: [{ component: 'icon', name: 'mdi-phone' }] },
          { component: 'tab', href: '#tab-2', itemtext: 'Favorites', items: [{ component: 'icon', name: 'mdi-heart' }] },
          { component: 'tab', href: '#tab-3', itemtext: 'Nearby', items: [{ component: 'icon', name: 'mdi-account-box' }] },
        ]
      },
      {
        component: 'tabs-items', model: 'tab', itemsfor: ['tab-1', 'tab-2', 'tab-3'], subItemName: 'item', items: [
          {
            component: 'tab-item', value: 'item', items: [
              { component: 'card', flat: true, items: [{ component: 'card-text', itemtext: 'text' }] }
            ]
          }
        ]
      }
    ]}
  ]
}