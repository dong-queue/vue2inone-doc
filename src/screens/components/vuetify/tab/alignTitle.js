export default {
  items: [
    { component: 'card', items: [
      { component: 'toolbar', color: 'cyan', dark: true, flat: true, 
        appBarNavIcon: true,
        title: { itemtext: 'Your Dashboard' },
        items: [
          { component: 'spacer' },
          { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-magnify' }] },
          { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-dots-vertical' }] },
        ],
        slots: [
          { name: 'extension', items: [
            {
              component: 'tabs', model: 'tab', 'align-with-title': true, 
              'tabs-slider': { color: 'yellow' },
              itemsfor:'items', subItemName: 'item', items: [
                { component: 'tab', itemtext: 'item' }
            ]}
          ]}
        ]
      },
      {
        component: 'tabs-items', model: 'tab', itemsfor: 'items', subItemName: 'item', items: [
          {
            component: 'tab-item', eager: true, items: [
          { component: 'card', flat: true, items: [{ component: 'card-text', itemtext: 'text' }] }
        ]}
      ]}
    ]}
  ]
}