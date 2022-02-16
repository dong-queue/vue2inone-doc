export default {
  items: [
    { component: 'div', items: [
      { component: 'div', class: 'd-flex', items: [
        { component: 'checkbox', model: 'disabled', label: 'Disabled' }
      ]},
      { component: 'expanels', model: 'panel', disabled: 'disabled', multiple: true, items: [
        { component: 'expanel', items: [
          { component: 'expansion-panel-header', itemtext: 'Panel 1' },
          { component: 'expansion-panel-content', itemtext: 'Some content' }
        ]},
        { component: 'expanel', items: [
          { component: 'expansion-panel-header', itemtext: 'Panel 2' },
          { component: 'expansion-panel-content', itemtext: 'Some content' }
        ]},
        { component: 'expanel', items: [
          { component: 'expansion-panel-header', itemtext: 'Panel 3' },
          { component: 'expansion-panel-content', itemtext: 'Some content' }
        ]}
      ]}
    ]}
  ]
}