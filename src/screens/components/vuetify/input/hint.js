export default {
  items: [
    { component: 'row', items: [
      { component: 'switch', model: 'showMessages', label: 'Show messages' },
      { component: 'input', hint: 'I am hint', persistentHint: true, messages: 'messages', itemtext: 'Input' }
    ]}
  ]
}