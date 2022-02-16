export default {
  items: [
    { component: 'card', items: [
      { component: 'toolbar', flat: true, color: 'primary', dark: true, title: {itemtext: 'User Profile'} },
      { component: 'row', items: [
        { component: 'col', cols: 12, xl: 1, lg: 2, md: 3, sm: 4, xs: 5, items: [
          {
            component: 'tabs', vertical: true, model: 'tab',items: [
              {
                component: 'tab', class: 'justify-start', 
                items: [
                  { component: 'icon', left: true, name: 'mdi-account' }
                ],
                itemtext: 'Option 1'
              },
              {
                component: 'tab', class: 'justify-start',
                items: [
                  { component: 'icon', left: true, name: 'mdi-lock' }
                ],
                itemtext: 'Option 2'
              },
              {
                component: 'tab', class: 'justify-start',
                items: [
                  { component: 'icon', left: true, name: 'mdi-access-point' }
                ],
                itemtext: 'Option 3'
              }
            ]
          },
        ]},
        {
          component: 'col', cols: 12, xl: 11, lg: 10, md: 9, sm: 8, xs: 7, items: [
          {
            component: 'tabs-items', model: 'tab', itemsfor: 3, items: [
              {
                component: 'tab-item', eager: true, items: [
                  { component: 'card', flat: true, items: [{ component: 'card-text', itemtext: 'text' }] }
                ]
              }
            ]
          }
        ]}
        
      ]}
    ]}
  ]
}