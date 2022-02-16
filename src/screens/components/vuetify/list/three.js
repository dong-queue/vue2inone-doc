export default {
  items: [
    {
      component: 'card', class: 'mx-auto', width: '450',
      items: [
        { component: 'toolbar', color: 'cyan', dark: true,
          appBarNavIcon: true, title: { itemtext: 'Inbox' },
          items: [
            { component: 'spacer' },
            { component: 'btn', icon: true, items: [{component: 'icon', name: 'mdi-magnify'}]}
          ]
        },
        { component: 'list', threeLine: true, 
          items: [
            { component: 'list', threeLine: true, 
              itemsfor: 'items',
              items: [
                { component: 'subheader', if: [{ target: 'subItem.header' }], itemtext: 'subItem.header' },
                { component: 'divider', if: [{ target: 'subItem.divider' }], inset: 'subItem.inset'},
                {
                  component: 'listItem', if: [{ target: 'subItem.header', ne: true }, { target: 'subItem.divider', ne: true}],
                  items: [
                    { component: 'listItemAvatar', items: [
                      { component: 'img', src: 'subItem.avatar'}
                    ]},
                    {
                      component: 'listItemContent', class: 'px-2', items: [
                        { component: 'listItemTitle', itemtext: 'subItem.title'},
                        { component: 'listItemSubtitle', itemtext: 'subItem.subtitle'}
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
