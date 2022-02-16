export default {
  items: [
    {
      component: 'card', class: 'mx-auto', maxWidth: '500',
      items: [
        {
          component: 'toolbar', color: 'pink', dark: true,
          appBarNavIcon: true, title: { itemtext: 'Inbox' },
          items: [
            { component: 'spacer' },
            { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-magnify' }] },
            { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-checkbox-marked-circle' }] },
          ]
        },
        {
          component: 'list', twoLine: true,
          items: [
            { component: 'listItemGroup', model: 'selected', activeClass: 'pink--text', multiple: true,
              itemsfor: 'items', subItemName: 'item',
              items: [
                {
                  component: 'list-item',
                  slots: [
                    {
                      name: 'default', type: 'data', slotDataName: 'slot', items: [
                        { component: 'row', items: [
                          {
                            component: 'list-item-content',
                            items: [
                              { component: 'list-item-title', itemtext: 'item.title' },
                              { component: 'list-item-subtitle', class: 'ext--primary', itemtext: 'item.headline' },
                              { component: 'list-item-subtitle', style: { width: '400px' }, itemtext: 'item.subtitle' }
                            ]
                          },
                          {
                            component: 'list-item-action', items: [
                              { component: 'list-item-action-text', itemtext: 'item.action' },
                              {
                                component: 'icon', color: { value: 'slot.active', func: e => !e ? 'grey lighten-1' : 'yellow darken-3' },
                                name: { value: 'slot.active', func: e => !e ? 'mdi-star-outline' : 'mdi-star' }
                              }
                            ]
                          }
                        ]}
                      ]
                    }
                  ]
                },
                { component: 'divider' }
              ]
            }
          ]
        }
      ]
    }
  ]
}