export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'texta', class: 'mx-2', label: 'prepend-icon', rows: 1, prependIcon: 'mdi-comment' }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'texta', appendIcon: 'mdi-comment', class: 'mx-2', label: 'append-icon', rows: 1 }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'texta', prependInnerIcon: 'mdi-comment', class: 'mx-2', label: 'prepend-inner-icon', rows: 1 }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'texta', appendOuterIcon: 'mdi-comment', class: 'mx-2', label: 'appendOuterIcon', rows: 1 }
      ]}
    ]}
  ]
}