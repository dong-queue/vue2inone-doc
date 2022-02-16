export default {
  items: [
    {
      component: 'card', class: 'mx-auto', maxWidth: '500',
      items: [
        { component: 'toolbar', color: 'indigo', dark: true,
          appBarNavIcon: true,
          title: { itemtext: 'Inbox' },
          items: [
            { component: 'spacer' },
            { component: 'btn', icon: true, items: [{component: 'icon', name: 'mdi-magnify'}]},
            { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-dots-vertical' }] }
          ]
        },
        { component: 'list', itemsfor: 'items',
          items: [
            { component: 'listItem', items: [
              {
                component: 'listItemIcon', color: 'pink', name: 'subItem.iconName'},
              { component: 'listItemContent', style: { width: '350px' }, items: [{ component: 'listItemTitle', itemtext: 'subItem.title'}]},
              { component: 'listItemAvatar', items: [{ component: 'img', src: 'subItem.avatar'}]}
            ]}
          ]
        }
      ]
    }
  ]
}