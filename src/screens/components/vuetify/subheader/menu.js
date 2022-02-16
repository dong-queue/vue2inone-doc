export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, offsetSm: 3, items: [
        { component: 'card', items: [
          { component: 'toolbar', color: 'teal', dark: true, 
            appBarNavIcon: true,
            title: { itemtext: 'Manage' },
            items: [
              { component: 'spacer' },
              { component: 'btn', icon: true, items: [{component: 'icon', name: 'mdi-dots-vertical'}] }
            ]
          },
          { component: 'list', itemsfor: 'items', items: [
            {
              component: 'list-item', if: [{ target: 'subItem.action'}], items: [
              { component: 'list-item-action', items: [{component: 'icon', name: 'subItem.action'}] },
                { component: 'list-item-content', items: [{ component: 'list-item-title', itemtext: 'subItem.title'}]}
            ]},
            { component: 'divider', if: [{ target: 'subItem.divider'}]},
            { component: 'subheader', if: [{ target: 'subItem.header' }], itemtext: 'subItem.header' },
            {}
          ]}
        ]}
      ]}
    ]}
  ]
}