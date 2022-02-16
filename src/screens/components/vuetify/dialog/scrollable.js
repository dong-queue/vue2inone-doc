export default {
  items: [
    { component: 'row', justify: 'center', items: [
      { component: 'btn', color: 'primary', dark: true, itemtext: 'Open Dialog', 
        evnts: [{ event: 'click', method: 'changeDialog', value: true }]
      },
      { component: 'dialog', model: 'dialog', scrollable: true, 'max-width': '300px', items: [
        { component: 'card', items: [
          { component: 'cardTitle', itemtext: 'Select Country' },
          { component: 'divider' },
          { component: 'cardText', style: 'height: 300px', items: [
            { component: 'radioGroup', model: 'dialogm1', column: true, 
              itemsfor: 'radio',
              items: [
                { component: 'radio', label: 'subItem.label', value: 'subItem.value' }
              ]
            }
          ]},
          { component: 'divider' },
          { component: 'cardActions', items: [
            { component: 'btn', color: 'blue darken-1', text: true, itemtext: 'Close', evnts: [{ event: 'click', method: 'changeDialog', value: false}]},
            { component: 'btn', color: 'blue darken-1', text: true, itemtext: 'Save', evnts: [{ event: 'click', method: 'changeDialog', value: false }] }
          ]}
        ]}
      ]}
    ]}
  ]
}