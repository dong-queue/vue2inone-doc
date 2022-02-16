export default {
  items: [
    { component: 'row', items: [
      { component: 'col', items: [
        { component: 'sheet', height: '400', items: [
          { component: 'calendar', ref: 'calendar', now: 'today', value: 'today', 
            events: 'events', color: 'primary', type: 'week',
            evnts: [
              { event: 'change', method: 'getEvents' }
            ]
          }
        ]}
      ]}
    ]}
  ]
}