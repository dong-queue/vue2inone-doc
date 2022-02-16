export default {
  items: [
    {
      component: 'card', tile: true, width: '256', class: 'mx-auto',
      items: [
        { component: 'list', 
          items: [
            { component: 'listItem',
              items: [{component: 'listItemAvatar', class: 'mx-0',
                items: [{ component: 'img', class: 'mx-0', src: 'https://cdn.vuetifyjs.com/images/john.png' }]
              }]
            },
            { component: 'listItem', link: true,
              items: [
                { component: 'listItemContent',
                  items: [
                    { component: 'listItemTitle', class: 'title', itemtext: 'John Leider' },
                    { component: 'listItemSubtitle', itemtext: 'john@vuetifyjs.com' }
                  ]
                },
                { component: 'listItemAction',
                  items: [ { component: 'icon', name: 'mdi-menu-down' } ]
                }
              ]
            }
          ]
        },
        { component: 'divider' },
        {
          component: 'list', dense: true, nav: true,
          items: [
            {
              component: 'listItemGroup', model: 'selectedItem', color: 'primary',
              itemsfor: 'items',
              items: [
                { component: 'listItem', items: [
                  { component: 'listItemIcon', name: 'subItem.icon' },
                  { component: 'listItemContent', items: [{ component: 'listItemTitle', itemtext: 'subItem.text' } ] }
                ]} 
              ]
            }
          ]
        }
      ]
    }
  ]
}