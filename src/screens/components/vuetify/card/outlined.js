export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: 344, outlined: true,
      items: [
        { component: 'listItem', threeLine: true, items: [
          { component: 'listItemContent', items: [
            { component: 'div', class: 'overline mb-4', itmetext: 'OVERLINE' },
            { component: 'listItemTitle', class: 'headline mb-1', itemtext: 'Headline 5' },
            { component: 'listItemSubtitle', itemtext: 'Greyhound divisely hello coldly fonwderfully' }
          ]},
          { component: 'listItemAvatar', tile: true, size: 80, color: 'grey' },
        ]},
        { component: 'cardActions', items: [
          { component: 'btn', outlined: true, rounded: true, text: true, itemtext: 'Button' }
        ]}
      ]
    }
  ]
}