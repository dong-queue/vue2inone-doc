export default {
  items: [
    { component: 'row', class: 'fill-height', items: [
      { component: 'col', items: [
        { component: 'sheet', height: '600', items: [
          { component: 'calendar', ref: 'calendar', model: 'value', color: 'primary', type: '4day',
            events: 'events', eventColor: 'eventColor', eventRipple: false, 
            evnts: [
              { event: 'change', method: 'getEvents' },
              { event: 'mousedown:event', method: 'startDrag' },
              { event: 'mousedown:time', method: 'startTime' },
              { event: 'mousemove:time',  method: 'mouseMove' },
              { event: 'mouseup:time', method: 'endDrag' },
              { event: 'mouseleave.native', method: 'cancelDrag' }
            ],
            slots: [
              { name: 'event', type: 'data', items: [
                { component: 'text', class: 'v-event-draggable', html: { value: 'slotData.eventSummary', func: e => e()} },
                { class: 'v-event-drag-bottom', if: [{target: 'slotData.timed'}], evnts: [{ event: 'mousedown.stop', method: 'extendBottom', value: 'slotData.event' }]}
              ]}
            ]
          }
        ]}
      ]}
    ]}
  ]
}