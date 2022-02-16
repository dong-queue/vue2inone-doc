export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      {
        component: 'btn', color: 'purple', dark: true,
        evnts: [
          { event: 'click', method: 'changeSheet' }
        ],
        itemtext: 'Open In'
      },
      {
        component: 'bsheet', model: 'sheet', items: [
          {
            component: 'list', items: [
              { component: 'subheader', itemtext: 'Open in' },
              {
                itemsfor: 'tiles', subItemName: 'tile',
                items: [
                  {
                    component: 'listItem', evnts: [{ event: 'click', method: 'changeSheet' }],
                    items: [
                      { component: 'list-item-avatar', items: [
                        {component: 'avatar', size: '32px', tile: true, items: [
                          { component: 'img', src: 'tile.img', alt: 'tile.title' }
                        ]}
                      ]},
                      { component: 'list-item-title', itemtext: 'tile.title' }
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