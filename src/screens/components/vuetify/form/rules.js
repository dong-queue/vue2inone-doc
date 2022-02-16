export default {
  items: [
    { component: 'row', justify: 'space-between', items: [
      { component: 'col', cols: 12, md: 4, items: [
        { component: 'form', ref: 'form', items: [
          { component: 'txtfld', model: 'model', counter: 'max', rules: 'rules', label: 'First name' }
        ]}
      ]},
      { component: 'col', cols: 12, md: 6, items: [
        { component: 'slider', model: 'max', label: 'Max charaters'},
        { component: 'chk', model: 'allowSpaces', label: 'Allow spaces' },
        { component: 'txtfld', model: 'match', label: 'Value must match' }
      ]}
    ]}
  ]
}