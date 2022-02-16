export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, class: 'pa-12', items: [
        { component: 'range', 'tick-labels': 'seasons', value: [0, 1], min: '0', max: '3', ticks: 'always', tickSize: 4,
          slots: [
            {
              name: 'thumb-label', type: 'data', slotDataName: 'props', items: [
              { component: 'icon', dark: true, name: {value: '_self', func: ({icons, props}) => icons[props.value]} }
            ]
          }]
        }
      ]}
    ]}
  ]
}