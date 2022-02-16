export default {
  items: [
    { component: 'card', flat: true, items: [
      { component: 'cardText', items: [
        { component: 'row', items: [
          { component: 'col', cols: 12, sm: 6, md: 6, items: [
            { component: 'radioGroup', model: 'ex7', column: true, items: [
              { component: 'radio', label: 'red', color: 'red', value: 'red' },
              { component: 'radio', label: 'red darken-3', color: 'red darken-3', value: 'red darken-3' },
              { component: 'radio', label: 'indigo', color: 'indigo', value: 'indigo' },
              { component: 'radio', label: 'indigo darken-3', color: 'indigo darken-3', value: 'indigo darken-3' },
              { component: 'radio', label: 'orange', color: 'orange', value: 'orange' },
              { component: 'radio', label: 'orange darken-3', color: 'orange darken-3', value: 'orange darken-3' },
            ]}
          ]},
          { component: 'col', cols: 12, sm: 6, md: 6, items: [
            { component: 'radioGroup', model: 'ex8', column: true, items: [
              { component: 'radio', label: 'primary', color: 'primary', value: 'primary' },
              { component: 'radio', label: 'secondary', color: 'secondary', value: 'secondary' },
              { component: 'radio', label: 'success', color: 'success', value: 'success' },
              { component: 'radio', label: 'info', color: 'info', value: 'info' },
              { component: 'radio', label: 'warning', color: 'warning', value: 'warning' },
              { component: 'radio', label: 'error', color: 'error', value: 'error' },
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}