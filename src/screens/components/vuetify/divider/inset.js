export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, offsetSm: 3, items: [
        { component: 'card', items: [
          { component: 'list', 'two-line': true, itemsfor: 'items', subItemName: 'item',
            items: [
              { component: 'subheader', if: [{ target: 'item.header' }], itemtext: 'item.header' },
              { component: 'divider', if: [{ target: 'item.divider' }], inset: 'item.inset' },
              {
                component: 'list-item', if: [{ target: 'item.header', ne: true }, { target: 'item.divider', ne: true}], items: [
                  { component: 'list-item-avatar', items: [{ component: 'img', src: 'item.avatar'}]},
                { component: 'list-item-content', items: [
                  { component: 'list-item-title', items: [{component: 'text', itemtext: 'item.title'}] },
                  { component: 'list-item-subtitle', items: [{component: 'text', itemtext: 'item.subtitle'}] }
                ]}
              ]}
            ]
          }
        ]}
      ]}
    ]}
  ]
}