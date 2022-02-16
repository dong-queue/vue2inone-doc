export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'text-field', model: 'title', rules: ['rules.required', 'rules.counter'], label: 'Title', counter: true, maxlength: 20 }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'text-field', model: 'email', rules: ['rules.required', 'rules.email'], label: 'E-mail', }
      ]},
    ]}
  ]
}