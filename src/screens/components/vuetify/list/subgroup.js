export default {
  items: [
    {
      component: 'card', class: 'mx-auto', width: '300',
      items: [
        { component: 'list',  
          items: [
            { component: 'listItem', 
              items: [
                { component: 'listItemIcon', name: 'mdi-home' },
                { component: 'listItemTitle', itemtext: 'Home' }
              ]
            },
            { component: 'listGroup', value: true, prependIcon: 'mdi-account-circle',
              slots: [
                {
                  name: 'activator', items: [
                    { component: 'listItemTitle', itemtext: 'Users' }
                  ]}
              ],
              items: [
                { component: 'listGroup', value: true, noAction: true, subGroup: true,
                  slots: [
                    {
                      name: 'activator', items: [
                        { component: 'listItemContent', items: [{ component: 'list-item-title', itemtext: 'Admin' }] }
                      ]
                    } 
                  ],
                  itemsfor: 'admins', subItemName: 'admin', items: [
                    {
                      component: 'listItem', link: true, items: [
                        { component: 'listItemTitle', class: 'pl-3', style: { width: '220px' }, itemtext: {value: 'admin', func: function ([title]) {return title } } },
                        { component: 'listItemIcon', name: { value: 'admin', func: e => e[1] } }
                    ]}
                  ]
                },
                {
                  component: 'listGroup', noAction: true, subGroup: true,
                  slots: [{
                    name: 'activator', items: [
                      { component: 'listItemContent', items: [{ component: 'list-item-title', itemtext: 'Actions' }] }
                    ]
                  }],
                  itemsfor: 'cruds', items: [
                    {
                      component: 'listItem', link: true, items: [
                        { component: 'listItemTitle', class: 'pl-3', style: { width: '220px' }, itemtext: 'subItem.text' },
                        { component: 'listItemIcon', name: 'subItem.icon' }
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