export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: '500', items: [
      { component: 'list', shaped: true, items: [
        { component: 'list-item-group', model: 'model', multiple: true, items: [
          { component: 'div', itemsfor: 'items', items: [
            { component: 'divider', if: [{target: 'subItem', ne: true}]},
            { component: 'list-item', if: [{ target: 'subItem' }], value: 'subItem', 
              activeClass: 'deep-purple--text text--accent-4', 
              slots: [
                { name: 'default', type: 'data', slotDataName: 'slot', items: [
                  { component: 'row', class: 'mx-1', items: [
                    { component: 'list-item-content', items: [{ component: 'list-item-title', itemtext: 'subItem' }] },
                    { component: 'list-item-action', items: [{ component: 'checkbox', inputValue: 'slot.active', color: 'deep-purple accent-4' }] }
                  ]}
                ]}
              ]
            }
          ]}
        ]}
      ]}
    ]}
  ]
}