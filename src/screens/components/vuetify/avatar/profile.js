export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: '434', tile: true,
      items: [
        { component: 'img', height: '100%', src: 'https://cdn.vuetifyjs.com/images/cards/server-room.jpg',
          items: [
            { component: 'row', align: 'end', class: 'fill-height', 
              items: [
                { component: 'avatar', slignSelf: 'start', cols: 12, class: 'pa-0 profile', color: 'grey', 
                  size: '164', tile: true, 
                  items: [
                    { component: 'img', src: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg' }
                  ]
                },
                { component: 'listItem', class: 'py-0', color: 'rgba(0, 0, 0, .4)', dark: true,
                  items: [
                    { component: 'listItemContent', items: [
                      { component: 'listItemTitle', class: 'title', itemtext: 'Marcus Obrien' },
                      { component: 'listItemSubtitle', itemtext: 'Network Engineer' }
                    ]}
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}