export default {
  items: [
    { component: 'crd', flat: true, color: 'transparent', items: [
      { component: 'subhrd', itemtext: 'Rules' },
      { component: 'crdtxt', class: 'pt-0', items: [
        { 
          component: 'sld', model: 'value', rules: 'rules', label: 'How many?', 
          step: 10, 'thumb-label': 'always', ticks: true 
        }
      ]},
      { component: 'subhrd', itemtext: 'Persistent hint' },
      { component: 'crdtxt', class: 'pt-0', items: [
        { 
          component: 'sld', model: 'value', rules: 'rules', hint: '40 in stock', label: 'How many?', 
          persistentHint: true, step: 10, thumbLabel: 'always', ticks: true 
        }
      ]}
    ]}
  ]
}