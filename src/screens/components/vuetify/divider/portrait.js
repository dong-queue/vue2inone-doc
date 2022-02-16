export default {
  items: [
    { component: 'row', justify: 'center', items: [
      { component: 'col', cols: 12, sm: 8, items: [
        { component: 'card', items: [
          { component: 'cardTitle', class: 'cyan darken-1', items: [
            { component: 'text', class: 'headline white--text', itemtext: 'Sarah Mcbeal' },
            { component: 'spacer' },
            { component: 'btn', dark: true, icon: true, items: [
              { component: 'icon', name: 'mdi-chevron-left' }
            ]},
            { component: 'btn', dark: true, icon: true, items: [
              { component: 'icon', name: 'mdi-pencil' }
            ]},
            { component: 'btn', dark: true, icon: true, items: [
              { component: 'icon', name: 'mdi-dots-vertical' }
            ]}
          ]},
          { component: 'list', items: [
            { component: 'listItem', items: [
              { component: 'listItemAction', items: [{ component: 'icon', name: 'mdi-phone' }]},
              { component: 'listItemContent', items: [{ component: 'listItemTitle', itemtext: '(650) 555-1234' }]},
              { component: 'listItemAction', items: [{ component: 'icon', name: 'mdi-message-text' }]}
            ]},
            { component: 'divider', inset: true },
            { component: 'listItem', items: [
              { component: 'listItemAction', items: [{ component: 'icon', name: 'mdi-phone' }] },
              { component: 'listItemContent', items: [{ component: 'listItemTitle', itemtext: '(323) 555-6789' }] },
              { component: 'listItemAction', items: [{ component: 'icon', name: 'mdi-message-text' }] }
            ]},
            { component: 'divider', inset: true },
            { component: 'listItem', items: [
              { component: 'listItemAction', items: [{ component: 'icon', name: 'mdi-email' }] },
              { component: 'listItemContent', items: [{ component: 'listItemTitle', itemtext: 'mcbeal@example.com' }] }
            ]},
            { component: 'divider', inset: true },
            { component: 'listItem', items: [
              { component: 'listItemAction', items: [{ component: 'icon', name: 'mdi-map-marker' }] },
              { component: 'listItemContent', items: [{ component: 'listItemTitle', itemtext: 'Orlando, FL 79938' }] }
            ]},
          ]},
          { component: 'img', src: 'https://picsum.photos/700?image=996', height: '200px' }
        ]}
      ]}
    ]}
  ]
}