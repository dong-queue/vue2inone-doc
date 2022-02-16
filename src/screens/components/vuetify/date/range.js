export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'date-picker', model: 'dates', range: true }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'text-field', model: 'dateRangeText', label: 'Date range', prependIcon: 'mdi-calendar', readonly: true },
        { component: 'text', itemtext: { value: 'dates', func: e => `model: ${e}`}}
      ] }
    ]}
  ]
}