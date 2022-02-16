export default {
  items: [
    { component: 'row', justify: 'center', items: [
      { component: 'expanels', accordion: true, 
        itemsfor: 5,
        items: [
          { component: 'expanel', items: [
            { component: 'expansion-panel-header', itemtext: 'Item' },
            { component: 'expansion-panel-content', itemtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
          ]}
        ]
      }
    ]}
  ]
}