export default {
  items: [
    { component: 'sheet', tile: true, height: '62', class: 'd-flex justify-space-around', items: [
      { component: 'btn', icon: true, clas: 'ma-2', 
        evnts: [{ event: 'click', method: 'move', value: 'prev' }],
        items: [{component: 'icon', name: 'mdi-chevron-left'}]
      },
      { component: 'select', model: 'type', items: 'types', dense: true, 
        outlined: true, hideDetails: true, class: 'ma-2', label: 'Type'
      },
      { component: 'select', model: 'mode', items: 'modes', dense: true,
        outlined: true, hideDetails: true, class: 'ma-2', label: 'event-overlap-mode'
      },
      {
        component: 'select', model: 'weekdaySeq', items: 'weekdays', dense: true,
        outlined: true, hideDetails: true, class: 'ma-2', label: 'Weekdays'
      },
      { component: 'btn', icon: true, class: 'ma-2', 
        evnts: [{ event: 'click', method: 'move', value: 'next' }],
        items: [{ component: 'icon', name: 'mdi-chevron-right' }]
      }
    ]},
    { component: 'sheet', items: [
      {
        component: 'calendar', ref: 'calendar', model: 'calendarValue',
        weekdays: 'weekdaySeq',
        type: 'type',
        events: 'events', eventOverlapMode: 'mode', eventOverlapThreshold: 30, eventColor: 'eventColor',
        evnts: [
          { event: 'change', method: 'getEvents' }
        ]
      }
    ]}
  ]
}