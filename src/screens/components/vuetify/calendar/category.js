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
              itemtext: 'setToday'
            },
            {
              component: 'btn', fab: true, text: true, small: true, color: 'grey darken-2',
              evnts: [
                { event: 'click', method: 'move', value: 'prev' }
              ],
              items: [
                { component: 'icon', small: true, name: 'mdi-chevron-left' }
              ]
            },
            {
              component: 'btn', fab: true, text: true, small: true, color: 'grey darken-2',
              evnts: [
                { event: 'click', method: 'move', value: 'next' }
              ],
              items: [
                { component: 'icon', small: true, name: 'mdi-chevron-right' }
              ]
            },
            { component: 'text', if: [{target: 'calendar'}], itemtext: 'calendar.title'},
            { component: 'spacer' }
          ]}
        ]},
        { component: 'sheet', height: '600', items: [
          { component: 'calendar', ref: 'calendar', model: 'focus', color: 'primary', type: 'category',
            categoryShowAll: true, categories: 'categories', events: 'events', eventColor: 'eventColor',
            evnts: [
              { event: 'change', method: 'fetchEvents'}
            ]
          }
        ]}
      ]}
    ]}
  ]
}