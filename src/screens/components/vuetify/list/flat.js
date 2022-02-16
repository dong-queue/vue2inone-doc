export default {
  items: [
    {
      component: 'card', class: 'mx-auto', maxWidth: '300', tile: true,
      items: [
        {
          component: 'list', flat: true,
          items: [
            { component: 'subheader', itemtext: 'Reports' },
            {
              component: 'listItemGroup', model: 'selectedItem', color: 'primary',
              itemsfor: 'items', subItemName: 'item',
              items: [
                {
                  component: 'listItem', items: [
                    { component: 'listItemIcon', name: 'item.icon' },
                    {
                      component: 'listItemContent', items: [
                        { component: 'listItemTitle', itemtext: 'item.text' }
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