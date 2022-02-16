export default {
  items: [
    {
      component: 'row', class: 'ma-2', justify: 'space-around', items: [
        { component: 'col', cols: 2, items: [
          { component: 'btn', small: true, itemtext: 'Show/Hide Chart', evnts: [{ event: 'click', method: 'show' }] },
        ]},
        { component: 'col', cols: 4, items: [
          { component: 'btn', small: true, itemtext: 'Show Legend', evnts: [{ event: 'click', value: true, method: 'setLegendEnabled' }] },
          { component: 'btn', small: true, itemtext: 'Hide Legend', evnts: [{ event: 'click', value: false, method: 'setLegendEnabled' }] }
        ]},
        { component: 'col', cols: 6, items: [
          { component: 'text', itemtext: 'Legend Position: ' },
          { component: 'btn', small: true, itemtext: 'right', evnts: [{ event: 'click', value: 'right', method: 'updateLegendPosition' }] },
          { component: 'btn', small: true, itemtext: 'bottom', evnts: [{ event: 'click', value: 'bottom', method: 'updateLegendPosition' }] },
          { component: 'btn', small: true, itemtext: 'left', evnts: [{ event: 'click', value: 'left', method: 'updateLegendPosition' }] },
          { component: 'btn', small: true, itemtext: 'top', evnts: [{ event: 'click', value: 'top', method: 'updateLegendPosition' }] },
        ]}
      ]
    },
    {
      component: 'card', height: 300,  items: [
      {
        component: 'agChart', class: 'sm8', style: 'width :100%; height: 300px;', isShowChart: 'isShowChart',
        chartOptions: 'options'
      }
    ]}
  ]
}