export default {
  items: [
    { component: 'text-field', slots:[
      { name: 'label', items: [
        { component: 'text', itemtext: 'What about <strong>icon</strong> here? '},
        { component: 'icon', style: 'vertical-align: middle', name: 'mdi-file-find' }
      ]}
    ]}
  ]
}