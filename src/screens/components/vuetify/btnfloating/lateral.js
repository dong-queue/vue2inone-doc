export default {
  items: [
    { component: 'card', id: 'lateral', items: [
      { component: 'toolbar', dark: true, tabs: true, flat: true, color: 'indigo', 
        appBarNavIcon: true, 
        title: { itemtext: 'Page title' },
        items: [
          { component: 'spacer' },
          { component: 'btn', icon: true, items: [
            { component: 'icon', name: 'mdi-magnify' }
          ]},
          { component: 'btn', icon: true, items: [
              { component: 'icon', name: 'mdi-dots-vertical' }
            ]
          }
        ],
        slots: [
          {
            name: 'extension', items: [
              { component: 'tabs', model: 'tabs', alignWithTitle: true, 
                tabsSlider: { color: 'pink' },
                items: [
                  { component: 'tab', href: '#one', itemtext: 'Item One' },
                  { component: 'tab', href: '#two', itemtext: 'Item Two' },
                  { component: 'tab', href: '#three', itemtext: 'Item Three' }
                ]}
            ]
          }
        ]
      }, // end toolbar
      { component: 'cardText', items: [
        { component: 'tabsItems', model: 'tabs', 
          itemsfor: ['one', 'two', 'three'], subItemName: 'content',
          items: [
            {
              component: 'tab-item', eager: true, value: 'content', items: [
              { component: 'card', height: '200px', flat: true }
            ]}
          ]
        }
      ]}, // end tabs items
      { component: 'fade-transition', items: [
        {
          component: 'btn', key: 'activeFab.icon', color: 'activeFab.color', fab: true, large: true, dark: true, bottom: true, left: true,
          items: [
            { component: 'icon', name: 'activeFab.icon' }
          ]
        }
      ]} // end btn
    ]}
  ]
}