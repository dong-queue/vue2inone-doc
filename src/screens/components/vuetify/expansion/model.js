export default {
  items: [
    { component: 'div', items: [
      { component: 'div', class: 'text-center d-flex pb-4', items: [
        { component: 'btn', itemtext: 'all', evnts: [{event: 'click', method: 'all'}]},
        { component: 'div', itemtext: 'panel' },
        { component: 'btn', itemtext: 'none', evnts: [{ event: 'click', method: 'none' }] },
      ]},
      { component: 'expanels', model: 'panel', multiple: true, itemsfor: 'items', subItemName: 'item', items: [
        { component: 'expanel', items: [
          { component: 'expansion-panel-header', itemtext: {value: 'item', func: (e) => `Header ${e}`}},
          { component: 'expansion-panel-content', itemtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
        ]}
      ]}
    ]}
  ]
}