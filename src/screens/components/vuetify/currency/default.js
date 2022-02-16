export default {
  items: [
    { component: 'container', items: [
      { component: 'row', items: [
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'currency', model: 'value1', label: 'Default', reverse: true }
        ]},
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'currency', model: 'value2', label: 'Computes number rounded to precision.', precision: 2, reverse: true}
        ]},
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'currency', model: 'value3', label: 'Negative value', negative: true, reverse: true }
        ]},
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'currency', model: 'value4', label: 'Computes number rounded up to precision.', precision: 2, roundType: 'ceil', reverse: true }
        ]},
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'currency', model: 'value1', label: 'Rule', rules: 'rules', reverse: true }
        ]},
        { component: 'col', cols: 12, sm: 6, items: [
          { component: 'currency', model: 'value5', label: 'Computes number rounded down to precision.', precision: 2, 'round-type': 'floor', reverse: true }
        ]}
      ]}
    ]}
  ]
}