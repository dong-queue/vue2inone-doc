export default {
  items: [
    {
      component: 'toolbar',
      class: 'mx-0',
      collapse: true,
      items: [
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
            { component: 'icon', name: 'mdi-dots-vertical' }
          ]
        }
      ]
    }
  ]
}