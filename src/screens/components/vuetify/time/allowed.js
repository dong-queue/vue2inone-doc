export default {
  items: [
    { component: 'row', justify: 'space-around', items: [
      {
        component: 'time-picker', model: 'time', 'allowed-hours': 'allowedHours', 'allowed-minutes': 'allowedMinutes', 
        class: 'mt-4', format: '24hr', scrollable: true, min: '9:30', max: '22:15'
      },
      { component: 'time-picker', model: 'timeStep', allowedMinutes: 'allowedStep', class: 'mt-4', format: '24hr' }
    ]}
  ]
}