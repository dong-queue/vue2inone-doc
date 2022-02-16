export default {
  items: [
    { component: 'card', items: [
      { component: 'row', class: 'ma-1', items: [
        { component: 'col', cols: 12, sm: 6, md: 4, items: [
          { component: 'checkbox', model: 'bind.activatable', label: 'Activatable' },
          { component: 'checkbox', model: 'bind.dense', label: 'Dense' },
          { component: 'checkbox', model: 'bind.hoverable', label: 'Hoverable' },
        ]},
        { component: 'col', cols: 12, sm: 6, md: 4, items: [
          { component: 'checkbox', model: 'bind.openAll', label: 'Open All' },
          { component: 'checkbox', model: 'bind.rounded', label: 'Rounded' },
          { component: 'checkbox', model: 'bind.shaped', label: 'Shaped' },
        ]},
        { component: 'col', cols: 12, sm: 6, md: 4, items: [
          { component: 'text-field', model: 'bind.color', label: 'Color' },
          { component: 'checkbox', model: 'bind.selectable', label: 'Selectable' },
          { component: 'text-field', model: 'bind.selectedColor', label: 'selectedColor' },
        ]},
      ]},
      { component: 'treeview', items: 'items', bind: 'bind' }
    ]} 
  ]
}