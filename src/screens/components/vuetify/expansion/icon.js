const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
export default {
  items: [
    { component: 'div', items: [
      { component: 'expanels', class: 'mb-6', itemsfor: 5, items: [
        { component: 'expanel', items: [
          { component: 'expansion-panel-header', expandIcon: 'mdi-menu-down', itemtext: 'Item' },
          { component: 'expansion-panel-content', itemtext: text }
        ]}
      ]},
      { component: 'expanels', items: [
        { component: 'expanel', items: [
          { component: 'expansion-panel-header', itemtext: 'Item', slots: [{name: 'actions', items: [{component: 'icon', color: 'primary', name: '$expand' }]}]},
          { component: 'expansion-panel-content', itemtext: text }
        ]},
        { component: 'expanel', items: [
          { component: 'expansion-panel-header', disableIconRotate: true, itemtext: 'Item', slots: [{name: 'actions', items: [{component: 'icon', color: 'teal', name: 'mdi-check'}]}]},
          { component: 'expansion-panel-content', itemtext: text }
        ]},
        { component: 'expanel', items: [
          { component: 'expansion-panel-header', 'disable-icon-rotate': true, itemtext: 'Item', slots: [{name: 'actions', items: [{component: 'icon', color: 'error', name: 'mdi-alert-circle'}]}]},
          { component: 'expansion-panel-content', itemtext: text }
        ]}
      ]}
    ]}
  ]
}