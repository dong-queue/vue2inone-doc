export default {
  items: [
    { component: 'card', class: 'overflow-hidden mx-auto', height: '200', maxWidth: '500', 
      items: [
        {
          component: 'bnavi', absolute: true, hideOnScroll: true, horizontal: true, 'scroll-target': 'hide-on-scroll-example',
          items: [
            {
              component: 'btn', color: 'deep-purple accent-4', text: true,
              items: [
                { component: 'text', itemtext: 'Recents' },
                { component: 'icon', name: 'mdi-history' }
              ]
            },
            {
              component: 'btn', color: 'deep-purple accent-4', text: true,
              items: [
                { component: 'text', itemtext: 'Favorites' },
                { component: 'icon', name: 'mdi-heart' }
              ]
            },
            {
              component: 'btn', color: 'deep-purple accent-4', text: true,
              items: [
                { component: 'text', itemtext: 'Nearby' },
                { component: 'icon', name: 'mdi-map-marker' }
              ]
            }
          ]
        },
        { component: 'responsive', id: 'hide-on-scroll-example', class: 'overflow-y-auto', 'max-height': '600', items: [
          { component: 'responsive', height: '1500' }
        ]}
      ]
    }
  ]
}