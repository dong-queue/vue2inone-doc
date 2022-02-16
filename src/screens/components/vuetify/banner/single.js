export default {
  items: [
    { component: 'card', items: [
      { component: 'toolbar', flat: true, title: { itemtext: 'My Document' },
        items: [ 
          { component: 'spacer' },
          { component: 'switch', model: 'isSticky', label: 'Sticky Banner', hideDetails: true }
        ]
      },
      { component: 'banner', singleLine: true, sticky: 'isSticky', itemtext: `We can't save your edits while you are in offline mode.`,
        slots: [
          { name: 'actions', items: [
            { component: 'btn', text: true, color: 'deep-purple accent-4', itemtext: 'Get Online' }
          ]}
        ]
      },
      { component: 'card-text', class: 'grey lighten-4', items: [
        { component: 'sheet', maxWidth: '800', height: '300', class: 'mx-auto' }
      ]}
    ]}
  ]
}