export default {
  items: [
    { component: 'col', cols: 12, sm: 6, offsetSm: 3, items: [
      { component: 'card', items: [
        { component: 'subheader', inset: 'inset', itemtext: 'Subheader' },
        { component: 'list', itemsfor: 'items', subItemName: 'item', items: [
          { component: 'list-item', if: [{ target: 'item.action' }], items: [
            { component: 'list-item-action', items: [{ component: 'icon', name: 'item.action'}] },
            { component: 'list-item-content', items: [{ component: 'list-item-title', itemtext: 'item.title'}]}
          ]},
          { component: 'divider', if: [{ target: 'item.divider', value: true }], inset: 'inset' }
        ]}
      ]}
    ]}
  ]
}