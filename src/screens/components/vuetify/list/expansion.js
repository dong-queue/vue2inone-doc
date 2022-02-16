export default {
  items: [
    {
      component: 'card', class: 'mx-auto', maxWidth: '500', 
      items: [
        {
          component: 'toolbar', color: 'teal', dark: true,
          appBarNavIcon: true, title: { itemtext: 'Topics' },
          items: [
            { component: 'spacer' },
            { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-dots-vertical' }] }
          ]
        },
        {
          component: 'list',
          itemsfor: 'items', subItemName: 'item',
          items: [
            { component: 'listGroup', model: 'item.active', prependIcon: 'item.action', noAction: true,
              slots:[{
                name: 'activator', items: [
                  {
                    component: 'listItemContent', items: [
                      { component: 'listItemTitle', itemtext: 'item.title' }
                    ]
                  }
                ]
              }],
              itemsfor: 'item.items', subItemName: 'child',
              items: [
                { component: 'listItem', class: 'ml-4', items: [
                  { component: 'listItemContent', items: [
                    { component: 'listItemTitle', itemtext: 'child.title'}
                  ]}
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
}
