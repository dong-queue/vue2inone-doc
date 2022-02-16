export default {
  items: [
    { component: 'row', justify: 'center', items: [
      { component: 'btn', color: 'primary', dark: true, 
        itemtext: 'Open Dialog',
        evnts: [{ event: 'click', method: 'changeDialog', value: true }]
      },
      { component: 'dialog', model: 'dialog', fullscreen: true, hideOverlay: true, transition: 'dialog-bottom-transition',
        items: [
          { component: 'card', items: [
            { component: 'toolbar', dark: true, color: 'primary', items: [
              { component: 'btn', icon: true, dark: true, 
                items: [{ component: 'icon', name: 'mdi-close' }],
                evnts: [{ event: 'click', method: 'changeDialog', value: false }]
              },
              { component: 'text', itemtext: 'Settings' },
              { component: 'spacer' },
              { component: 'btn', dark: true, text: true, itemtext: 'Save',
                evnts: [{ event: 'click', method: 'changeDialog', value: false }]
              }
            ]},
            { component: 'list', threeLine: true, subheader: true, items: [
              { component: 'subheader', itemtext: 'User Controls' },
              { component: 'listItem', items: [
                { component: 'listItemContent', items: [
                  { component: 'listItemTitle', itemtext: 'Content filtering' },
                  { component: 'listItemSubtitle', itemtext: 'Set the content filtering level to restrict apps that can be downloaded' }
                ]}
              ]},
              { component: 'listItem', items: [
                { component: 'listItemContent', items: [
                  { component: 'listItemTitle', itemtext: 'Password' },
                  { component: 'listItemSubtitle', itemtext: 'Require password for purchase or use password to restrict purchase' }
                ]}
              ]}
            ]},
            { component: 'divider' },
            { component: 'list', 'three-line': true, subheader: true, items: [
              { component: 'subheader', itemtext: 'General' },
              { component: 'listItem', items: [
                { component: 'listItemAction', items: [{ component: 'checkbox', model: 'notifications' }]},
                { component: 'listItemContent', items: [
                  { component: 'listItemTitle', itemtext: 'Notifications' },
                  { component: 'listItemSubtitle', itemtext: 'Notify me about updates to apps or games that I downloaded' }
                ]}
              ]},
              { component: 'listItem', items: [
                { component: 'listItemAction', items: [{ component: 'checkbox', model: 'sound' }]},
                { component: 'listItemContent', items: [
                  { component: 'listItemTitle', itemtext: 'Sound' },
                  { component: 'listItemSubtitle', itemtext: 'Auto-update apps at any time. Data charges may apply' }
                ]}
              ]},
              { component: 'listItem', items: [
                { component: 'listItemAction', items: [{ component: 'checkbox', model: 'widgets' }]},
                { component: 'listItemContent', items: [
                  { component: 'listItemTitle', itemtext: 'Auto-add widgets' },
                  { component: 'listItemSubtitle', itemtext: 'Automatically add home screen widgets' }
                ]}
              ]}
            ] }
          ]}
        ]
      },

    ]}
  ]
}