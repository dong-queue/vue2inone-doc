export default {
  items: [
    { component: 'row', class: 'dark--text', items: [
      { component: 'col', cols: 6, items: [{ component: 'text', itemtext: 'on' }]},
      { component: 'col', cols: 6, items: [{ component: 'text', itemtext: 'off' }] },
    ]},
    { component: 'row', items: [
      { component: 'col', cols: 6, items: [
        { component: 'swc', color: 'primary', value: true, inputValue: true }
      ]},
      { component: 'col', cols: 6, items: [
        { component: 'swc', color: 'primary' }
      ]}
    ]},
    { component: 'row', class: 'dark--text', items: [
      { component: 'col', cols: 6, items: [{ component: 'text', itemtext: 'on disabled' }]},
      { component: 'col', cols: 6, items: [{ component: 'text', itemtext: 'off disabled' }] },
    ]},
    { component: 'row', items: [
      { component: 'col', cols: 6, items: [
        { component: 'swc', color: 'primary', value: true, inputValue: true, disabled: true }
      ]},
      { component: 'col', cols: 6, items: [
        { component: 'swc', color: 'primary', disabled: true }
      ]}
    ]},
    { component: 'row', class: 'dark--text', items: [
      { component: 'col', cols: 6, items: [{ component: 'text', itemtext: 'on loading' }]},
      { component: 'col', cols: 6, items: [{ component: 'text', itemtext: 'off loading' }] },
    ]},
    { component: 'row', items: [
      { component: 'col', cols: 6, items: [
        { component: 'swc', color: 'primary', value: true, inputValue: true, loading: 'warning' }
      ]},
      { component: 'col', cols: 6, items: [
        { component: 'swc', color: 'primary', loading: 'warning' }
      ]},
    ]}
  ]
}