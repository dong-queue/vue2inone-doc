export default {
  
  items: [
    { component: 'div', class: 'text-center', items: [
      {
        component: 'btn', color: 'red', dark: true,
        evnts: [
          { event: 'click', method: 'changeSheet' }
        ],
        itemtext: 'Open Player'
      },
      {
        component: 'bsheet', inset: true, model: 'sheet',
        items: [
          {
            component: 'card', tile: true, items: [
              { component: 'progressL', value: 50, class: 'my-0', height: 3 },
              {
                component: 'list', items: [
                  {
                    component: 'listItem', items: [
                      {
                        component: 'listItemContent', items: [
                          { component: 'listItemTitle', itemtext: 'The Walker' },
                          { component: 'listItemSubtitle', itemtext: 'Fitz & The Trantrums' }
                        ]
                      },
                      { component: 'spacer' },
                      {
                        component: 'listItemIcon', items: [
                          {
                            component: 'btn', icon: true, items: [
                              { component: 'icon', name: 'mdi-rewind' }
                            ]
                          }
                        ]
                      },
                      {
                        component: 'listItemIcon', class: 'class.iconPause', items: [
                          {
                            component: 'btn', icon: true, items: [
                              { component: 'icon', name: 'mdi-pause' }
                            ]
                          }
                        ]
                      },
                      {
                        component: 'listItemIcon', class: 'class.iconForward', items: [
                          {
                            component: 'btn', icon: true, items: [
                              { component: 'icon', name: 'mdi-fast-forward' }
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
        ]
      }
    ]}
  ]
}