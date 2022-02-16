export default {
  items: [
    { component: 'row', justify: 'center', items: [
      { component: 'col', cols: 12, sm: 8, md: 6, items: [
        { component: 'card', items: [
          { component: 'toolbar', color: 'orange lighten-1', dark: true, 
            appBarNavIcon: true,
            title: { itemtext: 'Message Board' },
            items: [
              { component: 'spacer' },
              { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-magnify' }]}
            ]
          },
          { component: 'list', twoLine: true, itemsfor: 'items', subItemName: 'item', items: [
            { component: 'subheader', if: [{ target: 'item.header' }], inset: true, itemtext: 'item.header' },
            { component: 'divider', if: [{ target: 'item.divider' }], inset: true },
            {
              component: 'listItem', if: [{ target: 'item.header', ne: true }, { target: 'item.divider', ne: true}], ripple: true, items: [
                { component: 'listItemAvatar', items: [{ component: 'img', src: 'item.avatar' }]},
              { component: 'listItemContent', items: [
                { component: 'listItemTitle', items: [{ component: 'text', itemtext: 'item.title'}] },
                { component: 'listItemSubtitle', items: [{ component: 'text', itemtext: 'item.subtitle' }] }
              ]}
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}