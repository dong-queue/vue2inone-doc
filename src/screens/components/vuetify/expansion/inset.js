export default {
  items: [
    { component: 'row', jsutify: 'center', items: [
      {
        component: 'expansion-panels', inset: true, itemsfor: 5, items: [
          {
            component: 'expansion-panel', items: [
              { component: 'expansion-panel-header', itemtext: 'Item' },
              { component: 'expansion-panel-content', itemtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
            ]
          }
        ]
      }
    ]}
  ]
}