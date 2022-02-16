export default {
  items: [
    { component: 'row', class: 'fill-height', items: [
      { component: 'col', items: [
        { component: 'sheet', height: '64', items: [
          { component: 'toolbar', flat: true, items: [
            { component: 'btn', outlined: true, class: 'mr-4', color: 'grey darken-2', 
              evnts: [
                { event: 'click', method: 'setToday' }
              ],
              itemtext: 'Today'
            },
            { component: 'btn', fab: true, text: true, small: true, color: 'grey darken-2', 
              evnts: [
                { event: 'click', method: 'move', value: 'prev' }
              ],
              items: [
                { component: 'icon', name: 'mdi-chevron-left' }
              ]
            },
            {
              component: 'btn', fab: true, text: true, small: true, color: 'grey darken-2',
              evnts: [
                { event: 'click', method: 'move', value: 'next' }
              ],
              items: [
                { component: 'icon', name: 'mdi-chevron-right' }
              ]
            },
            { component: 'text', if: [{ target: 'calendar' }], class: 'my-0', itemtext: 'calendar.title' },
            { component: 'spacer', },
            {
              component: 'menu', model: 'isShowMenu', bottom: true, right: true, 
              // activator: 'btnElement',
              slots: [
                { name: 'activator', type: 'data', items: [
                  {
                    component: 'btn', outlined: true, color: 'grey darken-2', attrs: 'slotData.attrs', on: 'slotData.on', 
                    items: [
                      { component: 'text', itemtext: 'typeToLabel[type]' },
                      { component: 'icon', right: true, name: 'mdi-menu-down' }
                    ]
                  }
                ]},
              ],
              items: [
                { component: 'list', items: [
                  { component: 'listItem', evnts: [ { event: 'click', method: 'changeType', value: 'day' }],
                    items: [{ component: 'listItemTitle', itemtext: 'Day' }]
                  },
                  { component: 'listItem', evnts: [ { event: 'click', method: 'changeType', value: 'week' }],
                    items: [{ component: 'listItemTitle', itemtext: 'Week' }]
                  },
                  { component: 'listItem', evnts: [ { event: 'click', method: 'changeType', value: 'month' }],
                    items: [{ component: 'listItemTitle', itemtext: 'Month' }]
                  },
                  { component: 'listItem', evnts: [ { event: 'click', method: 'changeType', value: '4day' }],
                    items: [{ component: 'listItemTitle', itemtext: '4 days' }]
                  },
                ]}
              ]
            }
          ]}
        ]},
        { component: 'sheet', height: '600', items: [
          { component: 'calendar', ref: 'calendar', model: 'focus', color: 'primary', events: 'events', 
            eventColor: 'eventColor', type: 'type',
            evnts: [
              { event: 'click:event', method: 'showEvent' },
              { event: 'click:more', method: 'viewDay' },
              { event: 'click:date', method: 'viewDay' },
              { event: 'change', method: 'updateRange' }
            ]
          },
          { component: 'menu', model: 'selectedOpen', closeOnContentClick: false, activator: 'selectedElement', offsetX: true,
            items: [
              { component: 'card', color: 'grey lighten-4', minWidth: '350px', flat: true,
                items: [
                  { component: 'toolbar', color: 'selectedEvent.color', dark: true, items: [
                    { component: 'btn', icon: true, items: [ { component: 'icon', name: 'mdi-pencil' } ] },
                    { component: 'text', html: 'selectedEvent.name' },
                    { component: 'spacer' },
                    { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-heart' }] },
                    { component: 'btn', icon: true, items: [ { component: 'icon', name: 'mdi-dots-vertical' } ] }
                  ]},
                  { component: 'cardText', itemtext: 'selectedEvent.details' },
                  { component: 'cardActions', items: [
                    { component: 'btn', text: true, color: 'secondary', itemtext: 'Cancel', 
                      evnts: [{ event: 'click', method: 'closeOpen'}]
                    }
                  ]}
                ]
              }
            ]
          }
        ]}
      ]}
    ]}
  ]
}