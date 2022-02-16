
export default {
  items: [
    {
      component: 'card', class: 'mx-auto', maxWidth: '375',
      items: [
        { component: 'img', src: 'https://cdn.vuetifyjs.com/images/lists/ali.png', height: '300px', dark: true,
          items: [
            {
              component: 'cardTitle', items: [
                {
                  component: 'btn', dark: true, icon: true,
                  items: [{ component: 'icon', name: 'mdi-chevron-left' }]
                },
                { component: 'spacer' },
                { component: 'btn', dark: true, icon: true, class: 'mr-4', items: [{ component: 'icon', name: 'mdi-pencil' }] },
                { component: 'btn', dark: true, icon: true, class: 'mr-4', items: [{ component: 'icon', name: 'mdi-dots-vertical' }] },
              ]
            },
            { component: 'spacer' },
            {
              component: 'cardTitle', class: 'white--text',  items: [
                { component: 'text', class: 'display-1 pl-6 pt-12', itemtext: 'Ali Conners' }
              ]
            }
          ]
        },
        { component: 'list', twoLine: true, items: [
          { component: 'listItem', items: [
            { component: 'listItemIcon', color: 'indigo', name: 'mdi-phone'},
            { component: 'listItemContent', items: [
              { component: 'listItemTitle', itemtext: '(650) 555-1234' },
              { component: 'listItemSubtitle', itemtext: 'Mobile'}
            ]},
            { component: 'spacer' },
            { component: 'listItemIcon', name: 'mdi-message-text' }
          ]},
          { component: 'listItem', items: [
            { component: 'listItemIcon' },
            {
              component: 'listItemContent', items: [
                { component: 'listItemTitle', itemtext: '(323) 555-678' },
                { component: 'listItemSubtitle', itemtext: 'Work' }
              ]
            },
            { component: 'spacer' },
            { component: 'listItemIcon', name: 'mdi-message-text' }
          ]},
          { component: 'divider', inset: true },
          {
            component: 'listItem', items: [
              { component: 'listItemIcon', color: 'indigo', name: 'mdi-email' },
              {
                component: 'listItemContent', items: [
                  { component: 'listItemTitle', itemtext: 'aliconnors@example.com' },
                  { component: 'listItemSubtitle', itemtext: 'Personal' }
                ]
              }
            ]
          },
          {
            component: 'listItem', items: [
              { component: 'listItemIcon' },
              {
                component: 'listItemContent', items: [
                  { component: 'listItemTitle', itemtext: 'ali_connors@example.com' },
                  { component: 'listItemSubtitle', itemtext: 'Work' }
                ]
              }
            ]
          },
          { component: 'divider', inset: true },
          {
            component: 'listItem', items: [
              { component: 'listItemIcon', color: 'indigo', name: 'mdi-map-marker' },
              {
                component: 'listItemContent', items: [
                  { component: 'listItemTitle', itemtext: '1400 Main Street' },
                  { component: 'listItemSubtitle', itemtext: 'Orlando, FL 79938' }
                ]
              }
            ]
          },
        ]}
      ]
    }
  ]
}