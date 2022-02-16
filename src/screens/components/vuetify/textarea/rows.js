export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'texta', label: 'One row', autoGrow: true, outlined: true, rows: 1, rowHeight: 15 }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'texta', filled: true, 'auto-grow': true, label: 'Two rows', rows: 2, 'row-heidght': 20 }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'texta', label: 'Three rows', 'auto-grow': true, outlined: true, rows: 3, 'row-height': 25, shaped: true }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'texta', filled: true, label: 'Four rows', 'auto-grow': true, rows: 4, 'row-height': 30, shaped: true }
      ]}
    ]}
  ]
}