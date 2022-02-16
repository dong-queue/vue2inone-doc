export default {
  items: [
    { component: 'card', items: [
      { component: 'cardText', items: [
        { component: 'row', align: 'center', items: [
          { component: 'checkbox', model: 'includeFiles', hideDetails: true, class: 'shrink mr-2 mt-0' },
          { component: 'textfield', label: 'Include files' }
        ]},
        { component: 'row', align: 'center', items: [
          { component: 'chk', model: 'enabled', 'hide-details': true, class: 'shrink mr-2 mt-0' },
          { component: 'txtfld', disabled: { value: 'enabled', func: (e) => !e }, label: 'I only work if you check the box' }
        ]}
      ]}
    ]}
  ]
}