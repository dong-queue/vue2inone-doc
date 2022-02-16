export default {
  items: [
    { component: 'row', items: [
      {
        component: 'expanels', popout: true, itemsfor: 5, subItemName: 'item', items: [
        { component: 'expanel', items: [
          { component: 'expansion-panel-header', itemtext: 'Item' },
          { component: 'expansion-panel-content', itemtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
        ]}
      ]}
    ]}
  ]
}