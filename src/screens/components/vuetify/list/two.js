export default {
  items: [
    {
      component: 'card', class: 'mx-auto', maxWidth: '600', 
      items: [
        {
          component: 'toolbar', color: 'light-blue', dark: true,
          appBarNavIcon: true, title: { itemtext: 'My files' },
          items: [
            { component: 'spacer' },
            { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-magnify' }] },
            { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-view-module' }] }
          ]
        },
        {
          component: 'list', twoLine: true,
          items: [
            { component: 'subheader', inset: true, itemtext: 'Folders' },
            { itemsfor: 'folders', subItemName: 'folder',
              items: [
                { component: 'list-item', items: [
                  { component: 'list-item-avatar', items: [{component: 'icon', color: 'grey lighten-1', dark: true, name: 'mdi-folder'}]},
                  { component: 'list-item-content', style: {width: '500px'}, items: [
                    { component: 'list-item-title', itemtext: 'folder.title' },
                    { component: 'list-item-subtitle', itemtext: 'folder.subtitle' }
                  ]},
                  {
                    component: 'list-item-action', items: [
                      {
                        component: 'btn', icon: true, items: [
                          { component: 'icon', color: 'grey lighten-1', name: 'mdi-information' }
                        ]
                      }
                    ]
                  }
                ]},
                
              ]
            },
            { component: 'divider', inset: true },
            { component: 'subheader', inset: true, itemtext: 'Files' },
            {
              itemsfor: 'files', subItemName: 'file', 
              items: [
                {
                  component: 'list-item', items: [
                    { component: 'list-item-avatar', items: [{ component: 'icon', color: 'file.color', dark: true, name: 'file.icon' }] },
                    {
                      component: 'listItemContent', items: [
                        { component: 'listItemTitle', itemtext: 'file.title' },
                        { component: 'listItemSubtitle', itemtext: 'file.subtitle' }
                      ]
                    },
                    {
                      component: 'listItemAction', items: [
                        {
                          component: 'btn', icon: true, items: [
                            { component: 'icon', color: 'grey lighten-1', name: 'mdi-information' }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        }
      ]
    }
  ]
}
