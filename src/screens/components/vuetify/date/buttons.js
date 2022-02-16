export default {
  items: [
    { component: 'row', items: [
      { component: 'col', class: 'my-2 px-1', cols: 12, sm: 6, items: [
        { component: 'date-picker', model: 'date', 
          evnts: [
            { event: 'contextmenu:year', method: 'contextMenu' },
            { event: 'dblclick:date', method: 'dblClick' },
            { event: 'mouseenter:month', method: 'mouseEnter' },
            { event: 'mouseleave:month', method: 'mouseLeave' }
          ]
        }
      ]},
      { component: 'col', class: 'my-2 px-1', cols: 12, sm :6, items: [
        { component: 'div', class: 'body-1 mb-2', items: [
          { component: 'icon', small: true, name: { value: 'done', func: e => e[0] ? '$checkboxOn' : '$checkboxOff' } },
        ], itemtext: 'Double click on any date' },
        { component: 'div', class: 'body-1', items: [
          { component: 'icon', small: true, name: { value: 'done', func: e => e[1] ? '$checkboxOn' : '$checkboxOff' } },
        ], itemtext: 'Move mouse cursor over any month button' },
        { component: 'div', class: 'title mb-2', itemtext: {value: 'mouseMonth', func: e => `Mouse pointer is located on: ${e || '-'}`} },
        { component: 'div', class: 'body-1', items: [
          { component: 'icon', small: true, name: { value: 'done', func: e => e[2] ? '$checkboxOn' : '$checkboxOff' } }
        ], itemtext: 'Right click on any year' }
      ]}
    ]}
  ]
}