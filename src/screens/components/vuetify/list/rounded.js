export default {
  items: [
    {
      component: 'card', class: 'mx-auto', maxWidth: '300', tile: true,
      items: [
        {
          component: 'list', rounded: true,
          items: [
            { component: 'subheader', itemtext: 'Reports' },
            {
              component: 'listItemGroup', model: 'selectedItem', color: 'primary',
              itemsfor: 'items',
              items: [
                {
                  component: 'listItem', items: [
                    { component: 'listItemIcon', name: 'subItem.icon' },
                    {
                      component: 'listItemContent', items: [
                        { component: 'listItemTitle', itemtext: 'subItem.text' }
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