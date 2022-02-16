export default {
  items: [
    {
      component: 'card', class: 'mx-auto', maxWidth: '500',
      items: [
        {
          component: 'toolbar', color: 'deep-purple accent-4', dark: true,
          appBarNavIcon: true,
          title: { itemtext: 'New Chat' },
          items: [
            { component: 'spacer' },
            { component: 'btn', icon: true, items: [{component: 'icon', name: 'mdi-magnify'}]}
          ]
        },
        {
          component: 'list', subheader: true, 
          items: [
            { component: 'subheader', itemtext: 'Recent chat' },
            {
              itemsfor: 'recent', items: [
                { component: 'listItem', items: [
                  { component: 'listItemAvatar', class: 'mr-2', items: [{ component: 'img', alt: 'subItem.title', src: 'subItem.avatar' }] },
                  { component: 'listItemContent', style: { width: '350px' }, items: [{ component: 'listItemTitle', itemtext: 'subItem.title' }] },
                  { component: 'listItemIcon', color: 'grey', name: 'mdi-message-outline' }
                ]}
            ]}
          ]
        },
        { component: 'divider' },
        { component: 'list', subheader: true, 
          items: [
            { component: 'subheader', itemtext: 'Previous chats' },
            { itemsfor: 'previous', items: [
              {
                component: 'listItem', items: [
                  { component: 'listItemAvatar', class: 'mr-2', items: [{ component: 'img', alt: 'subItem.title', src: 'subItem.avatar' }] },
                  { component: 'listItemContent', items: [{ component: 'listItemTitle', itemtext: 'subItem.title' }] }
                ]
              }
            ]}
          ]
        }
      ]
    }
  ]
}