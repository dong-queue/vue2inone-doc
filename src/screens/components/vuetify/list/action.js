export default {
  items: [
    {
      component: 'card', class: 'mx-auto', maxWidth: '400',
      items: [
        {
          component: 'toolbar', color: 'purple', dark: true,
          appBarNavIcon: true, title: { itemtext: 'Topics' },
          items: [
            { component: 'spacer' },
            { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-magnify' }] }
          ]
        },
        {
          component: 'list', subheader: true, threeLine: true,
          items: [
            { component: 'subheader', itemtext: 'User Controls' },
            { component: 'listItem', items: [
              { component: 'listItemContent', items: [
                { component: 'listItemTitle', itemtext: 'Content filtering' },
                { component: 'listItemSubtitle', itemtext: 'Set the content filtering level to restrict appts that can be downloaded'}
              ]}
            ]},
            { component: 'listItem', items: [
              {
                component: 'listItemContent', items: [
                  { component: 'listItemTitle', itemtext: 'Password' },
                  { component: 'listItemSubtitle', itemtext: 'Require password for purchase or use password to restrict purchase' }
                ]
              }
            ]}
          ]
        },
        { component: 'divider' },
        {
          component: 'list', flat: true, subheader: true, threeLine: true,
          items: [
            { component: 'subheader', itemtext: 'General' },
            { component: 'listItemGroup', model: 'settings', multiple: true, activeClass: '',
              items: [
                {
                  component: 'listItem', evnts: [{ event: 'click', method: 'click', value: '0' }],
                  items: [
                    { component: 'listItemAction', items: [
                      { component: 'checkbox', model: 'active.0' }
                    ]},
                    { component: 'listItemContent', class: 'ml-3', items: [
                      { component: 'listItemTitle', itemtext: 'Notifications' },
                      { component: 'listItemSubtitle', itemtext: 'Notify me about updates to apps or games that I downloaded'}
                    ]}
                  ]
                },
                {
                  component: 'listItem', evnts: [{ event: 'click', method: 'click', value: '1' }],
                  items: [
                    {
                      component: 'listItemAction', items: [
                        { component: 'checkbox', model: 'active.1' }
                      ]
                    },
                    {
                      component: 'listItemContent', class: 'ml-3', items: [
                        { component: 'listItemTitle', itemtext: 'Sound' },
                        { component: 'listItemSubtitle', itemtext: 'Auto-update apps at any time. Data charges may apply' }
                      ]
                    }
                  ]
                },
                {
                  component: 'listItem', evnts: [{ event: 'click', method: 'click', value: '2' }],
                  items: [
                    {
                      component: 'listItemAction', items: [
                        { component: 'checkbox', model: 'active.2' }
                      ]
                    },
                    {
                      component: 'listItemContent', class: 'ml-3', items: [
                        { component: 'listItemTitle', itemtext: 'Auto-add widgets' },
                        { component: 'listItemSubtitle', itemtext: 'Automatically add home screen widgets when downloads complete' }
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
  ]
}