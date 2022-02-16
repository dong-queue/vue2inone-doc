export default {
  items: [
    {
      component: 'card', class: 'mx-auto', maxWidth: '475',
      items: [
        {
          component: 'toolbar', color: 'teal', dark: true,
          appBarNavIcon: true,
          title: { itemtext: 'Settings' }
        },
        {
          component: 'list', twoLine: true, subheader: true, 
          items: [
            { component: 'subheader', itemtext: 'General' },
            { component: 'listItem', items: [
              { component: 'listItemContent', items: [
                { component: 'listItemTitle', itemtext: 'Profile photo' },
                { component: 'listItemSubtitle', itemtext: 'Change your Google+ profile photo' }
              ]}
            ]},
            { component: 'listItem', items: [
              { component: 'listItemContent', items: [
                { component: 'listItemTitle', itemtext: 'Show your status' },
                { component: 'listItemSubtitle', itemtext: 'Your status is visible to everyone' }
              ]}
            ]}
          ]
        },
        { component: 'divider' },
        { component: 'list', subheader: true, twoLine: true, flat: true,
          items: [
            { component: 'subheader', itemtext: 'Hangout notifications' },
            {
              component: 'listItemGroup', model: 'settings', multiple: true, activeClass: '',
              items: [
                {
                  component: 'listItem', evnts: [{ event: 'click', method: 'click', value: '0' }],
                  items: [
                    {
                      component: 'listItemAction', items: [
                        { component: 'checkbox', model: 'active.0', color: 'primary' }
                      ]
                    },
                    {
                      component: 'listItemContent', class: 'ml-3', items: [
                        { component: 'listItemTitle', itemtext: 'Notifications' },
                        { component: 'listItemSubtitle', itemtext: 'Allow notifications' }
                      ]
                    }
                  ]
                },
                {
                  component: 'listItem', evnts: [{ event: 'click', method: 'click', value: '1' }],
                  items: [
                    {
                      component: 'listItemAction', items: [
                        { component: 'checkbox', model: 'active.1', color: 'primary' }
                      ]
                    },
                    {
                      component: 'listItemContent', class: 'ml-3', items: [
                        { component: 'listItemTitle', itemtext: 'Sound' },
                        { component: 'listItemSubtitle', itemtext: 'Hangouts message' }
                      ]
                    }
                  ]
                },
                {
                  component: 'listItem', evnts: [{ event: 'click', method: 'click', value: '2' }],
                  items: [
                    {
                      component: 'listItemAction', items: [
                        { component: 'checkbox', model: 'active.2', color: 'primary' }
                      ]
                    },
                    {
                      component: 'listItemContent', class: 'ml-3', items: [
                        { component: 'listItemTitle', itemtext: 'Video sounds' },
                        { component: 'listItemSubtitle', itemtext: 'Hangouts video call' }
                      ]
                    }
                  ]
                },
                {
                  component: 'listItem', evnts: [{ event: 'click', method: 'click', value: '3' }],
                  items: [
                    {
                      component: 'listItemAction', items: [
                        { component: 'checkbox', model: 'active.3', color: 'primary' }
                      ]
                    },
                    {
                      component: 'listItemContent', class: 'ml-3', items: [
                        { component: 'listItemTitle', itemtext: 'Invites' },
                        { component: 'listItemSubtitle', itemtext: 'Notify when receiving invites' }
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