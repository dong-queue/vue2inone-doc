export default {
  items: [
    { component: 'row', justify: 'center', items: [
      { component: 'btn', color: 'primary', class: 'ma-2', dark: true, itemtext: 'Open Dialog 1',
        evnts: [{ event: 'click', method: 'changeDialog', value: ['dialog', true] }]
      },
      { component: 'btn', color: 'primary', class: 'ma-2', dark: true, itemtext: 'Open Dialog 2',
        evnts: [{ event: 'click', method: 'changeDialog', value: ['dialog2', true] }]
      },
      { component: 'btn', color: 'primary', class: 'ma-2', dark: true, itemtext: 'Open Dialog 3',
        evnts: [{ event: 'click', method: 'changeDialog', value: ['dialog3', true] }]
      },
      { component: 'dialog', model: 'dialog.dialog', fullscreen: true, hideOverlay: true, transition: 'dialog-bottom-transition', scrollable: true, items: [
        { component: 'card', tile: true, items: [
          { component: 'toolbar', flat: true, dark: true, color: 'primary', items: [
            { component: 'btn', icon: true, dark: true, evnts: [{ event: 'click', method: 'changeDialog', value: ['dialog', false] }],
              items: [{ component: 'icon', name: 'mdi-close' }]
            },
            { component: 'text', itemtext: 'Settings' },
            { component: 'spacer' },
            { component: 'btn', dark: true, text: true, evnts: [{ event: 'click', method: 'changeDialog', value: ['dialog', false] }], itemtext: 'Save' },
            { component: 'btn', dark: true, icon: true, evnts: [{ event: 'click', method: 'showMenu' }], items: [{ component: 'icon', name: 'mdi-dots-vertical'}]},
            { component: 'menu', model: 'isShowMenu', bottom: true, right: true, 'offset-y': true, activator: 'btnElement', items: [
              { component: 'list', itemsfor: 'items', items: [
                { component: 'listItem', items:[
                  { component: 'listItemTitle', itemtext: 'subItem.title' }
                ]}
              ]}
            ]}
          ]},
          { component: 'cardText', items: [
            { component: 'btn', color: 'primary', dark: true, class: 'ma-2', itemtext: 'Open Dialog 2', evnts: [{ event: 'click', method: 'changeDialog', value: ['dialog2', true]}]},
            { component: 'list', 'three-line': true, subheader: true, items: [
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
            ]}
          ]},
          { component: 'divider', style: 'flex: 1 1 auto;'}
        ]}
      ] },
      { component: 'dialog', model: 'dialog.dialog2', 'max-width': '500px', items: [
        { component: 'card', items: [
          { component: 'cardTitle', itemtext: 'Dialog 2' },
          { component: 'cardText', items: [
            { component: 'btn', color: 'primary', dark: true, evnts: [{ event: 'click', method: 'changeDialog', value: ['dialog3', true] }], itemtext: 'Open Dialog 3' },
            { component: 'select', items: 'select', label: 'A Select List', itemValue: 'text' }
          ]},
          { component: 'cardActions', items: [
            { component: 'btn', color: 'primary', text: true, evnts: [{ event: 'click', method: 'changeDialog', value: ['dialog2', false]}], itemtext: 'Close' }
          ]}
        ]}
      ]},
      { component: 'dialog', model: 'dialog.dialog3', 'max-width': '500px', items: [
        { component: 'card', items: [
          { component: 'cardTitle', items: [
            { component: 'text', itemtext: 'Dialog 3' },
            { component: 'spacer' },
            { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-dots-vertical' }], evnts: [{ event: 'click', method: 'showMenu' }] },
            { component: 'menu', model: 'isShowMenu', bottom: true, right: true, 'offset-y': true, activator: 'btnElement', items: [
              { component: 'list', itemsfor: 'items', items: [
                { component: 'listItem', items:[
                  { component: 'listItemTitle', itemtext: 'subItem.title' }
                ]}
              ]}
            ]}
          ]},
          { component: 'cardActions', items: [
            { component: 'btn', color: 'primary', text: true, evnts: [{ event: 'click', method: 'changeDialog', value: ['dialog3', false] }], itemtext: 'Close' }
          ]}
        ]}
      ]}
    ]}
  ]
}