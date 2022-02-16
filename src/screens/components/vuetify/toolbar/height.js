export default {
  items: [
    {
      component: 'toolbar',
      extended: true, extensionHeight: '100',
      appBarNavIcon: {
        color: 'black', evnts: [{ event: 'click', method: 'click' }]
      },
      title: {itemtext: 'Title'},
      items: [
        { component: 'spacer' },
        { component: 'btn', class: 'px-0', color: 'black', icon: true, 
          evnts: [
            { event: 'click', method: 'click' }
          ],
          items: [
            { component: 'icon', name: 'mdi-magnify' }
          ]
        },
        { component: 'btn', class: 'px-0', color: 'black', icon: true, 
          evnts: [
            { event: 'click', method: 'click' }
          ],
          items: [
            { component: 'icon', name: 'mdi-heart' }
          ]
        },
        { component: 'btn', class: 'px-0', color: 'black', icon: true, 
          evnts: [
            { event: 'click', method: 'click' }
          ],
          items: [
            { component: 'icon', name: 'mdi-dots-vertical' }
          ] 
        }
      ]
    }
  ]
}