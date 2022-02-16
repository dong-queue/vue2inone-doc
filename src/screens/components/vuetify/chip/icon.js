export default {
  class: 'text-center',
  items: [
    { component: 'row', justify: 'center',
      items: [
        { component: 'chip', class: 'ma-2', color: 'indigo', textColor: 'white', items: [
          { component: 'avatar', left: true, items: [
            { component: 'icon', name: 'mdi-account-circle' }
          ]},
          { component: 'text', itemtext: 'Mike' }
        ]},
        { component: 'chip', class: 'ma-2', color: 'orange', textColor: 'white', items: [
          { component: 'text', itemtext: 'Premium' },
          { component: 'icon', right: true, name: 'mdi-star' }
        ]},
        {
          component: 'chip', class: 'ma-2', color: 'primary', textColor: 'white', items: [
            { component: 'text', itemtext: '1 Year' },
            { component: 'icon', right: true, name: 'mdi-cake-variant' }
          ]
        },
        {
          component: 'chip', class: 'ma-2', color: 'green', textColor: 'white', items: [
            {
              component: 'avatar', color: 'green darken-4', items: [
                { component: 'text', class: 'ma-0 white--text', itemtext: '1' }
              ]
            },
            { component: 'text', itemtext: 'Years' }
          ]
        },
        { component: 'chip', class: 'ma-2', close: true, color: 'teal', textColor: 'white', 
          evnts: [
            { event: 'click:close', method: 'close' }
          ],
          items: [
            { component: 'avatar', left: true, items: [
              { component: 'icon', name: 'mdi-checkbox-marked-circle' }
            ]},
            { component: 'text', itemtext: 'Confirmed' }
          ]
        },
        { component: 'chip', class: 'ma-2', close: true, color: 'teal', textColor: 'white', closeIcon: 'mdi-delete',
          evnts: [
            { event: 'click:close', method: 'close' }
          ],
          items: [
            {
              component: 'avatar', left: true, items: [
                { component: 'icon', name: 'mdi-checkbox-marked-circle' }
              ]
            },
            { component: 'text', itemtext: 'Confirmed' }
          ]
        }
      ]
    }
  ]
}