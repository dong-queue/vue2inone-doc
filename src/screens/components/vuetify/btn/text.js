export default {
  items: [
    {
      component: 'row', align: 'center', justify: 'space-around', items: [
        {
          component: 'btn', text: true, itemtext: 'Normal'
        },
        {
          component: 'btn', text: true, color: 'primary', itemtext: 'Primary'
        },
        {
          component: 'btn', text: true, color: 'error', itemtext: 'Error'
        },
        {
          component: 'btn', text: true, disabled: true, itemtext: 'Disabled'
        },
      ]
    }
  ]
}