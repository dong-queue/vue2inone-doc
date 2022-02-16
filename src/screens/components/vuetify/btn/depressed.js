export default {
  items: [
    {
      component: 'row', align: 'center', justify: 'space-around', items: [
        {
          component: 'btn', depressed: true, itemtext: 'Normal', color: 'grey lighten-3', 
          evnts: [
            { event: 'click', method: 'click' }
          ]  
        },
        {
          component: 'btn', depressed: true, itemtext: 'Primary', 
          evnts: [
            { event: 'click', method: 'click' }
          ]  
        },
        {
          component: 'btn', depressed: true, itemtext: 'Error', color: 'error', 
          evnts: [
            { event: 'click', method: 'click' }
          ]  
        },
        {
          component: 'btn', depressed: true, itemtext: 'Disabled', disabled: true,
          evnts: [
            { event: 'click', method: 'click' }
          ]  
        }
      ]
    }
  ]
}