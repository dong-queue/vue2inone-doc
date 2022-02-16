export default {
  items: [
    { component: 'banner', singleLine: true, 
      evnts: [{ event: 'click:icon', method: 'alert' }],
      slots: [
        { name: 'icon', items: [
          { component: 'icon', color: 'warning', size: '36', name: 'mdi-wifi-strength-alert-outline'},
        ]},
        { name: 'default', items: [
          { component: 'text', class: 'px-3', itemtext: 'Unable to verify your Internet connection' }
        ]},
        { name: 'actions', items: [
          { component: 'btn', color: 'primary', text: true, itemtext: 'Connecting Settings' }
        ]}
      ]
    }
  ]
}