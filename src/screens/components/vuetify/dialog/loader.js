export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      { component: 'btn', disabled: 'dialog', loading: 'dialog', class: 'white--text', color: 'purple darken-2',
        itemtext: 'Start Loading', evnts: [{event: 'click', method: 'changeDialog', value: true }]
      },
      { component: 'dialog', model: 'dialog', hideOverlay: true, persistent: true, width: '300', items: [
        { component: 'card', color: 'primary', dark: true, items: [
          { component: 'cardText', items: [
            { component: 'text', itemtext: 'Please stand by' },
            { component: 'progressL', indeterminate: true, color: 'white', class: 'mb-0' }
          ]}
        ]}
      ]}
    ]}
  ]
}